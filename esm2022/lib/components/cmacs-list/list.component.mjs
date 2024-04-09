import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsListFooterComponent, CmacsListLoadMoreDirective, CmacsListPaginationComponent } from './list-cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/spin";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "./list-cell";
function CmacsListComponent_ng_template_0_div_1_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function CmacsListComponent_ng_template_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsListComponent_ng_template_0_div_1_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r11.renderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r12, index_r13));
} }
function CmacsListComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsListComponent_ng_template_0_div_1_ng_container_1_Template, 2, 5, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.dataSource);
} }
function CmacsListComponent_ng_template_0_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function CmacsListComponent_ng_template_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, CmacsListComponent_ng_template_0_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const index_r17 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("margin-right", ctx_r15.grid.gutter, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.renderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, item_r16, index_r17));
} }
function CmacsListComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsListComponent_ng_template_0_div_2_div_1_Template, 2, 7, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.dataSource);
} }
function CmacsListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CmacsListComponent_ng_template_0_div_1_Template, 2, 1, "div", 1);
    i0.ɵɵtemplate(2, CmacsListComponent_ng_template_0_div_2_Template, 2, 1, "div", 1);
    i0.ɵɵprojection(3, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.classicGrid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.classicGrid);
} }
function CmacsListComponent_cmacs_list_header_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r19.header);
} }
function CmacsListComponent_cmacs_list_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-header");
    i0.ɵɵtemplate(1, CmacsListComponent_cmacs_list_header_2_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.header);
} }
function CmacsListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵstyleProp("min-height", 53, "px");
} }
function CmacsListComponent_div_7_div_1_ng_template_1_Template(rf, ctx) { }
function CmacsListComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CmacsListComponent_div_7_div_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzSpan", ctx_r20.grid.span || null)("nzXs", ctx_r20.grid.xs || null)("nzSm", ctx_r20.grid.sm || null)("nzMd", ctx_r20.grid.md || null)("nzLg", ctx_r20.grid.lg || null)("nzXl", ctx_r20.grid.xl || null)("nzXXl", ctx_r20.grid.xxl || null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r20.renderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c0, item_r21, index_r22));
} }
function CmacsListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsListComponent_div_7_div_1_Template, 2, 12, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzGutter", ctx_r4.grid.gutter || null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.dataSource);
} }
function CmacsListComponent_cmacs_list_empty_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-list-empty", 16);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("noResult", ctx_r5.noResult);
} }
function CmacsListComponent_cmacs_list_footer_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.footer);
} }
function CmacsListComponent_cmacs_list_footer_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-footer");
    i0.ɵɵtemplate(1, CmacsListComponent_cmacs_list_footer_9_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r6.footer);
} }
function CmacsListComponent_ng_template_11_Template(rf, ctx) { }
function CmacsListComponent_cmacs_list_pagination_13_ng_template_1_Template(rf, ctx) { }
function CmacsListComponent_cmacs_list_pagination_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-pagination");
    i0.ɵɵtemplate(1, CmacsListComponent_cmacs_list_pagination_13_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.pagination);
} }
const _c1 = [[["cmacs-list-header"]], [["cmacs-list-footer"], ["", "cmacs-list-footer", ""]], [["cmacs-list-load-more"], ["", "cmacs-list-load-more", ""]], [["cmacs-list-pagination"], ["", "cmacs-list-pagination", ""]], "*"];
const _c2 = ["cmacs-list-header", "cmacs-list-footer, [cmacs-list-footer]", "cmacs-list-load-more, [cmacs-list-load-more]", "cmacs-list-pagination, [cmacs-list-pagination]", "*"];
export class CmacsListComponent {
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.bordered = false;
        this.grid = '';
        this.itemLayout = 'horizontal';
        this.classicGrid = false;
        this.renderItem = null;
        this.loading = false;
        this.loadMore = null;
        this.size = 'default';
        this.split = true;
        this.hasSomethingAfterLastItem = false;
        this.dir = 'ltr';
        this.itemLayoutNotifySource = new BehaviorSubject(this.itemLayout);
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-list');
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    getSomethingAfterLastItem() {
        return !!(this.loadMore ||
            this.pagination ||
            this.footer ||
            this.nzListFooterComponent ||
            this.nzListPaginationComponent ||
            this.nzListLoadMoreDirective);
    }
    ngOnChanges(changes) {
        if (changes.itemLayout) {
            this.itemLayoutNotifySource.next(this.itemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngAfterContentInit() {
        this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
    }
    static { this.ɵfac = function CmacsListComponent_Factory(t) { return new (t || CmacsListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListComponent, selectors: [["cmacs-list"], ["", "cmacs-list", ""]], contentQueries: function CmacsListComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsListFooterComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, CmacsListPaginationComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, CmacsListLoadMoreDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzListFooterComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzListPaginationComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
        } }, hostVars: 16, hostBindings: function CmacsListComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.itemLayout === "vertical")("ant-list-lg", ctx.size === "large")("ant-list-sm", ctx.size === "small")("ant-list-split", ctx.split)("ant-list-bordered", ctx.bordered)("ant-list-loading", ctx.loading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
        } }, inputs: { dataSource: "dataSource", bordered: "bordered", grid: "grid", header: "header", footer: "footer", itemLayout: "itemLayout", classicGrid: "classicGrid", renderItem: "renderItem", loading: "loading", loadMore: "loadMore", pagination: "pagination", size: "size", split: "split", noResult: "noResult" }, exportAs: ["cmacsList"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 15, vars: 9, consts: [["itemsTpl", ""], [4, "ngIf"], [3, "nzSpinning"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], [3, "noResult", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cmacs-classic-grid", 3, "marginRight", 4, "ngFor", "ngForOf"], [1, "cmacs-classic-grid"], [4, "nzStringTemplateOutlet"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "noResult"]], template: function CmacsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵtemplate(0, CmacsListComponent_ng_template_0_Template, 4, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, CmacsListComponent_cmacs_list_header_2_Template, 2, 1, "cmacs-list-header", 1);
            i0.ɵɵprojection(3);
            i0.ɵɵelementStart(4, "nz-spin", 2);
            i0.ɵɵelementContainerStart(5);
            i0.ɵɵtemplate(6, CmacsListComponent_div_6_Template, 1, 2, "div", 3);
            i0.ɵɵtemplate(7, CmacsListComponent_div_7_Template, 2, 2, "div", 4);
            i0.ɵɵtemplate(8, CmacsListComponent_cmacs_list_empty_8_Template, 1, 1, "cmacs-list-empty", 5);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, CmacsListComponent_cmacs_list_footer_9_Template, 2, 1, "cmacs-list-footer", 1);
            i0.ɵɵprojection(10, 1);
            i0.ɵɵtemplate(11, CmacsListComponent_ng_template_11_Template, 0, 0, "ng-template", 6);
            i0.ɵɵprojection(12, 2);
            i0.ɵɵtemplate(13, CmacsListComponent_cmacs_list_pagination_13_Template, 2, 1, "cmacs-list-pagination", 1);
            i0.ɵɵprojection(14, 3);
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.header);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzSpinning", ctx.loading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.loading && ctx.dataSource && ctx.dataSource.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grid && ctx.dataSource)("ngIfElse", _r0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.dataSource && ctx.dataSource.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.footer);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.loadMore);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.pagination);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzSpinComponent, i4.NzColDirective, i4.NzRowDirective, i5.NzStringTemplateOutletDirective, i6.CmacsListEmptyComponent, i6.CmacsListFooterComponent, i6.CmacsListHeaderComponent, i6.CmacsListPaginationComponent], styles: [".cmacs-classic-grid{display:inline-block}.ant-list-grid .ant-list-item{margin-bottom:40px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsListComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsListComponent.prototype, "classicGrid", void 0);
__decorate([
    InputBoolean()
], CmacsListComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsListComponent.prototype, "split", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-list, [cmacs-list]', exportAs: 'cmacsList', template: `
    <ng-template #itemsTpl>
      <div class="ant-list-items">
        <div *ngIf="!classicGrid">
          <ng-container *ngFor="let item of dataSource; let index = index">
            <ng-template [ngTemplateOutlet]="renderItem" [ngTemplateOutletContext]="{ $implicit: item, index: index }"></ng-template>
          </ng-container>       
        </div>
        <div *ngIf="classicGrid">
          <div class="cmacs-classic-grid"
               [style.marginRight.px]="grid.gutter"
               *ngFor="let item of dataSource; let index = index">
            <ng-template [ngTemplateOutlet]="renderItem" [ngTemplateOutletContext]="{ $implicit: item, index: index }"></ng-template>
          </div>
        </div>

        <ng-content></ng-content>
      </div>
    </ng-template>

    <cmacs-list-header *ngIf="header">
      <ng-container *nzStringTemplateOutlet="header">{{ header }}</ng-container>
    </cmacs-list-header>
    <ng-content select="cmacs-list-header"></ng-content>

    <nz-spin [nzSpinning]="loading">
      <ng-container>
        <div *ngIf="loading && dataSource && dataSource.length === 0" [style.min-height.px]="53"></div>
        <div *ngIf="grid && dataSource; else itemsTpl" nz-row [nzGutter]="grid.gutter || null">
          <div
            nz-col
            [nzSpan]="grid.span || null"
            [nzXs]="grid.xs || null"
            [nzSm]="grid.sm || null"
            [nzMd]="grid.md || null"
            [nzLg]="grid.lg || null"
            [nzXl]="grid.xl || null"
            [nzXXl]="grid.xxl || null"
            *ngFor="let item of dataSource; let index = index"
          >
            <ng-template [ngTemplateOutlet]="renderItem" [ngTemplateOutletContext]="{ $implicit: item, index: index }"></ng-template>
          </div>
        </div>
        <cmacs-list-empty *ngIf="!loading && dataSource && dataSource.length === 0" [noResult]="noResult"></cmacs-list-empty>
      </ng-container>
    </nz-spin>

    <cmacs-list-footer *ngIf="footer">
      <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
    </cmacs-list-footer>
    <ng-content select="cmacs-list-footer, [cmacs-list-footer]"></ng-content>

    <ng-template [ngTemplateOutlet]="loadMore"></ng-template>
    <ng-content select="cmacs-list-load-more, [cmacs-list-load-more]"></ng-content>

    <cmacs-list-pagination *ngIf="pagination">
      <ng-template [ngTemplateOutlet]="pagination"></ng-template>
    </cmacs-list-pagination>
    <ng-content select="cmacs-list-pagination, [cmacs-list-pagination]"></ng-content>
  `, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.ant-list-rtl]': `dir === 'rtl'`,
                    '[class.ant-list-vertical]': 'itemLayout === "vertical"',
                    '[class.ant-list-lg]': 'size === "large"',
                    '[class.ant-list-sm]': 'size === "small"',
                    '[class.ant-list-split]': 'split',
                    '[class.ant-list-bordered]': 'bordered',
                    '[class.ant-list-loading]': 'loading',
                    '[class.ant-list-something-after-last-item]': 'hasSomethingAfterLastItem'
                }, styles: [".cmacs-classic-grid{display:inline-block}.ant-list-grid .ant-list-item{margin-bottom:40px}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { dataSource: [{
            type: Input
        }], bordered: [{
            type: Input
        }], grid: [{
            type: Input
        }], header: [{
            type: Input
        }], footer: [{
            type: Input
        }], itemLayout: [{
            type: Input
        }], classicGrid: [{
            type: Input
        }], renderItem: [{
            type: Input
        }], loading: [{
            type: Input
        }], loadMore: [{
            type: Input
        }], pagination: [{
            type: Input
        }], size: [{
            type: Input
        }], split: [{
            type: Input
        }], noResult: [{
            type: Input
        }], nzListFooterComponent: [{
            type: ContentChild,
            args: [CmacsListFooterComponent]
        }], nzListPaginationComponent: [{
            type: ContentChild,
            args: [CmacsListPaginationComponent]
        }], nzListLoadMoreDirective: [{
            type: ContentChild,
            args: [CmacsListLoadMoreDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlzdC9saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLEtBQUssRUFJTCxRQUFRLEVBR1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLDRCQUE0QixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7OztJQVV2Ryw2QkFBaUU7SUFDL0Qsc0hBQXlIO0lBQzNILDBCQUFlOzs7OztJQURBLGVBQStCO0lBQS9CLHFEQUErQiw0RUFBQTs7O0lBRmhELDJCQUEwQjtJQUN4Qix5R0FFZTtJQUNqQixpQkFBTTs7O0lBSDJCLGVBQWU7SUFBZiwyQ0FBZTs7OztJQUs5QywrQkFFd0Q7SUFDdEQsNkdBQXlIO0lBQzNILGlCQUFNOzs7OztJQUhELHlEQUFvQztJQUUxQixlQUErQjtJQUEvQixxREFBK0IsNEVBQUE7OztJQUpoRCwyQkFBeUI7SUFDdkIsd0ZBSU07SUFDUixpQkFBTTs7O0lBSGtCLGVBQWU7SUFBZiw0Q0FBZTs7O0lBVHpDLDhCQUE0QjtJQUMxQixpRkFJTTtJQUNOLGlGQU1NO0lBRU4scUJBQXlCO0lBQzNCLGlCQUFNOzs7SUFkRSxlQUFrQjtJQUFsQiwwQ0FBa0I7SUFLbEIsZUFBaUI7SUFBakIseUNBQWlC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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyRFQsdUJBQ29CLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6QztvQkFDSixzQkFBc0IsRUFBRSxlQUFlO29CQUN2QywyQkFBMkIsRUFBRSwyQkFBMkI7b0JBQ3hELHFCQUFxQixFQUFFLGtCQUFrQjtvQkFDekMscUJBQXFCLEVBQUUsa0JBQWtCO29CQUN6Qyx3QkFBd0IsRUFBRSxPQUFPO29CQUNqQywyQkFBMkIsRUFBRSxVQUFVO29CQUN2QywwQkFBMEIsRUFBRSxTQUFTO29CQUNyQyw0Q0FBNEMsRUFBRSwyQkFBMkI7aUJBQzFFOztzQkFnQzRDLFFBQVE7d0JBNUI1QyxVQUFVO2tCQUFsQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNtQixLQUFLO2tCQUE3QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVrQyxxQkFBcUI7a0JBQTVELFlBQVk7bUJBQUMsd0JBQXdCO1lBQ00seUJBQXlCO2tCQUFwRSxZQUFZO21CQUFDLDRCQUE0QjtZQUNBLHVCQUF1QjtrQkFBaEUsWUFBWTttQkFBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOekRpcmVjdGlvblZIVHlwZSwgTnpTYWZlQW55LCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekxpc3RHcmlkIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0xpc3RGb290ZXJDb21wb25lbnQsIENtYWNzTGlzdExvYWRNb3JlRGlyZWN0aXZlLCBDbWFjc0xpc3RQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWNlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LCBbY21hY3MtbGlzdF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0JyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlICNpdGVtc1RwbD5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIiFjbGFzc2ljR3JpZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhU291cmNlOyBsZXQgaW5kZXggPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVySXRlbVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGluZGV4IH1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+ICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJjbGFzc2ljR3JpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNsYXNzaWMtZ3JpZFwiXHJcbiAgICAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5SaWdodC5weF09XCJncmlkLmd1dHRlclwiXHJcbiAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFTb3VyY2U7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJJdGVtXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtLCBpbmRleDogaW5kZXggfVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPGNtYWNzLWxpc3QtaGVhZGVyICpuZ0lmPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJcIj57eyBoZWFkZXIgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvY21hY3MtbGlzdC1oZWFkZXI+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWhlYWRlclwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8bnotc3BpbiBbbnpTcGlubmluZ109XCJsb2FkaW5nXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmcgJiYgZGF0YVNvdXJjZSAmJiBkYXRhU291cmNlLmxlbmd0aCA9PT0gMFwiIFtzdHlsZS5taW4taGVpZ2h0LnB4XT1cIjUzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImdyaWQgJiYgZGF0YVNvdXJjZTsgZWxzZSBpdGVtc1RwbFwiIG56LXJvdyBbbnpHdXR0ZXJdPVwiZ3JpZC5ndXR0ZXIgfHwgbnVsbFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBuei1jb2xcclxuICAgICAgICAgICAgW256U3Bhbl09XCJncmlkLnNwYW4gfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuelhzXT1cImdyaWQueHMgfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuelNtXT1cImdyaWQuc20gfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuek1kXT1cImdyaWQubWQgfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuekxnXT1cImdyaWQubGcgfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuelhsXT1cImdyaWQueGwgfHwgbnVsbFwiXHJcbiAgICAgICAgICAgIFtuelhYbF09XCJncmlkLnh4bCB8fCBudWxsXCJcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXhcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVySXRlbVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGluZGV4IH1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGNtYWNzLWxpc3QtZW1wdHkgKm5nSWY9XCIhbG9hZGluZyAmJiBkYXRhU291cmNlICYmIGRhdGFTb3VyY2UubGVuZ3RoID09PSAwXCIgW25vUmVzdWx0XT1cIm5vUmVzdWx0XCI+PC9jbWFjcy1saXN0LWVtcHR5PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbnotc3Bpbj5cclxuXHJcbiAgICA8Y21hY3MtbGlzdC1mb290ZXIgKm5nSWY9XCJmb290ZXJcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImZvb3RlclwiPnt7IGZvb3RlciB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9jbWFjcy1saXN0LWZvb3Rlcj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNtYWNzLWxpc3QtZm9vdGVyLCBbY21hY3MtbGlzdC1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkTW9yZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWxvYWQtbW9yZSwgW2NtYWNzLWxpc3QtbG9hZC1tb3JlXVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8Y21hY3MtbGlzdC1wYWdpbmF0aW9uICpuZ0lmPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGFnaW5hdGlvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2NtYWNzLWxpc3QtcGFnaW5hdGlvbj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNtYWNzLWxpc3QtcGFnaW5hdGlvbiwgW2NtYWNzLWxpc3QtcGFnaW5hdGlvbl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWxpc3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWxpc3QtdmVydGljYWxdJzogJ2l0ZW1MYXlvdXQgPT09IFwidmVydGljYWxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1saXN0LWxnXSc6ICdzaXplID09PSBcImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtbGlzdC1zbV0nOiAnc2l6ZSA9PT0gXCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LWxpc3Qtc3BsaXRdJzogJ3NwbGl0JyxcclxuICAgICdbY2xhc3MuYW50LWxpc3QtYm9yZGVyZWRdJzogJ2JvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWxpc3QtbG9hZGluZ10nOiAnbG9hZGluZycsXHJcbiAgICAnW2NsYXNzLmFudC1saXN0LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1dJzogJ2hhc1NvbWV0aGluZ0FmdGVyTGFzdEl0ZW0nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U/OiBOelNhZmVBbnlbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBncmlkPzogTnpMaXN0R3JpZCB8ICcnID0gJyc7XHJcbiAgQElucHV0KCkgaGVhZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgaXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsYXNzaWNHcmlkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVuZGVySXRlbTogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb24/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzcGxpdCA9IHRydWU7XHJcbiAgQElucHV0KCkgbm9SZXN1bHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0xpc3RGb290ZXJDb21wb25lbnQpIG56TGlzdEZvb3RlckNvbXBvbmVudCE6IENtYWNzTGlzdEZvb3RlckNvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkKENtYWNzTGlzdFBhZ2luYXRpb25Db21wb25lbnQpIG56TGlzdFBhZ2luYXRpb25Db21wb25lbnQhOiBDbWFjc0xpc3RQYWdpbmF0aW9uQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NMaXN0TG9hZE1vcmVEaXJlY3RpdmUpIG56TGlzdExvYWRNb3JlRGlyZWN0aXZlITogQ21hY3NMaXN0TG9hZE1vcmVEaXJlY3RpdmU7XHJcblxyXG4gIGhhc1NvbWV0aGluZ0FmdGVyTGFzdEl0ZW0gPSBmYWxzZTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgaXRlbUxheW91dE5vdGlmeVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSFR5cGU+KHRoaXMuaXRlbUxheW91dCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGdldCBpdGVtTGF5b3V0Tm90aWZ5JCgpOiBPYnNlcnZhYmxlPE56RGlyZWN0aW9uVkhUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtbGlzdCcpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIShcclxuICAgICAgdGhpcy5sb2FkTW9yZSB8fFxyXG4gICAgICB0aGlzLnBhZ2luYXRpb24gfHxcclxuICAgICAgdGhpcy5mb290ZXIgfHxcclxuICAgICAgdGhpcy5uekxpc3RGb290ZXJDb21wb25lbnQgfHxcclxuICAgICAgdGhpcy5uekxpc3RQYWdpbmF0aW9uQ29tcG9uZW50IHx8XHJcbiAgICAgIHRoaXMubnpMaXN0TG9hZE1vcmVEaXJlY3RpdmVcclxuICAgICk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLml0ZW1MYXlvdXQpIHtcclxuICAgICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLm5leHQodGhpcy5pdGVtTGF5b3V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFzU29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSA9IHRoaXMuZ2V0U29tZXRoaW5nQWZ0ZXJMYXN0SXRlbSgpO1xyXG4gIH1cclxufVxyXG4iXX0=