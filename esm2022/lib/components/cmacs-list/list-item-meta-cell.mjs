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
    static { this.ɵfac = function CmacsListItemMetaTitleComponent_Factory(t) { return new (t || CmacsListItemMetaTitleComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemMetaTitleComponent, selectors: [["cmacs-list-item-meta-title"]], exportAs: ["cmacsListItemMetaTitle"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-title"]], template: function CmacsListItemMetaTitleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "h4", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2, changeDetection: 0 }); }
}
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
    static { this.ɵfac = function CmacsListItemMetaDescriptionComponent_Factory(t) { return new (t || CmacsListItemMetaDescriptionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemMetaDescriptionComponent, selectors: [["cmacs-list-item-meta-description"]], exportAs: ["cmacsListItemMetaDescription"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-description"]], template: function CmacsListItemMetaDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2, changeDetection: 0 }); }
}
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
    static { this.ɵfac = function CmacsListItemMetaAvatarComponent_Factory(t) { return new (t || CmacsListItemMetaAvatarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsListItemMetaAvatarComponent, selectors: [["cmacs-list-item-meta-avatar"]], inputs: { src: "src" }, exportAs: ["cmacsListItemMetaAvatar"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]], template: function CmacsListItemMetaAvatarComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEtY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saXN0L2xpc3QtaXRlbS1tZXRhLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lBK0JwRSwrQkFBaUQ7OztJQUExQixrQ0FBYTs7O0lBQ3BDLHdDQUFzQzs7QUFwQjVDLE1BQU0sT0FBTywrQkFBK0I7Z0dBQS9CLCtCQUErQjtvRUFBL0IsK0JBQStCOztZQU54Qyw2QkFBcUM7WUFDbkMsa0JBQXlCO1lBQzNCLGlCQUFLOzs7dUZBSUksK0JBQStCO2NBVjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7QUFhRCxNQUFNLE9BQU8scUNBQXFDO3NHQUFyQyxxQ0FBcUM7b0VBQXJDLHFDQUFxQzs7WUFOOUMsOEJBQTRDO1lBQzFDLGtCQUF5QjtZQUMzQixpQkFBTTs7O3VGQUlHLHFDQUFxQztjQVZqRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O0FBY0QsTUFBTSxPQUFPLGdDQUFnQztpR0FBaEMsZ0NBQWdDO29FQUFoQyxnQ0FBZ0M7O1lBUHpDLDhCQUF1QztZQUNyQyw2RkFBaUQ7WUFDakQsK0ZBQXNDO1lBQ3hDLGlCQUFNOztZQUZRLGVBQVM7WUFBVCw4QkFBUztZQUNSLGVBQVU7WUFBViwrQkFBVTs7O3VGQUtoQixnQ0FBZ0M7Y0FYNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtnQkFFVSxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0tbWV0YS10aXRsZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtTWV0YVRpdGxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGg0IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvaDQ+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0SXRlbU1ldGFUaXRsZUNvbXBvbmVudCB7fVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtTWV0YURlc2NyaXB0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RJdGVtTWV0YURlc2NyaXB0aW9uQ29tcG9uZW50IHt9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaXRlbS1tZXRhLWF2YXRhcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RJdGVtTWV0YUF2YXRhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtYXZhdGFyXCI+XHJcbiAgICAgIDxuei1hdmF0YXIgKm5nSWY9XCJzcmNcIiBbbnpTcmNdPVwic3JjXCI+PC9uei1hdmF0YXI+XHJcbiAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIXNyY1wiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEl0ZW1NZXRhQXZhdGFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBzcmM/OiBzdHJpbmc7XHJcbn1cclxuIl19