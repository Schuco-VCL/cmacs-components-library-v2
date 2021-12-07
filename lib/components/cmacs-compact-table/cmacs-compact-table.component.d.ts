import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, AfterViewInit, TemplateRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import 'jspdf-autotable';
import { GridConfig, Field } from '../core/interfaces/grid-config';
import { GridExpConfig } from '../core/interfaces/grid-exp-config';
import { ExcelService } from '../core/services/excel.service';
import { CookieService } from 'ngx-cookie-service';
import { CheckboxSelect } from "../cmacs-table/cmacs-table.component";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { CmacsInputNumberComponent } from "../cmacs-input-number/cmacs-input-number.component";
import { UtilService } from '../core/services/util.service';
import 'moment/locale/en-ie';
import { CmacsDateTimePickerComponent } from '../cmacs-datetime-picker/cmacs-datetime-picker.component';
import { SelectionModel } from '@angular/cdk/collections';
import { NzSizeMDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { CmacsContextMenuService } from '../cmacs-dropdown/context-menu.service';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private i18n;
    private excelService;
    private datePipe;
    private nzDropdownService;
    private cookies;
    private utilService;
    locale: any;
    headerBottomStyle: {};
    private destroy$;
    nzTableComponent: NzTableComponent;
    selection: SelectionModel<any>;
    size: NzSizeMDSType;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    pageSizeOptions: number[];
    virtualScroll: boolean;
    exclusiveSelect: boolean;
    logs: boolean;
    expandable: boolean;
    smartTable: boolean;
    draggable: boolean;
    virtualItemSize: number;
    expandAll: boolean;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    total: number;
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    pageIndex: number;
    pageSize: number;
    actionColumnWidth: string;
    wrapLines: boolean;
    data: any[];
    config: GridConfig;
    use12Hours: boolean;
    configChange: EventEmitter<GridConfig>;
    fieldId: string;
    gridID: string;
    paginationPosition: 'top' | 'bottom' | 'both';
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    nzItemRender: TemplateRef<{
        $implicit: 'page' | 'prev' | 'next';
        page: number;
    }>;
    frontPagination: boolean;
    templateMode: boolean;
    bordered: boolean;
    centerTable: boolean;
    showPagination: boolean;
    loading: boolean;
    showSizeChanger: boolean;
    hideOnSinglePage: boolean;
    showQuickJumper: boolean;
    simple: boolean;
    checkboxSelect: boolean;
    inLineEdit: boolean;
    dataTable: boolean;
    showRate: boolean;
    exportEvent: EventEmitter<GridExpConfig>;
    buttonClick: EventEmitter<any>;
    rateChange: EventEmitter<any>;
    selectionChange: EventEmitter<any[]>;
    ondlclickRow: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    onedit: EventEmitter<any>;
    onRowExpandCollapse: EventEmitter<any>;
    ondrop: EventEmitter<any>;
    rateCount: number;
    multiSelect: boolean;
    sortChange: EventEmitter<any>;
    filterChange: EventEmitter<any>;
    onrowdeleted: EventEmitter<any>;
    onrowadded: EventEmitter<any>;
    onresize: EventEmitter<any>;
    oncontextmenu: EventEmitter<any>;
    extra: string | TemplateRef<void>;
    contextmenu: string | TemplateRef<void>;
    indentSize: number;
    virtualMaxBufferPx: number;
    dropdown: any;
    selected: boolean;
    formatter: (value: number) => any;
    parser: (value: string) => any;
    defaultSortOrder: any;
    checkboxCache: CheckboxSelect[];
    isIndeterminate: boolean;
    allChecked: boolean;
    editId: string | null;
    property: string | null;
    rowOnEdition: number;
    nodeOnEdition: any;
    mapOfExpandedData: {
        [key: string]: any[];
    };
    defaultTimeValue: Date;
    lastIdxSelected: any;
    fieldID: any;
    inputElement: ElementRef;
    inputNumberElement: ElementRef;
    inputNumberComponent: CmacsInputNumberComponent;
    datePickerElement: ElementRef;
    dateTimePickerElement: ElementRef;
    selectElement: ElementRef;
    boolElement: ElementRef;
    dateTimePicker: CmacsDateTimePickerComponent;
    oncontextmenuevt($event: any, item: any): void;
    onResize({ width }: NzResizeEvent, col: string): void;
    preventDefault($event: MouseEvent): void;
    contextMenu($event: MouseEvent, template: any, item?: any): void;
    validate(data: any, field: Field): boolean;
    addRow(idx: number, $event?: any): void;
    drop(event: CdkDragDrop<string[]>): void;
    editionOpTriggered: boolean;
    deleteRow(idx: number, $event?: any): void;
    startEdit(id: string, property: string, event: MouseEvent): void;
    focusSelect(elem: any): void;
    sort($event: any, fieldProperty: string): void;
    filter($event: any, fieldProperty: string): void;
    getHeaderMaxWidth(field: Field): "calc(100% - 15px)" | "100%";
    handleMouseDown(e: Event): void;
    getCustomPadding(item: any, i: number): number;
    childOf(node: any, ancestor: any): boolean;
    endEditMode($event: KeyboardEvent, index: number, data?: any): void;
    endEditModeNgModel(index: number, data?: any, property?: any, field?: Field): void;
    ngModelChange(index: number, data?: any): void;
    getIndex(id: any): number;
    order: number;
    updateCheckboxCache(): void;
    updateCheckboxCacheTreeData(): void;
    convertExpandTreeToList(item: any, plainList: any[]): void;
    onButtonClick(field: any): void;
    onCheckboxChange($event: any, data: any): void;
    refreshCheckboxState(oninit?: boolean): void;
    checkCheckboxState(): CheckboxSelect[];
    onRateChange(count: number, data: any): void;
    onRateClick(event: any): void;
    getFields(): Field[];
    onCheckboxAllChange(status: boolean): void;
    getLabel(data: any, field: Field): string;
    isSelect(field: Field): boolean;
    isString(field: Field): boolean;
    isReadOnly(field: Field): boolean;
    isNumber(field: Field): boolean;
    isBoolean(field: any): boolean;
    isObject(value: any): boolean;
    isDate(field: Field): boolean;
    isTime(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    isCeldTypeButton(field: Field): boolean;
    isCeldTypeTag(field: Field): boolean;
    isCeldTypeTemplateRef(field: Field): boolean;
    isUndefined(value: any): boolean;
    isRowSelected(data: any): boolean;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, excelService: ExcelService, datePipe: DatePipe, nzDropdownService: CmacsContextMenuService, cookies: CookieService, utilService: UtilService);
    ngAfterViewInit(): void;
    getIndexCookie(): boolean;
    setFieldsDefault(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    exportTreePdf(fileName: string): void;
    exportTreeToPdfRec(rows: any, data: any, offSetMargin?: number): void;
    convertTreeToList(root: any): any[];
    visitNode(node: any, hashMap: any, array: any[]): void;
    ExpandCollapse(array: any[], data: any, $event: boolean): void;
    collapseChildren(array: any[], data: any, $event: boolean): void;
    onCheckboxTreeChange($event: any, item: any, subtree?: any): void;
    updateTreeCheckboxes($event: boolean, array: any): void;
    refreshSubTreeCheckboxes(subtree: any): void;
    getNode(key: any): CheckboxSelect;
    exportToPng(fileName: string): void;
    exportToExcel(fileName: string): void;
    exportTreeExcel(fileName: string): void;
    exportTreeExcelRec(data: any, dataToExport: any): void;
    exportToPdf(config: any): void;
    ngOnDestroy(): void;
    clicks: number;
    clickRow(event: MouseEvent, data: any): void;
    selectRow(event: MouseEvent, data: any): void;
    removeSelection(data: any): void;
    selectMultiple(currentIdx: any): void;
    dblClickRow(data: any): void;
    tapCount: number;
    tapHandler($event: any, data: any): void;
    clickBooleanCell(data: any, id: any, field: Field, index: number, $event: null): void;
    emitOnEditEvent(): void;
    getClassMap(field: Field): {
        [x: string]: number | boolean;
        "cmacs-compact-table-logs-header-th": boolean;
        "cmacs-compact-table-logs-header-th-font": boolean;
    };
    getCustomClass(field: Field): {
        [x: string]: boolean;
    };
    getMaxWidth(field: Field, item: any, i: number): string;
    getMaxWidthFieldViewMode(field: Field, i: number): "18px" | "0px";
    getStickyWidth(position: any): string;
    getStickyWidthRight(position: any): string;
    getTableComponent(): NzTableComponent<any>;
    transformDate(date: any): string;
    selectTreeSingle(item: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableComponent, "cmacs-compact-table", ["cmacsCompactTable"], { "size": "size"; "showTotal": "showTotal"; "pageSizeOptions": "pageSizeOptions"; "virtualScroll": "virtualScroll"; "exclusiveSelect": "exclusiveSelect"; "logs": "logs"; "expandable": "expandable"; "smartTable": "smartTable"; "draggable": "draggable"; "virtualItemSize": "virtualItemSize"; "expandAll": "expandAll"; "loadingDelay": "loadingDelay"; "loadingIndicator": "loadingIndicator"; "total": "total"; "title": "title"; "footer": "footer"; "noResult": "noResult"; "widthConfig": "widthConfig"; "pageIndex": "pageIndex"; "pageSize": "pageSize"; "actionColumnWidth": "actionColumnWidth"; "wrapLines": "wrapLines"; "data": "data"; "config": "config"; "use12Hours": "use12Hours"; "fieldId": "fieldId"; "gridID": "gridID"; "paginationPosition": "paginationPosition"; "scroll": "scroll"; "frontPagination": "frontPagination"; "templateMode": "templateMode"; "bordered": "bordered"; "centerTable": "centerTable"; "showPagination": "showPagination"; "loading": "loading"; "showSizeChanger": "showSizeChanger"; "hideOnSinglePage": "hideOnSinglePage"; "showQuickJumper": "showQuickJumper"; "simple": "simple"; "checkboxSelect": "checkboxSelect"; "inLineEdit": "inLineEdit"; "dataTable": "dataTable"; "showRate": "showRate"; "exportEvent": "exportEvent"; "rateCount": "rateCount"; "multiSelect": "multiSelect"; "extra": "extra"; "contextmenu": "contextmenu"; "indentSize": "indentSize"; "virtualMaxBufferPx": "virtualMaxBufferPx"; }, { "configChange": "configChange"; "buttonClick": "buttonClick"; "rateChange": "rateChange"; "selectionChange": "selectionChange"; "ondlclickRow": "ondlclickRow"; "onclickRow": "onclickRow"; "onedit": "onedit"; "onRowExpandCollapse": "onRowExpandCollapse"; "ondrop": "ondrop"; "sortChange": "sortChange"; "filterChange": "filterChange"; "onrowdeleted": "onrowdeleted"; "onrowadded": "onrowadded"; "onresize": "onresize"; "oncontextmenu": "oncontextmenu"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table.component.d.ts.map