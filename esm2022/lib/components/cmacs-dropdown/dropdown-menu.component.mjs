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
    i0.ɵɵlistener("mouseenter", function CmacsDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setMouseState(true)); })("positionChange", function CmacsDropdownMenuComponent_ng_template_0_Template_div_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onPositionChange($event)); })("mouseleave", function CmacsDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.setMouseState(false)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-dropdown-rtl", ctx_r0.dir === "rtl")("cmacs-dropdown-open", ctx_r0.cmacsOpen);
    i0.ɵɵproperty("ngClass", ctx_r0.overlayClassName)("ngStyle", ctx_r0.overlayStyle)("@slideMotion", "enter")("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
} }
const _c0 = ["*"];
export class CmacsDropdownMenuComponent {
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
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
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsDropdownMenuComponent_Factory(t) { return new (t || CmacsDropdownMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsDropdownMenuComponent, selectors: [["cmacs-dropdown-menu"]], viewQuery: function CmacsDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
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
        } }, dependencies: [i4.NgClass, i4.NgStyle, i3.NzNoAnimationDirective], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULElBQUksRUFHSixRQUFRLEVBRVIsV0FBVyxFQUNYLFNBQVMsRUFFVCxpQkFBaUIsRUFDakIsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUczRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUFrQmpELDhCQVlDO0lBSEMsc0xBQWMsZUFBQSxxQkFBYyxJQUFJLENBQUMsQ0FBQSxJQUFDLHVMQUNoQixlQUFBLCtCQUF3QixDQUFBLElBRFIseUtBRXBCLGVBQUEscUJBQWMsS0FBSyxDQUFDLENBQUEsSUFGQTtJQUlsQyxrQkFBeUI7SUFDM0IsaUJBQU07OztJQVpKLHdEQUF3Qyx5Q0FBQTtJQUN4QyxpREFBNEIsZ0NBQUEseUJBQUEsb0ZBQUEsdUZBQUE7OztBQWtCcEMsTUFBTSxPQUFPLDBCQUEwQjtJQVlyQyxhQUFhLENBQUMsT0FBZ0I7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxD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ZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7O3NCQTRCSSxRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFRO3dCQXRCdUIsV0FBVztrQkFBcEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2YsU0FBUztrQkFBakMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vY21hY3MtbWVudS9tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnLi4vY21hY3MtbWVudS9tZW51LnRva2VuJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IGBjbWFjcy1kcm9wZG93bi1tZW51YCxcbiAgZXhwb3J0QXM6IGBjbWFjc0Ryb3Bkb3duTWVudWAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbl0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lbnVTZXJ2aWNlLFxuICAgIC8qKiBtZW51IGlzIGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXG4gICAgICB1c2VWYWx1ZTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGU+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LWRyb3Bkb3duIGNtYWNzLWRyb3Bkb3duXCJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgICAgIFtuZ0NsYXNzXT1cIm92ZXJsYXlDbGFzc05hbWVcIlxuICAgICAgICBbbmdTdHlsZV09XCJvdmVybGF5U3R5bGVcIlxuICAgICAgICBbY2xhc3MuY21hY3MtZHJvcGRvd24tb3Blbl09XCJjbWFjc09wZW5cIlxuICAgICAgICBbQHNsaWRlTW90aW9uXT1cIidlbnRlcidcIlxuICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VTdGF0ZSh0cnVlKVwiXG4gICAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAobW91c2VsZWF2ZSk9XCJzZXRNb3VzZVN0YXRlKGZhbHNlKVwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgbW91c2VTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgaXNDaGlsZFN1Yk1lbnVPcGVuJCA9IHRoaXMubnpNZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kO1xuICBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLm56TWVudVNlcnZpY2UuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skO1xuICBvdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcbiAgb3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuID0gZmFsc2U7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgc2V0TW91c2VTdGF0ZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZVN0YXRlJC5uZXh0KHZpc2libGUpO1xuICB9XG5cbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIENtYWNzRHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiB0aGlzW1RdKTogdm9pZCB7XG4gICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge31cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19