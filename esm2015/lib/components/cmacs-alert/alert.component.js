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
CmacsAlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsAlertComponent, selectors: [["cmacs-alert"]], inputs: { closeText: "closeText", iconType: "iconType", message: "message", description: "description", type: "type", closeable: "closeable", showIcon: "showIcon", banner: "banner", noAnimation: "noAnimation" }, outputs: { onClose: "onClose" }, exportAs: ["cmacsAlert"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description", 4, "ngIf"], [1, "ant-alert"], [4, "ngIf"], ["class", "ant-alert-content", 4, "ngIf"], ["type", "button", "tabindex", "0", "class", "ant-alert-close-icon", 3, "click", 4, "ngIf"], ["nz-icon", "", 1, "ant-alert-icon", 3, "nzType", "nzTheme"], [1, "ant-alert-content"], ["class", "ant-alert-message", 4, "ngIf"], ["class", "ant-alert-description", 4, "ngIf"], [1, "ant-alert-message"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-description"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], ["closeDefaultTemplate", ""], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"], [1, "ant-alert-close-text"]], template: function CmacsAlertComponent_Template(rf, ctx) { if (rf & 1) {
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
      <button type="button" tabindex="0" *ngIf="closeable || closeText" class="ant-alert-close-icon" (click)="closeAlert()">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWFsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lBeUJyQyw2QkFBK0I7SUFDN0IsdUJBQW9HO0lBQ3RHLDBCQUFlOzs7SUFEcUIsZUFBdUM7SUFBdkMsbUVBQXVDLDZCQUFBOzs7SUFJdkUsNkJBQWdEO0lBQUEsWUFBYTtJQUFBLDBCQUFlOzs7SUFBNUIsZUFBYTtJQUFiLG9DQUFhOzs7SUFEL0QsK0JBQWdEO0lBQzlDLDBHQUE0RTtJQUM5RSxpQkFBTzs7O0lBRFUsZUFBK0I7SUFBL0IsdURBQStCOzs7SUFHOUMsNkJBQW9EO0lBQUEsWUFBaUI7SUFBQSwwQkFBZTs7O0lBQWhDLGVBQWlCO0lBQWpCLHdDQUFpQjs7O0lBRHZFLGdDQUF3RDtJQUN0RCwwR0FBb0Y7SUFDdEYsaUJBQU87OztJQURVLGVBQW1DO0lBQW5DLDJEQUFtQzs7O0lBTHRELDhCQUE4RDtJQUM1RCxrRkFFTztJQUNQLGtGQUVPO0lBQ1QsaUJBQU07OztJQU42QixlQUFhO0lBQWIscUNBQWE7SUFHVCxlQUFpQjtJQUFqQix5Q0FBaUI7OztJQU1wRCx3QkFBOEI7OztJQUc5Qiw2QkFBa0Q7SUFDaEQsZ0NBQW1DO0lBQUEsWUFBZTtJQUFBLGlCQUFPO0lBQzNELDBCQUFlOzs7SUFEc0IsZUFBZTtJQUFmLHVDQUFlOzs7SUFGdEQsNkJBQTJEO0lBQ3pELHFIQUVlO0lBQ2pCLDBCQUFlOzs7SUFIRSxlQUFpQztJQUFqQywwREFBaUM7Ozs7SUFMcEQsa0NBQXNIO0lBQXZCLG9NQUFzQjtJQUNuSCxxSUFFYztJQUNkLHNHQUllO0lBQ2pCLGlCQUFTOzs7O0lBTFEsZUFBaUI7SUFBakIsdUNBQWlCLGlCQUFBOzs7O0lBL0JwQyw4QkFlQztJQURDLDJPQUFnRDtJQUVoRCw0RkFFZTtJQUNmLDBFQU9NO0lBQ04sZ0ZBU1M7SUFDWCxpQkFBTTs7O0lBbENKLHFEQUFxQyxnREFBQSwwQ0FBQSxnREFBQSw0Q0FBQSx1Q0FBQSxtQ0FBQSx3Q0FBQSxvREFBQTtJQVNyQywrQ0FBMEIsZ0NBQUE7SUFJWCxlQUFjO0lBQWQsc0NBQWM7SUFHRyxlQUE0QjtJQUE1QiwyREFBNEI7SUFReEIsZUFBNEI7SUFBNUIsMkRBQTRCOztBQWxDdEUsTUFBTSxxQkFBcUIsR0FBZ0IsT0FBTyxDQUFDO0FBbURuRCxNQUFNLE9BQU8sbUJBQW1CO0lBeUI5QixZQUFtQixlQUFnQyxFQUFVLEdBQXNCLEVBQXNCLGNBQThCO1FBQXBILG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQXNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXhCOUgsa0JBQWEsR0FBZ0IscUJBQXFCLENBQUM7UUFNbkQsY0FBUyxHQUFzQyxJQUFJLENBQUM7UUFDcEQsYUFBUSxHQUFrQixJQUFJLENBQUM7UUFDL0IsWUFBTyxHQUFzQyxJQUFJLENBQUM7UUFDbEQsZ0JBQVcsR0FBc0MsSUFBSSxDQUFDO1FBQ3RELFNBQUksR0FBNkMsTUFBTSxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN4QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDekQsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBdUIsTUFBTSxDQUFDO1FBQ3ZDLHFCQUFnQixHQUFXLGFBQWEsQ0FBQztRQUN6QyxRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyxxQkFBcUIsQ0FBQzthQUN2RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxRQUFROztRQUNOLE1BQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLDBDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBRTtRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxPQUFPO29CQUNWLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUM7b0JBQ3ZDLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztvQkFDN0MsTUFBTTthQUNUO1NBQ0Y7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0ZBMUZVLG1CQUFtQjt3REFBbkIsbUJBQW1CO1FBNUM1QixxRUFxQ007O1FBcENILGtDQUFhO3NnQkFITixDQUFDLGdCQUFnQixDQUFDO0FBMERTO0lBQTdCLFVBQVUsRUFBRTtJQUFFLFlBQVksRUFBRTtzREFBNEI7QUFDM0I7SUFBN0IsVUFBVSxFQUFFO0lBQUUsWUFBWSxFQUFFO3FEQUEyQjtBQUN4QztJQUFmLFlBQVksRUFBRTttREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTt3REFBcUI7dUZBZmxDLG1CQUFtQjtjQWpEL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O3NCQTBCdUYsUUFBUTt3QkFsQnJGLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNpQyxTQUFTO2tCQUEvQyxLQUFLO1lBQ2lDLFFBQVE7a0JBQTlDLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ2EsT0FBTztrQkFBekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdhbGVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NtYWNzLWFsZXJ0JyxcbiAgZXhwb3J0QXM6ICdjbWFjc0FsZXJ0JyxcbiAgYW5pbWF0aW9uczogW3NsaWRlQWxlcnRNb3Rpb25dLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgICpuZ0lmPVwiIWNsb3NlZFwiXG4gICAgICBjbGFzcz1cImFudC1hbGVydFwiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtc3VjY2Vzc109XCJ0eXBlID09PSAnc3VjY2VzcydcIlxuICAgICAgW2NsYXNzLmFudC1hbGVydC1pbmZvXT1cInR5cGUgPT09ICdpbmZvJ1wiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LXdhcm5pbmddPVwidHlwZSA9PT0gJ3dhcm5pbmcnXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtZXJyb3JdPVwidHlwZSA9PT0gJ2Vycm9yJ1wiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LW5vLWljb25dPVwiIXNob3dJY29uXCJcbiAgICAgIFtjbGFzcy5hbnQtYWxlcnQtYmFubmVyXT1cImJhbm5lclwiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LWNsb3NhYmxlXT1cImNsb3NlYWJsZVwiXG4gICAgICBbY2xhc3MuYW50LWFsZXJ0LXdpdGgtZGVzY3JpcHRpb25dPVwiISFkZXNjcmlwdGlvblwiXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvblwiXG4gICAgICBbQHNsaWRlQWxlcnRNb3Rpb25dXG4gICAgICAoQHNsaWRlQWxlcnRNb3Rpb24uZG9uZSk9XCJvbkZhZGVBbmltYXRpb25Eb25lKClcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICA8aSBuei1pY29uIGNsYXNzPVwiYW50LWFsZXJ0LWljb25cIiBbbnpUeXBlXT1cImljb25UeXBlIHx8IGluZmVycmVkSWNvblR5cGVcIiBbbnpUaGVtZV09XCJpY29uVGhlbWVcIj48L2k+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtYWxlcnQtY29udGVudFwiICpuZ0lmPVwibWVzc2FnZSB8fCBkZXNjcmlwdGlvblwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1hbGVydC1tZXNzYWdlXCIgKm5nSWY9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cIm1lc3NhZ2VcIj57eyBtZXNzYWdlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtYWxlcnQtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImRlc2NyaXB0aW9uXCI+e3sgZGVzY3JpcHRpb24gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiAqbmdJZj1cImNsb3NlYWJsZSB8fCBjbG9zZVRleHRcIiBjbGFzcz1cImFudC1hbGVydC1jbG9zZS1pY29uXCIgKGNsaWNrKT1cImNsb3NlQWxlcnQoKVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Nsb3NlRGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIj48L2k+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbG9zZVRleHQ7IGVsc2UgY2xvc2VEZWZhdWx0VGVtcGxhdGVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY2xvc2VUZXh0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1hbGVydC1jbG9zZS10ZXh0XCI+e3sgY2xvc2VUZXh0IH19PC9zcGFuPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYWxlcnQuY29tcG9uZW50LmNzcyddLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0FsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY2xvc2VhYmxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zaG93SWNvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYmFubmVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ub0FuaW1hdGlvbjogQm9vbGVhbklucHV0O1xuXG4gIEBJbnB1dCgpIGNsb3NlVGV4dDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyA9ICdpbmZvJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgY2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIHNob3dJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBiYW5uZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG5vQW5pbWF0aW9uID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBjbG9zZWQgPSBmYWxzZTtcbiAgaWNvblRoZW1lOiAnb3V0bGluZScgfCAnZmlsbCcgPSAnZmlsbCc7XG4gIGluZmVycmVkSWNvblR5cGU6IHN0cmluZyA9ICdpbmZvLWNpcmNsZSc7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgaXNUeXBlU2V0ID0gZmFsc2U7XG4gIHByaXZhdGUgaXNTaG93SWNvblNldCA9IGZhbHNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICB9XG5cbiAgb25GYWRlQW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNob3dJY29uLCBkZXNjcmlwdGlvbiwgdHlwZSwgYmFubmVyIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChzaG93SWNvbikge1xuICAgICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXMuaXNUeXBlU2V0ID0gdHJ1ZTtcbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICB0aGlzLmluZmVycmVkSWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZEljb25UeXBlID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRJY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuaWNvblRoZW1lID0gdGhpcy5kZXNjcmlwdGlvbiA/ICdvdXRsaW5lJyA6ICdmaWxsJztcbiAgICB9XG4gICAgaWYgKGJhbm5lcikge1xuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAnd2FybmluZyc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNTaG93SWNvblNldCkge1xuICAgICAgICB0aGlzLnNob3dJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=