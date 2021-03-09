import { OnDestroy } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuService } from './menu.service';
import { CmacsMenuModeType } from './menu.types';
import * as i0 from "@angular/core";
export declare class NzSubmenuService implements OnDestroy {
    private nzHostSubmenuService;
    nzMenuService: MenuService;
    isMenuInsideDropDown: boolean;
    mode$: Observable<CmacsMenuModeType>;
    level: number;
    isCurrentSubMenuOpen$: BehaviorSubject<boolean>;
    private isChildSubMenuOpen$;
    /** submenu title & overlay mouse enter status **/
    private isMouseEnterTitleOrOverlay$;
    private childMenuItemClick$;
    private destroy$;
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    onChildMenuItemClick(menu: NzSafeAny): void;
    setOpenStateWithoutDebounce(value: boolean): void;
    setMouseEnterTitleOrOverlayState(value: boolean): void;
    constructor(nzHostSubmenuService: NzSubmenuService, nzMenuService: MenuService, isMenuInsideDropDown: boolean);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<NzSubmenuService, [{ optional: true; skipSelf: true; }, null, null]>;
    static ɵprov: i0.ɵɵInjectableDef<NzSubmenuService>;
}
//# sourceMappingURL=submenu.service.d.ts.map