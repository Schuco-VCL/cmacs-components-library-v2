import { Component, Output, TemplateRef, ViewChild, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
function CmacsCtaDropdownComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("click", function CmacsCtaDropdownComponent_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.closed.emit(); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class CmacsCtaDropdownComponent {
    constructor() {
        this.closed = new EventEmitter();
    }
}
CmacsCtaDropdownComponent.ɵfac = function CmacsCtaDropdownComponent_Factory(t) { return new (t || CmacsCtaDropdownComponent)(); };
CmacsCtaDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCtaDropdownComponent, selectors: [["cmacs-cta-dropdown"]], viewQuery: function CmacsCtaDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    } }, outputs: { closed: "closed" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "dropdown-content", 3, "click"]], template: function CmacsCtaDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsCtaDropdownComponent_ng_template_0_Template, 2, 0, "ng-template");
    } }, styles: [".dropdown-content[_ngcontent-%COMP%]{width:auto;padding:14px 14px 24px;background-color:#fff;border-radius:6px;box-shadow:0 10px 20px rgba(64,64,64,.15)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCtaDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-cta-dropdown',
                templateUrl: './cmacs-cta-dropdown.component.html',
                styleUrls: ['./cmacs-cta-dropdown.component.css']
            }]
    }], function () { return []; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY3RhLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NvbXBvbmVudHMvY21hY3MtY3RhLWRyb3Bkb3duL2NtYWNzLWN0YS1kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jb21wb25lbnRzL2NtYWNzLWN0YS1kcm9wZG93bi9jbWFjcy1jdGEtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7SUNMbkIsOEJBQXNEO0lBQWpELDJLQUFTLG9CQUFhLElBQUM7SUFDeEIsa0JBQXlCO0lBQzdCLGlCQUFNOzs7QURZVixNQUFNLE9BQU8seUJBQXlCO0lBSXBDO1FBRlUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFN0IsQ0FBQzs7a0dBSkwseUJBQXlCOzhEQUF6Qix5QkFBeUI7dUJBQ3pCLFdBQVc7Ozs7OztRQ2hCeEIsdUZBSWM7O3VGRFdELHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7c0NBRXlCLFdBQVc7a0JBQWxDLFNBQVM7bUJBQUMsV0FBVztZQUNaLE1BQU07a0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJvcGRvd25QYW5lbCB9IGZyb20gXCIuLi9jbWFjcy1kcm9wZG93bi1wYW5lbFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY3RhLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY3RhLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jdGEtZHJvcGRvd24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0N0YURyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgRHJvcGRvd25QYW5lbCB7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZT5cclxuICAgIDxkaXYgKGNsaWNrKT1cImNsb3NlZC5lbWl0KClcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=