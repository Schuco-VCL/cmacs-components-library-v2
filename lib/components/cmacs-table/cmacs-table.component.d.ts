import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, AfterViewInit, TemplateRef } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ExportAsService } from 'ngx-export-as';
import { GridConfig, Field } from '../core/interfaces/grid-config';
import { GridExpConfig } from '../core/interfaces/grid-exp-config';
import { ExcelService } from '../core/services/excel.service';
import { CookieService } from "ngx-cookie-service";
import 'moment/locale/en-ie';
import { UtilService } from '../core/services/util.service';
import { NzSizeMDSType } from 'ng-zorro-antd/core/types';
import { CmacsContextMenuService } from '../cmacs-dropdown/context-menu.service';
import * as i0 from "@angular/core";
export declare class CmacsTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private i18n;
    private exportAsService;
    private cmacsContextMenuService;
    private excelService;
    private utilService;
    private datePipe;
    private cookies;
    locale: any;
    headerBottomStyle: {};
    private destroy$;
    size: NzSizeMDSType;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    pageSizeOptions: number[];
    virtualScroll: boolean;
    virtualItemSize: number;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    total: number;
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    pageIndex: number;
    pageSize: number;
    data: any[];
    config: GridConfig;
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
    printLandscape: boolean;
    wrapLines: boolean;
    frontPagination: boolean;
    templateMode: boolean;
    bordered: boolean;
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
    rateCount: number;
    multiSelect: boolean;
    sortChange: EventEmitter<any>;
    contextmenu: string | TemplateRef<void>;
    dropdown: any;
    selected: boolean;
    defaultSortOrder: any;
    checkboxCache: CheckboxSelect[];
    isIndeterminate: boolean;
    allChecked: boolean;
    editId: string | null;
    property: string | null;
    rowOnEdition: number;
    tapCount: number;
    lastIdxSelected: any;
    inputElement: ElementRef;
    inputNumberElement: ElementRef;
    datePickerElement: ElementRef;
    selectElement: ElementRef;
    boolElement: ElementRef;
    contextMenu($event: MouseEvent, template: any): void;
    startEdit(id: string, property: string, event: MouseEvent): void;
    sort($event: any, fieldProperty: string): void;
    getHeaderMaxWidth(field: Field): "calc(100% - 15px)" | "100%";
    handleClick(e: Event): void;
    childOf(node: any, ancestor: any): boolean;
    endEditMode($event: KeyboardEvent, index: number): void;
    endEditModeNgModel(index: number): void;
    getIndex(id: any): number;
    order: number;
    updateCheckboxCache(): void;
    getMaxWidth(): "100%" | "calc(100% - 20px)";
    onButtonClick(field: any): void;
    onCheckboxChange($event: any, data: any): void;
    refreshCheckboxState(oninit?: boolean): void;
    checkCheckboxState(): CheckboxSelect[];
    ngModelChange(index: number): void;
    onRateChange(count: number, data: any): void;
    onRateClick(event: any): void;
    getFields(): Field[];
    onCheckboxAllChange(status: boolean): void;
    getLabel(data: any, field: Field): string;
    isSelect(field: Field): boolean;
    isReadOnly(field: Field): boolean;
    isBoolean(value: any): boolean;
    isObject(value: any): boolean;
    isDate(field: Field): boolean;
    isString(field: Field): boolean;
    isNumber(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    isCeldTypeButton(field: Field): boolean;
    isCeldTypeTag(field: Field): boolean;
    isCeldTypeTemplateRef(field: Field): boolean;
    isUndefined(value: any): boolean;
    isRowSelected(data: any): boolean;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, exportAsService: ExportAsService, cmacsContextMenuService: CmacsContextMenuService, excelService: ExcelService, utilService: UtilService, datePipe: DatePipe, cookies: CookieService);
    ngAfterViewInit(): void;
    getIndexCookie(): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    exportToPng(fileName: string): void;
    exportToExcel(fileName: string): void;
    exportToPdf(config: any): void;
    ngOnDestroy(): void;
    tapHandler($event: any, data: any): void;
    clicks: number;
    clickRow(event: MouseEvent, data: any): void;
    preventDefault($event: MouseEvent): void;
    selectRow(event: MouseEvent, data: any): void;
    removeSelection(data: any): void;
    selectMultiple(currentIdx: any): void;
    dblClickRow(data: any): void;
    transformDate(date: any): string;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTableComponent, "cmacs-table", ["cmacsTable"], { "size": "size"; "showTotal": "showTotal"; "pageSizeOptions": "pageSizeOptions"; "virtualScroll": "virtualScroll"; "virtualItemSize": "virtualItemSize"; "loadingDelay": "loadingDelay"; "loadingIndicator": "loadingIndicator"; "total": "total"; "title": "title"; "footer": "footer"; "noResult": "noResult"; "widthConfig": "widthConfig"; "pageIndex": "pageIndex"; "pageSize": "pageSize"; "data": "data"; "config": "config"; "fieldId": "fieldId"; "gridID": "gridID"; "paginationPosition": "paginationPosition"; "scroll": "scroll"; "printLandscape": "printLandscape"; "wrapLines": "wrapLines"; "frontPagination": "frontPagination"; "templateMode": "templateMode"; "bordered": "bordered"; "showPagination": "showPagination"; "loading": "loading"; "showSizeChanger": "showSizeChanger"; "hideOnSinglePage": "hideOnSinglePage"; "showQuickJumper": "showQuickJumper"; "simple": "simple"; "checkboxSelect": "checkboxSelect"; "inLineEdit": "inLineEdit"; "dataTable": "dataTable"; "showRate": "showRate"; "exportEvent": "exportEvent"; "rateCount": "rateCount"; "multiSelect": "multiSelect"; "contextmenu": "contextmenu"; }, { "configChange": "configChange"; "buttonClick": "buttonClick"; "rateChange": "rateChange"; "selectionChange": "selectionChange"; "ondlclickRow": "ondlclickRow"; "onclickRow": "onclickRow"; "onedit": "onedit"; "sortChange": "sortChange"; }, never, never>;
}
export interface CheckboxSelect {
    data: any;
    selected: boolean | number;
    order?: number;
}
//# sourceMappingURL=cmacs-table.component.d.ts.map