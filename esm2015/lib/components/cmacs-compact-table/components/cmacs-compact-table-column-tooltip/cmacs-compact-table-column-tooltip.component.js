import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cmacs-input/cmacs-input.directive";
import * as i3 from "@angular/forms";
import * as i4 from "../../../cmacs-menu/menu.directive";
import * as i5 from "../../../cmacs-menu/submenu.component";
import * as i6 from "../../../cmacs-form/form-label.component";
import * as i7 from "../../../cmacs-select/cmacs-select.component";
import * as i8 from "../../../cmacs-select/cmacs-option.component";
function CmacsCompactTableColumnTooltipComponent_div_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵelementStart(1, "li", 7);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnTooltipComponent_div_2_ul_3_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.fieldChanged(item_r3.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("mode", "vertical");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected-item", ctx_r2.isSelected(item_r3.value, ctx_r2.field.editTemplate));
    i0.ɵɵpropertyInterpolate("title", item_r3.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", item_r3.icon);
} }
function CmacsCompactTableColumnTooltipComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵelementStart(2, "input", 4);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnTooltipComponent_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.field.display = $event; })("focusout", function CmacsCompactTableColumnTooltipComponent_div_2_Template_input_focusout_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.updateDisplay(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCompactTableColumnTooltipComponent_div_2_ul_3_Template, 2, 5, "ul", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.field.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.columnOptions[0].subMenu);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_cmacs_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 11);
} if (rf & 2) {
    const _item_r11 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", _item_r11.value);
    i0.ɵɵpropertyInterpolate("label", _item_r11.label);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_div_5_cmacs_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 11);
} if (rf & 2) {
    const ind_r13 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", ind_r13.value);
    i0.ɵɵpropertyInterpolate("label", ind_r13.label);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "cmacs-form-label", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-select", 13);
    i0.ɵɵtemplate(4, CmacsCompactTableColumnTooltipComponent_div_3_div_5_cmacs_option_4_Template, 1, 2, "cmacs-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.items.advancedConfiguration.labelValidation, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r10.getValidationRules()[0].value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.getValidationRules());
} }
function CmacsCompactTableColumnTooltipComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "cmacs-form-label", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-select", 9);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnTooltipComponent_div_3_Template_cmacs_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onChange($event); });
    i0.ɵɵtemplate(4, CmacsCompactTableColumnTooltipComponent_div_3_cmacs_option_4_Template, 1, 2, "cmacs-option", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsCompactTableColumnTooltipComponent_div_3_div_5_Template, 5, 3, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.items.advancedConfiguration.labelType, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.field.editTemplate.toString());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.getItems());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getValidationRules().length > 0);
} }
const _c0 = function (a0) { return { "height": a0 }; };
export class CmacsCompactTableColumnTooltipComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
        this.isAdvancedConfiguration = false;
    }
    ngOnChanges(changes) {
        this.isAdvancedConfiguration = false;
    }
    updateDisplay() {
        this.field.property = this.field.display.toLowerCase().replace(' ', '_');
        this.onFieldChanged.emit({ field: this.field, columnMenu: Number(ColumnMenuType.PropertyType) });
    }
    onChange(value) {
        this.field.editTemplate = this.getTemplateType(value);
        this.onFieldChanged.emit({ field: this.field, columnMenu: Number(value) });
    }
    getTemplateType(value) {
        switch (value) {
            case ColumnMenuType.Date: return TemplateType.Date;
            case ColumnMenuType.Boolean: return TemplateType.Boolean;
            case ColumnMenuType.Number: return TemplateType.Number;
            case ColumnMenuType.Select: return TemplateType.Select;
            case ColumnMenuType.Date: return TemplateType.Date;
            case ColumnMenuType.String: return TemplateType.String;
            case ColumnMenuType.Time: return TemplateType.Time;
            default: return TemplateType.String;
        }
    }
    fieldChanged(value) {
        if (value !== ColumnMenuType.AdvancedConfiguration) {
            this.field.editTemplate = this.getTemplateType(value);
            this.onFieldChanged.emit({ field: this.field, columnMenu: Number(value) });
        }
        else {
            this.isAdvancedConfiguration = true;
        }
    }
    getItems() {
        return this.items.columnOptions.filter(item => item.value !== ColumnMenuType.AdvancedConfiguration);
    }
    getValidationRules() {
        switch (this.field.editTemplate) {
            case 0: {
                return this.items.validationRules.date;
            }
            case 1: {
                return [];
            }
            case 2: {
                return this.items.validationRules.number;
            }
            case 3: {
                return this.items.validationRules.text;
            }
            case 4: {
                return [];
            }
            case 5: {
                return [];
            }
            case 7: {
                return [];
            }
        }
    }
    isSelected(value, templateType) {
        // it will return true if the type of the template matches the column type
        switch (value) {
            case ColumnMenuType.Date: return templateType === TemplateType.Date;
            case ColumnMenuType.Boolean: return templateType === TemplateType.Boolean;
            case ColumnMenuType.Number: return templateType === TemplateType.Number;
            case ColumnMenuType.Select: return templateType === TemplateType.Select;
            case ColumnMenuType.Date: return templateType === TemplateType.Date;
            case ColumnMenuType.String: return templateType === TemplateType.String;
            case ColumnMenuType.Time: return templateType === TemplateType.Time;
            default: return false;
        }
    }
}
CmacsCompactTableColumnTooltipComponent.ɵfac = function CmacsCompactTableColumnTooltipComponent_Factory(t) { return new (t || CmacsCompactTableColumnTooltipComponent)(); };
CmacsCompactTableColumnTooltipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnTooltipComponent, selectors: [["cmacs-compact-table-column-tooltip"]], inputs: { field: "field", items: "items" }, outputs: { onFieldChanged: "onFieldChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [["id", "compactTableColumnTooltip", 1, "cmacs-compact-table-column-tooltip", 3, "ngStyle"], [1, "arrow-up"], [4, "ngIf"], [1, "item", "tooltip-input"], ["cmacs-input", "", 3, "ngModel", "ngModelChange", "focusout"], ["cmacs-menu", "", 3, "mode", 4, "ngFor", "ngForOf"], ["cmacs-menu", "", 3, "mode"], ["cmacs-submenu", "", 1, "menu-item", "column-menu", 3, "title", "cmacsIcon", "click"], ["cmacsRequired", "", 1, "item-ac", 2, "margin-top", "20px"], [1, "item-ac", 2, "top", "-30px", 3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"], [1, "item-ac", 2, "margin-top", "-37px"], [1, "item-ac", 2, "top", "-30px", 3, "ngModel"]], template: function CmacsCompactTableColumnTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsCompactTableColumnTooltipComponent_div_2_Template, 4, 2, "div", 2);
        i0.ɵɵtemplate(3, CmacsCompactTableColumnTooltipComponent_div_3_Template, 6, 4, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.isAdvancedConfiguration ? "174px" : "334px"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isAdvancedConfiguration);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedConfiguration);
    } }, directives: [i1.NgStyle, i1.NgIf, i2.CmacsInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i1.NgForOf, i4.CmacsMenuDirective, i5.CmacsSubMenuComponent, i6.CmacsFormLabelComponent, i7.CmacsSelectComponent, i8.CmacsOptionComponent], styles: [".cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]{background-color:#fff;position:absolute;width:180px;left:calc(50% - 171px/2 - .5px);top:44px;filter:drop-shadow(0 3px 7px rgba(59,63,70,.2));flex:none;order:1;flex-grow:0;z-index:11}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.tooltip-input[_ngcontent-%COMP%]{border-bottom:1px solid #dee0e5;border-left:2px solid #dee0e5;border-right:2px solid #dee0e5}.item[_ngcontent-%COMP%], .item-ac[_ngcontent-%COMP%]{padding:7px 10px;font-size:13px}.item[_ngcontent-%COMP%]:hover{background-color:#f2f7ff;cursor:pointer}.item-icon[_ngcontent-%COMP%]{font-size:18px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}  .cmacs-compact-table-column-tooltip .ant-menu-submenu-arrow{display:none}.cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker{display:none}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableColumnTooltipComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-compact-table-column-tooltip',
                templateUrl: './cmacs-compact-table-column-tooltip.component.html',
                styleUrls: ['./cmacs-compact-table-column-tooltip.component.css']
            }]
    }], function () { return []; }, { field: [{
            type: Input
        }], items: [{
            type: Input
        }], onFieldChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lDS2pFLDZCQUF1RjtJQUNyRiw2QkFDc0Y7SUFBbkMsMlBBQWtDO0lBQ3JGLGlCQUFLO0lBQ1AsaUJBQUs7Ozs7SUFKVSxpQ0FBbUI7SUFDZ0IsZUFBa0U7SUFBbEUsNEZBQWtFO0lBQ2hILGdEQUFzQjtJQUFDLG1EQUF5Qjs7OztJQU50RCwyQkFBc0M7SUFDcEMsNkJBQStCO0lBQzdCLGdDQUE4RTtJQUEzRCwwT0FBMkIsc01BQUE7SUFBOUMsaUJBQThFO0lBQ2hGLGlCQUFLO0lBQ0wsNEZBSUs7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QUUscURBQXFEO2dCQUNsRSxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQzthQUNsRTtzQ0FJVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTWVudVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL2NvbHVtbk1lbnVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRWRpdENvbHVtbkFjdGlvbiwgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBAT3V0cHV0KCkgb25GaWVsZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5BY3Rpb24+KCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5maWVsZC5wcm9wZXJ0eSA9IHRoaXMuZmllbGQuZGlzcGxheS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKENvbHVtbk1lbnVUeXBlLlByb3BlcnR5VHlwZSl9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoe2ZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGV7XHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVUeXBlKHZhbHVlKTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLmNvbHVtbk9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldFZhbGlkYXRpb25SdWxlcygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLmRhdGU7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNToge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWUgOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcFwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcFwiXHJcbiAgW25nU3R5bGVdPVwieydoZWlnaHQnOmlzQWR2YW5jZWRDb25maWd1cmF0aW9uPycxNzRweCc6JzMzNHB4J31cIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiIWlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8bGkgY2xhc3M9XCJpdGVtIHRvb2x0aXAtaW5wdXRcIj5cclxuICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZmllbGQuZGlzcGxheVwiIChmb2N1c291dCk9XCJ1cGRhdGVEaXNwbGF5KClcIiAvPlxyXG4gICAgPC9saT5cclxuICAgIDx1bCBjbWFjcy1tZW51IFttb2RlXT1cIid2ZXJ0aWNhbCdcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcy5jb2x1bW5PcHRpb25zWzBdLnN1Yk1lbnVcIj5cclxuICAgICAgPGxpIGNtYWNzLXN1Ym1lbnUgY2xhc3M9XCJtZW51LWl0ZW0gY29sdW1uLW1lbnVcIiBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKGl0ZW0udmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgIHRpdGxlPVwie3tpdGVtLmxhYmVsfX1cIiBjbWFjc0ljb249XCJ7e2l0ZW0uaWNvbn19XCIgKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChpdGVtLnZhbHVlKVwiPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNsYXNzPVwiaXRlbS1hY1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIiBjbWFjc1JlcXVpcmVkPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFR5cGV9fVxyXG4gICAgPC9jbWFjcy1mb3JtLWxhYmVsPlxyXG4gICAgPGNtYWNzLXNlbGVjdCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cInRvcDogLTMwcHg7XCIgW25nTW9kZWxdPVwiZmllbGQuZWRpdFRlbXBsYXRlLnRvU3RyaW5nKClcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IF9pdGVtIG9mIGdldEl0ZW1zKClcIiB2YWx1ZT1cInt7X2l0ZW0udmFsdWV9fVwiIGxhYmVsPVwie3tfaXRlbS5sYWJlbH19XCI+PC9jbWFjcy1vcHRpb24+XHJcbiAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgIDxkaXYgKm5nSWY9XCJnZXRWYWxpZGF0aW9uUnVsZXMoKS5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNsYXNzPVwiaXRlbS1hY1wiIHN0eWxlPVwibWFyZ2luLXRvcDogLTM3cHg7XCI+IHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVmFsaWRhdGlvbn19XHJcbiAgICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgICAgPGNtYWNzLXNlbGVjdCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cInRvcDogLTMwcHg7XCIgW25nTW9kZWxdPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKClbMF0udmFsdWVcIj5cclxuICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBpbmQgb2YgZ2V0VmFsaWRhdGlvblJ1bGVzKClcIiB2YWx1ZT1cInt7aW5kLnZhbHVlfX1cIiBsYWJlbD1cInt7aW5kLmxhYmVsfX1cIj5cclxuICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==