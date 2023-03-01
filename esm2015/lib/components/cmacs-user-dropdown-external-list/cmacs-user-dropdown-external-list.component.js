import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", elem_r4.template.ref)("ngTemplateOutletContext", elem_r4.template.context);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 16);
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r18); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.onError(elem_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r14.getSafeImage(elem_r4.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r4.label);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r15.getInitials(elem_r4.label));
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_img_1_Template, 1, 2, "img", 14);
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_span_2_Template, 2, 1, "span", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.pictureError);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 16);
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r26); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onError(elem_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r22.getSafeImage(elem_r4.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r4.label);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_img_1_Template, 1, 2, "img", 14);
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_i_2_Template, 1, 0, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-guest-no-picture", !elem_r4.picture || elem_r4.pictureError)("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.pictureError);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 16);
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r33); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onError(elem_r4); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r29.getSafeImage(elem_r4.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r4.label);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_img_1_Template, 1, 2, "img", 14);
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_i_2_Template, 1, 0, "i", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-team-no-picture", !elem_r4.picture || elem_r4.pictureError)("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.pictureError);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(elem_r4.charge);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_Template, 3, 4, "div", 8);
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_Template, 3, 6, "div", 9);
    i0.ɵɵtemplate(3, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_Template, 3, 6, "div", 10);
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_6_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("cmacs-user-dropdown-hide-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.role === "user");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.role === "guest");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.role === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-user-dropdown-team-title", elem_r4.role === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r4.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.role === "user" || elem_r4.role === "guest");
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r39); const elem_r4 = ctx.$implicit; const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.selectedValue = elem_r4; });
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_Template, 7, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_span_click_5_listener() { i0.ɵɵrestoreView(_r39); const elem_r4 = ctx.$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.removeOption(elem_r4); });
    i0.ɵɵelement(6, "i", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r4 = ctx.$implicit;
    const _r7 = i0.ɵɵreference(4);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-user-dropdown-external-list-item-selected", ctx_r3.selectedValue && ctx_r3.selectedValue.value === elem_r4.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r4.template)("ngIfElse", _r7);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", option_r1.children);
} }
export class CmacsUserDropdownExternalListComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.listDividers = [];
        this.origin = [];
        this.removedOption = new EventEmitter();
        this.selectedValue = null;
    }
    set data(value) {
        if (value) {
            this.origin = value;
            const operatedData = this.operateData(value);
            this._data = [...operatedData];
        }
    }
    get data() {
        return this._data;
    }
    operateData(values) {
        const operatedData = [];
        this.listDividers = [...Array.from(new Set(values.map(e => e.divider)))];
        for (let i = 0; i < this.listDividers.length; i++) {
            const divider = this.listDividers[i];
            const children = values.filter(e => e.divider === divider);
            const elem = { divider, children };
            operatedData.push(elem);
        }
        return operatedData;
    }
    getInitials(name) {
        let initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    getSafeImage(picture) {
        return picture;
    }
    onError(elem) {
        elem.pictureError = true;
        this.cdr.detectChanges();
    }
    removeOption(elem) {
        const filteredData = this.origin.filter(item => item.value !== elem.value);
        this.data = filteredData;
        this.removedOption.emit(elem);
    }
}
CmacsUserDropdownExternalListComponent.ɵfac = function CmacsUserDropdownExternalListComponent_Factory(t) { return new (t || CmacsUserDropdownExternalListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsUserDropdownExternalListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsUserDropdownExternalListComponent, selectors: [["cmacs-user-dropdown-external-list"]], inputs: { data: "data" }, outputs: { removedOption: "removedOption" }, exportAs: ["cmacsUserDropdownExternalList"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "cmacs-user-dropdown-option-wrapper", "cmacs-user-dropdown-external-list-wrapper", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], [1, "cmacs-user-dropdown-external-list-remove-icon", 3, "click"], [1, "iconUISmall-Close"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-user-dropdown-info-wrapper"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-guest-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-team-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], [1, "cmacs-user-dropdown-title"], ["class", "cmacs-user-dropdown-subtitle", 4, "ngIf"], [1, "cmacs-user-dropdown-person-picture"], ["class", "cmacs-user-dropdown-img", 3, "src", "alt", "error", 4, "ngIf"], ["class", "cmacs-user-dropdown-initials", 4, "ngIf"], [1, "cmacs-user-dropdown-img", 3, "src", "alt", "error"], [1, "cmacs-user-dropdown-initials"], ["class", "iconCreation-User", 4, "ngIf"], [1, "iconCreation-User"], ["class", "iconCreation-Team", 4, "ngIf"], [1, "iconCreation-Team"], [1, "cmacs-user-dropdown-subtitle"]], template: function CmacsUserDropdownExternalListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsUserDropdownExternalListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx._data);
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], styles: [".cmacs-user-dropdown-person-picture{text-align:center;background-color:#2a7cff;color:#fff;background-repeat:no-repeat;background-position:50%;background-size:contain;-webkit-mask:linear-gradient(#000 0 0);-webkit-clip-path:circle(50% at 50% 50%);clip-path:circle(50% at 50% 50%)}.cmacs-user-dropdown-img,.cmacs-user-dropdown-person-picture{border-radius:40px;width:34px;height:34px}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{top:0;font-weight:500;color:#656c79}.cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-title{position:absolute;left:45px;font-family:Roboto-Regular;font-size:12px;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{top:16px;font-weight:400;color:#97a0ae}.cmacs-team-no-picture{border-radius:100%;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}.cmacs-user-dropdown-external-list-item-selected{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-item-selected .cmacs-user-dropdown-external-list-remove-icon{opacity:1}", "cmacs-user-dropdown-external-list {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsUserDropdownExternalListComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-user-dropdown-external-list',
                exportAs: 'cmacsUserDropdownExternalList',
                templateUrl: './cmacs-user-dropdown-external-list.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-user-dropdown-external-list.component.css'],
                styles: [
                    `cmacs-user-dropdown-external-list {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { removedOption: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztJQ0ZqQiw2QkFBcUQ7SUFDbkQsMkJBRWU7SUFDakIsMEJBQWU7OztJQUhDLGVBQXNDO0lBQXRDLHVEQUFzQyxxREFBQTs7OztJQVdoRCwrQkFDdUY7SUFBeEIsZ1RBQXVCO0lBRHRGLGlCQUN1Rjs7OztJQUFsRix3RkFBb0M7SUFBQyw4Q0FBb0I7OztJQUM5RCxnQ0FBcUU7SUFBQSxZQUEyQjtJQUFBLGlCQUFPOzs7O0lBQWxDLGVBQTJCO0lBQTNCLHdEQUEyQjs7O0lBTGxHLCtCQUVrQztJQUNoQywwSUFDdUY7SUFDdkYsNElBQXVHO0lBQ3pHLGlCQUFNOzs7SUFMRCxxRUFBeUQ7SUFFdEQsZUFBd0I7SUFBeEIsNENBQXdCO0lBRWMsZUFBdUI7SUFBdkIsMkNBQXVCOzs7O0lBT25FLCtCQUN1RjtJQUF4QixnVEFBdUI7SUFEdEYsaUJBQ3VGOzs7O0lBQWxGLHdGQUFvQztJQUFDLDhDQUFvQjs7O0lBQzlELHdCQUEyRDs7O0lBTjdELCtCQUdtQztJQUNqQywwSUFDdUY7SUFDdkYsc0lBQTJEO0lBQzdELGlCQUFNOzs7SUFORCxrRkFBbUUsdURBQUE7SUFHaEUsZUFBd0I7SUFBeEIsNENBQXdCO0lBRUEsZUFBdUI7SUFBdkIsMkNBQXVCOzs7O0lBT3JELCtCQUN1RjtJQUF4QixnVEFBdUI7SUFEdEYsaUJBQ3VGOzs7O0lBQWxGLHdGQUFvQztJQUFDLDhDQUFvQjs7O0lBQzlELHdCQUEyRDs7O0lBTjdELCtCQUdrQztJQUNoQywwSUFDdUY7SUFDdkYsc0lBQTJEO0lBQzdELGlCQUFNOzs7SUFORCxpRkFBa0UsdURBQUE7SUFHL0QsZUFBd0I7SUFBeEIsNENBQXdCO0lBRUEsZUFBdUI7SUFBdkIsMkNBQXVCOzs7SUFNdkQsK0JBQWdHO0lBQUEsWUFBZTtJQUFBLGlCQUFNOzs7SUFBckIsZUFBZTtJQUFmLG9DQUFlOzs7SUEvQmpILDhCQUEwRztJQUV4RyxtSUFNTTtJQUVOLG1JQU9NO0lBRU4sb0lBT007SUFFTiwrQkFBcUc7SUFDbkcsWUFDRjtJQUFBLGlCQUFNO0lBQ04sb0lBQXFIO0lBQ3ZILGlCQUFNOzs7SUFoQ3dDLHVFQUEyRDtJQUlqRyxlQUEwQjtJQUExQiw4Q0FBMEI7SUFTMUIsZUFBMkI7SUFBM0IsK0NBQTJCO0lBUzNCLGVBQTBCO0lBQTFCLDhDQUEwQjtJQU1PLGVBQTZEO0lBQTdELHlFQUE2RDtJQUNsRyxlQUNGO0lBREUsOENBQ0Y7SUFDTSxlQUFtRDtJQUFuRCwwRUFBbUQ7Ozs7SUEzQ2pFLDZCQUErRDtJQUM3RCw4QkFFb0M7SUFBL0IsNlFBQThCO0lBRWpDLHVJQUllO0lBRWYsc0tBa0NjO0lBRWQsK0JBQXlGO0lBQW5GLDRRQUE0QjtJQUNoQyx1QkFBaUM7SUFDbkMsaUJBQU87SUFDVCxpQkFBTTtJQUNSLDBCQUFlOzs7OztJQWpEUixlQUE2RztJQUE3Ryx1SUFBNkc7SUFHakcsZUFBcUI7SUFBckIsdUNBQXFCLGlCQUFBOzs7SUFOMUMsNkJBQXVEO0lBQ3JELHdIQW1EZTtJQUNqQiwwQkFBZTs7O0lBcERrQixlQUFvQjtJQUFwQiw0Q0FBb0I7O0FEeUJyRCxNQUFNLE9BQU8sc0NBQXNDO0lBcUJqRCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CMUMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixXQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ1Qsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyRSxrQkFBYSxHQUFHLElBQUksQ0FBQztJQWV5QixDQUFDO0lBYi9DLElBQ0ksSUFBSSxDQUFDLEtBQVk7UUFDbkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBSUQsV0FBVyxDQUFDLE1BQWE7UUFDdkIsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQztZQUMzRCxNQUFNLElBQUksR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUNuQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFTO1FBQ25CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELFlBQVksQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFTO1FBQ3BCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7NEhBdERVLHNDQUFzQzsyRUFBdEMsc0NBQXNDO1FDMUJuRCx5R0FxRGU7O1FBckRrQixtQ0FBVTs7dUZEMEI5QixzQ0FBc0M7Y0FmbEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvREFBb0Q7Z0JBQ2pFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7Z0JBQ2hFLE1BQU0sRUFBRTtvQkFDTjs7O0tBR0M7aUJBQ0Y7YUFDRjtvRUFNVyxhQUFhO2tCQUF0QixNQUFNO1lBSUgsSUFBSTtrQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NVc2VyRHJvcGRvd25FeHRlcm5hbExpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NVc2VyRHJvcGRvd25FeHRlcm5hbExpc3RDb21wb25lbnQge1xyXG5cclxuICBfZGF0YTogYW55W10gPSBbXTtcclxuICBsaXN0RGl2aWRlcnM6IGFueVtdID0gW107XHJcbiAgb3JpZ2luOiBhbnlbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkT3B0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHNlbGVjdGVkVmFsdWUgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luID0gdmFsdWU7XHJcbiAgICAgIGNvbnN0IG9wZXJhdGVkRGF0YSA9IHRoaXMub3BlcmF0ZURhdGEodmFsdWUpO1xyXG4gICAgICB0aGlzLl9kYXRhID0gWy4uLm9wZXJhdGVkRGF0YV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgb3BlcmF0ZURhdGEodmFsdWVzOiBhbnlbXSkge1xyXG4gICAgY29uc3Qgb3BlcmF0ZWREYXRhID0gW107XHJcbiAgICB0aGlzLmxpc3REaXZpZGVycyA9IFsuLi5BcnJheS5mcm9tKG5ldyBTZXQodmFsdWVzLm1hcChlID0+IGUuZGl2aWRlcikpKV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdERpdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdmlkZXIgPSB0aGlzLmxpc3REaXZpZGVyc1tpXTtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB2YWx1ZXMuZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgb3BlcmF0ZWREYXRhLnB1c2goZWxlbSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3BlcmF0ZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2FmZUltYWdlKHBpY3R1cmUpIHtcclxuICAgIHJldHVybiBwaWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgb25FcnJvcihlbGVtKSB7XHJcbiAgICBlbGVtLnBpY3R1cmVFcnJvciA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVPcHRpb24oZWxlbTogYW55KSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLm9yaWdpbi5maWx0ZXIoaXRlbSA9PiBpdGVtLnZhbHVlICE9PSBlbGVtLnZhbHVlKTtcclxuICAgIHRoaXMuZGF0YSA9IGZpbHRlcmVkRGF0YTtcclxuICAgIHRoaXMucmVtb3ZlZE9wdGlvbi5lbWl0KGVsZW0pO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX2RhdGE7IGluZGV4IGFzIGlcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbGVtIG9mIG9wdGlvbi5jaGlsZHJlbjsgaW5kZXggYXMgalwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tb3B0aW9uLXdyYXBwZXIgY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LXdyYXBwZXJcIlxyXG4gICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LWl0ZW0tc2VsZWN0ZWRdPVwic2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlLnZhbHVlID09PSBlbGVtLnZhbHVlXCJcclxuICAgICAgICAgKGNsaWNrKT1cInNlbGVjdGVkVmFsdWUgPSBlbGVtXCI+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbS50ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0VFBMXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJlbGVtLnRlbXBsYXRlLnJlZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZWxlbS50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VFBMPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWluZm8td3JhcHBlclwiIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLWhpZGUtcGljdHVyZV09XCJlbGVtLmhpZGVQaWN0dXJlXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3VzZXInXCI+XHJcbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhZWxlbS5waWN0dXJlRXJyb3JcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW1nXCJcclxuICAgICAgICAgICAgICAgICBzcmM9XCJ7e2dldFNhZmVJbWFnZShlbGVtLnBpY3R1cmUpfX1cIiBhbHQ9XCJ7e2VsZW0ubGFiZWx9fVwiIChlcnJvcik9XCJvbkVycm9yKGVsZW0pXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbml0aWFsc1wiICpuZ0lmPVwiZWxlbS5waWN0dXJlRXJyb3JcIj57e2dldEluaXRpYWxzKGVsZW0ubGFiZWwpfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1ndWVzdC1uby1waWN0dXJlXT1cIiFlbGVtLnBpY3R1cmUgfHwgZWxlbS5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ2d1ZXN0J1wiPlxyXG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwiIWVsZW0ucGljdHVyZUVycm9yXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgc3JjPVwie3tnZXRTYWZlSW1hZ2UoZWxlbS5waWN0dXJlKX19XCIgYWx0PVwie3tlbGVtLmxhYmVsfX1cIiAoZXJyb3IpPVwib25FcnJvcihlbGVtKVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1Vc2VyXCIgKm5nSWY9XCJlbGVtLnBpY3R1cmVFcnJvclwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRlYW0tbm8tcGljdHVyZV09XCIhZWxlbS5waWN0dXJlIHx8IGVsZW0ucGljdHVyZUVycm9yXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tbm8tcGljdHVyZV09XCJlbGVtLmhpZGVQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd0ZWFtJ1wiPlxyXG4gICAgICAgICAgICA8aW1nICpuZ0lmPVwiIWVsZW0ucGljdHVyZUVycm9yXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgc3JjPVwie3tnZXRTYWZlSW1hZ2UoZWxlbS5waWN0dXJlKX19XCIgYWx0PVwie3tlbGVtLmxhYmVsfX1cIiAoZXJyb3IpPVwib25FcnJvcihlbGVtKVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1UZWFtXCIgKm5nSWY9XCJlbGVtLnBpY3R1cmVFcnJvclwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXRpdGxlXCIgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tdGVhbS10aXRsZV09XCJlbGVtLnJvbGUgPT09ICd0ZWFtJ1wiPlxyXG4gICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZWxlbS5yb2xlID09PSAndXNlcicgfHwgZWxlbS5yb2xlID09PSAnZ3Vlc3QnXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXN1YnRpdGxlXCI+e3tlbGVtLmNoYXJnZX19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8c3BhbiAoY2xpY2spPVwicmVtb3ZlT3B0aW9uKGVsZW0pXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QtcmVtb3ZlLWljb25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImljb25VSVNtYWxsLUNsb3NlXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==