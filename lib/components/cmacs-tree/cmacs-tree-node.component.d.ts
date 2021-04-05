import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CmacsTreeService } from './cmacs-tree.service';
import { NzTreeNode } from './tree/nz-tree-base-node';
import { NzFormatBeforeDropEvent } from './tree/nz-tree-base.definitions';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import * as i0 from "@angular/core";
export declare class CmacsTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: CmacsTreeService;
    private ngZone;
    private renderer;
    private elRef;
    private cdr;
    nzNoAnimation?: NzNoAnimationDirective;
    dragElement: ElementRef;
    treeNode: NzTreeNode;
    showLine: boolean;
    showExpand: boolean;
    expandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    checkable: boolean;
    asyncData: boolean;
    hideUnMatched: boolean;
    noAnimation: boolean;
    selectMode: boolean;
    showIcon: boolean;
    inlineEdit: boolean;
    radio: boolean;
    index: number;
    treeTemplate: TemplateRef<void>;
    beforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    onaddchild: EventEmitter<NzTreeNode>;
    set draggable(value: boolean);
    get draggable(): boolean;
    /**
     * @deprecated use
     * expandAll instead
     */
    set defaultExpandAll(value: boolean);
    get defaultExpandAll(): boolean;
    set expandAll(value: boolean);
    get expandAll(): boolean;
    set searchValue(value: string);
    get searchValue(): string;
    prefixCls: string;
    highlightKeys: string[];
    nzNodeClass: {};
    nzNodeSwitcherClass: {};
    nzNodeContentClass: {};
    nzNodeCheckboxClass: {};
    nzNodeContentIconClass: {};
    nzNodeContentLoadingClass: {};
    /**
     * drag var
     */
    destroy$: Subject<unknown>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    _searchValue: string;
    _draggable: boolean;
    _expandAll: boolean;
    get nzIcon(): string;
    get canDraggable(): boolean | null;
    get isShowLineIcon(): boolean;
    get isShowSwitchIcon(): boolean;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
    get displayStyle(): string;
    /**
     * reset node class
     */
    setClassMap(): void;
    onMousedown(event: MouseEvent): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    checkSubTreeSelection(): boolean;
    visitNode(node: any, hashMap: any): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    onaddchildevt($event: Event): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    private newMethod;
    handleDragEnd(e: DragEvent): void;
    /**
     * 监听拖拽事件
     */
    handDragEvent(): void;
    isTemplateRef(value: {}): boolean;
    markForCheck(): void;
    constructor(nzTreeService: CmacsTreeService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef, cdr: ChangeDetectorRef, nzNoAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTreeNodeComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTreeNodeComponent, "cmacs-tree-node", ["cmacsTreeNode"], { "treeNode": "treeNode"; "showLine": "showLine"; "showExpand": "showExpand"; "expandedIcon": "expandedIcon"; "checkable": "checkable"; "asyncData": "asyncData"; "hideUnMatched": "hideUnMatched"; "noAnimation": "noAnimation"; "selectMode": "selectMode"; "showIcon": "showIcon"; "inlineEdit": "inlineEdit"; "radio": "radio"; "index": "index"; "treeTemplate": "treeTemplate"; "beforeDrop": "beforeDrop"; "draggable": "draggable"; "defaultExpandAll": "defaultExpandAll"; "expandAll": "expandAll"; "searchValue": "searchValue"; }, { "onaddchild": "onaddchild"; }, never, never>;
}
//# sourceMappingURL=cmacs-tree-node.component.d.ts.map