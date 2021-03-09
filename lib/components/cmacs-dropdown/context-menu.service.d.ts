import { Overlay } from '@angular/cdk/overlay';
import { CmacsDropdownMenuComponent } from './dropdown-menu.component';
import * as i0 from "@angular/core";
export declare class CmacsContextMenuService {
    private overlay;
    private overlayRef;
    private closeSubscription;
    constructor(overlay: Overlay);
    create($event: MouseEvent | {
        x: number;
        y: number;
    }, nzDropdownMenuComponent: CmacsDropdownMenuComponent): void;
    close(clear?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsContextMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CmacsContextMenuService>;
}
//# sourceMappingURL=context-menu.service.d.ts.map