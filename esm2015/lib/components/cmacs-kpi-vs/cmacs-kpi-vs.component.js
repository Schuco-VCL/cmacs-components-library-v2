import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CeldType } from '../core/enums/CeldType.enum';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/grid";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-kpioverview/cmacs-kpioverview.component";
import * as i4 from "../cmacs-compact-table/cmacs-compact-table.component";
import * as i5 from "ng-zorro-antd/skeleton";
const _c0 = ["columnTemplate"];
function CmacsKpiVsComponent_cmacs_kpi_overview_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-kpi-overview", 7);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", item_r6)("colors", ctx_r0.colorsScheme)("showLegend", false)("view", ctx_r0.view)("titleKPI", ctx_r0.kpiColumns[i_r7].nameKpi);
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
const _c1 = function () { return { rows: 8 }; };
function CmacsKpiVsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-skeleton", 9);
} if (rf & 2) {
    i0.ɵɵproperty("nzActive", true)("nzParagraph", i0.ɵɵpureFunction0(2, _c1));
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
    } }, inputs: { view: "view", data: "data" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 3, consts: [[1, "sd-content"], ["nz-row", "", 1, "chart-content"], ["type", "doughnut", 3, "data", "colors", "showLegend", "view", "titleKPI", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["columnTemplate", ""], ["type", "doughnut", 3, "data", "colors", "showLegend", "view", "titleKPI"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [3, "nzActive", "nzParagraph"], [1, "chart-dot"]], template: function CmacsKpiVsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsKpiVsComponent_cmacs_kpi_overview_2_Template, 1, 5, "cmacs-kpi-overview", 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLXZzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktdnMvY21hY3Mta3BpLXZzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktdnMvY21hY3Mta3BpLXZzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLEtBQUssRUFBZ0MsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztJQ0NuRCx3Q0FFcUI7Ozs7O0lBRjJELDhCQUFhLCtCQUFBLHFCQUFBLHFCQUFBLDZDQUFBOzs7O0lBTTdGLDhDQUUyQjtJQUYyRCxrUEFBMEI7SUFFckYsaUJBQXNCOzs7SUFGa0IsdUNBQWtCLGdDQUFBLGtCQUFBLGNBQUEsb0JBQUEseUJBQUEsMEJBQUEseUJBQUE7Ozs7SUFPdkYsaUNBQXlFOztJQUE1RCwrQkFBaUIsMkNBQUE7OztJQUk5QiwwQkFBOEQ7OztJQUF2Qyw2Q0FBZ0M7O0FETXpELE1BQU0sT0FBTyxtQkFBbUI7SUEyQjlCLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBakJoQyxZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsV0FBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNoRCxNQUFDLEdBQUcsQ0FB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QyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUNELENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztzRkE3SVUsbUJBQW1CO3dEQUFuQixtQkFBbUI7K0JBRU8sV0FBVzs7Ozs7UUM1QmxELDhCQUF3QjtRQUV0Qiw4QkFBa0M7UUFDaEMsa0dBRXFCO1FBQ3ZCLGlCQUFNO1FBRU4sOEJBQXFDO1FBQ25DLG9HQUVpRDtRQUNuRCxpQkFBTTtRQUNSLGlCQUFNO1FBRU4scUhBRWM7UUFFZCxxSEFFYzs7O1FBbEIyQixlQUFZO1FBQVoscUNBQVk7UUFNM0IsZUFBNkI7UUFBN0Isb0RBQTZCLGlCQUFBOzt1RkRpQjFDLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDO3FGQUdvRSxjQUFjO2tCQUFoRixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBR3hELElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS1BJIH0gZnJvbSAnLi4vY21hY3Mta3BpL2NtYWNzLWtwaS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDZWxkVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvQ2VsZFR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5cclxuaW50ZXJmYWNlIFJvd0lucHV0IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWVzOiBudW1iZXJbXTtcclxuICBpc0NoaWxkOiBib29sZWFuO1xyXG4gIGNoaWxkcmVuOiBSb3dJbnB1dFtdO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2x1bW5JbnB1dCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hbWVLcGk6IHN0cmluZztcclxuICBoYXNLcGk6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWtwaS12cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWtwaS12cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLXZzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NLcGlWc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29sdW1uVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IGZhbHNlIH0pIGNvbHVtblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IHsgY29sdW1uczogQ29sdW1uSW5wdXRbXSwgcm93czogUm93SW5wdXRbXSB9O1xyXG5cclxuICAvLyB0YWJsZVxyXG4gIGRhdGFUYWJsZSE6IGFueVtdO1xyXG4gIGNvbmZpZ3VyYXRpb24hOiBHcmlkQ29uZmlnO1xyXG5cclxuICBzY3JvbGxZID0gMjAwO1xyXG4gIHNjcm9sbCA9IHsgeDogJzQzNHB4JywgeTogdGhpcy5zY3JvbGxZICsgJ3B4JyB9O1xyXG4gIHAgPSAxO1xyXG5cclxuICBjb2wyID0gMTUwO1xyXG4gIGNvbDMgPSA3MDtcclxuICBsb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgLy8gY2hhcnRcclxuICBzaG93Q2hhcnQgPSBmYWxzZTtcclxuICBtaW5XaWR0aCA9IDQzNDtcclxuICBsaXN0S3BpOiBLUElbXVtdID0gW107XHJcbiAga3BpQ29sdW1uczogQ29sdW1uSW5wdXRbXTtcclxuICBjb2xvcnNTY2hlbWU6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxsS1BJKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcblxyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q29uZmlndXJhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldERhdGEoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgbGV0IHAgPSAxO1xyXG4gICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgIHAgPSB0aGlzLnZpZXdbMV0gKiAwLjUgPiB0aGlzLnNjcm9sbFkgPyB0aGlzLnZpZXdbMV0gKiAwLjUgLyB0aGlzLnNjcm9sbFkgOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGwgPSB7IHg6ICczMDBweCcsIHk6IHRoaXMuc2Nyb2xsWSAqIHAgKyAncHgnIH07XHJcbiAgfVxyXG5cclxuICByZXNpemUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMudmlld1swXTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3dpZHRofXB4YCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gIH1cclxuXHJcbiAgZmlsbEtQSSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29sb3JzU2NoZW1lID0gdGhpcy5kYXRhLnJvd3MubWFwKHggPT4geC5jb2xvcik7XHJcbiAgICB0aGlzLmtwaUNvbHVtbnMgPSB0aGlzLmRhdGEuY29sdW1ucy5maWx0ZXIoZCA9PiBkLmhhc0twaSk7XHJcbiAgICB0aGlzLmtwaUNvbHVtbnMuZm9yRWFjaCgoYywgaW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5saXN0S3BpLnB1c2godGhpcy5kYXRhLnJvd3MubWFwKHIgPT4gKHsgY291bnQ6IHIudmFsdWVzW2luZGV4XSwgZGVzY3JpcHRpb246ICcnIH0gYXMgS1BJKSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0ge1xyXG4gICAgICAvLyBjb2x1bW4gd2l0aCBkb3RcclxuICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2VsZFR5cGU6IENlbGRUeXBlLlRlbXBsYXRlUmVmLFxyXG4gICAgICAgICAgZGlzcGxheTogJycsXHJcbiAgICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcclxuICAgICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICAgIHdpZHRoOiAnNzBweCcsXHJcbiAgICAgICAgICBtaW5XaWR0aDogNzAsXHJcbiAgICAgICAgICBtYXhXaWR0aDogMTIwLFxyXG4gICAgICAgICAgcmVzaXphYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgZmllbGRJZDogJ2tleScsXHJcbiAgICAgIGZpZWxkUmF0ZTogJ2ZhdidcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5kYXRhLmNvbHVtbnMuZm9yRWFjaCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY29sV2lkdGggPSAoeC5oYXNLcGkgPyB0aGlzLmNvbDMgOiB0aGlzLmNvbDIpO1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZmllbGRzLnB1c2goe1xyXG4gICAgICAgIGNlbGRUeXBlOiBDZWxkVHlwZS5EZWZhdWx0LFxyXG4gICAgICAgIGVkaXRUZW1wbGF0ZTogMyxcclxuICAgICAgICBkaXNwbGF5OiB4Lm5hbWUsXHJcbiAgICAgICAgcHJvcGVydHk6IHguaGFzS3BpID8gYHByb3Ake2luZGV4fWAgOiAnbmFtZScsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHdpZHRoOiBjb2xXaWR0aCAqIHRoaXMucCArICdweCcsXHJcbiAgICAgICAgbWluV2lkdGg6IGNvbFdpZHRoICogdGhpcy5wIC0gMTAsXHJcbiAgICAgICAgbWF4V2lkdGg6IGNvbFdpZHRoICogdGhpcy5wICsgMTAwLFxyXG4gICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5kYXRhVGFibGUgPSBbXTtcclxuICAgIHRoaXMuZGF0YS5yb3dzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YVRhYmxlLnB1c2godGhpcy5nZXRJdGVtVGFibGUoeCkpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1UYWJsZSh4OiBSb3dJbnB1dCk6IGFueSB7XHJcbiAgICBjb25zdCBuZXdJdGVtOiBhbnkgPSB7XHJcbiAgICAgIGtleTogeC5pZCxcclxuICAgICAgY29sb3I6IHtcclxuICAgICAgICByZWY6IHRoaXMuY29sdW1uVGVtcGxhdGUsXHJcbiAgICAgICAgY29udGV4dDoge1xyXG4gICAgICAgICAgY29sb3I6IHguY29sb3JcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6IHgubGFiZWxcclxuICAgIH07XHJcbiAgICBpZiAoeC5jaGlsZHJlbi5sZW5ndGggPiAwIHx8ICF4LmlzQ2hpbGQpIHtcclxuICAgICAgbmV3SXRlbS5jaGlsZHJlbiA9IHguY2hpbGRyZW4ubWFwKGUgPT4gdGhpcy5nZXRJdGVtVGFibGUoZSkpO1xyXG4gICAgfVxyXG4gICAgeC52YWx1ZXMuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICBuZXdJdGVtW2Bwcm9wJHtpICsgMX1gXSA9IHYudG9GaXhlZCgyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ld0l0ZW07XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJzZC1jb250ZW50XCI+XHJcbiAgPCEtLSBDaGFydCAtLT5cclxuICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWNvbnRlbnRcIj5cclxuICAgIDxjbWFjcy1rcGktb3ZlcnZpZXcgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdEtwaTsgbGV0IGkgPSBpbmRleFwiIHR5cGU9XCJkb3VnaG51dFwiIFtkYXRhXT1cIml0ZW1cIiBbY29sb3JzXT1cImNvbG9yc1NjaGVtZVwiXHJcbiAgICAgIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW3ZpZXddPVwidmlld1wiIFt0aXRsZUtQSV09XCJrcGlDb2x1bW5zW2ldLm5hbWVLcGlcIiA+XHJcbiAgICA8L2NtYWNzLWtwaS1vdmVydmlldz5cclxuICA8L2Rpdj5cclxuICA8IS0tIGRhdGEgdGFibGUgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1kYXRhLXRhYmxlXCI+XHJcbiAgICA8Y21hY3MtY29tcGFjdC10YWJsZSAqbmdJZj1cIiFsb2FkaW5nICYmIGRhdGFUYWJsZTsgZWxzZSBlbHNlQmxvY2tcIiBbZGF0YV09XCJkYXRhVGFibGVcIiBbKGNvbmZpZyldPVwiY29uZmlndXJhdGlvblwiXHJcbiAgICAgIFtpbmRlbnRTaXplXT1cIjQwXCIgW2xvZ3NdPVwidHJ1ZVwiIFtleHBhbmRhYmxlXT1cInRydWVcIiBbc2Nyb2xsXT1cInNjcm9sbFwiIFtmcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIlxyXG4gICAgICBbc2hvd1BhZ2luYXRpb25dPVwiZmFsc2VcIj48L2NtYWNzLWNvbXBhY3QtdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XHJcbiAgPG56LXNrZWxldG9uIFtuekFjdGl2ZV09XCJ0cnVlXCIgW256UGFyYWdyYXBoXT1cInsgcm93czogOCB9XCI+PC9uei1za2VsZXRvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY29sdW1uVGVtcGxhdGUgbGV0LWNvbG9yPVwiY29sb3JcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2hhcnQtZG90XCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=