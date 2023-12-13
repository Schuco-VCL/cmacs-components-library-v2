import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsCompactTableAttachmentComponent implements OnInit, OnChanges {
    conf: any;
    ctaDropdownOption: string[];
    onChangeAttachments: EventEmitter<string[]>;
    onclickChooseFile: EventEmitter<any>;
    inLineEdit: boolean;
    link: string;
    disabledEmbedLink: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    deleteOption(option: string): void;
    embedLink(): void;
    _onclickChooseFile(): void;
    validateUrl(link: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCompactTableAttachmentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCompactTableAttachmentComponent, "cmacs-compact-table-attachment", never, { "conf": { "alias": "conf"; "required": false; }; "ctaDropdownOption": { "alias": "ctaDropdownOption"; "required": false; }; "inLineEdit": { "alias": "inLineEdit"; "required": false; }; }, { "onChangeAttachments": "onChangeAttachments"; "onclickChooseFile": "onclickChooseFile"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-compact-table-attachment.component.d.ts.map