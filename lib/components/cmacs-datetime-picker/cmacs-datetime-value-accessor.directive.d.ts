/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsDatetimeValueAccessorDirective implements ControlValueAccessor {
    private dateHelper;
    private elementRef;
    private _onChange;
    private _onTouch;
    nzTime: string;
    keyup(): void;
    blur(): void;
    changed(): void;
    touched(): void;
    setRange(): void;
    constructor(dateHelper: DateHelperService, elementRef: ElementRef);
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDatetimeValueAccessorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsDatetimeValueAccessorDirective, "input[nzTime]", ["nzTime"], { "nzTime": { "alias": "nzTime"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-datetime-value-accessor.directive.d.ts.map