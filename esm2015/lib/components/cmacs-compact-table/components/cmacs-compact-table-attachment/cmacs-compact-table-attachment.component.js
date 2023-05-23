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
CmacsCompactTableAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "iconUILarge-Attached"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDUS9ELCtCQUF3RDtJQUNwRCxnQ0FDa0c7SUFBQSxZQUFRO0lBQUEsaUJBQU87SUFDakgsK0JBQThCO0lBQzFCLDZCQUEwRDtJQUE3QixrUEFBNEI7SUFBQyxpQkFBSTtJQUNsRSxpQkFBTTtJQUNWLGlCQUFNOzs7SUFKZ0csZUFBUTtJQUFSLDZCQUFROzs7O0lBVjlILDhCQUErQztJQUMzQyw4QkFBc0Q7SUFBQSx1QkFDYjtJQUFBLFlBQ3pDO0lBQUEsaUJBQU07SUFFTixtREFBOEI7SUFDMUIsOEJBQStCO0lBQzNCLDhCQUE4QjtJQUMxQiwyRkFNTTtJQUNWLGlCQUFNO0lBQ04sdUNBQXdDO0lBQ3BDLHFDQUEyQztJQUN2QyxtQ0FBdUo7SUFBakUsaU5BQThCO0lBQW9DLGFBQXFCO0lBQUEsaUJBQVM7SUFDMUwsaUJBQVk7SUFDWixxQ0FBMkM7SUFDdkMsa0NBQWdHO0lBQWpDLCtOQUFrQjtJQUFqRixpQkFBZ0c7SUFDaEcsbUNBQ21EO0lBQXRCLHdNQUFxQjtJQUFDLGFBQXFCO0lBQUEsaUJBQVM7SUFDckYsaUJBQVk7SUFDaEIsaUJBQWU7SUFDbkIsaUJBQU07SUFFVixpQkFBcUI7SUFDekIsaUJBQU07Ozs7SUE1QkcsZUFBNEI7SUFBNUIscUNBQTRCO0lBQ1EsZUFDekM7SUFEeUMseUdBQ3pDO0lBSzhDLGVBQW9CO0lBQXBCLGtEQUFvQjtJQVMzQyxlQUErQjtJQUEvQiw2REFBK0I7SUFDRixlQUFlO0lBQWYsNkJBQWUseUNBQUE7SUFBcUcsZUFBcUI7SUFBckIsd0RBQXFCO0lBRXRLLGVBQStCO0lBQS9CLDZEQUErQjtJQUN5QixlQUFrQjtJQUFsQixxQ0FBa0I7SUFDN0MsZUFBZTtJQUFmLDZCQUFlLGdDQUFBO0lBQ0EsZUFBcUI7SUFBckIsOENBQXFCOztBRGhCNUYsTUFBTSxPQUFPLG9DQUFvQztJQVEvQztRQUxTLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ25ELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFdEQsU0FBSSxHQUFVLEVBQUUsQ0FBQztJQUNELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYTtRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7d0hBN0JVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO1FDUGpELHVGQTZCTTs7UUE3QmdCLDRDQUF1Qjs7dUZET2hDLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLGlEQUFpRDtnQkFDOUQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7YUFDOUQ7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQXR0YWNobWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgQElucHV0KCkgY29uZjogYW55O1xyXG4gIEBJbnB1dCgpIGN0YURyb3Bkb3duT3B0aW9uOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUF0dGFjaG1lbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja0Nob29zZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbGluazpzdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246c3RyaW5nKXtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5maW5kSW5kZXgob3B0ID0+IG9wdCA9PT0gb3B0aW9uKTtcclxuICAgIGlmKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUF0dGFjaG1lbnRzLmVtaXQodGhpcy5jdGFEcm9wZG93bk9wdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWJlZExpbmsoKXtcclxuICAgIHRoaXMuY3RhRHJvcGRvd25PcHRpb24ucHVzaCh0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5saW5rID0gJyc7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZSgpIHtcclxuICAgIHRoaXMub25jbGlja0Nob29zZUZpbGUuZW1pdCh7b25jbGlja0Nob29zZUZpbGU6dHJ1ZX0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiICpuZ0lmPVwiY3RhRHJvcGRvd25PcHRpb25cIj5cclxuICAgIDxkaXYgW2Ryb3Bkb3duVHJpZ2dlcl09XCJkcm9wZG93blwiIGNsYXNzPVwiY21hY3MtdmFsdWVcIj48aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUF0dGFjaGVkXCI+PC9pPnt7Y3RhRHJvcGRvd25PcHRpb24/Lmxlbmd0aH19XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8Y21hY3MtY3RhLWRyb3Bkb3duICNkcm9wZG93bj5cclxuICAgICAgICA8ZGl2IGlkPVwiY3RhLWRyb3Bkb3duLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdcIiAqbmdGb3I9XCJsZXQgZE9wdCBvZiBjdGFEcm9wZG93bk9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDkzJTsgaGVpZ2h0OiAyNXB4O21heC13aWR0aDogMTgwcHg7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1wiPnt7ZE9wdH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ2xvc2VcIiAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKGRPcHQpXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Y21hY3MtdGFic2V0IHN0eWxlPVwibWFyZ2luLXRvcDogMTdweDtcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7Y29uZi50YWIxTGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgW2FjdGlvbl09XCJ0cnVlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJwcmltYXJ5XCIoY2xpY2spPVwiX29uY2xpY2tDaG9vc2VGaWxlKClcIiBbZGlzYWJsZWRdPVwiY29uZi5kaXNhYmxlZEJ0blRhYjFcIj4ge3tjb25mLmJ0blRhYjFMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7Y29uZi50YWIyTGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDM0cHg7IG1hcmdpbi1ib3R0b206IDE0cHg7XCIgWyhuZ01vZGVsKV09XCJsaW5rXCIgY21hY3MtaW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsaW5rID09PSAnJ1wiIChjbGljayk9XCJlbWJlZExpbmsoKVwiPnt7Y29uZi5idG5UYWIyTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICAgIDwvY21hY3MtdGFic2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvY21hY3MtY3RhLWRyb3Bkb3duPlxyXG48L2Rpdj4iXX0=