import { ChangeDetectionStrategy, Component, ContentChildren, Input, TemplateRef, ViewChild } from '@angular/core';
import { defer, merge, of, Subject } from 'rxjs';
import { switchMap, take, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function CmacsListItemActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c1 = ["cmacs-list-item-actions", ""];
function CmacsListItemActionsComponent_li_0_ng_template_1_Template(rf, ctx) { }
function CmacsListItemActionsComponent_li_0_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "em", 3);
} }
function CmacsListItemActionsComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, CmacsListItemActionsComponent_li_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    i0.ɵɵtemplate(2, CmacsListItemActionsComponent_li_0_em_2_Template, 1, 0, "em", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", i_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r2);
} }
export class CmacsListItemExtraComponent {
    constructor() { }
    static { this.ɵfac = function CmacsListItemExtraComponent_Factory(t) { return new (t || CmacsListItemExtraComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemExtraComponent, selectors: [["cmacs-list-item-extra"], ["", "cmacs-list-item-extra", ""]], hostAttrs: [1, "ant-list-item-extra"], exportAs: ["cmacsListItemExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListItemExtraComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemExtraComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-extra, [cmacs-list-item-extra]',
                exportAs: 'cmacsListItemExtra',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-item-extra'
                }
            }]
    }], function () { return []; }, null); })();
export class CmacsListItemActionComponent {
    constructor() { }
    static { this.ɵfac = function CmacsListItemActionComponent_Factory(t) { return new (t || CmacsListItemActionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemActionComponent, selectors: [["cmacs-list-item-action"]], viewQuery: function CmacsListItemActionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, exportAs: ["cmacsListItemAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListItemActionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemActionComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-action',
                exportAs: 'cmacsListItemAction',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-template><ng-content></ng-content></ng-template> `
            }]
    }], function () { return []; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }] }); })();
export class CmacsListItemActionsComponent {
    constructor(ngZone, cdr) {
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.cmacsActions = [];
        this.actions = [];
        this.destroy$ = new Subject();
        this.inputActionChanges$ = new Subject();
        this.contentChildrenChanges$ = defer(() => {
            if (this.nzListItemActions) {
                return of(null);
            }
            return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.contentChildrenChanges$));
        });
        merge(this.contentChildrenChanges$, this.inputActionChanges$)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if (this.cmacsActions.length) {
                this.actions = this.cmacsActions;
            }
            else {
                this.actions = this.nzListItemActions.map(action => action.templateRef);
            }
            this.cdr.detectChanges();
        });
    }
    ngOnChanges() {
        this.inputActionChanges$.next(null);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsListItemActionsComponent_Factory(t) { return new (t || CmacsListItemActionsComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemActionsComponent, selectors: [["ul", "cmacs-list-item-actions", ""]], contentQueries: function CmacsListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsListItemActionComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
        } }, hostAttrs: [1, "ant-list-item-action"], inputs: { cmacsActions: "cmacsActions" }, exportAs: ["cmacsListItemActions"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]], template: function CmacsListItemActionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.actions);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ul[cmacs-list-item-actions]',
                exportAs: 'cmacsListItemActions',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <li *ngFor="let i of actions; let last = last">
      <ng-template [ngTemplateOutlet]="i"></ng-template>
      <em *ngIf="!last" class="ant-list-item-action-split"></em>
    </li>
  `,
                host: {
                    class: 'ant-list-item-action'
                }
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; }, { cmacsActions: [{
            type: Input
        }], nzListItemActions: [{
            type: ContentChildren,
            args: [CmacsListItemActionComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlzdC9saXN0LWl0ZW0tY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFtQmpDLGtCQUF5Qjs7Ozs7SUFjOUMsd0JBQTBEOzs7SUFGNUQsMEJBQStDO0lBQzdDLG1HQUFrRDtJQUNsRCxpRkFBMEQ7SUFDNUQsaUJBQUs7Ozs7SUFGVSxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDOUIsZUFBVztJQUFYLCtCQUFXOztBQXRCdEIsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxnQkFBZSxDQUFDOzRGQURMLDJCQUEyQjtvRUFBM0IsMkJBQTJCOztZQUwxQixrQkFBeUI7Ozt1RkFLMUIsMkJBQTJCO2NBVHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO2dCQUMxRCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxxQkFBcUI7aUJBQzdCO2FBQ0Y7O0FBV0QsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxnQkFBZSxDQUFDOzZGQUZMLDRCQUE0QjtvRUFBNUIsNEJBQTRCOzJCQUM1QixXQUFXOzs7Ozs7WUFIViwwRkFBb0Q7Ozt1RkFFckQsNEJBQTRCO2NBTnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLHdEQUF3RDthQUNuRTtzQ0FFeUIsV0FBVztrQkFBbEMsU0FBUzttQkFBQyxXQUFXOztBQWtCeEIsTUFBTSxPQUFPLDZCQUE2QjtJQWlCeEMsWUFBb0IsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCekQsaUJBQVksR0FBNkIsRUFBRSxDQUFDO1FBR3JELFlBQU8sR0FBNkIsRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDMUMsNEJBQXVCLEdBQXFCLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDN0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQzlDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUdELEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVksQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4RkFyQ1UsNkJBQTZCO29FQUE3Qiw2QkFBNkI7d0NBRXZCLDRCQUE0Qjs7Ozs7WUFYM0MsNEVBR0s7O1lBSGEscUNBQVk7Ozt1RkFTckIsNkJBQTZCO2NBZHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsc0JBQXNCO2lCQUM5QjthQUNGO3lGQUVVLFlBQVk7a0JBQXBCLEtBQUs7WUFDeUMsaUJBQWlCO2tCQUEvRCxlQUFlO21CQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbS1leHRyYSwgW2NtYWNzLWxpc3QtaXRlbS1leHRyYV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbUV4dHJhJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtbGlzdC1pdGVtLWV4dHJhJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbS1hY3Rpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbUFjdGlvbicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPiBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RJdGVtQWN0aW9uQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZj86IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1bFtjbWFjcy1saXN0LWl0ZW0tYWN0aW9uc10nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbUFjdGlvbnMnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGkgb2YgYWN0aW9uczsgbGV0IGxhc3QgPSBsYXN0XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPGVtICpuZ0lmPVwiIWxhc3RcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uLXNwbGl0XCI+PC9lbT5cclxuICAgIDwvbGk+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1saXN0LWl0ZW0tYWN0aW9uJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1BY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNtYWNzQWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc0xpc3RJdGVtQWN0aW9uQ29tcG9uZW50KSBuekxpc3RJdGVtQWN0aW9ucyE6IFF1ZXJ5TGlzdDxDbWFjc0xpc3RJdGVtQWN0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBpbnB1dEFjdGlvbkNoYW5nZXMkID0gbmV3IFN1YmplY3Q8bnVsbD4oKTtcclxuICBwcml2YXRlIGNvbnRlbnRDaGlsZHJlbkNoYW5nZXMkOiBPYnNlcnZhYmxlPG51bGw+ID0gZGVmZXIoKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMubnpMaXN0SXRlbUFjdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubmdab25lLm9uU3RhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXHJcbiAgICAgIHRha2UoMSksXHJcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmNvbnRlbnRDaGlsZHJlbkNoYW5nZXMkKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICBtZXJnZSh0aGlzLmNvbnRlbnRDaGlsZHJlbkNoYW5nZXMkLCB0aGlzLmlucHV0QWN0aW9uQ2hhbmdlcyQpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY21hY3NBY3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgdGhpcy5hY3Rpb25zID0gdGhpcy5jbWFjc0FjdGlvbnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuYWN0aW9ucyA9IHRoaXMubnpMaXN0SXRlbUFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24udGVtcGxhdGVSZWYhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEFjdGlvbkNoYW5nZXMkLm5leHQobnVsbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19