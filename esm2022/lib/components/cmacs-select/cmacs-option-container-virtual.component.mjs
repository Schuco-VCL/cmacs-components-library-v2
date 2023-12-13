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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUluSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0Z2QywyQkFBc0c7OztJQUExRCwrREFBMEM7OztJQUN0RixvQ0FBa0k7OztJQUFuRiwwQ0FBNEIsMkNBQUE7OztJQUY3RSwyQkFBcUU7SUFDbkUsNkdBQXNHO0lBQ3RHLGlIQUFrSTtJQUNwSSxpQkFBTTs7O0lBRlcsZUFBMkI7SUFBM0IsbURBQTJCO0lBQ3pCLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBbUJ2Qyx3QkFBK0c7OztJQUMvRywyQkFBMEc7Ozs7SUFMNUcsK0JBRWtDO0lBQWhDLHVMQUFTLGVBQUEsNkJBQXFCLENBQUEsSUFBQztJQUMvQixrQ0FBMEM7SUFBQSxZQUFrQjtJQUFBLGlCQUFTO0lBQ3JFLDhGQUErRztJQUMvRyxvR0FBMEc7SUFDNUcsaUJBQU07OztJQUxrQyxxRkFBcUU7SUFFakUs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QTZEO1lBVWpFLGVBQTZFO1lBQTdFLGlHQUE2RSxzREFBQTtZQUo3RSx1Q0FBcUIsaURBQUEsaURBQUE7WUFRTSxlQUF5SjtZQUF6Six5TUFBeUosd0NBQUE7Ozt1RkRGM0ssb0NBQW9DO2NBTmhELFNBQVM7MkJBQ0UsZ0NBQWdDLG1CQUd6Qix1QkFBdUIsQ0FBQyxNQUFNO2lJQVN0QyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNhLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUNZLFFBQVE7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLXZpcnR1YWwuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db250YWluZXJWaXJ0dWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIHNjcm9sbGVkSW5kZXggPSAwO1xyXG4gIHJlYWRvbmx5IGl0ZW1TaXplID0gMzI7XHJcbiAgcmVhZG9ubHkgbWF4SXRlbUxlbmd0aCA9IDg7XHJcblxyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICBASW5wdXQoKSBzZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudFNob3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldExvY2FsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbGVkSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zY3JvbGxlZEluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAoaW5kZXggPT09IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50Lmxlbmd0aCAtIHRoaXMubWF4SXRlbUxlbmd0aCkge1xyXG4gICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnQWxsZSBhdXN3w6RobGVuJztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTdWNoZSc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0FsbENoZWNrZWQoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGxpc3RPZk5vdERpc2FibGVkSXRlbXMgPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIHJldHVybiB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPT09IGxpc3RPZk5vdERpc2FibGVkSXRlbXMubGVuZ3RoID9cclxuICAgICAgMSA6ICF0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPyAwIDogLTE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCkge1xyXG4gICAgY29uc3QgaXNDaGVja2VkU3RhdGUgPSB0aGlzLmlzQWxsQ2hlY2tlZCgpO1xyXG5cclxuICAgIGlmICghaXNDaGVja2VkU3RhdGUgfHwgaXNDaGVja2VkU3RhdGUgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbXTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mRmlsdGVyZWRPcHRpb24uZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDwhLS0gbm90IGZvdW5kIC0tPlxyXG4gIDxkaXYgKm5nSWY9XCIobnpTZWxlY3RTZXJ2aWNlLmlzU2hvd05vdEZvdW5kKSAmJiBub3RGb3VuZENvbnRlbnRTaG93XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bnotZW1iZWQtZW1wdHkgKm5nSWY9XCIhbm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW256Q29tcG9uZW50TmFtZV09XCInc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50IVwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLSBjb250ZW50IC0tPlxyXG4gIDxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnRcclxuICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXHJcbiAgICBbbWF4QnVmZmVyUHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcclxuICAgIFttaW5CdWZmZXJQeF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxyXG4gICAgKHNjcm9sbGVkSW5kZXhDaGFuZ2UpPVwib25TY3JvbGxlZEluZGV4Q2hhbmdlKCRldmVudClcIlxyXG4gICAgW3N0eWxlLmhlaWdodC5weF09XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQubGVuZ3RoICogaXRlbVNpemVcIlxyXG4gICAgW3N0eWxlLm1heC1oZWlnaHQucHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcclxuICA+XHJcbiAgICA8ZGl2XHJcbiAgICAgICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50IHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tWYWx1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgIDwhLS0gc2VsZWN0IGFsbCAgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmICFuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQgJiYgc2hvd1NlbGVjdEFsbCAmJiBpID09PSAwXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1cIiBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdPVwiaXNBbGxDaGVja2VkKCkgPT09IDFcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInVwZGF0ZUNoZWNrYm94Q2FjaGUoKVwiPlxyXG4gICAgICAgICAgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiAjNjU2Yzc5ICFpbXBvcnRhbnRcIj57e3NlbGVjdEFsbExhYmVsfX08L3N0cm9uZz5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IDEgfHwgIWlzQWxsQ2hlY2tlZCgpXCI+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb24gY21hY3MtaW5kZXRlcm1pbmF0ZS1zZWxlY3Rpb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAtMVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIGFkZGVkIHRhZyBvcHRpb24gLS0+XHJcbiAgICAgICAgPGRpdiBjbWFjcy1vcHRpb24tbGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb24gJiYgaSA9PT0gMFwiXHJcbiAgICAgICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCIgW256T3B0aW9uXT1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gaXRlbSAtLT5cclxuICAgICAgICA8Y21hY3Mtb3B0aW9uLWxpLXZpcnR1YWwgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiIFtuek9wdGlvbl09XCJpdGVtXCI+PC9jbWFjcy1vcHRpb24tbGktdmlydHVhbD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cclxuPC9kaXY+Il19