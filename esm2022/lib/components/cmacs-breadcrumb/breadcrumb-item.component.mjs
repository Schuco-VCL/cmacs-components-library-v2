import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "../cmacs-dropdown/dropdown.directive";
function CmacsBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function CmacsBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} }
function CmacsBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtemplate(2, CmacsBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    i0.ɵɵtemplate(3, CmacsBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsDropdownMenu", ctx_r0.overlay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !!ctx_r0.overlay);
} }
function CmacsBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function CmacsBreadCrumbItemComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.nzBreadCrumbComponent.separator, " ");
} }
function CmacsBreadCrumbItemComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, CmacsBreadCrumbItemComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzBreadCrumbComponent.separator);
} }
const _c0 = ["*"];
export class CmacsBreadCrumbItemComponent {
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    static { this.ɵfac = function CmacsBreadCrumbItemComponent_Factory(t) { return new (t || CmacsBreadCrumbItemComponent)(i0.ɵɵdirectiveInject(i1.CmacsBreadCrumbComponent)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsBreadCrumbItemComponent, selectors: [["cmacs-breadcrumb-item"]], inputs: { overlay: "overlay" }, exportAs: ["cmacsBreadcrumbItem"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], ["class", "ant-breadcrumb-separator", 4, "ngIf"], ["cmacs-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "cmacsDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"]], template: function CmacsBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, CmacsBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, CmacsBreadCrumbItemComponent_span_3_Template, 2, 1, "span", 2);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", !!ctx.overlay)("ngIfElse", _r1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.nzBreadCrumbComponent.separator);
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective, i5.NzStringTemplateOutletDirective, i6.CmacsDropDownDirective], styles: [".ant-breadcrumb-link a{color:#acb3bf;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-breadcrumb-link a:hover{text-decoration:underline;color:#2a7cff}.ant-breadcrumb-link{display:inline-grid;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ant-breadcrumb a{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}cmacs-breadcrumb-item:last-child,cmacs-breadcrumb-item:last-child .ant-breadcrumb-link{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top}cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator{display:none}.ant-breadcrumb-separator{color:#bec4cd}.ant-breadcrumb{line-height:1.7;font-size:15px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsBreadCrumbItemComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, selector: 'cmacs-breadcrumb-item', exportAs: 'cmacsBreadcrumbItem', preserveWhitespaces: false, template: `
    <ng-container *ngIf="!!overlay; else noMenuTpl">
      <span class="ant-breadcrumb-overlay-link" cmacs-dropdown [cmacsDropdownMenu]="overlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <i *ngIf="!!overlay" nz-icon nzType="down"></i>
      </span>
    </ng-container>

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content></ng-content>
      </span>
    </ng-template>

    <span class="ant-breadcrumb-separator" *ngIf="nzBreadCrumbComponent.separator">
      <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.separator">
        {{ nzBreadCrumbComponent.separator }}
      </ng-container>
    </span>
  `, styles: [".ant-breadcrumb-link a{color:#acb3bf;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-breadcrumb-link a:hover{text-decoration:underline;color:#2a7cff}.ant-breadcrumb-link{display:inline-grid;max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ant-breadcrumb a{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}cmacs-breadcrumb-item:last-child,cmacs-breadcrumb-item:last-child .ant-breadcrumb-link{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top}cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator{display:none}.ant-breadcrumb-separator{color:#bec4cd}.ant-breadcrumb{line-height:1.7;font-size:15px}\n"] }]
    }], function () { return [{ type: i1.CmacsBreadCrumbComponent }]; }, { overlay: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1icmVhZGNydW1iL2JyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUFnQnJGLHVCQUErQzs7O0lBSG5ELDZCQUFnRDtJQUM5QywrQkFBdUY7SUFDckYsNEdBQTBEO0lBQzFELHdGQUErQztJQUNqRCxpQkFBTztJQUNULDBCQUFlOzs7O0lBSjRDLGVBQTZCO0lBQTdCLGtEQUE2QjtJQUN2RSxlQUE4QjtJQUE5QixzQ0FBOEI7SUFDdkMsZUFBZTtJQUFmLHVDQUFlOzs7SUFLckIsK0JBQWtDO0lBQ2hDLGtCQUF5QjtJQUMzQixpQkFBTzs7O0lBSVAsNkJBQXdFO0lBQ3RFLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLHVFQUNGOzs7SUFIRiwrQkFBK0U7SUFDN0Usc0dBRWU7SUFDakIsaUJBQU87OztJQUhVLGVBQXVEO0lBQXZELCtFQUF1RDs7O0FBTTVFLE1BQU0sT0FBTyw0QkFBNEI7SUFNdkMsWUFBbUIscUJBQStDO1FBQS9DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7SUFBRyxDQUFDOzZGQU4zRCw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7WUFwQnJDLCtGQUtlO1lBRWYsOEhBSWM7WUFFZCwrRUFJTzs7O1lBakJRLG9DQUFpQixpQkFBQTtZQWFRLGVBQXFDO1lBQXJDLDBEQUFxQzs7O3VGQU9wRSw0QkFBNEI7Y0E1QnhDLFNBQVM7a0NBQ1MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxZQUMzQix1QkFBdUIsWUFDdkIscUJBQXFCLHVCQUNWLEtBQUssWUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7MkVBTVEsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0JyZWFkQ3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kcm9wZG93bi9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtYnJlYWRjcnVtYi1pdGVtJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnJlYWRjcnVtYkl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhIW92ZXJsYXk7IGVsc2Ugbm9NZW51VHBsXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItb3ZlcmxheS1saW5rXCIgY21hY3MtZHJvcGRvd24gW2NtYWNzRHJvcGRvd25NZW51XT1cIm92ZXJsYXlcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibm9NZW51VHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8aSAqbmdJZj1cIiEhb3ZlcmxheVwiIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNub01lbnVUcGw+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItbGlua1wiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1icmVhZGNydW1iLXNlcGFyYXRvclwiICpuZ0lmPVwibnpCcmVhZENydW1iQ29tcG9uZW50LnNlcGFyYXRvclwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpCcmVhZENydW1iQ29tcG9uZW50LnNlcGFyYXRvclwiPlxyXG4gICAgICAgIHt7IG56QnJlYWRDcnVtYkNvbXBvbmVudC5zZXBhcmF0b3IgfX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3NwYW4+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCcmVhZENydW1iSXRlbUNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogRHJvcGRvd24gY29udGVudCBvZiBhIGJyZWFkY3J1bWIgaXRlbS5cclxuICAgKi9cclxuICBASW5wdXQoKSBvdmVybGF5PzogQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekJyZWFkQ3J1bWJDb21wb25lbnQ6IENtYWNzQnJlYWRDcnVtYkNvbXBvbmVudCkge31cclxufVxyXG4iXX0=