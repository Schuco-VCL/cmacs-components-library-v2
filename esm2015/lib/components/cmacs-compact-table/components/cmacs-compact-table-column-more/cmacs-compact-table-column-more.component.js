import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../cmacs-menu/menu.directive";
import * as i2 from "../../../cmacs-menu/submenu.component";
import * as i3 from "@angular/common";
import * as i4 from "../../../cmacs-menu/menu-item.directive";
function CmacsCompactTableColumnMoreComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵelementStart(1, "li", 12);
    i0.ɵɵlistener("click", function CmacsCompactTableColumnMoreComponent_ul_5_Template_li_click_1_listener() { i0.ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.fieldChanged(item_r1.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("mode", "vertical");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected-item", item_r1.value === ctx_r0.field.editTemplate);
    i0.ɵɵpropertyInterpolate("title", item_r1.label);
    i0.ɵɵpropertyInterpolate("cmacsIcon", ctx_r0.getIcon(item_r1.value));
} }
export class CmacsCompactTableColumnMoreComponent {
    constructor() {
        this.isAdvancedConfiguration = false;
        this.onFieldChanged = new EventEmitter();
    }
    ngOnInit() {
    }
    fieldChanged(value) {
        if (value !== 'advanced-configuration') {
            this.field.editTemplate = value;
            this.onFieldChanged.emit(this.field);
        }
        else {
            this.isAdvancedConfiguration = true;
        }
    }
    getIcon(value) {
        switch (value) {
            case 0: {
                return 'iconUILarge-Calendar';
            }
            case 1: {
                return 'iconArrowLarge-Chevron-Down';
            }
            case 2: {
                return 'iconArrowLarge-Solid-UpDown';
            }
            case 3: {
                return 'iconEditorLarge-Text';
            }
            case 4: {
                return 'iconUILarge-Select-All';
            }
            case 5: {
                return 'iconUILarge-Time';
            }
            case 7: {
                return 'iconUILarge-Attached';
            }
            case 'advanced-configuration': {
                return 'iconUILarge-Preferences';
            }
        }
    }
}
CmacsCompactTableColumnMoreComponent.ɵfac = function CmacsCompactTableColumnMoreComponent_Factory(t) { return new (t || CmacsCompactTableColumnMoreComponent)(); };
CmacsCompactTableColumnMoreComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCompactTableColumnMoreComponent, selectors: [["cmacs-compact-table-column-more"]], inputs: { items: "items", field: "field" }, outputs: { onFieldChanged: "onFieldChanged" }, decls: 18, vars: 2, consts: [["id", "compactTableColumnMore", 1, "cmacs-compact-table-column-more"], [1, "arrow-up"], ["cmacs-menu", "", 3, "mode"], ["cmacs-submenu", "", "title", "Property Type", "cmacsIcon", "iconUILarge-Preferences", 2, "height", "44px", "margin-top", "-1px"], ["id", "compactTableColumnMore"], ["cmacs-menu", "", 3, "mode", 4, "ngFor", "ngForOf"], ["cmacs-submenu", "", "title", "Restrict Edit", "cmacsIcon", "iconUILarge-Grant-Access", 1, "menu-item", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-submenu", "", "title", "Duplicate", "cmacsIcon", "iconUILarge-Copy", 1, "menu-item", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-submenu", "", "title", "Move", "cmacsIcon", "iconArrowLarge-Change", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-menu-item", "", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-submenu", "", "title", "Freeze Column", "cmacsIcon", "iconUISmall-Lock-Movement", 1, "menu-item", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-submenu", "", "title", "Delete Column", "cmacsIcon", "iconUILarge-Trash", 1, "menu-item", 2, "height", "44px", "margin-top", "-1px"], ["cmacs-submenu", "", 1, "menu-item", 2, "height", "44px", "margin-top", "-1px", 3, "title", "cmacsIcon", "click"]], template: function CmacsCompactTableColumnMoreComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "ul", 2);
        i0.ɵɵelementStart(3, "li", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵtemplate(5, CmacsCompactTableColumnMoreComponent_ul_5_Template, 2, 5, "ul", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "li", 6);
        i0.ɵɵelement(7, "li", 7);
        i0.ɵɵelementStart(8, "li", 8);
        i0.ɵɵelementStart(9, "ul");
        i0.ɵɵelementStart(10, "li", 9);
        i0.ɵɵtext(11, "Option 9");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "li", 9);
        i0.ɵɵtext(13, "Option 10");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "li", 9);
        i0.ɵɵtext(15, "Option 11");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "li", 10);
        i0.ɵɵelement(17, "li", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mode", "vertical");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.items.columnOptions);
    } }, directives: [i1.CmacsMenuDirective, i2.CmacsSubMenuComponent, i3.NgForOf, i4.CmacsMenuItemDirective], styles: [".cmacs-compact-table-column-more[_ngcontent-%COMP%]{position:absolute;left:calc(100% - 211px/2 - .5px);top:44px;flex:none;order:1;flex-grow:0;z-index:11}.arrow-up[_ngcontent-%COMP%]{position:absolute;left:50%;margin-top:-19px;margin-left:-8px;border:10px solid transparent;border-bottom-color:#fff;z-index:1}  .menu-item .ant-menu-submenu-arrow{display:none}.selected-item[_ngcontent-%COMP%]{color:#2a7cff}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUvY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0t2RSw2QkFBNEU7SUFDMUUsOEJBRXlFO0lBQW5DLGlQQUFrQztJQUN4RSxpQkFBSztJQUNQLGlCQUFLOzs7O0lBTFUsaUNBQW1CO0lBRTlCLGVBQXlEO0lBQXpELDRFQUF5RDtJQUFDLGdEQUFzQjtJQUNoRixvRUFBbUM7O0FERC9DLE1BQU0sT0FBTyxvQ0FBb0M7SUFLL0M7UUFKQSw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFHL0IsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBQ3JDLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLEtBQUssS0FBSyx3QkFBd0IsRUFBRTtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLHNCQUFzQixDQUFDO2FBQy9CO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLDZCQUE2QixDQUFDO2FBQ3RDO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLDZCQUE2QixDQUFDO2FBQ3RDO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLHNCQUFzQixDQUFDO2FBQy9CO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLHdCQUF3QixDQUFDO2FBQ2pDO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLGtCQUFrQixDQUFDO2FBQzNCO1lBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDTixPQUFPLHNCQUFzQixDQUFDO2FBQy9CO1lBQ0QsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLHlCQUF5QixDQUFDO2FBQ2xDO1NBQ0Y7SUFDSCxDQUFDOzt3SEE5Q1Usb0NBQW9DO3lFQUFwQyxvQ0FBb0M7UUNQakQsOEJBQXlFO1FBQ3ZFLHlCQUE0QjtRQUM1Qiw2QkFBbUM7UUFDakMsNkJBQW9IO1FBQ2xILDhCQUFpQztRQUMvQixtRkFLSztRQUNQLGlCQUFNO1FBQ1IsaUJBQUs7UUFDTCx3QkFFSztRQUNMLHdCQUVLO1FBQ0wsNkJBQXlHO1FBQ3ZHLDBCQUFJO1FBQ0YsOEJBQTREO1FBQUEseUJBQVE7UUFBQSxpQkFBSztRQUN6RSw4QkFBNEQ7UUFBQSwwQkFBUztRQUFBLGlCQUFLO1FBQzFFLDhCQUE0RDtRQUFBLDBCQUFTO1FBQUEsaUJBQUs7UUFDNUUsaUJBQUs7UUFDUCxpQkFBSztRQUNMLDBCQUVLO1FBQ0wsMEJBRUs7UUFDUCxpQkFBSztRQUNQLGlCQUFNOztRQS9CVyxlQUFtQjtRQUFuQixpQ0FBbUI7UUFHd0IsZUFBc0I7UUFBdEIsaURBQXNCOzt1RkRFckUsb0NBQW9DO2NBTGhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxXQUFXLEVBQUUsa0RBQWtEO2dCQUMvRCxTQUFTLEVBQUUsQ0FBQyxpREFBaUQsQ0FBQzthQUMvRDtzQ0FHVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbXBhY3QtdGFibGUtY29sdW1uLW1vcmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbXBhY3RUYWJsZUNvbHVtbk1vcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzQWR2YW5jZWRDb25maWd1cmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaXRlbXM6IGFueTtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGQ7XHJcbiAgQE91dHB1dCgpIG9uRmllbGRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxGaWVsZD4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGZpZWxkQ2hhbmdlZCh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgIT09ICdhZHZhbmNlZC1jb25maWd1cmF0aW9uJykge1xyXG4gICAgICB0aGlzLmZpZWxkLmVkaXRUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm9uRmllbGRDaGFuZ2VkLmVtaXQodGhpcy5maWVsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQWR2YW5jZWRDb25maWd1cmF0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEljb24odmFsdWU6IGFueSkge1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlIDA6IHtcclxuICAgICAgICByZXR1cm4gJ2ljb25VSUxhcmdlLUNhbGVuZGFyJztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDE6IHtcclxuICAgICAgICByZXR1cm4gJ2ljb25BcnJvd0xhcmdlLUNoZXZyb24tRG93bic7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgcmV0dXJuICdpY29uQXJyb3dMYXJnZS1Tb2xpZC1VcERvd24nO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgMzoge1xyXG4gICAgICAgIHJldHVybiAnaWNvbkVkaXRvckxhcmdlLVRleHQnO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgNDoge1xyXG4gICAgICAgIHJldHVybiAnaWNvblVJTGFyZ2UtU2VsZWN0LUFsbCc7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSA1OiB7XHJcbiAgICAgICAgcmV0dXJuICdpY29uVUlMYXJnZS1UaW1lJztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIDc6IHtcclxuICAgICAgICByZXR1cm4gJ2ljb25VSUxhcmdlLUF0dGFjaGVkJztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdhZHZhbmNlZC1jb25maWd1cmF0aW9uJzoge1xyXG4gICAgICAgIHJldHVybiAnaWNvblVJTGFyZ2UtUHJlZmVyZW5jZXMnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGlkPVwiY29tcGFjdFRhYmxlQ29sdW1uTW9yZVwiIGNsYXNzPVwiY21hY3MtY29tcGFjdC10YWJsZS1jb2x1bW4tbW9yZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhcnJvdy11cFwiPjwvZGl2PlxyXG4gIDx1bCBjbWFjcy1tZW51IFttb2RlXT1cIid2ZXJ0aWNhbCdcIj5cclxuICAgIDxsaSBzdHlsZT1cImhlaWdodDogNDRweDsgbWFyZ2luLXRvcDogLTFweDtcIiBjbWFjcy1zdWJtZW51IHRpdGxlPVwiUHJvcGVydHkgVHlwZVwiIGNtYWNzSWNvbj1cImljb25VSUxhcmdlLVByZWZlcmVuY2VzXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb21wYWN0VGFibGVDb2x1bW5Nb3JlXCI+XHJcbiAgICAgICAgPHVsIGNtYWNzLW1lbnUgW21vZGVdPVwiJ3ZlcnRpY2FsJ1wiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zLmNvbHVtbk9wdGlvbnNcIj5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLXN1Ym1lbnVcclxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkLWl0ZW1dPVwiaXRlbS52YWx1ZSA9PT0gZmllbGQuZWRpdFRlbXBsYXRlXCIgdGl0bGU9XCJ7e2l0ZW0ubGFiZWx9fVwiXHJcbiAgICAgICAgICAgIGNtYWNzSWNvbj1cInt7Z2V0SWNvbihpdGVtLnZhbHVlKX19XCIgKGNsaWNrKT1cImZpZWxkQ2hhbmdlZChpdGVtLnZhbHVlKVwiPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIiBzdHlsZT1cImhlaWdodDogNDRweDsgbWFyZ2luLXRvcDogLTFweDtcIiBjbWFjcy1zdWJtZW51IHRpdGxlPVwiUmVzdHJpY3QgRWRpdFwiXHJcbiAgICAgIGNtYWNzSWNvbj1cImljb25VSUxhcmdlLUdyYW50LUFjY2Vzc1wiPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLXN1Ym1lbnUgdGl0bGU9XCJEdXBsaWNhdGVcIlxyXG4gICAgICBjbWFjc0ljb249XCJpY29uVUlMYXJnZS1Db3B5XCI+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLXN1Ym1lbnUgdGl0bGU9XCJNb3ZlXCIgY21hY3NJY29uPVwiaWNvbkFycm93TGFyZ2UtQ2hhbmdlXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7IG1hcmdpbi10b3A6IC0xcHg7XCIgY21hY3MtbWVudS1pdGVtPk9wdGlvbiA5PC9saT5cclxuICAgICAgICA8bGkgc3R5bGU9XCJoZWlnaHQ6IDQ0cHg7IG1hcmdpbi10b3A6IC0xcHg7XCIgY21hY3MtbWVudS1pdGVtPk9wdGlvbiAxMDwvbGk+XHJcbiAgICAgICAgPGxpIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLW1lbnUtaXRlbT5PcHRpb24gMTE8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLXN1Ym1lbnUgdGl0bGU9XCJGcmVlemUgQ29sdW1uXCJcclxuICAgICAgY21hY3NJY29uPVwiaWNvblVJU21hbGwtTG9jay1Nb3ZlbWVudFwiPlxyXG4gICAgPC9saT5cclxuICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiIHN0eWxlPVwiaGVpZ2h0OiA0NHB4OyBtYXJnaW4tdG9wOiAtMXB4O1wiIGNtYWNzLXN1Ym1lbnUgdGl0bGU9XCJEZWxldGUgQ29sdW1uXCJcclxuICAgICAgY21hY3NJY29uPVwiaWNvblVJTGFyZ2UtVHJhc2hcIj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuPC9kaXY+XHJcbiJdfQ==