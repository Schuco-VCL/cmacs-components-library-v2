import { ChangeDetectionStrategy, Component, ContentChild, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { Subject, Subscription } from 'rxjs';
import { filter, startWith, takeUntil, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./form-item.component";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "./form.directive";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/outlet";
function CmacsFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.iconType);
} }
function CmacsFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.innerTip);
} }
const _c0 = function (a1) { return ["ant-form-item-explain", a1]; };
const _c1 = function (a0) { return { $implicit: a0 }; };
function CmacsFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div");
    i0.ɵɵtemplate(2, CmacsFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, "ant-form-item-explain-" + ctx_r1.status));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@helpMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.innerTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(6, _c1, ctx_r1.validateControl));
} }
function CmacsFormControlComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.cmacsExtra);
} }
function CmacsFormControlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsFormControlComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.cmacsExtra);
} }
const _c2 = ["*"];
const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
export class CmacsFormControlComponent {
    get disableAutoTips() {
        return this.cmacsDisableAutoTips !== 'default' ? toBoolean(this.cmacsDisableAutoTips) : this.cmacsFormDirective?.cmacsDisableAutoTips;
    }
    set cmacsHasFeedback(value) {
        /*this._hasFeedback = toBoolean(value);
        if (this.cmacsFormItemComponent) {
          this.cmacsFormItemComponent.setHasFeedback(this._hasFeedback);
        }*/
    }
    get cmacsHasFeedback() {
        return this._hasFeedback;
    }
    set cmacsValidateStatus(value) {
        if (value instanceof AbstractControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setStatus();
        }
    }
    watchControl() {
        this.validateChanges.unsubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe(_ => {
                if (!this.disableAutoTips) {
                    this.updateAutoErrorTip();
                }
                this.setStatus();
                this.cdr.markForCheck();
            });
        }
    }
    setStatus() {
        this.status = this.getControlStatus(this.validateString);
        this.innerTip = this.getInnerTip(this.status);
        if (this.cmacsFormItemComponent) {
            this.cmacsFormItemComponent.setWithHelpViaTips(!!this.innerTip);
            this.cmacsFormItemComponent.setStatus(this.status);
        }
    }
    getControlStatus(validateString) {
        let status;
        if (validateString === 'warning' || this.validateControlStatus('INVALID', 'warning')) {
            status = 'warning';
        }
        else if (validateString === 'error' || this.validateControlStatus('INVALID')) {
            status = 'error';
        }
        else if (validateString === 'validating' || validateString === 'pending' || this.validateControlStatus('PENDING')) {
            status = 'validating';
        }
        else if (validateString === 'success' || this.validateControlStatus('VALID')) {
            status = 'success';
        }
        else {
            status = null;
        }
        return status;
    }
    validateControlStatus(validStatus, statusType) {
        if (!this.validateControl) {
            return false;
        }
        else {
            const { dirty, touched, status } = this.validateControl;
            return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
        }
    }
    getInnerTip(status) {
        switch (status) {
            case 'error':
                return (!this.disableAutoTips && this.autoErrorTip) || this.cmacsErrorTip || null;
            case 'validating':
                return this.cmacsValidatingTip || null;
            case 'success':
                return this.cmacsSuccessTip || null;
            case 'warning':
                return this.cmacsWarningTip || null;
            default:
                return null;
        }
    }
    updateAutoErrorTip() {
        if (this.validateControl) {
            const errors = this.validateControl.errors || {};
            let autoErrorTip = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    autoErrorTip =
                        errors[key]?.[this.localeId] ??
                            this.cmacsAutoTips?.[this.localeId]?.[key] ??
                            this.cmacsAutoTips.default?.[key] ??
                            this.cmacsFormDirective?.cmacsAutoTips?.[this.localeId]?.[key] ??
                            this.cmacsFormDirective?.cmacsAutoTips.default?.[key];
                }
                if (!!autoErrorTip) {
                    break;
                }
            }
            this.autoErrorTip = autoErrorTip;
        }
    }
    subscribeAutoTips(observable) {
        observable?.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            if (!this.disableAutoTips) {
                this.updateAutoErrorTip();
                this.setStatus();
                this.cdr.markForCheck();
            }
        });
    }
    constructor(elementRef, cmacsFormItemComponent, cdr, renderer, i18n, cmacsFormDirective) {
        this.cmacsFormItemComponent = cmacsFormItemComponent;
        this.cdr = cdr;
        this.cmacsFormDirective = cmacsFormDirective;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.validateString = null;
        this.destroyed$ = new Subject();
        this.status = null;
        this.validateControl = null;
        this.iconType = null;
        this.innerTip = null;
        this.cmacsAutoTips = {};
        this.cmacsDisableAutoTips = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control');
        this.subscribeAutoTips(i18n.localeChange.pipe(tap(locale => (this.localeId = locale.locale))));
        this.subscribeAutoTips(this.cmacsFormDirective?.getInputObservable('cmacsAutoTips'));
        this.subscribeAutoTips(this.cmacsFormDirective?.getInputObservable('cmacsDisableAutoTips').pipe(filter(() => this.cmacsDisableAutoTips === 'default')));
    }
    ngOnChanges(changes) {
        const { cmacsDisableAutoTips, cmacsAutoTips, cmacsSuccessTip, cmacsWarningTip, cmacsErrorTip, cmacsValidatingTip } = changes;
        if (cmacsDisableAutoTips || cmacsAutoTips) {
            this.updateAutoErrorTip();
            this.setStatus();
        }
        else if (cmacsSuccessTip || cmacsWarningTip || cmacsErrorTip || cmacsValidatingTip) {
            this.setStatus();
        }
    }
    ngOnInit() {
        this.setStatus();
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.cmacsValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.cmacsValidateStatus = this.defaultValidateControl;
            }
        }
    }
    static { this.ɵfac = function CmacsFormControlComponent_Factory(t) { return new (t || CmacsFormControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsFormItemComponent, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i3.CmacsFormDirective, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsFormControlComponent, selectors: [["cmacs-form-control"]], contentQueries: function CmacsFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgControl, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
        } }, inputs: { cmacsSuccessTip: "cmacsSuccessTip", cmacsWarningTip: "cmacsWarningTip", cmacsErrorTip: "cmacsErrorTip", cmacsValidatingTip: "cmacsValidatingTip", cmacsExtra: "cmacsExtra", cmacsAutoTips: "cmacsAutoTips", cmacsDisableAutoTips: "cmacsDisableAutoTips", cmacsHasFeedback: "cmacsHasFeedback", cmacsValidateStatus: "cmacsValidateStatus" }, exportAs: ["cmacsFormControl"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 7, vars: 3, consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]], template: function CmacsFormControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtemplate(4, CmacsFormControlComponent_i_4_Template, 1, 1, "i", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, CmacsFormControlComponent_div_5_Template, 3, 8, "div", 4);
            i0.ɵɵtemplate(6, CmacsFormControlComponent_div_6_Template, 2, 1, "div", 5);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.cmacsHasFeedback && ctx.iconType);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.innerTip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.cmacsExtra);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective, i7.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFormControlComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-form-control',
                exportAs: 'cmacsFormControl',
                preserveWhitespaces: false,
                animations: [helpMotion],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
      <span class="ant-form-item-children-icon">
        <i *ngIf="cmacsHasFeedback && iconType" nz-icon [nzType]="iconType"></i>
      </span>
    </div>
    <div [ngClass]="['ant-form-item-explain', 'ant-form-item-explain-' + status]" *ngIf="innerTip">
      <div @helpMotion>
        <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{ innerTip }}</ng-container>
      </div>
    </div>
    <div class="ant-form-item-extra" *ngIf="cmacsExtra">
      <ng-container *nzStringTemplateOutlet="cmacsExtra">{{ cmacsExtra }}</ng-container>
    </div>
  `
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.CmacsFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i2.NzI18nService }, { type: i3.CmacsFormDirective, decorators: [{
                type: Optional
            }] }]; }, { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], cmacsSuccessTip: [{
            type: Input
        }], cmacsWarningTip: [{
            type: Input
        }], cmacsErrorTip: [{
            type: Input
        }], cmacsValidatingTip: [{
            type: Input
        }], cmacsExtra: [{
            type: Input
        }], cmacsAutoTips: [{
            type: Input
        }], cmacsDisableAutoTips: [{
            type: Input
        }], cmacsHasFeedback: [{
            type: Input
        }], cmacsValidateStatus: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUlSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUF5QjNELHVCQUF3RTs7O0lBQXhCLHdDQUFtQjs7O0lBS25FLDZCQUEwRjtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7Ozs7SUFGNUcsOEJBQStGLFVBQUE7SUFFM0Ysa0dBQXVIO0lBQ3pILGlCQUFNLEVBQUE7OztJQUhILDhGQUF3RTtJQUN0RSxlQUFXO0lBQVgsdUNBQVc7SUFDQyxlQUFrQztJQUFsQyx3REFBa0MscUZBQUE7OztJQUluRCw2QkFBbUQ7SUFBQSxZQUFnQjtJQUFBLDBCQUFlOzs7SUFBL0IsZUFBZ0I7SUFBaEIsdUNBQWdCOzs7SUFEckUsOEJB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SztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBR0YsZ0JBQWdCO2tCQURuQixLQUFLO1lBYUYsbUJBQW1CO2tCQUR0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgRm9ybUNvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sTmFtZSwgTmdDb250cm9sLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN0YXJ0V2l0aCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUsIENtYWNzRm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm0taXRlbS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgaWNvblR5cGVNYXAgPSB7XHJcbiAgZXJyb3I6ICdjbG9zZS1jaXJjbGUtZmlsbCcsXHJcbiAgdmFsaWRhdGluZzogJ2xvYWRpbmcnLFxyXG4gIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUtZmlsbCcsXHJcbiAgd2FybmluZzogJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1mb3JtLWNvbnRyb2wnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuLWljb25cIj5cclxuICAgICAgICA8aSAqbmdJZj1cImNtYWNzSGFzRmVlZGJhY2sgJiYgaWNvblR5cGVcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvblR5cGVcIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FudC1mb3JtLWl0ZW0tZXhwbGFpbicsICdhbnQtZm9ybS1pdGVtLWV4cGxhaW4tJyArIHN0YXR1c11cIiAqbmdJZj1cImlubmVyVGlwXCI+XHJcbiAgICAgIDxkaXYgQGhlbHBNb3Rpb24+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImlubmVyVGlwOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogdmFsaWRhdGVDb250cm9sIH1cIj57eyBpbm5lclRpcCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tZXh0cmFcIiAqbmdJZj1cImNtYWNzRXh0cmFcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNtYWNzRXh0cmFcIj57eyBjbWFjc0V4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zvcm1Db250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcclxuICBwcml2YXRlIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBsb2NhbGVJZCE6IHN0cmluZztcclxuICBwcml2YXRlIGF1dG9FcnJvclRpcD86IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBnZXQgZGlzYWJsZUF1dG9UaXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NEaXNhYmxlQXV0b1RpcHMgIT09ICdkZWZhdWx0JyA/IHRvQm9vbGVhbih0aGlzLmNtYWNzRGlzYWJsZUF1dG9UaXBzKSA6IHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5jbWFjc0Rpc2FibGVBdXRvVGlwcztcclxuICB9XHJcblxyXG4gIHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSBudWxsO1xyXG4gIHZhbGlkYXRlQ29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB8IG51bGwgPSBudWxsO1xyXG4gIGljb25UeXBlOiB0eXBlb2YgaWNvblR5cGVNYXBba2V5b2YgdHlwZW9mIGljb25UeXBlTWFwXSB8IG51bGwgPSBudWxsO1xyXG4gIGlubmVyVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w/OiBGb3JtQ29udHJvbE5hbWUgfCBGb3JtQ29udHJvbERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBjbWFjc1N1Y2Nlc3NUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBjbWFjc1dhcm5pbmdUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBjbWFjc0Vycm9yVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgY21hY3NWYWxpZGF0aW5nVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgY21hY3NFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNtYWNzQXV0b1RpcHM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge307XHJcbiAgQElucHV0KCkgY21hY3NEaXNhYmxlQXV0b1RpcHM6IGJvb2xlYW4gfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzSGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIC8qdGhpcy5faGFzRmVlZGJhY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuY21hY3NGb3JtSXRlbUNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQuc2V0SGFzRmVlZGJhY2sodGhpcy5faGFzRmVlZGJhY2spO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBnZXQgY21hY3NIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzVmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFic3RyYWN0Q29udHJvbCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcclxuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gKHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMgYXMgT2JzZXJ2YWJsZTxhbnk+KS5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmdldENvbnRyb2xTdGF0dXModGhpcy52YWxpZGF0ZVN0cmluZyk7XHJcbiAgICB0aGlzLmlubmVyVGlwID0gdGhpcy5nZXRJbm5lclRpcCh0aGlzLnN0YXR1cyk7XHJcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY21hY3NGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHMoISF0aGlzLmlubmVyVGlwKTtcclxuICAgICAgdGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50LnNldFN0YXR1cyh0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbnRyb2xTdGF0dXModmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGwpOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSB7XHJcbiAgICBsZXQgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcsICd3YXJuaW5nJykpIHtcclxuICAgICAgc3RhdHVzID0gJ3dhcm5pbmcnO1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpKSB7XHJcbiAgICAgIHN0YXR1cyA9ICd2YWxpZGF0aW5nJztcclxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xyXG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ29udHJvbFN0YXR1cyh2YWxpZFN0YXR1czogc3RyaW5nLCBzdGF0dXNUeXBlPzogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBkaXJ0eSwgdG91Y2hlZCwgc3RhdHVzIH0gPSB0aGlzLnZhbGlkYXRlQ29udHJvbDtcclxuICAgICAgcmV0dXJuICghIWRpcnR5IHx8ICEhdG91Y2hlZCkgJiYgKHN0YXR1c1R5cGUgPyB0aGlzLnZhbGlkYXRlQ29udHJvbC5oYXNFcnJvcihzdGF0dXNUeXBlKSA6IHN0YXR1cyA9PT0gdmFsaWRTdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbm5lclRpcChzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICByZXR1cm4gKCF0aGlzLmRpc2FibGVBdXRvVGlwcyAmJiB0aGlzLmF1dG9FcnJvclRpcCkgfHwgdGhpcy5jbWFjc0Vycm9yVGlwIHx8IG51bGw7XHJcbiAgICAgIGNhc2UgJ3ZhbGlkYXRpbmcnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNtYWNzVmFsaWRhdGluZ1RpcCB8fCBudWxsO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5jbWFjc1N1Y2Nlc3NUaXAgfHwgbnVsbDtcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NXYXJuaW5nVGlwIHx8IG51bGw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUF1dG9FcnJvclRpcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xyXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5lcnJvcnMgfHwge307XHJcbiAgICAgIGxldCBhdXRvRXJyb3JUaXAgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXJyb3JzKSB7XHJcbiAgICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBhdXRvRXJyb3JUaXAgPVxyXG4gICAgICAgICAgICBlcnJvcnNba2V5XT8uW3RoaXMubG9jYWxlSWRdID8/XHJcbiAgICAgICAgICAgIHRoaXMuY21hY3NBdXRvVGlwcz8uW3RoaXMubG9jYWxlSWRdPy5ba2V5XSA/P1xyXG4gICAgICAgICAgICB0aGlzLmNtYWNzQXV0b1RpcHMuZGVmYXVsdD8uW2tleV0gPz9cclxuICAgICAgICAgICAgdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzQXV0b1RpcHM/Llt0aGlzLmxvY2FsZUlkXT8uW2tleV0gPz9cclxuICAgICAgICAgICAgdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzQXV0b1RpcHMuZGVmYXVsdD8uW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIWF1dG9FcnJvclRpcCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYXV0b0Vycm9yVGlwID0gYXV0b0Vycm9yVGlwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVBdXRvVGlwcyhvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE56U2FmZUFueT4pOiB2b2lkIHtcclxuICAgIG9ic2VydmFibGU/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlQXV0b1RpcHMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIGNtYWNzRm9ybUl0ZW1Db21wb25lbnQ6IENtYWNzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY21hY3NGb3JtRGlyZWN0aXZlOiBDbWFjc0Zvcm1EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbCcpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHMoaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YXAobG9jYWxlID0+ICh0aGlzLmxvY2FsZUlkID0gbG9jYWxlLmxvY2FsZSkpKSk7XHJcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzQXV0b1RpcHMnKSk7XHJcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKFxyXG4gICAgICB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uZ2V0SW5wdXRPYnNlcnZhYmxlKCdjbWFjc0Rpc2FibGVBdXRvVGlwcycpLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuY21hY3NEaXNhYmxlQXV0b1RpcHMgPT09ICdkZWZhdWx0JykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjbWFjc0Rpc2FibGVBdXRvVGlwcywgY21hY3NBdXRvVGlwcywgY21hY3NTdWNjZXNzVGlwLCBjbWFjc1dhcm5pbmdUaXAsIGNtYWNzRXJyb3JUaXAsIGNtYWNzVmFsaWRhdGluZ1RpcCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoY21hY3NEaXNhYmxlQXV0b1RpcHMgfHwgY21hY3NBdXRvVGlwcykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgfSBlbHNlIGlmIChjbWFjc1N1Y2Nlc3NUaXAgfHwgY21hY3NXYXJuaW5nVGlwIHx8IGNtYWNzRXJyb3JUaXAgfHwgY21hY3NWYWxpZGF0aW5nVGlwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc1ZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sLmNvbnRyb2w7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc1ZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=