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
    static ɵfac: i0.ɵɵFactoryDef<CmacsFormControlComponent, [null, { optional: true; host: true; }, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsFormControlComponent, "cmacs-form-control", ["cmacsFormControl"], { "cmacsSuccessTip": "cmacsSuccessTip"; "cmacsWarningTip": "cmacsWarningTip"; "cmacsErrorTip": "cmacsErrorTip"; "cmacsValidatingTip": "cmacsValidatingTip"; "cmacsExtra": "cmacsExtra"; "cmacsAutoTips": "cmacsAutoTips"; "cmacsDisableAutoTips": "cmacsDisableAutoTips"; "cmacsHasFeedback": "cmacsHasFeedback"; "cmacsValidateStatus": "cmacsValidateStatus"; }, {}, ["defaultValidateControl"], ["*"]>;
}
export {};
//# sourceMappingURL=form-control.component.d.ts.map