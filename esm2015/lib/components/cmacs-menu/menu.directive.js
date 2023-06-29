import { __decorate } from "tslib";
import { ContentChildren, Directive, EventEmitter, Inject, Input, Optional, Output, SkipSelf } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsMenuItemDirective } from './menu-item.directive';
import { MenuService } from './menu.service';
import { CmacsIsMenuInsideDropDownToken, CmacsMenuServiceLocalToken } from './menu.token';
import { CmacsSubMenuComponent } from './submenu.component';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
import * as i2 from "@angular/cdk/bidi";
export function MenuServiceFactory(serviceInsideDropDown, serviceOutsideDropDown) {
    return serviceInsideDropDown ? serviceInsideDropDown : serviceOutsideDropDown;
}
export function MenuDropDownTokenFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
export class CmacsMenuDirective {
    constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.cdr = cdr;
        this.directionality = directionality;
        this.inlineIndent = 24;
        this.theme = 'light';
        this.mode = 'vertical';
        this.cmacsMode = null;
        this.inlineCollapsed = false;
        this.selectable = !this.isMenuInsideDropDown;
        this.cmacsClick = new EventEmitter();
        this.actualMode = 'vertical';
        this.dir = 'ltr';
        this.inlineCollapsed$ = new BehaviorSubject(this.inlineCollapsed);
        this.mode$ = new BehaviorSubject(this.mode);
        this.destroy$ = new Subject();
        this.listOfOpenedCmacsSubMenuComponent = [];
    }
    setInlineCollapsed(inlineCollapsed) {
        this.inlineCollapsed = inlineCollapsed;
        this.inlineCollapsed$.next(inlineCollapsed);
    }
    updateInlineCollapse() {
        if (this.listOfNzMenuItemDirective) {
            if (this.inlineCollapsed) {
                this.listOfOpenedCmacsSubMenuComponent = this.listOfCmacsSubMenuComponent.filter(submenu => submenu.open);
                this.listOfCmacsSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
            else {
                this.listOfOpenedCmacsSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(true));
                this.listOfOpenedCmacsSubMenuComponent = [];
            }
        }
    }
    ngOnInit() {
        var _a;
        combineLatest([this.inlineCollapsed$, this.mode$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([inlineCollapsed, mode]) => {
            this.actualMode = inlineCollapsed ? 'vertical' : mode;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
        this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe(menu => {
            this.cmacsClick.emit(menu);
            if (this.selectable && !menu.nzMatchRouter) {
                this.listOfNzMenuItemDirective.forEach(item => item.setSelectedState(item === menu));
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.nzMenuService.setMode(this.actualMode);
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateInlineCollapse();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { inlineCollapsed, inlineIndent, theme, mode } = changes;
        if (inlineCollapsed) {
            this.inlineCollapsed$.next(this.inlineCollapsed);
        }
        if (inlineIndent) {
            this.nzMenuService.setInlineIndent(this.inlineIndent);
        }
        if (theme) {
            this.nzMenuService.setTheme(this.theme);
        }
        if (mode) {
            this.mode$.next(this.mode);
            if (!changes.mode.isFirstChange() && this.listOfCmacsSubMenuComponent) {
                this.listOfCmacsSubMenuComponent.forEach(submenu => submenu.setOpenStateWithoutDebounce(false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsMenuDirective.ɵfac = function CmacsMenuDirective_Factory(t) { return new (t || CmacsMenuDirective)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsMenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsMenuDirective, selectors: [["", "cmacs-menu", ""]], contentQueries: function CmacsMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsMenuItemDirective, 1);
        i0.ɵɵcontentQuery(dirIndex, CmacsSubMenuComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfCmacsSubMenuComponent = _t);
    } }, hostVars: 36, hostBindings: function CmacsMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.theme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.theme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.inlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.theme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.theme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.CmacsInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl")("cmacs-menu-side-bar", ctx.cmacsMode === "side-bar");
    } }, inputs: { inlineIndent: "inlineIndent", theme: "theme", mode: "mode", cmacsMode: "cmacsMode", inlineCollapsed: "inlineCollapsed", selectable: "selectable" }, outputs: { cmacsClick: "cmacsClick" }, exportAs: ["cmacsMenu"], features: [i0.ɵɵProvidersFeature([
            {
                provide: CmacsMenuServiceLocalToken,
                useClass: MenuService
            },
            /** use the top level service **/
            {
                provide: MenuService,
                useFactory: MenuServiceFactory,
                deps: [[new SkipSelf(), new Optional(), MenuService], CmacsMenuServiceLocalToken]
            },
            /** check if menu inside dropdown-menu component **/
            {
                provide: CmacsIsMenuInsideDropDownToken,
                useFactory: MenuDropDownTokenFactory,
                deps: [[new SkipSelf(), new Optional(), CmacsIsMenuInsideDropDownToken]]
            }
        ]), i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], CmacsMenuDirective.prototype, "inlineCollapsed", void 0);
__decorate([
    InputBoolean()
], CmacsMenuDirective.prototype, "selectable", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-menu]',
                exportAs: 'cmacsMenu',
                providers: [
                    {
                        provide: CmacsMenuServiceLocalToken,
                        useClass: MenuService
                    },
                    /** use the top level service **/
                    {
                        provide: MenuService,
                        useFactory: MenuServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), MenuService], CmacsMenuServiceLocalToken]
                    },
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: CmacsIsMenuInsideDropDownToken,
                        useFactory: MenuDropDownTokenFactory,
                        deps: [[new SkipSelf(), new Optional(), CmacsIsMenuInsideDropDownToken]]
                    }
                ],
                host: {
                    '[class.ant-dropdown-menu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-root]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-light]': `isMenuInsideDropDown && theme === 'light'`,
                    '[class.ant-dropdown-menu-dark]': `isMenuInsideDropDown && theme === 'dark'`,
                    '[class.ant-dropdown-menu-vertical]': `isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-dropdown-menu-horizontal]': `isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-dropdown-menu-inline]': `isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-dropdown-menu-inline-collapsed]': `isMenuInsideDropDown && inlineCollapsed`,
                    '[class.ant-menu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-root]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-light]': `!isMenuInsideDropDown && theme === 'light'`,
                    '[class.ant-menu-dark]': `!isMenuInsideDropDown && theme === 'dark'`,
                    '[class.ant-menu-vertical]': `!isMenuInsideDropDown && actualMode === 'vertical'`,
                    '[class.ant-menu-horizontal]': `!isMenuInsideDropDown && actualMode === 'horizontal'`,
                    '[class.ant-menu-inline]': `!isMenuInsideDropDown && actualMode === 'inline'`,
                    '[class.ant-menu-inline-collapsed]': `!isMenuInsideDropDown && CmacsInlineCollapsed`,
                    '[class.ant-menu-rtl]': `dir === 'rtl'`,
                    '[class.cmacs-menu-side-bar]': `cmacsMode === 'side-bar'`
                }
            }]
    }], function () { return [{ type: i1.MenuService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [CmacsMenuItemDirective, { descendants: true }]
        }], listOfCmacsSubMenuComponent: [{
            type: ContentChildren,
            args: [CmacsSubMenuComponent, { descendants: true }]
        }], inlineIndent: [{
            type: Input
        }], theme: [{
            type: Input
        }], mode: [{
            type: Input
        }], cmacsMode: [{
            type: Input
        }], inlineCollapsed: [{
            type: Input
        }], selectable: [{
            type: Input
        }], cmacsClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUdMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk1RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMscUJBQWtDLEVBQUUsc0JBQW1DO0lBQ3hHLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztBQUNoRixDQUFDO0FBQ0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLHlCQUFrQztJQUN6RSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUE0Q0QsTUFBTSxPQUFPLGtCQUFrQjtJQWtDN0IsWUFDVSxhQUEwQixFQUNhLG9CQUE2QixFQUNwRSxHQUFzQixFQUNWLGNBQThCO1FBSDFDLGtCQUFhLEdBQWIsYUFBYSxDQUFhO1FBQ2EseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBQ3BFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbkMzQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQXVCLE9BQU8sQ0FBQztRQUNwQyxTQUFJLEdBQXNCLFVBQVUsQ0FBQztRQUNyQyxjQUFTLEdBQW1DLElBQUksQ0FBQztRQUNqQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBQzNFLGVBQVUsR0FBc0IsVUFBVSxDQUFDO1FBQzNDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEUsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsc0NBQWlDLEdBQTRCLEVBQUUsQ0FBQztJQXdCckUsQ0FBQztJQXRCSixrQkFBa0IsQ0FBQyxlQUF3QjtRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckcsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLEVBQUUsQ0FBQzthQUM3QztTQUNGO0lBQ0gsQ0FBQztJQVNELFFBQVE7O1FBQ04sYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN0RjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2xFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDL0QsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDckUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2pHO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztvRkE3RlUsa0JBQWtCLDZEQW9DbkIsOEJBQThCO3VEQXBDN0Isa0JBQWtCO29DQUNaLHNCQUFzQjtvQ0FDdEIscUJBQXFCOzs7Ozs7O3dRQXpDM0I7WUFDVDtnQkFDRSxPQUFPLEVBQUUsMEJBQTBCO2dCQUNuQyxRQUFRLEVBQUUsV0FBVzthQUN0QjtZQUNELGlDQUFpQztZQUNqQztnQkFDRSxPQUFPLEVBQUUsV0FBVztnQkFDcEIsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsMEJBQTBCLENBQUM7YUFDbEY7WUFDRCxvREFBb0Q7WUFDcEQ7Z0JBQ0UsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsVUFBVSxFQUFFLHdCQUF3QjtnQkFDcEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsOEJBQThCLENBQUMsQ0FBQzthQUN6RTtTQUNGO0FBNkJ3QjtJQUFmLFlBQVksRUFBRTsyREFBeUI7QUFDeEI7SUFBZixZQUFZLEVBQUU7c0RBQXlDO3VGQVJ0RCxrQkFBa0I7Y0ExQzlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsMEJBQTBCO3dCQUNuQyxRQUFRLEVBQUUsV0FBVztxQkFDdEI7b0JBQ0QsaUNBQWlDO29CQUNqQzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsVUFBVSxFQUFFLGtCQUFrQjt3QkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsMEJBQTBCLENBQUM7cUJBQ2xGO29CQUNELG9EQUFvRDtvQkFDcEQ7d0JBQ0UsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsVUFBVSxFQUFFLHdCQUF3Qjt3QkFDcEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsOEJBQThCLENBQUMsQ0FBQztxQkFDekU7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDJCQUEyQixFQUFFLHNCQUFzQjtvQkFDbkQsZ0NBQWdDLEVBQUUsc0JBQXNCO29CQUN4RCxpQ0FBaUMsRUFBRSwyQ0FBMkM7b0JBQzlFLGdDQUFnQyxFQUFFLDBDQUEwQztvQkFDNUUsb0NBQW9DLEVBQUUsbURBQW1EO29CQUN6RixzQ0FBc0MsRUFBRSxxREFBcUQ7b0JBQzdGLGtDQUFrQyxFQUFFLGlEQUFpRDtvQkFDckYsNENBQTRDLEVBQUUseUNBQXlDO29CQUN2RixrQkFBa0IsRUFBRSx1QkFBdUI7b0JBQzNDLHVCQUF1QixFQUFFLHVCQUF1QjtvQkFDaEQsd0JBQXdCLEVBQUUsNENBQTRDO29CQUN0RSx1QkFBdUIsRUFBRSwyQ0FBMkM7b0JBQ3BFLDJCQUEyQixFQUFFLG9EQUFvRDtvQkFDakYsNkJBQTZCLEVBQUUsc0RBQXNEO29CQUNyRix5QkFBeUIsRUFBRSxrREFBa0Q7b0JBQzdFLG1DQUFtQyxFQUFFLCtDQUErQztvQkFDcEYsc0JBQXNCLEVBQUUsZUFBZTtvQkFDdkMsNkJBQTZCLEVBQUUsMEJBQTBCO2lCQUMxRDthQUNGOztzQkFxQ0ksTUFBTTt1QkFBQyw4QkFBOEI7O3NCQUVyQyxRQUFRO3dCQXJDcUQseUJBQXlCO2tCQUF4RixlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUNDLDJCQUEyQjtrQkFBekYsZUFBZTttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDcEQsWUFBWTtrQkFBcEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ2EsVUFBVTtrQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sIENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcclxuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUsIENtYWNzTWVudVRoZW1lVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XHJcbmltcG9ydCB7IENtYWNzU3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3VibWVudS5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NNZW51TW9kZVR5cGVDdXN0b20gPSAnc2lkZS1iYXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVTZXJ2aWNlRmFjdG9yeShzZXJ2aWNlSW5zaWRlRHJvcERvd246IE1lbnVTZXJ2aWNlLCBzZXJ2aWNlT3V0c2lkZURyb3BEb3duOiBNZW51U2VydmljZSk6IE1lbnVTZXJ2aWNlIHtcclxuICByZXR1cm4gc2VydmljZUluc2lkZURyb3BEb3duID8gc2VydmljZUluc2lkZURyb3BEb3duIDogc2VydmljZU91dHNpZGVEcm9wRG93bjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTWVudURyb3BEb3duVG9rZW5GYWN0b3J5KGlzTWVudUluc2lkZURyb3BEb3duVG9rZW46IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICByZXR1cm4gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA/IGlzTWVudUluc2lkZURyb3BEb3duVG9rZW4gOiBmYWxzZTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNZW51JyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQ21hY3NNZW51U2VydmljZUxvY2FsVG9rZW4sXHJcbiAgICAgIHVzZUNsYXNzOiBNZW51U2VydmljZVxyXG4gICAgfSxcclxuICAgIC8qKiB1c2UgdGhlIHRvcCBsZXZlbCBzZXJ2aWNlICoqL1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBNZW51U2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTWVudVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTWVudVNlcnZpY2VdLCBDbWFjc01lbnVTZXJ2aWNlTG9jYWxUb2tlbl1cclxuICAgIH0sXHJcbiAgICAvKiogY2hlY2sgaWYgbWVudSBpbnNpZGUgZHJvcGRvd24tbWVudSBjb21wb25lbnQgKiovXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcclxuICAgICAgdXNlRmFjdG9yeTogTWVudURyb3BEb3duVG9rZW5GYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuXV1cclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtcm9vdF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1saWdodF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgdGhlbWUgPT09ICdsaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2RhcmsnYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtdmVydGljYWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1ob3Jpem9udGFsXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaG9yaXpvbnRhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pbmxpbmVdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdpbmxpbmUnYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaW5saW5lQ29sbGFwc2VkYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXJvb3RdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWxpZ2h0XSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgdGhlbWUgPT09ICdsaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1kYXJrXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgdGhlbWUgPT09ICdkYXJrJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXZlcnRpY2FsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWhvcml6b250YWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaG9yaXpvbnRhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pbmxpbmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaW5saW5lJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBDbWFjc0lubGluZUNvbGxhcHNlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLW1lbnUtc2lkZS1iYXJdJzogYGNtYWNzTW9kZSA9PT0gJ3NpZGUtYmFyJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzTWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxDbWFjc01lbnVJdGVtRGlyZWN0aXZlPjtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQhOiBRdWVyeUxpc3Q8Q21hY3NTdWJNZW51Q29tcG9uZW50PjtcclxuICBASW5wdXQoKSBpbmxpbmVJbmRlbnQgPSAyNDtcclxuICBASW5wdXQoKSB0aGVtZTogQ21hY3NNZW51VGhlbWVUeXBlID0gJ2xpZ2h0JztcclxuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQElucHV0KCkgY21hY3NNb2RlOiBDbWFjc01lbnVNb2RlVHlwZUN1c3RvbSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0YWJsZSA9ICF0aGlzLmlzTWVudUluc2lkZURyb3BEb3duO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxDbWFjc01lbnVJdGVtRGlyZWN0aXZlPigpO1xyXG4gIGFjdHVhbE1vZGU6IENtYWNzTWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgaW5saW5lQ29sbGFwc2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5pbmxpbmVDb2xsYXBzZWQpO1xyXG4gIHByaXZhdGUgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENtYWNzTWVudU1vZGVUeXBlPih0aGlzLm1vZGUpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgbGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50OiBDbWFjc1N1Yk1lbnVDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBzZXRJbmxpbmVDb2xsYXBzZWQoaW5saW5lQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubGluZUNvbGxhcHNlZCA9IGlubGluZUNvbGxhcHNlZDtcclxuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5uZXh0KGlubGluZUNvbGxhcHNlZCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUpIHtcclxuICAgICAgaWYgKHRoaXMuaW5saW5lQ29sbGFwc2VkKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5maWx0ZXIoc3VibWVudSA9PiBzdWJtZW51Lm9wZW4pO1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShmYWxzZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhbixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMuaW5saW5lQ29sbGFwc2VkJCwgdGhpcy5tb2RlJF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW2lubGluZUNvbGxhcHNlZCwgbW9kZV0pID0+IHtcclxuICAgICAgICB0aGlzLmFjdHVhbE1vZGUgPSBpbmxpbmVDb2xsYXBzZWQgPyAndmVydGljYWwnIDogbW9kZTtcclxuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMubnpNZW51U2VydmljZS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcclxuICAgICAgdGhpcy5jbWFjc0NsaWNrLmVtaXQobWVudSk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUgJiYgIW1lbnUubnpNYXRjaFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXRTZWxlY3RlZFN0YXRlKGl0ZW0gPT09IG1lbnUpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGlubGluZUNvbGxhcHNlZCwgaW5saW5lSW5kZW50LCB0aGVtZSwgbW9kZSB9ID0gY2hhbmdlcztcclxuICAgIGlmIChpbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQodGhpcy5pbmxpbmVDb2xsYXBzZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlubGluZUluZGVudCkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0SW5saW5lSW5kZW50KHRoaXMuaW5saW5lSW5kZW50KTtcclxuICAgIH1cclxuICAgIGlmICh0aGVtZSkge1xyXG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0VGhlbWUodGhpcy50aGVtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAobW9kZSkge1xyXG4gICAgICB0aGlzLm1vZGUkLm5leHQodGhpcy5tb2RlKTtcclxuICAgICAgaWYgKCFjaGFuZ2VzLm1vZGUuaXNGaXJzdENoYW5nZSgpICYmIHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKGZhbHNlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==