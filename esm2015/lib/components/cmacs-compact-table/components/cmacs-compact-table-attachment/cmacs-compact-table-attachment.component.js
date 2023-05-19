import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/cmacs-dropdown-trigger.directive";
import * as i2 from "./components/cmacs-cta-dropdown/cmacs-cta-dropdown.component";
import * as i3 from "@angular/common";
import * as i4 from "../../../cmacs-tabs/tabset.component";
import * as i5 from "../../../cmacs-tabs/tab.component";
import * as i6 from "../../../cmacs-button/cmacs-button.component";
import * as i7 from "../../../cmacs-input/cmacs-input.directive";
import * as i8 from "@angular/forms";
function CmacsCompactTableAttachmentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "span", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵelementStart(4, "i", 14);
    i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_div_8_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r4); const dOpt_r2 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.deleteOption(dOpt_r2); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dOpt_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dOpt_r2);
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
CmacsCompactTableAttachmentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableAttachmentComponent, selectors: [["cmacs-compact-table-attachment"]], inputs: { conf: "conf", ctaDropdownOption: "ctaDropdownOption" }, outputs: { onChangeAttachments: "onChangeAttachments", onclickChooseFile: "onclickChooseFile" }, decls: 17, vars: 12, consts: [[1, "wrapper"], [1, "cmacs-value", 3, "dropdownTrigger"], [1, "iconUILarge-Attached"], ["dropdown", ""], ["id", "cta-dropdown-options"], [1, "dropdown-content"], ["class", "tag", 4, "ngFor", "ngForOf"], [2, "margin-top", "17px"], [3, "cmacsTitle"], ["cmacs-button", "", "type", "primary", "role", "button", "aria-label", "primary", 3, "action", "disabled", "click"], ["cmacs-input", "", 2, "width", "100%", "height", "34px", "margin-bottom", "14px", 3, "ngModel", "ngModelChange"], [1, "tag"], [2, "width", "93%", "height", "25px", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis"], [2, "cursor", "pointer"], [1, "iconUILarge-Close", 3, "click"]], template: function CmacsCompactTableAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "cmacs-cta-dropdown", null, 3);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtemplate(8, CmacsCompactTableAttachmentComponent_div_8_Template, 5, 1, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "cmacs-tabset", 7);
        i0.ɵɵelementStart(10, "cmacs-tab", 8);
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_Template_button_click_11_listener() { return ctx._onclickChooseFile(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "cmacs-tab", 8);
        i0.ɵɵelementStart(14, "input", 10);
        i0.ɵɵlistener("ngModelChange", function CmacsCompactTableAttachmentComponent_Template_input_ngModelChange_14_listener($event) { return ctx.link = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 9);
        i0.ɵɵlistener("click", function CmacsCompactTableAttachmentComponent_Template_button_click_15_listener() { return ctx.embedLink(); });
        i0.ɵɵtext(16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dropdownTrigger", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.ctaDropdownOption.length, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.ctaDropdownOption);
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("cmacsTitle", ctx.conf.tab1Label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("action", true)("disabled", ctx.conf.disabledBtnTab1);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.conf.btnTab1Label, "");
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("cmacsTitle", ctx.conf.tab2Label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.link);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("action", true)("disabled", ctx.link === "");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.conf.btnTab2Label);
    } }, directives: [i1.CmacsDropdownTriggerDirective, i2.CmacsCtaDropdownComponent, i3.NgForOf, i4.CmacsTabSetComponent, i5.CmacsTabComponent, i6.CmacsButtonComponent, i7.CmacsInputDirective, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgModel], styles: [".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.cmacs-value[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{padding:.5rem 1rem;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]{font-family:inherit;background-color:#fff;border:none;outline:none}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f5}.dropdown-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;gap:10px}.tag[_ngcontent-%COMP%]{width:auto;height:32px;border-radius:20px;display:flex;align-items:center;border:1px solid #dee0e5;padding:10px}button[_ngcontent-%COMP%]{width:100%;height:34px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDUS9ELCtCQUF3RDtJQUNwRCxnQ0FDa0c7SUFBQSxZQUFRO0lBQUEsaUJBQU87SUFDakgsK0JBQThCO0lBQzFCLDZCQUEwRDtJQUE3QiwyT0FBNEI7SUFBQyxpQkFBSTtJQUNsRSxpQkFBTTtJQUNWLGlCQUFNOzs7SUFKZ0csZUFBUTtJQUFSLDZCQUFROztBREg5SCxNQUFNLE9BQU8sb0NBQW9DO0lBUS9DO1FBTFMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDbkQsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV0RCxTQUFJLEdBQVUsRUFBRSxDQUFDO0lBQ0QsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFhO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBRyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzt3SEE3QlUsb0NBQW9DO3lFQUFwQyxvQ0FBb0M7UUNQakQsOEJBQXFCO1FBQ2pCLDhCQUFzRDtRQUFBLHVCQUNiO1FBQUEsWUFDekM7UUFBQSxpQkFBTTtRQUVOLG1EQUE4QjtRQUMxQiw4QkFBK0I7UUFDM0IsOEJBQThCO1FBQzFCLHFGQU1NO1FBQ1YsaUJBQU07UUFDTix1Q0FBd0M7UUFDcEMscUNBQTJDO1FBQ3ZDLGtDQUF1SjtRQUFqRSxrSEFBUyx3QkFBb0IsSUFBQztRQUFvQyxhQUFxQjtRQUFBLGlCQUFTO1FBQzFMLGlCQUFZO1FBQ1oscUNBQTJDO1FBQ3ZDLGtDQUFnRztRQUFqQyw0SkFBa0I7UUFBakYsaUJBQWdHO1FBQ2hHLGtDQUNtRDtRQUF0QixrSEFBUyxlQUFXLElBQUM7UUFBQyxhQUFxQjtRQUFBLGlCQUFTO1FBQ3JGLGlCQUFZO1FBQ2hCLGlCQUFlO1FBQ25CLGlCQUFNO1FBRVYsaUJBQXFCO1FBQ3pCLGlCQUFNOzs7UUE1QkcsZUFBNEI7UUFBNUIscUNBQTRCO1FBQ1EsZUFDekM7UUFEeUMsNERBQ3pDO1FBSzhDLGVBQW9CO1FBQXBCLCtDQUFvQjtRQVMzQyxlQUErQjtRQUEvQiwwREFBK0I7UUFDRixlQUFlO1FBQWYsNkJBQWUsc0NBQUE7UUFBcUcsZUFBcUI7UUFBckIscURBQXFCO1FBRXRLLGVBQStCO1FBQS9CLDBEQUErQjtRQUN5QixlQUFrQjtRQUFsQixrQ0FBa0I7UUFDN0MsZUFBZTtRQUFmLDZCQUFlLDZCQUFBO1FBQ0EsZUFBcUI7UUFBckIsMkNBQXFCOzt1RkRoQi9FLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLGlEQUFpRDtnQkFDOUQsU0FBUyxFQUFFLENBQUMsZ0RBQWdELENBQUM7YUFDOUQ7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWF0dGFjaG1lbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQXR0YWNobWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgQElucHV0KCkgY29uZjogYW55O1xyXG4gIEBJbnB1dCgpIGN0YURyb3Bkb3duT3B0aW9uOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZUF0dGFjaG1lbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja0Nob29zZUZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbGluazpzdHJpbmcgPSAnJztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGRlbGV0ZU9wdGlvbihvcHRpb246c3RyaW5nKXtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jdGFEcm9wZG93bk9wdGlvbi5maW5kSW5kZXgob3B0ID0+IG9wdCA9PT0gb3B0aW9uKTtcclxuICAgIGlmKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmN0YURyb3Bkb3duT3B0aW9uLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUF0dGFjaG1lbnRzLmVtaXQodGhpcy5jdGFEcm9wZG93bk9wdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWJlZExpbmsoKXtcclxuICAgIHRoaXMuY3RhRHJvcGRvd25PcHRpb24ucHVzaCh0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5saW5rID0gJyc7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQXR0YWNobWVudHMuZW1pdCh0aGlzLmN0YURyb3Bkb3duT3B0aW9uKTtcclxuICB9XHJcblxyXG4gIF9vbmNsaWNrQ2hvb3NlRmlsZSgpIHtcclxuICAgIHRoaXMub25jbGlja0Nob29zZUZpbGUuZW1pdCh7b25jbGlja0Nob29zZUZpbGU6dHJ1ZX0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBbZHJvcGRvd25UcmlnZ2VyXT1cImRyb3Bkb3duXCIgY2xhc3M9XCJjbWFjcy12YWx1ZVwiPjxpXHJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvblVJTGFyZ2UtQXR0YWNoZWRcIj48L2k+e3tjdGFEcm9wZG93bk9wdGlvbi5sZW5ndGh9fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGNtYWNzLWN0YS1kcm9wZG93biAjZHJvcGRvd24+XHJcbiAgICAgICAgPGRpdiBpZD1cImN0YS1kcm9wZG93bi1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCIgKm5nRm9yPVwibGV0IGRPcHQgb2YgY3RhRHJvcGRvd25PcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA5MyU7IGhlaWdodDogMjVweDttYXgtd2lkdGg6IDE4MHB4OyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcIj57e2RPcHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNsb3NlXCIgKGNsaWNrKT1cImRlbGV0ZU9wdGlvbihkT3B0KVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGNtYWNzLXRhYnNldCBzdHlsZT1cIm1hcmdpbi10b3A6IDE3cHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMUxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIFthY3Rpb25dPVwidHJ1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicHJpbWFyeVwiKGNsaWNrKT1cIl9vbmNsaWNrQ2hvb3NlRmlsZSgpXCIgW2Rpc2FibGVkXT1cImNvbmYuZGlzYWJsZWRCdG5UYWIxXCI+IHt7Y29uZi5idG5UYWIxTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2NvbmYudGFiMkxhYmVsfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAzNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4O1wiIFsobmdNb2RlbCldPVwibGlua1wiIGNtYWNzLWlucHV0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gdHlwZT1cInByaW1hcnlcIiBbYWN0aW9uXT1cInRydWVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibGluayA9PT0gJydcIiAoY2xpY2spPVwiZW1iZWRMaW5rKClcIj57e2NvbmYuYnRuVGFiMkxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3MtdGFiPlxyXG4gICAgICAgICAgICA8L2NtYWNzLXRhYnNldD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2NtYWNzLWN0YS1kcm9wZG93bj5cclxuPC9kaXY+Il19