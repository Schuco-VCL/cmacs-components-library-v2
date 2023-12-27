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
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_1_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r18); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r16 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r16.onError(elem_r4)); });
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
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_2_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r26); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r24 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r24.onError(elem_r4)); });
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
    i0.ɵɵlistener("error", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_div_3_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r33); const elem_r4 = i0.ɵɵnextContext(3).$implicit; const ctx_r31 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r31.onError(elem_r4)); });
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
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r39); const elem_r4 = restoredCtx.$implicit; const ctx_r38 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r38.selectedValue = elem_r4); });
    i0.ɵɵtemplate(2, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 2);
    i0.ɵɵtemplate(3, CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_ng_template_3_Template, 7, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(5, "span", 4);
    i0.ɵɵlistener("click", function CmacsUserDropdownExternalListComponent_ng_container_0_ng_container_1_Template_span_click_5_listener() { const restoredCtx = i0.ɵɵrestoreView(_r39); const elem_r4 = restoredCtx.$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.removeOption(elem_r4)); });
    i0.ɵɵelement(6, "i", 5);
    i0.ɵɵelementEnd()();
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
    constructor(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.listDividers = [];
        this.origin = [];
        this.removedOption = new EventEmitter();
        this.selectedValue = null;
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
    static { this.ɵfac = function CmacsUserDropdownExternalListComponent_Factory(t) { return new (t || CmacsUserDropdownExternalListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsUserDropdownExternalListComponent, selectors: [["cmacs-user-dropdown-external-list"]], inputs: { data: "data" }, outputs: { removedOption: "removedOption" }, exportAs: ["cmacsUserDropdownExternalList"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "cmacs-user-dropdown-option-wrapper", "cmacs-user-dropdown-external-list-wrapper", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], [1, "cmacs-user-dropdown-external-list-remove-icon", 3, "click"], [1, "iconUISmall-Close"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-user-dropdown-info-wrapper"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-guest-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-team-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], [1, "cmacs-user-dropdown-title"], ["class", "cmacs-user-dropdown-subtitle", 4, "ngIf"], [1, "cmacs-user-dropdown-person-picture"], ["class", "cmacs-user-dropdown-img", 3, "src", "alt", "error", 4, "ngIf"], ["class", "cmacs-user-dropdown-initials", 4, "ngIf"], [1, "cmacs-user-dropdown-img", 3, "src", "alt", "error"], [1, "cmacs-user-dropdown-initials"], ["class", "iconCreation-User", 4, "ngIf"], [1, "iconCreation-User"], ["class", "iconCreation-Team", 4, "ngIf"], [1, "iconCreation-Team"], [1, "cmacs-user-dropdown-subtitle"]], template: function CmacsUserDropdownExternalListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsUserDropdownExternalListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx._data);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet], styles: [".cmacs-user-dropdown-person-picture{text-align:center;border-radius:40px;width:34px;height:34px;background-color:#2a7cff;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain;-webkit-mask:linear-gradient(#000 0 0);clip-path:circle(50% at 50% 50%)}.cmacs-user-dropdown-img{width:34px;height:34px;border-radius:40px}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:100%;border:solid 1.1px #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}.cmacs-user-dropdown-external-list-item-selected{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-item-selected .cmacs-user-dropdown-external-list-remove-icon{opacity:1}\n", "cmacs-user-dropdown-external-list{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsUserDropdownExternalListComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-user-dropdown-external-list', exportAs: 'cmacsUserDropdownExternalList', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<ng-container *ngFor=\"let option of _data; index as i\">\r\n  <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n    <div class=\"cmacs-user-dropdown-option-wrapper cmacs-user-dropdown-external-list-wrapper\"\r\n         [class.cmacs-user-dropdown-external-list-item-selected]=\"selectedValue && selectedValue.value === elem.value\"\r\n         (click)=\"selectedValue = elem\">\r\n\r\n      <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n        <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                      [ngTemplateOutletContext]=\"elem.template.context\">\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-template #defaultTPL>\r\n        <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'user'\">\r\n            <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                 src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n            <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"elem.pictureError\">{{getInitials(elem.label)}}</span>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-guest-no-picture]=\"!elem.picture || elem.pictureError\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'guest'\">\r\n            <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                 src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n            <i class=\"iconCreation-User\" *ngIf=\"elem.pictureError\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-person-picture\"\r\n               [class.cmacs-team-no-picture]=\"!elem.picture || elem.pictureError\"\r\n               [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n               *ngIf=\"elem.role === 'team'\">\r\n            <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                 src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n            <i class=\"iconCreation-Team\" *ngIf=\"elem.pictureError\"></i>\r\n          </div>\r\n\r\n          <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n            {{elem.label}}\r\n          </div>\r\n          <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <span (click)=\"removeOption(elem)\" class=\"cmacs-user-dropdown-external-list-remove-icon\">\r\n        <i class=\"iconUISmall-Close\"></i>\r\n      </span>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n", styles: [".cmacs-user-dropdown-person-picture{text-align:center;border-radius:40px;width:34px;height:34px;background-color:#2a7cff;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain;-webkit-mask:linear-gradient(#000 0 0);clip-path:circle(50% at 50% 50%)}.cmacs-user-dropdown-img{width:34px;height:34px;border-radius:40px}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:100%;border:solid 1.1px #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle{left:0}.cmacs-user-dropdown-external-list-remove-icon{float:right;position:relative;font-size:18px;top:-29px;right:10px;color:#97a0ae;cursor:pointer;opacity:0}.cmacs-user-dropdown-external-list-wrapper{border-radius:5px}.cmacs-user-dropdown-external-list-wrapper:hover{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-wrapper:hover .cmacs-user-dropdown-external-list-remove-icon{opacity:1}.cmacs-user-dropdown-external-list-item-selected{background-color:#f2f7ff}.cmacs-user-dropdown-external-list-item-selected .cmacs-user-dropdown-external-list-remove-icon{opacity:1}\n", "cmacs-user-dropdown-external-list{display:block}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { removedOption: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QvY21hY3MtdXNlci1kcm9wZG93bi1leHRlcm5hbC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztJQ0ZqQiw2QkFBcUQ7SUFDbkQsMkJBRWU7SUFDakIsMEJBQWU7OztJQUhDLGVBQXNDO0lBQXRDLHVEQUFzQyxxREFBQTs7OztJQVdoRCwrQkFDdUY7SUFBeEIsb1JBQVMsZUFBQSx3QkFBYSxDQUFBLElBQUM7SUFEdEYsaUJBQ3VGOzs7O0lBQWxGLHdGQUFvQztJQUFDLDhDQUFvQjs7O0lBQzlELGdDQUFxRTtJQUFBLFlBQTJCO0lBQUEsaUJBQU87Ozs7SUFBbEMsZUFBMkI7SUFBM0Isd0RBQTJCOzs7SUFMbEcsK0JBRWtDO0lBQ2hDLDBJQUN1RjtJQUN2Riw0SUFBdUc7SUFDekcsaUJBQU07OztJQUxELHFFQUF5RDtJQUV0RCxlQUF3QjtJQUF4Qiw0Q0FBd0I7SUFFYyxlQUF1QjtJQUF2QiwyQ0FBdUI7Ozs7SUFPbkUsK0JBQ3VGO0lBQXhCLG9SQUFTLGVBQUEs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QUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO3VHQXREVSxzQ0FBc0M7b0VBQXRDLHNDQUFzQztZQzFCbkQseUdBcURlOztZQXJEa0IsbUNBQVU7Ozt1RkQwQjlCLHNDQUFzQztjQWZsRCxTQUFTOzJCQUNFLG1DQUFtQyxZQUNuQywrQkFBK0IsbUJBRXhCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUs7b0VBY2hCLGFBQWE7a0JBQXRCLE1BQU07WUFJSCxJQUFJO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1VzZXJEcm9wZG93bkV4dGVybmFsTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGNtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1VzZXJEcm9wZG93bkV4dGVybmFsTGlzdENvbXBvbmVudCB7XHJcblxyXG4gIF9kYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGxpc3REaXZpZGVyczogYW55W10gPSBbXTtcclxuICBvcmlnaW46IGFueVtdID0gW107XHJcbiAgQE91dHB1dCgpIHJlbW92ZWRPcHRpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGEodmFsdWU6IGFueVtdKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5vcmlnaW4gPSB2YWx1ZTtcclxuICAgICAgY29uc3Qgb3BlcmF0ZWREYXRhID0gdGhpcy5vcGVyYXRlRGF0YSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuX2RhdGEgPSBbLi4ub3BlcmF0ZWREYXRhXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBvcGVyYXRlRGF0YSh2YWx1ZXM6IGFueVtdKSB7XHJcbiAgICBjb25zdCBvcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh2YWx1ZXMubWFwKGUgPT4gZS5kaXZpZGVyKSkpXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0RGl2aWRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IHRoaXMubGlzdERpdmlkZXJzW2ldO1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHZhbHVlcy5maWx0ZXIoZSA9PiBlLmRpdmlkZXIgPT09IGRpdmlkZXIpO1xyXG4gICAgICBjb25zdCBlbGVtID0geyBkaXZpZGVyLCBjaGlsZHJlbiB9O1xyXG4gICAgICBvcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvcGVyYXRlZERhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRTYWZlSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHBpY3R1cmU7XHJcbiAgfVxyXG5cclxuICBvbkVycm9yKGVsZW0pIHtcclxuICAgIGVsZW0ucGljdHVyZUVycm9yID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU9wdGlvbihlbGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMub3JpZ2luLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IGVsZW0udmFsdWUpO1xyXG4gICAgdGhpcy5kYXRhID0gZmlsdGVyZWREYXRhO1xyXG4gICAgdGhpcy5yZW1vdmVkT3B0aW9uLmVtaXQoZWxlbSk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfZGF0YTsgaW5kZXggYXMgaVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVsZW0gb2Ygb3B0aW9uLmNoaWxkcmVuOyBpbmRleCBhcyBqXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1vcHRpb24td3JhcHBlciBjbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3Qtd3JhcHBlclwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLWV4dGVybmFsLWxpc3QtaXRlbS1zZWxlY3RlZF09XCJzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUudmFsdWUgPT09IGVsZW0udmFsdWVcIlxyXG4gICAgICAgICAoY2xpY2spPVwic2VsZWN0ZWRWYWx1ZSA9IGVsZW1cIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbGVtLnRlbXBsYXRlOyBlbHNlIGRlZmF1bHRUUExcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVsZW0udGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJlbGVtLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUUEw+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW5mby13cmFwcGVyXCIgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24taGlkZS1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiZWxlbS5yb2xlID09PSAndXNlcidcIj5cclxuICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFlbGVtLnBpY3R1cmVFcnJvclwiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbWdcIlxyXG4gICAgICAgICAgICAgICAgIHNyYz1cInt7Z2V0U2FmZUltYWdlKGVsZW0ucGljdHVyZSl9fVwiIGFsdD1cInt7ZWxlbS5sYWJlbH19XCIgKGVycm9yKT1cIm9uRXJyb3IoZWxlbSlcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWluaXRpYWxzXCIgKm5nSWY9XCJlbGVtLnBpY3R1cmVFcnJvclwiPnt7Z2V0SW5pdGlhbHMoZWxlbS5sYWJlbCl9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWd1ZXN0LW5vLXBpY3R1cmVdPVwiIWVsZW0ucGljdHVyZSB8fCBlbGVtLnBpY3R1cmVFcnJvclwiXHJcbiAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICpuZ0lmPVwiZWxlbS5yb2xlID09PSAnZ3Vlc3QnXCI+XHJcbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhZWxlbS5waWN0dXJlRXJyb3JcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW1nXCJcclxuICAgICAgICAgICAgICAgICBzcmM9XCJ7e2dldFNhZmVJbWFnZShlbGVtLnBpY3R1cmUpfX1cIiBhbHQ9XCJ7e2VsZW0ubGFiZWx9fVwiIChlcnJvcik9XCJvbkVycm9yKGVsZW0pXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVVzZXJcIiAqbmdJZj1cImVsZW0ucGljdHVyZUVycm9yXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdGVhbS1uby1waWN0dXJlXT1cIiFlbGVtLnBpY3R1cmUgfHwgZWxlbS5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhZWxlbS5waWN0dXJlRXJyb3JcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW1nXCJcclxuICAgICAgICAgICAgICAgICBzcmM9XCJ7e2dldFNhZmVJbWFnZShlbGVtLnBpY3R1cmUpfX1cIiBhbHQ9XCJ7e2VsZW0ubGFiZWx9fVwiIChlcnJvcik9XCJvbkVycm9yKGVsZW0pXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVRlYW1cIiAqbmdJZj1cImVsZW0ucGljdHVyZUVycm9yXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tdGl0bGVcIiBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi10ZWFtLXRpdGxlXT1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd1c2VyJyB8fCBlbGVtLnJvbGUgPT09ICdndWVzdCdcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tc3VidGl0bGVcIj57e2VsZW0uY2hhcmdlfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxzcGFuIChjbGljayk9XCJyZW1vdmVPcHRpb24oZWxlbSlcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tZXh0ZXJuYWwtbGlzdC1yZW1vdmUtaWNvblwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaWNvblVJU21hbGwtQ2xvc2VcIj48L2k+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19