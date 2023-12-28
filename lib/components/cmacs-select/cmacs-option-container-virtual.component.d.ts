import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { CmacsSelectService } from './cmacs-select.service';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsOptionComponent } from './cmacs-option.component';
import * as i0 from "@angular/core";
export declare class CmacsOptionContainerVirtualComponent implements OnInit, OnDestroy {
    nzSelectService: CmacsSelectService;
    private i18n;
    private cdr;
    private destroy$;
    private scrolledIndex;
    readonly itemSize = 32;
    readonly maxItemLength = 8;
    showSelectAll: boolean;
    showSearch: boolean;
    selectAllLabel: string;
    searchLabel: string;
    showCmacsSearch: boolean;
    notFoundContentShow: boolean;
    notFoundContentCustom: TemplateRef<void>;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    readonly nzScrollToBottom: EventEmitter<void>;
    readonly onSearch: EventEmitter<string>;
    constructor(nzSelectService: CmacsSelectService, i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onScrolledIndexChange(index: number): void;
    trackValue(_index: number, option: CmacsOptionComponent): any;
    setLocale(): void;
    isAllChecked(): number;
    updateCheckboxCache(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOptionContainerVirtualComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOptionContainerVirtualComponent, "cmacs-option-container-virtual", never, { "showSelectAll": { "alias": "showSelectAll"; "required": false; }; "showSearch": { "alias": "showSearch"; "required": false; }; "selectAllLabel": { "alias": "selectAllLabel"; "required": false; }; "searchLabel": { "alias": "searchLabel"; "required": false; }; "showCmacsSearch": { "alias": "showCmacsSearch"; "required": false; }; "notFoundContentShow": { "alias": "notFoundContentShow"; "required": false; }; "notFoundContentCustom": { "alias": "notFoundContentCustom"; "required": false; }; "nzMenuItemSelectedIcon": { "alias": "nzMenuItemSelectedIcon"; "required": false; }; }, { "nzScrollToBottom": "nzScrollToBottom"; "onSearch": "onSearch"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-option-container-virtual.component.d.ts.map