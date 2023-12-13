import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export type CmacsGridTagType = 'active' | 'created' | 'pre-bid' | 'archive' | 'inactive' | 'warranty';
export type CmacsPriorityTagType = 'high' | 'low' | 'medium';
export declare class CmacsTagComponent implements OnChanges, OnDestroy, OnInit {
    private cdr;
    private renderer;
    private elementRef;
    private directionality;
    static ngAcceptInputType_checked: BooleanInput;
    isPresetColor: boolean;
    cmacsGridType: CmacsGridTagType;
    cmacsPriorityType: CmacsPriorityTagType;
    cmacsStatusType: boolean;
    cmacsMoneyType: boolean;
    cmacsTemplateType: boolean;
    disabled: boolean;
    mode: 'default' | 'closeable' | 'checkable';
    color?: string | NzPresetColor;
    checked: boolean;
    readonly onClose: EventEmitter<MouseEvent>;
    readonly checkedChange: EventEmitter<boolean>;
    dir: Direction;
    private destroy$;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTagComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTagComponent, "cmacs-tag", ["cmacsTag"], { "cmacsGridType": { "alias": "cmacsGridType"; "required": false; }; "cmacsPriorityType": { "alias": "cmacsPriorityType"; "required": false; }; "cmacsStatusType": { "alias": "cmacsStatusType"; "required": false; }; "cmacsMoneyType": { "alias": "cmacsMoneyType"; "required": false; }; "cmacsTemplateType": { "alias": "cmacsTemplateType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "color": { "alias": "color"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; }, { "onClose": "onClose"; "checkedChange": "checkedChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=tag.component.d.ts.map