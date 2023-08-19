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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUdOLFNBQVMsRUFDVCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVi9ELHdCQUFnRTtJQUNoRSxxQ0FDc0U7SUFBeEMsZ1BBQXVDO0lBRHJFLGlCQUNzRTs7O0lBRDdCLGVBQTZCO0lBQTdCLDREQUE2QjtJQUMvRCw0Q0FBc0I7OztJQVJqQyw2QkFBcUc7SUFDbkcsOEJBQTRDO0lBQzFDLG9HQUE4RDtJQUM5RCxnQ0FBK0M7SUFBQSxZQUFjO0lBQUEsaUJBQU87SUFDdEUsaUJBQU07SUFDTixxSUFJYztJQUNoQixpQkFBSzs7OztJQVJZLGVBQWtDO0lBQWxDLHNDQUFrQztJQUNBLGVBQWM7SUFBZCx1Q0FBYzs7O0lBYTdELHdCQUErRzs7O0lBQy9HLDJC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QUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxzQkFBc0I7a0JBQTlCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDYSxnQkFBZ0I7a0JBQWxDLE1BQU07WUFDWSxRQUFRO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tbGkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1vcHRpb24tY29udGFpbmVyXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbkNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgbGFzdFNjcm9sbFRvcCA9IDA7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ21hY3NPcHRpb25MaUNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uTGlDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93blVsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudFNob3cgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93U2VsZWN0QWxsID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICBASW5wdXQoKSBzZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gIEBJbnB1dCgpIHNob3dDbWFjc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLy8gZGVsYXkgYWZ0ZXIgb3BlblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCAmJiBvcHRpb24pIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvLm56T3B0aW9uLm56VmFsdWUsIG9wdGlvbi5uelZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXHJcbiAgICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgKHRhcmdldE9wdGlvbi5lbCBhcyBhbnkpLnNjcm9sbEludG9WaWV3SWZOZWVkZWQpIHtcclxuICAgICAgICAgICh0YXJnZXRPcHRpb24uZWwgYXMgYW55KS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTpuby1hbnkgKi9cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tMYWJlbChfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50KTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKG9wdGlvbiEpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVsID0gdGhpcy5kcm9wZG93blVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih1bCwgJ3Njcm9sbCcpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgaWYgKHVsICYmIHVsLnNjcm9sbFRvcCA+IHRoaXMubGFzdFNjcm9sbFRvcCAmJiB1bC5zY3JvbGxIZWlnaHQgPCB1bC5jbGllbnRIZWlnaHQgKyB1bC5zY3JvbGxUb3AgKyAxMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RTY3JvbGxUb3AgPSB1bC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uelNjcm9sbFRvQm90dG9tLmVtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QWxsTGFiZWwgPSAnQWxsZSBhdXN3w6RobGVuJztcclxuICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU3VjaGUnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgQWxsJztcclxuICAgICAgICAgIHRoaXMuc2VhcmNoTGFiZWwgPSAnU2VhcmNoJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hMYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0FsbENoZWNrZWQoKSB7XHJcbiAgICBjb25zdCBsaXN0T2ZOb3REaXNhYmxlZEl0ZW1zID0gdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Db21wb25lbnQuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0ubnpEaXNhYmxlZCk7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID09PSAgbGlzdE9mTm90RGlzYWJsZWRJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGVja2JveENhY2hlKCkge1xyXG4gICAgY29uc3QgaXNDaGVja2VkU3RhdGUgPSB0aGlzLmlzQWxsQ2hlY2tlZCgpO1xyXG5cclxuICAgIGlmICghaXNDaGVja2VkU3RhdGUgfHwgaXNDaGVja2VkU3RhdGUgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbXTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mRmlsdGVyZWRPcHRpb24uZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIGlmICghb3B0aW9uLm56RGlzYWJsZWQpIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoW10sIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIiwiPHVsICNkcm9wZG93blVsXHJcbiAgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUgYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LXJvb3QgY21hY3MtY3VzdG9tLXNjcm9sbGJhciBhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtdmVydGljYWxcIlxyXG4gIHJvbGU9XCJtZW51XCJcclxuICB0YWJpbmRleD1cIjBcIj5cclxuICA8bGkgKm5nSWY9XCJzaG93U2VhcmNoICYmICFzaG93Q21hY3NTZWFyY2hcIiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGNtYWNzLXNlbGVjdC1zZWFyY2hcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJzZWFyY2hcIiBjbGFzcz1cImNtYWNzLXNlbGVjdC1zZWFyY2gtaWNvblwiPjwvaT5cclxuICAgICAgPGlucHV0IGNsYXNzPVwiY21hY3Mtc2VsZWN0LXNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwie3tzZWFyY2hMYWJlbH19XCIgI2lucHV0RWxlbWVudCBhdXRvY29tcGxldGU9XCJzb21ldGhpbmctbmV3XCJcclxuICAgICAgICAgICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJzZXRJbnB1dFZhbHVlKCRldmVudClcIj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC9saT5cclxuICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFncyAmJiAhbnpTZWxlY3RTZXJ2aWNlLmlzU2hvd05vdEZvdW5kICYmIHNob3dTZWxlY3RBbGxcIiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXCJcclxuICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXT1cImlzQWxsQ2hlY2tlZCgpID09PSAxXCJcclxuICAgICAgKGNsaWNrKT1cInVwZGF0ZUNoZWNrYm94Q2FjaGUoKVwiXHJcbiAgPlxyXG4gICAgICA8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICM2NTZjNzkgIWltcG9ydGFudFwiPnt7c2VsZWN0QWxsTGFiZWx9fTwvc3Ryb25nPlxyXG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAxIHx8ICFpc0FsbENoZWNrZWQoKVwiPjwvaT5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb24gY21hY3MtaW5kZXRlcm1pbmF0ZS1zZWxlY3Rpb25cIiAqbmdJZj1cImlzQWxsQ2hlY2tlZCgpID09PSAtMVwiPjwvc3Bhbj5cclxuICA8L2xpPlxyXG4gIDxsaSAqbmdJZj1cIihuelNlbGVjdFNlcnZpY2UuaXNTaG93Tm90Rm91bmQgfHwgdXNlckRyb3Bkb3duKSAmJiBub3RGb3VuZENvbnRlbnRTaG93XCJcclxuICAgICAgY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZVxyXG4gICAgICBbY2xhc3MuY21hY3Mtbm90LWZvdW5kLWN1c3RvbV09XCJub3RGb3VuZENvbnRlbnRDdXN0b21cIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIGFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8bnotZW1iZWQtZW1wdHkgKm5nSWY9XCIhbm90Rm91bmRDb250ZW50Q3VzdG9tXCIgW256Q29tcG9uZW50TmFtZV09XCInc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50IVwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgPC9saT5cclxuICA8bGkgY21hY3Mtb3B0aW9uLWxpXHJcbiAgICAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5hZGRlZFRhZ09wdGlvblwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJuelNlbGVjdFNlcnZpY2UuYWRkZWRUYWdPcHRpb25cIj5cclxuICA8L2xpPlxyXG4gIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50IHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDsgdHJhY2tCeTogdHJhY2tWYWx1ZVwiXHJcbiAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgIFtuek9wdGlvbl09XCJvcHRpb25cIj5cclxuICA8L2xpPlxyXG4gIDxsaSBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwXCJcclxuICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB8IG56RmlsdGVyR3JvdXBPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDpuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja0xhYmVsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVcIlxyXG4gICAgICBbYXR0ci50aXRsZV09XCJncm91cC5pc0xhYmVsU3RyaW5nID8gZ3JvdXAubnpMYWJlbCA6ICcnXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKmNtYWNzU3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJncm91cC5uekxhYmVsXCI+IHt7Z3JvdXAubnpMYWJlbH19IDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC1saXN0XCI+XHJcbiAgICAgIDxsaSBjbWFjcy1vcHRpb24tbGlcclxuICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50IHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDpuelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcclxuICAgICAgICBbbnpNZW51SXRlbVNlbGVjdGVkSWNvbl09XCJuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgICBbbnpPcHRpb25dPVwib3B0aW9uXCI+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNtYWNzLW9wdGlvbi1saVxyXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mVGFnT3B0aW9uIHwgbnpGaWx0ZXJPcHRpb24gOiBuelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUgOiBuelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uIDogbnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaDsgdHJhY2tCeTogdHJhY2tWYWx1ZSBcIlxyXG4gICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibnpNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICBbbnpPcHRpb25dPVwib3B0aW9uXCI+XHJcbiAgPC9saT5cclxuPC91bD5cclxuIl19