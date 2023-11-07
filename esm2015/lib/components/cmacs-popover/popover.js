import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { NzTooltipBaseDirective, isTooltipEmpty } from '../cmacs-tooltip/base';
import { CmacsToolTipComponent } from '../cmacs-tooltip/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "ng-zorro-antd/core/overlay";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/outlet";
function CmacsPopoverComponent_ng_template_0_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.cmacsTitle);
} }
function CmacsPopoverComponent_ng_template_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CmacsPopoverComponent_ng_template_0_div_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.cmacsTitle);
} }
function CmacsPopoverComponent_ng_template_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.cmacsContent);
} }
function CmacsPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtemplate(4, CmacsPopoverComponent_ng_template_0_div_4_Template, 2, 1, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵtemplate(6, CmacsPopoverComponent_ng_template_0_ng_container_6_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.cmacsOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.cmacsTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.cmacsContent);
} }
export class CmacsPopoverDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.noAnimation = noAnimation;
        this.trigger = 'hover';
        this.placement = 'top';
        // tslint:disable-next-line:no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentFactory = this.resolver.resolveComponentFactory(CmacsPopoverComponent);
    }
}
CmacsPopoverDirective.ɵfac = function CmacsPopoverDirective_Factory(t) { return new (t || CmacsPopoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
CmacsPopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsPopoverDirective, selectors: [["", "cmacs-popover", ""]], hostVars: 2, hostBindings: function CmacsPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-popover-open", ctx.visible);
    } }, inputs: { title: ["cmacsPopoverTitle", "title"], content: ["cmacsPopoverContent", "content"], directiveTitle: ["cmacs-popover", "directiveTitle"], trigger: ["cmacsPopoverTrigger", "trigger"], placement: ["cmacsPopoverPlacement", "placement"], origin: ["cmacsPopoverOrigin", "origin"], visible: ["cmacsPopoverVisible", "visible"], mouseEnterDelay: ["cmacsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["cmacsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["cmacsPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["cmacsPopoverOverlayStyle", "overlayStyle"] }, outputs: { visibleChange: "cmacsPopoverVisibleChange" }, exportAs: ["cmacsPopover"], features: [i0.ɵɵInheritDefinitionFeature] });
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
            }] }]; }, { title: [{
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
        }], visibleChange: [{
            type: Output,
            args: ['cmacsPopoverVisibleChange']
        }] }); })();
export class CmacsPopoverComponent extends CmacsToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.noAnimation = noAnimation;
        this._prefix = 'ant-popover';
    }
    isEmpty() {
        return isTooltipEmpty(this.cmacsTitle) && isTooltipEmpty(this.cmacsContent);
    }
}
CmacsPopoverComponent.ɵfac = function CmacsPopoverComponent_Factory(t) { return new (t || CmacsPopoverComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); };
CmacsPopoverComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsPopoverComponent, selectors: [["cmacs-popover"]], exportAs: ["CmacsPopoverComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 4, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function CmacsPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsPopoverComponent_ng_template_0_Template, 7, 9, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵlistener("overlayOutsideClick", function CmacsPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function CmacsPopoverComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function CmacsPopoverComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true);
    } }, directives: [i3.CdkConnectedOverlay, i4.NzConnectedOverlayDirective, i5.NgClass, i5.NgStyle, i1.NzNoAnimationDirective, i5.NgIf, i6.NzStringTemplateOutletDirective], styles: [".ant-popover-inner-content{min-height:82px;max-height:190px;color:#97a0ae;font-family:Roboto-Regular;line-height:1.83;overflow-y:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.ant-popover-inner-content,.ant-popover-title{max-width:226px;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal}.ant-popover-title{color:#656c79;font-family:Roboto-Medium;line-height:1.167em;padding:7px 16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-popover-title i{font-size:14px;top:1px;position:relative}.ant-popover-content{border:1px solid #dee0e5}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsPopoverComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-popover',
                exportAs: 'CmacsPopoverComponent',
                styleUrls: ['./cmacs-popover.component.css'],
                animations: [zoomBigMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="cmacsOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
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
  `
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1wb3BvdmVyL3BvcG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUs3RCxPQUFPLEVBQW9CLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUF3RWpELDZCQUFtRDtJQUFBLFlBQWdCO0lBQUEsMEJBQWU7OztJQUEvQixlQUFnQjtJQUFoQix1Q0FBZ0I7OztJQURyRSw4QkFBa0Q7SUFDaEQsNEdBQWtGO0lBQ3BGLGlCQUFNOzs7SUFEVyxlQUFrQztJQUFsQywwREFBa0M7OztJQUdqRCw2QkFBcUQ7SUFBQSxZQUFrQjtJQUFBLDBCQUFlOzs7SUFBakMsZUFBa0I7SUFBbEIseUNBQWtCOzs7SUFoQmpGLDhCQVFDO0lBQ0MsOEJBQWlDO0lBQy9CLDhCQUE4QztJQUM1QywyQkFBSztJQUNILG9GQUVNO0lBQ04sOEJBQXVDO0lBQ3JDLHNHQUFzRjtJQUN4RixpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUFuQkosdURBQXVDO0lBQ3ZDLDBDQUFxQixxQ0FBQSxvRkFBQSx1RkFBQSw0QkFBQTtJQVNpQixlQUFnQjtJQUFoQix3Q0FBZ0I7SUFJL0IsZUFBb0M7SUFBcEMsNERBQW9DOztB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XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnksXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IE56VG9vbHRpcFRyaWdnZXIsIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsIGlzVG9vbHRpcEVtcHR5IH0gZnJvbSAnLi4vY21hY3MtdG9vbHRpcC9iYXNlJztcclxuaW1wb3J0IHsgQ21hY3NUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtdG9vbHRpcC90b29sdGlwJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXBvcG92ZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzUG9wb3ZlcicsICBcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ3Zpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJUaXRsZScpIHRpdGxlPzogTnpUU1R5cGU7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJDb250ZW50JykgY29udGVudD86IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnY21hY3MtcG9wb3ZlcicpIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyVHJpZ2dlcicpIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuICBASW5wdXQoJ2NtYWNzUG9wb3ZlclBsYWNlbWVudCcpIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XHJcbiAgQElucHV0KCdjbWFjc1BvcG92ZXJPcmlnaW4nKSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBASW5wdXQoJ2NtYWNzUG9wb3ZlclZpc2libGUnKSB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBASW5wdXQoJ2NtYWNzUG9wb3Zlck1vdXNlRW50ZXJEZWxheScpIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2NtYWNzUG9wb3Zlck1vdXNlTGVhdmVEZWxheScpIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2NtYWNzUG9wb3Zlck92ZXJsYXlDbGFzc05hbWUnKSBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgnY21hY3NQb3BvdmVyT3ZlcmxheVN0eWxlJykgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdjbWFjc1BvcG92ZXJWaXNpYmxlQ2hhbmdlJykgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29tcG9uZW50RmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDbWFjc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShDbWFjc1BvcG92ZXJDb21wb25lbnQpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXBvcG92ZXInLFxyXG4gIGV4cG9ydEFzOiAnQ21hY3NQb3BvdmVyQ29tcG9uZW50JyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1wb3BvdmVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtcG9wb3ZlclwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1wb3BvdmVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImNtYWNzT3ZlcmxheVN0eWxlXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyXCIgcm9sZT1cInRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItdGl0bGVcIiAqbmdJZj1cImNtYWNzVGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjbWFjc1RpdGxlXCI+e3sgY21hY3NUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY21hY3NDb250ZW50XCI+e3sgY21hY3NDb250ZW50IH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1BvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBDbWFjc1Rvb2xUaXBDb21wb25lbnQge1xyXG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgZGlyZWN0aW9uYWxpdHksIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5jbWFjc1RpdGxlKSAmJiBpc1Rvb2x0aXBFbXB0eSh0aGlzLmNtYWNzQ29udGVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==