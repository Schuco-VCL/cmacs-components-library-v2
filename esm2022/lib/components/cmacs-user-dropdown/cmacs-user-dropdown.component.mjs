import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { Validators } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/divider";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "../cmacs-select/cmacs-select.component";
import * as i7 from "../cmacs-select/cmacs-option.component";
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "nz-divider");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", option_r6.divider, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", ctx_r11.firstElemByDivider[option_r6.divider].length, ")");
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", elem_r9.template.ref)("ngTemplateOutletContext", elem_r9.template.context);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 23);
    i0.ɵɵlistener("error", function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r27); const elem_r9 = i0.ɵɵnextContext(3).$implicit; const ctx_r25 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r25.onError(elem_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r23.getSafeImage(elem_r9.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r9.label);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r24.getInitials(elem_r9.label));
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_img_1_Template, 1, 2, "img", 21);
    i0.ɵɵtemplate(2, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_span_2_Template, 2, 1, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.pictureError);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 23);
    i0.ɵɵlistener("error", function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r35); const elem_r9 = i0.ɵɵnextContext(3).$implicit; const ctx_r33 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r33.onError(elem_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r31.getSafeImage(elem_r9.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r9.label);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 26);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_img_1_Template, 1, 2, "img", 21);
    i0.ɵɵtemplate(2, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_i_2_Template, 1, 0, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-guest-no-picture", !elem_r9.picture || elem_r9.pictureError)("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.pictureError);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 23);
    i0.ɵɵlistener("error", function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r42); const elem_r9 = i0.ɵɵnextContext(3).$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r40.onError(elem_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("src", ctx_r38.getSafeImage(elem_r9.picture), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", elem_r9.label);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 28);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_img_1_Template, 1, 2, "img", 21);
    i0.ɵɵtemplate(2, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_i_2_Template, 1, 0, "i", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵclassProp("cmacs-team-no-picture", !elem_r9.picture || elem_r9.pictureError)("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.pictureError);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.highlightKeys[0], "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r20.highlightKeys[1]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r20.highlightKeys[2], " ");
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", elem_r9.label, " ");
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(elem_r9.charge);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_Template, 3, 4, "div", 14);
    i0.ɵɵtemplate(2, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_Template, 3, 6, "div", 15);
    i0.ɵɵtemplate(3, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_Template, 3, 6, "div", 16);
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵtemplate(5, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_ng_container_5_Template, 6, 3, "ng-container", 18);
    i0.ɵɵtemplate(6, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_ng_container_6_Template, 2, 1, "ng-container", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_7_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cmacs-user-dropdown-hide-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.role === "user");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.role === "guest");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.role === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-user-dropdown-team-title", elem_r9.role === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.highlightValue(elem_r9).length === 3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.highlightValue(elem_r9).length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.role === "user" || elem_r9.role === "guest");
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "cmacs-option", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CmacsUserDropdownComponent_ng_container_1_ng_container_1_div_3_Template, 5, 2, "div", 7);
    i0.ɵɵtemplate(4, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_container_4_Template, 2, 2, "ng-container", 8);
    i0.ɵɵtemplate(5, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_Template, 8, 10, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const elem_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    const _r13 = i0.ɵɵreference(6);
    const option_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", elem_r9.label)("value", elem_r9.value)("extendedData", elem_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-user-dropdown-last-elem", j_r10 === option_r6.children.length - 1)("cmacs-user-dropdown-divider-first-option", ctx_r8.firstElemByDivider[option_r6.divider] && ctx_r8.firstElemByDivider[option_r6.divider].length && ctx_r8.firstElemByDivider[option_r6.divider][0].value === elem_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.firstElemByDivider[option_r6.divider] && ctx_r8.firstElemByDivider[option_r6.divider].length && ctx_r8.firstElemByDivider[option_r6.divider][0].value === elem_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", elem_r9.template)("ngIfElse", _r13);
} }
function CmacsUserDropdownComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_Template, 7, 10, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", option_r6.children);
} }
function CmacsUserDropdownComponent_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-option", 31)(1, "div", 32);
    i0.ɵɵelement(2, "i", 33);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loadingLabel, " ");
} }
function CmacsUserDropdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("click", function CmacsUserDropdownComponent_ng_template_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r49.addGuestUser()); });
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.inviteGuestLabel);
} }
function CmacsUserDropdownComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r51.emailErrorLabel);
} }
function CmacsUserDropdownComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsUserDropdownComponent_ng_template_5_div_0_Template, 2, 1, "div", 36);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.showEmailError);
} }
export class CmacsUserDropdownComponent {
    set isLoading(value) {
        this._isLoading = value;
    }
    set inviteGuest(value) {
        this._inviteGuest = value;
    }
    set listOfOption(value) {
        this._listOfOption = [...value];
        this.listOfFilteredOption = [...value];
        this.operateData();
    }
    get listOfOption() {
        return this._listOfOption;
    }
    constructor(cdr, fb) {
        this.cdr = cdr;
        this.fb = fb;
        this.mode = 'default';
        this.emailErrorLabel = 'Email must be a valid Email Address';
        this.inviteGuestLabel = 'Invite a guest via email';
        this.loadingLabel = 'Loading data...';
        this.placeHolder = 'Add Users / Teams';
        this.selectedValue = null;
        this.maxTagCount = null;
        this.serverSearch = false;
        this.selectedValueChange = new EventEmitter();
        this.onAddGuestUserByEmail = new EventEmitter();
        this.cmacsOnSearch = new EventEmitter();
        this._isLoading = false;
        this._inviteGuest = true;
        this._searchValue = '';
        this._listOfOption = [];
        this.showEmailError = false;
        this.listOfFilteredOption = [];
        this.listDividers = [];
        this.operatedData = [];
        this.firstElemByDivider = {};
        this.highlightKeys = [];
        this.emailForm = this.fb.group({
            email: [this._searchValue, [Validators.email]]
        });
    }
    onSelectedValueChange($event) {
        this.selectedValueChange.emit($event);
    }
    get searchValue() {
        return this._searchValue;
    }
    operateData() {
        this.operatedData = [];
        this.listDividers = [...Array.from(new Set(this.listOfOption.map(e => e.divider)))];
        for (let i = 0; i < this.listDividers.length; i++) {
            const divider = this.listDividers[i];
            const children = this.listOfOption.filter(e => e.divider === divider);
            const elem = { divider, children };
            this.operatedData.push(elem);
        }
        this.operatedData = [...this.operatedData];
        this.getFirstElemByDivider();
    }
    onsearch($event) {
        this.showEmailError = false;
        this._searchValue = $event;
        this.cmacsOnSearch.emit($event);
    }
    getFirstElemByDivider() {
        const firstElemByDivider = {};
        for (let i = 0; i < this.listOfFilteredOption.length; i++) {
            const elem = this.listOfFilteredOption[i];
            const elemWithDivider = this.listOfOption.find(e => (e.value === elem.nzValue || e.value === elem.value));
            if (firstElemByDivider[elemWithDivider.divider] === null || firstElemByDivider[elemWithDivider.divider] === undefined) {
                firstElemByDivider[elemWithDivider.divider] = [];
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
            else {
                firstElemByDivider[elemWithDivider.divider].push(elemWithDivider);
            }
        }
        this.firstElemByDivider = firstElemByDivider;
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
    addGuestUser() {
        if (this._searchValue) {
            this.emailForm.get('email').setValue(this._searchValue);
            if (this.emailForm.valid) {
                this.showEmailError = false;
                this.onAddGuestUserByEmail.emit(true);
            }
            else {
                this.showEmailError = true;
            }
        }
    }
    addOption(option) {
        const checkUser = this.listOfOption.find(e => e.value === option.value);
        if (!checkUser) {
            this.listOfOption = [...this.listOfOption, option];
            this.listOfFilteredOption = [...this.listOfFilteredOption, option];
            this.operateData();
        }
    }
    removeOption(option) {
        if (!this.selectComponent) {
            return;
        }
        const selectedValues = this.selectComponent.nzSelectService.listOfSelectedValue;
        const selectedValuesFiltered = selectedValues.filter(elem => elem.value !== option.value);
        this.selectComponent.nzSelectService.updateListOfSelectedValue(selectedValuesFiltered, true);
    }
    highlightValue(elem) {
        if (!this.selectComponent) {
            return [];
        }
        this.highlightKeys = [];
        const value = this.selectComponent.nzSelectService.searchValue;
        // tslint:disable-next-line: no-non-null-assertion
        if (value && elem.label.toLowerCase().includes(value.toLowerCase())) {
            // match the search value
            const index = elem.label.toLowerCase().indexOf(value.toLowerCase());
            this.highlightKeys = [
                elem.label.slice(0, index),
                elem.label.slice(index, index + value.length),
                elem.label.slice(index + value.length, elem.label.length)
            ];
        }
        return this.highlightKeys;
    }
    static { this.ɵfac = function CmacsUserDropdownComponent_Factory(t) { return new (t || CmacsUserDropdownComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.UntypedFormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsUserDropdownComponent, selectors: [["cmacs-user-dropdown"]], viewQuery: function CmacsUserDropdownComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CmacsSelectComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectComponent = _t.first);
        } }, inputs: { mode: "mode", emailErrorLabel: "emailErrorLabel", inviteGuestLabel: "inviteGuestLabel", loadingLabel: "loadingLabel", placeHolder: "placeHolder", selectedValue: "selectedValue", maxTagCount: "maxTagCount", serverSearch: "serverSearch", isLoading: "isLoading", inviteGuest: "inviteGuest", listOfOption: "listOfOption" }, outputs: { selectedValueChange: "selectedValueChange", onAddGuestUserByEmail: "onAddGuestUserByEmail", cmacsOnSearch: "cmacsOnSearch" }, exportAs: ["cmacsUserDropdown"], decls: 7, vars: 13, consts: [["allowClear", "", 3, "showCmacsSearch", "maxTagCount", "mode", "showSelectAll", "showArrow", "userDropdown", "notFoundContentCustom", "placeHolder", "serverSearch", "dropdownRender", "ngModel", "cmacsOnSearch", "ngModelChange"], [4, "ngFor", "ngForOf"], ["disabled", "", "customContent", "", 4, "ngIf"], ["render", ""], ["notFoundContent", ""], ["customContent", "", 3, "label", "value", "extendedData"], [1, "cmacs-user-dropdown-option-wrapper"], ["class", "cmacs-user-dropdown-divider", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], [1, "cmacs-user-dropdown-divider"], [2, "color", "#97a0ae"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-user-dropdown-info-wrapper"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-guest-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-team-no-picture", "cmacs-user-dropdown-no-picture", 4, "ngIf"], [1, "cmacs-user-dropdown-title"], [4, "ngIf"], ["class", "cmacs-user-dropdown-subtitle", 4, "ngIf"], [1, "cmacs-user-dropdown-person-picture"], ["class", "cmacs-user-dropdown-img", 3, "src", "alt", "error", 4, "ngIf"], ["class", "cmacs-user-dropdown-initials", 4, "ngIf"], [1, "cmacs-user-dropdown-img", 3, "src", "alt", "error"], [1, "cmacs-user-dropdown-initials"], ["class", "iconCreation-User", 4, "ngIf"], [1, "iconCreation-User"], ["class", "iconCreation-Team", 4, "ngIf"], [1, "iconCreation-Team"], [2, "color", "#2a7cff"], [1, "cmacs-user-dropdown-subtitle"], ["disabled", "", "customContent", ""], [1, "cmacs-user-dropdown-loading-wrapper"], ["nz-icon", "", "nzType", "loading", 1, "cmacs-user-dropdown-loading-icon"], [1, "cmacs-user-dropdown-invite-guest", 3, "click"], [1, "iconUISmall-Message", 2, "font-size", "17px", "position", "relative", "top", "3px", "margin-right", "6px"], ["class", "cmacs-user-dropdown-error", 4, "ngIf"], [1, "cmacs-user-dropdown-error"]], template: function CmacsUserDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cmacs-select", 0);
            i0.ɵɵlistener("cmacsOnSearch", function CmacsUserDropdownComponent_Template_cmacs_select_cmacsOnSearch_0_listener($event) { return ctx.onsearch($event); })("ngModelChange", function CmacsUserDropdownComponent_Template_cmacs_select_ngModelChange_0_listener($event) { return ctx.onSelectedValueChange($event); })("ngModelChange", function CmacsUserDropdownComponent_Template_cmacs_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; });
            i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, CmacsUserDropdownComponent_cmacs_option_2_Template, 4, 1, "cmacs-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, CmacsUserDropdownComponent_ng_template_3_Template, 4, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, CmacsUserDropdownComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(4);
            const _r4 = i0.ɵɵreference(6);
            i0.ɵɵproperty("showCmacsSearch", true)("maxTagCount", ctx.maxTagCount)("mode", ctx.mode)("showSelectAll", false)("showArrow", false)("userDropdown", true)("notFoundContentCustom", _r4)("placeHolder", ctx.placeHolder)("serverSearch", ctx.serverSearch)("dropdownRender", ctx._inviteGuest ? _r2 : null)("ngModel", ctx.selectedValue);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.operatedData);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._isLoading);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i1.NgControlStatus, i1.NgModel, i3.ɵNzTransitionPatchDirective, i4.NzDividerComponent, i5.NzIconDirective, i6.CmacsSelectComponent, i7.CmacsOptionComponent], styles: [".cmacs-user-dropdown-person-picture{text-align:center;border-radius:100%;width:34px;height:34px;background-color:#2a7cff;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain;-webkit-mask:linear-gradient(#000 0 0);clip-path:circle(50% at 50% 50%)}.cmacs-user-dropdown-img{width:34px;height:34px;border-radius:40px}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:100%;border:solid 1.1px #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px #3b3f461a;background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-user-dropdown-loading-wrapper{padding:7px 12px}.cmacs-user-dropdown-loading-icon{margin-right:6px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsUserDropdownComponent.prototype, "serverSearch", void 0);
__decorate([
    InputBoolean()
], CmacsUserDropdownComponent.prototype, "isLoading", null);
__decorate([
    InputBoolean()
], CmacsUserDropdownComponent.prototype, "inviteGuest", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsUserDropdownComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-user-dropdown', exportAs: 'cmacsUserDropdown', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<cmacs-select [showCmacsSearch]=\"true\"\r\n              allowClear\r\n              [maxTagCount]=\"maxTagCount\"\r\n              [mode]=\"mode\"\r\n              [showSelectAll]=\"false\"\r\n              [showArrow]=\"false\"\r\n              [userDropdown]=\"true\"\r\n              [notFoundContentCustom]=\"notFoundContent\"\r\n              [placeHolder]=\"placeHolder\"\r\n              (cmacsOnSearch)=\"onsearch($event)\"\r\n              [serverSearch]=\"serverSearch\"\r\n              [dropdownRender]=\"_inviteGuest ? render : null\"\r\n              (ngModelChange)=\"onSelectedValueChange($event)\"\r\n              [(ngModel)]=\"selectedValue\">\r\n  <ng-container *ngFor=\"let option of operatedData; index as i\">\r\n    <ng-container *ngFor=\"let elem of option.children; index as j\">\r\n      <cmacs-option [label]=\"elem.label\" [value]=\"elem.value\" [extendedData]=\"elem\" customContent>\r\n        <div class=\"cmacs-user-dropdown-option-wrapper\"\r\n             [class.cmacs-user-dropdown-last-elem]=\"j === option.children.length - 1\"\r\n             [class.cmacs-user-dropdown-divider-first-option]=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\">\r\n          <div *ngIf=\"firstElemByDivider[option.divider] && firstElemByDivider[option.divider].length &&\r\n            firstElemByDivider[option.divider][0].value === elem.value\" class=\"cmacs-user-dropdown-divider\">\r\n            <nz-divider></nz-divider>\r\n            {{option.divider}} <span style=\"color: #97a0ae\">({{firstElemByDivider[option.divider].length}})</span>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"elem.template; else defaultTPL\">\r\n            <ng-container [ngTemplateOutlet]=\"elem.template.ref\"\r\n                          [ngTemplateOutletContext]=\"elem.template.context\">\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <ng-template #defaultTPL>\r\n            <div class=\"cmacs-user-dropdown-info-wrapper\" [class.cmacs-user-dropdown-hide-picture]=\"elem.hidePicture\">\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'user'\">\r\n                <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                     src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n                <span class=\"cmacs-user-dropdown-initials\" *ngIf=\"elem.pictureError\">{{getInitials(elem.label)}}</span>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-guest-no-picture]=\"!elem.picture || elem.pictureError\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'guest'\">\r\n                <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                     src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n                <i class=\"iconCreation-User\" *ngIf=\"elem.pictureError\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-person-picture\"\r\n                   [class.cmacs-team-no-picture]=\"!elem.picture || elem.pictureError\"\r\n                   [class.cmacs-user-dropdown-no-picture]=\"elem.hidePicture\"\r\n                   *ngIf=\"elem.role === 'team'\">\r\n                <img *ngIf=\"!elem.pictureError\" class=\"cmacs-user-dropdown-img\"\r\n                     src=\"{{getSafeImage(elem.picture)}}\" alt=\"{{elem.label}}\" (error)=\"onError(elem)\">\r\n                <i class=\"iconCreation-Team\" *ngIf=\"elem.pictureError\"></i>\r\n              </div>\r\n\r\n              <div class=\"cmacs-user-dropdown-title\" [class.cmacs-user-dropdown-team-title]=\"elem.role === 'team'\">\r\n                <ng-container *ngIf=\"highlightValue(elem).length === 3\">\r\n                  <span>\r\n                    {{highlightKeys[0]}}<span style=\"color: #2a7cff\">{{highlightKeys[1]}}</span>{{highlightKeys[2]}}\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!highlightValue(elem).length\">\r\n                  {{elem.label}}\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf=\"elem.role === 'user' || elem.role === 'guest'\" class=\"cmacs-user-dropdown-subtitle\">{{elem.charge}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n      </cmacs-option>\r\n    </ng-container>\r\n  </ng-container>\r\n  <cmacs-option *ngIf=\"_isLoading\" disabled customContent>\r\n    <div class=\"cmacs-user-dropdown-loading-wrapper\">\r\n      <i nz-icon nzType=\"loading\" class=\"cmacs-user-dropdown-loading-icon\"></i> {{loadingLabel}}\r\n    </div>  \r\n  </cmacs-option>\r\n</cmacs-select>\r\n\r\n<ng-template #render>\r\n  <div class=\"cmacs-user-dropdown-invite-guest\"\r\n       (click)=\"addGuestUser()\">\r\n    <i style=\"font-size: 17px; position: relative; top: 3px; margin-right: 6px;\" class=\"iconUISmall-Message\"></i>\r\n    <span>{{inviteGuestLabel}}</span>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #notFoundContent>\r\n  <div *ngIf=\"showEmailError\" class=\"cmacs-user-dropdown-error\">{{emailErrorLabel}}</div>\r\n</ng-template>\r\n", styles: [".cmacs-user-dropdown-person-picture{text-align:center;border-radius:100%;width:34px;height:34px;background-color:#2a7cff;color:#fff;background-repeat:no-repeat;background-position:center center;background-size:contain;-webkit-mask:linear-gradient(#000 0 0);clip-path:circle(50% at 50% 50%)}.cmacs-user-dropdown-img{width:34px;height:34px;border-radius:40px}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px;background-color:#fff!important}.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{position:absolute;top:0;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{position:absolute;top:16px;left:45px;font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-team-no-picture{border-radius:100%;border:solid 1.1px #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px #3b3f461a;background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-user-dropdown-loading-wrapper{padding:7px 12px}.cmacs-user-dropdown-loading-icon{margin-right:6px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.UntypedFormBuilder }]; }, { mode: [{
            type: Input
        }], emailErrorLabel: [{
            type: Input
        }], inviteGuestLabel: [{
            type: Input
        }], loadingLabel: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], serverSearch: [{
            type: Input
        }], selectedValueChange: [{
            type: Output
        }], onAddGuestUserByEmail: [{
            type: Output
        }], cmacsOnSearch: [{
            type: Output
        }], selectComponent: [{
            type: ViewChild,
            args: [CmacsSelectComponent]
        }], isLoading: [{
            type: Input
        }], inviteGuest: [{
            type: Input
        }], listOfOption: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdXNlci1kcm9wZG93bi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUF3QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7SUNPN0MsK0JBQ2tHO0lBQ2hHLDZCQUF5QjtJQUN6QixZQUFtQjtJQUFBLGdDQUE2QjtJQUFBLFlBQStDO0lBQUEsaUJBQU8sRUFBQTs7OztJQUF0RyxlQUFtQjtJQUFuQixrREFBbUI7SUFBNkIsZUFBK0M7SUFBL0MscUZBQStDOzs7SUFHakcsNkJBQXFEO0lBQ25ELDRCQUVlO0lBQ2pCLDBCQUFlOzs7SUFIQyxlQUFzQztJQUF0Qyx1REFBc0MscURBQUE7Ozs7SUFXaEQsK0JBQ3VGO0lBQXhCLHdRQUFTLGVBQUEsd0JBQWEsQ0FBQSxJQUFDO0lBRHRGLGlCQUN1Rjs7OztJQUFsRix3RkFBb0M7SUFBQyw4Q0FBb0I7OztJ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aEIscUNBQWdCOzs7QUQ3Q047SUFBZixZQUFZLEVBQUU7Z0VBQXNCO0FBbUI5QztJQURVLFlBQVksRUFBRTsyREFHdkI7QUFHRDtJQURVLFlBQVksRUFBRTs2REFHdkI7dUZBbkNVLDBCQUEwQjtjQVR0QyxTQUFTOzJCQUNFLHFCQUFxQixZQUNyQixtQkFBbUIsbUJBRVosdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSztxR0FLakIsSUFBSTtrQkFBWixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUNJLG1CQUFtQjtrQkFBNUIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFPMEIsZUFBZTtrQkFBL0MsU0FBUzttQkFBQyxvQkFBb0I7WUFTM0IsU0FBUztrQkFEWixLQUFLO1lBTUYsV0FBVztrQkFEZCxLQUFLO1lBTUYsWUFBWTtrQkFEZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUdyb3VwLCBVbnR5cGVkRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXVzZXItZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NVc2VyRHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1VzZXJEcm9wZG93bkNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2RlZmF1bHQnOyBcclxuICBASW5wdXQoKSBlbWFpbEVycm9yTGFiZWw6IHN0cmluZyA9ICdFbWFpbCBtdXN0IGJlIGEgdmFsaWQgRW1haWwgQWRkcmVzcyc7IFxyXG4gIEBJbnB1dCgpIGludml0ZUd1ZXN0TGFiZWw6IHN0cmluZyA9ICdJbnZpdGUgYSBndWVzdCB2aWEgZW1haWwnOyBcclxuICBASW5wdXQoKSBsb2FkaW5nTGFiZWw6IHN0cmluZyA9ICdMb2FkaW5nIGRhdGEuLi4nOyBcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nID0gJ0FkZCBVc2VycyAvIFRlYW1zJzsgXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25BZGRHdWVzdFVzZXJCeUVtYWlsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjbWFjc09uU2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIFxyXG4gIF9pc0xvYWRpbmcgPSBmYWxzZTtcclxuICBfaW52aXRlR3Vlc3QgPSB0cnVlO1xyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgX2xpc3RPZk9wdGlvbjogYW55W10gPSBbXTsgXHJcbiAgc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0Q29tcG9uZW50KSBzZWxlY3RDb21wb25lbnQ6IENtYWNzU2VsZWN0Q29tcG9uZW50OyBcclxuICBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogYW55W10gPSBbXTtcclxuICBsaXN0RGl2aWRlcnM6IGFueVtdID0gW107XHJcbiAgb3BlcmF0ZWREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGZpcnN0RWxlbUJ5RGl2aWRlcjogYW55ID0ge307XHJcbiAgZW1haWxGb3JtOiBVbnR5cGVkRm9ybUdyb3VwO1xyXG4gIGhpZ2hsaWdodEtleXMgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgaW52aXRlR3Vlc3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ludml0ZUd1ZXN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsaXN0T2ZPcHRpb24odmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9saXN0T2ZPcHRpb24gPSBbLi4udmFsdWVdO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi52YWx1ZV07XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGlzdE9mT3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZk9wdGlvbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmYjogVW50eXBlZEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMuX3NlYXJjaFZhbHVlLCBbVmFsaWRhdG9ycy5lbWFpbF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh0aGlzLmxpc3RPZk9wdGlvbi5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5saXN0T2ZPcHRpb24uZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgdGhpcy5vcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gWy4uLnRoaXMub3BlcmF0ZWREYXRhXTtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvbnNlYXJjaCgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gJGV2ZW50O1xyXG4gICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoJGV2ZW50KTsgXHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdEVsZW1CeURpdmlkZXIoKSB7XHJcbiAgICBjb25zdCBmaXJzdEVsZW1CeURpdmlkZXIgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbltpXTtcclxuICAgICAgY29uc3QgZWxlbVdpdGhEaXZpZGVyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IChlLnZhbHVlID09PSBlbGVtLm56VmFsdWUgfHwgZS52YWx1ZSA9PT0gZWxlbS52YWx1ZSkpO1xyXG4gICAgICBpZiAoZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gbnVsbCB8fCBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID0gW107XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZmlyc3RFbGVtQnlEaXZpZGVyID0gZmlyc3RFbGVtQnlEaXZpZGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2FmZUltYWdlKHBpY3R1cmUpIHtcclxuICAgIHJldHVybiBwaWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgb25FcnJvcihlbGVtKSB7XHJcbiAgICBlbGVtLnBpY3R1cmVFcnJvciA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRHdWVzdFVzZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fc2VhcmNoVmFsdWUhISkge1xyXG4gICAgICB0aGlzLmVtYWlsRm9ybS5nZXQoJ2VtYWlsJykuc2V0VmFsdWUodGhpcy5fc2VhcmNoVmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5lbWFpbEZvcm0udmFsaWQpIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkFkZEd1ZXN0VXNlckJ5RW1haWwuZW1pdCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgY29uc3QgY2hlY2tVc2VyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IGUudmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICBpZiAoIWNoZWNrVXNlcikge1xyXG4gICAgICB0aGlzLmxpc3RPZk9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZk9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzRmlsdGVyZWQgPSBzZWxlY3RlZFZhbHVlcy5maWx0ZXIoZWxlbSA9PiBlbGVtLnZhbHVlICE9PSBvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRWYWx1ZXNGaWx0ZXJlZCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRWYWx1ZShlbGVtOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBpZiAodmFsdWUgJiYgZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKGluZGV4LCBpbmRleCArIHZhbHVlLmxlbmd0aCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgZWxlbS5sYWJlbC5sZW5ndGgpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRLZXlzO1xyXG4gIH1cclxufVxyXG4iLCI8Y21hY3Mtc2VsZWN0IFtzaG93Q21hY3NTZWFyY2hdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIFttYXhUYWdDb3VudF09XCJtYXhUYWdDb3VudFwiXHJcbiAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTZWxlY3RBbGxdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93QXJyb3ddPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFt1c2VyRHJvcGRvd25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgW25vdEZvdW5kQ29udGVudEN1c3RvbV09XCJub3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgICAgICAgICAgICAgKGNtYWNzT25TZWFyY2gpPVwib25zZWFyY2goJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW3NlcnZlclNlYXJjaF09XCJzZXJ2ZXJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIFtkcm9wZG93blJlbmRlcl09XCJfaW52aXRlR3Vlc3QgPyByZW5kZXIgOiBudWxsXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblNlbGVjdGVkVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wZXJhdGVkRGF0YTsgaW5kZXggYXMgaVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZWxlbSBvZiBvcHRpb24uY2hpbGRyZW47IGluZGV4IGFzIGpcIj5cclxuICAgICAgPGNtYWNzLW9wdGlvbiBbbGFiZWxdPVwiZWxlbS5sYWJlbFwiIFt2YWx1ZV09XCJlbGVtLnZhbHVlXCIgW2V4dGVuZGVkRGF0YV09XCJlbGVtXCIgY3VzdG9tQ29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1vcHRpb24td3JhcHBlclwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1sYXN0LWVsZW1dPVwiaiA9PT0gb3B0aW9uLmNoaWxkcmVuLmxlbmd0aCAtIDFcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tZGl2aWRlci1maXJzdC1vcHRpb25dPVwiZmlyc3RFbGVtQnlEaXZpZGVyW29wdGlvbi5kaXZpZGVyXSAmJiBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdWzBdLnZhbHVlID09PSBlbGVtLnZhbHVlXCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmlyc3RFbGVtQnlEaXZpZGVyW29wdGlvbi5kaXZpZGVyXSAmJiBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdWzBdLnZhbHVlID09PSBlbGVtLnZhbHVlXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWRpdmlkZXJcIj5cclxuICAgICAgICAgICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxyXG4gICAgICAgICAgICB7e29wdGlvbi5kaXZpZGVyfX0gPHNwYW4gc3R5bGU9XCJjb2xvcjogIzk3YTBhZVwiPih7e2ZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl0ubGVuZ3RofX0pPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVsZW0udGVtcGxhdGU7IGVsc2UgZGVmYXVsdFRQTFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVsZW0udGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZWxlbS50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VFBMPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbmZvLXdyYXBwZXJcIiBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1oaWRlLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd1c2VyJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFlbGVtLnBpY3R1cmVFcnJvclwiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9XCJ7e2dldFNhZmVJbWFnZShlbGVtLnBpY3R1cmUpfX1cIiBhbHQ9XCJ7e2VsZW0ubGFiZWx9fVwiIChlcnJvcik9XCJvbkVycm9yKGVsZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW5pdGlhbHNcIiAqbmdJZj1cImVsZW0ucGljdHVyZUVycm9yXCI+e3tnZXRJbml0aWFscyhlbGVtLmxhYmVsKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtZ3Vlc3Qtbm8tcGljdHVyZV09XCIhZWxlbS5waWN0dXJlIHx8IGVsZW0ucGljdHVyZUVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ2d1ZXN0J1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cIiFlbGVtLnBpY3R1cmVFcnJvclwiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9XCJ7e2dldFNhZmVJbWFnZShlbGVtLnBpY3R1cmUpfX1cIiBhbHQ9XCJ7e2VsZW0ubGFiZWx9fVwiIChlcnJvcik9XCJvbkVycm9yKGVsZW0pXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1Vc2VyXCIgKm5nSWY9XCJlbGVtLnBpY3R1cmVFcnJvclwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRlYW0tbm8tcGljdHVyZV09XCIhZWxlbS5waWN0dXJlIHx8IGVsZW0ucGljdHVyZUVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiIWVsZW0ucGljdHVyZUVycm9yXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz1cInt7Z2V0U2FmZUltYWdlKGVsZW0ucGljdHVyZSl9fVwiIGFsdD1cInt7ZWxlbS5sYWJlbH19XCIgKGVycm9yKT1cIm9uRXJyb3IoZWxlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVRlYW1cIiAqbmdJZj1cImVsZW0ucGljdHVyZUVycm9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi10aXRsZVwiIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLXRlYW0tdGl0bGVdPVwiZWxlbS5yb2xlID09PSAndGVhbSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoaWdobGlnaHRWYWx1ZShlbGVtKS5sZW5ndGggPT09IDNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3toaWdobGlnaHRLZXlzWzBdfX08c3BhbiBzdHlsZT1cImNvbG9yOiAjMmE3Y2ZmXCI+e3toaWdobGlnaHRLZXlzWzFdfX08L3NwYW4+e3toaWdobGlnaHRLZXlzWzJdfX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZ2hsaWdodFZhbHVlKGVsZW0pLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3VzZXInIHx8IGVsZW0ucm9sZSA9PT0gJ2d1ZXN0J1wiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1zdWJ0aXRsZVwiPnt7ZWxlbS5jaGFyZ2V9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGNtYWNzLW9wdGlvbiAqbmdJZj1cIl9pc0xvYWRpbmdcIiBkaXNhYmxlZCBjdXN0b21Db250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tbG9hZGluZy13cmFwcGVyXCI+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1sb2FkaW5nLWljb25cIj48L2k+IHt7bG9hZGluZ0xhYmVsfX1cclxuICAgIDwvZGl2PiAgXHJcbiAgPC9jbWFjcy1vcHRpb24+XHJcbjwvY21hY3Mtc2VsZWN0PlxyXG5cclxuPG5nLXRlbXBsYXRlICNyZW5kZXI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW52aXRlLWd1ZXN0XCJcclxuICAgICAgIChjbGljayk9XCJhZGRHdWVzdFVzZXIoKVwiPlxyXG4gICAgPGkgc3R5bGU9XCJmb250LXNpemU6IDE3cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAzcHg7IG1hcmdpbi1yaWdodDogNnB4O1wiIGNsYXNzPVwiaWNvblVJU21hbGwtTWVzc2FnZVwiPjwvaT5cclxuICAgIDxzcGFuPnt7aW52aXRlR3Vlc3RMYWJlbH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub3RGb3VuZENvbnRlbnQ+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dFbWFpbEVycm9yXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWVycm9yXCI+e3tlbWFpbEVycm9yTGFiZWx9fTwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=