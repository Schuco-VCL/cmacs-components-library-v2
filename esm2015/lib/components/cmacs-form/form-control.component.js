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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUVaLElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUlSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxPQUFPLEVBQWMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUF5QjNELHVCQUF3RTs7O0lBQXhCLHdDQUFtQjs7O0lBS25FLDZCQUEwRjtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7Ozs7SUFGNUcsOEJBQStGO0lBQzdGLDJCQUFpQjtJQUNmLGtHQUF1SDtJQUN6SCxpQkFBTTtJQUNSLGlCQUFNOzs7SUFKRCw4RkFBd0U7SUFDdEUsZUFBVztJQUFYLHVDQUFXO0lBQ0MsZUFBa0M7SUFBbEMsd0RBQWtDLHFGQUFBOzs7SUFJbkQsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFn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O1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFHRixnQkFBZ0I7a0JBRG5CLEtBQUs7WUFhRixtQkFBbUI7a0JBRHRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGhlbHBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1Db250cm9sU3RhdHVzVHlwZSwgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBpY29uVHlwZU1hcCA9IHtcclxuICBlcnJvcjogJ2Nsb3NlLWNpcmNsZS1maWxsJyxcclxuICB2YWxpZGF0aW5nOiAnbG9hZGluZycsXHJcbiAgc3VjY2VzczogJ2NoZWNrLWNpcmNsZS1maWxsJyxcclxuICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0tY29udHJvbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm1Db250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY29udHJvbC1pbnB1dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sLWlucHV0LWNvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxyXG4gICAgICAgIDxpICpuZ0lmPVwiY21hY3NIYXNGZWVkYmFjayAmJiBpY29uVHlwZVwiIG56LWljb24gW256VHlwZV09XCJpY29uVHlwZVwiPjwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IFtuZ0NsYXNzXT1cIlsnYW50LWZvcm0taXRlbS1leHBsYWluJywgJ2FudC1mb3JtLWl0ZW0tZXhwbGFpbi0nICsgc3RhdHVzXVwiICpuZ0lmPVwiaW5uZXJUaXBcIj5cclxuICAgICAgPGRpdiBAaGVscE1vdGlvbj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiaW5uZXJUaXA7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB2YWxpZGF0ZUNvbnRyb2wgfVwiPnt7IGlubmVyVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1leHRyYVwiICpuZ0lmPVwiY21hY3NFeHRyYVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY21hY3NFeHRyYVwiPnt7IGNtYWNzRXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGxvY2FsZUlkITogc3RyaW5nO1xyXG4gIHByaXZhdGUgYXV0b0Vycm9yVGlwPzogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGdldCBkaXNhYmxlQXV0b1RpcHMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0Rpc2FibGVBdXRvVGlwcyAhPT0gJ2RlZmF1bHQnID8gdG9Cb29sZWFuKHRoaXMuY21hY3NEaXNhYmxlQXV0b1RpcHMpIDogdGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzRGlzYWJsZUF1dG9UaXBzO1xyXG4gIH1cclxuXHJcbiAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XHJcbiAgdmFsaWRhdGVDb250cm9sOiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbCA9IG51bGw7XHJcbiAgaWNvblR5cGU6IHR5cGVvZiBpY29uVHlwZU1hcFtrZXlvZiB0eXBlb2YgaWNvblR5cGVNYXBdIHwgbnVsbCA9IG51bGw7XHJcbiAgaW5uZXJUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sLCB7IHN0YXRpYzogZmFsc2UgfSkgZGVmYXVsdFZhbGlkYXRlQ29udHJvbD86IEZvcm1Db250cm9sTmFtZSB8IEZvcm1Db250cm9sRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIGNtYWNzU3VjY2Vzc1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGNtYWNzV2FybmluZ1RpcD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBBYnN0cmFjdENvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGNtYWNzRXJyb3JUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBjbWFjc1ZhbGlkYXRpbmdUaXA/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBjbWFjc0V4dHJhPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgY21hY3NBdXRvVGlwczogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcclxuICBASW5wdXQoKSBjbWFjc0Rpc2FibGVBdXRvVGlwczogYm9vbGVhbiB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NIYXNGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgLyp0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY21hY3NGb3JtSXRlbUNvbXBvbmVudC5zZXRIYXNGZWVkYmFjayh0aGlzLl9oYXNGZWVkYmFjayk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIGdldCBjbWFjc0hhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NWYWxpZGF0ZVN0YXR1cyh2YWx1ZTogc3RyaW5nIHwgQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdNb2RlbCkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWJzdHJhY3RDb250cm9sIHx8IHZhbHVlIGluc3RhbmNlb2YgTmdNb2RlbCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgICB0aGlzLnNldFN0YXR1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YXRjaENvbnRyb2woKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKF8gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlQXV0b1RpcHMpIHtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQXV0b0Vycm9yVGlwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGF0dXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuZ2V0Q29udHJvbFN0YXR1cyh0aGlzLnZhbGlkYXRlU3RyaW5nKTtcclxuICAgIHRoaXMuaW5uZXJUaXAgPSB0aGlzLmdldElubmVyVGlwKHRoaXMuc3RhdHVzKTtcclxuICAgIGlmICh0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQpIHtcclxuICAgICAgdGhpcy5jbWFjc0Zvcm1JdGVtQ29tcG9uZW50LnNldFdpdGhIZWxwVmlhVGlwcyghIXRoaXMuaW5uZXJUaXApO1xyXG4gICAgICB0aGlzLmNtYWNzRm9ybUl0ZW1Db21wb25lbnQuc2V0U3RhdHVzKHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29udHJvbFN0YXR1cyh2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbCk6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlIHtcclxuICAgIGxldCBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJywgJ3dhcm5pbmcnKSkge1xyXG4gICAgICBzdGF0dXMgPSAnd2FybmluZyc7XHJcbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcclxuICAgICAgc3RhdHVzID0gJ2Vycm9yJztcclxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fCB2YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJykpIHtcclxuICAgICAgc3RhdHVzID0gJ3ZhbGlkYXRpbmcnO1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXR1cyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVDb250cm9sU3RhdHVzKHZhbGlkU3RhdHVzOiBzdHJpbmcsIHN0YXR1c1R5cGU/OiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB7IGRpcnR5LCB0b3VjaGVkLCBzdGF0dXMgfSA9IHRoaXMudmFsaWRhdGVDb250cm9sO1xyXG4gICAgICByZXR1cm4gKCEhZGlydHkgfHwgISF0b3VjaGVkKSAmJiAoc3RhdHVzVHlwZSA/IHRoaXMudmFsaWRhdGVDb250cm9sLmhhc0Vycm9yKHN0YXR1c1R5cGUpIDogc3RhdHVzID09PSB2YWxpZFN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldElubmVyVGlwKHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogQWJzdHJhY3RDb250cm9sIHwgTmdNb2RlbCB9PiB8IG51bGwge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgIHJldHVybiAoIXRoaXMuZGlzYWJsZUF1dG9UaXBzICYmIHRoaXMuYXV0b0Vycm9yVGlwKSB8fCB0aGlzLmNtYWNzRXJyb3JUaXAgfHwgbnVsbDtcclxuICAgICAgY2FzZSAndmFsaWRhdGluZyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY21hY3NWYWxpZGF0aW5nVGlwIHx8IG51bGw7XHJcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNtYWNzU3VjY2Vzc1RpcCB8fCBudWxsO1xyXG4gICAgICBjYXNlICd3YXJuaW5nJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5jbWFjc1dhcm5pbmdUaXAgfHwgbnVsbDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQXV0b0Vycm9yVGlwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sKSB7XHJcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVDb250cm9sLmVycm9ycyB8fCB7fTtcclxuICAgICAgbGV0IGF1dG9FcnJvclRpcCA9ICcnO1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBlcnJvcnMpIHtcclxuICAgICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgIGF1dG9FcnJvclRpcCA9XHJcbiAgICAgICAgICAgIGVycm9yc1trZXldPy5bdGhpcy5sb2NhbGVJZF0gPz9cclxuICAgICAgICAgICAgdGhpcy5jbWFjc0F1dG9UaXBzPy5bdGhpcy5sb2NhbGVJZF0/LltrZXldID8/XHJcbiAgICAgICAgICAgIHRoaXMuY21hY3NBdXRvVGlwcy5kZWZhdWx0Py5ba2V5XSA/P1xyXG4gICAgICAgICAgICB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NBdXRvVGlwcz8uW3RoaXMubG9jYWxlSWRdPy5ba2V5XSA/P1xyXG4gICAgICAgICAgICB0aGlzLmNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NBdXRvVGlwcy5kZWZhdWx0Py5ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEhYXV0b0Vycm9yVGlwKSB7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hdXRvRXJyb3JUaXAgPSBhdXRvRXJyb3JUaXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZUF1dG9UaXBzKG9ic2VydmFibGU6IE9ic2VydmFibGU8TnpTYWZlQW55Pik6IHZvaWQge1xyXG4gICAgb2JzZXJ2YWJsZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVBdXRvVGlwcykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQXV0b0Vycm9yVGlwKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgY21hY3NGb3JtSXRlbUNvbXBvbmVudDogQ21hY3NGb3JtSXRlbUNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBjbWFjc0Zvcm1EaXJlY3RpdmU6IENtYWNzRm9ybURpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1jb250cm9sJyk7XHJcblxyXG4gICAgdGhpcy5zdWJzY3JpYmVBdXRvVGlwcyhpMThuLmxvY2FsZUNoYW5nZS5waXBlKHRhcChsb2NhbGUgPT4gKHRoaXMubG9jYWxlSWQgPSBsb2NhbGUubG9jYWxlKSkpKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHModGhpcy5jbWFjc0Zvcm1EaXJlY3RpdmU/LmdldElucHV0T2JzZXJ2YWJsZSgnY21hY3NBdXRvVGlwcycpKTtcclxuICAgIHRoaXMuc3Vic2NyaWJlQXV0b1RpcHMoXHJcbiAgICAgIHRoaXMuY21hY3NGb3JtRGlyZWN0aXZlPy5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzRGlzYWJsZUF1dG9UaXBzJykucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5jbWFjc0Rpc2FibGVBdXRvVGlwcyA9PT0gJ2RlZmF1bHQnKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGNtYWNzRGlzYWJsZUF1dG9UaXBzLCBjbWFjc0F1dG9UaXBzLCBjbWFjc1N1Y2Nlc3NUaXAsIGNtYWNzV2FybmluZ1RpcCwgY21hY3NFcnJvclRpcCwgY21hY3NWYWxpZGF0aW5nVGlwIH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChjbWFjc0Rpc2FibGVBdXRvVGlwcyB8fCBjbWFjc0F1dG9UaXBzKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQXV0b0Vycm9yVGlwKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKGNtYWNzU3VjY2Vzc1RpcCB8fCBjbWFjc1dhcm5pbmdUaXAgfHwgY21hY3NFcnJvclRpcCB8fCBjbWFjc1ZhbGlkYXRpbmdUaXApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0dXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmNtYWNzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wuY29udHJvbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNtYWNzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2whO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==