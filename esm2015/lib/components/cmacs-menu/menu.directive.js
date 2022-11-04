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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUdMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUk1RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMscUJBQWtDLEVBQUUsc0JBQW1DO0lBQ3hHLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztBQUNoRixDQUFDO0FBQ0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLHlCQUFrQztJQUN6RSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUE0Q0QsTUFBTSxPQUFPLGtCQUFrQjtJ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QjtvQkFDaEQsd0JBQXdCLEVBQUUsNENBQTRDO29CQUN0RSx1QkFBdUIsRUFBRSwyQ0FBMkM7b0JBQ3BFLDJCQUEyQixFQUFFLG9EQUFvRDtvQkFDakYsNkJBQTZCLEVBQUUsc0RBQXNEO29CQUNyRix5QkFBeUIsRUFBRSxrREFBa0Q7b0JBQzdFLG1DQUFtQyxFQUFFLCtDQUErQztvQkFDcEYsc0JBQXNCLEVBQUUsZUFBZTtvQkFDdkMsNkJBQTZCLEVBQUUsMEJBQTBCO2lCQUMxRDthQUNGOztzQkFxQ0ksTUFBTTt1QkFBQyw4QkFBOEI7O3NCQUVyQyxRQUFRO3dCQXJDcUQseUJBQXlCO2tCQUF4RixlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUNDLDJCQUEyQjtrQkFBekYsZUFBZTttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDcEQsWUFBWTtrQkFBcEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ2EsVUFBVTtrQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sIENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlLCBDbWFjc01lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuaW1wb3J0IHsgQ21hY3NTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIENtYWNzTWVudU1vZGVUeXBlQ3VzdG9tID0gJ3NpZGUtYmFyJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVTZXJ2aWNlRmFjdG9yeShzZXJ2aWNlSW5zaWRlRHJvcERvd246IE1lbnVTZXJ2aWNlLCBzZXJ2aWNlT3V0c2lkZURyb3BEb3duOiBNZW51U2VydmljZSk6IE1lbnVTZXJ2aWNlIHtcbiAgcmV0dXJuIHNlcnZpY2VJbnNpZGVEcm9wRG93biA/IHNlcnZpY2VJbnNpZGVEcm9wRG93biA6IHNlcnZpY2VPdXRzaWRlRHJvcERvd247XG59XG5leHBvcnQgZnVuY3Rpb24gTWVudURyb3BEb3duVG9rZW5GYWN0b3J5KGlzTWVudUluc2lkZURyb3BEb3duVG9rZW46IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTWVudUluc2lkZURyb3BEb3duVG9rZW4gPyBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuIDogZmFsc2U7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51XScsXG4gIGV4cG9ydEFzOiAnY21hY3NNZW51JyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21hY3NNZW51U2VydmljZUxvY2FsVG9rZW4sXG4gICAgICB1c2VDbGFzczogTWVudVNlcnZpY2VcbiAgICB9LFxuICAgIC8qKiB1c2UgdGhlIHRvcCBsZXZlbCBzZXJ2aWNlICoqL1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1lbnVTZXJ2aWNlLFxuICAgICAgdXNlRmFjdG9yeTogTWVudVNlcnZpY2VGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIE1lbnVTZXJ2aWNlXSwgQ21hY3NNZW51U2VydmljZUxvY2FsVG9rZW5dXG4gICAgfSxcbiAgICAvKiogY2hlY2sgaWYgbWVudSBpbnNpZGUgZHJvcGRvd24tbWVudSBjb21wb25lbnQgKiovXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogTWVudURyb3BEb3duVG9rZW5GYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbl1dXG4gICAgfVxuICBdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtcm9vdF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtbGlnaHRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIHRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmtdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIHRoZW1lID09PSAnZGFyaydgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtdmVydGljYWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaG9yaXpvbnRhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWlubGluZV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaW5saW5lQ29sbGFwc2VkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51XSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd25gLFxuICAgICdbY2xhc3MuYW50LW1lbnUtcm9vdF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWxpZ2h0XSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgdGhlbWUgPT09ICdsaWdodCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtZGFya10nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIHRoZW1lID09PSAnZGFyaydgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtdmVydGljYWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWhvcml6b250YWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIENtYWNzSW5saW5lQ29sbGFwc2VkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJ1tjbGFzcy5jbWFjcy1tZW51LXNpZGUtYmFyXSc6IGBjbWFjc01vZGUgPT09ICdzaWRlLWJhcidgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlITogUXVlcnlMaXN0PENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQhOiBRdWVyeUxpc3Q8Q21hY3NTdWJNZW51Q29tcG9uZW50PjtcbiAgQElucHV0KCkgaW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIHRoZW1lOiBDbWFjc01lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIGNtYWNzTW9kZTogQ21hY3NNZW51TW9kZVR5cGVDdXN0b20gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0YWJsZSA9ICF0aGlzLmlzTWVudUluc2lkZURyb3BEb3duO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT4oKTtcbiAgYWN0dWFsTW9kZTogQ21hY3NNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGlubGluZUNvbGxhcHNlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuaW5saW5lQ29sbGFwc2VkKTtcbiAgcHJpdmF0ZSBtb2RlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q21hY3NNZW51TW9kZVR5cGU+KHRoaXMubW9kZSk7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGxpc3RPZk9wZW5lZENtYWNzU3ViTWVudUNvbXBvbmVudDogQ21hY3NTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcblxuICBzZXRJbmxpbmVDb2xsYXBzZWQoaW5saW5lQ29sbGFwc2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQgPSBpbmxpbmVDb2xsYXBzZWQ7XG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQoaW5saW5lQ29sbGFwc2VkKTtcbiAgfVxuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLmlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICB0aGlzLmxpc3RPZk9wZW5lZENtYWNzU3ViTWVudUNvbXBvbmVudCA9IHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50LmZpbHRlcihzdWJtZW51ID0+IHN1Ym1lbnUub3Blbik7XG4gICAgICAgIHRoaXMubGlzdE9mQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShmYWxzZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKHRydWUpKTtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxuICAgIEBJbmplY3QoQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLmlubGluZUNvbGxhcHNlZCQsIHRoaXMubW9kZSRdKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoW2lubGluZUNvbGxhcHNlZCwgbW9kZV0pID0+IHtcbiAgICAgICAgdGhpcy5hY3R1YWxNb2RlID0gaW5saW5lQ29sbGFwc2VkID8gJ3ZlcnRpY2FsJyA6IG1vZGU7XG4gICAgICAgIHRoaXMubnpNZW51U2VydmljZS5zZXRNb2RlKHRoaXMuYWN0dWFsTW9kZSk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgdGhpcy5uek1lbnVTZXJ2aWNlLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1lbnUgPT4ge1xuICAgICAgdGhpcy5jbWFjc0NsaWNrLmVtaXQobWVudSk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RhYmxlICYmICFtZW51Lm56TWF0Y2hSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiBpdGVtLnNldFNlbGVjdGVkU3RhdGUoaXRlbSA9PT0gbWVudSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBpbmxpbmVDb2xsYXBzZWQsIGlubGluZUluZGVudCwgdGhlbWUsIG1vZGUgfSA9IGNoYW5nZXM7XG4gICAgaWYgKGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pbmxpbmVDb2xsYXBzZWQkLm5leHQodGhpcy5pbmxpbmVDb2xsYXBzZWQpO1xuICAgIH1cbiAgICBpZiAoaW5saW5lSW5kZW50KSB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0SW5saW5lSW5kZW50KHRoaXMuaW5saW5lSW5kZW50KTtcbiAgICB9XG4gICAgaWYgKHRoZW1lKSB7XG4gICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0VGhlbWUodGhpcy50aGVtZSk7XG4gICAgfVxuICAgIGlmIChtb2RlKSB7XG4gICAgICB0aGlzLm1vZGUkLm5leHQodGhpcy5tb2RlKTtcbiAgICAgIGlmICghY2hhbmdlcy5tb2RlLmlzRmlyc3RDaGFuZ2UoKSAmJiB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==