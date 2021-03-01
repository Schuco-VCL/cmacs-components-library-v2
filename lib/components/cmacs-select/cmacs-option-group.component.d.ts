import { QueryList, TemplateRef } from '@angular/core';
import { CmacsOptionComponent } from './cmacs-option.component';
import * as i0 from "@angular/core";
export declare class CmacsOptionGroupComponent {
    isLabelString: boolean;
    label: string | TemplateRef<void>;
    listOfNzOptionComponent: QueryList<CmacsOptionComponent>;
    set nzLabel(value: string | TemplateRef<void>);
    get nzLabel(): string | TemplateRef<void>;
    static ɵfac: i0.ɵɵFactoryDef<CmacsOptionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsOptionGroupComponent, "nz-option-group", ["nzOptionGroup"], { "nzLabel": "nzLabel"; }, {}, ["listOfNzOptionComponent"], ["*"]>;
}
//# sourceMappingURL=cmacs-option-group.component.d.ts.map