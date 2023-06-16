import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent } from './base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function CmacsMessageComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r0.instance.content, i0.ɵɵsanitizeHtml);
} }
function CmacsMessageComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 6);
    i0.ɵɵlistener("click", function CmacsMessageComponent_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closeMessage(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("nzType", "close");
} }
export class CmacsMessageComponent extends NzMNComponent {
    constructor(cdr) {
        super(cdr);
        this.destroyed = new EventEmitter();
    }
    closeMessage() {
        this.destroy();
    }
}
CmacsMessageComponent.ɵfac = function CmacsMessageComponent_Factory(t) { return new (t || CmacsMessageComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsMessageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsMessageComponent, selectors: [["cmacs-message"]], inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, exportAs: ["cmacsMessage"], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 7, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content", 3, "ngClass"], [1, "ant-message-custom-content", 3, "ngClass"], [4, "nzStringTemplateOutlet"], ["class", "cmacs-closable-message", "nz-icon", "", 3, "nzType", "click", 4, "ngIf"], [3, "innerHTML"], ["nz-icon", "", 1, "cmacs-closable-message", 3, "nzType", "click"]], template: function CmacsMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("@moveUpMotion.done", function CmacsMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) { return ctx.animationStateChanged.next($event); })("mouseenter", function CmacsMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function CmacsMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, CmacsMessageComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        i0.ɵɵtemplate(4, CmacsMessageComponent_i_4_Template, 1, 1, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@moveUpMotion", ctx.instance.state);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.instance.options && ctx.instance.options.width ? ctx.instance.options.width : "inherit", "px");
        i0.ɵɵproperty("ngClass", "ant-message-" + ctx.instance.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", "ant-message-" + ctx.instance.type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.instance.content);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.instance.options && ctx.instance.options.closable);
    } }, directives: [i1.NgClass, i2.NzStringTemplateOutletDirective, i1.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".ant-message-success{background-color:#00ce7d;border-color:#00ce7d}.ant-message-info{background-color:#009fe3;border-color:#009fe3}.ant-message-warning{background-color:#ffc634;border-color:#ffc634}.ant-message-error{background-color:#f6503c;border-color:#f6503c}.ant-message-custom-content{font-family:Roboto-Regular;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff;text-align:left}.cmacs-closable-message{color:#fff!important;font-size:12px!important;float:right!important;margin-right:-5px!important}.cmacs-closable-message:hover{cursor:pointer}"], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMessageComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-message',
                exportAs: 'cmacsMessage',
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-message.component.css'],
                animations: [moveUpMotion],
                template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content" [ngClass]="'ant-message-' + instance.type" [style.width.px]="instance.options && instance.options.width ? instance.options.width : 'inherit'">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
          <i (click)="closeMessage()" class="cmacs-closable-message" *ngIf="instance.options && instance.options.closable" nz-icon [nzType]="'close'"></i>
        </div>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { instance: [{
            type: Input
        }], destroyed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUFxQjdCLDZCQUF5RDtJQUN2RCwwQkFBNEM7SUFDOUMsMEJBQWU7OztJQURQLGVBQThCO0lBQTlCLHNFQUE4Qjs7OztJQUV0Qyw0QkFBNEk7SUFBekksb0xBQXdCO0lBQWlILGlCQUFJOztJQUF2QixnQ0FBa0I7O0FBTXJKLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBSXRELFlBQVksR0FBc0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBSE0sY0FBUyxHQUFHLElBQUksWUFBWSxFQUF1QyxDQUFDO0lBSXZGLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7OzBGQVZVLHFCQUFxQjswREFBckIscUJBQXFCO1FBbEI5Qiw4QkFNQztRQUhDLHdJQUFzQixzQ0FBa0MsSUFBQyw0RkFDM0MsYUFBUyxJQURrQyw0RkFFM0MsYUFBUyxJQUZrQztRQUl6RCw4QkFBc0w7UUFDcEwsOEJBQW1GO1FBQ2pGLHdGQUVlO1FBQ2Ysa0VBQWdKO1FBQ2xKLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFiSixrREFBZ0M7UUFLbUQsZUFBa0c7UUFBbEcsMEhBQWtHO1FBQTdJLDREQUEwQztRQUN4QyxlQUEwQztRQUExQyw0REFBMEM7UUFDakUsZUFBd0M7UUFBeEMsNkRBQXdDO1FBR0ssZUFBbUQ7UUFBbkQsNEVBQW1EOzh4QkFkM0csQ0FBQyxZQUFZLENBQUM7dUZBb0JmLHFCQUFxQjtjQTNCakMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2FBQ0Y7b0VBRVUsUUFBUTtrQkFBaEIsS0FBSztZQUNhLFNBQVM7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtb3ZlVXBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcblxuaW1wb3J0IHsgTnpNTkNvbXBvbmVudCB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ2NtYWNzLW1lc3NhZ2UnLFxuICBleHBvcnRBczogJ2NtYWNzTWVzc2FnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tZXNzYWdlLmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW21vdmVVcE1vdGlvbl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJhbnQtbWVzc2FnZS1ub3RpY2VcIlxuICAgICAgW0Btb3ZlVXBNb3Rpb25dPVwiaW5zdGFuY2Uuc3RhdGVcIlxuICAgICAgKEBtb3ZlVXBNb3Rpb24uZG9uZSk9XCJhbmltYXRpb25TdGF0ZUNoYW5nZWQubmV4dCgkZXZlbnQpXCJcbiAgICAgIChtb3VzZWVudGVyKT1cIm9uRW50ZXIoKVwiXG4gICAgICAobW91c2VsZWF2ZSk9XCJvbkxlYXZlKClcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZS1ub3RpY2UtY29udGVudFwiIFtuZ0NsYXNzXT1cIidhbnQtbWVzc2FnZS0nICsgaW5zdGFuY2UudHlwZVwiIFtzdHlsZS53aWR0aC5weF09XCJpbnN0YW5jZS5vcHRpb25zICYmIGluc3RhbmNlLm9wdGlvbnMud2lkdGggPyBpbnN0YW5jZS5vcHRpb25zLndpZHRoIDogJ2luaGVyaXQnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZS1jdXN0b20tY29udGVudFwiIFtuZ0NsYXNzXT1cIidhbnQtbWVzc2FnZS0nICsgaW5zdGFuY2UudHlwZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJpbnN0YW5jZS5jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImluc3RhbmNlLmNvbnRlbnRcIj48L3NwYW4+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGkgKGNsaWNrKT1cImNsb3NlTWVzc2FnZSgpXCIgY2xhc3M9XCJjbWFjcy1jbG9zYWJsZS1tZXNzYWdlXCIgKm5nSWY9XCJpbnN0YW5jZS5vcHRpb25zICYmIGluc3RhbmNlLm9wdGlvbnMuY2xvc2FibGVcIiBuei1pY29uIFtuelR5cGVdPVwiJ2Nsb3NlJ1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc01lc3NhZ2VDb21wb25lbnQgZXh0ZW5kcyBOek1OQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpbnN0YW5jZSE6IFJlcXVpcmVkPE56TWVzc2FnZURhdGE+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVzdHJveWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHVzZXJBY3Rpb246IGJvb2xlYW4gfT4oKTtcblxuICBjb25zdHJ1Y3RvcihjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoY2RyKTtcbiAgfVxuXG4gIGNsb3NlTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cbn1cbiJdfQ==