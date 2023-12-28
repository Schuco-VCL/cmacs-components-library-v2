import { Component, Output, TemplateRef, ViewChild, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
function CmacsCtaDropdownComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("click", function CmacsCtaDropdownComponent_ng_template_0_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closed.emit()); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class CmacsCtaDropdownComponent {
    constructor() {
        this.closed = new EventEmitter();
    }
    static { this.ɵfac = function CmacsCtaDropdownComponent_Factory(t) { return new (t || CmacsCtaDropdownComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCtaDropdownComponent, selectors: [["cmacs-cta-dropdown"]], viewQuery: function CmacsCtaDropdownComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, outputs: { closed: "closed" }, ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "dropdown-content", 3, "click"]], template: function CmacsCtaDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsCtaDropdownComponent_ng_template_0_Template, 2, 0, "ng-template");
        } }, styles: [".dropdown-content[_ngcontent-%COMP%]{width:auto;padding:14px 14px 24px;background-color:#fff;border-radius:6px;box-shadow:0 10px 20px #40404026}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCtaDropdownComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-cta-dropdown', template: "<ng-template>\r\n    <div (click)=\"closed.emit()\" class=\"dropdown-content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</ng-template>", styles: [".dropdown-content{width:auto;padding:14px 14px 24px;background-color:#fff;border-radius:6px;box-shadow:0 10px 20px #40404026}\n"] }]
    }], function () { return []; }, { templateRef: [{
            type: ViewChild,
            args: [TemplateRef]
        }], closed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY3RhLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21wYWN0LXRhYmxlL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS1hdHRhY2htZW50L2NvbXBvbmVudHMvY21hY3MtY3RhLWRyb3Bkb3duL2NtYWNzLWN0YS1kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jb21wb25lbnRzL2NtYWNzLWN0YS1kcm9wZG93bi9jbWFjcy1jdGEtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7Ozs7SUNMbkIsOEJBQXNEO0lBQWpELDJLQUFTLGVBQUEsb0JBQWEsQ0FBQSxJQUFDO0lBQ3hCLGtCQUF5QjtJQUM3QixpQkFBTTs7O0FEWVYsTUFBTSxPQUFPLHlCQUF5QjtJQUlwQztRQUZVLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRTdCLENBQUM7MEZBSkwseUJBQXlCO29FQUF6Qix5QkFBeUI7MkJBQ3pCLFdBQVc7Ozs7OztZQ2hCeEIsdUZBSWM7Ozt1RkRXRCx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSxvQkFBb0I7c0NBS04sV0FBVztrQkFBbEMsU0FBUzttQkFBQyxXQUFXO1lBQ1osTUFBTTtrQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcm9wZG93blBhbmVsIH0gZnJvbSBcIi4uL2NtYWNzLWRyb3Bkb3duLXBhbmVsXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jdGEtZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jdGEtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWN0YS1kcm9wZG93bi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ3RhRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBEcm9wZG93blBhbmVsIHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlPlxyXG4gICAgPGRpdiAoY2xpY2spPVwiY2xvc2VkLmVtaXQoKVwiIGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==