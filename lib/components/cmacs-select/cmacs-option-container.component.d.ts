import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { CmacsOptionGroupComponent } from './cmacs-option-group.component';
import { CmacsOptionLiComponent } from './cmacs-option-li.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsOptionContainerComponent implements OnDestroy, OnInit {
    nzSelectService: CmacsSelectService;
    private cdr;
    private ngZone;
    private i18n;
    private destroy$;
    private lastScrollTop;
    inputValue: string;
    listOfNzOptionLiComponent: QueryList<CmacsOptionLiComponent>;
    dropdownUl: ElementRef;
    inputElement: ElementRef;
    nzNotFoundContent: string;
    notFoundContentShow: boolean;
    userDropdown: boolean;
    showSearch: boolean;
    showSelectAll: boolean;
    selectAllLabel: string;
    searchLabel: string;
    showCmacsSearch: boolean;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    notFoundContentCustom: TemplateRef<void>;
    readonly nzScrollToBottom: EventEmitter<void>;
    readonly onSearch: EventEmitter<string>;
    scrollIntoViewIfNeeded(option: CmacsOptionComponent): void;
    setInputValue(value: string): void;
    trackLabel(_index: number, option: CmacsOptionGroupComponent): string | TemplateRef<void>;
    trackValue(_index: number, option: CmacsOptionComponent): any;
    constructor(nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, ngZone: NgZone, i18n: NzI18nService);
    ngOnInit(): void;
    isAllChecked(): 1 | 0 | -1;
    updateCheckboxCache(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOptionContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOptionContainerComponent, "[cmacs-option-container]", ["cmacsOptionContainer"], { "nzNotFoundContent": { "alias": "nzNotFoundContent"; "required": false; }; "notFoundContentShow": { "alias": "notFoundContentShow"; "required": false; }; "userDropdown": { "alias": "userDropdown"; "required": false; }; "showSearch": { "alias": "showSearch"; "required": false; }; "showSelectAll": { "alias": "showSelectAll"; "required": false; }; "selectAllLabel": { "alias": "selectAllLabel"; "required": false; }; "searchLabel": { "alias": "searchLabel"; "required": false; }; "showCmacsSearch": { "alias": "showCmacsSearch"; "required": false; }; "nzMenuItemSelectedIcon": { "alias": "nzMenuItemSelectedIcon"; "required": false; }; "notFoundContentCustom": { "alias": "notFoundContentCustom"; "required": false; }; }, { "nzScrollToBottom": "nzScrollToBottom"; "onSearch": "onSearch"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-option-container.component.d.ts.map