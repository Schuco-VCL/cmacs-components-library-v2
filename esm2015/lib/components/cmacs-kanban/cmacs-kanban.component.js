import { __decorate } from "tslib";
import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "../cmacs-button/cmacs-button.component";
import * as i4 from "ng-zorro-antd/grid";
function CmacsKanbanComponent_div_4_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 20);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r9.columnHeaderCollapsedTemplate);
} }
function CmacsKanbanComponent_div_4_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r1.name);
} }
const _c0 = function (a0) { return { column: a0 }; };
function CmacsKanbanComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r14); const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.columnExpand(column_r1); });
    i0.ɵɵelementStart(1, "button", 14);
    i0.ɵɵelement(2, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 16);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_div_1_ng_container_4_Template, 1, 1, "ng-container", 17);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_1_div_5_Template, 3, 1, "div", 18);
    i0.ɵɵelement(6, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.columnHeaderCollapsedTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.columnHeaderCollapsedTemplate);
} }
function CmacsKanbanComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 22);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r3.columnHeaderTemplate);
} }
function CmacsKanbanComponent_div_4_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.columnCollapse(column_r1); });
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵelementEnd();
} }
function CmacsKanbanComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 24);
    i0.ɵɵelementStart(2, "div", 25);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 26);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_3_button_5_Template, 2, 0, "button", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(column_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.showShrink);
} }
function CmacsKanbanComponent_div_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 30);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.subHeader);
} }
function CmacsKanbanComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 30);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.getActionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1) { return { item: a0, columnId: a1 }; };
function CmacsKanbanComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵlistener("cdkDragStarted", function CmacsKanbanComponent_div_4_div_7_Template_div_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r26); const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.setDragStartedColumn(column_r1); })("click", function CmacsKanbanComponent_div_4_div_7_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r26); const item_r22 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.clickItem(item_r22, column_r1.id); })("dblclick", function CmacsKanbanComponent_div_4_div_7_Template_div_dblclick_0_listener() { i0.ɵɵrestoreView(_r26); const item_r22 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.dblclickItem(item_r22, column_r1.id); });
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_div_7_ng_container_1_Template, 1, 0, "ng-container", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("task-selected", ctx_r7.isItemSelected(item_r22.id));
    i0.ɵɵproperty("cdkDragData", item_r22)("cdkDragDisabled", item_r22.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r7.getItemTemplate(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction2(6, _c1, item_r22, column_r1.id));
} }
function CmacsKanbanComponent_div_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 33);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r8.getDescriptionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_div_1_Template, 7, 5, "div", 6);
    i0.ɵɵtemplate(2, CmacsKanbanComponent_div_4_ng_container_2_Template, 1, 1, "ng-container", 7);
    i0.ɵɵtemplate(3, CmacsKanbanComponent_div_4_div_3_Template, 6, 2, "div", 8);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_ng_container_4_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_ng_container_5_Template, 1, 1, "ng-container", 9);
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsKanbanComponent_div_4_Template_div_cdkDropListDropped_6_listener($event) { i0.ɵɵrestoreView(_r34); const column_r1 = ctx.$implicit; const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.drop($event, column_r1.id); });
    i0.ɵɵtemplate(7, CmacsKanbanComponent_div_4_div_7_Template, 2, 9, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CmacsKanbanComponent_div_4_ng_container_8_Template, 1, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("collapsed", column_r1.collapsed);
    i0.ɵɵproperty("ngStyle", ctx_r0.columnStyle(column_r1.collapsed))("ngClass", column_r1.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r1.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.columnHeaderTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.columnHeaderTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.subHeader)("ngTemplateOutletContext", i0.ɵɵpureFunction1(19, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getActionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(21, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkDropListData", column_r1.items)("ngStyle", ctx_r0.verticalScrollStyle());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r1.items);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getDescriptionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c0, column_r1));
} }
export class CmacsKanbanComponent {
    constructor() {
        this.multiselect = false;
        /**
         * Template for items to render. "item" object ist passed (see examples)
         * itemTemplate is for each column
         * itemTemplates is for change the template of a column
         */
        this.itemTemplate = null;
        this.itemTemplates = null;
        /** Template for column headers. Current groupName will be passed (see examples) */
        this.columnHeaderTemplate = null;
        /** Template for column headers. Current groupName will be passed (see examples) */
        this.columnHeaderCollapsedTemplate = null;
        /** Shrink columns */
        this.showShrink = false;
        // scrolling
        this.hasVerticalScroll = false;
        this.heightContainer = '500px';
        /** Templates for actions and description panels  */
        this.actionPanelTemplates = null;
        this.descriptionPanelTemplates = null;
        // subheader
        this.subHeader = null;
        this.draggedItem = new EventEmitter();
        this.noDraggedItem = new EventEmitter();
        this.onclickItem = new EventEmitter();
        this.ondblclickItem = new EventEmitter();
        this.selectionChange = new EventEmitter();
        this.onColumnExpand = new EventEmitter();
        this.selectedItems = [];
        this.dragStartedColumn = null;
    }
    ngOnInit() {
    }
    getItemTemplate(id) {
        if (this.actionPanelTemplates) {
            const elem = this.itemTemplates.find(i => i.id === id);
            if (elem) {
                return elem.template;
            }
        }
        return this.itemTemplate;
    }
    getActionPanel(id) {
        if (this.actionPanelTemplates == null) {
            return null;
        }
        const elem = this.actionPanelTemplates.find(d => d.id === id);
        return elem ? elem.template : null;
    }
    getDescriptionPanel(id) {
        if (this.descriptionPanelTemplates == null) {
            return null;
        }
        const elem = this.descriptionPanelTemplates.find(d => d.id === id);
        return elem ? elem.template : null;
    }
    verticalScrollStyle() {
        return (this.hasVerticalScroll) ? { height: this.heightContainer } : {};
    }
    boardStyle() {
        return (this.hasVerticalScroll) ? { 'min-height': this.heightContainer } : {};
    }
    columnStyle(collapsed) {
        return (this.columnWidth && !collapsed) ? { minWidth: this.columnWidth } : {};
    }
    columnExpand(column) {
        column.collapsed = false;
        this.onColumnExpand.emit(column);
    }
    columnCollapse(column) {
        column.collapsed = true;
    }
    setDragStartedColumn(col) {
        this.dragStartedColumn = col;
    }
    drop(event, columnId) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            this.emitDroppedItem(event.item.data, columnId);
        }
        else {
            if (!this.dragStartedColumn.disabledDrop || !this.dragStartedColumn.disabledDrop.some(id => id === columnId)) {
                if (this.itemType === 'custom' && !event.item.data.data.isEditable) {
                    this.noDraggedItem.emit(event.item.data);
                    this.dragStartedColumn = null;
                    return;
                }
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.emitDroppedItem(event.item.data, columnId);
            }
            else {
                this.noDraggedItem.emit(event.item.data);
            }
        }
        this.dragStartedColumn = null;
    }
    emitDroppedItem(data, columnId) {
        data.columnId = columnId;
        this.draggedItem.emit(data);
    }
    clickItem(item, columnId) {
        console.log(this.board);
        item.columnId = columnId;
        this.onclickItem.emit(item);
        // add or remove elements to selected items
        if (!item.disabled) {
            const idx = this.selectedItems.findIndex(elem => elem.id === item.id);
            if (idx === -1) {
                if (!this.multiselect) {
                    this.selectedItems = [];
                }
                this.selectedItems.push(item);
            }
            else {
                this.selectedItems.splice(idx, 1);
            }
            this.selectionChange.emit(this.selectedItems);
        }
    }
    dblclickItem(item, columnId) {
        item.columnId = columnId;
        this.ondblclickItem.emit(item);
    }
    isItemSelected(id) {
        return this.selectedItems.some(elem => elem.id === id);
    }
}
CmacsKanbanComponent.ɵfac = function CmacsKanbanComponent_Factory(t) { return new (t || CmacsKanbanComponent)(); };
CmacsKanbanComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKanbanComponent, selectors: [["cmacs-kanban"]], inputs: { board: "board", multiselect: "multiselect", itemTemplate: "itemTemplate", itemTemplates: "itemTemplates", columnHeaderTemplate: "columnHeaderTemplate", columnHeaderCollapsedTemplate: "columnHeaderCollapsedTemplate", showShrink: "showShrink", hasVerticalScroll: "hasVerticalScroll", heightContainer: "heightContainer", actionPanelTemplates: "actionPanelTemplates", descriptionPanelTemplates: "descriptionPanelTemplates", columnWidth: "columnWidth", itemType: "itemType", subHeader: "subHeader" }, outputs: { draggedItem: "draggedItem", noDraggedItem: "noDraggedItem", onclickItem: "onclickItem", ondblclickItem: "ondblclickItem", selectionChange: "selectionChange", onColumnExpand: "onColumnExpand" }, exportAs: ["cmacsKanban"], decls: 5, vars: 2, consts: [[1, "root"], [1, "board", 3, "ngStyle"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["class", "board-column", 3, "ngStyle", "ngClass", "collapsed", 4, "ngFor", "ngForOf"], [1, "board-column", 3, "ngStyle", "ngClass"], ["class", "column-header-collapsed", 3, "click", 4, "ngIf"], ["class", "column-header-template", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-row", "", "class", "column-header", 4, "ngIf"], ["class", "column-action-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cdkDropList", "", 1, "tasks-container", 3, "cdkDropListData", "ngStyle", "cdkDropListDropped"], ["class", "task", "cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "task-selected", "cdkDragStarted", "click", "dblclick", 4, "ngFor", "ngForOf"], ["class", "column-description-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-header-collapsed", 3, "click"], ["cmacs-button", "", 2, "padding", "8px"], [1, "iconArrowLarge-Expand"], [1, "column-header-collapsed-line", "column-header-collapsed-line-1"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "column-header-collapsed-text", 4, "ngIf"], [1, "column-header-collapsed-line", "column-header-collapsed-line-2"], [3, "ngIf"], [1, "column-header-collapsed-text"], [1, "column-header-template", 3, "ngIf"], ["nz-row", "", 1, "column-header"], ["nz-col", "", "nzSpan", "18"], [1, "column-title"], ["nz-col", "", "nzSpan", "6", 1, "header-actions"], ["cmacs-button", "", "class", "column-shrink", "ghost", "", 3, "click", 4, "ngIf"], ["cmacs-button", "", "ghost", "", 1, "column-shrink", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "column-action-panel", 3, "ngIf"], ["cdkDrag", "", 1, "task", 3, "cdkDragData", "cdkDragDisabled", "cdkDragStarted", "click", "dblclick"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-description-panel", 3, "ngIf"]], template: function CmacsKanbanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_Template, 9, 25, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.boardStyle());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.board.columns);
    } }, directives: [i1.NgStyle, i2.CdkDropListGroup, i1.NgForOf, i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i2.CdkDropList, i3.CmacsButtonComponent, i4.NzRowDirective, i4.NzColDirective, i2.CdkDrag], styles: [".root{height:100%}.board,.root{display:flex;flex-direction:column}.board{flex-grow:1;min-width:0;min-height:0}.board-name{font-size:20px;font-weight:700}.board-wrapper{overflow-x:auto}.board-column,.board-columns,.board-wrapper{display:flex;flex-grow:1}.board-column{flex-direction:column;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{padding:12px 15px 10px;font-family:Roboto-Regular;line-height:1;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 82px);display:inline-block}.column-title-items{color:#97a0ae!important;font-size:12px!important;font-family:Roboto-Medium!important}.column-shrink{height:20px!important;width:20px;padding-right:0!important;padding-left:0!important;margin-left:5px;float:right}.tasks-container{flex-grow:1;overflow-y:auto;margin-bottom:2px;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.board-wrapper::-webkit-scrollbar,.tasks-container::-webkit-scrollbar{width:7px;height:7px}.board-wrapper::-webkit-scrollbar-thumb,.tasks-container::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.board-wrapper::-webkit-scrollbar-thumb:hover,.tasks-container::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.task{display:flex}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:14px;margin-bottom:14px;height:25px}.column-header-collapsed-line-2{margin-top:14px;height:inherit}.column-header-collapsed-text{transform:none;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;margin:0 0 0 10px;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto-Medium;display:table}.column-header-collapsed-text>*{display:table-cell;white-space:nowrap}.column-header .column-shrink{display:block}.column-shrink,.header-actions{height:100%!important}.column-shrink i{font-size:17px!important}"], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "multiselect", void 0);
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "showShrink", void 0);
__decorate([
    InputBoolean()
], CmacsKanbanComponent.prototype, "hasVerticalScroll", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsKanbanComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-kanban',
                exportAs: 'cmacsKanban',
                templateUrl: './cmacs-kanban.component.html',
                styleUrls: ['./cmacs-kanban.component.css'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { board: [{
            type: Input
        }], multiselect: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], itemTemplates: [{
            type: Input
        }], columnHeaderTemplate: [{
            type: Input
        }], columnHeaderCollapsedTemplate: [{
            type: Input
        }], showShrink: [{
            type: Input
        }], hasVerticalScroll: [{
            type: Input
        }], heightContainer: [{
            type: Input
        }], actionPanelTemplates: [{
            type: Input
        }], descriptionPanelTemplates: [{
            type: Input
        }], columnWidth: [{
            type: Input
        }], itemType: [{
            type: Input
        }], subHeader: [{
            type: Input
        }], draggedItem: [{
            type: Output
        }], noDraggedItem: [{
            type: Output
        }], onclickItem: [{
            type: Output
        }], ondblclickItem: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], onColumnExpand: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0lDQ3pDLDRCQUFtSjs7O0lBQXBJLDJEQUFzQzs7O0lBQ3JELCtCQUFpRjtJQUMvRSw0QkFBTTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDaEMsaUJBQU07OztJQURFLGVBQWlCO0lBQWpCLG9DQUFpQjs7Ozs7SUFQM0IsK0JBQTZGO0lBQS9CLHlQQUE4QjtJQUMxRixrQ0FBMkM7SUFDekMsd0JBQXNDO0lBQ3hDLGlCQUFTO0lBQ1QsMEJBQStFO0lBQy9FLG9HQUFtSjtJQUNuSixrRkFFTTtJQUNOLDBCQUErRTtJQUNqRixpQkFBTTs7OztJQUxtRCxlQUFpRDtJQUFqRCx1RUFBaUQsa0VBQUE7SUFDbEcsZUFBb0M7SUFBcEMsNERBQW9DOzs7SUFPNUMsNEJBQWdLOzs7SUFBbkgsa0RBQTZCOzs7O0lBT3RFLGtDQUFxRztJQUFqQyx3UUFBZ0M7SUFDbEcsd0JBQXVDO0lBQ3pDLGlCQUFTOzs7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QVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDeEM7c0NBS1ksS0FBSztrQkFBYixLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFPRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUdHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUdHLDZCQUE2QjtrQkFBckMsS0FBSztZQUdtQixVQUFVO2tCQUFsQyxLQUFLO1lBR21CLGlCQUFpQjtrQkFBekMsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFHRyxXQUFXO2tCQUFuQixLQUFLO1lBR0csUUFBUTtrQkFBaEIsS0FBSztZQUdHLFNBQVM7a0JBQWpCLEtBQUs7WUFFSSxXQUFXO2tCQUFwQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLFdBQVc7a0JBQXBCLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBPdXRwdXQsXHJcbiAgICBJbnB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgT25Jbml0LFxyXG4gICAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0gfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgS2FuYmFuQm9hcmQsIEthbmJhbkNvbHVtbiwgS2FuYmFuSXRlbSwgS2FuYmFuQ29sdW1uVGVtcGxhdGUgfSBmcm9tICcuL2NtYWNzLWthbmJhbi1kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjbWFjcy1rYW5iYW4nLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc0thbmJhbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NLYW5iYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8qKiBJdGVtcyB0byBkaXNwbGF5ICAqL1xyXG4gICAgQElucHV0KCkgYm9hcmQ6IEthbmJhbkJvYXJkO1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgaXRlbXMgdG8gcmVuZGVyLiBcIml0ZW1cIiBvYmplY3QgaXN0IHBhc3NlZCAoc2VlIGV4YW1wbGVzKVxyXG4gICAgICogaXRlbVRlbXBsYXRlIGlzIGZvciBlYWNoIGNvbHVtblxyXG4gICAgICogaXRlbVRlbXBsYXRlcyBpcyBmb3IgY2hhbmdlIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtblxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBTaHJpbmsgY29sdW1ucyAqL1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaHJpbmsgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBzY3JvbGxpbmdcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNWZXJ0aWNhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0Q29udGFpbmVyID0gJzUwMHB4JztcclxuXHJcbiAgICAvKiogVGVtcGxhdGVzIGZvciBhY3Rpb25zIGFuZCBkZXNjcmlwdGlvbiBwYW5lbHMgICovXHJcbiAgICBASW5wdXQoKSBhY3Rpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0eWxlc1xyXG4gICAgQElucHV0KCkgY29sdW1uV2lkdGg6IHN0cmluZztcclxuXHJcbiAgICAvLyBrYW5iYW4gdHlwZVxyXG4gICAgQElucHV0KCkgaXRlbVR5cGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBzdWJoZWFkZXJcclxuICAgIEBJbnB1dCgpIHN1YkhlYWRlcjogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm9EcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25Db2x1bW5FeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkNvbHVtbj4oKTtcclxuXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBLYW5iYW5JdGVtIFtdID0gW107XHJcbiAgICBkcmFnU3RhcnRlZENvbHVtbjogS2FuYmFuQ29sdW1uID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVGVtcGxhdGUoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLml0ZW1UZW1wbGF0ZXMuZmluZChpID0+IGkuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW0pIHsgcmV0dXJuIGVsZW0udGVtcGxhdGU7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcnRpY2FsU2Nyb2xsU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyBoZWlnaHQ6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyAnbWluLWhlaWdodCc6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblN0eWxlKGNvbGxhcHNlZDogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbHVtbldpZHRoICYmICFjb2xsYXBzZWQpID8geyBtaW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aH0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5FeHBhbmQoY29sdW1uOiBLYW5iYW5Db2x1bW4pOiBhbnkge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQ29sdW1uRXhwYW5kLmVtaXQoY29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5Db2xsYXBzZShjb2x1bW46IEthbmJhbkNvbHVtbik6IHZvaWQge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyYWdTdGFydGVkQ29sdW1uKGNvbDogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4sIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wIHx8ICF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcC5zb21lKGlkID0+IGlkID09PSBjb2x1bW5JZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1UeXBlID09PSAnY3VzdG9tJyAmJiAhZXZlbnQuaXRlbS5kYXRhLmRhdGEuaXNFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVtaXREcm9wcGVkSXRlbShkYXRhOiBhbnksIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkYXRhLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkSXRlbS5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSXRlbShpdGVtOiBLYW5iYW5JdGVtLCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XHJcbiAgICAgICAgaXRlbS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMub25jbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBlbGVtZW50cyB0byBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlzZWxlY3QpIHsgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGJsY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSXRlbVNlbGVjdGVkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoZWxlbSA9PiBlbGVtLmlkID09PSBpZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInJvb3RcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiIFtuZ1N0eWxlXT1cImJvYXJkU3R5bGUoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb2x1bW5zXCIgY2RrRHJvcExpc3RHcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGJvYXJkLmNvbHVtbnNcIiBbbmdTdHlsZV09XCJjb2x1bW5TdHlsZShjb2x1bW4uY29sbGFwc2VkKVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5jbGFzc1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jb2xsYXBzZWRdPVwiY29sdW1uLmNvbGxhcHNlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwhLS0gY29sbGFwc2VkIC0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNvbGxhcHNlZFwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWRcIiAoY2xpY2spPVwiY29sdW1uRXhwYW5kKGNvbHVtbilcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBzdHlsZT1cInBhZGRpbmc6IDhweDtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtRXhwYW5kXCIgPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZSBjb2x1bW4taGVhZGVyLWNvbGxhcHNlZC1saW5lLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICBbbmdJZl09XCJjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY29sdW1uLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZSBjb2x1bW4taGVhZGVyLWNvbGxhcHNlZC1saW5lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gZW5kIGNvbGxhcHNlZCAtLT5cclxuICAgICAgICAgICAgPCEtLSBjb2x1bW4gaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWhlYWRlci10ZW1wbGF0ZVwiIFtuZ0lmXT1cImNvbHVtbkhlYWRlclRlbXBsYXRlXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW5IZWFkZXJUZW1wbGF0ZTsgY29udGV4dDogeyBjb2x1bW46IGNvbHVtbn1cIiA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotcm93IGNsYXNzPVwiY29sdW1uLWhlYWRlclwiICpuZ0lmPVwiIWNvbHVtbkhlYWRlclRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj57e2NvbHVtbi5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZS1pdGVtc1wiPnt7Y29sdW1uLml0ZW1zLmxlbmd0aH19IEl0ZW1zPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjZcIiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1Nocmlua1wiIGNtYWNzLWJ1dHRvbiBjbGFzcz1cImNvbHVtbi1zaHJpbmtcIiBnaG9zdCAoY2xpY2spPVwiY29sdW1uQ29sbGFwc2UoY29sdW1uKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNvbGxhcHNlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2x1bW4taGVhZGVyXCIgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj57e2NvbHVtbi5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbHVtbi10aXRsZS1pdGVtc1wiPnt7Y29sdW1uLml0ZW1zLmxlbmd0aH19IEl0ZW1zPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDwhLS0gZW5kIGhlYWRlciAtLT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjbGFzcz1cImNvbHVtbi1hY3Rpb24tcGFuZWxcIiBbbmdJZl09XCJzdWJIZWFkZXJcIiAqbmdUZW1wbGF0ZU91dGxldD1cInN1YkhlYWRlcjsgY29udGV4dDogeyBjb2x1bW46IGNvbHVtbn1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBjbGFzcz1cImNvbHVtbi1hY3Rpb24tcGFuZWxcIiBbbmdJZl09XCJnZXRBY3Rpb25QYW5lbChjb2x1bW4uaWQpXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXRBY3Rpb25QYW5lbChjb2x1bW4uaWQpOyBjb250ZXh0OiB7IGNvbHVtbjogY29sdW1ufVwiID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzLWNvbnRhaW5lclwiIGNka0Ryb3BMaXN0IFtjZGtEcm9wTGlzdERhdGFdPVwiY29sdW1uLml0ZW1zXCJcclxuICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudCwgY29sdW1uLmlkKVwiIFtuZ1N0eWxlXT1cInZlcnRpY2FsU2Nyb2xsU3R5bGUoKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sdW1uLml0ZW1zXCIgXHJcbiAgICAgICAgICAgICAgICAgICBjZGtEcmFnIFxyXG4gICAgICAgICAgICAgICAgICAgW2Nka0RyYWdEYXRhXT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgW2Nka0RyYWdEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgIChjZGtEcmFnU3RhcnRlZCk9XCJzZXREcmFnU3RhcnRlZENvbHVtbihjb2x1bW4pXCJcclxuICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGlja0l0ZW0oaXRlbSwgY29sdW1uLmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwiZGJsY2xpY2tJdGVtKGl0ZW0sIGNvbHVtbi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLnRhc2stc2VsZWN0ZWRdPVwiaXNJdGVtU2VsZWN0ZWQoaXRlbS5pZClcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXRJdGVtVGVtcGxhdGUoY29sdW1uLmlkKTsgY29udGV4dDoge2l0ZW06IGl0ZW0sIGNvbHVtbklkOiBjb2x1bW4uaWR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWRlc2NyaXB0aW9uLXBhbmVsXCIgW25nSWZdPVwiZ2V0RGVzY3JpcHRpb25QYW5lbChjb2x1bW4uaWQpXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXREZXNjcmlwdGlvblBhbmVsKGNvbHVtbi5pZCk7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCIgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+Il19