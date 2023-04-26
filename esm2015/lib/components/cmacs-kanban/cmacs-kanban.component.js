import { __decorate } from "tslib";
import { Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ngx-device-detector";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "../cmacs-button/cmacs-button.component";
import * as i5 from "../cmacs-tooltip/tooltip";
import * as i6 from "ng-zorro-antd/grid";
function CmacsKanbanComponent_div_4_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 21);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r11.columnHeaderCollapsedTemplate);
} }
function CmacsKanbanComponent_div_4_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
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
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r16); const column_r1 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.columnExpand(column_r1); });
    i0.ɵɵelementStart(1, "button", 15);
    i0.ɵɵelement(2, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 17);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_div_1_ng_container_4_Template, 1, 1, "ng-container", 18);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_1_div_5_Template, 3, 1, "div", 19);
    i0.ɵɵelement(6, "div", 20);
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
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r3.columnHeaderTemplate);
} }
function CmacsKanbanComponent_div_4_div_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function CmacsKanbanComponent_div_4_div_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.columnCollapse(column_r1); });
    i0.ɵɵelement(1, "i", 30);
    i0.ɵɵelementEnd();
} }
function CmacsKanbanComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 27);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_div_3_button_5_Template, 2, 0, "button", 28);
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
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r5.subHeader);
} }
function CmacsKanbanComponent_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 31);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r6.getActionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_ng_container_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1) { return { item: a0, columnId: a1 }; };
function CmacsKanbanComponent_div_4_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵlistener("cdkDragStarted", function CmacsKanbanComponent_div_4_ng_container_7_div_1_Template_div_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r29); const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.setDragStartedColumn(column_r1); })("tap", function CmacsKanbanComponent_div_4_ng_container_7_div_1_Template_div_tap_0_listener() { i0.ɵɵrestoreView(_r29); const item_r25 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.clickItem(item_r25, column_r1.id); })("doubletap", function CmacsKanbanComponent_div_4_ng_container_7_div_1_Template_div_doubletap_0_listener() { i0.ɵɵrestoreView(_r29); const item_r25 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.dblclickItem(item_r25, column_r1.id); });
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_ng_container_7_div_1_ng_container_1_Template, 1, 0, "ng-container", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("task-selected", ctx_r24.isItemSelected(item_r25.id));
    i0.ɵɵproperty("cdkDragData", item_r25)("cdkDragDisabled", !ctx_r24.isItemSelected(item_r25.id));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r24.getItemTemplate(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction2(6, _c1, item_r25, column_r1.id));
} }
function CmacsKanbanComponent_div_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_ng_container_7_div_1_Template, 2, 9, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", column_r1.items);
} }
function CmacsKanbanComponent_div_4_ng_template_8_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsKanbanComponent_div_4_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵlistener("cdkDragStarted", function CmacsKanbanComponent_div_4_ng_template_8_div_0_Template_div_cdkDragStarted_0_listener() { i0.ɵɵrestoreView(_r41); const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r39 = i0.ɵɵnextContext(); return ctx_r39.setDragStartedColumn(column_r1); })("click", function CmacsKanbanComponent_div_4_ng_template_8_div_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r41); const item_r37 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r42 = i0.ɵɵnextContext(); return ctx_r42.clickItem(item_r37, column_r1.id); })("dblclick", function CmacsKanbanComponent_div_4_ng_template_8_div_0_Template_div_dblclick_0_listener() { i0.ɵɵrestoreView(_r41); const item_r37 = ctx.$implicit; const column_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r44 = i0.ɵɵnextContext(); return ctx_r44.dblclickItem(item_r37, column_r1.id); });
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_ng_template_8_div_0_ng_container_1_Template, 1, 0, "ng-container", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const column_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r36 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("task-selected", ctx_r36.isItemSelected(item_r37.id));
    i0.ɵɵproperty("cdkDragData", item_r37)("cdkDragDisabled", item_r37.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r36.getItemTemplate(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction2(6, _c1, item_r37, column_r1.id));
} }
function CmacsKanbanComponent_div_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsKanbanComponent_div_4_ng_template_8_div_0_Template, 2, 9, "div", 35);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngForOf", column_r1.items);
} }
function CmacsKanbanComponent_div_4_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 37);
} if (rf & 2) {
    const column_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r10.getDescriptionPanel(column_r1.id));
} }
function CmacsKanbanComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CmacsKanbanComponent_div_4_div_1_Template, 7, 5, "div", 6);
    i0.ɵɵtemplate(2, CmacsKanbanComponent_div_4_ng_container_2_Template, 1, 1, "ng-container", 7);
    i0.ɵɵtemplate(3, CmacsKanbanComponent_div_4_div_3_Template, 6, 2, "div", 8);
    i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_ng_container_4_Template, 1, 1, "ng-container", 9);
    i0.ɵɵtemplate(5, CmacsKanbanComponent_div_4_ng_container_5_Template, 1, 1, "ng-container", 9);
    i0.ɵɵelementStart(6, "div", 10);
    i0.ɵɵlistener("cdkDropListDropped", function CmacsKanbanComponent_div_4_Template_div_cdkDropListDropped_6_listener($event) { i0.ɵɵrestoreView(_r50); const column_r1 = ctx.$implicit; const ctx_r49 = i0.ɵɵnextContext(); return ctx_r49.drop($event, column_r1.id); });
    i0.ɵɵtemplate(7, CmacsKanbanComponent_div_4_ng_container_7_Template, 2, 1, "ng-container", 11);
    i0.ɵɵtemplate(8, CmacsKanbanComponent_div_4_ng_template_8_Template, 1, 1, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CmacsKanbanComponent_div_4_ng_container_10_Template, 1, 1, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const _r8 = i0.ɵɵreference(9);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("collapsed", column_r1.collapsed);
    i0.ɵɵproperty("ngStyle", ctx_r0.columnStyle(column_r1.collapsed))("ngClass", column_r1.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r1.collapsed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.columnHeaderTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction1(18, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.columnHeaderTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.subHeader)("ngTemplateOutletContext", i0.ɵɵpureFunction1(20, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getActionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c0, column_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkDropListData", column_r1.items)("ngStyle", ctx_r0.verticalScrollStyle());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.mobile)("ngIfElse", _r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.getDescriptionPanel(column_r1.id))("ngTemplateOutletContext", i0.ɵɵpureFunction1(24, _c0, column_r1));
} }
export class CmacsKanbanComponent {
    constructor(deviceDetector) {
        this.deviceDetector = deviceDetector;
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
        this.mobile = false;
        this.mobile = deviceDetector.isMobile() || deviceDetector.isTablet();
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
CmacsKanbanComponent.ɵfac = function CmacsKanbanComponent_Factory(t) { return new (t || CmacsKanbanComponent)(i0.ɵɵdirectiveInject(i1.DeviceDetectorService)); };
CmacsKanbanComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsKanbanComponent, selectors: [["cmacs-kanban"]], inputs: { board: "board", multiselect: "multiselect", itemTemplate: "itemTemplate", itemTemplates: "itemTemplates", columnHeaderTemplate: "columnHeaderTemplate", columnHeaderCollapsedTemplate: "columnHeaderCollapsedTemplate", showShrink: "showShrink", hasVerticalScroll: "hasVerticalScroll", heightContainer: "heightContainer", actionPanelTemplates: "actionPanelTemplates", descriptionPanelTemplates: "descriptionPanelTemplates", columnWidth: "columnWidth", itemType: "itemType", subHeader: "subHeader" }, outputs: { draggedItem: "draggedItem", noDraggedItem: "noDraggedItem", onclickItem: "onclickItem", ondblclickItem: "ondblclickItem", selectionChange: "selectionChange", onColumnExpand: "onColumnExpand" }, exportAs: ["cmacsKanban"], decls: 5, vars: 2, consts: [[1, "root"], [1, "board", 3, "ngStyle"], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["class", "board-column", 3, "ngStyle", "ngClass", "collapsed", 4, "ngFor", "ngForOf"], [1, "board-column", 3, "ngStyle", "ngClass"], ["class", "column-header-collapsed", 3, "click", 4, "ngIf"], ["class", "column-header-template", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-row", "", "class", "column-header", 4, "ngIf"], ["class", "column-action-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["id", "tasks-container", "cdkDropList", "", 1, "tasks-container", 3, "cdkDropListData", "ngStyle", "cdkDropListDropped"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], ["class", "column-description-panel", 3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "column-header-collapsed", 3, "click"], ["cmacs-button", "", "role", "button", "aria-label", "expand", "cmacsTooltipPlacement", "bottom", "cmacs-tooltip", "", "cmacsTooltipTitle", "Expand", 2, "padding", "8px"], [1, "iconArrowLarge-Expand"], [1, "column-header-collapsed-line", "column-header-collapsed-line-1"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "column-header-collapsed-text", 4, "ngIf"], [1, "column-header-collapsed-line", "column-header-collapsed-line-2"], [3, "ngIf"], [1, "column-header-collapsed-text"], [1, "column-header-template", 3, "ngIf"], ["nz-row", "", 1, "column-header"], ["nz-col", "", "nzSpan", "18"], [1, "column-title"], ["nz-col", "", "nzSpan", "6", 1, "header-actions"], ["role", "button", "aria-label", "collapse", "cmacsTooltipPlacement", "bottom", "cmacs-tooltip", "", "cmacsTooltipTitle", "collapse", "cmacs-button", "", "class", "column-shrink", "ghost", "", 3, "click", 4, "ngIf"], ["role", "button", "aria-label", "collapse", "cmacsTooltipPlacement", "bottom", "cmacs-tooltip", "", "cmacsTooltipTitle", "collapse", "cmacs-button", "", "ghost", "", 1, "column-shrink", 3, "click"], [1, "iconArrowLarge-Collapse"], [1, "column-action-panel", 3, "ngIf"], ["class", "task", "cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "task-selected", "cdkDragStarted", "tap", "doubletap", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "task", 3, "cdkDragData", "cdkDragDisabled", "cdkDragStarted", "tap", "doubletap"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "task", "cdkDrag", "", 3, "cdkDragData", "cdkDragDisabled", "task-selected", "cdkDragStarted", "click", "dblclick", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "task", 3, "cdkDragData", "cdkDragDisabled", "cdkDragStarted", "click", "dblclick"], [1, "column-description-panel", 3, "ngIf"]], template: function CmacsKanbanComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, CmacsKanbanComponent_div_4_Template, 11, 26, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.boardStyle());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.board.columns);
    } }, directives: [i2.NgStyle, i3.CdkDropListGroup, i2.NgForOf, i2.NgClass, i2.NgIf, i2.NgTemplateOutlet, i3.CdkDropList, i4.CmacsButtonComponent, i5.CmacsTooltipDirective, i6.NzRowDirective, i6.NzColDirective, i3.CdkDrag], styles: [".cmacs-kanban-item-drag-handler{position:absolute;top:5px;left:10px;cursor:-webkit-grab;cursor:grab;color:#656c79}.root{height:100%}.board,.root{display:flex;flex-direction:column}.board{flex-grow:1;min-width:0;min-height:0}.board-name{font-size:20px;font-weight:700}.board-wrapper{overflow-x:auto}.board-column,.board-columns,.board-wrapper{display:flex;flex-grow:1}.board-column{flex-direction:column;flex-basis:0;border-radius:4px}.board-column:not(:first-child){margin-left:0}.column-header{padding:12px 15px 10px;font-family:Roboto-Regular;line-height:1;border-left:1px solid #dee0e5;box-shadow:0 3px 7px -3px rgba(5,6,6,.18);margin-bottom:10px}.column-title{text-transform:capitalize;color:#656c79;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:calc(100% - 82px);display:inline-block;line-height:14px}.column-title-items{color:#97a0ae!important;font-size:12px!important;font-family:Roboto-Medium!important}.column-shrink{height:20px!important;width:20px;padding-right:0!important;padding-left:0!important;margin-left:5px;float:right}.tasks-container{flex-grow:1;overflow-y:auto;margin-bottom:2px;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.board-wrapper::-webkit-scrollbar,.tasks-container::-webkit-scrollbar{-webkit-appearance:none;width:7px;height:7px;-webkit-overflow-scrolling:auto}.board-wrapper::-webkit-scrollbar-thumb,.tasks-container::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.board-wrapper::-webkit-scrollbar-thumb:hover,.tasks-container::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}.task{display:flex;position:relative}.task,.task .cmacs-todo-card{touch-action:manipulation!important}.task.cdk-drag-preview{opacity:.9}.task-selected{border-color:#2a7cff}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating,.tasks-container.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.board-column.collapsed{min-width:37px!important;padding:0;margin:0 10px;flex-basis:0;flex-grow:0}.board-column.collapsed>.column-action-panel,.board-column.collapsed>.column-description-panel,.board-column.collapsed>.column-header,.board-column.collapsed>.column-header-template,.board-column.collapsed>.tasks-container{display:none}.column-header-collapsed{display:contents;height:100%}.column-header-collapsed-line{background-color:#acb3bf;width:1px;margin:0 auto}.column-header-collapsed-line-1{margin-top:14px;margin-bottom:14px;height:25px}.column-header-collapsed-line-2{margin-top:14px;height:inherit}.column-header-collapsed-text{transform:none;-ms-writing-mode:tb-lr;writing-mode:vertical-lr;margin:0 0 0 10px;text-transform:capitalize;color:#656c79;font-size:14px;font-weight:500;font-family:Roboto-Medium;display:table}.column-header-collapsed-text>*{display:table-cell;white-space:nowrap}.column-header .column-shrink{display:block}.column-shrink,.header-actions{height:100%!important}.column-shrink i{font-size:17px!important}"], encapsulation: 2 });
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
    }], function () { return [{ type: i1.DeviceDetectorService }]; }, { board: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mta2FuYmFuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1rYW5iYW4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFFWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUdwQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7SUNDekMsNEJBQW1KOzs7SUFBcEksNERBQXNDOzs7SUFDckQsK0JBQWlGO0lBQy9FLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQyxpQkFBTTs7O0lBREUsZUFBaUI7SUFBakIsb0NBQWlCOzs7OztJQVAzQiwrQkFBNkY7SUFBL0IseVBBQThCO0lBQzFGLGtDQUFxSjtJQUNuSix3QkFBc0M7SUFDeEMsaUJBQVM7SUFDVCwwQkFBK0U7SUFDL0Usb0dBQW1KO0lBQ25KLGtGQUVNO0lBQ04sMEJBQStFO0lBQ2pGLGlCQUFNOzs7O0lBTG1ELGVBQWlEO0lBQWpELHVFQUFpRCxrRUFBQTtJQUNsRyxlQUFvQztJQUFwQyw0REFBb0M7OztJQU81Qyw0QkFBZ0s7OztJQUFuSCxrREFBNkI7Ozs7SUFPdEUsa0NBQW1OO0lBQWpDLHdRQUFnQztJQUNoTix3QkFBdUM7SUFDekMsaUJBQVM7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YztrQkFBdkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIE91dHB1dCxcclxuICAgIElucHV0LFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgICBPbkluaXQsXHJcbiAgICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQgeyBLYW5iYW5Cb2FyZCwgS2FuYmFuQ29sdW1uLCBLYW5iYW5JdGVtLCBLYW5iYW5Db2x1bW5UZW1wbGF0ZSB9IGZyb20gJy4vY21hY3Mta2FuYmFuLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBEZXZpY2VEZXRlY3RvclNlcnZpY2UgfSBmcm9tICduZ3gtZGV2aWNlLWRldGVjdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjbWFjcy1rYW5iYW4nLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc0thbmJhbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mta2FuYmFuLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NtYWNzLWthbmJhbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ21hY3NLYW5iYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIC8qKiBJdGVtcyB0byBkaXNwbGF5ICAqL1xyXG4gICAgQElucHV0KCkgYm9hcmQ6IEthbmJhbkJvYXJkO1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG11bHRpc2VsZWN0ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUZW1wbGF0ZSBmb3IgaXRlbXMgdG8gcmVuZGVyLiBcIml0ZW1cIiBvYmplY3QgaXN0IHBhc3NlZCAoc2VlIGV4YW1wbGVzKVxyXG4gICAgICogaXRlbVRlbXBsYXRlIGlzIGZvciBlYWNoIGNvbHVtblxyXG4gICAgICogaXRlbVRlbXBsYXRlcyBpcyBmb3IgY2hhbmdlIHRoZSB0ZW1wbGF0ZSBvZiBhIGNvbHVtblxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG4gICAgQElucHV0KCkgaXRlbVRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFRlbXBsYXRlIGZvciBjb2x1bW4gaGVhZGVycy4gQ3VycmVudCBncm91cE5hbWUgd2lsbCBiZSBwYXNzZWQgKHNlZSBleGFtcGxlcykgKi9cclxuICAgIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgICAvKiogVGVtcGxhdGUgZm9yIGNvbHVtbiBoZWFkZXJzLiBDdXJyZW50IGdyb3VwTmFtZSB3aWxsIGJlIHBhc3NlZCAoc2VlIGV4YW1wbGVzKSAqL1xyXG4gICAgQElucHV0KCkgY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBTaHJpbmsgY29sdW1ucyAqL1xyXG4gICAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTaHJpbmsgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBzY3JvbGxpbmdcclxuICAgIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoYXNWZXJ0aWNhbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0Q29udGFpbmVyID0gJzUwMHB4JztcclxuXHJcbiAgICAvKiogVGVtcGxhdGVzIGZvciBhY3Rpb25zIGFuZCBkZXNjcmlwdGlvbiBwYW5lbHMgICovXHJcbiAgICBASW5wdXQoKSBhY3Rpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG4gICAgQElucHV0KCkgZGVzY3JpcHRpb25QYW5lbFRlbXBsYXRlczogS2FuYmFuQ29sdW1uVGVtcGxhdGVbXSAgPSBudWxsO1xyXG5cclxuICAgIC8vIHN0eWxlc1xyXG4gICAgQElucHV0KCkgY29sdW1uV2lkdGg6IHN0cmluZztcclxuXHJcbiAgICAvLyBrYW5iYW4gdHlwZVxyXG4gICAgQElucHV0KCkgaXRlbVR5cGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBzdWJoZWFkZXJcclxuICAgIEBJbnB1dCgpIHN1YkhlYWRlcjogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdnZWRJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgbm9EcmFnZ2VkSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8S2FuYmFuSXRlbT4oKTtcclxuICAgIEBPdXRwdXQoKSBvbmNsaWNrSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xyXG4gICAgQE91dHB1dCgpIG9uZGJsY2xpY2tJdGVtID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxLYW5iYW5JdGVtW10+KCk7XHJcbiAgICBAT3V0cHV0KCkgb25Db2x1bW5FeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPEthbmJhbkNvbHVtbj4oKTtcclxuXHJcbiAgICBzZWxlY3RlZEl0ZW1zOiBLYW5iYW5JdGVtIFtdID0gW107XHJcbiAgICBkcmFnU3RhcnRlZENvbHVtbjogS2FuYmFuQ29sdW1uID0gbnVsbDtcclxuICAgIG1vYmlsZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlRGV0ZWN0b3I6IERldmljZURldGVjdG9yU2VydmljZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZSA9IGRldmljZURldGVjdG9yLmlzTW9iaWxlKCkgfHwgZGV2aWNlRGV0ZWN0b3IuaXNUYWJsZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtVGVtcGxhdGUoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvblBhbmVsVGVtcGxhdGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLml0ZW1UZW1wbGF0ZXMuZmluZChpID0+IGkuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGVsZW0pIHsgcmV0dXJuIGVsZW0udGVtcGxhdGU7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbVRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGlvblBhbmVsKGlkOiBzdHJpbmcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25QYW5lbFRlbXBsYXRlcyA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuYWN0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERlc2NyaXB0aW9uUGFuZWwoaWQ6IHN0cmluZyk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmRlc2NyaXB0aW9uUGFuZWxUZW1wbGF0ZXMuZmluZChkID0+IGQuaWQgPT09IGlkKTtcclxuICAgICAgICByZXR1cm4gZWxlbSA/IGVsZW0udGVtcGxhdGUgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcnRpY2FsU2Nyb2xsU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyBoZWlnaHQ6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGJvYXJkU3R5bGUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaGFzVmVydGljYWxTY3JvbGwpID8geyAnbWluLWhlaWdodCc6IHRoaXMuaGVpZ2h0Q29udGFpbmVyfSA6IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbHVtblN0eWxlKGNvbGxhcHNlZDogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbHVtbldpZHRoICYmICFjb2xsYXBzZWQpID8geyBtaW5XaWR0aDogdGhpcy5jb2x1bW5XaWR0aH0gOiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5FeHBhbmQoY29sdW1uOiBLYW5iYW5Db2x1bW4pOiBhbnkge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQ29sdW1uRXhwYW5kLmVtaXQoY29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2x1bW5Db2xsYXBzZShjb2x1bW46IEthbmJhbkNvbHVtbik6IHZvaWQge1xyXG4gICAgICAgIGNvbHVtbi5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERyYWdTdGFydGVkQ29sdW1uKGNvbDogS2FuYmFuQ29sdW1uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IGNvbDtcclxuICAgIH1cclxuXHJcbiAgICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4sIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ1N0YXJ0ZWRDb2x1bW4uZGlzYWJsZWREcm9wIHx8ICF0aGlzLmRyYWdTdGFydGVkQ29sdW1uLmRpc2FibGVkRHJvcC5zb21lKGlkID0+IGlkID09PSBjb2x1bW5JZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1UeXBlID09PSAnY3VzdG9tJyAmJiAhZXZlbnQuaXRlbS5kYXRhLmRhdGEuaXNFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREcm9wcGVkSXRlbShldmVudC5pdGVtLmRhdGEsIGNvbHVtbklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EcmFnZ2VkSXRlbS5lbWl0KGV2ZW50Lml0ZW0uZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVtaXREcm9wcGVkSXRlbShkYXRhOiBhbnksIGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkYXRhLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2VkSXRlbS5lbWl0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSXRlbShpdGVtOiBLYW5iYW5JdGVtLCBjb2x1bW5JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgaXRlbS5jb2x1bW5JZCA9IGNvbHVtbklkO1xyXG4gICAgICAgIHRoaXMub25jbGlja0l0ZW0uZW1pdChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG9yIHJlbW92ZSBlbGVtZW50cyB0byBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlzZWxlY3QpIHsgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGJsY2xpY2tJdGVtKGl0ZW06IEthbmJhbkl0ZW0sIGNvbHVtbklkOiBzdHJpbmcpIHtcclxuICAgICAgICBpdGVtLmNvbHVtbklkID0gY29sdW1uSWQ7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrSXRlbS5lbWl0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSXRlbVNlbGVjdGVkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLnNvbWUoZWxlbSA9PiBlbGVtLmlkID09PSBpZCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInJvb3RcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiIFtuZ1N0eWxlXT1cImJvYXJkU3R5bGUoKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb2x1bW5zXCIgY2RrRHJvcExpc3RHcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGJvYXJkLmNvbHVtbnNcIiBbbmdTdHlsZV09XCJjb2x1bW5TdHlsZShjb2x1bW4uY29sbGFwc2VkKVwiIFtuZ0NsYXNzXT1cImNvbHVtbi5jbGFzc1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5jb2xsYXBzZWRdPVwiY29sdW1uLmNvbGxhcHNlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDwhLS0gY29sbGFwc2VkIC0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29sdW1uLmNvbGxhcHNlZFwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWRcIiAoY2xpY2spPVwiY29sdW1uRXhwYW5kKGNvbHVtbilcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBzdHlsZT1cInBhZGRpbmc6IDhweDtcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImV4cGFuZFwiIGNtYWNzVG9vbHRpcFBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXAgY21hY3NUb29sdGlwVGl0bGU9XCJFeHBhbmRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtRXhwYW5kXCIgPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZSBjb2x1bW4taGVhZGVyLWNvbGxhcHNlZC1saW5lLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICBbbmdJZl09XCJjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29sdW1uSGVhZGVyQ29sbGFwc2VkVGVtcGxhdGU7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFjb2x1bW5IZWFkZXJDb2xsYXBzZWRUZW1wbGF0ZVwiIGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY29sdW1uLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlci1jb2xsYXBzZWQtbGluZSBjb2x1bW4taGVhZGVyLWNvbGxhcHNlZC1saW5lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gZW5kIGNvbGxhcHNlZCAtLT5cclxuICAgICAgICAgICAgPCEtLSBjb2x1bW4gaGVhZGVyIC0tPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIGNsYXNzPVwiY29sdW1uLWhlYWRlci10ZW1wbGF0ZVwiIFtuZ0lmXT1cImNvbHVtbkhlYWRlclRlbXBsYXRlXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb2x1bW5IZWFkZXJUZW1wbGF0ZTsgY29udGV4dDogeyBjb2x1bW46IGNvbHVtbn1cIiA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgbnotcm93IGNsYXNzPVwiY29sdW1uLWhlYWRlclwiICpuZ0lmPVwiIWNvbHVtbkhlYWRlclRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tdGl0bGVcIj57e2NvbHVtbi5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbHVtbi10aXRsZS1pdGVtc1wiPnt7Y29sdW1uLml0ZW1zLmxlbmd0aH19IEl0ZW1zPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjZcIiBjbGFzcz1cImhlYWRlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd1Nocmlua1wiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiY29sbGFwc2VcIiBjbWFjc1Rvb2x0aXBQbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwIGNtYWNzVG9vbHRpcFRpdGxlPVwiY29sbGFwc2VcIiBjbWFjcy1idXR0b24gY2xhc3M9XCJjb2x1bW4tc2hyaW5rXCIgZ2hvc3QgKGNsaWNrKT1cImNvbHVtbkNvbGxhcHNlKGNvbHVtbilcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1Db2xsYXBzZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sdW1uLWhlYWRlclwiID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXRpdGxlXCI+e3tjb2x1bW4ubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb2x1bW4tdGl0bGUtaXRlbXNcIj57e2NvbHVtbi5pdGVtcy5sZW5ndGh9fSBJdGVtczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8IS0tIGVuZCBoZWFkZXIgLS0+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2xhc3M9XCJjb2x1bW4tYWN0aW9uLXBhbmVsXCIgW25nSWZdPVwic3ViSGVhZGVyXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdWJIZWFkZXI7IGNvbnRleHQ6IHsgY29sdW1uOiBjb2x1bW59XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2xhc3M9XCJjb2x1bW4tYWN0aW9uLXBhbmVsXCIgW25nSWZdPVwiZ2V0QWN0aW9uUGFuZWwoY29sdW1uLmlkKVwiICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ2V0QWN0aW9uUGFuZWwoY29sdW1uLmlkKTsgY29udGV4dDogeyBjb2x1bW46IGNvbHVtbn1cIiA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YXNrcy1jb250YWluZXJcIiBjbGFzcz1cInRhc2tzLWNvbnRhaW5lclwiIGNka0Ryb3BMaXN0IFtjZGtEcm9wTGlzdERhdGFdPVwiY29sdW1uLml0ZW1zXCJcclxuICAgICAgICAgICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudCwgY29sdW1uLmlkKVwiIFtuZ1N0eWxlXT1cInZlcnRpY2FsU2Nyb2xsU3R5bGUoKVwiPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibW9iaWxlOyBlbHNlIGRlZmF1bHRUUExcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29sdW1uLml0ZW1zXCJcclxuICAgICAgICAgICAgICAgICAgICAgY2RrRHJhZ1xyXG4gICAgICAgICAgICAgICAgICAgICBbY2RrRHJhZ0RhdGFdPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWlzSXRlbVNlbGVjdGVkKGl0ZW0uaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGNka0RyYWdTdGFydGVkKT1cInNldERyYWdTdGFydGVkQ29sdW1uKGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAodGFwKT1cImNsaWNrSXRlbShpdGVtLCBjb2x1bW4uaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGRvdWJsZXRhcCk9XCJkYmxjbGlja0l0ZW0oaXRlbSwgY29sdW1uLmlkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy50YXNrLXNlbGVjdGVkXT1cImlzSXRlbVNlbGVjdGVkKGl0ZW0uaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJnZXRJdGVtVGVtcGxhdGUoY29sdW1uLmlkKTsgY29udGV4dDoge2l0ZW06IGl0ZW0sIGNvbHVtbklkOiBjb2x1bW4uaWR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VFBMPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb2x1bW4uaXRlbXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjZGtEcmFnXHJcbiAgICAgICAgICAgICAgICAgICAgIFtjZGtEcmFnRGF0YV09XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgW2Nka0RyYWdEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgKGNka0RyYWdTdGFydGVkKT1cInNldERyYWdTdGFydGVkQ29sdW1uKGNvbHVtbilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tJdGVtKGl0ZW0sIGNvbHVtbi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwiZGJsY2xpY2tJdGVtKGl0ZW0sIGNvbHVtbi5pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbY2xhc3MudGFzay1zZWxlY3RlZF09XCJpc0l0ZW1TZWxlY3RlZChpdGVtLmlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZ2V0SXRlbVRlbXBsYXRlKGNvbHVtbi5pZCk7IGNvbnRleHQ6IHtpdGVtOiBpdGVtLCBjb2x1bW5JZDogY29sdW1uLmlkfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgY2xhc3M9XCJjb2x1bW4tZGVzY3JpcHRpb24tcGFuZWxcIiBbbmdJZl09XCJnZXREZXNjcmlwdGlvblBhbmVsKGNvbHVtbi5pZClcIiAqbmdUZW1wbGF0ZU91dGxldD1cImdldERlc2NyaXB0aW9uUGFuZWwoY29sdW1uLmlkKTsgY29udGV4dDogeyBjb2x1bW46IGNvbHVtbn1cIiA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuIl19