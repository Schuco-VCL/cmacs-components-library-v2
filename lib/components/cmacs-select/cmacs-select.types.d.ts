import { TemplateRef } from "@angular/core";
export interface CmacsSelectOptionInterface {
    label: string | number | null | TemplateRef<any>;
    value: any | null;
    disabled?: boolean;
    hide?: boolean;
    groupLabel?: string | number | TemplateRef<any> | null;
}
export type CmacsSelectModeType = 'default' | 'multiple' | 'tags' | 'tagsSingleSelect';
export type CmacsDropdownPositionType = 'top' | 'center' | 'bottom';
//# sourceMappingURL=cmacs-select.types.d.ts.map