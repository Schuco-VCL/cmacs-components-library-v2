import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CmacsInputDirective implements OnChanges, OnInit, OnDestroy {
    ngControl: NgControl;
    private directionality;
    borderless: boolean;
    size: NzSizeLDSType;
    get disabled(): boolean;
    set disabled(value: boolean);
    _disabled: boolean;
    disabled$: Subject<boolean>;
    dir: Direction;
    private destroy$;
    opened: boolean;
    constructor(ngControl: NgControl, renderer: Renderer2, elementRef: ElementRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsInputDirective, [{ optional: true; self: true; }, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsInputDirective, "input[cmacs-input],textarea[cmacs-input]", ["cmacsInput"], { "borderless": { "alias": "borderless"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-input.directive.d.ts.map