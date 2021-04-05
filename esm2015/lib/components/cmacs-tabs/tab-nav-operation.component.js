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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLW5hdi1vcGVyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lBeUNiLDZCQUFvRjtJQUFBLFlBQW9CO0lBQUEsMEJBQWU7OztJQUFuQyxlQUFvQjtJQUFwQix1Q0FBb0I7Ozs7O0lBVjFHLDZCQVNDO0lBRkMsc09BQXdCLDBQQUFBO0lBR3hCLDBHQUF1SDtJQUN6SCxpQkFBSzs7O0lBUEgsd0VBQTREO0lBQzVELHlDQUF3Qiw4QkFBQTtJQUtULGVBQXdDO0lBQXhDLDBEQUF3Qyw2REFBQTs7O0lBWDNELDZCQUFrQztJQUNoQyxpRkFXSztJQUNQLGlCQUFLOzs7SUFWZ0IsZUFBUTtJQUFSLHNDQUFROzs7O0lBWS9CLGtDQUE2RjtJQUE1QiwrS0FBUyx5QkFBaUIsSUFBQztJQUFDLGlCQUFTOzs7SUFBekQsd0NBQW1COzs7QUFPcEUsTUFBTSxPQUFPLDZCQUE2QjtJQVd4QyxZQUFtQixHQUFzQixFQUFVLFVBQW1DO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFWN0UsVUFBSyxHQUErQixFQUFFLENBQUM7UUFDdkMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixZQUFPLEdBQW9DLE1BQU0sQ0FBQztRQUV4QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQTRCLENBQUM7UUFDM0UsZ0NBQTJCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBOEI7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUE4QixFQUFFLENBQWE7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBQ0QsU0FBUztRQUNQLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQywyQkFBMkIsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxlQUFlOztRQUNiLE9BQU8sT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxnQkFBZ0I7O1FBQ2QsT0FBTyxPQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFlBQVksS0FBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDakQsQ0FBQzs7MEdBckRVLDZCQUE2QjtrRUFBN0IsNkJBQTZCOzs7UUF2Q3RDLG9DQWFDO1FBRkMsZ0lBQWlCLHlCQUFxQixJQUFDLHVHQUN6QixlQUFXLElBRGM7UUFHdkMsdUJBQWlDO1FBQ25DLGlCQUFTO1FBQ1Qsb0RBQStDO1FBQzdDLDRFQWFLO1FBQ1AsaUJBQXNCO1FBQ3RCLG9GQUFzRzs7O1FBeEJwRyxrQ0FBcUIsNENBQUEsMkJBQUE7UUFTTCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFlekIsZUFBYTtRQUFiLGtDQUFhOzt1RkFPYiw2QkFBNkI7Y0E5Q3pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHlCQUF5QjtvQkFDaEMsd0NBQXdDLEVBQUUsb0JBQW9CO2lCQUMvRDthQUNGOzZGQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUVhLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxRQUFRO2tCQUExQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdi1pdGVtLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NtYWNzLXRhYi1uYXYtb3BlcmF0aW9uJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYk5hdk9wZXJhdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBjbWFjcy1kcm9wZG93blxuICAgICAgY2xhc3M9XCJhbnQtdGFicy1uYXYtbW9yZVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJuei10YWJzLWRyb3Bkb3duXCJcbiAgICAgICNkcm9wZG93blRyaWdnZXI9XCJjbWFjc0Ryb3Bkb3duXCJcbiAgICAgIFtkcm9wZG93bk1lbnVdPVwibWVudVwiXG4gICAgICBbb3ZlcmxheVN0eWxlXT1cInsgbWluV2lkdGg6ICc0NnB4JyB9XCJcbiAgICAgIFttYXRjaFdpZHRoRWxlbWVudF09XCJudWxsXCJcbiAgICAgICh2aXNpYmxlQ2hhbmdlKT1cIm1lbnVWaXNDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAobW91c2VlbnRlcik9XCJzaG93SXRlbXMoKVwiXG4gICAgPlxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJlbGxpcHNpc1wiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjbWVudT1cImNtYWNzRHJvcGRvd25NZW51XCI+XG4gICAgICA8dWwgY21hY3MtbWVudSAqbmdJZj1cIm1lbnVPcGVuZWRcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgY21hY3MtbWVudS1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRhYnMtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIFtzZWxlY3RlZF09XCJpdGVtLmFjdGl2ZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uZGlzYWJsZWRcIlxuICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdChpdGVtKVwiXG4gICAgICAgICAgKGNvbnRleHRtZW51KT1cIm9uQ29udGV4dG1lbnUoaXRlbSwgJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbS50YWIubGFiZWw7IGNvbnRleHQ6IHsgdmlzaWJsZTogZmFsc2UgfVwiPnt7IGl0ZW0udGFiLmxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cbiAgICA8YnV0dG9uICpuZ0lmPVwiYWRkYWJsZVwiIGNtYWNzLXRhYi1hZGQtYnV0dG9uIFthZGRJY29uXT1cImFkZEljb25cIiAoY2xpY2spPVwiYWRkQ2xpY2tlZC5lbWl0KClcIj48L2J1dHRvbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXRhYnMtbmF2LW9wZXJhdGlvbnMnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtbmF2LW9wZXJhdGlvbnMtaGlkZGVuXSc6ICdpdGVtcy5sZW5ndGggPT09IDAnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJOYXZPcGVyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpdGVtczogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgQElucHV0KCkgYWRkYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ3BsdXMnO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZGRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZT4oKTtcbiAgY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkID0gLTE7XG4gIG1lbnVPcGVuZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgb25TZWxlY3QoaXRlbTogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKCFpdGVtLmRpc2FibGVkKSB7XG4gICAgICAvLyBpZ25vcmUgbnpDYW5EZWFjdGl2YXRlXG4gICAgICBpdGVtLnRhYi5jbWFjc0NsaWNrLmVtaXQoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRleHRtZW51KGl0ZW06IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgaXRlbS50YWIuY21hY3NDb250ZXh0bWVudS5lbWl0KGUpO1xuICAgIH1cbiAgfVxuICBzaG93SXRlbXMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xvc2VBbmltYXRpb25XYWl0VGltZW91dElkKTtcbiAgICB0aGlzLm1lbnVPcGVuZWQgPSB0cnVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWVudVZpc0NoYW5nZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmNsb3NlQW5pbWF0aW9uV2FpdFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm1lbnVPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ/Lm9mZnNldFdpZHRoIHx8IDA7XG4gIH1cblxuICBnZXRFbGVtZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudD8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbldhaXRUaW1lb3V0SWQpO1xuICB9XG59XG4iXX0=