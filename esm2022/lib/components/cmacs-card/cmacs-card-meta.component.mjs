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
    static { this.ɵfac = function CmacsCardMetaComponent_Factory(t) { return new (t || CmacsCardMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCardMetaComponent, selectors: [["cmacs-card-meta"]], inputs: { title: "title", description: "description", avatar: "avatar" }, exportAs: ["cmacsCardMeta"], decls: 2, vars: 2, consts: [["class", "ant-card-meta-avatar", 4, "ngIf"], ["class", "ant-card-meta-detail", 4, "ngIf"], [1, "ant-card-meta-avatar"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-detail"], ["class", "ant-card-meta-title", 4, "ngIf"], ["class", "ant-card-meta-description", 4, "ngIf"], [1, "ant-card-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-meta-description"]], template: function CmacsCardMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsCardMetaComponent_div_0_Template, 2, 1, "div", 0);
            i0.ɵɵtemplate(1, CmacsCardMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.avatar);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.title || ctx.description);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i2.NzStringTemplateOutletDirective], styles: ["cmacs-card-meta{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCardMetaComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-card-meta', exportAs: 'cmacsCardMeta', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"avatar\">\r\n  <ng-template [ngTemplateOutlet]=\"avatar\"></ng-template>\r\n</div>\r\n<div class=\"ant-card-meta-detail\" *ngIf=\"title || description\">\r\n  <div class=\"ant-card-meta-title\" *ngIf=\"title\">\r\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-card-meta-description\" *ngIf=\"description\">\r\n    <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["cmacs-card-meta{display:block}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { title: [{
            type: Input
        }], description: [{
            type: Input
        }], avatar: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQtbWV0YS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLW1ldGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsS0FBSyxFQUdMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDUnZCLDhCQUFpRDtJQUMvQyw2RkFBdUQ7SUFDekQsaUJBQU07OztJQURTLGVBQTJCO0lBQTNCLGdEQUEyQjs7O0lBSXRDLDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBRDNELDhCQUErQztJQUM3QyxxR0FBd0U7SUFDMUUsaUJBQU07OztJQURXLGVBQTZCO0lBQTdCLHFEQUE2Qjs7O0lBRzVDLDZCQUFvRDtJQUFBLFlBQWlCO0lBQUEsMEJBQWU7OztJQUFoQyxlQUFpQjtJQUFqQix3Q0FBaUI7OztJQUR2RSw4QkFBMkQ7SUFDekQscUdBQW9GO0lBQ3RGLGlCQUFNOzs7SUFEVyxlQUFtQztJQUFuQywyREFBbUM7OztJQUx0RCw4QkFBK0Q7SUFDN0QsNkVBRU07SUFDTiw2RUFFTTtJQUNSLGlCQUFNOzs7SUFOOEIsZUFBVztJQUFYLG1DQUFXO0lBR0wsZUFBaUI7SUFBakIseUNBQWlCOztBRGtCM0QsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQyxZQUFZLFVBQXNCLEVBQUUsUUFBbUI7UUFDckQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7dUZBUFUsc0JBQXNCO29FQUF0QixzQkFBc0I7WUN6Qm5DLHVFQUVNO1lBQ04sdUVBT007O1lBVjZCLGlDQUFZO1lBR1osZUFBMEI7WUFBMUIsbURBQTBCOzs7dUZEc0JoRCxzQkFBc0I7Y0FmbEMsU0FBUzsyQkFDRSxpQkFBaUIsWUFDakIsZUFBZSx1QkFDSixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7cUZBVzVCLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jYXJkLW1ldGEnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDYXJkTWV0YScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtY2FyZC1tZXRhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FyZE1ldGFDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYXZhdGFyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNhcmQtbWV0YScpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbWV0YS1hdmF0YXJcIiAqbmdJZj1cImF2YXRhclwiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhdmF0YXJcIj48L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLW1ldGEtZGV0YWlsXCIgKm5nSWY9XCJ0aXRsZSB8fCBkZXNjcmlwdGlvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1tZXRhLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbWV0YS1kZXNjcmlwdGlvblwiICpuZ0lmPVwiZGVzY3JpcHRpb25cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJkZXNjcmlwdGlvblwiPnt7IGRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=