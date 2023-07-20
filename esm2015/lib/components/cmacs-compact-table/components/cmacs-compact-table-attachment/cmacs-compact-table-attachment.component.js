import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/cmacs-cta-dropdown/cmacs-cta-dropdown.component";
import * as i3 from "../../../cmacs-tabs/tabset.component";
import * as i4 from "../../../cmacs-tabs/tab.component";
import * as i5 from "../../../cmacs-button/cmacs-button.component";
import * as i6 from "../../../cmacs-input/cmacs-input.directive";
import * as i7 from "@angular/forms";
import * as i8 from "./components/cmacs-dropdown-trigger.directive";
function CmacsCompactTableAttachmentComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.ctaDropdownOption == null ? null : ctx_r1.ctaDropdownOption.length, " ");
} }
function CmacsCompactTableAttachmentComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(4);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dropdownTrigger", _r3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.ctaDropdownOption == null ? null : ctx_r2.ctaDropdownOption.length, " ");
} }
function CmacsCompactTableAttachmentComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18);
    i0.ɵɵelementStart(4, "i", 19);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_div_7_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r7); const dOpt_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.deleteOption(dOpt_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dOpt_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dOpt_r5);
} }
function CmacsCompactTableAttachmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, CmacsCompactTableAttachmentComponent_div_0_div_1_Template, 3, 1, "div", 2);
    i0.ɵɵtemplate(2, CmacsCompactTableAttachmentComponent_div_0_div_2_Template, 3, 2, "div", 3);
    i0.ɵɵelementStart(3, "cmacs-cta-dropdown", null, 4);
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "div", 6);
    i0.ɵɵtemplate(7, CmacsCompactTableAttachmentComponent_div_0_div_7_Template, 5, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "cmacs-tabset", 8);
    i0.ɵɵelementStart(9, "cmacs-tab", 9);
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8._onclickChooseFile(); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "cmacs-tab", 9);
    i0.ɵɵelementStart(13, "input", 11);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableAttachmentComponent_div_0_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.link = $event; })("keyup", function CmacsCompactTableAttachmentComponent_div_0_Template_input_keyup_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.validateUrl($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 12);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.embedLink(); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.inLineEdit);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.inLineEdit);
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
        this.inLineEdit = true;
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
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression);
        this.disabledEmbedLink = link.value.match(regex) ? false : true;
    }
}
CmacsCompactTableAttachmentComponent.ɵfac = function CmacsCompactTableAttachmentComponent_Factory(t) { return new (t || CmacsCompactTableAttachmentComponent)(); };
CmacsCompactTableAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption", inLineEdit: "inLineEdit" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["class", "cmacs-value", 4, "ngIf"], ["class", "cmacs-value", 3, "dropdownTrigger", 4, "ngIf"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["id", "button-choose-file", "cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 2, "min-width", "283.63px", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange", "keyup"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], [1, "cmacs-value"], [1, "iconUILarge-Attached"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsCompactTableAttachmentComponent_div_0_Template, 16, 12, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.ctaDropdownOption && ctx.conf);
    } }, directives: [i1.NgIf, i2.CmacsCtaDropdownComponent, i1.NgForOf, i3.CmacsTabSetComponent, i4.CmacsTabComponent, i5.CmacsButtonComponent, i6.CmacsInputDirective, i7.DefaultValueAccessor, i7.NgControlStatus, i7.NgModel, i8.CmacsDropdownTriggerDirective], styles: [".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.cmacs-value[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]{font-family:inherit;background-color:#fff;border:none;outline:none}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f5}.dropdown-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;gap:10px}.tag[_ngcontent-%COMP%]{max-width:180px;height:32px;border-radius:20px;display:flex;align-items:center;border:1px solid #dee0e5;padding:10px;justify-content:space-between}button[_ngcontent-%COMP%]{width:100%;height:34px}"] });
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
        }], inLineEdit: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0NyRywrQkFBNkM7SUFDekMsd0JBQW9DO0lBQUEsWUFDeEM7SUFBQSxpQkFBTTs7O0lBRGtDLGVBQ3hDO0lBRHdDLHlHQUN4Qzs7O0lBQ0EsK0JBQXlFO0lBQ3JFLHdCQUFvQztJQUFBLFlBQ3hDO0lBQUEsaUJBQU07Ozs7O0lBRmtCLHFDQUE0QjtJQUNaLGVBQ3hDO0lBRHdDLHlHQUN4Qzs7OztJQUlZLCtCQUF3RDtJQUNwRCxnQ0FDa0c7SUFBQSxZQUFRO0lBQUEsaUJBQU87SUFDakgsK0JBQThCO0lBQzFCLDZCQUEwRDtJQUE3QixrUEFBNEI7SUFBQyxpQkFBSTtJQUNsRSxpQkFBTTtJQUNWLGlCQUFNOzs7SUFKZ0csZUFBUTtJQUFSLDZCQUFROzs7O0lBWjlILDhCQUF1RDtJQUNu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QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xFLENBQUM7O3dIQTVDVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1BqRCx1RkFpQ007O1FBakNnQix3REFBK0I7O3VGRE94QyxvQ0FBb0M7Y0FMaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxpREFBaUQ7Z0JBQzlELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO2FBQzlEO3NDQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLG1CQUFtQjtrQkFBNUIsTUFBTTtZQUNHLGlCQUFpQjtrQkFBMUIsTUFBTTtZQUNFLFVBQVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUF0dGFjaG1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbmY6IGFueTtcclxuICBASW5wdXQoKSBjdGFEcm9wZG93bk9wdGlvbjogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgb25DaGFuZ2VBdHRhY2htZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2xpY2tDaG9vc2VGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgaW5MaW5lRWRpdCA9IHRydWU7XHJcblxyXG4gIGxpbmsgPSAnJztcclxuICBkaXNhYmxlZEVtYmVkTGluayA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiBjaGFuZ2VzLmN0YURyb3Bkb3duT3B0aW9uLmN1cnJlbnRWYWx1ZSAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIGNoYW5nZXMuY3RhRHJvcGRvd25PcHRpb24uY3VycmVudFZhbHVlWzBdID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5maW5kSW5kZXgob3B0ID0+IG9wdCA9PT0gb3B0aW9uKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtYmVkTGluaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY3RhRHJvcGRvd25PcHRpb24ucHVzaCh0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5saW5rID0gJyc7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25jbGlja0Nob29zZUZpbGUuZW1pdCh7IG9uY2xpY2tDaG9vc2VGaWxlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVVcmwobGluazogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gLyhodHRwcz86XFwvXFwvKD86d3d3XFwufCg/IXd3dykpW2EtekEtWjAtOV1bYS16QS1aMC05LV0rW2EtekEtWjAtOV1cXC5bXlxcc117Mix9fHd3d1xcLlthLXpBLVowLTldW2EtekEtWjAtOS1dK1thLXpBLVowLTldXFwuW15cXHNdezIsfXxodHRwcz86XFwvXFwvKD86d3d3XFwufCg/IXd3dykpW2EtekEtWjAtOV0rXFwuW15cXHNdezIsfXx3d3dcXC5bYS16QS1aMC05XStcXC5bXlxcc117Mix9KS9naTtcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChleHByZXNzaW9uKTtcclxuICAgIHRoaXMuZGlzYWJsZWRFbWJlZExpbmsgPSBsaW5rLnZhbHVlLm1hdGNoKHJlZ2V4KSA/IGZhbHNlIDogdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIndyYXBwZXJcIiAqbmdJZj1cImN0YURyb3Bkb3duT3B0aW9uICYmIGNvbmZcIj5cclxuICAgIDxkaXYgKm5nSWY9XCIhaW5MaW5lRWRpdFwiIGNsYXNzPVwiY21hY3MtdmFsdWVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUF0dGFjaGVkXCI+PC9pPnt7Y3RhRHJvcGRvd25PcHRpb24/Lmxlbmd0aH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJpbkxpbmVFZGl0XCIgW2Ryb3Bkb3duVHJpZ2dlcl09XCJkcm9wZG93blwiIGNsYXNzPVwiY21hY3MtdmFsdWVcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUF0dGFjaGVkXCI+PC9pPnt7Y3RhRHJvcGRvd25PcHRpb24/Lmxlbmd0aH19XHJcbiAgICA8L2Rpdj5cclxuICAgIDxjbWFjcy1jdGEtZHJvcGRvd24gI2Ryb3Bkb3duPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjdGEtZHJvcGRvd24tb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ1wiICpuZ0Zvcj1cImxldCBkT3B0IG9mIGN0YURyb3Bkb3duT3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTMlOyBoZWlnaHQ6IDI1cHg7bWF4LXdpZHRoOiAxODBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XCI+e3tkT3B0fX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1DbG9zZVwiIChjbGljayk9XCJkZWxldGVPcHRpb24oZE9wdClcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxjbWFjcy10YWJzZXQgc3R5bGU9XCJtYXJnaW4tdG9wOiAxN3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLXRhYiBjbWFjc1RpdGxlPVwie3tjb25mLnRhYjFMYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIm1pbi13aWR0aDogMjgzLjYzcHg7XCIgaWQ9XCJidXR0b24tY2hvb3NlLWZpbGVcIiBjbWFjcy1idXR0b24gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uXT1cInRydWVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByaW1hcnlcIiAoY2xpY2spPVwiX29uY2xpY2tDaG9vc2VGaWxlKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiY29uZi5kaXNhYmxlZEJ0blRhYjFcIj4ge3tjb25mLmJ0blRhYjFMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7Y29uZi50YWIyTGFiZWx9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDM0cHg7IG1hcmdpbi1ib3R0b206IDE0cHg7XCIgWyhuZ01vZGVsKV09XCJsaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cInZhbGlkYXRlVXJsKCRldmVudC50YXJnZXQpXCIgY21hY3MtaW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZEVtYmVkTGlua1wiIChjbGljayk9XCJlbWJlZExpbmsoKVwiPnt7Y29uZi5idG5UYWIyTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICAgIDwvY21hY3MtdGFic2V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9jbWFjcy1jdGEtZHJvcGRvd24+XHJcbjwvZGl2PiJdfQ==