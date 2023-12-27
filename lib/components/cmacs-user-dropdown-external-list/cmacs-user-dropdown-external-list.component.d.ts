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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsUserDropdownExternalListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsUserDropdownExternalListComponent, "cmacs-user-dropdown-external-list", ["cmacsUserDropdownExternalList"], { "data": { "alias": "data"; "required": false; }; }, { "removedOption": "removedOption"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-user-dropdown-external-list.component.d.ts.map