import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cmacs-input/cmacs-input.directive";
import * as i3 from "@angular/forms";
import * as i4 from "../../../cmacs-menu/menu.directive";
import * as i5 from "../../../cmacs-menu/menu-item.directive";
import * as i6 from "../../../cmacs-form/form-label.component";
import * as i7 from "../../../cmacs-select/cmacs-select.component";
import * as i8 from "../../../cmacs-select/cmacs-option.component";
function CmacsCompactTableColumnTooltipComponent_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 7);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnTooltipComponent_div_2_ng_container_4_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r5); const item_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.fieldChanged(item_r3.value); });
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("border-top", "1px solid #dee0e5 !important");
    i0.ɵɵclassProp("selected-item", ctx_r2.isSelected(item_r3.value, ctx_r2.field.editTemplate));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CmacsCompactTableColumnTooltipComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "input", 4);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnTooltipComponent_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.field.display = $event; })("focusout", function CmacsCompactTableColumnTooltipComponent_div_2_Template_input_focusout_2_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.updateDisplay(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "ul", 5);
    i0.ɵɵtemplate(4, CmacsCompactTableColumnTooltipComponent_div_2_ng_container_4_Template, 6, 8, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.field.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", "vertical");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.items.columnOptions[0].subMenu);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_cmacs_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 12);
} if (rf & 2) {
    const _item_r11 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", _item_r11.value);
    i0.ɵɵpropertyInterpolate("label", _item_r11.label);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_div_5_cmacs_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 12);
} if (rf & 2) {
    const ind_r13 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", ind_r13.value);
    i0.ɵɵpropertyInterpolate("label", ind_r13.label);
} }
function CmacsCompactTableColumnTooltipComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "cmacs-form-label", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-select", 14);
    i0.ɵɵtemplate(4, CmacsCompactTableColumnTooltipComponent_div_3_div_5_cmacs_option_4_Template, 1, 2, "cmacs-option", 11);
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
    i0.ɵɵelementStart(1, "cmacs-form-label", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-select", 10);
    i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnTooltipComponent_div_3_Template_cmacs_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onChange($event); });
    i0.ɵɵtemplate(4, CmacsCompactTableColumnTooltipComponent_div_3_cmacs_option_4_Template, 1, 2, "cmacs-option", 11);
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
CmacsCompactTableColumnTooltipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnTooltipComponent, selectors: [["cmacs-compact-table-column-tooltip"]], inputs: { field: "field", items: "items" }, outputs: { onFieldChanged: "onFieldChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [["id", "compactTableColumnTooltip", 1, "cmacs-compact-table-column-tooltip", 3, "ngStyle"], [1, "arrow-up"], [4, "ngIf"], [1, "item", "tooltip-input"], ["cmacs-input", "", 3, "ngModel", "ngModelChange", "focusout"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "box-shadow", "none !important", 3, "mode"], [4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"], ["title", ""], ["cmacsRequired", "", 1, "item-ac", 2, "margin-top", "20px"], [1, "item-ac", 2, "top", "-30px", 3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"], [1, "item-ac", 2, "margin-top", "-37px"], [1, "item-ac", 2, "top", "-30px", 3, "ngModel"]], template: function CmacsCompactTableColumnTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsCompactTableColumnTooltipComponent_div_2_Template, 5, 3, "div", 2);
        i0.ɵɵtemplate(3, CmacsCompactTableColumnTooltipComponent_div_3_Template, 6, 4, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.isAdvancedConfiguration ? "174px" : "334px"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isAdvancedConfiguration);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isAdvancedConfiguration);
    } }, directives: [i1.NgStyle, i1.NgIf, i2.CmacsInputDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.CmacsMenuDirective, i1.NgForOf, i5.CmacsMenuItemDirective, i6.CmacsFormLabelComponent, i7.CmacsSelectComponent, i8.CmacsOptionComponent], styles: [".cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]{background-color:#fff;position:absolute;width:180px;left:calc(50% - 171px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.item[_ngcontent-%COMP%], .item-ac[_ngcontent-%COMP%]{padding:7px 10px;font-size:13px}.item[_ngcontent-%COMP%]:hover{background-color:#f2f7ff;cursor:pointer}.item-icon[_ngcontent-%COMP%]{font-size:18px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}  .cmacs-compact-table-column-tooltip .ant-menu-submenu-arrow{display:none}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lDTS9ELDZCQUFrRTtJQUNoRSw2QkFHdUM7SUFBbkMscVFBQWtDO0lBQ3BDLCtCQUFZO0lBQ1Ysb0JBQTZCO0lBQzdCLDRCQUFNO0lBQUEsWUFBYztJQUFBLGlCQUFPO0lBQzdCLGlCQUFPO0lBQ1QsaUJBQUs7SUFDUCwwQkFBZTs7OztJQVJULGVBQWtEO0lBQWxELDREQUFrRDtJQUNsRCw0RkFBa0U7SUFHL0QsZUFBcUI7SUFBckIsMkJBQXFCO0lBQ2xCLGVBQWM7SUFBZCxtQ0FBYzs7OztJQVo5QiwyQkFBc0M7SUFDcEMsOEJBQWdDO0lBQzlCLGdDQUE4RTtJQUEzRCwwT0FBMkIsc01BQUE7SUFBOUMsaUJBQThFO0lBQ2hGLGlCQUFNO0lBQ04sNkJBQWdIO0lBQzlHLGdIQVVlO0lBQ2pCLGlCQUFLO0lBQ1AsaUJBQU07OztJQWZpQixlQUEyQjtJQUEzQiw4Q0FBMkI7SUFFUSxlQUFtQjtJQUFuQixpQ0FBbUI7SUFDMUMsZUFBaUM7SUFBakMsK0RBQWlDOzs7SUFrQmhFLG1DQUE4Rzs7O0lBQS9ELGtEQUF1QjtJQUFDLGtEQUF1Qjs7O0lBTTVGLG1DQUNlOzs7SUFEd0MsZ0RBQXFCO0lBQUMsZ0RBQXFCOzs7SUFKdEcsMkJBQTZDO0lBQzNDLDRDQUE2RDtJQUFDLFlBQzlEO0lBQUEsaUJBQW1CO0lBQ25CLHdDQUE0RjtJQUMxRix1SEFDZTtJQUNqQixpQkFBZTtJQUNqQixpQkFBTTs7O0lBTjBELGVBQzlEO0lBRDhELG9GQUM5RDtJQUNrRCxlQUF5QztJQUF6QywrREFBeUM7SUFDM0QsZUFBdUI7SUFBdkIsc0RBQXVCOzs7O0lBWDNELDJCQUFxQztJQUNuQywyQ0FBMEU7SUFBQyxZQUMzRTtJQUFBLGlCQUFtQjtJQUNuQix3Q0FDcUM7SUFBbkMsOE9BQWtDO0lBQ2xDLGlIQUE4RztJQUNoSCxpQkFBZTtJQUNmLDhGQU9NO0lBQ1IsaUJBQU07OztJQWR1RSxlQUMzRTtJQUQyRSw2RUFDM0U7SUFDa0QsZUFBeUM7SUFBekMsOERBQXlDO0lBRXpELGVBQWE7SUFBYiwyQ0FBYTtJQUV6QyxlQUFxQztJQUFyQyw2REFBcUM7OztBRGxCL0MsTUFBTSxPQUFPLHVDQUF1QztJQU9sRDtRQUxBLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUcvQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO0lBRWhELENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQXFCO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU8sZUFBZSxDQUFDLEtBQXFCO1FBQzNDLFFBQU8sS0FBSyxFQUFDO1lBQ1gsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25ELEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUN6RCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3ZELEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztZQUNuRCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBcUI7UUFDaEMsSUFBSSxLQUFLLEtBQUssY0FBYyxDQUFDLHFCQUFxQixFQUFFO1lBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUMvQixLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO2FBQ3hDO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzthQUMxQztZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBc0IsRUFBRSxZQUEwQjtRQUMzRCwwRUFBMEU7UUFDMUUsUUFBTyxLQUFLLEVBQUM7WUFDWCxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLEtBQUssY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDMUUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3hFLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OEhBM0ZVLHVDQUF1Qzs0RUFBdkMsdUNBQXVDO1FDVnBELDhCQUNpRTtRQUMvRCx5QkFBNEI7UUFDNUIsd0ZBaUJNO1FBQ04sd0ZBZU07UUFDUixpQkFBTTs7UUFwQ0oscUdBQThEO1FBRXhELGVBQThCO1FBQTlCLG1EQUE4QjtRQWtCOUIsZUFBNkI7UUFBN0Isa0RBQTZCOzt1RkRYeEIsdUNBQXVDO2NBTG5ELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUscURBQXFEO2dCQUNsRSxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQzthQUNsRTtzQ0FJVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTWVudVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL2NvbHVtbk1lbnVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRWRpdENvbHVtbkFjdGlvbiwgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBAT3V0cHV0KCkgb25GaWVsZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDb2x1bW5BY3Rpb24+KCk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5maWVsZC5wcm9wZXJ0eSA9IHRoaXMuZmllbGQuZGlzcGxheS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKENvbHVtbk1lbnVUeXBlLlByb3BlcnR5VHlwZSl9KTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoe2ZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGV7XHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVUeXBlKHZhbHVlKTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtcygpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLmNvbHVtbk9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS52YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldFZhbGlkYXRpb25SdWxlcygpIHtcclxuICAgIHN3aXRjaCAodGhpcy5maWVsZC5lZGl0VGVtcGxhdGUpIHtcclxuICAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLmRhdGU7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5udW1iZXI7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLnRleHQ7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNToge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWUgOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcFwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcFwiXHJcbiAgW25nU3R5bGVdPVwieydoZWlnaHQnOmlzQWR2YW5jZWRDb25maWd1cmF0aW9uPycxNzRweCc6JzMzNHB4J31cIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiIWlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0b29sdGlwLWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImZpZWxkLmRpc3BsYXlcIiAoZm9jdXNvdXQpPVwidXBkYXRlRGlzcGxheSgpXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiIFttb2RlXT1cIid2ZXJ0aWNhbCdcIiBzdHlsZT1cImJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNbMF0uc3ViTWVudVwiPlxyXG4gICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICAgW3N0eWxlLmJvcmRlclRvcF09XCInMXB4IHNvbGlkICNkZWUwZTUgIWltcG9ydGFudCdcIlxyXG4gICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKGl0ZW0udmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKGl0ZW0udmFsdWUpXCI+XHJcbiAgICAgICAgICA8c3BhbiB0aXRsZT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj4gICAgICBcclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCIgY21hY3NSZXF1aXJlZD4ge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxUeXBlfX1cclxuICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiBnZXRJdGVtcygpXCIgdmFsdWU9XCJ7e19pdGVtLnZhbHVlfX1cIiBsYWJlbD1cInt7X2l0ZW0ubGFiZWx9fVwiPjwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKCkubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zN3B4O1wiPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFZhbGlkYXRpb259fVxyXG4gICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImdldFZhbGlkYXRpb25SdWxlcygpWzBdLnZhbHVlXCI+XHJcbiAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgaW5kIG9mIGdldFZhbGlkYXRpb25SdWxlcygpXCIgdmFsdWU9XCJ7e2luZC52YWx1ZX19XCIgbGFiZWw9XCJ7e2luZC5sYWJlbH19XCI+XHJcbiAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=