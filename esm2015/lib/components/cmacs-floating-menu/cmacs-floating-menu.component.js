import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "../cmacs-button/cmacs-button.component";
import * as i4 from "../cmacs-dropdown/dropdown-button.directive";
import * as i5 from "../cmacs-dropdown/dropdown.directive";
import * as i6 from "../cmacs-dropdown/dropdown-menu.component";
import * as i7 from "../cmacs-menu/menu.directive";
import * as i8 from "../cmacs-menu/menu-item.directive";
function CmacsFloatingMenuComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.expandToolbar(); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} }
function CmacsFloatingMenuComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-dropdown-menu", null, 15);
    i0.ɵɵelementStart(5, "ul", 16);
    i0.ɵɵelementStart(6, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.dockToLeft(); });
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dockToRight(); });
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.dockToTop(); });
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_15_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dockToBottom(); });
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_18_listener() { i0.ɵɵrestoreView(_r9); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.minimizeToolbar(); });
    i0.ɵɵelement(19, "i", 18);
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r7 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsTrigger", ctx_r3.trigger)("placement", ctx_r3.getPlacement())("dropdownMenu", _r7);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("cmacs-floating-menu-main-ul-right", ctx_r3.position === "left")("cmacs-floating-menu-main-ul-top", ctx_r3.position === "bottom")("cmacs-floating-menu-main-ul-bottom", ctx_r3.position === "top")("cmacs-floating-menu-main-ul-left", ctx_r3.position === "right");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.i18n["Dock To Left"] ? ctx_r3.i18n["Dock To Left"] : ctx_r3._i18n["Dock To Left"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.i18n["Dock To Right"] ? ctx_r3.i18n["Dock To Right"] : ctx_r3._i18n["Dock To Right"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.i18n["Dock To Top"] ? ctx_r3.i18n["Dock To Top"] : ctx_r3._i18n["Dock To Top"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.i18n["Dock To Bottom"] ? ctx_r3.i18n["Dock To Bottom"] : ctx_r3._i18n["Dock To Bottom"]);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.i18n["Minimize Toolbar"] ? ctx_r3.i18n["Minimize Toolbar"] : ctx_r3._i18n["Minimize Toolbar"]);
} }
function CmacsFloatingMenuComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
function CmacsFloatingMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵelement(2, "div", 3);
    i0.ɵɵelement(3, "div", 4);
    i0.ɵɵelement(4, "div", 5);
    i0.ɵɵelementStart(5, "div", null, 6);
    i0.ɵɵtemplate(7, CmacsFloatingMenuComponent_div_0_button_7_Template, 2, 0, "button", 7);
    i0.ɵɵtemplate(8, CmacsFloatingMenuComponent_div_0_div_8_Template, 22, 16, "div", 8);
    i0.ɵɵtemplate(9, CmacsFloatingMenuComponent_div_0_div_9_Template, 2, 0, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cdkDragBoundary", ctx_r0.dragBoundary);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("cmacs-floating-menu-horizontal", ctx_r0.position === "top" || ctx_r0.position === "bottom")("cmacs-floating-menu-collapsed", ctx_r0._minimizeToolbar)("cmacs-floating-menu-vertical", ctx_r0.position === "left" || ctx_r0.position === "right");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0._minimizeToolbar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0._minimizeToolbar && ctx_r0.showExtras);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0._minimizeToolbar);
} }
const _c0 = ["*"];
export const FLOATING_MENU_LOCALIZATION = {
    'Dock To Left': 'Dock To Left',
    'Dock To Right': 'Dock To Right',
    'Dock To Top': 'Dock To Top',
    'Dock To Bottom': 'Dock To Bottom',
    'Minimize Toolbar': 'Minimize Toolbar'
};
export class CmacsFloatingMenuComponent {
    constructor() {
        this._minimizeToolbar = false;
        this._i18n = FLOATING_MENU_LOCALIZATION;
        this.position = 'bottom';
        this.trigger = 'click';
        this.visible = false;
        this.showExtras = true;
        this.positionChange = new EventEmitter();
        this.carrot = '';
        this.topBoundary = '0';
        this.bottomBoundary = '0';
        this.leftBoundary = '0';
        this.rightBoundary = '0';
        this.i18n = FLOATING_MENU_LOCALIZATION;
    }
    ngOnChanges() {
        if (this.cdkDrag) {
            this.resetDragDrop();
        }
    }
    minimizeToolbar() {
        this.resetDragDrop();
        this._minimizeToolbar = true;
    }
    expandToolbar() {
        this.resetDragDrop();
        this._minimizeToolbar = false;
    }
    dockToLeft() {
        this.resetDragDrop();
        this.top = null;
        this.left = this.leftBoundary;
        this.right = null;
        this.bottom = null;
        this.position = 'left';
        this.positionChange.emit(this.position);
    }
    dockToRight() {
        this.resetDragDrop();
        this.top = null;
        this.left = null;
        this.right = this.rightBoundary;
        this.bottom = null;
        this.position = 'right';
        this.positionChange.emit(this.position);
    }
    dockToTop() {
        this.resetDragDrop();
        this.top = this.topBoundary;
        this.left = null;
        this.right = null;
        this.bottom = null;
        this.position = 'top';
        this.positionChange.emit(this.position);
    }
    dockToBottom() {
        this.resetDragDrop();
        this.bottom = this.bottomBoundary;
        this.left = null;
        this.right = null;
        this.top = null;
        this.position = 'bottom';
        this.positionChange.emit(this.position);
    }
    getPlacement() {
        switch (this.position) {
            case 'bottom':
                return 'top';
            case 'top':
                return 'bottom';
            case 'left':
                return 'right';
            case 'right':
                return 'left';
        }
    }
    resetDragDrop() {
        this.cdkDrag._dragRef['_previewRect'] = undefined;
        this.cdkDrag._dragRef['_boundaryRect'] = undefined;
        this.cdkDrag.reset();
    }
}
CmacsFloatingMenuComponent.ɵfac = function CmacsFloatingMenuComponent_Factory(t) { return new (t || CmacsFloatingMenuComponent)(); };
CmacsFloatingMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsFloatingMenuComponent, selectors: [["cmacs-floating-menu"]], viewQuery: function CmacsFloatingMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CdkDrag, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkDrag = _t.first);
    } }, hostVars: 16, hostBindings: function CmacsFloatingMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("top", ctx.top)("bottom", ctx.bottom)("left", ctx.left)("right", ctx.right);
        i0.ɵɵclassProp("carrot-bottom-menu", ctx.carrot === "bottom")("carrot-top-menu", ctx.carrot === "top")("cmacs-floating-menu-align-x", ctx.position === "bottom" || ctx.position === "top")("cmacs-floating-menu-align-y", ctx.position === "left" || ctx.position === "right");
    } }, inputs: { position: "position", trigger: "trigger", visible: "visible", showExtras: "showExtras", dragBoundary: "dragBoundary", carrot: "carrot", top: "top", bottom: "bottom", left: "left", right: "right", topBoundary: "topBoundary", bottomBoundary: "bottomBoundary", leftBoundary: "leftBoundary", rightBoundary: "rightBoundary", i18n: "i18n" }, outputs: { positionChange: "positionChange" }, exportAs: ["cmacsFloatingMenu"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "cdkDragBoundary", 4, "ngIf"], ["cdkDrag", "", 3, "cdkDragBoundary"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-north-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-south-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-east-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-west-area"], ["fixedEl", ""], ["cmacs-button", "", "ghost", "", 3, "click", 4, "ngIf"], ["class", "cmacs-floating-menu-main", 4, "ngIf"], ["class", "cmacs-floating-menu-user-content", 4, "ngIf"], ["cmacs-button", "", "ghost", "", 3, "click"], [1, "iconUILarge-Sort"], [1, "cmacs-floating-menu-main"], ["cmacs-button", "", "ghost", "", "cmacs-dropdown", "", 1, "cmacs-floating-menu-main-button", 3, "cmacsTrigger", "placement", "dropdownMenu"], [1, "iconUILarge-More-Veritcal_Icon"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 1, "cmacs-floating-menu-main-ul"], ["cmacs-menu-item", "", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "cmacs-floating-menu-user-content"]], template: function CmacsFloatingMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsFloatingMenuComponent_div_0_Template, 10, 10, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i1.NgIf, i2.CdkDrag, i2.CdkDragHandle, i3.CmacsButtonComponent, i4.CmacsDropdownButtonDirective, i5.CmacsDropDownDirective, i6.CmacsDropdownMenuComponent, i7.CmacsMenuDirective, i8.CmacsMenuItemDirective], styles: ["cmacs-floating-menu{display:inline-block;position:absolute}::ng-deep .cmacs-floating-menu-li.ant-dropdown-menu-item{color:#97a0ae!important}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px rgba(59,63,70,.2);z-index:1;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;transform:translateX(-50%)}.cmacs-floating-menu-align-y{top:50%;transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu:before{transform:rotate(-135deg) translateY(-8px) translateX(-8px)}cmacs-floating-menu.carrot-bottom-menu:after,cmacs-floating-menu.carrot-top-menu:before{width:10px;border:8px solid #0d1e3b;display:block;content:\"\";margin:0 auto;position:relative}cmacs-floating-menu.carrot-bottom-menu:after{transform:rotate(-135deg) translateY(8px) translateX(8px)}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae!important}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#2d3d5a;border-radius:5px 0 0 5px!important;padding:12px 10px}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important;padding-left:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae!important;border-top:none!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-main-button{width:auto}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical cmacs-dropdown,.cmacs-floating-menu-vertical div{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal cmacs-dropdown,.cmacs-floating-menu-horizontal div{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:auto;border-radius:5px 5px 0 0!important}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset;background:#656c79}cmacs-floating-menu .ant-divider-vertical{background:#656c79;height:20px}.cmacs-floating-menu-main-ul-right{margin-left:20px}.cmacs-floating-menu-main-ul-bottom{margin-top:20px}.cmacs-floating-menu-main-ul-top{margin-bottom:20px}.cmacs-floating-menu-main-ul-left{margin-right:20px}.cmacs-floating-menu-draggable-north-area{width:100%;height:10px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:10px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:10px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:10px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:12px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-main button,.cmacs-floating-menu-user-content button{height:24px}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content button{padding:8px 0!important;height:34px}.cmacs-floating-menu-user-content button{padding-right:8px!important;padding-left:8px!important;min-width:36px!important}.cmacs-floating-menu-collapsed{padding:12px;background:#0d1e3b}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{margin-bottom:10px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{margin-top:10px}.ant-tooltip-placement-right{margin-left:10px}.ant-tooltip-placement-left{margin-right:10px}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsFloatingMenuComponent.prototype, "visible", void 0);
__decorate([
    InputBoolean()
], CmacsFloatingMenuComponent.prototype, "showExtras", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFloatingMenuComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-floating-menu',
                exportAs: 'cmacsFloatingMenu',
                templateUrl: './cmacs-floating-menu.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: ['./cmacs-floating-menu.component.css'],
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.carrot-bottom-menu]': `carrot === 'bottom'`,
                    '[class.carrot-top-menu]': `carrot === 'top'`,
                    '[class.cmacs-floating-menu-align-x]': `position === 'bottom' || position === 'top'`,
                    '[class.cmacs-floating-menu-align-y]': `position === 'left' || position === 'right'`,
                    '[style.top]': `top`,
                    '[style.bottom]': `bottom`,
                    '[style.left]': `left`,
                    '[style.right]': `right`,
                }
            }]
    }], function () { return []; }, { cdkDrag: [{
            type: ViewChild,
            args: [CdkDrag]
        }], position: [{
            type: Input
        }], trigger: [{
            type: Input
        }], visible: [{
            type: Input
        }], showExtras: [{
            type: Input
        }], dragBoundary: [{
            type: Input
        }], positionChange: [{
            type: Output
        }], carrot: [{
            type: Input
        }], top: [{
            type: Input
        }], bottom: [{
            type: Input
        }], left: [{
            type: Input
        }], right: [{
            type: Input
        }], topBoundary: [{
            type: Input
        }], bottomBoundary: [{
            type: Input
        }], leftBoundary: [{
            type: Input
        }], rightBoundary: [{
            type: Input
        }], i18n: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZmxvYXRpbmctbWVudS9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mbG9hdGluZy1tZW51L2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFFWixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRG5ELGtDQUE4RTtJQUExQiwyTUFBeUI7SUFDM0Usd0JBQWdDO0lBQ2xDLGlCQUFTOzs7O0lBRVQsK0JBQThFO0lBQzVFLGtDQUdnRDtJQUM5Qyx3QkFBOEM7SUFDaEQsaUJBQVM7SUFDVCxxREFBK0M7SUFDN0MsOEJBS29FO0lBQ2xFLDhCQUEyQztJQUF2QyxpTUFBc0I7SUFDeEIsNEJBQU07SUFBQSxZQUF1RTtJQUFBLGlCQUFPO0lBQ3RGLGlCQUFLO0lBQ0wsOEJBQTRDO0lBQXhDLG9NQUF1QjtJQUN6Qiw2QkFBTTtJQUFBLGFBQTBFO0lBQUEsaUJBQU87SUFDekYsaUJBQUs7SUFDTCwrQkFBMEM7SUFBdEMsbU1BQXFCO0lBQ3ZCLDZCQUFNO0lBQUEsYUFBb0U7SUFBQSxpQkFBTztJQUNuRixp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QUUsS0FBSztvQkFDcEIsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsY0FBYyxFQUFFLE1BQU07b0JBQ3RCLGVBQWUsRUFBRSxPQUFPO2lCQUN6QjthQUNGO3NDQU9xQixPQUFPO2tCQUExQixTQUFTO21CQUFDLE9BQU87WUFFVCxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNO1lBRUUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBDbWFjc0RpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kaXZpZGVyL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmxvYXRpbmdNZW51VHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdEb2NrIFRvIExlZnQnOiAnRG9jayBUbyBMZWZ0JyxcclxuICAnRG9jayBUbyBSaWdodCc6ICdEb2NrIFRvIFJpZ2h0JyxcclxuICAnRG9jayBUbyBUb3AnOiAnRG9jayBUbyBUb3AnLFxyXG4gICdEb2NrIFRvIEJvdHRvbSc6ICdEb2NrIFRvIEJvdHRvbScsXHJcbiAgJ01pbmltaXplIFRvb2xiYXInOiAnTWluaW1pemUgVG9vbGJhcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZmxvYXRpbmctbWVudScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zsb2F0aW5nTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jYXJyb3QtYm90dG9tLW1lbnVdJzogYGNhcnJvdCA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5jYXJyb3QtdG9wLW1lbnVdJzogYGNhcnJvdCA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXhdJzogYHBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXldJzogYHBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tzdHlsZS50b3BdJzogYHRvcGAsXHJcbiAgICAnW3N0eWxlLmJvdHRvbV0nOiBgYm90dG9tYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiBgbGVmdGAsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6IGByaWdodGAsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzRmxvYXRpbmdNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG5cclxuICBfbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgX2kxOG4gPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtEcmFnKSBjZGtEcmFnOiBDZGtEcmFnO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbjogRmxvYXRpbmdNZW51VHlwZSA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHRyaWdnZXIgPSAnY2xpY2snO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHRyYXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRyYWdCb3VuZGFyeTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEZsb2F0aW5nTWVudVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGbG9hdGluZ01lbnVUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKSBjYXJyb3Q6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSByaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB0b3BCb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpIGJvdHRvbUJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KCkgbGVmdEJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KCkgcmlnaHRCb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmNka0RyYWcpIHtcclxuICAgICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaW5pbWl6ZVRvb2xiYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuX21pbmltaXplVG9vbGJhciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBleHBhbmRUb29sYmFyKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLl9taW5pbWl6ZVRvb2xiYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRvY2tUb0xlZnQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdEJvdW5kYXJ5O1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvUmlnaHQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5yaWdodEJvdW5kYXJ5O1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9Ub3AoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gdGhpcy50b3BCb3VuZGFyeTtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAndG9wJztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb0JvdHRvbSgpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLmJvdHRvbUJvdW5kYXJ5O1xyXG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdib3R0b20nO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxhY2VtZW50KCkge1xyXG4gICAgc3dpdGNoICh0aGlzLnBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XHJcbiAgICAgICAgcmV0dXJuICd0b3AnO1xyXG4gICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgIHJldHVybiAnYm90dG9tJztcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXREcmFnRHJvcCgpIHtcclxuICAgIHRoaXMuY2RrRHJhZy5fZHJhZ1JlZlsnX3ByZXZpZXdSZWN0J10gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNka0RyYWcuX2RyYWdSZWZbJ19ib3VuZGFyeVJlY3QnXSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY2RrRHJhZy5yZXNldCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNka0RyYWdcclxuICAgICAqbmdJZj1cInZpc2libGVcIlxyXG4gICAgIFtjZGtEcmFnQm91bmRhcnldPVwiZHJhZ0JvdW5kYXJ5XCI+XHJcbiAgPGRpdiBjZGtEcmFnSGFuZGxlIGNsYXNzPVwiY21hY3MtZmxvYXRpbmctbWVudS1kcmFnZ2FibGUtbm9ydGgtYXJlYVwiPjwvZGl2PlxyXG4gIDxkaXYgY2RrRHJhZ0hhbmRsZSBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtZHJhZ2dhYmxlLXNvdXRoLWFyZWFcIj48L2Rpdj5cclxuICA8ZGl2IGNka0RyYWdIYW5kbGUgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LWRyYWdnYWJsZS1lYXN0LWFyZWFcIj48L2Rpdj5cclxuICA8ZGl2IGNka0RyYWdIYW5kbGUgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LWRyYWdnYWJsZS13ZXN0LWFyZWFcIj48L2Rpdj5cclxuICA8ZGl2ICNmaXhlZEVsXHJcbiAgICAgICBbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1ob3Jpem9udGFsXT1cInBvc2l0aW9uID09PSAndG9wJyB8fCBwb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICAgW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtY29sbGFwc2VkXT1cIl9taW5pbWl6ZVRvb2xiYXJcIlxyXG4gICAgICAgW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtdmVydGljYWxdPVwicG9zaXRpb24gPT09ICdsZWZ0JyB8fCBwb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiPlxyXG5cclxuICAgIDxidXR0b24gY21hY3MtYnV0dG9uIGdob3N0ICpuZ0lmPVwiX21pbmltaXplVG9vbGJhclwiIChjbGljayk9XCJleHBhbmRUb29sYmFyKClcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Tb3J0XCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtbWFpblwiICpuZ0lmPVwiIV9taW5pbWl6ZVRvb2xiYXIgJiYgc2hvd0V4dHJhc1wiPlxyXG4gICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBnaG9zdCBjbWFjcy1kcm9wZG93blxyXG4gICAgICAgICAgICAgIFtjbWFjc1RyaWdnZXJdPVwidHJpZ2dlclwiIFtwbGFjZW1lbnRdPVwiZ2V0UGxhY2VtZW50KClcIlxyXG4gICAgICAgICAgICAgIFtkcm9wZG93bk1lbnVdPVwibWVudVwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LW1haW4tYnV0dG9uXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Nb3JlLVZlcml0Y2FsX0ljb25cIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8Y21hY3MtZHJvcGRvd24tbWVudSAjbWVudT1cImNtYWNzRHJvcGRvd25NZW51XCI+XHJcbiAgICAgICAgPHVsIGNtYWNzLW1lbnVcclxuICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWxcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1tYWluLXVsLXJpZ2h0XT1cInBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1tYWluLXVsLXRvcF09XCJwb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1tYWluLXVsLWJvdHRvbV09XCJwb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgICAgICAgICBbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1tYWluLXVsLWxlZnRdPVwicG9zaXRpb24gPT09ICdyaWdodCdcIj5cclxuICAgICAgICAgIDxsaSAoY2xpY2spPVwiZG9ja1RvTGVmdCgpXCIgY21hY3MtbWVudS1pdGVtPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2kxOG5bJ0RvY2sgVG8gTGVmdCddID8gaTE4blsnRG9jayBUbyBMZWZ0J10gOiBfaTE4blsnRG9jayBUbyBMZWZ0J119fTwvc3Bhbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgKGNsaWNrKT1cImRvY2tUb1JpZ2h0KClcIiBjbWFjcy1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnRG9jayBUbyBSaWdodCddID8gaTE4blsnRG9jayBUbyBSaWdodCddIDogX2kxOG5bJ0RvY2sgVG8gUmlnaHQnXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSAoY2xpY2spPVwiZG9ja1RvVG9wKClcIiBjbWFjcy1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnRG9jayBUbyBUb3AnXSA/IGkxOG5bJ0RvY2sgVG8gVG9wJ10gOiBfaTE4blsnRG9jayBUbyBUb3AnXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSAoY2xpY2spPVwiZG9ja1RvQm90dG9tKClcIiBjbWFjcy1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnRG9jayBUbyBCb3R0b20nXSA/IGkxOG5bJ0RvY2sgVG8gQm90dG9tJ10gOiBfaTE4blsnRG9jayBUbyBCb3R0b20nXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbWFjcy1tZW51LWl0ZW0gKGNsaWNrKT1cIm1pbmltaXplVG9vbGJhcigpXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ29sbGFwc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnTWluaW1pemUgVG9vbGJhciddID8gaTE4blsnTWluaW1pemUgVG9vbGJhciddIDogX2kxOG5bJ01pbmltaXplIFRvb2xiYXInXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2NtYWNzLWRyb3Bkb3duLW1lbnU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LXVzZXItY29udGVudFwiICpuZ0lmPVwiIV9taW5pbWl6ZVRvb2xiYXJcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19