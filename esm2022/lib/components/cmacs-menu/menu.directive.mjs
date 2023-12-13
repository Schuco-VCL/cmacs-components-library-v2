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
    ngOnInit() {
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
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsMenuDirective_Factory(t) { return new (t || CmacsMenuDirective)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsMenuDirective, selectors: [["", "cmacs-menu", ""]], contentQueries: function CmacsMenuDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsMenuItemDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, CmacsSubMenuComponent, 5);
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
            ]), i0.ɵɵNgOnChangesFeature] }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUdMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk1RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMscUJBQWtDLEVBQUUsc0JBQW1DO0lBQ3hHLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztBQUNoRixDQUFDO0FBQ0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLHlCQUFrQztJQUN6RSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUE0Q0QsTUFBTSxPQUFPLGtCQUFrQjtJQWlCN0Isa0JBQWtCLENBQUMsZUFBd0I7UUFDekMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqRztpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxFQUFFLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRCxZQUNVLGFBQTBCLEVBQ2Esb0JBQTZCLEVBQ3BFLEdBQXNCLEVBQ1YsY0FBOEI7UUFIMUMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDYSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQVM7UUFDcEUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQzNDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBdUIsT0FBTyxDQUFDO1FBQ3BDLFNBQUksR0FBc0IsVUFBVSxDQUFDO1FBQ3JDLGNBQVMsR0FBbUMsSUFBSSxDQUFDO1FBQ2pDLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUM5QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFDM0UsZUFBVSxHQUFzQixVQUFVLENBQUM7UUFDM0MsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUNmLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RSxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixzQ0FBaUMsR0FBNEIsRUFBRSxDQUFDO0lBd0JyRSxDQUFDO0lBRUosUUFBUTtRQUNOLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDdEY7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMvRCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO2dCQUNyRSxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDakc7U0FDRjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO21GQTdGVSxrQkFBa0IsNkRBb0NuQiw4QkFBOEI7b0VBcEM3QixrQkFBa0I7d0NBQ1osc0JBQXNCO3dDQUN0QixxQkFBcUI7Ozs7Ozs7NFFBekMzQjtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsMEJBQTBCO29CQUNuQyxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Z0JBQ0QsaUNBQWlDO2dCQUNqQztvQkFDRSxPQUFPLEVBQUUsV0FBVztvQkFDcEIsVUFBVSxFQUFFLGtCQUFrQjtvQkFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsMEJBQTBCLENBQUM7aUJBQ2xGO2dCQUNELG9EQUFvRDtnQkFDcEQ7b0JBQ0UsT0FBTyxFQUFFLDhCQUE4QjtvQkFDdkMsVUFBVSxFQUFFLHdCQUF3QjtvQkFDcEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsOEJBQThCLENBQUMsQ0FBQztpQkFDekU7YUFDRjs7QUE2QndCO0lBQWYsWUFBWSxFQUFFOzJEQUF5QjtBQUN4QjtJQUFmLFlBQVksRUFBRTtzREFBeUM7dUZBUnRELGtCQUFrQjtjQTFDOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsV0FBVztnQkFDckIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLFFBQVEsRUFBRSxXQUFXO3FCQUN0QjtvQkFDRCxpQ0FBaUM7b0JBQ2pDO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixVQUFVLEVBQUUsa0JBQWtCO3dCQUM5QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRSwwQkFBMEIsQ0FBQztxQkFDbEY7b0JBQ0Qsb0RBQW9EO29CQUNwRDt3QkFDRSxPQUFPLEVBQUUsOEJBQThCO3dCQUN2QyxVQUFVLEVBQUUsd0JBQXdCO3dCQUNwQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO3FCQUN6RTtpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osMkJBQTJCLEVBQUUsc0JBQXNCO29CQUNuRCxnQ0FBZ0MsRUFBRSxzQkFBc0I7b0JBQ3hELGlDQUFpQyxFQUFFLDJDQUEyQztvQkFDOUUsZ0NBQWdDLEVBQUUsMENBQTBDO29CQUM1RSxvQ0FBb0MsRUFBRSxtREFBbUQ7b0JBQ3pGLHNDQUFzQyxFQUFFLHFEQUFxRDtvQkFDN0Ysa0NBQWtDLEVBQUUsaURBQWlEO29CQUNyRiw0Q0FBNEMsRUFBRSx5Q0FBeUM7b0JBQ3ZGLGtCQUFrQixFQUFFLHVCQUF1QjtvQkFDM0MsdUJBQXVCLEVBQUUsdUJBQXVCO29CQUNoRCx3QkFBd0IsRUFBRSw0Q0FBNEM7b0JBQ3RFLHVCQUF1QixFQUFFLDJDQUEyQztvQkFDcEUsMkJBQTJCLEVBQUUsb0RBQW9EO29CQUNqRiw2QkFBNkIsRUFBRSxzREFBc0Q7b0JBQ3JGLHlCQUF5QixFQUFFLGtEQUFrRDtvQkFDN0UsbUNBQW1DLEVBQUUsK0NBQStDO29CQUNwRixzQkFBc0IsRUFBRSxlQUFlO29CQUN2Qyw2QkFBNkIsRUFBRSwwQkFBMEI7aUJBQzFEO2FBQ0Y7O3NCQXFDSSxNQUFNO3VCQUFDLDhCQUE4Qjs7c0JBRXJDLFFBQVE7d0JBckNxRCx5QkFBeUI7a0JBQXhGLGVBQWU7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBQ0MsMkJBQTJCO2tCQUF6RixlQUFlO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUNwRCxZQUFZO2tCQUFwQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixlQUFlO2tCQUF2QyxLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDYSxVQUFVO2tCQUE1QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiwgQ21hY3NNZW51U2VydmljZUxvY2FsVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVNb2RlVHlwZSwgQ21hY3NNZW51VGhlbWVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcclxuaW1wb3J0IHsgQ21hY3NTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc01lbnVNb2RlVHlwZUN1c3RvbSA9ICdzaWRlLWJhcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVudVNlcnZpY2VGYWN0b3J5KHNlcnZpY2VJbnNpZGVEcm9wRG93bjogTWVudVNlcnZpY2UsIHNlcnZpY2VPdXRzaWRlRHJvcERvd246IE1lbnVTZXJ2aWNlKTogTWVudVNlcnZpY2Uge1xyXG4gIHJldHVybiBzZXJ2aWNlSW5zaWRlRHJvcERvd24gPyBzZXJ2aWNlSW5zaWRlRHJvcERvd24gOiBzZXJ2aWNlT3V0c2lkZURyb3BEb3duO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51RHJvcERvd25Ub2tlbkZhY3RvcnkoaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbjogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuID8gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA6IGZhbHNlO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01lbnUnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDbWFjc01lbnVTZXJ2aWNlTG9jYWxUb2tlbixcclxuICAgICAgdXNlQ2xhc3M6IE1lbnVTZXJ2aWNlXHJcbiAgICB9LFxyXG4gICAgLyoqIHVzZSB0aGUgdG9wIGxldmVsIHNlcnZpY2UgKiovXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE1lbnVTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBNZW51U2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBNZW51U2VydmljZV0sIENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuXVxyXG4gICAgfSxcclxuICAgIC8qKiBjaGVjayBpZiBtZW51IGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBNZW51RHJvcERvd25Ub2tlbkZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW5dXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2xpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmtdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIHRoZW1lID09PSAnZGFyaydgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS12ZXJ0aWNhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWhvcml6b250YWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdob3Jpem9udGFsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWlubGluZV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2lubGluZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pbmxpbmUtY29sbGFwc2VkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpbmxpbmVDb2xsYXBzZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtcm9vdF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtbGlnaHRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2xpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWRhcmtdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2RhcmsnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtdmVydGljYWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAndmVydGljYWwnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtaG9yaXpvbnRhbF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdob3Jpem9udGFsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWlubGluZV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdpbmxpbmUnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIENtYWNzSW5saW5lQ29sbGFwc2VkYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuY21hY3MtbWVudS1zaWRlLWJhcl0nOiBgY21hY3NNb2RlID09PSAnc2lkZS1iYXInYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlITogUXVlcnlMaXN0PENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudCE6IFF1ZXJ5TGlzdDxDbWFjc1N1Yk1lbnVDb21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGlubGluZUluZGVudCA9IDI0O1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBDbWFjc01lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xyXG4gIEBJbnB1dCgpIG1vZGU6IENtYWNzTWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBjbWFjc01vZGU6IENtYWNzTWVudU1vZGVUeXBlQ3VzdG9tIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RhYmxlID0gIXRoaXMuaXNNZW51SW5zaWRlRHJvcERvd247XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+KCk7XHJcbiAgYWN0dWFsTW9kZTogQ21hY3NNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSBpbmxpbmVDb2xsYXBzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlubGluZUNvbGxhcHNlZCk7XHJcbiAgcHJpdmF0ZSBtb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q21hY3NNZW51TW9kZVR5cGU+KHRoaXMubW9kZSk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQ6IENtYWNzU3ViTWVudUNvbXBvbmVudFtdID0gW107XHJcblxyXG4gIHNldElubGluZUNvbGxhcHNlZChpbmxpbmVDb2xsYXBzZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkID0gaW5saW5lQ29sbGFwc2VkO1xyXG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQoaW5saW5lQ29sbGFwc2VkKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSkge1xyXG4gICAgICBpZiAodGhpcy5pbmxpbmVDb2xsYXBzZWQpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZENtYWNzU3ViTWVudUNvbXBvbmVudCA9IHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50LmZpbHRlcihzdWJtZW51ID0+IHN1Ym1lbnUub3Blbik7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKGZhbHNlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKHRydWUpKTtcclxuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZENtYWNzU3ViTWVudUNvbXBvbmVudCA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBASW5qZWN0KENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5pbmxpbmVDb2xsYXBzZWQkLCB0aGlzLm1vZGUkXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbaW5saW5lQ29sbGFwc2VkLCBtb2RlXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0dWFsTW9kZSA9IGlubGluZUNvbGxhcHNlZCA/ICd2ZXJ0aWNhbCcgOiBtb2RlO1xyXG4gICAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMuYWN0dWFsTW9kZSk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1lbnUgPT4ge1xyXG4gICAgICB0aGlzLmNtYWNzQ2xpY2suZW1pdChtZW51KTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiAhbWVudS5uek1hdGNoUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMuYWN0dWFsTW9kZSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubGluZUNvbGxhcHNlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgaW5saW5lQ29sbGFwc2VkLCBpbmxpbmVJbmRlbnQsIHRoZW1lLCBtb2RlIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGlubGluZUNvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLmlubGluZUNvbGxhcHNlZCQubmV4dCh0aGlzLmlubGluZUNvbGxhcHNlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5saW5lSW5kZW50KSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRJbmxpbmVJbmRlbnQodGhpcy5pbmxpbmVJbmRlbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoZW1lKSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRUaGVtZSh0aGlzLnRoZW1lKTtcclxuICAgIH1cclxuICAgIGlmIChtb2RlKSB7XHJcbiAgICAgIHRoaXMubW9kZSQubmV4dCh0aGlzLm1vZGUpO1xyXG4gICAgICBpZiAoIWNoYW5nZXMubW9kZS5pc0ZpcnN0Q2hhbmdlKCkgJiYgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZmFsc2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==