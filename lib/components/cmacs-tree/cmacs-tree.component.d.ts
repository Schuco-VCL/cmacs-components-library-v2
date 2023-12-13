import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { CmacsTreeService } from './cmacs-tree.service';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzTreeBaseService } from './tree/nz-tree-base.service';
import { NzTreeBase } from './tree/nz-tree-base';
import { NzTreeNode, NzTreeNodeOptions } from './tree/nz-tree-base-node';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from './tree/nz-tree-base.definitions';
import * as i0 from "@angular/core";
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: CmacsTreeService): NzTreeBaseService;
export declare class CmacsTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    displayDataAsyncLoading: any[];
    treeDataAsyncLoading: any[];
    showIcon: boolean;
    showExpand: boolean;
    showLine: boolean;
    expandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    checkable: boolean;
    asyncData: boolean;
    draggable: boolean;
    expandAll: boolean;
    hideUnMatched: boolean;
    selectMode: boolean;
    nzCheckStrictly: boolean;
    nzBlockNode: boolean;
    inlineEdit: boolean;
    radio: boolean;
    cmacsAsyncData: boolean;
    onaddchild: EventEmitter<NzTreeNode>;
    /**
     * @deprecated use
     * expandAll instead
     */
    defaultExpandAll: boolean;
    beforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    set nzMultiple(value: boolean);
    get nzMultiple(): boolean;
    set nzData(value: any[]);
    /**
     * @deprecated use
     * nzExpandedKeys instead
     */
    set nzDefaultExpandedKeys(value: string[]);
    /**
     * @deprecated use
     * nzSelectedKeys instead
     */
    set nzDefaultSelectedKeys(value: string[]);
    /**
     * @deprecated use
     * nzCheckedKeys instead
     */
    set nzDefaultCheckedKeys(value: string[]);
    set nzExpandedKeys(value: string[]);
    set nzSelectedKeys(value: string[]);
    set nzCheckedKeys(value: string[]);
    set searchValue(value: string);
    get searchValue(): string;
    /**
     * To render nodes if root is changed
     */
    get nzNodes(): NzTreeNode[];
    onaddchildevt($event: NzTreeNode): void;
    readonly nzExpandedKeysChange: EventEmitter<string[]>;
    readonly nzSelectedKeysChange: EventEmitter<string[]>;
    readonly nzCheckedKeysChange: EventEmitter<string[]>;
    readonly searchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use
     * searchValueChange instead
     */
    readonly nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    treeTemplate: TemplateRef<any>;
    _searchValue: string;
    _nzMultiple: boolean;
    nzDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<unknown>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: CmacsTreeService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    onKeyupHandler(event: any): void;
    ngOnInit(): void;
    onSelectionMultiple(selectedNode: NzFormatEmitEvent): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    addParent(node: any, index?: any): void;
    ngOnDestroy(): void;
    convertTreeToList(root: any, endNode: any, startNode: any, startNodeFound: any, endNodeFound: any): {
        startNodeFound: any;
        endNodeFound: any;
    };
    visitNode(node: any, hashMap: any): void;
    getFirstLevelNodes(subTree: any): any[];
    searchTree(treeData: any, key: any): any;
    searchSubTree(root: any, key: any): any;
    onClickAsyncNode(event: NzFormatEmitEvent): void;
    loadNodeChildren(key: any): Promise<NzTreeNodeOptions[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTreeComponent, [null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTreeComponent, "cmacs-tree", ["cmacsTree"], { "showIcon": { "alias": "showIcon"; "required": false; }; "showExpand": { "alias": "showExpand"; "required": false; }; "showLine": { "alias": "showLine"; "required": false; }; "expandedIcon": { "alias": "expandedIcon"; "required": false; }; "checkable": { "alias": "checkable"; "required": false; }; "asyncData": { "alias": "asyncData"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; "expandAll": { "alias": "expandAll"; "required": false; }; "hideUnMatched": { "alias": "hideUnMatched"; "required": false; }; "selectMode": { "alias": "selectMode"; "required": false; }; "nzCheckStrictly": { "alias": "nzCheckStrictly"; "required": false; }; "nzBlockNode": { "alias": "nzBlockNode"; "required": false; }; "inlineEdit": { "alias": "inlineEdit"; "required": false; }; "radio": { "alias": "radio"; "required": false; }; "cmacsAsyncData": { "alias": "cmacsAsyncData"; "required": false; }; "defaultExpandAll": { "alias": "defaultExpandAll"; "required": false; }; "beforeDrop": { "alias": "beforeDrop"; "required": false; }; "nzMultiple": { "alias": "nzMultiple"; "required": false; }; "nzData": { "alias": "nzData"; "required": false; }; "nzDefaultExpandedKeys": { "alias": "nzDefaultExpandedKeys"; "required": false; }; "nzDefaultSelectedKeys": { "alias": "nzDefaultSelectedKeys"; "required": false; }; "nzDefaultCheckedKeys": { "alias": "nzDefaultCheckedKeys"; "required": false; }; "nzExpandedKeys": { "alias": "nzExpandedKeys"; "required": false; }; "nzSelectedKeys": { "alias": "nzSelectedKeys"; "required": false; }; "nzCheckedKeys": { "alias": "nzCheckedKeys"; "required": false; }; "searchValue": { "alias": "searchValue"; "required": false; }; }, { "onaddchild": "onaddchild"; "nzExpandedKeysChange": "nzExpandedKeysChange"; "nzSelectedKeysChange": "nzSelectedKeysChange"; "nzCheckedKeysChange": "nzCheckedKeysChange"; "searchValueChange": "searchValueChange"; "nzOnSearchNode": "nzOnSearchNode"; "nzClick": "nzClick"; "nzDblClick": "nzDblClick"; "nzContextMenu": "nzContextMenu"; "nzCheckBoxChange": "nzCheckBoxChange"; "nzExpandChange": "nzExpandChange"; "nzOnDragStart": "nzOnDragStart"; "nzOnDragEnter": "nzOnDragEnter"; "nzOnDragOver": "nzOnDragOver"; "nzOnDragLeave": "nzOnDragLeave"; "nzOnDrop": "nzOnDrop"; "nzOnDragEnd": "nzOnDragEnd"; }, ["treeTemplate"], never, false, never>;
}
//# sourceMappingURL=cmacs-tree.component.d.ts.map