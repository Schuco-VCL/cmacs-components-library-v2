import { __decorate } from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, EventEmitter, Host, Injector, Input, Optional, Output, Self, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CmacsTreeSelectService } from './cmacs-tree-select.service';
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
    i0.ɵɵproperty("nzNoAnimation", ctx_r27.noAnimation == null ? null : ctx_r27.noAnimation.nzNoAnimation);
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
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_container_7_ng_container_3_Template, 5, 6, "ng-container", 25);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, CmacsTreeSelectComponent_ng_container_7_li_5_Template, 4, 2, "li", 26);
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
    i0.ɵɵproperty("nzNoAnimation", ctx_r9.noAnimation == null ? null : ctx_r9.noAnimation.nzNoAnimation)("ngStyle", ctx_r9.dropdownStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectMode", true)("nzData", ctx_r9.nodes)("inlineEdit", ctx_r9.inlineEdit)("nzMultiple", ctx_r9.multiple)("searchValue", ctx_r9.inputValue)("checkable", ctx_r9.checkable)("radio", ctx_r9.radio)("asyncData", ctx_r9.asyncData)("showExpand", ctx_r9.showExpand)("showLine", ctx_r9.showLine)("expandedIcon", ctx_r9.expandedIcon)("nzBlockNode", true)("expandAll", ctx_r9.defaultExpandAll)("nzExpandedKeys", ctx_r9.defaultExpandedKeys)("nzCheckedKeys", ctx_r9.checkable ? ctx_r9.value : i0.ɵɵpureFunction0(27, _c3))("nzSelectedKeys", !ctx_r9.checkable ? ctx_r9.value : i0.ɵɵpureFunction0(28, _c3));
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
        i0.ɵɵtemplate(13, CmacsTreeSelectComponent_ng_template_13_Template, 4, 29, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
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
    } }, directives: [i3.NgIf, i4.CdkOverlayOrigin, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i4.CdkConnectedOverlay, i6.NzConnectedOverlayDirective, i3.NgTemplateOutlet, i3.NgStyle, i3.NgForOf, i2.NzNoAnimationDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i9.CmacsTreeComponent], pipes: [i3.SlicePipe], styles: [".cmacs-tree-select-dropdown[_ngcontent-%COMP%]{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}  .ant-select-tree-dropdown .ant-select-switcher-icon{font-size:10px}  .ant-select-tree-dropdown .ant-select-tree-checkbox{margin:0 3px 0 0}  .ant-select-tree-dropdown .ant-select-tree .ant-select-tree-node-content-wrapper{top:2px}  .ant-select-tree-dropdown .ant-select-tree-switcher{position:relative;width:24px;line-height:24px;cursor:pointer;height:24px;display:inline-block;vertical-align:middle;text-align:center;margin:0}.cmacs-tree-select-dropdown[_ngcontent-%COMP%]{opacity:1!important;transform:none!important}[_nghost-%COMP%]     .ant-select-selection, [_nghost-%COMP%]     .ant-select-selection:focus, [_nghost-%COMP%]     .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon[_ngcontent-%COMP%]{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}[_nghost-%COMP%]     .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear[_ngcontent-%COMP%]{right:14px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-left:1px solid #dee0e5;padding:0 5px;font-size:24px;top:-14px;position:relative}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{top:2px;position:relative}.ant-select-selection--multiple[_ngcontent-%COMP%]   .ant-select-search--inline[_ngcontent-%COMP%]   .ant-select-search__field[_ngcontent-%COMP%]{padding-left:0}.ant-select-selection[_ngcontent-%COMP%]:hover   .cmacs-selected-nodes.iconArrowLarge-Arrow-Right[_ngcontent-%COMP%]:before{opacity:0}.cmacs-add-new-category[_ngcontent-%COMP%]{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-add-new-category-title[_ngcontent-%COMP%]{padding:3px 5px}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.no-margin-left[_ngcontent-%COMP%]{margin-left:0!important}  .ant-select-selection--multiple .cmacs-tree-select-ul .ant-select-search--inline .ant-select-search__field{max-width:84%;margin-left:28px}", ".ant-select-dropdown[_ngcontent-%COMP%] {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        overflow: auto;\n        scrollbar-color: #cfd3d9 #ffffff;\n        scrollbar-width: thin;\n      }\n\n      cmacs-tree-select[_ngcontent-%COMP%] {\n        overflow: hidden;\n      }"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUtc2VsZWN0L2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixJQUFJLEVBR0osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUs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a0JBQWpDLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixnQkFBZ0I7a0JBQXhDLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLEtBQUs7a0JBQTdCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNhLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxPQUFPO2tCQUF6QixNQUFNO1lBQ1ksT0FBTztrQkFBekIsTUFBTTtZQUNZLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxTQUFTO2tCQUEzQixNQUFNO1lBQ1ksa0JBQWtCO2tCQUFwQyxNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFFb0IsWUFBWTtrQkFBdEMsU0FBUzttQkFBQyxjQUFjO1lBQ0gsT0FBTztrQkFBNUIsU0FBUzttQkFBQyxTQUFTO1lBQ1MsZ0JBQWdCO2tCQUE1QyxTQUFTO21CQUFDLGdCQUFnQjtZQUNLLG1CQUFtQjtrQkFBbEQsU0FBUzttQkFBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelRyZWVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7Q21hY3NUcmVlQ29tcG9uZW50fSBmcm9tIFwiLi4vY21hY3MtdHJlZS9jbWFjcy10cmVlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOelRyZWVCYXNlU2VydmljZSB9IGZyb20gJy4uL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuIH0gZnJvbSAnLi4vY21hY3MtdHJlZS90cmVlL256LXRyZWUtc2VydmljZS5yZXNvbHZlcic7XHJcbmltcG9ydCB7IE56VHJlZUJhc2UgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSwgTnpUcmVlTm9kZU9wdGlvbnMgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBpbmplY3Rvci5nZXQoQ21hY3NUcmVlU2VsZWN0U2VydmljZSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdHJlZS1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlU2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56VHJlZUhpZ2hlck9yZGVyU2VydmljZVRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBoaWdoZXJPcmRlclNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTZWxmKCksIEluamVjdG9yXV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1RyZWVTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICdzaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnc2l6ZT09PVwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFsbG93LWNsZWFyXSc6ICdhbGxvd0NsZWFyJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1vcGVuXSc6ICdvcGVuICYmICFjbWFjc09wZW4nLFxyXG4gICAgJyhjbGljayknOiAndHJpZ2dlcigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjY2ZkM2Q5ICNmZmZmZmY7XHJcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjbWFjcy10cmVlLXNlbGVjdCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbXVsdGlwbGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG5vZGVzOiBBcnJheTxOelRyZWVOb2RlIHwgTnpUcmVlTm9kZU9wdGlvbnM+ID0gW107XHJcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBkcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRFeHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgZGlzcGxheVdpdGg6IChub2RlOiBOelRyZWVOb2RlKSA9PiBzdHJpbmcgfCB1bmRlZmluZWQgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4gbm9kZS50aXRsZTtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZVtdIH0+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBleHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0cmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0cmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIG9uYWRkcGFyZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicpIHRyZWVSZWY6IENtYWNzVHJlZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlcjtcclxuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xyXG4gIGlzRGVzdHJveSA9IHRydWU7XHJcbiAgaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gIGlucHV0VmFsdWUgPSAnJztcclxuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcclxuICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBzZWxlY3RlZE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICB2YWx1ZTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIG9uYWRkcGFyZW50ZXZ0KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vbmFkZHBhcmVudC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXJlbnQobm9kZTogYW55KSB7XHJcbiAgICB0aGlzLnRyZWVSZWYuYWRkUGFyZW50KG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSB8fCB0aGlzLmNoZWNrYWJsZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgbGV0IG9wYWNpdHkgPSAxO1xyXG4gICAgaWYgKCF0aGlzLnNob3dTZWFyY2gpIHtcclxuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XHJcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0V4cGFuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlICYmIHRoaXMuY21hY3NPcGVuKXtcclxuICAgICAgdGhpcy5kZWZhdWx0RXhwYW5kQWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzT3BlbiAmJiB0aGlzLnRyZWVSZWYpIHtcclxuICAgICAgdGhpcy50cmVlUmVmLnNlYXJjaFZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbmFkZGNoaWxkZXZ0KCRldmVudDogTnpUcmVlTm9kZSkgIHtcclxuICAgIHRoaXMub25hZGRjaGlsZC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdub2RlcycpKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZ1tdIHwgc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IFt2YWx1ZSBhcyBzdHJpbmddO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2Rlcyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMub3BlbikpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBldmVudFRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmICFldmVudFRhcmdldC52YWx1ZSAmJiBrZXlDb2RlID09PSBCQUNLU1BBQ0UpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZU5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocmVtb3ZlTm9kZSk7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KHtcclxuICAgICAgICAgIGV2ZW50TmFtZTogJ3JlbW92ZVNlbGVjdCcsXHJcbiAgICAgICAgICBub2RlOiByZW1vdmVOb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuY21hY3NPcGVuKSB7XHJcbiAgICAgICAgdGhpcy50cmVlUmVmLnNlYXJjaFZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhwYW5kZWRLZXlzQ2hhbmdlKHZhbHVlOiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB0aGlzLmRlZmF1bHRFeHBhbmRlZEtleXMgPSBbLi4udmFsdWUua2V5cyFdO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xyXG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5tdWx0aXBsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVtaXQpIHtcclxuICAgICAgdGhpcy5yZW1vdmVkLmVtaXQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBtZXJnZShcclxuICAgICAgdGhpcy50cmVlQ2xpY2sucGlwZShcclxuICAgICAgICB0YXAoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgaWYgKHRoaXMucmFkaW8gICYmIHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5ub2Rlcyk7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoW10sIG5vZGVzLCB0cnVlKTtcclxuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoW25vZGUua2V5XSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlITtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrYWJsZSA/ICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3ggOiAhbm9kZS5pc0Rpc2FibGVkO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMuY2hlY2thYmxlID8gdGhpcy50cmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcclxuICAgICAgdGhpcy5jbGVhcmVkLFxyXG4gICAgICB0aGlzLnJlbW92ZWRcclxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5ISk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBbLi4udmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXNOb3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWzBdIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWROb2Rlcyhpbml0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmIChpbml0KSB7XHJcbiAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5jb2VyY2VUcmVlTm9kZXModGhpcy5ub2Rlcyk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5pc011bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUobm9kZXMpO1xyXG4gICAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgIXRoaXMucmFkaW8pIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzKTtcclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5yYWRpbykge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0aGlzLmlzTXVsdGlwbGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXModGhpcy52YWx1ZSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlICYmICF0aGlzLnJhZGlvKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi50aGlzLmdldENoZWNrZWROb2RlTGlzdCgpXTtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMucmFkaW8pIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWy4uLnRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi50aGlzLmdldENoZWNrZWROb2RlTGlzdCgpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0V2lkdGgoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgJ3dpZHRoJyxcclxuICAgICAgICAgIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2xlYXJlZC5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWFyY2hWYWx1ZXMoJGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNOb3RGb3VuZCA9ICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSAmJiAhIXRoaXMuaW5wdXRWYWx1ZSAmJiAkZXZlbnQubWF0Y2hlZEtleXMhLmxlbmd0aCA9PT0gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICB9XHJcblxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpUcmVlTm9kZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmtleSE7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjaW5wdXRUZW1wbGF0ZT5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dEVsZW1lbnRcclxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZFwiXHJcbiAgICBbY2xhc3Mubm8tbWFyZ2luLWxlZnRdPVwic2VsZWN0ZWROb2Rlcy5sZW5ndGhcIlxyXG4gICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwiaXNDb21wb3NpbmcgPSB0cnVlXCJcclxuICAgIChjb21wb3NpdGlvbmVuZCk9XCJpc0NvbXBvc2luZyA9IGZhbHNlXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bklucHV0KCRldmVudClcIlxyXG4gICAgW25nTW9kZWxdPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRJbnB1dFZhbHVlKCRldmVudClcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgKm5nSWY9XCIhY21hY3NPcGVuXCJcclxuICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm9wZW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwidHJ1ZVwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlNaW5XaWR0aF09XCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg/IG51bGwgOiB0cmlnZ2VyV2lkdGhcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPyB0cmlnZ2VyV2lkdGggOiBudWxsXCJcclxuICAoYmFja2Ryb3BDbGljayk9XCJjbG9zZURyb3BEb3duKClcIlxyXG4gIChkZXRhY2gpPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXZcclxuICBjZGtPdmVybGF5T3JpZ2luXHJcbiAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvblwiXHJcbiAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1zaW5nbGVdPVwiIWlzTXVsdGlwbGVcIlxyXG4gIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGVdPVwiaXNNdWx0aXBsZVwiXHJcbiAgdGFiaW5kZXg9XCIwXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXIgY21hY3MtdHJlZS1zZWxlY3Qtc2VhcmNoLWljb25cIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVNlYXJjaCBhbnQtc2VsZWN0LWNsZWFyLWljb25cIj48L2k+XHJcbiAgPC9zcGFuPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNNdWx0aXBsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJwbGFjZUhvbGRlciAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwicGxhY2VIb2xkZXJEaXNwbGF5XCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgIHt7IHBsYWNlSG9sZGVyIH19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwic2VsZWN0ZWROb2Rlcy5sZW5ndGggPT09IDFcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VsZWN0ZWQtdmFsdWVcIlxyXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImRpc3BsYXlXaXRoKHNlbGVjdGVkTm9kZXNbMF0pXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJzZWxlY3RlZFZhbHVlRGlzcGxheVwiPlxyXG4gICAgICAgIHt7IGRpc3BsYXlXaXRoKHNlbGVjdGVkTm9kZXNbMF0pIH19XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwic2hvd1NlYXJjaFwiXHJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2VhcmNoRGlzcGxheVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fd3JhcFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX21pcnJvclwiPnt7aW5wdXRWYWx1ZX19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNNdWx0aXBsZVwiPlxyXG4gICAgPHVsIGNsYXNzPVwiY21hY3MtdHJlZS1zZWxlY3QtdWwgYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cInBsYWNlSG9sZGVyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAwXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJwbGFjZUhvbGRlckRpc3BsYXlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAge3sgcGxhY2VIb2xkZXIgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5vZGUgb2Ygc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiAwIDogbWF4VGFnQ291bnQ7IHRyYWNrQnk6dHJhY2tWYWx1ZVwiPlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgICAgW2F0dHIudGl0bGVdPVwiZGlzcGxheVdpdGgobm9kZSlcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXT1cIm5vZGUuaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhbm9kZS5pc0Rpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmVcIlxyXG4gICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVTZWxlY3RlZChub2RlLCB0cnVlLCAkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1yZW1vdmUtaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+e3sgZGlzcGxheVdpdGgobm9kZSkgfX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgICpuZ0lmPVwic2VsZWN0ZWROb2Rlcy5sZW5ndGggPiBtYXhUYWdDb3VudFwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJtYXhUYWdQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBzZWxlY3RlZE5vZGVzIHwgc2xpY2U6IG1heFRhZ0NvdW50fVwiPlxyXG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICsge3sgc2VsZWN0ZWROb2Rlcy5sZW5ndGggLSBtYXhUYWdDb3VudCB9fSAuLi5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaCBhbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlucHV0VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8c3BhbiAqbmdJZj1cImFsbG93Q2xlYXIgJiYgc2VsZWN0ZWROb2Rlcy5sZW5ndGhcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhclwiXHJcbiAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgIChjbGljayk9XCJvbkNsZWFyU2VsZWN0aW9uKCRldmVudClcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWNsZWFyLWljb25cIiB0aGVtZT1cImZpbGxcIj48L2k+XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXIgY21hY3MtdHJlZS1zZWxlY3QtYXJyb3dcIj5cclxuICAgIDxpIGNsYXNzPVwiYW50LXNlbGVjdC1jbGVhci1pY29uIGljb25BcnJvd0xhcmdlLUFycm93LVJpZ2h0XCIgW2NsYXNzLmNtYWNzLXNlbGVjdGVkLW5vZGVzXT1cInNlbGVjdGVkTm9kZXMubGVuZ3RoXCI+PC9pPlxyXG4gIDwvZGl2PlxyXG4gIDxzcGFuICpuZ0lmPVwiIWlzTXVsdGlwbGVcIiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3dcIj5cclxuICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiIGNsYXNzPVwiYW50LXNlbGVjdC1hcnJvdy1pY29uXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuPC9kaXY+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc09wZW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd24gY21hY3MtdHJlZS1zZWxlY3QtZHJvcGRvd24gY21hY3MtY3VzdG9tLXNjcm9sbGJhclwiXHJcbiAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlXT1cIiFtdWx0aXBsZVwiXHJcbiAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxyXG4gICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgICAgW25nU3R5bGVdPVwiZHJvcGRvd25TdHlsZVwiPlxyXG4gICAgPGNtYWNzLXRyZWVcclxuICAgICAgI3RyZWVSZWZcclxuICAgICAgbnpOb0FuaW1hdGlvblxyXG4gICAgICBbc2VsZWN0TW9kZV09XCJ0cnVlXCJcclxuICAgICAgW256RGF0YV09XCJub2Rlc1wiXHJcbiAgICAgIFtpbmxpbmVFZGl0XT1cImlubGluZUVkaXRcIlxyXG4gICAgICBbbnpNdWx0aXBsZV09XCJtdWx0aXBsZVwiXHJcbiAgICAgIFtzZWFyY2hWYWx1ZV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgW2NoZWNrYWJsZV09XCJjaGVja2FibGVcIlxyXG4gICAgICBbcmFkaW9dPVwicmFkaW9cIlxyXG4gICAgICBbYXN5bmNEYXRhXT1cImFzeW5jRGF0YVwiXHJcbiAgICAgIFtzaG93RXhwYW5kXT1cInNob3dFeHBhbmRcIlxyXG4gICAgICBbc2hvd0xpbmVdPVwic2hvd0xpbmVcIlxyXG4gICAgICBbZXhwYW5kZWRJY29uXT1cImV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtuekJsb2NrTm9kZV09XCJ0cnVlXCJcclxuICAgICAgW2V4cGFuZEFsbF09XCJkZWZhdWx0RXhwYW5kQWxsXCJcclxuICAgICAgW256RXhwYW5kZWRLZXlzXT1cImRlZmF1bHRFeHBhbmRlZEtleXNcIlxyXG4gICAgICBbbnpDaGVja2VkS2V5c109XCJjaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcclxuICAgICAgW256U2VsZWN0ZWRLZXlzXT1cIiFjaGVja2FibGUgPyB2YWx1ZSA6IFtdXCJcclxuICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIm9uRXhwYW5kZWRLZXlzQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAobnpDbGljayk9XCJ0cmVlQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKG56Q2hlY2tlZEtleXNDaGFuZ2UpPVwidXBkYXRlU2VsZWN0ZWROb2RlcygpXCJcclxuICAgICAgKG56U2VsZWN0ZWRLZXlzQ2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkTm9kZXMoKVwiXHJcbiAgICAgIChuekNoZWNrQm94Q2hhbmdlKT1cInRyZWVDaGVja0JveENoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAoc2VhcmNoVmFsdWVDaGFuZ2UpPVwic2V0U2VhcmNoVmFsdWVzKCRldmVudClcIlxyXG4gICAgICAob25hZGRjaGlsZCk9XCJvbmFkZGNoaWxkZXZ0KCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9jbWFjcy10cmVlPlxyXG4gICAgPCEtLTxzcGFuICpuZ0lmPVwibm9kZXMubGVuZ3RoID09PSAwIHx8IGlzTm90Rm91bmRcIiBjbGFzcz1cImFudC1zZWxlY3Qtbm90LWZvdW5kXCI+XHJcbiAgICAgIDxuei1lbWJlZC1lbXB0eSBbbnpDb21wb25lbnROYW1lXT1cIid0cmVlLXNlbGVjdCdcIiBbc3BlY2lmaWNDb250ZW50XT1cIm5vdEZvdW5kQ29udGVudFwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgICA8L3NwYW4+LS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5saW5lRWRpdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtYWRkLW5ldy1jYXRlZ29yeVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTmV3IGNtYWNzLXNlbGVjdC10cmVlLW5ldy1pY29uXCJcclxuICAgICAgICAgICAoY2xpY2spPVwib25hZGRwYXJlbnRldnQoJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLWFkZC1uZXctY2F0ZWdvcnktdGl0bGVcIj5OZXcgQ2F0ZWdvcnk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==