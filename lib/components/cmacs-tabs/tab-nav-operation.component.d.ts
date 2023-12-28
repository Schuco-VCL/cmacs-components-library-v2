import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CmacsTabNavItemDirective } from './tab-nav-item.directive';
import * as i0 from "@angular/core";
export declare class CmacsTabNavOperationComponent implements OnDestroy {
    cdr: ChangeDetectorRef;
    private elementRef;
    items: CmacsTabNavItemDirective[];
    addable: boolean;
    addIcon: string | TemplateRef<NzSafeAny>;
    readonly addClicked: EventEmitter<void>;
    readonly selected: EventEmitter<CmacsTabNavItemDirective>;
    closeAnimationWaitTimeoutId: number;
    menuOpened: boolean;
    private readonly element;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef<HTMLElement>);
    onSelect(item: CmacsTabNavItemDirective): void;
    onContextmenu(item: CmacsTabNavItemDirective, e: MouseEvent): void;
    showItems(): void;
    menuVisChange(visible: boolean): void;
    getElementWidth(): number;
    getElementHeight(): number;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabNavOperationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTabNavOperationComponent, "cmacs-tab-nav-operation", ["cmacsTabNavOperation"], { "items": { "alias": "items"; "required": false; }; "addable": { "alias": "addable"; "required": false; }; "addIcon": { "alias": "addIcon"; "required": false; }; }, { "addClicked": "addClicked"; "selected": "selected"; }, never, never, false, never>;
}
//# sourceMappingURL=tab-nav-operation.component.d.ts.map