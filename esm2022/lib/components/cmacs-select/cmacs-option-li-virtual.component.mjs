import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function CmacsOptionLiVirtualComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
function CmacsOptionLiVirtualComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.nzOption.nzLabel, " ");
} }
function CmacsOptionLiVirtualComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
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
function CmacsOptionLiVirtualComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsOptionLiVirtualComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
    i0.ɵɵtemplate(2, CmacsOptionLiVirtualComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    i0.ɵɵtemplate(3, CmacsOptionLiVirtualComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 1);
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
function CmacsOptionLiVirtualComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} }
function CmacsOptionLiVirtualComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsOptionLiVirtualComponent_ng_container_1_i_1_Template, 1, 0, "i", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1.nzMenuItemSelectedIcon);
} }
export class CmacsOptionLiVirtualComponent {
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
    ngOnInit() { }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngAfterContentChecked() {
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
    static { this.ɵfac = function CmacsOptionLiVirtualComponent_Factory(t) { return new (t || CmacsOptionLiVirtualComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOptionLiVirtualComponent, selectors: [["cmacs-option-li-virtual"]], hostVars: 11, hostBindings: function CmacsOptionLiVirtualComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsOptionLiVirtualComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function CmacsOptionLiVirtualComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
        } if (rf & 2) {
            i0.ɵɵattribute("unselectable", "unselectable");
            i0.ɵɵstyleProp("user-select", "none");
            i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled)("cmacs-select-dropdown-menu-item-divider", ctx.nzOption.divider);
        } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], [2, "color", "#2a7cff"], [1, "cmacs-select-divider"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function CmacsOptionLiVirtualComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsOptionLiVirtualComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
            i0.ɵɵtemplate(1, CmacsOptionLiVirtualComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        } }, dependencies: [i2.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".cmacs-select-divider[_ngcontent-%COMP%]{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:max-content;display:inline-flex;right:0;position:absolute;top:0}"], changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionLiVirtualComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-option-li-virtual', changeDetection: ChangeDetectionStrategy.OnPush, host: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWxpLXZpcnR1YWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNlbGVjdC9jbWFjcy1vcHRpb24tbGktdmlydHVhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQTZDLE1BQU0sZUFBZSxDQUFDO0FBQ3BKLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQ0pqRCw2QkFBMkM7SUFDekMsNEJBQU07SUFDSixZQUFvQjtJQUFBLCtCQUE2QjtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFBQSxZQUM5RTtJQUFBLGlCQUFPO0lBQ1QsMEJBQWU7OztJQUZYLGVBQW9CO0lBQXBCLHVEQUFvQjtJQUE2QixlQUFvQjtJQUFwQiw2Q0FBb0I7SUFBTyxlQUM5RTtJQUQ4RSx1REFDOUU7OztJQUVGLDZCQUE0QztJQUMxQyxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSx3REFDRjs7O0lBRUEsNkJBQXVDO0lBQ3JDLDhCQUFrQztJQUFBLFlBQW9CO0lBQUEsaUJBQU07SUFDOUQsMEJBQWU7OztJQURxQixlQUFvQjtJQUFwQiw2Q0FBb0I7OztJQVgxRCw2QkFBd0U7SUFDdEUsK0dBSWU7SUFD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dUZEVXhDLDZCQUE2QjtjQWpCekMsU0FBUzsyQkFDSSx5QkFBeUIsbUJBR2xCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7b0JBQ0YsZ0RBQWdELEVBQUUsa0NBQWtDO29CQUNwRixnREFBZ0QsRUFBRSxxQkFBcUI7b0JBQ3ZFLDhDQUE4QyxFQUFFLGdDQUFnQztvQkFDaEYsaURBQWlELEVBQUUsa0JBQWtCO29CQUNyRSxxQkFBcUIsRUFBRSxnQkFBZ0I7b0JBQ3ZDLHFCQUFxQixFQUFFLFFBQVE7b0JBQy9CLFNBQVMsRUFBRSxlQUFlO29CQUMxQixhQUFhLEVBQUUseUJBQXlCO2lCQUMzQztzSkFTUSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csc0JBQXNCO2tCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY21hY3Mtb3B0aW9uLWxpLXZpcnR1YWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcHRpb24tbGkuY29tcG9uZW50LmNzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXSc6ICdhY3RpdmUgJiYgIW56T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgICAgICdbY2xhc3MuY21hY3Mtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXZpZGVyXSc6ICduek9wdGlvbi5kaXZpZGVyJyxcclxuICAgICAgICAnW2F0dHIudW5zZWxlY3RhYmxlXSc6ICdcInVuc2VsZWN0YWJsZVwiJyxcclxuICAgICAgICAnW3N0eWxlLnVzZXItc2VsZWN0XSc6ICdcIm5vbmVcIicsXHJcbiAgICAgICAgJyhjbGljayknOiAnY2xpY2tPcHRpb24oKScsXHJcbiAgICAgICAgJyhtb3VzZWRvd24pJzogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpJ1xyXG4gICAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkxpVmlydHVhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgQElucHV0KCkgbnpPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50O1xyXG4gICAgQElucHV0KCkgbnpNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gICAgY2xpY2tPcHRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xpY2tPcHRpb24odGhpcy5uek9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHB1YmxpYyBuelNlbGVjdFNlcnZpY2U6IENtYWNzU2VsZWN0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICAgKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShsaXN0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLm56U2VsZWN0U2VydmljZS51c2VyRHJvcGRvd24gPyBpc05vdE5pbChsaXN0LmZpbmQodiA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCh2LCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSkgOiBpc05vdE5pbChsaXN0LmZpbmQodiA9PiB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aCh2LnZhbHVlLCB0aGlzLm56T3B0aW9uLm56VmFsdWUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGgob3B0aW9uLm56VmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMubnpPcHRpb24ubnpMYWJlbCAmJiB0aGlzLm56T3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKSEuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm56T3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm56T3B0aW9uLm56TGFiZWwuc2xpY2UoaW5kZXgsIGluZGV4ICsgdmFsdWUubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy5uek9wdGlvbi5uekxhYmVsLmxlbmd0aClcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFsuLi50aGlzLmhpZ2hsaWdodEtleXNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhbnpPcHRpb24ubnpDdXN0b21Db250ZW50OyBlbHNlIG56T3B0aW9uLnRlbXBsYXRlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZ2hsaWdodEtleXMubGVuZ3RoXCI+XHJcbiAgICA8c3Bhbj5cclxuICAgICAge3toaWdobGlnaHRLZXlzWzBdfX08c3BhbiBzdHlsZT1cImNvbG9yOiAjMmE3Y2ZmXCI+e3toaWdobGlnaHRLZXlzWzFdfX08L3NwYW4+e3toaWdobGlnaHRLZXlzWzJdfX1cclxuICAgIDwvc3Bhbj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZ2hsaWdodEtleXMubGVuZ3RoXCI+XHJcbiAgICB7e256T3B0aW9uLm56TGFiZWx9fVxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIFxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJuek9wdGlvbi5kaXZpZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2VsZWN0LWRpdmlkZXJcIj57e256T3B0aW9uLmRpdmlkZXJ9fTwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzXCI+XHJcbiAgPGkgbnotaWNvbiBuelR5cGU9XCJjaGVja1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uXCIgKm5nSWY9XCIhbnpNZW51SXRlbVNlbGVjdGVkSWNvbjsgZWxzZSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCI+PC9pPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19