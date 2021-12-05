import { Component, EventEmitter, Input, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { Validators } from "@angular/forms";
import { SignaturePad } from 'angular2-signaturepad';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "angular2-signaturepad";
import * as i4 from "../cmacs-modal/cmacs-modal.component";
import * as i5 from "../cmacs-tabs/tabset.component";
import * as i6 from "../cmacs-tabs/tab.component";
import * as i7 from "../cmacs-form/form.directive";
import * as i8 from "../cmacs-form/form-item.component";
import * as i9 from "../cmacs-form/form-label.component";
import * as i10 from "../cmacs-form/form-control.component";
import * as i11 from "../cmacs-input/cmacs-input.directive";
import * as i12 from "../cmacs-checkbox/cmacs-checkbox.component";
import * as i13 from "ng-zorro-antd/upload";
import * as i14 from "../cmacs-button/cmacs-button.component";
import * as i15 from "angular2-draggable";
function CmacsSignatureComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵlistener("keydown", function CmacsSignatureComponent_ng_container_0_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.checkPressedKeys($event); });
    i0.ɵɵelementStart(2, "span", 2);
    i0.ɵɵtext(3, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "signature-pad", 3);
    i0.ɵɵlistener("onEndEvent", function CmacsSignatureComponent_ng_container_0_Template_signature_pad_onEndEvent_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.drawComplete(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.signaturePadOptions);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 19);
    i0.ɵɵelementStart(2, "span", 20);
    i0.ɵɵlistener("click", function CmacsSignatureComponent_ng_container_1_ng_container_2_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.openModal(); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.i18n["Click here to sign"] ? ctx_r5.i18n["Click here to sign"] : ctx_r5._i18n["Click here to sign"], " ");
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15._currentValue.userSignature);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("alt", ctx_r16._currentValue.userSignature);
    i0.ɵɵproperty("src", ctx_r16._currentValue.userSignature, i0.ɵɵsanitizeUrl);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r17._currentValue.signatureImgStyle.size ? ctx_r17._currentValue.signatureImgStyle.size.width : null, "px")("height", ctx_r17._currentValue.signatureImgStyle.size ? ctx_r17._currentValue.signatureImgStyle.size.height : null, "px");
    i0.ɵɵpropertyInterpolate("alt", ctx_r17._currentValue.userSignature);
    i0.ɵɵproperty("src", ctx_r17._currentValue.userSignature, i0.ɵɵsanitizeUrl);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(3, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_3_Template, 2, 6, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6._currentValue.signatureType === "type");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6._currentValue.signatureType === "draw");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6._currentValue.signatureType === "image");
} }
function CmacsSignatureComponent_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.formGroup.get("username").value);
} }
function CmacsSignatureComponent_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1, "Test");
    i0.ɵɵelementEnd();
} }
function CmacsSignatureComponent_ng_container_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-upload", 26);
    i0.ɵɵlistener("nzFileListChange", function CmacsSignatureComponent_ng_container_1_ng_container_39_Template_nz_upload_nzFileListChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.files = $event; });
    i0.ɵɵelementStart(2, "span", 27);
    i0.ɵɵelement(3, "img", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 29);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 30);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzMultiple", false)("nzFileList", ctx_r9.files)("nzBeforeUpload", ctx_r9.beforeUpload);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.i18n["Drag & Drop File Here or"] ? ctx_r9.i18n["Drag & Drop File Here or"] : ctx_r9._i18n["Drag & Drop File Here or"], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.i18n["Browse Computer"] ? ctx_r9.i18n["Browse Computer"] : ctx_r9._i18n["Browse Computer"]);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵelementStart(2, "span", 2);
    i0.ɵɵtext(3, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 32, 33);
    i0.ɵɵelementStart(6, "div", 34);
    i0.ɵɵlistener("rzStop", function CmacsSignatureComponent_ng_container_1_ng_container_40_Template_div_rzStop_6_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onResizeStop($event); })("endOffset", function CmacsSignatureComponent_ng_container_1_ng_container_40_Template_div_endOffset_6_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onMoveEnd($event); });
    i0.ɵɵelement(7, "img", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r20 = i0.ɵɵreference(5);
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("bounds", _r20)("inBounds", true)("preventDefaultEvent", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r10._uploadedImageSrc, i0.ɵɵsanitizeUrl);
} }
function CmacsSignatureComponent_ng_container_1_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function CmacsSignatureComponent_ng_container_1_ng_template_45_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.handleCancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function CmacsSignatureComponent_ng_container_1_ng_template_45_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.handleOk(); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.i18n["Cancel"] ? ctx_r12.i18n["Cancel"] : ctx_r12._i18n["Cancel"], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r12.isValid());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r12.i18n["Verify"] ? ctx_r12.i18n["Verify"] : ctx_r12._i18n["Verify"]);
} }
function CmacsSignatureComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵtemplate(2, CmacsSignatureComponent_ng_container_1_ng_container_2_Template, 4, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, CmacsSignatureComponent_ng_container_1_ng_container_3_Template, 4, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "cmacs-modal", 5);
    i0.ɵɵlistener("visibleChange", function CmacsSignatureComponent_ng_container_1_Template_cmacs_modal_visibleChange_4_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27._isVisible = $event; })("onCancel", function CmacsSignatureComponent_ng_container_1_Template_cmacs_modal_onCancel_4_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.handleCancel(); });
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "cmacs-tabset", 7);
    i0.ɵɵlistener("selectedIndexChange", function CmacsSignatureComponent_ng_container_1_Template_cmacs_tabset_selectedIndexChange_6_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.updateCurrent($event); });
    i0.ɵɵelementStart(7, "cmacs-tab", 8);
    i0.ɵɵelementStart(8, "form", 9);
    i0.ɵɵelementStart(9, "cmacs-form-item");
    i0.ɵɵelementStart(10, "cmacs-form-label", 10);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "cmacs-form-control");
    i0.ɵɵelement(13, "input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 12);
    i0.ɵɵelementStart(15, "span", 2);
    i0.ɵɵtext(16, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, CmacsSignatureComponent_ng_container_1_div_17_Template, 2, 1, "div", 13);
    i0.ɵɵtemplate(18, CmacsSignatureComponent_ng_container_1_div_18_Template, 2, 0, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 15);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "label", 16);
    i0.ɵɵlistener("ngModelChange", function CmacsSignatureComponent_ng_container_1_Template_label_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.saveSignature = $event; });
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "cmacs-tab", 8);
    i0.ɵɵelementStart(24, "cmacs-form-item", 17);
    i0.ɵɵelementStart(25, "cmacs-form-label", 10);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 1);
    i0.ɵɵlistener("keydown", function CmacsSignatureComponent_ng_container_1_Template_div_keydown_27_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.checkPressedKeys($event); });
    i0.ɵɵelementStart(28, "span", 2);
    i0.ɵɵtext(29, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "signature-pad", 3);
    i0.ɵɵlistener("onEndEvent", function CmacsSignatureComponent_ng_container_1_Template_signature_pad_onEndEvent_30_listener() { i0.ɵɵrestoreView(_r28); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.drawComplete(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 15);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "label", 16);
    i0.ɵɵlistener("ngModelChange", function CmacsSignatureComponent_ng_container_1_Template_label_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.saveSignature = $event; });
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "cmacs-tab", 8);
    i0.ɵɵelementStart(36, "cmacs-form-item", 17);
    i0.ɵɵelementStart(37, "cmacs-form-label", 10);
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, CmacsSignatureComponent_ng_container_1_ng_container_39_Template, 8, 5, "ng-container", 0);
    i0.ɵɵtemplate(40, CmacsSignatureComponent_ng_container_1_ng_container_40_Template, 8, 4, "ng-container", 0);
    i0.ɵɵelementStart(41, "div", 15);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "label", 16);
    i0.ɵɵlistener("ngModelChange", function CmacsSignatureComponent_ng_container_1_Template_label_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r35 = i0.ɵɵnextContext(); return ctx_r35.saveSignature = $event; });
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(45, CmacsSignatureComponent_ng_container_1_ng_template_45_Template, 5, 3, "ng-template", null, 18, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(46);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1._currentValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._currentValue);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r1.i18n["Sign to Complete"] ? ctx_r1.i18n["Sign to Complete"] : ctx_r1._i18n["Sign to Complete"]);
    i0.ɵɵproperty("visible", ctx_r1._isVisible)("width", "570px")("footer", _r11);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cmacsSelectedIndex", ctx_r1.current);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("cmacsTitle", ctx_r1.i18n["Type"] ? ctx_r1.i18n["Type"] : ctx_r1._i18n["Type"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.formGroup);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Enter Your Name"] ? ctx_r1.i18n["Enter Your Name"] : ctx_r1._i18n["Enter Your Name"], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.i18n["Text Here"] ? ctx_r1.i18n["Text Here"] : ctx_r1._i18n["Text Here"]);
    i0.ɵɵproperty("formControlName", "username");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.formGroup.get("username").value && ctx_r1.formGroup.get("username").value.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.formGroup.get("username").value || ctx_r1.formGroup.get("username").value && !ctx_r1.formGroup.get("username").value.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] ? ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] : ctx_r1._i18n["I, User Full Name, have reviewed and completed this report."], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.saveSignature);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Select here to save your signature for future use."] ? ctx_r1.i18n["Select here to save your signature for future use."] : ctx_r1._i18n["Select here to save your signature for future use."], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("cmacsTitle", ctx_r1.i18n["Draw"] ? ctx_r1.i18n["Draw"] : ctx_r1._i18n["Draw"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Signature"] ? ctx_r1.i18n["Signature"] : ctx_r1._i18n["Signature"], " ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r1._signaturePadOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] ? ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] : ctx_r1._i18n["I, User Full Name, have reviewed and completed this report."], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.saveSignature);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Select here to save your signature for future use."] ? ctx_r1.i18n["Select here to save your signature for future use."] : ctx_r1._i18n["Select here to save your signature for future use."], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("cmacsTitle", ctx_r1.i18n["Image"] ? ctx_r1.i18n["Image"] : ctx_r1._i18n["Image"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Signature"] ? ctx_r1.i18n["Signature"] : ctx_r1._i18n["Signature"], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1._uploadedImageSrc);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1._uploadedImageSrc);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] ? ctx_r1.i18n["I, User Full Name, have reviewed and completed this report."] : ctx_r1._i18n["I, User Full Name, have reviewed and completed this report."], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r1.saveSignature);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.i18n["Select here to save your signature for future use."] ? ctx_r1.i18n["Select here to save your signature for future use."] : ctx_r1._i18n["Select here to save your signature for future use."], " ");
} }
export const SIGNATURE_LOCALIZATION = {
    'Click here to sign': 'Click here to sign',
    'Sign to Complete': 'Sign to Complete',
    'Cancel': 'Cancel',
    'Verify': 'Verify',
    'Enter Your Name': 'Enter Your Name',
    'Text Here': 'Text Here',
    'Type': 'Type',
    'Draw': 'Draw',
    'Image': 'Image',
    'I, User Full Name, have reviewed and completed this report.': 'I, User Full Name, have reviewed and completed this report.',
    'Select here to save your signature for future use.': 'Select here to save your signature for future use.',
    'Signature': 'Signature',
    'Drag & Drop File Here or': 'Drag & Drop File Here or',
    'Browse Computer': 'Browse Computer'
};
export class CmacsSignatureComponent {
    constructor(fb, cdr) {
        this.fb = fb;
        this.cdr = cdr;
        this._isVisible = false;
        this.saveSignature = true;
        this._i18n = SIGNATURE_LOCALIZATION;
        this.current = 0;
        this.files = [];
        this._signatureDataUrl = null;
        this._currentValue = null;
        this._signaturePadOptions = {
            'dotSize': 0.4,
            'canvasWidth': 420,
            'canvasHeight': 126
        };
        this._uploadedImageSrc = null;
        this._uploadedImageSrcStyle = {};
        this.i18n = SIGNATURE_LOCALIZATION;
        this.signaturePadOptions = {};
        this.extendedVersion = false;
        this.oncancel = new EventEmitter();
        this.onsubmit = new EventEmitter();
        this.ondrawend = new EventEmitter();
        this.beforeUpload = (file) => {
            this.files = [file];
            const url = (file.name || '');
            if (!url) {
                this.files = [];
                return false;
            }
            const extension = this.extname(url);
            if (/(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
                const reader = new FileReader();
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
                reader.onload = () => {
                    this._uploadedImageSrc = reader.result;
                };
                const blob = file;
                reader.readAsDataURL(blob);
            }
            return false;
        };
        this.formGroup = this.fb.group({
            username: ['', [Validators.required]]
        });
    }
    set currentValue(value) {
        this._currentValue = value;
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.signaturePad.clear();
    }
    onResizeStop($event) {
        this._uploadedImageSrcStyle.size = $event.size;
    }
    onMoveEnd($event) {
        this._uploadedImageSrcStyle.position = $event;
    }
    extname(url) {
        const temp = url.split('/');
        const filename = temp[temp.length - 1];
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    isValid() {
        switch (this.current) {
            case 0:
                return !this.formGroup.valid;
            case 1:
                return !this._signatureDataUrl;
            case 2:
                return !this._uploadedImageSrc;
            default:
                return true;
        }
    }
    updateCurrent(idx) {
        this.current = idx;
    }
    drawComplete() {
        if (this.extendedVersion) {
            this._signatureDataUrl = this.signaturePad.toDataURL();
            return;
        }
        this.ondrawend.emit(this.signaturePad.toDataURL());
    }
    openModal() {
        this._isVisible = true;
    }
    handleCancel() {
        this._isVisible = false;
        for (const key in this.formGroup.controls) {
            this.formGroup.controls[key].markAsPristine();
            this.formGroup.controls[key].updateValueAndValidity();
        }
        this.formGroup.reset();
        this.saveSignature = true;
        this._signatureDataUrl = null;
        this.signaturePad.clear();
        this.current = 0;
        this._uploadedImageSrc = null;
        this._uploadedImageSrcStyle = {};
        this.files = [];
        this.oncancel.emit(this._isVisible);
    }
    handleOk() {
        const value = {};
        if (this.current === 0) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = this.formGroup.get('username').value;
            value.signatureType = 'type';
        }
        if (this.current === 1) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = this._signatureDataUrl;
            value.signatureType = 'draw';
        }
        if (this.current === 2) {
            value.saveForFutureUse = this.saveSignature;
            value.userSignature = this._uploadedImageSrc;
            value.signatureImgStyle = this._uploadedImageSrcStyle;
            value.signatureType = 'image';
        }
        this._currentValue = value;
        this.onsubmit.emit(value);
        this.handleCancel();
    }
    checkPressedKeys($event) {
        if ($event.which === 90 && $event.ctrlKey) {
            const data = this.signaturePad.toData();
            if (data) {
                data.pop();
                this.signaturePad.fromData(data);
                this._signatureDataUrl = this.signaturePad.toDataURL();
            }
        }
    }
}
CmacsSignatureComponent.ɵfac = function CmacsSignatureComponent_Factory(t) { return new (t || CmacsSignatureComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsSignatureComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSignatureComponent, selectors: [["cmacs-signature"]], viewQuery: function CmacsSignatureComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(SignaturePad, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.signaturePad = _t.first);
    } }, inputs: { i18n: "i18n", signaturePadOptions: "signaturePadOptions", extendedVersion: "extendedVersion", currentValue: "currentValue" }, outputs: { oncancel: "oncancel", onsubmit: "onsubmit", ondrawend: "ondrawend" }, exportAs: ["cmacsSignature"], decls: 2, vars: 2, consts: [[4, "ngIf"], ["tabindex", "1", 1, "cmacs-signature-sign-wrapper", "cmacs-signature-pad", 3, "keydown"], [1, "cmacs-signature-x"], [3, "options", "onEndEvent"], [1, "cmacs-signature-wrapper"], ["modalType", "helpfulTipsNoPanel", 1, "cmacs-signature-modal", 3, "visible", "width", "title", "footer", "visibleChange", "onCancel"], ["cmacs-modal-helpfulTips-no-panel-center", ""], [1, "cmacs-signature-tabset", "cmacs-width-100", 3, "cmacsSelectedIndex", "selectedIndexChange"], [3, "cmacsTitle"], ["cmacs-form", "", 3, "formGroup"], ["cmacsRequired", ""], ["cmacs-input", "", 1, "cmacs-signature-username-input", 3, "formControlName", "placeholder"], [1, "cmacs-signature-sign-wrapper"], ["class", "cmacs-signature-sign-input", 4, "ngIf"], ["class", "cmacs-signature-sign-input cmacs-invisible-font", 4, "ngIf"], [1, "cmacs-signature-text", "cmacs-signature-text-format"], ["cmacs-checkbox", "", 1, "cmacs-signature-text", 3, "ngModel", "ngModelChange"], [1, "cmacs-no-margin"], ["modalFooter", ""], [1, "cmacs-signature-close-icon", "iconUISmall-Excel"], [1, "cmacs-signature-placeholder", 3, "click"], [1, "cmacs-signature-sign-input", "cmacs-signature-input-userSignature"], [1, "centered", 2, "max-height", "50px !important", "max-width", "inherit", 3, "src", "alt"], [1, "centered", 2, "max-height", "50px !important", "max-width", "inherit", 3, "alt", "src"], [1, "cmacs-signature-sign-input"], [1, "cmacs-signature-sign-input", "cmacs-invisible-font"], ["nzType", "drag", "nzAccept", "image/*", 1, "cmacs-signature-upload-area", 3, "nzMultiple", "nzFileList", "nzBeforeUpload", "nzFileListChange"], [1, "ant-upload-drag-icon"], ["src", "assets/images/upload-computer.png", "alt", "Upload Image"], [1, "cmacs-signature-upload-text"], ["cmacs-button", "", "role", "button", "aria-label", "Browse computer"], [1, "cmacs-signature-sign-wrapper", "cmacs-signature-image-src"], [1, "cmacs-signature-sign-input", "cmacs-signature-img-wrapper", 2, "max-width", "480px", "width", "480px", "max-height", "100px", "height", "100px"], ["dragBounds", ""], ["ngResizable", "", "rzHandles", "n,s,e,w,se,sw", "ngDraggable", "", 1, "cmacs-signature-img-wrapper-resizable-area", 2, "max-width", "480px", "max-height", "100px", 3, "bounds", "inBounds", "preventDefaultEvent", "rzStop", "endOffset"], ["alt", "Uploaded Signature", 2, "max-width", "480px", "width", "inherit", "max-height", "100px", "height", "inherit", 3, "src"], ["cmacs-button", "", "type", "default", "role", "button", "ghost", "", "aria-label", "cancel", 2, "float", "left", 3, "click"], ["cmacs-button", "", "ghost", "", "role", "button", "type", "primary", "aria-label", "verify", 3, "disabled", "click"]], template: function CmacsSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsSignatureComponent_ng_container_0_Template, 5, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, CmacsSignatureComponent_ng_container_1_Template, 47, 30, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.extendedVersion);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extendedVersion);
    } }, directives: [i2.NgIf, i3.SignaturePad, i4.CmacsModalComponent, i5.CmacsTabSetComponent, i6.CmacsTabComponent, i1.ɵangular_packages_forms_forms_ba, i1.NgControlStatusGroup, i7.CmacsFormDirective, i1.FormGroupDirective, i8.CmacsFormItemComponent, i9.CmacsFormLabelComponent, i10.CmacsFormControlComponent, i11.CmacsInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i12.CmacsCheckboxComponent, i1.NgModel, i13.NzUploadComponent, i14.CmacsButtonComponent, i15.AngularResizableDirective, i15.AngularDraggableDirective], styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;max-width:100%;text-align:center}.centered{top:50%;position:relative;transform:translateY(-50%)}mwlResizable{box-sizing:border-box}.resize-handle-bottom,.resize-handle-top{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top{top:0}.resize-handle-bottom{bottom:0}.resize-handle-left,.resize-handle-right{position:absolute;height:100%;cursor:col-resize;width:5px}.resize-handle-left{left:0}.resize-handle-right{right:0}.cmacs-signature-x{font-size:18px;color:#bec4cd}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:45px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:88%!important;display:inline-block;max-width:88%;margin-left:8px!important;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:44px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px;background:#fff}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}.cmacs-signature-image-src{height:231px!important;border-radius:3px!important;border:1px dashed #bec4cd!important}.cmacs-signature-image-src,.cmacs-signature-img-wrapper{background-color:#fff!important}.cmacs-signature-img-wrapper-resizable-area{border:1px dashed #2a7cff;overflow:hidden!important}.cmacs-signature-input-userSignature{border-bottom:none!important;background-color:#fff!important;height:100%!important;overflow:hidden!important;line-height:1.4!important}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSignatureComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-signature',
                exportAs: 'cmacsSignature',
                templateUrl: './cmacs-signature.component.html',
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-signature.component.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i0.ChangeDetectorRef }]; }, { i18n: [{
            type: Input
        }], signaturePadOptions: [{
            type: Input
        }], extendedVersion: [{
            type: Input
        }], oncancel: [{
            type: Output
        }], onsubmit: [{
            type: Output
        }], signaturePad: [{
            type: ViewChild,
            args: [SignaturePad]
        }], ondrawend: [{
            type: Output
        }], currentValue: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zaWduYXR1cmUvY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zaWduYXR1cmUvY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1hyRCw2QkFBdUM7SUFDckMsOEJBRTBDO0lBQXJDLHVOQUFvQztJQUN2QywrQkFBZ0M7SUFBQSxpQkFBQztJQUFBLGlCQUFPO0lBQ3hDLHdDQUM2QztJQUE5Qix1TkFBNkI7SUFBQyxpQkFBZ0I7SUFDL0QsaUJBQU07SUFDUiwwQkFBZTs7O0lBSEksZUFBK0I7SUFBL0Isb0RBQStCOzs7O0lBTzlDLDZCQUFxQztJQUNuQyx3QkFBNEQ7SUFDNUQsZ0NBQzRCO0lBQXRCLG9OQUFxQjtJQUN6QixZQUNGO0lBQUEsaUJBQU87SUFDVCwwQkFBZTs7O0lBRlgsZUFDRjtJQURFLDJJQUNGOzs7SUFHQSw2QkFBNkQ7SUFDM0QsK0JBQTRFO0lBQUEsWUFBK0I7SUFBQSxpQkFBTTtJQUNuSCwwQkFBZTs7O0lBRCtELGVBQStCO0lBQS9CLHlEQUErQjs7O0lB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bnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBWaWV3Q2hpbGQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBTaWduYXR1cmVQYWQgfSBmcm9tICdhbmd1bGFyMi1zaWduYXR1cmVwYWQnO1xyXG5pbXBvcnQgeyBOelVwbG9hZEZpbGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3VwbG9hZCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX0xPQ0FMSVpBVElPTiA9IHtcclxuICAnQ2xpY2sgaGVyZSB0byBzaWduJzogJ0NsaWNrIGhlcmUgdG8gc2lnbicsXHJcbiAgJ1NpZ24gdG8gQ29tcGxldGUnOiAnU2lnbiB0byBDb21wbGV0ZScsXHJcbiAgJ0NhbmNlbCc6ICdDYW5jZWwnLFxyXG4gICdWZXJpZnknOiAnVmVyaWZ5JyxcclxuICAnRW50ZXIgWW91ciBOYW1lJzogJ0VudGVyIFlvdXIgTmFtZScsXHJcbiAgJ1RleHQgSGVyZSc6ICdUZXh0IEhlcmUnLFxyXG4gICdUeXBlJzogJ1R5cGUnLFxyXG4gICdEcmF3JzogJ0RyYXcnLFxyXG4gICdJbWFnZSc6ICdJbWFnZScsXHJcbiAgJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJzogJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJyxcclxuICAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nOiAnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nLFxyXG4gICdTaWduYXR1cmUnOiAnU2lnbmF0dXJlJyxcclxuICAnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJzogJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcicsXHJcbiAgJ0Jyb3dzZSBDb21wdXRlcic6ICdCcm93c2UgQ29tcHV0ZXInXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNpZ25hdHVyZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NpZ25hdHVyZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNpZ25hdHVyZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NpZ25hdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBfaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgc2F2ZVNpZ25hdHVyZSA9IHRydWU7XHJcbiAgX2kxOG4gPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG4gIGN1cnJlbnQgPSAwO1xyXG4gIGZpbGVzOiBhbnlbXSA9IFtdO1xyXG4gIF9zaWduYXR1cmVEYXRhVXJsOiBhbnkgPSBudWxsO1xyXG4gIF9jdXJyZW50VmFsdWUgPSBudWxsO1xyXG4gIF9zaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7XHJcbiAgICAnZG90U2l6ZSc6IDAuNCxcclxuICAgICdjYW52YXNXaWR0aCc6IDQyMCxcclxuICAgICdjYW52YXNIZWlnaHQnOiAxMjZcclxuICB9O1xyXG4gIF91cGxvYWRlZEltYWdlU3JjOiBhbnkgPSBudWxsO1xyXG4gIF91cGxvYWRlZEltYWdlU3JjU3R5bGU6IGFueSA9IHt9O1xyXG5cclxuICBASW5wdXQoKSBpMThuOiBhbnkgPSBTSUdOQVRVUkVfTE9DQUxJWkFUSU9OO1xyXG4gIEBJbnB1dCgpIHNpZ25hdHVyZVBhZE9wdGlvbnM6IE9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIGV4dGVuZGVkVmVyc2lvbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYW5jZWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb25zdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQFZpZXdDaGlsZChTaWduYXR1cmVQYWQpIHNpZ25hdHVyZVBhZCE6IFNpZ25hdHVyZVBhZDtcclxuICBAT3V0cHV0KCkgb25kcmF3ZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjdXJyZW50VmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgb25SZXNpemVTdG9wKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGUuc2l6ZSA9ICRldmVudC5zaXplO1xyXG4gIH1cclxuXHJcbiAgb25Nb3ZlRW5kKCRldmVudDogYW55KSB7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGUucG9zaXRpb24gPSAkZXZlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgYmVmb3JlVXBsb2FkID0gKGZpbGU6IE56VXBsb2FkRmlsZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgdGhpcy5maWxlcyA9IFtmaWxlXTtcclxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gKGZpbGUubmFtZSB8fCAnJykgYXMgc3RyaW5nO1xyXG4gICAgaWYgKCF1cmwpIHtcclxuICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLmV4dG5hbWUodXJsKTtcclxuXHJcbiAgICBpZiAoLyh3ZWJwfHN2Z3xwbmd8Z2lmfGpwZ3xqcGVnfGJtcCkkL2kudGVzdChleHRlbnNpb24pKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIGZpbGUubGlua1Byb3BzID0gdHlwZW9mIGZpbGUubGlua1Byb3BzID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZmlsZS5saW5rUHJvcHMpIDogZmlsZS5saW5rUHJvcHM7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fdXBsb2FkZWRJbWFnZVNyYyA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBibG9iID0gZmlsZSBhcyBhbnk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZXh0bmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB0ZW1wID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IGZpbGVuYW1lV2l0aG91dFN1ZmZpeCA9IGZpbGVuYW1lLnNwbGl0KC8jfFxcPy8pWzBdO1xyXG4gICAgcmV0dXJuICgvXFwuW14uL1xcXFxdKiQvLmV4ZWMoZmlsZW5hbWVXaXRob3V0U3VmZml4KSB8fCBbJyddKVswXTtcclxuICB9XHJcblxyXG5cclxuICBpc1ZhbGlkKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnQpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIHJldHVybiAhdGhpcy5mb3JtR3JvdXAudmFsaWQ7XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3NpZ25hdHVyZURhdGFVcmw7XHJcbiAgICAgIGNhc2UgMjpcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3VwbG9hZGVkSW1hZ2VTcmM7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50KGlkeDogYW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBpZHg7XHJcbiAgfVxyXG5cclxuICBkcmF3Q29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5leHRlbmRlZFZlcnNpb24pIHtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlRGF0YVVybCA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZHJhd2VuZC5lbWl0KHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleV0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNba2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xyXG4gICAgdGhpcy5zYXZlU2lnbmF0dXJlID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSBudWxsO1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjID0gbnVsbDtcclxuICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmNTdHlsZSA9IHt9O1xyXG4gICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB7fTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgdmFsdWUuc2F2ZUZvckZ1dHVyZVVzZSA9IHRoaXMuc2F2ZVNpZ25hdHVyZTtcclxuICAgICAgdmFsdWUudXNlclNpZ25hdHVyZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAndHlwZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAxKSB7XHJcbiAgICAgIHZhbHVlLnNhdmVGb3JGdXR1cmVVc2UgPSB0aGlzLnNhdmVTaWduYXR1cmU7XHJcbiAgICAgIHZhbHVlLnVzZXJTaWduYXR1cmUgPSB0aGlzLl9zaWduYXR1cmVEYXRhVXJsO1xyXG4gICAgICB2YWx1ZS5zaWduYXR1cmVUeXBlID0gJ2RyYXcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMikge1xyXG4gICAgICB2YWx1ZS5zYXZlRm9yRnV0dXJlVXNlID0gdGhpcy5zYXZlU2lnbmF0dXJlO1xyXG4gICAgICB2YWx1ZS51c2VyU2lnbmF0dXJlID0gdGhpcy5fdXBsb2FkZWRJbWFnZVNyYztcclxuICAgICAgdmFsdWUuc2lnbmF0dXJlSW1nU3R5bGUgPSB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uc3VibWl0LmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrUHJlc3NlZEtleXMoJGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT09IDkwICYmICRldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFleHRlbmRlZFZlcnNpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24td3JhcHBlciBjbWFjcy1zaWduYXR1cmUtcGFkXCJcclxuICAgICAgIHRhYmluZGV4PScxJ1xyXG4gICAgICAgKGtleWRvd24pPVwiY2hlY2tQcmVzc2VkS2V5cygkZXZlbnQpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS14XCI+WDwvc3Bhbj5cclxuICAgIDxzaWduYXR1cmUtcGFkIFtvcHRpb25zXT1cInNpZ25hdHVyZVBhZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uRW5kRXZlbnQpPVwiZHJhd0NvbXBsZXRlKClcIj48L3NpZ25hdHVyZS1wYWQ+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4dGVuZGVkVmVyc2lvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfY3VycmVudFZhbHVlXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLWNsb3NlLWljb24gaWNvblVJU21hbGwtRXhjZWxcIj48L2k+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCI+XHJcbiAgICAgICAge3tpMThuWydDbGljayBoZXJlIHRvIHNpZ24nXSA/IGkxOG5bJ0NsaWNrIGhlcmUgdG8gc2lnbiddIDogX2kxOG5bJ0NsaWNrIGhlcmUgdG8gc2lnbiddfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVUeXBlID09PSAndHlwZSdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24taW5wdXQgY21hY3Mtc2lnbmF0dXJlLWlucHV0LXVzZXJTaWduYXR1cmVcIj57e19jdXJyZW50VmFsdWUudXNlclNpZ25hdHVyZX19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVUeXBlID09PSAnZHJhdydcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiY2VudGVyZWRcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgbWF4LXdpZHRoOiBpbmhlcml0XCIgW3NyY109XCJfY3VycmVudFZhbHVlLnVzZXJTaWduYXR1cmVcIiBhbHQ9XCJ7e19jdXJyZW50VmFsdWUudXNlclNpZ25hdHVyZX19XCIgLz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfY3VycmVudFZhbHVlLnNpZ25hdHVyZVR5cGUgPT09ICdpbWFnZSdcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiY2VudGVyZWRcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgbWF4LXdpZHRoOiBpbmhlcml0XCIgIGFsdD1cInt7X2N1cnJlbnRWYWx1ZS51c2VyU2lnbmF0dXJlfX1cIiAgICAgICAgXHJcbiAgICAgICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVJbWdTdHlsZS5zaXplID8gX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVJbWdTdHlsZS5zaXplLndpZHRoIDogbnVsbFwiXHJcbiAgICAgICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIl9jdXJyZW50VmFsdWUuc2lnbmF0dXJlSW1nU3R5bGUuc2l6ZSA/IF9jdXJyZW50VmFsdWUuc2lnbmF0dXJlSW1nU3R5bGUuc2l6ZS5oZWlnaHQgOiBudWxsXCJcclxuICAgICAgICAgICAgIFtzcmNdPVwiX2N1cnJlbnRWYWx1ZS51c2VyU2lnbmF0dXJlXCJcclxuICAgICAgIC8+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxjbWFjcy1tb2RhbFxyXG4gICAgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtbW9kYWxcIlxyXG4gICAgbW9kYWxUeXBlPVwiaGVscGZ1bFRpcHNOb1BhbmVsXCJcclxuICAgIFsodmlzaWJsZSldPVwiX2lzVmlzaWJsZVwiXHJcbiAgICBbd2lkdGhdPVwiJzU3MHB4J1wiXHJcbiAgICB0aXRsZT1cInt7aTE4blsnU2lnbiB0byBDb21wbGV0ZSddID8gaTE4blsnU2lnbiB0byBDb21wbGV0ZSddIDogX2kxOG5bJ1NpZ24gdG8gQ29tcGxldGUnXX19XCJcclxuICAgIChvbkNhbmNlbCk9XCJoYW5kbGVDYW5jZWwoKVwiXHJcbiAgICBbZm9vdGVyXT1cIm1vZGFsRm9vdGVyXCI+XHJcblxyXG4gICAgPGRpdiBjbWFjcy1tb2RhbC1oZWxwZnVsVGlwcy1uby1wYW5lbC1jZW50ZXI+XHJcbiAgICAgICAgPGNtYWNzLXRhYnNldCBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS10YWJzZXQgY21hY3Mtd2lkdGgtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbWFjc1NlbGVjdGVkSW5kZXhdPVwiY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJ1cGRhdGVDdXJyZW50KCRldmVudClcIj5cclxuXHJcbiAgICAgICAgICA8IS0tVHlwZSBQYW5lLS0+XHJcbiAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2kxOG5bJ1R5cGUnXSA/IGkxOG5bJ1R5cGUnXSA6IF9pMThuWydUeXBlJ119fVwiID5cclxuICAgICAgICAgICAgPGZvcm0gY21hY3MtZm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbWFjc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICB7e2kxOG5bJ0VudGVyIFlvdXIgTmFtZSddID8gaTE4blsnRW50ZXIgWW91ciBOYW1lJ10gOiBfaTE4blsnRW50ZXIgWW91ciBOYW1lJ119fVxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1mb3JtLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLWZvcm0tY29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXVzZXJuYW1lLWlucHV0XCIgY21hY3MtaW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCIndXNlcm5hbWUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tpMThuWydUZXh0IEhlcmUnXSA/IGkxOG5bJ1RleHQgSGVyZSddIDogX2kxOG5bJ1RleHQgSGVyZSddfX1cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9jbWFjcy1mb3JtLWNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1mb3JtLWl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtc2lnbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS14XCI+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtc2lnbi1pbnB1dFwiICpuZ0lmPVwiZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWUgJiYgZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWUubGVuZ3RoXCI+e3tmb3JtR3JvdXAuZ2V0KCd1c2VybmFtZScpIS52YWx1ZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24taW5wdXQgY21hY3MtaW52aXNpYmxlLWZvbnRcIiAqbmdJZj1cIiFmb3JtR3JvdXAuZ2V0KCd1c2VybmFtZScpIS52YWx1ZSB8fCAoZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWUgJiYgIWZvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykhLnZhbHVlLmxlbmd0aClcIj5UZXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdGV4dCBjbWFjcy1zaWduYXR1cmUtdGV4dC1mb3JtYXRcIj5cclxuICAgICAgICAgICAgICB7e2kxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ10gPyBpMThuWydJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LiddIDogX2kxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ119fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXRleHRcIiBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNhdmVTaWduYXR1cmVcIj5cclxuICAgICAgICAgICAgICB7e2kxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ10gPyBpMThuWydTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLiddIDogX2kxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ119fVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICA8IS0tVHlwZSBQYW5lLS0+XHJcblxyXG4gICAgICAgICAgPCEtLURyYXcgcGFuZS0tPlxyXG4gICAgICAgICAgPGNtYWNzLXRhYiBjbWFjc1RpdGxlPVwie3tpMThuWydEcmF3J10gPyBpMThuWydEcmF3J10gOiBfaTE4blsnRHJhdyddfX1cIj5cclxuXHJcbiAgICAgICAgICAgIDxjbWFjcy1mb3JtLWl0ZW0gY2xhc3M9XCJjbWFjcy1uby1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbWFjc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAge3tpMThuWydTaWduYXR1cmUnXSA/IGkxOG5bJ1NpZ25hdHVyZSddIDogX2kxOG5bJ1NpZ25hdHVyZSddfX1cclxuICAgICAgICAgICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgICAgICAgIDwvY21hY3MtZm9ybS1pdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24td3JhcHBlciBjbWFjcy1zaWduYXR1cmUtcGFkXCJcclxuICAgICAgICAgICAgICAgICB0YWJpbmRleD0nMSdcclxuICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJjaGVja1ByZXNzZWRLZXlzKCRldmVudClcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS14XCI+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c2lnbmF0dXJlLXBhZCBbb3B0aW9uc109XCJfc2lnbmF0dXJlUGFkT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRW5kRXZlbnQpPVwiZHJhd0NvbXBsZXRlKClcIj48L3NpZ25hdHVyZS1wYWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXRleHQgY21hY3Mtc2lnbmF0dXJlLXRleHQtZm9ybWF0XCI+XHJcbiAgICAgICAgICAgICAge3tpMThuWydJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LiddID8gaTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXSA6IF9pMThuWydJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LiddfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS10ZXh0XCIgY21hY3MtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzYXZlU2lnbmF0dXJlXCI+XHJcbiAgICAgICAgICAgICAge3tpMThuWydTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLiddID8gaTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXSA6IF9pMThuWydTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLiddfX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvY21hY3MtdGFiPlxyXG4gICAgICAgICAgPCEtLURyYXcgcGFuZS0tPlxyXG5cclxuICAgICAgICAgIDwhLS1JbWFnZSBwYW5lLS0+XHJcbiAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2kxOG5bJ0ltYWdlJ10gPyBpMThuWydJbWFnZSddIDogX2kxOG5bJ0ltYWdlJ119fVwiPlxyXG4gICAgICAgICAgICA8Y21hY3MtZm9ybS1pdGVtIGNsYXNzPVwiY21hY3Mtbm8tbWFyZ2luXCI+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWZvcm0tbGFiZWwgY21hY3NSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIHt7aTE4blsnU2lnbmF0dXJlJ10gPyBpMThuWydTaWduYXR1cmUnXSA6IF9pMThuWydTaWduYXR1cmUnXX19XHJcbiAgICAgICAgICAgICAgPC9jbWFjcy1mb3JtLWxhYmVsPlxyXG4gICAgICAgICAgICA8L2NtYWNzLWZvcm0taXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX3VwbG9hZGVkSW1hZ2VTcmNcIj5cclxuICAgICAgICAgICAgICAgIDxuei11cGxvYWRcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXVwbG9hZC1hcmVhXCJcclxuICAgICAgICAgICAgICAgIG56VHlwZT1cImRyYWdcIlxyXG4gICAgICAgICAgICAgICAgbnpBY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIFtuek11bHRpcGxlXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIFsobnpGaWxlTGlzdCldPVwiZmlsZXNcIlxyXG4gICAgICAgICAgICAgICAgW256QmVmb3JlVXBsb2FkXT1cImJlZm9yZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3VwbG9hZC1jb21wdXRlci5wbmdcIiBhbHQ9XCJVcGxvYWQgSW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS11cGxvYWQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aTE4blsnRHJhZyAmIERyb3AgRmlsZSBIZXJlIG9yJ10gPyBpMThuWydEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InXSA6IF9pMThuWydEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InXX19XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJCcm93c2UgY29tcHV0ZXJcIj57e2kxOG5bJ0Jyb3dzZSBDb21wdXRlciddID8gaTE4blsnQnJvd3NlIENvbXB1dGVyJ10gOiBfaTE4blsnQnJvd3NlIENvbXB1dGVyJ119fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9uei11cGxvYWQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl91cGxvYWRlZEltYWdlU3JjXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS1zaWduLXdyYXBwZXIgY21hY3Mtc2lnbmF0dXJlLWltYWdlLXNyY1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUteFwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICNkcmFnQm91bmRzXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA0ODBweDsgd2lkdGg6IDQ4MHB4OyBtYXgtaGVpZ2h0OiAxMDBweDsgaGVpZ2h0OiAxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24taW5wdXQgY21hY3Mtc2lnbmF0dXJlLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgbmdSZXNpemFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNDgwcHg7IG1heC1oZWlnaHQ6IDEwMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtaW1nLXdyYXBwZXItcmVzaXphYmxlLWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHJ6SGFuZGxlcz1cIm4scyxlLHcsc2Usc3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5nRHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2JvdW5kc109XCJkcmFnQm91bmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAocnpTdG9wKT1cIm9uUmVzaXplU3RvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoZW5kT2Zmc2V0KT1cIm9uTW92ZUVuZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbaW5Cb3VuZHNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ByZXZlbnREZWZhdWx0RXZlbnRdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJtYXgtd2lkdGg6IDQ4MHB4OyB3aWR0aDogaW5oZXJpdDsgbWF4LWhlaWdodDogMTAwcHg7IGhlaWdodDogaW5oZXJpdFwiIFtzcmNdPVwiX3VwbG9hZGVkSW1hZ2VTcmNcIiBhbHQ9XCJVcGxvYWRlZCBTaWduYXR1cmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS10ZXh0IGNtYWNzLXNpZ25hdHVyZS10ZXh0LWZvcm1hdFwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXSA/IGkxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ10gOiBfaTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdGV4dFwiIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2F2ZVNpZ25hdHVyZVwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXSA/IGkxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ10gOiBfaTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXX19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgIDwhLS1JbWFnZSBwYW5lLS0+XHJcbiAgICAgICAgPC9jbWFjcy10YWJzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9jbWFjcy1tb2RhbD5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNtb2RhbEZvb3Rlcj5cclxuICAgIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgcm9sZT1cImJ1dHRvblwiIGdob3N0IHN0eWxlPVwiZmxvYXQ6IGxlZnQ7XCIgYXJpYS1sYWJlbD1cImNhbmNlbFwiIChjbGljayk9XCJoYW5kbGVDYW5jZWwoKVwiPlxyXG4gICAgICB7e2kxOG5bJ0NhbmNlbCddID8gaTE4blsnQ2FuY2VsJ10gOiBfaTE4blsnQ2FuY2VsJ119fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbiBnaG9zdCByb2xlPVwiYnV0dG9uXCIgdHlwZT1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwidmVyaWZ5XCIgW2Rpc2FibGVkXT1cImlzVmFsaWQoKVwiIChjbGljayk9XCJoYW5kbGVPaygpXCI+XHJcbiAgICAgIDxzcGFuPnt7aTE4blsnVmVyaWZ5J10gPyBpMThuWydWZXJpZnknXSA6IF9pMThuWydWZXJpZnknXX19PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==