import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core/animation';
import { NzMNComponent } from './base';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/core/outlet";
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
    i0.ɵɵlistener("click", function CmacsMessageComponent_i_4_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeMessage()); });
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
    static { this.ɵfac = function CmacsMessageComponent_Factory(t) { return new (t || CmacsMessageComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsMessageComponent, selectors: [["cmacs-message"]], inputs: { instance: "instance" }, outputs: { destroyed: "destroyed" }, exportAs: ["cmacsMessage"], features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 7, consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content", 3, "ngClass"], [1, "ant-message-custom-content", 3, "ngClass"], [4, "nzStringTemplateOutlet"], ["class", "cmacs-closable-message", "nz-icon", "", 3, "nzType", "click", 4, "ngIf"], [3, "innerHTML"], ["nz-icon", "", 1, "cmacs-closable-message", 3, "nzType", "click"]], template: function CmacsMessageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("@moveUpMotion.done", function CmacsMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) { return ctx.animationStateChanged.next($event); })("mouseenter", function CmacsMessageComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function CmacsMessageComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, CmacsMessageComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
            i0.ɵɵtemplate(4, CmacsMessageComponent_i_4_Template, 1, 1, "i", 4);
            i0.ɵɵelementEnd()()();
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
        } }, dependencies: [i1.NgClass, i1.NgIf, i2.ɵNzTransitionPatchDirective, i3.NzIconDirective, i4.NzStringTemplateOutletDirective], styles: [".ant-message-success{background-color:#00ce7d;border-color:#00ce7d}.ant-message-info{background-color:#009fe3;border-color:#009fe3}.ant-message-warning{background-color:#ffc634;border-color:#ffc634}.ant-message-error{background-color:#f6503c;border-color:#f6503c}.ant-message-custom-content{font-family:Roboto-Regular;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff;text-align:left}.cmacs-closable-message{color:#fff!important;font-size:12px!important;float:right!important;margin-right:-5px!important}.cmacs-closable-message:hover{cursor:pointer}\n"], encapsulation: 2, data: { animation: [moveUpMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMessageComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, selector: 'cmacs-message', exportAs: 'cmacsMessage', preserveWhitespaces: false, animations: [moveUpMotion], template: `
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
  `, styles: [".ant-message-success{background-color:#00ce7d;border-color:#00ce7d}.ant-message-info{background-color:#009fe3;border-color:#009fe3}.ant-message-warning{background-color:#ffc634;border-color:#ffc634}.ant-message-error{background-color:#f6503c;border-color:#f6503c}.ant-message-custom-content{font-family:Roboto-Regular;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1;letter-spacing:normal;color:#fff;text-align:left}.cmacs-closable-message{color:#fff!important;font-size:12px!important;float:right!important;margin-right:-5px!important}.cmacs-closable-message:hover{cursor:pointer}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { instance: [{
            type: Input
        }], destroyed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUFxQjdCLDZCQUF5RDtJQUN2RCwwQkFBNEM7SUFDOUMsMEJBQWU7OztJQURQLGVBQThCO0lBQTlCLHNFQUE4Qjs7OztJQUV0Qyw0QkFBNEk7SUFBekksMkpBQVMsZUFBQSxxQkFBYyxDQUFBLElBQUM7SUFBaUgsaUJBQUk7O0lBQXZCLGdDQUFrQjs7QUFNckosTUFBTSxPQUFPLHFCQUFzQixTQUFRLGFBQWE7SUFJdEQsWUFBWSxHQUFzQjtRQUNoQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFITSxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUFJdkYsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztzRkFWVSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtZQWxCOUIsOEJBTUM7WUFIQyx3SUFBc0Isc0NBQWtDLElBQUMsNEZBQzNDLGFBQVMsSUFEa0MsNEZBRTNDLGFBQVMsSUFGa0M7WUFJekQsOEJBQXNMLGFBQUE7WUFFbEwsd0ZBRWU7WUFDZixrRUFBZ0o7WUFDbEosaUJBQU0sRUFBQSxFQUFBOztZQVhSLGtEQUFnQztZQUttRCxlQUFrRztZQUFsRywwSEFBa0c7WUFBN0ksNERBQTBDO1lBQ3hDLGVBQTBDO1lBQTFDLDREQUEwQztZQUNqRSxlQUF3QztZQUF4Qyw2REFBd0M7WUFHSyxlQUFtRDtZQUFuRCw0RUFBbUQ7c3lCQWQzRyxDQUFDLFlBQVksQ0FBQzs7dUZBb0JmLHFCQUFxQjtjQTNCakMsU0FBUztrQ0FDUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFlBQzNCLGVBQWUsWUFDZixjQUFjLHVCQUNILEtBQUssY0FFZCxDQUFDLFlBQVksQ0FBQyxZQUNoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7b0VBR1EsUUFBUTtrQkFBaEIsS0FBSztZQUNhLFNBQVM7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbW92ZVVwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcblxyXG5pbXBvcnQgeyBOek1OQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlRGF0YSB9IGZyb20gJy4vdHlwaW5ncyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtbWVzc2FnZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01lc3NhZ2UnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW1lc3NhZ2UuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFttb3ZlVXBNb3Rpb25dLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiYW50LW1lc3NhZ2Utbm90aWNlXCJcclxuICAgICAgW0Btb3ZlVXBNb3Rpb25dPVwiaW5zdGFuY2Uuc3RhdGVcIlxyXG4gICAgICAoQG1vdmVVcE1vdGlvbi5kb25lKT1cImFuaW1hdGlvblN0YXRlQ2hhbmdlZC5uZXh0KCRldmVudClcIlxyXG4gICAgICAobW91c2VlbnRlcik9XCJvbkVudGVyKClcIlxyXG4gICAgICAobW91c2VsZWF2ZSk9XCJvbkxlYXZlKClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1lc3NhZ2Utbm90aWNlLWNvbnRlbnRcIiBbbmdDbGFzc109XCInYW50LW1lc3NhZ2UtJyArIGluc3RhbmNlLnR5cGVcIiBbc3R5bGUud2lkdGgucHhdPVwiaW5zdGFuY2Uub3B0aW9ucyAmJiBpbnN0YW5jZS5vcHRpb25zLndpZHRoID8gaW5zdGFuY2Uub3B0aW9ucy53aWR0aCA6ICdpbmhlcml0J1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZS1jdXN0b20tY29udGVudFwiIFtuZ0NsYXNzXT1cIidhbnQtbWVzc2FnZS0nICsgaW5zdGFuY2UudHlwZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImluc3RhbmNlLmNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJpbnN0YW5jZS5jb250ZW50XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8aSAoY2xpY2spPVwiY2xvc2VNZXNzYWdlKClcIiBjbGFzcz1cImNtYWNzLWNsb3NhYmxlLW1lc3NhZ2VcIiAqbmdJZj1cImluc3RhbmNlLm9wdGlvbnMgJiYgaW5zdGFuY2Uub3B0aW9ucy5jbG9zYWJsZVwiIG56LWljb24gW256VHlwZV09XCInY2xvc2UnXCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVzc2FnZUNvbXBvbmVudCBleHRlbmRzIE56TU5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgaW5zdGFuY2UhOiBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhPjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVzdHJveWVkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGlkOiBzdHJpbmc7IHVzZXJBY3Rpb246IGJvb2xlYW4gfT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgc3VwZXIoY2RyKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=