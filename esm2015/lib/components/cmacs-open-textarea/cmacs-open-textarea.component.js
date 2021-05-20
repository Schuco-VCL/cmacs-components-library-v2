import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { FormControl } from "@angular/forms";
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-divider/cmacs-divider.component";
import * as i2 from "@angular/common";
import * as i3 from "../cmacs-input/cmacs-input.directive";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "@angular/forms";
const _c0 = ["textarea"];
function CmacsOpenTextareaComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 4, 5);
    i0.ɵɵtext(2, "    ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.width, "px");
    i0.ɵɵproperty("opened", true)("placeholder", ctx_r0.placeholder)("formControl", ctx_r0.formControlCustom);
} }
function CmacsOpenTextareaComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵlistener("click", function CmacsOpenTextareaComponent_span_3_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.startEdition($event); })("mouseover", function CmacsOpenTextareaComponent_span_3_Template_span_mouseover_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.enableDivider = true; })("mouseout", function CmacsOpenTextareaComponent_span_3_Template_span_mouseout_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.enableDivider = false; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.width, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.formControlCustom.value, " ");
} }
export class CmacsOpenTextareaComponent {
    constructor() {
        this.formControlCustom = new FormControl('', []);
        this.width = 250;
        this.placeholder = '';
        this.allowEdition = false;
        this.enableDivider = true;
    }
    onClick(event) {
        if (this.textarea && event.target !== this.textarea.nativeElement) {
            this.allowEdition = false;
            this.enableDivider = false;
        }
    }
    isEnabled() {
        if (this.allowEdition || !this.formControlCustom.value) {
            this.allowEdition = true;
            return true;
        }
        this.allowEdition = false;
        return false;
    }
    isTextEnabled() {
        return !this.allowEdition && this.formControlCustom.value;
    }
    startEdition($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.allowEdition = true;
    }
    ngAfterViewInit() {
        this.enableDivider = this.allowEdition;
    }
}
CmacsOpenTextareaComponent.ɵfac = function CmacsOpenTextareaComponent_Factory(t) { return new (t || CmacsOpenTextareaComponent)(); };
CmacsOpenTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOpenTextareaComponent, selectors: [["cmacs-open-textarea"]], viewQuery: function CmacsOpenTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
    } }, hostBindings: function CmacsOpenTextareaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsOpenTextareaComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { formControlCustom: "formControlCustom", width: "width", placeholder: "placeholder" }, exportAs: ["cmacsOpenTextarea"], decls: 4, vars: 6, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], ["class", "cmacs-textarea", "cmacs-input", "", "nzAutosize", "", 3, "width", "opened", "placeholder", "formControl", 4, "ngIf"], ["class", "cmacs-textarea cmacs-text-area-span", 3, "width", "click", "mouseover", "mouseout", 4, "ngIf"], ["cmacs-input", "", "nzAutosize", "", 1, "cmacs-textarea", 3, "opened", "placeholder", "formControl"], ["textarea", ""], [1, "cmacs-textarea", "cmacs-text-area-span", 3, "click", "mouseover", "mouseout"]], template: function CmacsOpenTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "cmacs-divider", 1);
        i0.ɵɵtemplate(2, CmacsOpenTextareaComponent_textarea_2_Template, 3, 5, "textarea", 2);
        i0.ɵɵtemplate(3, CmacsOpenTextareaComponent_span_3_Template, 2, 3, "span", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("opacity", ctx.enableDivider || !ctx.formControlCustom.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isEnabled());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isTextEnabled());
    } }, directives: [i1.CmacsDividerComponent, i2.NgIf, i3.CmacsInputDirective, i4.NzAutosizeDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.FormControlDirective], styles: [".cmacs-textarea[_ngcontent-%COMP%]{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83;font-family:Roboto-Regular}.cmacs-text-area-span[_ngcontent-%COMP%]:after{content:\"\"}.cmacs-text-area-span[_ngcontent-%COMP%]:hover:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:20px;margin-top:2px}.cmacs-input-opened.ant-input[_ngcontent-%COMP%]:enabled:hover, .cmacs-input-opened.ant-input[_ngcontent-%COMP%]:focus{box-shadow:none;border:none}textarea.cmacs-input-opened[_ngcontent-%COMP%]{border:none;resize:none}", "cmacs-open-textarea[_ngcontent-%COMP%] {\n        display: block;\n      }"], data: { animation: [slideAlertMotion] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-open-textarea',
                exportAs: 'cmacsOpenTextarea',
                animations: [slideAlertMotion],
                templateUrl: './cmacs-open-textarea.component.html',
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-open-textarea.component.css'],
                styles: [
                    `
      cmacs-open-textarea {
        display: block;
      }
    `
                ]
            }]
    }], function () { return []; }, { formControlCustom: [{
            type: Input
        }], width: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { read: ElementRef }]
        }], onClick: [{
            type: HostListener,
            args: ['window:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi10ZXh0YXJlYS9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLXRleHRhcmVhL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxVQUFVLEVBQ1AsWUFBWSxFQUMxQixLQUFLLEVBSVEsU0FBUyxHQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztJQ045RCxzQ0FNcUI7SUFDbkIsb0JBQUE7SUFBQSxpQkFBVzs7O0lBTEgsMkNBQXdCO0lBQ2QsNkJBQWUsbUNBQUEseUNBQUE7Ozs7SUFLbkMsK0JBS2tEO0lBTDVDLDJNQUE4Qix3TEFHRCxJQUFJLElBSEgsc0xBSUYsS0FBSyxJQUpIO0lBTWhDLFlBQ0Y7SUFBQSxpQkFBTzs7O0lBTkgsMkNBQXdCO0lBSzFCLGVBQ0Y7SUFERSwrREFDRjs7QURRSixNQUFNLE9BQU8sMEJBQTBCO0lBU3JDO1FBUFMsc0JBQWlCLEdBQWdCLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RCxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBR0wsQ0FBQztJQUdqQixPQUFPLENBQUMsS0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFhO1FBQ3hCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOztvR0F4Q1UsMEJBQTBCOytEQUExQiwwQkFBMEI7K0JBT1AsVUFBVTs7Ozs7NkdBUDdCLG1CQUFlOztRQzVCNUIsOEJBRW1DO1FBQ2pDLG1DQUMyRjtRQUMzRixxRkFPYTtRQUNiLDZFQU9TO1FBQ1gsaUJBQU07O1FBcEJELHdDQUF3QjtRQUdaLGVBQTJEO1FBQTNELDRFQUEyRDtRQUUvRCxlQUFpQjtRQUFqQixzQ0FBaUI7UUFTckIsZUFBcUI7UUFBckIsMENBQXFCO204QkRDaEIsQ0FBQyxnQkFBZ0IsQ0FBQzt1RkFZbkIsMEJBQTBCO2NBZnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUIsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7c0NBR1UsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUdxQyxRQUFRO2tCQUFsRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7WUFLekMsT0FBTztrQkFETixZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBzbGlkZUFsZXJ0TW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wZW4tdGV4dGFyZWEnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcGVuVGV4dGFyZWEnLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUFsZXJ0TW90aW9uXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLW9wZW4tdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcGVuVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xDdXN0b206IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXSk7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDI1MDtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgZW5hYmxlRGl2aWRlciA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7cmVhZDogRWxlbWVudFJlZn0pIHRleHRhcmVhOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBldmVudC50YXJnZXQgIT09IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVuYWJsZURpdmlkZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0aGlzLmFsbG93RWRpdGlvbiB8fCAhdGhpcy5mb3JtQ29udHJvbEN1c3RvbS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzVGV4dEVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWxsb3dFZGl0aW9uICYmIHRoaXMuZm9ybUNvbnRyb2xDdXN0b20udmFsdWU7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXRpb24oJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmVuYWJsZURpdmlkZXIgPSB0aGlzLmFsbG93RWRpdGlvbjtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNtYWNzLXRleHRhcmVhLW9wZW5lZC13cmFwcGVyXCJcclxuICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxyXG4gICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7XCI+XHJcbiAgPGNtYWNzLWRpdmlkZXIgY2xhc3M9XCJjbWFjcy1vcGVuLXRleHRhcmVhLWRpdmlkZXJcIlxyXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cImVuYWJsZURpdmlkZXIgfHwgIWZvcm1Db250cm9sQ3VzdG9tLnZhbHVlXCI+PC9jbWFjcy1kaXZpZGVyPlxyXG4gIDx0ZXh0YXJlYSBjbGFzcz1cImNtYWNzLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXHJcbiAgICAgICAgICAgICN0ZXh0YXJlYSBbb3BlbmVkXT1cInRydWVcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIlxyXG4gICAgICAgICAgICBuekF1dG9zaXplPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuICA8c3BhbiAoY2xpY2spPVwic3RhcnRFZGl0aW9uKCRldmVudClcIlxyXG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXHJcbiAgICAgICAgKm5nSWY9XCJpc1RleHRFbmFibGVkKClcIlxyXG4gICAgICAgIChtb3VzZW92ZXIpPVwiZW5hYmxlRGl2aWRlciA9IHRydWU7XCJcclxuICAgICAgICAobW91c2VvdXQpPVwiZW5hYmxlRGl2aWRlciA9IGZhbHNlO1wiXHJcbiAgICAgICAgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYSBjbWFjcy10ZXh0LWFyZWEtc3BhblwiPlxyXG4gICAgICB7e2Zvcm1Db250cm9sQ3VzdG9tLnZhbHVlfX1cclxuICAgIDwvc3Bhbj5cclxuPC9kaXY+XHJcbiJdfQ==