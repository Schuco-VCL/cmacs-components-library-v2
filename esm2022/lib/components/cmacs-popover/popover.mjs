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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1wb3BvdmVyL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUNMLGNBQWMsRUFDZCxzQkFBc0IsRUFHdkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQThGakIsNkJBQW1EO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBRHJFLCtCQUFrRDtJQUNoRCw0R0FBa0Y7SUFDcEYsaUJBQU07OztJQURXLGVBQWtDO0lBQWxDLDBEQUFrQzs7O0lBR2pELDZCQUFxRDtJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQix5Q0FBa0I7OztJQW5CakYsOEJBUUMsYUFBQSxhQUFBO0lBR0ssMEJBQStDO0lBQ2pELGlCQUFNO0lBQ04sOEJBQThDLFVBQUE7SUFFMUMsb0ZBRU07SUFDTiw4QkFBdUM7SUFDckMsc0dBQXNGO0lBQ3hGLGlCQUFNLEVBQUEsRUFBQSxFQUFBLEVBQUE7OztJQWxCWix1REFBdUM7SUFDdkMsMENB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QUM7c0ZBakJVLHFCQUFxQjtvRUFBckIscUJBQXFCO1lBMUM5QixvSEF1Q2M7WUE3QloseUlBQXVCLDBCQUFzQixJQUFDLDRGQUNwQyxVQUFNLElBRDhCLGtIQUU1Qiw0QkFBd0IsSUFGSTs7WUFOOUMsZ0VBQThDLHlDQUFBLGdEQUFBLHlDQUFBLGlDQUFBLHFEQUFBOzRqQ0FWdEMsQ0FBQyxhQUFhLENBQUM7O3VGQWdEaEIscUJBQXFCO2NBbkRqQyxTQUFTOzJCQUNFLGVBQWUsWUFDZix1QkFBdUIsY0FDckIsQ0FBQyxhQUFhLENBQUMsbUJBQ1YsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSyxZQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1Q7O3NCQU9FLFFBQVE7O3NCQUNSLElBQUk7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IENtYWNzVG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLXRvb2x0aXAvdG9vbHRpcCc7XHJcbmltcG9ydCB7XG4gIGlzVG9vbHRpcEVtcHR5LFxuICBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLFxuICBOelRvb2x0aXBUcmlnZ2VyLFxuICBQcm9wZXJ0eU1hcHBpbmdcbn0gZnJvbSAnLi8uLi9jbWFjcy10b29sdGlwL2Jhc2UnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3BvcG92ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21hY3MtcG9wb3Zlcl0nLFxuICBleHBvcnRBczogJ2NtYWNzUG9wb3ZlcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ3Zpc2libGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jbWFjc1BvcG92ZXJBcnJvd1BvaW50QXRDZW50ZXI6IEJvb2xlYW5JbnB1dDtcblxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcblxuICBASW5wdXQoJ2NtYWNzUG9wb3ZlckFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xuICBASW5wdXQoJ2NtYWNzUG9wb3ZlclRpdGxlJykgb3ZlcnJpZGUgdGl0bGU/OiBOelRTVHlwZTtcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJDb250ZW50Jykgb3ZlcnJpZGUgY29udGVudD86IE56VFNUeXBlO1xuICBASW5wdXQoJ2NtYWNzLXBvcG92ZXInKSBvdmVycmlkZSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJUcmlnZ2VyJykgb3ZlcnJpZGUgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xuICBASW5wdXQoJ2NtYWNzUG9wb3ZlclBsYWNlbWVudCcpIG92ZXJyaWRlIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyT3JpZ2luJykgb3ZlcnJpZGUgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyVmlzaWJsZScpIG92ZXJyaWRlIHZpc2libGU/OiBib29sZWFuO1xuICBASW5wdXQoJ2NtYWNzUG9wb3Zlck1vdXNlRW50ZXJEZWxheScpIG92ZXJyaWRlIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJNb3VzZUxlYXZlRGVsYXknKSBvdmVycmlkZSBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyT3ZlcmxheUNsYXNzTmFtZScpIG92ZXJyaWRlIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyT3ZlcmxheVN0eWxlJykgb3ZlcnJpZGUgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcblxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGNtYWNzUG9wb3ZlckJhY2tkcm9wPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdjbWFjc1BvcG92ZXJWaXNpYmxlQ2hhbmdlJykgb3ZlcnJpZGUgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBvdmVycmlkZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxDbWFjc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQ21hY3NQb3BvdmVyQ29tcG9uZW50KTtcblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0UHJveHlQcm9wZXJ0eU1hcCgpOiBQcm9wZXJ0eU1hcHBpbmcge1xuICAgIHJldHVybiB7XG4gICAgICBjbWFjc1BvcG92ZXJCYWNrZHJvcDogWydjbWFjc0JhY2tkcm9wJywgKCkgPT4gdGhpcy5jbWFjc1BvcG92ZXJCYWNrZHJvcF0sXG4gICAgICAuLi5zdXBlci5nZXRQcm94eVByb3BlcnR5TWFwKClcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXG4gICAgbnpDb25maWdTZXJ2aWNlPzogTnpDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIG5vQW5pbWF0aW9uLCBuekNvbmZpZ1NlcnZpY2UpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NtYWNzLXBvcG92ZXInLFxuICBleHBvcnRBczogJ2NtYWNzUG9wb3ZlckNvbXBvbmVudCcsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1wb3BvdmVyLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiaGFzQmFja2Ryb3BcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UHVzaF09XCJ0cnVlXCJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJjbWFjc0Fycm93UG9pbnRBdENlbnRlclwiXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXG4gICAgICAgIFtjbGFzcy5hbnQtcG9wb3Zlci1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImNtYWNzT3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3dcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3ctY29udGVudFwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXJcIiByb2xlPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLXRpdGxlXCIgKm5nSWY9XCJjbWFjc1RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNtYWNzVGl0bGVcIj57eyBjbWFjc1RpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc0NvbnRlbnRcIj57eyBjbWFjc0NvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIENtYWNzVG9vbFRpcENvbXBvbmVudCB7XG4gIG92ZXJyaWRlIF9wcmVmaXggPSAnYW50LXBvcG92ZXInO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKGNkciwgZGlyZWN0aW9uYWxpdHksIG5vQW5pbWF0aW9uKTtcbiAgfVxuXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbWFjc1RyaWdnZXIgPT09ICdjbGljaycgPyB0aGlzLmNtYWNzQmFja2Ryb3AgOiBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmNtYWNzVGl0bGUpICYmIGlzVG9vbHRpcEVtcHR5KHRoaXMuY21hY3NDb250ZW50KTtcbiAgfVxufVxuIl19