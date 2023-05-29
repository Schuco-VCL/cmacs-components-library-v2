import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/cmacs-dropdown-trigger.directive";
import * as i3 from "./components/cmacs-cta-dropdown/cmacs-cta-dropdown.component";
import * as i4 from "../../../cmacs-tabs/tabset.component";
import * as i5 from "../../../cmacs-tabs/tab.component";
import * as i6 from "../../../cmacs-button/cmacs-button.component";
import * as i7 from "../../../cmacs-input/cmacs-input.directive";
import * as i8 from "@angular/forms";
function CmacsCompactTableAttachmentComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelementStart(4, "i", 15);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_div_8_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r5); const dOpt_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.deleteOption(dOpt_r3); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dOpt_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dOpt_r3);
} }
function CmacsCompactTableAttachmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelement(2, "i", 3);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-cta-dropdown", null, 4);
    i0.ɵɵelementStart(6, "div", 5);
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵtemplate(8, CmacsCompactTableAttachmentComponent_div_0_div_8_Template, 5, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "cmacs-tabset", 8);
    i0.ɵɵelementStart(10, "cmacs-tab", 9);
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6._onclickChooseFile(); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "cmacs-tab", 9);
    i0.ɵɵelementStart(14, "input", 11);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableAttachmentComponent_div_0_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.link = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 10);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.embedLink(); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = i0.ɵɵreference(5);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("dropdownTrigger", _r1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.ctaDropdownOption == null ? null : ctx_r0.ctaDropdownOption.length, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.ctaDropdownOption);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("cmacsTitle", ctx_r0.conf.tab1Label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("action", true)("disabled", ctx_r0.conf.disabledBtnTab1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.conf.btnTab1Label, "");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("cmacsTitle", ctx_r0.conf.tab2Label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("action", true)("disabled", ctx_r0.link === "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.conf.btnTab2Label);
} }
export class CmacsCompactTableAttachmentComponent {
    constructor() {
        this.ctaDropdownOption = [];
        this.onChangeAttachments = new EventEmitter();
        this.onclickChooseFile = new EventEmitter();
        this.link = '';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.ctaDropdownOption.currentValue === undefined) {
            this.ctaDropdownOption = [];
        }
    }
    deleteOption(option) {
        const index = this.ctaDropdownOption.findIndex(opt => opt === option);
        if (index !== -1) {
            this.ctaDropdownOption.splice(index, 1);
            this.onChangeAttachments.emit(this.ctaDropdownOption);
        }
    }
    embedLink() {
        this.ctaDropdownOption.push(this.link);
        this.link = '';
        this.onChangeAttachments.emit(this.ctaDropdownOption);
    }
    _onclickChooseFile() {
        this.onclickChooseFile.emit({ onclickChooseFile: true });
    }
}
CmacsCompactTableAttachmentComponent.ɵfac = function CmacsCompactTableAttachmentComponent_Factory(t) { return new (t || CmacsCompactTableAttachmentComponent)(); };
CmacsCompactTableAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "iconUILarge-Attached"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsCompactTableAttachmentComponent_div_0_Template, 17, 12, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.ctaDropdownOption);
    } }, directives: [i1.NgIf, i2.CmacsDropdownTriggerDirective, i3.CmacsCtaDropdownComponent, i1.NgForOf, i4.CmacsTabSetComponent, i5.CmacsTabComponent, i6.CmacsButtonComponent, i7.CmacsInputDirective, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgModel], styles: [".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.cmacs-value[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]{font-family:inherit;background-color:#fff;border:none;outline:none}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f5}.dropdown-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;gap:10px}.tag[_ngcontent-%COMP%]{width:auto;height:32px;border-radius:20px;display:flex;align-items:center;border:1px solid #dee0e5;padding:10px}button[_ngcontent-%COMP%]{width:100%;height:34px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableAttachmentComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-compact-table-attachment',
                templateUrl: './cmacs-compact-table-attachment.component.html',
                styleUrls: ['./cmacs-compact-table-attachment.component.css']
            }]
    }], function () { return []; }, { conf: [{
            type: Input
        }], ctaDropdownOption: [{
            type: Input
        }], onChangeAttachments: [{
            type: Output
        }], onclickChooseFile: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNRekYsK0JBQXdEO0lBQ3BELGdDQUNrRztJQUFBLFlBQVE7SUFBQSxpQkFBTztJQUNqSCwrQkFBOEI7SUFDMUIsNkJBQTBEO0lBQTdCLGtQQUE0QjtJQUFDLGlCQUFJO0lBQ2xFLGlCQUFNO0lBQ1YsaUJBQU07OztJQUpnRyxlQUFRO0lBQVIsNkJBQVE7Ozs7SUFWOUgsOEJBQStDO0lBQzNDLDhCQUFzRDtJQUFBLHVCQUNiO0lBQUEsWUFDekM7SUFBQSxpQkFBTTtJQUVOLG1EQUE4QjtJQUMxQiw4QkFBK0I7SUFDM0IsOEJBQThCO0lBQzFCLDJGQU1NO0lBQ1YsaUJBQU07SUFDTix1Q0FBd0M7SUFDcEMscUNBQTJDO0lBQ3ZDLG1DQUF1SjtJQUFqRSxpTkFBOEI7SUFBb0MsYUFBcUI7SUFBQSxpQkFBUztJQUMxTCxpQkFBWTtJQUNaLHFDQUEyQztJQUN2QyxrQ0FBZ0c7SUFBakMsK05BQWtCO0lBQWpGLGlCQUFnRztJQUNoRyxtQ0FDbUQ7SUFBdEIsd01BQXFCO0lBQUMsYUFBcUI7SUFBQSxpQkFBUztJQUNyRixpQkFBWTtJQUNoQixpQkFBZTtJQUNuQixpQkFBTTtJQUVWLGlCQUFxQjtJQUN6QixpQkFBTTs7OztJQTVCRyxlQUE0QjtJQUE1QixxQ0FBNEI7SUFDUSxlQUN6QztJQUR5Qyx5R0FDekM7SUFLOEMsZUFBb0I7SUFBcEIsa0RBQW9CO0lBUzNDLGVBQStCO0lBQS9CLDZEQUErQjtJQUNGLGVBQWU7SUFBZiw2QkFBZSx5Q0FBQTtJQUFxRyxlQUFxQjtJQUFyQix3REFBcUI7SUFFdEssZUFBK0I7SUFBL0IsNkRBQStCO0lBQ3lCLGVBQWtCO0lBQWxCLHFDQUFrQjtJQUM3QyxlQUFlO0lBQWYsNkJBQWUsZ0NBQUE7SUFDQSxlQUFxQjtJQUFyQiw4Q0FBcUI7O0FEaEI1RixNQUFNLE9BQU8sb0NBQW9DO0lBUS9DO1FBTFMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDbkQsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0RCxTQUFJLEdBQVUsRUFBRSxDQUFDO0lBQ0QsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWE7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxpQkFBaUIsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O3dIQW5DVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1BqRCx1RkE2Qk07O1FBN0JnQiw0Q0FBdUI7O3VGRE9oQyxvQ0FBb0M7Y0FMaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxpREFBaUQ7Z0JBQzlELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO2FBQzlEO3NDQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLG1CQUFtQjtrQkFBNUIsTUFBTTtZQUNHLGlCQUFpQjtrQkFBMUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQXR0YWNobWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBASW5wdXQoKSBjb25mOiBhbnk7XHJcbiAgQElucHV0KCkgY3RhRHJvcGRvd25PcHRpb246IHN0cmluZ1tdID0gW107XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQXR0YWNobWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrQ2hvb3NlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBsaW5rOnN0cmluZyA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoY2hhbmdlcy5jdGFEcm9wZG93bk9wdGlvbi5jdXJyZW50VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcHRpb24ob3B0aW9uOnN0cmluZyl7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY3RhRHJvcGRvd25PcHRpb24uZmluZEluZGV4KG9wdCA9PiBvcHQgPT09IG9wdGlvbik7XHJcbiAgICBpZihpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VBdHRhY2htZW50cy5lbWl0KHRoaXMuY3RhRHJvcGRvd25PcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1iZWRMaW5rKCl7XHJcbiAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uLnB1c2godGhpcy5saW5rKTtcclxuICAgIHRoaXMubGluayA9ICcnO1xyXG4gICAgdGhpcy5vbkNoYW5nZUF0dGFjaG1lbnRzLmVtaXQodGhpcy5jdGFEcm9wZG93bk9wdGlvbik7XHJcbiAgfVxyXG5cclxuICBfb25jbGlja0Nob29zZUZpbGUoKSB7XHJcbiAgICB0aGlzLm9uY2xpY2tDaG9vc2VGaWxlLmVtaXQoe29uY2xpY2tDaG9vc2VGaWxlOnRydWV9KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIndyYXBwZXJcIiAqbmdJZj1cImN0YURyb3Bkb3duT3B0aW9uXCI+XHJcbiAgICA8ZGl2IFtkcm9wZG93blRyaWdnZXJdPVwiZHJvcGRvd25cIiBjbGFzcz1cImNtYWNzLXZhbHVlXCI+PGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uVUlMYXJnZS1BdHRhY2hlZFwiPjwvaT57e2N0YURyb3Bkb3duT3B0aW9uPy5sZW5ndGh9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGNtYWNzLWN0YS1kcm9wZG93biAjZHJvcGRvd24+XHJcbiAgICAgICAgPGRpdiBpZD1cImN0YS1kcm9wZG93bi1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCIgKm5nRm9yPVwibGV0IGRPcHQgb2YgY3RhRHJvcGRvd25PcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5MyU7IGhlaWdodDogMjVweDttYXgtd2lkdGg6IDE4MHB4OyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcIj57e2RPcHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNsb3NlXCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihkT3B0KVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGNtYWNzLXRhYnNldCBzdHlsZT1cIm1hcmdpbi10b3A6IDE3cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMUxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiKGNsaWNrKT1cIl9vbmNsaWNrQ2hvb3NlRmlsZSgpXCIgW2Rpc2FibGVkXT1cImNvbmYuZGlzYWJsZWRCdG5UYWIxXCI+IHt7Y29uZi5idG5UYWIxTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMkxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAzNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4O1wiIFsobmdNb2RlbCldPVwibGlua1wiIGNtYWNzLWlucHV0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gdHlwZT1cInByaW1hcnlcIiBbYWN0aW9uXT1cInRydWVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibGluayA9PT0gJydcIiAoY2xpY2spPVwiZW1iZWRMaW5rKClcIj57e2NvbmYuYnRuVGFiMkxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtdGFiPlxyXG4gICAgICAgICAgICA8L2NtYWNzLXRhYnNldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2NtYWNzLWN0YS1kcm9wZG93bj5cclxuPC9kaXY+Il19