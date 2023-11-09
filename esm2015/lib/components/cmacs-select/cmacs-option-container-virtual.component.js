import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/scrolling";
import * as i5 from "ng-zorro-antd/empty";
import * as i6 from "./cmacs-option-li-virtual.component";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "./cmacs-option-li.component";
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
    i0.ɵɵlistener("click", function CmacsOptionContainerVirtualComponent_div_3_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.updateCheckboxCache(); });
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
        this.destroy$.next();
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
}
CmacsOptionContainerVirtualComponent.ɵfac = function CmacsOptionContainerVirtualComponent_Factory(t) { return new (t || CmacsOptionContainerVirtualComponent)(i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsOptionContainerVirtualComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionContainerVirtualComponent, selectors: [["cmacs-option-container-virtual"]], inputs: { showSelectAll: "showSelectAll", showSearch: "showSearch", selectAllLabel: "selectAllLabel", searchLabel: "searchLabel", showCmacsSearch: "showCmacsSearch", notFoundContentShow: "notFoundContentShow", notFoundContentCustom: "notFoundContentCustom", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, outputs: { nzScrollToBottom: "nzScrollToBottom", onSearch: "onSearch" }, decls: 5, vars: 15, consts: [[4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "nzComponentName", "specificContent", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "nzComponentName", "specificContent"], ["class", "ant-select-dropdown-menu-item", 3, "ant-select-dropdown-menu-item-selected", "click", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], [3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item", 3, "click"], [2, "color", "#656c79 !important"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf"], ["class", "ant-select-selected-icon cmacs-indeterminate-selection", 4, "ngIf"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"], [1, "ant-select-selected-icon", "cmacs-indeterminate-selection"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"]], template: function CmacsOptionContainerVirtualComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, CmacsOptionContainerVirtualComponent_div_1_Template, 3, 2, "div", 0);
        i0.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
        i0.ɵɵlistener("scrolledIndexChange", function CmacsOptionContainerVirtualComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
        i0.ɵɵtemplate(3, CmacsOptionContainerVirtualComponent_div_3_Template, 5, 4, "div", 2);
        i0.ɵɵpipe(4, "nzFilterOption");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isShowNotFound && ctx.notFoundContentShow);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("height", ctx.nzSelectService.listOfNzOptionComponent.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
        i0.ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", i0.ɵɵpipeBind4(4, 10, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("cdkVirtualForTrackBy", ctx.trackValue);
    } }, directives: [i3.NgIf, i4.CdkVirtualScrollViewport, i4.CdkFixedSizeVirtualScroll, i4.CdkVirtualForOf, i3.NgTemplateOutlet, i5.NzEmbedEmptyComponent, i6.CmacsOptionLiVirtualComponent, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i9.CmacsOptionLiComponent], pipes: [i10.NzFilterOptionPipe], styles: [".cmacs-indeterminate-selection[_ngcontent-%COMP%]{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection[_ngcontent-%COMP%]:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom[_ngcontent-%COMP%], .cmacs-not-found-custom[_ngcontent-%COMP%]:hover{background-color:#fff;padding:0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionContainerVirtualComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-option-container-virtual',
                templateUrl: './cmacs-option-container-virtual.component.html',
                styleUrls: ['./cmacs-option-container-virtual.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWNvbnRhaW5lci12aXJ0dWFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUluSixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0Z2QywyQkFBc0c7OztJQUExRCwrREFBMEM7OztJQUN0RixvQ0FBa0k7OztJQUFuRiwwQ0FBNEIsMkNBQUE7OztJQUY3RSwyQkFBcUU7SUFDbkUsNkdBQXNHO0lBQ3RHLGlIQUFrSTtJQUNwSSxpQkFBTTs7O0lBRlcsZUFBMkI7SUFBM0IsbURBQTJCO0lBQ3pCLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBbUJ2Qyx3QkFBK0c7OztJQUMvRywyQkFBMEc7Ozs7SUFMNUcsK0JBRWtDO0lBQWhDLHdOQUErQjtJQUMvQixrQ0FBMEM7SUFBQSxZQUFrQjtJQUFBLGlCQUFTO0lBQ3JFLDhGQUErRztJQUMvRyxvR0FBMEc7SUFDNUcsaUJBQU07OztJQUxrQyxxRkFBcUU7SUFFakUsZUFBa0I7SUFBbEIsMkNBQWtCO0lB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QUF1QixpQ0FBNkIsSUFBQztRQUlyRCxxRkFrQk07O1FBQ1IsaUJBQThCO1FBQ2hDLGlCQUFNOztRQWpDRSxlQUE2RDtRQUE3RCxvRkFBNkQ7UUFVakUsZUFBNkU7UUFBN0UsaUdBQTZFLHNEQUFBO1FBSjdFLHVDQUFxQixpREFBQSxpREFBQTtRQVFNLGVBQXlKO1FBQXpKLHlNQUF5Six3Q0FBQTs7dUZERjNLLG9DQUFvQztjQU5oRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLGlEQUFpRDtnQkFDOUQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7Z0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2lJQVFVLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ2EsZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ1ksUUFBUTtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcHRpb24tY29udGFpbmVyLXZpcnR1YWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLXZpcnR1YWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1jb250YWluZXItdmlydHVhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbnRhaW5lclZpcnR1YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgc2Nyb2xsZWRJbmRleCA9IDA7XHJcbiAgcmVhZG9ubHkgaXRlbVNpemUgPSAzMjtcclxuICByZWFkb25seSBtYXhJdGVtTGVuZ3RoID0gODtcclxuXHJcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0TG9jYWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGxlZEluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Nyb2xsZWRJbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5sZW5ndGggLSB0aGlzLm1heEl0ZW1MZW5ndGgpIHtcclxuICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ0FsbGUgYXVzd8OkaGxlbic7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU3VjaGUnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICfjgZnjgbnjgabpgbjmip4nO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ+aknOe0oic7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbiAgaXNBbGxDaGVja2VkKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCk7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID09PSBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zLmxlbmd0aCA/XHJcbiAgICAgIDEgOiAhdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID8gMCA6IC0xO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpIHtcclxuICAgIGNvbnN0IGlzQ2hlY2tlZFN0YXRlID0gdGhpcy5pc0FsbENoZWNrZWQoKTtcclxuXHJcbiAgICBpZiAoIWlzQ2hlY2tlZFN0YXRlIHx8IGlzQ2hlY2tlZFN0YXRlID09PSAtMSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW107XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICA8IS0tIG5vdCBmb3VuZCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiKG56U2VsZWN0U2VydmljZS5pc1Nob3dOb3RGb3VuZCkgJiYgbm90Rm91bmRDb250ZW50U2hvd1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vdEZvdW5kQ29udGVudEN1c3RvbVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm5vdEZvdW5kQ29udGVudEN1c3RvbVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPG56LWVtYmVkLWVtcHR5ICpuZ0lmPVwiIW5vdEZvdW5kQ29udGVudEN1c3RvbVwiIFtuekNvbXBvbmVudE5hbWVdPVwiJ3NlbGVjdCdcIiBbc3BlY2lmaWNDb250ZW50XT1cIm5vdEZvdW5kQ29udGVudCFcIj48L256LWVtYmVkLWVtcHR5PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gY29udGVudCAtLT5cclxuICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XHJcbiAgICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxyXG4gICAgW21heEJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgICBbbWluQnVmZmVyUHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcclxuICAgIChzY3JvbGxlZEluZGV4Q2hhbmdlKT1cIm9uU2Nyb2xsZWRJbmRleENoYW5nZSgkZXZlbnQpXCJcclxuICAgIFtzdHlsZS5oZWlnaHQucHhdPVwibnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50Lmxlbmd0aCAqIGl0ZW1TaXplXCJcclxuICAgIFtzdHlsZS5tYXgtaGVpZ2h0LnB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCB8IG56RmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlIDogbnpTZWxlY3RTZXJ2aWNlLmZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgICA8IS0tIHNlbGVjdCBhbGwgIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiAhbnpTZWxlY3RTZXJ2aWNlLmlzU2hvd05vdEZvdW5kICYmIHNob3dTZWxlY3RBbGwgJiYgaSA9PT0gMFwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXCIgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXT1cImlzQWxsQ2hlY2tlZCgpID09PSAxXCJcclxuICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVDaGVja2JveENhY2hlKClcIj5cclxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzY1NmM3OSAhaW1wb3J0YW50XCI+e3tzZWxlY3RBbGxMYWJlbH19PC9zdHJvbmc+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAxIHx8ICFpc0FsbENoZWNrZWQoKVwiPjwvaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uIGNtYWNzLWluZGV0ZXJtaW5hdGUtc2VsZWN0aW9uXCIgKm5nSWY9XCJpc0FsbENoZWNrZWQoKSA9PT0gLTFcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBhZGRlZCB0YWcgb3B0aW9uIC0tPlxyXG4gICAgICAgIDxkaXYgY21hY3Mtb3B0aW9uLWxpICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmFkZGVkVGFnT3B0aW9uICYmIGkgPT09IDBcIlxyXG4gICAgICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiIFtuek9wdGlvbl09XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb25cIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIGl0ZW0gLS0+XHJcbiAgICAgICAgPGNtYWNzLW9wdGlvbi1saS12aXJ0dWFsIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIiBbbnpPcHRpb25dPVwiaXRlbVwiPjwvY21hY3Mtb3B0aW9uLWxpLXZpcnR1YWw+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XHJcbjwvZGl2PiJdfQ==