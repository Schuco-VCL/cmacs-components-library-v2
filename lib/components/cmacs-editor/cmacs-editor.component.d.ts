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
    static ɵfac: i0.ɵɵFactoryDef<CmacsEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsEditorComponent, "cmacs-editor", ["cmacsEditor"], { "disabled": "disabled"; "height": "height"; "statusbar": "statusbar"; "resize": "resize"; "toolbarmobile": "toolbarmobile"; "toolbar": "toolbar"; "tinyMceSettings": "tinyMceSettings"; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; }, never, never>;
}
//# sourceMappingURL=cmacs-editor.component.d.ts.map