import { EventEmitter, OnInit } from '@angular/core';
import { ColumnMenuType } from '../../../core/enums/columnMenuType.enum';
import { TemplateType } from '../../../core/enums/TemplateType.enum';
import { EditColumnAction, Field } from '../../../core/interfaces/grid-config';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableColumnMoreComponent implements OnInit {
    isAdvancedConfiguration: boolean;
    selectedValidation: string;
    selectedFieldTemplate: string;
    validationRules: string[];
    inputType: number;
    inputValue1: any;
    inputValue2: any;
    typesList: any[];
    dropdownValues: string;
    labelSave: string;
    items: any;
    field: Field;
    onFieldChanged: EventEmitter<EditColumnAction>;
    constructor();
    ngOnInit(): void;
    fieldChanged(value: ColumnMenuType): void;
    getTemplateType(value: ColumnMenuType): TemplateType | null;
    getColumnType(value: string): ColumnMenuType | null;
    isSelected(value: ColumnMenuType, templateType: TemplateType): boolean;
    onChange(value: string): void;
    setAdvancedConfiguration(templateType: TemplateType): void;
    setValidationRules(value: TemplateType): void;
    onValidationChange(): void;
    onInputValueChange1(value: any): void;
    onDropdownValuesChanged(values: string): void;
    onDateRangeChanged(value: Date[]): void;
    onInputValueChange2(value: any): void;
    setFieldValidator(): void;
    onSettingSaved(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableColumnMoreComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableColumnMoreComponent, "cmacs-compact-table-column-more", never, { "labelSave": "labelSave"; "items": "items"; "field": "field"; }, { "onFieldChanged": "onFieldChanged"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table-column-more.component.d.ts.map