import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/grid";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-kpioverview/cmacs-kpioverview.component";
import * as i4 from "../cmacs-compact-table/cmacs-compact-table.component";
import * as i5 from "ng-zorro-antd/skeleton";
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
    i0.ɵɵlistener("configChange", function CmacsKpiPartialComponent_cmacs_compact_table_4_Template_cmacs_compact_table_configChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.configuration = $event; });
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
}
CmacsKpiPartialComponent.ɵfac = function CmacsKpiPartialComponent_Factory(t) { return new (t || CmacsKpiPartialComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsKpiPartialComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKpiPartialComponent, selectors: [["cmacs-kpi-partial"]], inputs: { view: "view", data: "data", columnsHeader: "columnsHeader" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 3, consts: [[1, "sd-content"], ["nz-row", "", 1, "chart-content"], ["type", "doughnut", 3, "view", "showLegend", "data", "titleKPI", "colors", "titleValue", 4, "ngIf"], ["nz-row", "", 1, "chart-data-table"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["type", "doughnut", 3, "view", "showLegend", "data", "titleKPI", "colors", "titleValue"], [3, "data", "config", "indentSize", "logs", "expandable", "scroll", "frontPagination", "showPagination", "configChange"], [3, "nzActive", "nzParagraph"]], template: function CmacsKpiPartialComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsKpiPartialComponent_cmacs_kpi_overview_2_Template, 1, 7, "cmacs-kpi-overview", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsKpiPartialComponent_cmacs_compact_table_4_Template, 1, 8, "cmacs-compact-table", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, CmacsKpiPartialComponent_ng_template_5_Template, 1, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(6);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.kpi);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.loading && ctx.dataTable)("ngIfElse", _r2);
    } }, directives: [i1.NzRowDirective, i2.NgIf, i3.CmacsKPIOverviewComponent, i4.CmacsCompactTableComponent, i5.NzSkeletonComponent], styles: [".chart-content[_ngcontent-%COMP%]{display:flex!important;align-items:center;justify-content:center}.sd-content[_ngcontent-%COMP%]{position:relative}  .chart-data-table cmacs-compact-table .cmacs-compact-table-input-number-icon-view{display:none}  .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs,   .chart-data-table cmacs-compact-table .cmacs-compact-table-header-logs .ant-table-row-expand-icon,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font,   .chart-data-table cmacs-compact-table .cmacs-compact-table-logs-header-th-font:hover{background-color:#fff!important}  .chart-data-table .cmacs-compact-table .ant-table-header,   .chart-data-table .cmacs-compact-table .ant-table-tbody>tr:not(.cmacs-compact-table-header-logs)>td,   .chart-data-table .cmacs-compact-table .ant-table-thead>tr>th{background-color:#f6f7fb!important}  .chart-content cmacs-kpi-overview{min-width:unset;display:unset!important;min-width:unset!important;min-height:unset!important;padding:unset!important;background-color:unset;margin-top:unset}  .chart-content .cmacs-kpi-overview-wrapper{height:unset!important;padding-top:0!important;margin-left:unset!important;margin-top:unset!important}  .chart-content .cmacs-kpi-overview-chart{top:-12px!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKpiPartialComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kpi-partial',
                templateUrl: './cmacs-kpi-partial.component.html',
                styleUrls: ['./cmacs-kpi-partial.component.css']
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { view: [{
            type: Input
        }], data: [{
            type: Input
        }], columnsHeader: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta3BpLXBhcnRpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWtwaS1wYXJ0aWFsL2NtYWNzLWtwaS1wYXJ0aWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rcGktcGFydGlhbC9jbWFjcy1rcGktcGFydGlhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNHdEcsd0NBRXFCOzs7SUFGMkIsaURBQW1CLHFCQUFBLG9CQUFBLDRGQUFBLCtCQUFBLGdDQUFBOzs7O0lBTW5FLDhDQUUyQjtJQUYyRCx1UEFBMEI7SUFFckYsaUJBQXNCOzs7SUFGa0IsdUNBQWtCLGdDQUFBLGtCQUFBLGNBQUEsb0JBQUEseUJBQUEsMEJBQUEseUJBQUE7Ozs7SUFRdkYsaUNBQXlFOztJQUE1RCwrQkFBaUIsMkNBQUE7O0FET2hDLE1BQU0sT0FBTyx3QkFBd0I7SUF1Qm5DLFlBQ1UsUUFBbUIsRUFDbkIsVUFBc0I7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBZGhDLFlBQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxXQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ2hELE1BQUMsR0FBRyxDQUFDLENBQUM7UUFDTixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsU0FBSSxHQUFHLEdBQUcsQ0FBQztRQUNYLFNB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QUUsQ0FBQyxDQUFDLElBQUk7WUFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN4RixDQUFBO0lBQ0gsQ0FBQzs7Z0dBeEhVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDeEJyQyw4QkFBd0I7UUFFdEIsOEJBQWtDO1FBQ2hDLHVHQUVxQjtRQUN2QixpQkFBTTtRQUVOLDhCQUFxQztRQUNuQyx5R0FFaUQ7UUFDbkQsaUJBQU07UUFDUixpQkFBTTtRQUdOLDBIQUVjOzs7UUFmVyxlQUFTO1FBQVQsOEJBQVM7UUFNUixlQUE2QjtRQUE3QixvREFBNkIsaUJBQUE7O3VGRGUxQyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO3FGQUlVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdyaWRDb25maWcgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5pbXBvcnQgeyBLUEkgfSBmcm9tICcuLi9jbWFjcy1rcGkvY21hY3Mta3BpLmNvbXBvbmVudCc7XHJcblxyXG5pbnRlcmZhY2UgS1BJUGFydGlhbFJvdyB7XHJcbiAga2V5OiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGRhdGU6IHN0cmluZyB8IG51bGwsXHJcbiAgY2hpbGRyZW46IEtQSVBhcnRpYWxSb3dbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgS1BJUGFydGlhbCB7XHJcbiAgdG90YWw6IG51bWJlcixcclxuICBwYXJ0OiBudW1iZXIsXHJcbiAgcGFydExhYmVsOiBzdHJpbmcsXHJcbiAgY29sb3I6IHN0cmluZyxcclxuICBjaGlsZHJlbjogS1BJUGFydGlhbFJvd1tdXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mta3BpLXBhcnRpYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1rcGktcGFydGlhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mta3BpLXBhcnRpYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0twaVBhcnRpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSB2aWV3ITogbnVtYmVyW107XHJcbiAgQElucHV0KCkgZGF0YSE6IEtQSVBhcnRpYWw7XHJcbiAgQElucHV0KCkgY29sdW1uc0hlYWRlcjogc3RyaW5nW107XHJcblxyXG4gIC8vIHRhYmxlXHJcbiAgZGF0YVRhYmxlITogYW55W107XHJcbiAgY29uZmlndXJhdGlvbiE6IEdyaWRDb25maWc7XHJcblxyXG4gIHNjcm9sbFkgPSAyMDA7XHJcbiAgc2Nyb2xsID0geyB4OiAnNDM0cHgnLCB5OiB0aGlzLnNjcm9sbFkgKyAncHgnIH07XHJcbiAgcCA9IDE7XHJcbiAgbG9hZGluZyA9IHRydWU7XHJcbiAgY29sMiA9IDE1MDtcclxuICBjb2wzID0gNzA7XHJcblxyXG4gIC8vIGNoYXJ0XHJcbiAgbWluV2lkdGggPSA0MzQ7XHJcbiAgY29sb3JzU2NoZW1lITogc3RyaW5nW107XHJcbiAga3BpITogS1BJW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxsS1BJKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U2Nyb2xsKCk7XHJcblxyXG4gICAgdGhpcy5wID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnAgPSB0aGlzLnZpZXdbMF0gPiB0aGlzLm1pbldpZHRoID8gdGhpcy52aWV3WzBdIC8gdGhpcy5taW5XaWR0aCA6IDE7XHJcbiAgICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldENvbmZpZ3VyYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXREYXRhKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGxldCBwID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICBwID0gdGhpcy52aWV3WzFdICogMC41ID4gdGhpcy5zY3JvbGxZID8gdGhpcy52aWV3WzFdICogMC41IC8gdGhpcy5zY3JvbGxZIDogMTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsID0geyB4OiAnMzAwcHgnLCB5OiB0aGlzLnNjcm9sbFkgKiBwICsgJ3B4JyB9O1xyXG4gIH1cclxuXHJcbiAgcmVzaXplKCkge1xyXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnZpZXdbMF07XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt3aWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNpemUoKTtcclxuICB9XHJcblxyXG4gIGZpbGxLUEkoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbG9yc1NjaGVtZSA9IFsnI2U2ZTZlNicsIHRoaXMuZGF0YS5jb2xvcl07XHJcbiAgICB0aGlzLmtwaSA9IFtcclxuICAgICAgeyBjb3VudDogdGhpcy5kYXRhLnRvdGFsIC0gdGhpcy5kYXRhLnBhcnQsIGRlc2NyaXB0aW9uOiAnJyB9LFxyXG4gICAgICB7IGNvdW50OiB0aGlzLmRhdGEucGFydCwgZGVzY3JpcHRpb246ICcnIH1cclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBzZXRDb25maWd1cmF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0ge1xyXG4gICAgICBmaWVsZHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjZWxkVHlwZTogMCxcclxuICAgICAgICAgIGRpc3BsYXk6IHRoaXMuY29sdW1uc0hlYWRlclswXSxcclxuICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXHJcbiAgICAgICAgICBlZGl0VGVtcGxhdGU6IDMsXHJcbiAgICAgICAgICB3aWR0aDogYCR7dGhpcy5jb2wyICogdGhpcy5wfXB4YCxcclxuICAgICAgICAgIG1pbldpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgLSAxMCxcclxuICAgICAgICAgIG1heFdpZHRoOiB0aGlzLmNvbDIgKiB0aGlzLnAgKyAxMDAsXHJcbiAgICAgICAgICByZXNpemFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNlbGRUeXBlOiAwLFxyXG4gICAgICAgICAgZGlzcGxheTogdGhpcy5jb2x1bW5zSGVhZGVyWzFdLFxyXG4gICAgICAgICAgcHJvcGVydHk6ICdkYXRlJyxcclxuICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLmNvbDMgKiB0aGlzLnB9cHhgLFxyXG4gICAgICAgICAgbWluV2lkdGg6IHRoaXMuY29sMyAqIHRoaXMucCAtIDEwLFxyXG4gICAgICAgICAgZWRpdFRlbXBsYXRlOiAyLFxyXG4gICAgICAgICAgZWRpdGFibGU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBmaWVsZElkOiAna2V5JyxcclxuICAgICAgZmllbGRSYXRlOiAnZmF2J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGF0YSgpIHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmRhdGFUYWJsZSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLmNoaWxkcmVuLmZvckVhY2goeCA9PiB7XHJcbiAgICAgIHRoaXMuZGF0YVRhYmxlLnB1c2godGhpcy5nZXRJdGVtVGFibGUoeCkpO1xyXG4gICAgfSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbVRhYmxlKHg6IEtQSVBhcnRpYWxSb3cpOiBhbnkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAga2V5OiB4LmtleSxcclxuICAgICAgbmFtZTogeC5uYW1lLFxyXG4gICAgICBkYXRlOiB4LmRhdGUsXHJcbiAgICAgIGNoaWxkcmVuOiB4LmNoaWxkcmVuLmxlbmd0aCA+IDAgPyB4LmNoaWxkcmVuLm1hcChjID0+IHRoaXMuZ2V0SXRlbVRhYmxlKGMpKSA6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2QtY29udGVudFwiPlxyXG4gIDwhLS0gQ2hhcnQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1jb250ZW50XCI+XHJcbiAgICA8Y21hY3Mta3BpLW92ZXJ2aWV3ICpuZ0lmPVwia3BpXCIgdHlwZT1cImRvdWdobnV0XCIgW3ZpZXddPVwiWzQwMCwgNDAwXVwiIFtzaG93TGVnZW5kXT1cImZhbHNlXCIgW2RhdGFdPVwia3BpXCJcclxuICAgICAgW3RpdGxlS1BJXT1cImRhdGEucGFydExhYmVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZGF0YS5wYXJ0TGFiZWwuc2xpY2UoMSlcIiBbY29sb3JzXT1cImNvbG9yc1NjaGVtZVwiIFt0aXRsZVZhbHVlXT1cImRhdGEucGFydFwiPlxyXG4gICAgPC9jbWFjcy1rcGktb3ZlcnZpZXc+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBEYXRhIFRhYmxlIC0tPlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwiY2hhcnQtZGF0YS10YWJsZVwiPlxyXG4gICAgPGNtYWNzLWNvbXBhY3QtdGFibGUgKm5nSWY9XCIhbG9hZGluZyAmJiBkYXRhVGFibGU7IGVsc2UgZWxzZUJsb2NrXCIgW2RhdGFdPVwiZGF0YVRhYmxlXCIgWyhjb25maWcpXT1cImNvbmZpZ3VyYXRpb25cIlxyXG4gICAgICBbaW5kZW50U2l6ZV09XCI0MFwiIFtsb2dzXT1cInRydWVcIiBbZXhwYW5kYWJsZV09XCJ0cnVlXCIgW3Njcm9sbF09XCJzY3JvbGxcIiBbZnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCJcclxuICAgICAgW3Nob3dQYWdpbmF0aW9uXT1cImZhbHNlXCI+PC9jbWFjcy1jb21wYWN0LXRhYmxlPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gbG9hZGluZyAtLT5cclxuPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XHJcbiAgPG56LXNrZWxldG9uIFtuekFjdGl2ZV09XCJ0cnVlXCIgW256UGFyYWdyYXBoXT1cInsgcm93czogOCB9XCI+PC9uei1za2VsZXRvbj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=