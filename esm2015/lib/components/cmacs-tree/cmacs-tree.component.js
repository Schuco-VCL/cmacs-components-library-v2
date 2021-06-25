import { __decorate } from "tslib";
import { forwardRef, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import cloneDeep from 'lodash/cloneDeep';
import { CmacsTreeService } from './cmacs-tree.service';
import { InputBoolean, toBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { NzTreeBaseService } from './tree/nz-tree-base.service';
import { NzTreeHigherOrderServiceToken } from './tree/nz-tree-service.resolver';
import { NzTreeBase } from './tree/nz-tree-base';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-tree.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "./cmacs-tree-node.component";
const _c0 = ["treeTemplate"];
function CmacsTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-tree-node", 2);
    i0.ɵɵlistener("onaddchild", function CmacsTreeComponent_ng_container_1_Template_cmacs_tree_node_onaddchild_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onaddchildevt($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("treeNode", node_r1)("index", i_r2)("selectMode", ctx_r0.selectMode)("showLine", ctx_r0.showLine)("expandedIcon", ctx_r0.expandedIcon)("inlineEdit", ctx_r0.inlineEdit)("draggable", ctx_r0.draggable)("checkable", ctx_r0.checkable)("showExpand", ctx_r0.showExpand)("asyncData", ctx_r0.asyncData)("searchValue", ctx_r0.searchValue)("hideUnMatched", ctx_r0.hideUnMatched)("beforeDrop", ctx_r0.beforeDrop)("expandAll", ctx_r0.expandAll)("defaultExpandAll", ctx_r0.defaultExpandAll)("showIcon", ctx_r0.showIcon)("radio", ctx_r0.radio)("treeTemplate", ctx_r0.treeTemplate)("noAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
export class CmacsTreeComponent extends NzTreeBase {
    constructor(nzTreeService, cdr, noAnimation) {
        super(nzTreeService);
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.displayDataAsyncLoading = [];
        this.treeDataAsyncLoading = [];
        this.showIcon = false;
        this.showExpand = true;
        this.showLine = false;
        this.checkable = false;
        this.asyncData = false;
        this.draggable = false;
        this.expandAll = false;
        this.hideUnMatched = false;
        this.selectMode = false;
        this.nzCheckStrictly = false;
        this.nzBlockNode = false;
        this.inlineEdit = false;
        this.radio = false;
        this.cmacsAsyncData = false;
        this.onaddchild = new EventEmitter();
        /**
         * @deprecated use
         * expandAll instead
         */
        this.defaultExpandAll = false;
        // model bind
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.searchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * searchValueChange instead
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        // tslint:disable-next-line: variable-name
        this._nzMultiple = false;
        this.nzDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    set nzMultiple(value) {
        this._nzMultiple = toBoolean(value);
        this.nzTreeService.nzMultiple = toBoolean(value);
    }
    get nzMultiple() {
        return this._nzMultiple;
    }
    set nzData(value) {
        if (this.cmacsAsyncData) {
            this.treeDataAsyncLoading = value;
            this.displayDataAsyncLoading = this.getFirstLevelNodes(this.treeDataAsyncLoading);
            this.initNzData(this.displayDataAsyncLoading);
        }
        else {
            this.initNzData(value);
        }
    }
    /**
     * @deprecated use
     * nzExpandedKeys instead
     */
    set nzDefaultExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzSelectedKeys instead
     */
    set nzDefaultSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzCheckedKeys instead
     */
    set nzDefaultCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set searchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (!value.length && this.selectMode && this.checkable) {
            this.nzNodes.forEach((node) => {
                node.isExpanded = true;
            });
            this.cdr.detectChanges();
        }
        if (isNotNil(value)) {
            this.searchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            // tslint:disable-next-line: deprecation
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    get searchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed
     */
    get nzNodes() {
        return this.nzTreeService.rootNodes;
    }
    onaddchildevt($event) {
        this.onaddchild.emit($event);
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.showLine,
            [`${this.prefixCls}-icon-hide`]: !this.showIcon,
            [`${this.prefixCls}-block-node`]: this.nzBlockNode,
            ['draggable-tree']: this.draggable,
            ['ant-select-tree']: this.selectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.radio ? true : this.nzCheckStrictly;
            this.nzTreeService.isMultiple = this.nzMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    onKeyupHandler(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.checkable) {
            const nodesSelected = this.nzTreeService.getSelectedNodeList();
            if (nodesSelected.length) {
                this.nzTreeService.calcSelectedKeys([], this.nzNodes, this.nzMultiple);
                const eventNext = this.nzTreeService.formatEvent('escape', nodesSelected.map(n => n.key), event);
                // tslint:disable-next-line: no-non-null-assertion
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    if (this.cmacsAsyncData) {
                        this.onClickAsyncNode(data);
                    }
                    this.nzExpandChange.emit(data);
                    break;
                case 'click':
                    if (this.nzMultiple && this.getSelectedNodeList().length === 1) {
                        this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    }
                    this.nzClick.emit(data);
                    break;
                case 'escape':
                    this.nzClick.emit(data);
                    break;
                case 'check':
                    this.nzCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.nzDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.nzContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.nzOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.nzOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.nzOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.nzOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.nzOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.nzOnDragEnd.emit(data);
                    break;
                case 'selectedMultiple':
                    this.onSelectionMultiple(data);
                    break;
            }
        });
    }
    onSelectionMultiple(selectedNode) {
        let nodesSelected = this.nzTreeService.getSelectedNodeList();
        const nodesSelectedCount = nodesSelected.length;
        let states = { startNodeFound: false, endNodeFound: false };
        for (let i = 0; i < this.nzNodes.length; i++) {
            if (states.startNodeFound && states.endNodeFound) {
                break;
            }
            states = this.convertTreeToList(this.nzNodes[i], selectedNode.node, nodesSelected[nodesSelectedCount - 1], states.startNodeFound, states.endNodeFound);
        }
        nodesSelected = this.nzTreeService.getSelectedNodeList();
        let emitStructure = {};
        emitStructure = {
            eventName: 'selectedMultiple',
            selectedKeys: nodesSelected,
            node: selectedNode.node,
            event: null
        };
        this.nzClick.emit(emitStructure);
    }
    ngOnChanges(changes) {
        if (changes.nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = toBoolean(changes.nzCheckStrictly.currentValue);
        }
        if (changes.nzMultiple) {
            this._nzMultiple = toBoolean(changes.nzMultiple.currentValue);
            this.nzTreeService.nzMultiple = toBoolean(changes.nzMultiple.currentValue);
        }
    }
    addParent(node, index = null) {
        let parent = this.coerceTreeNodes(node);
        if (index !== undefined && index !== null) {
            this.nzTreeService.rootNodes.splice(index, 0, ...parent);
        }
        else {
            this.nzTreeService.rootNodes.push(...parent);
        }
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    convertTreeToList(root, endNode, startNode, startNodeFound, endNodeFound) {
        let stack = [], hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            let node = stack.pop();
            this.visitNode(node, hashMap);
            if (endNode.key === node.key) {
                endNodeFound = true;
            }
            if (startNode.key === node.key) {
                startNodeFound = true;
            }
            if (!startNode.parentNode && !node.parentNode && (startNodeFound || endNodeFound)) {
                node.isSelected = true;
            }
            if ((startNode.parentNode === node.parentNode) && (startNodeFound || endNodeFound)) {
                node.isSelected = true;
            }
            if (startNodeFound && endNodeFound) {
                return {
                    startNodeFound,
                    endNodeFound
                };
            }
            if (node.children.length) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i]);
                }
            }
        }
        return {
            startNodeFound,
            endNodeFound
        };
    }
    visitNode(node, hashMap) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
        }
    }
    /* Cmacs Async Data Loading */
    getFirstLevelNodes(subTree) {
        let subTreeDeepCopy = [];
        if (subTree.length) {
            subTreeDeepCopy = cloneDeep(subTree);
        }
        else {
            subTreeDeepCopy = subTree.children ? cloneDeep(subTree.children) : [];
        }
        const firstLevelNodes = [];
        for (let i = 0; i < subTreeDeepCopy.length; i++) {
            let node = subTreeDeepCopy[i];
            node.children = [];
            firstLevelNodes.push(node);
        }
        return firstLevelNodes;
    }
    searchTree(treeData, key) {
        for (let n = 0; n < treeData.length; n++) {
            const root = this.treeDataAsyncLoading[n];
            const node = this.searchSubTree(root, key);
            if (node) {
                return node;
            }
        }
        return null;
    }
    searchSubTree(root, key) {
        let stack = [], hashMap = {};
        stack.push(root);
        while (stack.length !== 0) {
            let node = stack.pop();
            this.visitNode(node, hashMap);
            if (key === node.key) {
                return node;
            }
            if (node.children && node.children.length) {
                for (let i = 0; i < node.children.length; i++) {
                    stack.push(node.children[i]);
                }
            }
        }
        return null;
    }
    onClickAsyncNode(event) {
        console.log(event);
        // load child async
        if (event.eventName === 'expand') {
            const node = event.node;
            if (node && node.isExpanded) {
                this.loadNodeChildren(node.key).then(data => {
                    node.addChildren(data);
                });
            }
        }
    }
    loadNodeChildren(key) {
        return new Promise(resolve => {
            const subTree = this.searchTree(this.treeDataAsyncLoading, key);
            console.log('SubTree', subTree);
            const firstLevelChildren = this.getFirstLevelNodes(subTree);
            console.log('First Level Children', firstLevelChildren);
            setTimeout(() => {
                resolve(firstLevelChildren);
            }, 500);
        });
    }
}
CmacsTreeComponent.ɵfac = function CmacsTreeComponent_Factory(t) { return new (t || CmacsTreeComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); };
CmacsTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTreeComponent, selectors: [["cmacs-tree"]], contentQueries: function CmacsTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, _c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeTemplate = _t.first);
    } }, hostBindings: function CmacsTreeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup.escape", function CmacsTreeComponent_keyup_escape_HostBindingHandler($event) { return ctx.onKeyupHandler($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { showIcon: "showIcon", showExpand: "showExpand", showLine: "showLine", expandedIcon: "expandedIcon", checkable: "checkable", asyncData: "asyncData", draggable: "draggable", expandAll: "expandAll", hideUnMatched: "hideUnMatched", selectMode: "selectMode", nzCheckStrictly: "nzCheckStrictly", nzBlockNode: "nzBlockNode", inlineEdit: "inlineEdit", radio: "radio", cmacsAsyncData: "cmacsAsyncData", defaultExpandAll: "defaultExpandAll", beforeDrop: "beforeDrop", nzMultiple: "nzMultiple", nzData: "nzData", nzDefaultExpandedKeys: "nzDefaultExpandedKeys", nzDefaultSelectedKeys: "nzDefaultSelectedKeys", nzDefaultCheckedKeys: "nzDefaultCheckedKeys", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", searchValue: "searchValue" }, outputs: { onaddchild: "onaddchild", nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", searchValueChange: "searchValueChange", nzOnSearchNode: "nzOnSearchNode", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["cmacsTree"], features: [i0.ɵɵProvidersFeature([
            CmacsTreeService,
            {
                provide: NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], CmacsTreeService]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsTreeComponent),
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "treeNode", "index", "selectMode", "showLine", "expandedIcon", "inlineEdit", "draggable", "checkable", "showExpand", "asyncData", "searchValue", "hideUnMatched", "beforeDrop", "expandAll", "defaultExpandAll", "showIcon", "radio", "treeTemplate", "noAnimation", "onaddchild"]], template: function CmacsTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, CmacsTreeComponent_ng_container_1_Template, 2, 19, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.classMap);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.nzNodes);
    } }, directives: [i3.NgClass, i3.NgForOf, i4.CmacsTreeNodeComponent], styles: ["[_nghost-%COMP%]     .ant-select-tree li ul, [_nghost-%COMP%]     .ant-tree li ul{padding:0!important}[_nghost-%COMP%]     .ant-select-tree .cmacs-tree-child-header, [_nghost-%COMP%]     .ant-select-tree .cmacs-tree-parent-header{border-top:1px solid #dee0e5;padding-top:3px;padding-bottom:3px}[_nghost-%COMP%]     .ant-select-tree .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-select-tree .cmacs-tree-parent-header{padding-left:10px!important}[_nghost-%COMP%]     .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}  .font-highlight{color:#2a7cff!important}[_nghost-%COMP%]     .ant-select-tree-switcher_close{color:#dee0e5}[_nghost-%COMP%]     .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}.ant-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-flex;top:3px}.ant-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.3!important}.ant-tree[_ngcontent-%COMP%], .ant-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:100%}.custom-node[_ngcontent-%COMP%], .custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.ant-tree-treenode-switcher-close[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .ant-tree-treenode-switcher-open[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:100%}[_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon, [_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon{color:#bec4cd}[_nghost-%COMP%]     .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79}[_nghost-%COMP%]     .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected, [_nghost-%COMP%]     .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}[_nghost-%COMP%]     .ant-tree .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected{border-left:2px solid #2a7cff!important}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-checkbox-checked .ant-tree-child-tree, [_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree{background-color:#f6f7fb}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected:hover{border-bottom:1px solid #dee0e5;border-top:1px solid #dee0e5}[_nghost-%COMP%]     .ant-tree li{padding:0}[_nghost-%COMP%]     .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{border-top:1px solid transparent;border-bottom:1px solid transparent;padding-top:3px;padding-bottom:3px}[_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{border-top:1px solid #dee0e5!important;border-bottom:1px solid #dee0e5!important}[_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}[_nghost-%COMP%]     .ant-tree li.drag-over, [_nghost-%COMP%]     .ant-tree li.drag-over-gap-bottom, [_nghost-%COMP%]     .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header{border-bottom:1px solid #2a7cff}[_nghost-%COMP%]     .ant-tree li.drag-over-gap-top, [_nghost-%COMP%]     .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{border-top:1px solid #2a7cff}[_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher{position:relative;z-index:1}  .cmacs-context-menu-overlay{position:absolute;top:0;left:0;width:100%;height:100%}  .ant-tree-switcher{position:relative;width:24px;display:inline-block;margin:0;cursor:pointer;line-height:unset}"], changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "showIcon", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "showExpand", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "showLine", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "checkable", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "asyncData", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "draggable", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "expandAll", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "hideUnMatched", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "selectMode", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "radio", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "cmacsAsyncData", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "defaultExpandAll", void 0);
__decorate([
    InputBoolean()
], CmacsTreeComponent.prototype, "nzMultiple", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTreeComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-tree',
                exportAs: 'cmacsTree',
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-tree.component.html',
                styleUrls: ['./cmacs-tree.component.css'],
                providers: [
                    CmacsTreeService,
                    {
                        provide: NzTreeBaseService,
                        useFactory: NzTreeServiceFactory,
                        deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], CmacsTreeService]
                    },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsTreeComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i1.CmacsTreeService }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { showIcon: [{
            type: Input
        }], showExpand: [{
            type: Input
        }], showLine: [{
            type: Input
        }], expandedIcon: [{
            type: Input
        }], checkable: [{
            type: Input
        }], asyncData: [{
            type: Input
        }], draggable: [{
            type: Input
        }], expandAll: [{
            type: Input
        }], hideUnMatched: [{
            type: Input
        }], selectMode: [{
            type: Input
        }], nzCheckStrictly: [{
            type: Input
        }], nzBlockNode: [{
            type: Input
        }], inlineEdit: [{
            type: Input
        }], radio: [{
            type: Input
        }], cmacsAsyncData: [{
            type: Input
        }], onaddchild: [{
            type: Output
        }], defaultExpandAll: [{
            type: Input
        }], beforeDrop: [{
            type: Input
        }], nzMultiple: [{
            type: Input
        }], nzData: [{
            type: Input
        }], nzDefaultExpandedKeys: [{
            type: Input
        }], nzDefaultSelectedKeys: [{
            type: Input
        }], nzDefaultCheckedKeys: [{
            type: Input
        }], nzExpandedKeys: [{
            type: Input
        }], nzSelectedKeys: [{
            type: Input
        }], nzCheckedKeys: [{
            type: Input
        }], searchValue: [{
            type: Input
        }], nzExpandedKeysChange: [{
            type: Output
        }], nzSelectedKeysChange: [{
            type: Output
        }], nzCheckedKeysChange: [{
            type: Output
        }], searchValueChange: [{
            type: Output
        }], nzOnSearchNode: [{
            type: Output
        }], nzClick: [{
            type: Output
        }], nzDblClick: [{
            type: Output
        }], nzContextMenu: [{
            type: Output
        }], nzCheckBoxChange: [{
            type: Output
        }], nzExpandChange: [{
            type: Output
        }], nzOnDragStart: [{
            type: Output
        }], nzOnDragEnter: [{
            type: Output
        }], nzOnDragOver: [{
            type: Output
        }], nzOnDragLeave: [{
            type: Output
        }], nzOnDrop: [{
            type: Output
        }], nzOnDragEnd: [{
            type: Output
        }], treeTemplate: [{
            type: ContentChild,
            args: ['treeTemplate']
        }], onKeyupHandler: [{
            type: HostListener,
            args: ['document:keyup.escape', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ0ssWUFBWSxFQUMxQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lDeEIvQyw2QkFBdUQ7SUFDckQs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QUFZO21CQUFDLGNBQWM7WUFzRDVCLGNBQWM7a0JBRGIsWUFBWTttQkFBQyx1QkFBdUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcclxuaW1wb3J0IHsgQ21hY3NUcmVlU2VydmljZSB9IGZyb20gJy4vY21hY3MtdHJlZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tICcuL3RyZWUvbnotdHJlZS1zZXJ2aWNlLnJlc29sdmVyJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZSB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlLCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE56VHJlZVNlcnZpY2VGYWN0b3J5KFxyXG4gIGhpZ2hlck9yZGVyU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgdHJlZVNlcnZpY2U6IENtYWNzVHJlZVNlcnZpY2VcclxuKTogTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gIHJldHVybiBoaWdoZXJPcmRlclNlcnZpY2UgPyBoaWdoZXJPcmRlclNlcnZpY2UgOiB0cmVlU2VydmljZTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10cmVlJyxcclxuICBleHBvcnRBczogJ2NtYWNzVHJlZScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRyZWUuY29tcG9uZW50LmNzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBDbWFjc1RyZWVTZXJ2aWNlXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzVHJlZUNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUcmVlQ29tcG9uZW50IGV4dGVuZHMgTnpUcmVlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzIHtcclxuICBkaXNwbGF5RGF0YUFzeW5jTG9hZGluZyA9IFtdO1xyXG4gIHRyZWVEYXRhQXN5bmNMb2FkaW5nID0gW107XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SWNvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93RXhwYW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZWxlY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJsb2NrTm9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzQXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uYWRkY2hpbGQ6IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUcmVlTm9kZT4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogZXhwYW5kQWxsIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzZXQgbnpNdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpNdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICAodGhpcy5uelRyZWVTZXJ2aWNlIGFzIENtYWNzVHJlZVNlcnZpY2UpLm56TXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56TXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpNdWx0aXBsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBuekRhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc0FzeW5jRGF0YSkge1xyXG4gICAgICB0aGlzLnRyZWVEYXRhQXN5bmNMb2FkaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZGlzcGxheURhdGFBc3luY0xvYWRpbmcgPSB0aGlzLmdldEZpcnN0TGV2ZWxOb2Rlcyh0aGlzLnRyZWVEYXRhQXN5bmNMb2FkaW5nKTtcclxuICAgICAgdGhpcy5pbml0TnpEYXRhKHRoaXMuZGlzcGxheURhdGFBc3luY0xvYWRpbmcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56RXhwYW5kZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpTZWxlY3RlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuekNoZWNrZWRLZXlzIGluc3RlYWRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XHJcbiAgICBpZiAoIXZhbHVlLmxlbmd0aCAmJiB0aGlzLnNlbGVjdE1vZGUgJiYgdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgdGhpcy5uek5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICBub2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cclxuICAgICAgdGhpcy5uek9uU2VhcmNoTm9kZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyByZW5kZXIgbm9kZXMgaWYgcm9vdCBpcyBjaGFuZ2VkXHJcbiAgICovXHJcbiAgZ2V0IG56Tm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgb25hZGRjaGlsZGV2dCgkZXZlbnQ6IE56VHJlZU5vZGUpICB7XHJcbiAgICB0aGlzLm9uYWRkY2hpbGQuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgLy8gbW9kZWwgYmluZFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBzZWFyY2hWYWx1ZUNoYW5nZSBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25TZWFyY2hOb2RlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEYmxDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDb250ZXh0TWVudTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ecm9wOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ0VuZDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQENvbnRlbnRDaGlsZCgndHJlZVRlbXBsYXRlJykgdHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgX256TXVsdGlwbGUgPSBmYWxzZTtcclxuICBuekRlZmF1bHRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0+KDYpO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGNsYXNzTWFwID0ge307XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZSddOiB0aGlzLnNob3dMaW5lLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWBdOiAhdGhpcy5zaG93SWNvbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ibG9jay1ub2RlYF06IHRoaXMubnpCbG9ja05vZGUsXHJcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5kcmFnZ2FibGUsXHJcbiAgICAgIFsnYW50LXNlbGVjdC10cmVlJ106IHRoaXMuc2VsZWN0TW9kZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMucmFkaW8gPyB0cnVlIDogdGhpcy5uekNoZWNrU3RyaWN0bHk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc011bHRpcGxlID0gdGhpcy5uek11bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpUcmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIobnpUcmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5lc2NhcGUnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5dXBIYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5jaGVja2FibGUpIHtcclxuICAgICAgY29uc3Qgbm9kZXNTZWxlY3RlZCA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCkgYXMgYW55O1xyXG4gICAgICBpZiAobm9kZXNTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhbXSwgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXNjYXBlJywgbm9kZXNTZWxlY3RlZC5tYXAobiA9PiBuLmtleSksIGV2ZW50KTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0pID0+IHtcclxuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcclxuICAgICAgICBjYXNlICduekV4cGFuZGVkS2V5cyc6XHJcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2Rlcyk7XHJcbiAgICAgICAgICB0aGlzLm56RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpDaGVja1N0cmljdGx5KTtcclxuICAgICAgICAgIHRoaXMubnpDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudE5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNtYWNzQXN5bmNEYXRhKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkNsaWNrQXN5bmNOb2RlKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIGlmKHRoaXMubnpNdWx0aXBsZSAmJiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdlc2NhcGUnOlxyXG4gICAgICAgICAgICB0aGlzLm56Q2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDaGVja0JveENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekRibENsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY29udGV4dG1lbnUnOlxyXG4gICAgICAgICAgICB0aGlzLm56Q29udGV4dE1lbnUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcclxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdTdGFydC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbnRlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ092ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnTGVhdmUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcm9wJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJvcC5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnRW5kLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnc2VsZWN0ZWRNdWx0aXBsZSc6XHJcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3Rpb25NdWx0aXBsZShkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0aW9uTXVsdGlwbGUoc2VsZWN0ZWROb2RlOiBOekZvcm1hdEVtaXRFdmVudCkge1xyXG4gICAgbGV0IG5vZGVzU2VsZWN0ZWQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xyXG4gICAgY29uc3Qgbm9kZXNTZWxlY3RlZENvdW50ID0gbm9kZXNTZWxlY3RlZC5sZW5ndGg7XHJcbiAgICBsZXQgc3RhdGVzID0ge3N0YXJ0Tm9kZUZvdW5kOiBmYWxzZSwgZW5kTm9kZUZvdW5kOiBmYWxzZX07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnpOb2Rlcy5sZW5ndGg7IGkgKyspIHtcclxuICAgICAgaWYgKHN0YXRlcy5zdGFydE5vZGVGb3VuZCAmJiBzdGF0ZXMuZW5kTm9kZUZvdW5kKSB7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGVzID0gdGhpcy5jb252ZXJ0VHJlZVRvTGlzdChcclxuICAgICAgICB0aGlzLm56Tm9kZXNbaV0sXHJcbiAgICAgICAgc2VsZWN0ZWROb2RlLm5vZGUsXHJcbiAgICAgICAgbm9kZXNTZWxlY3RlZFtub2Rlc1NlbGVjdGVkQ291bnQgLSAxXSxcclxuICAgICAgICBzdGF0ZXMuc3RhcnROb2RlRm91bmQsXHJcbiAgICAgICAgc3RhdGVzLmVuZE5vZGVGb3VuZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgbm9kZXNTZWxlY3RlZCA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCkgYXMgYW55O1xyXG4gICAgbGV0IGVtaXRTdHJ1Y3R1cmU6IGFueSA9IHt9O1xyXG4gICAgZW1pdFN0cnVjdHVyZSA9IHtcclxuICAgICAgZXZlbnROYW1lOiAnc2VsZWN0ZWRNdWx0aXBsZScsXHJcbiAgICAgIHNlbGVjdGVkS2V5czogbm9kZXNTZWxlY3RlZCxcclxuICAgICAgbm9kZTogc2VsZWN0ZWROb2RlLm5vZGUsXHJcbiAgICAgIGV2ZW50OiBudWxsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uekNsaWNrLmVtaXQoZW1pdFN0cnVjdHVyZSBhcyBhbnkpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdG9Cb29sZWFuKGNoYW5nZXMubnpDaGVja1N0cmljdGx5LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uek11bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuX256TXVsdGlwbGUgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uek11bHRpcGxlLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICh0aGlzLm56VHJlZVNlcnZpY2UgYXMgQ21hY3NUcmVlU2VydmljZSkubnpNdWx0aXBsZSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56TXVsdGlwbGUuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFBhcmVudChub2RlOiBhbnksIGluZGV4ID0gbnVsbCkge1xyXG4gICAgbGV0IHBhcmVudCA9IHRoaXMuY29lcmNlVHJlZU5vZGVzKG5vZGUpO1xyXG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2Rlcy5zcGxpY2UoIGluZGV4LCAwLCAuLi5wYXJlbnQgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXMucHVzaCguLi5wYXJlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3QsIGVuZE5vZGUsIHN0YXJ0Tm9kZSwgc3RhcnROb2RlRm91bmQsIGVuZE5vZGVGb3VuZCkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXApO1xyXG4gICAgICBpZiAoZW5kTm9kZS5rZXkgPT09IG5vZGUua2V5KSB7XHJcbiAgICAgICAgZW5kTm9kZUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnROb2RlLmtleSA9PT0gbm9kZS5rZXkpIHtcclxuICAgICAgICBzdGFydE5vZGVGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGFydE5vZGUucGFyZW50Tm9kZSAmJiAhbm9kZS5wYXJlbnROb2RlICYmIChzdGFydE5vZGVGb3VuZCB8fCBlbmROb2RlRm91bmQpKSB7XHJcbiAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHN0YXJ0Tm9kZS5wYXJlbnROb2RlID09PSBub2RlLnBhcmVudE5vZGUpICYmIChzdGFydE5vZGVGb3VuZCB8fCBlbmROb2RlRm91bmQpKSB7XHJcbiAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnROb2RlRm91bmQgJiYgZW5kTm9kZUZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0YXJ0Tm9kZUZvdW5kLFxyXG4gICAgICAgICAgZW5kTm9kZUZvdW5kXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGFydE5vZGVGb3VuZCxcclxuICAgICAgZW5kTm9kZUZvdW5kXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGUsIGhhc2hNYXApIHtcclxuICAgIGlmKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICBoYXNoTWFwW25vZGUua2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLyogQ21hY3MgQXN5bmMgRGF0YSBMb2FkaW5nICovXHJcbiAgZ2V0Rmlyc3RMZXZlbE5vZGVzKHN1YlRyZWUpIHtcclxuICAgIGxldCBzdWJUcmVlRGVlcENvcHkgPSBbXTtcclxuICAgIGlmIChzdWJUcmVlLmxlbmd0aCkge1xyXG4gICAgICBzdWJUcmVlRGVlcENvcHkgPSBjbG9uZURlZXAoc3ViVHJlZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJUcmVlRGVlcENvcHkgPSBzdWJUcmVlLmNoaWxkcmVuID8gY2xvbmVEZWVwKHN1YlRyZWUuY2hpbGRyZW4pIDogW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaXJzdExldmVsTm9kZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVHJlZURlZXBDb3B5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBub2RlID0gc3ViVHJlZURlZXBDb3B5W2ldO1xyXG4gICAgICBub2RlLmNoaWxkcmVuID0gW107XHJcbiAgICAgIGZpcnN0TGV2ZWxOb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0TGV2ZWxOb2RlcztcclxuICB9XHJcblxyXG4gIHNlYXJjaFRyZWUodHJlZURhdGEsIGtleSkge1xyXG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCB0cmVlRGF0YS5sZW5ndGg7IG4rKykge1xyXG4gICAgICBjb25zdCByb290ID0gdGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZ1tuXTtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VhcmNoU3ViVHJlZShyb290LCBrZXkpO1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHNlYXJjaFN1YlRyZWUocm9vdCwga2V5KSB7XHJcbiAgICBsZXQgc3RhY2sgPSBbXSwgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaChyb290KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXApO1xyXG4gICAgICBpZiAoa2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQXN5bmNOb2RlKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgLy8gbG9hZCBjaGlsZCBhc3luY1xyXG4gICAgaWYgKGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2V4cGFuZCcpIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGU7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgIHRoaXMubG9hZE5vZGVDaGlsZHJlbihub2RlLmtleSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIG5vZGUuYWRkQ2hpbGRyZW4oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWROb2RlQ2hpbGRyZW4oa2V5KTogUHJvbWlzZTxOelRyZWVOb2RlT3B0aW9uc1tdPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN1YlRyZWUgPSB0aGlzLnNlYXJjaFRyZWUodGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZywga2V5KTtcclxuICAgICAgY29uc29sZS5sb2coJ1N1YlRyZWUnLCBzdWJUcmVlKVxyXG4gICAgICBjb25zdCBmaXJzdExldmVsQ2hpbGRyZW4gPSB0aGlzLmdldEZpcnN0TGV2ZWxOb2RlcyhzdWJUcmVlKTtcclxuICAgICAgY29uc29sZS5sb2coJ0ZpcnN0IExldmVsIENoaWxkcmVuJywgZmlyc3RMZXZlbENoaWxkcmVuKVxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmlyc3RMZXZlbENoaWxkcmVuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTAwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHVsXHJcbiAgcm9sZT1cInRyZWVcIlxyXG4gIHVuc2VsZWN0YWJsZT1cIm9uXCJcclxuICBbbmdDbGFzc109XCJjbGFzc01hcFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5vZGUgb2YgbnpOb2RlczsgaW5kZXggYXMgaVwiPlxyXG4gICAgPGNtYWNzLXRyZWUtbm9kZVxyXG4gICAgICBbdHJlZU5vZGVdPVwibm9kZVwiXHJcbiAgICAgIFtpbmRleF09XCJpXCJcclxuICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgIFtzaG93TGluZV09XCJzaG93TGluZVwiXHJcbiAgICAgIFtleHBhbmRlZEljb25dPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgW2lubGluZUVkaXRdPVwiaW5saW5lRWRpdFwiXHJcbiAgICAgIFtkcmFnZ2FibGVdPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgW2NoZWNrYWJsZV09XCJjaGVja2FibGVcIlxyXG4gICAgICBbc2hvd0V4cGFuZF09XCJzaG93RXhwYW5kXCJcclxuICAgICAgW2FzeW5jRGF0YV09XCJhc3luY0RhdGFcIlxyXG4gICAgICBbc2VhcmNoVmFsdWVdPVwic2VhcmNoVmFsdWVcIlxyXG4gICAgICBbaGlkZVVuTWF0Y2hlZF09XCJoaWRlVW5NYXRjaGVkXCJcclxuICAgICAgW2JlZm9yZURyb3BdPVwiYmVmb3JlRHJvcFwiXHJcbiAgICAgIFtleHBhbmRBbGxdPVwiZXhwYW5kQWxsXCJcclxuICAgICAgW2RlZmF1bHRFeHBhbmRBbGxdPVwiZGVmYXVsdEV4cGFuZEFsbFwiXHJcbiAgICAgIFtzaG93SWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgIFtyYWRpb109XCJyYWRpb1wiXHJcbiAgICAgIFt0cmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgKG9uYWRkY2hpbGQpPVwib25hZGRjaGlsZGV2dCgkZXZlbnQpXCJcclxuICAgICAgW25vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCI+XHJcbiAgICA8L2NtYWNzLXRyZWUtbm9kZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC91bD5cclxuIl19