import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BehaviorSubject, Subject } from 'rxjs';
import { CmacsMenuModeType, CmacsMenuThemeType } from './menu.types';
import * as i0 from "@angular/core";
export declare class MenuService {
    /** all descendant menu click **/
    descendantMenuItemClick$: Subject<any>;
    /** child menu item click **/
    childMenuItemClick$: Subject<any>;
    theme$: BehaviorSubject<import("cmacs-components-v2-lib").CmacsTheme>;
    mode$: BehaviorSubject<CmacsMenuModeType>;
    inlineIndent$: BehaviorSubject<number>;
    isChildSubMenuOpen$: BehaviorSubject<boolean>;
    onDescendantMenuItemClick(menu: NzSafeAny): void;
    onChildMenuItemClick(menu: NzSafeAny): void;
    setMode(mode: CmacsMenuModeType): void;
    setTheme(theme: CmacsMenuThemeType): void;
    setInlineIndent(indent: number): void;
    static ɵfac: i0.ɵɵFactoryDef<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDef<MenuService>;
}
//# sourceMappingURL=menu.service.d.ts.map