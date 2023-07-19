import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Optional, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { MenuService } from '../cmacs-menu/menu.service';
import { CmacsIsMenuInsideDropDownToken } from '../cmacs-menu/menu.token';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-menu/menu.service";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/no-animation";
import * as i4 from "@angular/common";
function CmacsDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("mouseenter", function CmacsDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.setMouseState(true); })("positionChange", function CmacsDropdownMenuComponent_ng_template_0_Template_div_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onPositionChange($event); })("mouseleave", function CmacsDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.setMouseState(false); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-dropdown-rtl", ctx_r0.dir === "rtl")("cmacs-dropdown-open", ctx_r0.cmacsOpen);
    i0.ɵɵproperty("ngClass", ctx_r0.overlayClassName)("ngStyle", ctx_r0.overlayStyle)("@slideMotion", "enter")("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
const _c0 = ["*"];
export class CmacsDropdownMenuComponent {
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.overlayClassName = '';
        this.overlayStyle = {};
        this.cmacsOpen = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsDropdownMenuComponent.ɵfac = function CmacsDropdownMenuComponent_Factory(t) { return new (t || CmacsDropdownMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); };
CmacsDropdownMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDropdownMenuComponent, selectors: [["cmacs-dropdown-menu"]], viewQuery: function CmacsDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, inputs: { cmacsOpen: "cmacsOpen" }, exportAs: ["cmacsDropdownMenu"], features: [i0.ɵɵProvidersFeature([
            MenuService,
            /** menu is inside dropdown-menu component **/
            {
                provide: CmacsIsMenuInsideDropDownToken,
                useValue: true
            }
        ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", "cmacs-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "positionChange", "mouseleave"]], template: function CmacsDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsDropdownMenuComponent_ng_template_0_Template, 2, 9, "ng-template");
    } }, directives: [i4.NgClass, i4.NgStyle, i3.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsDropdownMenuComponent.prototype, "cmacsOpen", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDropdownMenuComponent, [{
        type: Component,
        args: [{
                selector: `cmacs-dropdown-menu`,
                exportAs: `cmacsDropdownMenu`,
                animations: [slideMotion],
                providers: [
                    MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: CmacsIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ],
                template: `
    <ng-template>
      <div
        class="ant-dropdown cmacs-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="overlayClassName"
        [ngStyle]="overlayStyle"
        [class.cmacs-dropdown-open]="cmacsOpen"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (positionChange)="onPositionChange($event)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.MenuService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }], cmacsOpen: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULElBQUksRUFHSixRQUFRLEVBRVIsV0FBVyxFQUNYLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUFrQmpELDhCQVlDO0lBSEMsMk1BQTRCLElBQUksS0FBRSwwTkFBQSw4TEFFTixLQUFLLEtBRkM7SUFJbEMsa0JBQXlCO0lBQzNCLGlCQUFNOzs7SUFaSix3REFBd0MseUNBQUE7SUFDeEMsaURBQTRCLGdDQUFBLHlCQUFBLG9GQUFBLHVGQUFBOzs7QUFrQnBDLE1BQU0sT0FBTywwQkFBMEI7SUFxQnJDLFlBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZ0JBQWtDLEVBQ2xDLGFBQTBCLEVBQ2IsY0FBOEIsRUFDdkIsV0FBb0M7UUFOdkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxH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dEJ1QixXQUFXO2tCQUFwRCxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDZixTQUFTO2tCQUFqQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtbWVudS9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuLi9jbWFjcy1tZW51L21lbnUudG9rZW4nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBgY21hY3MtZHJvcGRvd24tbWVudWAsXHJcbiAgZXhwb3J0QXM6IGBjbWFjc0Ryb3Bkb3duTWVudWAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1lbnVTZXJ2aWNlLFxyXG4gICAgLyoqIG1lbnUgaXMgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXHJcbiAgICAgIHVzZVZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtZHJvcGRvd24gY21hY3MtZHJvcGRvd25cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIm92ZXJsYXlDbGFzc05hbWVcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cIm92ZXJsYXlTdHlsZVwiXHJcbiAgICAgICAgW2NsYXNzLmNtYWNzLWRyb3Bkb3duLW9wZW5dPVwiY21hY3NPcGVuXCJcclxuICAgICAgICBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIlxyXG4gICAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VTdGF0ZSh0cnVlKVwiXHJcbiAgICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic2V0TW91c2VTdGF0ZShmYWxzZSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBtb3VzZVN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJDtcclxuICBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLm56TWVudVNlcnZpY2UuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skO1xyXG4gIG92ZXJsYXlDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIG92ZXJsYXlTdHlsZTogSW5kZXhhYmxlT2JqZWN0ID0ge307XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgc2V0TW91c2VTdGF0ZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdXNlU3RhdGUkLm5leHQodmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZTxUIGV4dGVuZHMga2V5b2YgQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IHRoaXNbVF0pOiB2b2lkIHtcclxuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19