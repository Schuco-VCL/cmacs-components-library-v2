import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { slideMotion, zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
const _c0 = ["cmacs-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) { }
export class NzSubmenuNoneInlineChildComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.menuClass = '';
        this.theme = 'light';
        this.templateOutlet = null;
        this.isMenuInsideDropDown = false;
        this.mode = 'vertical';
        this.position = 'right';
        this.disabled = false;
        this.open = false;
        this.subMenuMouseState = new EventEmitter();
        this.expandState = 'collapsed';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu-submenu', 'ant-menu-submenu-popup');
    }
    setMouseState(state) {
        if (!this.disabled) {
            this.subMenuMouseState.next(state);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    calcMotionState() {
        if (this.open) {
            if (this.mode === 'horizontal') {
                this.expandState = 'bottom';
            }
            else if (this.mode === 'vertical') {
                this.expandState = 'active';
            }
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        var _a;
        this.calcMotionState();
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { mode, open } = changes;
        if (mode || open) {
            this.calcMotionState();
        }
    }
}
NzSubmenuNoneInlineChildComponent.ɵfac = function NzSubmenuNoneInlineChildComponent_Factory(t) { return new (t || NzSubmenuNoneInlineChildComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
NzSubmenuNoneInlineChildComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSubmenuNoneInlineChildComponent, selectors: [["", "cmacs-submenu-none-inline-child", ""]], hostVars: 14, hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        i0.ɵɵsyntheticHostProperty("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
        i0.ɵɵclassProp("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
    } }, inputs: { menuClass: "menuClass", theme: "theme", templateOutlet: "templateOutlet", isMenuInsideDropDown: "isMenuInsideDropDown", mode: "mode", position: "position", disabled: "disabled", open: "open" }, outputs: { subMenuMouseState: "subMenuMouseState" }, exportAs: ["cmacsSubmenuNoneInlineChild"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 2, vars: 16, consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]], template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
        i0.ɵɵproperty("ngClass", ctx.menuClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
    } }, directives: [i2.NgClass, i2.NgTemplateOutlet], encapsulation: 2, data: { animation: [zoomBigMotion, slideMotion] }, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubmenuNoneInlineChildComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-submenu-none-inline-child]',
                exportAs: 'cmacsSubmenuNoneInlineChild',
                encapsulation: ViewEncapsulation.None,
                animations: [zoomBigMotion, slideMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-menu-light]': "theme === 'light'",
                    '[class.ant-menu-dark]': "theme === 'dark'",
                    '[class.ant-menu-submenu-placement-bottom]': "mode === 'horizontal'",
                    '[class.ant-menu-submenu-placement-right]': "mode === 'vertical' && position === 'right'",
                    '[class.ant-menu-submenu-placement-left]': "mode === 'vertical' && position === 'left'",
                    '[class.ant-menu-submenu-rtl]': 'dir ==="rtl"',
                    '[@slideMotion]': 'expandState',
                    '[@zoomBigMotion]': 'expandState',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { menuClass: [{
            type: Input
        }], theme: [{
            type: Input
        }], templateOutlet: [{
            type: Input
        }], isMenuInsideDropDown: [{
            type: Input
        }], mode: [{
            type: Input
        }], position: [{
            type: Input
        }], disabled: [{
            type: Input
        }], open: [{
            type: Input
        }], subMenuMouseState: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1ub24taW5saW5lLWNoaWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L3N1Ym1lbnUtbm9uLWlubGluZS1jaGlsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFvQzNDLE1BQU0sT0FBTyxpQ0FBaUM7SUFXNUMsWUFBb0IsVUFBc0IsRUFBc0IsY0FBOEI7UUFBMUUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWckYsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQXVCLE9BQU8sQ0FBQztRQUNwQyxtQkFBYyxHQUFrQyxJQUFJLENBQUM7UUFDckQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFNBQUksR0FBc0IsVUFBVSxDQUFDO1FBQ3JDLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ0gsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVluRSxnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ2YsYUFB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UUFBUTt3QkFWNUMsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNhLGlCQUFpQjtrQkFBbkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiwgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlLCBDbWFjc01lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc3VibWVudS1ub25lLWlubGluZS1jaGlsZF0nLFxuICBleHBvcnRBczogJ2NtYWNzU3VibWVudU5vbmVJbmxpbmVDaGlsZCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uLCBzbGlkZU1vdGlvbl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudV09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LW1lbnVdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS12ZXJ0aWNhbF09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LW1lbnUtdmVydGljYWxdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJdPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1tZW51LXN1Yl09XCIhaXNNZW51SW5zaWRlRHJvcERvd25cIlxuICAgICAgW2NsYXNzLmFudC1tZW51LXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgIFtuZ0NsYXNzXT1cIm1lbnVDbGFzc1wiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlT3V0bGV0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LW1lbnUtbGlnaHRdJzogXCJ0aGVtZSA9PT0gJ2xpZ2h0J1wiLFxuICAgICdbY2xhc3MuYW50LW1lbnUtZGFya10nOiBcInRoZW1lID09PSAnZGFyaydcIixcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbV0nOiBcIm1vZGUgPT09ICdob3Jpem9udGFsJ1wiLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRdJzogXCJtb2RlID09PSAndmVydGljYWwnICYmIHBvc2l0aW9uID09PSAncmlnaHQnXCIsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1sZWZ0XSc6IFwibW9kZSA9PT0gJ3ZlcnRpY2FsJyAmJiBwb3NpdGlvbiA9PT0gJ2xlZnQnXCIsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXJ0bF0nOiAnZGlyID09PVwicnRsXCInLFxuICAgICdbQHNsaWRlTW90aW9uXSc6ICdleHBhbmRTdGF0ZScsXG4gICAgJ1tAem9vbUJpZ01vdGlvbl0nOiAnZXhwYW5kU3RhdGUnLFxuICAgICcobW91c2VlbnRlciknOiAnc2V0TW91c2VTdGF0ZSh0cnVlKScsXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdzZXRNb3VzZVN0YXRlKGZhbHNlKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVOb25lSW5saW5lQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWVudUNsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdGhlbWU6IENtYWNzTWVudVRoZW1lVHlwZSA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlT3V0bGV0OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGlzTWVudUluc2lkZURyb3BEb3duID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1vZGU6IENtYWNzTWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgcG9zaXRpb24gPSAncmlnaHQnO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBvcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBzdWJNZW51TW91c2VTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7XG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LW1lbnUtc3VibWVudScsICdhbnQtbWVudS1zdWJtZW51LXBvcHVwJyk7XG4gIH1cblxuICBzZXRNb3VzZVN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnN1Yk1lbnVNb3VzZVN0YXRlLm5leHQoc3RhdGUpO1xuICAgIH1cbiAgfVxuICBleHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbiAgY2FsY01vdGlvblN0YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2JvdHRvbSc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2FjdGl2ZSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1vZGUsIG9wZW4gfSA9IGNoYW5nZXM7XG4gICAgaWYgKG1vZGUgfHwgb3Blbikge1xuICAgICAgdGhpcy5jYWxjTW90aW9uU3RhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==