import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSafeAny, NzSizeLDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { NzRadioService } from './radio.service';
import * as i0 from "@angular/core";
export type NzRadioButtonStyle = 'outline' | 'solid';
export declare class CmacsRadioGroupComponent implements ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private nzRadioService;
    private elementRef;
    private directionality;
    private value;
    private destroy$;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    disabled: boolean;
    buttonStyle: NzRadioButtonStyle;
    size: NzSizeLDSType;
    name: string | null;
    dir: Direction;
    constructor(cdr: ChangeDetectorRef, nzRadioService: NzRadioService, elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: NzSafeAny): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsRadioGroupComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsRadioGroupComponent, "cmacs-radio-group", ["cmacsRadioGroup"], { "disabled": { "alias": "disabled"; "required": false; }; "buttonStyle": { "alias": "buttonStyle"; "required": false; }; "size": { "alias": "size"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-radio-group.component.d.ts.map