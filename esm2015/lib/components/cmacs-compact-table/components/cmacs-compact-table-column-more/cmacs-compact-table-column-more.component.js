import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../../cmacs-menu/menu.directive";
import * as i2 from "@angular/common";
import * as i3 from "../../../cmacs-menu/submenu.component";
import * as i4 from "../../../cmacs-menu/menu-item.directive";
function CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r8); const submenu_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(3); return ctx_r7.fieldChanged(submenu_r6.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const submenu_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("selected-item", ctx_r5.isSelected(submenu_r6.value, ctx_r5.field.editTemplate));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", submenu_r6.icon, " compact-table-more-icon");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(submenu_r6.label);
} }
function CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵelementStart(6, "ul", 9);
    i0.ɵɵtemplate(7, CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_li_7_Template, 5, 6, "li", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", item_r1.icon, " compact-table-more-icon");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r1.subMenu);
} }
function CmacsCompactTableColumnMoreComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 12);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_ng_container_4_ng_template_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r12); const item_r1 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.fieldChanged(item_r1.value); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("", item_r1.icon, " compact-table-more-icon");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function CmacsCompactTableColumnMoreComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_Template, 8, 5, "li", 4);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_ng_container_4_ng_template_2_Template, 5, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.subMenu.length)("ngIfElse", _r3);
} }
export class CmacsCompactTableColumnMoreComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
    }
    fieldChanged(value) {
        if (value !== ColumnMenuType.AdvancedConfiguration) {
            let newType = this.getTemplateType(value);
            if (newType !== null) {
                this.field.editTemplate = newType;
            }
            this.onFieldChanged.emit({ field: this.field, columnMenu: Number(value) });
        }
        else {
            this.isAdvancedConfiguration = true;
        }
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
            default: return null;
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
CmacsCompactTableColumnMoreComponent.ɵfac = function CmacsCompactTableColumnMoreComponent_Factory(t) { return new (t || CmacsCompactTableColumnMoreComponent)(); };
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 5, vars: 1, consts: [["id", "compactTableColumnMore", 1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu", 2, "padding-top", "2px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", ""], ["title", ""], ["id", "compactTableColumnMore"], [2, "margin-top", "5px", "padding-top", "0"], ["cmacs-menu-item", "", "class", "cmacs-compact-table-more-li-submenu", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 1, "cmacs-compact-table-more-li-submenu", 3, "click"], ["cmacs-menu-item", "", 3, "click"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "ul", 2);
        i0.ɵɵtemplate(4, CmacsCompactTableColumnMoreComponent_ng_container_4_Template, 4, 2, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.items.columnOptions);
    } }, directives: [i1.CmacsMenuDirective, i2.NgForOf, i2.NgIf, i3.CmacsSubMenuComponent, i4.CmacsMenuItemDirective], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{position:absolute;left:calc(100% - 211px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .cmacs-compact-table-more-li-submenu[_ngcontent-%COMP%]{margin:0;border-bottom:1px solid #dee0e5!important;padding-bottom:0!important}  .cmacs-compact-table-column-more li .ant-menu-submenu-title,   .cmacs-compact-table-more-li-submenu .ant-menu-submenu-title{height:40px!important;line-height:40px!important;margin-block:0;border-top:none;box-shadow:none}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   li.ant-menu-submenu[_ngcontent-%COMP%]{border-top:none!important;border-right:none!important}.cmacs-compact-table-column-more[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .cmacs-compact-table-more-li-submenu[_ngcontent-%COMP%]:last-child{border-bottom:none!important}  .cmacs-compact-table-more-li-submenu{margin-top:0!important;padding-top:0!important;height:40px!important;line-height:40px!important;margin-bottom:0!important}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}  .menu-item .ant-menu-submenu-arrow{display:none}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}.compact-table-more-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:6px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCompactTableColumnMoreComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-compact-table-column-more',
                templateUrl: './cmacs-compact-table-column-more.component.html',
                styleUrls: ['./cmacs-compact-table-column-more.component.css']
            }]
    }], function () { return []; }, { items: [{
            type: Input
        }], field: [{
            type: Input
        }], onFieldChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O0lDYXZELDhCQUkwQztJQUF0Qyw0UUFBcUM7SUFDdkMsNEJBQU07SUFDSixvQkFBd0Q7SUFDeEQsNEJBQU07SUFBQSxZQUFpQjtJQUFBLGlCQUFPO0lBQ2hDLGlCQUFPO0lBQ1QsaUJBQUs7Ozs7SUFQRCwrRkFBcUU7SUFJbEUsZUFBZ0Q7SUFBaEQsMEVBQWdEO0lBQzdDLGVBQWlCO0lBQWpCLHNDQUFpQjs7O0lBaEJqQyw2QkFFbUQ7SUFDakQsK0JBQVk7SUFDVixvQkFBcUQ7SUFDckQsNEJBQU07SUFBQSxZQUFjO0lBQUEsaUJBQU87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Q0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7d0hBL0NVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO1FDVGpELDhCQUF5RTtRQUN2RSx5QkFBNEI7UUFFNUIsMkJBQUs7UUFDSCw2QkFBb0U7UUFDbEUsdUdBZ0NlO1FBQ2pCLGlCQUFLO1FBQ1AsaUJBQU07UUFDUixpQkFBTTs7UUFuQytCLGVBQXNCO1FBQXRCLGlEQUFzQjs7dUZESTlDLG9DQUFvQztjQUxoRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLGtEQUFrRDtnQkFDL0QsU0FBUyxFQUFFLENBQUMsaURBQWlELENBQUM7YUFDL0Q7c0NBR1UsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sdW1uTWVudVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL2NvbHVtbk1lbnVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2VudW1zL1RlbXBsYXRlVHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRWRpdENvbHVtbkFjdGlvbiwgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Nb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xyXG4gIEBPdXRwdXQoKSBvbkZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENvbHVtbkFjdGlvbj4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGZpZWxkQ2hhbmdlZCh2YWx1ZTogQ29sdW1uTWVudVR5cGUpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gQ29sdW1uTWVudVR5cGUuQWR2YW5jZWRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgIGxldCBuZXdUeXBlID0gdGhpcy5nZXRUZW1wbGF0ZVR5cGUodmFsdWUpO1xyXG4gICAgICBpZiAobmV3VHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuZmllbGQuZWRpdFRlbXBsYXRlID0gbmV3VHlwZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQoeyBmaWVsZDogdGhpcy5maWVsZCwgY29sdW1uTWVudTogTnVtYmVyKHZhbHVlKSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNBZHZhbmNlZENvbmZpZ3VyYXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZVR5cGUodmFsdWU6IENvbHVtbk1lbnVUeXBlKTogVGVtcGxhdGVUeXBlIHwgbnVsbCB7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiBUZW1wbGF0ZVR5cGUuQm9vbGVhbjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5OdW1iZXI6IHJldHVybiBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlN0cmluZzogcmV0dXJuIFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWQodmFsdWUgOiBDb2x1bW5NZW51VHlwZSwgdGVtcGxhdGVUeXBlOiBUZW1wbGF0ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIC8vIGl0IHdpbGwgcmV0dXJuIHRydWUgaWYgdGhlIHR5cGUgb2YgdGhlIHRlbXBsYXRlIG1hdGNoZXMgdGhlIGNvbHVtbiB0eXBlXHJcbiAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkRhdGU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5EYXRlO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLkJvb2xlYW46IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLk51bWJlcjtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TZWxlY3Q6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TZWxlY3Q7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuU3RyaW5nO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlRpbWU6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5UaW1lO1xyXG4gICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtbk1vcmVcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8IS0tIHJlZ3VsYXIgY29sdW1uIG9wdGlvbnMgLS0+XHJcbiAgPGRpdj5cclxuICAgIDx1bCBjbWFjcy1tZW51IGNsYXNzPVwiY21hY3MtY29udGV4dC1tZW51XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogMnB4O1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNcIj5cclxuICAgICAgICA8bGkgY21hY3Mtc3VibWVudVxyXG4gICAgICAgICAgICBjbWFjc0NvbnRleHRNZW51XHJcbiAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5zdWJNZW51Lmxlbmd0aDsgZWxzZSBtZW51VGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIHRpdGxlPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cInt7aXRlbS5pY29ufX0gY29tcGFjdC10YWJsZS1tb3JlLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtbk1vcmVcIj5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPVwibWFyZ2luLXRvcDogNXB4OyBwYWRkaW5nLXRvcDogMFwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHN1Ym1lbnUgb2YgaXRlbS5zdWJNZW51XCJcclxuICAgICAgICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXNTZWxlY3RlZChzdWJtZW51LnZhbHVlLCBmaWVsZC5lZGl0VGVtcGxhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1jb21wYWN0LXRhYmxlLW1vcmUtbGktc3VibWVudVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmaWVsZENoYW5nZWQoc3VibWVudS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInt7c3VibWVudS5pY29ufX0gY29tcGFjdC10YWJsZS1tb3JlLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7c3VibWVudS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbWVudVRlbXBsYXRlPlxyXG4gICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbVxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19IGNvbXBhY3QtdGFibGUtbW9yZS1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPiAgICBcclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=