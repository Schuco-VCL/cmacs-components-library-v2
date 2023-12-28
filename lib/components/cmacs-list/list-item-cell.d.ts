import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsListItemExtraComponent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsListItemExtraComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsListItemExtraComponent, "cmacs-list-item-extra, [cmacs-list-item-extra]", ["cmacsListItemExtra"], {}, {}, never, ["*"], false, never>;
}
export declare class CmacsListItemActionComponent {
    templateRef?: TemplateRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsListItemActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsListItemActionComponent, "cmacs-list-item-action", ["cmacsListItemAction"], {}, {}, never, ["*"], false, never>;
}
export declare class CmacsListItemActionsComponent implements OnChanges, OnDestroy {
    private ngZone;
    private cdr;
    cmacsActions: Array<TemplateRef<void>>;
    nzListItemActions: QueryList<CmacsListItemActionComponent>;
    actions: Array<TemplateRef<void>>;
    private destroy$;
    private inputActionChanges$;
    private contentChildrenChanges$;
    constructor(ngZone: NgZone, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsListItemActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsListItemActionsComponent, "ul[cmacs-list-item-actions]", ["cmacsListItemActions"], { "cmacsActions": { "alias": "cmacsActions"; "required": false; }; }, {}, ["nzListItemActions"], never, false, never>;
}
//# sourceMappingURL=list-item-cell.d.ts.map