import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { CmacsSelectService } from './cmacs-select.service';
import { CmacsOptionComponent } from './cmacs-option.component';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import * as i0 from "@angular/core";
export declare class CmacsSelectTopControlComponent implements OnInit, OnDestroy, OnChanges {
    private renderer;
    private ref;
    nzSelectService: CmacsSelectService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    inputValue: string;
    inputValueEditableMode: string;
    searchValue: string;
    isComposing: boolean;
    isComposingCustom: boolean;
    private destroy$;
    inputElement: ElementRef;
    inputElementCustom: ElementRef;
    cmacsSelectTagWrapper: ElementRef;
    cmacsSelectTagWrapperInner: ElementRef;
    nzShowSearch: boolean;
    showCustomSearch: boolean;
    showCmacsSearch: boolean;
    nzPlaceHolder: string;
    tagsOut: boolean;
    nzOpen: boolean;
    cmacsOpen: boolean;
    cmacsEditable: boolean;
    action: boolean;
    nzMaxTagCount: number;
    nzAllowClear: boolean;
    nzShowArrow: boolean;
    nzLoading: boolean;
    nzSuffixIcon: TemplateRef<void>;
    nzClearIcon: TemplateRef<void>;
    nzRemoveIcon: TemplateRef<void>;
    userDropdown: boolean;
    maxTagCountAuto: boolean;
    nzMaxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    nzTokenSeparators: string[];
    listOfCachedSelectedOption: any[];
    checkWrapperSpace(): void;
    onClearSelection(e: MouseEvent): void;
    getSelectedValues(): any[];
    setInputValue(value: string): void;
    setInputValueCustom(value: string): void;
    get placeHolderDisplay(): string;
    get selectedValueStyle(): {
        [key: string]: string;
    };
    get showCustomSearchStyle(): {
        [key: string]: string;
    };
    trackValue(_index: number, option: CmacsOptionComponent): any;
    updateWidth(): void;
    updateWidthCustom(): void;
    removeSelectedValue(option: CmacsOptionComponent, e: MouseEvent): void;
    constructor(renderer: Renderer2, ref: ElementRef, nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    checkResizeEvent(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSelectTopControlComponent, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSelectTopControlComponent, "[cmacs-select-top-control]", ["cmacsSelectTopControl"], { "searchValue": "searchValue"; "nzShowSearch": "nzShowSearch"; "showCustomSearch": "showCustomSearch"; "showCmacsSearch": "showCmacsSearch"; "nzPlaceHolder": "nzPlaceHolder"; "tagsOut": "tagsOut"; "nzOpen": "nzOpen"; "cmacsOpen": "cmacsOpen"; "cmacsEditable": "cmacsEditable"; "action": "action"; "nzMaxTagCount": "nzMaxTagCount"; "nzAllowClear": "nzAllowClear"; "nzShowArrow": "nzShowArrow"; "nzLoading": "nzLoading"; "nzSuffixIcon": "nzSuffixIcon"; "nzClearIcon": "nzClearIcon"; "nzRemoveIcon": "nzRemoveIcon"; "userDropdown": "userDropdown"; "maxTagCountAuto": "maxTagCountAuto"; "nzMaxTagPlaceholder": "nzMaxTagPlaceholder"; "nzTokenSeparators": "nzTokenSeparators"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-select-top-control.component.d.ts.map