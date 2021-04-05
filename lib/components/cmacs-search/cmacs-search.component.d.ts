import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class CmacsSearchComponent implements ControlValueAccessor, OnInit {
    options: any[];
    disabled: boolean;
    maxTagCount: number;
    allowClear: boolean;
    showSearch: boolean;
    cmacsOpen: boolean;
    tagsOut: boolean;
    size: NzSizeLDSType;
    placeholder: string;
    selected: any;
    selectedChange: EventEmitter<any>;
    mode: 'default' | 'multiple' | 'tags';
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    onSelectedChange(): void;
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor();
    trackByFn(index: any, item: any): any;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSearchComponent, "cmacs-search", never, { "options": "options"; "disabled": "disabled"; "maxTagCount": "maxTagCount"; "allowClear": "allowClear"; "showSearch": "showSearch"; "cmacsOpen": "cmacsOpen"; "tagsOut": "tagsOut"; "size": "size"; "placeholder": "placeholder"; "selected": "selected"; "mode": "mode"; }, { "selectedChange": "selectedChange"; }, never, never>;
}
//# sourceMappingURL=cmacs-search.component.d.ts.map