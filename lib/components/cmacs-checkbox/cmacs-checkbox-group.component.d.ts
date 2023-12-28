import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface CmacsCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class CmacsCheckboxGroupComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private focusMonitor;
    private cdr;
    private directionality;
    onChange: (value: any) => void;
    onTouched: () => any;
    options: CmacsCheckBoxOptionInterface[];
    disabled: boolean;
    dir: Direction;
    private destroy$;
    onCheckedChange(option: CmacsCheckBoxOptionInterface, checked: boolean): void;
    trackByOption(_index: number, option: CmacsCheckBoxOptionInterface): string;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, renderer: Renderer2, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: CmacsCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: CmacsCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCheckboxGroupComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCheckboxGroupComponent, "cmacs-checkbox-group", ["cmacsCheckboxGroup"], { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-checkbox-group.component.d.ts.map