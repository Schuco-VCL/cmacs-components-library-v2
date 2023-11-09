import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsOptionLiComponent } from './cmacs-option-li.component';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@angular/forms";
import * as i7 from "./cmacs-select-unselectable.directive";
import * as i8 from "ng-zorro-antd/empty";
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
    i0.ɵɵlistener("ngModelChange", function CmacsOptionContainerComponent_li_2_ng_template_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r10.searchLabel);
    i0.ɵɵproperty("ngModel", ctx_r10.inputValue);
} }
function CmacsOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsOptionContainerComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.updateCheckboxCache(); });
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
    i0.ɵɵelementStart(0, "li", 27);
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_8_ng_container_2_Template, 2, 1, "ng-container", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 30);
    i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_8_li_4_Template, 1, 2, "li", 6);
    i0.ɵɵpipe(5, "nzFilterOption");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOptionContainerComponent.ɵfac = function CmacsOptionContainerComponent_Factory(t) { return new (t || CmacsOptionContainerComponent)(i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2.NzI18nService)); };
CmacsOptionContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionContainerComponent, selectors: [["", "cmacs-option-container", ""]], viewQuery: function CmacsOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(CmacsOptionLiComponent, 1);
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgTemplateOutlet, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.CmacsSelectUnselectableDirective, i8.NzEmbedEmptyComponent, i9.CmacsOptionLiComponent], pipes: [i10.NzFilterOptionPipe, i10.NzFilterGroupOptionPipe], styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-option-container]',
                exportAs: 'cmacsOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './cmacs-option-container.component.html',
                styleUrls: ['./cmacs-option-container.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVi9ELHdCQUFnRTtJQUNoRSxxQ0FDc0U7SUFBeEMsZ1BBQXVDO0lBRHJFLGlCQUNzRTs7O0lBRDdCLGVBQTZCO0lBQTdCLDREQUE2QjtJQUMvRCw0Q0FBc0I7OztJQVJqQyw2QkFBcUc7SUFDbkcsOEJBQTRDO0lBQzFDLG9HQUE4RDtJQUM5RCxnQ0FBK0M7SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDdEUsaUJBQU07SUFDTixxSUFJYztJQUNoQixpQkFBSzs7OztJQVJZLGVBQWtDO0lBQWxDLHNDQUFrQztJQUNBLGVBQWM7SUFBZCx1Q0FBYzs7O0lBYTdELHdCQUErRzs7O0lBQy9HLDJC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QjtrQkFBekIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNhLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUNZLFFBQVE7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1jb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsYXN0U2Nyb2xsVG9wID0gMDtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgQFZpZXdDaGlsZHJlbihDbWFjc09wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25MaUNvbXBvbmVudD47XHJcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25VbCcsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3Bkb3duVWw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbiAgQElucHV0KCkgdXNlckRyb3Bkb3duID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gIEBJbnB1dCgpIHNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgQElucHV0KCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZChvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAvLyBkZWxheSBhZnRlciBvcGVuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQubGVuZ3RoICYmIG9wdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT5cclxuICAgICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKG8ubnpPcHRpb24ubnpWYWx1ZSwgb3B0aW9uLm56VmFsdWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cclxuICAgICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiAodGFyZ2V0T3B0aW9uLmVsIGFzIGFueSkuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCkge1xyXG4gICAgICAgICAgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLWFueSAqL1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMub25TZWFyY2guZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB0cmFja0xhYmVsKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWw7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IGFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLm56VmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uISk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgdWwgPSB0aGlzLmRyb3Bkb3duVWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHVsLCAnc2Nyb2xsJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodWwgJiYgdWwuc2Nyb2xsVG9wID4gdGhpcy5sYXN0U2Nyb2xsVG9wICYmIHVsLnNjcm9sbEhlaWdodCA8IHVsLmNsaWVudEhlaWdodCArIHVsLnNjcm9sbFRvcCArIDEwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFNjcm9sbFRvcCA9IHVsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdBbGxlIGF1c3fDpGhsZW4nO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTdWNoZSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnamEnOlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICfjgZnjgbnjgabpgbjmip4nO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICfmpJzntKInO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExhYmVsID0gJ1NlYXJjaCc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQWxsQ2hlY2tlZCgpIHtcclxuICAgIGNvbnN0IGxpc3RPZk5vdERpc2FibGVkSXRlbXMgPSB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggPT09ICBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMubnpTZWxlY3RTZXJ2aWNlLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKSB7XHJcbiAgICBjb25zdCBpc0NoZWNrZWRTdGF0ZSA9IHRoaXMuaXNBbGxDaGVja2VkKCk7XHJcblxyXG4gICAgaWYgKCFpc0NoZWNrZWRTdGF0ZSB8fCBpc0NoZWNrZWRTdGF0ZSA9PT0gLTEpIHtcclxuICAgICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShbXSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWwgI2Ryb3Bkb3duVWxcclxuICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudSBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtcm9vdCBjbWFjcy1jdXN0b20tc2Nyb2xsYmFyIGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS12ZXJ0aWNhbFwiXHJcbiAgcm9sZT1cIm1lbnVcIlxyXG4gIHRhYmluZGV4PVwiMFwiPlxyXG4gIDxsaSAqbmdJZj1cInNob3dTZWFyY2ggJiYgIXNob3dDbWFjc1NlYXJjaFwiIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gY21hY3Mtc2VsZWN0LXNlYXJjaFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNpbnB1dFRlbXBsYXRlPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiIGNsYXNzPVwiY21hY3Mtc2VsZWN0LXNlYXJjaC1pY29uXCI+PC9pPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjbWFjcy1zZWxlY3Qtc2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJ7e3NlYXJjaExhYmVsfX1cIiAjaW5wdXRFbGVtZW50IGF1dG9jb21wbGV0ZT1cInNvbWV0aGluZy1uZXdcIlxyXG4gICAgICAgICAgICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2xpPlxyXG4gIDxsaSAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzICYmICFuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQgJiYgc2hvd1NlbGVjdEFsbFwiIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW1cIlxyXG4gICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdPVwiaXNBbGxDaGVja2VkKCkgPT09IDFcIlxyXG4gICAgICAoY2xpY2spPVwidXBkYXRlQ2hlY2tib3hDYWNoZSgpXCJcclxuICA+XHJcbiAgICAgIDxzdHJvbmcgc3R5bGU9XCJjb2xvcjogIzY1NmM3OSAhaW1wb3J0YW50XCI+e3tzZWxlY3RBbGxMYWJlbH19PC9zdHJvbmc+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IDEgfHwgIWlzQWxsQ2hlY2tlZCgpXCI+PC9pPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvbiBjbWFjcy1pbmRldGVybWluYXRlLXNlbGVjdGlvblwiICpuZ0lmPVwiaXNBbGxDaGVja2VkKCkgPT09IC0xXCI+PC9zcGFuPlxyXG4gIDwvbGk+XHJcbiAgPGxpICpuZ0lmPVwiKG56U2VsZWN0U2VydmljZS5pc1Nob3dOb3RGb3VuZCB8fCB1c2VyRHJvcGRvd24pICYmIG5vdEZvdW5kQ29udGVudFNob3dcIlxyXG4gICAgICBjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1ub3QtZm91bmQtY3VzdG9tXT1cIm5vdEZvdW5kQ29udGVudEN1c3RvbVwiXHJcbiAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0gYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbmdUZW1wbGF0ZU91dGxldF09XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDxuei1lbWJlZC1lbXB0eSAqbmdJZj1cIiFub3RGb3VuZENvbnRlbnRDdXN0b21cIiBbbnpDb21wb25lbnROYW1lXT1cIidzZWxlY3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJub3RGb3VuZENvbnRlbnQhXCI+PC9uei1lbWJlZC1lbXB0eT5cclxuICA8L2xpPlxyXG4gIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmFkZGVkVGFnT3B0aW9uXCJcclxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgW256T3B0aW9uXT1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQgfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcclxuICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgW256T3B0aW9uXT1cIm9wdGlvblwiPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXBcIlxyXG4gICAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50IHwgbnpGaWx0ZXJHcm91cE9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7IHRyYWNrQnk6IHRyYWNrTGFiZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZVwiXHJcbiAgICAgIFthdHRyLnRpdGxlXT1cImdyb3VwLmlzTGFiZWxTdHJpbmcgPyBncm91cC5uekxhYmVsIDogJydcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqY21hY3NTdHJpbmdUZW1wbGF0ZU91dGxldD1cImdyb3VwLm56TGFiZWxcIj4ge3tncm91cC5uekxhYmVsfX0gPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3RcIj5cclxuICAgICAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOm56U2VsZWN0U2VydmljZS5zZXJ2ZXJTZWFyY2g7IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxyXG4gICAgICAgIFtuek1lbnVJdGVtU2VsZWN0ZWRJY29uXT1cIm56TWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9saT5cclxuICA8bGkgY21hY3Mtb3B0aW9uLWxpXHJcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG56U2VsZWN0U2VydmljZS5saXN0T2ZUYWdPcHRpb24gfCBuekZpbHRlck9wdGlvbiA6IG56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSA6IG56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlIFwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=