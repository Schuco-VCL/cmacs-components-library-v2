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
    } }, directives: [i3.CdkConnectedOverlay, i4.NzConnectedOverlayDirective, i5.NgClass, i5.NgStyle, i1.NzNoAnimationDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-tooltip-content{background-color:#0d1e3b;color:#fff;max-width:180px;border-radius:3px}.ant-tooltip-placement-top .ant-tooltip-arrow{border-top-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{border-top-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow{border-left-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow{border-right-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-placement-bottom .ant-tooltip-arrow{border-bottom-color:#0d1e3b;opacity:1!important}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{border-bottom-color:#0d1e3b!important;opacity:1!important}.ant-tooltip-inner{background-color:#0d1e3b;border-radius:3px;box-shadow:none;padding:8px 10px;min-height:34px}"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10b29sdGlwL3Rvb2x0aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBS3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQXFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7SUE4RWxILDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQWR6RSw4QkFRQztJQUNDLDhCQUFpQztJQUMvQiw4QkFBK0I7SUFDN0IsMEJBQTRFO0lBQzlFLGlCQUFNO0lBQ04sOEJBQTREO0lBQzFELHNHQUFrRjtJQUNwRixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQWZKLHVEQUF1QztJQUN2QywwQ0FBcUIscUNBQUEsb0ZBQUEsdUZBQUEsNEJBQUE7SUFRdUIsZUFBNEI7SUFBNUIsaURBQTRCO0lBRXZDLGVBQTRCO0lBQTVCLGlEQUE0QjtJQUMxQyxlQUFrQztJQUFsQywwREFBa0M7O0FBckU3RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsc0JBQXNCO0lBa0IvRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ0MsV0FBb0M7UUFFeEQsS0FBSyxDQUFDLFVB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UUFKOUMsc0RBQW9DLHlDQUFBLGdEQUFBLGlDQUFBO2cwQ0FQNUIsQ0FBQyxhQUFhLENBQUM7dUZBcUNoQixxQkFBcUI7Y0ExQ2pDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NUO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7O3NCQVVJLFFBQVE7O3NCQUNSLElBQUk7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBpc1ByZXNldENvbG9yLCBOelByZXNldENvbG9yIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbG9yJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBpc1Rvb2x0aXBFbXB0eSwgQ21hY3NUb29sdGlwQmFzZUNvbXBvbmVudCwgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSwgTnpUb29sdGlwVHJpZ2dlciwgUHJvcGVydHlNYXBwaW5nIH0gZnJvbSAnLi9iYXNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NtYWNzLXRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXAnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdG9vbHRpcC1vcGVuXSc6ICd2aXNpYmxlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRpdGxlJykgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XG4gIEBJbnB1dCgnY21hY3MtdG9vbHRpcCcpIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcFRyaWdnZXInKSB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XG4gIEBJbnB1dCgnY21hY3NUb29sdGlwUGxhY2VtZW50JykgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPcmlnaW4nKSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBWaXNpYmxlJykgdmlzaWJsZT86IGJvb2xlYW47XG4gIEBJbnB1dCgnY21hY3NUb29sdGlwTW91c2VFbnRlckRlbGF5JykgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoJ2NtYWNzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPdmVybGF5Q2xhc3NOYW1lJykgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcbiAgQElucHV0KCdjbWFjc1Rvb2x0aXBPdmVybGF5U3R5bGUnKSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xuICBASW5wdXQoKSBjbWFjc1Rvb2x0aXBDb2xvcj86IHN0cmluZztcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdjbWFjc1Rvb2x0aXBWaXNpYmxlQ2hhbmdlJykgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb21wb25lbnRGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENtYWNzVG9vbFRpcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENtYWNzVG9vbFRpcENvbXBvbmVudCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcbiAgICByZXR1cm4ge1xuICAgICAgY21hY3NUb29sdGlwQ29sb3I6IFsnY21hY3NDb2xvcicsICgpID0+IHRoaXMuY21hY3NUb29sdGlwQ29sb3JdXG4gICAgfTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjbWFjcy10b29sdGlwJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1Rvb2x0aXBDb21wb25lbnQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10b29sdGlwLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXG4gICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJhbnQtdG9vbHRpcFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdG9vbHRpcC1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImNtYWNzT3ZlcmxheVN0eWxlXCJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWFycm93XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC10b29sdGlwLWFycm93LWNvbnRlbnRcIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lclwiIFtuZ1N0eWxlXT1cIl9jb250ZW50U3R5bGVNYXBcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc1RpdGxlXCI+e3sgY21hY3NUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVG9vbFRpcENvbXBvbmVudCBleHRlbmRzIENtYWNzVG9vbHRpcEJhc2VDb21wb25lbnQge1xuICBjbWFjc1RpdGxlOiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xuXG4gIGNtYWNzQ29sb3I/OiBzdHJpbmcgfCBOelByZXNldENvbG9yO1xuXG4gIF9jb250ZW50U3R5bGVNYXA6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7XG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMuY21hY3NUaXRsZSk7XG4gIH1cblxuICB1cGRhdGVTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaXNDb2xvclByZXNldCA9IHRoaXMuY21hY3NDb2xvciAmJiBpc1ByZXNldENvbG9yKHRoaXMuY21hY3NDb2xvcik7XG5cbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLmNtYWNzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5jbWFjc0NvbG9yfWBdOiBpc0NvbG9yUHJlc2V0XG4gICAgfTtcblxuICAgIHRoaXMuX2NvbnRlbnRTdHlsZU1hcCA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogISF0aGlzLmNtYWNzQ29sb3IgJiYgIWlzQ29sb3JQcmVzZXQgPyB0aGlzLmNtYWNzQ29sb3IgOiBudWxsXG4gICAgfTtcbiAgfVxufVxuIl19