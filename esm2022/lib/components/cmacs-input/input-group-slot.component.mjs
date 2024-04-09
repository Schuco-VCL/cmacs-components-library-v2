import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/core/outlet";
const _c0 = ["cmacs-input-group-slot", ""];
function CmacsInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function CmacsInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.template);
} }
export class CmacsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    static { this.ɵfac = function CmacsInputGroupSlotComponent_Factory(t) { return new (t || CmacsInputGroupSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsInputGroupSlotComponent, selectors: [["", "cmacs-input-group-slot", ""]], hostVars: 6, hostBindings: function CmacsInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
        } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function CmacsInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
            i0.ɵɵtemplate(1, CmacsInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.icon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
        } }, dependencies: [i1.NgIf, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective, i4.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputGroupSlotComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], null, { icon: [{
            type: Input
        }], type: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtaW5wdXQvaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBUXRHLHVCQUE0Qzs7O0lBQWpDLG9DQUFlOzs7SUFDMUIsNkJBQWlEO0lBQUEsWUFBYztJQUFBLDBCQUFlOzs7SUFBN0IsZUFBYztJQUFkLHFDQUFjOztBQVFuRSxNQUFNLE9BQU8sNEJBQTRCO0lBZnpDO1FBZ0JXLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBQzVCLFNBQUksR0FBeUMsSUFBSSxDQUFDO1FBQ2xELGFBQVEsR0FBdUMsSUFBSSxDQUFDO0tBQzlEOzZGQUpZLDRCQUE0QjtvRUFBNUIsNEJBQTRCOzs7WUFUckMseUVBQTRDO1lBQzVDLCtGQUE4RTs7WUFEbEQsK0JBQVU7WUFDdkIsZUFBZ0M7WUFBaEMscURBQWdDOzs7dUZBUXRDLDRCQUE0QjtjQWZ4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSiwrQkFBK0IsRUFBRSxrQkFBa0I7b0JBQ25ELDBCQUEwQixFQUFFLG1CQUFtQjtvQkFDL0MsMEJBQTBCLEVBQUUsbUJBQW1CO2lCQUNoRDthQUNGO2dCQUVVLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1pbnB1dC1ncm91cC1zbG90XScsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIiAqbmdJZj1cImljb25cIj48L2k+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGVcIj57eyB0ZW1wbGF0ZSB9fTwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtYWRkb25dJzogYHR5cGUgPT09ICdhZGRvbidgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtcHJlZml4XSc6IGB0eXBlID09PSAncHJlZml4J2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zdWZmaXhdJzogYHR5cGUgPT09ICdzdWZmaXgnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzSW5wdXRHcm91cFNsb3RDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiAnYWRkb24nIHwgJ3ByZWZpeCcgfCAnc3VmZml4JyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxufVxyXG4iXX0=