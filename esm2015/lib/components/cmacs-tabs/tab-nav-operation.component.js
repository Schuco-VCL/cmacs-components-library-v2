import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-dropdown/dropdown.directive";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "../cmacs-dropdown/dropdown-menu.component";
import * as i5 from "@angular/common";
import * as i6 from "../cmacs-menu/menu.directive";
import * as i7 from "../cmacs-menu/menu-item.directive";
import * as i8 from "ng-zorro-antd/core/outlet";
import * as i9 from "./tab-add-button.component";
function CmacsTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r5.tab.label);
} }
const _c0 = function () { return { visible: false }; };
function CmacsTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵlistener("click", function CmacsTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r9); const item_r5 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onSelect(item_r5); })("contextmenu", function CmacsTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r9); const item_r5 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onContextmenu(item_r5, $event); });
    i0.ɵɵtemplate(1, CmacsTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵclassProp("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    i0.ɵɵproperty("selected", item_r5.active)("disabled", item_r5.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", i0.ɵɵpureFunction0(6, _c0));
} }
function CmacsTabNavOperationComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵtemplate(1, CmacsTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.items);
} }
function CmacsTabNavOperationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function CmacsTabNavOperationComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.addClicked.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("addIcon", ctx_r3.addIcon);
} }
const _c1 = function () { return { minWidth: "46px" }; };
export class CmacsTabNavOperationComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.items = [];
        this.addable = false;
        this.addIcon = 'plus';
        this.addClicked = new EventEmitter();
        this.selected = new EventEmitter();
        this.closeAnimationWaitTimeoutId = -1;
        this.menuOpened = false;
        this.element = this.elementRef.nativeElement;
    }
    onSelect(item) {
        if (!item.disabled) {
            // ignore nzCanDeactivate
            item.tab.cmacsClick.emit();
            this.selected.emit(item);
        }
    }
    onContextmenu(item, e) {
        if (!item.disabled) {
            item.tab.cmacsContextmenu.emit(e);
        }
    }
    showItems() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
        this.menuOpened = true;
        this.cdr.markForCheck();
    }
    menuVisChange(visible) {
        if (!visible) {
            this.closeAnimationWaitTimeoutId = setTimeout(() => {
                this.menuOpened = false;
                this.cdr.markForCheck();
            }, 150);
        }
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
    ngOnDestroy() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
    }
}
CmacsTabNavOperationComponent.ɵfac = function CmacsTabNavOperationComponent_Factory(t) { return new (t || CmacsTabNavOperationComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsTabNavOperationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabNavOperationComponent, selectors: [["cmacs-tab-nav-operation"]], hostAttrs: [1, "ant-tabs-nav-operations"], hostVars: 2, hostBindings: function CmacsTabNavOperationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["cmacsTabNavOperation"], decls: 7, vars: 6, consts: [["cmacs-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "overlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "dropdownMenu", "overlayStyle", "matchWidthElement", "visibleChange", "mouseenter"], ["dropdownTrigger", "cmacsDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 4, "ngIf"], ["cmacs-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["cmacs-menu", ""], ["cmacs-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "selected", "disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "selected", "disabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["cmacs-tab-add-button", "", 3, "addIcon", "click"]], template: function CmacsTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("visibleChange", function CmacsTabNavOperationComponent_Template_button_visibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function CmacsTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "cmacs-dropdown-menu", null, 3);
        i0.ɵɵtemplate(5, CmacsTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵproperty("dropdownMenu", _r1)("overlayStyle", i0.ɵɵpureFunction0(5, _c1))("matchWidthElement", null);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.menuOpened);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.addable);
    } }, directives: [i1.CmacsDropDownDirective, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective, i4.CmacsDropdownMenuComponent, i5.NgIf, i6.CmacsMenuDirective, i5.NgForOf, i7.CmacsMenuItemDirective, i8.NzStringTemplateOutletDirective, i9.CmacsTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabNavOperationComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tab-nav-operation',
                exportAs: 'cmacsTabNavOperation',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <button
      cmacs-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      overlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="cmacsDropdown"
      [dropdownMenu]="menu"
      [overlayStyle]="{ minWidth: '46px' }"
      [matchWidthElement]="null"
      (visibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <cmacs-dropdown-menu #menu="cmacsDropdownMenu">
      <ul cmacs-menu *ngIf="menuOpened">
        <li
          cmacs-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [selected]="item.active"
          [disabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">{{ item.tab.label }}</ng-container>
        </li>
      </ul>
    </cmacs-dropdown-menu>
    <button *ngIf="addable" cmacs-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
                host: {
                    class: 'ant-tabs-nav-operations',
                    '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }]; }, { items: [{
            type: Input
        }], addable: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], addClicked: [{
            type: Output
        }], selected: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lBeUNiLDZCQUFvRjtJQUFBLFlBQW9CO0lBQUEsMEJBQWU7OztJQUFuQyxlQUFvQjtJQUFwQix1Q0FBb0I7Ozs7O0lBVjFHLDZCQVNDO0lBRkMsc09BQXdCLDBQQUFBO0lBR3hCLDBHQUF1SDtJQUN6SCxpQkFBSzs7O0lBUEgsd0VBQTREO0lBQzVELHlDQUF3Qiw4QkFBQTtJQUtULGVBQXdDO0lBQXhDLDBEQUF3Qyw2REFBQTs7O0lBWDNELDZCQUFrQztJQUNoQyxpRkFXSztJQUNQLGlCQUFLOzs7SUFWZ0IsZUFBUTtJQUFSLHNDQUFROzs7O0lBWS9CLGtDQUE2RjtJQUE1QiwrS0FBUyx5QkFBaUIsSUFBQztJQUFDLGlCQUFTOzs7SUFBekQsd0NBQW1COzs7QUFPcEUsTUFBTSxPQUFPLDZCQUE2QjtJQVd4QyxZQUFtQixHQUFzQixFQUFVLFVBQW1DO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFWN0UsVUFBSyxHQUErQixFQUFFLENBQUM7UUFDdkMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQW9DLE1BQU0sQ0FBQztRQUV4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDM0UsZ0NBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBOEI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUE4QixFQUFFLENBQWE7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQywyQkFBMkIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxlQUFlOztRQUNiLE9BQU8sT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFlBQVksS0FBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEdBckRVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7UUF2Q3RDLG9DQWFDO1FBRkMsZ0lBQWlCLHlCQUFxQixJQUFDLHVHQUN6QixlQUFXLElBRGM7UUFHdkMsdUJBQWlDO1FBQ25DLGlCQUFTO1FBQ1Qsb0RBQStDO1FBQzdDLDRFQWFLO1FBQ1AsaUJBQXNCO1FBQ3RCLG9GQUFzRzs7O1FBeEJwRyxrQ0FBcUIsNENBQUEsMkJBQUE7UUFTTCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFlekIsZUFBYTtRQUFiLGtDQUFhOzt1RkFPYiw2QkFBNkI7Y0E5Q3pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHlCQUF5QjtvQkFDaEMsd0NBQXdDLEVBQUUsb0JBQW9CO2lCQUMvRDthQUNGOzZGQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVhLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxRQUFRO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdi1pdGVtLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYi1uYXYtb3BlcmF0aW9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFiTmF2T3BlcmF0aW9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNtYWNzLWRyb3Bkb3duXHJcbiAgICAgIGNsYXNzPVwiYW50LXRhYnMtbmF2LW1vcmVcIlxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJuei10YWJzLWRyb3Bkb3duXCJcclxuICAgICAgI2Ryb3Bkb3duVHJpZ2dlcj1cImNtYWNzRHJvcGRvd25cIlxyXG4gICAgICBbZHJvcGRvd25NZW51XT1cIm1lbnVcIlxyXG4gICAgICBbb3ZlcmxheVN0eWxlXT1cInsgbWluV2lkdGg6ICc0NnB4JyB9XCJcclxuICAgICAgW21hdGNoV2lkdGhFbGVtZW50XT1cIm51bGxcIlxyXG4gICAgICAodmlzaWJsZUNoYW5nZSk9XCJtZW51VmlzQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobW91c2VlbnRlcik9XCJzaG93SXRlbXMoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZWxsaXBzaXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPHVsIGNtYWNzLW1lbnUgKm5nSWY9XCJtZW51T3BlbmVkXCI+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtdGFicy1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbS5hY3RpdmVcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCJcclxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbkNvbnRleHRtZW51KGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnRhYi5sYWJlbDsgY29udGV4dDogeyB2aXNpYmxlOiBmYWxzZSB9XCI+e3sgaXRlbS50YWIubGFiZWwgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImFkZGFibGVcIiBjbWFjcy10YWItYWRkLWJ1dHRvbiBbYWRkSWNvbl09XCJhZGRJY29uXCIgKGNsaWNrKT1cImFkZENsaWNrZWQuZW1pdCgpXCI+PC9idXR0b24+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC10YWJzLW5hdi1vcGVyYXRpb25zJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbmF2LW9wZXJhdGlvbnMtaGlkZGVuXSc6ICdpdGVtcy5sZW5ndGggPT09IDAnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJOYXZPcGVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGFkZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ3BsdXMnO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWRkQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZT4oKTtcclxuICBjbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQgPSAtMTtcclxuICBtZW51T3BlbmVkID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoaXRlbTogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgLy8gaWdub3JlIG56Q2FuRGVhY3RpdmF0ZVxyXG4gICAgICBpdGVtLnRhYi5jbWFjc0NsaWNrLmVtaXQoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Db250ZXh0bWVudShpdGVtOiBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmUsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICBpdGVtLnRhYi5jbWFjc0NvbnRleHRtZW51LmVtaXQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNob3dJdGVtcygpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCk7XHJcbiAgICB0aGlzLm1lbnVPcGVuZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBtZW51VmlzQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWVudU9wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9LCAxNTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Py5vZmZzZXRXaWR0aCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudD8ub2Zmc2V0SGVpZ2h0IHx8IDA7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==