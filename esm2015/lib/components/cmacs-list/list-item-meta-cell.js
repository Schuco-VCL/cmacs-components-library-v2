import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function CmacsListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nz-avatar", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzSrc", ctx_r0.src);
} }
function CmacsListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!src"]);
} }
export class CmacsListItemMetaTitleComponent {
}
CmacsListItemMetaTitleComponent.ɵfac = function CmacsListItemMetaTitleComponent_Factory(t) { return new (t || CmacsListItemMetaTitleComponent)(); };
CmacsListItemMetaTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemMetaTitleComponent, selectors: [["cmacs-list-item-meta-title"]], exportAs: ["cmacsListItemMetaTitle"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-title"]], template: function CmacsListItemMetaTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "h4", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemMetaTitleComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-meta-title',
                exportAs: 'cmacsListItemMetaTitle',
                template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
export class CmacsListItemMetaDescriptionComponent {
}
CmacsListItemMetaDescriptionComponent.ɵfac = function CmacsListItemMetaDescriptionComponent_Factory(t) { return new (t || CmacsListItemMetaDescriptionComponent)(); };
CmacsListItemMetaDescriptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemMetaDescriptionComponent, selectors: [["cmacs-list-item-meta-description"]], exportAs: ["cmacsListItemMetaDescription"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-description"]], template: function CmacsListItemMetaDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemMetaDescriptionComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-meta-description',
                exportAs: 'cmacsListItemMetaDescription',
                template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
export class CmacsListItemMetaAvatarComponent {
}
CmacsListItemMetaAvatarComponent.ɵfac = function CmacsListItemMetaAvatarComponent_Factory(t) { return new (t || CmacsListItemMetaAvatarComponent)(); };
CmacsListItemMetaAvatarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListItemMetaAvatarComponent, selectors: [["cmacs-list-item-meta-avatar"]], inputs: { src: "src" }, exportAs: ["cmacsListItemMetaAvatar"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]], template: function CmacsListItemMetaAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1);
        i0.ɵɵtemplate(2, CmacsListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.src);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.src);
    } }, directives: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListItemMetaAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-item-meta-avatar',
                exportAs: 'cmacsListItemMetaAvatar',
                template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="src" [nzSrc]="src"></nz-avatar>
      <ng-content *ngIf="!src"></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { src: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEtY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saXN0L2xpc3QtaXRlbS1tZXRhLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBK0JwRSwrQkFBaUQ7OztJQUExQixrQ0FBYTs7O0lBQ3BDLHdDQUFzQzs7QUFwQjVDLE1BQU0sT0FBTywrQkFBK0I7OzhHQUEvQiwrQkFBK0I7b0VBQS9CLCtCQUErQjs7UUFOeEMsNkJBQXFDO1FBQ25DLGtCQUF5QjtRQUMzQixpQkFBSzs7dUZBSUksK0JBQStCO2NBVjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7QUFhRCxNQUFNLE9BQU8scUNBQXFDOzswSEFBckMscUNBQXFDOzBFQUFyQyxxQ0FBcUM7O1FBTjlDLDhCQUE0QztRQUMxQyxrQkFBeUI7UUFDM0IsaUJBQU07O3VGQUlHLHFDQUFxQztjQVZqRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O0FBY0QsTUFBTSxPQUFPLGdDQUFnQzs7Z0hBQWhDLGdDQUFnQztxRUFBaEMsZ0NBQWdDOztRQVB6Qyw4QkFBdUM7UUFDckMsNkZBQWlEO1FBQ2pELCtGQUFzQztRQUN4QyxpQkFBTTs7UUFGUSxlQUFTO1FBQVQsOEJBQVM7UUFDUixlQUFVO1FBQVYsK0JBQVU7O3VGQUtoQixnQ0FBZ0M7Y0FYNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0tbWV0YS10aXRsZScsXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbU1ldGFUaXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGg0IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9oND5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbU1ldGFUaXRsZUNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvbicsXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbU1ldGFEZXNjcmlwdGlvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RJdGVtTWV0YURlc2NyaXB0aW9uQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhcicsXG4gIGV4cG9ydEFzOiAnY21hY3NMaXN0SXRlbU1ldGFBdmF0YXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtYXZhdGFyXCI+XG4gICAgICA8bnotYXZhdGFyICpuZ0lmPVwic3JjXCIgW256U3JjXT1cInNyY1wiPjwvbnotYXZhdGFyPlxuICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhc3JjXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RJdGVtTWV0YUF2YXRhckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNyYz86IHN0cmluZztcbn1cbiJdfQ==