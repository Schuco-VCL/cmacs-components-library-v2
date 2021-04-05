import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
const _c0 = ["processDotTemplate"];
function CmacsStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-steps-item-tail-secondary", ctx_r0.secondary);
} }
function CmacsStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function CmacsStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementEnd();
} }
function CmacsStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} }
function CmacsStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", !ctx_r10.oldAPIIcon && icon_r11)("ngClass", ctx_r10.oldAPIIcon && icon_r11);
} }
function CmacsStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, CmacsStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r9.cmacsIcon);
} }
function CmacsStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(1, CmacsStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    i0.ɵɵtemplate(2, CmacsStepComponent_ng_template_3_span_2_Template, 1, 0, "span", 10);
    i0.ɵɵtemplate(3, CmacsStepComponent_ng_template_3_span_3_Template, 2, 1, "span", 10);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.status === "finish" && !ctx_r1.cmacsIcon && !ctx_r1.secondary);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.status === "error");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r1.status === "process" || ctx_r1.status === "wait") && !ctx_r1.cmacsIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.cmacsIcon);
} }
function CmacsStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 17);
} }
function CmacsStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function CmacsStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵtemplate(1, CmacsStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(3, CmacsStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r12 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customProcessTemplate || _r12)("ngTemplateOutletContext", i0.ɵɵpureFunction3(2, _c1, _r12, ctx_r2.status, ctx_r2.index));
} }
function CmacsStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.cmacsTitle);
} }
function CmacsStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r15.subtitle);
} }
function CmacsStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, CmacsStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.subtitle);
} }
function CmacsStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.description);
} }
export class CmacsStepComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.disabled = false;
        this.secondary = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new Subject();
        this._currentIndex = 0;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get cmacsIcon() {
        return this._icon;
    }
    set cmacsIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
        }
        this._icon = value;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.disabled) {
            this.click$.next(this.index);
        }
    }
    enable() {
        this.disabled = false;
        this.cdr.markForCheck();
    }
    disable() {
        this.disabled = true;
        this.cdr.markForCheck();
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
CmacsStepComponent.ɵfac = function CmacsStepComponent_Factory(t) { return new (t || CmacsStepComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsStepComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsStepComponent, selectors: [["cmacs-step"]], viewQuery: function CmacsStepComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
    } }, hostAttrs: [1, "ant-steps-item"], hostVars: 18, hostBindings: function CmacsStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-steps-item-wait", ctx.status === "wait")("ant-steps-secondary", ctx.secondary)("ant-steps-item-process", ctx.status === "process")("ant-steps-item-finish", ctx.status === "finish")("ant-steps-item-error", ctx.status === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.disabled)("ant-steps-item-custom", !!ctx.cmacsIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { cmacsTitle: "cmacsTitle", subtitle: "subtitle", description: "description", disabled: "disabled", secondary: "secondary", status: "status", cmacsIcon: "cmacsIcon" }, exportAs: ["cmacsStep"], decls: 11, vars: 14, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 3, "ant-steps-item-tail-secondary", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function CmacsStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function CmacsStepComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        i0.ɵɵtemplate(1, CmacsStepComponent_div_1_Template, 1, 2, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, CmacsStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        i0.ɵɵtemplate(4, CmacsStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵtemplate(7, CmacsStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        i0.ɵɵtemplate(8, CmacsStepComponent_div_8_Template, 2, 1, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 8);
        i0.ɵɵtemplate(10, CmacsStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("tabindex", ctx.clickable && !ctx.disabled ? 0 : null);
        i0.ɵɵattribute("role", ctx.clickable && !ctx.disabled ? "button" : null);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.last !== true);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-steps-item-icon-secondary", ctx.secondary);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showProcessDot);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showProcessDot);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-steps-item-content-secondary", ctx.secondary);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-steps-item-title-secondary", ctx.secondary);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.cmacsTitle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.subtitle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.description);
    } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective, i1.NgClass, i1.NgTemplateOutlet], styles: [".cmacs-steps-clickable:hover{cursor:pointer}.ant-steps-vertical>.ant-steps-item .ant-steps-item-description{padding-bottom:unset}.ant-steps-vertical>.ant-steps-item .ant-steps-item-content{min-height:unset;line-height:unset}.ant-steps-vertical>.ant-steps-item .ant-steps-item-title{line-height:25px}.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail:after,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-tail:after,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-tail:after{background:linear-gradient(180deg,#fff,#fff 50%,#dee0e5 0,#dee0e5);background-size:auto;background-size:100% 4px}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail{position:absolute;top:0;left:11px;padding:23px 0 0;height:130%}.ant-steps-vertical>.ant-steps-item>.ant-steps-item-container>.ant-steps-item-tail-secondary{position:absolute;top:0;left:11px;padding:9px 0 0;height:130%}.ant-steps-vertical>.ant-steps-item.ant-steps-secondary+.ant-steps-item:not(.ant-steps-secondary)>.ant-steps-item-container>.ant-steps-item-tail{padding:28px 0 0}.ant-steps-vertical .ant-steps-item-icon{margin-right:25px}.ant-steps-item-icon{border-color:#dee0e5!important;background:#fff!important;height:23px;width:23px;margin-right:25px!important;font-size:12px}.ant-steps-item-process .ant-steps-item-icon{background:#fff;height:23px;width:23px;margin-right:25px;font-size:12px;box-shadow:0 6px 10px rgba(59,63,70,.15)}.ant-steps-item-process .ant-steps-item-icon>.ant-steps-icon{color:#2a7cff}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:2px}.ant-steps-item-icon-secondary{background:#dee0e5!important;height:9px;width:9px;position:relative;top:7px;left:7px;margin-right:39px!important;border-color:#dee0e5!important}.ant-steps-item-process .ant-steps-item-icon-secondary{height:9px;width:9px;position:relative;top:7px;left:7px;margin-right:39px!important;box-shadow:none}.ant-steps-item-finish .ant-steps-item-icon-secondary,.ant-steps-item-process .ant-steps-item-icon-secondary{background:#2a7cff!important;border-color:#2a7cff!important}.ant-steps-item-icon>.ant-steps-icon>.anticon{vertical-align:4px;font-size:12px}.ant-steps-item:not(:last-child){padding-bottom:41px}.ant-steps-item:not(.ant-steps-secondary)+.ant-steps-item.ant-steps-secondary{margin-top:-22px}.ant-steps-item.ant-steps-secondary{padding-bottom:14px}.ant-steps-item.ant-steps-secondary+.ant-steps-item:not(.ant-steps-secondary){padding-top:5px}.ant-steps-vertical .ant-steps-item-content{min-height:auto}.ant-steps-item-title{font-family:Roboto-Medium,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-stretch:normal;font-size:12px}.ant-steps-vertical .ant-steps-item-title{line-height:24px;padding-right:0}.ant-steps-vertical .ant-steps-item-description{font-size:12px;padding-bottom:0}.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-finish>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-vertical .ant-steps-item-content-secondary{min-height:18px}.ant-steps-item-title-secondary{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;font-stretch:normal}.ant-steps-item-custom>.ant-steps-item-container>.ant-steps-item-icon>.ant-steps-icon{top:unset;left:unset;width:unset;height:unset;font-size:12px;line-height:unset}.ant-steps-item-custom>.ant-steps-item-container>.ant-steps-item-icon{height:23px;background:0 0;border:1px solid #dee0e5}.ant-steps-item-finish .ant-steps-item-icon{border-color:#1890ff!important}.ant-steps-item-process .ant-steps-item-icon{background-color:#fff;border-color:#1890ff!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsStepComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-step',
                exportAs: 'cmacsStep',
                styleUrls: ['./cmacs-step.component.css'],
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-steps-item-container"
      [attr.role]="clickable && !disabled ? 'button' : null"
      [tabindex]="clickable && !disabled ? 0 : null"
      (click)="onClick()"
    >
      <div class="ant-steps-item-tail" [class.ant-steps-item-tail-secondary]="secondary" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon" [class.ant-steps-item-icon-secondary]="secondary">
        <ng-template [ngIf]="!showProcessDot">
          <span class="ant-steps-icon" *ngIf="status === 'finish' && !cmacsIcon && !secondary"><i nz-icon nzType="check"></i></span>
          <span class="ant-steps-icon" *ngIf="status === 'error'"><i nz-icon nzType="close"></i></span>
          <span class="ant-steps-icon" *ngIf="(status === 'process' || status === 'wait') && !cmacsIcon"></span>
          <span class="ant-steps-icon" *ngIf="cmacsIcon">
            <ng-container *nzStringTemplateOutlet="cmacsIcon; let icon">
              <i nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></i>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: status,
                index: index
              }"
            ></ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content" [class.ant-steps-item-content-secondary]="secondary">
        <div class="ant-steps-item-title" [class.ant-steps-item-title-secondary]="secondary">
          <ng-container *nzStringTemplateOutlet="cmacsTitle">{{ cmacsTitle }}</ng-container>
          <div *ngIf="subtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="subtitle">{{ subtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="description">{{ description }}</ng-container>
        </div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-steps-item',
                    '[class.ant-steps-item-wait]': 'status === "wait"',
                    '[class.ant-steps-secondary]': 'secondary',
                    '[class.ant-steps-item-process]': 'status === "process"',
                    '[class.ant-steps-item-finish]': 'status === "finish"',
                    '[class.ant-steps-item-error]': 'status === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'disabled',
                    '[class.ant-steps-item-custom]': '!!cmacsIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { processDotTemplate: [{
            type: ViewChild,
            args: ['processDotTemplate', { static: false }]
        }], cmacsTitle: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], description: [{
            type: Input
        }], disabled: [{
            type: Input
        }], secondary: [{
            type: Input
        }], status: [{
            type: Input
        }], cmacsIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc3RlcHMvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7SUFnQnpCLHlCQUErRzs7O0lBQTlFLGlFQUFpRDs7O0lBRzlFLGdDQUFxRjtJQUFBLHdCQUE4QjtJQUFBLGlCQUFPOzs7SUFDMUgsZ0NBQXdEO0lBQUEsd0JBQThCO0lBQUEsaUJBQU87OztJQUM3RiwyQkFBc0c7OztJQUVwRyw2QkFBNEQ7SUFDMUQsd0JBQTZFO0lBQy9FLDBCQUFlOzs7O0lBREYsZUFBOEI7SUFBOUIsd0RBQThCLDJDQUFBOzs7SUFGN0MsZ0NBQStDO0lBQzdDLDBHQUVlO0lBQ2pCLGlCQUFPOzs7SUFIVSxlQUFtQztJQUFuQyx5REFBbUM7OztJQUpwRCxvRkFBMEg7SUFDMUgsb0ZBQTZGO0lBQzdGLG9GQUFzRztJQUN0RyxvRkFJTzs7O0lBUHVCLDJGQUFxRDtJQUNyRCxlQUF3QjtJQUF4QixnREFBd0I7SUFDeEIsZUFBK0Q7SUFBL0QscUdBQStEO0lBQy9ELGVBQWU7SUFBZix1Q0FBZTs7O0lBU3pDLDJCQUF3Qzs7Ozs7SUFGNUMsZ0NBQTZCO0lBQzNCLG1JQUVjO0lBQ2Qsa0dBT2U7SUFDakIsaUJBQU87Ozs7SUFQSCxlQUFnRTtJQUFoRSx1RUFBZ0UsMEZBQUE7OztJQVlwRSw2QkFBbUQ7SUFBQSxZ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UUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGdCQUFnQjtvQkFDdkIsNkJBQTZCLEVBQUUsbUJBQW1CO29CQUNsRCw2QkFBNkIsRUFBRSxXQUFXO29CQUMxQyxnQ0FBZ0MsRUFBRSxzQkFBc0I7b0JBQ3hELCtCQUErQixFQUFFLHFCQUFxQjtvQkFDdEQsOEJBQThCLEVBQUUsb0JBQW9CO29CQUNwRCwrQkFBK0IsRUFBRSx3QkFBd0I7b0JBQ3pELGlDQUFpQyxFQUFFLFVBQVU7b0JBQzdDLCtCQUErQixFQUFFLGFBQWE7b0JBQzlDLDhCQUE4QixFQUFFLHlEQUF5RDtpQkFDMUY7YUFDRjtvRUFHcUQsa0JBQWtCO2tCQUFyRSxTQUFTO21CQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUV6QyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRixNQUFNO2tCQURULEtBQUs7WUFjRixTQUFTO2tCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnY21hY3Mtc3RlcCcsXG4gIGV4cG9ydEFzOiAnY21hY3NTdGVwJyxcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYW50LXN0ZXBzLWl0ZW0tY29udGFpbmVyXCJcbiAgICAgIFthdHRyLnJvbGVdPVwiY2xpY2thYmxlICYmICFkaXNhYmxlZCA/ICdidXR0b24nIDogbnVsbFwiXG4gICAgICBbdGFiaW5kZXhdPVwiY2xpY2thYmxlICYmICFkaXNhYmxlZCA/IDAgOiBudWxsXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS10YWlsXCIgW2NsYXNzLmFudC1zdGVwcy1pdGVtLXRhaWwtc2Vjb25kYXJ5XT1cInNlY29uZGFyeVwiICpuZ0lmPVwibGFzdCAhPT0gdHJ1ZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWljb25cIiBbY2xhc3MuYW50LXN0ZXBzLWl0ZW0taWNvbi1zZWNvbmRhcnldPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhc2hvd1Byb2Nlc3NEb3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJzdGF0dXMgPT09ICdmaW5pc2gnICYmICFjbWFjc0ljb24gJiYgIXNlY29uZGFyeVwiPjxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cInN0YXR1cyA9PT0gJ2Vycm9yJ1wiPjxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN0ZXBzLWljb25cIiAqbmdJZj1cIihzdGF0dXMgPT09ICdwcm9jZXNzJyB8fCBzdGF0dXMgPT09ICd3YWl0JykgJiYgIWNtYWNzSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCIgKm5nSWY9XCJjbWFjc0ljb25cIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc0ljb247IGxldCBpY29uXCI+XG4gICAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCIhb2xkQVBJSWNvbiAmJiBpY29uXCIgW25nQ2xhc3NdPVwib2xkQVBJSWNvbiAmJiBpY29uXCI+PC9pPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwic2hvd1Byb2Nlc3NEb3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1zdGVwcy1pY29uXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI3Byb2Nlc3NEb3RUZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3RlcHMtaWNvbi1kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVByb2Nlc3NUZW1wbGF0ZSB8fCBwcm9jZXNzRG90VGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgICAgICAgICRpbXBsaWNpdDogcHJvY2Vzc0RvdFRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgID48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zdGVwcy1pdGVtLWNvbnRlbnRcIiBbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tY29udGVudC1zZWNvbmRhcnldPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS10aXRsZVwiIFtjbGFzcy5hbnQtc3RlcHMtaXRlbS10aXRsZS1zZWNvbmRhcnldPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNtYWNzVGl0bGVcIj57eyBjbWFjc1RpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cInN1YnRpdGxlXCIgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1YnRpdGxlXCI+e3sgc3VidGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc3RlcHMtaXRlbS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJkZXNjcmlwdGlvblwiPnt7IGRlc2NyaXB0aW9uIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1zdGVwcy1pdGVtJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXdhaXRdJzogJ3N0YXR1cyA9PT0gXCJ3YWl0XCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLXNlY29uZGFyeV0nOiAnc2Vjb25kYXJ5JyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXByb2Nlc3NdJzogJ3N0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZmluaXNoXSc6ICdzdGF0dXMgPT09IFwiZmluaXNoXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ3N0YXR1cyA9PT0gXCJlcnJvclwiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWFjdGl2ZV0nOiAnY3VycmVudEluZGV4ID09PSBpbmRleCcsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tY3VzdG9tXSc6ICchIWNtYWNzSWNvbicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtbmV4dC1lcnJvcl0nOiAnKG91dFN0YXR1cyA9PT0gXCJlcnJvclwiKSAmJiAoY3VycmVudEluZGV4ID09PSBpbmRleCArIDEpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgQFZpZXdDaGlsZCgncHJvY2Vzc0RvdFRlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByb2Nlc3NEb3RUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIGNtYWNzVGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgc3VidGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNlY29uZGFyeSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzdGF0dXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgc2V0IHN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcblxuICBASW5wdXQoKVxuICBnZXQgY21hY3NJY29uKCk6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgc2V0IGNtYWNzSWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgfVxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuXG4gIG9sZEFQSUljb24gPSB0cnVlO1xuICBwcml2YXRlIF9pY29uPzogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGluZGV4ID0gMDtcbiAgbGFzdCA9IGZhbHNlO1xuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGNsaWNrYWJsZSA9IGZhbHNlO1xuICBjbGljayQgPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7XG4gIH1cblxuICBzZXQgY3VycmVudEluZGV4KGN1cnJlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tU3RhdHVzKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSBjdXJyZW50ID4gdGhpcy5pbmRleCA/ICdmaW5pc2gnIDogY3VycmVudCA9PT0gdGhpcy5pbmRleCA/IHRoaXMub3V0U3RhdHVzIHx8ICcnIDogJ3dhaXQnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xpY2thYmxlICYmIHRoaXMuY3VycmVudEluZGV4ICE9PSB0aGlzLmluZGV4ICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsaWNrJC5uZXh0KHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGljayQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19