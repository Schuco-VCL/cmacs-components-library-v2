import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
function CmacsCardMetaComponent_div_0_ng_template_1_Template(rf, ctx) { }
function CmacsCardMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.avatar);
} }
function CmacsCardMetaComponent_div_1_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.title);
} }
function CmacsCardMetaComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_1_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.title);
} }
function CmacsCardMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.description);
} }
function CmacsCardMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.description);
} }
function CmacsCardMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_1_div_1_Template, 2, 1, "div", 5);
    i0.ɵɵtemplate(2, CmacsCardMetaComponent_div_1_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.description);
} }
export class CmacsCardMetaComponent {
    constructor(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-meta');
    }
}
CmacsCardMetaComponent.ɵfac = function CmacsCardMetaComponent_Factory(t) { return new (t || CmacsCardMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
CmacsCardMetaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCardMetaComponent, selectors: [["cmacs-card-meta"]], inputs: { title: "title", description: "description", avatar: "avatar" }, exportAs: ["cmacsCardMeta"], decls: 2, vars: 2, consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]], template: function CmacsCardMetaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsCardMetaComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.avatar);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title || ctx.description);
    } }, directives: [i1.NgIf, i1.NgTemplateOutlet, i2.NzStringTemplateOutletDirective], styles: ["\n      cmacs-card-meta {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCardMetaComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-card-meta',
                exportAs: 'cmacsCardMeta',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-card-meta.component.html',
                styles: [
                    `
      cmacs-card-meta {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { title: [{
            type: Input
        }], description: [{
            type: Input
        }], avatar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQtbWV0YS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDUnZCLDhCQUFpRDtJQUMvQyw2RkFBdUQ7SUFDekQsaUJBQU07OztJQURTLGVBQTJCO0lBQTNCLGdEQUEyQjs7O0lBSXRDLDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBRDNELDhCQUErQztJQUM3QyxxR0FBd0U7SUFDMUUsaUJBQU07OztJQURXLGVBQTZCO0lBQTdCLHFEQUE2Qjs7O0lBRzVDLDZCQUFvRDtJQUFBLFlBQWlCO0lBQUEsMEJBQWU7OztJQUFoQyxlQUFpQjtJQUFqQix3Q0FBaUI7OztJQUR2RSw4QkFBMkQ7SUFDekQscUdBQW9GO0lBQ3RGLGlCQUFNOzs7SUFEVyxlQUFtQztJQUFuQywyREFBbUM7OztJQUx0RCw4QkFBK0Q7SUFDN0QsNkVBRU07SUFDTiw2RUFFTTtJQUNSLGlCQUFNOzs7SUFOOEIsZUFBVztJQUFYLG1DQUFXO0lBR0wsZUFBaUI7SUFBakIseUNBQWlCOztBRGtCM0QsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQyxZQUFZLFVBQXNCLEVBQUUsUUFBbUI7UUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7OzRGQVBVLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDekJuQyx1RUFFTTtRQUNOLHVFQU9NOztRQVY2QixpQ0FBWTtRQUdaLGVBQTBCO1FBQTFCLG1EQUEwQjs7dUZEc0JoRCxzQkFBc0I7Y0FmbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7cUZBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNhcmQtbWV0YScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NhcmRNZXRhJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jYXJkLW1ldGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDYXJkTWV0YUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBhdmF0YXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZC1tZXRhJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLWF2YXRhclwiICpuZ0lmPVwiYXZhdGFyXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImF2YXRhclwiPjwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYW50LWNhcmQtbWV0YS1kZXRhaWxcIiAqbmdJZj1cInRpdGxlIHx8IGRlc2NyaXB0aW9uXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jYXJkLW1ldGEtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLWRlc2NyaXB0aW9uXCIgKm5nSWY9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImRlc2NyaXB0aW9uXCI+e3sgZGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==