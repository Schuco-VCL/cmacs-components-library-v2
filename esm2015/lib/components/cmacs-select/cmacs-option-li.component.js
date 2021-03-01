import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
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
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
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
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOptionLiComponent.ɵfac = function CmacsOptionLiComponent_Factory(t) { return new (t || CmacsOptionLiComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
CmacsOptionLiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionLiComponent, selectors: [["", "cmacs-option-li", ""]], hostVars: 11, hostBindings: function CmacsOptionLiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsOptionLiComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function CmacsOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        i0.ɵɵattribute("unselectable", "unselectable");
        i0.ɵɵstyleProp("user-select", "none");
        i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled)("cmacs-select-dropdown-menu-item-divider", ctx.nzOption.divider);
    } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["cmacsOptionLi"], attrs: _c0, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], [2, "color", "#2a7cff"], [1, "cmacs-select-divider"], ["nz-icon", "", "type", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "check", 1, "ant-select-selected-icon"]], template: function CmacsOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsOptionLiComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
    } }, directives: [i2.NgIf, i3.ɵNzTransitionPatchDirective], styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-flex;right:0;position:absolute;top:0}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionLiComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-option-li]',
                exportAs: 'cmacsOptionLi',
                templateUrl: './cmacs-option-li.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[class.cmacs-select-dropdown-menu-item-divider]': 'nzOption.divider',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                },
                styleUrls: ['./cmacs-option-li.component.css']
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULEtBQUssRUFLTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0lDZmpELDZCQUEyQztJQUN6Qyw0QkFBTTtJQUNKLFlBQW9CO0lBQUEsK0JBQTZCO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUFBLFlBQzlFO0lBQUEsaUJBQU87SUFDVCwwQkFBZTs7O0lBRlgsZUFBb0I7SUFBcEIsdURBQW9CO0lBQTZCLGVBQW9CO0lBQXBCLDZDQUFvQjtJQUFPLGVBQzlFO0lBRDhFLHVEQUM5RTs7O0lBRUYsNkJBQTRDO0lBQzFDLFlBQ0Y7SUFBQSwwQkFBZTs7O0lBRGIsZUFDRjtJQURFLHdEQUNGOzs7SUFFQSw2QkFBdUM7SUFDckMsOEJBQWtDO0lBQUEsWUFBb0I7SUFBQSxpQkFBTTtJQUM5RCwwQkFBZTs7O0lBRHFCLGVBQW9CO0lBQXBCLDZDQUFvQjs7O0lBWDFELDZCQUF3RTtJQUN0RSx3R0FJZTtJQUNmLHdHQUVlO0lBRWYsd0dBRWU7SUFDakIsMEJBQWU7OztJQVpFLGVBQTBCO0lBQTFCLGtEQUEwQjtJQUsxQixlQUEyQjtJQUEzQixtREFBMkI7SUFJM0IsZUFBc0I7SUFBdEIsOENBQXNCOzs7SUFLckMsdUJBQTBIOzs7SUFENUgsNkJBQXVEO0lBQ3JELGtGQUEwSDtJQUM1SCwwQkFBZTs7O0lBRDZDLGVBQStCO0lBQS9CLHFEQUErQiwyQ0FBQTs7QURxQjNGLE1BQU0sT0FBTyxzQkFBc0I7SUFhakMsWUFDVSxVQUFzQixFQUN2QixlQUFtQyxFQUNsQyxHQUFzQixFQUM5QixRQUFtQjtRQUhYLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBZmhDLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFjakIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQVhELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2TyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0RixJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN4QixrREFBa0Q7WUFDbEQsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUN4Ryx5QkFBeUI7Z0JBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLGFBQWEsR0FBRztvQkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ2hGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzRGQXZEVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjttR0FBdEIsaUJBQWEsZ0dBQWIsdUJBQXVCOzs7Ozs7UUNwQ3BDLHlGQWFlO1FBQ2YseUZBRWU7O1FBaEJBLG9EQUFpQyxtQ0FBQTtRQWNqQyxlQUFzQztRQUF0QywyREFBc0M7O3VGRHNCeEMsc0JBQXNCO2NBbEJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLGdEQUFnRCxFQUFFLGtDQUFrQztvQkFDcEYsZ0RBQWdELEVBQUUscUJBQXFCO29CQUN2RSw4Q0FBOEMsRUFBRSxnQ0FBZ0M7b0JBQ2hGLGlEQUFpRCxFQUFFLGtCQUFrQjtvQkFDckUscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO29CQUMvQixTQUFTLEVBQUUsZUFBZTtvQkFDMUIsYUFBYSxFQUFFLHlCQUF5QjtpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7c0pBT1UsUUFBUTtrQkFBaEIsS0FBSztZQUNHLHNCQUFzQjtrQkFBOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RTZXJ2aWNlIH0gZnJvbSAnLi9jbWFjcy1zZWxlY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtb3B0aW9uLWxpXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbkxpJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFuek9wdGlvbi5uekRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ256T3B0aW9uLm56RGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJzogJ2FjdGl2ZSAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGl2aWRlcl0nOiAnbnpPcHRpb24uZGl2aWRlcicsXHJcbiAgICAnW2F0dHIudW5zZWxlY3RhYmxlXSc6ICdcInVuc2VsZWN0YWJsZVwiJyxcclxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJzogJ1wibm9uZVwiJyxcclxuICAgICcoY2xpY2spJzogJ2NsaWNrT3B0aW9uKCknLFxyXG4gICAgJyhtb3VzZWRvd24pJzogJyRldmVudC5wcmV2ZW50RGVmYXVsdCgpJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3B0aW9uLWxpLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25MaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBoaWdobGlnaHRLZXlzID0gW107XHJcbiAgQElucHV0KCkgbnpPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50O1xyXG4gIEBJbnB1dCgpIG56TWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBjbGlja09wdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNsaWNrT3B0aW9uKHRoaXMubnpPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93biA/IGlzTm90TmlsKGxpc3QuZmluZCh2ID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKHYsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKSA6IGlzTm90TmlsKGxpc3QuZmluZCh2ID0+IHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoKHYudmFsdWUsIHRoaXMubnpPcHRpb24ubnpWYWx1ZSkpKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmFjdGl2YXRlZE9wdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcHRpb24gPT4ge1xyXG4gICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLm56U2VsZWN0U2VydmljZS5jb21wYXJlV2l0aChvcHRpb24ubnpWYWx1ZSwgdGhpcy5uek9wdGlvbi5uelZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICBpZiAodmFsdWUgJiYgdGhpcy5uek9wdGlvbi5uekxhYmVsICYmIHRoaXMubnpPcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubnpPcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgICAgdGhpcy5uek9wdGlvbi5uekxhYmVsLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgIHRoaXMubnpPcHRpb24ubnpMYWJlbC5zbGljZShpbmRleCwgaW5kZXggKyB2YWx1ZS5sZW5ndGgpLFxyXG4gICAgICAgICAgdGhpcy5uek9wdGlvbi5uekxhYmVsLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCB0aGlzLm56T3B0aW9uLm56TGFiZWwubGVuZ3RoKVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gWy4uLnRoaXMuaGlnaGxpZ2h0S2V5c107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFuek9wdGlvbi5uekN1c3RvbUNvbnRlbnQ7IGVsc2UgbnpPcHRpb24udGVtcGxhdGVcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGlnaGxpZ2h0S2V5cy5sZW5ndGhcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICB7e2hpZ2hsaWdodEtleXNbMF19fTxzcGFuIHN0eWxlPVwiY29sb3I6ICMyYTdjZmZcIj57e2hpZ2hsaWdodEtleXNbMV19fTwvc3Bhbj57e2hpZ2hsaWdodEtleXNbMl19fVxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlnaGxpZ2h0S2V5cy5sZW5ndGhcIj5cclxuICAgIHt7bnpPcHRpb24ubnpMYWJlbH19XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56T3B0aW9uLmRpdmlkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zZWxlY3QtZGl2aWRlclwiPnt7bnpPcHRpb24uZGl2aWRlcn19PC9kaXY+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIj5cclxuICA8aSBuei1pY29uIHR5cGU9XCJjaGVja1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uXCIgKm5nSWY9XCIhbnpNZW51SXRlbVNlbGVjdGVkSWNvbjsgZWxzZSBuek1lbnVJdGVtU2VsZWN0ZWRJY29uXCI+PC9pPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19