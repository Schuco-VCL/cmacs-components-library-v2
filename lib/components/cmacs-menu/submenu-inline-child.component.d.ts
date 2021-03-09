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
    static ɵfac: i0.ɵɵFactoryDef<NzSubmenuInlineChildComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NzSubmenuInlineChildComponent, "[cmacs-submenu-inline-child]", ["cmacsSubmenuInlineChild"], { "templateOutlet": "templateOutlet"; "menuClass": "menuClass"; "mode": "mode"; "open": "open"; }, {}, never, never>;
}
//# sourceMappingURL=submenu-inline-child.component.d.ts.map