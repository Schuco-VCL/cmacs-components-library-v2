import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CmacsCheckboxWrapperComponent } from './cmacs-checkbox-wrapper.component';
import { BooleanInput, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare type CmacsTheme = 'light' | 'dark';
export declare class CmacsCheckboxComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private cmacsCheckboxWrapperComponent;
    private cdr;
    private focusMonitor;
    private directionality;
    static ngAcceptInputType_autoFocus: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_indeterminate: BooleanInput;
    static ngAcceptInputType_checked: BooleanInput;
    static ngAcceptInputType_theme: string;
    dir: Direction;
    private destroy$;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    private inputElement;
    readonly checkedChange: EventEmitter<boolean>;
    value: NzSafeAny;
    theme: CmacsTheme;
    autoFocus: boolean;
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
    hostClick(e: MouseEvent): void;
    innerCheckedChange(checked: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, cmacsCheckboxWrapperComponent: CmacsCheckboxWrapperComponent, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, directionality: Directionality);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCheckboxComponent, [null, null, { optional: true; }, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCheckboxComponent, "[cmacs-checkbox]", ["cmacsCheckbox"], { "value": "value"; "theme": "theme"; "autoFocus": "autoFocus"; "disabled": "disabled"; "indeterminate": "indeterminate"; "checked": "checked"; }, { "checkedChange": "checkedChange"; }, never, ["*"]>;
}
//# sourceMappingURL=cmacs-checkbox.component.d.ts.map