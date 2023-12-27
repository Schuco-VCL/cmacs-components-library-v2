import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["cmacs-tab-body", ""];
function CmacsTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function CmacsTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
} }
export class CmacsTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
    static { this.ɵfac = function CmacsTabBodyComponent_Factory(t) { return new (t || CmacsTabBodyComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTabBodyComponent, selectors: [["", "cmacs-tab-body", ""]], hostAttrs: [1, "ant-tabs-tabpane"], hostVars: 12, hostBindings: function CmacsTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
            i0.ɵɵstyleProp("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
            i0.ɵɵclassProp("ant-tabs-tabpane-active", ctx.active);
        } }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["cmacsTabBody"], attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function CmacsTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.active || ctx.forceRender);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabBodyComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-tab-body]',
                exportAs: 'cmacsTabBody',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tabpane',
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            }]
    }], null, { content: [{
            type: Input
        }], active: [{
            type: Input
        }], tabPaneAnimated: [{
            type: Input
        }], forceRender: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLWJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFTdEcsNkJBQTRDO0lBQzFDLHFHQUF3RDtJQUMxRCwwQkFBZTs7O0lBREEsZUFBNEI7SUFBNUIsaURBQTRCOztBQWMvQyxNQUFNLE9BQU8scUJBQXFCO0lBdEJsQztRQXVCVyxZQUFPLEdBQTZCLElBQUksQ0FBQztRQUN6QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7S0FDOUI7c0ZBTFkscUJBQXFCO29FQUFyQixxQkFBcUI7Ozs7O1lBZjlCLHdGQUVlOztZQUZBLG9EQUEyQjs7O3VGQWVqQyxxQkFBcUI7Y0F0QmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsaUNBQWlDLEVBQUUsUUFBUTtvQkFDM0MsaUJBQWlCLEVBQUUsaUJBQWlCO29CQUNwQyxvQkFBb0IsRUFBRSxTQUFTO29CQUMvQixvQkFBb0IsRUFBRSxtREFBbUQ7b0JBQ3pFLGdCQUFnQixFQUFFLDRDQUE0QztvQkFDOUQsb0JBQW9CLEVBQUUsaURBQWlEO29CQUN2RSxpQkFBaUIsRUFBRSxrREFBa0Q7aUJBQ3RFO2FBQ0Y7Z0JBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tjbWFjcy10YWItYm9keV0nLFxuICBleHBvcnRBczogJ2NtYWNzVGFiQm9keScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWN0aXZlIHx8IGZvcmNlUmVuZGVyXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC10YWJzLXRhYnBhbmUnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZS1hY3RpdmVdJzogJ2FjdGl2ZScsXG4gICAgJ1thdHRyLnRhYmluZGV4XSc6ICdhY3RpdmUgPyAwIDogLTEnLFxuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZScsXG4gICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogXCJoaWRkZW5cIiA6IG51bGwnLFxuICAgICdbc3R5bGUuaGVpZ2h0XSc6ICd0YWJQYW5lQW5pbWF0ZWQgPyBhY3RpdmUgPyBudWxsIDogMCA6IG51bGwnLFxuICAgICdbc3R5bGUub3ZlcmZsb3cteV0nOiAndGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCcsXG4gICAgJ1tzdHlsZS5kaXNwbGF5XSc6ICchdGFiUGFuZUFuaW1hdGVkID8gYWN0aXZlID8gbnVsbCA6IFwibm9uZVwiIDogbnVsbCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYkJvZHlDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiUGFuZUFuaW1hdGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9yY2VSZW5kZXIgPSBmYWxzZTtcbn1cbiJdfQ==