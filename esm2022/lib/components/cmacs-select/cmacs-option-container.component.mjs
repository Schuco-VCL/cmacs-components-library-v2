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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVi9ELHdCQUFnRTtJQUNoRSxxQ0FDc0U7SUFBeEMsK01BQWlCLGVBQUEsNkJBQXFCLENBQUEsSUFBQztJQURyRSxpQkFDc0U7OztJQUQ3QixlQUE2QjtJQUE3Qiw0REFBNkI7SUFDL0QsNENBQXNCOzs7SUFSakMsNkJBQXFHLGFBQUE7SUFFakcsb0dBQThEO0lBQzlELGdDQUErQztJQUFBLFlBQWM7SUFBQSxpQkFBTyxFQUFBO0lBRXRFLHFJQUljO0lBQ2hCLGlCQUFLOzs7O0lBUlksZUFBa0M7SUFBbEMsc0NBQWtDO0lBQ0EsZUFBYztJQUFkLHVDQUFjOzs7SUFhN0Qsd0JBQStHOzs7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QUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ2EsZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ1ksUUFBUTtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25MaUNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtb3B0aW9uLWNvbnRhaW5lcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb25Db250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG4gIGlucHV0VmFsdWU6IHN0cmluZztcclxuICBAVmlld0NoaWxkcmVuKENtYWNzT3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc09wdGlvbkxpQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKCdkcm9wZG93blVsJywgeyBzdGF0aWM6IHRydWUgfSkgZHJvcGRvd25VbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnRTaG93ID0gdHJ1ZTtcclxuICBASW5wdXQoKSB1c2VyRHJvcGRvd24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgQElucHV0KCkgc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICBASW5wdXQoKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnRDdXN0b206IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIC8vIGRlbGF5IGFmdGVyIG9wZW5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGggJiYgb3B0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PlxyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgoby5uek9wdGlvbi5uelZhbHVlLCBvcHRpb24ubnpWYWx1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xyXG4gICAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKSB7XHJcbiAgICAgICAgICAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tYW55ICovXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHRyYWNrTGFiZWwoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbDtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChvcHRpb24hKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCB1bCA9IHRoaXMuZHJvcGRvd25VbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odWwsICdzY3JvbGwnKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGlmICh1bCAmJiB1bC5zY3JvbGxUb3AgPiB0aGlzLmxhc3RTY3JvbGxUb3AgJiYgdWwuc2Nyb2xsSGVpZ2h0IDwgdWwuY2xpZW50SGVpZ2h0ICsgdWwuc2Nyb2xsVG9wICsgMTApIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gdWwuc2Nyb2xsVG9wO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ0FsbGUgYXVzd8OkaGxlbic7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1N1Y2hlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdqYSc6XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ+OBmeOBueOBpumBuOaKnic7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ+aknOe0oic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBbGxDaGVja2VkKCkge1xyXG4gICAgY29uc3QgbGlzdE9mTm90RGlzYWJsZWRJdGVtcyA9IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmZpbHRlcihpdGVtID0+ICFpdGVtLm56RGlzYWJsZWQpO1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCA9PT0gIGxpc3RPZk5vdERpc2FibGVkSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2hlY2tib3hDYWNoZSgpIHtcclxuICAgIGNvbnN0IGlzQ2hlY2tlZFN0YXRlID0gdGhpcy5pc0FsbENoZWNrZWQoKTtcclxuXHJcbiAgICBpZiAoIWlzQ2hlY2tlZFN0YXRlIHx8IGlzQ2hlY2tlZFN0YXRlID09PSAtMSkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gW107XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKFtdLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgI2Ryb3Bkb3duVWxcclxuICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudSBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtcm9vdCBjbWFjcy1jdXN0b20tc2Nyb2xsYmFyIGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS12ZXJ0aWNhbFwiXHJcbiAgcm9sZT1cIm1lbnVcIlxyXG4gIHRhYmluZGV4PVwiMFwiPlxyXG4gIDxsaSAqbmdJZj1cInNob3dTZWFyY2ggJiYgIXNob3dDbWFjc1NlYXJjaFwiIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gY21hY3Mtc2VsZWN0LXNlYXJjaFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNpbnB1dFRlbXBsYXRlPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiY21hY3Mtc2VsZWN0LXNlYXJjaC1pY29uXCI+PC9pPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbWFjcy1zZWxlY3Qtc2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJ7e3NlYXJjaExhYmVsfX1cIiAjaW5wdXRFbGVtZW50IGF1dG9jb21wbGV0ZT1cInNvbWV0aGluZy1uZXdcIlxyXG4gICAgICAgICAgICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2xpPlxyXG4gIDxsaSAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmICFuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQgJiYgc2hvd1NlbGVjdEFsbFwiIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1cIlxyXG4gICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdPVwiaXNBbGxDaGVja2VkKCkgPT09IDFcIlxyXG4gICAgICAoY2xpY2spPVwidXBkYXRlQ2hlY2tib3hDYWNoZSgpXCJcclxuICA+XHJcbiAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzY1NmM3OSAhaW1wb3J0YW50XCI+e3tzZWxlY3RBbGxMYWJlbH19PC9zdHJvbmc+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IDEgfHwgIWlzQWxsQ2hlY2tlZCgpXCI+PC9pPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvbiBjbWFjcy1pbmRldGVybWluYXRlLXNlbGVjdGlvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IC0xXCI+PC9zcGFuPlxyXG4gIDwvbGk+XHJcbiAgPGxpICpuZ0lmPVwiKG56U2VsZWN0U2VydmljZS5pc1Nob3dOb3RGb3VuZCB8fCB1c2VyRHJvcGRvd24pICYmIG5vdEZvdW5kQ29udGVudFNob3dcIlxyXG4gICAgICBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1ub3QtZm91bmQtY3VzdG9tXT1cIm5vdEZvdW5kQ29udGVudEN1c3RvbVwiXHJcbiAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbmdUZW1wbGF0ZU91dGxldF09XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuei1lbWJlZC1lbXB0eSAqbmdJZj1cIiFub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbnpDb21wb25lbnROYW1lXT1cIidzZWxlY3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJub3RGb3VuZENvbnRlbnQhXCI+PC9uei1lbWJlZC1lbXB0eT5cclxuICA8L2xpPlxyXG4gIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmFkZGVkVGFnT3B0aW9uXCJcclxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgW256T3B0aW9uXT1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQgfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcclxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgW256T3B0aW9uXT1cIm9wdGlvblwiPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXBcIlxyXG4gICAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IHwgbnpGaWx0ZXJHcm91cE9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7IHRyYWNrQnk6IHRyYWNrTGFiZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZVwiXHJcbiAgICAgIFthdHRyLnRpdGxlXT1cImdyb3VwLmlzTGFiZWxTdHJpbmcgPyBncm91cC5uekxhYmVsIDogJydcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqY21hY3NTdHJpbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwLm56TGFiZWxcIj4ge3tncm91cC5uekxhYmVsfX0gPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3RcIj5cclxuICAgICAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxyXG4gICAgICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9saT5cclxuICA8bGkgY21hY3Mtb3B0aW9uLWxpXHJcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZUYWdPcHRpb24gfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlIFwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=