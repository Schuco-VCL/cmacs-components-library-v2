import { EventEmitter, OnInit } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import { EditColumnAction, Field } from '../../../core/interfaces/grid-config';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableColumnMoreComponent implements OnInit {
    isAdvancedConfiguration: boolean;
    items: any;
    field: Field;
    onFieldChanged: EventEmitter<EditColumnAction>;
    constructor();
    ngOnInit(): void;
    fieldChanged(value: ColumnMenuType): void;
    private getTemplateType;
    isSelected(value: ColumnMenuType, templateType: TemplateType): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableColumnMoreComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableColumnMoreComponent, "cmacs-compact-table-column-more", never, { "items": "items"; "field": "field"; }, { "onFieldChanged": "onFieldChanged"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table-column-more.component.d.ts.map