import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/templateType.enum';
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCompactTableColumnTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCompactTableColumnTooltipComponent, "cmacs-compact-table-column-tooltip", never, { "field": { "alias": "field"; "required": false; }; "items": { "alias": "items"; "required": false; }; }, { "onFieldChanged": "onFieldChanged"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-compact-table-column-tooltip.component.d.ts.map