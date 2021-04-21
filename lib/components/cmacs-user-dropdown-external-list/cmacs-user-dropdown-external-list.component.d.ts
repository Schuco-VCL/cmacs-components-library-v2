import { EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class CmacsUserDropdownExternalListComponent {
    private sanitizer;
    _data: any[];
    listDividers: any[];
    origin: any[];
    removedOption: EventEmitter<any>;
    selectedValue: any;
    set data(value: any[]);
    get data(): any[];
    constructor(sanitizer: DomSanitizer);
    operateData(values: any[]): any[];
    getInitials(name: any): any;
    getBackgroundImage(picture: any): import("@angular/platform-browser").SafeStyle;
    removeOption(elem: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsUserDropdownExternalListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsUserDropdownExternalListComponent, "cmacs-user-dropdown-external-list", ["cmacsUserDropdownExternalList"], { "data": "data"; }, { "removedOption": "removedOption"; }, never, never>;
}
//# sourceMappingURL=cmacs-user-dropdown-external-list.component.d.ts.map