import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
function CmacsAlertComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r1.iconType || ctx_r1.inferredIconType)("nzTheme", ctx_r1.iconTheme);
} }
function CmacsAlertComponent_div_0_div_2_span_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.message);
} }
function CmacsAlertComponent_div_0_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_div_2_span_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.message);
} }
function CmacsAlertComponent_div_0_div_2_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.description);
} }
function CmacsAlertComponent_div_0_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_div_2_span_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r5.description);
} }
function CmacsAlertComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_div_2_span_1_Template, 2, 1, "span", 7);
    i0.ɵɵtemplate(2, CmacsAlertComponent_div_0_div_2_span_2_Template, 2, 1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.message);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.description);
} }
function CmacsAlertComponent_div_0_button_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 15);
} }
function CmacsAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r11.closeText);
} }
function CmacsAlertComponent_div_0_button_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_button_3_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.closeText);
} }
function CmacsAlertComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function CmacsAlertComponent_div_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.closeAlert(); });
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_button_3_ng_template_1_Template, 1, 0, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsAlertComponent_div_0_button_3_ng_container_3_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = i0.ɵɵreference(2);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.closeText)("ngIfElse", _r8);
} }
function CmacsAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("@slideAlertMotion.done", function CmacsAlertComponent_div_0_Template_div_animation_slideAlertMotion_done_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onFadeAnimationDone(); });
    i0.ɵɵtemplate(1, CmacsAlertComponent_div_0_ng_container_1_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, CmacsAlertComponent_div_0_div_2_Template, 3, 2, "div", 3);
    i0.ɵɵtemplate(3, CmacsAlertComponent_div_0_button_3_Template, 4, 2, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-alert-rtl", ctx_r0.dir === "rtl")("ant-alert-success", ctx_r0.type === "success")("ant-alert-info", ctx_r0.type === "info")("ant-alert-warning", ctx_r0.type === "warning")("ant-alert-error", ctx_r0.type === "error")("ant-alert-no-icon", !ctx_r0.showIcon)("ant-alert-banner", ctx_r0.banner)("ant-alert-closable", ctx_r0.closeable)("ant-alert-with-description", !!ctx_r0.description);
    i0.ɵɵproperty("@.disabled", ctx_r0.noAnimation)("@slideAlertMotion", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.message || ctx_r0.description);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.closeable || ctx_r0.closeText);
} }
const NZ_CONFIG_MODULE_NAME = 'alert';
export class CmacsAlertComponent {
    constructor(nzConfigService, cdr, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.closeText = null;
        this.iconType = null;
        this.message = null;
        this.description = null;
        this.type = 'info';
        this.closeable = false;
        this.showIcon = false;
        this.banner = false;
        this.noAnimation = false;
        this.onClose = new EventEmitter();
        this.closed = false;
        this.iconTheme = 'fill';
        this.inferredIconType = 'info-circle';
        this.dir = 'ltr';
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.destroy$ = new Subject();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    closeAlert() {
        this.closed = true;
    }
    onFadeAnimationDone() {
        if (this.closed) {
            this.onClose.emit(true);
        }
    }
    ngOnChanges(changes) {
        const { showIcon, description, type, banner } = changes;
        if (showIcon) {
            this.isShowIconSet = true;
        }
        if (type) {
            this.isTypeSet = true;
            switch (this.type) {
                case 'error':
                    this.inferredIconType = 'close-circle';
                    break;
                case 'success':
                    this.inferredIconType = 'check-circle';
                    break;
                case 'info':
                    this.inferredIconType = 'info-circle';
                    break;
                case 'warning':
                    this.inferredIconType = 'exclamation-circle';
                    break;
            }
        }
        if (description) {
            this.iconTheme = this.description ? 'outline' : 'fill';
        }
        if (banner) {
            if (!this.isTypeSet) {
                this.type = 'warning';
            }
            if (!this.isShowIconSet) {
                this.showIcon = true;
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsAlertComponent.ɵfac = function CmacsAlertComponent_Factory(t) { return new (t || CmacsAlertComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsAlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsAlertComponent, selectors: [["cmacs-alert"]], inputs: { closeText: "closeText", iconType: "iconType", message: "message", description: "description", type: "type", closeable: "closeable", showIcon: "showIcon", banner: "banner", noAnimation: "noAnimation" }, outputs: { onClose: "onClose" }, exportAs: ["cmacsAlert"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-content", 4, "ngIf"], ["type", "button", "aria-label", "Close", "role", "button", "tabindex", "0", "class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-content"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], ["type", "button", "aria-label", "Close", "role", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"], [1, "ant-alert-close-text"]], template: function CmacsAlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsAlertComponent_div_0_Template, 4, 23, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.closed);
    } }, directives: [i3.NgIf, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-alert-info{background-color:#009fe3;border:none}.ant-alert{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff;width:inherit}.ant-alert-close-icon .anticon-close{color:#fff;transition:color .3s}.ant-alert-message{color:#fff}"], encapsulation: 2, data: { animation: [slideAlertMotion] }, changeDetection: 0 });
__decorate([
    WithConfig(),
    InputBoolean()
], CmacsAlertComponent.prototype, "closeable", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], CmacsAlertComponent.prototype, "showIcon", void 0);
__decorate([
    InputBoolean()
], CmacsAlertComponent.prototype, "banner", void 0);
__decorate([
    InputBoolean()
], CmacsAlertComponent.prototype, "noAnimation", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsAlertComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-alert',
                exportAs: 'cmacsAlert',
                animations: [slideAlertMotion],
                template: `
    <div
      *ngIf="!closed"
      class="ant-alert"
      [class.ant-alert-rtl]="dir === 'rtl'"
      [class.ant-alert-success]="type === 'success'"
      [class.ant-alert-info]="type === 'info'"
      [class.ant-alert-warning]="type === 'warning'"
      [class.ant-alert-error]="type === 'error'"
      [class.ant-alert-no-icon]="!showIcon"
      [class.ant-alert-banner]="banner"
      [class.ant-alert-closable]="closeable"
      [class.ant-alert-with-description]="!!description"
      [@.disabled]="noAnimation"
      [@slideAlertMotion]
      (@slideAlertMotion.done)="onFadeAnimationDone()"
    >
      <ng-container *ngIf="showIcon">
        <i nz-icon class="ant-alert-icon" [nzType]="iconType || inferredIconType" [nzTheme]="iconTheme"></i>
      </ng-container>
      <div class="ant-alert-content" *ngIf="message || description">
        <span class="ant-alert-message" *ngIf="message">
          <ng-container *nzStringTemplateOutlet="message">{{ message }}</ng-container>
        </span>
        <span class="ant-alert-description" *ngIf="description">
          <ng-container *nzStringTemplateOutlet="description">{{ description }}</ng-container>
        </span>
      </div>
      <button type="button" aria-label="Close" role="button" tabindex="0" *ngIf="closeable || closeText" class="ant-alert-close-icon" (click)="closeAlert()">
        <ng-template #closeDefaultTemplate>
          <i nz-icon nzType="close"></i>
        </ng-template>
        <ng-container *ngIf="closeText; else closeDefaultTemplate">
          <ng-container *nzStringTemplateOutlet="closeText">
            <span class="ant-alert-close-text">{{ closeText }}</span>
          </ng-container>
        </ng-container>
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./cmacs-alert.component.css'],
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { closeText: [{
            type: Input
        }], iconType: [{
            type: Input
        }], message: [{
            type: Input
        }], description: [{
            type: Input
        }], type: [{
            type: Input
        }], closeable: [{
            type: Input
        }], showIcon: [{
            type: Input
        }], banner: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], onClose: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWFsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lBeUJyQyw2QkFBK0I7SUFDN0IsdUJBQW9HO0lBQ3RHLDBCQUFlOzs7SUFEcUIsZUFBdUM7SUFBdkMsbUVBQXVDLDZCQUFBOzs7SUFJdkUsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLG9DQUFhOzs7SUFEL0QsK0JBQWdEO0lBQzlDLDBHQUE0RTtJQUM5RSxpQkFBTzs7O0lBRFUsZUFBK0I7SUFBL0IsdURBQStCOzs7SUFHOUMsNkJBQW9EO0lBQUEsWUFBaUI7SUFBQSwwQkFBZTs7O0lBQWhDLGVBQWlCO0lBQWpCLHdDQUFpQjs7O0lBRHZFLGdDQUF3RDtJQUN0RCwwR0FBb0Y7SUFDdEYsaUJBQU87OztJQURVLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0lBTHRELDhCQUE4RDtJQUM1RCxrRkFFTztJQUNQLGtGQUVPO0lBQ1QsaUJB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Y3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdhbGVydCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWFsZXJ0JyxcclxuICBleHBvcnRBczogJ2NtYWNzQWxlcnQnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdJZj1cIiFjbG9zZWRcIlxyXG4gICAgICBjbGFzcz1cImFudC1hbGVydFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LXN1Y2Nlc3NdPVwidHlwZSA9PT0gJ3N1Y2Nlc3MnXCJcclxuICAgICAgW2NsYXNzLmFudC1hbGVydC1pbmZvXT1cInR5cGUgPT09ICdpbmZvJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtd2FybmluZ109XCJ0eXBlID09PSAnd2FybmluZydcIlxyXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LWVycm9yXT1cInR5cGUgPT09ICdlcnJvcidcIlxyXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LW5vLWljb25dPVwiIXNob3dJY29uXCJcclxuICAgICAgW2NsYXNzLmFudC1hbGVydC1iYW5uZXJdPVwiYmFubmVyXCJcclxuICAgICAgW2NsYXNzLmFudC1hbGVydC1jbG9zYWJsZV09XCJjbG9zZWFibGVcIlxyXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LXdpdGgtZGVzY3JpcHRpb25dPVwiISFkZXNjcmlwdGlvblwiXHJcbiAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uXCJcclxuICAgICAgW0BzbGlkZUFsZXJ0TW90aW9uXVxyXG4gICAgICAoQHNsaWRlQWxlcnRNb3Rpb24uZG9uZSk9XCJvbkZhZGVBbmltYXRpb25Eb25lKClcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0ljb25cIj5cclxuICAgICAgICA8aSBuei1pY29uIGNsYXNzPVwiYW50LWFsZXJ0LWljb25cIiBbbnpUeXBlXT1cImljb25UeXBlIHx8IGluZmVycmVkSWNvblR5cGVcIiBbbnpUaGVtZV09XCJpY29uVGhlbWVcIj48L2k+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWFsZXJ0LWNvbnRlbnRcIiAqbmdJZj1cIm1lc3NhZ2UgfHwgZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1hbGVydC1tZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtYWxlcnQtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZGVzY3JpcHRpb25cIj57eyBkZXNjcmlwdGlvbiB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImNsb3NlYWJsZSB8fCBjbG9zZVRleHRcIiBjbGFzcz1cImFudC1hbGVydC1jbG9zZS1pY29uXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoKVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY2xvc2VEZWZhdWx0VGVtcGxhdGU+XHJcbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNsb3NlVGV4dDsgZWxzZSBjbG9zZURlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNsb3NlVGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1hbGVydC1jbG9zZS10ZXh0XCI+e3sgY2xvc2VUZXh0IH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWFsZXJ0LmNvbXBvbmVudC5jc3MnXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jbG9zZWFibGU6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2hvd0ljb246IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmFubmVyOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX25vQW5pbWF0aW9uOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgpIGNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InID0gJ2luZm8nO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIGNsb3NlYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJhbm5lciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIGNsb3NlZCA9IGZhbHNlO1xyXG4gIGljb25UaGVtZTogJ291dGxpbmUnIHwgJ2ZpbGwnID0gJ2ZpbGwnO1xyXG4gIGluZmVycmVkSWNvblR5cGU6IHN0cmluZyA9ICdpbmZvLWNpcmNsZSc7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwcml2YXRlIGlzVHlwZVNldCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgaXNTaG93SWNvblNldCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkZhZGVBbmltYXRpb25Eb25lKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xvc2VkKSB7XHJcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBzaG93SWNvbiwgZGVzY3JpcHRpb24sIHR5cGUsIGJhbm5lciB9ID0gY2hhbmdlcztcclxuICAgIGlmIChzaG93SWNvbikge1xyXG4gICAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XHJcbiAgICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2hlY2stY2lyY2xlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2luZm8nOlxyXG4gICAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2luZm8tY2lyY2xlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuaWNvblRoZW1lID0gdGhpcy5kZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcclxuICAgIH1cclxuICAgIGlmIChiYW5uZXIpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9ICd3YXJuaW5nJztcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuaXNTaG93SWNvblNldCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==