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
    i0.ɵɵlistener("onaddchild", function CmacsTreeComponent_ng_container_1_Template_cmacs_tree_node_onaddchild_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onaddchildevt($event)); });
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
        this.destroy$.next(true);
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
    static { this.ɵfac = function CmacsTreeComponent_Factory(t) { return new (t || CmacsTreeComponent)(i0.ɵɵdirectiveInject(i1.CmacsTreeService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTreeComponent, selectors: [["cmacs-tree"]], contentQueries: function CmacsTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
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
        } }, dependencies: [i3.NgClass, i3.NgForOf, i4.CmacsTreeNodeComponent], styles: ["[_nghost-%COMP%]     .ant-select-tree li ul, [_nghost-%COMP%]     .ant-tree li ul{padding:0!important}[_nghost-%COMP%]     .ant-select-tree .cmacs-tree-child-header, [_nghost-%COMP%]     .ant-select-tree .cmacs-tree-parent-header{box-shadow:inset 0 1px #dee0e5;padding-top:3px;padding-bottom:3px}[_nghost-%COMP%]     .ant-select-tree .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}  .font-highlight{color:#2a7cff!important}[_nghost-%COMP%]     .ant-select-tree-switcher_close{color:#dee0e5}[_nghost-%COMP%]     .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}.ant-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-flex;top:3px}.ant-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{line-height:1.3!important;width:-moz-fit-content;width:fit-content;min-width:100%}.ant-tree[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;min-width:100%}.custom-node[_ngcontent-%COMP%]{display:inline-flex}.custom-node[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-flex}.ant-tree-treenode-switcher-close[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .ant-tree-treenode-switcher-open[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;min-width:100%}[_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon, [_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon{color:#bec4cd}[_nghost-%COMP%]     .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79}[_nghost-%COMP%]     .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}[_nghost-%COMP%]     .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}[_nghost-%COMP%]     .ant-tree .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header{webkit-box-shadow:inset 2px 0px 0px 0px #2a7cff,inset 0px 1px 0px transparent,inset 0px -1px 0px transparent!important;box-shadow:inset 2px 0 #2a7cff,inset 0 1px 0 transparent,inset 0 -1px 0 transparent!important}[_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover{background-color:#f2f7ff}[_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree, [_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-checkbox-checked .ant-tree-child-tree{background-color:#f6f7fb}[_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover{box-shadow:inset 2px 0 #2a7cff,inset 0 1px #dee0e5,inset 0 -1px #dee0e5!important}[_nghost-%COMP%]     .ant-tree li{padding:0}[_nghost-%COMP%]     .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{box-shadow:inset 0 1px 0 transparent,inset 0 -1px 0 transparent;padding-top:3px;padding-bottom:3px}[_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover, [_nghost-%COMP%]     .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{box-shadow:inset 0 1px #dee0e5,inset 0 -1px #dee0e5!important}[_nghost-%COMP%]     .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}[_nghost-%COMP%]     .ant-tree li.drag-over-gap-bottom, [_nghost-%COMP%]     .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header, [_nghost-%COMP%]     .ant-tree li.drag-over{box-shadow:inset 0 -1px #2a7cff}[_nghost-%COMP%]     .ant-tree li.drag-over-gap-top, [_nghost-%COMP%]     .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{box-shadow:inset 0 1px #2a7cff}[_nghost-%COMP%]     .ant-tree li span.ant-tree-switcher{position:relative;z-index:1}  .cmacs-context-menu-overlay{position:absolute;top:0;left:0;width:100%;height:100%}  .ant-tree-switcher{position:relative;width:24px;display:inline-block;margin:0;cursor:pointer;line-height:unset}"], changeDetection: 0 }); }
}
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
        args: [{ selector: 'cmacs-tree', exportAs: 'cmacsTree', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
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
                ], template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of nzNodes; index as i\">\r\n    <cmacs-tree-node\r\n      [treeNode]=\"node\"\r\n      [index]=\"i\"\r\n      [selectMode]=\"selectMode\"\r\n      [showLine]=\"showLine\"\r\n      [expandedIcon]=\"expandedIcon\"\r\n      [inlineEdit]=\"inlineEdit\"\r\n      [draggable]=\"draggable\"\r\n      [checkable]=\"checkable\"\r\n      [showExpand]=\"showExpand\"\r\n      [asyncData]=\"asyncData\"\r\n      [searchValue]=\"searchValue\"\r\n      [hideUnMatched]=\"hideUnMatched\"\r\n      [beforeDrop]=\"beforeDrop\"\r\n      [expandAll]=\"expandAll\"\r\n      [defaultExpandAll]=\"defaultExpandAll\"\r\n      [showIcon]=\"showIcon\"\r\n      [radio]=\"radio\"\r\n      [treeTemplate]=\"treeTemplate\"\r\n      (onaddchild)=\"onaddchildevt($event)\"\r\n      [noAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </cmacs-tree-node>\r\n  </ng-container>\r\n</ul>\r\n", styles: [":host ::ng-deep .ant-select-tree li ul,:host ::ng-deep .ant-tree li ul{padding:0!important}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header{box-shadow:inset 0 1px #dee0e5;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-select-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-select-tree .cmacs-tree-parent-header:hover{background-color:#f2f7ff}:host ::ng-deep .ant-select-tree li{margin:0;font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.33;letter-spacing:normal;color:#656c79}::ng-deep .font-highlight{color:#2a7cff!important}:host ::ng-deep .ant-select-tree-switcher_close{color:#dee0e5}:host ::ng-deep .ant-select-tree li .ant-select-tree-node-content-wrapper:hover{background-color:transparent}.ant-tree li>div{display:inline-flex;top:3px}.ant-tree li{line-height:1.3!important;width:-moz-fit-content;width:fit-content;min-width:100%}.ant-tree{width:-moz-fit-content;width:fit-content;min-width:100%}.custom-node{display:inline-flex}.custom-node>span{display:inline-flex}.ant-tree-treenode-switcher-close>div,.ant-tree-treenode-switcher-open>div{width:-moz-fit-content;width:fit-content;min-width:100%}:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,:host ::ng-deep .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon{color:#bec4cd}:host ::ng-deep .ant-tree li{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.67;letter-spacing:normal;color:#656c79}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper:hover{background-color:transparent}:host ::ng-deep .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected{background-color:transparent}:host ::ng-deep .ant-tree .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-parent-header:hover{background-color:#f6f7fb}:host ::ng-deep .ant-tree .ant-tree-treenode-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked,:host ::ng-deep .ant-tree .ant-tree-treenode-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header{webkit-box-shadow:inset 2px 0px 0px 0px #2a7cff,inset 0px 1px 0px transparent,inset 0px -1px 0px transparent!important;box-shadow:inset 2px 0 #2a7cff,inset 0 1px 0 transparent,inset 0 -1px 0 transparent!important}:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked .cmacs-tree-parent-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected .cmacs-tree-node-selected:hover{background-color:#f2f7ff}:host ::ng-deep .ant-tree li.ant-tree-treenode-selected .ant-tree-child-tree,:host ::ng-deep .ant-tree li.ant-tree-treenode-checkbox-checked .ant-tree-child-tree{background-color:#f6f7fb}:host ::ng-deep .ant-tree .cmacs-tree-node-selected:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-selected.cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .ant-tree-treenode-checkbox-checked.cmacs-tree-child-header:hover{box-shadow:inset 2px 0 #2a7cff,inset 0 1px #dee0e5,inset 0 -1px #dee0e5!important}:host ::ng-deep .ant-tree li{padding:0}:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-child-header,:host ::ng-deep .ant-tree:not(.ant-select-tree) .cmacs-tree-parent-header{box-shadow:inset 0 1px 0 transparent,inset 0 -1px 0 transparent;padding-top:3px;padding-bottom:3px}:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-child-header:hover,:host ::ng-deep .ant-tree .cmacs-tree-node-selected~ul cmacs-tree-node .cmacs-tree-parent-header:hover{box-shadow:inset 0 1px #dee0e5,inset 0 -1px #dee0e5!important}:host ::ng-deep .ant-tree li.ant-tree-treenode-disabled>div>span:last-child{color:#acb3bf}:host ::ng-deep .ant-tree li.drag-over-gap-bottom,:host ::ng-deep .ant-tree li.drag-over-gap-bottom.cmacs-tree-child-header,:host ::ng-deep .ant-tree li.drag-over{box-shadow:inset 0 -1px #2a7cff}:host ::ng-deep .ant-tree li.drag-over-gap-top,:host ::ng-deep .ant-tree li.drag-over-gap-top.cmacs-tree-child-header{box-shadow:inset 0 1px #2a7cff}:host ::ng-deep .ant-tree li span.ant-tree-switcher{position:relative;z-index:1}::ng-deep .cmacs-context-menu-overlay{position:absolute;top:0;left:0;width:100%;height:100%}::ng-deep .ant-tree-switcher{position:relative;width:24px;display:inline-block;margin:0;cursor:pointer;line-height:unset}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS9jbWFjcy10cmVlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10cmVlL2NtYWNzLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixRQUFRLEVBQ0ssWUFBWSxFQUMxQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFjLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lDeEIvQyw2QkFBdUQ7SUFDckQs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XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVGVtcGxhdGVSZWYsIEhvc3RMaXN0ZW5lclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC9jbG9uZURlZXAnO1xyXG5pbXBvcnQgeyBDbWFjc1RyZWVTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy10cmVlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbiB9IGZyb20gJy4vdHJlZS9uei10cmVlLXNlcnZpY2UucmVzb2x2ZXInO1xyXG5pbXBvcnQgeyBOelRyZWVCYXNlIH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZSc7XHJcbmltcG9ydCB7IE56VHJlZU5vZGUsIE56VHJlZU5vZGVPcHRpb25zIH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS1ub2RlJztcclxuaW1wb3J0IHsgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTnpUcmVlU2VydmljZUZhY3RvcnkoXHJcbiAgaGlnaGVyT3JkZXJTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICB0cmVlU2VydmljZTogQ21hY3NUcmVlU2VydmljZVxyXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRyZWUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUcmVlJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdHJlZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc1RyZWVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgICAgdXNlRmFjdG9yeTogTnpUcmVlU2VydmljZUZhY3RvcnksXHJcbiAgICAgIGRlcHM6IFtbbmV3IFNraXBTZWxmKCksIG5ldyBPcHRpb25hbCgpLCBOelRyZWVIaWdoZXJPcmRlclNlcnZpY2VUb2tlbl0sIENtYWNzVHJlZVNlcnZpY2VdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NUcmVlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBOelRyZWVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIGRpc3BsYXlEYXRhQXN5bmNMb2FkaW5nID0gW107XHJcbiAgdHJlZURhdGFBc3luY0xvYWRpbmcgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dFeHBhbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93TGluZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGVkSWNvbjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhc3luY0RhdGEgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHJhZ2dhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmxvY2tOb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlubGluZUVkaXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NBc3luY0RhdGEgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25hZGRjaGlsZDogRXZlbnRFbWl0dGVyPE56VHJlZU5vZGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBleHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkZWZhdWx0RXhwYW5kQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBuek11bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9uek11bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgICh0aGlzLm56VHJlZVNlcnZpY2UgYXMgQ21hY3NUcmVlU2VydmljZSkubnpNdWx0aXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbnpNdWx0aXBsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9uek11bHRpcGxlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56RGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIGlmICh0aGlzLmNtYWNzQXN5bmNEYXRhKSB7XHJcbiAgICAgIHRoaXMudHJlZURhdGFBc3luY0xvYWRpbmcgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5kaXNwbGF5RGF0YUFzeW5jTG9hZGluZyA9IHRoaXMuZ2V0Rmlyc3RMZXZlbE5vZGVzKHRoaXMudHJlZURhdGFBc3luY0xvYWRpbmcpO1xyXG4gICAgICB0aGlzLmluaXROekRhdGEodGhpcy5kaXNwbGF5RGF0YUFzeW5jTG9hZGluZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpFeHBhbmRlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2VcclxuICAgKiBuelNlbGVjdGVkS2V5cyBpbnN0ZWFkXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIG56Q2hlY2tlZEtleXMgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcclxuICAgIGlmICghdmFsdWUubGVuZ3RoICYmIHRoaXMuc2VsZWN0TW9kZSAmJiB0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICB0aGlzLm56Tm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgIG5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxyXG4gICAgICB0aGlzLm56T25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHJlbmRlciBub2RlcyBpZiByb290IGlzIGNoYW5nZWRcclxuICAgKi9cclxuICBnZXQgbnpOb2RlcygpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5yb290Tm9kZXM7XHJcbiAgfVxyXG5cclxuICBvbmFkZGNoaWxkZXZ0KCRldmVudDogTnpUcmVlTm9kZSkgIHtcclxuICAgIHRoaXMub25hZGRjaGlsZC5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICAvLyBtb2RlbCBiaW5kXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3RlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlYXJjaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZVxyXG4gICAqIHNlYXJjaFZhbHVlQ2hhbmdlIGluc3RlYWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaE5vZGU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRibENsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrQm94Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW50ZXI6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyb3A6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBAQ29udGVudENoaWxkKCd0cmVlVGVtcGxhdGUnKSB0cmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuICBfbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDx7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfT4oNik7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgY2xhc3NNYXAgPSB7fTtcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMuc2hvd0xpbmUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYF06ICF0aGlzLnNob3dJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5uekJsb2NrTm9kZSxcclxuICAgICAgWydkcmFnZ2FibGUtdHJlZSddOiB0aGlzLmRyYWdnYWJsZSxcclxuICAgICAgWydhbnQtc2VsZWN0LXRyZWUnXTogdGhpcy5zZWxlY3RNb2RlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXROekRhdGEodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaW5pdE56RGF0YSh2YWx1ZTogYW55W10pOiB2b2lkIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNDaGVja1N0cmljdGx5ID0gdGhpcy5yYWRpbyA/IHRydWUgOiB0aGlzLm56Q2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLm56TXVsdGlwbGU7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmNvZXJjZVRyZWVOb2Rlcyh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelRyZWVTZXJ2aWNlOiBDbWFjc1RyZWVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelRyZWVTZXJ2aWNlKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLmVzY2FwZScsIFsnJGV2ZW50J10pXHJcbiAgb25LZXl1cEhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrYWJsZSkge1xyXG4gICAgICBjb25zdCBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKSBhcyBhbnk7XHJcbiAgICAgIGlmIChub2Rlc1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKFtdLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdlc2NhcGUnLCBub2Rlc1NlbGVjdGVkLm1hcChuID0+IG4ua2V5KSwgZXZlbnQpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZzsga2V5czogc3RyaW5nW10gfSkgPT4ge1xyXG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEua2V5cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGRhdGEudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcclxuICAgICAgICAgIHRoaXMubnpFeHBhbmRlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNTZWxlY3RlZEtleXMoZGF0YS5rZXlzLCB0aGlzLm56Tm9kZXMsIHRoaXMubnpNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256Q2hlY2tlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2VcclxuICAgICAgLmV2ZW50VHJpZ2dlckNoYW5nZWQoKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmV2ZW50TmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICAgICAgaWYgKHRoaXMuY21hY3NBc3luY0RhdGEpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tBc3luY05vZGUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcclxuICAgICAgICAgICAgaWYodGhpcy5uek11bHRpcGxlICYmIHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2VzY2FwZSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICAgICAgdGhpcy5uekNoZWNrQm94Q2hhbmdlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGJsY2xpY2snOlxyXG4gICAgICAgICAgICB0aGlzLm56RGJsQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpDb250ZXh0TWVudS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIC8vIGRyYWcgZHJvcFxyXG4gICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ1N0YXJ0LmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcclxuICAgICAgICAgICAgdGhpcy5uek9uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICAgICAgICB0aGlzLm56T25EcmFnT3Zlci5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdMZWF2ZS5lbWl0KGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICAgICAgICB0aGlzLm56T25Ecm9wLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgIHRoaXMubnpPbkRyYWdFbmQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdzZWxlY3RlZE11bHRpcGxlJzpcclxuICAgICAgICAgICAgdGhpcy5vblNlbGVjdGlvbk11bHRpcGxlKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25NdWx0aXBsZShzZWxlY3RlZE5vZGU6IE56Rm9ybWF0RW1pdEV2ZW50KSB7XHJcbiAgICBsZXQgbm9kZXNTZWxlY3RlZCA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XHJcbiAgICBjb25zdCBub2Rlc1NlbGVjdGVkQ291bnQgPSBub2Rlc1NlbGVjdGVkLmxlbmd0aDtcclxuICAgIGxldCBzdGF0ZXMgPSB7c3RhcnROb2RlRm91bmQ6IGZhbHNlLCBlbmROb2RlRm91bmQ6IGZhbHNlfTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uek5vZGVzLmxlbmd0aDsgaSArKykge1xyXG4gICAgICBpZiAoc3RhdGVzLnN0YXJ0Tm9kZUZvdW5kICYmIHN0YXRlcy5lbmROb2RlRm91bmQpIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZXMgPSB0aGlzLmNvbnZlcnRUcmVlVG9MaXN0KFxyXG4gICAgICAgIHRoaXMubnpOb2Rlc1tpXSxcclxuICAgICAgICBzZWxlY3RlZE5vZGUubm9kZSxcclxuICAgICAgICBub2Rlc1NlbGVjdGVkW25vZGVzU2VsZWN0ZWRDb3VudCAtIDFdLFxyXG4gICAgICAgIHN0YXRlcy5zdGFydE5vZGVGb3VuZCxcclxuICAgICAgICBzdGF0ZXMuZW5kTm9kZUZvdW5kXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBub2Rlc1NlbGVjdGVkID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKSBhcyBhbnk7XHJcbiAgICBsZXQgZW1pdFN0cnVjdHVyZTogYW55ID0ge307XHJcbiAgICBlbWl0U3RydWN0dXJlID0ge1xyXG4gICAgICBldmVudE5hbWU6ICdzZWxlY3RlZE11bHRpcGxlJyxcclxuICAgICAgc2VsZWN0ZWRLZXlzOiBub2Rlc1NlbGVjdGVkLFxyXG4gICAgICBub2RlOiBzZWxlY3RlZE5vZGUubm9kZSxcclxuICAgICAgZXZlbnQ6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLm56Q2xpY2suZW1pdChlbWl0U3RydWN0dXJlIGFzIGFueSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0b0Jvb2xlYW4oY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm56TXVsdGlwbGUpIHtcclxuICAgICAgdGhpcy5fbnpNdWx0aXBsZSA9IHRvQm9vbGVhbihjaGFuZ2VzLm56TXVsdGlwbGUuY3VycmVudFZhbHVlKTtcclxuICAgICAgKHRoaXMubnpUcmVlU2VydmljZSBhcyBDbWFjc1RyZWVTZXJ2aWNlKS5uek11bHRpcGxlID0gdG9Cb29sZWFuKGNoYW5nZXMubnpNdWx0aXBsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUGFyZW50KG5vZGU6IGFueSwgaW5kZXggPSBudWxsKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5jb2VyY2VUcmVlTm9kZXMobm9kZSk7XHJcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzLnNwbGljZSggaW5kZXgsIDAsIC4uLnBhcmVudCApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnJvb3ROb2Rlcy5wdXNoKC4uLnBhcmVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUcmVlVG9MaXN0KHJvb3QsIGVuZE5vZGUsIHN0YXJ0Tm9kZSwgc3RhcnROb2RlRm91bmQsIGVuZE5vZGVGb3VuZCkge1xyXG4gICAgbGV0IHN0YWNrID0gW10sIGhhc2hNYXAgPSB7fTtcclxuICAgIHN0YWNrLnB1c2gocm9vdCk7XHJcblxyXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlOiBOelRyZWVOb2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXApO1xyXG4gICAgICBpZiAoZW5kTm9kZS5rZXkgPT09IG5vZGUua2V5KSB7XHJcbiAgICAgICAgZW5kTm9kZUZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnROb2RlLmtleSA9PT0gbm9kZS5rZXkpIHtcclxuICAgICAgICBzdGFydE5vZGVGb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdGFydE5vZGUucGFyZW50Tm9kZSAmJiAhbm9kZS5wYXJlbnROb2RlICYmIChzdGFydE5vZGVGb3VuZCB8fCBlbmROb2RlRm91bmQpKSB7XHJcbiAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHN0YXJ0Tm9kZS5wYXJlbnROb2RlID09PSBub2RlLnBhcmVudE5vZGUpICYmIChzdGFydE5vZGVGb3VuZCB8fCBlbmROb2RlRm91bmQpKSB7XHJcbiAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhcnROb2RlRm91bmQgJiYgZW5kTm9kZUZvdW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHN0YXJ0Tm9kZUZvdW5kLFxyXG4gICAgICAgICAgZW5kTm9kZUZvdW5kXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBpZihub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgIHN0YWNrLnB1c2gobm9kZS5jaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGFydE5vZGVGb3VuZCxcclxuICAgICAgZW5kTm9kZUZvdW5kXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdmlzaXROb2RlKG5vZGUsIGhhc2hNYXApIHtcclxuICAgIGlmKCFoYXNoTWFwW25vZGUua2V5XSkge1xyXG4gICAgICBoYXNoTWFwW25vZGUua2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLyogQ21hY3MgQXN5bmMgRGF0YSBMb2FkaW5nICovXHJcbiAgZ2V0Rmlyc3RMZXZlbE5vZGVzKHN1YlRyZWUpIHtcclxuICAgIGxldCBzdWJUcmVlRGVlcENvcHkgPSBbXTtcclxuICAgIGlmIChzdWJUcmVlLmxlbmd0aCkge1xyXG4gICAgICBzdWJUcmVlRGVlcENvcHkgPSBjbG9uZURlZXAoc3ViVHJlZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdWJUcmVlRGVlcENvcHkgPSBzdWJUcmVlLmNoaWxkcmVuID8gY2xvbmVEZWVwKHN1YlRyZWUuY2hpbGRyZW4pIDogW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaXJzdExldmVsTm9kZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViVHJlZURlZXBDb3B5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBub2RlID0gc3ViVHJlZURlZXBDb3B5W2ldO1xyXG4gICAgICBub2RlLmNoaWxkcmVuID0gW107XHJcbiAgICAgIGZpcnN0TGV2ZWxOb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpcnN0TGV2ZWxOb2RlcztcclxuICB9XHJcblxyXG4gIHNlYXJjaFRyZWUodHJlZURhdGEsIGtleSkge1xyXG4gICAgZm9yIChsZXQgbiA9IDA7IG4gPCB0cmVlRGF0YS5sZW5ndGg7IG4rKykge1xyXG4gICAgICBjb25zdCByb290ID0gdGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZ1tuXTtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuc2VhcmNoU3ViVHJlZShyb290LCBrZXkpO1xyXG4gICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHNlYXJjaFN1YlRyZWUocm9vdCwga2V5KSB7XHJcbiAgICBsZXQgc3RhY2sgPSBbXSwgaGFzaE1hcCA9IHt9O1xyXG4gICAgc3RhY2sucHVzaChyb290KTtcclxuXHJcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBub2RlID0gc3RhY2sucG9wKCk7XHJcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUsIGhhc2hNYXApO1xyXG4gICAgICBpZiAoa2V5ID09PSBub2RlLmtleSkge1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBzdGFjay5wdXNoKG5vZGUuY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrQXN5bmNOb2RlKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgLy8gbG9hZCBjaGlsZCBhc3luY1xyXG4gICAgaWYgKGV2ZW50LmV2ZW50TmFtZSA9PT0gJ2V4cGFuZCcpIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGU7XHJcbiAgICAgIGlmIChub2RlICYmIG5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgIHRoaXMubG9hZE5vZGVDaGlsZHJlbihub2RlLmtleSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgIG5vZGUuYWRkQ2hpbGRyZW4oZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWROb2RlQ2hpbGRyZW4oa2V5KTogUHJvbWlzZTxOelRyZWVOb2RlT3B0aW9uc1tdPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IHN1YlRyZWUgPSB0aGlzLnNlYXJjaFRyZWUodGhpcy50cmVlRGF0YUFzeW5jTG9hZGluZywga2V5KTtcclxuICAgICAgY29uc29sZS5sb2coJ1N1YlRyZWUnLCBzdWJUcmVlKVxyXG4gICAgICBjb25zdCBmaXJzdExldmVsQ2hpbGRyZW4gPSB0aGlzLmdldEZpcnN0TGV2ZWxOb2RlcyhzdWJUcmVlKTtcclxuICAgICAgY29uc29sZS5sb2coJ0ZpcnN0IExldmVsIENoaWxkcmVuJywgZmlyc3RMZXZlbENoaWxkcmVuKVxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZmlyc3RMZXZlbENoaWxkcmVuKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTAwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHVsXHJcbiAgcm9sZT1cInRyZWVcIlxyXG4gIHVuc2VsZWN0YWJsZT1cIm9uXCJcclxuICBbbmdDbGFzc109XCJjbGFzc01hcFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5vZGUgb2YgbnpOb2RlczsgaW5kZXggYXMgaVwiPlxyXG4gICAgPGNtYWNzLXRyZWUtbm9kZVxyXG4gICAgICBbdHJlZU5vZGVdPVwibm9kZVwiXHJcbiAgICAgIFtpbmRleF09XCJpXCJcclxuICAgICAgW3NlbGVjdE1vZGVdPVwic2VsZWN0TW9kZVwiXHJcbiAgICAgIFtzaG93TGluZV09XCJzaG93TGluZVwiXHJcbiAgICAgIFtleHBhbmRlZEljb25dPVwiZXhwYW5kZWRJY29uXCJcclxuICAgICAgW2lubGluZUVkaXRdPVwiaW5saW5lRWRpdFwiXHJcbiAgICAgIFtkcmFnZ2FibGVdPVwiZHJhZ2dhYmxlXCJcclxuICAgICAgW2NoZWNrYWJsZV09XCJjaGVja2FibGVcIlxyXG4gICAgICBbc2hvd0V4cGFuZF09XCJzaG93RXhwYW5kXCJcclxuICAgICAgW2FzeW5jRGF0YV09XCJhc3luY0RhdGFcIlxyXG4gICAgICBbc2VhcmNoVmFsdWVdPVwic2VhcmNoVmFsdWVcIlxyXG4gICAgICBbaGlkZVVuTWF0Y2hlZF09XCJoaWRlVW5NYXRjaGVkXCJcclxuICAgICAgW2JlZm9yZURyb3BdPVwiYmVmb3JlRHJvcFwiXHJcbiAgICAgIFtleHBhbmRBbGxdPVwiZXhwYW5kQWxsXCJcclxuICAgICAgW2RlZmF1bHRFeHBhbmRBbGxdPVwiZGVmYXVsdEV4cGFuZEFsbFwiXHJcbiAgICAgIFtzaG93SWNvbl09XCJzaG93SWNvblwiXHJcbiAgICAgIFtyYWRpb109XCJyYWRpb1wiXHJcbiAgICAgIFt0cmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgKG9uYWRkY2hpbGQpPVwib25hZGRjaGlsZGV2dCgkZXZlbnQpXCJcclxuICAgICAgW25vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCI+XHJcbiAgICA8L2NtYWNzLXRyZWUtbm9kZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC91bD5cclxuIl19