import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./breadcrumb.component";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-dropdown/dropdown.directive";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
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
}
CmacsBreadCrumbItemComponent.ɵfac = function CmacsBreadCrumbItemComponent_Factory(t) { return new (t || CmacsBreadCrumbItemComponent)(i0.ɵɵdirectiveInject(i1.CmacsBreadCrumbComponent)); };
CmacsBreadCrumbItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsBreadCrumbItemComponent, selectors: [["cmacs-breadcrumb-item"]], inputs: { overlay: "overlay" }, exportAs: ["cmacsBreadcrumbItem"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], ["class", "ant-breadcrumb-separator", 4, "ngIf"], ["cmacs-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "cmacsDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"]], template: function CmacsBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        i0.ɵɵtemplate(1, CmacsBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, CmacsBreadCrumbItemComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", !!ctx.overlay)("ngIfElse", _r1);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.nzBreadCrumbComponent.separator);
    } }, directives: [i2.NgIf, i3.CmacsDropDownDirective, i2.NgTemplateOutlet, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-breadcrumb-link a{color:#acb3bf;font-family:Roboto-Regular,Helvetica,Arial,sans-serif}.ant-breadcrumb-link a:hover{text-decoration:underline;color:#2a7cff}.ant-breadcrumb-link{display:inline-grid}.ant-breadcrumb-link,.ant-breadcrumb a{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}cmacs-breadcrumb-item:last-child,cmacs-breadcrumb-item:last-child .ant-breadcrumb-link{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;vertical-align:top}cmacs-breadcrumb-item:last-child .ant-breadcrumb-separator{display:none}.ant-breadcrumb-separator{color:#bec4cd}.ant-breadcrumb{line-height:1.7;font-size:15px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsBreadCrumbItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-breadcrumb-item',
                exportAs: 'cmacsBreadcrumbItem',
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-breadcrumb-item.component.css'],
                template: `
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
  `
            }]
    }], function () { return [{ type: i1.CmacsBreadCrumbComponent }]; }, { overlay: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1icmVhZGNydW1iL2JyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7SUFnQnJGLHVCQUErQzs7O0lBSG5ELDZCQUFnRDtJQUM5QywrQkFBdUY7SUFDckYsNEdBQTBEO0lBQzFELHdGQUErQztJQUNqRCxpQkFBTztJQUNULDBCQUFlOzs7O0lBSjRDLGVBQTZCO0lBQTdCLGtEQUE2QjtJQUN2RSxlQUE4QjtJQUE5QixzQ0FBOEI7SUFDdkMsZUFBZTtJQUFmLHVDQUFlOzs7SUFLckIsK0JBQWtDO0lBQ2hDLGtCQUF5QjtJQUMzQixpQkFBTzs7O0lBSVAsNkJBQXdFO0lBQ3RFLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLHVFQUNGOzs7SUFIRiwrQkFBK0U7SUFDN0Usc0dBRWU7SUFDakIsaUJBQU87OztJQUhVLGVBQXVEO0lBQXZELCtFQUF1RDs7O0FBTTVFLE1BQU0sT0FBTyw0QkFBNEI7SUFNdkMsWUFBbUIscUJBQStDO1FBQS9DLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7SUFBRyxDQUFDOzt3R0FOM0QsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7O1FBcEJyQywrRkFLZTtRQUVmLDhIQUljO1FBRWQsK0VBSU87OztRQWpCUSxvQ0FBaUIsaUJBQUE7UUFhUSxlQUFxQztRQUFyQywwREFBcUM7O3VGQU9wRSw0QkFBNEI7Y0E1QnhDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2dCQUNwRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7YUFDRjsyRUFLVSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzQnJlYWRDcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWRyb3Bkb3duL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1icmVhZGNydW1iLWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NCcmVhZGNydW1iSXRlbScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiEhb3ZlcmxheTsgZWxzZSBub01lbnVUcGxcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1vdmVybGF5LWxpbmtcIiBjbWFjcy1kcm9wZG93biBbY21hY3NEcm9wZG93bk1lbnVdPVwib3ZlcmxheVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJub01lbnVUcGxcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxpICpuZ0lmPVwiISFvdmVybGF5XCIgbnotaWNvbiBuelR5cGU9XCJkb3duXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctdGVtcGxhdGUgI25vTWVudVRwbD5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1saW5rXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yXCIgKm5nSWY9XCJuekJyZWFkQ3J1bWJDb21wb25lbnQuc2VwYXJhdG9yXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuekJyZWFkQ3J1bWJDb21wb25lbnQuc2VwYXJhdG9yXCI+XHJcbiAgICAgICAge3sgbnpCcmVhZENydW1iQ29tcG9uZW50LnNlcGFyYXRvciB9fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvc3Bhbj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0JyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IHtcclxuICAvKipcclxuICAgKiBEcm9wZG93biBjb250ZW50IG9mIGEgYnJlYWRjcnVtYiBpdGVtLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG92ZXJsYXk/OiBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56QnJlYWRDcnVtYkNvbXBvbmVudDogQ21hY3NCcmVhZENydW1iQ29tcG9uZW50KSB7fVxyXG59XHJcbiJdfQ==