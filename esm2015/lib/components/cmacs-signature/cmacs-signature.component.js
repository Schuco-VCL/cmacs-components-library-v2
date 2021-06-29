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
    i0.ɵɵproperty("src", ctx_r16._currentValue.userSignature, i0.ɵɵsanitizeUrl);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r17._currentValue.signatureImgStyle.size ? ctx_r17._currentValue.signatureImgStyle.size.width : null, "px")("height", ctx_r17._currentValue.signatureImgStyle.size ? ctx_r17._currentValue.signatureImgStyle.size.height : null, "px");
    i0.ɵɵproperty("src", ctx_r17._currentValue.userSignature, i0.ɵɵsanitizeUrl);
} }
function CmacsSignatureComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, CmacsSignatureComponent_ng_container_1_ng_container_3_ng_container_3_Template, 2, 5, "ng-container", 0);
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
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.formGroup.get("username").value);
} }
function CmacsSignatureComponent_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1, "Test");
    i0.ɵɵelementEnd();
} }
function CmacsSignatureComponent_ng_container_1_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-upload", 25);
    i0.ɵɵlistener("nzFileListChange", function CmacsSignatureComponent_ng_container_1_ng_container_39_Template_nz_upload_nzFileListChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.files = $event; });
    i0.ɵɵelementStart(2, "span", 26);
    i0.ɵɵelement(3, "img", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 29);
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
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵelementStart(2, "span", 2);
    i0.ɵɵtext(3, "X");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 31, 32);
    i0.ɵɵelementStart(6, "div", 33);
    i0.ɵɵlistener("rzStop", function CmacsSignatureComponent_ng_container_1_ng_container_40_Template_div_rzStop_6_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onResizeStop($event); })("endOffset", function CmacsSignatureComponent_ng_container_1_ng_container_40_Template_div_endOffset_6_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onMoveEnd($event); });
    i0.ɵɵelement(7, "img", 34);
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
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function CmacsSignatureComponent_ng_container_1_ng_template_45_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.handleCancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 36);
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
            this.files = [].concat(file);
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
                console.log(this._uploadedImageSrc);
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
    } }, inputs: { i18n: "i18n", signaturePadOptions: "signaturePadOptions", extendedVersion: "extendedVersion", currentValue: "currentValue" }, outputs: { oncancel: "oncancel", onsubmit: "onsubmit", ondrawend: "ondrawend" }, exportAs: ["cmacsSignature"], decls: 2, vars: 2, consts: [[4, "ngIf"], ["tabindex", "1", 1, "cmacs-signature-sign-wrapper", "cmacs-signature-pad", 3, "keydown"], [1, "cmacs-signature-x"], [3, "options", "onEndEvent"], [1, "cmacs-signature-wrapper"], ["modalType", "helpfulTipsNoPanel", 1, "cmacs-signature-modal", 3, "visible", "width", "title", "footer", "visibleChange", "onCancel"], ["cmacs-modal-helpfulTips-no-panel-center", ""], [1, "cmacs-signature-tabset", "cmacs-width-100", 3, "cmacsSelectedIndex", "selectedIndexChange"], [3, "cmacsTitle"], ["cmacs-form", "", 3, "formGroup"], ["cmacsRequired", ""], ["cmacs-input", "", 1, "cmacs-signature-username-input", 3, "formControlName", "placeholder"], [1, "cmacs-signature-sign-wrapper"], ["class", "cmacs-signature-sign-input", 4, "ngIf"], ["class", "cmacs-signature-sign-input cmacs-invisible-font", 4, "ngIf"], [1, "cmacs-signature-text", "cmacs-signature-text-format"], ["cmacs-checkbox", "", 1, "cmacs-signature-text", 3, "ngModel", "ngModelChange"], [1, "cmacs-no-margin"], ["modalFooter", ""], [1, "cmacs-signature-close-icon", "iconUISmall-Excel"], [1, "cmacs-signature-placeholder", 3, "click"], [1, "cmacs-signature-sign-input", "cmacs-signature-input-userSignature"], [1, "centered", 2, "max-height", "50px !important", "max-width", "inherit", 3, "src"], [1, "cmacs-signature-sign-input"], [1, "cmacs-signature-sign-input", "cmacs-invisible-font"], ["nzType", "drag", "nzAccept", "image/*", 1, "cmacs-signature-upload-area", 3, "nzMultiple", "nzFileList", "nzBeforeUpload", "nzFileListChange"], [1, "ant-upload-drag-icon"], ["src", "assets/images/upload-computer.png"], [1, "cmacs-signature-upload-text"], ["cmacs-button", ""], [1, "cmacs-signature-sign-wrapper", "cmacs-signature-image-src"], [1, "cmacs-signature-sign-input", "cmacs-signature-img-wrapper", 2, "max-width", "480px", "width", "480px", "max-height", "100px", "height", "100px"], ["dragBounds", ""], ["ngResizable", "", "rzHandles", "n,s,e,w,se,sw", "ngDraggable", "", 1, "cmacs-signature-img-wrapper-resizable-area", 2, "max-width", "480px", "max-height", "100px", 3, "bounds", "inBounds", "preventDefaultEvent", "rzStop", "endOffset"], [2, "max-width", "480px", "width", "inherit", "max-height", "100px", "height", "inherit", 3, "src"], ["cmacs-button", "", "type", "default", "ghost", "", 2, "float", "left", 3, "click"], ["cmacs-button", "", "ghost", "", "type", "primary", 3, "disabled", "click"]], template: function CmacsSignatureComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsSignatureComponent_ng_container_0_Template, 5, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, CmacsSignatureComponent_ng_container_1_Template, 47, 30, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.extendedVersion);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extendedVersion);
    } }, directives: [i2.NgIf, i3.SignaturePad, i4.CmacsModalComponent, i5.CmacsTabSetComponent, i6.CmacsTabComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i7.CmacsFormDirective, i1.FormGroupDirective, i8.CmacsFormItemComponent, i9.CmacsFormLabelComponent, i10.CmacsFormControlComponent, i11.CmacsInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i12.CmacsCheckboxComponent, i1.NgModel, i13.NzUploadComponent, i14.CmacsButtonComponent, i15.AngularResizableDirective, i15.AngularDraggableDirective], styles: [".cmacs-signature-wrapper{background-color:#fff;height:58px;border-radius:3px;border:1px solid #dee0e5;width:100%;max-width:100%;text-align:center}.centered{top:50%;position:relative;transform:translateY(-50%)}mwlResizable{box-sizing:border-box}.resize-handle-bottom,.resize-handle-top{position:absolute;height:5px;cursor:row-resize;width:100%}.resize-handle-top{top:0}.resize-handle-bottom{bottom:0}.resize-handle-left,.resize-handle-right{position:absolute;height:100%;cursor:col-resize;width:5px}.resize-handle-left{left:0}.resize-handle-right{right:0}.cmacs-signature-x{font-size:18px;color:#bec4cd}.cmacs-signature-placeholder{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:normal;color:#2a7cff;top:calc(50% - 11px);position:relative}.cmacs-signature-placeholder:hover{cursor:pointer}.cmacs-signature-close-icon{font-family:Roboto-Regular;font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.11;letter-spacing:normal;color:#bec4cd;top:calc(50% - 9px);position:relative}.cmacs-signature-username-input{width:225px!important;display:block!important}.cmacs-signature-sign-wrapper{height:177px;border-radius:3px;border:1px solid #dee0e5;background-color:#f6f7fb;text-align:center;padding-top:45px}.cmacs-invisible-font{color:transparent!important}.cmacs-signature-sign-input,.cmacs-signature-sign-input:focus,.cmacs-signature-sign-input:hover{border-radius:unset;width:88%!important;display:inline-block;max-width:88%;margin-left:8px!important;overflow:hidden;margin:0 auto;text-overflow:clip;white-space:nowrap;border-bottom:1px solid #dee0e5;background-color:#f6f7fb;font-family:AlexBrush,AlexBrush-Regular;font-size:44px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#3b3f46}.cmacs-signature-text{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#656c79!important}.cmacs-signature-text-format{margin-top:15px;margin-bottom:25px}.cmacs-signature-modal .ant-modal-body{height:490px!important}.cmacs-signature-tabset .ant-tabs-bar{border-color:transparent!important}.cmacs-width-100{width:100%}.cmacs-signature-pad{height:231px;padding-top:0}.cmacs-signature-pad signature-pad{border-bottom:1px solid #bec4cd}.cmacs-no-margin{margin:0!important}.cmacs-signature-upload-area .ant-upload.ant-upload-drag{height:231px}.cmacs-signature-upload-text{font-family:Roboto,Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.86;letter-spacing:normal;color:#97a0ae;margin:20px 0!important}.cmacs-signature-image-src{height:231px!important;border-radius:3px!important;border:1px dashed #bec4cd!important}.cmacs-signature-image-src,.cmacs-signature-img-wrapper{background-color:#fff!important}.cmacs-signature-img-wrapper-resizable-area{border:1px dashed #2a7cff;overflow:hidden!important}.cmacs-signature-input-userSignature{border-bottom:none!important;background-color:#fff!important;height:100%!important;overflow:hidden!important;line-height:1!important}"], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zaWduYXR1cmUvY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zaWduYXR1cmUvY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1hyRCw2QkFBdUM7SUFDckMsOEJBRTBDO0lBQXJDLHVOQUFvQztJQUN2QywrQkFBZ0M7SUFBQSxpQkFBQztJQUFBLGlCQUFPO0lBQ3hDLHdDQUM2QztJQUE5Qix1TkFBNkI7SUFBQyxpQkFBZ0I7SUFDL0QsaUJBQU07SUFDUiwwQkFBZTs7O0lBSEksZUFBK0I7SUFBL0Isb0RBQStCOzs7O0lBTzlDLDZCQUFxQztJQUNuQyx3QkFBNEQ7SUFDNUQsZ0NBQzRCO0lBQXRCLG9OQUFxQjtJQUN6QixZQUNGO0lBQUEsaUJBQU87SUFDVCwwQkFBZTs7O0lBRlgsZUFDRjtJQURFLDJJQUNGOzs7SUFHQSw2QkFBNkQ7SUFDM0QsK0JBQTRFO0lBQUEsWUFBK0I7SUFBQSxpQkFBTTtJQUNuSCwwQkFBZTs7O0lBRCtELGVBQStCO0lBQS9CLHlEQUErQjs7O0lB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bEIsTUFBTTtZQUdILFlBQVk7a0JBRGYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgVmlld0NoaWxkLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEFmdGVyVmlld0luaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgU2lnbmF0dXJlUGFkIH0gZnJvbSAnYW5ndWxhcjItc2lnbmF0dXJlcGFkJztcclxuaW1wb3J0IHsgTnpVcGxvYWRGaWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9MT0NBTElaQVRJT04gPSB7XHJcbiAgJ0NsaWNrIGhlcmUgdG8gc2lnbic6ICdDbGljayBoZXJlIHRvIHNpZ24nLFxyXG4gICdTaWduIHRvIENvbXBsZXRlJzogJ1NpZ24gdG8gQ29tcGxldGUnLFxyXG4gICdDYW5jZWwnOiAnQ2FuY2VsJyxcclxuICAnVmVyaWZ5JzogJ1ZlcmlmeScsXHJcbiAgJ0VudGVyIFlvdXIgTmFtZSc6ICdFbnRlciBZb3VyIE5hbWUnLFxyXG4gICdUZXh0IEhlcmUnOiAnVGV4dCBIZXJlJyxcclxuICAnVHlwZSc6ICdUeXBlJyxcclxuICAnRHJhdyc6ICdEcmF3JyxcclxuICAnSW1hZ2UnOiAnSW1hZ2UnLFxyXG4gICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0Lic6ICdJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LicsXHJcbiAgJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJzogJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJyxcclxuICAnU2lnbmF0dXJlJzogJ1NpZ25hdHVyZScsXHJcbiAgJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvcic6ICdEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InLFxyXG4gICdCcm93c2UgQ29tcHV0ZXInOiAnQnJvd3NlIENvbXB1dGVyJ1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zaWduYXR1cmUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTaWduYXR1cmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zaWduYXR1cmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2lnbmF0dXJlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTaWduYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgX2lzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIHNhdmVTaWduYXR1cmUgPSB0cnVlO1xyXG4gIF9pMThuID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBjdXJyZW50ID0gMDtcclxuICBmaWxlczogYW55W10gPSBbXTtcclxuICBfc2lnbmF0dXJlRGF0YVVybDogYW55ID0gbnVsbDtcclxuICBfY3VycmVudFZhbHVlID0gbnVsbDtcclxuICBfc2lnbmF0dXJlUGFkT3B0aW9uczogT2JqZWN0ID0ge1xyXG4gICAgJ2RvdFNpemUnOiAwLjQsXHJcbiAgICAnY2FudmFzV2lkdGgnOiA0MjAsXHJcbiAgICAnY2FudmFzSGVpZ2h0JzogMTI2XHJcbiAgfTtcclxuICBfdXBsb2FkZWRJbWFnZVNyYzogYW55ID0gbnVsbDtcclxuICBfdXBsb2FkZWRJbWFnZVNyY1N0eWxlOiBhbnkgPSB7fTtcclxuXHJcbiAgQElucHV0KCkgaTE4bjogYW55ID0gU0lHTkFUVVJFX0xPQ0FMSVpBVElPTjtcclxuICBASW5wdXQoKSBzaWduYXR1cmVQYWRPcHRpb25zOiBPYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBleHRlbmRlZFZlcnNpb24gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIG9uY2FuY2VsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIG9uc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBWaWV3Q2hpbGQoU2lnbmF0dXJlUGFkKSBzaWduYXR1cmVQYWQhOiBTaWduYXR1cmVQYWQ7XHJcbiAgQE91dHB1dCgpIG9uZHJhd2VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY3VycmVudFZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplU3RvcCgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fdXBsb2FkZWRJbWFnZVNyY1N0eWxlLnNpemUgPSAkZXZlbnQuc2l6ZTtcclxuICB9XHJcblxyXG4gIG9uTW92ZUVuZCgkZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5fdXBsb2FkZWRJbWFnZVNyY1N0eWxlLnBvc2l0aW9uID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIGJlZm9yZVVwbG9hZCA9IChmaWxlOiBOelVwbG9hZEZpbGUpOiBib29sZWFuID0+IHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXS5jb25jYXQoZmlsZSk7XHJcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLm5hbWUgfHwgJycpIGFzIHN0cmluZztcclxuICAgIGlmICghdXJsKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5leHRuYW1lKHVybCk7XHJcblxyXG4gICAgaWYgKC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xibXApJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xyXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xyXG4gICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgYmxvYiA9IGZpbGUgYXMgYW55O1xyXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGV4dG5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xyXG4gICAgY29uc3QgZmlsZW5hbWUgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCBmaWxlbmFtZVdpdGhvdXRTdWZmaXggPSBmaWxlbmFtZS5zcGxpdCgvI3xcXD8vKVswXTtcclxuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNWYWxpZCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50KSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICByZXR1cm4gIXRoaXMuZm9ybUdyb3VwLnZhbGlkO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLl9zaWduYXR1cmVEYXRhVXJsO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fdXBsb2FkZWRJbWFnZVNyYylcclxuICAgICAgICByZXR1cm4gIXRoaXMuX3VwbG9hZGVkSW1hZ2VTcmM7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50KGlkeDogYW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSBpZHg7XHJcbiAgfVxyXG5cclxuICBkcmF3Q29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5leHRlbmRlZFZlcnNpb24pIHtcclxuICAgICAgdGhpcy5fc2lnbmF0dXJlRGF0YVVybCA9IHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uZHJhd2VuZC5lbWl0KHRoaXMuc2lnbmF0dXJlUGFkLnRvRGF0YVVSTCgpKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMuX2lzVmlzaWJsZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLl9pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleV0ubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNba2V5XS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xyXG4gICAgdGhpcy5zYXZlU2lnbmF0dXJlID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSBudWxsO1xyXG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcclxuICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB0aGlzLl91cGxvYWRlZEltYWdlU3JjID0gbnVsbDtcclxuICAgIHRoaXMuX3VwbG9hZGVkSW1hZ2VTcmNTdHlsZSA9IHt9O1xyXG4gICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgdGhpcy5vbmNhbmNlbC5lbWl0KHRoaXMuX2lzVmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpIHtcclxuICAgIGNvbnN0IHZhbHVlOiBhbnkgPSB7fTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgdmFsdWUuc2F2ZUZvckZ1dHVyZVVzZSA9IHRoaXMuc2F2ZVNpZ25hdHVyZTtcclxuICAgICAgdmFsdWUudXNlclNpZ25hdHVyZSA9IHRoaXMuZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAndHlwZSc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAxKSB7XHJcbiAgICAgIHZhbHVlLnNhdmVGb3JGdXR1cmVVc2UgPSB0aGlzLnNhdmVTaWduYXR1cmU7XHJcbiAgICAgIHZhbHVlLnVzZXJTaWduYXR1cmUgPSB0aGlzLl9zaWduYXR1cmVEYXRhVXJsO1xyXG4gICAgICB2YWx1ZS5zaWduYXR1cmVUeXBlID0gJ2RyYXcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMikge1xyXG4gICAgICB2YWx1ZS5zYXZlRm9yRnV0dXJlVXNlID0gdGhpcy5zYXZlU2lnbmF0dXJlO1xyXG4gICAgICB2YWx1ZS51c2VyU2lnbmF0dXJlID0gdGhpcy5fdXBsb2FkZWRJbWFnZVNyYztcclxuICAgICAgdmFsdWUuc2lnbmF0dXJlSW1nU3R5bGUgPSB0aGlzLl91cGxvYWRlZEltYWdlU3JjU3R5bGU7XHJcbiAgICAgIHZhbHVlLnNpZ25hdHVyZVR5cGUgPSAnaW1hZ2UnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm9uc3VibWl0LmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy5oYW5kbGVDYW5jZWwoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrUHJlc3NlZEtleXMoJGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICgkZXZlbnQud2hpY2ggPT09IDkwICYmICRldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBkYXRhLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLmZyb21EYXRhKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZURhdGFVcmwgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgdXNlcm5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFleHRlbmRlZFZlcnNpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24td3JhcHBlciBjbWFjcy1zaWduYXR1cmUtcGFkXCJcclxuICAgICAgIHRhYmluZGV4PScxJ1xyXG4gICAgICAgKGtleWRvd24pPVwiY2hlY2tQcmVzc2VkS2V5cygkZXZlbnQpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS14XCI+WDwvc3Bhbj5cclxuICAgIDxzaWduYXR1cmUtcGFkIFtvcHRpb25zXT1cInNpZ25hdHVyZVBhZE9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uRW5kRXZlbnQpPVwiZHJhd0NvbXBsZXRlKClcIj48L3NpZ25hdHVyZS1wYWQ+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4dGVuZGVkVmVyc2lvblwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtd3JhcHBlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfY3VycmVudFZhbHVlXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLWNsb3NlLWljb24gaWNvblVJU21hbGwtRXhjZWxcIj48L2k+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCI+XHJcbiAgICAgICAge3tpMThuWydDbGljayBoZXJlIHRvIHNpZ24nXSA/IGkxOG5bJ0NsaWNrIGhlcmUgdG8gc2lnbiddIDogX2kxOG5bJ0NsaWNrIGhlcmUgdG8gc2lnbiddfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVUeXBlID09PSAndHlwZSdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24taW5wdXQgY21hY3Mtc2lnbmF0dXJlLWlucHV0LXVzZXJTaWduYXR1cmVcIj57e19jdXJyZW50VmFsdWUudXNlclNpZ25hdHVyZX19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVUeXBlID09PSAnZHJhdydcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiY2VudGVyZWRcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgbWF4LXdpZHRoOiBpbmhlcml0XCIgW3NyY109XCJfY3VycmVudFZhbHVlLnVzZXJTaWduYXR1cmVcIiAvPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9jdXJyZW50VmFsdWUuc2lnbmF0dXJlVHlwZSA9PT0gJ2ltYWdlJ1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJjZW50ZXJlZFwiIHN0eWxlPVwibWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50OyBtYXgtd2lkdGg6IGluaGVyaXRcIiAgICAgICAgICBcclxuICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJfY3VycmVudFZhbHVlLnNpZ25hdHVyZUltZ1N0eWxlLnNpemUgPyBfY3VycmVudFZhbHVlLnNpZ25hdHVyZUltZ1N0eWxlLnNpemUud2lkdGggOiBudWxsXCJcclxuICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVJbWdTdHlsZS5zaXplID8gX2N1cnJlbnRWYWx1ZS5zaWduYXR1cmVJbWdTdHlsZS5zaXplLmhlaWdodCA6IG51bGxcIlxyXG4gICAgICAgICAgICAgW3NyY109XCJfY3VycmVudFZhbHVlLnVzZXJTaWduYXR1cmVcIlxyXG4gICAgICAgLz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGNtYWNzLW1vZGFsXHJcbiAgICBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS1tb2RhbFwiXHJcbiAgICBtb2RhbFR5cGU9XCJoZWxwZnVsVGlwc05vUGFuZWxcIlxyXG4gICAgWyh2aXNpYmxlKV09XCJfaXNWaXNpYmxlXCJcclxuICAgIFt3aWR0aF09XCInNTcwcHgnXCJcclxuICAgIHRpdGxlPVwie3tpMThuWydTaWduIHRvIENvbXBsZXRlJ10gPyBpMThuWydTaWduIHRvIENvbXBsZXRlJ10gOiBfaTE4blsnU2lnbiB0byBDb21wbGV0ZSddfX1cIlxyXG4gICAgKG9uQ2FuY2VsKT1cImhhbmRsZUNhbmNlbCgpXCJcclxuICAgIFtmb290ZXJdPVwibW9kYWxGb290ZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNtYWNzLW1vZGFsLWhlbHBmdWxUaXBzLW5vLXBhbmVsLWNlbnRlcj5cclxuICAgICAgICA8Y21hY3MtdGFic2V0IGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXRhYnNldCBjbWFjcy13aWR0aC0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2NtYWNzU2VsZWN0ZWRJbmRleF09XCJjdXJyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZEluZGV4Q2hhbmdlKT1cInVwZGF0ZUN1cnJlbnQoJGV2ZW50KVwiPlxyXG5cclxuICAgICAgICAgIDwhLS1UeXBlIFBhbmUtLT5cclxuICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7aTE4blsnVHlwZSddID8gaTE4blsnVHlwZSddIDogX2kxOG5bJ1R5cGUnXX19XCIgPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbWFjcy1mb3JtIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGNtYWNzLWZvcm0taXRlbT5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNtYWNzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgIHt7aTE4blsnRW50ZXIgWW91ciBOYW1lJ10gPyBpMThuWydFbnRlciBZb3VyIE5hbWUnXSA6IF9pMThuWydFbnRlciBZb3VyIE5hbWUnXX19XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3MtZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdXNlcm5hbWUtaW5wdXRcIiBjbWFjcy1pbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIid1c2VybmFtZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2kxOG5bJ1RleHQgSGVyZSddID8gaTE4blsnVGV4dCBIZXJlJ10gOiBfaTE4blsnVGV4dCBIZXJlJ119fVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLWZvcm0tY29udHJvbD5cclxuICAgICAgICAgICAgICA8L2NtYWNzLWZvcm0taXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS1zaWduLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXhcIj5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS1zaWduLWlucHV0XCIgKm5nSWY9XCJmb3JtR3JvdXAuZ2V0KCd1c2VybmFtZScpIS52YWx1ZSAmJiBmb3JtR3JvdXAuZ2V0KCd1c2VybmFtZScpIS52YWx1ZS5sZW5ndGhcIj57e2Zvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykhLnZhbHVlfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtc2lnbi1pbnB1dCBjbWFjcy1pbnZpc2libGUtZm9udFwiICpuZ0lmPVwiIWZvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykhLnZhbHVlIHx8IChmb3JtR3JvdXAuZ2V0KCd1c2VybmFtZScpIS52YWx1ZSAmJiAhZm9ybUdyb3VwLmdldCgndXNlcm5hbWUnKSEudmFsdWUubGVuZ3RoKVwiPlRlc3Q8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS10ZXh0IGNtYWNzLXNpZ25hdHVyZS10ZXh0LWZvcm1hdFwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXSA/IGkxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ10gOiBfaTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdGV4dFwiIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2F2ZVNpZ25hdHVyZVwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXSA/IGkxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ10gOiBfaTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXX19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgIDwhLS1UeXBlIFBhbmUtLT5cclxuXHJcbiAgICAgICAgICA8IS0tRHJhdyBwYW5lLS0+XHJcbiAgICAgICAgICA8Y21hY3MtdGFiIGNtYWNzVGl0bGU9XCJ7e2kxOG5bJ0RyYXcnXSA/IGkxOG5bJ0RyYXcnXSA6IF9pMThuWydEcmF3J119fVwiPlxyXG5cclxuICAgICAgICAgICAgPGNtYWNzLWZvcm0taXRlbSBjbGFzcz1cImNtYWNzLW5vLW1hcmdpblwiPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy1mb3JtLWxhYmVsIGNtYWNzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICB7e2kxOG5bJ1NpZ25hdHVyZSddID8gaTE4blsnU2lnbmF0dXJlJ10gOiBfaTE4blsnU2lnbmF0dXJlJ119fVxyXG4gICAgICAgICAgICAgIDwvY21hY3MtZm9ybS1sYWJlbD5cclxuICAgICAgICAgICAgPC9jbWFjcy1mb3JtLWl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtc2lnbi13cmFwcGVyIGNtYWNzLXNpZ25hdHVyZS1wYWRcIlxyXG4gICAgICAgICAgICAgICAgIHRhYmluZGV4PScxJ1xyXG4gICAgICAgICAgICAgICAgIChrZXlkb3duKT1cImNoZWNrUHJlc3NlZEtleXMoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXhcIj5YPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzaWduYXR1cmUtcGFkIFtvcHRpb25zXT1cIl9zaWduYXR1cmVQYWRPcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25FbmRFdmVudCk9XCJkcmF3Q29tcGxldGUoKVwiPjwvc2lnbmF0dXJlLXBhZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdGV4dCBjbWFjcy1zaWduYXR1cmUtdGV4dC1mb3JtYXRcIj5cclxuICAgICAgICAgICAgICB7e2kxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ10gPyBpMThuWydJLCBVc2VyIEZ1bGwgTmFtZSwgaGF2ZSByZXZpZXdlZCBhbmQgY29tcGxldGVkIHRoaXMgcmVwb3J0LiddIDogX2kxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ119fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXRleHRcIiBjbWFjcy1jaGVja2JveCBbKG5nTW9kZWwpXT1cInNhdmVTaWduYXR1cmVcIj5cclxuICAgICAgICAgICAgICB7e2kxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ10gPyBpMThuWydTZWxlY3QgaGVyZSB0byBzYXZlIHlvdXIgc2lnbmF0dXJlIGZvciBmdXR1cmUgdXNlLiddIDogX2kxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ119fVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9jbWFjcy10YWI+XHJcbiAgICAgICAgICA8IS0tRHJhdyBwYW5lLS0+XHJcblxyXG4gICAgICAgICAgPCEtLUltYWdlIHBhbmUtLT5cclxuICAgICAgICAgIDxjbWFjcy10YWIgY21hY3NUaXRsZT1cInt7aTE4blsnSW1hZ2UnXSA/IGkxOG5bJ0ltYWdlJ10gOiBfaTE4blsnSW1hZ2UnXX19XCI+XHJcbiAgICAgICAgICAgIDxjbWFjcy1mb3JtLWl0ZW0gY2xhc3M9XCJjbWFjcy1uby1tYXJnaW5cIj5cclxuICAgICAgICAgICAgICA8Y21hY3MtZm9ybS1sYWJlbCBjbWFjc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAge3tpMThuWydTaWduYXR1cmUnXSA/IGkxOG5bJ1NpZ25hdHVyZSddIDogX2kxOG5bJ1NpZ25hdHVyZSddfX1cclxuICAgICAgICAgICAgICA8L2NtYWNzLWZvcm0tbGFiZWw+XHJcbiAgICAgICAgICAgIDwvY21hY3MtZm9ybS1pdGVtPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfdXBsb2FkZWRJbWFnZVNyY1wiPlxyXG4gICAgICAgICAgICAgICAgPG56LXVwbG9hZFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdXBsb2FkLWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgbnpUeXBlPVwiZHJhZ1wiXHJcbiAgICAgICAgICAgICAgICBuekFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgW256TXVsdGlwbGVdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgWyhuekZpbGVMaXN0KV09XCJmaWxlc1wiXHJcbiAgICAgICAgICAgICAgICBbbnpCZWZvcmVVcGxvYWRdPVwiYmVmb3JlVXBsb2FkXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXVwbG9hZC1kcmFnLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvdXBsb2FkLWNvbXB1dGVyLnBuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXVwbG9hZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tpMThuWydEcmFnICYgRHJvcCBGaWxlIEhlcmUgb3InXSA/IGkxOG5bJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvciddIDogX2kxOG5bJ0RyYWcgJiBEcm9wIEZpbGUgSGVyZSBvciddfX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNtYWNzLWJ1dHRvbj57e2kxOG5bJ0Jyb3dzZSBDb21wdXRlciddID8gaTE4blsnQnJvd3NlIENvbXB1dGVyJ10gOiBfaTE4blsnQnJvd3NlIENvbXB1dGVyJ119fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9uei11cGxvYWQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl91cGxvYWRlZEltYWdlU3JjXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS1zaWduLXdyYXBwZXIgY21hY3Mtc2lnbmF0dXJlLWltYWdlLXNyY1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUteFwiPlg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICNkcmFnQm91bmRzXHJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA0ODBweDsgd2lkdGg6IDQ4MHB4OyBtYXgtaGVpZ2h0OiAxMDBweDsgaGVpZ2h0OiAxMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY21hY3Mtc2lnbmF0dXJlLXNpZ24taW5wdXQgY21hY3Mtc2lnbmF0dXJlLWltZy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgbmdSZXNpemFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNDgwcHg7IG1heC1oZWlnaHQ6IDEwMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtaW1nLXdyYXBwZXItcmVzaXphYmxlLWFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHJ6SGFuZGxlcz1cIm4scyxlLHcsc2Usc3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG5nRHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2JvdW5kc109XCJkcmFnQm91bmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAocnpTdG9wKT1cIm9uUmVzaXplU3RvcCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoZW5kT2Zmc2V0KT1cIm9uTW92ZUVuZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbaW5Cb3VuZHNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW3ByZXZlbnREZWZhdWx0RXZlbnRdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJtYXgtd2lkdGg6IDQ4MHB4OyB3aWR0aDogaW5oZXJpdDsgbWF4LWhlaWdodDogMTAwcHg7IGhlaWdodDogaW5oZXJpdFwiIFtzcmNdPVwiX3VwbG9hZGVkSW1hZ2VTcmNcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXNpZ25hdHVyZS10ZXh0IGNtYWNzLXNpZ25hdHVyZS10ZXh0LWZvcm1hdFwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXSA/IGkxOG5bJ0ksIFVzZXIgRnVsbCBOYW1lLCBoYXZlIHJldmlld2VkIGFuZCBjb21wbGV0ZWQgdGhpcyByZXBvcnQuJ10gOiBfaTE4blsnSSwgVXNlciBGdWxsIE5hbWUsIGhhdmUgcmV2aWV3ZWQgYW5kIGNvbXBsZXRlZCB0aGlzIHJlcG9ydC4nXX19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjbWFjcy1zaWduYXR1cmUtdGV4dFwiIGNtYWNzLWNoZWNrYm94IFsobmdNb2RlbCldPVwic2F2ZVNpZ25hdHVyZVwiPlxyXG4gICAgICAgICAgICAgIHt7aTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXSA/IGkxOG5bJ1NlbGVjdCBoZXJlIHRvIHNhdmUgeW91ciBzaWduYXR1cmUgZm9yIGZ1dHVyZSB1c2UuJ10gOiBfaTE4blsnU2VsZWN0IGhlcmUgdG8gc2F2ZSB5b3VyIHNpZ25hdHVyZSBmb3IgZnV0dXJlIHVzZS4nXX19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2NtYWNzLXRhYj5cclxuICAgICAgICAgIDwhLS1JbWFnZSBwYW5lLS0+XHJcbiAgICAgICAgPC9jbWFjcy10YWJzZXQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9jbWFjcy1tb2RhbD5cclxuXHJcbiAgPG5nLXRlbXBsYXRlICNtb2RhbEZvb3Rlcj5cclxuICAgIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgZ2hvc3Qgc3R5bGU9XCJmbG9hdDogbGVmdDtcIiAoY2xpY2spPVwiaGFuZGxlQ2FuY2VsKClcIj5cclxuICAgICAge3tpMThuWydDYW5jZWwnXSA/IGkxOG5bJ0NhbmNlbCddIDogX2kxOG5bJ0NhbmNlbCddfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbWFjcy1idXR0b24gZ2hvc3QgdHlwZT1cInByaW1hcnlcIiBbZGlzYWJsZWRdPVwiaXNWYWxpZCgpXCIgKGNsaWNrKT1cImhhbmRsZU9rKClcIj5cclxuICAgICAgPHNwYW4+e3tpMThuWydWZXJpZnknXSA/IGkxOG5bJ1ZlcmlmeSddIDogX2kxOG5bJ1ZlcmlmeSddfX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L25nLXRlbXBsYXRlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19