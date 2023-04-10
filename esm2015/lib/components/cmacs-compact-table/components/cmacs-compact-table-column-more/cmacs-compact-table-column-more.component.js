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
    i0.ɵɵclassMap(submenu_r6.icon);
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
    i0.ɵɵproperty("menuWrapperClassName", "compact-table-more-submenu-ul-wrapper")("menuClassName", "compact-table-more-submenu-ul");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", item_r1.subMenu);
} }
function CmacsCompactTableColumnMoreComponent_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
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
    i0.ɵɵclassMap(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
function CmacsCompactTableColumnMoreComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_ng_container_4_li_1_Template, 8, 7, "li", 4);
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
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 5, vars: 1, consts: [["id", "compactTableColumnMore", 1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 1, "cmacs-context-menu-compact-table", 2, "padding-top", "2px", "min-width", "155px"], [4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", "cmacsContextMenu", "", 3, "menuWrapperClassName", "menuClassName"], ["title", ""], ["id", "compactTableColumnMore"], [1, "cmacs-context-menu-compact-table"], ["cmacs-menu-item", "", 3, "selected-item", "click", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 3, "click"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.CmacsMenuDirective, i2.NgForOf, i2.NgIf, i3.CmacsSubMenuComponent, i4.CmacsMenuItemDirective], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{position:absolute;left:calc(100% - 211px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}  .menu-item .ant-menu-submenu-arrow{display:none}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}.compact-table-more-icon[_ngcontent-%COMP%]{font-size:18px;margin-right:6px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7O0lDZ0J2RCw4QkFHMEM7SUFBdEMsNFFBQXFDO0lBQ3ZDLDRCQUFNO0lBQ0osb0JBQWdDO0lBQ2hDLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQyxpQkFBTztJQUNULGlCQUFLOzs7O0lBTkQsK0ZBQXFFO0lBR2xFLGVBQXdCO0lBQXhCLDhCQUF3QjtJQUNyQixlQUFpQjtJQUFqQixzQ0FBaUI7OztJQWpCakMsNkJBSW1EO0lBQ2pELCtCQUFZO0lBQ1Ysb0JBQTZCO0lBQzdCLDRCQUFNO0lBQUEsWUFBYztJQUFBLGlCQUFP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S0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNwRSxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ3hFLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEUsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzt3SEEvQ1Usb0NBQW9DO3lFQUFwQyxvQ0FBb0M7UUNUakQsOEJBQXlFO1FBQ3ZFLHlCQUE0QjtRQUU1QiwyQkFBSztRQUNILDZCQUMrQztRQUM3Qyx1R0FpQ2U7UUFDakIsaUJBQUs7UUFDUCxpQkFBTTtRQUNSLGlCQUFNOztRQXBDK0IsZUFBc0I7UUFBdEIsaURBQXNCOzt1RkRHOUMsb0NBQW9DO2NBTGhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRDtzQ0FHVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtbk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZmllbGRDaGFuZ2VkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgbGV0IG5ld1R5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIGlmIChuZXdUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSBuZXdUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGUgfCBudWxsIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZCh2YWx1ZSA6IENvbHVtbk1lbnVUeXBlLCB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdHlwZSBvZiB0aGUgdGVtcGxhdGUgbWF0Y2hlcyB0aGUgY29sdW1uIHR5cGVcclxuICAgIHN3aXRjaCh2YWx1ZSl7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gIDwhLS0gcmVndWxhciBjb2x1bW4gb3B0aW9ucyAtLT5cclxuICA8ZGl2PlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgY2xhc3M9XCJjbWFjcy1jb250ZXh0LW1lbnUtY29tcGFjdC10YWJsZVwiXHJcbiAgICAgICAgc3R5bGU9XCJwYWRkaW5nLXRvcDogMnB4OyBtaW4td2lkdGg6IDE1NXB4XCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMuY29sdW1uT3B0aW9uc1wiPlxyXG4gICAgICAgIDxsaSBjbWFjcy1zdWJtZW51XHJcbiAgICAgICAgICAgIFttZW51V3JhcHBlckNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwtd3JhcHBlcidcIlxyXG4gICAgICAgICAgICBbbWVudUNsYXNzTmFtZV09XCInY29tcGFjdC10YWJsZS1tb3JlLXN1Ym1lbnUtdWwnXCJcclxuICAgICAgICAgICAgY21hY3NDb250ZXh0TWVudVxyXG4gICAgICAgICAgICAqbmdJZj1cIml0ZW0uc3ViTWVudS5sZW5ndGg7IGVsc2UgbWVudVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiB0aXRsZT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e2l0ZW0uaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNtYWNzLWNvbnRleHQtbWVudS1jb21wYWN0LXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbVxyXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc3VibWVudSBvZiBpdGVtLnN1Yk1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWQtaXRlbV09XCJpc1NlbGVjdGVkKHN1Ym1lbnUudmFsdWUsIGZpZWxkLmVkaXRUZW1wbGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKHN1Ym1lbnUudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ7e3N1Ym1lbnUuaWNvbn19XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57e3N1Ym1lbnUubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI21lbnVUZW1wbGF0ZT5cclxuICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICAgICAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKGl0ZW0udmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwie3tpdGVtLmljb259fVwiPjwvaT5cclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj4gICAgXHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19