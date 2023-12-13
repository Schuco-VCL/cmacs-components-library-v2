import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsOptionLiComponent } from './cmacs-option-li.component';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/empty";
import * as i8 from "./cmacs-select-unselectable.directive";
import * as i9 from "./cmacs-option-li.component";
import * as i10 from "./cmacs-option.pipe";
const _c0 = ["dropdownUl"];
const _c1 = ["inputElement"];
const _c2 = ["cmacs-option-container", ""];
function CmacsOptionContainerComponent_li_2_ng_template_2_Template(rf, ctx) { }
function CmacsOptionContainerComponent_li_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelement(0, "i", 13);
    i0.ɵɵelementStart(1, "input", 14, 15);
    i0.ɵɵlistener("ngModelChange", function CmacsOptionContainerComponent_li_2_ng_template_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.setInputValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r10.searchLabel);
    i0.ɵɵproperty("ngModel", ctx_r10.inputValue);
} }
function CmacsOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8)(1, "div", 9);
    i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, CmacsOptionContainerComponent_li_2_ng_template_5_Template, 3, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.inputValue);
} }
function CmacsOptionContainerComponent_li_3_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} }
function CmacsOptionContainerComponent_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 21);
} }
function CmacsOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵlistener("click", function CmacsOptionContainerComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.updateCheckboxCache()); });
    i0.ɵɵelementStart(1, "strong", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_i_3_Template, 1, 0, "i", 18);
    i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_3_span_4_Template, 1, 0, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx_r2.isAllChecked() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectAllLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isAllChecked() === 1 || !ctx_r2.isAllChecked());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isAllChecked() === -1);
} }
function CmacsOptionContainerComponent_li_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.notFoundContentCustom);
} }
function CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-embed-empty", 25);
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r19.notFoundContent);
} }
function CmacsOptionContainerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 22);
    i0.ɵɵtemplate(1, CmacsOptionContainerComponent_li_4_ng_container_1_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template, 1, 2, "nz-embed-empty", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-not-found-custom", ctx_r3.notFoundContentCustom);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.notFoundContentCustom);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.notFoundContentCustom);
} }
function CmacsOptionContainerComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r4.nzMenuItemSelectedIcon)("nzOption", ctx_r4.nzSelectService.addedTagOption);
} }
function CmacsOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r5.nzMenuItemSelectedIcon)("nzOption", option_r20);
} }
function CmacsOptionContainerComponent_li_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r21 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", group_r21.nzLabel, " ");
} }
function CmacsOptionContainerComponent_li_8_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r23.nzMenuItemSelectedIcon)("nzOption", option_r25);
} }
function CmacsOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 27)(1, "div", 28);
    i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_8_ng_container_2_Template, 2, 1, "ng-container", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 30);
    i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_8_li_4_Template, 1, 2, "li", 6);
    i0.ɵɵpipe(5, "nzFilterOption");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r21 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("title", group_r21.isLabelString ? group_r21.nzLabel : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsStringTemplateOutlet", group_r21.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 4, group_r21.listOfNzOptionComponent, ctx_r6.nzSelectService.searchValue, ctx_r6.nzSelectService.filterOption, ctx_r6.nzSelectService.serverSearch))("ngForTrackBy", ctx_r6.trackValue);
} }
function CmacsOptionContainerComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r7.nzMenuItemSelectedIcon)("nzOption", option_r26);
} }
export class CmacsOptionContainerComponent {
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout(() => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                const targetOption = this.listOfNzOptionLiComponent.find(o => this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue));
                /* tslint:disable:no-any */
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
                /* tslint:enable:no-any */
            }
        });
    }
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.onSearch.emit(value);
    }
    trackLabel(_index, option) {
        return option.nzLabel;
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    constructor(nzSelectService, cdr, ngZone, i18n) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.notFoundContentShow = true;
        this.userDropdown = false;
        this.showSearch = false;
        this.showSelectAll = true;
        this.selectAllLabel = 'Select All';
        this.searchLabel = 'Search';
        this.showCmacsSearch = false;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(() => {
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe(e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run(() => {
                        this.nzScrollToBottom.emit();
                    });
                }
            });
        });
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
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
        if (this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length) {
            return 1;
        }
        else if (!this.nzSelectService.listOfCachedSelectedOption.length) {
            return 0;
        }
        else {
            return -1;
        }
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsOptionContainerComponent_Factory(t) { return new (t || CmacsOptionContainerComponent)(i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOptionContainerComponent, selectors: [["", "cmacs-option-container", ""]], viewQuery: function CmacsOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 7);
            i0.ɵɵviewQuery(CmacsOptionLiComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
        } }, inputs: { nzNotFoundContent: "nzNotFoundContent", notFoundContentShow: "notFoundContentShow", userDropdown: "userDropdown", showSearch: "showSearch", showSelectAll: "showSelectAll", selectAllLabel: "selectAllLabel", searchLabel: "searchLabel", showCmacsSearch: "showCmacsSearch", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", notFoundContentCustom: "notFoundContentCustom" }, outputs: { nzScrollToBottom: "nzScrollToBottom", onSearch: "onSearch" }, exportAs: ["cmacsOptionContainer"], attrs: _c2, decls: 12, vars: 25, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "cmacs-custom-scrollbar", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["class", "ant-select-dropdown-menu-item cmacs-select-search", 4, "ngIf"], ["class", "ant-select-dropdown-menu-item", 3, "ant-select-dropdown-menu-item-selected", "click", 4, "ngIf"], ["cmacs-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 3, "cmacs-not-found-custom", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-select-dropdown-menu-item", "cmacs-select-search"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], ["inputTemplate", ""], ["nz-icon", "", "nzType", "search", 1, "cmacs-select-search-icon"], ["autocomplete", "something-new", 1, "cmacs-select-search-input", 3, "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown-menu-item", 3, "click"], [2, "color", "#656c79 !important"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf"], ["class", "ant-select-selected-icon cmacs-indeterminate-selection", 4, "ngIf"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"], [1, "ant-select-selected-icon", "cmacs-indeterminate-selection"], ["cmacs-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "nzComponentName", "specificContent", 4, "ngIf"], [3, "nzComponentName", "specificContent"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "cmacsStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function CmacsOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0, 1);
            i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_Template, 7, 2, "li", 2);
            i0.ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_Template, 5, 5, "li", 3);
            i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_4_Template, 3, 4, "li", 4);
            i0.ɵɵtemplate(5, CmacsOptionContainerComponent_li_5_Template, 1, 2, "li", 5);
            i0.ɵɵtemplate(6, CmacsOptionContainerComponent_li_6_Template, 1, 2, "li", 6);
            i0.ɵɵpipe(7, "nzFilterOption");
            i0.ɵɵtemplate(8, CmacsOptionContainerComponent_li_8_Template, 6, 9, "li", 7);
            i0.ɵɵpipe(9, "nzFilterGroupOption");
            i0.ɵɵtemplate(10, CmacsOptionContainerComponent_li_10_Template, 1, 2, "li", 6);
            i0.ɵɵpipe(11, "nzFilterOption");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showSearch && !ctx.showCmacsSearch);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags && !ctx.nzSelectService.isShowNotFound && ctx.showSelectAll);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx.nzSelectService.isShowNotFound || ctx.userDropdown) && ctx.notFoundContentShow);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(7, 10, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(9, 15, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(11, 20, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective, i7.NzEmbedEmptyComponent, i8.CmacsSelectUnselectableDirective, i9.CmacsOptionLiComponent, i10.NzFilterGroupOptionPipe, i10.NzFilterOptionPipe], styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom:hover,.cmacs-not-found-custom{background-color:#fff;padding:0}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionContainerComponent, [{
        type: Component,
        args: [{ selector: '[cmacs-option-container]', exportAs: 'cmacsOptionContainer', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root cmacs-custom-scrollbar ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"showSearch && !showCmacsSearch\" class=\"ant-select-dropdown-menu-item cmacs-select-search\">\r\n    <div class=\"ant-select-search__field__wrap\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}</span>\r\n    </div>\r\n    <ng-template #inputTemplate>\r\n      <i nz-icon nzType=\"search\" class=\"cmacs-select-search-icon\"></i>\r\n      <input class=\"cmacs-select-search-input\" placeholder=\"{{searchLabel}}\" #inputElement autocomplete=\"something-new\"\r\n             [ngModel]=\"inputValue\" (ngModelChange)=\"setInputValue($event)\">\r\n    </ng-template>\r\n  </li>\r\n  <li *ngIf=\"nzSelectService.isMultipleOrTags && !nzSelectService.isShowNotFound && showSelectAll\" class=\"ant-select-dropdown-menu-item\"\r\n      [class.ant-select-dropdown-menu-item-selected]=\"isAllChecked() === 1\"\r\n      (click)=\"updateCheckboxCache()\"\r\n  >\r\n      <strong style=\"color: #656c79 !important\">{{selectAllLabel}}</strong>\r\n      <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"isAllChecked() === 1 || !isAllChecked()\"></i>\r\n      <span class=\"ant-select-selected-icon cmacs-indeterminate-selection\" *ngIf=\"isAllChecked() === -1\"></span>\r\n  </li>\r\n  <li *ngIf=\"(nzSelectService.isShowNotFound || userDropdown) && notFoundContentShow\"\r\n      cmacs-select-unselectable\r\n      [class.cmacs-not-found-custom]=\"notFoundContentCustom\"\r\n      class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <ng-container *ngIf=\"notFoundContentCustom\" [ngTemplateOutlet]=\"notFoundContentCustom\"></ng-container>\r\n    <nz-embed-empty *ngIf=\"!notFoundContentCustom\" [nzComponentName]=\"'select'\" [specificContent]=\"notFoundContent!\"></nz-embed-empty>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li cmacs-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li cmacs-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n", styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom:hover,.cmacs-not-found-custom{background-color:#fff;padding:0}\n"] }]
    }], function () { return [{ type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i2.NzI18nService }]; }, { listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [CmacsOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl', { static: true }]
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], nzNotFoundContent: [{
            type: Input
        }], notFoundContentShow: [{
            type: Input
        }], userDropdown: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], showSelectAll: [{
            type: Input
        }], selectAllLabel: [{
            type: Input
        }], searchLabel: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], notFoundContentCustom: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }], onSearch: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVi9ELHdCQUFnRTtJQUNoRSxxQ0FDc0U7SUFBeEMsK01BQWlCLGVBQUEsNkJBQXFCLENBQUEsSUFBQztJQURyRSxpQkFDc0U7OztJQUQ3QixlQUE2QjtJQUE3Qiw0REFBNkI7SUFDL0QsNENBQXNCOzs7SUFSakMsNkJBQXFHLGFBQUE7SUFFakcsb0dBQThEO0lBQzlELGdDQUErQztJQUFBLFlBQWM7SUFBQSxpQkFBTyxFQUFBO0lBRXRFLHFJQUljO0lBQ2hCLGlCQUFLOzs7O0lBUlksZUFBa0M7SUFBbEMsc0NBQWtDO0lBQ0EsZUFBYztJQUFkLHVDQUFjOzs7SUFhN0Qsd0JBQStHOzs7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QUFxQjtrQkFBN0IsS0FBSztZQUNhLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUNZLFFBQVE7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1jb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZHJlbihDbWFjc09wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25MaUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAvLyBkZWxheSBhZnRlciBvcGVuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQubGVuZ3RoICYmIG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT5cclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG8ubnpPcHRpb24ubnpWYWx1ZSwgb3B0aW9uLm56VmFsdWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cclxuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xyXG4gICAgICAgICAgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMub25TZWFyY2guZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uISk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgdWwgPSB0aGlzLmRyb3Bkb3duVWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodWwgJiYgdWwuc2Nyb2xsVG9wID4gdGhpcy5sYXN0U2Nyb2xsVG9wICYmIHVsLnNjcm9sbEhlaWdodCA8IHVsLmNsaWVudEhlaWdodCArIHVsLnNjcm9sbFRvcCArIDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdBbGxlIGF1c3fDpGhsZW4nO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTdWNoZSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQWxsQ2hlY2tlZCgpIHtcclxuICAgIGNvbnN0IGxpc3RPZk5vdERpc2FibGVkSXRlbXMgPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPT09ICBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKSB7XHJcbiAgICBjb25zdCBpc0NoZWNrZWRTdGF0ZSA9IHRoaXMuaXNBbGxDaGVja2VkKCk7XHJcblxyXG4gICAgaWYgKCFpc0NoZWNrZWRTdGF0ZSB8fCBpc0NoZWNrZWRTdGF0ZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPHVsICNkcm9wZG93blVsXHJcbiAgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUgYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LXJvb3QgY21hY3MtY3VzdG9tLXNjcm9sbGJhciBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtdmVydGljYWxcIlxyXG4gIHJvbGU9XCJtZW51XCJcclxuICB0YWJpbmRleD1cIjBcIj5cclxuICA8bGkgKm5nSWY9XCJzaG93U2VhcmNoICYmICFzaG93Q21hY3NTZWFyY2hcIiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGNtYWNzLXNlbGVjdC1zZWFyY2hcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJzZWFyY2hcIiBjbGFzcz1cImNtYWNzLXNlbGVjdC1zZWFyY2gtaWNvblwiPjwvaT5cclxuICAgICAgPGlucHV0IGNsYXNzPVwiY21hY3Mtc2VsZWN0LXNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwie3tzZWFyY2hMYWJlbH19XCIgI2lucHV0RWxlbWVudCBhdXRvY29tcGxldGU9XCJzb21ldGhpbmctbmV3XCJcclxuICAgICAgICAgICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRJbnB1dFZhbHVlKCRldmVudClcIj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9saT5cclxuICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiAhbnpTZWxlY3RTZXJ2aWNlLmlzU2hvd05vdEZvdW5kICYmIHNob3dTZWxlY3RBbGxcIiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXCJcclxuICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXT1cImlzQWxsQ2hlY2tlZCgpID09PSAxXCJcclxuICAgICAgKGNsaWNrKT1cInVwZGF0ZUNoZWNrYm94Q2FjaGUoKVwiXHJcbiAgPlxyXG4gICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICM2NTZjNzkgIWltcG9ydGFudFwiPnt7c2VsZWN0QWxsTGFiZWx9fTwvc3Ryb25nPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAxIHx8ICFpc0FsbENoZWNrZWQoKVwiPjwvaT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb24gY21hY3MtaW5kZXRlcm1pbmF0ZS1zZWxlY3Rpb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAtMVwiPjwvc3Bhbj5cclxuICA8L2xpPlxyXG4gIDxsaSAqbmdJZj1cIihuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQgfHwgdXNlckRyb3Bkb3duKSAmJiBub3RGb3VuZENvbnRlbnRTaG93XCJcclxuICAgICAgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICAgICBbY2xhc3MuY21hY3Mtbm90LWZvdW5kLWN1c3RvbV09XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bnotZW1iZWQtZW1wdHkgKm5nSWY9XCIhbm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW256Q29tcG9uZW50TmFtZV09XCInc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50IVwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgPC9saT5cclxuICA8bGkgY21hY3Mtb3B0aW9uLWxpXHJcbiAgICAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb25cIj5cclxuICA8L2xpPlxyXG4gIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50IHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDsgdHJhY2tCeTogdHJhY2tWYWx1ZVwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICA8L2xpPlxyXG4gIDxsaSBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwXCJcclxuICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB8IG56RmlsdGVyR3JvdXBPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDpuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja0xhYmVsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIlxyXG4gICAgICBbYXR0ci50aXRsZV09XCJncm91cC5pc0xhYmVsU3RyaW5nID8gZ3JvdXAubnpMYWJlbCA6ICcnXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKmNtYWNzU3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJncm91cC5uekxhYmVsXCI+IHt7Z3JvdXAubnpMYWJlbH19IDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC1saXN0XCI+XHJcbiAgICAgIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50IHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDpuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcclxuICAgICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgICBbbnpPcHRpb25dPVwib3B0aW9uXCI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mVGFnT3B0aW9uIHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDsgdHJhY2tCeTogdHJhY2tWYWx1ZSBcIlxyXG4gICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICBbbnpPcHRpb25dPVwib3B0aW9uXCI+XHJcbiAgPC9saT5cclxuPC91bD5cclxuIl19