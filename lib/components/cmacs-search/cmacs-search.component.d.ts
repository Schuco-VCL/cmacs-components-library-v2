import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class CmacsSearchComponent implements ControlValueAccessor, OnInit {
    options: any[];
    disabled: boolean;
    maxTagCount: number;
    allowClear: boolean;
    maxTagCountAuto: boolean;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSearchComponent, "cmacs-search", never, { "options": { "alias": "options"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "maxTagCount": { "alias": "maxTagCount"; "required": false; }; "allowClear": { "alias": "allowClear"; "required": false; }; "maxTagCountAuto": { "alias": "maxTagCountAuto"; "required": false; }; "showSearch": { "alias": "showSearch"; "required": false; }; "cmacsOpen": { "alias": "cmacsOpen"; "required": false; }; "tagsOut": { "alias": "tagsOut"; "required": false; }; "size": { "alias": "size"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, { "selectedChange": "selectedChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-search.component.d.ts.map