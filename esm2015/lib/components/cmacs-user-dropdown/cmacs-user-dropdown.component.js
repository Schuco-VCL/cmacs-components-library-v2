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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdXNlci1kcm9wZG93bi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy11c2VyLWRyb3Bkb3duL2NtYWNzLXVzZXItZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7O0lDTzdDLCtCQUNrRztJQUNoRyw2QkFBeUI7SUFDekIsWUFBbUI7SUFBQSxnQ0FBNkI7SUFBQSxZQUErQztJQUFBLGlCQUFPO0lBQ3hHLGlCQUFNOzs7O0lBREosZUFBbUI7SUFBbkIsa0RBQW1CO0lBQTZCLGVBQStDO0lBQS9DLHFGQUErQzs7O0lBR2pHLDZCQUFxRDtJQUNuRCw0QkFFZTtJQUNqQiwwQkFBZTs7O0lBSEMsZUFBc0M7SUFBdEMsdURBQXNDLHFEQUFBOzs7SUFZaEQsZ0NBQWlFO0lBQUEsWUFBMkI7SUFBQSxpQkFBTzs7OztJQUFsQyxlQUEyQjtJQUEzQix3REFBMkI7OztJQUo5RiwrQkFHd0Y7SUFDdEYs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eUhBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUNJLG1CQUFtQjtrQkFBNUIsTUFBTTtZQUNHLHFCQUFxQjtrQkFBOUIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFPMEIsZUFBZTtrQkFBL0MsU0FBUzttQkFBQyxvQkFBb0I7WUFTM0IsU0FBUztrQkFEWixLQUFLO1lBTUYsV0FBVztrQkFEZCxLQUFLO1lBTUYsWUFBWTtrQkFEZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy11c2VyLWRyb3Bkb3duJyxcclxuICBleHBvcnRBczogJ2NtYWNzVXNlckRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdXNlci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy11c2VyLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NVc2VyRHJvcGRvd25Db21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdkZWZhdWx0JzsgXHJcbiAgQElucHV0KCkgZW1haWxFcnJvckxhYmVsOiBzdHJpbmcgPSAnRW1haWwgbXVzdCBiZSBhIHZhbGlkIEVtYWlsIEFkZHJlc3MnOyBcclxuICBASW5wdXQoKSBpbnZpdGVHdWVzdExhYmVsOiBzdHJpbmcgPSAnSW52aXRlIGEgZ3Vlc3QgdmlhIGVtYWlsJzsgXHJcbiAgQElucHV0KCkgbG9hZGluZ0xhYmVsOiBzdHJpbmcgPSAnTG9hZGluZyBkYXRhLi4uJzsgXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZyA9ICdBZGQgVXNlcnMgLyBUZWFtcyc7IFxyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50ID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2VydmVyU2VhcmNoID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uQWRkR3Vlc3RVc2VyQnlFbWFpbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY21hY3NPblNlYXJjaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICBfaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgX2ludml0ZUd1ZXN0ID0gdHJ1ZTtcclxuICBfc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIF9saXN0T2ZPcHRpb246IGFueVtdID0gW107IFxyXG4gIHNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChDbWFjc1NlbGVjdENvbXBvbmVudCkgc2VsZWN0Q29tcG9uZW50OiBDbWFjc1NlbGVjdENvbXBvbmVudDsgXHJcbiAgbGlzdE9mRmlsdGVyZWRPcHRpb246IGFueVtdID0gW107XHJcbiAgbGlzdERpdmlkZXJzOiBhbnlbXSA9IFtdO1xyXG4gIG9wZXJhdGVkRGF0YTogYW55W10gPSBbXTtcclxuICBmaXJzdEVsZW1CeURpdmlkZXI6IGFueSA9IHt9O1xyXG4gIGVtYWlsRm9ybTogRm9ybUdyb3VwO1xyXG4gIGhpZ2hsaWdodEtleXMgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKClcclxuICBzZXQgaW52aXRlR3Vlc3QodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2ludml0ZUd1ZXN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsaXN0T2ZPcHRpb24odmFsdWU6IGFueVtdKSB7XHJcbiAgICB0aGlzLl9saXN0T2ZPcHRpb24gPSBbLi4udmFsdWVdO1xyXG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi52YWx1ZV07XHJcbiAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGlzdE9mT3B0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZk9wdGlvbjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB0aGlzLmVtYWlsRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogW3RoaXMuX3NlYXJjaFZhbHVlLCBbVmFsaWRhdG9ycy5lbWFpbF1dXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ZWRWYWx1ZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIG9wZXJhdGVEYXRhKCkge1xyXG4gICAgdGhpcy5vcGVyYXRlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGlzdERpdmlkZXJzID0gWy4uLkFycmF5LmZyb20obmV3IFNldCh0aGlzLmxpc3RPZk9wdGlvbi5tYXAoZSA9PiBlLmRpdmlkZXIpKSldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3REaXZpZGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBkaXZpZGVyID0gdGhpcy5saXN0RGl2aWRlcnNbaV07XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5saXN0T2ZPcHRpb24uZmlsdGVyKGUgPT4gZS5kaXZpZGVyID09PSBkaXZpZGVyKTtcclxuICAgICAgY29uc3QgZWxlbSA9IHsgZGl2aWRlciwgY2hpbGRyZW4gfTtcclxuICAgICAgdGhpcy5vcGVyYXRlZERhdGEucHVzaChlbGVtKTtcclxuICAgIH1cclxuICAgIHRoaXMub3BlcmF0ZWREYXRhID0gWy4uLnRoaXMub3BlcmF0ZWREYXRhXTtcclxuICAgIHRoaXMuZ2V0Rmlyc3RFbGVtQnlEaXZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvbnNlYXJjaCgkZXZlbnQpIHtcclxuICAgIHRoaXMuc2hvd0VtYWlsRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gJGV2ZW50O1xyXG4gICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoJGV2ZW50KTsgXHJcbiAgfVxyXG5cclxuICBnZXRGaXJzdEVsZW1CeURpdmlkZXIoKSB7XHJcbiAgICBjb25zdCBmaXJzdEVsZW1CeURpdmlkZXIgPSB7fTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbltpXTtcclxuICAgICAgY29uc3QgZWxlbVdpdGhEaXZpZGVyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IChlLnZhbHVlID09PSBlbGVtLm56VmFsdWUgfHwgZS52YWx1ZSA9PT0gZWxlbS52YWx1ZSkpO1xyXG4gICAgICBpZiAoZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXSA9PT0gbnVsbCB8fCBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbZWxlbVdpdGhEaXZpZGVyLmRpdmlkZXJdID0gW107XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlyc3RFbGVtQnlEaXZpZGVyW2VsZW1XaXRoRGl2aWRlci5kaXZpZGVyXS5wdXNoKGVsZW1XaXRoRGl2aWRlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZmlyc3RFbGVtQnlEaXZpZGVyID0gZmlyc3RFbGVtQnlEaXZpZGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKHBpY3R1cmUpIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3VybChcXCcnICsgcGljdHVyZSArICdcXCcpJyk7XHJcbiAgfVxyXG5cclxuICBhZGRHdWVzdFVzZXIoKSB7XHJcbiAgICBpZiAodGhpcy5fc2VhcmNoVmFsdWUhISkge1xyXG4gICAgICB0aGlzLmVtYWlsRm9ybS5nZXQoJ2VtYWlsJykuc2V0VmFsdWUodGhpcy5fc2VhcmNoVmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5lbWFpbEZvcm0udmFsaWQpIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkFkZEd1ZXN0VXNlckJ5RW1haWwuZW1pdCh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNob3dFbWFpbEVycm9yID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE9wdGlvbihvcHRpb246IGFueSkge1xyXG4gICAgY29uc3QgY2hlY2tVc2VyID0gdGhpcy5saXN0T2ZPcHRpb24uZmluZChlID0+IGUudmFsdWUgPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICBpZiAoIWNoZWNrVXNlcikge1xyXG4gICAgICB0aGlzLmxpc3RPZk9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZk9wdGlvbiwgb3B0aW9uXTtcclxuICAgICAgdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbiA9IFsuLi50aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLCBvcHRpb25dO1xyXG4gICAgICB0aGlzLm9wZXJhdGVEYXRhKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdENvbXBvbmVudC5uelNlbGVjdFNlcnZpY2UubGlzdE9mU2VsZWN0ZWRWYWx1ZTtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzRmlsdGVyZWQgPSBzZWxlY3RlZFZhbHVlcy5maWx0ZXIoZWxlbSA9PiBlbGVtLnZhbHVlICE9PSBvcHRpb24udmFsdWUpO1xyXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoc2VsZWN0ZWRWYWx1ZXNGaWx0ZXJlZCwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRWYWx1ZShlbGVtOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RDb21wb25lbnQpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0Q29tcG9uZW50Lm56U2VsZWN0U2VydmljZS5zZWFyY2hWYWx1ZTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICBpZiAodmFsdWUgJiYgZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpIS5pbmNsdWRlcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZWxlbS5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cyA9IFtcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICBlbGVtLmxhYmVsLnNsaWNlKGluZGV4LCBpbmRleCArIHZhbHVlLmxlbmd0aCksXHJcbiAgICAgICAgZWxlbS5sYWJlbC5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgZWxlbS5sYWJlbC5sZW5ndGgpXHJcbiAgICAgIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5oaWdobGlnaHRLZXlzO1xyXG4gIH1cclxufVxyXG4iLCI8Y21hY3Mtc2VsZWN0IFtzaG93Q21hY3NTZWFyY2hdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIFttYXhUYWdDb3VudF09XCJtYXhUYWdDb3VudFwiXHJcbiAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTZWxlY3RBbGxdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93QXJyb3ddPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFt1c2VyRHJvcGRvd25dPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgW25vdEZvdW5kQ29udGVudEN1c3RvbV09XCJub3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgICAgICAgICAgICAgKGNtYWNzT25TZWFyY2gpPVwib25zZWFyY2goJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW3NlcnZlclNlYXJjaF09XCJzZXJ2ZXJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIFtkcm9wZG93blJlbmRlcl09XCJfaW52aXRlR3Vlc3QgPyByZW5kZXIgOiBudWxsXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblNlbGVjdGVkVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wZXJhdGVkRGF0YTsgaW5kZXggYXMgaVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZWxlbSBvZiBvcHRpb24uY2hpbGRyZW47IGluZGV4IGFzIGpcIj5cclxuICAgICAgPGNtYWNzLW9wdGlvbiBbbGFiZWxdPVwiZWxlbS5sYWJlbFwiIFt2YWx1ZV09XCJlbGVtLnZhbHVlXCIgW2V4dGVuZGVkRGF0YV09XCJlbGVtXCIgY3VzdG9tQ29udGVudD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1vcHRpb24td3JhcHBlclwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1sYXN0LWVsZW1dPVwiaiA9PT0gb3B0aW9uLmNoaWxkcmVuLmxlbmd0aCAtIDFcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tZGl2aWRlci1maXJzdC1vcHRpb25dPVwiZmlyc3RFbGVtQnlEaXZpZGVyW29wdGlvbi5kaXZpZGVyXSAmJiBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdWzBdLnZhbHVlID09PSBlbGVtLnZhbHVlXCI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmlyc3RFbGVtQnlEaXZpZGVyW29wdGlvbi5kaXZpZGVyXSAmJiBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBmaXJzdEVsZW1CeURpdmlkZXJbb3B0aW9uLmRpdmlkZXJdWzBdLnZhbHVlID09PSBlbGVtLnZhbHVlXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWRpdmlkZXJcIj5cclxuICAgICAgICAgICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxyXG4gICAgICAgICAgICB7e29wdGlvbi5kaXZpZGVyfX0gPHNwYW4gc3R5bGU9XCJjb2xvcjogIzk3YTBhZVwiPih7e2ZpcnN0RWxlbUJ5RGl2aWRlcltvcHRpb24uZGl2aWRlcl0ubGVuZ3RofX0pPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVsZW0udGVtcGxhdGU7IGVsc2UgZGVmYXVsdFRQTFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImVsZW0udGVtcGxhdGUucmVmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZWxlbS50ZW1wbGF0ZS5jb250ZXh0XCI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VFBMPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1pbmZvLXdyYXBwZXJcIiBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1oaWRlLXBpY3R1cmVdPVwiZWxlbS5oaWRlUGljdHVyZVwiPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1wZXJzb24tcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd1c2VyJ1wiXHJcbiAgICAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJlbGVtLnBpY3R1cmUgPyBnZXRCYWNrZ3JvdW5kSW1hZ2UoZWxlbS5waWN0dXJlKTogJ25vbmUnXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW5pdGlhbHNcIiAqbmdJZj1cIiFlbGVtLnBpY3R1cmVcIj57e2dldEluaXRpYWxzKGVsZW0ubGFiZWwpfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy1ndWVzdC1uby1waWN0dXJlXT1cIiFlbGVtLnBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgW2NsYXNzLmNtYWNzLXVzZXItZHJvcGRvd24tbm8tcGljdHVyZV09XCJlbGVtLmhpZGVQaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZWxlbS5yb2xlID09PSAnZ3Vlc3QnXCJcclxuICAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImVsZW0ucGljdHVyZSA/IGdldEJhY2tncm91bmRJbWFnZShlbGVtLnBpY3R1cmUpOiAnbm9uZSdcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVVzZXJcIiAqbmdJZj1cIiFlbGVtLnBpY3R1cmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLXBlcnNvbi1waWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jbWFjcy10ZWFtLW5vLXBpY3R1cmVdPVwiIWVsZW0ucGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2xhc3MuY21hY3MtdXNlci1kcm9wZG93bi1uby1waWN0dXJlXT1cImVsZW0uaGlkZVBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlbGVtLnJvbGUgPT09ICd0ZWFtJ1wiXHJcbiAgICAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJlbGVtLnBpY3R1cmUgPyBnZXRCYWNrZ3JvdW5kSW1hZ2UoZWxlbS5waWN0dXJlKTogJ25vbmUnXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb25DcmVhdGlvbi1UZWFtXCIgKm5nSWY9XCIhZWxlbS5waWN0dXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi10aXRsZVwiIFtjbGFzcy5jbWFjcy11c2VyLWRyb3Bkb3duLXRlYW0tdGl0bGVdPVwiZWxlbS5yb2xlID09PSAndGVhbSdcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoaWdobGlnaHRWYWx1ZShlbGVtKS5sZW5ndGggPT09IDNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge3toaWdobGlnaHRLZXlzWzBdfX08c3BhbiBzdHlsZT1cImNvbG9yOiAjMmE3Y2ZmXCI+e3toaWdobGlnaHRLZXlzWzFdfX08L3NwYW4+e3toaWdobGlnaHRLZXlzWzJdfX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZ2hsaWdodFZhbHVlKGVsZW0pLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2VsZW0ubGFiZWx9fVxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImVsZW0ucm9sZSA9PT0gJ3VzZXInIHx8IGVsZW0ucm9sZSA9PT0gJ2d1ZXN0J1wiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1zdWJ0aXRsZVwiPnt7ZWxlbS5jaGFyZ2V9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPGNtYWNzLW9wdGlvbiAqbmdJZj1cIl9pc0xvYWRpbmdcIiBkaXNhYmxlZCBjdXN0b21Db250ZW50PlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24tbG9hZGluZy13cmFwcGVyXCI+XHJcbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiIGNsYXNzPVwiY21hY3MtdXNlci1kcm9wZG93bi1sb2FkaW5nLWljb25cIj48L2k+IHt7bG9hZGluZ0xhYmVsfX1cclxuICAgIDwvZGl2PiAgXHJcbiAgPC9jbWFjcy1vcHRpb24+XHJcbjwvY21hY3Mtc2VsZWN0PlxyXG5cclxuPG5nLXRlbXBsYXRlICNyZW5kZXI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLXVzZXItZHJvcGRvd24taW52aXRlLWd1ZXN0XCJcclxuICAgICAgIChjbGljayk9XCJhZGRHdWVzdFVzZXIoKVwiPlxyXG4gICAgPGkgc3R5bGU9XCJmb250LXNpemU6IDE3cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAzcHg7IG1hcmdpbi1yaWdodDogNnB4O1wiIGNsYXNzPVwiaWNvblVJU21hbGwtTWVzc2FnZVwiPjwvaT5cclxuICAgIDxzcGFuPnt7aW52aXRlR3Vlc3RMYWJlbH19PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNub3RGb3VuZENvbnRlbnQ+XHJcbiAgPGRpdiAqbmdJZj1cInNob3dFbWFpbEVycm9yXCIgY2xhc3M9XCJjbWFjcy11c2VyLWRyb3Bkb3duLWVycm9yXCI+e3tlbWFpbEVycm9yTGFiZWx9fTwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=