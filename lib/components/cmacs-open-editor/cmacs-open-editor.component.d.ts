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
    static ɵfac: i0.ɵɵFactoryDef<CmacsOpenEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsOpenEditorComponent, "cmacs-open-editor", ["cmacsOpenEditor"], { "disabled": "disabled"; "height": "height"; "placeholder": "placeholder"; "statusbar": "statusbar"; "resize": "resize"; "toolbarmobile": "toolbarmobile"; "toolbar": "toolbar"; "tinyMceSettings": "tinyMceSettings"; "id": "id"; "content": "content"; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; "contentChange": "contentChange"; }, never, never>;
}
//# sourceMappingURL=cmacs-open-editor.component.d.ts.map