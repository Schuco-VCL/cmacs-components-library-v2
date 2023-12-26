import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isTooltipEmpty, CmacsTooltipBaseComponent, NzTooltipBaseDirective } from './base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/overlay";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "ng-zorro-antd/core/outlet";
function CmacsToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.cmacsTitle);
} }
function CmacsToolTipComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, CmacsToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.cmacsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.cmacsTitle)("nzStringTemplateOutletContext", ctx_r1.cmacsTitleContext);
} }
export class CmacsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.titleContext = null;
        this.trigger = 'hover';
        this.placement = 'top';
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(CmacsToolTipComponent);
    }
    getProxyPropertyMap() {
        return {
            ...super.getProxyPropertyMap(),
            cmacsTooltipColor: ['cmacsColor', () => this.cmacsTooltipColor],
            cmacsTooltipTitleContext: ['cmacsTitleContext', () => this.titleContext]
        };
    }
    static { this.ɵfac = function CmacsTooltipDirective_Factory(t) { return new (t || CmacsTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsTooltipDirective, selectors: [["", "cmacs-tooltip", ""]], hostVars: 2, hostBindings: function CmacsTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tooltip-open", ctx.visible);
        } }, inputs: { title: ["cmacsTooltipTitle", "title"], titleContext: ["cmacsTooltipTitleContext", "titleContext"], directiveTitle: ["cmacs-tooltip", "directiveTitle"], trigger: ["cmacsTooltipTrigger", "trigger"], placement: ["cmacsTooltipPlacement", "placement"], origin: ["cmacsTooltipOrigin", "origin"], visible: ["cmacsTooltipVisible", "visible"], mouseEnterDelay: ["cmacsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["cmacsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["cmacsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["cmacsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: ["cmacsTooltipArrowPointAtCenter", "arrowPointAtCenter"], cmacsTooltipColor: "cmacsTooltipColor" }, outputs: { visibleChange: "cmacsTooltipVisibleChange" }, exportAs: ["cmacsTooltip"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], CmacsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-tooltip]',
                exportAs: 'cmacsTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'visible'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { title: [{
            type: Input,
            args: ['cmacsTooltipTitle']
        }], titleContext: [{
            type: Input,
            args: ['cmacsTooltipTitleContext']
        }], directiveTitle: [{
            type: Input,
            args: ['cmacs-tooltip']
        }], trigger: [{
            type: Input,
            args: ['cmacsTooltipTrigger']
        }], placement: [{
            type: Input,
            args: ['cmacsTooltipPlacement']
        }], origin: [{
            type: Input,
            args: ['cmacsTooltipOrigin']
        }], visible: [{
            type: Input,
            args: ['cmacsTooltipVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['cmacsTooltipMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['cmacsTooltipMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['cmacsTooltipOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['cmacsTooltipOverlayStyle']
        }], arrowPointAtCenter: [{
            type: Input,
            args: ['cmacsTooltipArrowPointAtCenter']
        }], cmacsTooltipColor: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['cmacsTooltipVisibleChange']
        }] }); })();
export class CmacsToolTipComponent extends CmacsTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.cmacsTitle = null;
        this.cmacsTitleContext = null;
        this._contentStyleMap = {};
    }
    isEmpty() {
        return isTooltipEmpty(this.cmacsTitle);
    }
    updateStyles() {
        const isColorPreset = this.cmacsColor && isPresetColor(this.cmacsColor);
        this._classMap = {
            [this.cmacsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
            [`${this._prefix}-${this.cmacsColor}`]: isColorPreset
        };
        this._contentStyleMap = {
            backgroundColor: !!this.cmacsColor && !isColorPreset ? this.cmacsColor : null
        };
    }
    static { this.ɵfac = function CmacsToolTipComponent_Factory(t) { return new (t || CmacsToolTipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsToolTipComponent, selectors: [["cmacs-tooltip"]], exportAs: ["cmacsTooltipComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content", 3, "ngStyle"], [1, "ant-tooltip-inner", 3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]], template: function CmacsToolTipComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsToolTipComponent_ng_template_0_Template, 6, 11, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function CmacsToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function CmacsToolTipComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function CmacsToolTipComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.cmacsArrowPointAtCenter);
        } }, dependencies: [i3.NgClass, i3.NgStyle, i4.NzConnectedOverlayDirective, i5.CdkConnectedOverlay, i1.NzNoAnimationDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:180px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-inner{background-color:#0d1e3b;border-radius:3px;box-shadow:none;padding:8px 10px;min-height:34px}.ant-tooltip-arrow-content{background-color:#0d1e3b}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsToolTipComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-tooltip', exportAs: 'cmacsTooltipComponent', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [zoomBigMotion], template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="cmacsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="cmacsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="cmacsTitle; context: cmacsTitleContext">{{ cmacsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:180px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-inner{background-color:#0d1e3b;border-radius:3px;box-shadow:none;padding:8px 10px;min-height:34px}.ant-tooltip-arrow-content{background-color:#0d1e3b}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL3Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBaUIsTUFBTSwwQkFBMEIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUNMLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsc0JBQXNCLEVBR3ZCLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7SUFxRkosNkJBQStFO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBZHJHLDhCQVFDLGFBQUEsYUFBQTtJQUdLLDBCQUE0RTtJQUM5RSxpQkFBTTtJQUNOLDhCQUE0RDtJQUMxRCxzR0FBOEc7SUFDaEgsaUJBQU0sRUFBQSxFQUFBOzs7SUFiUix1REFBdUM7SUFDdkMsMENBQXFCLHFDQUFBLHdGQUFBLHVGQUFBLDRCQUFBO0lBUXVCLGVBQTRCO0lBQTVCLGlEQUE0QjtJQUV2QyxlQUE0QjtJQUE1QixpREFBNEI7SUFDMUMsZUFBb0M7SUFBcEMsMERBQW9DLDJEQUFBOztBQTVFL0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUFzQjtJQXNCL0QsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNDLFdB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UUFFRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzlFLENBQUM7SUFDSixDQUFDO3NGQWhDVSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQW5DOUIscUhBK0JjO1lBdEJaLHlJQUF1QiwwQkFBc0IsSUFBQyw0RkFDcEMsVUFBTSxJQUQ4QixrSEFFNUIsNEJBQXdCLElBRkk7O1lBTDlDLHNEQUFvQyx5Q0FBQSxnREFBQSxpQ0FBQSxxREFBQTs0M0NBTjVCLENBQUMsYUFBYSxDQUFDOzt1RkFxQ2hCLHFCQUFxQjtjQTNDakMsU0FBUzsyQkFDRSxlQUFlLFlBQ2YsdUJBQXVCLG1CQUNoQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBRXpCLENBQUMsYUFBYSxDQUFDLFlBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1QsdUJBQ29CLEtBQUs7O3NCQVl2QixRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGlzUHJlc2V0Q29sb3IsIE56UHJlc2V0Q29sb3IgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29sb3InO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzVG9vbHRpcEVtcHR5LFxyXG4gIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQsXHJcbiAgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSxcclxuICBOelRvb2x0aXBUcmlnZ2VyLFxyXG4gIFByb3BlcnR5TWFwcGluZ1xyXG59IGZyb20gJy4vYmFzZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy10b29sdGlwXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAndmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY21hY3NUb29sdGlwQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwVGl0bGUnKSBvdmVycmlkZSB0aXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRpdGxlQ29udGV4dCcpIHRpdGxlQ29udGV4dD86IE9iamVjdCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgnY21hY3MtdG9vbHRpcCcpIG92ZXJyaWRlIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwVHJpZ2dlcicpIG92ZXJyaWRlIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFBsYWNlbWVudCcpIG92ZXJyaWRlIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XHJcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPcmlnaW4nKSBvdmVycmlkZSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFZpc2libGUnKSBvdmVycmlkZSB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE1vdXNlRW50ZXJEZWxheScpIG92ZXJyaWRlIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG92ZXJyaWRlIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE92ZXJsYXlDbGFzc05hbWUnKSBvdmVycmlkZSBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwT3ZlcmxheVN0eWxlJykgb3ZlcnJpZGUgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNtYWNzVG9vbHRpcENvbG9yPzogc3RyaW5nO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdjbWFjc1Rvb2x0aXBWaXNpYmxlQ2hhbmdlJykgb3ZlcnJpZGUgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb3ZlcnJpZGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q21hY3NUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KENtYWNzVG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLmdldFByb3h5UHJvcGVydHlNYXAoKSxcclxuICAgICAgY21hY3NUb29sdGlwQ29sb3I6IFsnY21hY3NDb2xvcicsICgpID0+IHRoaXMuY21hY3NUb29sdGlwQ29sb3JdLFxyXG4gICAgICBjbWFjc1Rvb2x0aXBUaXRsZUNvbnRleHQ6IFsnY21hY3NUaXRsZUNvbnRleHQnLCAoKSA9PiB0aGlzLnRpdGxlQ29udGV4dF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRvb2x0aXAnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUb29sdGlwQ29tcG9uZW50JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXHJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJjbWFjc0Fycm93UG9pbnRBdENlbnRlclwiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdG9vbHRpcFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10b29sdGlwLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImNtYWNzT3ZlcmxheVN0eWxlXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdG9vbHRpcC1hcnJvdy1jb250ZW50XCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWlubmVyXCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY21hY3NUaXRsZTsgY29udGV4dDogY21hY3NUaXRsZUNvbnRleHRcIj57eyBjbWFjc1RpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbFRpcENvbXBvbmVudCBleHRlbmRzIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQge1xyXG4gIG92ZXJyaWRlIGNtYWNzVGl0bGU6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgY21hY3NUaXRsZUNvbnRleHQ6IE9iamVjdCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjbWFjc0NvbG9yPzogc3RyaW5nIHwgTnpQcmVzZXRDb2xvcjtcclxuXHJcbiAgX2NvbnRlbnRTdHlsZU1hcDogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5jbWFjc1RpdGxlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvdmVycmlkZSB1cGRhdGVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0NvbG9yUHJlc2V0ID0gdGhpcy5jbWFjc0NvbG9yICYmIGlzUHJlc2V0Q29sb3IodGhpcy5jbWFjc0NvbG9yKTtcclxuXHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMuY21hY3NPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tcGxhY2VtZW50LSR7dGhpcy5wcmVmZXJyZWRQbGFjZW1lbnR9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5jbWFjc0NvbG9yfWBdOiBpc0NvbG9yUHJlc2V0XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2NvbnRlbnRTdHlsZU1hcCA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAhIXRoaXMuY21hY3NDb2xvciAmJiAhaXNDb2xvclByZXNldCA/IHRoaXMuY21hY3NDb2xvciA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==