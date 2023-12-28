import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsSelectService } from './cmacs-select.service';
import * as i0 from "@angular/core";
export declare class CmacsOptionLiVirtualComponent implements OnInit, OnDestroy {
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
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOptionLiVirtualComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOptionLiVirtualComponent, "cmacs-option-li-virtual", never, { "nzOption": { "alias": "nzOption"; "required": false; }; "nzMenuItemSelectedIcon": { "alias": "nzMenuItemSelectedIcon"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-option-li-virtual.component.d.ts.map