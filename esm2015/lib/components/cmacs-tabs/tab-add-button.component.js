import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/outlet";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
function CmacsTabAddButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", icon_r1);
} }
export class CmacsTabAddButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.addIcon = 'plus';
        this.element = this.elementRef.nativeElement;
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
}
CmacsTabAddButtonComponent.ɵfac = function CmacsTabAddButtonComponent_Factory(t) { return new (t || CmacsTabAddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsTabAddButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabAddButtonComponent, selectors: [["cmacs-tab-add-button"], ["button", "cmacs-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function CmacsTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.addIcon);
    } }, directives: [i1.NzStringTemplateOutletDirective, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabAddButtonComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tab-add-button, button[cmacs-tab-add-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-nav-add',
                    'aria-label': 'Add tab',
                    type: 'button'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { addIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFkZC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLWFkZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFPdEUsNkJBQTBEO0lBQ3hELHVCQUFpRDtJQUNuRCwwQkFBZTs7O0lBREYsZUFBZTtJQUFmLGdDQUFlOztBQVNoQyxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQW9CLFVBQW1DO1FBQW5DLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBSjlDLFlBQU8sR0FBb0MsTUFBTSxDQUFDO1FBS3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWU7O1FBQ2IsT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFdBQVcsS0FBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGdCQUFnQjs7UUFDZCxPQUFPLE9BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsWUFBWSxLQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOztvR0FmVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQVZuQyw2RkFFZTs7UUFGQSxvREFBaUM7O3VGQVV2QywwQkFBMEI7Y0FidEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvREFBb0Q7Z0JBQzlELFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixZQUFZLEVBQUUsU0FBUztvQkFDdkIsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7YUFDRjs2REFFVSxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWItYWRkLWJ1dHRvbiwgYnV0dG9uW2NtYWNzLXRhYi1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImFkZEljb247IGxldCBpY29uXCI+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiIG56VGhlbWU9XCJvdXRsaW5lXCI+PC9pPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicy1uYXYtYWRkJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdBZGQgdGFiJyxcbiAgICB0eXBlOiAnYnV0dG9uJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGFiQWRkQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldEVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICBnZXRFbGVtZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudD8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIH1cbn1cbiJdfQ==