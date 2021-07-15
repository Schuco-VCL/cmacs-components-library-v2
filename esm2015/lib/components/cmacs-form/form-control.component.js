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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUlSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUF5QjNELHVCQUF3RTs7O0lBQXhCLHdDQUFtQjs7O0lBS25FLDZCQUEwRjtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7Ozs7SUFGNUcsOEJBQStGO0lBQzdGLDJCQUFpQjtJQUNmLGtHQUF1SDtJQUN6SCxpQkFBTTtJQUNSLGlCQUFNOzs7SUFKRCw4RkFBd0U7SUFDdEUsZUFBVztJQUFYLHVDQUFXO0lBQ0MsZUFBa0M7SUFBbEMsd0RBQWtDLHFGQUFBOzs7SUFJbkQsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFn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QWpFLFlBQVk7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNqQyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUdGLGdCQUFnQjtrQkFEbkIsS0FBSztZQWFGLG1CQUFtQjtrQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaGVscE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBzdGFydFdpdGgsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDbWFjc0Zvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0uZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlLCBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGljb25UeXBlTWFwID0ge1xyXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlLWZpbGwnLFxyXG4gIHZhbGlkYXRpbmc6ICdsb2FkaW5nJyxcclxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlLWZpbGwnLFxyXG4gIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCdcclxufSBhcyBjb25zdDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1jb250cm9sJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybUNvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2wtaW5wdXQtY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jaGlsZHJlbi1pY29uXCI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJjbWFjc0hhc0ZlZWRiYWNrICYmIGljb25UeXBlXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb25UeXBlXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgW25nQ2xhc3NdPVwiWydhbnQtZm9ybS1pdGVtLWV4cGxhaW4nLCAnYW50LWZvcm0taXRlbS1leHBsYWluLScgKyBzdGF0dXNdXCIgKm5nSWY9XCJpbm5lclRpcFwiPlxyXG4gICAgICA8ZGl2IEBoZWxwTW90aW9uPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpbm5lclRpcDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHZhbGlkYXRlQ29udHJvbCB9XCI+e3sgaW5uZXJUaXAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWV4dHJhXCIgKm5nSWY9XCJjbWFjc0V4dHJhXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc0V4dHJhXCI+e3sgY21hY3NFeHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX2hhc0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgbG9jYWxlSWQhOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhdXRvRXJyb3JUaXA/OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgZ2V0IGRpc2FibGVBdXRvVGlwcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzRGlzYWJsZUF1dG9UaXBzICE9PSAnZGVmYXVsdCcgPyB0b0Jvb2xlYW4odGhpcy5jbWFjc0Rpc2FibGVBdXRvVGlwcykgOiB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NEaXNhYmxlQXV0b1RpcHM7XHJcbiAgfVxyXG5cclxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcclxuICB2YWxpZGF0ZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfCBudWxsID0gbnVsbDtcclxuICBpY29uVHlwZTogdHlwZW9mIGljb25UeXBlTWFwW2tleW9mIHR5cGVvZiBpY29uVHlwZU1hcF0gfCBudWxsID0gbnVsbDtcclxuICBpbm5lclRpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wsIHsgc3RhdGljOiBmYWxzZSB9KSBkZWZhdWx0VmFsaWRhdGVDb250cm9sPzogRm9ybUNvbnRyb2xOYW1lIHwgRm9ybUNvbnRyb2xEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgY21hY3NTdWNjZXNzVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgY21hY3NXYXJuaW5nVGlwPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgY21hY3NFcnJvclRpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGNtYWNzVmFsaWRhdGluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGNtYWNzRXh0cmE/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjbWFjc0F1dG9UaXBzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHt9O1xyXG4gIEBJbnB1dCgpIGNtYWNzRGlzYWJsZUF1dG9UaXBzOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc0hhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY21hY3NGb3JtSXRlbUNvbXBvbmVudC5zZXRIYXNGZWVkYmFjayh0aGlzLl9oYXNGZWVkYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY21hY3NIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzVmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFic3RyYWN0Q29udHJvbCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcclxuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChudWxsKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZShfID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmdldENvbnRyb2xTdGF0dXModGhpcy52YWxpZGF0ZVN0cmluZyk7XHJcbiAgICB0aGlzLmlubmVyVGlwID0gdGhpcy5nZXRJbm5lclRpcCh0aGlzLnN0YXR1cyk7XHJcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY21hY3NGb3JtSXRlbUNvbXBvbmVudC5zZXRXaXRoSGVscFZpYVRpcHMoISF0aGlzLmlubmVyVGlwKTtcclxuICAgICAgdGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50LnNldFN0YXR1cyh0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbnRyb2xTdGF0dXModmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGwpOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSB7XHJcbiAgICBsZXQgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZTtcclxuXHJcbiAgICBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcsICd3YXJuaW5nJykpIHtcclxuICAgICAgc3RhdHVzID0gJ3dhcm5pbmcnO1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdlcnJvcic7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpKSB7XHJcbiAgICAgIHN0YXR1cyA9ICd2YWxpZGF0aW5nJztcclxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xyXG4gICAgICBzdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlQ29udHJvbFN0YXR1cyh2YWxpZFN0YXR1czogc3RyaW5nLCBzdGF0dXNUeXBlPzogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBkaXJ0eSwgdG91Y2hlZCwgc3RhdHVzIH0gPSB0aGlzLnZhbGlkYXRlQ29udHJvbDtcclxuICAgICAgcmV0dXJuICghIWRpcnR5IHx8ICEhdG91Y2hlZCkgJiYgKHN0YXR1c1R5cGUgPyB0aGlzLnZhbGlkYXRlQ29udHJvbC5oYXNFcnJvcihzdGF0dXNUeXBlKSA6IHN0YXR1cyA9PT0gdmFsaWRTdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRJbm5lclRpcChzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEFic3RyYWN0Q29udHJvbCB8IE5nTW9kZWwgfT4gfCBudWxsIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICByZXR1cm4gKCF0aGlzLmRpc2FibGVBdXRvVGlwcyAmJiB0aGlzLmF1dG9FcnJvclRpcCkgfHwgdGhpcy5jbWFjc0Vycm9yVGlwIHx8IG51bGw7XHJcbiAgICAgIGNhc2UgJ3ZhbGlkYXRpbmcnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNtYWNzVmFsaWRhdGluZ1RpcCB8fCBudWxsO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5jbWFjc1N1Y2Nlc3NUaXAgfHwgbnVsbDtcclxuICAgICAgY2FzZSAnd2FybmluZyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NXYXJuaW5nVGlwIHx8IG51bGw7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUF1dG9FcnJvclRpcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xyXG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5lcnJvcnMgfHwge307XHJcbiAgICAgIGxldCBhdXRvRXJyb3JUaXAgPSAnJztcclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZXJyb3JzKSB7XHJcbiAgICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICBhdXRvRXJyb3JUaXAgPVxyXG4gICAgICAgICAgICBlcnJvcnNba2V5XT8uW3RoaXMubG9jYWxlSWRdID8/XHJcbiAgICAgICAgICAgIHRoaXMuY21hY3NBdXRvVGlwcz8uW3RoaXMubG9jYWxlSWRdPy5ba2V5XSA/P1xyXG4gICAgICAgICAgICB0aGlzLmNtYWNzQXV0b1RpcHMuZGVmYXVsdD8uW2tleV0gPz9cclxuICAgICAgICAgICAgdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzQXV0b1RpcHM/Llt0aGlzLmxvY2FsZUlkXT8uW2tleV0gPz9cclxuICAgICAgICAgICAgdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzQXV0b1RpcHMuZGVmYXVsdD8uW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghIWF1dG9FcnJvclRpcCkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYXV0b0Vycm9yVGlwID0gYXV0b0Vycm9yVGlwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVBdXRvVGlwcyhvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPE56U2FmZUFueT4pOiB2b2lkIHtcclxuICAgIG9ic2VydmFibGU/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlQXV0b1RpcHMpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwcml2YXRlIGNtYWNzRm9ybUl0ZW1Db21wb25lbnQ6IENtYWNzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgY21hY3NGb3JtRGlyZWN0aXZlOiBDbWFjc0Zvcm1EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbCcpO1xyXG5cclxuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHMoaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YXAobG9jYWxlID0+ICh0aGlzLmxvY2FsZUlkID0gbG9jYWxlLmxvY2FsZSkpKSk7XHJcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzQXV0b1RpcHMnKSk7XHJcbiAgICB0aGlzLnN1YnNjcmliZUF1dG9UaXBzKFxyXG4gICAgICB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uZ2V0SW5wdXRPYnNlcnZhYmxlKCdjbWFjc0Rpc2FibGVBdXRvVGlwcycpLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuY21hY3NEaXNhYmxlQXV0b1RpcHMgPT09ICdkZWZhdWx0JykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjbWFjc0Rpc2FibGVBdXRvVGlwcywgY21hY3NBdXRvVGlwcywgY21hY3NTdWNjZXNzVGlwLCBjbWFjc1dhcm5pbmdUaXAsIGNtYWNzRXJyb3JUaXAsIGNtYWNzVmFsaWRhdGluZ1RpcCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoY21hY3NEaXNhYmxlQXV0b1RpcHMgfHwgY21hY3NBdXRvVGlwcykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUF1dG9FcnJvclRpcCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgfSBlbHNlIGlmIChjbWFjc1N1Y2Nlc3NUaXAgfHwgY21hY3NXYXJuaW5nVGlwIHx8IGNtYWNzRXJyb3JUaXAgfHwgY21hY3NWYWxpZGF0aW5nVGlwKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc1ZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sLmNvbnRyb2w7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc1ZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sITtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=