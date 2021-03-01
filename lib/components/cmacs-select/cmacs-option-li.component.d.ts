import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
import * as i0 from "@angular/core";
export declare class CmacsOptionLiComponent implements OnInit, OnDestroy {
    private elementRef;
    nzSelectService: CmacsSelectService;
    private cdr;
    el: HTMLElement;
    selected: boolean;
    active: boolean;
    destroy$: Subject<unknown>;
    highlightKeys: any[];
    nzOption: CmacsOptionComponent;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    clickOption(): void;
    constructor(elementRef: ElementRef, nzSelectService: CmacsSelectService, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsOptionLiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsOptionLiComponent, "[cmacs-option-li]", ["cmacsOptionLi"], { "nzOption": "nzOption"; "nzMenuItemSelectedIcon": "nzMenuItemSelectedIcon"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-option-li.component.d.ts.map