import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CmacsListItemMetaDescriptionComponent as DescriptionComponent, CmacsListItemMetaTitleComponent as TitleComponent } from './list-item-meta-cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "./list-item-meta-cell";
function CmacsListItemMetaComponent_cmacs_list_item_meta_avatar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-list-item-meta-avatar", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.avatarStr);
} }
function CmacsListItemMetaComponent_cmacs_list_item_meta_avatar_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-item-meta-avatar");
    i0.ɵɵelementContainer(1, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.avatarTpl);
} }
function CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_title_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.cmacsTitle);
} }
function CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_title_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-item-meta-title");
    i0.ɵɵtemplate(1, CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_title_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.cmacsTitle);
} }
function CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_description_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.description);
} }
function CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_description_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-list-item-meta-description");
    i0.ɵɵtemplate(1, CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_description_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.description);
} }
function CmacsListItemMetaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_title_1_Template, 2, 1, "cmacs-list-item-meta-title", 1);
    i0.ɵɵtemplate(2, CmacsListItemMetaComponent_div_3_cmacs_list_item_meta_description_2_Template, 2, 1, "cmacs-list-item-meta-description", 1);
    i0.ɵɵprojection(3, 1);
    i0.ɵɵprojection(4, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.cmacsTitle && !ctx_r2.titleComponent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.description && !ctx_r2.descriptionComponent);
} }
const _c0 = [[["cmacs-list-item-meta-avatar"]], [["cmacs-list-item-meta-title"]], [["cmacs-list-item-meta-description"]]];
const _c1 = ["cmacs-list-item-meta-avatar", "cmacs-list-item-meta-title", "cmacs-list-item-meta-description"];
export class CmacsListItemMetaComponent {
    set avatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    static { this.ɵfac = function CmacsListItemMetaComponent_Factory(t) { return new (t || CmacsListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemMetaComponent, selectors: [["cmacs-list-item-meta"], ["", "cmacs-list-item-meta", ""]], contentQueries: function CmacsListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, DescriptionComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, TitleComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleComponent = _t.first);
        } }, inputs: { avatar: "avatar", cmacsTitle: "cmacsTitle", description: "description" }, exportAs: ["cmacsListItemMeta"], ngContentSelectors: _c1, decls: 4, vars: 3, consts: [[3, "src", 4, "ngIf"], [4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [3, "src"], [3, "ngTemplateOutlet"], [1, "ant-list-item-meta-content"], [4, "nzStringTemplateOutlet"]], template: function CmacsListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵtemplate(0, CmacsListItemMetaComponent_cmacs_list_item_meta_avatar_0_Template, 1, 1, "cmacs-list-item-meta-avatar", 0);
            i0.ɵɵtemplate(1, CmacsListItemMetaComponent_cmacs_list_item_meta_avatar_1_Template, 2, 1, "cmacs-list-item-meta-avatar", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵtemplate(3, CmacsListItemMetaComponent_div_3_Template, 5, 2, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.avatarStr);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.avatarTpl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.cmacsTitle || ctx.description || ctx.descriptionComponent || ctx.titleComponent);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.NzStringTemplateOutletDirective, i3.CmacsListItemMetaAvatarComponent, i3.CmacsListItemMetaDescriptionComponent, i3.CmacsListItemMetaTitleComponent], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemMetaComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-meta, [cmacs-list-item-meta]',
                exportAs: 'cmacsListItemMeta',
                template: `
    <!--Old API Start-->
    <cmacs-list-item-meta-avatar *ngIf="avatarStr" [src]="avatarStr"></cmacs-list-item-meta-avatar>
    <cmacs-list-item-meta-avatar *ngIf="avatarTpl">
      <ng-container [ngTemplateOutlet]="avatarTpl"></ng-container>
    </cmacs-list-item-meta-avatar>
    <!--Old API End-->

    <ng-content select="cmacs-list-item-meta-avatar"></ng-content>

    <div *ngIf="cmacsTitle || description || descriptionComponent || titleComponent" class="ant-list-item-meta-content">
      <!--Old API Start-->
      <cmacs-list-item-meta-title *ngIf="cmacsTitle && !titleComponent">
        <ng-container *nzStringTemplateOutlet="cmacsTitle">{{ cmacsTitle }}</ng-container>
      </cmacs-list-item-meta-title>
      <cmacs-list-item-meta-description *ngIf="description && !descriptionComponent">
        <ng-container *nzStringTemplateOutlet="description">{{ description }}</ng-container>
      </cmacs-list-item-meta-description>
      <!--Old API End-->

      <ng-content select="cmacs-list-item-meta-title"></ng-content>
      <ng-content select="cmacs-list-item-meta-description"></ng-content>
    </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { avatar: [{
            type: Input
        }], cmacsTitle: [{
            type: Input
        }], description: [{
            type: Input
        }], descriptionComponent: [{
            type: ContentChild,
            args: [DescriptionComponent]
        }], titleComponent: [{
            type: ContentChild,
            args: [TitleComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wscUNBQXFDLElBQUksb0JBQW9CLEVBQzdELCtCQUErQixJQUFJLGNBQWMsRUFDbEQsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0lBTzNCLGlEQUErRjs7O0lBQWhELHNDQUFpQjs7O0lBQ2hFLG1EQUErQztJQUM3QywyQkFBNEQ7SUFDOUQsaUJBQThCOzs7SUFEZCxlQUE4QjtJQUE5QixtREFBOEI7OztJQVMxQyw2QkFBbUQ7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFEckUsa0RBQWtFO0lBQ2hFLGdJQUFrRjtJQUNwRixpQkFBNkI7OztJQURaLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2pELDZCQUFvRDtJQUFBLFlBQWlCO0lBQUEsMEJBQWU7OztJQUFoQyxlQUFpQjtJQUFqQix3Q0FBaUI7OztJQUR2RSx3REFBK0U7SUFDN0Usc0lBQW9GO0lBQ3RGLGlCQUFtQzs7O0lBRGxCLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0lBTnRELDhCQUFvSDtJQUVsSCwrSEFFNkI7SUFDN0IsMklBRW1DO0lBR25DLHFCQUE2RDtJQUM3RCxxQkFBbUU7SUFDckUsaUJBQU07OztJQVZ5QixlQUFtQztJQUFuQyxrRUFBbUM7SUFHN0IsZUFBMEM7SUFBMUMseUVBQTBDOzs7O0FBYW5GLE1BQU0sT0FBTywwQkFBMEI7SUFJckMsSUFDSSxNQUFNLENBQUMsS0FBaUM7UUFDMUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7SUFRRCxZQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBbkJ0RSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBb0JiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN6RSxDQUFDOzJGQXRCVSwwQkFBMEI7b0VBQTFCLDBCQUEwQjt3Q0FrQnZCLG9CQUFvQjt3Q0FDcEIsY0FBYzs7Ozs7OztZQTdDMUIsMkhBQStGO1lBQy9GLDJIQUU4QjtZQUc5QixrQkFBOEQ7WUFFOUQsMkVBWU07O1lBcEJ3QixvQ0FBZTtZQUNmLGVBQWU7WUFBZixvQ0FBZTtZQU92QyxlQUF5RTtZQUF6RSwwR0FBeUU7Ozt1RkFrQnRFLDBCQUEwQjtjQS9CdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDO3FGQU1LLE1BQU07a0JBRFQsS0FBSztZQVVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLO1lBRThCLG9CQUFvQjtrQkFBdkQsWUFBWTttQkFBQyxvQkFBb0I7WUFDSixjQUFjO2tCQUEzQyxZQUFZO21CQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDbWFjc0xpc3RJdGVtTWV0YURlc2NyaXB0aW9uQ29tcG9uZW50IGFzIERlc2NyaXB0aW9uQ29tcG9uZW50LFxyXG4gIENtYWNzTGlzdEl0ZW1NZXRhVGl0bGVDb21wb25lbnQgYXMgVGl0bGVDb21wb25lbnRcclxufSBmcm9tICcuL2xpc3QtaXRlbS1tZXRhLWNlbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0tbWV0YSwgW2NtYWNzLWxpc3QtaXRlbS1tZXRhXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtTWV0YScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDwhLS1PbGQgQVBJIFN0YXJ0LS0+XHJcbiAgICA8Y21hY3MtbGlzdC1pdGVtLW1ldGEtYXZhdGFyICpuZ0lmPVwiYXZhdGFyU3RyXCIgW3NyY109XCJhdmF0YXJTdHJcIj48L2NtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhcj5cclxuICAgIDxjbWFjcy1saXN0LWl0ZW0tbWV0YS1hdmF0YXIgKm5nSWY9XCJhdmF0YXJUcGxcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJhdmF0YXJUcGxcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvY21hY3MtbGlzdC1pdGVtLW1ldGEtYXZhdGFyPlxyXG4gICAgPCEtLU9sZCBBUEkgRW5kLS0+XHJcblxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY21hY3MtbGlzdC1pdGVtLW1ldGEtYXZhdGFyXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJjbWFjc1RpdGxlIHx8IGRlc2NyaXB0aW9uIHx8IGRlc2NyaXB0aW9uQ29tcG9uZW50IHx8IHRpdGxlQ29tcG9uZW50XCIgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtY29udGVudFwiPlxyXG4gICAgICA8IS0tT2xkIEFQSSBTdGFydC0tPlxyXG4gICAgICA8Y21hY3MtbGlzdC1pdGVtLW1ldGEtdGl0bGUgKm5nSWY9XCJjbWFjc1RpdGxlICYmICF0aXRsZUNvbXBvbmVudFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc1RpdGxlXCI+e3sgY21hY3NUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2NtYWNzLWxpc3QtaXRlbS1tZXRhLXRpdGxlPlxyXG4gICAgICA8Y21hY3MtbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb24gKm5nSWY9XCJkZXNjcmlwdGlvbiAmJiAhZGVzY3JpcHRpb25Db21wb25lbnRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZGVzY3JpcHRpb25cIj57eyBkZXNjcmlwdGlvbiB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2NtYWNzLWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uPlxyXG4gICAgICA8IS0tT2xkIEFQSSBFbmQtLT5cclxuXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNtYWNzLWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbU1ldGFDb21wb25lbnQge1xyXG4gIGF2YXRhclN0ciA9ICcnO1xyXG4gIGF2YXRhclRwbD86IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLmF2YXRhclN0ciA9ICcnO1xyXG4gICAgICB0aGlzLmF2YXRhclRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChEZXNjcmlwdGlvbkNvbXBvbmVudCkgZGVzY3JpcHRpb25Db21wb25lbnQ/OiBEZXNjcmlwdGlvbkNvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkKFRpdGxlQ29tcG9uZW50KSB0aXRsZUNvbXBvbmVudD86IFRpdGxlQ29tcG9uZW50O1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWxpc3QtaXRlbS1tZXRhJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==