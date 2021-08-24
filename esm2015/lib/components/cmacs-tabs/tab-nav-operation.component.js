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
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["cmacsTabNavOperation"], decls: 7, vars: 6, consts: [["cmacs-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "role", "button", "overlayClassName", "nz-tabs-dropdown", "aria-label", "ellipsis", 1, "ant-tabs-nav-more", 3, "dropdownMenu", "overlayStyle", "matchWidthElement", "visibleChange", "mouseenter"], ["dropdownTrigger", "cmacsDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 4, "ngIf"], ["cmacs-tab-add-button", "", "aria-label", "add icon", "role", "button", 3, "addIcon", "click", 4, "ngIf"], ["cmacs-menu", ""], ["cmacs-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "selected", "disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["cmacs-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "selected", "disabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["cmacs-tab-add-button", "", "aria-label", "add icon", "role", "button", 3, "addIcon", "click"]], template: function CmacsTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
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
      role="button"
      overlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="cmacsDropdown"
      [dropdownMenu]="menu"
      [overlayStyle]="{ minWidth: '46px' }"
      [matchWidthElement]="null"
      (visibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
      aria-label="ellipsis"
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
    <button *ngIf="addable" cmacs-tab-add-button aria-label="add icon" [addIcon]="addIcon" role="button" (click)="addClicked.emit()"></button>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lBMkNiLDZCQUFvRjtJQUFBLFlBQW9CO0lBQUEsMEJBQWU7OztJQUFuQyxlQUFvQjtJQUFwQix1Q0FBb0I7Ozs7O0lBVjFHLDZCQVNDO0lBRkMsc09BQXdCLDBQQUFBO0lBR3hCLDBHQUF1SDtJQUN6SCxpQkFBSzs7O0lBUEgsd0VBQTREO0lBQzVELHlDQUF3Qiw4QkFBQTtJQUtULGVBQXdDO0lBQXhDLDBEQUF3Qyw2REFBQTs7O0lBWDNELDZCQUFrQztJQUNoQyxpRkFXSztJQUNQLGlCQUFLOzs7SUFWZ0IsZUFBUTtJQUFSLHNDQUFROzs7O0lBWS9CLGtDQUFpSTtJQUE1QiwrS0FBUyx5QkFBaUIsSUFBQztJQUFDLGlCQUFTOzs7SUFBdkUsd0NBQW1COzs7QUFPMUYsTUFBTSxPQUFPLDZCQUE2QjtJQVd4QyxZQUFtQixHQUFzQixFQUFVLFVBQW1DO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFWN0UsVUFBSyxHQUErQixFQUFFLENBQUM7UUFDdkMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQW9DLE1BQU0sQ0FBQztRQUV4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDM0UsZ0NBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBOEI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUE4QixFQUFFLENBQWE7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQywyQkFBMkIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxlQUFlOztRQUNiLE9BQU8sT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFlBQVksS0FBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEdBckRVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7UUF6Q3RDLG9DQWVDO1FBSEMsZ0lBQWlCLHlCQUFxQixJQUFDLHVHQUN6QixlQUFXLElBRGM7UUFJdkMsdUJBQWlDO1FBQ25DLGlCQUFTO1FBQ1Qsb0RBQStDO1FBQzdDLDRFQWFLO1FBQ1AsaUJBQXNCO1FBQ3RCLG9GQUEwSTs7O1FBekJ4SSxrQ0FBcUIsNENBQUEsMkJBQUE7UUFVTCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFlekIsZUFBYTtRQUFiLGtDQUFhOzt1RkFPYiw2QkFBNkI7Y0FoRHpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUseUJBQXlCO29CQUNoQyx3Q0FBd0MsRUFBRSxvQkFBb0I7aUJBQy9EO2FBQ0Y7NkZBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRWEsVUFBVTtrQkFBNUIsTUFBTTtZQUNZLFFBQVE7a0JBQTFCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbmF2LWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGFiLW5hdi1vcGVyYXRpb24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWJOYXZPcGVyYXRpb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b25cclxuICAgICAgY21hY3MtZHJvcGRvd25cclxuICAgICAgY2xhc3M9XCJhbnQtdGFicy1uYXYtbW9yZVwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJuei10YWJzLWRyb3Bkb3duXCJcclxuICAgICAgI2Ryb3Bkb3duVHJpZ2dlcj1cImNtYWNzRHJvcGRvd25cIlxyXG4gICAgICBbZHJvcGRvd25NZW51XT1cIm1lbnVcIlxyXG4gICAgICBbb3ZlcmxheVN0eWxlXT1cInsgbWluV2lkdGg6ICc0NnB4JyB9XCJcclxuICAgICAgW21hdGNoV2lkdGhFbGVtZW50XT1cIm51bGxcIlxyXG4gICAgICAodmlzaWJsZUNoYW5nZSk9XCJtZW51VmlzQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobW91c2VlbnRlcik9XCJzaG93SXRlbXMoKVwiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJlbGxpcHNpc1wiXHJcbiAgICA+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZWxsaXBzaXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgPHVsIGNtYWNzLW1lbnUgKm5nSWY9XCJtZW51T3BlbmVkXCI+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBjbWFjcy1tZW51LWl0ZW1cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtdGFicy1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbS5hY3RpdmVcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCJcclxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJvbkNvbnRleHRtZW51KGl0ZW0sICRldmVudClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnRhYi5sYWJlbDsgY29udGV4dDogeyB2aXNpYmxlOiBmYWxzZSB9XCI+e3sgaXRlbS50YWIubGFiZWwgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9jbWFjcy1kcm9wZG93bi1tZW51PlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImFkZGFibGVcIiBjbWFjcy10YWItYWRkLWJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIGljb25cIiBbYWRkSWNvbl09XCJhZGRJY29uXCIgcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRDbGlja2VkLmVtaXQoKVwiPjwvYnV0dG9uPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtdGFicy1uYXYtb3BlcmF0aW9ucycsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLW5hdi1vcGVyYXRpb25zLWhpZGRlbl0nOiAnaXRlbXMubGVuZ3RoID09PSAwJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBpdGVtczogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlW10gPSBbXTtcclxuICBASW5wdXQoKSBhZGRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFkZENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmU+KCk7XHJcbiAgY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkID0gLTE7XHJcbiAgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGl0ZW06IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XHJcbiAgICAgIC8vIGlnbm9yZSBuekNhbkRlYWN0aXZhdGVcclxuICAgICAgaXRlbS50YWIuY21hY3NDbGljay5lbWl0KCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ29udGV4dG1lbnUoaXRlbTogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcclxuICAgICAgaXRlbS50YWIuY21hY3NDb250ZXh0bWVudS5lbWl0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzaG93SXRlbXMoKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQpO1xyXG4gICAgdGhpcy5tZW51T3BlbmVkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbWVudVZpc0NoYW5nZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXZpc2libGUpIHtcclxuICAgICAgdGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm1lbnVPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSwgMTUwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudD8ub2Zmc2V0V2lkdGggfHwgMDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldEhlaWdodCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQpO1xyXG4gIH1cclxufVxyXG4iXX0=