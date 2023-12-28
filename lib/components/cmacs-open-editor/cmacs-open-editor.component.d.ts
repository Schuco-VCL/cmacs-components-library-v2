import { EventEmitter, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as i0 from "@angular/core";
export declare class CmacsOpenEditorComponent implements OnDestroy, OnInit {
    private i18n;
    private cdr;
    showEditor: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    placeholder: string;
    statusbar: boolean;
    resize: boolean;
    skin: string;
    toolbarmobile: string[];
    toolbar: string[];
    tinyMceSettings: any;
    id: string;
    content: string;
    contentChange: EventEmitter<string>;
    private destroy$;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsOpenEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsOpenEditorComponent, "cmacs-open-editor", ["cmacsOpenEditor"], { "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "statusbar": { "alias": "statusbar"; "required": false; }; "resize": { "alias": "resize"; "required": false; }; "skin": { "alias": "skin"; "required": false; }; "toolbarmobile": { "alias": "toolbarmobile"; "required": false; }; "toolbar": { "alias": "toolbar"; "required": false; }; "tinyMceSettings": { "alias": "tinyMceSettings"; "required": false; }; "id": { "alias": "id"; "required": false; }; "content": { "alias": "content"; "required": false; }; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; "contentChange": "contentChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-open-editor.component.d.ts.map