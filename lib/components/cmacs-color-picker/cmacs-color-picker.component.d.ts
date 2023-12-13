import { EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsColorPickerComponent implements AfterViewInit {
    private ref;
    private cdr;
    type: 'basic' | 'basicWithTransparent';
    color: string;
    mobile: boolean;
    colorChange: EventEmitter<string>;
    width: number;
    basicColorList: string[];
    constructor(ref: ElementRef, cdr: ChangeDetectorRef);
    setColor(color: string): void;
    isColorPickerType(type: string): boolean;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsColorPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsColorPickerComponent, "cmacs-color-picker", ["cmacsColorPicker"], { "type": { "alias": "type"; "required": false; }; "color": { "alias": "color"; "required": false; }; "mobile": { "alias": "mobile"; "required": false; }; "basicColorList": { "alias": "basicColorList"; "required": false; }; }, { "colorChange": "colorChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-color-picker.component.d.ts.map