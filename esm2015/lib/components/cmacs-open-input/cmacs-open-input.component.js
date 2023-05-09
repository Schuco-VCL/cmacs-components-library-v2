import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-input/cmacs-input.directive";
import * as i2 from "@angular/forms";
import * as i3 from "../cmacs-modal/cmacs-to-css-unit.pipe";
export class CmacsOpenInputComponent {
    constructor() {
        this.formControlCustom = new FormControl('', []);
        this.placeholder = '';
    }
}
CmacsOpenInputComponent.ɵfac = function CmacsOpenInputComponent_Factory(t) { return new (t || CmacsOpenInputComponent)(); };
CmacsOpenInputComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOpenInputComponent, selectors: [["cmacs-open-input"]], inputs: { formControlCustom: "formControlCustom", width: "width", placeholder: "placeholder" }, exportAs: ["cmacsOpenInput"], decls: 3, vars: 6, consts: [["cmacs-input", "", 1, "cmacs-open-input", 3, "placeholder", "formControl"], [1, "cmacs-open-input-wrapper"]], template: function CmacsOpenInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵpipe(1, "cmacsToCssUnit");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(2, "span", 1);
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(1, 4, ctx.width));
        i0.ɵɵproperty("placeholder", ctx.placeholder)("formControl", ctx.formControlCustom);
    } }, directives: [i1.CmacsInputDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], pipes: [i3.CmacsToCssUnitPipe], styles: [".cmacs-open-input,.cmacs-open-input:focus,.cmacs-open-input:hover{border:none!important;border-bottom:2px dotted #bec4cd!important;padding:0!important;height:25px!important;border-radius:0!important}cmacs-form-explain.ant-form-explain{color:#f6503c;font-size:10px}.cmacs-open-input-wrapper:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-2px;margin-left:5px;color:#bec4cd}.cmacs-open-input:focus~.cmacs-open-input-wrapper:after,.cmacs-open-input:hover~.cmacs-open-input-wrapper:after{color:#2a7cff!important}cmacs-form-label+cmacs-open-input:hover .cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input:focus~.cmacs-open-input-wrapper:after,cmacs-form-label~cmacs-open-input .cmacs-open-input~.cmacs-open-input-wrapper:after{content:\"\"}.ant-form-item-label,.ant-form-item-label>label{color:#acb3bf!important;font-size:12px!important}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenInputComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-open-input',
                exportAs: 'cmacsOpenInput',
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-open-input.component.html',
                styleUrls: ['./cmacs-open-input.component.css'],
            }]
    }], function () { return []; }, { formControlCustom: [{
            type: Input
        }], width: [{
            type: Input
        }], placeholder: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi1pbnB1dC9jbWFjcy1vcGVuLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWlucHV0L2NtYWNzLW9wZW4taW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRVMsaUJBQWlCLEVBQ2hDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFTM0MsTUFBTSxPQUFPLHVCQUF1QjtJQU1sQztRQUpTLHNCQUFpQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekQsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFJbEMsQ0FBQzs7OEZBUlUsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNmcEMsZ0NBSWlDOztRQUpqQyxpQkFJaUM7UUFDakMsMEJBQThDOztRQUx2Qyx3REFBc0M7UUFFdEMsNkNBQTJCLHNDQUFBOzt1RkRhckIsdUJBQXVCO2NBUG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7c0NBR1UsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcGVuLWlucHV0JyxcclxuICBleHBvcnRBczogJ2NtYWNzT3BlbklucHV0JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcGVuLWlucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLWlucHV0LmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3BlbklucHV0Q29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xDdXN0b206IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiIsIjxpbnB1dCBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBjbWFjc1RvQ3NzVW5pdFwiXHJcbiAgICAgICBjbWFjcy1pbnB1dFxyXG4gICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiXHJcbiAgICAgICBjbGFzcz1cImNtYWNzLW9wZW4taW5wdXRcIi8+XHJcbjxzcGFuIGNsYXNzPVwiY21hY3Mtb3Blbi1pbnB1dC13cmFwcGVyXCI+PC9zcGFuPlxyXG4iXX0=