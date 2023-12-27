import { EventEmitter, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MoveableListItem } from "../cmacs-moveable-list/cmacs-moveable-list.component";
import { CookieService } from "ngx-cookie-service";
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsGridConfigurationModalComponent implements OnInit, OnChanges, OnDestroy {
    private cookies;
    private cdr;
    private i18n;
    visible: boolean;
    modalTitle: string;
    header: string;
    saveBtnLabel: string;
    cmacsStyle: {};
    gridID: string;
    data: any;
    visibleChange: EventEmitter<boolean>;
    dataChange: EventEmitter<any>;
    origin: any;
    private destroy$;
    constructor(cookies: CookieService, cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onDataChange($event: MoveableListItem[]): void;
    saveConfig(): void;
    getIndexCookie(): boolean;
    onVisibleChange($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsGridConfigurationModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsGridConfigurationModalComponent, "cmacs-grid-configuration-modal", ["cmacsGridConfigurationModal"], { "visible": { "alias": "visible"; "required": false; }; "modalTitle": { "alias": "modalTitle"; "required": false; }; "header": { "alias": "header"; "required": false; }; "saveBtnLabel": { "alias": "saveBtnLabel"; "required": false; }; "cmacsStyle": { "alias": "cmacsStyle"; "required": false; }; "gridID": { "alias": "gridID"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "visibleChange": "visibleChange"; "dataChange": "dataChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-grid-configuration-modal.component.d.ts.map