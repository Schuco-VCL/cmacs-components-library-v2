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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQyxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7OztBQVFyRSxNQUFNLE9BQU8sdUNBQXVDO0lBT2xEO1FBTEEsNEJBQXVCLEdBQVksS0FBSyxDQUFDO1FBRy9CLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFFaEQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FB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QztRQUM5QixnQ0FBOEU7UUFBM0QsdUtBQTJCLDRHQUFhLG1CQUFlLElBQTVCO1FBQTlDLGlCQUE4RTtRQUNoRixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBSG1CLGVBQTJCO1FBQTNCLDJDQUEyQjs7dUZETXZDLHVDQUF1QztjQUxuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsV0FBVyxFQUFFLHFEQUFxRDtnQkFDbEUsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7YUFDbEU7c0NBSVUsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1lbnVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9jb2x1bW5NZW51VHlwZS5lbnVtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9UZW1wbGF0ZVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IEVkaXRDb2x1bW5BY3Rpb24sIEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLXRvb2x0aXAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtblRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuZmllbGQucHJvcGVydHkgPSB0aGlzLmZpZWxkLmRpc3BsYXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcclxuICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7ZmllbGQ6IHRoaXMuZmllbGQsIGNvbHVtbk1lbnU6IE51bWJlcihDb2x1bW5NZW51VHlwZS5Qcm9wZXJ0eVR5cGUpfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0VGVtcGxhdGVUeXBlKHZhbHVlOiBDb2x1bW5NZW51VHlwZSk6IFRlbXBsYXRlVHlwZXtcclxuICAgIHN3aXRjaCh2YWx1ZSl7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpZWxkQ2hhbmdlZCh2YWx1ZTogQ29sdW1uTWVudVR5cGUpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoe2ZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWUgOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uVG9vbHRpcFwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tdG9vbHRpcFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gIDxkaXYgPlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW0gdG9vbHRpcC1pbnB1dFwiPlxyXG4gICAgICA8aW5wdXQgY21hY3MtaW5wdXQgWyhuZ01vZGVsKV09XCJmaWVsZC5kaXNwbGF5XCIgKGZvY3Vzb3V0KT1cInVwZGF0ZURpc3BsYXkoKVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Ub29sdGlwXCIgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi10b29sdGlwXCJcclxuICBbbmdTdHlsZV09XCJ7J2hlaWdodCc6aXNBZHZhbmNlZENvbmZpZ3VyYXRpb24/JzE3NHB4JzonMzM0cHgnfVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCIhaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpdGVtIHRvb2x0aXAtaW5wdXRcIj5cclxuICAgICAgPGlucHV0IGNtYWNzLWlucHV0IFsobmdNb2RlbCldPVwiZmllbGQuZGlzcGxheVwiIChmb2N1c291dCk9XCJ1cGRhdGVEaXNwbGF5KClcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY21hY3MtbWVudSBjbGFzcz1cImNtYWNzLWNvbnRleHQtbWVudS1jb21wYWN0LXRhYmxlXCIgW21vZGVdPVwiJ3ZlcnRpY2FsJ1wiIHN0eWxlPVwiYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuY29sdW1uT3B0aW9uc1swXS5zdWJNZW51XCI+XHJcbiAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbVxyXG4gICAgICAgICAgICBbc3R5bGUuYm9yZGVyVG9wXT1cIicxcHggc29saWQgI2RlZTBlNSAhaW1wb3J0YW50J1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZC1pdGVtXT1cImlzU2VsZWN0ZWQoaXRlbS52YWx1ZSwgZmllbGQuZWRpdFRlbXBsYXRlKVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgICAgIDxzcGFuIHRpdGxlPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cInt7aXRlbS5pY29ufX1cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPiAgICAgIFxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiaXNBZHZhbmNlZENvbmZpZ3VyYXRpb25cIj5cclxuICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNsYXNzPVwiaXRlbS1hY1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtcIiBjbWFjc1JlcXVpcmVkPiB7e2l0ZW1zLmFkdmFuY2VkQ29uZmlndXJhdGlvbi5sYWJlbFR5cGV9fVxyXG4gICAgPC9jbWFjcy1mb3JtLWxhYmVsPlxyXG4gICAgPGNtYWNzLXNlbGVjdCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cInRvcDogLTMwcHg7XCIgW25nTW9kZWxdPVwiZmllbGQuZWRpdFRlbXBsYXRlLnRvU3RyaW5nKClcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxjbWFjcy1vcHRpb24gKm5nRm9yPVwibGV0IF9pdGVtIG9mIGdldEl0ZW1zKClcIiB2YWx1ZT1cInt7X2l0ZW0udmFsdWV9fVwiIGxhYmVsPVwie3tfaXRlbS5sYWJlbH19XCI+PC9jbWFjcy1vcHRpb24+XHJcbiAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgIDxkaXYgKm5nSWY9XCJnZXRWYWxpZGF0aW9uUnVsZXMoKS5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNsYXNzPVwiaXRlbS1hY1wiIHN0eWxlPVwibWFyZ2luLXRvcDogLTM3cHg7XCI+IHt7aXRlbXMuYWR2YW5jZWRDb25maWd1cmF0aW9uLmxhYmVsVmFsaWRhdGlvbn19XHJcbiAgICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgICAgPGNtYWNzLXNlbGVjdCBjbGFzcz1cIml0ZW0tYWNcIiBzdHlsZT1cInRvcDogLTMwcHg7XCIgW25nTW9kZWxdPVwiZ2V0VmFsaWRhdGlvblJ1bGVzKClbMF0udmFsdWVcIj5cclxuICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBpbmQgb2YgZ2V0VmFsaWRhdGlvblJ1bGVzKClcIiB2YWx1ZT1cInt7aW5kLnZhbHVlfX1cIiBsYWJlbD1cInt7aW5kLmxhYmVsfX1cIj5cclxuICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+IC0tPlxyXG4iXX0=