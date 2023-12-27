import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "../cmacs-divider/cmacs-divider.component";
const _c0 = ["textarea"];
function CmacsOpenTextareaComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 4, 5);
    i0.ɵɵlistener("click", function CmacsOpenTextareaComponent_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.startEdition($event)); });
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
        this.formControlCustom = new UntypedFormControl('', []);
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
    static { this.ɵfac = function CmacsOpenTextareaComponent_Factory(t) { return new (t || CmacsOpenTextareaComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOpenTextareaComponent, selectors: [["cmacs-open-textarea"]], viewQuery: function CmacsOpenTextareaComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
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
        } }, dependencies: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i3.NzAutosizeDirective, i2.FormControlDirective, i4.CmacsDividerComponent], styles: [".cmacs-textarea[_ngcontent-%COMP%]{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83;font-family:Roboto-Regular;border:none;background-color:transparent;resize:none;box-shadow:none;outline:none}.cmacs-text-area-span[_ngcontent-%COMP%]:after{content:\"\"}.cmacs-text-area-span[_ngcontent-%COMP%]:hover:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:20px;margin-top:2px}.cmacs-input-opened.ant-input[_ngcontent-%COMP%]:enabled:hover, .cmacs-input-opened.ant-input[_ngcontent-%COMP%]:focus{box-shadow:none;border:none}textarea.cmacs-input-opened[_ngcontent-%COMP%]{border:none;resize:none}", "cmacs-open-textarea[_ngcontent-%COMP%]{display:block}"], data: { animation: [slideAlertMotion] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenTextareaComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-open-textarea', exportAs: 'cmacsOpenTextarea', animations: [slideAlertMotion], preserveWhitespaces: false, template: "<div class=\"cmacs-textarea-opened-wrapper\"\r\n     [style.width.px]=\"width\"\r\n     style=\"display: inline-flex;\">\r\n  <cmacs-divider class=\"cmacs-open-textarea-divider\"\r\n                 [style.opacity]=\"enableDivider || !formControlCustom.value\"></cmacs-divider>\r\n\r\n    <textarea *ngIf=\"!disabled\" class=\"cmacs-textarea\"\r\n              (click)=\"startEdition($event)\"\r\n              [style.width.px]=\"width\" \r\n              #textarea\r\n              [placeholder]=\"placeholder\"\r\n              [formControl]=\"formControlCustom\" nzAutosize>\r\n    </textarea>\r\n\r\n\r\n    <textarea *ngIf=\"disabled\" class=\"cmacs-textarea\" disabled\r\n              [style.width.px]=\"width\" \r\n              #textarea\r\n              [placeholder]=\"placeholder\"\r\n              [formControl]=\"formControlCustom\" nzAutosize>\r\n    </textarea>\r\n\r\n</div>\r\n", styles: [".cmacs-textarea{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83;font-family:Roboto-Regular;border:none;background-color:transparent;resize:none;box-shadow:none;outline:none}.cmacs-text-area-span:after{content:\"\"}.cmacs-text-area-span:hover:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider{height:20px;margin-top:2px}.cmacs-input-opened.ant-input:enabled:hover,.cmacs-input-opened.ant-input:focus{box-shadow:none;border:none}textarea.cmacs-input-opened{border:none;resize:none}\n", "cmacs-open-textarea{display:block}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi10ZXh0YXJlYS9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLXRleHRhcmVhL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxVQUFVLEVBQ1AsWUFBWSxFQUMxQixLQUFLLEVBSVEsU0FBUyxHQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0lDTDVELHNDQUt1RDtJQUo3QyxvTEFBUyxlQUFBLDJCQUFvQixDQUFBLElBQUM7SUFLeEMsb0JBQUE7SUFBQSxpQkFBVzs7O0lBSkQsMkNBQXdCO0lBRXhCLGdEQUEyQix5Q0FBQTs7O0lBS3JDLHNDQUl1RDtJQUN2RCxvQkFBQTtJQUFBLGlCQUFXOzs7SUFKRCwyQ0FBd0I7SUFFeEIsZ0RBQTJCLHlDQUFBOztBRFV6QyxNQUFNLE9BQU8sMEJBQTBCO0lBVXJDO1FBUlMsc0JBQWlCLEdBQXVCLElBQUksa0JBQWtCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUdMLENBQUM7SUFHakIsT0FBTyxDQUFDLEtBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRCxZQUFZLENBQUMsTUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7YUFBTTtZQUNMLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7MkZBN0NVLDBCQUEwQjtvRUFBMUIsMEJBQTBCO21DQVFOLFVBQVU7Ozs7O2lIQVI5QixtQkFBZTs7WUM1QjVCLDhCQUVtQztZQUNqQyxtQ0FDMkY7WUFFekYscUZBTVc7WUFHWCxxRkFLVztZQUVmLGlCQUFNOztZQXJCRCx3Q0FBd0I7WUFHWixlQUEyRDtZQUEzRCw0RUFBMkQ7WUFFN0QsZUFBZTtZQUFmLG9DQUFlO1lBU2YsZUFBYztZQUFkLG1DQUFjOzgrQkRDZixDQUFDLGdCQUFnQixDQUFDOzt1RkFZbkIsMEJBQTBCO2NBZnRDLFNBQVM7MkJBQ0UscUJBQXFCLFlBQ3JCLG1CQUFtQixjQUNqQixDQUFDLGdCQUFnQixDQUFDLHVCQUVULEtBQUs7c0NBWWpCLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBR3VDLFFBQVE7a0JBQXBELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUszQyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IHNsaWRlQWxlcnRNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi10ZXh0YXJlYScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5UZXh0YXJlYScsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlQWxlcnRNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3Mtb3Blbi10ZXh0YXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5UZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSBmb3JtQ29udHJvbEN1c3RvbTogVW50eXBlZEZvcm1Db250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgZW5hYmxlRGl2aWRlciA9IHRydWU7XHJcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGV4dGFyZWE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLnRleHRhcmVhICYmIGV2ZW50LnRhcmdldCAhPT0gdGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZW5hYmxlRGl2aWRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbmFibGVkKCkge1xyXG4gICAgaWYgKHRoaXMuYWxsb3dFZGl0aW9uIHx8ICF0aGlzLmZvcm1Db250cm9sQ3VzdG9tLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNUZXh0RW5hYmxlZCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5hbGxvd0VkaXRpb24gJiYgdGhpcy5mb3JtQ29udHJvbEN1c3RvbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdGlvbigkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lbmFibGVEaXZpZGVyID0gdGhpcy5hbGxvd0VkaXRpb247XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYS1vcGVuZWQtd3JhcHBlclwiXHJcbiAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCJcclxuICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O1wiPlxyXG4gIDxjbWFjcy1kaXZpZGVyIGNsYXNzPVwiY21hY3Mtb3Blbi10ZXh0YXJlYS1kaXZpZGVyXCJcclxuICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJlbmFibGVEaXZpZGVyIHx8ICFmb3JtQ29udHJvbEN1c3RvbS52YWx1ZVwiPjwvY21hY3MtZGl2aWRlcj5cclxuXHJcbiAgICA8dGV4dGFyZWEgKm5nSWY9XCIhZGlzYWJsZWRcIiBjbGFzcz1cImNtYWNzLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwic3RhcnRFZGl0aW9uKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFxyXG4gICAgICAgICAgICAgICN0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sQ3VzdG9tXCIgbnpBdXRvc2l6ZT5cclxuICAgIDwvdGV4dGFyZWE+XHJcblxyXG5cclxuICAgIDx0ZXh0YXJlYSAqbmdJZj1cImRpc2FibGVkXCIgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYVwiIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgXHJcbiAgICAgICAgICAgICAgI3RleHRhcmVhXHJcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIiBuekF1dG9zaXplPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuXHJcbjwvZGl2PlxyXG4iXX0=