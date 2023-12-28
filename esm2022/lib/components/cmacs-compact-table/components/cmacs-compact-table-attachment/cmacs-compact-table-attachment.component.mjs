import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../../../cmacs-tabs/tabset.component";
import * as i4 from "../../../cmacs-tabs/tab.component";
import * as i5 from "../../../cmacs-button/cmacs-button.component";
import * as i6 from "../../../cmacs-input/cmacs-input.directive";
import * as i7 from "./components/cmacs-dropdown-trigger.directive";
import * as i8 from "./components/cmacs-cta-dropdown/cmacs-cta-dropdown.component";
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
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18)(4, "i", 19);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_div_7_Template_i_click_4_listener() { const restoredCtx = i0.ɵɵrestoreView(_r7); const dOpt_r5 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.deleteOption(dOpt_r5)); });
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(3, "cmacs-cta-dropdown", null, 4)(5, "div", 5)(6, "div", 6);
    i0.ɵɵtemplate(7, CmacsCompactTableAttachmentComponent_div_0_div_7_Template, 5, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "cmacs-tabset", 8)(9, "cmacs-tab", 9)(10, "button", 10);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8._onclickChooseFile()); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "cmacs-tab", 9)(13, "input", 11);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableAttachmentComponent_div_0_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.link = $event); })("keyup", function CmacsCompactTableAttachmentComponent_div_0_Template_input_keyup_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.validateUrl($event.target)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 12);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_0_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.embedLink()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()()()();
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
    static { this.ɵfac = function CmacsCompactTableAttachmentComponent_Factory(t) { return new (t || CmacsCompactTableAttachmentComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption", inLineEdit: "inLineEdit" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["class", "cmacs-value", 4, "ngIf"], ["class", "cmacs-value", 3, "dropdownTrigger", 4, "ngIf"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["id", "button-choose-file", "cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 2, "min-width", "283.63px", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange", "keyup"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], [1, "cmacs-value"], [1, "iconUILarge-Attached"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsCompactTableAttachmentComponent_div_0_Template, 16, 12, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.ctaDropdownOption && ctx.conf);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.CmacsTabSetComponent, i4.CmacsTabComponent, i5.CmacsButtonComponent, i6.CmacsInputDirective, i7.CmacsDropdownTriggerDirective, i8.CmacsCtaDropdownComponent], styles: [".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.cmacs-value[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]{padding:.5rem 1rem;font-family:inherit;background-color:#fff;border:none;cursor:pointer;outline:none}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f5}.dropdown-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;gap:10px}.tag[_ngcontent-%COMP%]{max-width:180px;height:32px;border-radius:20px;display:flex;align-items:center;border:1px solid #DEE0E5;padding:10px;justify-content:space-between}button[_ngcontent-%COMP%]{width:100%;height:34px}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableAttachmentComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-compact-table-attachment', template: "<div class=\"wrapper\" *ngIf=\"ctaDropdownOption && conf\">\r\n    <div *ngIf=\"!inLineEdit\" class=\"cmacs-value\">\r\n        <i class=\"iconUILarge-Attached\"></i>{{ctaDropdownOption?.length}}\r\n    </div>\r\n    <div *ngIf=\"inLineEdit\" [dropdownTrigger]=\"dropdown\" class=\"cmacs-value\">\r\n        <i class=\"iconUILarge-Attached\"></i>{{ctaDropdownOption?.length}}\r\n    </div>\r\n    <cmacs-cta-dropdown #dropdown>\r\n        <div id=\"cta-dropdown-options\">\r\n            <div class=\"dropdown-content\">\r\n                <div class=\"tag\" *ngFor=\"let dOpt of ctaDropdownOption\">\r\n                    <span\r\n                        style=\"width: 93%; height: 25px;max-width: 180px; overflow: hidden; text-overflow: ellipsis;\">{{dOpt}}</span>\r\n                    <div style=\"cursor: pointer;\">\r\n                        <i class=\"iconUILarge-Close\" (click)=\"deleteOption(dOpt)\"></i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <cmacs-tabset style=\"margin-top: 17px;\">\r\n                <cmacs-tab cmacsTitle=\"{{conf.tab1Label}}\">\r\n                    <button style=\"min-width: 283.63px;\" id=\"button-choose-file\" cmacs-button type=\"primary\"\r\n                        [action]=\"true\" role=\"button\" aria-label=\"primary\" (click)=\"_onclickChooseFile()\"\r\n                        [disabled]=\"conf.disabledBtnTab1\"> {{conf.btnTab1Label}}</button>\r\n                </cmacs-tab>\r\n                <cmacs-tab cmacsTitle=\"{{conf.tab2Label}}\">\r\n                    <input style=\"width: 100%; height: 34px; margin-bottom: 14px;\" [(ngModel)]=\"link\"\r\n                        (keyup)=\"validateUrl($event.target)\" cmacs-input />\r\n                    <button cmacs-button type=\"primary\" [action]=\"true\" role=\"button\" aria-label=\"primary\"\r\n                        [disabled]=\"disabledEmbedLink\" (click)=\"embedLink()\">{{conf.btnTab2Label}}</button>\r\n                </cmacs-tab>\r\n            </cmacs-tabset>\r\n        </div>\r\n    </cmacs-cta-dropdown>\r\n</div>", styles: [".wrapper{display:flex;justify-content:center}.cmacs-value{padding:.5rem 1rem;cursor:pointer}.dropdown-item{padding:.5rem 1rem;font-family:inherit;background-color:#fff;border:none;cursor:pointer;outline:none}.dropdown-item:hover{background-color:#f3f4f5}.dropdown-content{display:grid;grid-template-columns:auto auto;gap:10px}.tag{max-width:180px;height:32px;border-radius:20px;display:flex;align-items:center;border:1px solid #DEE0E5;padding:10px;justify-content:space-between}button{width:100%;height:34px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztJQ0NyRywrQkFBNkM7SUFDekMsd0JBQW9DO0lBQUEsWUFDeEM7SUFBQSxpQkFBTTs7O0lBRGtDLGVBQ3hDO0lBRHdDLHlHQUN4Qzs7O0lBQ0EsK0JBQXlFO0lBQ3JFLHdCQUFvQztJQUFBLFlBQ3hDO0lBQUEsaUJBQU07Ozs7O0lBRmtCLHFDQUE0QjtJQUNaLGVBQ3hDO0lBRHdDLHlHQUN4Qzs7OztJQUlZLCtCQUF3RCxlQUFBO0lBRThDLFlBQVE7SUFBQSxpQkFBTztJQUNqSCwrQkFBOEIsWUFBQTtJQUNHLDhPQUFTLGVBQUEsNEJBQWtCLENBQUEsSUFBQztJQUFDLGlCQUFJLEVBQUEsRUFBQTs7O0lBRmdDLGVBQVE7SUFBUiw2QkFBUTs7OztJQVo5SCw4QkFBdUQ7SUFDbkQsMkZBRU07SUFDTiwyRkFFTTtJQUNOLG1EQUE4QixhQUFBLGFBQUE7SUFHbEIsMkZBTU07SUFDVixpQkFBTTtJQUNOLHVDQUF3QyxtQkFBQSxrQkFBQTtJQUd1QixrTEFBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFDOUMsYUFBcUI7SUFBQSxpQkFBUyxFQUFBO0lBRXpFLHFDQUEyQyxpQkFBQTtJQUN3QixpUEFBa0IsMktBQ3BFLGVBQUEsa0NBQTBCLENBQUEsSUFEMEM7SUFBakYsaUJBQ3VEO0lBQ3ZELG1DQUN5RDtJQUF0QixtTEFBUyxlQUFBLG1CQUFXLENBQUEsSUFBQztJQUFDLGFBQXFCO0lBQUEsaUJBQVMsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOzs7SUEzQmpHLGVBQWlCO0lBQWpCLHlDQUFpQjtJQUdqQixlQUFnQjtJQUFoQix3Q0FBZ0I7SUFNd0IsZUFBb0I7SUFBcEIsa0RBQW9CO0lBUzNDLGVBQStCO0lBQS9CLDZEQUErQjtJQUVsQyxlQUFlO0lBQWYsNkJBQWUseUNBQUE7SUFDb0IsZUFBcUI7SUFBckIsd0RBQXFCO0lBRXJELGVBQStCO0lBQS9CLDZEQUErQjtJQUN5QixlQUFrQjtJQUFsQixxQ0FBa0I7SUFFN0MsZUFBZTtJQUFmLDZCQUFlLHNDQUFBO0lBQ00sZUFBcUI7SUFBckIsOENBQXFCOztBRHJCbEcsTUFBTSxPQUFPLG9DQUFvQztJQVcvQztRQVJTLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ25ELHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQUUzQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1Ysc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0lBRVQsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUNsSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN2RDtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLE1BQU0sVUFBVSxHQUFHLHFOQUFxTixDQUFDO1FBQ3pPLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEUsQ0FBQztxR0E1Q1Usb0NBQW9DO29FQUFwQyxvQ0FBb0M7WUNQakQsdUZBaUNNOztZQWpDZ0Isd0RBQStCOzs7dUZET3hDLG9DQUFvQztjQUxoRCxTQUFTOzJCQUNFLGdDQUFnQztzQ0FNakMsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNO1lBQ0UsVUFBVTtrQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQXR0YWNobWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgY29uZjogYW55O1xyXG4gIEBJbnB1dCgpIGN0YURyb3Bkb3duT3B0aW9uOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUF0dGFjaG1lbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja0Nob29zZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBpbkxpbmVFZGl0ID0gdHJ1ZTtcclxuXHJcbiAgbGluayA9ICcnO1xyXG4gIGRpc2FibGVkRW1iZWRMaW5rID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIGNoYW5nZXMuY3RhRHJvcGRvd25PcHRpb24uY3VycmVudFZhbHVlICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgY2hhbmdlcy5jdGFEcm9wZG93bk9wdGlvbi5jdXJyZW50VmFsdWVbMF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuY3RhRHJvcGRvd25PcHRpb24gPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmN0YURyb3Bkb3duT3B0aW9uLmZpbmRJbmRleChvcHQgPT4gb3B0ID09PSBvcHRpb24pO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VBdHRhY2htZW50cy5lbWl0KHRoaXMuY3RhRHJvcGRvd25PcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW1iZWRMaW5rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5wdXNoKHRoaXMubGluayk7XHJcbiAgICB0aGlzLmxpbmsgPSAnJztcclxuICAgIHRoaXMub25DaGFuZ2VBdHRhY2htZW50cy5lbWl0KHRoaXMuY3RhRHJvcGRvd25PcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgX29uY2xpY2tDaG9vc2VGaWxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbmNsaWNrQ2hvb3NlRmlsZS5lbWl0KHsgb25jbGlja0Nob29zZUZpbGU6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZVVybChsaW5rOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSAvKGh0dHBzPzpcXC9cXC8oPzp3d3dcXC58KD8hd3d3KSlbYS16QS1aMC05XVthLXpBLVowLTktXStbYS16QS1aMC05XVxcLlteXFxzXXsyLH18d3d3XFwuW2EtekEtWjAtOV1bYS16QS1aMC05LV0rW2EtekEtWjAtOV1cXC5bXlxcc117Mix9fGh0dHBzPzpcXC9cXC8oPzp3d3dcXC58KD8hd3d3KSlbYS16QS1aMC05XStcXC5bXlxcc117Mix9fHd3d1xcLlthLXpBLVowLTldK1xcLlteXFxzXXsyLH0pL2dpO1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGV4cHJlc3Npb24pO1xyXG4gICAgdGhpcy5kaXNhYmxlZEVtYmVkTGluayA9IGxpbmsudmFsdWUubWF0Y2gocmVnZXgpID8gZmFsc2UgOiB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiICpuZ0lmPVwiY3RhRHJvcGRvd25PcHRpb24gJiYgY29uZlwiPlxyXG4gICAgPGRpdiAqbmdJZj1cIiFpbkxpbmVFZGl0XCIgY2xhc3M9XCJjbWFjcy12YWx1ZVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQXR0YWNoZWRcIj48L2k+e3tjdGFEcm9wZG93bk9wdGlvbj8ubGVuZ3RofX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImluTGluZUVkaXRcIiBbZHJvcGRvd25UcmlnZ2VyXT1cImRyb3Bkb3duXCIgY2xhc3M9XCJjbWFjcy12YWx1ZVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQXR0YWNoZWRcIj48L2k+e3tjdGFEcm9wZG93bk9wdGlvbj8ubGVuZ3RofX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGNtYWNzLWN0YS1kcm9wZG93biAjZHJvcGRvd24+XHJcbiAgICAgICAgPGRpdiBpZD1cImN0YS1kcm9wZG93bi1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCIgKm5nRm9yPVwibGV0IGRPcHQgb2YgY3RhRHJvcGRvd25PcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5MyU7IGhlaWdodDogMjVweDttYXgtd2lkdGg6IDE4MHB4OyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcIj57e2RPcHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNsb3NlXCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihkT3B0KVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGNtYWNzLXRhYnNldCBzdHlsZT1cIm1hcmdpbi10b3A6IDE3cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMUxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwibWluLXdpZHRoOiAyODMuNjNweDtcIiBpZD1cImJ1dHRvbi1jaG9vc2UtZmlsZVwiIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiIChjbGljayk9XCJfb25jbGlja0Nob29zZUZpbGUoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjb25mLmRpc2FibGVkQnRuVGFiMVwiPiB7e2NvbmYuYnRuVGFiMUxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtdGFiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLXRhYiBjbWFjc1RpdGxlPVwie3tjb25mLnRhYjJMYWJlbH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMzRweDsgbWFyZ2luLWJvdHRvbTogMTRweDtcIiBbKG5nTW9kZWwpXT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwidmFsaWRhdGVVcmwoJGV2ZW50LnRhcmdldClcIiBjbWFjcy1pbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgW2FjdGlvbl09XCJ0cnVlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkRW1iZWRMaW5rXCIgKGNsaWNrKT1cImVtYmVkTGluaygpXCI+e3tjb25mLmJ0blRhYjJMYWJlbH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgICAgPC9jbWFjcy10YWJzZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2NtYWNzLWN0YS1kcm9wZG93bj5cclxuPC9kaXY+Il19