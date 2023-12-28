import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/empty";
import * as i8 from "./cmacs-option-li.component";
import * as i9 from "./cmacs-option-li-virtual.component";
import * as i10 from "./cmacs-option.pipe";
function CmacsOptionContainerVirtualComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.notFoundContentCustom);
} }
function CmacsOptionContainerVirtualComponent_div_1_nz_embed_empty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-embed-empty", 6);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r3.notFoundContent);
} }
function CmacsOptionContainerVirtualComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsOptionContainerVirtualComponent_div_1_ng_container_1_Template, 1, 1, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsOptionContainerVirtualComponent_div_1_nz_embed_empty_2_Template, 1, 2, "nz-embed-empty", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.notFoundContentCustom);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.notFoundContentCustom);
} }
function CmacsOptionContainerVirtualComponent_div_3_div_2_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function CmacsOptionContainerVirtualComponent_div_3_div_2_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 15);
} }
function CmacsOptionContainerVirtualComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function CmacsOptionContainerVirtualComponent_div_3_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.updateCheckboxCache()); });
    i0.ɵɵelementStart(1, "strong", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsOptionContainerVirtualComponent_div_3_div_2_i_3_Template, 1, 0, "i", 12);
    i0.ɵɵtemplate(4, CmacsOptionContainerVirtualComponent_div_3_div_2_span_4_Template, 1, 0, "span", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx_r6.isAllChecked() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.selectAllLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isAllChecked() === 1 || !ctx_r6.isAllChecked());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.isAllChecked() === -1);
} }
function CmacsOptionContainerVirtualComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 16);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r7.nzMenuItemSelectedIcon)("nzOption", ctx_r7.nzSelectService.addedTagOption);
} }
function CmacsOptionContainerVirtualComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CmacsOptionContainerVirtualComponent_div_3_div_2_Template, 5, 5, "div", 7);
    i0.ɵɵtemplate(3, CmacsOptionContainerVirtualComponent_div_3_div_3_Template, 1, 2, "div", 8);
    i0.ɵɵelement(4, "cmacs-option-li-virtual", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.nzSelectService.isMultipleOrTags && !ctx_r1.nzSelectService.isShowNotFound && ctx_r1.showSelectAll && i_r5 === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.nzSelectService.addedTagOption && i_r5 === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r1.nzMenuItemSelectedIcon)("nzOption", item_r4);
} }
export class CmacsOptionContainerVirtualComponent {
    constructor(nzSelectService, i18n, cdr) {
        this.nzSelectService = nzSelectService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.scrolledIndex = 0;
        this.itemSize = 32;
        this.maxItemLength = 8;
        this.showSelectAll = true;
        this.showSearch = false;
        this.selectAllLabel = 'Select All';
        this.searchLabel = 'Search';
        this.showCmacsSearch = false;
        this.notFoundContentShow = true;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    ngOnInit() {
        this.setLocale();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.nzSelectService.listOfNzOptionComponent.length - this.maxItemLength) {
            this.nzScrollToBottom.emit();
        }
    }
    trackValue(_index, option) {
        return option.nzValue;
    }
    setLocale() {
        this.i18n.localeChange
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.selectAllLabel = 'Alle auswählen';
                    this.searchLabel = 'Suche';
                    break;
                case 'en':
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
                    break;
                case 'ja':
                    this.selectAllLabel = 'すべて選択';
                    this.searchLabel = '検索';
                    break;
                default:
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
            }
            this.cdr.markForCheck();
        });
    }
    isAllChecked() {
        const listOfNotDisabledItems = this.nzSelectService.listOfNzOptionComponent.filter(item => !item.nzDisabled);
        return this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length ?
            1 : !this.nzSelectService.listOfCachedSelectedOption.length ? 0 : -1;
    }
    updateCheckboxCache() {
        const isCheckedState = this.isAllChecked();
        if (!isCheckedState || isCheckedState === -1) {
            const listOfSelectedValue = [];
            this.nzSelectService.listOfFilteredOption.forEach(option => {
                if (!option.nzDisabled) {
                    listOfSelectedValue.push(option.nzValue);
                }
            });
            this.nzSelectService.updateListOfSelectedValue(listOfSelectedValue, true);
        }
        else {
            this.nzSelectService.updateListOfSelectedValue([], true);
        }
    }
    static { this.ɵfac = function CmacsOptionContainerVirtualComponent_Factory(t) { return new (t || CmacsOptionContainerVirtualComponent)(i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOptionContainerVirtualComponent, selectors: [["cmacs-option-container-virtual"]], inputs: { showSelectAll: "showSelectAll", showSearch: "showSearch", selectAllLabel: "selectAllLabel", searchLabel: "searchLabel", showCmacsSearch: "showCmacsSearch", notFoundContentShow: "notFoundContentShow", notFoundContentCustom: "notFoundContentCustom", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom", onSearch: "onSearch" }, decls: 5, vars: 15, consts: [[4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "nzComponentName", "specificContent", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "nzComponentName", "specificContent"], ["class", "ant-select-dropdown-menu-item", 3, "ant-select-dropdown-menu-item-selected", "click", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item", 3, "click"], [2, "color", "#656c79 !important"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf"], ["class", "ant-select-selected-icon cmacs-indeterminate-selection", 4, "ngIf"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"], [1, "ant-select-selected-icon", "cmacs-indeterminate-selection"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"]], template: function CmacsOptionContainerVirtualComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, CmacsOptionContainerVirtualComponent_div_1_Template, 3, 2, "div", 0);
            i0.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
            i0.ɵɵlistener("scrolledIndexChange", function CmacsOptionContainerVirtualComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
            i0.ɵɵtemplate(3, CmacsOptionContainerVirtualComponent_div_3_Template, 5, 4, "div", 2);
            i0.ɵɵpipe(4, "nzFilterOption");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound && ctx.notFoundContentShow);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("height", ctx.nzSelectService.listOfNzOptionComponent.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
            i0.ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cdkVirtualForOf", i0.ɵɵpipeBind4(4, 10, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("cdkVirtualForTrackBy", ctx.trackValue);
        } }, dependencies: [i3.NgIf, i3.NgTemplateOutlet, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i4.CdkVirtualScrollViewport, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective, i7.NzEmbedEmptyComponent, i8.CmacsOptionLiComponent, i9.CmacsOptionLiVirtualComponent, i10.NzFilterOptionPipe], styles: [".cmacs-indeterminate-selection[_ngcontent-%COMP%]{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection[_ngcontent-%COMP%]:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom[_ngcontent-%COMP%]:hover, .cmacs-not-found-custom[_ngcontent-%COMP%]{background-color:#fff;padding:0}"], changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionContainerVirtualComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-option-container-virtual', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div>\r\n  <!-- not found -->\r\n  <div *ngIf=\"(nzSelectService.isShowNotFound) && notFoundContentShow\">\r\n    <ng-container *ngIf=\"notFoundContentCustom\" [ngTemplateOutlet]=\"notFoundContentCustom\"></ng-container>\r\n    <nz-embed-empty *ngIf=\"!notFoundContentCustom\" [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent!\"></nz-embed-empty>\r\n  </div>\r\n  <!-- content -->\r\n  <cdk-virtual-scroll-viewport\r\n    [itemSize]=\"itemSize\"\r\n    [maxBufferPx]=\"itemSize * maxItemLength\"\r\n    [minBufferPx]=\"itemSize * maxItemLength\"\r\n    (scrolledIndexChange)=\"onScrolledIndexChange($event)\"\r\n    [style.height.px]=\"nzSelectService.listOfNzOptionComponent.length * itemSize\"\r\n    [style.max-height.px]=\"itemSize * maxItemLength\"\r\n  >\r\n    <div\r\n      *cdkVirtualFor=\"let item of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; let i = index; trackBy: trackValue\">\r\n      <ng-container>\r\n        <!-- select all  -->\r\n        <div *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound && showSelectAll && i === 0\"\r\n          class=\"ant-select-dropdown-menu-item\" [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n          (click)=\"updateCheckboxCache()\">\r\n          <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n          <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n          <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n        </div>\r\n        <!-- added tag option -->\r\n        <div cmacs-option-li *ngIf=\"nzSelectService.addedTagOption && i === 0\"\r\n          [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\" [nzOption]=\"nzSelectService.addedTagOption\">\r\n        </div>\r\n        <!-- item -->\r\n        <cmacs-option-li-virtual [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\" [nzOption]=\"item\"></cmacs-option-li-virtual>\r\n      </ng-container>\r\n    </div>\r\n  </cdk-virtual-scroll-viewport>\r\n</div>", styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom:hover,.cmacs-not-found-custom{background-color:#fff;padding:0}\n"] }]
    }], function () { return [{ type: i1.CmacsSelectService }, { type: i2.NzI18nService }, { type: i0.ChangeDetectorRef }]; }, { showSelectAll: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], selectAllLabel: [{
            type: Input
        }], searchLabel: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], notFoundContentShow: [{
            type: Input
        }], notFoundContentCustom: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }], onSearch: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUluSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0Z2QywyQkFBc0c7OztJQUExRCwrREFBMEM7OztJQUN0RixvQ0FBa0k7OztJQUFuRiwwQ0FBNEIsMkNBQUE7OztJQUY3RSwyQkFBcUU7SUFDbkUsNkdBQXNHO0lBQ3RHLGlIQUFrSTtJQUNwSSxpQkFBTTs7O0lBRlcsZUFBMkI7SUFBM0IsbURBQTJCO0lBQ3pCLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBbUJ2Qyx3QkFBK0c7OztJQUMvRywyQkFBMEc7Ozs7SUFMNUcsK0JBRWtDO0lBQWhDLHVMQUFTLGVBQUEsNkJBQXFCLENBQUEsSUFBQztJQUMvQixrQ0FBMEM7SUFBQSxZQUFrQjtJQUFBLGlCQUFTO0lBQ3JFLDhGQUErRztJQUMvRyxvR0FBMEc7SUFDNUcsaUJBQU07OztJQUxrQyxxRkFBcUU7SUFFakUs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O1lBRUgscUZBR007WUFFTixzREFPQztZQUhDLHdLQUF1QixpQ0FBNkIsSUFBQztZQUlyRCxxRkFrQk07O1lBQ1IsaUJBQThCLEVBQUE7O1lBaEN4QixlQUE2RDtZQUE3RCxvRkFBNkQ7WUFVakUsZUFBNkU7WUFBN0UsaUdBQTZFLHNEQUFBO1lBSjdFLHVDQUFxQixpREFBQSxpREFBQTtZQVFNLGVBQXlKO1lBQXpKLHlNQUF5Six3Q0FBQTs7O3VGREYzSyxvQ0FBb0M7Y0FOaEQsU0FBUzsyQkFDRSxnQ0FBZ0MsbUJBR3pCLHVCQUF1QixDQUFDLE1BQU07aUlBU3RDLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ2EsZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ1ksUUFBUTtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcHRpb24tY29udGFpbmVyLXZpcnR1YWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLXZpcnR1YWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1jb250YWluZXItdmlydHVhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbnRhaW5lclZpcnR1YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc2Nyb2xsZWRJbmRleCA9IDA7XHJcbiAgcmVhZG9ubHkgaXRlbVNpemUgPSAzMjtcclxuICByZWFkb25seSBtYXhJdGVtTGVuZ3RoID0gODtcclxuXHJcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0TG9jYWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsZWRJbmRleENoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNjcm9sbGVkSW5kZXggPSBpbmRleDtcclxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQubGVuZ3RoIC0gdGhpcy5tYXhJdGVtTGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2VcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdBbGxlIGF1c3fDpGhsZW4nO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1N1Y2hlJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdqYSc6XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAn44GZ44G544Gm6YG45oqeJztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICfmpJzntKInO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG4gIGlzQWxsQ2hlY2tlZCgpOiBudW1iZXIge1xyXG4gICAgY29uc3QgbGlzdE9mTm90RGlzYWJsZWRJdGVtcyA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZpbHRlcihpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQpO1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA9PT0gbGlzdE9mTm90RGlzYWJsZWRJdGVtcy5sZW5ndGggP1xyXG4gICAgICAxIDogIXRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA/IDAgOiAtMTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKSB7XHJcbiAgICBjb25zdCBpc0NoZWNrZWRTdGF0ZSA9IHRoaXMuaXNBbGxDaGVja2VkKCk7XHJcblxyXG4gICAgaWYgKCFpc0NoZWNrZWRTdGF0ZSB8fCBpc0NoZWNrZWRTdGF0ZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPCEtLSBub3QgZm91bmQgLS0+XHJcbiAgPGRpdiAqbmdJZj1cIihuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQpICYmIG5vdEZvdW5kQ29udGVudFNob3dcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbmdUZW1wbGF0ZU91dGxldF09XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuei1lbWJlZC1lbXB0eSAqbmdJZj1cIiFub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbnpDb21wb25lbnROYW1lXT1cIidzZWxlY3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJub3RGb3VuZENvbnRlbnQhXCI+PC9uei1lbWJlZC1lbXB0eT5cclxuICA8L2Rpdj5cclxuICA8IS0tIGNvbnRlbnQgLS0+XHJcbiAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydFxyXG4gICAgW2l0ZW1TaXplXT1cIml0ZW1TaXplXCJcclxuICAgIFttYXhCdWZmZXJQeF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxyXG4gICAgW21pbkJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgICAoc2Nyb2xsZWRJbmRleENoYW5nZSk9XCJvblNjcm9sbGVkSW5kZXhDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5sZW5ndGggKiBpdGVtU2l6ZVwiXHJcbiAgICBbc3R5bGUubWF4LWhlaWdodC5weF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQgfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja1ZhbHVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSBzZWxlY3QgYWxsICAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3MgJiYgIW56U2VsZWN0U2VydmljZS5pc1Nob3dOb3RGb3VuZCAmJiBzaG93U2VsZWN0QWxsICYmIGkgPT09IDBcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbVwiIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF09XCJpc0FsbENoZWNrZWQoKSA9PT0gMVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwidXBkYXRlQ2hlY2tib3hDYWNoZSgpXCI+XHJcbiAgICAgICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICM2NTZjNzkgIWltcG9ydGFudFwiPnt7c2VsZWN0QWxsTGFiZWx9fTwvc3Ryb25nPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uXCIgKm5nSWY9XCJpc0FsbENoZWNrZWQoKSA9PT0gMSB8fCAhaXNBbGxDaGVja2VkKClcIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvbiBjbWFjcy1pbmRldGVybWluYXRlLXNlbGVjdGlvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IC0xXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gYWRkZWQgdGFnIG9wdGlvbiAtLT5cclxuICAgICAgICA8ZGl2IGNtYWNzLW9wdGlvbi1saSAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvbiAmJiBpID09PSAwXCJcclxuICAgICAgICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIiBbbnpPcHRpb25dPVwibnpTZWxlY3RTZXJ2aWNlLmFkZGVkVGFnT3B0aW9uXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBpdGVtIC0tPlxyXG4gICAgICAgIDxjbWFjcy1vcHRpb24tbGktdmlydHVhbCBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCIgW256T3B0aW9uXT1cIml0ZW1cIj48L2NtYWNzLW9wdGlvbi1saS12aXJ0dWFsPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxyXG48L2Rpdj4iXX0=