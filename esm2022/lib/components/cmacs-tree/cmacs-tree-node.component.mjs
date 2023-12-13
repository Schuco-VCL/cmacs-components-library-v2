import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Host, HostListener, Input, Optional, Output, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { collapseMotion } from 'ng-zorro-antd/core/animation';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-tree.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
const _c0 = ["dragElement"];
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0) { return { $implicit: a0 }; };
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r10.expandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r10.treeNode));
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("ant-select-switcher-icon", ctx_r11.selectMode)("ant-tree-switcher-icon", !ctx_r11.selectMode);
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_1_Template, 1, 4, null, 3);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_i_2_Template, 1, 4, "i", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.expandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.expandedIcon));
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} if (rf & 2) {
    i0.ɵɵproperty("spin", true);
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_3_ng_container_2_i_2_Template, 1, 1, "i", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.treeNode.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.treeNode.isLoading);
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTreeNodeComponent_ng_container_3_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r13.expandedIcon)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r13.treeNode));
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r16.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_i_1_Template, 1, 1, "i", 12);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_i_2_Template, 1, 0, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.isShowLineIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.isShowLineIcon);
} }
function CmacsTreeNodeComponent_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_3_1_Template, 1, 4, null, 3);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_3_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isTemplateRef(ctx_r7.expandedIcon));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.isTemplateRef(ctx_r7.expandedIcon));
} }
function CmacsTreeNodeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18._clickExpand($event)); });
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵtemplate(3, CmacsTreeNodeComponent_ng_container_3_ng_container_3_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r1.nzNodeSwitcherClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isShowSwitchIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.showLine);
} }
function CmacsTreeNodeComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_4_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20._clickCheckBox($event)); });
    i0.ɵɵelement(2, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("margin-left", !ctx_r2.radio && ctx_r2.checkable && ctx_r2.inlineEdit ? 10 : 0, "px");
    i0.ɵɵproperty("ngClass", ctx_r2.nzNodeCheckboxClass);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-tree-checkbox-inner", !ctx_r2.selectMode)("ant-select-tree-radio-btn-inner", ctx_r2.selectMode && ctx_r2.radio)("ant-select-tree-checkbox-inner", ctx_r2.selectMode);
} }
function CmacsTreeNodeComponent_ng_container_5_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzType", ctx_r26.nzIcon);
} }
function CmacsTreeNodeComponent_ng_container_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19)(1, "span", 19);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_5_span_2_i_2_Template, 1, 1, "i", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("ant-tree-icon__open", ctx_r22.isSwitcherOpen)("ant-tree-icon__close", ctx_r22.isSwitcherClose)("ant-tree-icon_loading", ctx_r22.treeNode.isLoading);
    i0.ɵɵproperty("ngClass", ctx_r22.nzNodeContentLoadingClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r22.nzNodeContentIconClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r22.nzIcon);
} }
function CmacsTreeNodeComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r23.highlightKeys[0], "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.highlightKeys[1]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r23.highlightKeys[2], " ");
} }
function CmacsTreeNodeComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.treeNode.title, " ");
} }
function CmacsTreeNodeComponent_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "i", 23);
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_5_ng_container_6_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r27.onaddchildevt($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function CmacsTreeNodeComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_5_span_2_Template, 3, 9, "span", 17);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtemplate(4, CmacsTreeNodeComponent_ng_container_5_ng_container_4_Template, 6, 3, "ng-container", 3);
    i0.ɵɵtemplate(5, CmacsTreeNodeComponent_ng_container_5_ng_container_5_Template, 2, 1, "ng-container", 3);
    i0.ɵɵtemplate(6, CmacsTreeNodeComponent_ng_container_5_ng_container_6_Template, 2, 0, "ng-container", 3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("draggable", ctx_r3.canDraggable);
    i0.ɵɵpropertyInterpolate("title", ctx_r3.treeNode.title);
    i0.ɵɵproperty("ngClass", ctx_r3.nzNodeContentClass);
    i0.ɵɵattribute("draggable", ctx_r3.canDraggable)("aria-grabbed", ctx_r3.canDraggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.treeNode.icon && ctx_r3.showIcon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.treeNode.isMatched);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.treeNode.isMatched);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.inlineEdit && !ctx_r3.treeNode.parentNode);
} }
function CmacsTreeNodeComponent_ng_template_6_Template(rf, ctx) { }
function CmacsTreeNodeComponent_cmacs_tree_node_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-tree-node", 24);
    i0.ɵɵlistener("onaddchild", function CmacsTreeNodeComponent_cmacs_tree_node_8_Template_cmacs_tree_node_onaddchild_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.onaddchildevt($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r29 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("treeNode", node_r29)("showExpand", ctx_r5.showExpand)("noAnimation", ctx_r5.noAnimation)("selectMode", ctx_r5.selectMode)("showLine", ctx_r5.showLine)("expandedIcon", ctx_r5.expandedIcon)("draggable", ctx_r5.draggable)("radio", ctx_r5.radio)("checkable", ctx_r5.checkable)("asyncData", ctx_r5.asyncData)("expandAll", ctx_r5.expandAll)("defaultExpandAll", ctx_r5.defaultExpandAll)("showIcon", ctx_r5.showIcon)("searchValue", ctx_r5.searchValue)("hideUnMatched", ctx_r5.hideUnMatched)("beforeDrop", ctx_r5.beforeDrop)("treeTemplate", ctx_r5.treeTemplate);
} }
export class CmacsTreeNodeComponent {
    set draggable(value) {
        this._draggable = value;
        this.handDragEvent();
    }
    get draggable() {
        return this._draggable;
    }
    /**
     * @deprecated use
     * expandAll instead
     */
    set defaultExpandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    get defaultExpandAll() {
        return this._expandAll;
    }
    // default set
    set expandAll(value) {
        this._expandAll = value;
        if (value && this.treeNode && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
    }
    get expandAll() {
        return this._expandAll;
    }
    set searchValue(value) {
        this.highlightKeys = [];
        // tslint:disable-next-line: no-non-null-assertion
        if (value && this.treeNode.title.toLowerCase().includes(value.toLowerCase())) {
            // match the search value
            const index = this.treeNode.title.toLowerCase().indexOf(value.toLowerCase());
            this.highlightKeys = [
                this.treeNode.title.slice(0, index),
                this.treeNode.title.slice(index, index + value.length),
                this.treeNode.title.slice(index + value.length, this.treeNode.title.length)
            ];
        }
        this._searchValue = value;
    }
    get searchValue() {
        return this._searchValue;
    }
    get nzIcon() {
        return this.treeNode.icon;
    }
    get canDraggable() {
        return this.draggable && !this.treeNode.isDisabled ? true : null;
    }
    get isShowLineIcon() {
        return !this.treeNode.isLeaf && this.showLine;
    }
    get isShowSwitchIcon() {
        return !this.treeNode.isLeaf && !this.showLine;
    }
    get isSwitcherOpen() {
        return this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    get isSwitcherClose() {
        return !this.treeNode.isExpanded && !this.treeNode.isLeaf;
    }
    get displayStyle() {
        // to hide unmatched nodes
        return this.searchValue && this.hideUnMatched && !this.treeNode.isMatched && !this.treeNode.isExpanded
            ? 'none'
            : '';
    }
    /**
     * reset node class
     */
    setClassMap() {
        this.prefixCls = this.selectMode ? 'ant-select-tree' : 'ant-tree';
        this.nzNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.treeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.treeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: !this.checkable && this.treeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.treeNode.isLoading
        };
        this.nzNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.treeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.nzNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.radio ? this.nzTreeService.checkedNodeList.length > 0 && this.nzTreeService.checkedNodeList[0].key === this.treeNode.key : this.treeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.treeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.treeNode.isDisabled || this.treeNode.isDisableCheckbox
        };
        this.nzNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.treeNode.isSelected
        };
        this.nzNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.nzNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
        if (!this.cdr['destroyed']) {
            this.cdr.detectChanges();
        }
    }
    onMousedown(event) {
        if (this.selectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeService.nzMultiple) {
            this.nzTreeService.isMultiple = toBoolean(event.ctrlKey) || toBoolean(event.shiftKey);
            const selectedNodes = this.nzTreeService.getSelectedNodeList();
            const selectedNodesCount = selectedNodes.length;
            if (toBoolean(event.shiftKey) && selectedNodesCount > 0) {
                const eventNext = this.nzTreeService.formatEvent('selectedMultiple', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
            if (toBoolean(event.ctrlKey)) {
                if (selectedNodesCount) {
                    const selectedFiltered = selectedNodes.filter(n => ((n.parentNode === this.treeNode.parentNode) || (!n.parentNode && !this.treeNode.parentNode)));
                    if (selectedFiltered.length) {
                        this.treeNode.isSelected = true;
                    }
                    else {
                        this.treeNode.isSelected = !this.checkSubTreeSelection();
                    }
                }
                else {
                    this.treeNode.isSelected = true;
                }
                const eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
                // tslint:disable-next-line: no-non-null-assertion
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        }
        if (this.treeNode.isSelectable &&
            !(this.nzTreeService.nzMultiple && (toBoolean(event.shiftKey) || toBoolean(event.ctrlKey)))) {
            if (!this.treeNode.isSelected) {
                this.treeNode.isSelected = !this.treeNode.isSelected;
            }
            const eventNext = this.nzTreeService.formatEvent('click', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
        if (this.checkable) {
            this._clickCheckBox(event);
        }
    }
    checkSubTreeSelection() {
        let stack = [], hashMap = {};
        stack.push(this.treeNode);
        while (stack.length !== 0) {
            let node = stack.pop();
            if (!hashMap[node.key]) {
                if (node.isSelected) {
                    return true;
                }
                this.visitNode(node, hashMap);
                if (node.children.length) {
                    for (let i = node.children.length - 1; i >= 0; i--) {
                        stack.push(node.children[i]);
                    }
                }
                if (node.parentNode) {
                    stack.push(node.parentNode);
                }
            }
        }
        return false;
    }
    visitNode(node, hashMap) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
        }
    }
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * @param event
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.treeNode, event);
        // tslint:disable-next-line: no-non-null-assertion
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.treeNode.isLoading && !this.treeNode.isLeaf) {
            // set async state
            if (this.asyncData && this.treeNode.children.length === 0 && !this.treeNode.isExpanded) {
                this.treeNode.isLoading = true;
            }
            this.treeNode.isExpanded = !this.treeNode.isExpanded;
            const eventNext = this.nzTreeService.formatEvent('expand', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event) {
        if (!this.selectMode) {
            event.preventDefault();
            event.stopPropagation();
            // return if node is disabled
            if (this.treeNode.isDisabled || this.treeNode.isDisableCheckbox) {
                return;
            }
            this.treeNode.isChecked = !this.treeNode.isChecked;
            this.treeNode.isHalfChecked = false;
            if (!this.nzTreeService.isCheckStrictly) {
                this.nzTreeService.conduct(this.treeNode);
            }
            const eventNext = this.nzTreeService.formatEvent('check', this.treeNode, event);
            // tslint:disable-next-line: no-non-null-assertion
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    /**
     * drag event
     * @param e
     */
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    onaddchildevt($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        this.onaddchild.emit(this.treeNode);
    }
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            // tslint:disable-next-line: no-non-null-assertion
            e.dataTransfer.setData('text/plain', this.treeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.treeNode);
        this.treeNode.isExpanded = false;
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.treeNode.key && !this.treeNode.isExpanded && !this.treeNode.isLeaf) {
                this.treeNode.isExpanded = true;
            }
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.treeNode, e);
            // tslint:disable-next-line: no-non-null-assertion
            this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.treeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.treeNode, e);
        // tslint:disable-next-line: no-non-null-assertion
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.treeNode.key) || (this.dragPos === 0 && this.treeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.treeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
            if (this.beforeDrop) {
                this.beforeDrop({
                    // tslint:disable-next-line: no-non-null-assertion
                    dragNode: this.newMethod(),
                    node: this.treeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                    }
                    // tslint:disable-next-line: no-non-null-assertion
                    this.nzTreeService.triggerEventChange$.next(dropEvent);
                    // tslint:disable-next-line: no-non-null-assertion
                    this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (this.treeNode) {
                this.nzTreeService.dropAndApply(this.treeNode, this.dragPos);
                // tslint:disable-next-line: no-non-null-assertion
                this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    }
    newMethod() {
        // tslint:disable-next-line: no-non-null-assertion
        return this.nzTreeService.getSelectedNode();
    }
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.beforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.treeNode, e);
                // tslint:disable-next-line: no-non-null-assertion
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    }
    /**
     * 监听拖拽事件
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.draggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next(true);
                this.destroy$.complete();
            }
        });
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, nzNoAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.nzNoAnimation = nzNoAnimation;
        this.hideUnMatched = false;
        this.noAnimation = false;
        this.selectMode = false;
        this.showIcon = false;
        this.inlineEdit = false;
        this.radio = false;
        this.onaddchild = new EventEmitter();
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeCheckboxClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        // tslint:disable-next-line: variable-name
        this._searchValue = '';
        // tslint:disable-next-line: variable-name
        this._draggable = false;
        // tslint:disable-next-line: variable-name
        this._expandAll = false;
    }
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.selectMode && this.checkable && !this.treeNode.isLeaf) {
            this.treeNode.isExpanded = true;
        }
        if (this.treeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.treeNode);
        }
        if (this.treeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.treeNode);
        }
        if (this.treeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.treeNode);
        }
        // TODO
        this.treeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(
        // tslint:disable-next-line: no-non-null-assertion
        filter(data => data.node.key === this.treeNode.key), takeUntil(this.destroy$))
            .subscribe(() => {
            //this.setClassMap();
            this.markForCheck();
        });
        this.setClassMap();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsTreeNodeComponent_Factory(t) { return new (t || CmacsTreeNodeComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTreeNodeComponent, selectors: [["cmacs-tree-node"]], viewQuery: function CmacsTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragElement = _t.first);
        } }, hostBindings: function CmacsTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mousedown", function CmacsTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function CmacsTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function CmacsTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function CmacsTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
        } }, inputs: { treeNode: "treeNode", showLine: "showLine", showExpand: "showExpand", expandedIcon: "expandedIcon", checkable: "checkable", asyncData: "asyncData", hideUnMatched: "hideUnMatched", noAnimation: "noAnimation", selectMode: "selectMode", showIcon: "showIcon", inlineEdit: "inlineEdit", radio: "radio", index: "index", treeTemplate: "treeTemplate", beforeDrop: "beforeDrop", draggable: "draggable", defaultExpandAll: "defaultExpandAll", expandAll: "expandAll", searchValue: "searchValue" }, outputs: { onaddchild: "onaddchild" }, exportAs: ["cmacsTreeNode"], features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 29, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [2, "box-shadow", "inset 2px 0px 0px 0px transparent", "position", "relative"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "treeNode", "showExpand", "noAnimation", "selectMode", "showLine", "expandedIcon", "draggable", "radio", "checkable", "asyncData", "expandAll", "defaultExpandAll", "showIcon", "searchValue", "hideUnMatched", "beforeDrop", "treeTemplate", "onaddchild", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "spin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "spin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], [1, "ant-tree-title"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "font-highlight"], [1, "iconUILarge-New", "cmacs-tree-new-icon", 3, "click"], [3, "treeNode", "showExpand", "noAnimation", "selectMode", "showLine", "expandedIcon", "draggable", "radio", "checkable", "asyncData", "expandAll", "defaultExpandAll", "showIcon", "searchValue", "hideUnMatched", "beforeDrop", "treeTemplate", "onaddchild"]], template: function CmacsTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 0, 1)(2, "div", 2);
            i0.ɵɵtemplate(3, CmacsTreeNodeComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
            i0.ɵɵtemplate(4, CmacsTreeNodeComponent_ng_container_4_Template, 3, 9, "ng-container", 3);
            i0.ɵɵtemplate(5, CmacsTreeNodeComponent_ng_container_5_Template, 7, 10, "ng-container", 3);
            i0.ɵɵtemplate(6, CmacsTreeNodeComponent_ng_template_6_Template, 0, 0, "ng-template", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "ul", 5);
            i0.ɵɵtemplate(8, CmacsTreeNodeComponent_cmacs_tree_node_8_Template, 1, 17, "cmacs-tree-node", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("padding-left", ctx.treeNode.isLeaf ? (ctx.selectMode ? 22 : 16) * ctx.treeNode.level : 0, "px")("display", ctx.displayStyle);
            i0.ɵɵclassProp("cmacs-tree-child-header", ctx.treeNode.isLeaf)("cmacs-tree-borderless", ctx.treeNode.isLeaf);
            i0.ɵɵproperty("ngClass", ctx.nzNodeClass);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("border-top-color", ctx.selectMode && ctx.index ? "#dee0e5" : "transparent")("padding-left", !ctx.treeNode.isLeaf || !ctx.treeNode.parentNode ? 16 * ctx.treeNode.level : 0, "px");
            i0.ɵɵclassProp("cmacs-tree-parent-header", !ctx.treeNode.isLeaf)("cmacs-tree-node-selected", !ctx.treeNode.isLeaf && ctx.treeNode.isSelected && !ctx.checkable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showExpand);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.checkable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.treeTemplate);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(27, _c1, ctx.treeNode));
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-tree-child-tree-open", !ctx.selectMode || ctx.treeNode.isExpanded);
            i0.ɵɵproperty("@.disabled", ctx.noAnimation)("@collapseMotion", ctx.treeNode.isExpanded ? "expanded" : "collapsed");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.treeNode.getChildren());
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, CmacsTreeNodeComponent], styles: [".cmacs-tree-new-icon[_ngcontent-%COMP%]{color:#acb3bf;font-size:16px;float:right;top:2px;position:relative;right:34px}.ant-tree-title[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.ant-select-tree-checkbox-checked[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]:after{position:absolute;display:table;height:10px;border:none;border-radius:100px;top:2px;left:2px;width:10px;transform:none!important;background-color:#2a7cff;opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \"}.ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]{border-radius:100px}.ant-select-tree-checkbox-indeterminate[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]:after{background-color:#fff}.ant-select-tree-checkbox-checked[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]{background-color:#fff;border-color:#dee0e5}.cmacs-tree-borderless[_ngcontent-%COMP%]{border-left:0px solid transparent!important;box-shadow:inset 2px 0 0 0 transparent}"], data: { animation: [collapseMotion] }, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "showLine", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "showExpand", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "checkable", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "asyncData", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "hideUnMatched", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "noAnimation", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "selectMode", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "showIcon", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsTreeNodeComponent.prototype, "radio", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTreeNodeComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-tree-node', exportAs: 'cmacsTreeNode', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, animations: [collapseMotion], template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.paddingLeft.px]=\"treeNode.isLeaf ? ((selectMode ? 22 : 16) * treeNode.level) : 0\"\r\n  [class.cmacs-tree-child-header]=\"treeNode.isLeaf\"\r\n  [class.cmacs-tree-borderless]=\"treeNode.isLeaf\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\">\r\n  <div [class.cmacs-tree-parent-header]=\"!treeNode.isLeaf\"\r\n       [class.cmacs-tree-node-selected]=\"!treeNode.isLeaf && treeNode.isSelected && !checkable\"\r\n       [style.border-top-color]=\"selectMode && index ? '#dee0e5' : 'transparent'\"\r\n       style=\"box-shadow: inset 2px 0px 0px 0px transparent; position: relative\"\r\n       [style.paddingLeft.px]=\"!treeNode.isLeaf || !treeNode.parentNode ? 16 * treeNode.level : 0\">\r\n    <ng-container *ngIf=\"showExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!treeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(expandedIcon)\"\r\n            [ngTemplateOutlet]=\"expandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(expandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"selectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!selectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"treeNode.isLoading\" nz-icon nzType=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(expandedIcon)\"\r\n          [ngTemplateOutlet]=\"expandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(expandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"checkable\">\r\n    <span\r\n    [style.marginLeft.px]=\" !radio && checkable && inlineEdit ? 10 : 0\"\r\n      [ngClass]=\"nzNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!selectMode\"\r\n            [class.ant-select-tree-radio-btn-inner]=\"selectMode && radio\"\r\n            [class.ant-select-tree-checkbox-inner]=\"selectMode\"></span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!treeTemplate\">\r\n    <span\r\n      title=\"{{treeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"treeNode.icon && showIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"treeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [nzType]=\"nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"treeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!treeNode.isMatched\">\r\n          {{treeNode.title}}\r\n        </ng-container>\r\n        <ng-container *ngIf=\"inlineEdit && !treeNode.parentNode\">\r\n          <i class=\"iconUILarge-New cmacs-tree-new-icon\" (click)=\"onaddchildevt($event)\"></i>\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n    </ng-container>\r\n    <ng-template\r\n      [ngTemplateOutlet]=\"treeTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: treeNode }\">\r\n    </ng-template>\r\n  </div>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!selectMode || treeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation\"\r\n    [@collapseMotion]=\"treeNode.isExpanded ? 'expanded' : 'collapsed'\">\r\n    <cmacs-tree-node\r\n      *ngFor=\"let node of treeNode.getChildren()\"\r\n      [treeNode]=\"node\"\r\n      [showExpand]=\"showExpand\"\r\n      [noAnimation]=\"noAnimation\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [draggable]=\"draggable\"\r\n      [radio]=\"radio\"\r\n      [checkable]=\"checkable\"\r\n      [asyncData]=\"asyncData\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [treeTemplate]=\"treeTemplate\">\r\n    </cmacs-tree-node>\r\n  </ul>\r\n</li>\r\n", styles: [".cmacs-tree-new-icon{color:#acb3bf;font-size:16px;float:right;top:2px;position:relative;right:34px}.ant-tree-title{-webkit-user-select:none;user-select:none}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner:after{position:absolute;display:table;height:10px;border:none;border-radius:100px;top:2px;left:2px;width:10px;transform:none!important;background-color:#2a7cff;opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \"}.ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{border-radius:100px}.ant-select-tree-checkbox-indeterminate .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner:after{background-color:#fff}.ant-select-tree-checkbox-checked .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner{background-color:#fff;border-color:#dee0e5}.cmacs-tree-borderless{border-left:0px solid transparent!important;box-shadow:inset 2px 0 0 0 transparent}\n"] }]
    }], function () { return [{ type: i1.CmacsTreeService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { dragElement: [{
            type: ViewChild,
            args: ['dragElement']
        }], treeNode: [{
            type: Input
        }], showLine: [{
            type: Input
        }], showExpand: [{
            type: Input
        }], expandedIcon: [{
            type: Input
        }], checkable: [{
            type: Input
        }], asyncData: [{
            type: Input
        }], hideUnMatched: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], showIcon: [{
            type: Input
        }], inlineEdit: [{
            type: Input
        }], radio: [{
            type: Input
        }], index: [{
            type: Input
        }], treeTemplate: [{
            type: Input
        }], beforeDrop: [{
            type: Input
        }], onaddchild: [{
            type: Output
        }], draggable: [{
            type: Input
        }], defaultExpandAll: [{
            type: Input
        }], expandAll: [{
            type: Input
        }], searchValue: [{
            type: Input
        }], onMousedown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], nzClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], nzDblClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], nzContextMenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNHLFlBQVksRUFDeEIsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBS0wsUUFBUSxFQUFFLE1BQU0sRUFFaEIsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztJQ0p4RCxzSUFJYzs7O0lBRlosdURBQWlDLHlFQUFBOzs7SUFHbkMsd0JBTUk7OztJQUZGLDhEQUE2QywrQ0FBQTs7O0lBVmpELDZCQUEwQztJQUN4QywrR0FJYztJQUNkLGdIQU1JO0lBQ04sMEJBQWU7OztJQVhWLGVBQWlDO0lBQWpDLGdFQUFpQztJQUtqQyxlQUFrQztJQUFsQyxpRUFBa0M7OztJQU92Qyx3QkFBZ0g7O0lBQXpELDJCQUFhOzs7SUFmdEUsNkJBQXVDO0lBQ3JDLHVIQWFlO0lBQ2Ys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O2tCQUFuQixNQUFNO1lBR0gsU0FBUztrQkFEWixLQUFLO1lBZUYsZ0JBQWdCO2tCQURuQixLQUFLO1lBY0YsU0FBUztrQkFEWixLQUFLO1lBYUYsV0FBVztrQkFEZCxLQUFLO1lBb0lOLFdBQVc7a0JBRFYsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFXckMsT0FBTztrQkFETixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQThFakMsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQWFwQyxhQUFhO2tCQURaLFlBQVk7bUJBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IENtYWNzVHJlZVNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLXRyZWUuc2VydmljZSc7XHJcbmltcG9ydCB7IGNvbGxhcHNlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQgfSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlLW5vZGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlTm9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnKSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgdHJlZU5vZGU6IE56VHJlZU5vZGU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dMaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXN5bmNEYXRhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5saW5lRWRpdCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYWRpbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBiZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBPdXRwdXQoKSBvbmFkZGNoaWxkOiBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZHJhZ2dhYmxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmhhbmREcmFnRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZHJhZ2dhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogZXhwYW5kQWxsIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBkZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLnRyZWVOb2RlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCBzZXRcclxuICBASW5wdXQoKVxyXG4gIHNldCBleHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUudGl0bGUudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMudHJlZU5vZGUudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS50aXRsZS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS50aXRsZS5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgIHRoaXMudHJlZU5vZGUudGl0bGUuc2xpY2UoaW5kZXggKyB2YWx1ZS5sZW5ndGgsIHRoaXMudHJlZU5vZGUudGl0bGUubGVuZ3RoKVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCB2YXJcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGhpZ2hsaWdodEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgbnpOb2RlQ2xhc3MgPSB7fTtcclxuICBuek5vZGVTd2l0Y2hlckNsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudENsYXNzID0ge307XHJcbiAgbnpOb2RlQ2hlY2tib3hDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgdmFyXHJcbiAgICovXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIGRyYWdQb3MgPSAyO1xyXG4gIGRyYWdQb3NDbGFzczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAgICcwJzogJ2RyYWctb3ZlcicsXHJcbiAgICAnMSc6ICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsXHJcbiAgICAnLTEnOiAnZHJhZy1vdmVyLWdhcC10b3AnXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogZGVmYXVsdCBzZXRcclxuICAgKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX3NlYXJjaFZhbHVlID0gJyc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9kcmFnZ2FibGUgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX2V4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBnZXQgbnpJY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50cmVlTm9kZS5pY29uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbkRyYWdnYWJsZSgpOiBib29sZWFuIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGUgJiYgIXRoaXMudHJlZU5vZGUuaXNEaXNhYmxlZCA/IHRydWUgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd0xpbmVJY29uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzTGVhZiAmJiB0aGlzLnNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudHJlZU5vZGUuaXNMZWFmICYmICF0aGlzLnNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTd2l0Y2hlckNsb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xyXG4gICAgLy8gdG8gaGlkZSB1bm1hdGNoZWQgbm9kZXNcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaFZhbHVlICYmIHRoaXMuaGlkZVVuTWF0Y2hlZCAmJiAhdGhpcy50cmVlTm9kZS5pc01hdGNoZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZFxyXG4gICAgICA/ICdub25lJ1xyXG4gICAgICA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xyXG4gICAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVmaXhDbHMgPSB0aGlzLnNlbGVjdE1vZGUgPyAnYW50LXNlbGVjdC10cmVlJyA6ICdhbnQtdHJlZSc7XHJcblxyXG4gICAgdGhpcy5uek5vZGVDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1kaXNhYmxlZGBdOiB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLnRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc2VsZWN0ZWRgXTogIXRoaXMuY2hlY2thYmxlICYmIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1sb2FkaW5nYF06IHRoaXMudHJlZU5vZGUuaXNMb2FkaW5nXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVTd2l0Y2hlckNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLnRyZWVOb2RlLmlzTGVhZixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDaGVja2JveENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtY2hlY2tlZGBdOiB0aGlzLnJhZGlvID90aGlzLm56VHJlZVNlcnZpY2UuY2hlY2tlZE5vZGVMaXN0Lmxlbmd0aCA+IDAgJiYgdGhpcy5uelRyZWVTZXJ2aWNlLmNoZWNrZWROb2RlTGlzdFswXS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5OiB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1pbmRldGVybWluYXRlYF06IHRoaXMudHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveC1kaXNhYmxlZGBdOiB0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlcmBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLXNlbGVjdGVkYF06IHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbl9fY3VzdG9taXplYF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcy5jZHJbJ2Rlc3Ryb3llZCddKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RNb2RlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56VHJlZVNlcnZpY2UubnpNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpO1xyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlcyA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZXNDb3VudCA9IHNlbGVjdGVkTm9kZXMubGVuZ3RoO1xyXG4gICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSAmJiBzZWxlY3RlZE5vZGVzQ291bnQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWxlY3RlZE11bHRpcGxlJywgIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodG9Cb29sZWFuKGV2ZW50LmN0cmxLZXkpKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTm9kZXNDb3VudCkge1xyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWx0ZXJlZCA9IHNlbGVjdGVkTm9kZXMuZmlsdGVyKG4gPT4gKChuLnBhcmVudE5vZGUgPT09IHRoaXMudHJlZU5vZGUucGFyZW50Tm9kZSkgfHwgKCFuLnBhcmVudE5vZGUgJiYgIXRoaXMudHJlZU5vZGUucGFyZW50Tm9kZSkpKTtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZEZpbHRlcmVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkID0gIXRoaXMuY2hlY2tTdWJUcmVlU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzU2VsZWN0YWJsZSAmJlxyXG4gICAgICAhKHRoaXMubnpUcmVlU2VydmljZS5uek11bHRpcGxlICYmICh0b0Jvb2xlYW4oZXZlbnQuc2hpZnRLZXkpIHx8IHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSkpKVxyXG4gICAge1xyXG4gICAgICBpZiAoIXRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjbGljaycsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2hlY2thYmxlKSB7XHJcbiAgICAgIHRoaXMuX2NsaWNrQ2hlY2tCb3goZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTdWJUcmVlU2VsZWN0aW9uKCkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2godGhpcy50cmVlTm9kZSk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIGlmICghaGFzaE1hcFtub2RlLmtleV0pIHtcclxuICAgICAgICBpZiAobm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZSwgaGFzaE1hcCk7XHJcbiAgICAgICAgaWYobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgc3RhY2sucHVzaChub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobm9kZS5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2aXNpdE5vZGUobm9kZSwgaGFzaE1hcCkge1xyXG4gICAgaWYoIWhhc2hNYXBbbm9kZS5rZXldKSB7XHJcbiAgICAgIGhhc2hNYXBbbm9kZS5rZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekRibENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjb250ZXh0bWVudScsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29sbGFwc2Ugbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0V4cGFuZChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLmFzeW5jRGF0YSAmJiB0aGlzLnRyZWVOb2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9ICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQ7XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrIG5vZGVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfY2xpY2tDaGVja0JveChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdE1vZGUpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXHJcbiAgICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzRGlzYWJsZWQgfHwgdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZCA9ICF0aGlzLnRyZWVOb2RlLmlzQ2hlY2tlZDtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICghdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0KHRoaXMudHJlZU5vZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyBldmVudFxyXG4gICAqIEBwYXJhbSBlXHJcbiAgICovXHJcbiAgY2xlYXJEcmFnQ2xhc3MoKTogdm9pZCB7XHJcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbJ2RyYWctb3Zlci1nYXAtdG9wJywgJ2RyYWctb3Zlci1nYXAtYm90dG9tJywgJ2RyYWctb3ZlciddO1xyXG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kcmFnRWxlbWVudC5uYXRpdmVFbGVtZW50LCBlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25hZGRjaGlsZGV2dCgkZXZlbnQ6IEV2ZW50KSAge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uYWRkY2hpbGQuZW1pdCh0aGlzLnRyZWVOb2RlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxyXG4gICAgICAvLyBmaXJlZm94LW5lZWQtaXRcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgZS5kYXRhVHJhbnNmZXIhLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnRyZWVOb2RlLmtleSEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gZW1wdHlcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUodGhpcy50cmVlTm9kZSk7XHJcbiAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbnRlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXNldCBwb3NpdGlvblxyXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCk7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUua2V5ICE9PSB0aGlzLnRyZWVOb2RlLmtleSAmJiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW50ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdPdmVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGRyb3BQb3NpdGlvbiA9IHRoaXMubnpUcmVlU2VydmljZS5jYWxjRHJvcFBvc2l0aW9uKGUpO1xyXG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgdGhpcy5kcmFnUG9zID0gZHJvcFBvc2l0aW9uO1xyXG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXHJcbiAgICAgIGlmICghKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLnRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbdGhpcy5kcmFnUG9zXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnbGVhdmUnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0Ryb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAoIW5vZGUgfHwgKG5vZGUgJiYgbm9kZS5rZXkgPT09IHRoaXMudHJlZU5vZGUua2V5KSB8fCAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMudHJlZU5vZGUuaXNMZWFmKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGNvbnN0IGRyb3BFdmVudCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4gICAgICBjb25zdCBkcmFnRW5kRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuICAgICAgaWYgKHRoaXMuYmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMuYmVmb3JlRHJvcCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uZXdNZXRob2QoKSxcclxuICAgICAgICAgIG5vZGU6IHRoaXMudHJlZU5vZGUsXHJcbiAgICAgICAgICBwb3M6IHRoaXMuZHJhZ1Bvc1xyXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4gICAgICAgICAgfVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyb3BFdmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJhZ0VuZEV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnRyZWVOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLnRyZWVOb2RlLCB0aGlzLmRyYWdQb3MpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmV3TWV0aG9kKCk6IE56VHJlZU5vZGUge1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSE7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXHJcbiAgICAgIGlmICghdGhpcy5iZWZvcmVEcm9wKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55uR5ZCs5ouW5ou95LqL5Lu2XHJcbiAgICovXHJcbiAgaGFuZERyYWdFdmVudCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ3N0YXJ0JylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VudGVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnb3ZlcicpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ092ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdsZWF2ZScpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRHJvcChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VuZCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VuZChlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56Tm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXQgZXhwYW5kZWQgLyBzZWxlY3RlZCAvIGNoZWNrZWQgbGlzdFxyXG4gICAgaWYodGhpcy5zZWxlY3RNb2RlICYmIHRoaXMuY2hlY2thYmxlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE9cclxuICAgIHRoaXMudHJlZU5vZGUuY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEubm9kZSEua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy90aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bGlcclxuICAjZHJhZ0VsZW1lbnRcclxuICByb2xlPVwidHJlZWl0ZW1cIlxyXG4gIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCJ0cmVlTm9kZS5pc0xlYWYgPyAoKHNlbGVjdE1vZGUgPyAyMiA6IDE2KSAqIHRyZWVOb2RlLmxldmVsKSA6IDBcIlxyXG4gIFtjbGFzcy5jbWFjcy10cmVlLWNoaWxkLWhlYWRlcl09XCJ0cmVlTm9kZS5pc0xlYWZcIlxyXG4gIFtjbGFzcy5jbWFjcy10cmVlLWJvcmRlcmxlc3NdPVwidHJlZU5vZGUuaXNMZWFmXCJcclxuICBbc3R5bGUuZGlzcGxheV09XCJkaXNwbGF5U3R5bGVcIlxyXG4gIFtuZ0NsYXNzXT1cIm56Tm9kZUNsYXNzXCI+XHJcbiAgPGRpdiBbY2xhc3MuY21hY3MtdHJlZS1wYXJlbnQtaGVhZGVyXT1cIiF0cmVlTm9kZS5pc0xlYWZcIlxyXG4gICAgICAgW2NsYXNzLmNtYWNzLXRyZWUtbm9kZS1zZWxlY3RlZF09XCIhdHJlZU5vZGUuaXNMZWFmICYmIHRyZWVOb2RlLmlzU2VsZWN0ZWQgJiYgIWNoZWNrYWJsZVwiXHJcbiAgICAgICBbc3R5bGUuYm9yZGVyLXRvcC1jb2xvcl09XCJzZWxlY3RNb2RlICYmIGluZGV4ID8gJyNkZWUwZTUnIDogJ3RyYW5zcGFyZW50J1wiXHJcbiAgICAgICBzdHlsZT1cImJveC1zaGFkb3c6IGluc2V0IDJweCAwcHggMHB4IDBweCB0cmFuc3BhcmVudDsgcG9zaXRpb246IHJlbGF0aXZlXCJcclxuICAgICAgIFtzdHlsZS5wYWRkaW5nTGVmdC5weF09XCIhdHJlZU5vZGUuaXNMZWFmIHx8ICF0cmVlTm9kZS5wYXJlbnROb2RlID8gMTYgKiB0cmVlTm9kZS5sZXZlbCA6IDBcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RXhwYW5kXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICBbbmdDbGFzc109XCJuek5vZGVTd2l0Y2hlckNsYXNzXCJcclxuICAgICAgKGNsaWNrKT1cIl9jbGlja0V4cGFuZCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Nob3dTd2l0Y2hJY29uXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0cmVlTm9kZS5pc0xvYWRpbmdcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAqbmdJZj1cImlzVGVtcGxhdGVSZWYoZXhwYW5kZWRJY29uKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZGVkSWNvblwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdHJlZU5vZGUgfVwiPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWlzVGVtcGxhdGVSZWYoZXhwYW5kZWRJY29uKVwiXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiY2FyZXQtZG93blwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXN3aXRjaGVyLWljb25dPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlci1pY29uXT1cIiFzZWxlY3RNb2RlXCI+XHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJ0cmVlTm9kZS5pc0xvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBbc3Bpbl09XCJ0cnVlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1sb2FkaW5nLWljb25cIj48L2k+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0xpbmVcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgICpuZ0lmPVwiaXNUZW1wbGF0ZVJlZihleHBhbmRlZEljb24pXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZGVkSWNvblwiXHJcbiAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHRyZWVOb2RlIH1cIj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZVJlZihleHBhbmRlZEljb24pXCI+XHJcbiAgICAgICAgICA8aSAqbmdJZj1cImlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBbbnpUeXBlXT1cImlzU3dpdGNoZXJPcGVuID8gJ21pbnVzLXNxdWFyZScgOiAncGx1cy1zcXVhcmUnXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XHJcbiAgICAgICAgICA8aSAqbmdJZj1cIiFpc1Nob3dMaW5lSWNvblwiIG56LWljb24gbnpUeXBlPVwiZmlsZVwiIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbGluZS1pY29uXCI+PC9pPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNoZWNrYWJsZVwiPlxyXG4gICAgPHNwYW5cclxuICAgIFtzdHlsZS5tYXJnaW5MZWZ0LnB4XT1cIiAhcmFkaW8gJiYgY2hlY2thYmxlICYmIGlubGluZUVkaXQgPyAxMCA6IDBcIlxyXG4gICAgICBbbmdDbGFzc109XCJuek5vZGVDaGVja2JveENsYXNzXCJcclxuICAgICAgKGNsaWNrKT1cIl9jbGlja0NoZWNrQm94KCRldmVudClcIj5cclxuICAgICAgPHNwYW4gW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWlubmVyXT1cIiFzZWxlY3RNb2RlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1yYWRpby1idG4taW5uZXJdPVwic2VsZWN0TW9kZSAmJiByYWRpb1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwic2VsZWN0TW9kZVwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0cmVlVGVtcGxhdGVcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgIHRpdGxlPVwie3t0cmVlTm9kZS50aXRsZX19XCJcclxuICAgICAgW2F0dHIuZHJhZ2dhYmxlXT1cImNhbkRyYWdnYWJsZVwiXHJcbiAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJjYW5EcmFnZ2FibGVcIlxyXG4gICAgICBbbmdDbGFzc109XCJuek5vZGVDb250ZW50Q2xhc3NcIlxyXG4gICAgICBbY2xhc3MuZHJhZ2dhYmxlXT1cImNhbkRyYWdnYWJsZVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwidHJlZU5vZGUuaWNvbiAmJiBzaG93SWNvblwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX29wZW5dPVwiaXNTd2l0Y2hlck9wZW5cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdHJlZS1pY29uX19jbG9zZV09XCJpc1N3aXRjaGVyQ2xvc2VcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdHJlZS1pY29uX2xvYWRpbmddPVwidHJlZU5vZGUuaXNMb2FkaW5nXCJcclxuICAgICAgICBbbmdDbGFzc109XCJuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzXCI+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZUNvbnRlbnRJY29uQ2xhc3NcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gKm5nSWY9XCJuekljb25cIiBbbnpUeXBlXT1cIm56SWNvblwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJlZS10aXRsZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0cmVlTm9kZS5pc01hdGNoZWRcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7e2hpZ2hsaWdodEtleXNbMF19fTxzcGFuIGNsYXNzPVwiZm9udC1oaWdobGlnaHRcIj57e2hpZ2hsaWdodEtleXNbMV19fTwvc3Bhbj57e2hpZ2hsaWdodEtleXNbMl19fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdHJlZU5vZGUuaXNNYXRjaGVkXCI+XHJcbiAgICAgICAgICB7e3RyZWVOb2RlLnRpdGxlfX1cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5saW5lRWRpdCAmJiAhdHJlZU5vZGUucGFyZW50Tm9kZVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uVUlMYXJnZS1OZXcgY21hY3MtdHJlZS1uZXctaWNvblwiIChjbGljayk9XCJvbmFkZGNoaWxkZXZ0KCRldmVudClcIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRyZWVUZW1wbGF0ZVwiXHJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdHJlZU5vZGUgfVwiPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHVsXHJcbiAgICByb2xlPVwiZ3JvdXBcIlxyXG4gICAgY2xhc3M9XCJhbnQtdHJlZS1jaGlsZC10cmVlXCJcclxuICAgIFtjbGFzcy5hbnQtdHJlZS1jaGlsZC10cmVlLW9wZW5dPVwiIXNlbGVjdE1vZGUgfHwgdHJlZU5vZGUuaXNFeHBhbmRlZFwiXHJcbiAgICBkYXRhLWV4cGFuZGVkPVwidHJ1ZVwiXHJcbiAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvblwiXHJcbiAgICBbQGNvbGxhcHNlTW90aW9uXT1cInRyZWVOb2RlLmlzRXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCdcIj5cclxuICAgIDxjbWFjcy10cmVlLW5vZGVcclxuICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2YgdHJlZU5vZGUuZ2V0Q2hpbGRyZW4oKVwiXHJcbiAgICAgIFt0cmVlTm9kZV09XCJub2RlXCJcclxuICAgICAgW3Nob3dFeHBhbmRdPVwic2hvd0V4cGFuZFwiXHJcbiAgICAgIFtub0FuaW1hdGlvbl09XCJub0FuaW1hdGlvblwiXHJcbiAgICAgIFtzZWxlY3RNb2RlXT1cInNlbGVjdE1vZGVcIlxyXG4gICAgICBbc2hvd0xpbmVdPVwic2hvd0xpbmVcIlxyXG4gICAgICBbZXhwYW5kZWRJY29uXT1cImV4cGFuZGVkSWNvblwiXHJcbiAgICAgIFtkcmFnZ2FibGVdPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgW3JhZGlvXT1cInJhZGlvXCJcclxuICAgICAgW2NoZWNrYWJsZV09XCJjaGVja2FibGVcIlxyXG4gICAgICBbYXN5bmNEYXRhXT1cImFzeW5jRGF0YVwiXHJcbiAgICAgIFtleHBhbmRBbGxdPVwiZXhwYW5kQWxsXCJcclxuICAgICAgW2RlZmF1bHRFeHBhbmRBbGxdPVwiZGVmYXVsdEV4cGFuZEFsbFwiXHJcbiAgICAgIFtzaG93SWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgIFtzZWFyY2hWYWx1ZV09XCJzZWFyY2hWYWx1ZVwiXHJcbiAgICAgIFtoaWRlVW5NYXRjaGVkXT1cImhpZGVVbk1hdGNoZWRcIlxyXG4gICAgICBbYmVmb3JlRHJvcF09XCJiZWZvcmVEcm9wXCJcclxuICAgICAgKG9uYWRkY2hpbGQpPVwib25hZGRjaGlsZGV2dCgkZXZlbnQpXCJcclxuICAgICAgW3RyZWVUZW1wbGF0ZV09XCJ0cmVlVGVtcGxhdGVcIj5cclxuICAgIDwvY21hY3MtdHJlZS1ub2RlPlxyXG4gIDwvdWw+XHJcbjwvbGk+XHJcbiJdfQ==