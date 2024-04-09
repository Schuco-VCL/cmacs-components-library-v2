import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/transition-patch";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
function CmacsTabCloseButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", icon_r1);
} }
export class CmacsTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
    static { this.ɵfac = function CmacsTabCloseButtonComponent_Factory(t) { return new (t || CmacsTabCloseButtonComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTabCloseButtonComponent, selectors: [["cmacs-tab-close-button"], ["button", "cmacs-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function CmacsTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.closeIcon);
        } }, dependencies: [i1.ɵNzTransitionPatchDirective, i2.NzIconDirective, i3.NzStringTemplateOutletDirective], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabCloseButtonComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tab-close-button, button[cmacs-tab-close-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            }]
    }], function () { return []; }, { closeIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGFicy90YWItY2xvc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzFELDZCQUE0RDtJQUMxRCx1QkFBaUQ7SUFDbkQsMEJBQWU7OztJQURGLGVBQWU7SUFBZixnQ0FBZTs7QUFTaEMsTUFBTSxPQUFPLDRCQUE0QjtJQUd2QztRQUZTLGNBQVMsR0FBb0MsT0FBTyxDQUFDO0lBRS9DLENBQUM7NkZBSEwsNEJBQTRCO29FQUE1Qiw0QkFBNEI7WUFWckMsK0ZBRWU7O1lBRkEsc0RBQW1DOzs7dUZBVXpDLDRCQUE0QjtjQWJ4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDtnQkFDbEUsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLFlBQVksRUFBRSxXQUFXO29CQUN6QixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGO3NDQUVVLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGFiLWNsb3NlLWJ1dHRvbiwgYnV0dG9uW2NtYWNzLXRhYi1jbG9zZS1idXR0b25dJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNsb3NlSWNvbjsgbGV0IGljb25cIj5cclxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtdGFicy10YWItcmVtb3ZlJyxcclxuICAgICdhcmlhLWxhYmVsJzogJ0Nsb3NlIHRhYicsXHJcbiAgICB0eXBlOiAnYnV0dG9uJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFiQ2xvc2VCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9zZSc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=