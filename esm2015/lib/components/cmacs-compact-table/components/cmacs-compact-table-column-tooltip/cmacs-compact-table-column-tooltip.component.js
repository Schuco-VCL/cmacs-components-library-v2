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
        this.onFieldChanged.emit({ field: this.field, columnMenu: Number(ColumnMenuType.PropertyType) });
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
    } }, directives: [i1.CmacsInputDirective, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".cmacs-compact-table-column-tooltip[_ngcontent-%COMP%]{background-color:#fff;position:absolute;width:180px;left:calc(50% - 171px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11;box-shadow:0 3px 7px rgb(59 63 70/20%)!important}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}.tooltip-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:12px;height:28px}.item[_ngcontent-%COMP%], .item-ac[_ngcontent-%COMP%]{padding:7px 10px;font-size:13px}.item[_ngcontent-%COMP%]:hover{background-color:#f2f7ff;cursor:pointer}.item-icon[_ngcontent-%COMP%]{font-size:18px}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}  .cmacs-compact-table-column-tooltip .ant-menu-submenu-arrow{display:none}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVFyRSxNQUFNLE9BQU8sdUNBQXVDO0lBT2xEO1FBTEEsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBRy9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFFaEQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FB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MkI7O3VGRE12Qyx1Q0FBdUM7Y0FMbkQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFdBQVcsRUFBRSxxREFBcUQ7Z0JBQ2xFLFNBQVMsRUFBRSxDQUFDLG9EQUFvRCxDQUFDO2FBQ2xFO3NDQUlVLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlcixJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZpZWxkOiBGaWVsZDtcclxuICBASW5wdXQoKSBpdGVtczogYW55O1xyXG4gIEBPdXRwdXQoKSBvbkZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENvbHVtbkFjdGlvbj4oKTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoe2ZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIoQ29sdW1uTWVudVR5cGUuUHJvcGVydHlUeXBlKX0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGV7XHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IENvbHVtbk1lbnVUeXBlKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IENvbHVtbk1lbnVUeXBlLkFkdmFuY2VkQ29uZmlndXJhdGlvbikge1xyXG4gICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZ2V0VGVtcGxhdGVUeXBlKHZhbHVlKTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHtmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkKHZhbHVlIDogQ29sdW1uTWVudVR5cGUsIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAvLyBpdCB3aWxsIHJldHVybiB0cnVlIGlmIHRoZSB0eXBlIG9mIHRoZSB0ZW1wbGF0ZSBtYXRjaGVzIHRoZSBjb2x1bW4gdHlwZVxyXG4gICAgc3dpdGNoKHZhbHVlKXtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5Cb29sZWFuOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU2VsZWN0O1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuVGltZTtcclxuICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXBcIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ID5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIHRvb2x0aXAtaW5wdXRcIj5cclxuICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZmllbGQuZGlzcGxheVwiIChmb2N1c291dCk9XCJ1cGRhdGVEaXNwbGF5KClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSA8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcFwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcFwiXHJcbiAgW25nU3R5bGVdPVwieydoZWlnaHQnOmlzQWR2YW5jZWRDb25maWd1cmF0aW9uPycxNzRweCc6JzMzNHB4J31cIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiIWlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0b29sdGlwLWlucHV0XCI+XHJcbiAgICAgIDxpbnB1dCBjbWFjcy1pbnB1dCBbKG5nTW9kZWwpXT1cImZpZWxkLmRpc3BsYXlcIiAoZm9jdXNvdXQpPVwidXBkYXRlRGlzcGxheSgpXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiIFttb2RlXT1cIid2ZXJ0aWNhbCdcIiBzdHlsZT1cImJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNbMF0uc3ViTWVudVwiPlxyXG4gICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICAgW3N0eWxlLmJvcmRlclRvcF09XCInMXB4IHNvbGlkICNkZWUwZTUgIWltcG9ydGFudCdcIlxyXG4gICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKGl0ZW0udmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKGl0ZW0udmFsdWUpXCI+XHJcbiAgICAgICAgICA8c3BhbiB0aXRsZT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj4gICAgICBcclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImlzQWR2YW5jZWRDb25maWd1cmF0aW9uXCI+XHJcbiAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7XCIgY21hY3NSZXF1aXJlZD4ge3tpdGVtcy5hZHZhbmNlZENvbmZpZ3VyYXRpb24ubGFiZWxUeXBlfX1cclxuICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImZpZWxkLmVkaXRUZW1wbGF0ZS50b1N0cmluZygpXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBfaXRlbSBvZiBnZXRJdGVtcygpXCIgdmFsdWU9XCJ7e19pdGVtLnZhbHVlfX1cIiBsYWJlbD1cInt7X2l0ZW0ubGFiZWx9fVwiPjwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKCkubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0zN3B4O1wiPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFZhbGlkYXRpb259fVxyXG4gICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgIDxjbWFjcy1zZWxlY3QgY2xhc3M9XCJpdGVtLWFjXCIgc3R5bGU9XCJ0b3A6IC0zMHB4O1wiIFtuZ01vZGVsXT1cImdldFZhbGlkYXRpb25SdWxlcygpWzBdLnZhbHVlXCI+XHJcbiAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdGb3I9XCJsZXQgaW5kIG9mIGdldFZhbGlkYXRpb25SdWxlcygpXCIgdmFsdWU9XCJ7e2luZC52YWx1ZX19XCIgbGFiZWw9XCJ7e2luZC5sYWJlbH19XCI+XHJcbiAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PiAtLT5cclxuIl19