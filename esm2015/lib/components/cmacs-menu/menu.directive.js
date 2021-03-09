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
    } }, hostVars: 34, hostBindings: function CmacsMenuDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.theme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.theme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.inlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.theme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.theme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.CmacsInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
    } }, inputs: { inlineIndent: "inlineIndent", theme: "theme", mode: "mode", inlineCollapsed: "inlineCollapsed", selectable: "selectable" }, outputs: { cmacsClick: "cmacsClick" }, exportAs: ["cmacsMenu"], features: [i0.ɵɵProvidersFeature([
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
                    '[class.ant-menu-rtl]': `dir === 'rtl'`
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
        }], inlineCollapsed: [{
            type: Input
        }], selectable: [{
            type: Input
        }], cmacsClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUdMLGVBQWUsRUFDZixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUU1RCxNQUFNLFVBQVUsa0JBQWtCLENBQUMscUJBQWtDLEVBQUUsc0JBQW1DO0lBQ3hHLE9BQU8scUJBQXFCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztBQUNoRixDQUFDO0FBQ0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLHlCQUFrQztJQUN6RSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUEyQ0QsTUFBTSxPQUFPLGtCQUFrQjtJ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O29CQUN0RSx1QkFBdUIsRUFBRSwyQ0FBMkM7b0JBQ3BFLDJCQUEyQixFQUFFLG9EQUFvRDtvQkFDakYsNkJBQTZCLEVBQUUsc0RBQXNEO29CQUNyRix5QkFBeUIsRUFBRSxrREFBa0Q7b0JBQzdFLG1DQUFtQyxFQUFFLCtDQUErQztvQkFDcEYsc0JBQXNCLEVBQUUsZUFBZTtpQkFDeEM7YUFDRjs7c0JBb0NJLE1BQU07dUJBQUMsOEJBQThCOztzQkFFckMsUUFBUTt3QkFwQ3FELHlCQUF5QjtrQkFBeEYsZUFBZTttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDQywyQkFBMkI7a0JBQXpGLGVBQWU7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBQ3BELFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ2EsVUFBVTtrQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sIENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlLCBDbWFjc01lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuaW1wb3J0IHsgQ21hY3NTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51U2VydmljZUZhY3Rvcnkoc2VydmljZUluc2lkZURyb3BEb3duOiBNZW51U2VydmljZSwgc2VydmljZU91dHNpZGVEcm9wRG93bjogTWVudVNlcnZpY2UpOiBNZW51U2VydmljZSB7XG4gIHJldHVybiBzZXJ2aWNlSW5zaWRlRHJvcERvd24gPyBzZXJ2aWNlSW5zaWRlRHJvcERvd24gOiBzZXJ2aWNlT3V0c2lkZURyb3BEb3duO1xufVxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVEcm9wRG93blRva2VuRmFjdG9yeShpc01lbnVJbnNpZGVEcm9wRG93blRva2VuOiBib29sZWFuKTogYm9vbGVhbiB7XG4gIHJldHVybiBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuID8gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA6IGZhbHNlO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudV0nLFxuICBleHBvcnRBczogJ2NtYWNzTWVudScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuLFxuICAgICAgdXNlQ2xhc3M6IE1lbnVTZXJ2aWNlXG4gICAgfSxcbiAgICAvKiogdXNlIHRoZSB0b3AgbGV2ZWwgc2VydmljZSAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBNZW51U2VydmljZSxcbiAgICAgIHVzZUZhY3Rvcnk6IE1lbnVTZXJ2aWNlRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBNZW51U2VydmljZV0sIENtYWNzTWVudVNlcnZpY2VMb2NhbFRva2VuXVxuICAgIH0sXG4gICAgLyoqIGNoZWNrIGlmIG1lbnUgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcbiAgICAgIHVzZUZhY3Rvcnk6IE1lbnVEcm9wRG93blRva2VuRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW5dXVxuICAgIH1cbiAgXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXJvb3RdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2RhcmsnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXZlcnRpY2FsXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBhY3R1YWxNb2RlID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWhvcml6b250YWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pbmxpbmVdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWlubGluZS1jb2xsYXBzZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGlubGluZUNvbGxhcHNlZGAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXJvb3RdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1saWdodF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIHRoZW1lID09PSAnbGlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWRhcmtdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiB0aGVtZSA9PT0gJ2RhcmsnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXZlcnRpY2FsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1ob3Jpem9udGFsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgYWN0dWFsTW9kZSA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWlubGluZV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGFjdHVhbE1vZGUgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBDbWFjc0lubGluZUNvbGxhcHNlZGAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlITogUXVlcnlMaXN0PENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQhOiBRdWVyeUxpc3Q8Q21hY3NTdWJNZW51Q29tcG9uZW50PjtcbiAgQElucHV0KCkgaW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIHRoZW1lOiBDbWFjc01lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdGFibGUgPSAhdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93bjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENtYWNzTWVudUl0ZW1EaXJlY3RpdmU+KCk7XG4gIGFjdHVhbE1vZGU6IENtYWNzTWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBpbmxpbmVDb2xsYXBzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLmlubGluZUNvbGxhcHNlZCk7XG4gIHByaXZhdGUgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENtYWNzTWVudU1vZGVUeXBlPih0aGlzLm1vZGUpO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBsaXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQ6IENtYWNzU3ViTWVudUNvbXBvbmVudFtdID0gW107XG5cbiAgc2V0SW5saW5lQ29sbGFwc2VkKGlubGluZUNvbGxhcHNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkID0gaW5saW5lQ29sbGFwc2VkO1xuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5uZXh0KGlubGluZUNvbGxhcHNlZCk7XG4gIH1cblxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5pbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZPcGVuZWRDbWFjc1N1Yk1lbnVDb21wb25lbnQgPSB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5maWx0ZXIoc3VibWVudSA9PiBzdWJtZW51Lm9wZW4pO1xuICAgICAgICB0aGlzLmxpc3RPZkNtYWNzU3ViTWVudUNvbXBvbmVudC5mb3JFYWNoKHN1Ym1lbnUgPT4gc3VibWVudS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UoZmFsc2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50LmZvckVhY2goc3VibWVudSA9PiBzdWJtZW51LnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSh0cnVlKSk7XG4gICAgICAgIHRoaXMubGlzdE9mT3BlbmVkQ21hY3NTdWJNZW51Q29tcG9uZW50ID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBASW5qZWN0KENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5pbmxpbmVDb2xsYXBzZWQkLCB0aGlzLm1vZGUkXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFtpbmxpbmVDb2xsYXBzZWQsIG1vZGVdKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0dWFsTW9kZSA9IGlubGluZUNvbGxhcHNlZCA/ICd2ZXJ0aWNhbCcgOiBtb2RlO1xuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2Uuc2V0TW9kZSh0aGlzLmFjdHVhbE1vZGUpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIHRoaXMubnpNZW51U2VydmljZS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtZW51ID0+IHtcbiAgICAgIHRoaXMuY21hY3NDbGljay5lbWl0KG1lbnUpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0YWJsZSAmJiAhbWVudS5uek1hdGNoUm91dGVyKSB7XG4gICAgICAgIHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5zZXRTZWxlY3RlZFN0YXRlKGl0ZW0gPT09IG1lbnUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldE1vZGUodGhpcy5hY3R1YWxNb2RlKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgaW5saW5lQ29sbGFwc2VkLCBpbmxpbmVJbmRlbnQsIHRoZW1lLCBtb2RlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaW5saW5lQ29sbGFwc2VkJC5uZXh0KHRoaXMuaW5saW5lQ29sbGFwc2VkKTtcbiAgICB9XG4gICAgaWYgKGlubGluZUluZGVudCkge1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldElubGluZUluZGVudCh0aGlzLmlubGluZUluZGVudCk7XG4gICAgfVxuICAgIGlmICh0aGVtZSkge1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuICAgIH1cbiAgICBpZiAobW9kZSkge1xuICAgICAgdGhpcy5tb2RlJC5uZXh0KHRoaXMubW9kZSk7XG4gICAgICBpZiAoIWNoYW5nZXMubW9kZS5pc0ZpcnN0Q2hhbmdlKCkgJiYgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZDbWFjc1N1Yk1lbnVDb21wb25lbnQuZm9yRWFjaChzdWJtZW51ID0+IHN1Ym1lbnUuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKGZhbHNlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=