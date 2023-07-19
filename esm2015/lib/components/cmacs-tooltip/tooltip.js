import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import { isTooltipEmpty, CmacsTooltipBaseComponent, NzTooltipBaseDirective } from './base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "ng-zorro-antd/core/overlay";
import * as i5 from "@angular/common";
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
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelement(3, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵtemplate(5, CmacsToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.cmacsOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.cmacsTitle);
} }
export class CmacsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.trigger = 'hover';
        this.placement = 'top';
        // tslint:disable-next-line:no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(CmacsToolTipComponent);
    }
    getProxyPropertyMap() {
        return {
            cmacsTooltipColor: ['cmacsColor', () => this.cmacsTooltipColor]
        };
    }
}
CmacsTooltipDirective.ɵfac = function CmacsTooltipDirective_Factory(t) { return new (t || CmacsTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
CmacsTooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsTooltipDirective, selectors: [["", "cmacs-tooltip", ""]], hostVars: 2, hostBindings: function CmacsTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-tooltip-open", ctx.visible);
    } }, inputs: { title: ["cmacsTooltipTitle", "title"], directiveTitle: ["cmacs-tooltip", "directiveTitle"], trigger: ["cmacsTooltipTrigger", "trigger"], placement: ["cmacsTooltipPlacement", "placement"], origin: ["cmacsTooltipOrigin", "origin"], visible: ["cmacsTooltipVisible", "visible"], mouseEnterDelay: ["cmacsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["cmacsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["cmacsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["cmacsTooltipOverlayStyle", "overlayStyle"], cmacsTooltipColor: "cmacsTooltipColor" }, outputs: { visibleChange: "cmacsTooltipVisibleChange" }, exportAs: ["cmacsTooltip"], features: [i0.ɵɵInheritDefinitionFeature] });
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
        }], cmacsTooltipColor: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['cmacsTooltipVisibleChange']
        }] }); })();
export class CmacsToolTipComponent extends CmacsTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.noAnimation = noAnimation;
        this.cmacsTitle = null;
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
}
CmacsToolTipComponent.ɵfac = function CmacsToolTipComponent_Factory(t) { return new (t || CmacsToolTipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
CmacsToolTipComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsToolTipComponent, selectors: [["cmacs-tooltip"]], exportAs: ["cmacsTooltipComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [1, "ant-tooltip-arrow-content", 3, "ngStyle"], [1, "ant-tooltip-inner", 3, "ngStyle"], [4, "nzStringTemplateOutlet"]], template: function CmacsToolTipComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsToolTipComponent_ng_template_0_Template, 6, 10, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵlistener("overlayOutsideClick", function CmacsToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function CmacsToolTipComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function CmacsToolTipComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", true);
    } }, directives: [i3.CdkConnectedOverlay, i4.NzConnectedOverlayDirective, i5.NgClass, i5.NgStyle, i1.NzNoAnimationDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:180px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-inner{border-radius:3px;box-shadow:none;padding:8px 10px;min-height:34px}.ant-tooltip-arrow-content,.ant-tooltip-inner{background-color:#0d1e3b}"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsToolTipComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tooltip',
                exportAs: 'cmacsTooltipComponent',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion],
                styleUrls: ['./cmacs-tooltip.component.css'],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="cmacsOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="cmacsTitle">{{ cmacsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL3Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBS3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQXFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7SUE4RWxILDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQWR6RSw4QkFRQztJQUNDLDhCQUFpQztJQUMvQiw4QkFBK0I7SUFDN0IsMEJBQTRFO0lBQzlFLGlCQUFNO0lBQ04sOEJBQTREO0lBQzFELHNHQUFrRjtJQUNwRixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQWZKLHVEQUF1QztJQUN2QywwQ0FBcUIscUNBQUEsb0ZBQUEsdUZBQUEsNEJBQUE7SUFRdUIsZUFBNEI7SUFBNUIsaURBQTRCO0lBRXZDLGVBQTRCO0lBQTVCLGlEQUE0QjtJQUMxQyxlQUFrQztJQUFsQywwREFBa0M7O0FBckU3RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsc0JBQXNCO0lBa0IvRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ0MsV0FBb0M7UUFFeEQsS0FBSyxDQUFDLFVB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UUFKOUMsc0RBQW9DLHlDQUFBLGdEQUFBLGlDQUFBOzgyQ0FQNUIsQ0FBQyxhQUFhLENBQUM7dUZBcUNoQixxQkFBcUI7Y0ExQ2pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O3NCQVVJLFFBQVE7O3NCQUNSLElBQUk7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBpc1ByZXNldENvbG9yLCBOelByZXNldENvbG9yIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbG9yJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgaXNUb29sdGlwRW1wdHksIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQsIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIE56VG9vbHRpcFRyaWdnZXIsIFByb3BlcnR5TWFwcGluZyB9IGZyb20gJy4vYmFzZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy10b29sdGlwXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAndmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRpdGxlJykgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdjbWFjcy10b29sdGlwJykgZGlyZWN0aXZlVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBUcmlnZ2VyJykgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcclxuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE9yaWdpbicpIG9yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwVmlzaWJsZScpIHZpc2libGU/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwTW91c2VFbnRlckRlbGF5JykgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwTW91c2VMZWF2ZURlbGF5JykgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgnY21hY3NUb29sdGlwT3ZlcmxheUNsYXNzTmFtZScpIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPdmVybGF5U3R5bGUnKSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGNtYWNzVG9vbHRpcENvbG9yPzogc3RyaW5nO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2NtYWNzVG9vbHRpcFZpc2libGVDaGFuZ2UnKSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENtYWNzVG9vbFRpcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENtYWNzVG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNtYWNzVG9vbHRpcENvbG9yOiBbJ2NtYWNzQ29sb3InLCAoKSA9PiB0aGlzLmNtYWNzVG9vbHRpcENvbG9yXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdG9vbHRpcCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRvb2x0aXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UHVzaF09XCJ0cnVlXCJcclxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXHJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcclxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFudC10b29sdGlwXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRvb2x0aXAtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiY21hY3NPdmVybGF5U3R5bGVcIlxyXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3dcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdG9vbHRpcC1hcnJvdy1jb250ZW50XCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWlubmVyXCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY21hY3NUaXRsZVwiPnt7IGNtYWNzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUb29sVGlwQ29tcG9uZW50IGV4dGVuZHMgQ21hY3NUb29sdGlwQmFzZUNvbXBvbmVudCB7XHJcbiAgY21hY3NUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY21hY3NDb2xvcj86IHN0cmluZyB8IE56UHJlc2V0Q29sb3I7XHJcblxyXG4gIF9jb250ZW50U3R5bGVNYXA6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmNtYWNzVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDb2xvclByZXNldCA9IHRoaXMuY21hY3NDb2xvciAmJiBpc1ByZXNldENvbG9yKHRoaXMuY21hY3NDb2xvcik7XHJcblxyXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLmNtYWNzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LXBsYWNlbWVudC0ke3RoaXMucHJlZmVycmVkUGxhY2VtZW50fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuY21hY3NDb2xvcn1gXTogaXNDb2xvclByZXNldFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9jb250ZW50U3R5bGVNYXAgPSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogISF0aGlzLmNtYWNzQ29sb3IgJiYgIWlzQ29sb3JQcmVzZXQgPyB0aGlzLmNtYWNzQ29sb3IgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=