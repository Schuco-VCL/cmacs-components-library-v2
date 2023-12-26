import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CmacsToolTipComponent } from '../cmacs-tooltip/tooltip';
import { isTooltipEmpty, NzTooltipBaseDirective } from './../cmacs-tooltip/base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/overlay";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "ng-zorro-antd/core/outlet";
function CmacsPopoverComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.cmacsTitle);
} }
function CmacsPopoverComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, CmacsPopoverComponent_ng_template_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.cmacsTitle);
} }
function CmacsPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.cmacsContent);
} }
function CmacsPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6)(5, "div");
    i0.ɵɵtemplate(6, CmacsPopoverComponent_ng_template_0_div_6_Template, 2, 1, "div", 7);
    i0.ɵɵelementStart(7, "div", 8);
    i0.ɵɵtemplate(8, CmacsPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.cmacsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.cmacsTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.cmacsContent);
} }
const NZ_CONFIG_MODULE_NAME = 'popover';
export class CmacsPopoverDirective extends NzTooltipBaseDirective {
    getProxyPropertyMap() {
        return {
            cmacsPopoverBackdrop: ['cmacsBackdrop', () => this.cmacsPopoverBackdrop],
            ...super.getProxyPropertyMap()
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'hover';
        this.placement = 'top';
        this.cmacsPopoverBackdrop = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(CmacsPopoverComponent);
    }
    static { this.ɵfac = function CmacsPopoverDirective_Factory(t) { return new (t || CmacsPopoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9), i0.ɵɵdirectiveInject(i2.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsPopoverDirective, selectors: [["", "cmacs-popover", ""]], hostVars: 2, hostBindings: function CmacsPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-popover-open", ctx.visible);
        } }, inputs: { arrowPointAtCenter: ["cmacsPopoverArrowPointAtCenter", "arrowPointAtCenter"], title: ["cmacsPopoverTitle", "title"], content: ["cmacsPopoverContent", "content"], directiveTitle: ["cmacs-popover", "directiveTitle"], trigger: ["cmacsPopoverTrigger", "trigger"], placement: ["cmacsPopoverPlacement", "placement"], origin: ["cmacsPopoverOrigin", "origin"], visible: ["cmacsPopoverVisible", "visible"], mouseEnterDelay: ["cmacsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["cmacsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["cmacsPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["cmacsPopoverOverlayStyle", "overlayStyle"], cmacsPopoverBackdrop: "cmacsPopoverBackdrop" }, outputs: { visibleChange: "cmacsPopoverVisibleChange" }, exportAs: ["cmacsPopover"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], CmacsPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    WithConfig()
], CmacsPopoverDirective.prototype, "cmacsPopoverBackdrop", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-popover]',
                exportAs: 'cmacsPopover',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i2.NzConfigService }]; }, { arrowPointAtCenter: [{
            type: Input,
            args: ['cmacsPopoverArrowPointAtCenter']
        }], title: [{
            type: Input,
            args: ['cmacsPopoverTitle']
        }], content: [{
            type: Input,
            args: ['cmacsPopoverContent']
        }], directiveTitle: [{
            type: Input,
            args: ['cmacs-popover']
        }], trigger: [{
            type: Input,
            args: ['cmacsPopoverTrigger']
        }], placement: [{
            type: Input,
            args: ['cmacsPopoverPlacement']
        }], origin: [{
            type: Input,
            args: ['cmacsPopoverOrigin']
        }], visible: [{
            type: Input,
            args: ['cmacsPopoverVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['cmacsPopoverMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['cmacsPopoverMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['cmacsPopoverOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['cmacsPopoverOverlayStyle']
        }], cmacsPopoverBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['cmacsPopoverVisibleChange']
        }] }); })();
export class CmacsPopoverComponent extends CmacsToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.cmacsTrigger === 'click' ? this.cmacsBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.cmacsTitle) && isTooltipEmpty(this.cmacsContent);
    }
    static { this.ɵfac = function CmacsPopoverComponent_Factory(t) { return new (t || CmacsPopoverComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsPopoverComponent, selectors: [["cmacs-popover"]], exportAs: ["cmacsPopoverComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 6, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function CmacsPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsPopoverComponent_ng_template_0_Template, 9, 9, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function CmacsPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function CmacsPopoverComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function CmacsPopoverComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.cmacsArrowPointAtCenter);
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.NzConnectedOverlayDirective, i6.CdkConnectedOverlay, i1.NzNoAnimationDirective, i7.NzStringTemplateOutletDirective], styles: [".ant-popover-inner-content{max-width:226px;min-height:82px;max-height:190px;color:#97a0ae;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.83;letter-spacing:normal;overflow-y:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.ant-popover-title{max-width:226px;color:#656c79;font-family:Roboto-Medium;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.167em;letter-spacing:normal;padding:7px 16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-popover-title i{font-size:14px;top:1px;position:relative}.ant-popover-content{border:1px solid #dee0e5}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPopoverComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-popover', exportAs: 'cmacsPopoverComponent', animations: [zoomBigMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="cmacsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="cmacsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="cmacsTitle">
                <ng-container *nzStringTemplateOutlet="cmacsTitle">{{ cmacsTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="cmacsContent">{{ cmacsContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `, styles: [".ant-popover-inner-content{max-width:226px;min-height:82px;max-height:190px;color:#97a0ae;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.83;letter-spacing:normal;overflow-y:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.ant-popover-title{max-width:226px;color:#656c79;font-family:Roboto-Medium;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.167em;letter-spacing:normal;padding:7px 16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-popover-title i{font-size:14px;top:1px;position:relative}.ant-popover-content{border:1px solid #dee0e5}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1wb3BvdmVyL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUNMLGNBQWMsRUFDZCxzQkFBc0IsRUFHdkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQThGakIsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBRHJFLCtCQUFrRDtJQUNoRCw0R0FBa0Y7SUFDcEYsaUJBQU07OztJQURXLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2pELDZCQUFxRDtJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQix5Q0FBa0I7OztJQW5CakYsOEJBUUMsYUFBQSxhQUFBO0lBR0ssMEJBQStDO0lBQ2pELGlCQUFNO0lBQ04sOEJBQThDLFVBQUE7SUFFMUMsb0ZBRU07SUFDTiw4QkFBdUM7SUFDckMsc0dBQXNGO0lBQ3hGLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQWxCWix1REFBdUM7SUFDdkMsMENB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QUM7c0ZBakJVLHFCQUFxQjtvRUFBckIscUJBQXFCO1lBMUM5QixvSEF1Q2M7WUE3QloseUlBQXVCLDBCQUFzQixJQUFDLDRGQUNwQyxVQUFNLElBRDhCLGtIQUU1Qiw0QkFBd0IsSUFGSTs7WUFOOUMsZ0VBQThDLHlDQUFBLGdEQUFBLHlDQUFBLGlDQUFBLHFEQUFBOzRqQ0FWdEMsQ0FBQyxhQUFhLENBQUM7O3VGQWdEaEIscUJBQXFCO2NBbkRqQyxTQUFTOzJCQUNFLGVBQWUsWUFDZix1QkFBdUIsY0FDckIsQ0FBQyxhQUFhLENBQUMsbUJBQ1YsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSyxZQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1Q7O3NCQU9FLFFBQVE7O3NCQUNSLElBQUk7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IENtYWNzVG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLXRvb2x0aXAvdG9vbHRpcCc7XHJcbmltcG9ydCB7XHJcbiAgaXNUb29sdGlwRW1wdHksXHJcbiAgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSxcclxuICBOelRvb2x0aXBUcmlnZ2VyLFxyXG4gIFByb3BlcnR5TWFwcGluZ1xyXG59IGZyb20gJy4vLi4vY21hY3MtdG9vbHRpcC9iYXNlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAncG9wb3Zlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1wb3BvdmVyXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1BvcG92ZXInLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAndmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1BvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY21hY3NQb3BvdmVyQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xyXG5cclxuICBASW5wdXQoJ2NtYWNzUG9wb3ZlckFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyVGl0bGUnKSBvdmVycmlkZSB0aXRsZT86IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyQ29udGVudCcpIG92ZXJyaWRlIGNvbnRlbnQ/OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ2NtYWNzLXBvcG92ZXInKSBvdmVycmlkZSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ2NtYWNzUG9wb3ZlclRyaWdnZXInKSBvdmVycmlkZSB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJQbGFjZW1lbnQnKSBvdmVycmlkZSBwbGFjZW1lbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICd0b3AnO1xyXG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyT3JpZ2luJykgb3ZlcnJpZGUgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJWaXNpYmxlJykgb3ZlcnJpZGUgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJNb3VzZUVudGVyRGVsYXknKSBvdmVycmlkZSBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJNb3VzZUxlYXZlRGVsYXknKSBvdmVycmlkZSBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJPdmVybGF5Q2xhc3NOYW1lJykgb3ZlcnJpZGUgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcclxuICBASW5wdXQoJ2NtYWNzUG9wb3Zlck92ZXJsYXlTdHlsZScpIG92ZXJyaWRlIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcblxyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY21hY3NQb3BvdmVyQmFja2Ryb3A/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2NtYWNzUG9wb3ZlclZpc2libGVDaGFuZ2UnKSBvdmVycmlkZSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVycmlkZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxDbWFjc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQ21hY3NQb3BvdmVyQ29tcG9uZW50KTtcclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNtYWNzUG9wb3ZlckJhY2tkcm9wOiBbJ2NtYWNzQmFja2Ryb3AnLCAoKSA9PiB0aGlzLmNtYWNzUG9wb3ZlckJhY2tkcm9wXSxcclxuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gICAgbnpDb25maWdTZXJ2aWNlPzogTnpDb25maWdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbiwgbnpDb25maWdTZXJ2aWNlKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtcG9wb3ZlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1BvcG92ZXJDb21wb25lbnQnLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXBvcG92ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJoYXNCYWNrZHJvcFwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXHJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJjbWFjc0Fycm93UG9pbnRBdENlbnRlclwiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wb3BvdmVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImNtYWNzT3ZlcmxheVN0eWxlXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcG9wb3Zlci1hcnJvdy1jb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXJcIiByb2xlPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci10aXRsZVwiICpuZ0lmPVwiY21hY3NUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNtYWNzVGl0bGVcIj57eyBjbWFjc1RpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc0NvbnRlbnRcIj57eyBjbWFjc0NvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIENtYWNzVG9vbFRpcENvbXBvbmVudCB7XHJcbiAgb3ZlcnJpZGUgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlcic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc1RyaWdnZXIgPT09ICdjbGljaycgPyB0aGlzLmNtYWNzQmFja2Ryb3AgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMuY21hY3NUaXRsZSkgJiYgaXNUb29sdGlwRW1wdHkodGhpcy5jbWFjc0NvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=