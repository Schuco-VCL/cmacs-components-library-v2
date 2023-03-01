import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { FormControl } from "@angular/forms";
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-divider/cmacs-divider.component";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@angular/forms";
const _c0 = ["textarea"];
function CmacsOpenTextareaComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 4, 5);
    i0.ɵɵlistener("click", function CmacsOpenTextareaComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.startEdition($event); });
    i0.ɵɵtext(2, "    ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.width, "px");
    i0.ɵɵproperty("placeholder", ctx_r0.placeholder)("formControl", ctx_r0.formControlCustom);
} }
function CmacsOpenTextareaComponent_textarea_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "textarea", 6, 5);
    i0.ɵɵtext(2, "    ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.width, "px");
    i0.ɵɵproperty("placeholder", ctx_r1.placeholder)("formControl", ctx_r1.formControlCustom);
} }
export class CmacsOpenTextareaComponent {
    constructor() {
        this.formControlCustom = new FormControl('', []);
        this.width = 250;
        this.placeholder = '';
        this.disabled = false;
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
        if (this.disabled) {
            this.allowEdition = false;
        }
        else {
            $event.preventDefault();
            $event.stopImmediatePropagation();
            this.allowEdition = true;
        }
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
    } }, inputs: { formControlCustom: "formControlCustom", width: "width", placeholder: "placeholder", disabled: "disabled" }, exportAs: ["cmacsOpenTextarea"], decls: 4, vars: 6, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], ["class", "cmacs-textarea", "nzAutosize", "", 3, "width", "placeholder", "formControl", "click", 4, "ngIf"], ["class", "cmacs-textarea", "disabled", "", "nzAutosize", "", 3, "width", "placeholder", "formControl", 4, "ngIf"], ["nzAutosize", "", 1, "cmacs-textarea", 3, "placeholder", "formControl", "click"], ["textarea", ""], ["disabled", "", "nzAutosize", "", 1, "cmacs-textarea", 3, "placeholder", "formControl"]], template: function CmacsOpenTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "cmacs-divider", 1);
        i0.ɵɵtemplate(2, CmacsOpenTextareaComponent_textarea_2_Template, 3, 4, "textarea", 2);
        i0.ɵɵtemplate(3, CmacsOpenTextareaComponent_textarea_3_Template, 3, 4, "textarea", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("opacity", ctx.enableDivider || !ctx.formControlCustom.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.disabled);
    } }, directives: [i1.CmacsDividerComponent, i2.NgIf, i3.NzAutosizeDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective], styles: [".cmacs-textarea[_ngcontent-%COMP%]{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83;font-family:Roboto-Regular;border:none;background-color:transparent;resize:none;box-shadow:none;outline:none}.cmacs-text-area-span[_ngcontent-%COMP%]:after{content:\"\"}.cmacs-text-area-span[_ngcontent-%COMP%]:hover:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:20px;margin-top:2px}.cmacs-input-opened.ant-input[_ngcontent-%COMP%]:enabled:hover, .cmacs-input-opened.ant-input[_ngcontent-%COMP%]:focus{box-shadow:none;border:none}textarea.cmacs-input-opened[_ngcontent-%COMP%]{border:none;resize:none}", "cmacs-open-textarea[_ngcontent-%COMP%] {\n        display: block;\n      }"], data: { animation: [slideAlertMotion] } });
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
        }], disabled: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { read: ElementRef }]
        }], onClick: [{
            type: HostListener,
            args: ['window:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi10ZXh0YXJlYS9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLXRleHRhcmVhL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxVQUFVLEVBQ1AsWUFBWSxFQUMxQixLQUFLLEVBSVEsU0FBUyxHQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7OztJQ0w1RCxzQ0FLdUQ7SUFKN0MsbU5BQThCO0lBS3hDLG9CQUFBO0lBQUEsaUJBQVc7OztJQUpELDJDQUF3QjtJQUV4QixnREFBMkIseUNBQUE7OztJQUtyQyxzQ0FJdUQ7SUFDdkQsb0JBQUE7SUFBQSxpQkFBVzs7O0lBSkQsMkNBQXdCO0lBRXhCLGdEQUEyQix5Q0FBQTs7QURVekMsTUFBTSxPQUFPLDBCQUEwQjtJQVVyQztRQVJTLHNCQUFpQixHQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ25DLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO0lBR0wsQ0FBQztJQUdqQixPQUFPLENBQUMsS0FBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtZQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFNO1lBQ0wsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7b0dBN0NVLDBCQUEwQjsrREFBMUIsMEJBQTBCOytCQVFOLFVBQVU7Ozs7OzZHQVI5QixtQkFBZTs7UUM1QjVCLDhCQUVtQztRQUNqQyxtQ0FDMkY7UUFFekYscUZBTVc7UUFHWCxxRkFLVztRQUVmLGlCQUFNOztRQXJCRCx3Q0FBd0I7UUFHWixlQUEyRDtRQUEzRCw0RUFBMkQ7UUFFN0QsZUFBZTtRQUFmLG9DQUFlO1FBU2YsZUFBYztRQUFkLG1DQUFjOzYvQkRDZixDQUFDLGdCQUFnQixDQUFDO3VGQVluQiwwQkFBMEI7Y0FmdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM5QixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDbEQsTUFBTSxFQUFFO29CQUNOOzs7O0tBSUM7aUJBQ0Y7YUFDRjtzQ0FHVSxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUd1QyxRQUFRO2tCQUFwRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFLM0MsT0FBTztrQkFETixZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi10ZXh0YXJlYScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5UZXh0YXJlYScsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQWxlcnRNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mtb3Blbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5UZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBmb3JtQ29udHJvbEN1c3RvbTogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtdKTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gMjUwO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIGVuYWJsZURpdmlkZXIgPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRleHRhcmVhOiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy50ZXh0YXJlYSAmJiBldmVudC50YXJnZXQgIT09IHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVuYWJsZURpdmlkZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRW5hYmxlZCgpIHtcclxuICAgIGlmICh0aGlzLmFsbG93RWRpdGlvbiB8fCAhdGhpcy5mb3JtQ29udHJvbEN1c3RvbS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzVGV4dEVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuYWxsb3dFZGl0aW9uICYmIHRoaXMuZm9ybUNvbnRyb2xDdXN0b20udmFsdWU7XHJcbiAgfVxyXG5cclxuICBzdGFydEVkaXRpb24oJGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZW5hYmxlRGl2aWRlciA9IHRoaXMuYWxsb3dFZGl0aW9uO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGV4dGFyZWEtb3BlbmVkLXdyYXBwZXJcIlxyXG4gICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXHJcbiAgICAgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtZmxleDtcIj5cclxuICA8Y21hY3MtZGl2aWRlciBjbGFzcz1cImNtYWNzLW9wZW4tdGV4dGFyZWEtZGl2aWRlclwiXHJcbiAgICAgICAgICAgICAgICAgW3N0eWxlLm9wYWNpdHldPVwiZW5hYmxlRGl2aWRlciB8fCAhZm9ybUNvbnRyb2xDdXN0b20udmFsdWVcIj48L2NtYWNzLWRpdmlkZXI+XHJcblxyXG4gICAgPHRleHRhcmVhICpuZ0lmPVwiIWRpc2FibGVkXCIgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInN0YXJ0RWRpdGlvbigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBcclxuICAgICAgICAgICAgICAjdGV4dGFyZWFcclxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbEN1c3RvbVwiIG56QXV0b3NpemU+XHJcbiAgICA8L3RleHRhcmVhPlxyXG5cclxuXHJcbiAgICA8dGV4dGFyZWEgKm5nSWY9XCJkaXNhYmxlZFwiIGNsYXNzPVwiY21hY3MtdGV4dGFyZWFcIiBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFxyXG4gICAgICAgICAgICAgICN0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sQ3VzdG9tXCIgbnpBdXRvc2l6ZT5cclxuICAgIDwvdGV4dGFyZWE+XHJcblxyXG48L2Rpdj5cclxuIl19