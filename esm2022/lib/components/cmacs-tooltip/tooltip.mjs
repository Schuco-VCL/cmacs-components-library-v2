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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL3Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBaUIsTUFBTSwwQkFBMEIsQ0FBQztBQUd4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUNMLGNBQWMsRUFDZCx5QkFBeUIsRUFDekIsc0JBQXNCLEVBR3ZCLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7SUFxRkosNkJBQStFO0lBQUEsWUFBZ0I7SUFBQSwwQkFBZTs7O0lBQS9CLGVBQWdCO0lBQWhCLHVDQUFnQjs7O0lBZHJHLDhCQVFDLGFBQUEsYUFBQTtJQUdLLDBCQUE0RTtJQUM5RSxpQkFBTTtJQUNOLDhCQUE0RDtJQUMxRCxzR0FBOEc7SUFDaEgsaUJBQU0sRUFBQSxFQUFBOzs7SUFiUix1REFBdUM7SUFDdkMsMENBQXFCLHFDQUFBLHdGQUFBLHVGQUFBLDRCQUFBO0lBUXVCLGVBQTRCO0lBQTVCLGlEQUE0QjtJQUV2QyxlQUE0QjtJQUE1QixpREFBNEI7SUFDMUMsZUFBb0M7SUFBcEMsMERBQW9DLDJEQUFBOztBQTVFL0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHNCQUFzQjtJQXNCL0QsWUFDRSxVQUFzQixFQUN0QixRQUEwQixFQUMxQixRQUFrQyxFQUNsQyxRQUFtQixFQUNDLFdB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UUFFRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzlFLENBQUM7SUFDSixDQUFDO3NGQWhDVSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQW5DOUIscUhBK0JjO1lBdEJaLHlJQUF1QiwwQkFBc0IsSUFBQyw0RkFDcEMsVUFBTSxJQUQ4QixrSEFFNUIsNEJBQXdCLElBRkk7O1lBTDlDLHNEQUFvQyx5Q0FBQSxnREFBQSxpQ0FBQSxxREFBQTs0M0NBTjVCLENBQUMsYUFBYSxDQUFDOzt1RkFxQ2hCLHFCQUFxQjtjQTNDakMsU0FBUzsyQkFDRSxlQUFlLFlBQ2YsdUJBQXVCLG1CQUNoQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBRXpCLENBQUMsYUFBYSxDQUFDLFlBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1QsdUJBQ29CLEtBQUs7O3NCQVl2QixRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgaXNQcmVzZXRDb2xvciwgTnpQcmVzZXRDb2xvciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb2xvcic7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHtcbiAgaXNUb29sdGlwRW1wdHksXG4gIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQsXG4gIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsXG4gIE56VG9vbHRpcFRyaWdnZXIsXG4gIFByb3BlcnR5TWFwcGluZ1xufSBmcm9tICcuL2Jhc2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21hY3MtdG9vbHRpcF0nLFxuICBleHBvcnRBczogJ2NtYWNzVG9vbHRpcCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ3Zpc2libGUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NUb29sdGlwRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jbWFjc1Rvb2x0aXBBcnJvd1BvaW50QXRDZW50ZXI6IEJvb2xlYW5JbnB1dDtcblxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRpdGxlJykgb3ZlcnJpZGUgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgnY21hY3NUb29sdGlwVGl0bGVDb250ZXh0JykgdGl0bGVDb250ZXh0PzogT2JqZWN0IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgnY21hY3MtdG9vbHRpcCcpIG92ZXJyaWRlIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRyaWdnZXInKSBvdmVycmlkZSB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG4gIEBJbnB1dCgnY21hY3NUb29sdGlwUGxhY2VtZW50Jykgb3ZlcnJpZGUgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPcmlnaW4nKSBvdmVycmlkZSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBWaXNpYmxlJykgb3ZlcnJpZGUgdmlzaWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgnY21hY3NUb29sdGlwTW91c2VFbnRlckRlbGF5Jykgb3ZlcnJpZGUgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG92ZXJyaWRlIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPdmVybGF5Q2xhc3NOYW1lJykgb3ZlcnJpZGUgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPdmVybGF5U3R5bGUnKSBvdmVycmlkZSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xuICBASW5wdXQoKSBjbWFjc1Rvb2x0aXBDb2xvcj86IHN0cmluZztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgnY21hY3NUb29sdGlwVmlzaWJsZUNoYW5nZScpIG92ZXJyaWRlIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgb3ZlcnJpZGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8Q21hY3NUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KENtYWNzVG9vbFRpcENvbXBvbmVudCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpLFxuICAgICAgY21hY3NUb29sdGlwQ29sb3I6IFsnY21hY3NDb2xvcicsICgpID0+IHRoaXMuY21hY3NUb29sdGlwQ29sb3JdLFxuICAgICAgY21hY3NUb29sdGlwVGl0bGVDb250ZXh0OiBbJ2NtYWNzVGl0bGVDb250ZXh0JywgKCkgPT4gdGhpcy50aXRsZUNvbnRleHRdXG4gICAgfTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy10b29sdGlwJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXBDb21wb25lbnQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdG9vbHRpcC5jb21wb25lbnQuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXG4gICAgICBbbnpBcnJvd1BvaW50QXRDZW50ZXJdPVwiY21hY3NBcnJvd1BvaW50QXRDZW50ZXJcIlxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRvb2x0aXBcIlxuICAgICAgICBbY2xhc3MuYW50LXRvb2x0aXAtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxuICAgICAgICBbbmdTdHlsZV09XCJjbWFjc092ZXJsYXlTdHlsZVwiXG4gICAgICAgIFtALmRpc2FibGVkXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWFycm93XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC10b29sdGlwLWFycm93LWNvbnRlbnRcIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lclwiIFtuZ1N0eWxlXT1cIl9jb250ZW50U3R5bGVNYXBcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc1RpdGxlOyBjb250ZXh0OiBjbWFjc1RpdGxlQ29udGV4dFwiPnt7IGNtYWNzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1Rvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBDbWFjc1Rvb2x0aXBCYXNlQ29tcG9uZW50IHtcbiAgb3ZlcnJpZGUgY21hY3NUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcbiAgY21hY3NUaXRsZUNvbnRleHQ6IE9iamVjdCB8IG51bGwgPSBudWxsO1xuXG4gIGNtYWNzQ29sb3I/OiBzdHJpbmcgfCBOelByZXNldENvbG9yO1xuXG4gIF9jb250ZW50U3R5bGVNYXA6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5jbWFjc1RpdGxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSB1cGRhdGVTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaXNDb2xvclByZXNldCA9IHRoaXMuY21hY3NDb2xvciAmJiBpc1ByZXNldENvbG9yKHRoaXMuY21hY3NDb2xvcik7XG5cbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLmNtYWNzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5jbWFjc0NvbG9yfWBdOiBpc0NvbG9yUHJlc2V0XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRlbnRTdHlsZU1hcCA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogISF0aGlzLmNtYWNzQ29sb3IgJiYgIWlzQ29sb3JQcmVzZXQgPyB0aGlzLmNtYWNzQ29sb3IgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuIl19