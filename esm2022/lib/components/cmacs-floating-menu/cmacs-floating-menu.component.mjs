import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "../cmacs-button/cmacs-button.component";
import * as i4 from "../cmacs-menu/menu.directive";
import * as i5 from "../cmacs-menu/menu-item.directive";
import * as i6 from "../cmacs-dropdown/dropdown.directive";
import * as i7 from "../cmacs-dropdown/dropdown-menu.component";
import * as i8 from "../cmacs-dropdown/dropdown-button.directive";
function CmacsFloatingMenuComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.expandToolbar()); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} }
function CmacsFloatingMenuComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "button", 13);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "cmacs-dropdown-menu", null, 15)(5, "ul", 16)(6, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.dockToLeft()); });
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r10.dockToRight()); });
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.dockToTop()); });
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_15_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.dockToBottom()); });
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "li", 17);
    i0.ɵɵlistener("click", function CmacsFloatingMenuComponent_div_0_div_8_Template_li_click_18_listener() { i0.ɵɵrestoreView(_r9); const ctx_r13 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r13.minimizeToolbar()); });
    i0.ɵɵelement(19, "i", 18);
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()()()();
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
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("cdkDragEnded", function CmacsFloatingMenuComponent_div_0_Template_div_cdkDragEnded_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onDragEnded($event)); });
    i0.ɵɵelement(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    i0.ɵɵelementStart(5, "div", null, 6);
    i0.ɵɵtemplate(7, CmacsFloatingMenuComponent_div_0_button_7_Template, 2, 0, "button", 7);
    i0.ɵɵtemplate(8, CmacsFloatingMenuComponent_div_0_div_8_Template, 22, 16, "div", 8);
    i0.ɵɵtemplate(9, CmacsFloatingMenuComponent_div_0_div_9_Template, 2, 0, "div", 9);
    i0.ɵɵelementEnd()();
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
        this.oncoordinateschange = new EventEmitter();
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
    onDragEnded($event) {
        this.oncoordinateschange.emit($event);
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
    static { this.ɵfac = function CmacsFloatingMenuComponent_Factory(t) { return new (t || CmacsFloatingMenuComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsFloatingMenuComponent, selectors: [["cmacs-floating-menu"]], viewQuery: function CmacsFloatingMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkDrag, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkDrag = _t.first);
        } }, hostVars: 16, hostBindings: function CmacsFloatingMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("top", ctx.top)("bottom", ctx.bottom)("left", ctx.left)("right", ctx.right);
            i0.ɵɵclassProp("carrot-bottom-menu", ctx.carrot === "bottom")("carrot-top-menu", ctx.carrot === "top")("cmacs-floating-menu-align-x", ctx.position === "bottom" || ctx.position === "top")("cmacs-floating-menu-align-y", ctx.position === "left" || ctx.position === "right");
        } }, inputs: { position: "position", trigger: "trigger", visible: "visible", showExtras: "showExtras", dragBoundary: "dragBoundary", carrot: "carrot", top: "top", bottom: "bottom", left: "left", right: "right", topBoundary: "topBoundary", bottomBoundary: "bottomBoundary", leftBoundary: "leftBoundary", rightBoundary: "rightBoundary", i18n: "i18n" }, outputs: { positionChange: "positionChange", oncoordinateschange: "oncoordinateschange" }, exportAs: ["cmacsFloatingMenu"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["cdkDrag", "", 3, "cdkDragBoundary", "cdkDragEnded", 4, "ngIf"], ["cdkDrag", "", 3, "cdkDragBoundary", "cdkDragEnded"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-north-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-south-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-east-area"], ["cdkDragHandle", "", 1, "cmacs-floating-menu-draggable-west-area"], ["fixedEl", ""], ["cmacs-button", "", "ghost", "", "role", "button", "aria-label", "sort", 3, "click", 4, "ngIf"], ["class", "cmacs-floating-menu-main", 4, "ngIf"], ["class", "cmacs-floating-menu-user-content", 4, "ngIf"], ["cmacs-button", "", "ghost", "", "role", "button", "aria-label", "sort", 3, "click"], [1, "iconUILarge-Sort"], [1, "cmacs-floating-menu-main"], ["cmacs-button", "", "ghost", "", "cmacs-dropdown", "", "role", "button", "aria-label", "ellipsis vertical", 1, "cmacs-floating-menu-main-button", 3, "cmacsTrigger", "placement", "dropdownMenu"], [1, "iconUILarge-More-Veritcal_Icon"], ["menu", "cmacsDropdownMenu"], ["cmacs-menu", "", 1, "cmacs-floating-menu-main-ul"], ["cmacs-menu-item", "", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "cmacs-floating-menu-user-content"]], template: function CmacsFloatingMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsFloatingMenuComponent_div_0_Template, 10, 10, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.visible);
        } }, dependencies: [i1.NgIf, i2.CdkDrag, i2.CdkDragHandle, i3.CmacsButtonComponent, i4.CmacsMenuDirective, i5.CmacsMenuItemDirective, i6.CmacsDropDownDirective, i7.CmacsDropdownMenuComponent, i8.CmacsDropdownButtonDirective], styles: ["cmacs-floating-menu{display:inline-block;position:absolute}::ng-deep .cmacs-floating-menu-li.ant-dropdown-menu-item{color:#97a0ae!important}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px #3b3f4633;z-index:1;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;transform:translate(-50%)}.cmacs-floating-menu-align-y{top:50%;transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu:before{width:10px;border:8px solid #0d1e3b;display:block;content:\"\";margin:0 auto;position:relative;transform:rotate(-135deg) translateY(-8px) translate(-8px)}cmacs-floating-menu.carrot-bottom-menu:after{width:10px;border:8px solid #0d1e3b;display:block;content:\"\";margin:0 auto;position:relative;transform:rotate(-135deg) translateY(8px) translate(8px)}cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae!important}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#2d3d5a;border-radius:5px 0 0 5px!important;padding:12px}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important;padding-left:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae!important;border-top:none!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-main-button{width:auto}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical div,.cmacs-floating-menu-vertical cmacs-dropdown{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal div,.cmacs-floating-menu-horizontal cmacs-dropdown{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset;background:#656c79}cmacs-floating-menu .ant-divider-vertical{background:#656c79;height:20px}.cmacs-floating-menu-main-ul-right{margin-left:20px}.cmacs-floating-menu-main-ul-bottom{margin-top:20px}.cmacs-floating-menu-main-ul-top{margin-bottom:20px}.cmacs-floating-menu-main-ul-left{margin-right:20px}.cmacs-floating-menu-draggable-north-area{width:100%;height:10px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:10px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:10px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:10px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:12px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-user-content button,.cmacs-floating-menu-main button{height:24px}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content button{padding:8px 0!important;height:34px}.cmacs-floating-menu-user-content button{padding-right:8px!important;padding-left:8px!important;min-width:36px!important}.cmacs-floating-menu-collapsed{padding:12px;background:#0d1e3b}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{margin-bottom:10px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{margin-top:10px}.ant-tooltip-placement-right{margin-left:10px}.ant-tooltip-placement-left{margin-right:10px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsFloatingMenuComponent.prototype, "visible", void 0);
__decorate([
    InputBoolean()
], CmacsFloatingMenuComponent.prototype, "showExtras", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFloatingMenuComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-floating-menu', exportAs: 'cmacsFloatingMenu', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.carrot-bottom-menu]': `carrot === 'bottom'`,
                    '[class.carrot-top-menu]': `carrot === 'top'`,
                    '[class.cmacs-floating-menu-align-x]': `position === 'bottom' || position === 'top'`,
                    '[class.cmacs-floating-menu-align-y]': `position === 'left' || position === 'right'`,
                    '[style.top]': `top`,
                    '[style.bottom]': `bottom`,
                    '[style.left]': `left`,
                    '[style.right]': `right`,
                }, template: "<div cdkDrag\r\n     (cdkDragEnded)=\"onDragEnded($event)\"\r\n     *ngIf=\"visible\"\r\n     [cdkDragBoundary]=\"dragBoundary\">\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-north-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-south-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-east-area\"></div>\r\n  <div cdkDragHandle class=\"cmacs-floating-menu-draggable-west-area\"></div>\r\n  <div #fixedEl\r\n       [class.cmacs-floating-menu-horizontal]=\"position === 'top' || position === 'bottom'\"\r\n       [class.cmacs-floating-menu-collapsed]=\"_minimizeToolbar\"\r\n       [class.cmacs-floating-menu-vertical]=\"position === 'left' || position === 'right'\">\r\n\r\n    <button cmacs-button ghost role=\"button\" aria-label=\"sort\" *ngIf=\"_minimizeToolbar\" (click)=\"expandToolbar()\">\r\n      <i class=\"iconUILarge-Sort\"></i>\r\n    </button>\r\n\r\n    <div class=\"cmacs-floating-menu-main\" *ngIf=\"!_minimizeToolbar && showExtras\">\r\n      <button cmacs-button ghost cmacs-dropdown role=\"button\"\r\n              [cmacsTrigger]=\"trigger\" [placement]=\"getPlacement()\"\r\n              [dropdownMenu]=\"menu\" aria-label=\"ellipsis vertical\"\r\n              class=\"cmacs-floating-menu-main-button\">\r\n        <i class=\"iconUILarge-More-Veritcal_Icon\"></i>\r\n      </button>\r\n      <cmacs-dropdown-menu #menu=\"cmacsDropdownMenu\">\r\n        <ul cmacs-menu\r\n            class=\"cmacs-floating-menu-main-ul\"\r\n            [class.cmacs-floating-menu-main-ul-right]=\"position === 'left'\"\r\n            [class.cmacs-floating-menu-main-ul-top]=\"position === 'bottom'\"\r\n            [class.cmacs-floating-menu-main-ul-bottom]=\"position === 'top'\"\r\n            [class.cmacs-floating-menu-main-ul-left]=\"position === 'right'\">\r\n          <li (click)=\"dockToLeft()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Left'] ? i18n['Dock To Left'] : _i18n['Dock To Left']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToRight()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Right'] ? i18n['Dock To Right'] : _i18n['Dock To Right']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToTop()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Top'] ? i18n['Dock To Top'] : _i18n['Dock To Top']}}</span>\r\n          </li>\r\n          <li (click)=\"dockToBottom()\" cmacs-menu-item>\r\n            <span>{{i18n['Dock To Bottom'] ? i18n['Dock To Bottom'] : _i18n['Dock To Bottom']}}</span>\r\n          </li>\r\n          <li cmacs-menu-item (click)=\"minimizeToolbar()\">\r\n            <i class=\"iconArrowLarge-Collapse\"></i>\r\n            <span>{{i18n['Minimize Toolbar'] ? i18n['Minimize Toolbar'] : _i18n['Minimize Toolbar']}}</span>\r\n          </li>\r\n        </ul>\r\n      </cmacs-dropdown-menu>\r\n    </div>\r\n    <div class=\"cmacs-floating-menu-user-content\" *ngIf=\"!_minimizeToolbar\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: ["cmacs-floating-menu{display:inline-block;position:absolute}::ng-deep .cmacs-floating-menu-li.ant-dropdown-menu-item{color:#97a0ae!important}.cmacs-floating-menu-horizontal,.cmacs-floating-menu-vertical{box-shadow:0 3px 4px #3b3f4633;z-index:1;width:max-content;border-radius:5px}.cmacs-floating-menu-align-x{left:50%;transform:translate(-50%)}.cmacs-floating-menu-align-y{top:50%;transform:translateY(-50%)}cmacs-floating-menu.carrot-top-menu:before{width:10px;border:8px solid #0d1e3b;display:block;content:\"\";margin:0 auto;position:relative;transform:rotate(-135deg) translateY(-8px) translate(-8px)}cmacs-floating-menu.carrot-bottom-menu:after{width:10px;border:8px solid #0d1e3b;display:block;content:\"\";margin:0 auto;position:relative;transform:rotate(-135deg) translateY(8px) translate(8px)}cmacs-floating-menu .ant-btn-icon-only:not(.cmacs-floating-menu-main-button),cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button:enabled:focus,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:hover,cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:not(.cmacs-floating-menu-main-button):enabled:focus,cmacs-floating-menu .ant-menu-vertical{background-color:transparent!important}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled,cmacs-floating-menu .ant-menu-item>a{color:#fff!important;padding:0}cmacs-floating-menu .ant-btn-background-ghost.ant-btn-default:enabled i{font-size:16px;color:#fff!important}cmacs-floating-menu .ant-menu-vertical .ant-menu-item,cmacs-floating-menu .ant-menu-vertical .ant-menu-item:not(:last-child){margin:0 auto}cmacs-floating-menu .ant-menu-vertical,cmacs-floating-menu .ant-menu-vertical-left{border:#97a0ae}cmacs-floating-menu .ant-menu-item>a{color:#97a0ae!important}cmacs-floating-menu .ant-menu-item .ant-menu-item-selected,cmacs-floating-menu .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{background-color:#001333;border-radius:3px}cmacs-floating-menu cmacs-divider .ant-divider{background-color:#656c79}.cmacs-floating-menu-main{background-color:#2d3d5a;border-radius:5px 0 0 5px!important;padding:12px}.cmacs-floating-menu-vertical .cmacs-floating-menu-main{border-radius:5px 5px 0 0!important}.cmacs-floating-menu-main button{padding-right:0!important;padding-left:0!important}.cmacs-floating-menu-horizontal .cmacs-floating-menu-main{display:inline-block}.cmacs-floating-menu-main-ul{width:150px;min-width:150px;border-radius:5px;background-color:#0d1e3b;border-color:#0d1e3b!important}.cmacs-floating-menu-main-ul li{padding:8px 10px 8px 12px!important;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#97a0ae!important;border-top:none!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item:hover{background-color:#001333!important}.cmacs-floating-menu-main-ul .ant-dropdown-menu-item i,.cmacs-floating-menu-main-ul .ant-dropdown-menu-submenu-title i{position:relative;top:2px}.cmacs-floating-menu-main-button{width:auto}.cmacs-floating-menu-vertical button,.cmacs-floating-menu-vertical div,.cmacs-floating-menu-vertical cmacs-dropdown{display:block}.cmacs-floating-menu-horizontal button,.cmacs-floating-menu-horizontal div,.cmacs-floating-menu-horizontal cmacs-dropdown{display:inline-block}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-btn-background-ghost.ant-btn-default.cmacs-floating-menu-main-button{width:100%}cmacs-floating-menu .cmacs-floating-menu-vertical .ant-divider-horizontal{width:60%;margin:5px auto;min-width:unset;background:#656c79}cmacs-floating-menu .ant-divider-vertical{background:#656c79;height:20px}.cmacs-floating-menu-main-ul-right{margin-left:20px}.cmacs-floating-menu-main-ul-bottom{margin-top:20px}.cmacs-floating-menu-main-ul-top{margin-bottom:20px}.cmacs-floating-menu-main-ul-left{margin-right:20px}.cmacs-floating-menu-draggable-north-area{width:100%;height:10px;position:absolute;top:0;border-radius:5px 5px 0 0}.cmacs-floating-menu-draggable-south-area{width:100%;height:10px;position:absolute;bottom:0;border-radius:0 0 5px 5px}.cmacs-floating-menu-draggable-east-area{height:100%;width:10px;position:absolute;right:0;border-radius:0 5px 5px 0}.cmacs-floating-menu-draggable-west-area{height:100%;width:10px;position:absolute;left:0;border-radius:5px 0 0 5px}.cmacs-floating-menu-draggable-north-area:hover,.cmacs-floating-menu-draggable-south-area:hover,.cmacs-floating-menu-draggable-east-area:hover,.cmacs-floating-menu-draggable-west-area:hover{cursor:move}.cmacs-floating-menu-user-content{padding:12px;background:#0d1e3b;border-radius:0 5px 5px 0}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content{border-radius:0 0 5px 5px}.cmacs-floating-menu-user-content button,.cmacs-floating-menu-main button{height:24px}.cmacs-floating-menu-vertical .cmacs-floating-menu-user-content button{padding:8px 0!important;height:34px}.cmacs-floating-menu-user-content button{padding-right:8px!important;padding-left:8px!important;min-width:36px!important}.cmacs-floating-menu-collapsed{padding:12px;background:#0d1e3b}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{margin-bottom:10px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{margin-top:10px}.ant-tooltip-placement-right{margin-left:10px}.ant-tooltip-placement-left{margin-right:10px}\n"] }]
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
        }], oncoordinateschange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZmxvYXRpbmctbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZmxvYXRpbmctbWVudS9jbWFjcy1mbG9hdGluZy1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mbG9hdGluZy1tZW51L2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLFlBQVksRUFFWixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDQW5ELGtDQUE4RztJQUExQixpTEFBUyxlQUFBLHNCQUFlLENBQUEsSUFBQztJQUMzRyx3QkFBZ0M7SUFDbEMsaUJBQVM7Ozs7SUFFVCwrQkFBOEUsaUJBQUE7SUFLMUUsd0JBQThDO0lBQ2hELGlCQUFTO0lBQ1QscURBQStDLGFBQUEsYUFBQTtJQU92QywwS0FBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUN4Qiw0QkFBTTtJQUFBLFlBQXVFO0lBQUEsaUJBQU8sRUFBQTtJQUV0Riw4QkFBNEM7SUFBeEMsMktBQVMsZUFBQSxxQkFBYSxDQUFBLElBQUM7SUFDekIsNkJBQU07SUFBQSxhQUEwRTtJQUFBLGlCQUFPLEVBQUE7SUFFekYsK0JBQTBDO0lBQXRDLDRLQUFTLGVBQUEsbUJBQVcsQ0FBQSxJ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N0MscUNBQXFDLEVBQUUsNkNBQTZDO29CQUNwRixxQ0FBcUMsRUFBRSw2Q0FBNkM7b0JBQ3BGLGFBQWEsRUFBRSxLQUFLO29CQUNwQixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixjQUFjLEVBQUUsTUFBTTtvQkFDdEIsZUFBZSxFQUFFLE9BQU87aUJBQ3pCO3NDQVFtQixPQUFPO2tCQUExQixTQUFTO21CQUFDLE9BQU87WUFFVCxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNO1lBQ0csbUJBQW1CO2tCQUE1QixNQUFNO1lBRUUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIFZpZXdDaGlsZCxcclxuICBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBDbWFjc0RpdmlkZXJDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1kaXZpZGVyL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgRmxvYXRpbmdNZW51VHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZMT0FUSU5HX01FTlVfTE9DQUxJWkFUSU9OID0ge1xyXG4gICdEb2NrIFRvIExlZnQnOiAnRG9jayBUbyBMZWZ0JyxcclxuICAnRG9jayBUbyBSaWdodCc6ICdEb2NrIFRvIFJpZ2h0JyxcclxuICAnRG9jayBUbyBUb3AnOiAnRG9jayBUbyBUb3AnLFxyXG4gICdEb2NrIFRvIEJvdHRvbSc6ICdEb2NrIFRvIEJvdHRvbScsXHJcbiAgJ01pbmltaXplIFRvb2xiYXInOiAnTWluaW1pemUgVG9vbGJhcidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZmxvYXRpbmctbWVudScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zsb2F0aW5nTWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWZsb2F0aW5nLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5jYXJyb3QtYm90dG9tLW1lbnVdJzogYGNhcnJvdCA9PT0gJ2JvdHRvbSdgLFxyXG4gICAgJ1tjbGFzcy5jYXJyb3QtdG9wLW1lbnVdJzogYGNhcnJvdCA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXhdJzogYHBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBwb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWFsaWduLXldJzogYHBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tzdHlsZS50b3BdJzogYHRvcGAsXHJcbiAgICAnW3N0eWxlLmJvdHRvbV0nOiBgYm90dG9tYCxcclxuICAgICdbc3R5bGUubGVmdF0nOiBgbGVmdGAsXHJcbiAgICAnW3N0eWxlLnJpZ2h0XSc6IGByaWdodGAsXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENtYWNzRmxvYXRpbmdNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2Vze1xyXG5cclxuICBfbWluaW1pemVUb29sYmFyID0gZmFsc2U7XHJcbiAgX2kxOG4gPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuXHJcbiAgQFZpZXdDaGlsZChDZGtEcmFnKSBjZGtEcmFnOiBDZGtEcmFnO1xyXG5cclxuICBASW5wdXQoKSBwb3NpdGlvbjogRmxvYXRpbmdNZW51VHlwZSA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHRyaWdnZXIgPSAnY2xpY2snO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHRyYXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGRyYWdCb3VuZGFyeTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBwb3NpdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPEZsb2F0aW5nTWVudVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxGbG9hdGluZ01lbnVUeXBlPigpO1xyXG4gIEBPdXRwdXQoKSBvbmNvb3JkaW5hdGVzY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKSBjYXJyb3Q6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHRvcDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZztcclxuICBASW5wdXQoKSByaWdodDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSB0b3BCb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG4gIEBJbnB1dCgpIGJvdHRvbUJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KCkgbGVmdEJvdW5kYXJ5OiBzdHJpbmcgPSAnMCc7XHJcbiAgQElucHV0KCkgcmlnaHRCb3VuZGFyeTogc3RyaW5nID0gJzAnO1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBGTE9BVElOR19NRU5VX0xPQ0FMSVpBVElPTjtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmNka0RyYWcpIHtcclxuICAgICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtaW5pbWl6ZVRvb2xiYXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMuX21pbmltaXplVG9vbGJhciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBleHBhbmRUb29sYmFyKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLl9taW5pbWl6ZVRvb2xiYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRvY2tUb0xlZnQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9IHRoaXMubGVmdEJvdW5kYXJ5O1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xyXG4gICAgdGhpcy5wb3NpdGlvbkNoYW5nZS5lbWl0KHRoaXMucG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvUmlnaHQoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gbnVsbDtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gdGhpcy5yaWdodEJvdW5kYXJ5O1xyXG4gICAgdGhpcy5ib3R0b20gPSBudWxsO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBkb2NrVG9Ub3AoKSB7XHJcbiAgICB0aGlzLnJlc2V0RHJhZ0Ryb3AoKTtcclxuICAgIHRoaXMudG9wID0gdGhpcy50b3BCb3VuZGFyeTtcclxuICAgIHRoaXMubGVmdCA9IG51bGw7XHJcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICAgIHRoaXMuYm90dG9tID0gbnVsbDtcclxuICAgIHRoaXMucG9zaXRpb24gPSAndG9wJztcclxuICAgIHRoaXMucG9zaXRpb25DaGFuZ2UuZW1pdCh0aGlzLnBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIG9uRHJhZ0VuZGVkKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm9uY29vcmRpbmF0ZXNjaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgZG9ja1RvQm90dG9tKCkge1xyXG4gICAgdGhpcy5yZXNldERyYWdEcm9wKCk7XHJcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMuYm90dG9tQm91bmRhcnk7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy5yaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLnRvcCA9IG51bGw7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlLmVtaXQodGhpcy5wb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRQbGFjZW1lbnQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMucG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICByZXR1cm4gJ3RvcCc7XHJcbiAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgcmV0dXJuICdib3R0b20nO1xyXG4gICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgIHJldHVybiAnbGVmdCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldERyYWdEcm9wKCkge1xyXG4gICAgdGhpcy5jZGtEcmFnLl9kcmFnUmVmWydfcHJldmlld1JlY3QnXSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuY2RrRHJhZy5fZHJhZ1JlZlsnX2JvdW5kYXJ5UmVjdCddID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jZGtEcmFnLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2RrRHJhZ1xyXG4gICAgIChjZGtEcmFnRW5kZWQpPVwib25EcmFnRW5kZWQoJGV2ZW50KVwiXHJcbiAgICAgKm5nSWY9XCJ2aXNpYmxlXCJcclxuICAgICBbY2RrRHJhZ0JvdW5kYXJ5XT1cImRyYWdCb3VuZGFyeVwiPlxyXG4gIDxkaXYgY2RrRHJhZ0hhbmRsZSBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtZHJhZ2dhYmxlLW5vcnRoLWFyZWFcIj48L2Rpdj5cclxuICA8ZGl2IGNka0RyYWdIYW5kbGUgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LWRyYWdnYWJsZS1zb3V0aC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiBjZGtEcmFnSGFuZGxlIGNsYXNzPVwiY21hY3MtZmxvYXRpbmctbWVudS1kcmFnZ2FibGUtZWFzdC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiBjZGtEcmFnSGFuZGxlIGNsYXNzPVwiY21hY3MtZmxvYXRpbmctbWVudS1kcmFnZ2FibGUtd2VzdC1hcmVhXCI+PC9kaXY+XHJcbiAgPGRpdiAjZml4ZWRFbFxyXG4gICAgICAgW2NsYXNzLmNtYWNzLWZsb2F0aW5nLW1lbnUtaG9yaXpvbnRhbF09XCJwb3NpdGlvbiA9PT0gJ3RvcCcgfHwgcG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LWNvbGxhcHNlZF09XCJfbWluaW1pemVUb29sYmFyXCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LXZlcnRpY2FsXT1cInBvc2l0aW9uID09PSAnbGVmdCcgfHwgcG9zaXRpb24gPT09ICdyaWdodCdcIj5cclxuXHJcbiAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBnaG9zdCByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInNvcnRcIiAqbmdJZj1cIl9taW5pbWl6ZVRvb2xiYXJcIiAoY2xpY2spPVwiZXhwYW5kVG9vbGJhcigpXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtU29ydFwiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1mbG9hdGluZy1tZW51LW1haW5cIiAqbmdJZj1cIiFfbWluaW1pemVUb29sYmFyICYmIHNob3dFeHRyYXNcIj5cclxuICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gZ2hvc3QgY21hY3MtZHJvcGRvd24gcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW2NtYWNzVHJpZ2dlcl09XCJ0cmlnZ2VyXCIgW3BsYWNlbWVudF09XCJnZXRQbGFjZW1lbnQoKVwiXHJcbiAgICAgICAgICAgICAgW2Ryb3Bkb3duTWVudV09XCJtZW51XCIgYXJpYS1sYWJlbD1cImVsbGlwc2lzIHZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtbWFpbi1idXR0b25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU1vcmUtVmVyaXRjYWxfSWNvblwiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxjbWFjcy1kcm9wZG93bi1tZW51ICNtZW51PVwiY21hY3NEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICA8dWwgY21hY3MtbWVudVxyXG4gICAgICAgICAgICBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtbWFpbi11bFwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtcmlnaHRdPVwicG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtdG9wXT1cInBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtYm90dG9tXT1cInBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1mbG9hdGluZy1tZW51LW1haW4tdWwtbGVmdF09XCJwb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9MZWZ0KClcIiBjbWFjcy1tZW51LWl0ZW0+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aTE4blsnRG9jayBUbyBMZWZ0J10gPyBpMThuWydEb2NrIFRvIExlZnQnXSA6IF9pMThuWydEb2NrIFRvIExlZnQnXX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSAoY2xpY2spPVwiZG9ja1RvUmlnaHQoKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIFJpZ2h0J10gPyBpMThuWydEb2NrIFRvIFJpZ2h0J10gOiBfaTE4blsnRG9jayBUbyBSaWdodCddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9Ub3AoKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIFRvcCddID8gaTE4blsnRG9jayBUbyBUb3AnXSA6IF9pMThuWydEb2NrIFRvIFRvcCddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIChjbGljayk9XCJkb2NrVG9Cb3R0b20oKVwiIGNtYWNzLW1lbnUtaXRlbT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydEb2NrIFRvIEJvdHRvbSddID8gaTE4blsnRG9jayBUbyBCb3R0b20nXSA6IF9pMThuWydEb2NrIFRvIEJvdHRvbSddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNtYWNzLW1lbnUtaXRlbSAoY2xpY2spPVwibWluaW1pemVUb29sYmFyKClcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Db2xsYXBzZVwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4+e3tpMThuWydNaW5pbWl6ZSBUb29sYmFyJ10gPyBpMThuWydNaW5pbWl6ZSBUb29sYmFyJ10gOiBfaTE4blsnTWluaW1pemUgVG9vbGJhciddfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvY21hY3MtZHJvcGRvd24tbWVudT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWZsb2F0aW5nLW1lbnUtdXNlci1jb250ZW50XCIgKm5nSWY9XCIhX21pbmltaXplVG9vbGJhclwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=