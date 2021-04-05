import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsListItemExtraComponent {
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<CmacsListItemExtraComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsListItemExtraComponent, "cmacs-list-item-extra, [cmacs-list-item-extra]", ["cmacsListItemExtra"], {}, {}, never, ["*"]>;
}
export declare class CmacsListItemActionComponent {
    templateRef?: TemplateRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<CmacsListItemActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsListItemActionComponent, "cmacs-list-item-action", ["cmacsListItemAction"], {}, {}, never, ["*"]>;
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
    static ɵfac: i0.ɵɵFactoryDef<CmacsListItemActionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsListItemActionsComponent, "ul[cmacs-list-item-actions]", ["cmacsListItemActions"], { "cmacsActions": "cmacsActions"; }, {}, ["nzListItemActions"], never>;
}
//# sourceMappingURL=list-item-cell.d.ts.map