import { __decorate } from "tslib";
import { ContentChildren, Directive, Inject, Input, Optional } from '@angular/core';
import { NavigationEnd, RouterLink, RouterLinkWithHref } from '@angular/router';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
import * as i2 from "./submenu.service";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/router";
export class CmacsMenuItemDirective {
    constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, routerLinkWithHref, router) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
        this.router = router;
        this.destroy$ = new Subject();
        this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
        this.selected$ = new Subject();
        this.inlinePaddingLeft = null;
        this.dir = 'ltr';
        this.disabled = false;
        this.selected = false;
        this.danger = false;
        this.matchRouterExact = false;
        this.matchRouter = false;
        if (router) {
            this.router.events.pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd)).subscribe(() => {
                this.updateRouterActive();
            });
        }
    }
    /** clear all item selected status except this */
    clickMenuItem(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            this.nzMenuService.onDescendantMenuItemClick(this);
            if (this.nzSubmenuService) {
                /** menu item inside the submenu **/
                this.nzSubmenuService.onChildMenuItemClick(this);
            }
            else {
                /** menu item inside the root menu **/
                this.nzMenuService.onChildMenuItemClick(this);
            }
        }
    }
    setSelectedState(value) {
        this.selected = value;
        this.selected$.next(value);
    }
    updateRouterActive() {
        if (!this.listOfRouterLink || !this.listOfRouterLinkWithHref || !this.router || !this.router.navigated || !this.matchRouter) {
            return;
        }
        Promise.resolve().then(() => {
            const hasActiveLinks = this.hasActiveLinks();
            if (this.selected !== hasActiveLinks) {
                this.selected = hasActiveLinks;
                this.setSelectedState(this.selected);
                this.cdr.markForCheck();
            }
        });
    }
    hasActiveLinks() {
        const isActiveCheckFn = this.isLinkActive(this.router);
        return ((this.routerLink && isActiveCheckFn(this.routerLink)) ||
            (this.routerLinkWithHref && isActiveCheckFn(this.routerLinkWithHref)) ||
            this.listOfRouterLink.some(isActiveCheckFn) ||
            this.listOfRouterLinkWithHref.some(isActiveCheckFn));
    }
    isLinkActive(router) {
        return (link) => router.isActive(link.urlTree, this.matchRouterExact);
    }
    ngOnInit() {
        var _a;
        /** store origin padding in padding */
        combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.listOfRouterLinkWithHref.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
        this.updateRouterActive();
    }
    ngOnChanges(changes) {
        if (changes.selected) {
            this.setSelectedState(this.selected);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsMenuItemDirective.ɵfac = function CmacsMenuItemDirective_Factory(t) { return new (t || CmacsMenuItemDirective)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzSubmenuService, 8), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i4.RouterLink, 8), i0.ɵɵdirectiveInject(i4.RouterLinkWithHref, 8), i0.ɵɵdirectiveInject(i4.Router, 8)); };
CmacsMenuItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsMenuItemDirective, selectors: [["", "cmacs-menu-item", ""]], contentQueries: function CmacsMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, RouterLink, 1);
        i0.ɵɵcontentQuery(dirIndex, RouterLinkWithHref, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
    } }, hostVars: 20, hostBindings: function CmacsMenuItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft || ctx.inlinePaddingLeft : null, "px");
        i0.ɵɵclassProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.selected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.danger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.disabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.selected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.danger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.disabled);
    } }, inputs: { paddingLeft: "paddingLeft", disabled: "disabled", selected: "selected", danger: "danger", matchRouterExact: "matchRouterExact", matchRouter: "matchRouter" }, exportAs: ["cmacsMenuItem"], features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], CmacsMenuItemDirective.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsMenuItemDirective.prototype, "selected", void 0);
__decorate([
    InputBoolean()
], CmacsMenuItemDirective.prototype, "danger", void 0);
__decorate([
    InputBoolean()
], CmacsMenuItemDirective.prototype, "matchRouterExact", void 0);
__decorate([
    InputBoolean()
], CmacsMenuItemDirective.prototype, "matchRouter", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMenuItemDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-menu-item]',
                exportAs: 'cmacsMenuItem',
                host: {
                    '[class.ant-dropdown-menu-item]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-item-selected]': `isMenuInsideDropDown && selected`,
                    '[class.ant-dropdown-menu-item-danger]': `isMenuInsideDropDown && danger`,
                    '[class.ant-dropdown-menu-item-disabled]': `isMenuInsideDropDown && disabled`,
                    '[class.ant-menu-item]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-item-selected]': `!isMenuInsideDropDown && selected`,
                    '[class.ant-menu-item-danger]': `!isMenuInsideDropDown && danger`,
                    '[class.ant-menu-item-disabled]': `!isMenuInsideDropDown && disabled`,
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : paddingLeft || inlinePaddingLeft`,
                    '[style.paddingRight.px]': `dir === 'rtl' ? paddingLeft || inlinePaddingLeft : null`,
                    '(click)': 'clickMenuItem($event)'
                }
            }]
    }], function () { return [{ type: i1.MenuService }, { type: i0.ChangeDetectorRef }, { type: i2.NzSubmenuService, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i4.RouterLink, decorators: [{
                type: Optional
            }] }, { type: i4.RouterLinkWithHref, decorators: [{
                type: Optional
            }] }, { type: i4.Router, decorators: [{
                type: Optional
            }] }]; }, { paddingLeft: [{
            type: Input
        }], disabled: [{
            type: Input
        }], selected: [{
            type: Input
        }], danger: [{
            type: Input
        }], matchRouterExact: [{
            type: Input
        }], matchRouter: [{
            type: Input
        }], listOfRouterLink: [{
            type: ContentChildren,
            args: [RouterLink, { descendants: true }]
        }], listOfRouterLinkWithHref: [{
            type: ContentChildren,
            args: [RouterLinkWithHref, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L21lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFHTCxlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUdULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQVUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFvQjlELE1BQU0sT0FBTyxzQkFBc0I7SUFpRWpDLFlBQ1UsYUFBMEIsRUFDMUIsR0FBc0IsRUFDVixnQkFBa0MsRUFDUCxvQkFBNkIsRUFDeEQsY0FBOEIsRUFDOUIsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFQM0Isa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ1AseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBQ3hELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQXhF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eUMsRUFBRSxrQ0FBa0M7b0JBQzdFLHVDQUF1QyxFQUFFLGdDQUFnQztvQkFDekUseUNBQXlDLEVBQUUsa0NBQWtDO29CQUM3RSx1QkFBdUIsRUFBRSx1QkFBdUI7b0JBQ2hELGdDQUFnQyxFQUFFLG1DQUFtQztvQkFDckUsOEJBQThCLEVBQUUsaUNBQWlDO29CQUNqRSxnQ0FBZ0MsRUFBRSxtQ0FBbUM7b0JBQ3JFLHdCQUF3QixFQUFFLHlEQUF5RDtvQkFDbkYseUJBQXlCLEVBQUUseURBQXlEO29CQUNwRixTQUFTLEVBQUUsdUJBQXVCO2lCQUNuQzthQUNGOztzQkFxRUksUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyw4QkFBOEI7O3NCQUNyQyxRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFRO3dCQW5FRixXQUFXO2tCQUFuQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ21CLGdCQUFnQjtrQkFBeEMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQzhDLGdCQUFnQjtrQkFBbkUsZUFBZTttQkFBQyxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBQ1Usd0JBQXdCO2tCQUFuRixlQUFlO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9zdWJtZW51LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudS1pdGVtXScsXG4gIGV4cG9ydEFzOiAnY21hY3NNZW51SXRlbScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW1dJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIHNlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGFuZ2VyXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkYW5nZXJgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgZGlzYWJsZWRgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtaXRlbV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBzZWxlY3RlZGAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pdGVtLWRhbmdlcl0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGRhbmdlcmAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1pdGVtLWRpc2FibGVkXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgZGlzYWJsZWRgLFxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBudWxsIDogcGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnRgLFxuICAgICdbc3R5bGUucGFkZGluZ1JpZ2h0LnB4XSc6IGBkaXIgPT09ICdydGwnID8gcGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnQgOiBudWxsYCxcbiAgICAnKGNsaWNrKSc6ICdjbGlja01lbnVJdGVtKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcbiAgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UgPyB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxIDogMTtcbiAgc2VsZWN0ZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgaW5saW5lUGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBASW5wdXQoKSBwYWRkaW5nTGVmdD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGFuZ2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXRjaFJvdXRlciA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmssIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGluayE6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmITogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm9uRGVzY2VuZGFudE1lbnVJdGVtQ2xpY2sodGhpcyk7XG4gICAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICAgIC8qKiBtZW51IGl0ZW0gaW5zaWRlIHRoZSBzdWJtZW51ICoqL1xuICAgICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub25DaGlsZE1lbnVJdGVtQ2xpY2sodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogbWVudSBpdGVtIGluc2lkZSB0aGUgcm9vdCBtZW51ICoqL1xuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2Uub25DaGlsZE1lbnVJdGVtQ2xpY2sodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5saXN0T2ZSb3V0ZXJMaW5rIHx8ICF0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZiB8fCAhdGhpcy5yb3V0ZXIgfHwgIXRoaXMucm91dGVyLm5hdmlnYXRlZCB8fCAhdGhpcy5tYXRjaFJvdXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT09IGhhc0FjdGl2ZUxpbmtzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBoYXNBY3RpdmVMaW5rcztcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIhKTtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMucm91dGVyTGluayAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rKSkgfHxcbiAgICAgICh0aGlzLnJvdXRlckxpbmtXaXRoSHJlZiAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYpKSB8fFxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rLnNvbWUoaXNBY3RpdmVDaGVja0ZuKSB8fFxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuc29tZShpc0FjdGl2ZUNoZWNrRm4pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5tYXRjaFJvdXRlckV4YWN0KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcbiAgICBASW5qZWN0KENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGluaz86IFJvdXRlckxpbmssXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI/OiBSb3V0ZXJcbiAgKSB7XG4gICAgaWYgKHJvdXRlcikge1xuICAgICAgdGhpcy5yb3V0ZXIhLmV2ZW50cy5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLyoqIHN0b3JlIG9yaWdpbiBwYWRkaW5nIGluIHBhZGRpbmcgKi9cbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkXSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFttb2RlLCBpbmxpbmVJbmRlbnRdKSA9PiB7XG4gICAgICAgIHRoaXMuaW5saW5lUGFkZGluZ0xlZnQgPSBtb2RlID09PSAnaW5saW5lJyA/IHRoaXMubGV2ZWwgKiBpbmxpbmVJbmRlbnQgOiBudWxsO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xuICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpKTtcbiAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkU3RhdGUodGhpcy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=