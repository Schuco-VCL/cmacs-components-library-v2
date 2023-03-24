import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../cmacs-menu/menu.directive";
import * as i3 from "../../../cmacs-menu/submenu.component";
function CmacsCompactTableColumnMoreComponent_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵelementStart(1, "li", 8);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_ul_3_li_1_ul_2_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r8); const submenu_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(3); return ctx_r7.fieldChanged(submenu_r6.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const submenu_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("mode", "vertical");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected-item", ctx_r5.isSelected(submenu_r6.value, ctx_r5.field.editTemplate));
    i0.ɵɵpropertyInterpolate("title", submenu_r6.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", submenu_r6.icon);
} }
function CmacsCompactTableColumnMoreComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_ul_3_li_1_ul_2_Template, 2, 5, "ul", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", item_r1.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", item_r1.subMenu);
} }
function CmacsCompactTableColumnMoreComponent_ul_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_ul_3_ng_template_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r12); const item_r1 = i0.ɵɵnextContext().$implicit; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.fieldChanged(item_r1.value); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("title", item_r1.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", item_r1.icon);
} }
function CmacsCompactTableColumnMoreComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_ul_3_li_1_Template, 3, 3, "li", 4);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_ul_3_ng_template_2_Template, 1, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵproperty("mode", "vertical");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.subMenu.length > 0)("ngIfElse", _r3);
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
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 4, vars: 1, consts: [["id", "compactTableColumnMore", 1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 3, "mode", 4, "ngFor", "ngForOf"], ["cmacs-menu", "", 3, "mode"], ["cmacs-submenu", "", 3, "title", "cmacsIcon", 4, "ngIf", "ngIfElse"], ["menuTemplate", ""], ["cmacs-submenu", "", 3, "title", "cmacsIcon"], ["id", "compactTableColumnMore"], ["cmacs-submenu", "", 1, "column-menu", "menu-item", 3, "title", "cmacsIcon", "click"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵtemplate(3, CmacsCompactTableColumnMoreComponent_ul_3_Template, 4, 3, "ul", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.items.columnOptions);
    } }, directives: [i1.NgForOf, i2.CmacsMenuDirective, i1.NgIf, i3.CmacsSubMenuComponent], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{position:absolute;left:calc(100% - 211px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}  .menu-item .ant-menu-submenu-arrow{display:none}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}.column-menu[_ngcontent-%COMP%]{height:44px;margin-top:-1px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7SUNLM0QsNkJBQXdFO0lBQ3RFLDZCQUMrRjtJQUF0QyxrUUFBcUM7SUFDOUYsaUJBQUs7SUFDUCxpQkFBSzs7OztJQUpVLGlDQUFtQjtJQUNnQixlQUFxRTtJQUFyRSwrRkFBcUU7SUFDbkgsbURBQXlCO0lBQUMsc0RBQTRCOzs7SUFKOUQsNkJBQXNIO0lBQ3BILDhCQUFpQztJQUMvQiw2RkFJSztJQUNQLGlCQUFNO0lBQ1IsaUJBQUs7OztJQVJhLGdEQUFzQjtJQUFDLG1EQUF5QjtJQUVQLGVBQWU7SUFBZix5Q0FBZTs7OztJQVF4RSw2QkFDc0Y7SUFBbkMsaVJBQWtDO0lBQ3JGLGlCQUFLOzs7SUFESCxnREFBc0I7SUFBQyxtREFBeUI7OztJQVp0RCw2QkFBNEU7SUFDMUUsd0ZBUUs7SUFDTCwySUFJYztJQUNoQixpQkFBSzs7OztJQWZVLGlDQUFtQjtJQUNvQyxlQUErQjtJQUEvQixpREFBK0IsaUJBQUE7O0FESXpHLE1BQU0sT0FBTyxvQ0FBb0M7SUFLL0M7UUFKQSw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFHL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQUNoRCxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQXFCO1FBQ2hDLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRTtZQUNsRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0wsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQztTQUNyQztJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsS0FBcUI7UUFDM0MsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkQsS0FBSyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ3pELEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdkQsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ25ELEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN2RCxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkQsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQXNCLEVBQUUsWUFBMEI7UUFDM0QsMEVBQTBFO1FBQzFFLFFBQU8sS0FBSyxFQUFDO1lBQ1gsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNwRSxLQUFLLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQzFFLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDeEUsS0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN4RSxLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3BFLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDeEUsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksQ0FBQztZQUNwRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7O3dIQS9DVSxvQ0FBb0M7eUVBQXBDLG9DQUFvQztRQ1RqRCw4QkFBeUU7UUFDdkUseUJBQTRCO1FBRTVCLDJCQUFLO1FBQ0gsbUZBZUs7UUFDUCxpQkFBTTtRQUNSLGlCQUFNOztRQWpCa0QsZUFBc0I7UUFBdEIsaURBQXNCOzt1RkRLakUsb0NBQW9DO2NBTGhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRDtzQ0FHVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2x1bW5NZW51VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvY29sdW1uTWVudVR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZW51bXMvVGVtcGxhdGVUeXBlLmVudW0nO1xyXG5pbXBvcnQgeyBFZGl0Q29sdW1uQWN0aW9uLCBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtbk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0Q29sdW1uQWN0aW9uPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgZmllbGRDaGFuZ2VkKHZhbHVlOiBDb2x1bW5NZW51VHlwZSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgbGV0IG5ld1R5cGUgPSB0aGlzLmdldFRlbXBsYXRlVHlwZSh2YWx1ZSk7XHJcbiAgICAgIGlmIChuZXdUeXBlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSBuZXdUeXBlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25GaWVsZENoYW5nZWQuZW1pdCh7IGZpZWxkOiB0aGlzLmZpZWxkLCBjb2x1bW5NZW51OiBOdW1iZXIodmFsdWUpIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRlbXBsYXRlVHlwZSh2YWx1ZTogQ29sdW1uTWVudVR5cGUpOiBUZW1wbGF0ZVR5cGUgfCBudWxsIHtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIFRlbXBsYXRlVHlwZS5Cb29sZWFuO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLk51bWJlcjogcmV0dXJuIFRlbXBsYXRlVHlwZS5OdW1iZXI7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU2VsZWN0OiByZXR1cm4gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuU3RyaW5nOiByZXR1cm4gVGVtcGxhdGVUeXBlLlN0cmluZztcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5UaW1lOiByZXR1cm4gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZCh2YWx1ZSA6IENvbHVtbk1lbnVUeXBlLCB0ZW1wbGF0ZVR5cGU6IFRlbXBsYXRlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gaXQgd2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGUgdHlwZSBvZiB0aGUgdGVtcGxhdGUgbWF0Y2hlcyB0aGUgY29sdW1uIHR5cGVcclxuICAgIHN3aXRjaCh2YWx1ZSl7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuRGF0ZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkRhdGU7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuQm9vbGVhbjogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLkJvb2xlYW47XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuTnVtYmVyOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuTnVtYmVyO1xyXG4gICAgICBjYXNlIENvbHVtbk1lbnVUeXBlLlNlbGVjdDogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlNlbGVjdDtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5EYXRlOiByZXR1cm4gdGVtcGxhdGVUeXBlID09PSBUZW1wbGF0ZVR5cGUuRGF0ZTtcclxuICAgICAgY2FzZSBDb2x1bW5NZW51VHlwZS5TdHJpbmc6IHJldHVybiB0ZW1wbGF0ZVR5cGUgPT09IFRlbXBsYXRlVHlwZS5TdHJpbmc7XHJcbiAgICAgIGNhc2UgQ29sdW1uTWVudVR5cGUuVGltZTogcmV0dXJuIHRlbXBsYXRlVHlwZSA9PT0gVGVtcGxhdGVUeXBlLlRpbWU7XHJcbiAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gIDwhLS0gcmVndWxhciBjb2x1bW4gb3B0aW9ucyAtLT5cclxuICA8ZGl2PlxyXG4gICAgPHVsIGNtYWNzLW1lbnUgW21vZGVdPVwiJ3ZlcnRpY2FsJ1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNcIj5cclxuICAgICAgPGxpIGNtYWNzLXN1Ym1lbnUgdGl0bGU9XCJ7e2l0ZW0ubGFiZWx9fVwiIGNtYWNzSWNvbj1cInt7aXRlbS5pY29ufX1cIiAqbmdJZj1cIml0ZW0uc3ViTWVudS5sZW5ndGggPiAwOyBlbHNlIG1lbnVUZW1wbGF0ZVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgICAgICAgICA8dWwgY21hY3MtbWVudSBbbW9kZV09XCIndmVydGljYWwnXCIgKm5nRm9yPVwibGV0IHN1Ym1lbnUgb2YgaXRlbS5zdWJNZW51XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbWFjcy1zdWJtZW51IGNsYXNzPVwiY29sdW1uLW1lbnUgbWVudS1pdGVtXCIgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXNTZWxlY3RlZChzdWJtZW51LnZhbHVlLCBmaWVsZC5lZGl0VGVtcGxhdGUpXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cInt7c3VibWVudS5sYWJlbH19XCIgY21hY3NJY29uPVwie3tzdWJtZW51Lmljb259fVwiIChjbGljayk9XCJmaWVsZENoYW5nZWQoc3VibWVudS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjbWVudVRlbXBsYXRlPlxyXG4gICAgICAgIDxsaSBjbWFjcy1zdWJtZW51IGNsYXNzPVwiY29sdW1uLW1lbnUgbWVudS1pdGVtXCJcclxuICAgICAgICAgIHRpdGxlPVwie3tpdGVtLmxhYmVsfX1cIiBjbWFjc0ljb249XCJ7e2l0ZW0uaWNvbn19XCIgKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChpdGVtLnZhbHVlKVwiPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=