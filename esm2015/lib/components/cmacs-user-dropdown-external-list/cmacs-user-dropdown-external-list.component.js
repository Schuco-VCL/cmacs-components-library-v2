import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", elem_r4.template.ref)("ngTemplateOutletContext", elem_r4.template.context);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.getInitials(elem_r4.label));
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_span_1_Template, 2, 1, "span", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r4.picture ? ctx_r10.getBackgroundImage(elem_r4.picture) : "none");
    i0.ɵɵclassProp("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.picture);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 17);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_i_1_Template, 1, 0, "i", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r4.picture ? ctx_r11.getBackgroundImage(elem_r4.picture) : "none");
    i0.ɵɵclassProp("cmacs-guest-no-picture", !elem_r4.picture)("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.picture);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_i_1_Template, 1, 0, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r4.picture ? ctx_r12.getBackgroundImage(elem_r4.picture) : "none");
    i0.ɵɵclassProp("cmacs-team-no-picture", !elem_r4.picture)("cmacs-user-dropdown-no-picture", elem_r4.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r4.picture);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(elem_r4.charge);
} }
function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_Template, 2, 5, "div", 8);
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_Template, 2, 7, "div", 9);
    i0.ɵɵtemplate(3, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_Template, 2, 7, "div", 10);
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
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r24); const elem_r4 = ctx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.selectedValue = elem_r4; });
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_Template, 7, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_span_click_5_listener() { i0.ɵɵrestoreView(_r24); const elem_r4 = ctx.$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.removeOption(elem_r4); });
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
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
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
    getBackgroundImage(picture) {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + picture + '\')');
    }
    removeOption(elem) {
        const filteredData = this.origin.filter(item => item.value !== elem.value);
        this.data = filteredData;
        this.removedOption.emit(elem);
    }
}
CmacsUserDropdownExternalListComponent.ɵfac = function CmacsUserDropdownExternalListComponent_Factory(t) { return new (t || CmacsUserDropdownExternalListComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
CmacsUserDropdownExternalListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsUserDropdownExternalListComponent, selectors: [["cmacs-user-dropdown-external-list"]], inputs: { data: "data" }, outputs: { removedOption: "removedOption" }, exportAs: ["cmacsUserDropdownExternalList"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "cmacs-user-dropdown-option-wrapper", "cmacs-user-dropdown-external-list-wrapper", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], [1, "cmacs-user-dropdown-external-list-remove-icon", 3, "click"], [1, "iconUISmall-Close"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-user-dropdown-info-wrapper"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-guest-no-picture", "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-team-no-picture", "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], [1, "cmacs-user-dropdown-title"], ["class", "cmacs-user-dropdown-subtitle", 4, "ngIf"], [1, "cmacs-user-dropdown-person-picture"], ["class", "cmacs-user-dropdown-initials", 4, "ngIf"], [1, "cmacs-user-dropdown-initials"], ["class", "iconCreation-User", 4, "ngIf"], [1, "iconCreation-User"], ["class", "iconCreation-Team", 4, "ngIf"], [1, "iconCreation-Team"], [1, "cmacs-user-dropdown-subtitle"]], template: function CmacsUserDropdownExternalListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsUserDropdownExternalListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx._data);
    } }, directives: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet], styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:50%;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{top:0;font-weight:500;color:#656c79}.cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-title{position:absolute;left:45px;font-family:Roboto-Regular;font-size:12px;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{top:16px;font-weight:400;color:#97a0ae}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}.cmacs-user-dropdown-external-list-item-selected{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-item-selected .cmacs-user-dropdown-external-list-remove-icon{opacity:1}", "cmacs-user-dropdown-external-list {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
    }], function () { return [{ type: i1.DomSanitizer }]; }, { removedOption: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNEakIsNkJBQXFEO0lBQ25ELDJCQUVlO0lBQ2pCLDBCQUFlOzs7SUFIQyxlQUFzQztJQUF0Qyx1REFBc0MscURBQUE7OztJQVloRCxnQ0FBaUU7SUFBQSxZQUEyQjtJQUFBLGlCQUFPOzs7O0lBQWxDLGVBQTJCO0lBQTNCLHdEQUEyQjs7O0lBSjlGLCtCQUd3RjtJQUN0Riw0SUFBbUc7SUFDckcsaUJBQU07Ozs7SUFGRCwwR0FBa0Y7SUFGbEYscUVBQXlEO0lBR2hCLGVBQW1CO0lBQW5CLHVDQUFtQjs7O0lBUS9ELHdCQUF1RDs7O0lBTHpELCtCQUl3RjtJQUN0RixzSUFBdUQ7SUFDekQsaUJBQU07Ozs7SUFGRCwwR0FBa0Y7SUFIbEYsMERBQThDLHVEQUFBO0lBSW5CLGVBQW1CO0lBQW5CLHVDQUFtQjs7O0lBUWpELHdCQUF1RDs7O0lBTHpELCtCQUl3RjtJ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QUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzVXNlckRyb3Bkb3duRXh0ZXJuYWxMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVXNlckRyb3Bkb3duRXh0ZXJuYWxMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgX2RhdGE6IGFueVtdID0gW107XHJcbiAgbGlzdERpdmlkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIG9yaWdpbjogYW55W10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVtb3ZlZE9wdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBzZWxlY3RlZFZhbHVlID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm9yaWdpbiA9IHZhbHVlO1xyXG4gICAgICBjb25zdCBvcGVyYXRlZERhdGEgPSB0aGlzLm9wZXJhdGVEYXRhKHZhbHVlKTtcclxuICAgICAgdGhpcy5fZGF0YSA9IFsuLi5vcGVyYXRlZERhdGFdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHsgfVxyXG5cclxuICBvcGVyYXRlRGF0YSh2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCBvcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMubWFwKGUgPT4gZS5kaXZpZGVyKSkpXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RGl2aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IHRoaXMubGlzdERpdmlkZXJzW2ldO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHZhbHVlcy5maWx0ZXIoZSA9PiBlLmRpdmlkZXIgPT09IGRpdmlkZXIpO1xyXG4gICAgICBjb25zdCBlbGVtID0geyBkaXZpZGVyLCBjaGlsZHJlbiB9O1xyXG4gICAgICBvcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcGVyYXRlZERhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyBwaWN0dXJlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU9wdGlvbihlbGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMub3JpZ2luLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IGVsZW0udmFsdWUpO1xyXG4gICAgdGhpcy5kYXRhID0gZmlsdGVyZWREYXRhO1xyXG4gICAgdGhpcy5yZW1vdmVkT3B0aW9uLmVtaXQoZWxlbSk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfZGF0YTsgaW5kZXggYXMgaVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVsZW0gb2Ygb3B0aW9uLmNoaWxkcmVuOyBpbmRleCBhcyBqXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1vcHRpb24td3JhcHBlciBjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3Qtd3JhcHBlclwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QtaXRlbS1zZWxlY3RlZF09XCJzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUudmFsdWUgPT09IGVsZW0udmFsdWVcIlxyXG4gICAgICAgICAoY2xpY2spPVwic2VsZWN0ZWRWYWx1ZSA9IGVsZW1cIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtLnRlbXBsYXRlOyBlbHNlIGRlZmF1bHRUUExcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVsZW0udGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJlbGVtLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUUEw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW5mby13cmFwcGVyXCIgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24taGlkZS1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiZWxlbS5yb2xlID09PSAndXNlcidcIlxyXG4gICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJlbGVtLnBpY3R1cmUgPyBnZXRCYWNrZ3JvdW5kSW1hZ2UoZWxlbS5waWN0dXJlKTogJ25vbmUnXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbml0aWFsc1wiICpuZ0lmPVwiIWVsZW0ucGljdHVyZVwiPnt7Z2V0SW5pdGlhbHMoZWxlbS5sYWJlbCl9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWd1ZXN0LW5vLXBpY3R1cmVdPVwiIWVsZW0ucGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiZWxlbS5yb2xlID09PSAnZ3Vlc3QnXCJcclxuICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiZWxlbS5waWN0dXJlID8gZ2V0QmFja2dyb3VuZEltYWdlKGVsZW0ucGljdHVyZSk6ICdub25lJ1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1Vc2VyXCIgKm5nSWY9XCIhZWxlbS5waWN0dXJlXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdGVhbS1uby1waWN0dXJlXT1cIiFlbGVtLnBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCJcclxuICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiZWxlbS5waWN0dXJlID8gZ2V0QmFja2dyb3VuZEltYWdlKGVsZW0ucGljdHVyZSk6ICdub25lJ1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1UZWFtXCIgKm5nSWY9XCIhZWxlbS5waWN0dXJlXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tdGl0bGVcIiBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi10ZWFtLXRpdGxlXT1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd1c2VyJyB8fCBlbGVtLnJvbGUgPT09ICdndWVzdCdcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tc3VidGl0bGVcIj57e2VsZW0uY2hhcmdlfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxzcGFuIChjbGljayk9XCJyZW1vdmVPcHRpb24oZWxlbSlcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC1yZW1vdmUtaWNvblwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtQ2xvc2VcIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19