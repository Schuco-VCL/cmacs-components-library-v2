import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CmacsOptionComponent implements OnChanges {
    changes: Subject<unknown>;
    template: TemplateRef<void>;
    nzLabel: string;
    divider: string;
    extendedData: string;
    nzValue: any;
    visible: any;
    nzDisabled: boolean;
    nzCustomContent: boolean;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOptionComponent, "cmacs-option", ["cmacsOption"], { "nzLabel": { "alias": "label"; "required": false; }; "divider": { "alias": "divider"; "required": false; }; "extendedData": { "alias": "extendedData"; "required": false; }; "nzValue": { "alias": "value"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "nzDisabled": { "alias": "disabled"; "required": false; }; "nzCustomContent": { "alias": "customContent"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-option.component.d.ts.map