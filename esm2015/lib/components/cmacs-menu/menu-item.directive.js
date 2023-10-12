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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L21lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFHTCxlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUdULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQVUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFvQjlELE1BQU0sT0FBTyxzQkFBc0I7SUFpRWpDLFlBQ1UsYUFBMEIsRUFDMUIsR0FBc0IsRUFDVixnQkFBa0MsRUFDUCxvQkFBNkIsRUFDeEQsY0FBOEIsRUFDOUIsVUFBdUIsRUFDdkIsa0JBQXVDLEVBQ3ZDLE1BQWU7UUFQM0Isa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDVixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ1AseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBQ3hELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQXhF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eUMsRUFBRSxrQ0FBa0M7b0JBQzdFLHVDQUF1QyxFQUFFLGdDQUFnQztvQkFDekUseUNBQXlDLEVBQUUsa0NBQWtDO29CQUM3RSx1QkFBdUIsRUFBRSx1QkFBdUI7b0JBQ2hELGdDQUFnQyxFQUFFLG1DQUFtQztvQkFDckUsOEJBQThCLEVBQUUsaUNBQWlDO29CQUNqRSxnQ0FBZ0MsRUFBRSxtQ0FBbUM7b0JBQ3JFLHdCQUF3QixFQUFFLHlEQUF5RDtvQkFDbkYseUJBQXlCLEVBQUUseURBQXlEO29CQUNwRixTQUFTLEVBQUUsdUJBQXVCO2lCQUNuQzthQUNGOztzQkFxRUksUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyw4QkFBOEI7O3NCQUNyQyxRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFROztzQkFDUixRQUFRO3dCQW5FRixXQUFXO2tCQUFuQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ21CLGdCQUFnQjtrQkFBeEMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQzhDLGdCQUFnQjtrQkFBbkUsZUFBZTttQkFBQyxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBQ1Usd0JBQXdCO2tCQUFuRixlQUFlO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL3N1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVudUl0ZW0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBzZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGFuZ2VyXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkYW5nZXJgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW1dJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBzZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tZGFuZ2VyXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgZGFuZ2VyYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtaXRlbS1kaXNhYmxlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcclxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBudWxsIDogcGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnRgLFxyXG4gICAgJ1tzdHlsZS5wYWRkaW5nUmlnaHQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBwYWRkaW5nTGVmdCB8fCBpbmxpbmVQYWRkaW5nTGVmdCA6IG51bGxgLFxyXG4gICAgJyhjbGljayknOiAnY2xpY2tNZW51SXRlbSgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBsZXZlbCA9IHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xyXG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgaW5saW5lUGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG1hdGNoUm91dGVyID0gZmFsc2U7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmshOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mUm91dGVyTGlua1dpdGhIcmVmITogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XHJcblxyXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cclxuICBjbGlja01lbnVJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpNZW51U2VydmljZS5vbkRlc2NlbmRhbnRNZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5uelN1Ym1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgICAgLyoqIG1lbnUgaXRlbSBpbnNpZGUgdGhlIHN1Ym1lbnUgKiovXHJcbiAgICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm9uQ2hpbGRNZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qKiBtZW51IGl0ZW0gaW5zaWRlIHRoZSByb290IG1lbnUgKiovXHJcbiAgICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm9uQ2hpbGRNZW51SXRlbUNsaWNrKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmxpc3RPZlJvdXRlckxpbmsgfHwgIXRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmIHx8ICF0aGlzLnJvdXRlciB8fCAhdGhpcy5yb3V0ZXIubmF2aWdhdGVkIHx8ICF0aGlzLm1hdGNoUm91dGVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYXNBY3RpdmVMaW5rcyA9IHRoaXMuaGFzQWN0aXZlTGlua3MoKTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgIT09IGhhc0FjdGl2ZUxpbmtzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGhhc0FjdGl2ZUxpbmtzO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0FjdGl2ZUxpbmtzKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNBY3RpdmVDaGVja0ZuID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIhKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh0aGlzLnJvdXRlckxpbmsgJiYgaXNBY3RpdmVDaGVja0ZuKHRoaXMucm91dGVyTGluaykpIHx8XHJcbiAgICAgICh0aGlzLnJvdXRlckxpbmtXaXRoSHJlZiAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rV2l0aEhyZWYpKSB8fFxyXG4gICAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuc29tZShpc0FjdGl2ZUNoZWNrRm4pIHx8XHJcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGlua1dpdGhIcmVmLnNvbWUoaXNBY3RpdmVDaGVja0ZuKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNMaW5rQWN0aXZlKHJvdXRlcjogUm91dGVyKTogKGxpbms6IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLm1hdGNoUm91dGVyRXhhY3QpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxyXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhbixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI/OiBSb3V0ZXJcclxuICApIHtcclxuICAgIGlmIChyb3V0ZXIpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIhLmV2ZW50cy5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xyXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIGlubGluZUluZGVudF0pID0+IHtcclxuICAgICAgICB0aGlzLmlubGluZVBhZGRpbmdMZWZ0ID0gbW9kZSA9PT0gJ2lubGluZScgPyB0aGlzLmxldmVsICogaW5saW5lSW5kZW50IDogbnVsbDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmsuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCkpO1xyXG4gICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRTdGF0ZSh0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==