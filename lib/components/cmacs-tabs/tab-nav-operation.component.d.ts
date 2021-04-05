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
    static ɵfac: i0.ɵɵFactoryDef<CmacsTabNavOperationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTabNavOperationComponent, "cmacs-tab-nav-operation", ["cmacsTabNavOperation"], { "items": "items"; "addable": "addable"; "addIcon": "addIcon"; }, { "addClicked": "addClicked"; "selected": "selected"; }, never, never>;
}
//# sourceMappingURL=tab-nav-operation.component.d.ts.map