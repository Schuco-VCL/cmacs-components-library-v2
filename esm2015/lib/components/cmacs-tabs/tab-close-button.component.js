import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/outlet";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
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
}
CmacsTabCloseButtonComponent.ɵfac = function CmacsTabCloseButtonComponent_Factory(t) { return new (t || CmacsTabCloseButtonComponent)(); };
CmacsTabCloseButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabCloseButtonComponent, selectors: [["cmacs-tab-close-button"], ["button", "cmacs-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function CmacsTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.closeIcon);
    } }, directives: [i1.NzStringTemplateOutletDirective, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWNsb3NlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGFicy90YWItY2xvc2UtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBTzFELDZCQUE0RDtJQUMxRCx1QkFBaUQ7SUFDbkQsMEJBQWU7OztJQURGLGVBQWU7SUFBZixnQ0FBZTs7QUFTaEMsTUFBTSxPQUFPLDRCQUE0QjtJQUd2QztRQUZTLGNBQVMsR0FBb0MsT0FBTyxDQUFDO0lBRS9DLENBQUM7O3dHQUhMLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FBVnJDLCtGQUVlOztRQUZBLHNEQUFtQzs7dUZBVXpDLDRCQUE0QjtjQWJ4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDtnQkFDbEUsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxxQkFBcUI7b0JBQzVCLFlBQVksRUFBRSxXQUFXO29CQUN6QixJQUFJLEVBQUUsUUFBUTtpQkFDZjthQUNGO3NDQUVVLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWItY2xvc2UtYnV0dG9uLCBidXR0b25bY21hY3MtdGFiLWNsb3NlLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbG9zZUljb247IGxldCBpY29uXCI+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicy10YWItcmVtb3ZlJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdDbG9zZSB0YWInLFxuICAgIHR5cGU6ICdidXR0b24nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJDbG9zZUJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9zZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19