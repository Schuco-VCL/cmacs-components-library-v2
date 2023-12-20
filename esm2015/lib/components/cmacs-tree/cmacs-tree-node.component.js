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
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_2_ng_container_1_1_Template, 1, 4, undefined, 3);
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
    i0.ɵɵtemplate(1, CmacsTreeNodeComponent_ng_container_3_ng_container_3_1_Template, 1, 4, undefined, 3);
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
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18._clickExpand($event); });
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
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_4_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20._clickCheckBox($event); });
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
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵelementStart(1, "span", 19);
    i0.ɵɵtemplate(2, CmacsTreeNodeComponent_ng_container_5_span_2_i_2_Template, 1, 1, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsTreeNodeComponent_ng_container_5_ng_container_6_Template_i_click_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onaddchildevt($event); });
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("onaddchild", function CmacsTreeNodeComponent_cmacs_tree_node_8_Template_cmacs_tree_node_onaddchild_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onaddchildevt($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r29 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("treeNode", node_r29)("showExpand", ctx_r5.showExpand)("noAnimation", ctx_r5.noAnimation)("selectMode", ctx_r5.selectMode)("showLine", ctx_r5.showLine)("expandedIcon", ctx_r5.expandedIcon)("draggable", ctx_r5.draggable)("radio", ctx_r5.radio)("checkable", ctx_r5.checkable)("asyncData", ctx_r5.asyncData)("expandAll", ctx_r5.expandAll)("defaultExpandAll", ctx_r5.defaultExpandAll)("showIcon", ctx_r5.showIcon)("searchValue", ctx_r5.searchValue)("hideUnMatched", ctx_r5.hideUnMatched)("beforeDrop", ctx_r5.beforeDrop)("treeTemplate", ctx_r5.treeTemplate);
} }
export class CmacsTreeNodeComponent {
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
        return !this.treeNode.isLeaf && !this.showLine && !this.treeNode.isEmptyFolder;
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
                this.destroy$.next();
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTreeNodeComponent.ɵfac = function CmacsTreeNodeComponent_Factory(t) { return new (t || CmacsTreeNodeComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
CmacsTreeNodeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTreeNodeComponent, selectors: [["cmacs-tree-node"]], viewQuery: function CmacsTreeNodeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dragElement = _t.first);
    } }, hostBindings: function CmacsTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function CmacsTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function CmacsTreeNodeComponent_click_HostBindingHandler($event) { return ctx.nzClick($event); })("dblclick", function CmacsTreeNodeComponent_dblclick_HostBindingHandler($event) { return ctx.nzDblClick($event); })("contextmenu", function CmacsTreeNodeComponent_contextmenu_HostBindingHandler($event) { return ctx.nzContextMenu($event); });
    } }, inputs: { treeNode: "treeNode", showLine: "showLine", showExpand: "showExpand", expandedIcon: "expandedIcon", checkable: "checkable", asyncData: "asyncData", hideUnMatched: "hideUnMatched", noAnimation: "noAnimation", selectMode: "selectMode", showIcon: "showIcon", inlineEdit: "inlineEdit", radio: "radio", index: "index", treeTemplate: "treeTemplate", beforeDrop: "beforeDrop", draggable: "draggable", defaultExpandAll: "defaultExpandAll", expandAll: "expandAll", searchValue: "searchValue" }, outputs: { onaddchild: "onaddchild" }, exportAs: ["cmacsTreeNode"], features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 29, consts: [["role", "treeitem", 3, "ngClass"], ["dragElement", ""], [2, "box-shadow", "inset 2px 0px 0px 0px transparent", "position", "relative"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "group", "data-expanded", "true", 1, "ant-tree-child-tree"], [3, "treeNode", "showExpand", "noAnimation", "selectMode", "showLine", "expandedIcon", "draggable", "radio", "checkable", "asyncData", "expandAll", "defaultExpandAll", "showIcon", "searchValue", "hideUnMatched", "beforeDrop", "treeTemplate", "onaddchild", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "loading", "class", "ant-tree-switcher-loading-icon", 3, "spin", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down", 3, "ant-select-switcher-icon", "ant-tree-switcher-icon", 4, "ngIf"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "spin"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], [3, "title", "ngClass"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ngClass", 4, "ngIf"], [1, "ant-tree-title"], [3, "ngClass"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "font-highlight"], [1, "iconUILarge-New", "cmacs-tree-new-icon", 3, "click"], [3, "treeNode", "showExpand", "noAnimation", "selectMode", "showLine", "expandedIcon", "draggable", "radio", "checkable", "asyncData", "expandAll", "defaultExpandAll", "showIcon", "searchValue", "hideUnMatched", "beforeDrop", "treeTemplate", "onaddchild"]], template: function CmacsTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, CmacsTreeNodeComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
        i0.ɵɵtemplate(4, CmacsTreeNodeComponent_ng_container_4_Template, 3, 9, "ng-container", 3);
        i0.ɵɵtemplate(5, CmacsTreeNodeComponent_ng_container_5_Template, 7, 10, "ng-container", 3);
        i0.ɵɵtemplate(6, CmacsTreeNodeComponent_ng_template_6_Template, 0, 0, "ng-template", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "ul", 5);
        i0.ɵɵtemplate(8, CmacsTreeNodeComponent_cmacs_tree_node_8_Template, 1, 17, "cmacs-tree-node", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
    } }, directives: [i3.NgClass, i3.NgIf, i3.NgTemplateOutlet, i3.NgForOf, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, CmacsTreeNodeComponent], styles: [".cmacs-tree-new-icon[_ngcontent-%COMP%]{color:#acb3bf;font-size:16px;float:right;top:2px;position:relative;right:34px}.ant-tree-title[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-select-tree-checkbox-checked[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]:after{position:absolute;display:table;height:10px;border:none;border-radius:100px;top:2px;left:2px;width:10px;transform:none!important;background-color:#2a7cff;opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \"}.ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]{border-radius:100px}.ant-select-tree-checkbox-indeterminate[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]:after{background-color:#fff}.ant-select-tree-checkbox-checked[_ngcontent-%COMP%]   .ant-select-tree-radio-btn-inner.ant-select-tree-checkbox-inner[_ngcontent-%COMP%]{background-color:#fff;border-color:#dee0e5}.cmacs-tree-borderless[_ngcontent-%COMP%]{border-left:0 solid transparent!important;box-shadow:inset 2px 0 0 0 transparent}"], data: { animation: [collapseMotion] }, changeDetection: 0 });
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
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-tree-node',
                exportAs: 'cmacsTreeNode',
                templateUrl: './cmacs-tree-node.component.html',
                styleUrls: ['./cmacs-tree-node.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [collapseMotion]
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUtbm9kZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNHLFlBQVksRUFDeEIsSUFBSSxFQUNKLFlBQVksRUFDWixLQUFLLEVBS0wsUUFBUSxFQUFFLE1BQU0sRUFFaEIsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztJQ0p4RCxzSUFJYzs7O0lBRlosdURBQWlDLHlFQUFBOzs7SUFHbkMsd0JBTUk7OztJQUZGLDhEQUE2QywrQ0FBQTs7O0lBVmpELDZCQUEwQztJQUN4QyxvSEFJYztJQUNkLGdIQU1JO0lBQ04sMEJBQWU7OztJQVhWLGVBQWlDO0lBQWpDLGdFQUFpQztJQUtqQyxlQUFrQztJQUFsQyxpRUFBa0M7OztJQU92Qyx3QkFBZ0g7O0lBQXpELDJCQUFhOzs7SUFmdEUsNkJBQXVDO0lBQ3JDLHVIQWFlO0lBQ2Ys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QyxLQUFLO1lBQ21CLEtBQUs7a0JBQTdCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU07WUFHSCxTQUFTO2tCQURaLEtBQUs7WUFlRixnQkFBZ0I7a0JBRG5CLEtBQUs7WUFjRixTQUFTO2tCQURaLEtBQUs7WUFhRixXQUFXO2tCQURkLEtBQUs7WUFvSU4sV0FBVztrQkFEVixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVdyQyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBOEVqQyxVQUFVO2tCQURULFlBQVk7bUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBYXBDLGFBQWE7a0JBRFosWUFBWTttQkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY29sbGFwc2VNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEJlZm9yZURyb3BFdmVudCB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRyZWUtbm9kZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RyZWVOb2RlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10cmVlLW5vZGUuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdkcmFnRWxlbWVudCcpIGRyYWdFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSB0cmVlTm9kZTogTnpUcmVlTm9kZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZXhwYW5kZWRJY29uOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2hlY2thYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSB0cmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kcmFnZ2FibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBleHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMudHJlZU5vZGUgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9leHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHNldFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZSAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBleHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy50cmVlTm9kZS50aXRsZS50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50cmVlTm9kZS50aXRsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLnRpdGxlLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLnRpdGxlLnNsaWNlKGluZGV4LCBpbmRleCArIHZhbHVlLmxlbmd0aCksXHJcbiAgICAgICAgdGhpcy50cmVlTm9kZS50aXRsZS5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy50cmVlTm9kZS50aXRsZS5sZW5ndGgpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHZhclxyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgaGlnaGxpZ2h0S2V5czogc3RyaW5nW10gPSBbXTtcclxuICBuek5vZGVDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50Q2xhc3MgPSB7fTtcclxuICBuek5vZGVDaGVja2JveENsYXNzID0ge307XHJcbiAgbnpOb2RlQ29udGVudEljb25DbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyB2YXJcclxuICAgKi9cclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgZHJhZ1BvcyA9IDI7XHJcbiAgZHJhZ1Bvc0NsYXNzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gICAgJzAnOiAnZHJhZy1vdmVyJyxcclxuICAgICcxJzogJ2RyYWctb3Zlci1nYXAtYm90dG9tJyxcclxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBkZWZhdWx0IHNldFxyXG4gICAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfc2VhcmNoVmFsdWUgPSAnJztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX2RyYWdnYWJsZSA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfZXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIGdldCBuekljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVOb2RlLmljb247XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuRHJhZ2dhYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZSAmJiAhdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMudHJlZU5vZGUuaXNMZWFmICYmIHRoaXMuc2hvd0xpbmU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93U3dpdGNoSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMuc2hvd0xpbmUgJiYgIXRoaXMudHJlZU5vZGUuaXNFbXB0eUZvbGRlcjtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIHRvIGhpZGUgdW5tYXRjaGVkIG5vZGVzXHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hWYWx1ZSAmJiB0aGlzLmhpZGVVbk1hdGNoZWQgJiYgIXRoaXMudHJlZU5vZGUuaXNNYXRjaGVkICYmICF0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWRcclxuICAgICAgPyAnbm9uZSdcclxuICAgICAgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IG5vZGUgY2xhc3NcclxuICAgKi9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJlZml4Q2xzID0gdGhpcy5zZWxlY3RNb2RlID8gJ2FudC1zZWxlY3QtdHJlZScgOiAnYW50LXRyZWUnO1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1zd2l0Y2hlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkYF06IHRoaXMudHJlZU5vZGUuaXNDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWluZGV0ZXJtaW5hdGVgXTogdGhpcy50cmVlTm9kZS5pc0hhbGZDaGVja2VkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXNlbGVjdGVkYF06ICF0aGlzLmNoZWNrYWJsZSAmJiB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtbG9hZGluZ2BdOiB0aGlzLnRyZWVOb2RlLmlzTG9hZGluZ1xyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlU3dpdGNoZXJDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcmBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgXTogdGhpcy50cmVlTm9kZS5pc0xlYWYsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyX2Nsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubnpOb2RlQ2hlY2tib3hDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveGBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy5yYWRpbyA/dGhpcy5uelRyZWVTZXJ2aWNlLmNoZWNrZWROb2RlTGlzdC5sZW5ndGggPiAwICYmIHRoaXMubnpUcmVlU2VydmljZS5jaGVja2VkTm9kZUxpc3RbMF0ua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleTogdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLnRyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtZGlzYWJsZWRgXTogdGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkIHx8IHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5uek5vZGVDb250ZW50Q2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXItY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2UsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbm9kZS1zZWxlY3RlZGBdOiB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWRcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgXTogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY2RyWydkZXN0cm95ZWQnXSkge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0TW9kZSkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2xpY2sgbm9kZSB0byBzZWxlY3QsIDIwMG1zIHRvIGRibCBjbGlja1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBuekNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5uelRyZWVTZXJ2aWNlLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkgfHwgdG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KTtcclxuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZXMgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE5vZGVzQ291bnQgPSBzZWxlY3RlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5zaGlmdEtleSkgJiYgc2VsZWN0ZWROb2Rlc0NvdW50ID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VsZWN0ZWRNdWx0aXBsZScsICB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRvQm9vbGVhbihldmVudC5jdHJsS2V5KSkge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE5vZGVzQ291bnQpIHtcclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsdGVyZWQgPSBzZWxlY3RlZE5vZGVzLmZpbHRlcihuID0+ICgobi5wYXJlbnROb2RlID09PSB0aGlzLnRyZWVOb2RlLnBhcmVudE5vZGUpIHx8ICghbi5wYXJlbnROb2RlICYmICF0aGlzLnRyZWVOb2RlLnBhcmVudE5vZGUpKSk7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRGaWx0ZXJlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCA9ICF0aGlzLmNoZWNrU3ViVHJlZVNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc1NlbGVjdGFibGUgJiZcclxuICAgICAgISh0aGlzLm56VHJlZVNlcnZpY2UubnpNdWx0aXBsZSAmJiAodG9Cb29sZWFuKGV2ZW50LnNoaWZ0S2V5KSB8fCB0b0Jvb2xlYW4oZXZlbnQuY3RybEtleSkpKSlcclxuICAgIHtcclxuICAgICAgaWYgKCF0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzU2VsZWN0ZWQgPSAhdGhpcy50cmVlTm9kZS5pc1NlbGVjdGVkO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2xpY2snLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICB0aGlzLl9jbGlja0NoZWNrQm94KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrU3ViVHJlZVNlbGVjdGlvbigpIHtcclxuICAgIGxldCBzdGFjayA9IFtdLCBoYXNoTWFwID0ge307XHJcbiAgICBzdGFjay5wdXNoKHRoaXMudHJlZU5vZGUpO1xyXG5cclxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBsZXQgbm9kZTogTnpUcmVlTm9kZSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICBpZiAoIWhhc2hNYXBbbm9kZS5rZXldKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXApO1xyXG4gICAgICAgIGlmKG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5vZGUucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgc3RhY2sucHVzaChub2RlLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGUsIGhhc2hNYXApIHtcclxuICAgIGlmKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICBoYXNoTWFwW25vZGUua2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgbnpEYmxDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkYmxjbGljaycsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxyXG4gIG56Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY29udGV4dG1lbnUnLCB0aGlzLnRyZWVOb2RlLCBldmVudCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbGxhcHNlIG5vZGVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy50cmVlTm9kZS5pc0xvYWRpbmcgJiYgIXRoaXMudHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIC8vIHNldCBhc3luYyBzdGF0ZVxyXG4gICAgICBpZiAodGhpcy5hc3luY0RhdGEgJiYgdGhpcy50cmVlTm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgIHRoaXMudHJlZU5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSAhdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkO1xyXG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMudHJlZU5vZGUsIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RNb2RlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxyXG4gICAgICBpZiAodGhpcy50cmVlTm9kZS5pc0Rpc2FibGVkIHx8IHRoaXMudHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQgPSAhdGhpcy50cmVlTm9kZS5pc0NoZWNrZWQ7XHJcbiAgICAgIHRoaXMudHJlZU5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdCh0aGlzLnRyZWVOb2RlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgdGhpcy50cmVlTm9kZSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgZXZlbnRcclxuICAgKiBAcGFyYW0gZVxyXG4gICAqL1xyXG4gIGNsZWFyRHJhZ0NsYXNzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgZHJhZ0NsYXNzID0gWydkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInXTtcclxuICAgIGRyYWdDbGFzcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uYWRkY2hpbGRldnQoJGV2ZW50OiBFdmVudCkgIHtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5vbmFkZGNoaWxkLmVtaXQodGhpcy50cmVlTm9kZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcclxuICAgICAgLy8gZmlyZWZveC1uZWVkLWl0XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy50cmVlTm9kZS5rZXkhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVtcHR5XHJcbiAgICB9XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlKHRoaXMudHJlZU5vZGUpO1xyXG4gICAgdGhpcy50cmVlTm9kZS5pc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdzdGFydCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW50ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgIHRoaXMuZHJhZ1BvcyA9IDI7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSAhPT0gdGhpcy50cmVlTm9kZS5rZXkgJiYgIXRoaXMudHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy50cmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VudGVyJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcclxuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcclxuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xyXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy50cmVlTm9kZS5pc0xlYWYpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzW3RoaXMuZHJhZ1Bvc10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdvdmVyJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcclxuICAgICAgaWYgKCFub2RlIHx8IChub2RlICYmIG5vZGUua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLnRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xyXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLnRyZWVOb2RlLCBlKTtcclxuICAgICAgY29uc3QgZHJhZ0VuZEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy50cmVlTm9kZSwgZSk7XHJcbiAgICAgIGlmICh0aGlzLmJlZm9yZURyb3ApIHtcclxuICAgICAgICB0aGlzLmJlZm9yZURyb3Aoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgZHJhZ05vZGU6IHRoaXMubmV3TWV0aG9kKCksXHJcbiAgICAgICAgICBub2RlOiB0aGlzLnRyZWVOb2RlLFxyXG4gICAgICAgICAgcG9zOiB0aGlzLmRyYWdQb3NcclxuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy50cmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICAgIH1cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyYWdFbmRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50cmVlTm9kZSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy50cmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5ld01ldGhvZCgpOiBOelRyZWVOb2RlIHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCkhO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0VuZChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAvLyBpZiB1c2VyIGRvIG5vdCBjdXN0b20gYmVmb3JlRHJvcFxyXG4gICAgICBpZiAoIXRoaXMuYmVmb3JlRHJvcCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VuZCcsIHRoaXMudHJlZU5vZGUsIGUpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOebkeWQrOaLluaLveS6i+S7tlxyXG4gICAqL1xyXG4gIGhhbmREcmFnRXZlbnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdMZWF2ZShlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJvcCcpXHJcbiAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56VHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56Tm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXQgZXhwYW5kZWQgLyBzZWxlY3RlZCAvIGNoZWNrZWQgbGlzdFxyXG4gICAgaWYodGhpcy5zZWxlY3RNb2RlICYmIHRoaXMuY2hlY2thYmxlICYmICF0aGlzLnRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICB0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudHJlZU5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy50cmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50cmVlTm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzLnRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE9cclxuICAgIHRoaXMudHJlZU5vZGUuY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEubm9kZSEua2V5ID09PSB0aGlzLnRyZWVOb2RlLmtleSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgLy90aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxsaVxyXG4gICNkcmFnRWxlbWVudFxyXG4gIHJvbGU9XCJ0cmVlaXRlbVwiXHJcbiAgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cInRyZWVOb2RlLmlzTGVhZiA/ICgoc2VsZWN0TW9kZSA/IDIyIDogMTYpICogdHJlZU5vZGUubGV2ZWwpIDogMFwiXHJcbiAgW2NsYXNzLmNtYWNzLXRyZWUtY2hpbGQtaGVhZGVyXT1cInRyZWVOb2RlLmlzTGVhZlwiXHJcbiAgW2NsYXNzLmNtYWNzLXRyZWUtYm9yZGVybGVzc109XCJ0cmVlTm9kZS5pc0xlYWZcIlxyXG4gIFtzdHlsZS5kaXNwbGF5XT1cImRpc3BsYXlTdHlsZVwiXHJcbiAgW25nQ2xhc3NdPVwibnpOb2RlQ2xhc3NcIj5cclxuICA8ZGl2IFtjbGFzcy5jbWFjcy10cmVlLXBhcmVudC1oZWFkZXJdPVwiIXRyZWVOb2RlLmlzTGVhZlwiXHJcbiAgICAgICBbY2xhc3MuY21hY3MtdHJlZS1ub2RlLXNlbGVjdGVkXT1cIiF0cmVlTm9kZS5pc0xlYWYgJiYgdHJlZU5vZGUuaXNTZWxlY3RlZCAmJiAhY2hlY2thYmxlXCJcclxuICAgICAgIFtzdHlsZS5ib3JkZXItdG9wLWNvbG9yXT1cInNlbGVjdE1vZGUgJiYgaW5kZXggPyAnI2RlZTBlNScgOiAndHJhbnNwYXJlbnQnXCJcclxuICAgICAgIHN0eWxlPVwiYm94LXNoYWRvdzogaW5zZXQgMnB4IDBweCAwcHggMHB4IHRyYW5zcGFyZW50OyBwb3NpdGlvbjogcmVsYXRpdmVcIlxyXG4gICAgICAgW3N0eWxlLnBhZGRpbmdMZWZ0LnB4XT1cIiF0cmVlTm9kZS5pc0xlYWYgfHwgIXRyZWVOb2RlLnBhcmVudE5vZGUgPyAxNiAqIHRyZWVOb2RlLmxldmVsIDogMFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dFeHBhbmRcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZVN3aXRjaGVyQ2xhc3NcIlxyXG4gICAgICAoY2xpY2spPVwiX2NsaWNrRXhwYW5kKCRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzU2hvd1N3aXRjaEljb25cIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRyZWVOb2RlLmlzTG9hZGluZ1wiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICpuZ0lmPVwiaXNUZW1wbGF0ZVJlZihleHBhbmRlZEljb24pXCJcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cmVlTm9kZSB9XCI+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgKm5nSWY9XCIhaXNUZW1wbGF0ZVJlZihleHBhbmRlZEljb24pXCJcclxuICAgICAgICAgICAgbnotaWNvblxyXG4gICAgICAgICAgICBuelR5cGU9XCJjYXJldC1kb3duXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc3dpdGNoZXItaWNvbl09XCJzZWxlY3RNb2RlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC10cmVlLXN3aXRjaGVyLWljb25dPVwiIXNlbGVjdE1vZGVcIj5cclxuICAgICAgICAgIDwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8aSAqbmdJZj1cInRyZWVOb2RlLmlzTG9hZGluZ1wiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIFtzcGluXT1cInRydWVcIiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxvYWRpbmctaWNvblwiPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93TGluZVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgKm5nSWY9XCJpc1RlbXBsYXRlUmVmKGV4cGFuZGVkSWNvbilcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdHJlZU5vZGUgfVwiPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlUmVmKGV4cGFuZGVkSWNvbilcIj5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiaXNTaG93TGluZUljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXNTd2l0Y2hlck9wZW4gPyAnbWludXMtc3F1YXJlJyA6ICdwbHVzLXNxdWFyZSdcIiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxpbmUtaWNvblwiPjwvaT5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2thYmxlXCI+XHJcbiAgICA8c3BhblxyXG4gICAgW3N0eWxlLm1hcmdpbkxlZnQucHhdPVwiICFyYWRpbyAmJiBjaGVja2FibGUgJiYgaW5saW5lRWRpdCA/IDEwIDogMFwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZUNoZWNrYm94Q2xhc3NcIlxyXG4gICAgICAoY2xpY2spPVwiX2NsaWNrQ2hlY2tCb3goJGV2ZW50KVwiPlxyXG4gICAgICA8c3BhbiBbY2xhc3MuYW50LXRyZWUtY2hlY2tib3gtaW5uZXJdPVwiIXNlbGVjdE1vZGVcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC10cmVlLXJhZGlvLWJ0bi1pbm5lcl09XCJzZWxlY3RNb2RlICYmIHJhZGlvXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1pbm5lcl09XCJzZWxlY3RNb2RlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRyZWVUZW1wbGF0ZVwiPlxyXG4gICAgPHNwYW5cclxuICAgICAgdGl0bGU9XCJ7e3RyZWVOb2RlLnRpdGxlfX1cIlxyXG4gICAgICBbYXR0ci5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCJcclxuICAgICAgW2F0dHIuYXJpYS1ncmFiYmVkXT1cImNhbkRyYWdnYWJsZVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZUNvbnRlbnRDbGFzc1wiXHJcbiAgICAgIFtjbGFzcy5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKm5nSWY9XCJ0cmVlTm9kZS5pY29uICYmIHNob3dJY29uXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fb3Blbl09XCJpc1N3aXRjaGVyT3BlblwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX2Nsb3NlXT1cImlzU3dpdGNoZXJDbG9zZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fbG9hZGluZ109XCJ0cmVlTm9kZS5pc0xvYWRpbmdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3NcIj5cclxuICAgICAgICA8c3BhblxyXG4gICAgICAgICAgW25nQ2xhc3NdPVwibnpOb2RlQ29udGVudEljb25DbGFzc1wiPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiAqbmdJZj1cIm56SWNvblwiIFtuelR5cGVdPVwibnpJY29uXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC10cmVlLXRpdGxlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRyZWVOb2RlLmlzTWF0Y2hlZFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHt7aGlnaGxpZ2h0S2V5c1swXX19PHNwYW4gY2xhc3M9XCJmb250LWhpZ2hsaWdodFwiPnt7aGlnaGxpZ2h0S2V5c1sxXX19PC9zcGFuPnt7aGlnaGxpZ2h0S2V5c1syXX19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0cmVlTm9kZS5pc01hdGNoZWRcIj5cclxuICAgICAgICAgIHt7dHJlZU5vZGUudGl0bGV9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbmxpbmVFZGl0ICYmICF0cmVlTm9kZS5wYXJlbnROb2RlXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLU5ldyBjbWFjcy10cmVlLW5ldy1pY29uXCIgKGNsaWNrKT1cIm9uYWRkY2hpbGRldnQoJGV2ZW50KVwiPjwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cmVlTm9kZSB9XCI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8dWxcclxuICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICBjbGFzcz1cImFudC10cmVlLWNoaWxkLXRyZWVcIlxyXG4gICAgW2NsYXNzLmFudC10cmVlLWNoaWxkLXRyZWUtb3Blbl09XCIhc2VsZWN0TW9kZSB8fCB0cmVlTm9kZS5pc0V4cGFuZGVkXCJcclxuICAgIGRhdGEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uXCJcclxuICAgIFtAY29sbGFwc2VNb3Rpb25dPVwidHJlZU5vZGUuaXNFeHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ1wiPlxyXG4gICAgPGNtYWNzLXRyZWUtbm9kZVxyXG4gICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiB0cmVlTm9kZS5nZXRDaGlsZHJlbigpXCJcclxuICAgICAgW3RyZWVOb2RlXT1cIm5vZGVcIlxyXG4gICAgICBbc2hvd0V4cGFuZF09XCJzaG93RXhwYW5kXCJcclxuICAgICAgW25vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uXCJcclxuICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgIFtzaG93TGluZV09XCJzaG93TGluZVwiXHJcbiAgICAgIFtleHBhbmRlZEljb25dPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgW2RyYWdnYWJsZV09XCJkcmFnZ2FibGVcIlxyXG4gICAgICBbcmFkaW9dPVwicmFkaW9cIlxyXG4gICAgICBbY2hlY2thYmxlXT1cImNoZWNrYWJsZVwiXHJcbiAgICAgIFthc3luY0RhdGFdPVwiYXN5bmNEYXRhXCJcclxuICAgICAgW2V4cGFuZEFsbF09XCJleHBhbmRBbGxcIlxyXG4gICAgICBbZGVmYXVsdEV4cGFuZEFsbF09XCJkZWZhdWx0RXhwYW5kQWxsXCJcclxuICAgICAgW3Nob3dJY29uXT1cInNob3dJY29uXCJcclxuICAgICAgW3NlYXJjaFZhbHVlXT1cInNlYXJjaFZhbHVlXCJcclxuICAgICAgW2hpZGVVbk1hdGNoZWRdPVwiaGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFtiZWZvcmVEcm9wXT1cImJlZm9yZURyb3BcIlxyXG4gICAgICAob25hZGRjaGlsZCk9XCJvbmFkZGNoaWxkZXZ0KCRldmVudClcIlxyXG4gICAgICBbdHJlZVRlbXBsYXRlXT1cInRyZWVUZW1wbGF0ZVwiPlxyXG4gICAgPC9jbWFjcy10cmVlLW5vZGU+XHJcbiAgPC91bD5cclxuPC9saT5cclxuIl19