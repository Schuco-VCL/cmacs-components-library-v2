import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
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
    i0.ɵɵclassProp("selected-item", submenu_r6.value === ctx_r5.field.editTemplate);
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected-item", item_r1.value === ctx_r4.field.editTemplate);
    i0.ɵɵpropertyInterpolate("title", item_r1.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", item_r1.icon);
} }
function CmacsCompactTableColumnMoreComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵtemplate(1, CmacsCompactTableColumnMoreComponent_ul_3_li_1_Template, 3, 3, "li", 4);
    i0.ɵɵtemplate(2, CmacsCompactTableColumnMoreComponent_ul_3_ng_template_2_Template, 1, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
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
            this.field.editTemplate = value;
            this.onFieldChanged.emit(this.field);
        }
        else {
            this.isAdvancedConfiguration = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7OztJQ00vRCw2QkFBd0U7SUFDdEUsNkJBQytGO0lBQXRDLGtRQUFxQztJQUM5RixpQkFBSztJQUNQLGlCQUFLOzs7O0lBSlUsaUNBQW1CO0lBQ2dCLGVBQTREO0lBQTVELCtFQUE0RDtJQUMxRyxtREFBeUI7SUFBQyxzREFBNEI7OztJQUo5RCw2QkFBc0g7SUFDcEgsOEJBQWlDO0lBQy9CLDZGQUlLO0lBQ1AsaUJBQU07SUFDUixpQkFBSzs7O0lBUmEsZ0RBQXNCO0lBQUMsbURBQXlCO0lBRVAsZUFBZTtJQUFmLHlDQUFlOzs7O0lBUXhFLDZCQUNzRjtJQUFuQyxpUkFBa0M7SUFDckYsaUJBQUs7Ozs7SUFGMkMsNEVBQXlEO0lBQ3ZHLGdEQUFzQjtJQUFDLG1EQUF5Qjs7O0lBWnRELDZCQUE0RTtJQUMxRSx3RkFRSztJQUNMLDJJQUljO0lBQ2hCLGlCQUFLOzs7O0lBZlUsaUNBQW1CO0lBQ29DLGVBQStCO0lBQS9CLGlEQUErQixpQkFBQTs7QURHekcsTUFBTSxPQUFPLG9DQUFvQztJQUsvQztRQUpBLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUcvQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFDckMsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLElBQUksS0FBSyxLQUFLLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRTtZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7d0hBakJVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO1FDUmpELDhCQUF5RTtRQUN2RSx5QkFBNEI7UUFFNUIsMkJBQUs7UUFDSCxtRkFlSztRQUNQLGlCQUFNO1FBQ1IsaUJBQU07O1FBakJrRCxlQUFzQjtRQUF0QixpREFBc0I7O3VGRElqRSxvQ0FBb0M7Y0FMaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFdBQVcsRUFBRSxrREFBa0Q7Z0JBQy9ELFNBQVMsRUFBRSxDQUFDLGlEQUFpRCxDQUFDO2FBQy9EO3NDQUdVLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbHVtbk1lbnVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lbnVtcy9jb2x1bW5NZW51VHlwZS5lbnVtJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2ludGVyZmFjZXMvZ3JpZC1jb25maWcnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb21wYWN0LXRhYmxlLWNvbHVtbi1tb3JlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21wYWN0VGFibGVDb2x1bW5Nb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc0FkdmFuY2VkQ29uZmlndXJhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBhbnk7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkO1xyXG4gIEBPdXRwdXQoKSBvbkZpZWxkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RmllbGQ+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBmaWVsZENoYW5nZWQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBDb2x1bW5NZW51VHlwZS5BZHZhbmNlZENvbmZpZ3VyYXRpb24pIHtcclxuICAgICAgdGhpcy5maWVsZC5lZGl0VGVtcGxhdGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkZpZWxkQ2hhbmdlZC5lbWl0KHRoaXMuZmllbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0FkdmFuY2VkQ29uZmlndXJhdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiBpZD1cImNvbXBhY3RUYWJsZUNvbHVtbk1vcmVcIiBjbGFzcz1cImNtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYXJyb3ctdXBcIj48L2Rpdj5cclxuICA8IS0tIHJlZ3VsYXIgY29sdW1uIG9wdGlvbnMgLS0+XHJcbiAgPGRpdj5cclxuICAgIDx1bCBjbWFjcy1tZW51IFttb2RlXT1cIid2ZXJ0aWNhbCdcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcy5jb2x1bW5PcHRpb25zXCI+XHJcbiAgICAgIDxsaSBjbWFjcy1zdWJtZW51IHRpdGxlPVwie3tpdGVtLmxhYmVsfX1cIiBjbWFjc0ljb249XCJ7e2l0ZW0uaWNvbn19XCIgKm5nSWY9XCJpdGVtLnN1Yk1lbnUubGVuZ3RoID4gMDsgZWxzZSBtZW51VGVtcGxhdGVcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiPlxyXG4gICAgICAgICAgPHVsIGNtYWNzLW1lbnUgW21vZGVdPVwiJ3ZlcnRpY2FsJ1wiICpuZ0Zvcj1cImxldCBzdWJtZW51IG9mIGl0ZW0uc3ViTWVudVwiPlxyXG4gICAgICAgICAgICA8bGkgY21hY3Mtc3VibWVudSBjbGFzcz1cImNvbHVtbi1tZW51IG1lbnUtaXRlbVwiIFtjbGFzcy5zZWxlY3RlZC1pdGVtXT1cInN1Ym1lbnUudmFsdWUgPT09IGZpZWxkLmVkaXRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJ7e3N1Ym1lbnUubGFiZWx9fVwiIGNtYWNzSWNvbj1cInt7c3VibWVudS5pY29ufX1cIiAoY2xpY2spPVwiZmllbGRDaGFuZ2VkKHN1Ym1lbnUudmFsdWUpXCI+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI21lbnVUZW1wbGF0ZT5cclxuICAgICAgICA8bGkgY21hY3Mtc3VibWVudSBjbGFzcz1cImNvbHVtbi1tZW51IG1lbnUtaXRlbVwiIFtjbGFzcy5zZWxlY3RlZC1pdGVtXT1cIml0ZW0udmFsdWUgPT09IGZpZWxkLmVkaXRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICB0aXRsZT1cInt7aXRlbS5sYWJlbH19XCIgY21hY3NJY29uPVwie3tpdGVtLmljb259fVwiIChjbGljayk9XCJmaWVsZENoYW5nZWQoaXRlbS52YWx1ZSlcIj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19