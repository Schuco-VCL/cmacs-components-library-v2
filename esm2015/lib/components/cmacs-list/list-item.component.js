import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CmacsListItemExtraComponent } from './list-item-cell';
import * as i0 from "@angular/core";
import * as i1 from "./list.component";
import * as i2 from "@angular/common";
import * as i3 from "./list-item-cell";
import * as i4 from "ng-zorro-antd/core/outlet";
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
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.actions = [];
        this.extra = null;
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && (!!this.listItemExtraDirective || !!this.extra);
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
}
CmacsListItemComponent.ɵfac = function CmacsListItemComponent_Factory(t) { return new (t || CmacsListItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CmacsListComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsListItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemComponent, selectors: [["cmacs-list-item"], ["", "cmacs-list-item", ""]], contentQueries: function CmacsListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsListItemExtraComponent, 1);
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
    } }, directives: [i2.NgIf, i3.CmacsListItemActionsComponent, i4.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i3.CmacsListItemExtraComponent], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saXN0L2xpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFFWixXQUFXLEVBQ1gsS0FBSyxFQUlMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFRekQsd0JBQWdHOzs7SUFBOUIsNkNBQXdCOzs7SUFBMUYsbUZBQWdHO0lBQ2hHLGtCQUFxRjs7O0lBRHhELGtFQUFtQzs7O0lBTzlELDZCQUFnRDtJQUFBLFlBQWE7SUFBQSwwQkFBZTs7O0lBQTVCLGVBQWE7SUFBYixxQ0FBYTs7O0lBRC9ELDZCQUE4QjtJQUM1QixzSEFBNEU7SUFDOUUsMEJBQWU7OztJQURFLGVBQStCO0lBQS9CLHdEQUErQjs7O0lBSGhELHFCQUErRTtJQUMvRSxxQkFBeUI7SUFDekIsdUdBRWU7OztJQUZBLGVBQWE7SUFBYixxQ0FBYTs7O0lBSzVCLHFCQUFpRjs7Ozs7OztJQUdqRixxR0FBMkQ7SUFDM0QscUdBQXNEO0lBQ3RELHFHQUF5RDtJQUN6RCxxR0FBMkQ7Ozs7OztJQUg5QyxzQ0FBK0I7SUFDL0IsZUFBMEI7SUFBMUIsK0NBQTBCO0lBQzFCLGVBQTZCO0lBQTdCLHNDQUE2QjtJQUM3QixlQUErQjtJQUEvQixzQ0FBK0I7Ozs7OztJQVE1Qyw2Q0FBcUM7SUFDbkMsOEhBQXNEO0lBQ3hELGlCQUF3Qjs7O0lBRFQsZUFBMEI7SUFBMUIsZ0RBQTBCOzs7O0lBTjNDLDZCQUF5RDtJQUN2RCwrQkFBZ0M7SUFDOUIsc0dBQTJEO0lBQzNELHNHQUEyRDtJQUM3RCxpQkFBTTtJQUNOLDBIQUV3QjtJQUN4QixzR0FBeUQ7SUFDM0QsMEJBQWU7Ozs7OztJQVBFLGVBQStCO0lBQS9CLHNDQUErQjtJQUMvQixlQUErQjtJQUEvQixzQ0FBK0I7SUFFdEIsZUFBVztJQUFYLG1DQUFXO0lBR3RCLGVBQTZCO0lBQTdCLHNDQUE2Qjs7OztBQU9oRCxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBVSxVQUE4QixFQUFVLEdBQXNCO1FBQTlELGVBQVUsR0FBVixVQUFVLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFkdEgsWUFBTyxHQUE2QixFQUFFLENBQUM7UUFFdkMsVUFBSyxHQUE2QixJQUFJLENBQUM7UUFDcUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQVk3RixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQU5ELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7NEZBaENVLHNCQUFzQjsyREFBdEIsc0JBQXNCO29DQVFuQiwyQkFBMkI7Ozs7Ozs7O1FBNUN2Qyx3SEFHYztRQUNkLHdIQU1jO1FBQ2Qsd0hBRWM7UUFDZCx3SEFLYztRQUVkLHlGQVNlOzs7UUFUQSxlQUEwQjtRQUExQiw2Q0FBMEIsaUJBQUE7O0FBcUIwQjtJQUEzRCxZQUFZLEVBQUU7d0RBQXVFO3VGQU5wRixzQkFBc0I7Y0F4Q2xDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdDVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7c0pBSVUsT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQytELFFBQVE7a0JBQTVFLEtBQUs7O2tCQUFvQixXQUFXO21CQUFDLDZCQUE2QjtZQUV4QixzQkFBc0I7a0JBQWhFLFlBQVk7bUJBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ21hY3NMaXN0SXRlbUV4dHJhQ29tcG9uZW50IH0gZnJvbSAnLi9saXN0LWl0ZW0tY2VsbCc7XHJcbmltcG9ydCB7IENtYWNzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0sIFtjbWFjcy1saXN0LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdEl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUcGw+XHJcbiAgICAgIDx1bCBjbWFjcy1saXN0LWl0ZW0tYWN0aW9ucyAqbmdJZj1cImFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPiAwXCIgW2NtYWNzQWN0aW9uc109XCJhY3Rpb25zXCI+PC91bD5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY21hY3MtbGlzdC1pdGVtLWFjdGlvbnMsIFtjbWFjcy1saXN0LWl0ZW0tYWN0aW9uc11cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VHBsPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWl0ZW0tbWV0YSwgW2NtYWNzLWxpc3QtaXRlbS1tZXRhXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+e3sgY29udGVudCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2V4dHJhVHBsPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWl0ZW0tZXh0cmEsIFtjbWFjcy1saXN0LWl0ZW0tZXh0cmFdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc2ltcGxlVHBsPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVRwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25zVHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmVydGljYWxBbmRFeHRyYTsgZWxzZSBzaW1wbGVUcGxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWFpblwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uc1RwbFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y21hY3MtbGlzdC1pdGVtLWV4dHJhICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2NtYWNzLWxpc3QtaXRlbS1leHRyYT5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhVHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX256Tm9GbGV4OiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBleHRyYTogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGlzdC1pdGVtLW5vLWZsZXgnKSBuek5vRmxleDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAQ29udGVudENoaWxkKENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudCkgbGlzdEl0ZW1FeHRyYURpcmVjdGl2ZT86IENtYWNzTGlzdEl0ZW1FeHRyYUNvbXBvbmVudDtcclxuXHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0PzogTnpEaXJlY3Rpb25WSFR5cGU7XHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JD86IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgZ2V0IGlzVmVydGljYWxBbmRFeHRyYSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcgJiYgKCEhdGhpcy5saXN0SXRlbUV4dHJhRGlyZWN0aXZlIHx8ICEhdGhpcy5leHRyYSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHBhcmVudENvbXA6IENtYWNzTGlzdENvbXBvbmVudCwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1MYXlvdXQkID0gdGhpcy5wYXJlbnRDb21wLml0ZW1MYXlvdXROb3RpZnkkLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICB0aGlzLml0ZW1MYXlvdXQgPSB2YWw7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pdGVtTGF5b3V0JCkge1xyXG4gICAgICB0aGlzLml0ZW1MYXlvdXQkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==