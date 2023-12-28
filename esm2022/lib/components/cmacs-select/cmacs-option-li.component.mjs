import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
const _c0 = ["cmacs-option-li", ""];
function CmacsOptionLiComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 2);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.highlightKeys[0], "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.highlightKeys[1]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r2.highlightKeys[2], " ");
} }
function CmacsOptionLiComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.nzOption.nzLabel, " ");
} }
function CmacsOptionLiComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.nzOption.divider);
} }
function CmacsOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
    i0.ɵɵtemplate(2, CmacsOptionLiComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, CmacsOptionLiComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.highlightKeys.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.highlightKeys.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.nzOption.divider);
} }
function CmacsOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} }
function CmacsOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1.nzMenuItemSelectedIcon);
} }
export class CmacsOptionLiComponent {
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
    }
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        this.highlightKeys = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(list => {
            this.selected = !this.nzSelectService.userDropdown ? isNotNil(list.find(v => this.nzSelectService.compareWith(v, this.nzOption.nzValue))) : isNotNil(list.find(v => this.nzSelectService.compareWith(v.value, this.nzOption.nzValue)));
            this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.highlightKeys = [];
            // tslint:disable-next-line: no-non-null-assertion
            if (value && this.nzOption.nzLabel && this.nzOption.nzLabel.toLowerCase().includes(value.toLowerCase())) {
                // match the search value
                const index = this.nzOption.nzLabel.toLowerCase().indexOf(value.toLowerCase());
                this.highlightKeys = [
                    this.nzOption.nzLabel.slice(0, index),
                    this.nzOption.nzLabel.slice(index, index + value.length),
                    this.nzOption.nzLabel.slice(index + value.length, this.nzOption.nzLabel.length)
                ];
                this.highlightKeys = [...this.highlightKeys];
            }
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsOptionLiComponent_Factory(t) { return new (t || CmacsOptionLiComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOptionLiComponent, selectors: [["", "cmacs-option-li", ""]], hostVars: 11, hostBindings: function CmacsOptionLiComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsOptionLiComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function CmacsOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
        } if (rf & 2) {
            i0.ɵɵattribute("unselectable", "unselectable");
            i0.ɵɵstyleProp("user-select", "none");
            i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled)("cmacs-select-dropdown-menu-item-divider", ctx.nzOption.divider);
        } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["cmacsOptionLi"], attrs: _c0, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], [2, "color", "#2a7cff"], [1, "cmacs-select-divider"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function CmacsOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsOptionLiComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        } }, dependencies: [i2.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:max-content;display:inline-flex;right:0;position:absolute;top:0}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionLiComponent, [{
        type: Component,
        args: [{ selector: '[cmacs-option-li]', exportAs: 'cmacsOptionLi', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[class.cmacs-select-dropdown-menu-item-divider]': 'nzOption.divider',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                }, template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  <ng-container *ngIf=\"highlightKeys.length\">\r\n    <span>\r\n      {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!highlightKeys.length\">\r\n    {{nzOption.nzLabel}}\r\n  </ng-container>\r\n  \r\n  <ng-container *ngIf=\"nzOption.divider\">\r\n    <div class=\"cmacs-select-divider\">{{nzOption.divider}}</div>\r\n  </ng-container>\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon nzType=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n", styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:max-content;display:inline-flex;right:0;position:absolute;top:0}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULEtBQUssRUFLTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ2ZqRCw2QkFBMkM7SUFDekMsNEJBQU07SUFDSixZQUFvQjtJQUFBLCtCQUE2QjtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFBQSxZQUM5RTtJQUFBLGlCQUFPO0lBQ1QsMEJBQWU7OztJQUZYLGVBQW9CO0lBQXBCLHVEQUFvQjtJQUE2QixlQUFvQjtJQUFwQiw2Q0FBb0I7SUFBTyxlQUM5RTtJQUQ4RSx1REFDOUU7OztJQUVGLDZCQUE0QztJQUMxQyxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSx3REFDRjs7O0lBRUEsNkJBQXVDO0lBQ3JDLDhCQUFrQztJQUFBLFlBQW9CO0lBQUEsaUJBQU07SUFDOUQsMEJBQWU7OztJQURxQixlQUFvQjtJQUFwQiw2Q0FBb0I7OztJQVgxRCw2QkFBd0U7SUFDdEUsd0dBSWU7SUFDZix3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QVM7MkJBQ0UsbUJBQW1CLFlBQ25CLGVBQWUsbUJBRVIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjtvQkFDSixnREFBZ0QsRUFBRSxrQ0FBa0M7b0JBQ3BGLGdEQUFnRCxFQUFFLHFCQUFxQjtvQkFDdkUsOENBQThDLEVBQUUsZ0NBQWdDO29CQUNoRixpREFBaUQsRUFBRSxrQkFBa0I7b0JBQ3JFLHFCQUFxQixFQUFFLGdCQUFnQjtvQkFDdkMscUJBQXFCLEVBQUUsUUFBUTtvQkFDL0IsU0FBUyxFQUFFLGVBQWU7b0JBQzFCLGFBQWEsRUFBRSx5QkFBeUI7aUJBQ3pDO3NKQVNRLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxzQkFBc0I7a0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0U2VydmljZSB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW9wdGlvbi1saV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcHRpb25MaScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICduek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpdmlkZXJdJzogJ256T3B0aW9uLmRpdmlkZXInLFxyXG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nOiAnXCJ1bnNlbGVjdGFibGVcIicsXHJcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XSc6ICdcIm5vbmVcIicsXHJcbiAgICAnKGNsaWNrKSc6ICdjbGlja09wdGlvbigpJyxcclxuICAgICcobW91c2Vkb3duKSc6ICckZXZlbnQucHJldmVudERlZmF1bHQoKSdcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3B0aW9uTGlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBhY3RpdmUgPSBmYWxzZTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gIEBJbnB1dCgpIG56T3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudDtcclxuICBASW5wdXQoKSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY2xpY2tPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGlja09wdGlvbih0aGlzLm56T3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLm56U2VsZWN0U2VydmljZS51c2VyRHJvcGRvd24gPyBpc05vdE5pbChsaXN0LmZpbmQodiA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCh2LCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSkgOiBpc05vdE5pbChsaXN0LmZpbmQodiA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCh2LnZhbHVlLCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSk7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgob3B0aW9uLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgaWYgKHZhbHVlICYmIHRoaXMubnpPcHRpb24ubnpMYWJlbCAmJiB0aGlzLm56T3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm56T3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICB0aGlzLm56T3B0aW9uLm56TGFiZWwuc2xpY2UoaW5kZXgsIGluZGV4ICsgdmFsdWUubGVuZ3RoKSxcclxuICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy5uek9wdGlvbi5uekxhYmVsLmxlbmd0aClcclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFsuLi50aGlzLmhpZ2hsaWdodEtleXNdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIW56T3B0aW9uLm56Q3VzdG9tQ29udGVudDsgZWxzZSBuek9wdGlvbi50ZW1wbGF0ZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJoaWdobGlnaHRLZXlzLmxlbmd0aFwiPlxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHt7aGlnaGxpZ2h0S2V5c1swXX19PHNwYW4gc3R5bGU9XCJjb2xvcjogIzJhN2NmZlwiPnt7aGlnaGxpZ2h0S2V5c1sxXX19PC9zcGFuPnt7aGlnaGxpZ2h0S2V5c1syXX19XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWdobGlnaHRLZXlzLmxlbmd0aFwiPlxyXG4gICAge3tuek9wdGlvbi5uekxhYmVsfX1cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICBcclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpPcHRpb24uZGl2aWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXNlbGVjdC1kaXZpZGVyXCI+e3tuek9wdGlvbi5kaXZpZGVyfX08L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UuaXNNdWx0aXBsZU9yVGFnc1wiPlxyXG4gIDxpIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiIW56TWVudUl0ZW1TZWxlY3RlZEljb247IGVsc2UgbnpNZW51SXRlbVNlbGVjdGVkSWNvblwiPjwvaT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==