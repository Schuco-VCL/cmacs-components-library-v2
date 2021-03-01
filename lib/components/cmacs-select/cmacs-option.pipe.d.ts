import { PipeTransform } from '@angular/core';
import { CmacsOptionGroupComponent } from './cmacs-option-group.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import * as i0 from "@angular/core";
export declare type TFilterOption = (input: string, option: CmacsOptionComponent) => boolean;
export declare class NzFilterOptionPipe implements PipeTransform {
    transform(options: CmacsOptionComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): CmacsOptionComponent[];
    static ɵfac: i0.ɵɵFactoryDef<NzFilterOptionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzFilterOptionPipe, "nzFilterOption">;
}
export declare class NzFilterGroupOptionPipe implements PipeTransform {
    transform(groups: CmacsOptionGroupComponent[], searchValue: string, filterOption: TFilterOption, serverSearch: boolean): CmacsOptionGroupComponent[];
    static ɵfac: i0.ɵɵFactoryDef<NzFilterGroupOptionPipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NzFilterGroupOptionPipe, "nzFilterGroupOption">;
}
export declare function defaultFilterOption(searchValue: string, option: CmacsOptionComponent): boolean;
//# sourceMappingURL=cmacs-option.pipe.d.ts.map