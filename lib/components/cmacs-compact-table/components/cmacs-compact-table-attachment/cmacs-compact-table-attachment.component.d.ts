import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableAttachmentComponent implements OnInit, OnChanges {
    conf: any;
    ctaDropdownOption: string[];
    onChangeAttachments: EventEmitter<string[]>;
    onclickChooseFile: EventEmitter<any>;
    link: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    deleteOption(option: string): void;
    embedLink(): void;
    _onclickChooseFile(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCompactTableAttachmentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCompactTableAttachmentComponent, "cmacs-compact-table-attachment", never, { "conf": "conf"; "ctaDropdownOption": "ctaDropdownOption"; }, { "onChangeAttachments": "onChangeAttachments"; "onclickChooseFile": "onclickChooseFile"; }, never, never>;
}
//# sourceMappingURL=cmacs-compact-table-attachment.component.d.ts.map