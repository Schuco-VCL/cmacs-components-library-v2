import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Field } from '../../../core/interfaces/grid-config';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableColumnTooltipComponent implements OnInit, OnChanges {
    isAdvancedConfiguration: boolean;
    field: Field;
    items: any;
    onFieldChanged: EventEmitter<Field>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateDisplay(): void;
    onChange(value: any): void;
    fieldChanged(value: any): void;
    getItems(): any;
    getValidationRules(): any;
    getIcon(value: any): "iconUILarge-Calendar" | "iconArrowLarge-Chevron-Down" | "iconArrowLarge-Solid-UpDown" | "iconEditorLarge-Text" | "iconUILarge-Select-All" | "iconUILarge-Time" | "iconUILarge-Attached" | "iconUILarge-Preferences";
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableColumnTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableColumnTooltipComponent, "cmacs-compact-table-column-tooltip", never, { "field": "field"; "items": "items"; }, { "onFieldChanged": "onFieldChanged"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table-column-tooltip.component.d.ts.map