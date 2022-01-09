import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsUserDropdownExternalListComponent {
    private cdr;
    _data: any[];
    listDividers: any[];
    origin: any[];
    removedOption: EventEmitter<any>;
    selectedValue: any;
    set data(value: any[]);
    get data(): any[];
    constructor(cdr: ChangeDetectorRef);
    operateData(values: any[]): any[];
    getInitials(name: any): any;
    getSafeImage(picture: any): any;
    onError(elem: any): void;
    removeOption(elem: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsUserDropdownExternalListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsUserDropdownExternalListComponent, "cmacs-user-dropdown-external-list", ["cmacsUserDropdownExternalList"], { "data": "data"; }, { "removedOption": "removedOption"; }, never, never>;
}
//# sourceMappingURL=cmacs-user-dropdown-external-list.component.d.ts.map