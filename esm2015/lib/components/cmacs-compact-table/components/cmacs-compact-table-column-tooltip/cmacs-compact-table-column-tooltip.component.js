import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
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
    i0.ɵɵclassProp("selected-item", item_r3.value === ctx_r2.field.editTemplate);
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
        this.onFieldChanged.emit(this.field);
    }
    onChange(value) {
        this.field.editTemplate = Number(value);
        this.onFieldChanged.emit(this.field);
    }
    fieldChanged(value) {
        if (value !== ColumnMenuType.AdvancedConfiguration) {
            this.field.editTemplate = value;
            this.onFieldChanged.emit(this.field);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7SUNNckUsNkJBQXVGO0lBQ3JGLDZCQUNzRjtJQUFuQywyUEFBa0M7SUFDckYsaUJBQUs7SUFDUCxpQkFBSzs7OztJQUpVLGlDQUFtQjtJQUNnQixlQUF5RDtJQUF6RCw0RUFBeUQ7SUFDdkcsZ0RBQXNCO0lBQUMsbURBQXlCOzs7O0lBTnRELDJCQUFzQztJQUNwQyw2QkFBK0I7SUFDN0IsZ0NBQThFO0lBQTNELDBPQUEyQixzTUFBQTtJQUE5QyxpQkFBOEU7SUFDaEYsaUJBQUs7SUFDTCw0RkFJSztJQUNQLGlCQUFNOzs7SUFQaUIsZUFBMkI7SUFBM0IsOENBQTJCO0lBRUksZUFBaUM7SUFBakMsK0RBQWlDOzs7SUFXbkYsbUNBQThHOzs7SUFBL0Qsa0RBQXVCO0lBQUMsa0RBQXVCOzs7SUFNNUYsbUNBQ2U7OztJQUR3QyxnREFBcUI7SUFBQyxnREFBcUI7OztJQUp0RywyQkFBNkM7SUFDM0MsNENBQTZEO0lBQUMsWUFDOUQ7SUFBQSxpQkFBbUI7SUFDbkIsd0NBQTRGO0lBQzFGLHVIQUNlO0lBQ2pCLGlCQUFlO0lBQ2pCLGlCQUFNOzs7SUFOMEQsZUFDOUQ7SUFEOEQsb0ZBQzlEO0lBQ2tELGVBQXlDO0lBQXpDLCtEQUF5QztJQUMzRCxlQUF1QjtJQUF2QixzREFBdUI7Ozs7SUFYM0QsMkJBQXFDO0lBQ25DLDJDQUEwRTtJQUFDLFlBQzNFO0lBQUEsaUJBQW1CO0lBQ25CLHVDQUNxQztJQUFuQyw4T0FBa0M7SUFDbEMsaUhBQThHO0lBQ2hILGlCQUFlO0lBQ2YsOEZBT007SUFDUixpQkFBTTs7O0lBZHVFLGVBQzNFO0lBRDJFLDZFQUMzRTtJQUNrRCxlQUF5QztJQUF6Qyw4REFBeUM7SUFFekQsZUFBYTtJQUFiLDJDQUFhO0lBRXpDLGVBQXFDO0lBQXJDLDZEQUFxQzs7O0FEWC9DLE1BQU0sT0FBTyx1Q0FBdUM7SUFPbEQ7UUFMQSw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFHL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBRXJDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO1lBQy9CLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7YUFDeEM7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2FBQzFDO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzthQUN4QztZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ04sT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO0lBQ0gsQ0FBQzs7OEhBaEVVLHVDQUF1Qzs0RUFBdkMsdUNBQXVDO1FDVHBELDhCQUNpRTtRQUMvRCx5QkFBNEI7UUFDNUIsd0ZBU007UUFDTix3RkFlTTtRQUNSLGlCQUFNOztRQTVCSixxR0FBOEQ7UUFFeEQsZUFBOEI7UUFBOUIsbURBQThCO1FBVTlCLGVBQTZCO1FBQTdCLGtEQUE2Qjs7dUZESnhCLHVDQUF1QztjQUxuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLHFEQUFxRDtnQkFDbEUsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7YUFDbEU7c0NBSVUsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1lbnVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9jb2x1bW5NZW51VHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgaXNBZHZhbmNlZENvbmZpZ3VyYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBAT3V0cHV0KCkgb25GaWVsZENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpZWxkPigpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuZmllbGQucHJvcGVydHkgPSB0aGlzLmZpZWxkLmRpc3BsYXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh0aGlzLmZpZWxkKTtcclxuICB9XHJcblxyXG4gIGZpZWxkQ2hhbmdlZCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQodGhpcy5maWVsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuY29sdW1uT3B0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsaWRhdGlvblJ1bGVzKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMuZGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMudmFsaWRhdGlvblJ1bGVzLm51bWJlcjtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMudGV4dDtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDQ6IHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNzoge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBcIlxyXG4gIFtuZ1N0eWxlXT1cInsnaGVpZ2h0Jzppc0FkdmFuY2VkQ29uZmlndXJhdGlvbj8nMTc0cHgnOiczMzRweCd9XCI+XHJcbiAgPGRpdiBjbGFzcz1cImFycm93LXVwXCI+PC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIiFpc0FkdmFuY2VkQ29uZmlndXJhdGlvblwiPlxyXG4gICAgPGxpIGNsYXNzPVwiaXRlbSB0b29sdGlwLWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImZpZWxkLmRpc3BsYXlcIiAoZm9jdXNvdXQpPVwidXBkYXRlRGlzcGxheSgpXCIgLz5cclxuICAgIDwvbGk+XHJcbiAgICA8dWwgY21hY3MtbWVudSBbbW9kZV09XCIndmVydGljYWwnXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51XCI+XHJcbiAgICAgIDxsaSBjbWFjcy1zdWJtZW51IGNsYXNzPVwibWVudS1pdGVtIGNvbHVtbi1tZW51XCIgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXRlbS52YWx1ZSA9PT0gZmllbGQuZWRpdFRlbXBsYXRlXCJcclxuICAgICAgICB0aXRsZT1cInt7aXRlbS5sYWJlbH19XCIgY21hY3NJY29uPVwie3tpdGVtLmljb259fVwiIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCIgY21hY3NSZXF1aXJlZD4ge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxUeXBlfX1cclxuICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiBnZXRJdGVtcygpXCIgdmFsdWU9XCJ7e19pdGVtLnZhbHVlfX1cIiBsYWJlbD1cInt7X2l0ZW0ubGFiZWx9fVwiPjwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKCkubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zN3B4O1wiPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFZhbGlkYXRpb259fVxyXG4gICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImdldFZhbGlkYXRpb25SdWxlcygpWzBdLnZhbHVlXCI+XHJcbiAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgaW5kIG9mIGdldFZhbGlkYXRpb25SdWxlcygpXCIgdmFsdWU9XCJ7e2luZC52YWx1ZX19XCIgbGFiZWw9XCJ7e2luZC5sYWJlbH19XCI+XHJcbiAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=