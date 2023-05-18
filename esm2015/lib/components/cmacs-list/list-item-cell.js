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
}
CmacsListItemExtraComponent.ɵfac = function CmacsListItemExtraComponent_Factory(t) { return new (t || CmacsListItemExtraComponent)(); };
CmacsListItemExtraComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemExtraComponent, selectors: [["cmacs-list-item-extra"], ["", "cmacs-list-item-extra", ""]], hostAttrs: [1, "ant-list-item-extra"], exportAs: ["cmacsListItemExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListItemExtraComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
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
}
CmacsListItemActionComponent.ɵfac = function CmacsListItemActionComponent_Factory(t) { return new (t || CmacsListItemActionComponent)(); };
CmacsListItemActionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemActionComponent, selectors: [["cmacs-list-item-action"]], viewQuery: function CmacsListItemActionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, exportAs: ["cmacsListItemAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListItemActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsListItemActionsComponent.ɵfac = function CmacsListItemActionsComponent_Factory(t) { return new (t || CmacsListItemActionsComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsListItemActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemActionsComponent, selectors: [["ul", "cmacs-list-item-actions", ""]], contentQueries: function CmacsListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsListItemActionComponent, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzListItemActions = _t);
    } }, hostAttrs: [1, "ant-list-item-action"], inputs: { cmacsActions: "cmacsActions" }, exportAs: ["cmacsListItemActions"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"]], template: function CmacsListItemActionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsListItemActionsComponent_li_0_Template, 3, 2, "li", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.actions);
    } }, directives: [i1.NgForOf, i1.NgTemplateOutlet, i1.NgIf], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLWNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlzdC9saXN0LWl0ZW0tY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7SUFtQmpDLGtCQUF5Qjs7Ozs7SUFjOUMsd0JBQTBEOzs7SUFGNUQsMEJBQStDO0lBQzdDLG1HQUFrRDtJQUNsRCxpRkFBMEQ7SUFDNUQsaUJBQUs7Ozs7SUFGVSxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFDOUIsZUFBVztJQUFYLCtCQUFXOztBQXRCdEIsTUFBTSxPQUFPLDJCQUEyQjtJQUN0QyxnQkFBZSxDQUFDOztzR0FETCwyQkFBMkI7Z0VBQTNCLDJCQUEyQjs7UUFMMUIsa0JBQXlCOzt1RkFLMUIsMkJBQTJCO2NBVHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO2dCQUMxRCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxxQkFBcUI7aUJBQzdCO2FBQ0Y7O0FBV0QsTUFBTSxPQUFPLDRCQUE0QjtJQUV2QyxnQkFBZSxDQUFDOzt3R0FGTCw0QkFBNEI7aUVBQTVCLDRCQUE0Qjt1QkFDNUIsV0FBVzs7Ozs7O1FBSFYsMEZBQW9EOzt1RkFFckQsNEJBQTRCO2NBTnhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLHdEQUF3RDthQUNuRTtzQ0FFeUIsV0FBVztrQkFBbEMsU0FBUzttQkFBQyxXQUFXOztBQWtCeEIsTUFBTSxPQUFPLDZCQUE2QjtJQWlCeEMsWUFBb0IsTUFBYyxFQUFVLEdBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCekQsaUJBQVksR0FBNkIsRUFBRSxDQUFDO1FBR3JELFlBQU8sR0FBNkIsRUFBRSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDMUMsNEJBQXVCLEdBQXFCLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDN0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQzlDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUdELEtBQUssQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVksQ0FBQyxDQUFDO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzswR0FyQ1UsNkJBQTZCO2tFQUE3Qiw2QkFBNkI7b0NBRXZCLDRCQUE0Qjs7Ozs7UUFYM0MsNEVBR0s7O1FBSGEscUNBQVk7O3VGQVNyQiw2QkFBNkI7Y0FkekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxzQkFBc0I7aUJBQzlCO2FBQ0Y7eUZBRVUsWUFBWTtrQkFBcEIsS0FBSztZQUN5QyxpQkFBaUI7a0JBQS9ELGVBQWU7bUJBQUMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1pdGVtLWV4dHJhLCBbY21hY3MtbGlzdC1pdGVtLWV4dHJhXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtRXh0cmEnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1saXN0LWl0ZW0tZXh0cmEnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbUV4dHJhQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1pdGVtLWFjdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtQWN0aW9uJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+IGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1BY3Rpb25Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmPzogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VsW2NtYWNzLWxpc3QtaXRlbS1hY3Rpb25zXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtQWN0aW9ucycsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBhY3Rpb25zOyBsZXQgbGFzdCA9IGxhc3RcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8ZW0gKm5nSWY9XCIhbGFzdFwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1hY3Rpb24tc3BsaXRcIj48L2VtPlxyXG4gICAgPC9saT5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWxpc3QtaXRlbS1hY3Rpb24nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbUFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgY21hY3NBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzTGlzdEl0ZW1BY3Rpb25Db21wb25lbnQpIG56TGlzdEl0ZW1BY3Rpb25zITogUXVlcnlMaXN0PENtYWNzTGlzdEl0ZW1BY3Rpb25Db21wb25lbnQ+O1xyXG5cclxuICBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGlucHV0QWN0aW9uQ2hhbmdlcyQgPSBuZXcgU3ViamVjdDxudWxsPigpO1xyXG4gIHByaXZhdGUgY29udGVudENoaWxkcmVuQ2hhbmdlcyQ6IE9ic2VydmFibGU8bnVsbD4gPSBkZWZlcigoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5uekxpc3RJdGVtQWN0aW9ucykge1xyXG4gICAgICByZXR1cm4gb2YobnVsbCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUub25TdGFibGUuYXNPYnNlcnZhYmxlKCkucGlwZShcclxuICAgICAgdGFrZSgxKSxcclxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY29udGVudENoaWxkcmVuQ2hhbmdlcyQpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIG1lcmdlKHRoaXMuY29udGVudENoaWxkcmVuQ2hhbmdlcyQsIHRoaXMuaW5wdXRBY3Rpb25DaGFuZ2VzJClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5jbWFjc0FjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGlvbnMgPSB0aGlzLmNtYWNzQWN0aW9ucztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hY3Rpb25zID0gdGhpcy5uekxpc3RJdGVtQWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbi50ZW1wbGF0ZVJlZiEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0QWN0aW9uQ2hhbmdlcyQubmV4dChudWxsKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==