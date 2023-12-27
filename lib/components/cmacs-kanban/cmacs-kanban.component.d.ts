import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { KanbanBoard, KanbanColumn, KanbanItem, KanbanColumnTemplate } from './cmacs-kanban-definitions';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as i0 from "@angular/core";
export declare class CmacsKanbanComponent implements OnInit {
    private deviceDetector;
    /** Items to display  */
    board: KanbanBoard;
    multiselect: boolean;
    /**
     * Template for items to render. "item" object ist passed (see examples)
     * itemTemplate is for each column
     * itemTemplates is for change the template of a column
     */
    itemTemplate: TemplateRef<any>;
    itemTemplates: KanbanColumnTemplate[];
    /** Template for column headers. Current groupName will be passed (see examples) */
    columnHeaderTemplate: TemplateRef<any>;
    /** Template for column headers. Current groupName will be passed (see examples) */
    columnHeaderCollapsedTemplate: TemplateRef<any>;
    /** Shrink columns */
    showShrink: boolean;
    hasVerticalScroll: boolean;
    heightContainer: string;
    /** Templates for actions and description panels  */
    actionPanelTemplates: KanbanColumnTemplate[];
    descriptionPanelTemplates: KanbanColumnTemplate[];
    columnWidth: string;
    itemType: string;
    subHeader: TemplateRef<any>;
    draggedItem: EventEmitter<object>;
    noDraggedItem: EventEmitter<KanbanItem>;
    onclickItem: EventEmitter<object>;
    ondblclickItem: EventEmitter<object>;
    selectionChange: EventEmitter<KanbanItem[]>;
    onColumnExpand: EventEmitter<KanbanColumn>;
    selectedItems: KanbanItem[];
    dragStartedColumn: KanbanColumn;
    mobile: boolean;
    constructor(deviceDetector: DeviceDetectorService);
    ngOnInit(): void;
    getItemTemplate(id: string): TemplateRef<any>;
    getActionPanel(id: string): TemplateRef<any>;
    getDescriptionPanel(id: string): TemplateRef<any>;
    verticalScrollStyle(): any;
    boardStyle(): any;
    columnStyle(collapsed: boolean): any;
    columnExpand(column: KanbanColumn): any;
    columnCollapse(column: KanbanColumn): void;
    setDragStartedColumn(col: KanbanColumn): void;
    drop(event: CdkDragDrop<string[]>, columnId: string): void;
    private emitDroppedItem;
    clickItem(item: KanbanItem, columnId: string): void;
    dblclickItem(item: KanbanItem, columnId: string): void;
    isItemSelected(id: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsKanbanComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsKanbanComponent, "cmacs-kanban", ["cmacsKanban"], { "board": { "alias": "board"; "required": false; }; "multiselect": { "alias": "multiselect"; "required": false; }; "itemTemplate": { "alias": "itemTemplate"; "required": false; }; "itemTemplates": { "alias": "itemTemplates"; "required": false; }; "columnHeaderTemplate": { "alias": "columnHeaderTemplate"; "required": false; }; "columnHeaderCollapsedTemplate": { "alias": "columnHeaderCollapsedTemplate"; "required": false; }; "showShrink": { "alias": "showShrink"; "required": false; }; "hasVerticalScroll": { "alias": "hasVerticalScroll"; "required": false; }; "heightContainer": { "alias": "heightContainer"; "required": false; }; "actionPanelTemplates": { "alias": "actionPanelTemplates"; "required": false; }; "descriptionPanelTemplates": { "alias": "descriptionPanelTemplates"; "required": false; }; "columnWidth": { "alias": "columnWidth"; "required": false; }; "itemType": { "alias": "itemType"; "required": false; }; "subHeader": { "alias": "subHeader"; "required": false; }; }, { "draggedItem": "draggedItem"; "noDraggedItem": "noDraggedItem"; "onclickItem": "onclickItem"; "ondblclickItem": "ondblclickItem"; "selectionChange": "selectionChange"; "onColumnExpand": "onColumnExpand"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-kanban.component.d.ts.map