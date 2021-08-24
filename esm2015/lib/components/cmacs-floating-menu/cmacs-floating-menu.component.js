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
    } }, inputs: { position: "position", trigger: "trigger", visible: "visible", showExtras: "showExtras", dragBoundary: "dragBoundary", carrot: "carrot", top: "top", bottom: "bottom", left: "left", right: "right", topBoundary: "topBoundary", bottomBoundary: "bottomBoundary", leftBoundary: "leftBoundary", rightBoundary: "rightBoundary", i18n: "i18n" }, outputs: { positionChange: "positionChange" }, exportAs: ["cmacsFloatingMenu"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "cdkDragBoundary", 4, "ngIf"], ["cdkDrag", "", 3, "cdkDragBoundary"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-north-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-south-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-east-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-west-area"], ["fixedEl", ""], ["cmacs-button", "", "ghost", "", "role", "button", "aria-label", "sort", 3, "click", 4, "ngIf"], ["class", "cmacs-floating-menu-main", 4, "ngIf"], ["class", "cmacs-floating-menu-user-content", 4, "ngIf"], ["cmacs-button", "", "ghost", "", "role", "button", "aria-label", "sort", 3, "click"], [1, "iconUILarge-Sort"], [1, "cmacs-floating-menu-main"], ["cmacs-button", "", "ghost", "", "cmacs-dropdown", "", "role", "button", "aria-label", "ellipsis vertical", 1, "cmacs-floating-menu-main-button", 3, "cmacsTrigger", "placement", "dropdownMenu"], [1, "iconUILarge-More-Veritcal_Icon"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 1, "cmacs-floating-menu-main-ul"], ["cmacs-menu-item", "", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "cmacs-floating-menu-user-content"]], template: function CmacsFloatingMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZmxvYXRpbmctbWVudS9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mbG9hdGluZy1tZW51L2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFFWixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDRG5ELGtDQUE4RztJQUExQiwyTUFBeUI7SUFDM0csd0JBQWdDO0lBQ2xDLGlCQUFTOzs7O0lBRVQsK0JBQThFO0lBQzVFLGtDQUdnRDtJQUM5Qyx3QkFBOEM7SUFDaEQsaUJBQVM7SUFDVCxxREFBK0M7SUFDN0MsOEJBS29FO0lBQ2xFLDhCQUEyQztJQUF2QyxpTUFBc0I7SUFDeEIsNEJBQU07SUFBQSxZQUF1RTtJQUFBLGlCQUFPO0lBQ3RGLGlCQUFLO0lBQ0wsOEJBQTRDO0lBQXhDLG9NQUF1QjtJQUN6Qiw2QkFBTTtJQUFBLGFBQTBFO0lBQUEsaUJBQU87SUFDekYsaUJBQUs7SUFDTCwrQkFBMEM7SUFBdEMsbU1BQXFCO0lBQ3ZCLDZCQUFNO0lBQUEsYUFBb0U7SUFBQSxpQkFBTztJQUNuRixp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QUFFLEtBQUs7b0JBQ3BCLGdCQUFnQixFQUFFLFFBQVE7b0JBQzFCLGNBQWMsRUFBRSxNQUFNO29CQUN0QixlQUFlLEVBQUUsT0FBTztpQkFDekI7YUFDRjtzQ0FPcUIsT0FBTztrQkFBMUIsU0FBUzttQkFBQyxPQUFPO1lBRVQsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUVFLE1BQU07a0JBQWQsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUVHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWcgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgQ21hY3NEaXZpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtZGl2aWRlci9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIEZsb2F0aW5nTWVudVR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuXHJcbmV4cG9ydCBjb25zdCBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTiA9IHtcclxuICAnRG9jayBUbyBMZWZ0JzogJ0RvY2sgVG8gTGVmdCcsXHJcbiAgJ0RvY2sgVG8gUmlnaHQnOiAnRG9jayBUbyBSaWdodCcsXHJcbiAgJ0RvY2sgVG8gVG9wJzogJ0RvY2sgVG8gVG9wJyxcclxuICAnRG9jayBUbyBCb3R0b20nOiAnRG9jayBUbyBCb3R0b20nLFxyXG4gICdNaW5pbWl6ZSBUb29sYmFyJzogJ01pbmltaXplIFRvb2xiYXInXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZsb2F0aW5nLW1lbnUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGbG9hdGluZ01lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuY2Fycm90LWJvdHRvbS1tZW51XSc6IGBjYXJyb3QgPT09ICdib3R0b20nYCxcclxuICAgICdbY2xhc3MuY2Fycm90LXRvcC1tZW51XSc6IGBjYXJyb3QgPT09ICd0b3AnYCxcclxuICAgICdbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1hbGlnbi14XSc6IGBwb3NpdGlvbiA9PT0gJ2JvdHRvbScgfHwgcG9zaXRpb24gPT09ICd0b3AnYCxcclxuICAgICdbY2xhc3MuY21hY3MtZmxvYXRpbmctbWVudS1hbGlnbi15XSc6IGBwb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHBvc2l0aW9uID09PSAncmlnaHQnYCxcclxuICAgICdbc3R5bGUudG9wXSc6IGB0b3BgLFxyXG4gICAgJ1tzdHlsZS5ib3R0b21dJzogYGJvdHRvbWAsXHJcbiAgICAnW3N0eWxlLmxlZnRdJzogYGxlZnRgLFxyXG4gICAgJ1tzdHlsZS5yaWdodF0nOiBgcmlnaHRgLFxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zsb2F0aW5nTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcclxuXHJcbiAgX21pbmltaXplVG9vbGJhciA9IGZhbHNlO1xyXG4gIF9pMThuID0gRkxPQVRJTkdfTUVOVV9MT0NBTElaQVRJT047XHJcblxyXG4gIEBWaWV3Q2hpbGQoQ2RrRHJhZykgY2RrRHJhZzogQ2RrRHJhZztcclxuXHJcbiAgQElucHV0KCkgcG9zaXRpb246IEZsb2F0aW5nTWVudVR5cGUgPSAnYm90dG9tJztcclxuICBASW5wdXQoKSB0cmlnZ2VyID0gJ2NsaWNrJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXh0cmFzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkcmFnQm91bmRhcnk6IHN0cmluZztcclxuICBAT3V0cHV0KCkgcG9zaXRpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxGbG9hdGluZ01lbnVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmxvYXRpbmdNZW51VHlwZT4oKTtcclxuXHJcbiAgQElucHV0KCkgY2Fycm90OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0b3A6IHN0cmluZztcclxuICBASW5wdXQoKSBib3R0b206IHN0cmluZztcclxuICBASW5wdXQoKSBsZWZ0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgdG9wQm91bmRhcnk6IHN0cmluZyA9ICcwJztcclxuICBASW5wdXQoKSBib3R0b21Cb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpIGxlZnRCb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpIHJpZ2h0Qm91bmRhcnk6IHN0cmluZyA9ICcwJztcclxuXHJcbiAgQElucHV0KCkgaTE4bjogYW55ID0gRkxPQVRJTkdfTUVOVV9MT0NBTElaQVRJT047XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5jZGtEcmFnKSB7XHJcbiAgICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWluaW1pemVUb29sYmFyKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLl9taW5pbWl6ZVRvb2xiYXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZXhwYW5kVG9vbGJhcigpIHtcclxuICAgIHRoaXMucmVzZXREcmFnRHJvcCgpO1xyXG4gICAgdGhpcy5fbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9MZWZ0KCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmxlZnRCb3VuZGFyeTtcclxuICAgIHRoaXMucmlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdsZWZ0JztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGRvY2tUb1JpZ2h0KCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IHRoaXMucmlnaHRCb3VuZGFyeTtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAncmlnaHQnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvVG9wKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLnRvcCA9IHRoaXMudG9wQm91bmRhcnk7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9Cb3R0b20oKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuYm90dG9tID0gdGhpcy5ib3R0b21Cb3VuZGFyeTtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldFBsYWNlbWVudCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xyXG4gICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgIHJldHVybiAndG9wJztcclxuICAgICAgY2FzZSAndG9wJzpcclxuICAgICAgICByZXR1cm4gJ2JvdHRvbSc7XHJcbiAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0RHJhZ0Ryb3AoKSB7XHJcbiAgICB0aGlzLmNka0RyYWcuX2RyYWdSZWZbJ19wcmV2aWV3UmVjdCddID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jZGtEcmFnLl9kcmFnUmVmWydfYm91bmRhcnlSZWN0J10gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNka0RyYWcucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjZGtEcmFnXHJcbiAgICAgKm5nSWY9XCJ2aXNpYmxlXCJcclxuICAgICBbY2RrRHJhZ0JvdW5kYXJ5XT1cImRyYWdCb3VuZGFyeVwiPlxyXG4gIDxkaXYgY2RrRHJhZ0hhbmRsZSBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtZHJhZ2dhYmxlLW5vcnRoLWFyZWFcIj48L2Rpdj5cclxuICA8ZGl2IGNka0RyYWdIYW5kbGUgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LWRyYWdnYWJsZS1zb3V0aC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiBjZGtEcmFnSGFuZGxlIGNsYXNzPVwiY21hY3MtZmxvYXRpbmctbWVudS1kcmFnZ2FibGUtZWFzdC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiBjZGtEcmFnSGFuZGxlIGNsYXNzPVwiY21hY3MtZmxvYXRpbmctbWVudS1kcmFnZ2FibGUtd2VzdC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiAjZml4ZWRFbFxyXG4gICAgICAgW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtaG9yaXpvbnRhbF09XCJwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWNvbGxhcHNlZF09XCJfbWluaW1pemVUb29sYmFyXCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LXZlcnRpY2FsXT1cInBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdcIj5cclxuXHJcbiAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBnaG9zdCByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInNvcnRcIiAqbmdJZj1cIl9taW5pbWl6ZVRvb2xiYXJcIiAoY2xpY2spPVwiZXhwYW5kVG9vbGJhcigpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtU29ydFwiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LW1haW5cIiAqbmdJZj1cIiFfbWluaW1pemVUb29sYmFyICYmIHNob3dFeHRyYXNcIj5cclxuICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gZ2hvc3QgY21hY3MtZHJvcGRvd24gcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW2NtYWNzVHJpZ2dlcl09XCJ0cmlnZ2VyXCIgW3BsYWNlbWVudF09XCJnZXRQbGFjZW1lbnQoKVwiXHJcbiAgICAgICAgICAgICAgW2Ryb3Bkb3duTWVudV09XCJtZW51XCIgYXJpYS1sYWJlbD1cImVsbGlwc2lzIHZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtbWFpbi1idXR0b25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vcmUtVmVyaXRjYWxfSWNvblwiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICA8dWwgY21hY3MtbWVudVxyXG4gICAgICAgICAgICBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtbWFpbi11bFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtcmlnaHRdPVwicG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtdG9wXT1cInBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtYm90dG9tXT1cInBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtbGVmdF09XCJwb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9MZWZ0KClcIiBjbWFjcy1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnRG9jayBUbyBMZWZ0J10gPyBpMThuWydEb2NrIFRvIExlZnQnXSA6IF9pMThuWydEb2NrIFRvIExlZnQnXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSAoY2xpY2spPVwiZG9ja1RvUmlnaHQoKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIFJpZ2h0J10gPyBpMThuWydEb2NrIFRvIFJpZ2h0J10gOiBfaTE4blsnRG9jayBUbyBSaWdodCddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9Ub3AoKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIFRvcCddID8gaTE4blsnRG9jayBUbyBUb3AnXSA6IF9pMThuWydEb2NrIFRvIFRvcCddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9Cb3R0b20oKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIEJvdHRvbSddID8gaTE4blsnRG9jayBUbyBCb3R0b20nXSA6IF9pMThuWydEb2NrIFRvIEJvdHRvbSddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbSAoY2xpY2spPVwibWluaW1pemVUb29sYmFyKClcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Db2xsYXBzZVwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydNaW5pbWl6ZSBUb29sYmFyJ10gPyBpMThuWydNaW5pbWl6ZSBUb29sYmFyJ10gOiBfaTE4blsnTWluaW1pemUgVG9vbGJhciddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtdXNlci1jb250ZW50XCIgKm5nSWY9XCIhX21pbmltaXplVG9vbGJhclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=