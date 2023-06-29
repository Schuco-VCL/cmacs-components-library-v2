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
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "span", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 15);
    i0.ɵɵelementStart(4, "i", 16);
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
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableAttachmentComponent_div_0_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.link = $event; })("keyup", function CmacsCompactTableAttachmentComponent_div_0_Template_input_keyup_14_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.validateUrl($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 12);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.embedLink(); });
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
    i0.ɵɵproperty("action", true)("disabled", ctx_r0.disabledEmbedLink);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.conf.btnTab2Label);
} }
export class CmacsCompactTableAttachmentComponent {
    constructor() {
        this.ctaDropdownOption = [];
        this.onChangeAttachments = new EventEmitter();
        this.onclickChooseFile = new EventEmitter();
        this.link = '';
        this.disabledEmbedLink = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (typeof changes.ctaDropdownOption.currentValue !== 'object' || typeof changes.ctaDropdownOption.currentValue[0] === 'undefined') {
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
    validateUrl(link) {
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var regex = new RegExp(expression);
        this.disabledEmbedLink = link.value.match(regex) ? false : true;
    }
}
CmacsCompactTableAttachmentComponent.ɵfac = function CmacsCompactTableAttachmentComponent_Factory(t) { return new (t || CmacsCompactTableAttachmentComponent)(); };
CmacsCompactTableAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "iconUILarge-Attached"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["id", "button-choose-file", "cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange", "keyup"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsCompactTableAttachmentComponent_div_0_Template, 17, 12, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.ctaDropdownOption && ctx.conf);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7SUNRekYsK0JBQXdEO0lBQ3BELGdDQUNrRztJQUFBLFlBQVE7SUFBQSxpQkFBTztJQUNqSCwrQkFBOEI7SUFDMUIsNkJBQTBEO0lBQTdCLGtQQUE0QjtJQUFDLGlCQUFJO0lBQ2xFLGlCQUFNO0lBQ1YsaUJBQU07OztJQUpnRyxlQUFRO0lBQVIsNkJBQVE7Ozs7SUFWOUgsOEJBQXVEO0lBQ25ELDhCQUFzRDtJQUFBLHVCQUNiO0lBQUEsWUFDekM7SUFBQSxpQkFBTTtJQUVOLG1EQUE4QjtJQUMxQiw4QkFBK0I7SUFDM0IsOEJBQThCO0lBQzFCLDJGQU1NO0lBQ1YsaUJBQU07SUFDTix1Q0FBd0M7SUFDcEMscUNBQTJDO0lBQ3ZDLG1DQUErSztJQUFqRSxpTkFBOEI7SUFBb0MsYUFBcUI7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RDtnQkFDOUQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7YUFDOUQ7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21wYWN0VGFibGVBdHRhY2htZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBjb25mOiBhbnk7XHJcbiAgQElucHV0KCkgY3RhRHJvcGRvd25PcHRpb246IHN0cmluZ1tdID0gW107XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlQXR0YWNobWVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSBvbmNsaWNrQ2hvb3NlRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBsaW5rOiBzdHJpbmcgPSAnJztcclxuICBkaXNhYmxlZEVtYmVkTGluazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBjaGFuZ2VzLmN0YURyb3Bkb3duT3B0aW9uLmN1cnJlbnRWYWx1ZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIGNoYW5nZXMuY3RhRHJvcGRvd25PcHRpb24uY3VycmVudFZhbHVlWzBdID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5maW5kSW5kZXgob3B0ID0+IG9wdCA9PT0gb3B0aW9uKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtYmVkTGluaygpIHtcclxuICAgIHRoaXMuY3RhRHJvcGRvd25PcHRpb24ucHVzaCh0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5saW5rID0gJyc7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZSgpIHtcclxuICAgIHRoaXMub25jbGlja0Nob29zZUZpbGUuZW1pdCh7IG9uY2xpY2tDaG9vc2VGaWxlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVVcmwobGluazogYW55KSB7XHJcbiAgICB2YXIgZXhwcmVzc2lvbiA9LyhodHRwcz86XFwvXFwvKD86d3d3XFwufCg/IXd3dykpW2EtekEtWjAtOV1bYS16QS1aMC05LV0rW2EtekEtWjAtOV1cXC5bXlxcc117Mix9fHd3d1xcLlthLXpBLVowLTldW2EtekEtWjAtOS1dK1thLXpBLVowLTldXFwuW15cXHNdezIsfXxodHRwcz86XFwvXFwvKD86d3d3XFwufCg/IXd3dykpW2EtekEtWjAtOV0rXFwuW15cXHNdezIsfXx3d3dcXC5bYS16QS1aMC05XStcXC5bXlxcc117Mix9KS9naTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoZXhwcmVzc2lvbik7XHJcbiAgICB0aGlzLmRpc2FibGVkRW1iZWRMaW5rID0gbGluay52YWx1ZS5tYXRjaChyZWdleCkgPyBmYWxzZSA6IHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgKm5nSWY9XCJjdGFEcm9wZG93bk9wdGlvbiAmJiBjb25mXCI+XHJcbiAgICA8ZGl2IFtkcm9wZG93blRyaWdnZXJdPVwiZHJvcGRvd25cIiBjbGFzcz1cImNtYWNzLXZhbHVlXCI+PGlcclxuICAgICAgICAgICAgY2xhc3M9XCJpY29uVUlMYXJnZS1BdHRhY2hlZFwiPjwvaT57e2N0YURyb3Bkb3duT3B0aW9uPy5sZW5ndGh9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGNtYWNzLWN0YS1kcm9wZG93biAjZHJvcGRvd24+XHJcbiAgICAgICAgPGRpdiBpZD1cImN0YS1kcm9wZG93bi1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCIgKm5nRm9yPVwibGV0IGRPcHQgb2YgY3RhRHJvcGRvd25PcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5MyU7IGhlaWdodDogMjVweDttYXgtd2lkdGg6IDE4MHB4OyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcIj57e2RPcHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNsb3NlXCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihkT3B0KVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGNtYWNzLXRhYnNldCBzdHlsZT1cIm1hcmdpbi10b3A6IDE3cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMUxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYnV0dG9uLWNob29zZS1maWxlXCIgY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgW2FjdGlvbl09XCJ0cnVlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJwcmltYXJ5XCIoY2xpY2spPVwiX29uY2xpY2tDaG9vc2VGaWxlKClcIiBbZGlzYWJsZWRdPVwiY29uZi5kaXNhYmxlZEJ0blRhYjFcIj4ge3tjb25mLmJ0blRhYjFMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7Y29uZi50YWIyTGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDM0cHg7IG1hcmdpbi1ib3R0b206IDE0cHg7XCIgWyhuZ01vZGVsKV09XCJsaW5rXCIgKGtleXVwKT1cInZhbGlkYXRlVXJsKCRldmVudC50YXJnZXQpXCIgY21hY3MtaW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZEVtYmVkTGlua1wiIChjbGljayk9XCJlbWJlZExpbmsoKVwiPnt7Y29uZi5idG5UYWIyTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICAgIDwvY21hY3MtdGFic2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9jbWFjcy1jdGEtZHJvcGRvd24+XHJcbjwvZGl2PiJdfQ==