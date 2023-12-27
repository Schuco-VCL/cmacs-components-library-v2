import { EventEmitter, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsEditorComponent implements OnDestroy, OnInit {
    private i18n;
    private cdr;
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    private destroy$;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsEditorComponent, "cmacs-editor", ["cmacsEditor"], { "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "statusbar": { "alias": "statusbar"; "required": false; }; "resize": { "alias": "resize"; "required": false; }; "toolbarmobile": { "alias": "toolbarmobile"; "required": false; }; "toolbar": { "alias": "toolbar"; "required": false; }; "tinyMceSettings": { "alias": "tinyMceSettings"; "required": false; }; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-editor.component.d.ts.map