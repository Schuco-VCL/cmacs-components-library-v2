import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CmacsSelectComponent } from '../cmacs-select/cmacs-select.component';
import { Validators } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/forms";
import * as i3 from "../cmacs-select/cmacs-select.component";
import * as i4 from "@angular/common";
import * as i5 from "../cmacs-select/cmacs-option.component";
import * as i6 from "ng-zorro-antd/divider";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "nz-divider");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r23.getInitials(elem_r9.label));
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_span_1_Template, 2, 1, "span", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r9.picture ? ctx_r17.getBackgroundImage(elem_r9.picture) : "none");
    i0.ɵɵclassProp("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.picture);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 24);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_i_1_Template, 1, 0, "i", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r9.picture ? ctx_r18.getBackgroundImage(elem_r9.picture) : "none");
    i0.ɵɵclassProp("cmacs-guest-no-picture", !elem_r9.picture)("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.picture);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 26);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_i_1_Template, 1, 0, "i", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-image", elem_r9.picture ? ctx_r19.getBackgroundImage(elem_r9.picture) : "none");
    i0.ɵɵclassProp("cmacs-team-no-picture", !elem_r9.picture)("cmacs-user-dropdown-no-picture", elem_r9.hidePicture);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !elem_r9.picture);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 27);
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
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elem_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(elem_r9.charge);
} }
function CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_1_Template, 2, 5, "div", 14);
    i0.ɵɵtemplate(2, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_2_Template, 2, 7, "div", 15);
    i0.ɵɵtemplate(3, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_div_3_Template, 2, 7, "div", 16);
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
    i0.ɵɵelementStart(1, "cmacs-option", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, CmacsUserDropdownComponent_ng_container_1_ng_container_1_div_3_Template, 5, 2, "div", 7);
    i0.ɵɵtemplate(4, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_container_4_Template, 2, 2, "ng-container", 8);
    i0.ɵɵtemplate(5, CmacsUserDropdownComponent_ng_container_1_ng_container_1_ng_template_5_Template, 8, 10, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵelementStart(0, "cmacs-option", 29);
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵelement(2, "i", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loadingLabel, " ");
} }
function CmacsUserDropdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function CmacsUserDropdownComponent_ng_template_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.addGuestUser(); });
    i0.ɵɵelement(1, "i", 33);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.inviteGuestLabel);
} }
function CmacsUserDropdownComponent_ng_template_5_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r36.emailErrorLabel);
} }
function CmacsUserDropdownComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsUserDropdownComponent_ng_template_5_div_0_Template, 2, 1, "div", 34);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.showEmailError);
} }
export class CmacsUserDropdownComponent {
    constructor(sanitizer, cdr, fb) {
        this.sanitizer = sanitizer;
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
    getBackgroundImage(picture) {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + picture + '\')');
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
        const selectedValues = this.selectComponent.nzSelectService.listOfSelectedValue;
        const selectedValuesFiltered = selectedValues.filter(elem => elem.value !== option.value);
        this.selectComponent.nzSelectService.updateListOfSelectedValue(selectedValuesFiltered, true);
    }
    highlightValue(elem) {
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
}
CmacsUserDropdownComponent.ɵfac = function CmacsUserDropdownComponent_Factory(t) { return new (t || CmacsUserDropdownComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FormBuilder)); };
CmacsUserDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsUserDropdownComponent, selectors: [["cmacs-user-dropdown"]], viewQuery: function CmacsUserDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CmacsSelectComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectComponent = _t.first);
    } }, inputs: { mode: "mode", emailErrorLabel: "emailErrorLabel", inviteGuestLabel: "inviteGuestLabel", loadingLabel: "loadingLabel", placeHolder: "placeHolder", selectedValue: "selectedValue", maxTagCount: "maxTagCount", serverSearch: "serverSearch", isLoading: "isLoading", inviteGuest: "inviteGuest", listOfOption: "listOfOption" }, outputs: { selectedValueChange: "selectedValueChange", onAddGuestUserByEmail: "onAddGuestUserByEmail", cmacsOnSearch: "cmacsOnSearch" }, exportAs: ["cmacsUserDropdown"], decls: 7, vars: 13, consts: [["allowClear", "", 3, "showCmacsSearch", "maxTagCount", "mode", "showSelectAll", "showArrow", "userDropdown", "notFoundContentCustom", "placeHolder", "serverSearch", "dropdownRender", "ngModel", "cmacsOnSearch", "ngModelChange"], [4, "ngFor", "ngForOf"], ["disabled", "", "customContent", "", 4, "ngIf"], ["render", ""], ["notFoundContent", ""], ["customContent", "", 3, "label", "value", "extendedData"], [1, "cmacs-user-dropdown-option-wrapper"], ["class", "cmacs-user-dropdown-divider", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["defaultTPL", ""], [1, "cmacs-user-dropdown-divider"], [2, "color", "#97a0ae"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cmacs-user-dropdown-info-wrapper"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-guest-no-picture", "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], ["class", "cmacs-user-dropdown-person-picture", 3, "cmacs-team-no-picture", "cmacs-user-dropdown-no-picture", "background-image", 4, "ngIf"], [1, "cmacs-user-dropdown-title"], [4, "ngIf"], ["class", "cmacs-user-dropdown-subtitle", 4, "ngIf"], [1, "cmacs-user-dropdown-person-picture"], ["class", "cmacs-user-dropdown-initials", 4, "ngIf"], [1, "cmacs-user-dropdown-initials"], ["class", "iconCreation-User", 4, "ngIf"], [1, "iconCreation-User"], ["class", "iconCreation-Team", 4, "ngIf"], [1, "iconCreation-Team"], [2, "color", "#2a7cff"], [1, "cmacs-user-dropdown-subtitle"], ["disabled", "", "customContent", ""], [1, "cmacs-user-dropdown-loading-wrapper"], ["nz-icon", "", "nzType", "loading", 1, "cmacs-user-dropdown-loading-icon"], [1, "cmacs-user-dropdown-invite-guest", 3, "click"], [1, "iconUISmall-Message", 2, "font-size", "17px", "position", "relative", "top", "3px", "margin-right", "6px"], ["class", "cmacs-user-dropdown-error", 4, "ngIf"], [1, "cmacs-user-dropdown-error"]], template: function CmacsUserDropdownComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i3.CmacsSelectComponent, i2.NgControlStatus, i2.NgModel, i4.NgForOf, i4.NgIf, i5.CmacsOptionComponent, i6.NzDividerComponent, i4.NgTemplateOutlet, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective], styles: [".cmacs-user-dropdown-person-picture{text-align:center;padding-top:2px;border-radius:3px;width:34px;height:34px;background-color:#a100cd;color:#fff;background-repeat:no-repeat;background-position:50%;background-size:contain}.cmacs-user-dropdown-divider{font-family:Roboto-Medium;font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.23;letter-spacing:normal;color:#3b3f46;padding:7px 14px 8px}.cmacs-user-dropdown-divider,.cmacs-user-dropdown-divider:hover{background-color:#fff!important}.cmacs-user-dropdown-divider nz-divider:first-child{transform:scaleX(1.5);position:relative;top:-7px}.cmacs-user-dropdown-initials{position:relative;top:5px;font-size:14px}.cmacs-user-dropdown-title{top:0;font-weight:500;color:#656c79}.cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-title{position:absolute;left:45px;font-family:Roboto-Regular;font-size:12px;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:calc(100% - 75px)}.cmacs-user-dropdown-subtitle{top:16px;font-weight:400;color:#97a0ae}.cmacs-team-no-picture{border-radius:3px;border:1.1px solid #dee0e5;background-color:#fff;color:#656c79;font-size:16px;padding:5px 0}.cmacs-user-dropdown-team-title{top:7px}.cmacs-guest-no-picture{border-radius:3px;background-color:#00cda1;font-size:16px;padding:6px 0}.cmacs-user-dropdown-error{color:#f6503c;font-size:10px;font-weight:400;font-stretch:normal;font-style:normal;line-height:2;letter-spacing:normal;padding:5px 0;position:relative;left:12px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-error{left:12px}.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{padding:0!important}.cmacs-user-dropdown-option-wrapper{padding:7px 0}.cmacs-user-dropdown-info-wrapper{position:relative;margin:0 14px}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .cmacs-user-dropdown-info-wrapper{margin:0 14px 0 42px}.cmacs-user-dropdown-divider-first-option{padding-top:0}.cmacs-user-dropdown-divider-first-option .cmacs-user-dropdown-info-wrapper{margin-top:7px!important}.cmacs-user-dropdown-last-elem{padding-bottom:14px}.cmacs-user-dropdown-invite-guest{height:34px;box-shadow:0 -2px 5px 0 rgba(59,63,70,.1);background-color:#fff;color:#2a7cff;padding:6px 11px;font-size:12px;cursor:pointer}.cmacs-user-dropdown-invite-guest:hover{background-color:#f2f7ff}.cmacs-user-dropdown-no-picture{opacity:0}.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-subtitle,.cmacs-user-dropdown-hide-picture .cmacs-user-dropdown-title{left:0}.ant-select-dropdown-menu{scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-user-dropdown-loading-wrapper{padding:7px 12px}.cmacs-user-dropdown-loading-icon{margin-right:6px}"], encapsulation: 2, changeDetection: 0 });
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
        args: [{
                selector: 'cmacs-user-dropdown',
                exportAs: 'cmacsUserDropdown',
                templateUrl: './cmacs-user-dropdown.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-user-dropdown.component.css']
            }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i0.ChangeDetectorRef }, { type: i2.FormBuilder }]; }, { mode: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdXNlci1kcm9wZG93bi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7O0lDTzdDLCtCQUNrRztJQUNoRyw2QkFBeUI7SUFDekIsWUFBbUI7SUFBQSxnQ0FBNkI7SUFBQSxZQUErQztJQUFBLGlCQUFPO0lBQ3hHLGlCQUFNOzs7O0lBREosZUFBbUI7SUFBbkIsa0RBQW1CO0lBQTZCLGVBQStDO0lBQS9DLHFGQUErQzs7O0lBR2pHLDZCQUFxRDtJQUNuRCw0QkFFZTtJQUNqQiwwQkFBZTs7O0lBSEMsZUFBc0M7SUFBdEMsdURBQXNDLHFEQUFBOzs7SUFZaEQsZ0NBQWlFO0lBQUEsWUFBMkI7SUFBQSxpQkFBTzs7OztJQUFsQyxlQUEyQjtJQUEzQix3REFBMkI7OztJQUo5RiwrQkFHd0Y7SUFDdEYs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WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQU8wQixlQUFlO2tCQUEvQyxTQUFTO21CQUFDLG9CQUFvQjtZQVMzQixTQUFTO2tCQURaLEtBQUs7WUFNRixXQUFXO2tCQURkLEtBQUs7WUFNRixZQUFZO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuLi9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXVzZXItZHJvcGRvd24nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NVc2VyRHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1VzZXJEcm9wZG93bkNvbXBvbmVudHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTogc3RyaW5nID0gJ2RlZmF1bHQnOyBcclxuICBASW5wdXQoKSBlbWFpbEVycm9yTGFiZWw6IHN0cmluZyA9ICdFbWFpbCBtdXN0IGJlIGEgdmFsaWQgRW1haWwgQWRkcmVzcyc7IFxyXG4gIEBJbnB1dCgpIGludml0ZUd1ZXN0TGFiZWw6IHN0cmluZyA9ICdJbnZpdGUgYSBndWVzdCB2aWEgZW1haWwnOyBcclxuICBASW5wdXQoKSBsb2FkaW5nTGFiZWw6IHN0cmluZyA9ICdMb2FkaW5nIGRhdGEuLi4nOyBcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nID0gJ0FkZCBVc2VycyAvIFRlYW1zJzsgXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25BZGRHdWVzdFVzZXJCeUVtYWlsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjbWFjc09uU2VhcmNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIFxyXG4gIF9pc0xvYWRpbmcgPSBmYWxzZTtcclxuICBfaW52aXRlR3Vlc3QgPSB0cnVlO1xyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgX2xpc3RPZk9wdGlvbjogYW55W10gPSBbXTsgXHJcbiAgc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0Q29tcG9uZW50KSBzZWxlY3RDb21wb25lbnQ6IENtYWNzU2VsZWN0Q29tcG9uZW50OyBcclxuICBsaXN0T2ZGaWx0ZXJlZE9wdGlvbjogYW55W10gPSBbXTtcclxuICBsaXN0RGl2aWRlcnM6IGFueVtdID0gW107XHJcbiAgb3BlcmF0ZWREYXRhOiBhbnlbXSA9IFtdO1xyXG4gIGZpcnN0RWxlbUJ5RGl2aWRlcjogYW55ID0ge307XHJcbiAgZW1haWxGb3JtOiBGb3JtR3JvdXA7XHJcbiAgaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgaXNMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0xvYWRpbmcgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKVxyXG4gIHNldCBpbnZpdGVHdWVzdCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faW52aXRlR3Vlc3QgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGxpc3RPZk9wdGlvbih2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuX2xpc3RPZk9wdGlvbiA9IFsuLi52YWx1ZV07XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLnZhbHVlXTtcclxuICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIGdldCBsaXN0T2ZPcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mT3B0aW9uO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICAgIHRoaXMuZW1haWxGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGVtYWlsOiBbdGhpcy5fc2VhcmNoVmFsdWUsIFtWYWxpZGF0b3JzLmVtYWlsXV1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZFZhbHVlQ2hhbmdlKCRldmVudCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGdldCBzZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb3BlcmF0ZURhdGEoKSB7XHJcbiAgICB0aGlzLm9wZXJhdGVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5saXN0RGl2aWRlcnMgPSBbLi4uQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMubGlzdE9mT3B0aW9uLm1hcChlID0+IGUuZGl2aWRlcikpKV07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdERpdmlkZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGRpdmlkZXIgPSB0aGlzLmxpc3REaXZpZGVyc1tpXTtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmxpc3RPZk9wdGlvbi5maWx0ZXIoZSA9PiBlLmRpdmlkZXIgPT09IGRpdmlkZXIpO1xyXG4gICAgICBjb25zdCBlbGVtID0geyBkaXZpZGVyLCBjaGlsZHJlbiB9O1xyXG4gICAgICB0aGlzLm9wZXJhdGVkRGF0YS5wdXNoKGVsZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbLi4udGhpcy5vcGVyYXRlZERhdGFdO1xyXG4gICAgdGhpcy5nZXRGaXJzdEVsZW1CeURpdmlkZXIoKTtcclxuICB9XHJcblxyXG4gIG9uc2VhcmNoKCRldmVudCkge1xyXG4gICAgdGhpcy5zaG93RW1haWxFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLmNtYWNzT25TZWFyY2guZW1pdCgkZXZlbnQpOyBcclxuICB9XHJcblxyXG4gIGdldEZpcnN0RWxlbUJ5RGl2aWRlcigpIHtcclxuICAgIGNvbnN0IGZpcnN0RWxlbUJ5RGl2aWRlciA9IHt9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uW2ldO1xyXG4gICAgICBjb25zdCBlbGVtV2l0aERpdmlkZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gKGUudmFsdWUgPT09IGVsZW0ubnpWYWx1ZSB8fCBlLnZhbHVlID09PSBlbGVtLnZhbHVlKSk7XHJcbiAgICAgIGlmIChmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSBudWxsIHx8IGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltlbGVtV2l0aERpdmlkZXIuZGl2aWRlcl0gPSBbXTtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdLnB1c2goZWxlbVdpdGhEaXZpZGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5maXJzdEVsZW1CeURpdmlkZXIgPSBmaXJzdEVsZW1CeURpdmlkZXI7XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UocGljdHVyZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyBwaWN0dXJlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIGFkZEd1ZXN0VXNlcigpIHtcclxuICAgIGlmICh0aGlzLl9zZWFyY2hWYWx1ZSEhKSB7XHJcbiAgICAgIHRoaXMuZW1haWxGb3JtLmdldCgnZW1haWwnKS5zZXRWYWx1ZSh0aGlzLl9zZWFyY2hWYWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLmVtYWlsRm9ybS52YWxpZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQWRkR3Vlc3RVc2VyQnlFbWFpbC5lbWl0KHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkT3B0aW9uKG9wdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBjaGVja1VzZXIgPSB0aGlzLmxpc3RPZk9wdGlvbi5maW5kKGUgPT4gZS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKTtcclxuICAgIGlmICghY2hlY2tVc2VyKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gWy4uLnRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24sIG9wdGlvbl07XHJcbiAgICAgIHRoaXMub3BlcmF0ZURhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZU9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzRmlsdGVyZWQgPSBzZWxlY3RlZFZhbHVlcy5maWx0ZXIoZWxlbSA9PiBlbGVtLnZhbHVlICE9PSBvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRWYWx1ZXNGaWx0ZXJlZCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRWYWx1ZShlbGVtIDogYW55KSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgIGlmICh2YWx1ZSAmJiBlbGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkhLmluY2x1ZGVzKHZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgIC8vIG1hdGNoIHRoZSBzZWFyY2ggdmFsdWVcclxuICAgICAgY29uc3QgaW5kZXggPSBlbGVtLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW1xyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIGVsZW0ubGFiZWwuc2xpY2UoaW5kZXgsIGluZGV4ICsgdmFsdWUubGVuZ3RoKSxcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCBlbGVtLmxhYmVsLmxlbmd0aClcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmhpZ2hsaWdodEtleXM7XHJcbiAgfVxyXG59XHJcbiIsIjxjbWFjcy1zZWxlY3QgW3Nob3dDbWFjc1NlYXJjaF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgW21heFRhZ0NvdW50XT1cIm1heFRhZ0NvdW50XCJcclxuICAgICAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgICAgICAgICBbc2hvd1NlbGVjdEFsbF09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dBcnJvd109XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW3VzZXJEcm9wZG93bl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICBbbm90Rm91bmRDb250ZW50Q3VzdG9tXT1cIm5vdEZvdW5kQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgW3BsYWNlSG9sZGVyXT1cInBsYWNlSG9sZGVyXCJcclxuICAgICAgICAgICAgICAoY21hY3NPblNlYXJjaCk9XCJvbnNlYXJjaCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbc2VydmVyU2VhcmNoXT1cInNlcnZlclNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgW2Ryb3Bkb3duUmVuZGVyXT1cIl9pbnZpdGVHdWVzdCA/IHJlbmRlciA6IG51bGxcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3BlcmF0ZWREYXRhOyBpbmRleCBhcyBpXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbGVtIG9mIG9wdGlvbi5jaGlsZHJlbjsgaW5kZXggYXMgalwiPlxyXG4gICAgICA8Y21hY3Mtb3B0aW9uIFtsYWJlbF09XCJlbGVtLmxhYmVsXCIgW3ZhbHVlXT1cImVsZW0udmFsdWVcIiBbZXh0ZW5kZWREYXRhXT1cImVsZW1cIiBjdXN0b21Db250ZW50PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLW9wdGlvbi13cmFwcGVyXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLWxhc3QtZWxlbV09XCJqID09PSBvcHRpb24uY2hpbGRyZW4ubGVuZ3RoIC0gMVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1kaXZpZGVyLWZpcnN0LW9wdGlvbl09XCJmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdICYmIGZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl0ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl1bMF0udmFsdWUgPT09IGVsZW0udmFsdWVcIj5cclxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdICYmIGZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl0ubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl1bMF0udmFsdWUgPT09IGVsZW0udmFsdWVcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tZGl2aWRlclwiPlxyXG4gICAgICAgICAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XHJcbiAgICAgICAgICAgIHt7b3B0aW9uLmRpdmlkZXJ9fSA8c3BhbiBzdHlsZT1cImNvbG9yOiAjOTdhMGFlXCI+KHt7Zmlyc3RFbGVtQnlEaXZpZGVyW29wdGlvbi5kaXZpZGVyXS5sZW5ndGh9fSk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWxlbS50ZW1wbGF0ZTsgZWxzZSBkZWZhdWx0VFBMXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZWxlbS50ZW1wbGF0ZS5yZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJlbGVtLnRlbXBsYXRlLmNvbnRleHRcIj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUUEw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWluZm8td3JhcHBlclwiIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLWhpZGUtcGljdHVyZV09XCJlbGVtLmhpZGVQaWN0dXJlXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3VzZXInXCJcclxuICAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImVsZW0ucGljdHVyZSA/IGdldEJhY2tncm91bmRJbWFnZShlbGVtLnBpY3R1cmUpOiAnbm9uZSdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbml0aWFsc1wiICpuZ0lmPVwiIWVsZW0ucGljdHVyZVwiPnt7Z2V0SW5pdGlhbHMoZWxlbS5sYWJlbCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLWd1ZXN0LW5vLXBpY3R1cmVdPVwiIWVsZW0ucGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICdndWVzdCdcIlxyXG4gICAgICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiZWxlbS5waWN0dXJlID8gZ2V0QmFja2dyb3VuZEltYWdlKGVsZW0ucGljdHVyZSk6ICdub25lJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uQ3JlYXRpb24tVXNlclwiICpuZ0lmPVwiIWVsZW0ucGljdHVyZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tcGVyc29uLXBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXRlYW0tbm8tcGljdHVyZV09XCIhZWxlbS5waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLW5vLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3RlYW0nXCJcclxuICAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImVsZW0ucGljdHVyZSA/IGdldEJhY2tncm91bmRJbWFnZShlbGVtLnBpY3R1cmUpOiAnbm9uZSdcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVRlYW1cIiAqbmdJZj1cIiFlbGVtLnBpY3R1cmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXRpdGxlXCIgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tdGVhbS10aXRsZV09XCJlbGVtLnJvbGUgPT09ICd0ZWFtJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZ2hsaWdodFZhbHVlKGVsZW0pLmxlbmd0aCA9PT0gM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7e2hpZ2hsaWdodEtleXNbMF19fTxzcGFuIHN0eWxlPVwiY29sb3I6ICMyYTdjZmZcIj57e2hpZ2hsaWdodEtleXNbMV19fTwvc3Bhbj57e2hpZ2hsaWdodEtleXNbMl19fVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlnaGxpZ2h0VmFsdWUoZWxlbSkubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7ZWxlbS5sYWJlbH19XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZWxlbS5yb2xlID09PSAndXNlcicgfHwgZWxlbS5yb2xlID09PSAnZ3Vlc3QnXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXN1YnRpdGxlXCI+e3tlbGVtLmNoYXJnZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuICA8Y21hY3Mtb3B0aW9uICpuZ0lmPVwiX2lzTG9hZGluZ1wiIGRpc2FibGVkIGN1c3RvbUNvbnRlbnQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1sb2FkaW5nLXdyYXBwZXJcIj5cclxuICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWxvYWRpbmctaWNvblwiPjwvaT4ge3tsb2FkaW5nTGFiZWx9fVxyXG4gICAgPC9kaXY+ICBcclxuICA8L2NtYWNzLW9wdGlvbj5cclxuPC9jbWFjcy1zZWxlY3Q+XHJcblxyXG48bmctdGVtcGxhdGUgI3JlbmRlcj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbnZpdGUtZ3Vlc3RcIlxyXG4gICAgICAgKGNsaWNrKT1cImFkZEd1ZXN0VXNlcigpXCI+XHJcbiAgICA8aSBzdHlsZT1cImZvbnQtc2l6ZTogMTdweDsgcG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IDNweDsgbWFyZ2luLXJpZ2h0OiA2cHg7XCIgY2xhc3M9XCJpY29uVUlTbWFsbC1NZXNzYWdlXCI+PC9pPlxyXG4gICAgPHNwYW4+e3tpbnZpdGVHdWVzdExhYmVsfX08L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI25vdEZvdW5kQ29udGVudD5cclxuICA8ZGl2ICpuZ0lmPVwic2hvd0VtYWlsRXJyb3JcIiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tZXJyb3JcIj57e2VtYWlsRXJyb3JMYWJlbH19PC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==