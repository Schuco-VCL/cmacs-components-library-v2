import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/transition-patch";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
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
        return this.element?.offsetWidth || 0;
    }
    getElementHeight() {
        return this.element?.offsetHeight || 0;
    }
    static { this.ɵfac = function CmacsTabAddButtonComponent_Factory(t) { return new (t || CmacsTabAddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTabAddButtonComponent, selectors: [["cmacs-tab-add-button"], ["button", "cmacs-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function CmacsTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.addIcon);
        } }, dependencies: [i1.ɵNzTransitionPatchDirective, i2.NzIconDirective, i3.NzStringTemplateOutletDirective], encapsulation: 2 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWFkZC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLWFkZC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFPdEUsNkJBQTBEO0lBQ3hELHVCQUFpRDtJQUNuRCwwQkFBZTs7O0lBREYsZUFBZTtJQUFmLGdDQUFlOztBQVNoQyxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQW9CLFVBQW1DO1FBQW5DLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBSjlDLFlBQU8sR0FBb0MsTUFBTSxDQUFDO1FBS3pELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsV0FBVyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQzsyRkFmVSwwQkFBMEI7b0VBQTFCLDBCQUEwQjtZQVZuQyw2RkFFZTs7WUFGQSxvREFBaUM7Ozt1RkFVdkMsMEJBQTBCO2NBYnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0RBQW9EO2dCQUM5RCxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsWUFBWSxFQUFFLFNBQVM7b0JBQ3ZCLElBQUksRUFBRSxRQUFRO2lCQUNmO2FBQ0Y7NkRBRVUsT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtdGFiLWFkZC1idXR0b24sIGJ1dHRvbltjbWFjcy10YWItYWRkLWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJhZGRJY29uOyBsZXQgaWNvblwiPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIiBuelRoZW1lPVwib3V0bGluZVwiPjwvaT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXRhYnMtbmF2LWFkZCcsXG4gICAgJ2FyaWEtbGFiZWwnOiAnQWRkIHRhYicsXG4gICAgdHlwZTogJ2J1dHRvbidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYkFkZEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAncGx1cyc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRFbGVtZW50V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Py5vZmZzZXRXaWR0aCB8fCAwO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldEhlaWdodCB8fCAwO1xuICB9XG59XG4iXX0=