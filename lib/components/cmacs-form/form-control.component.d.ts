import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsFormDirective } from './form.directive';
import { NzFormControlStatusType, CmacsFormItemComponent } from './form-item.component';
import * as i0 from "@angular/core";
declare const iconTypeMap: {
    readonly error: "close-circle-fill";
    readonly validating: "loading";
    readonly success: "check-circle-fill";
    readonly warning: "exclamation-circle-fill";
};
export declare class CmacsFormControlComponent implements OnChanges, OnDestroy, OnInit, AfterContentInit, OnDestroy {
    private cmacsFormItemComponent;
    private cdr;
    private cmacsFormDirective;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    private destroyed$;
    private localeId;
    private autoErrorTip?;
    private get disableAutoTips();
    status: NzFormControlStatusType;
    validateControl: AbstractControl | NgModel | null;
    iconType: typeof iconTypeMap[keyof typeof iconTypeMap] | null;
    innerTip: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }> | null;
    defaultValidateControl?: FormControlName | FormControlDirective;
    cmacsSuccessTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    cmacsWarningTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    cmacsErrorTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    cmacsValidatingTip?: string | TemplateRef<{
        $implicit: AbstractControl | NgModel;
    }>;
    cmacsExtra?: string | TemplateRef<void>;
    cmacsAutoTips: Record<string, Record<string, string>>;
    cmacsDisableAutoTips: boolean | 'default';
    set cmacsHasFeedback(value: boolean);
    get cmacsHasFeedback(): boolean;
    set cmacsValidateStatus(value: string | AbstractControl | FormControlName | NgModel);
    private watchControl;
    private setStatus;
    private getControlStatus;
    private validateControlStatus;
    private getInnerTip;
    private updateAutoErrorTip;
    private subscribeAutoTips;
    constructor(elementRef: ElementRef, cmacsFormItemComponent: CmacsFormItemComponent, cdr: ChangeDetectorRef, renderer: Renderer2, i18n: NzI18nService, cmacsFormDirective: CmacsFormDirective);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsFormControlComponent, [null, { optional: true; host: true; }, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsFormControlComponent, "cmacs-form-control", ["cmacsFormControl"], { "cmacsSuccessTip": { "alias": "cmacsSuccessTip"; "required": false; }; "cmacsWarningTip": { "alias": "cmacsWarningTip"; "required": false; }; "cmacsErrorTip": { "alias": "cmacsErrorTip"; "required": false; }; "cmacsValidatingTip": { "alias": "cmacsValidatingTip"; "required": false; }; "cmacsExtra": { "alias": "cmacsExtra"; "required": false; }; "cmacsAutoTips": { "alias": "cmacsAutoTips"; "required": false; }; "cmacsDisableAutoTips": { "alias": "cmacsDisableAutoTips"; "required": false; }; "cmacsHasFeedback": { "alias": "cmacsHasFeedback"; "required": false; }; "cmacsValidateStatus": { "alias": "cmacsValidateStatus"; "required": false; }; }, {}, ["defaultValidateControl"], ["*"], false, never>;
}
export {};
//# sourceMappingURL=form-control.component.d.ts.map