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
import * as i4 from "ng-zorro-antd/core/overlay";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "@angular/cdk/overlay";
import * as i9 from "../cmacs-tree/cmacs-tree.component";
const _c0 = ["inputElement"];
const _c1 = ["treeRef"];
function CmacsTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10, 11);
    i0.ɵɵlistener("compositionstart", function CmacsTreeSelectComponent_ng_template_0_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.isComposing = true); })("compositionend", function CmacsTreeSelectComponent_ng_template_0_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.isComposing = false); })("keydown", function CmacsTreeSelectComponent_ng_template_0_Template_input_keydown_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onKeyDownInput($event)); })("ngModelChange", function CmacsTreeSelectComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.setInputValue($event)); });
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
    i0.ɵɵlistener("backdropClick", function CmacsTreeSelectComponent_2_Template_ng_template_backdropClick_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.closeDropDown()); })("detach", function CmacsTreeSelectComponent_2_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.closeDropDown()); })("positionChange", function CmacsTreeSelectComponent_2_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.onPositionChange($event)); });
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
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_6_div_4_ng_template_2_Template, 0, 0, "ng-template", 22);
    i0.ɵɵelementStart(3, "span", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵlistener("mousedown", function CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r35); const node_r30 = i0.ɵɵnextContext().$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.removeSelected(node_r30, true, $event)); });
    i0.ɵɵelement(1, "i", 31);
    i0.ɵɵelementEnd();
} }
function CmacsTreeSelectComponent_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 27);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_7_ng_container_3_span_2_Template, 2, 0, "span", 28);
    i0.ɵɵelementStart(3, "span", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementStart(0, "li", 32)(1, "div", 29);
    i0.ɵɵtemplate(2, CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵtemplate(3, CmacsTreeSelectComponent_ng_container_7_li_5_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementEnd()();
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
    i0.ɵɵlistener("mousedown", function CmacsTreeSelectComponent_span_8_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsTreeSelectComponent_span_8_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r40.onClearSelection($event)); });
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
    i0.ɵɵelementStart(1, "div", 41)(2, "i", 42);
    i0.ɵɵlistener("click", function CmacsTreeSelectComponent_ng_template_13_ng_container_3_Template_i_click_2_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r45.onaddparentevt($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 43);
    i0.ɵɵtext(4, "New Category");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} }
const _c3 = function () { return []; };
function CmacsTreeSelectComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "cmacs-tree", 39, 40);
    i0.ɵɵlistener("nzExpandChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r47 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r47.onExpandedKeysChange($event)); })("nzClick", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzClick_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.treeClick.emit($event)); })("nzCheckedKeysChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzCheckedKeysChange_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r50 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r50.updateSelectedNodes()); })("nzSelectedKeysChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzSelectedKeysChange_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r51 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r51.updateSelectedNodes()); })("nzCheckBoxChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_nzCheckBoxChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r52 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r52.treeCheckBoxChange.emit($event)); })("searchValueChange", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_searchValueChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r53 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r53.setSearchValues($event)); })("onaddchild", function CmacsTreeSelectComponent_ng_template_13_Template_cmacs_tree_onaddchild_1_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r54 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r54.onaddchildevt($event)); });
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
    static { this.ɵfac = function CmacsTreeSelectComponent_Factory(t) { return new (t || CmacsTreeSelectComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeSelectService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTreeSelectComponent, selectors: [["cmacs-tree-select"]], viewQuery: function CmacsTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(CdkOverlayOrigin, 5);
            i0.ɵɵviewQuery(CdkConnectedOverlay, 5);
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
            i0.ɵɵtemplate(2, CmacsTreeSelectComponent_2_Template, 1, 5, null, 1);
            i0.ɵɵelementStart(3, "div", 2)(4, "span", 3);
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
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i4.NzConnectedOverlayDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective, i8.CdkConnectedOverlay, i8.CdkOverlayOrigin, i2.NzNoAnimationDirective, i9.CmacsTreeComponent, i3.SlicePipe], styles: [".cmacs-tree-select-dropdown[_ngcontent-%COMP%]{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}  .ant-select-tree-dropdown .ant-select-switcher-icon{font-size:10px}  .ant-select-tree-dropdown .ant-select-tree-checkbox{margin:0 3px 0 0;display:inline-block;top:5px}  .ant-select-tree-dropdown .ant-select-tree .ant-select-tree-node-content-wrapper{top:2px}  .ant-select-tree-dropdown .ant-select-tree-switcher{position:relative;width:24px;line-height:24px;cursor:pointer;height:24px;display:inline-block;vertical-align:middle;text-align:center;margin:0}.cmacs-tree-select-dropdown[_ngcontent-%COMP%]{opacity:1!important;transform:none!important}[_nghost-%COMP%]     .ant-select-selection, [_nghost-%COMP%]     .ant-select-selection:focus, [_nghost-%COMP%]     .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon[_ngcontent-%COMP%]{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}[_nghost-%COMP%]     .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear[_ngcontent-%COMP%]{right:14px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow[_ngcontent-%COMP%]:hover{cursor:pointer}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border-left:1px solid #dee0e5;padding:0 5px;font-size:24px;top:-14px;position:relative}.cmacs-tree-select-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{top:2px;position:relative}.ant-select-selection--multiple[_ngcontent-%COMP%]   .ant-select-search--inline[_ngcontent-%COMP%]   .ant-select-search__field[_ngcontent-%COMP%]{padding-left:0}.ant-select-selection[_ngcontent-%COMP%]:hover   .cmacs-selected-nodes.iconArrowLarge-Arrow-Right[_ngcontent-%COMP%]:before{opacity:0}.cmacs-add-new-category[_ngcontent-%COMP%]{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-add-new-category-title[_ngcontent-%COMP%]{padding:3px 5px}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.no-margin-left[_ngcontent-%COMP%]{margin-left:0!important}  .ant-select-selection--multiple .cmacs-tree-select-ul .ant-select-search--inline .ant-select-search__field{max-width:84%;margin-left:28px}", ".ant-select-dropdown[_ngcontent-%COMP%]{top:100%;left:0;position:relative;width:100%;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}cmacs-tree-select[_ngcontent-%COMP%]{overflow:hidden}"] }); }
}
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
        args: [{ selector: 'cmacs-tree-select', exportAs: 'cmacsTreeSelect', providers: [
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
                ], host: {
                    '[class.ant-select-lg]': 'size==="large"',
                    '[class.ant-select-sm]': 'size==="small"',
                    '[class.ant-select-enabled]': '!disabled',
                    '[class.ant-select-disabled]': 'disabled',
                    '[class.ant-select-allow-clear]': 'allowClear',
                    '[class.ant-select-open]': 'open && !cmacsOpen',
                    '(click)': 'trigger()'
                }, template: "<ng-template #inputTemplate>\r\n  <input\r\n    #inputElement\r\n    autocomplete=\"off\"\r\n    class=\"ant-select-search__field\"\r\n    [class.no-margin-left]=\"selectedNodes.length\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (keydown)=\"onKeyDownInput($event)\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"disabled\">\r\n</ng-template>\r\n\r\n<ng-template *ngIf=\"!cmacsOpen\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  [cdkConnectedOverlayOpen]=\"open\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"dropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"dropdownMatchSelectWidth? triggerWidth : null\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown()\"\r\n  (positionChange)=\"onPositionChange($event)\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-template>\r\n\r\n<div\r\n  cdkOverlayOrigin\r\n  class=\"ant-select-selection\"\r\n  [class.ant-select-selection--single]=\"!isMultiple\"\r\n  [class.ant-select-selection--multiple]=\"isMultiple\"\r\n  tabindex=\"0\">\r\n  <span class=\"ant-select-selection__clear cmacs-tree-select-search-icon\">\r\n    <i class=\"iconCreation-Search ant-select-clear-icon\"></i>\r\n  </span>\r\n  <ng-container *ngIf=\"!isMultiple\">\r\n    <div class=\"ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"selectedNodes.length === 1\"\r\n        class=\"ant-select-selection-selected-value\"\r\n        [attr.title]=\"displayWith(selectedNodes[0])\"\r\n        [ngStyle]=\"selectedValueDisplay\">\r\n        {{ displayWith(selectedNodes[0]) }}\r\n      </div>\r\n\r\n      <div\r\n        *ngIf=\"showSearch\"\r\n        [style.display]=\"searchDisplay\"\r\n        class=\"ant-select-search ant-select-search--inline\">\r\n        <div class=\"ant-select-search__field__wrap\">\r\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isMultiple\">\r\n    <ul class=\"cmacs-tree-select-ul ant-select-selection__rendered\">\r\n      <div\r\n        *ngIf=\"placeHolder && selectedNodes.length === 0\"\r\n        [style.display]=\"placeHolderDisplay\"\r\n        class=\"ant-select-selection__placeholder\">\r\n        {{ placeHolder }}\r\n      </div>\r\n      <ng-container *ngFor=\"let node of selectedNodes | slice: 0 : maxTagCount; trackBy:trackValue\">\r\n        <li\r\n          [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n          [attr.title]=\"displayWith(node)\"\r\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\r\n          class=\"ant-select-selection__choice\">\r\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\r\n                 (mousedown)=\"$event.preventDefault()\"\r\n                 (click)=\"removeSelected(node, true, $event)\">\r\n                 <i nz-icon nzType=\"close\" class=\"ant-select-remove-icon\"></i>\r\n               </span>\r\n          <span class=\"ant-select-selection__choice__content\">{{ displayWith(node) }}</span>\r\n        </li>\r\n      </ng-container>\r\n      <li\r\n        *ngIf=\"selectedNodes.length > maxTagCount\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">\r\n          <ng-container *ngIf=\"maxTagPlaceholder\">\r\n            <ng-template\r\n              [ngTemplateOutlet]=\"maxTagPlaceholder\"\r\n              [ngTemplateOutletContext]=\"{ $implicit: selectedNodes | slice: maxTagCount}\">\r\n            </ng-template>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!maxTagPlaceholder\">\r\n            + {{ selectedNodes.length - maxTagCount }} ...\r\n          </ng-container>\r\n        </div>\r\n      </li>\r\n      <li class=\"ant-select-search ant-select-search--inline\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n      </li>\r\n    </ul>\r\n  </ng-container>\r\n  <span *ngIf=\"allowClear && selectedNodes.length\" class=\"ant-select-selection__clear\"\r\n    (mousedown)=\"$event.preventDefault()\"\r\n    (click)=\"onClearSelection($event)\">\r\n    <i nz-icon nzType=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\r\n  </span>\r\n  <div class=\"ant-select-selection__clear cmacs-tree-select-arrow\">\r\n    <i class=\"ant-select-clear-icon iconArrowLarge-Arrow-Right\" [class.cmacs-selected-nodes]=\"selectedNodes.length\"></i>\r\n  </div>\r\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\r\n    <i nz-icon nzType=\"down\" class=\"ant-select-arrow-icon\"></i>\r\n  </span>\r\n</div>\r\n<ng-container *ngIf=\"cmacsOpen\">\r\n  <ng-container *ngTemplateOutlet=\"content\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #content>\r\n  <div class=\"ant-select-dropdown ant-select-tree-dropdown cmacs-tree-select-dropdown cmacs-custom-scrollbar\"\r\n       [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n       [class.ant-select-dropdown--single]=\"!multiple\"\r\n       [class.ant-select-dropdown--multiple]=\"multiple\"\r\n       [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n       [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n       [ngStyle]=\"dropdownStyle\">\r\n    <cmacs-tree\r\n      #treeRef\r\n      nzNoAnimation\r\n      [selectMode]=\"true\"\r\n      [nzData]=\"nodes\"\r\n      [inlineEdit]=\"inlineEdit\"\r\n      [nzMultiple]=\"multiple\"\r\n      [searchValue]=\"inputValue\"\r\n      [checkable]=\"checkable\"\r\n      [radio]=\"radio\"\r\n      [asyncData]=\"asyncData\"\r\n      [showExpand]=\"showExpand\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [nzBlockNode]=\"true\"\r\n      [expandAll]=\"defaultExpandAll\"\r\n      [nzExpandedKeys]=\"defaultExpandedKeys\"\r\n      [nzCheckedKeys]=\"checkable ? value : []\"\r\n      [nzSelectedKeys]=\"!checkable ? value : []\"\r\n      (nzExpandChange)=\"onExpandedKeysChange($event)\"\r\n      (nzClick)=\"treeClick.emit($event)\"\r\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\r\n      (nzCheckBoxChange)=\"treeCheckBoxChange.emit($event)\"\r\n      (searchValueChange)=\"setSearchValues($event)\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n    >\r\n    </cmacs-tree>\r\n    <!--<span *ngIf=\"nodes.length === 0 || isNotFound\" class=\"ant-select-not-found\">\r\n      <nz-embed-empty [nzComponentName]=\"'tree-select'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\r\n    </span>-->\r\n    <ng-container *ngIf=\"inlineEdit\">\r\n      <div class=\"cmacs-add-new-category\">\r\n        <i class=\"iconUILarge-New cmacs-select-tree-new-icon\"\r\n           (click)=\"onaddparentevt($event)\"></i>\r\n        <span class=\"cmacs-add-new-category-title\">New Category</span>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n", styles: [".cmacs-tree-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}::ng-deep .ant-select-tree-dropdown .ant-select-switcher-icon{font-size:10px}::ng-deep .ant-select-tree-dropdown .ant-select-tree-checkbox{margin:0 3px 0 0;display:inline-block;top:5px}::ng-deep .ant-select-tree-dropdown .ant-select-tree .ant-select-tree-node-content-wrapper{top:2px}::ng-deep .ant-select-tree-dropdown .ant-select-tree-switcher{position:relative;width:24px;line-height:24px;cursor:pointer;height:24px;display:inline-block;vertical-align:middle;text-align:center;margin:0}.cmacs-tree-select-dropdown{opacity:1!important;transform:none!important}:host ::ng-deep .ant-select-selection,:host ::ng-deep .ant-select-selection:focus,:host ::ng-deep .ant-select-selection:hover{border:1px solid #dee0e5;border-radius:3px 3px 0 0}.cmacs-tree-select-search-icon{left:11px;right:unset;z-index:unset;opacity:1!important;font-size:16px;top:14px}:host ::ng-deep .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:29px}.ant-select-selection__clear{right:14px}.cmacs-tree-select-arrow{z-index:unset;opacity:1!important;font-size:29px;top:7px;right:30px}.cmacs-tree-select-arrow:hover{cursor:pointer}.cmacs-tree-select-arrow i{border-left:1px solid #dee0e5;padding:0 5px;font-size:24px;top:-14px;position:relative}.cmacs-tree-select-arrow i:before{top:2px;position:relative}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field{padding-left:0}.ant-select-selection:hover .cmacs-selected-nodes.iconArrowLarge-Arrow-Right:before{opacity:0}.cmacs-add-new-category{font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79;font-size:12px;font-family:Roboto-Regular;padding:5px 0 6px 10px;border-top:1px solid #dee0e5}.cmacs-add-new-category:hover{background-color:#f6f7fb}.cmacs-add-new-category-title{padding:3px 5px}.cmacs-select-tree-new-icon{color:#acb3bf;font-size:16px;top:2px;position:relative}.cmacs-select-tree-new-icon:hover{cursor:pointer}.no-margin-left{margin-left:0!important}::ng-deep .ant-select-selection--multiple .cmacs-tree-select-ul .ant-select-search--inline .ant-select-search__field{max-width:84%;margin-left:28px}\n", ".ant-select-dropdown{top:100%;left:0;position:relative;width:100%;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}cmacs-tree-select{overflow:hidden}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUtc2VsZWN0L2NtYWNzLXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlLXNlbGVjdC9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBa0MsTUFBTSxzQkFBc0IsQ0FBQztBQUM3RyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixJQUFJLEVBR0osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHN0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHckUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUs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S0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNtQix3QkFBd0I7a0JBQWhELEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLGdCQUFnQjtrQkFBeEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDbUIsS0FBSztrQkFBN0IsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ2EsVUFBVTtrQkFBNUIsTUFBTTtZQUNZLE9BQU87a0JBQXpCLE1BQU07WUFDWSxPQUFPO2tCQUF6QixNQUFNO1lBQ1ksWUFBWTtrQkFBOUIsTUFBTTtZQUNZLFNBQVM7a0JBQTNCLE1BQU07WUFDWSxrQkFBa0I7a0JBQXBDLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTTtZQUVvQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7WUFDSCxPQUFPO2tCQUE1QixTQUFTO21CQUFDLFNBQVM7WUFDUyxnQkFBZ0I7a0JBQTVDLFNBQVM7bUJBQUMsZ0JBQWdCO1lBQ0ssbUJBQW1CO2tCQUFsRCxTQUFTO21CQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2VsZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56VHJlZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy10cmVlLXNlbGVjdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDbWFjc1RyZWVDb21wb25lbnR9IGZyb20gXCIuLi9jbWFjcy10cmVlL2NtYWNzLXRyZWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtdHJlZS90cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tICcuLi9jbWFjcy10cmVlL3RyZWUvbnotdHJlZS1zZXJ2aWNlLnJlc29sdmVyJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZSB9IGZyb20gJy4uL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2UnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gJy4uL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlnaGVyT3JkZXJTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGluamVjdG9yLmdldChDbWFjc1RyZWVTZWxlY3RTZXJ2aWNlKTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlLXNlbGVjdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWVTZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS1zZWxlY3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NUcmVlU2VsZWN0U2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4sXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGhpZ2hlck9yZGVyU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNlbGYoKSwgSW5qZWN0b3JdXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVHJlZVNlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ3NpemU9PT1cImxhcmdlXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNtXSc6ICdzaXplPT09XCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1lbmFibGVkXSc6ICchZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ29wZW4gJiYgIWNtYWNzT3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0cmlnZ2VyKCknXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICNjZmQzZDkgI2ZmZmZmZjtcclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNtYWNzLXRyZWUtc2VsZWN0IHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFzeW5jRGF0YSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbm9kZXM6IEFycmF5PE56VHJlZU5vZGUgfCBOelRyZWVOb2RlT3B0aW9ucz4gPSBbXTtcclxuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgZGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBkaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyB8IHVuZGVmaW5lZCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlW10gfT47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGV4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuICBAT3V0cHV0KCkgb25hZGRwYXJlbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0cmVlUmVmJykgdHJlZVJlZjogQ21hY3NUcmVlQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbikgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcclxuICBpc05vdEZvdW5kID0gZmFsc2U7XHJcbiAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4gIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgb25hZGRwYXJlbnRldnQoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm9uYWRkcGFyZW50LmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcmVudChub2RlOiBhbnkpIHtcclxuICAgIHRoaXMudHJlZVJlZi5hZGRQYXJlbnQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcgfHwgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoRGlzcGxheSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3BlbiA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm11bHRpcGxlIHx8IHRoaXMuY2hlY2thYmxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XHJcbiAgICBsZXQgb3BhY2l0eSA9IDE7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlYXJjaCkge1xyXG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcclxuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTtcclxuICAgIGlmICh0aGlzLmlubGluZUVkaXQpIHtcclxuICAgICAgdGhpcy5zaG93RXhwYW5kID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUgJiYgdGhpcy5jbWFjc09wZW4pe1xyXG4gICAgICB0aGlzLmRlZmF1bHRFeHBhbmRBbGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NPcGVuICYmIHRoaXMudHJlZVJlZikge1xyXG4gICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBOelRyZWVOb2RlKSAge1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xyXG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vZGVzJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gW3ZhbHVlIGFzIHN0cmluZ107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5vcGVuKSkge1xyXG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2ggfHwgdGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbkRyb3Bkb3duKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vcGVuKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEJBQ0tTUEFDRSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlTm9kZSA9IHRoaXMuc2VsZWN0ZWROb2Rlc1t0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChyZW1vdmVOb2RlKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoe1xyXG4gICAgICAgICAgZXZlbnROYW1lOiAncmVtb3ZlU2VsZWN0JyxcclxuICAgICAgICAgIG5vZGU6IHJlbW92ZU5vZGVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5jbWFjc09wZW4pIHtcclxuICAgICAgICB0aGlzLnRyZWVSZWYuc2VhcmNoVmFsdWUgPSAnJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25FeHBhbmRlZEtleXNDaGFuZ2UodmFsdWU6IE56Rm9ybWF0RW1pdEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZENoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMuZGVmYXVsdEV4cGFuZGVkS2V5cyA9IFsuLi52YWx1ZS5rZXlzIV07XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZChub2RlOiBOelRyZWVOb2RlLCBlbWl0OiBib29sZWFuID0gdHJ1ZSwgZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLm11bHRpcGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1pdCkge1xyXG4gICAgICB0aGlzLnJlbW92ZWQuZW1pdChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEbyBub3QgdHJpZ2dlciB0aGUgcG9wdXBcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIG1lcmdlKFxyXG4gICAgICB0aGlzLnRyZWVDbGljay5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZSE7XHJcbiAgICAgICAgICBpZiAodGhpcy5yYWRpbyAgJiYgdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvZXJjZVRyZWVOb2Rlcyh0aGlzLm5vZGVzKTtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbXSwgbm9kZXMsIHRydWUpO1xyXG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhbbm9kZS5rZXldLCBub2RlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xyXG4gICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGUhO1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2thYmxlID8gIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCA6ICFub2RlLmlzRGlzYWJsZWQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5jaGVja2FibGUgPyB0aGlzLnRyZWVDaGVja0JveENoYW5nZSBhcyBhbnkgOiBvYnNlcnZhYmxlT2YoKSBhcyBhbnksXHJcbiAgICAgIHRoaXMuY2xlYXJlZCxcclxuICAgICAgdGhpcy5yZW1vdmVkXHJcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSEpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gWy4uLnZhbHVlXTtcclxuICAgICAgaWYgKHRoaXMuc2hvd1NlYXJjaCB8fCB0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmlzTm90Rm91bmQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS5sZW5ndGggPyB2YWx1ZVswXSA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTm9kZXMoaW5pdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoaW5pdCkge1xyXG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuY29lcmNlVHJlZU5vZGVzKHRoaXMubm9kZXMpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuaXNNdWx0aXBsZTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKG5vZGVzKTtcclxuICAgICAgaWYgKHRoaXMuY2hlY2thYmxlICYmICF0aGlzLnJhZGlvKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyh0aGlzLnZhbHVlLCBub2Rlcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMucmFkaW8pIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyh0aGlzLnZhbHVlLCBub2RlcywgdGhpcy5pc011bHRpcGxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKHRoaXMudmFsdWUsIG5vZGVzLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYWJsZSAmJiAhdGhpcy5yYWRpbykge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4udGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKV07XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnJhZGlvKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsuLi50aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbLi4udGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiB0aGlzLmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICd3aWR0aCcsXHJcbiAgICAgICAgICBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsZWFyZWQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VhcmNoVmFsdWVzKCRldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzTm90Rm91bmQgPSAodGhpcy5zaG93U2VhcmNoIHx8IHRoaXMuaXNNdWx0aXBsZSkgJiYgISF0aGlzLmlucHV0VmFsdWUgJiYgJGV2ZW50Lm1hdGNoZWRLZXlzIS5sZW5ndGggPT09IDA7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgfVxyXG5cclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56VHJlZU5vZGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5rZXkhO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2lucHV0VGVtcGxhdGU+XHJcbiAgPGlucHV0XHJcbiAgICAjaW5wdXRFbGVtZW50XHJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRcIlxyXG4gICAgW2NsYXNzLm5vLW1hcmdpbi1sZWZ0XT1cInNlbGVjdGVkTm9kZXMubGVuZ3RoXCJcclxuICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cImlzQ29tcG9zaW5nID0gdHJ1ZVwiXHJcbiAgICAoY29tcG9zaXRpb25lbmQpPVwiaXNDb21wb3NpbmcgPSBmYWxzZVwiXHJcbiAgICAoa2V5ZG93bik9XCJvbktleURvd25JbnB1dCgkZXZlbnQpXCJcclxuICAgIFtuZ01vZGVsXT1cImlucHV0VmFsdWVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0SW5wdXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICpuZ0lmPVwiIWNtYWNzT3BlblwiXHJcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gIG56Q29ubmVjdGVkT3ZlcmxheVxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cImNka092ZXJsYXlPcmlnaW5cIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJvcGVuXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPyBudWxsIDogdHJpZ2dlcldpZHRoXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD8gdHJpZ2dlcldpZHRoIDogbnVsbFwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAoZGV0YWNoKT1cImNsb3NlRHJvcERvd24oKVwiXHJcbiAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48ZGl2XHJcbiAgY2RrT3ZlcmxheU9yaWdpblxyXG4gIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25cIlxyXG4gIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tc2luZ2xlXT1cIiFpc011bHRpcGxlXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlXT1cImlzTXVsdGlwbGVcIlxyXG4gIHRhYmluZGV4PVwiMFwiPlxyXG4gIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIGNtYWNzLXRyZWUtc2VsZWN0LXNlYXJjaC1pY29uXCI+XHJcbiAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1TZWFyY2ggYW50LXNlbGVjdC1jbGVhci1pY29uXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTXVsdGlwbGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgICpuZ0lmPVwicGxhY2VIb2xkZXIgJiYgc2VsZWN0ZWROb2Rlcy5sZW5ndGggPT09IDBcIlxyXG4gICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInBsYWNlSG9sZGVyRGlzcGxheVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fcGxhY2Vob2xkZXJcIj5cclxuICAgICAgICB7eyBwbGFjZUhvbGRlciB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cInNlbGVjdGVkTm9kZXMubGVuZ3RoID09PSAxXCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlXCJcclxuICAgICAgICBbYXR0ci50aXRsZV09XCJkaXNwbGF5V2l0aChzZWxlY3RlZE5vZGVzWzBdKVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwic2VsZWN0ZWRWYWx1ZURpc3BsYXlcIj5cclxuICAgICAgICB7eyBkaXNwbGF5V2l0aChzZWxlY3RlZE5vZGVzWzBdKSB9fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICAqbmdJZj1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNlYXJjaERpc3BsYXlcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXBcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX19taXJyb3JcIj57e2lucHV0VmFsdWV9fSZuYnNwOzwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTXVsdGlwbGVcIj5cclxuICAgIDx1bCBjbGFzcz1cImNtYWNzLXRyZWUtc2VsZWN0LXVsIGFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJwbGFjZUhvbGRlciAmJiBzZWxlY3RlZE5vZGVzLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwicGxhY2VIb2xkZXJEaXNwbGF5XCJcclxuICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19wbGFjZWhvbGRlclwiPlxyXG4gICAgICAgIHt7IHBsYWNlSG9sZGVyIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBub2RlIG9mIHNlbGVjdGVkTm9kZXMgfCBzbGljZTogMCA6IG1heFRhZ0NvdW50OyB0cmFja0J5OnRyYWNrVmFsdWVcIj5cclxuICAgICAgICA8bGlcclxuICAgICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICAgIFthdHRyLnRpdGxlXT1cImRpc3BsYXlXaXRoKG5vZGUpXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZF09XCJub2RlLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIW5vZGUuaXNEaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlU2VsZWN0ZWQobm9kZSwgdHJ1ZSwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPnt7IGRpc3BsYXlXaXRoKG5vZGUpIH19PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bGlcclxuICAgICAgICAqbmdJZj1cInNlbGVjdGVkTm9kZXMubGVuZ3RoID4gbWF4VGFnQ291bnRcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc2VsZWN0ZWROb2RlcyB8IHNsaWNlOiBtYXhUYWdDb3VudH1cIj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICArIHt7IHNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gbWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwiYW50LXNlbGVjdC1zZWFyY2ggYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpbnB1dFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPHNwYW4gKm5nSWY9XCJhbGxvd0NsZWFyICYmIHNlbGVjdGVkTm9kZXMubGVuZ3RoXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXJcIlxyXG4gICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAoY2xpY2spPVwib25DbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiIGNsYXNzPVwiYW50LXNlbGVjdC1jbGVhci1pY29uXCIgdGhlbWU9XCJmaWxsXCI+PC9pPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIGNtYWNzLXRyZWUtc2VsZWN0LWFycm93XCI+XHJcbiAgICA8aSBjbGFzcz1cImFudC1zZWxlY3QtY2xlYXItaWNvbiBpY29uQXJyb3dMYXJnZS1BcnJvdy1SaWdodFwiIFtjbGFzcy5jbWFjcy1zZWxlY3RlZC1ub2Rlc109XCJzZWxlY3RlZE5vZGVzLmxlbmd0aFwiPjwvaT5cclxuICA8L2Rpdj5cclxuICA8c3BhbiAqbmdJZj1cIiFpc011bHRpcGxlXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWFycm93XCI+XHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIiBjbGFzcz1cImFudC1zZWxlY3QtYXJyb3ctaWNvblwiPjwvaT5cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NPcGVuXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnQ+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3QtZHJvcGRvd24gYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duIGNtYWNzLXRyZWUtc2VsZWN0LWRyb3Bkb3duIGNtYWNzLWN1c3RvbS1zY3JvbGxiYXJcIlxyXG4gICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tLXNpbmdsZV09XCIhbXVsdGlwbGVcIlxyXG4gICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlXT1cIm11bHRpcGxlXCJcclxuICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgICAgIFtuZ1N0eWxlXT1cImRyb3Bkb3duU3R5bGVcIj5cclxuICAgIDxjbWFjcy10cmVlXHJcbiAgICAgICN0cmVlUmVmXHJcbiAgICAgIG56Tm9BbmltYXRpb25cclxuICAgICAgW3NlbGVjdE1vZGVdPVwidHJ1ZVwiXHJcbiAgICAgIFtuekRhdGFdPVwibm9kZXNcIlxyXG4gICAgICBbaW5saW5lRWRpdF09XCJpbmxpbmVFZGl0XCJcclxuICAgICAgW256TXVsdGlwbGVdPVwibXVsdGlwbGVcIlxyXG4gICAgICBbc2VhcmNoVmFsdWVdPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgIFtjaGVja2FibGVdPVwiY2hlY2thYmxlXCJcclxuICAgICAgW3JhZGlvXT1cInJhZGlvXCJcclxuICAgICAgW2FzeW5jRGF0YV09XCJhc3luY0RhdGFcIlxyXG4gICAgICBbc2hvd0V4cGFuZF09XCJzaG93RXhwYW5kXCJcclxuICAgICAgW3Nob3dMaW5lXT1cInNob3dMaW5lXCJcclxuICAgICAgW2V4cGFuZGVkSWNvbl09XCJleHBhbmRlZEljb25cIlxyXG4gICAgICBbbnpCbG9ja05vZGVdPVwidHJ1ZVwiXHJcbiAgICAgIFtleHBhbmRBbGxdPVwiZGVmYXVsdEV4cGFuZEFsbFwiXHJcbiAgICAgIFtuekV4cGFuZGVkS2V5c109XCJkZWZhdWx0RXhwYW5kZWRLZXlzXCJcclxuICAgICAgW256Q2hlY2tlZEtleXNdPVwiY2hlY2thYmxlID8gdmFsdWUgOiBbXVwiXHJcbiAgICAgIFtuelNlbGVjdGVkS2V5c109XCIhY2hlY2thYmxlID8gdmFsdWUgOiBbXVwiXHJcbiAgICAgIChuekV4cGFuZENoYW5nZSk9XCJvbkV4cGFuZGVkS2V5c0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKG56Q2xpY2spPVwidHJlZUNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChuekNoZWNrZWRLZXlzQ2hhbmdlKT1cInVwZGF0ZVNlbGVjdGVkTm9kZXMoKVwiXHJcbiAgICAgIChuelNlbGVjdGVkS2V5c0NoYW5nZSk9XCJ1cGRhdGVTZWxlY3RlZE5vZGVzKClcIlxyXG4gICAgICAobnpDaGVja0JveENoYW5nZSk9XCJ0cmVlQ2hlY2tCb3hDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKHNlYXJjaFZhbHVlQ2hhbmdlKT1cInNldFNlYXJjaFZhbHVlcygkZXZlbnQpXCJcclxuICAgICAgKG9uYWRkY2hpbGQpPVwib25hZGRjaGlsZGV2dCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvY21hY3MtdHJlZT5cclxuICAgIDwhLS08c3BhbiAqbmdJZj1cIm5vZGVzLmxlbmd0aCA9PT0gMCB8fCBpc05vdEZvdW5kXCIgY2xhc3M9XCJhbnQtc2VsZWN0LW5vdC1mb3VuZFwiPlxyXG4gICAgICA8bnotZW1iZWQtZW1wdHkgW256Q29tcG9uZW50TmFtZV09XCIndHJlZS1zZWxlY3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJub3RGb3VuZENvbnRlbnRcIj48L256LWVtYmVkLWVtcHR5PlxyXG4gICAgPC9zcGFuPi0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlubGluZUVkaXRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWFkZC1uZXctY2F0ZWdvcnlcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU5ldyBjbWFjcy1zZWxlY3QtdHJlZS1uZXctaWNvblwiXHJcbiAgICAgICAgICAgKGNsaWNrKT1cIm9uYWRkcGFyZW50ZXZ0KCRldmVudClcIj48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1hZGQtbmV3LWNhdGVnb3J5LXRpdGxlXCI+TmV3IENhdGVnb3J5PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=