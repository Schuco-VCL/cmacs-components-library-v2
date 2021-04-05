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
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CmacsFormControlComponent_div_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    constructor(elementRef, cmacsFormItemComponent, cdr, renderer, i18n, cmacsFormDirective) {
        var _a, _b;
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
        this.subscribeAutoTips((_a = this.cmacsFormDirective) === null || _a === void 0 ? void 0 : _a.getInputObservable('cmacsAutoTips'));
        this.subscribeAutoTips((_b = this.cmacsFormDirective) === null || _b === void 0 ? void 0 : _b.getInputObservable('cmacsDisableAutoTips').pipe(filter(() => this.cmacsDisableAutoTips === 'default')));
    }
    get disableAutoTips() {
        var _a;
        return this.cmacsDisableAutoTips !== 'default' ? toBoolean(this.cmacsDisableAutoTips) : (_a = this.cmacsFormDirective) === null || _a === void 0 ? void 0 : _a.cmacsDisableAutoTips;
    }
    set cmacsHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        if (this.cmacsFormItemComponent) {
            this.cmacsFormItemComponent.setHasFeedback(this._hasFeedback);
        }
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
        this.iconType = this.status ? iconTypeMap[this.status] : null;
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.validateControl) {
            const errors = this.validateControl.errors || {};
            let autoErrorTip = '';
            for (const key in errors) {
                if (errors.hasOwnProperty(key)) {
                    autoErrorTip = (_l = (_g = (_e = (_b = (_a = errors[key]) === null || _a === void 0 ? void 0 : _a[this.localeId]) !== null && _b !== void 0 ? _b : (_d = (_c = this.cmacsAutoTips) === null || _c === void 0 ? void 0 : _c[this.localeId]) === null || _d === void 0 ? void 0 : _d[key]) !== null && _e !== void 0 ? _e : (_f = this.cmacsAutoTips.default) === null || _f === void 0 ? void 0 : _f[key]) !== null && _g !== void 0 ? _g : (_k = (_j = (_h = this.cmacsFormDirective) === null || _h === void 0 ? void 0 : _h.cmacsAutoTips) === null || _j === void 0 ? void 0 : _j[this.localeId]) === null || _k === void 0 ? void 0 : _k[key]) !== null && _l !== void 0 ? _l : (_o = (_m = this.cmacsFormDirective) === null || _m === void 0 ? void 0 : _m.cmacsAutoTips.default) === null || _o === void 0 ? void 0 : _o[key];
                }
                if (!!autoErrorTip) {
                    break;
                }
            }
            this.autoErrorTip = autoErrorTip;
        }
    }
    subscribeAutoTips(observable) {
        observable === null || observable === void 0 ? void 0 : observable.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            if (!this.disableAutoTips) {
                this.updateAutoErrorTip();
                this.setStatus();
                this.cdr.markForCheck();
            }
        });
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
}
CmacsFormControlComponent.ɵfac = function CmacsFormControlComponent_Factory(t) { return new (t || CmacsFormControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsFormItemComponent, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i3.CmacsFormDirective, 8)); };
CmacsFormControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsFormControlComponent, selectors: [["cmacs-form-control"]], contentQueries: function CmacsFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NgControl, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
    } }, inputs: { cmacsSuccessTip: "cmacsSuccessTip", cmacsWarningTip: "cmacsWarningTip", cmacsErrorTip: "cmacsErrorTip", cmacsValidatingTip: "cmacsValidatingTip", cmacsExtra: "cmacsExtra", cmacsAutoTips: "cmacsAutoTips", cmacsDisableAutoTips: "cmacsDisableAutoTips", cmacsHasFeedback: "cmacsHasFeedback", cmacsValidateStatus: "cmacsValidateStatus" }, exportAs: ["cmacsFormControl"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 7, vars: 3, consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "ant-form-item-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-item-extra"], [4, "nzStringTemplateOutlet"]], template: function CmacsFormControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span", 2);
        i0.ɵɵtemplate(4, CmacsFormControlComponent_i_4_Template, 1, 1, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, CmacsFormControlComponent_div_5_Template, 3, 8, "div", 4);
        i0.ɵɵtemplate(6, CmacsFormControlComponent_div_6_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.cmacsHasFeedback && ctx.iconType);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.innerTip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cmacsExtra);
    } }, directives: [i4.NgIf, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective, i4.NgClass, i7.NzStringTemplateOutletDirective], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUlSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUF5QjNELHVCQUF3RTs7O0lBQXhCLHdDQUFtQjs7O0lBS25FLDZCQUEwRjtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7Ozs7SUFGNUcsOEJBQStGO0lBQzdGLDJCQUFpQjtJQUNmLGtHQUF1SDtJQUN6SCxpQkFBTTtJQUNSLGlCQUFNOzs7SUFKRCw4RkFBd0U7SUFDdEUsZUFBVztJQUFYLHVDQUFXO0lBQ0MsZUFBa0M7SUFBbEMsd0RBQWtDLHFGQUFBOzs7SUFJbkQsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFn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LENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDthQUNGOztzQkE0SkksUUFBUTs7c0JBQUksSUFBSTs7c0JBSWhCLFFBQVE7d0JBN0lpQyxzQkFBc0I7a0JBQWpFLFlBQVk7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNqQyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUdGLGdCQUFnQjtrQkFEbkIsS0FBSztZQWFGLG1CQUFtQjtrQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGhlbHBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4vZm9ybS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBOekZvcm1Db250cm9sU3RhdHVzVHlwZSwgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1pdGVtLmNvbXBvbmVudCc7XG5cbmNvbnN0IGljb25UeXBlTWFwID0ge1xuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZS1maWxsJyxcbiAgdmFsaWRhdGluZzogJ2xvYWRpbmcnLFxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlLWZpbGwnLFxuICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnXG59IGFzIGNvbnN0O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy1mb3JtLWNvbnRyb2wnLFxuICBleHBvcnRBczogJ2NtYWNzRm9ybUNvbnRyb2wnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxuICAgICAgICA8aSAqbmdJZj1cImNtYWNzSGFzRmVlZGJhY2sgJiYgaWNvblR5cGVcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvblR5cGVcIj48L2k+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBbbmdDbGFzc109XCJbJ2FudC1mb3JtLWl0ZW0tZXhwbGFpbicsICdhbnQtZm9ybS1pdGVtLWV4cGxhaW4tJyArIHN0YXR1c11cIiAqbmdJZj1cImlubmVyVGlwXCI+XG4gICAgICA8ZGl2IEBoZWxwTW90aW9uPlxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaW5uZXJUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiPnt7IGlubmVyVGlwIH19PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiICpuZ0lmPVwiY21hY3NFeHRyYVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNtYWNzRXh0cmFcIj57eyBjbWFjc0V4dHJhIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgcHJpdmF0ZSB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgbG9jYWxlSWQhOiBzdHJpbmc7XG4gIHByaXZhdGUgYXV0b0Vycm9yVGlwPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgZ2V0IGRpc2FibGVBdXRvVGlwcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbWFjc0Rpc2FibGVBdXRvVGlwcyAhPT0gJ2RlZmF1bHQnID8gdG9Cb29sZWFuKHRoaXMuY21hY3NEaXNhYmxlQXV0b1RpcHMpIDogdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzRGlzYWJsZUF1dG9UaXBzO1xuICB9XG5cbiAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XG4gIHZhbGlkYXRlQ29udHJvbDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB8IG51bGwgPSBudWxsO1xuICBpY29uVHlwZTogdHlwZW9mIGljb25UeXBlTWFwW2tleW9mIHR5cGVvZiBpY29uVHlwZU1hcF0gfCBudWxsID0gbnVsbDtcbiAgaW5uZXJUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+IHwgbnVsbCA9IG51bGw7XG5cbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wsIHsgc3RhdGljOiBmYWxzZSB9KSBkZWZhdWx0VmFsaWRhdGVDb250cm9sPzogRm9ybUNvbnRyb2xOYW1lIHwgRm9ybUNvbnRyb2xEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGNtYWNzU3VjY2Vzc1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBjbWFjc1dhcm5pbmdUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcbiAgQElucHV0KCkgY21hY3NFcnJvclRpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xuICBASW5wdXQoKSBjbWFjc1ZhbGlkYXRpbmdUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcbiAgQElucHV0KCkgY21hY3NFeHRyYT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjbWFjc0F1dG9UaXBzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHt9O1xuICBASW5wdXQoKSBjbWFjc0Rpc2FibGVBdXRvVGlwczogYm9vbGVhbiB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcblxuICBASW5wdXQoKVxuICBzZXQgY21hY3NIYXNGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQuc2V0SGFzRmVlZGJhY2sodGhpcy5faGFzRmVlZGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbWFjc0hhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbWFjc1ZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBBYnN0cmFjdENvbnRyb2wgfCBGb3JtQ29udHJvbE5hbWUgfCBOZ01vZGVsKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWJzdHJhY3RDb250cm9sIHx8IHZhbHVlIGluc3RhbmNlb2YgTmdNb2RlbCkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlLmNvbnRyb2w7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3YXRjaENvbnRyb2woKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVBdXRvVGlwcykge1xuICAgICAgICAgIHRoaXMudXBkYXRlQXV0b0Vycm9yVGlwKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFN0YXR1cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuZ2V0Q29udHJvbFN0YXR1cyh0aGlzLnZhbGlkYXRlU3RyaW5nKTtcbiAgICB0aGlzLmljb25UeXBlID0gdGhpcy5zdGF0dXMgPyBpY29uVHlwZU1hcFt0aGlzLnN0YXR1c10gOiBudWxsO1xuICAgIHRoaXMuaW5uZXJUaXAgPSB0aGlzLmdldElubmVyVGlwKHRoaXMuc3RhdHVzKTtcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQuc2V0V2l0aEhlbHBWaWFUaXBzKCEhdGhpcy5pbm5lclRpcCk7XG4gICAgICB0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQuc2V0U3RhdHVzKHRoaXMuc3RhdHVzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbnRyb2xTdGF0dXModmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGwpOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSB7XG4gICAgbGV0IHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGU7XG5cbiAgICBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcsICd3YXJuaW5nJykpIHtcbiAgICAgIHN0YXR1cyA9ICd3YXJuaW5nJztcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHZhbGlkYXRlU3RyaW5nID09PSAncGVuZGluZycgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ1BFTkRJTkcnKSkge1xuICAgICAgc3RhdHVzID0gJ3ZhbGlkYXRpbmcnO1xuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xuICAgICAgc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0dXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlQ29udHJvbFN0YXR1cyh2YWxpZFN0YXR1czogc3RyaW5nLCBzdGF0dXNUeXBlPzogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVDb250cm9sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgZGlydHksIHRvdWNoZWQsIHN0YXR1cyB9ID0gdGhpcy52YWxpZGF0ZUNvbnRyb2w7XG4gICAgICByZXR1cm4gKCEhZGlydHkgfHwgISF0b3VjaGVkKSAmJiAoc3RhdHVzVHlwZSA/IHRoaXMudmFsaWRhdGVDb250cm9sLmhhc0Vycm9yKHN0YXR1c1R5cGUpIDogc3RhdHVzID09PSB2YWxpZFN0YXR1cyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbm5lclRpcChzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsIHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICByZXR1cm4gKCF0aGlzLmRpc2FibGVBdXRvVGlwcyAmJiB0aGlzLmF1dG9FcnJvclRpcCkgfHwgdGhpcy5jbWFjc0Vycm9yVGlwIHx8IG51bGw7XG4gICAgICBjYXNlICd2YWxpZGF0aW5nJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NWYWxpZGF0aW5nVGlwIHx8IG51bGw7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NTdWNjZXNzVGlwIHx8IG51bGw7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NXYXJuaW5nVGlwIHx8IG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUF1dG9FcnJvclRpcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVDb250cm9sLmVycm9ycyB8fCB7fTtcbiAgICAgIGxldCBhdXRvRXJyb3JUaXAgPSAnJztcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGVycm9ycykge1xuICAgICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBhdXRvRXJyb3JUaXAgPVxuICAgICAgICAgICAgZXJyb3JzW2tleV0/Llt0aGlzLmxvY2FsZUlkXSA/P1xuICAgICAgICAgICAgdGhpcy5jbWFjc0F1dG9UaXBzPy5bdGhpcy5sb2NhbGVJZF0/LltrZXldID8/XG4gICAgICAgICAgICB0aGlzLmNtYWNzQXV0b1RpcHMuZGVmYXVsdD8uW2tleV0gPz9cbiAgICAgICAgICAgIHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5jbWFjc0F1dG9UaXBzPy5bdGhpcy5sb2NhbGVJZF0/LltrZXldID8/XG4gICAgICAgICAgICB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NBdXRvVGlwcy5kZWZhdWx0Py5ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoISFhdXRvRXJyb3JUaXApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hdXRvRXJyb3JUaXAgPSBhdXRvRXJyb3JUaXA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVBdXRvVGlwcyhvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE56U2FmZUFueT4pOiB2b2lkIHtcbiAgICBvYnNlcnZhYmxlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVBdXRvVGlwcykge1xuICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIGNtYWNzRm9ybUl0ZW1Db21wb25lbnQ6IENtYWNzRm9ybUl0ZW1Db21wb25lbnQsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNtYWNzRm9ybURpcmVjdGl2ZTogQ21hY3NGb3JtRGlyZWN0aXZlXG4gICkge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbCcpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVBdXRvVGlwcyhpMThuLmxvY2FsZUNoYW5nZS5waXBlKHRhcChsb2NhbGUgPT4gKHRoaXMubG9jYWxlSWQgPSBsb2NhbGUubG9jYWxlKSkpKTtcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzQXV0b1RpcHMnKSk7XG4gICAgdGhpcy5zdWJzY3JpYmVBdXRvVGlwcyhcbiAgICAgIHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzRGlzYWJsZUF1dG9UaXBzJykucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5jbWFjc0Rpc2FibGVBdXRvVGlwcyA9PT0gJ2RlZmF1bHQnKSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgY21hY3NEaXNhYmxlQXV0b1RpcHMsIGNtYWNzQXV0b1RpcHMsIGNtYWNzU3VjY2Vzc1RpcCwgY21hY3NXYXJuaW5nVGlwLCBjbWFjc0Vycm9yVGlwLCBjbWFjc1ZhbGlkYXRpbmdUaXAgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAoY21hY3NEaXNhYmxlQXV0b1RpcHMgfHwgY21hY3NBdXRvVGlwcykge1xuICAgICAgdGhpcy51cGRhdGVBdXRvRXJyb3JUaXAoKTtcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgfSBlbHNlIGlmIChjbWFjc1N1Y2Nlc3NUaXAgfHwgY21hY3NXYXJuaW5nVGlwIHx8IGNtYWNzRXJyb3JUaXAgfHwgY21hY3NWYWxpZGF0aW5nVGlwKSB7XG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbERpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLmNtYWNzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wuY29udHJvbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY21hY3NWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=