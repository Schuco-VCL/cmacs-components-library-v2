import { __decorate } from "tslib";
import { ContentChildren, Directive, Inject, Input, Optional } from '@angular/core';
import { NavigationEnd, RouterLink } from '@angular/router';
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
    ngOnInit() {
        /** store origin padding in padding */
        combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsMenuItemDirective_Factory(t) { return new (t || CmacsMenuItemDirective)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzSubmenuService, 8), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i4.RouterLink, 8), i0.ɵɵdirectiveInject(i4.RouterLink, 8), i0.ɵɵdirectiveInject(i4.Router, 8)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsMenuItemDirective, selectors: [["", "cmacs-menu-item", ""]], contentQueries: function CmacsMenuItemDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, RouterLink, 5);
            i0.ɵɵcontentQuery(dirIndex, RouterLink, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfRouterLinkWithHref = _t);
        } }, hostVars: 20, hostBindings: function CmacsMenuItemDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsMenuItemDirective_click_HostBindingHandler($event) { return ctx.clickMenuItem($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft || ctx.inlinePaddingLeft : null, "px");
            i0.ɵɵclassProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.selected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.danger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.disabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.selected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.danger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.disabled);
        } }, inputs: { paddingLeft: "paddingLeft", disabled: "disabled", selected: "selected", danger: "danger", matchRouterExact: "matchRouterExact", matchRouter: "matchRouter" }, exportAs: ["cmacsMenuItem"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
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
            }] }, { type: i4.RouterLink, decorators: [{
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
            args: [RouterLink, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L21lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFHTCxlQUFlLEVBQ2YsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUdULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQVUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFvQjlELE1BQU0sT0FBTyxzQkFBc0I7SUFlakMsaURBQWlEO0lBQ2pELGFBQWEsQ0FBQyxDQUFhO1FBQ3pCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixvQ0FBb0M7Z0JBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsRDtpQkFBTTtnQkFDTCxzQ0FBc0M7Z0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMs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QUUsa0NBQWtDO29CQUM3RSx1Q0FBdUMsRUFBRSxnQ0FBZ0M7b0JBQ3pFLHlDQUF5QyxFQUFFLGtDQUFrQztvQkFDN0UsdUJBQXVCLEVBQUUsdUJBQXVCO29CQUNoRCxnQ0FBZ0MsRUFBRSxtQ0FBbUM7b0JBQ3JFLDhCQUE4QixFQUFFLGlDQUFpQztvQkFDakUsZ0NBQWdDLEVBQUUsbUNBQW1DO29CQUNyRSx3QkFBd0IsRUFBRSx5REFBeUQ7b0JBQ25GLHlCQUF5QixFQUFFLHlEQUF5RDtvQkFDcEYsU0FBUyxFQUFFLHVCQUF1QjtpQkFDbkM7YUFDRjs7c0JBcUVJLFFBQVE7O3NCQUNSLE1BQU07dUJBQUMsOEJBQThCOztzQkFDckMsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTs7c0JBQ1IsUUFBUTt3QkFuRUYsV0FBVztrQkFBbkIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNtQixnQkFBZ0I7a0JBQXhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUM4QyxnQkFBZ0I7a0JBQW5FLGVBQWU7bUJBQUMsVUFBVSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUNFLHdCQUF3QjtrQkFBM0UsZUFBZTttQkFBQyxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XHJcbmltcG9ydCB7IE56U3VibWVudVNlcnZpY2UgfSBmcm9tICcuL3N1Ym1lbnUuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVudUl0ZW0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbV0nOiBgaXNNZW51SW5zaWRlRHJvcERvd25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBzZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGFuZ2VyXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkYW5nZXJgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW1dJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBzZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LWl0ZW0tZGFuZ2VyXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgZGFuZ2VyYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtaXRlbS1kaXNhYmxlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcclxuICAgICdbc3R5bGUucGFkZGluZ0xlZnQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBudWxsIDogcGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnRgLFxyXG4gICAgJ1tzdHlsZS5wYWRkaW5nUmlnaHQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBwYWRkaW5nTGVmdCB8fCBpbmxpbmVQYWRkaW5nTGVmdCA6IG51bGxgLFxyXG4gICAgJyhjbGljayknOiAnY2xpY2tNZW51SXRlbSgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBsZXZlbCA9IHRoaXMubnpTdWJtZW51U2VydmljZSA/IHRoaXMubnpTdWJtZW51U2VydmljZS5sZXZlbCArIDEgOiAxO1xyXG4gIHNlbGVjdGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgaW5saW5lUGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhbmdlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXRjaFJvdXRlckV4YWN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG1hdGNoUm91dGVyID0gZmFsc2U7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmshOiBRdWVyeUxpc3Q8Um91dGVyTGluaz47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZiE6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rPjtcclxuXHJcbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xyXG4gIGNsaWNrTWVudUl0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uek1lbnVTZXJ2aWNlLm9uRGVzY2VuZGFudE1lbnVJdGVtQ2xpY2sodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLm56U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgICAvKiogbWVudSBpdGVtIGluc2lkZSB0aGUgc3VibWVudSAqKi9cclxuICAgICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uub25DaGlsZE1lbnVJdGVtQ2xpY2sodGhpcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLyoqIG1lbnUgaXRlbSBpbnNpZGUgdGhlIHJvb3QgbWVudSAqKi9cclxuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2Uub25DaGlsZE1lbnVJdGVtQ2xpY2sodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkU3RhdGUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMubGlzdE9mUm91dGVyTGluayB8fCAhdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYgfHwgIXRoaXMucm91dGVyIHx8ICF0aGlzLnJvdXRlci5uYXZpZ2F0ZWQgfHwgIXRoaXMubWF0Y2hSb3V0ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGhhc0FjdGl2ZUxpbmtzID0gdGhpcy5oYXNBY3RpdmVMaW5rcygpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gaGFzQWN0aXZlTGlua3MpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gaGFzQWN0aXZlTGlua3M7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQWN0aXZlTGlua3MoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpc0FjdGl2ZUNoZWNrRm4gPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlciEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHRoaXMucm91dGVyTGluayAmJiBpc0FjdGl2ZUNoZWNrRm4odGhpcy5yb3V0ZXJMaW5rKSkgfHxcclxuICAgICAgKHRoaXMucm91dGVyTGlua1dpdGhIcmVmICYmIGlzQWN0aXZlQ2hlY2tGbih0aGlzLnJvdXRlckxpbmtXaXRoSHJlZikpIHx8XHJcbiAgICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5zb21lKGlzQWN0aXZlQ2hlY2tGbikgfHxcclxuICAgICAgdGhpcy5saXN0T2ZSb3V0ZXJMaW5rV2l0aEhyZWYuc29tZShpc0FjdGl2ZUNoZWNrRm4pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluazogUm91dGVyTGluayB8IFJvdXRlckxpbmspID0+IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChsaW5rOiBSb3V0ZXJMaW5rIHwgUm91dGVyTGluaykgPT4gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5tYXRjaFJvdXRlckV4YWN0KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcclxuICAgIEBJbmplY3QoQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW4sXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyTGluaz86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlckxpbmtXaXRoSHJlZj86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcj86IFJvdXRlclxyXG4gICkge1xyXG4gICAgaWYgKHJvdXRlcikge1xyXG4gICAgICB0aGlzLnJvdXRlciEuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxyXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXHJcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLm56TWVudVNlcnZpY2UubW9kZSQsIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbbW9kZSwgaW5saW5lSW5kZW50XSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5saW5lUGFkZGluZ0xlZnQgPSBtb2RlID09PSAnaW5saW5lJyA/IHRoaXMubGV2ZWwgKiBpbmxpbmVJbmRlbnQgOiBudWxsO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mUm91dGVyTGluay5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XHJcbiAgICB0aGlzLmxpc3RPZlJvdXRlckxpbmtXaXRoSHJlZi5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTZWxlY3RlZFN0YXRlKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==