import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CmacsListItemExtraComponent } from './list-item-cell';
import * as i0 from "@angular/core";
import * as i1 from "./list.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "./list-item-cell";
function CmacsListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ul", 6);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("cmacsActions", ctx_r9.actions);
} }
function CmacsListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsListItemComponent_ng_template_0_ul_0_Template, 1, 1, "ul", 5);
    i0.ɵɵprojection(1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.actions && ctx_r1.actions.length > 0);
} }
function CmacsListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.content);
} }
function CmacsListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsListItemComponent_ng_template_2_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.content);
} }
function CmacsListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵtemplate(2, CmacsListItemComponent_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 7);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.content);
} }
function CmacsListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 3);
} }
function CmacsListItemComponent_ng_template_6_ng_template_0_Template(rf, ctx) { }
function CmacsListItemComponent_ng_template_6_ng_template_1_Template(rf, ctx) { }
function CmacsListItemComponent_ng_template_6_ng_template_2_Template(rf, ctx) { }
function CmacsListItemComponent_ng_template_6_ng_template_3_Template(rf, ctx) { }
function CmacsListItemComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsListItemComponent_ng_template_6_ng_template_0_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(1, CmacsListItemComponent_ng_template_6_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(2, CmacsListItemComponent_ng_template_6_ng_template_2_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(3, CmacsListItemComponent_ng_template_6_ng_template_3_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r4 = i0.ɵɵreference(5);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsListItemComponent_ng_container_8_ng_template_2_Template(rf, ctx) { }
function CmacsListItemComponent_ng_container_8_ng_template_3_Template(rf, ctx) { }
function CmacsListItemComponent_ng_container_8_cmacs_list_item_extra_4_ng_template_1_Template(rf, ctx) { }
function CmacsListItemComponent_ng_container_8_cmacs_list_item_extra_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-item-extra");
    i0.ɵɵtemplate(1, CmacsListItemComponent_ng_container_8_cmacs_list_item_extra_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.extra);
} }
function CmacsListItemComponent_ng_container_8_ng_template_5_Template(rf, ctx) { }
function CmacsListItemComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵtemplate(2, CmacsListItemComponent_ng_container_8_ng_template_2_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(3, CmacsListItemComponent_ng_container_8_ng_template_3_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsListItemComponent_ng_container_8_cmacs_list_item_extra_4_Template, 2, 1, "cmacs-list-item-extra", 7);
    i0.ɵɵtemplate(5, CmacsListItemComponent_ng_container_8_ng_template_5_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(3);
    const _r0 = i0.ɵɵreference(1);
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
const _c0 = [[["cmacs-list-item-actions"], ["", "cmacs-list-item-actions", ""]], [["cmacs-list-item-meta"], ["", "cmacs-list-item-meta", ""]], "*", [["cmacs-list-item-extra"], ["", "cmacs-list-item-extra", ""]]];
const _c1 = ["cmacs-list-item-actions, [cmacs-list-item-actions]", "cmacs-list-item-meta, [cmacs-list-item-meta]", "*", "cmacs-list-item-extra, [cmacs-list-item-extra]"];
export class CmacsListItemComponent {
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.extra);
    }
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.actions = [];
        this.extra = null;
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
    static { this.ɵfac = function CmacsListItemComponent_Factory(t) { return new (t || CmacsListItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CmacsListComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemComponent, selectors: [["cmacs-list-item"], ["", "cmacs-list-item", ""]], contentQueries: function CmacsListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsListItemExtraComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listItemExtraDirective = _t.first);
        } }, hostVars: 2, hostBindings: function CmacsListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-list-item-no-flex", ctx.nzNoFlex);
        } }, inputs: { actions: "actions", content: "content", extra: "extra", nzNoFlex: "nzNoFlex" }, exportAs: ["cmacsListItem"], ngContentSelectors: _c1, decls: 9, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["cmacs-list-item-actions", "", 3, "cmacsActions", 4, "ngIf"], ["cmacs-list-item-actions", "", 3, "cmacsActions"], [4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "ngTemplateOutlet"], [1, "ant-list-item-main"]], template: function CmacsListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, CmacsListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, CmacsListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, CmacsListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(6, CmacsListItemComponent_ng_template_6_Template, 4, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(8, CmacsListItemComponent_ng_container_8_Template, 6, 4, "ng-container", 4);
        } if (rf & 2) {
            const _r6 = i0.ɵɵreference(7);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", _r6);
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective, i4.CmacsListItemActionsComponent, i4.CmacsListItemExtraComponent], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsListItemComponent.prototype, "nzNoFlex", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item, [cmacs-list-item]',
                exportAs: 'cmacsListItem',
                template: `
    <ng-template #actionsTpl>
      <ul cmacs-list-item-actions *ngIf="actions && actions.length > 0" [cmacsActions]="actions"></ul>
      <ng-content select="cmacs-list-item-actions, [cmacs-list-item-actions]"></ng-content>
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="cmacs-list-item-meta, [cmacs-list-item-meta]"></ng-content>
      <ng-content></ng-content>
      <ng-container *ngIf="content">
        <ng-container *nzStringTemplateOutlet="content">{{ content }}</ng-container>
      </ng-container>
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="cmacs-list-item-extra, [cmacs-list-item-extra]"></ng-content>
    </ng-template>
    <ng-template #simpleTpl>
      <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="extra"></ng-template>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
      <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
    </ng-template>

    <ng-container *ngIf="isVerticalAndExtra; else simpleTpl">
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="actionsTpl"></ng-template>
      </div>
      <cmacs-list-item-extra *ngIf="extra">
        <ng-template [ngTemplateOutlet]="extra"></ng-template>
      </cmacs-list-item-extra>
      <ng-template [ngTemplateOutlet]="extraTpl"></ng-template>
    </ng-container>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.CmacsListComponent }, { type: i0.ChangeDetectorRef }]; }, { actions: [{
            type: Input
        }], content: [{
            type: Input
        }], extra: [{
            type: Input
        }], nzNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }], listItemExtraDirective: [{
            type: ContentChild,
            args: [CmacsListItemExtraComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saXN0L2xpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFFWixXQUFXLEVBQ1gsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFRekQsd0JBQWdHOzs7SUFBOUIsNkNBQXdCOzs7SUFBMUYsbUZBQWdHO0lBQ2hHLGtCQUFxRjs7O0lBRHhELGtFQUFtQzs7O0lBTzlELDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixxQ0FBYTs7O0lBRC9ELDZCQUE4QjtJQUM1QixzSEFBNEU7SUFDOUUsMEJBQWU7OztJQURFLGVBQStCO0lBQS9CLHdEQUErQjs7O0lBSGhELHFCQUErRTtJQUMvRSxxQkFBeUI7SUFDekIsdUdBRWU7OztJQUZBLGVBQWE7SUFBYixxQ0FBYTs7O0lBSzVCLHFCQUFpRjs7Ozs7OztJQUdqRixxR0FBMkQ7SUFDM0QscUdBQXNEO0lBQ3RELHFHQUF5RDtJQUN6RCxxR0FBMkQ7Ozs7OztJQUg5QyxzQ0FBK0I7SUFDL0IsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQzFCLGVBQTZCO0lBQTdCLHNDQUE2QjtJQUM3QixlQUErQjtJQUEvQixzQ0FBK0I7Ozs7OztJQVE1Qyw2Q0FBcUM7SUFDbkMsOEhBQXNEO0lBQ3hELGlCQUF3Qjs7O0lBRFQsZUFBMEI7SUFBMUIsZ0RBQTBCOzs7O0lBTjNDLDZCQUF5RDtJQUN2RCwrQkFBZ0M7SUFDOUIsc0dBQTJEO0lBQzNELHNHQUEyRDtJQUM3RCxpQkFBTTtJQUNOLDBIQUV3QjtJQUN4QixzR0FBeUQ7SUFDM0QsMEJBQWU7Ozs7OztJQVBFLGVBQStCO0lBQS9CLHNDQUErQjtJQUMvQixlQUErQjtJQUEvQixzQ0FBK0I7SUFFdEIsZUFBVztJQUFYLG1DQUFXO0lBR3RCLGVBQTZCO0lBQTdCLHNDQUE2Qjs7OztBQU9oRCxNQUFNLE9BQU8sc0JBQXNCO0lBYWpDLElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFlBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFVLFVBQThCLEVBQVUsR0FBc0I7UUFBOUQsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWR0SCxZQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUV2QyxVQUFLLEdBQTZCLElBQUksQ0FBQztRQUNxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBWTdGLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDO3VGQWhDVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjt3Q0FRbkIsMkJBQTJCOzs7Ozs7OztZQTVDdkMsd0hBR2M7WUFDZCx3SEFNYztZQUNkLHdIQUVjO1lBQ2Qsd0hBS2M7WUFFZCx5RkFTZTs7O1lBVEEsZUFBMEI7WUFBMUIsNkNBQTBCLGlCQUFBOzs7QUFxQmxCO0lBQWYsWUFBWSxFQUFFO3dEQUF1RTt1RkFOcEYsc0JBQXNCO2NBeENsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ1Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3NKQUlVLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUMrRCxRQUFRO2tCQUE1RSxLQUFLOztrQkFBb0IsV0FBVzttQkFBQyw2QkFBNkI7WUFFeEIsc0JBQXNCO2tCQUFoRSxZQUFZO21CQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1pdGVtLWNlbGwnO1xuaW1wb3J0IHsgQ21hY3NMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0LmNvbXBvbmVudCc7XHJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1pdGVtLCBbY21hY3MtbGlzdC1pdGVtXScsXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNhY3Rpb25zVHBsPlxuICAgICAgPHVsIGNtYWNzLWxpc3QtaXRlbS1hY3Rpb25zICpuZ0lmPVwiYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA+IDBcIiBbY21hY3NBY3Rpb25zXT1cImFjdGlvbnNcIj48L3VsPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY21hY3MtbGlzdC1pdGVtLWFjdGlvbnMsIFtjbWFjcy1saXN0LWl0ZW0tYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUcGw+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWl0ZW0tbWV0YSwgW2NtYWNzLWxpc3QtaXRlbS1tZXRhXVwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2V4dHJhVHBsPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY21hY3MtbGlzdC1pdGVtLWV4dHJhLCBbY21hY3MtbGlzdC1pdGVtLWV4dHJhXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjc2ltcGxlVHBsPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVRwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uc1RwbFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1ZlcnRpY2FsQW5kRXh0cmE7IGVsc2Ugc2ltcGxlVHBsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tYWluXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y21hY3MtbGlzdC1pdGVtLWV4dHJhICpuZ0lmPVwiZXh0cmFcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvY21hY3MtbGlzdC1pdGVtLWV4dHJhPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhVHBsXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbnpOb0ZsZXg6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoKSBhY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgY29udGVudD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBleHRyYTogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxpc3QtaXRlbS1uby1mbGV4JykgbnpOb0ZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAQ29udGVudENoaWxkKENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudCkgbGlzdEl0ZW1FeHRyYURpcmVjdGl2ZT86IENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudDtcblxuICBwcml2YXRlIGl0ZW1MYXlvdXQ/OiBOekRpcmVjdGlvblZIVHlwZTtcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JD86IFN1YnNjcmlwdGlvbjtcblxuICBnZXQgaXNWZXJ0aWNhbEFuZEV4dHJhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgKCEhdGhpcy5saXN0SXRlbUV4dHJhRGlyZWN0aXZlIHx8ICEhdGhpcy5leHRyYSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHBhcmVudENvbXA6IENtYWNzTGlzdENvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbScpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbUxheW91dCQgPSB0aGlzLnBhcmVudENvbXAuaXRlbUxheW91dE5vdGlmeSQuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICB0aGlzLml0ZW1MYXlvdXQgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pdGVtTGF5b3V0JCkge1xuICAgICAgdGhpcy5pdGVtTGF5b3V0JC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19