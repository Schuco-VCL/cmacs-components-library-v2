import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
function CmacsBreadCrumbComponent_ng_container_1_cmacs_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-breadcrumb-item");
    i0.ɵɵelementStart(1, "a", 2);
    i0.ɵɵlistener("click", function CmacsBreadCrumbComponent_ng_container_1_cmacs_breadcrumb_item_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r4); const breadcrumb_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.navigate(breadcrumb_r2.url, $event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("href", breadcrumb_r2.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(breadcrumb_r2.label);
} }
function CmacsBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsBreadCrumbComponent_ng_container_1_cmacs_breadcrumb_item_1_Template, 3, 2, "cmacs-breadcrumb-item", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.breadcrumbs);
} }
const _c0 = ["*"];
export class CmacsBreadCrumbComponent {
    constructor(injector, ngZone, cdr, elementRef, renderer, directionality) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.directionality = directionality;
        this.autoGenerate = false;
        this.separator = '/';
        this.routeLabel = 'breadcrumb';
        this.routeLabelFn = label => label;
        this.breadcrumbs = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    ngOnInit() {
        var _a;
        if (this.autoGenerate) {
            this.registerRouterChange();
        }
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.prepareComponentForRtl();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.prepareComponentForRtl();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    navigate(url, e) {
        e.preventDefault();
        this.ngZone.run(() => this.injector.get(Router).navigateByUrl(url).then()).then();
    }
    registerRouterChange() {
        try {
            const router = this.injector.get(Router);
            const activatedRoute = this.injector.get(ActivatedRoute);
            router.events
                .pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$), startWith(true) // trigger initial render
            )
                .subscribe(() => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            });
        }
        catch (e) {
            throw new Error(`${PREFIX} You should import RouterModule if you want to use 'autoGenerate'.`);
        }
    }
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                const routeUrl = child.snapshot.url
                    .map(segment => segment.path)
                    .filter(path => path)
                    .join('/');
                // Do not change nextUrl if routeUrl is falsy. This happens when it's a route lazy loading other modules.
                const nextUrl = !!routeUrl ? url + `/${routeUrl}` : url;
                const breadcrumbLabel = this.routeLabelFn(child.snapshot.data[this.routeLabel]);
                // If have data, go to generate a breadcrumb for it.
                if (routeUrl && breadcrumbLabel) {
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return breadcrumbs;
    }
    prepareComponentForRtl() {
        if (this.dir === 'rtl') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
        }
    }
}
CmacsBreadCrumbComponent.ɵfac = function CmacsBreadCrumbComponent_Factory(t) { return new (t || CmacsBreadCrumbComponent)(i0.ɵɵdirectiveInject(i0.Injector), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
CmacsBreadCrumbComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsBreadCrumbComponent, selectors: [["cmacs-breadcrumb"]], inputs: { autoGenerate: "autoGenerate", separator: "separator", routeLabel: "routeLabel", routeLabelFn: "routeLabelFn" }, exportAs: ["cmacsBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function CmacsBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
        i0.ɵɵtemplate(1, CmacsBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.autoGenerate && ctx.breadcrumbs.length);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsBreadCrumbComponent.prototype, "autoGenerate", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsBreadCrumbComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-breadcrumb',
                exportAs: 'cmacsBreadcrumb',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <ng-container *ngIf="autoGenerate && breadcrumbs.length">
      <cmacs-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs">
        <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
      </cmacs-breadcrumb-item>
    </ng-container>
  `
            }]
    }], function () { return [{ type: i0.Injector }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { autoGenerate: [{
            type: Input
        }], separator: [{
            type: Input
        }], routeLabel: [{
            type: Input
        }], routeLabelFn: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsS0FBSyxFQUlMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUduRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFpQnhELDZDQUE4RDtJQUM1RCw0QkFBMkU7SUFBM0MsMlJBQTBDO0lBQUMsWUFBc0I7SUFBQSxpQkFBSTtJQUN2RyxpQkFBd0I7OztJQURuQixlQUE0QjtJQUE1QiwyREFBNEI7SUFBNEMsZUFBc0I7SUFBdEIseUNBQXNCOzs7SUFGckcsNkJBQXlEO0lBQ3ZELDRIQUV3QjtJQUMxQiwwQkFBZTs7O0lBSGlDLGVBQWM7SUFBZCw0Q0FBYzs7O0FBTWxFLE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsWUFDVSxRQUFrQixFQUNsQixNQUFjLEVBQ2QsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDUCxjQUE4QjtRQUwxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFdBQU0sR0FBTixNQUFN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QUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxzQkFBc0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQzs7Z0dBakhVLHdCQUF3Qjs2REFBeEIsd0JBQXdCOztRQVJqQyxrQkFBeUI7UUFDekIsMkZBSWU7O1FBSkEsZUFBd0M7UUFBeEMsaUVBQXdDOztBQVVoQztJQUFmLFlBQVksRUFBRTs4REFBc0I7dUZBSG5DLHdCQUF3QjtjQWZwQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDthQUNGOztzQkFvQkksUUFBUTt3QkFoQmMsWUFBWTtrQkFBcEMsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnY21hY3MtYnJlYWRjcnVtYicsXG4gIGV4cG9ydEFzOiAnY21hY3NCcmVhZGNydW1iJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvR2VuZXJhdGUgJiYgYnJlYWRjcnVtYnMubGVuZ3RoXCI+XG4gICAgICA8Y21hY3MtYnJlYWRjcnVtYi1pdGVtICpuZ0Zvcj1cImxldCBicmVhZGNydW1iIG9mIGJyZWFkY3J1bWJzXCI+XG4gICAgICAgIDxhIFthdHRyLmhyZWZdPVwiYnJlYWRjcnVtYi51cmxcIiAoY2xpY2spPVwibmF2aWdhdGUoYnJlYWRjcnVtYi51cmwsICRldmVudClcIj57eyBicmVhZGNydW1iLmxhYmVsIH19PC9hPlxuICAgICAgPC9jbWFjcy1icmVhZGNydW1iLWl0ZW0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0dlbmVyYXRlOiBCb29sZWFuSW5wdXQ7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9HZW5lcmF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXBhcmF0b3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9ICcvJztcbiAgQElucHV0KCkgcm91dGVMYWJlbDogc3RyaW5nID0gJ2JyZWFkY3J1bWInO1xuICBASW5wdXQoKSByb3V0ZUxhYmVsRm46IChsYWJlbDogc3RyaW5nKSA9PiBzdHJpbmcgPSBsYWJlbCA9PiBsYWJlbDtcblxuICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW107XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYicpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXV0b0dlbmVyYXRlKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudEZvclJ0bCgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMucHJlcGFyZUNvbXBvbmVudEZvclJ0bCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmF2aWdhdGUodXJsOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS5uYXZpZ2F0ZUJ5VXJsKHVybCkudGhlbigpKS50aGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyUm91dGVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgY29uc3QgYWN0aXZhdGVkUm91dGUgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpIC8vIHRyaWdnZXIgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyhhY3RpdmF0ZWRSb3V0ZS5yb290KTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0gWW91IHNob3VsZCBpbXBvcnQgUm91dGVyTW9kdWxlIGlmIHlvdSB3YW50IHRvIHVzZSAnYXV0b0dlbmVyYXRlJy5gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEJyZWFkY3J1bWJzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdXJsOiBzdHJpbmcgPSAnJywgYnJlYWRjcnVtYnM6IEJyZWFkY3J1bWJPcHRpb25bXSA9IFtdKTogQnJlYWRjcnVtYk9wdGlvbltdIHtcbiAgICBjb25zdCBjaGlsZHJlbjogQWN0aXZhdGVkUm91dGVbXSA9IHJvdXRlLmNoaWxkcmVuO1xuXG4gICAgLy8gSWYgdGhlcmUncyBubyBzdWIgcm9vdCwgdGhlbiBzdG9wIHRoZSByZWN1cnNlIGFuZCByZXR1cm5zIHRoZSBnZW5lcmF0ZWQgYnJlYWRjcnVtYnMuXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgIGlmIChjaGlsZC5vdXRsZXQgPT09IFBSSU1BUllfT1VUTEVUKSB7XG4gICAgICAgIC8vIE9ubHkgcGFyc2UgY29tcG9uZW50cyBpbiBwcmltYXJ5IHJvdXRlci1vdXRsZXQgKGluIGFub3RoZXIgd29yZCwgcm91dGVyLW91dGxldCB3aXRob3V0IGEgc3BlY2lmaWMgbmFtZSkuXG4gICAgICAgIC8vIFBhcnNlIHRoaXMgbGF5ZXIgYW5kIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBpdGVtLlxuICAgICAgICBjb25zdCByb3V0ZVVybDogc3RyaW5nID0gY2hpbGQuc25hcHNob3QudXJsXG4gICAgICAgICAgLm1hcChzZWdtZW50ID0+IHNlZ21lbnQucGF0aClcbiAgICAgICAgICAuZmlsdGVyKHBhdGggPT4gcGF0aClcbiAgICAgICAgICAuam9pbignLycpO1xuXG4gICAgICAgIC8vIERvIG5vdCBjaGFuZ2UgbmV4dFVybCBpZiByb3V0ZVVybCBpcyBmYWxzeS4gVGhpcyBoYXBwZW5zIHdoZW4gaXQncyBhIHJvdXRlIGxhenkgbG9hZGluZyBvdGhlciBtb2R1bGVzLlxuICAgICAgICBjb25zdCBuZXh0VXJsID0gISFyb3V0ZVVybCA/IHVybCArIGAvJHtyb3V0ZVVybH1gIDogdXJsO1xuICAgICAgICBjb25zdCBicmVhZGNydW1iTGFiZWwgPSB0aGlzLnJvdXRlTGFiZWxGbihjaGlsZC5zbmFwc2hvdC5kYXRhW3RoaXMucm91dGVMYWJlbF0pO1xuXG4gICAgICAgIC8vIElmIGhhdmUgZGF0YSwgZ28gdG8gZ2VuZXJhdGUgYSBicmVhZGNydW1iIGZvciBpdC5cbiAgICAgICAgaWYgKHJvdXRlVXJsICYmIGJyZWFkY3J1bWJMYWJlbCkge1xuICAgICAgICAgIGNvbnN0IGJyZWFkY3J1bWI6IEJyZWFkY3J1bWJPcHRpb24gPSB7XG4gICAgICAgICAgICBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLFxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICB1cmw6IG5leHRVcmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgbmV4dFVybCwgYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBicmVhZGNydW1icztcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZUNvbXBvbmVudEZvclJ0bCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJyZWFkY3J1bWItcnRsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnJlYWRjcnVtYi1ydGwnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==