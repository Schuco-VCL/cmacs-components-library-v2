import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import { EditColumnAction, Field } from '../../../core/interfaces/grid-config';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableColumnTooltipComponent implements OnInit, OnChanges {
    isAdvancedConfiguration: boolean;
    field: Field;
    items: any;
    onFieldChanged: EventEmitter<EditColumnAction>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateDisplay(): void;
    private getTemplateType;
    fieldChanged(value: ColumnMenuType): void;
    isSelected(value: ColumnMenuType, templateType: TemplateType): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableColumnTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableColumnTooltipComponent, "cmacs-compact-table-column-tooltip", never, { "field": "field"; "items": "items"; }, { "onFieldChanged": "onFieldChanged"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table-column-tooltip.component.d.ts.map