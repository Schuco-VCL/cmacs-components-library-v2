import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../../cmacs-input/cmacs-input.directive";
import * as i2 from "@angular/forms";
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
CmacsCompactTableColumnTooltipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnTooltipComponent, selectors: [["cmacs-compact-table-column-tooltip"]], inputs: { field: "field", items: "items" }, outputs: { onFieldChanged: "onFieldChanged" }, features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 1, consts: [["id", "compactTableColumnTooltip", 1, "cmacs-compact-table-column-tooltip"], [1, "arrow-up"], [1, "item", "tooltip-input"], ["cmacs-input", "", 3, "ngModel", "ngModelChange", "focusout"]], template: function CmacsCompactTableColumnTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "input", 3);
        i0.ɵɵlistener("ngModelChange", function CmacsCompactTableColumnTooltipComponent_Template_input_ngModelChange_4_listener($event) { return ctx.field.display = $event; })("focusout", function CmacsCompactTableColumnTooltipComponent_Template_input_focusout_4_listener() { return ctx.updateDisplay(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.field.display);
    } }, directives: [i1.CmacsInputDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]{background-color:#fff;position:absolute;width:180px;left:calc(50% - 171px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.item[_ngcontent-%COMP%], .item-ac[_ngcontent-%COMP%]{padding:7px 10px;font-size:13px}.item[_ngcontent-%COMP%]:hover{background-color:#f2f7ff;cursor:pointer}.item-icon[_ngcontent-%COMP%]{font-size:18px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}  .cmacs-compact-table-column-tooltip .ant-menu-submenu-arrow{display:none}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVFyRSxNQUFNLE9BQU8sdUNBQXVDO0lBT2xEO1FBTEEsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBRy9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFFaEQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FB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QTJCLDRHQUFhLG1CQUFlLElBQTVCO1FBQTlDLGlCQUE4RTtRQUNoRixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBSG1CLGVBQTJCO1FBQTNCLDJDQUEyQjs7dUZETXZDLHVDQUF1QztjQUxuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLHFEQUFxRDtnQkFDbEUsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7YUFDbEU7c0NBSVUsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1lbnVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9jb2x1bW5NZW51VHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9UZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEVkaXRDb2x1bW5BY3Rpb24sIEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuZmllbGQucHJvcGVydHkgPSB0aGlzLmZpZWxkLmRpc3BsYXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7ZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IE51bWJlcihDb2x1bW5NZW51VHlwZS5Qcm9wZXJ0eVR5cGUpfSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpIHtcclxuICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKX0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZVR5cGUodmFsdWU6IENvbHVtbk1lbnVUeXBlKTogVGVtcGxhdGVUeXBle1xyXG4gICAgc3dpdGNoKHZhbHVlKXtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmllbGRDaGFuZ2VkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7ZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IE51bWJlcih2YWx1ZSl9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5jb2x1bW5PcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRWYWxpZGF0aW9uUnVsZXMoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlKSB7XHJcbiAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy5kYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMToge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy52YWxpZGF0aW9uUnVsZXMubnVtYmVyO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnZhbGlkYXRpb25SdWxlcy50ZXh0O1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDU6IHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA3OiB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKHZhbHVlIDogQ29sdW1uTWVudVR5cGUsIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAvLyBpdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSB0eXBlIG9mIHRoZSB0ZW1wbGF0ZSBtYXRjaGVzIHRoZSBjb2x1bW4gdHlwZVxyXG4gICAgc3dpdGNoKHZhbHVlKXtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBcIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ID5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIHRvb2x0aXAtaW5wdXRcIj5cclxuICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZmllbGQuZGlzcGxheVwiIChmb2N1c291dCk9XCJ1cGRhdGVEaXNwbGF5KClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSA8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcFwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcFwiXHJcbiAgW25nU3R5bGVdPVwieydoZWlnaHQnOmlzQWR2YW5jZWRDb25maWd1cmF0aW9uPycxNzRweCc6JzMzNHB4J31cIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiIWlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0b29sdGlwLWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImZpZWxkLmRpc3BsYXlcIiAoZm9jdXNvdXQpPVwidXBkYXRlRGlzcGxheSgpXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiIFttb2RlXT1cIid2ZXJ0aWNhbCdcIiBzdHlsZT1cImJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNbMF0uc3ViTWVudVwiPlxyXG4gICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICAgW3N0eWxlLmJvcmRlclRvcF09XCInMXB4IHNvbGlkICNkZWUwZTUgIWltcG9ydGFudCdcIlxyXG4gICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKGl0ZW0udmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKGl0ZW0udmFsdWUpXCI+XHJcbiAgICAgICAgICA8c3BhbiB0aXRsZT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj4gICAgICBcclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCIgY21hY3NSZXF1aXJlZD4ge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxUeXBlfX1cclxuICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiBnZXRJdGVtcygpXCIgdmFsdWU9XCJ7e19pdGVtLnZhbHVlfX1cIiBsYWJlbD1cInt7X2l0ZW0ubGFiZWx9fVwiPjwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKCkubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zN3B4O1wiPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFZhbGlkYXRpb259fVxyXG4gICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImdldFZhbGlkYXRpb25SdWxlcygpWzBdLnZhbHVlXCI+XHJcbiAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgaW5kIG9mIGdldFZhbGlkYXRpb25SdWxlcygpXCIgdmFsdWU9XCJ7e2luZC52YWx1ZX19XCIgbGFiZWw9XCJ7e2luZC5sYWJlbH19XCI+XHJcbiAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAtLT5cclxuIl19