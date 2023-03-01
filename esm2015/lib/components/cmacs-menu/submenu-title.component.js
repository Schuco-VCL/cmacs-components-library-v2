import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
const _c0 = ["cmacs-submenu-title", ""];
function NzSubMenuTitleComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function NzSubMenuTitleComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.cmacsIcon);
} }
function NzSubMenuTitleComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.title);
} }
function NzSubMenuTitleComponent_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} }
function NzSubMenuTitleComponent_span_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 11);
} }
function NzSubMenuTitleComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtemplate(1, NzSubMenuTitleComponent_span_4_i_1_Template, 1, 0, "i", 8);
    i0.ɵɵtemplate(2, NzSubMenuTitleComponent_span_4_i_2_Template, 1, 0, "i", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r3.dir);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "rtl");
} }
function NzSubMenuTitleComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
const _c1 = ["*"];
export class NzSubMenuTitleComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.icon = null;
        this.cmacsIcon = null;
        this.title = null;
        this.isMenuInsideDropDown = false;
        this.disabled = false;
        this.paddingLeft = null;
        this.mode = 'vertical';
        this.toggleSubMenu = new EventEmitter();
        this.subMenuMouseState = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setMouseState(state) {
        if (!this.disabled) {
            this.subMenuMouseState.next(state);
        }
    }
    clickTitle() {
        if (this.mode === 'inline' && !this.disabled) {
            this.toggleSubMenu.emit();
        }
    }
}
NzSubMenuTitleComponent.ɵfac = function NzSubMenuTitleComponent_Factory(t) { return new (t || NzSubMenuTitleComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
NzSubMenuTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NzSubMenuTitleComponent, selectors: [["", "cmacs-submenu-title", ""]], hostVars: 8, hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() { return ctx.clickTitle(); })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() { return ctx.setMouseState(true); })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() { return ctx.setMouseState(false); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
        i0.ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    } }, inputs: { icon: "icon", cmacsIcon: "cmacsIcon", title: "title", isMenuInsideDropDown: "isMenuInsideDropDown", disabled: "disabled", paddingLeft: "paddingLeft", mode: "mode" }, outputs: { toggleSubMenu: "toggleSubMenu", subMenuMouseState: "subMenuMouseState" }, exportAs: ["cmacsSubmenuTitle"], attrs: _c0, ngContentSelectors: _c1, decls: 7, vars: 5, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], ["style", "font-size: 18px; margin-right: 6px;", 3, "class", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["class", "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch", 4, "ngIf", "ngIfElse"], ["notDropdownTpl", ""], ["nz-icon", "", 3, "nzType"], [2, "font-size", "18px", "margin-right", "6px"], [1, "ant-dropdown-menu-submenu-expand-icon", 3, "ngSwitch"], ["class", "ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Left", 4, "ngSwitchCase"], ["class", "ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Right", 4, "ngSwitchDefault"], [1, "ant-dropdown-menu-submenu-arrow-icon", "iconArrowSmall-Solid-Left"], [1, "ant-dropdown-menu-submenu-arrow-icon", "iconArrowSmall-Solid-Right"], [1, "ant-menu-submenu-arrow", "ant-menu-submenu-arrow-cmacs"]], template: function NzSubMenuTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, NzSubMenuTitleComponent_i_0_Template, 1, 1, "i", 0);
        i0.ɵɵtemplate(1, NzSubMenuTitleComponent_i_1_Template, 1, 3, "i", 1);
        i0.ɵɵtemplate(2, NzSubMenuTitleComponent_ng_container_2_Template, 3, 1, "ng-container", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵtemplate(4, NzSubMenuTitleComponent_span_4_Template, 3, 2, "span", 3);
        i0.ɵɵtemplate(5, NzSubMenuTitleComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cmacsIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isMenuInsideDropDown)("ngIfElse", _r4);
    } }, directives: [i2.NgIf, i3.NzStringTemplateOutletDirective, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubMenuTitleComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-submenu-title]',
                exportAs: 'cmacsSubmenuTitle',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <i class="{{cmacsIcon}}" style="font-size: 18px; margin-right: 6px;" *ngIf="cmacsIcon"></i>
    <ng-container *nzStringTemplateOutlet="title">
      <span>{{ title }}</span>
    </ng-container>
    <ng-content></ng-content>
    <span [ngSwitch]="dir" *ngIf="isMenuInsideDropDown; else notDropdownTpl" class="ant-dropdown-menu-submenu-expand-icon">
      <i *ngSwitchCase="'rtl'" class="ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Left"></i>
      <i *ngSwitchDefault class="ant-dropdown-menu-submenu-arrow-icon iconArrowSmall-Solid-Right"></i>
    </span>
    <ng-template #notDropdownTpl>
      <i class="ant-menu-submenu-arrow ant-menu-submenu-arrow-cmacs"></i>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu-title]': 'isMenuInsideDropDown',
                    '[class.ant-menu-submenu-title]': '!isMenuInsideDropDown',
                    '[style.paddingLeft.px]': `dir === 'rtl' ? null : paddingLeft `,
                    '[style.paddingRight.px]': `dir === 'rtl' ? paddingLeft : null`,
                    '(click)': 'clickTitle()',
                    '(mouseenter)': 'setMouseState(true)',
                    '(mouseleave)': 'setMouseState(false)'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { icon: [{
            type: Input
        }], cmacsIcon: [{
            type: Input
        }], title: [{
            type: Input
        }], isMenuInsideDropDown: [{
            type: Input
        }], disabled: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], mode: [{
            type: Input
        }], toggleSubMenu: [{
            type: Output
        }], subMenuMouseState: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9zdWJtZW51LXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUFTdkMsdUJBQTRDOzs7SUFBakMsb0NBQWU7OztJQUMxQix1QkFBMkY7OztJQUF4RiwrQkFBcUI7OztJQUN4Qiw2QkFBOEM7SUFDNUMsNEJBQU07SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDMUIsMEJBQWU7OztJQURQLGVBQVc7SUFBWCxrQ0FBVzs7O0lBSWpCLHdCQUFvRzs7O0lBQ3BHLHdCQUFnRzs7O0lBRmxHLCtCQUF1SDtJQUNySCwyRUFBb0c7SUFDcEcsMkVBQWdHO0lBQ2xHLGlCQUFPOzs7SUFIRCxxQ0FBZ0I7SUFDaEIsZUFBbUI7SUFBbkIsb0NBQW1COzs7SUFJdkIsd0JBQW1FOzs7QUFhekUsTUFBTSxPQUFPLHVCQUF1QjtJQWNsQyxZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFickYsU0FBSSxHQUFrQixJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFrQixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUFzQyxJQUFJLENBQUM7UUFDaEQseUJBQW9CLEdBQUcsS0FBSyxD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Z3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLXN1Ym1lbnUtdGl0bGVdJyxcclxuICBleHBvcnRBczogJ2NtYWNzU3VibWVudVRpdGxlJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiICpuZ0lmPVwiaWNvblwiPjwvaT5cclxuICAgIDxpIGNsYXNzPVwie3tjbWFjc0ljb259fVwiIHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBtYXJnaW4tcmlnaHQ6IDZweDtcIiAqbmdJZj1cImNtYWNzSWNvblwiPjwvaT5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxyXG4gICAgICA8c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPHNwYW4gW25nU3dpdGNoXT1cImRpclwiICpuZ0lmPVwiaXNNZW51SW5zaWRlRHJvcERvd247IGVsc2Ugbm90RHJvcGRvd25UcGxcIiBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZXhwYW5kLWljb25cIj5cclxuICAgICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidydGwnXCIgY2xhc3M9XCJhbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93LWljb24gaWNvbkFycm93U21hbGwtU29saWQtTGVmdFwiPjwvaT5cclxuICAgICAgPGkgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvbiBpY29uQXJyb3dTbWFsbC1Tb2xpZC1SaWdodFwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm90RHJvcGRvd25UcGw+XHJcbiAgICAgIDxpIGNsYXNzPVwiYW50LW1lbnUtc3VibWVudS1hcnJvdyBhbnQtbWVudS1zdWJtZW51LWFycm93LWNtYWNzXCI+PC9pPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZV0nOiAnaXNNZW51SW5zaWRlRHJvcERvd24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXRpdGxlXSc6ICchaXNNZW51SW5zaWRlRHJvcERvd24nLFxyXG4gICAgJ1tzdHlsZS5wYWRkaW5nTGVmdC5weF0nOiBgZGlyID09PSAncnRsJyA/IG51bGwgOiBwYWRkaW5nTGVmdCBgLFxyXG4gICAgJ1tzdHlsZS5wYWRkaW5nUmlnaHQucHhdJzogYGRpciA9PT0gJ3J0bCcgPyBwYWRkaW5nTGVmdCA6IG51bGxgLFxyXG4gICAgJyhjbGljayknOiAnY2xpY2tUaXRsZSgpJyxcclxuICAgICcobW91c2VlbnRlciknOiAnc2V0TW91c2VTdGF0ZSh0cnVlKScsXHJcbiAgICAnKG1vdXNlbGVhdmUpJzogJ3NldE1vdXNlU3RhdGUoZmFsc2UpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3ViTWVudVRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgaXNNZW51SW5zaWRlRHJvcERvd24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRvZ2dsZVN1Yk1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHN1Yk1lbnVNb3VzZVN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7IH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VTdGF0ZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc3ViTWVudU1vdXNlU3RhdGUubmV4dChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNsaWNrVGl0bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnaW5saW5lJyAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=