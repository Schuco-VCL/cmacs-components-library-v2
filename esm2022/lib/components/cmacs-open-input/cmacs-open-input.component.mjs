import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../cmacs-input/cmacs-input.directive";
import * as i3 from "../cmacs-modal/cmacs-to-css-unit.pipe";
export class CmacsOpenInputComponent {
    constructor() {
        this.formControlCustom = new UntypedFormControl('', []);
        this.placeholder = '';
    }
    static { this.ɵfac = function CmacsOpenInputComponent_Factory(t) { return new (t || CmacsOpenInputComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOpenInputComponent, selectors: [["cmacs-open-input"]], inputs: { formControlCustom: "formControlCustom", width: "width", placeholder: "placeholder" }, exportAs: ["cmacsOpenInput"], decls: 3, vars: 6, consts: [["cmacs-input", "", 1, "cmacs-open-input", 3, "placeholder", "formControl"], [1, "cmacs-open-input-wrapper"]], template: function CmacsOpenInputComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵpipe(1, "cmacsToCssUnit");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "span", 1);
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(1, 4, ctx.width));
            i0.ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.formControlCustom);
        } }, dependencies: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.CmacsInputDirective, i3.CmacsToCssUnitPipe], styles: [".cmacs-open-input,.cmacs-open-input:hover,.cmacs-open-input:focus{border-top:none!important;border-left:none!important;border-right:none!important;border-bottom:2px #bec4cd dotted!important;padding:0!important;height:25px!important;border-radius:0!important}cmacs-form-explain.ant-form-explain{color:#f6503c;font-size:10px}.cmacs-open-input-wrapper:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-2px;margin-left:5px;color:#bec4cd}.cmacs-open-input:hover~.cmacs-open-input-wrapper:after,.cmacs-open-input:focus~.cmacs-open-input-wrapper:after{color:#2a7cff!important}cmacs-form-label~cmacs-open-input .cmacs-open-input~.cmacs-open-input-wrapper:after,cmacs-form-label+cmacs-open-input:hover .cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input:focus~.cmacs-open-input-wrapper:after{content:\"\"}.ant-form-item-label,.ant-form-item-label>label{color:#acb3bf!important;font-size:12px!important}\n"], encapsulation: 2 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenInputComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-open-input', exportAs: 'cmacsOpenInput', encapsulation: ViewEncapsulation.None, template: "<input [style.width]=\"width | cmacsToCssUnit\"\r\n       cmacs-input\r\n       [placeholder]=\"placeholder\"\r\n       [formControl]=\"formControlCustom\"\r\n       class=\"cmacs-open-input\"/>\r\n<span class=\"cmacs-open-input-wrapper\"></span>\r\n", styles: [".cmacs-open-input,.cmacs-open-input:hover,.cmacs-open-input:focus{border-top:none!important;border-left:none!important;border-right:none!important;border-bottom:2px #bec4cd dotted!important;padding:0!important;height:25px!important;border-radius:0!important}cmacs-form-explain.ant-form-explain{color:#f6503c;font-size:10px}.cmacs-open-input-wrapper:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-2px;margin-left:5px;color:#bec4cd}.cmacs-open-input:hover~.cmacs-open-input-wrapper:after,.cmacs-open-input:focus~.cmacs-open-input-wrapper:after{color:#2a7cff!important}cmacs-form-label~cmacs-open-input .cmacs-open-input~.cmacs-open-input-wrapper:after,cmacs-form-label+cmacs-open-input:hover .cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input:focus~.cmacs-open-input-wrapper:after{content:\"\"}.ant-form-item-label,.ant-form-item-label>label{color:#acb3bf!important;font-size:12px!important}\n"] }]
    }], function () { return []; }, { formControlCustom: [{
            type: Input
        }], width: [{
            type: Input
        }], placeholder: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi1pbnB1dC9jbWFjcy1vcGVuLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWlucHV0L2NtYWNzLW9wZW4taW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRVMsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQVNsRCxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDO1FBSlMsc0JBQWlCLEdBQXVCLElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXZFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBSWxDLENBQUM7d0ZBUlUsdUJBQXVCO29FQUF2Qix1QkFBdUI7WUNmcEMsZ0NBSWlDOztZQUpqQyxpQkFJaUM7WUFDakMsMEJBQThDOztZQUx2Qyx3REFBc0M7WUFFdEMsNkNBQTJCLHNDQUFBOzs7dUZEYXJCLHVCQUF1QjtjQVBuQyxTQUFTOzJCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsaUJBQ1gsaUJBQWlCLENBQUMsSUFBSTtzQ0FNNUIsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VW50eXBlZEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi1pbnB1dCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5JbnB1dCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5JbnB1dENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBVbnR5cGVkRm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIjxpbnB1dCBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBjbWFjc1RvQ3NzVW5pdFwiXHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICBjbGFzcz1cImNtYWNzLW9wZW4taW5wdXRcIi8+XHJcbjxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1pbnB1dC13cmFwcGVyXCI+PC9zcGFuPlxyXG4iXX0=