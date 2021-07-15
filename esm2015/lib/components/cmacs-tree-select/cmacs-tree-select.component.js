import { __decorate } from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CmacsTreeSelectService } from './cmacs-tree-select.service';
import { slideMotion, zoomMotion } from 'ng-zorro-antd/core/animation';
import { NzTreeHigherOrderServiceToken } from '../cmacs-tree/tree/nz-tree-service.resolver';
import { NzTreeBase } from '../cmacs-tree/tree/nz-tree-base';
import { InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-tree-select.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "@angular/cdk/overlay";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/core/overlay";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "../cmacs-tree/cmacs-tree.component";
const _c0 = ["inputElement"];
const _c1 = ["treeRef"];
function CmacsTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10, 11);
    i0.ɵɵlistener("compositionstart", function CmacsTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.isComposing = true; })("compositionend", function CmacsTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.isComposing = false; })("keydown", function CmacsTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onKeyDownInput($event); })("ngModelChange", function CmacsTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.setInputValue($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("no-margin-left", ctx_r1.selectedNodes.length);
    i0.ɵɵproperty("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.disabled);
} }
function CmacsTreeSelectComponent_2_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsTreeSelectComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTreeSelectComponent_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 13);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r8 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function CmacsTreeSelectComponent_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, CmacsTreeSelectComponent_2_ng_template_0_Template, 1, 1, "ng-template", 12);
    i0.ɵɵlistener("backdropClick", function CmacsTreeSelectComponent_2_Template_ng_template_backdropClick_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.closeDropDown(); })("detach", function CmacsTreeSelectComponent_2_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.closeDropDown(); })("positionChange", function CmacsTreeSelectComponent_2_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx_r2.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx_r2.open)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx_r2.dropdownMatchSelectWidth ? null : ctx_r2.triggerWidth)("cdkConnectedOverlayWidth", ctx_r2.dropdownMatchSelectWidth ? ctx_r2.triggerWidth : null);
} }
function CmacsTreeSelectComponent_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r22.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.placeHolder, " ");
} }
function CmacsTreeSelectComponent_ng_container_6_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r23.selectedValueDisplay);
    i0.ɵɵattribute("title", ctx_r23.displayWith(ctx_r23.selectedNodes[0]));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r23.displayWith(ctx_r23.selectedNodes[0]), " ");
} }
function CmacsTreeSelectComponent_ng_container_6_div_4_ng_template_2_Template(rf, ctx) { }
function CmacsTreeSelectComponent_ng_container_6_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_6_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("display", ctx_r24.searchDisplay);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r24.inputValue, "\u00A0");
} }
function CmacsTreeSelectComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_6_div_2_Template, 2, 3, "div", 15);
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_container_6_div_3_Template, 2, 3, "div", 16);
    i0.ɵɵtemplate(4, CmacsTreeSelectComponent_ng_container_6_div_4_Template, 5, 4, "div", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.placeHolder && ctx_r3.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedNodes.length === 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.showSearch);
} }
function CmacsTreeSelectComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("display", ctx_r26.placeHolderDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.placeHolder, " ");
} }
function CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("mousedown", function CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r35); const node_r30 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.removeSelected(node_r30, true, $event); });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelementEnd();
} }
function CmacsTreeSelectComponent_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 27);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template, 2, 0, "span", 28);
    i0.ɵɵelementStart(3, "span", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r30 = ctx.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", node_r30.isDisabled);
    i0.ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r27.noAnimation == null ? null : ctx_r27.noAnimation.nzNoAnimation);
    i0.ɵɵattribute("title", ctx_r27.displayWith(node_r30));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !node_r30.isDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.displayWith(node_r30));
} }
function CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 33);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r36.maxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c2, i0.ɵɵpipeBind2(2, 2, ctx_r36.selectedNodes, ctx_r36.maxTagCount)));
} }
function CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r37.selectedNodes.length - ctx_r37.maxTagCount, " ... ");
} }
function CmacsTreeSelectComponent_ng_container_7_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 32);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("@zoomMotion", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r28.maxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r28.maxTagPlaceholder);
} }
function CmacsTreeSelectComponent_ng_container_7_ng_template_7_Template(rf, ctx) { }
function CmacsTreeSelectComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ul", 24);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_7_div_2_Template, 2, 3, "div", 15);
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_container_7_ng_container_3_Template, 5, 7, "ng-container", 25);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, CmacsTreeSelectComponent_ng_container_7_li_5_Template, 4, 3, "li", 26);
    i0.ɵɵelementStart(6, "li", 20);
    i0.ɵɵtemplate(7, CmacsTreeSelectComponent_ng_container_7_ng_template_7_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.placeHolder && ctx_r4.selectedNodes.length === 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 5, ctx_r4.selectedNodes, 0, ctx_r4.maxTagCount))("ngForTrackBy", ctx_r4.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.selectedNodes.length > ctx_r4.maxTagCount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsTreeSelectComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵlistener("mousedown", function CmacsTreeSelectComponent_span_8_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsTreeSelectComponent_span_8_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return ctx_r40.onClearSelection($event); });
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementEnd();
} }
function CmacsTreeSelectComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 36);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵelementEnd();
} }
function CmacsTreeSelectComponent_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsTreeSelectComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeSelectComponent_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(14);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function CmacsTreeSelectComponent_ng_template_13_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵelementStart(2, "i", 42);
    i0.ɵɵlistener("click", function CmacsTreeSelectComponent_ng_template_13_ng_container_3_Template_i_click_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return ctx_r45.onaddparentevt($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 43);
    i0.ɵɵtext(4, "New Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
const _c3 = function () { return []; };
function CmacsTreeSelectComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "cmacs-tree", 39, 40);
    i0.ɵɵlistener("nzExpandChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return ctx_r47.onExpandedKeysChange($event); })("nzClick", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzClick_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.treeClick.emit($event); })("nzCheckedKeysChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzCheckedKeysChange_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.updateSelectedNodes(); })("nzSelectedKeysChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzSelectedKeysChange_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r51 = i0.ɵɵnextContext(); return ctx_r51.updateSelectedNodes(); })("nzCheckBoxChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzCheckBoxChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r52 = i0.ɵɵnextContext(); return ctx_r52.treeCheckBoxChange.emit($event); })("searchValueChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_searchValueChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.setSearchValues($event); })("onaddchild", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_onaddchild_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.onaddchildevt($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_template_13_ng_container_3_Template, 5, 0, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown--single", !ctx_r9.multiple)("ant-select-dropdown--multiple", ctx_r9.multiple)("ant-select-dropdown-placement-bottomLeft", ctx_r9.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r9.dropDownPosition === "top");
    i0.ɵɵproperty("@slideMotion", !ctx_r9.cmacsOpen && ctx_r9.open ? ctx_r9.dropDownPosition : "void")("nzNoAnimation", ctx_r9.noAnimation == null ? null : ctx_r9.noAnimation.nzNoAnimation)("ngStyle", ctx_r9.dropdownStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectMode", true)("nzData", ctx_r9.nodes)("inlineEdit", ctx_r9.inlineEdit)("nzMultiple", ctx_r9.multiple)("searchValue", ctx_r9.inputValue)("checkable", ctx_r9.checkable)("radio", ctx_r9.radio)("asyncData", ctx_r9.asyncData)("showExpand", ctx_r9.showExpand)("showLine", ctx_r9.showLine)("expandedIcon", ctx_r9.expandedIcon)("nzBlockNode", true)("expandAll", ctx_r9.defaultExpandAll)("nzExpandedKeys", ctx_r9.defaultExpandedKeys)("nzCheckedKeys", ctx_r9.checkable ? ctx_r9.value : i0.ɵɵpureFunction0(28, _c3))("nzSelectedKeys", !ctx_r9.checkable ? ctx_r9.value : i0.ɵɵpureFunction0(29, _c3));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.inlineEdit);
} }
export function higherOrderServiceFactory(injector) {
    return injector.get(CmacsTreeSelectService);
}
export class CmacsTreeSelectComponent extends NzTreeBase {
    constructor(nzTreeService, renderer, cdr, elementRef, noAnimation) {
        super(nzTreeService);
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.allowClear = true;
        this.showExpand = true;
        this.showLine = false;
        this.dropdownMatchSelectWidth = true;
        this.checkable = false;
        this.showSearch = false;
        this.disabled = false;
        this.asyncData = false;
        this.multiple = false;
        this.defaultExpandAll = false;
        this.cmacsOpen = false;
        this.inlineEdit = false;
        this.radio = false;
        this.nodes = [];
        this.open = false;
        this.size = 'default';
        this.placeHolder = '';
        this.defaultExpandedKeys = [];
        this.displayWith = (node) => node.title;
        this.openChange = new EventEmitter();
        this.cleared = new EventEmitter();
        this.removed = new EventEmitter();
        this.expandChange = new EventEmitter();
        this.treeClick = new EventEmitter();
        this.treeCheckBoxChange = new EventEmitter();
        this.onaddchild = new EventEmitter();
        this.onaddparent = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.onTouched = () => null;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    }
    onaddparentevt($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.onaddparent.emit();
    }
    addParent(node) {
        this.treeRef.addParent(node);
    }
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    get searchDisplay() {
        return this.open ? 'block' : 'none';
    }
    get isMultiple() {
        return this.multiple || this.checkable;
    }
    get selectedValueDisplay() {
        let showSelectedValue = false;
        let opacity = 1;
        if (!this.showSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.open) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        if (this.inlineEdit) {
            this.showExpand = false;
        }
        if (this.checkable && this.cmacsOpen) {
            this.defaultExpandAll = true;
        }
    }
    ngAfterViewInit() {
        if (this.cmacsOpen && this.treeRef) {
            this.treeRef.searchValue = '';
        }
    }
    onaddchildevt($event) {
        this.onaddchild.emit($event);
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.closeDropDown();
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nodes')) {
            this.updateSelectedNodes(true);
        }
    }
    writeValue(value) {
        if (isNotNil(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [value];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    trigger() {
        if (this.disabled || (!this.disabled && this.open)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.showSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    openDropdown() {
        if (!this.disabled) {
            this.open = true;
            this.openChange.emit(this.open);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
        }
    }
    closeDropDown() {
        this.onTouched();
        this.open = false;
        this.openChange.emit(this.open);
        this.cdr.markForCheck();
    }
    onKeyDownInput(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
                this.nzTreeService.triggerEventChange$.next({
                    eventName: 'removeSelect',
                    node: removeNode
                });
            }
            if (this.cmacsOpen) {
                this.treeRef.searchValue = '';
            }
        }
    }
    onExpandedKeysChange(value) {
        this.expandChange.emit(value);
        this.defaultExpandedKeys = [...value.keys];
    }
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    removeSelected(node, emit = true, event) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.checkable) {
            this.nzTreeService.conduct(node);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.multiple);
        }
        if (emit) {
            this.removed.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    subscribeSelectionChange() {
        return merge(this.treeClick.pipe(tap((event) => {
            const node = event.node;
            if (this.radio && this.checkable) {
                const nodes = this.coerceTreeNodes(this.nodes);
                this.nzTreeService.calcCheckedKeys([], nodes, true);
                node.isChecked = !node.isChecked;
                this.nzTreeService.calcCheckedKeys([node.key], nodes, true);
                this.updateSelectedNodes();
            }
            else if (this.checkable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.nzTreeService.conduct(node);
            }
            if (this.checkable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            const node = event.node;
            return this.checkable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled;
        })), this.checkable ? this.treeCheckBoxChange : observableOf(), this.cleared, this.removed).subscribe(() => {
            this.updateSelectedNodes();
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.showSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    updateSelectedNodes(init = false) {
        if (init) {
            const nodes = this.coerceTreeNodes(this.nodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.initTree(nodes);
            if (this.checkable && !this.radio) {
                this.nzTreeService.calcCheckedKeys(this.value, nodes);
            }
            else if (!this.radio) {
                this.nzTreeService.calcSelectedKeys(this.value, nodes, this.isMultiple);
            }
            else {
                this.nzTreeService.calcCheckedKeys(this.value, nodes, true);
            }
        }
        if (this.checkable && !this.radio) {
            this.selectedNodes = [...this.getCheckedNodeList()];
        }
        else if (!this.radio) {
            this.selectedNodes = [...this.getSelectedNodeList()];
        }
        else {
            this.selectedNodes = [...this.getCheckedNodeList()];
        }
    }
    updatePosition() {
        setTimeout(() => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    onClearSelection($event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.cleared.emit();
    }
    setSearchValues($event) {
        Promise.resolve().then(() => {
            this.isNotFound = (this.showSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
        });
    }
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    trackValue(_index, option) {
        return option.key;
    }
}
CmacsTreeSelectComponent.ɵfac = function CmacsTreeSelectComponent_Factory(t) { return new (t || CmacsTreeSelectComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeSelectService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
CmacsTreeSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTreeSelectComponent, selectors: [["cmacs-tree-select"]], viewQuery: function CmacsTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
        i0.ɵɵviewQuery(CdkOverlayOrigin, 1);
        i0.ɵɵviewQuery(CdkConnectedOverlay, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostVars: 12, hostBindings: function CmacsTreeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsTreeSelectComponent_click_HostBindingHandler() { return ctx.trigger(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-select-lg", ctx.size === "large")("ant-select-sm", ctx.size === "small")("ant-select-enabled", !ctx.disabled)("ant-select-disabled", ctx.disabled)("ant-select-allow-clear", ctx.allowClear)("ant-select-open", ctx.open && !ctx.cmacsOpen);
    } }, inputs: { allowClear: "allowClear", showExpand: "showExpand", showLine: "showLine", expandedIcon: "expandedIcon", dropdownMatchSelectWidth: "dropdownMatchSelectWidth", checkable: "checkable", showSearch: "showSearch", disabled: "disabled", asyncData: "asyncData", multiple: "multiple", defaultExpandAll: "defaultExpandAll", cmacsOpen: "cmacsOpen", inlineEdit: "inlineEdit", radio: "radio", notFoundContent: "notFoundContent", nodes: "nodes", open: "open", size: "size", placeHolder: "placeHolder", dropdownStyle: "dropdownStyle", defaultExpandedKeys: "defaultExpandedKeys", displayWith: "displayWith", maxTagCount: "maxTagCount", maxTagPlaceholder: "maxTagPlaceholder" }, outputs: { openChange: "openChange", cleared: "cleared", removed: "removed", expandChange: "expandChange", treeClick: "treeClick", treeCheckBoxChange: "treeCheckBoxChange", onaddchild: "onaddchild", onaddparent: "onaddparent" }, exportAs: ["cmacsTreeSelect"], features: [i0.ɵɵProvidersFeature([
            CmacsTreeSelectService,
            {
                provide: NzTreeHigherOrderServiceToken,
                useFactory: higherOrderServiceFactory,
                deps: [[new Self(), Injector]]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsTreeSelectComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 15, vars: 12, consts: [["inputTemplate", ""], [4, "ngIf"], ["cdkOverlayOrigin", "", "tabindex", "0", 1, "ant-select-selection"], [1, "ant-select-selection__clear", "cmacs-tree-select-search-icon"], [1, "iconCreation-Search", "ant-select-clear-icon"], ["class", "ant-select-selection__clear", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__clear", "cmacs-tree-select-arrow"], [1, "ant-select-clear-icon", "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow", 4, "ngIf"], ["content", ""], ["autocomplete", "off", 1, "ant-select-search__field", 3, "ngModel", "disabled", "compositionstart", "compositionend", "keydown", "ngModelChange"], ["inputElement", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], [4, "ngTemplateOutlet"], [1, "ant-select-selection__rendered"], ["class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection__placeholder"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [1, "cmacs-tree-select-ul", "ant-select-selection__rendered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__content"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [1, "ant-select-selection__choice"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close-circle", "theme", "fill", 1, "ant-select-clear-icon"], [1, "ant-select-arrow"], ["nz-icon", "", "nzType", "down", 1, "ant-select-arrow-icon"], [1, "ant-select-dropdown", "ant-select-tree-dropdown", "cmacs-tree-select-dropdown", "cmacs-custom-scrollbar", 3, "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", 3, "selectMode", "nzData", "inlineEdit", "nzMultiple", "searchValue", "checkable", "radio", "asyncData", "showExpand", "showLine", "expandedIcon", "nzBlockNode", "expandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "searchValueChange", "onaddchild"], ["treeRef", ""], [1, "cmacs-add-new-category"], [1, "iconUILarge-New", "cmacs-select-tree-new-icon", 3, "click"], [1, "cmacs-add-new-category-title"]], template: function CmacsTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsTreeSelectComponent_ng_template_0_Template, 2, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsTreeSelectComponent_2_Template, 1, 5, undefined, 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "span", 3);
        i0.ɵɵelement(5, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsTreeSelectComponent_ng_container_6_Template, 5, 3, "ng-container", 1);
        i0.ɵɵtemplate(7, CmacsTreeSelectComponent_ng_container_7_Template, 8, 9, "ng-container", 1);
        i0.ɵɵtemplate(8, CmacsTreeSelectComponent_span_8_Template, 2, 0, "span", 5);
        i0.ɵɵelementStart(9, "div", 6);
        i0.ɵɵelement(10, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, CmacsTreeSelectComponent_span_11_Template, 2, 0, "span", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, CmacsTreeSelectComponent_ng_container_12_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(13, CmacsTreeSelectComponent_ng_template_13_Template, 4, 30, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.cmacsOpen);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-select-selection--single", !ctx.isMultiple)("ant-select-selection--multiple", ctx.isMultiple);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", !ctx.isMultiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isMultiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.allowClear && ctx.selectedNodes.length);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("cmacs-selected-nodes", ctx.selectedNodes.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isMultiple);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cmacsOpen);
    } }, directives: [i3.NgIf, i4.CdkOverlayOrigin, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i4.CdkConnectedOverlay, i6.NzConnectedOverlayDirective, i3.NgTemplateOutlet, i3.NgStyle, i3.NgForOf, i2.NzNoAnimationDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i9.CmacsTreeComponent], pipes: [i3.SlicePipe], styles: [".cmacs-tree-select-dropdown[_ngcontent-%COMP%]{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}  .ant-select-tree-dropdown .ant-select-switcher-icon{font-size:10px}  .ant-select-tree-dropdown .ant-select-tree-checkbox{margin:0 3px 0 0}  .ant-select-tree-dropdown .ant-select-tree .ant-select-tree-node-content-wrapper{top:2px}  .ant-select-tree-dropdown .ant-select-tree-switcher{position:relative;width:24px;line-height:24px;cursor:pointer;height:24px;display:inline-block;vertical-align:middle;text-align:center;margin:0}.cmacs-tree-select-dropdown[_ngcontent-%COMP%]{opacity:1!important;transform:none!important}[_nghost-%COMP%]     .ant-select-selection, [_nghost-%COMP%]     .ant-select-selection:focus, [_nghost-%COMP%]     .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon[_ngcontent-%COMP%]{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}[_nghost-%COMP%]     .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear[_ngcontent-%COMP%]{right:14px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-left:1px solid #dee0e5;padding:0 5px;font-size:24px;top:-14px;position:relative}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{top:2px;position:relative}.ant-select-selection--multiple[_ngcontent-%COMP%]   .ant-select-search--inline[_ngcontent-%COMP%]   .ant-select-search__field[_ngcontent-%COMP%]{padding-left:0}.ant-select-selection[_ngcontent-%COMP%]:hover   .cmacs-selected-nodes.iconArrowLarge-Arrow-Right[_ngcontent-%COMP%]:before{opacity:0}.cmacs-add-new-category[_ngcontent-%COMP%]{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-add-new-category-title[_ngcontent-%COMP%]{padding:3px 5px}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.no-margin-left[_ngcontent-%COMP%]{margin-left:0!important}  .ant-select-selection--multiple .cmacs-tree-select-ul .ant-select-search--inline .ant-select-search__field{max-width:84%;margin-left:28px}", ".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        overflow: auto;\n        scrollbar-color: #cfd3d9 #ffffff;\n        scrollbar-width: thin;\n      }\n\n      cmacs-tree-select[_ngcontent-%COMP%] {\n        overflow: hidden;\n      }"], data: { animation: [slideMotion, zoomMotion] } });
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "allowClear", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "showExpand", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "showLine", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "dropdownMatchSelectWidth", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "checkable", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "showSearch", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "asyncData", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "multiple", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "defaultExpandAll", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "cmacsOpen", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsTreeSelectComponent.prototype, "radio", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTreeSelectComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tree-select',
                exportAs: 'cmacsTreeSelect',
                animations: [slideMotion, zoomMotion],
                templateUrl: './cmacs-tree-select.component.html',
                styleUrls: ['./cmacs-tree-select.component.css'],
                providers: [
                    CmacsTreeSelectService,
                    {
                        provide: NzTreeHigherOrderServiceToken,
                        useFactory: higherOrderServiceFactory,
                        deps: [[new Self(), Injector]]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'size==="large"',
                    '[class.ant-select-sm]': 'size==="small"',
                    '[class.ant-select-enabled]': '!disabled',
                    '[class.ant-select-disabled]': 'disabled',
                    '[class.ant-select-allow-clear]': 'allowClear',
                    '[class.ant-select-open]': 'open && !cmacsOpen',
                    '(click)': 'trigger()'
                },
                styles: [
                    `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        overflow: auto;
        scrollbar-color: #cfd3d9 #ffffff;
        scrollbar-width: thin;
      }

      cmacs-tree-select {
        overflow: hidden;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.CmacsTreeSelectService }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { allowClear: [{
            type: Input
        }], showExpand: [{
            type: Input
        }], showLine: [{
            type: Input
        }], expandedIcon: [{
            type: Input
        }], dropdownMatchSelectWidth: [{
            type: Input
        }], checkable: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], disabled: [{
            type: Input
        }], asyncData: [{
            type: Input
        }], multiple: [{
            type: Input
        }], defaultExpandAll: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], inlineEdit: [{
            type: Input
        }], radio: [{
            type: Input
        }], notFoundContent: [{
            type: Input
        }], nodes: [{
            type: Input
        }], open: [{
            type: Input
        }], size: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], dropdownStyle: [{
            type: Input
        }], defaultExpandedKeys: [{
            type: Input
        }], displayWith: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], maxTagPlaceholder: [{
            type: Input
        }], openChange: [{
            type: Output
        }], cleared: [{
            type: Output
        }], removed: [{
            type: Output
        }], expandChange: [{
            type: Output
        }], treeClick: [{
            type: Output
        }], treeCheckBoxChange: [{
            type: Output
        }], onaddchild: [{
            type: Output
        }], onaddparent: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], treeRef: [{
            type: ViewChild,
            args: ['treeRef']
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUtc2VsZWN0L2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixJQUFJLEVBR0osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM1RixPQUFPLEVBQUUs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dGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7Q21hY3NUcmVlQ29tcG9uZW50fSBmcm9tIFwiLi4vY21hY3MtdHJlZS9jbWFjcy10cmVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOelRyZWVCYXNlU2VydmljZSB9IGZyb20gJy4uL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IHNsaWRlTW90aW9uLCB6b29tTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuIH0gZnJvbSAnLi4vY21hY3MtdHJlZS90cmVlL256LXRyZWUtc2VydmljZS5yZXNvbHZlcic7XHJcbmltcG9ydCB7IE56VHJlZUJhc2UgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoQ21hY3NUcmVlU2VsZWN0U2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlU2VsZWN0JyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NUcmVlU2VsZWN0U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ3NpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdzaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ29wZW4gJiYgIWNtYWNzT3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0cmlnZ2VyKCknXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICNjZmQzZDkgI2ZmZmZmZjtcclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNtYWNzLXRyZWUtc2VsZWN0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm9kZXM6IEFycmF5PE56VHJlZU5vZGUgfCBOelRyZWVOb2RlT3B0aW9ucz4gPSBbXTtcclxuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgZGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgb25hZGRwYXJlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0cmVlUmVmJykgdHJlZVJlZjogQ21hY3NUcmVlQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbikgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcclxuICBpc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgb25hZGRwYXJlbnRldnQoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm9uYWRkcGFyZW50LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcmVudChub2RlOiBhbnkpIHtcclxuICAgIHRoaXMudHJlZVJlZi5hZGRQYXJlbnQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlIHx8IHRoaXMuY2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcclxuICAgIGlmICh0aGlzLmlubGluZUVkaXQpIHtcclxuICAgICAgdGhpcy5zaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgdGhpcy5jbWFjc09wZW4pe1xyXG4gICAgICB0aGlzLmRlZmF1bHRFeHBhbmRBbGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NPcGVuICYmIHRoaXMudHJlZVJlZikge1xyXG4gICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vZGVzJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlIGFzIHN0cmluZ107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcGVuKSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTm9kZSA9IHRoaXMuc2VsZWN0ZWROb2Rlc1t0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoe1xyXG4gICAgICAgICAgZXZlbnROYW1lOiAncmVtb3ZlU2VsZWN0JyxcclxuICAgICAgICAgIG5vZGU6IHJlbW92ZU5vZGVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuZGVmYXVsdEV4cGFuZGVkS2V5cyA9IFsuLi52YWx1ZS5rZXlzIV07XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm11bHRpcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIG1lcmdlKFxyXG4gICAgICB0aGlzLnRyZWVDbGljay5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XHJcbiAgICAgICAgICBpZiAodGhpcy5yYWRpbyAgJiYgdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbXSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbbm9kZS5rZXldLCBub2RlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5jaGVja2FibGUgPyB0aGlzLnRyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxyXG4gICAgICB0aGlzLmNsZWFyZWQsXHJcbiAgICAgIHRoaXMucmVtb3ZlZFxyXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkhKTtcclxuICAgICAgdGhpcy52YWx1ZSA9IFsuLi52YWx1ZV07XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5pc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbMF0gOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKGluaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGluaXQpIHtcclxuICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmlzTXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZShub2Rlcyk7XHJcbiAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhdGhpcy5yYWRpbykge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMpO1xyXG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLnJhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRoaXMuaXNNdWx0aXBsZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgIXRoaXMucmFkaW8pIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCldO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5yYWRpbykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4udGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnd2lkdGgnLFxyXG4gICAgICAgICAgYCR7dGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aH1weGBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xlYXJTZWxlY3Rpb24oJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbGVhcmVkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHNldFNlYXJjaFZhbHVlcygkZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5pc05vdEZvdW5kID0gKHRoaXMuc2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpICYmICEhdGhpcy5pbnB1dFZhbHVlICYmICRldmVudC5tYXRjaGVkS2V5cyEubGVuZ3RoID09PSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelRyZWVOb2RlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24ua2V5ITtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNpbnB1dFRlbXBsYXRlPlxyXG4gIDxpbnB1dFxyXG4gICAgI2lucHV0RWxlbWVudFxyXG4gICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkXCJcclxuICAgIFtjbGFzcy5uby1tYXJnaW4tbGVmdF09XCJzZWxlY3RlZE5vZGVzLmxlbmd0aFwiXHJcbiAgICAoY29tcG9zaXRpb25zdGFydCk9XCJpc0NvbXBvc2luZyA9IHRydWVcIlxyXG4gICAgKGNvbXBvc2l0aW9uZW5kKT1cImlzQ29tcG9zaW5nID0gZmFsc2VcIlxyXG4gICAgKGtleWRvd24pPVwib25LZXlEb3duSW5wdXQoJGV2ZW50KVwiXHJcbiAgICBbbmdNb2RlbF09XCJpbnB1dFZhbHVlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldElucHV0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAqbmdJZj1cIiFjbWFjc09wZW5cIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwib3BlblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJ0cnVlXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD8gbnVsbCA6IHRyaWdnZXJXaWR0aFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/IHRyaWdnZXJXaWR0aCA6IG51bGxcIlxyXG4gIChiYWNrZHJvcENsaWNrKT1cImNsb3NlRHJvcERvd24oKVwiXHJcbiAgKGRldGFjaCk9XCJjbG9zZURyb3BEb3duKClcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPGRpdlxyXG4gIGNka092ZXJsYXlPcmlnaW5cclxuICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLXNpbmdsZV09XCIhaXNNdWx0aXBsZVwiXHJcbiAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZV09XCJpc011bHRpcGxlXCJcclxuICB0YWJpbmRleD1cIjBcIj5cclxuICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhciBjbWFjcy10cmVlLXNlbGVjdC1zZWFyY2gtaWNvblwiPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uQ3JlYXRpb24tU2VhcmNoIGFudC1zZWxlY3QtY2xlYXItaWNvblwiPjwvaT5cclxuICA8L3NwYW4+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc011bHRpcGxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cInBsYWNlSG9sZGVyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAwXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAge3sgcGxhY2VIb2xkZXIgfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWxlY3RlZC12YWx1ZVwiXHJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiZGlzcGxheVdpdGgoc2VsZWN0ZWROb2Rlc1swXSlcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInNlbGVjdGVkVmFsdWVEaXNwbGF5XCI+XHJcbiAgICAgICAge3sgZGlzcGxheVdpdGgoc2VsZWN0ZWROb2Rlc1swXSkgfX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJzaG93U2VhcmNoXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzZWFyY2hEaXNwbGF5XCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoIGFudC1zZWxlY3Qtc2VhcmNoLS1pbmxpbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwXCI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5wdXRUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yXCI+e3tpbnB1dFZhbHVlfX0mbmJzcDs8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc011bHRpcGxlXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJjbWFjcy10cmVlLXNlbGVjdC11bCBhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwicGxhY2VIb2xkZXIgJiYgc2VsZWN0ZWROb2Rlcy5sZW5ndGggPT09IDBcIlxyXG4gICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICB7eyBwbGFjZUhvbGRlciB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBzZWxlY3RlZE5vZGVzIHwgc2xpY2U6IDAgOiBtYXhUYWdDb3VudDsgdHJhY2tCeTp0cmFja1ZhbHVlXCI+XHJcbiAgICAgICAgPGxpXHJcbiAgICAgICAgICBbQHpvb21Nb3Rpb25dXHJcbiAgICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgICBbYXR0ci50aXRsZV09XCJkaXNwbGF5V2l0aChub2RlKVwiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRdPVwibm9kZS5pc0Rpc2FibGVkXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFub2RlLmlzRGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZVNlbGVjdGVkKG5vZGUsIHRydWUsICRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXJlbW92ZS1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj57eyBkaXNwbGF5V2l0aChub2RlKSB9fTwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPGxpIFtAem9vbU1vdGlvbl1cclxuICAgICAgICAqbmdJZj1cInNlbGVjdGVkTm9kZXMubGVuZ3RoID4gbWF4VGFnQ291bnRcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiBtYXhUYWdDb3VudH1cIj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICArIHt7IHNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gbWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHNwYW4gKm5nSWY9XCJhbGxvd0NsZWFyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXJcIlxyXG4gICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAoY2xpY2spPVwib25DbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1jbGVhci1pY29uXCIgdGhlbWU9XCJmaWxsXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIGNtYWNzLXRyZWUtc2VsZWN0LWFycm93XCI+XHJcbiAgICA8aSBjbGFzcz1cImFudC1zZWxlY3QtY2xlYXItaWNvbiBpY29uQXJyb3dMYXJnZS1BcnJvdy1SaWdodFwiIFtjbGFzcy5jbWFjcy1zZWxlY3RlZC1ub2Rlc109XCJzZWxlY3RlZE5vZGVzLmxlbmd0aFwiPjwvaT5cclxuICA8L2Rpdj5cclxuICA8c3BhbiAqbmdJZj1cIiFpc011bHRpcGxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93XCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3ctaWNvblwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NPcGVuXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnQ+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duIGNtYWNzLXRyZWUtc2VsZWN0LWRyb3Bkb3duIGNtYWNzLWN1c3RvbS1zY3JvbGxiYXJcIlxyXG4gICAgICAgW0BzbGlkZU1vdGlvbl09XCIhY21hY3NPcGVuICYmIG9wZW4gPyBkcm9wRG93blBvc2l0aW9uIDogJ3ZvaWQnXCJcclxuICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVdPVwiIW11bHRpcGxlXCJcclxuICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZV09XCJtdWx0aXBsZVwiXHJcbiAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAnYm90dG9tJ1wiXHJcbiAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAndG9wJ1wiXHJcbiAgICAgICBbbmdTdHlsZV09XCJkcm9wZG93blN0eWxlXCI+XHJcbiAgICA8Y21hY3MtdHJlZVxyXG4gICAgICAjdHJlZVJlZlxyXG4gICAgICBuek5vQW5pbWF0aW9uXHJcbiAgICAgIFtzZWxlY3RNb2RlXT1cInRydWVcIlxyXG4gICAgICBbbnpEYXRhXT1cIm5vZGVzXCJcclxuICAgICAgW2lubGluZUVkaXRdPVwiaW5saW5lRWRpdFwiXHJcbiAgICAgIFtuek11bHRpcGxlXT1cIm11bHRpcGxlXCJcclxuICAgICAgW3NlYXJjaFZhbHVlXT1cImlucHV0VmFsdWVcIlxyXG4gICAgICBbY2hlY2thYmxlXT1cImNoZWNrYWJsZVwiXHJcbiAgICAgIFtyYWRpb109XCJyYWRpb1wiXHJcbiAgICAgIFthc3luY0RhdGFdPVwiYXN5bmNEYXRhXCJcclxuICAgICAgW3Nob3dFeHBhbmRdPVwic2hvd0V4cGFuZFwiXHJcbiAgICAgIFtzaG93TGluZV09XCJzaG93TGluZVwiXHJcbiAgICAgIFtleHBhbmRlZEljb25dPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgW256QmxvY2tOb2RlXT1cInRydWVcIlxyXG4gICAgICBbZXhwYW5kQWxsXT1cImRlZmF1bHRFeHBhbmRBbGxcIlxyXG4gICAgICBbbnpFeHBhbmRlZEtleXNdPVwiZGVmYXVsdEV4cGFuZGVkS2V5c1wiXHJcbiAgICAgIFtuekNoZWNrZWRLZXlzXT1cImNoZWNrYWJsZSA/IHZhbHVlIDogW11cIlxyXG4gICAgICBbbnpTZWxlY3RlZEtleXNdPVwiIWNoZWNrYWJsZSA/IHZhbHVlIDogW11cIlxyXG4gICAgICAobnpFeHBhbmRDaGFuZ2UpPVwib25FeHBhbmRlZEtleXNDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChuekNsaWNrKT1cInRyZWVDbGljay5lbWl0KCRldmVudClcIlxyXG4gICAgICAobnpDaGVja2VkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxyXG4gICAgICAobnpTZWxlY3RlZEtleXNDaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWROb2RlcygpXCJcclxuICAgICAgKG56Q2hlY2tCb3hDaGFuZ2UpPVwidHJlZUNoZWNrQm94Q2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChzZWFyY2hWYWx1ZUNoYW5nZSk9XCJzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50KVwiXHJcbiAgICAgIChvbmFkZGNoaWxkKT1cIm9uYWRkY2hpbGRldnQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L2NtYWNzLXRyZWU+XHJcbiAgICA8IS0tPHNwYW4gKm5nSWY9XCJub2Rlcy5sZW5ndGggPT09IDAgfHwgaXNOb3RGb3VuZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1ub3QtZm91bmRcIj5cclxuICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ3RyZWUtc2VsZWN0J1wiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50XCI+PC9uei1lbWJlZC1lbXB0eT5cclxuICAgIDwvc3Bhbj4tLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbmxpbmVFZGl0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1hZGQtbmV3LWNhdGVnb3J5XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1OZXcgY21hY3Mtc2VsZWN0LXRyZWUtbmV3LWljb25cIlxyXG4gICAgICAgICAgIChjbGljayk9XCJvbmFkZHBhcmVudGV2dCgkZXZlbnQpXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtYWRkLW5ldy1jYXRlZ29yeS10aXRsZVwiPk5ldyBDYXRlZ29yeTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19