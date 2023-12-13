import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CmacsMenuModeType } from './menu.types';
import * as i0 from "@angular/core";
export declare class NzSubmenuInlineChildComponent implements OnDestroy, OnInit, OnChanges {
    private elementRef;
    private renderer;
    private directionality;
    templateOutlet: TemplateRef<NzSafeAny> | null;
    menuClass: string;
    mode: CmacsMenuModeType;
    open: boolean;
    listOfCacheClassName: string[];
    expandState: string;
    dir: Direction;
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, directionality: Directionality);
    calcMotionState(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzSubmenuInlineChildComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NzSubmenuInlineChildComponent, "[cmacs-submenu-inline-child]", ["cmacsSubmenuInlineChild"], { "templateOutlet": { "alias": "templateOutlet"; "required": false; }; "menuClass": { "alias": "menuClass"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "open": { "alias": "open"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=submenu-inline-child.component.d.ts.map