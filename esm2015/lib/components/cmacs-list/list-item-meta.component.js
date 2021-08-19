import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CmacsListItemMetaDescriptionComponent as DescriptionComponent, CmacsListItemMetaTitleComponent as TitleComponent } from './list-item-meta-cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./list-item-meta-cell";
import * as i3 from "ng-zorro-antd/core/outlet";
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
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    set avatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
}
CmacsListItemMetaComponent.ɵfac = function CmacsListItemMetaComponent_Factory(t) { return new (t || CmacsListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
CmacsListItemMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemMetaComponent, selectors: [["cmacs-list-item-meta"], ["", "cmacs-list-item-meta", ""]], contentQueries: function CmacsListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, DescriptionComponent, 1);
        i0.ɵɵcontentQuery(dirIndex, TitleComponent, 1);
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
    } }, directives: [i1.NgIf, i2.CmacsListItemMetaAvatarComponent, i1.NgTemplateOutlet, i2.CmacsListItemMetaTitleComponent, i3.NzStringTemplateOutletDirective, i2.CmacsListItemMetaDescriptionComponent], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBRUwsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wscUNBQXFDLElBQUksb0JBQW9CLEVBQzdELCtCQUErQixJQUFJLGNBQWMsRUFDbEQsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0lBTzNCLGlEQUErRjs7O0lBQWhELHNDQUFpQjs7O0lBQ2hFLG1EQUErQztJQUM3QywyQkFBNEQ7SUFDOUQsaUJBQThCOzs7SUFEZCxlQUE4QjtJQUE5QixtREFBOEI7OztJQVMxQyw2QkFBbUQ7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFEckUsa0RBQWtFO0lBQ2hFLGdJQUFrRjtJQUNwRixpQkFBNkI7OztJQURaLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2pELDZCQUFvRDtJQUFBLFlBQWlCO0lBQUEsMEJBQWU7OztJQUFoQyxlQUFpQjtJQUFqQix3Q0FBaUI7OztJQUR2RSx3REFBK0U7SUFDN0Usc0lBQW9GO0lBQ3RGLGlCQUFtQzs7O0lBRGxCLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0lBTnRELDhCQUFvSDtJQUVsSCwrSEFFNkI7SUFDN0IsMklBRW1DO0lBR25DLHFCQUE2RDtJQUM3RCxxQkFBbUU7SUFDckUsaUJBQU07OztJQVZ5QixlQUFtQztJQUFuQyxrRUFBbUM7SUFHN0IsZUFBMEM7SUFBMUMseUVBQTBDOzs7O0FBYW5GLE1BQU0sT0FBTywwQkFBMEI7SUFvQnJDLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFuQnRFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFvQmIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFsQkQsSUFDSSxNQUFNLENBQUMsS0FBaUM7UUFDMUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7O29HQVpVLDBCQUEwQjsrREFBMUIsMEJBQTBCO29DQWtCdkIsb0JBQW9CO29DQUNwQixjQUFjOzs7Ozs7O1FBN0MxQiwySEFBK0Y7UUFDL0YsMkhBRThCO1FBRzlCLGtCQUE4RDtRQUU5RCwyRUFZTTs7UUFwQndCLG9DQUFlO1FBQ2YsZUFBZTtRQUFmLG9DQUFlO1FBT3ZDLGVBQXlFO1FBQXpFLDBHQUF5RTs7dUZBa0J0RSwwQkFBMEI7Y0EvQnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QztxRkFNSyxNQUFNO2tCQURULEtBQUs7WUFVRyxVQUFVO2tCQUFsQixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUU4QixvQkFBb0I7a0JBQXZELFlBQVk7bUJBQUMsb0JBQW9CO1lBQ0osY0FBYztrQkFBM0MsWUFBWTttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ21hY3NMaXN0SXRlbU1ldGFEZXNjcmlwdGlvbkNvbXBvbmVudCBhcyBEZXNjcmlwdGlvbkNvbXBvbmVudCxcclxuICBDbWFjc0xpc3RJdGVtTWV0YVRpdGxlQ29tcG9uZW50IGFzIFRpdGxlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi9saXN0LWl0ZW0tbWV0YS1jZWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1pdGVtLW1ldGEsIFtjbWFjcy1saXN0LWl0ZW0tbWV0YV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbU1ldGEnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tT2xkIEFQSSBTdGFydC0tPlxyXG4gICAgPGNtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhciAqbmdJZj1cImF2YXRhclN0clwiIFtzcmNdPVwiYXZhdGFyU3RyXCI+PC9jbWFjcy1saXN0LWl0ZW0tbWV0YS1hdmF0YXI+XHJcbiAgICA8Y21hY3MtbGlzdC1pdGVtLW1ldGEtYXZhdGFyICpuZ0lmPVwiYXZhdGFyVHBsXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYXZhdGFyVHBsXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2NtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhcj5cclxuICAgIDwhLS1PbGQgQVBJIEVuZC0tPlxyXG5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhclwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiY21hY3NUaXRsZSB8fCBkZXNjcmlwdGlvbiB8fCBkZXNjcmlwdGlvbkNvbXBvbmVudCB8fCB0aXRsZUNvbXBvbmVudFwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWNvbnRlbnRcIj5cclxuICAgICAgPCEtLU9sZCBBUEkgU3RhcnQtLT5cclxuICAgICAgPGNtYWNzLWxpc3QtaXRlbS1tZXRhLXRpdGxlICpuZ0lmPVwiY21hY3NUaXRsZSAmJiAhdGl0bGVDb21wb25lbnRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY21hY3NUaXRsZVwiPnt7IGNtYWNzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9jbWFjcy1saXN0LWl0ZW0tbWV0YS10aXRsZT5cclxuICAgICAgPGNtYWNzLWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uICpuZ0lmPVwiZGVzY3JpcHRpb24gJiYgIWRlc2NyaXB0aW9uQ29tcG9uZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImRlc2NyaXB0aW9uXCI+e3sgZGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9jbWFjcy1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvbj5cclxuICAgICAgPCEtLU9sZCBBUEkgRW5kLS0+XHJcblxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1saXN0LWl0ZW0tbWV0YS10aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY21hY3MtbGlzdC1pdGVtLW1ldGEtZGVzY3JpcHRpb25cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcclxuICBhdmF0YXJTdHIgPSAnJztcclxuICBhdmF0YXJUcGw/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSAnJztcclxuICAgICAgdGhpcy5hdmF0YXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBjbWFjc1RpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGVzY3JpcHRpb25Db21wb25lbnQpIGRlc2NyaXB0aW9uQ29tcG9uZW50PzogRGVzY3JpcHRpb25Db21wb25lbnQ7XHJcbiAgQENvbnRlbnRDaGlsZChUaXRsZUNvbXBvbmVudCkgdGl0bGVDb21wb25lbnQ/OiBUaXRsZUNvbXBvbmVudDtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0tbWV0YScpO1xyXG4gIH1cclxufVxyXG4iXX0=