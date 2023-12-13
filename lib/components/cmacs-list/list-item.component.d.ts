import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { CmacsListItemExtraComponent } from './list-item-cell';
import { CmacsListComponent } from './list.component';
import * as i0 from "@angular/core";
export declare class CmacsListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    static ngAcceptInputType_nzNoFlex: BooleanInput;
    actions: Array<TemplateRef<void>>;
    content?: string | TemplateRef<void>;
    extra: TemplateRef<void> | null;
    nzNoFlex: boolean;
    listItemExtraDirective?: CmacsListItemExtraComponent;
    private itemLayout?;
    private itemLayout$?;
    get isVerticalAndExtra(): boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: CmacsListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsListItemComponent, "cmacs-list-item, [cmacs-list-item]", ["cmacsListItem"], { "actions": { "alias": "actions"; "required": false; }; "content": { "alias": "content"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; "nzNoFlex": { "alias": "nzNoFlex"; "required": false; }; }, {}, ["listItemExtraDirective"], ["cmacs-list-item-actions, [cmacs-list-item-actions]", "cmacs-list-item-meta, [cmacs-list-item-meta]", "*", "cmacs-list-item-extra, [cmacs-list-item-extra]"], false, never>;
}
//# sourceMappingURL=list-item.component.d.ts.map