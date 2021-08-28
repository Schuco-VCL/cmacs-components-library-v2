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
    static ɵfac: i0.ɵɵFactoryDef<CmacsOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsOptionComponent, "cmacs-option", ["cmacsOption"], { "nzLabel": "label"; "divider": "divider"; "extendedData": "extendedData"; "nzValue": "value"; "visible": "visible"; "nzDisabled": "disabled"; "nzCustomContent": "customContent"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=cmacs-option.component.d.ts.map