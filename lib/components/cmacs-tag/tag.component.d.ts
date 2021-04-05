import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare type CmacsGridTagType = 'active' | 'created' | 'pre-bid' | 'archive' | 'inactive' | 'warranty';
export declare type CmacsPriorityTagType = 'high' | 'low' | 'medium';
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
    static ɵfac: i0.ɵɵFactoryDef<CmacsTagComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTagComponent, "cmacs-tag", ["cmacsTag"], { "cmacsGridType": "cmacsGridType"; "cmacsPriorityType": "cmacsPriorityType"; "cmacsStatusType": "cmacsStatusType"; "cmacsMoneyType": "cmacsMoneyType"; "cmacsTemplateType": "cmacsTemplateType"; "disabled": "disabled"; "mode": "mode"; "color": "color"; "checked": "checked"; }, { "onClose": "onClose"; "checkedChange": "checkedChange"; }, never, ["*"]>;
}
//# sourceMappingURL=tag.component.d.ts.map