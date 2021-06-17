import { __decorate } from "tslib";
import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, TemplateRef, Type, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MODAL_CONFIG } from './cmacs-modal-config';
import { CmacsModalRef } from './cmacs-modal-ref.class';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isPromise } from 'ng-zorro-antd/core/util';
import { getElementOffset } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "./cmacs-modal-control.service";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/no-animation";
import * as i7 from "@angular/cdk/drag-drop";
import * as i8 from "ng-zorro-antd/core/wave";
import * as i9 from "ng-zorro-antd/button";
import * as i10 from "ng-zorro-antd/core/transition-patch";
import * as i11 from "ng-zorro-antd/grid";
import * as i12 from "ng-zorro-antd/icon";
import * as i13 from "./cmacs-to-css-unit.pipe";
const _c0 = ["modalContainer"];
const _c1 = ["bodyContainer"];
const _c2 = ["autoFocusButtonOk"];
const _c3 = ["tipsCreationWizard"];
function CmacsModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function CmacsModalComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("z-index", ctx_r16.zIndex);
    i0.ɵɵclassProp("ant-modal-mask-hidden", ctx_r16.hidden);
    i0.ɵɵproperty("ngClass", ctx_r16.maskAnimationClassMap)("ngStyle", ctx_r16.maskStyle);
} }
function CmacsModalComponent_div_2_button_7_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("ant-modal-close-x", !ctx_r20.isModalType("basic"))("ant-modal-close-x-basic", ctx_r20.isModalType("basic"));
} }
function CmacsModalComponent_div_2_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function CmacsModalComponent_div_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onClickCloseBtn(); });
    i0.ɵɵtemplate(1, CmacsModalComponent_div_2_button_7_span_1_Template, 2, 4, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.isModalType("passive") || ctx_r18.isModalType("interaction") || ctx_r18.isModalType("basic"));
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r6 = i0.ɵɵreference(7);
    i0.ɵɵproperty("ngTemplateOutlet", _r6);
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r14 = i0.ɵɵreference(15);
    i0.ɵɵproperty("ngTemplateOutlet", _r14);
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r8 = i0.ɵɵreference(9);
    i0.ɵɵproperty("ngTemplateOutlet", _r8);
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r10 = i0.ɵɵreference(11);
    i0.ɵɵproperty("ngTemplateOutlet", _r10);
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r12 = i0.ɵɵreference(13);
    i0.ɵɵproperty("ngTemplateOutlet", _r12);
} }
function CmacsModalComponent_div_2_ng_container_8_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r4 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r4);
} }
function CmacsModalComponent_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, CmacsModalComponent_div_2_ng_container_8_ng_container_1_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(2, CmacsModalComponent_div_2_ng_container_8_ng_container_2_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(3, CmacsModalComponent_div_2_ng_container_8_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_div_2_ng_container_8_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_div_2_ng_container_8_ng_container_5_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(6, CmacsModalComponent_div_2_ng_container_8_ng_container_6_Template, 1, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("transactional"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("confirm"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("creation"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("helpfulTips"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("helpfulTipsNoPanel") || ctx_r19.isModalType("basic"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r19.isModalType("passive") || ctx_r19.isModalType("interaction"));
} }
function CmacsModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsModalComponent_div_2_div_1_Template, 1, 6, "div", 10);
    i0.ɵɵelementStart(2, "div", 11);
    i0.ɵɵlistener("click", function CmacsModalComponent_div_2_Template_div_click_2_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.onClickMask($event); });
    i0.ɵɵelementStart(3, "div", 12, 13);
    i0.ɵɵpipe(5, "cmacsToCssUnit");
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵtemplate(7, CmacsModalComponent_div_2_button_7_Template, 2, 1, "button", 15);
    i0.ɵɵtemplate(8, CmacsModalComponent_div_2_ng_container_8_Template, 7, 7, "ng-container", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzNoAnimation", ctx_r2.noAnimation);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.mask);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("ant-modal-wrap ", ctx_r2.wrapClassName, " model-wrapper");
    i0.ɵɵstyleProp("z-index", ctx_r2.zIndex)("visibility", ctx_r2.hidden ? "hidden" : null);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r2.modalAnimationClassMap);
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(5, 19, ctx_r2.width))("transform-origin", ctx_r2.transformOrigin);
    i0.ɵɵproperty("ngClass", ctx_r2.getClass())("ngStyle", ctx_r2.cmacsStyle);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r2.closable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.hidden);
} }
function CmacsModalComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.title);
} }
function CmacsModalComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r32.cmacsTitle);
} }
function CmacsModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵpipe(2, "cmacsToCssUnit");
    i0.ɵɵelementStart(3, "div", 26);
    i0.ɵɵelementStart(4, "button", 18);
    i0.ɵɵlistener("click", function CmacsModalComponent_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.closeInteraction(); });
    i0.ɵɵelementStart(5, "span", 27);
    i0.ɵɵelement(6, "i", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 28);
    i0.ɵɵelementStart(8, "div", 29);
    i0.ɵɵtemplate(9, CmacsModalComponent_div_3_div_9_Template, 2, 1, "div", 2);
    i0.ɵɵtemplate(10, CmacsModalComponent_div_3_div_10_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 30);
    i0.ɵɵelementContainer(12, 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r3.visible ? "inherit" : "none")("z-index", ctx_r3.zIndex)("width", i0.ɵɵpipeBind1(2, 10, ctx_r3.width));
    i0.ɵɵproperty("ngStyle", ctx_r3.cmacsStyle);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", !ctx_r3.isNonEmptyString(ctx_r3.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isNonEmptyString(ctx_r3.cmacsTitle));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsModalComponent_ng_template_4_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r38.title);
} }
function CmacsModalComponent_ng_template_4_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r39.cmacsTitle);
} }
function CmacsModalComponent_ng_template_4_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r40.title);
} }
function CmacsModalComponent_ng_template_4_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r41.cmacsTitle);
} }
function CmacsModalComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_4_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_4_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_4_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_4_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("padding", ctx_r35.modalType === "passive" ? "6px 20px" : "7px 10px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r35.isTemplateRef(ctx_r35.title) && !ctx_r35.isTemplateRef(ctx_r35.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r35.isTemplateRef(ctx_r35.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r35.isNonEmptyString(ctx_r35.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r35.isNonEmptyString(ctx_r35.cmacsTitle));
} }
function CmacsModalComponent_ng_template_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r42.content);
} }
function CmacsModalComponent_ng_template_4_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r43 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r43.content);
} }
function CmacsModalComponent_ng_template_4_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsModalComponent_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_4_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_4_ng_container_4_ng_container_2_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_4_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r37.isTemplateRef(ctx_r37.content));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r37.isNonEmptyString(ctx_r37.content));
} }
function CmacsModalComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_4_div_0_Template, 7, 7, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementContainerStart(2, null, 33);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_4_ng_container_4_Template, 4, 3, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r5.title || ctx_r5.cmacsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("padding", ctx_r5.modalType === "passive" ? "24px 10px 46px 20px" : "0");
    i0.ɵɵproperty("ngStyle", ctx_r5.bodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r5.isComponent(ctx_r5.content));
} }
function CmacsModalComponent_ng_template_6_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r49.title);
} }
function CmacsModalComponent_ng_template_6_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r50.cmacsTitle);
} }
function CmacsModalComponent_ng_template_6_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r51.title);
} }
function CmacsModalComponent_ng_template_6_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r52.cmacsTitle);
} }
function CmacsModalComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_6_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_6_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_6_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_6_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("height", ctx_r45.modalType === "transactional" ? 30 : 50, "px")("padding", ctx_r45.modalType === "transactional" ? "6px 20px" : "16px 40px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r45.isTemplateRef(ctx_r45.title) && !ctx_r45.isTemplateRef(ctx_r45.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r45.isTemplateRef(ctx_r45.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r45.isNonEmptyString(ctx_r45.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r45.isNonEmptyString(ctx_r45.cmacsTitle));
} }
function CmacsModalComponent_ng_template_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r53.content);
} }
function CmacsModalComponent_ng_template_6_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r54.content);
} }
function CmacsModalComponent_ng_template_6_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsModalComponent_ng_template_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_6_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_6_ng_container_4_ng_container_2_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_6_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r47.isTemplateRef(ctx_r47.content));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r47.isNonEmptyString(ctx_r47.content));
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r56.footer);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r57.footer);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r63); const button_r61 = ctx.$implicit; const ctx_r62 = i0.ɵɵnextContext(4); return ctx_r62.onButtonClick(button_r61); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r61 = ctx.$implicit;
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r60.getButtonCallableProp(button_r61, "show"))("nzLoading", ctx_r60.getButtonCallableProp(button_r61, "loading"))("disabled", ctx_r60.getButtonCallableProp(button_r61, "disabled"))("nzType", button_r61.type)("nzShape", button_r61.shape)("nzSize", button_r61.size)("nzGhost", button_r61.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r61.label);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_6_div_5_ng_container_4_button_1_Template, 2, 8, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r58.footer);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(4); return ctx_r66.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r64.cancelLoading)("disabled", ctx_r64.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r64.cancelText, " ");
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(4); return ctx_r68.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r65.okType)("nzLoading", ctx_r65.okLoading)("disabled", ctx_r65.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r65.okText, " ");
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template, 2, 3, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template, 2, 4, "button", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.cmacsCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r59.cmacsOkText !== null);
} }
function CmacsModalComponent_ng_template_6_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵelementContainerStart(1, 22);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_6_div_5_ng_container_2_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_6_div_5_ng_container_3_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_6_div_5_ng_container_4_Template, 2, 1, "ng-container", 36);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_6_div_5_ng_container_5_Template, 3, 2, "ng-container", 43);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("border-top", ctx_r48.modalType === "transactional" ? "none" : "inherit")("padding-bottom", ctx_r48.modalType === "transactional" || ctx_r48.modalType === "passive" ? "20px" : "inherit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r48.isTemplateRef(ctx_r48.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r48.isNonEmptyString(ctx_r48.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r48.isModalButtons(ctx_r48.footer));
} }
function CmacsModalComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_6_div_0_Template, 7, 9, "div", 38);
    i0.ɵɵelementStart(1, "div", 39);
    i0.ɵɵelementContainerStart(2, null, 33);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_6_ng_container_4_Template, 4, 3, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_6_div_5_Template, 6, 8, "div", 40);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r7.title || ctx_r7.cmacsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r7.bodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r7.isComponent(ctx_r7.content));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.footer !== null);
} }
function CmacsModalComponent_ng_template_8_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r73.title);
} }
function CmacsModalComponent_ng_template_8_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r74.cmacsTitle);
} }
function CmacsModalComponent_ng_template_8_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r75.title);
} }
function CmacsModalComponent_ng_template_8_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r76 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r76.cmacsTitle);
} }
function CmacsModalComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_8_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_8_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_8_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_8_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r70.isTemplateRef(ctx_r70.title) && !ctx_r70.isTemplateRef(ctx_r70.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r70.isTemplateRef(ctx_r70.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r70.isNonEmptyString(ctx_r70.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r70.isNonEmptyString(ctx_r70.cmacsTitle));
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r77.footer);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r78.footer);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r84); const button_r82 = ctx.$implicit; const ctx_r83 = i0.ɵɵnextContext(4); return ctx_r83.onButtonClick(button_r82); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r82 = ctx.$implicit;
    const ctx_r81 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r81.getButtonCallableProp(button_r82, "show"))("nzLoading", ctx_r81.getButtonCallableProp(button_r82, "loading"))("disabled", ctx_r81.getButtonCallableProp(button_r82, "disabled"))("nzType", button_r82.type)("nzShape", button_r82.shape)("nzSize", button_r82.size)("nzGhost", button_r82.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r82.label);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_8_div_10_ng_container_4_button_1_Template, 2, 8, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r79 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r79.footer);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(4); return ctx_r87.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r85.cancelLoading)("disabled", ctx_r85.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r85.cancelText, " ");
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(4); return ctx_r89.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r86.okType)("nzLoading", ctx_r86.okLoading)("disabled", ctx_r86.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r86.okText, " ");
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template, 2, 3, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template, 2, 4, "button", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r80 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r80.cmacsCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r80.cmacsOkText !== null);
} }
function CmacsModalComponent_ng_template_8_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59);
    i0.ɵɵelementContainerStart(1, 22);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_8_div_10_ng_container_2_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_8_div_10_ng_container_3_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_8_div_10_ng_container_4_Template, 2, 1, "ng-container", 36);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_8_div_10_ng_container_5_Template, 3, 2, "ng-container", 43);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r72.isTemplateRef(ctx_r72.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r72.isNonEmptyString(ctx_r72.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r72.isModalButtons(ctx_r72.footer));
} }
function CmacsModalComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_8_div_0_Template, 7, 5, "div", 50);
    i0.ɵɵelementStart(1, "div", 51);
    i0.ɵɵelementStart(2, "div", 52);
    i0.ɵɵelementStart(3, "div", 53);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 54);
    i0.ɵɵprojection(6, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 55, 56);
    i0.ɵɵprojection(9, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CmacsModalComponent_ng_template_8_div_10_Template, 6, 4, "div", 57);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r9.title || ctx_r9.cmacsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r9.bodyStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", ctx_r9.showHelpfulTips ? ctx_r9.leftPanelCols : 6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", ctx_r9.showHelpfulTips ? ctx_r9.centerPanelCols : 24 - ctx_r9.leftPanelCols);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("display", ctx_r9.showHelpfulTips ? "inherit" : "none");
    i0.ɵɵproperty("nzSpan", ctx_r9.rightPanelCols);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r9.footer !== null);
} }
function CmacsModalComponent_ng_template_10_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r93.title);
} }
function CmacsModalComponent_ng_template_10_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r94 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r94.cmacsTitle);
} }
function CmacsModalComponent_ng_template_10_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r95 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r95.title);
} }
function CmacsModalComponent_ng_template_10_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r96 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r96.cmacsTitle);
} }
function CmacsModalComponent_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_10_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_10_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_10_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_10_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r91 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r91.isTemplateRef(ctx_r91.title) && !ctx_r91.isTemplateRef(ctx_r91.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r91.isTemplateRef(ctx_r91.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r91.isNonEmptyString(ctx_r91.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r91.isNonEmptyString(ctx_r91.cmacsTitle));
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r97.footer);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r98 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r98.footer);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const button_r102 = ctx.$implicit; const ctx_r103 = i0.ɵɵnextContext(4); return ctx_r103.onButtonClick(button_r102); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r102 = ctx.$implicit;
    const ctx_r101 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r101.getButtonCallableProp(button_r102, "show"))("nzLoading", ctx_r101.getButtonCallableProp(button_r102, "loading"))("disabled", ctx_r101.getButtonCallableProp(button_r102, "disabled"))("nzType", button_r102.type)("nzShape", button_r102.shape)("nzSize", button_r102.size)("nzGhost", button_r102.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r102.label);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_10_div_7_ng_container_4_button_1_Template, 2, 8, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r99 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r99.footer);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r108); const ctx_r107 = i0.ɵɵnextContext(4); return ctx_r107.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r105 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r105.cancelLoading)("disabled", ctx_r105.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r105.cancelText, " ");
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(4); return ctx_r109.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r106.okType)("nzLoading", ctx_r106.okLoading)("disabled", ctx_r106.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r106.okText, " ");
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template, 2, 3, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template, 2, 4, "button", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r100 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r100.cmacsCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r100.cmacsOkText !== null);
} }
function CmacsModalComponent_ng_template_10_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵelementContainerStart(1, 22);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_10_div_7_ng_container_2_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_10_div_7_ng_container_3_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_10_div_7_ng_container_4_Template, 2, 1, "ng-container", 36);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_10_div_7_ng_container_5_Template, 3, 2, "ng-container", 43);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r92.isTemplateRef(ctx_r92.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r92.isNonEmptyString(ctx_r92.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r92.isModalButtons(ctx_r92.footer));
} }
function CmacsModalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_10_div_0_Template, 7, 5, "div", 60);
    i0.ɵɵelementStart(1, "div", 61);
    i0.ɵɵelementStart(2, "div", 52);
    i0.ɵɵelementStart(3, "div", 62);
    i0.ɵɵprojection(4, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 63);
    i0.ɵɵprojection(6, 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsModalComponent_ng_template_10_div_7_Template, 6, 4, "div", 64);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r11.title || ctx_r11.cmacsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r11.bodyStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", ctx_r11.centerPanelCols ? ctx_r11.centerPanelCols : 16);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", ctx_r11.rightPanelCols ? ctx_r11.rightPanelCols : 8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r11.footer !== null);
} }
function CmacsModalComponent_ng_template_12_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r113 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r113.title);
} }
function CmacsModalComponent_ng_template_12_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r114 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r114.cmacsTitle);
} }
function CmacsModalComponent_ng_template_12_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r115 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r115.title);
} }
function CmacsModalComponent_ng_template_12_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r116 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r116.cmacsTitle);
} }
function CmacsModalComponent_ng_template_12_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵelementStart(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_12_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_12_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_12_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_12_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r111 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r111.isTemplateRef(ctx_r111.title) && !ctx_r111.isTemplateRef(ctx_r111.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r111.isTemplateRef(ctx_r111.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r111.isNonEmptyString(ctx_r111.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r111.isNonEmptyString(ctx_r111.cmacsTitle));
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r117 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r117.footer);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r118.footer);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r124 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 45);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r124); const button_r122 = ctx.$implicit; const ctx_r123 = i0.ɵɵnextContext(4); return ctx_r123.onButtonClick(button_r122); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r122 = ctx.$implicit;
    const ctx_r121 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r121.getButtonCallableProp(button_r122, "show"))("nzLoading", ctx_r121.getButtonCallableProp(button_r122, "loading"))("disabled", ctx_r121.getButtonCallableProp(button_r122, "disabled"))("nzType", button_r122.type)("nzShape", button_r122.shape)("nzSize", button_r122.size)("nzGhost", button_r122.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r122.label);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_12_div_5_ng_container_4_button_1_Template, 2, 8, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r119.footer);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r128); const ctx_r127 = i0.ɵɵnextContext(4); return ctx_r127.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzLoading", ctx_r125.cancelLoading)("disabled", ctx_r125.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r125.cancelText, " ");
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r130 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r130); const ctx_r129 = i0.ɵɵnextContext(4); return ctx_r129.onClickOkCancel("ok"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r126 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzType", ctx_r126.okType)("nzLoading", ctx_r126.okLoading)("disabled", ctx_r126.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r126.okText, " ");
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template, 2, 3, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template, 2, 4, "button", 47);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r120 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.cmacsCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r120.cmacsOkText !== null);
} }
function CmacsModalComponent_ng_template_12_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵelementContainerStart(1, 22);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_12_div_5_ng_container_2_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_12_div_5_ng_container_3_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_12_div_5_ng_container_4_Template, 2, 1, "ng-container", 36);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_12_div_5_ng_container_5_Template, 3, 2, "ng-container", 43);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r112 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r112.isTemplateRef(ctx_r112.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r112.isNonEmptyString(ctx_r112.footer));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r112.isModalButtons(ctx_r112.footer));
} }
function CmacsModalComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_12_div_0_Template, 7, 5, "div", 60);
    i0.ɵɵelementStart(1, "div", 61);
    i0.ɵɵelementStart(2, "div", 52);
    i0.ɵɵelementStart(3, "div", 67);
    i0.ɵɵprojection(4, 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_12_div_5_Template, 6, 4, "div", 64);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r13.title || ctx_r13.cmacsTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r13.bodyStyle);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzSpan", 24);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r13.footer !== null);
} }
function CmacsModalComponent_ng_template_14_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r131 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r131.title);
} }
function CmacsModalComponent_ng_template_14_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r132 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r132.cmacsTitle);
} }
function CmacsModalComponent_ng_template_14_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r133 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r133.title);
} }
function CmacsModalComponent_ng_template_14_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r134 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r134.cmacsTitle);
} }
function CmacsModalComponent_ng_template_14_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    const ctx_r138 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r138.content);
} }
function CmacsModalComponent_ng_template_14_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r139 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r139.content);
} }
function CmacsModalComponent_ng_template_14_ng_container_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 24);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsModalComponent_ng_template_14_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_14_ng_container_12_ng_container_1_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_14_ng_container_12_ng_container_2_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_14_ng_container_12_ng_container_3_Template, 1, 1, "ng-container", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r135 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r135.isTemplateRef(ctx_r135.content));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r135.isNonEmptyString(ctx_r135.content));
} }
function CmacsModalComponent_ng_template_14_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_14_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r142); const ctx_r141 = i0.ɵɵnextContext(2); return ctx_r141.onClickOkCancel("cancel"); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzLoading", ctx_r136.cancelLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r136.cancelText, " ");
} }
function CmacsModalComponent_ng_template_14_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77, 78);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_14_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r145); const ctx_r144 = i0.ɵɵnextContext(2); return ctx_r144.onClickOkCancel("ok"); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzType", ctx_r137.okType)("nzLoading", ctx_r137.okLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r137.okText, " ");
} }
function CmacsModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementStart(1, "div", 68);
    i0.ɵɵelementStart(2, "div", 69);
    i0.ɵɵelement(3, "i", 70);
    i0.ɵɵelementStart(4, "span", 71);
    i0.ɵɵelementContainerStart(5, 22);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_14_ng_container_6_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(7, CmacsModalComponent_ng_template_14_ng_container_7_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(8, CmacsModalComponent_ng_template_14_ng_container_8_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(9, CmacsModalComponent_ng_template_14_ng_container_9_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 72);
    i0.ɵɵelementContainerStart(11);
    i0.ɵɵtemplate(12, CmacsModalComponent_ng_template_14_ng_container_12_Template, 4, 3, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 73);
    i0.ɵɵtemplate(14, CmacsModalComponent_ng_template_14_button_14_Template, 2, 2, "button", 74);
    i0.ɵɵtemplate(15, CmacsModalComponent_ng_template_14_button_15_Template, 3, 3, "button", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r15.bodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("type", ctx_r15.iconType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r15.isTemplateRef(ctx_r15.title) && !ctx_r15.isTemplateRef(ctx_r15.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r15.isTemplateRef(ctx_r15.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", !ctx_r15.isNonEmptyString(ctx_r15.cmacsTitle));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r15.isNonEmptyString(ctx_r15.cmacsTitle));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r15.isComponent(ctx_r15.content));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.cmacsCancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.cmacsOkText !== null);
} }
const _c4 = ["*", [["", "cmacs-modal-creation-left-panel", ""]], [["", "cmacs-modal-creation-center-panel", ""]], [["", "cmacs-modal-creation-right-panel", ""]], [["", "cmacs-modal-helpful-center-panel", ""]], [["", "cmacs-modal-helpful-right-panel", ""]], [["", "cmacs-modal-helpfulTips-no-panel-center", ""]]];
const _c5 = ["*", "[cmacs-modal-creation-left-panel]", "[cmacs-modal-creation-center-panel]", "[cmacs-modal-creation-right-panel]", "[cmacs-modal-helpful-center-panel]", "[cmacs-modal-helpful-right-panel]", "[cmacs-modal-helpfulTips-no-panel-center]"];
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
// tslint:disable-next-line:no-any
export class CmacsModalComponent extends CmacsModalRef {
    constructor(overlay, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, modalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        super();
        this.overlay = overlay;
        this.i18n = i18n;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.modalGlobalConfig = modalGlobalConfig;
        this.document = document;
        this.visible = false;
        this.closable = true;
        this.okLoading = false;
        this.okDisabled = false;
        this.cancelDisabled = false;
        this.cancelLoading = false;
        this.keyboard = true;
        this.noAnimation = false;
        this.showHelpfulTips = true;
        this.useCmacsDefaultSizes = true;
        this.getContainer = () => this.overlay.create(); // [STATIC]
        this.zIndex = 1000;
        this.width = 400;
        this.okType = 'primary';
        this.iconType = 'question-circle'; // Confirm Modal ONLY
        this.modalType = 'transactional';
        this.onOk = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.cmacsAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        this.cmacsAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        this.visibleChange = new EventEmitter();
        this.locale = {};
        this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        this.unsubscribe$ = new Subject();
        this.scrollStrategy = this.overlay.scrollStrategies.block();
    }
    getClass() {
        let classCustom = this.isModalType('helpfulTips') ||
            this.isModalType('creation') ||
            this.isModalType('helpfulTipsNoPanel') ||
            this.isModalType('basic') ? 'largemodal ' : '';
        classCustom += `ant-modal ${this.className} model-container`;
        return classCustom;
    }
    get afterOpen() {
        // Observable alias for cmacsAfterOpen
        return this.cmacsAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for afterClose
        return this.cmacsAfterClose.asObservable();
    }
    get cancelText() {
        return this.cmacsCancelText || this.locale.cancelText;
    }
    get okText() {
        return this.cmacsOkText || this.locale.okText;
    }
    get hidden() {
        return !this.visible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask() {
        if (this.cmacsMask != null) {
            return this.cmacsMask;
        }
        else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMask != null) {
            return this.modalGlobalConfig.cmacsMask;
        }
        else {
            return true;
        }
    }
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable() {
        if (this.cmacsMaskClosable != null) {
            return this.cmacsMaskClosable;
        }
        else if (this.modalGlobalConfig && this.modalGlobalConfig.cmacsMaskClosable != null) {
            return this.modalGlobalConfig.cmacsMaskClosable;
        }
        else {
            return true;
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
        fromEvent(this.document.body, 'keydown')
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(e => this.keydownListener(e));
        if (this.isComponent(this.content)) {
            this.createDynamicComponent(this.content); // Create component along without View
        }
        if (this.isModalButtons(this.footer)) {
            // Setup default button options
            this.footer = this.formatModalButtons(this.footer);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.getContainer === 'function' ? this.getContainer() : this.getContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Creation modal settings
        if (this.isModalType('creation') || this.isModalType('helpfulTips') || this.isModalType('helpfulTipsNoPanel')) {
            this.cmacsCancelText = null;
            this.cmacsOkText = null;
        }
        if (this.isModalType('helpfulTips')) {
            this.width = this.width ? this.width : 835;
        }
        if (this.isModalType('helpfulTipsNoPanel') || this.isModalType('basic')) {
            this.width = this.width ? this.width : 570;
        }
        if (this.useCmacsDefaultSizes) {
            this.transformToDefaultSizes();
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "content"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "content" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    ngOnChanges(changes) {
        if (changes.visible) {
            this.handleVisibleStateChange(this.visible, !changes.visible.firstChange); // Do not trigger animation while initializing
        }
        if (changes.showHelpfulTips !== undefined || changes.useCmacsDefaultSizes !== undefined) {
            if (this.useCmacsDefaultSizes) {
                this.transformToDefaultSizes();
            }
        }
    }
    transformToDefaultSizes() {
        switch (this.modalType) {
            case 'creation':
                this.width = this.showHelpfulTips ? 1100 : 835;
                break;
            case 'helpfulTips':
                this.width = 835;
                break;
            case 'helpfulTipsNoPanel':
                this.width = 570;
                break;
            case 'basic':
                this.width = 570;
                break;
        }
    }
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    }
    ngOnDestroy() {
        // Close self before destructing
        if (!this.isModalType('interaction')) {
            this.changeVisibleFromInside(false).then(() => {
                this.destroyModal();
            });
        }
        else {
            this.closeInteraction();
            this.destroyModal();
        }
    }
    destroyModal() {
        this.modalControl.deregisterModal(this);
        if (this.container instanceof OverlayRef) {
            this.container.dispose();
        }
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.keyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    open() {
        this.changeVisibleFromInside(true);
    }
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    getInstance() {
        return this;
    }
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    onClickMask($event) {
        if (this.cmacsMask &&
            this.cmacsMaskClosable &&
            $event.target.classList.contains('ant-modal-wrap') &&
            this.visible) {
            this.onClickOkCancel('cancel');
        }
    }
    isModalType(type) {
        return this.modalType === type;
    }
    onClickCloseBtn() {
        if (this.visible) {
            this.onClickOkCancel('cancel');
        }
    }
    closeInteraction() {
        this.visible = !this.visible;
        this.visibleChange.emit(this.visible);
    }
    onClickOkCancel(type) {
        const trigger = { ok: this.onOk, cancel: this.onCancel }[type];
        const loadingKey = { ok: 'okLoading', cancel: 'cancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isComponent(value) {
        return value instanceof Type;
    }
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Do rest things when visible state changed
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (!this.isModalType('interaction')) {
            if (visible) {
                // Hide scrollbar at the first time when shown up
                this.scrollStrategy.enable();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
            }
            return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(() => {
                // Emit open/close event after animations over
                if (visible) {
                    this.cmacsAfterOpen.emit();
                }
                else {
                    this.cmacsAfterClose.emit(closeResult);
                    this.restoreFocus();
                    this.scrollStrategy.disable();
                    // Mark the for check so it can react if the view container is using OnPush change detection.
                    this.cdr.markForCheck();
                }
            });
        }
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On footer's modal button click
    onButtonClick(button) {
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(() => (button.loading = false)).catch(() => (button.loading = false));
        }
    }
    // Change visible from inside
    changeVisibleFromInside(visible, closeResult) {
        if (this.visible !== visible) {
            // Change visible value immediately
            this.visible = visible;
            this.visibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    animateTo(isVisible) {
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(resolve => setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, this.noAnimation ? 0 : MODAL_ANIMATE_DURATION));
    }
    formatModalButtons(buttons) {
        return buttons.map(button => {
            return Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    createDynamicComponent(component) {
        const factory = this.cfr.resolveComponentFactory(component);
        const childInjector = Injector.create({
            providers: [{ provide: CmacsModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.componentParams) {
            Object.assign(this.contentComponentRef.instance, this.componentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    updateTransformOrigin() {
        const modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            const previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            const lastPosition = getElementOffset(this.previouslyFocusedElement);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
CmacsModalComponent.ɵfac = function CmacsModalComponent_Factory(t) { return new (t || CmacsModalComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.ModalControlService), i0.ɵɵdirectiveInject(i4.FocusTrapFactory), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(MODAL_CONFIG, 8), i0.ɵɵdirectiveInject(DOCUMENT)); };
CmacsModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsModalComponent, selectors: [["cmacs-modal"]], viewQuery: function CmacsModalComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1, ViewContainerRef);
        i0.ɵɵviewQuery(_c2, 1, ElementRef);
        i0.ɵɵviewQuery(_c3, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tipsCreationWizard = _t);
    } }, inputs: { visible: "visible", closable: "closable", okLoading: "okLoading", okDisabled: "okDisabled", cancelDisabled: "cancelDisabled", cancelLoading: "cancelLoading", keyboard: "keyboard", noAnimation: "noAnimation", cmacsMask: "cmacsMask", cmacsMaskClosable: "cmacsMaskClosable", showHelpfulTips: "showHelpfulTips", useCmacsDefaultSizes: "useCmacsDefaultSizes", content: "content", componentParams: "componentParams", footer: "footer", getContainer: "getContainer", zIndex: "zIndex", leftPanelCols: "leftPanelCols", centerPanelCols: "centerPanelCols", rightPanelCols: "rightPanelCols", width: "width", wrapClassName: "wrapClassName", className: "className", cmacsStyle: "cmacsStyle", title: "title", cmacsTitle: "cmacsTitle", maskStyle: "maskStyle", bodyStyle: "bodyStyle", cmacsOkText: "cmacsOkText", cmacsCancelText: "cmacsCancelText", okType: "okType", iconType: "iconType", modalType: "modalType", onOk: "onOk", onCancel: "onCancel" }, outputs: { onOk: "onOk", onCancel: "onCancel", cmacsAfterOpen: "cmacsAfterOpen", cmacsAfterClose: "cmacsAfterClose", visibleChange: "visibleChange" }, exportAs: ["cmacsModal"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 16, vars: 2, consts: [["tplOriginContent", ""], [3, "nzNoAnimation", 4, "ngIf"], [4, "ngIf"], ["tplContentPassive", ""], ["tplContentDefault", ""], ["tplCreationDefault", ""], ["tplHelpfulTips", ""], ["tplHelpfulTipsWithoutPanel", ""], ["tplContentConfirm", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click"], ["role", "document", 3, "ngClass", "ngStyle"], ["modalContainer", ""], [1, "ant-modal-content"], ["class", "ant-modal-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], ["aria-label", "Close", 1, "ant-modal-close", 3, "click"], ["class", "iconspan", 3, "ant-modal-close-x", "ant-modal-close-x-basic", 4, "ngIf"], [1, "iconspan"], [1, "iconUILarge-Close"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["cdkDrag", "", 1, "cmacs-interaction-modal", 3, "ngStyle"], [1, "cmacs-interaction-modal-content"], [1, "ant-modal-close-x", "iconspan"], [1, "ant-modal-header", "cmacs-custom-header"], [1, "ant-modal-title", 2, "color", "#ffffff"], [1, "ant-modal-body", 2, "padding", "10px"], ["class", "ant-modal-header", "style", "height: 34px", 3, "padding", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["bodyContainer", ""], [1, "ant-modal-header", 2, "height", "34px"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], ["class", "ant-modal-header", 3, "height", "padding", 4, "ngIf"], [1, "ant-modal-body", "trans-model-body", 3, "ngStyle"], ["class", "ant-modal-footer trans-model-footer", 3, "border-top", "padding-bottom", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-footer", "trans-model-footer"], [4, "ngSwitchDefault"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"], ["class", "ant-modal-header creation-header", 4, "ngIf"], [1, "ant-modal-body", 2, "padding", "0", 3, "ngStyle"], ["nz-row", "", 2, "height", "100%", "overflow", "hidden"], ["nz-col", "", 1, "cmacs-modal-creation-left-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-creation-center-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-creation-right-panel", 3, "nzSpan"], ["tipsCreationWizard", ""], ["class", "ant-modal-footer creation-footer", 4, "ngIf"], [1, "ant-modal-header", "creation-header"], [1, "ant-modal-footer", "creation-footer"], ["class", "ant-modal-header helpful-header", 4, "ngIf"], [1, "ant-modal-body", 2, "padding", "0", "height", "531px", 3, "ngStyle"], ["nz-col", "", 1, "cmacs-modal-helpful-center-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-helpful-right-panel", 3, "nzSpan"], ["class", "ant-modal-footer helpful-footer", 4, "ngIf"], [1, "ant-modal-header", "helpful-header"], [1, "ant-modal-footer", "helpful-footer"], ["nz-col", "", 1, "cmacs-modal-helpfulTips-no-panel-center", 3, "nzSpan"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "type"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "click"], ["autoFocusButtonOk", ""]], template: function CmacsModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c4);
        i0.ɵɵtemplate(0, CmacsModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsModalComponent_div_2_Template, 9, 21, "div", 1);
        i0.ɵɵtemplate(3, CmacsModalComponent_div_3_Template, 13, 12, "div", 2);
        i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_4_Template, 5, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_6_Template, 6, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, CmacsModalComponent_ng_template_8_Template, 11, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, CmacsModalComponent_ng_template_10_Template, 8, 5, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, CmacsModalComponent_ng_template_12_Template, 6, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(14, CmacsModalComponent_ng_template_14_Template, 16, 10, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isModalType("interaction"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isModalType("interaction"));
    } }, directives: [i5.NgIf, i6.NzNoAnimationDirective, i5.NgClass, i5.NgStyle, i5.NgSwitch, i5.NgSwitchCase, i5.NgTemplateOutlet, i7.CdkDrag, i5.NgSwitchDefault, i5.NgForOf, i8.NzWaveDirective, i9.NzButtonComponent, i10.ɵNzTransitionPatchDirective, i11.NzRowDirective, i11.NzColDirective, i12.NzIconDirective], pipes: [i13.CmacsToCssUnitPipe], styles: [".ant-modal-content[_ngcontent-%COMP%]{border-radius:4px;box-shadow:0 3px 7px rgba(59,63,70,.2)}.ant-modal-body[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;line-height:1.5;word-wrap:break-word;color:#656c79}  .ant-modal-body h2{font-weight:400;font-size:16px;line-height:1.25em;color:#3b3f46;margin-bottom:18px}.model-wrapper[_ngcontent-%COMP%]{display:flex!important;height:100%}  .cmacs-signature-modal .cmacs-modal-helpfulTips-no-panel-center{padding-top:20px!important}  .ant-modal-footer .ant-btn-danger:hover{opacity:1!important}.model-container[_ngcontent-%COMP%]{margin:auto;top:0}.ant-btn-danger[_ngcontent-%COMP%], .ant-btn-danger[_ngcontent-%COMP%]:hover{background-color:#f6503c!important;border-color:#f6503c!important}.ant-modal-header[_ngcontent-%COMP%]{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff;border-radius:3px 3px 0 0}.ant-modal-title[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x[_ngcontent-%COMP%]{color:#fff;line-height:34px;margin-right:20px}.ant-modal-close-x-basic[_ngcontent-%COMP%]{color:#fff;margin-right:20px;padding-right:15px;line-height:50px}.ant-modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.cmacs-interaction-modal[_ngcontent-%COMP%]{box-sizing:border-box;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;font-feature-settings:\"tnum\";position:absolute;width:auto;min-width:150px;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content[_ngcontent-%COMP%]{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.cmacs-custom-header[_ngcontent-%COMP%]{height:30px;padding:6px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal-content[_ngcontent-%COMP%]   .ant-modal-close-x[_ngcontent-%COMP%]{margin-right:12px}.trans-model-body[_ngcontent-%COMP%]{padding:24px 20px 10px}.trans-model-footer[_ngcontent-%COMP%]{padding:10px 20px 20px}  .trans-model-footer.ant-modal-footer button+button{margin-left:15px}.creation-footer[_ngcontent-%COMP%], .creation-header[_ngcontent-%COMP%], .helpful-footer[_ngcontent-%COMP%], .helpful-header[_ngcontent-%COMP%]{padding:16px 40px}.cmacs-modal-creation-left-panel[_ngcontent-%COMP%]{padding:0 40px;height:calc(100% - 80px);overflow:auto;border-right:1px solid #dee0e5;margin-top:40px;margin-bottom:40px;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%], .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%], .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]{height:100%;padding:40px;overflow:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-modal-creation-right-panel[_ngcontent-%COMP%], .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]{background-color:#f6f7fb;padding:40px 35px 35px;height:100%;overflow:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.creation-footer[_ngcontent-%COMP%], .helpful-footer[_ngcontent-%COMP%]{box-shadow:0 -2px 5px rgba(59,63,70,.1);border-top:none;border-radius:0 0 3px 3px;z-index:1;position:relative}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}@media screen and (max-width:1024px){.ant-modal.largemodal[_ngcontent-%COMP%]{max-width:100vw;max-height:100vh;margin:auto;width:100%!important;height:100%;padding:0}.ant-modal.largemodal[_ngcontent-%COMP%] > .ant-modal-content[_ngcontent-%COMP%]{height:100%}.ant-modal.largemodal[_ngcontent-%COMP%] > .ant-modal-content[_ngcontent-%COMP%] > .ant-modal-body[_ngcontent-%COMP%]{height:calc(100% - 116px)!important}}"] });
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "visible", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "closable", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "okLoading", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "okDisabled", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "cancelDisabled", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "cancelLoading", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "keyboard", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "noAnimation", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "cmacsMask", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "cmacsMaskClosable", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "showHelpfulTips", void 0);
__decorate([
    InputBoolean()
], CmacsModalComponent.prototype, "useCmacsDefaultSizes", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsModalComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-modal',
                exportAs: 'cmacsModal',
                templateUrl: './cmacs-modal.component.html',
                styleUrls: ['./cmacs-modal.component.css'],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i2.NzI18nService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i3.ModalControlService }, { type: i4.FocusTrapFactory }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MODAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { visible: [{
            type: Input
        }], closable: [{
            type: Input
        }], okLoading: [{
            type: Input
        }], okDisabled: [{
            type: Input
        }], cancelDisabled: [{
            type: Input
        }], cancelLoading: [{
            type: Input
        }], keyboard: [{
            type: Input
        }], noAnimation: [{
            type: Input
        }], cmacsMask: [{
            type: Input
        }], cmacsMaskClosable: [{
            type: Input
        }], showHelpfulTips: [{
            type: Input
        }], useCmacsDefaultSizes: [{
            type: Input
        }], content: [{
            type: Input
        }], componentParams: [{
            type: Input
        }], footer: [{
            type: Input
        }], getContainer: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], leftPanelCols: [{
            type: Input
        }], centerPanelCols: [{
            type: Input
        }], rightPanelCols: [{
            type: Input
        }], width: [{
            type: Input
        }], wrapClassName: [{
            type: Input
        }], className: [{
            type: Input
        }], cmacsStyle: [{
            type: Input
        }], title: [{
            type: Input
        }], cmacsTitle: [{
            type: Input
        }], maskStyle: [{
            type: Input
        }], bodyStyle: [{
            type: Input
        }], cmacsOkText: [{
            type: Input
        }], cmacsCancelText: [{
            type: Input
        }], okType: [{
            type: Input
        }], iconType: [{
            type: Input
        }], modalType: [{
            type: Input
        }], onOk: [{
            type: Input
        }, {
            type: Output
        }], onCancel: [{
            type: Input
        }, {
            type: Output
        }], cmacsAfterOpen: [{
            type: Output
        }], cmacsAfterClose: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }], modalContainer: [{
            type: ViewChild,
            args: ['modalContainer']
        }], bodyContainer: [{
            type: ViewChild,
            args: ['bodyContainer', { read: ViewContainerRef }]
        }], autoFocusButtonOk: [{
            type: ViewChild,
            args: ['autoFocusButtonOk', { read: ElementRef }]
        }], tipsCreationWizard: [{
            type: ViewChildren,
            args: ['tipsCreationWizard']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1vZGFsL2NtYWNzLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBZSxNQUFNLHNCQUFzQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9B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SztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFc0IsSUFBSTtrQkFBL0IsS0FBSzs7a0JBQUksTUFBTTtZQUNZLFFBQVE7a0JBQW5DLEtBQUs7O2tCQUFJLE1BQU07WUFFRyxjQUFjO2tCQUFoQyxNQUFNO1lBQ1ksZUFBZTtrQkFBakMsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFFc0IsY0FBYztrQkFBMUMsU0FBUzttQkFBQyxnQkFBZ0I7WUFDNkIsYUFBYTtrQkFBcEUsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7WUFDQSxpQkFBaUI7a0JBQXRFLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ2hCLGtCQUFrQjtrQkFBckQsWUFBWTttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcblxyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBCbG9ja1Njcm9sbFN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0b3IsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LCBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgTU9EQUxfQ09ORklHLCBNb2RhbENvbmZpZyB9IGZyb20gJy4vY21hY3MtbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgTW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vY21hY3MtbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NNb2RhbFJlZiB9IGZyb20gJy4vY21hY3MtbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC50eXBlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IGdldEVsZW1lbnRPZmZzZXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5leHBvcnQgY29uc3QgTU9EQUxfQU5JTUFURV9EVVJBVElPTiA9IDIwMDsgLy8gRHVyYXRpb24gd2hlbiBwZXJmb3JtIGFuaW1hdGlvbnMgKG1zKVxyXG5cclxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgLy8gVXNpbmcgT25QdXNoIGZvciBtb2RhbCBjYXVzZWQgZm9vdGVyIGNhbiBub3QgdG8gZGV0ZWN0IGNoYW5nZXMuIHdlIGNhbiBmaXggaXQgd2hlbiA4LnguXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XHJcbn0pXHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgQ21hY3NNb2RhbFJlZjxULCBSPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNhbmNlbERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNhbmNlbExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc01hc2s6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzTWFza0Nsb3NhYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SGVscGZ1bFRpcHMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB1c2VDbWFjc0RlZmF1bHRTaXplcyA9IHRydWU7XHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XHJcbiAgQElucHV0KCkgY29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIGNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsOyAvLyBbU1RBVElDXSBEZWZhdWx0IE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBnZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpID0gKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSgpOyAvLyBbU1RBVElDXVxyXG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSBsZWZ0UGFuZWxDb2xzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgY2VudGVyUGFuZWxDb2xzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmlnaHRQYW5lbENvbHM6IG51bWJlcjtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNDAwO1xyXG4gIEBJbnB1dCgpIHdyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICBASW5wdXQoKSBjbWFjc1RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgbWFza1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgYm9keVN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgY21hY3NPa1RleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgY21hY3NDYW5jZWxUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIG9rVHlwZSA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKSBpY29uVHlwZTogc3RyaW5nID0gJ3F1ZXN0aW9uLWNpcmNsZSc7IC8vIENvbmZpcm0gTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIG1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ3RyYW5zYWN0aW9uYWwnO1xyXG5cclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgb25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBvbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NBZnRlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBvcGVuKHZpc2libGUpIGFmdGVyIGFuaW1hdGlvbnNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInKSBtb2RhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYXV0b0ZvY3VzQnV0dG9uT2snLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgYXV0b0ZvY3VzQnV0dG9uT2s6IEVsZW1lbnRSZWY7IC8vIE9ubHkgYWltIHRvIGZvY3VzIHRoZSBvayBidXR0b24gdGhhdCBuZWVkcyB0byBiZSBhdXRvIGZvY3VzZWRcclxuICBAVmlld0NoaWxkcmVuKCd0aXBzQ3JlYXRpb25XaXphcmQnKSB0aXBzQ3JlYXRpb25XaXphcmQ6IFF1ZXJ5TGlzdDxhbnk+O1xyXG5cclxuICBnZXRDbGFzcygpIHtcclxuICAgIGxldCBjbGFzc0N1c3RvbSA9IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzJykgfHxcclxuICAgICAgdGhpcy5pc01vZGFsVHlwZSgnY3JlYXRpb24nKSB8fFxyXG4gICAgICB0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwc05vUGFuZWwnKSB8fFxyXG4gICAgICB0aGlzLmlzTW9kYWxUeXBlKCdiYXNpYycpID8gJ2xhcmdlbW9kYWwgJyA6ICcnO1xyXG4gICAgY2xhc3NDdXN0b20gKz0gYGFudC1tb2RhbCAke3RoaXMuY2xhc3NOYW1lfSBtb2RlbC1jb250YWluZXJgO1xyXG4gICAgcmV0dXJuIGNsYXNzQ3VzdG9tO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGNtYWNzQWZ0ZXJPcGVuXHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0FmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgYWZ0ZXJDbG9zZVxyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzQ2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzT2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnZpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XHJcbiAgfSAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoaXMgZGlhbG9nIHNob3VsZCBoaWRkZW5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFzayB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFzaygpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNtYWNzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY21hY3NNYXNrQ2xvc2FibGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsR2xvYmFsQ29uZmlnLmNtYWNzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIGNvbnRlbnQgYXMgQ29tcG9uZW50XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7IC8vIEN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbDogTW9kYWxDb250cm9sU2VydmljZSxcclxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTU9EQUxfQ09ORklHKSBwcml2YXRlIG1vZGFsR2xvYmFsQ29uZmlnOiBNb2RhbENvbmZpZyxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKSBhcyB7IG9rVGV4dDogc3RyaW5nOyBjYW5jZWxUZXh0OiBzdHJpbmcgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLmNvbnRlbnQpKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY0NvbXBvbmVudCh0aGlzLmNvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5mb290ZXIpKSB7XHJcbiAgICAgIC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcclxuICAgICAgdGhpcy5mb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLmZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5nZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmdldENvbnRhaW5lcigpIDogdGhpcy5nZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRpb24gbW9kYWwgc2V0dGluZ3NcclxuICAgIGlmICh0aGlzLmlzTW9kYWxUeXBlKCdjcmVhdGlvbicpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzJykgfHwgdGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykpIHtcclxuICAgICAgdGhpcy5jbWFjc0NhbmNlbFRleHQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNtYWNzT2tUZXh0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwcycpKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGggPyB0aGlzLndpZHRoIDogODM1O1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzTm9QYW5lbCcpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2Jhc2ljJykpe1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy53aWR0aCA/IHRoaXMud2lkdGggOiA1NzA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudXNlQ21hY3NEZWZhdWx0U2l6ZXMpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1Ub0RlZmF1bHRTaXplcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJjb250ZW50XCIoQ29tcG9uZW50KSBldGMuIGFzIGlucHV0cyB0aGF0IGluaXRpYWxpemVkIGR5bmFtaWNhbGx5LlxyXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJjb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy52aXNpYmxlLCAhY2hhbmdlcy52aXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuc2hvd0hlbHBmdWxUaXBzICE9PSB1bmRlZmluZWQgfHwgY2hhbmdlcy51c2VDbWFjc0RlZmF1bHRTaXplcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnVzZUNtYWNzRGVmYXVsdFNpemVzKSB7IHRoaXMudHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMubW9kYWxUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2NyZWF0aW9uJzpcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5zaG93SGVscGZ1bFRpcHMgPyAxMTAwIDogODM1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hlbHBmdWxUaXBzJzpcclxuICAgICAgICB0aGlzLndpZHRoID0gODM1O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hlbHBmdWxUaXBzTm9QYW5lbCc6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDU3MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdiYXNpYyc6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDU3MDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIENsb3NlIHNlbGYgYmVmb3JlIGRlc3RydWN0aW5nXHJcbiAgICBpZiAoIXRoaXMuaXNNb2RhbFR5cGUoJ2ludGVyYWN0aW9uJykpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNsb3NlSW50ZXJhY3Rpb24oKTtcclxuICAgICAgdGhpcy5kZXN0cm95TW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBkZXN0cm95TW9kYWwoKSB7XHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlLCByZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICAvLyBEZXN0cm95IGVxdWFscyBDbG9zZVxyXG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogQ21hY3NNb2RhbENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZiAmJiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jbWFjc01hc2sgJiZcclxuICAgICAgdGhpcy5jbWFjc01hc2tDbG9zYWJsZSAmJlxyXG4gICAgICAoJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnQtbW9kYWwtd3JhcCcpICYmXHJcbiAgICAgIHRoaXMudmlzaWJsZVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kYWxUeXBlID09PSB0eXBlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpc2libGUpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5vbk9rLCBjYW5jZWw6IHRoaXMub25DYW5jZWwgfVt0eXBlXTtcclxuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7IG9rOiAnb2tMb2FkaW5nJywgY2FuY2VsOiAnY2FuY2VsTG9hZGluZycgfVt0eXBlXTtcclxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gZG9DbG9zZSAhPT0gZmFsc2UgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcclxuICAgICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSBmYWxzZTtcclxuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx2b2lkPikudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXNlQ2xvc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gRG8gcmVzdCB0aGluZ3Mgd2hlbiB2aXNpYmxlIHN0YXRlIGNoYW5nZWRcclxuICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlOiBib29sZWFuLCBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5pc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKSkge1xyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGF0IHRoZSBmaXJzdCB0aW1lIHdoZW4gc2hvd24gdXBcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYW5pbWF0aW9uID8gdGhpcy5hbmltYXRlVG8odmlzaWJsZSkgOiB1bmRlZmluZWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIEVtaXQgb3Blbi9jbG9zZSBldmVudCBhZnRlciBhbmltYXRpb25zIG92ZXJcclxuICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgdGhpcy5jbWFjc0FmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY21hY3NBZnRlckNsb3NlLmVtaXQoY2xvc2VSZXN1bHQpO1xyXG4gICAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZGlzYWJsZSgpO1xyXG4gICAgICAgICAgLy8gTWFyayB0aGUgZm9yIGNoZWNrIHNvIGl0IGNhbiByZWFjdCBpZiB0aGUgdmlldyBjb250YWluZXIgaXMgdXNpbmcgT25QdXNoIGNoYW5nZSBkZXRlY3Rpb24uXHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTG9va3VwIGEgYnV0dG9uJ3MgcHJvcGVydHksIGlmIHRoZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGNhbGwgJiB0aGVuIHJldHVybiB0aGUgcmVzdWx0LCBvdGhlcndpc2UsIHJldHVybiBpdHNlbGYuXHJcbiAgcHVibGljIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9IHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcclxuICAgIGNvbnN0IGFyZ3M6IFRbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICBhcmdzLnB1c2godGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBhcmdzKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gZm9vdGVyJ3MgbW9kYWwgYnV0dG9uIGNsaWNrXHJcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ29uQ2xpY2snKTsgLy8gQ2FsbCBvbkNsaWNrIGRpcmVjdGx5XHJcbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgYnV0dG9uLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAocmVzdWx0IGFzIFByb21pc2U8e30+KS50aGVuKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSkuY2F0Y2goKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENoYW5nZSB2aXNpYmxlIGZyb20gaW5zaWRlXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLnZpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgLy8gQ2hhbmdlIHZpc2libGUgdmFsdWUgaW1tZWRpYXRlbHlcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlLCB0cnVlLCBjbG9zZVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlKHN0YXRlOiBBbmltYXRpb25TdGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvbiB3aGVuIHNob3dzIHVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMubm9BbmltYXRpb24gPyAwIDogTU9EQUxfQU5JTUFURV9EVVJBVElPTlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRNb2RhbEJ1dHRvbnMoYnV0dG9uczogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4ge1xyXG4gICAgcmV0dXJuIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ue1xyXG4gICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgYXV0b0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLmJ1dHRvblxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxyXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDbWFjc01vZGFsUmVmLCB1c2VWYWx1ZTogdGhpcyB9XSxcclxuICAgICAgcGFyZW50OiB0aGlzLnZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoY2hpbGRJbmplY3Rvcik7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMuY29tcG9uZW50UGFyYW1zKTtcclxuICAgIH1cclxuICAgIC8vIERvIHRoZSBmaXJzdCBjaGFuZ2UgZGV0ZWN0aW9uIGltbWVkaWF0ZWx5IChvciB3ZSBkbyBkZXRlY3Rpb24gYXQgbmdBZnRlclZpZXdJbml0LCBtdWx0aS1jaGFuZ2VzIGVycm9yIHdpbGwgYmUgdGhyb3duKVxyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSB0cmFuc2Zvcm0tb3JpZ2luIHRvIHRoZSBsYXN0IGNsaWNrIHBvc2l0aW9uIG9uIGRvY3VtZW50XHJcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNseURPTVJlY3QgPSB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBsYXN0UG9zaXRpb24ubGVmdCArIHByZXZpb3VzbHlET01SZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3ggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke3kgLSBtb2RhbEVsZW1lbnQub2Zmc2V0VG9wfXB4IDBweGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICN0cGxPcmlnaW5Db250ZW50PlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT4gPCEtLSBDb21wYXRpYmxlOiB0aGUgPG5nLWNvbnRlbnQ+IGNhbiBhcHBlYXIgb25seSBvbmNlIC0tPlxyXG5cclxuICA8IS0tIGNvbnRhaW5lciBmb3IgdGhlIG1vZGVscyAtLT5cclxuPGRpdiBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvblwiICpuZ0lmPVwiIWlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpXCI+XHJcbiAgPGRpdiAqbmdJZj1cIm1hc2tcIiBjbGFzcz1cImFudC1tb2RhbC1tYXNrXCIgW25nQ2xhc3NdPVwibWFza0FuaW1hdGlvbkNsYXNzTWFwXCIgW2NsYXNzLmFudC1tb2RhbC1tYXNrLWhpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgW25nU3R5bGVdPVwibWFza1N0eWxlXCIgW3N0eWxlLnpJbmRleF09XCJ6SW5kZXhcIj48L2Rpdj5cclxuICA8ZGl2IChjbGljayk9XCJvbkNsaWNrTWFzaygkZXZlbnQpXCIgY2xhc3M9XCJhbnQtbW9kYWwtd3JhcCB7eyB3cmFwQ2xhc3NOYW1lIH19IG1vZGVsLXdyYXBwZXJcIiBbc3R5bGUuekluZGV4XT1cInpJbmRleFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gPyAnaGlkZGVuJyA6IG51bGxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgPGRpdiAjbW9kYWxDb250YWluZXIgW25nQ2xhc3NdPVwiZ2V0Q2xhc3MoKVwiIFtjbGFzc109XCJtb2RhbEFuaW1hdGlvbkNsYXNzTWFwXCIgW25nU3R5bGVdPVwiY21hY3NTdHlsZVwiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IGNtYWNzVG9Dc3NVbml0XCIgW3N0eWxlLnRyYW5zZm9ybS1vcmlnaW5dPVwidHJhbnNmb3JtT3JpZ2luXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbG9zYWJsZVwiIChjbGljayk9XCJvbkNsaWNrQ2xvc2VCdG4oKVwiIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTW9kYWxUeXBlKCdwYXNzaXZlJykgfHwgaXNNb2RhbFR5cGUoJ2ludGVyYWN0aW9uJykgfHwgaXNNb2RhbFR5cGUoJ2Jhc2ljJylcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYW50LW1vZGFsLWNsb3NlLXhdPVwiIWlzTW9kYWxUeXBlKCdiYXNpYycpXCIgW2NsYXNzLmFudC1tb2RhbC1jbG9zZS14LWJhc2ljXT1cImlzTW9kYWxUeXBlKCdiYXNpYycpXCIgY2xhc3M9XCJpY29uc3BhblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImljb25VSUxhcmdlLUNsb3NlXCI+PC9pPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZGVuXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCd0cmFuc2FjdGlvbmFsJylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxDb250ZW50RGVmYXVsdFwiPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgnY29uZmlybScpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsQ29udGVudENvbmZpcm1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdjcmVhdGlvbicpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsQ3JlYXRpb25EZWZhdWx0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgnaGVscGZ1bFRpcHMnKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbEhlbHBmdWxUaXBzXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykgfHwgaXNNb2RhbFR5cGUoJ2Jhc2ljJylcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxIZWxwZnVsVGlwc1dpdGhvdXRQYW5lbFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ3Bhc3NpdmUnKSB8fCBpc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnRQYXNzaXZlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBpbnRlcmFjdGl2ZSBtb2RlbCAtLT5cclxuPGRpdiAqbmdJZj1cImlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpXCI+XHJcbiAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCJ2aXNpYmxlID8gJ2luaGVyaXQnIDogJ25vbmUnXCIgY2xhc3M9XCJjbWFjcy1pbnRlcmFjdGlvbi1tb2RhbFwiIGNka0RyYWcgW3N0eWxlLnpJbmRleF09XCJ6SW5kZXhcIlxyXG4gICAgW25nU3R5bGVdPVwiY21hY3NTdHlsZVwiIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IGNtYWNzVG9Dc3NVbml0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtaW50ZXJhY3Rpb24tbW9kYWwtY29udGVudFwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlSW50ZXJhY3Rpb24oKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlLXggaWNvbnNwYW5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXIgY21hY3MtY3VzdG9tLWhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtdGl0bGVcIiBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO1wiPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBzdHlsZT1cInBhZGRpbmc6IDEwcHhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFBhc3NpdmUgbW9kZWwgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudFBhc3NpdmU+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXJcIiBbc3R5bGUucGFkZGluZ109XCJtb2RhbFR5cGUgPT09ICdwYXNzaXZlJyA/ICc2cHggMjBweCcgOiAnN3B4IDEwcHgnXCJcclxuICAgIHN0eWxlPVwiaGVpZ2h0OiAzNHB4XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKHRpdGxlKSAmJiAhaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNtYWNzVGl0bGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIhaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICA8ZGl2Pnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCIgW3N0eWxlLnBhZGRpbmddPVwibW9kYWxUeXBlID09PSAncGFzc2l2ZScgPyAnMjRweCAxMHB4IDQ2cHggMjBweCcgOiAnMCdcIj5cclxuICAgIDxuZy1jb250YWluZXIgI2JvZHlDb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb21wb25lbnQoY29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjb250ZW50KVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NvbnRlbnR9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdCBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxPcmlnaW5Db250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIHRyYW5zYWN0aW9uYWwgbW9kZWwgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudERlZmF1bHQ+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cIm1vZGFsVHlwZSA9PT0gJ3RyYW5zYWN0aW9uYWwnID8gMzAgOiA1MFwiXHJcbiAgICBbc3R5bGUucGFkZGluZ109XCJtb2RhbFR5cGUgPT09ICd0cmFuc2FjdGlvbmFsJyA/ICc2cHggMjBweCcgOiAnMTZweCA0MHB4J1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keSB0cmFucy1tb2RlbC1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KGNvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNvbnRlbnQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY29udGVudClcIj5cclxuICAgICAgICAgIDxkaXY+e3tjb250ZW50fX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsT3JpZ2luQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJmb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXIgdHJhbnMtbW9kZWwtZm9vdGVyXCJcclxuICAgIFtzdHlsZS5ib3JkZXItdG9wXT1cIm1vZGFsVHlwZSA9PT0gJ3RyYW5zYWN0aW9uYWwnID8gJ25vbmUnIDogJ2luaGVyaXQnXCJcclxuICAgIFtzdHlsZS5wYWRkaW5nLWJvdHRvbV09XCJtb2RhbFR5cGUgPT09ICd0cmFuc2FjdGlvbmFsJyB8fCBtb2RhbFR5cGUgPT09ICdwYXNzaXZlJyA/ICcyMHB4JyA6ICdpbmhlcml0J1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGZvb3RlcilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGRpdj57e2Zvb3Rlcn19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGZvb3RlclwiIG56LWJ1dHRvbiAoY2xpY2spPVwib25CdXR0b25DbGljayhidXR0b24pXCJcclxuICAgICAgICAgIFtoaWRkZW5dPVwiIWdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdzaG93JylcIiBbbnpMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCIgW256VHlwZV09XCJidXR0b24udHlwZVwiIFtuelNoYXBlXT1cImJ1dHRvbi5zaGFwZVwiXHJcbiAgICAgICAgICBbbnpTaXplXT1cImJ1dHRvbi5zaXplXCIgW256R2hvc3RdPVwiYnV0dG9uLmdob3N0XCI+e3sgYnV0dG9uLmxhYmVsIH19PC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzQ2FuY2VsVGV4dCE9PW51bGxcIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIiBbbnpMb2FkaW5nXT1cImNhbmNlbExvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImNhbmNlbERpc2FibGVkXCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzT2tUZXh0IT09bnVsbFwiIG56LWJ1dHRvbiBbbnpUeXBlXT1cIm9rVHlwZVwiIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJva0xvYWRpbmdcIiBbZGlzYWJsZWRdPVwib2tEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIENyZWF0aW9uIE1vZGFsIENvbnRlbnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ3JlYXRpb25EZWZhdWx0PlxyXG4gIDxkaXYgKm5nSWY9XCJ0aXRsZSB8fCBjbWFjc1RpdGxlXCIgY2xhc3M9XCJhbnQtbW9kYWwtaGVhZGVyIGNyZWF0aW9uLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIHN0eWxlPVwicGFkZGluZzogMFwiIFtuZ1N0eWxlXT1cImJvZHlTdHlsZVwiPlxyXG4gICAgPGRpdiBuei1yb3cgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47XCI+XHJcbiAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwic2hvd0hlbHBmdWxUaXBzID8gbGVmdFBhbmVsQ29scyA6IDZcIiBjbGFzcz1cImNtYWNzLW1vZGFsLWNyZWF0aW9uLWxlZnQtcGFuZWxcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtbW9kYWwtY3JlYXRpb24tbGVmdC1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cInNob3dIZWxwZnVsVGlwcyA/IGNlbnRlclBhbmVsQ29scyA6ICgyNCAtIGxlZnRQYW5lbENvbHMpXCJcclxuICAgICAgICBjbGFzcz1cImNtYWNzLW1vZGFsLWNyZWF0aW9uLWNlbnRlci1wYW5lbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy1tb2RhbC1jcmVhdGlvbi1jZW50ZXItcGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBuei1jb2wgW3N0eWxlLmRpc3BsYXldPVwic2hvd0hlbHBmdWxUaXBzID8gJ2luaGVyaXQnIDogJ25vbmUnXCIgI3RpcHNDcmVhdGlvbldpemFyZCBbbnpTcGFuXT1cInJpZ2h0UGFuZWxDb2xzXCJcclxuICAgICAgICBjbGFzcz1cImNtYWNzLW1vZGFsLWNyZWF0aW9uLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLW1vZGFsLWNyZWF0aW9uLXJpZ2h0LXBhbmVsXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiZm9vdGVyICE9PSBudWxsXCIgY2xhc3M9XCJhbnQtbW9kYWwtZm9vdGVyIGNyZWF0aW9uLWZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGZvb3RlcilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGRpdj57e2Zvb3Rlcn19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGZvb3RlclwiIG56LWJ1dHRvbiAoY2xpY2spPVwib25CdXR0b25DbGljayhidXR0b24pXCJcclxuICAgICAgICAgIFtoaWRkZW5dPVwiIWdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdzaG93JylcIiBbbnpMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCIgW256VHlwZV09XCJidXR0b24udHlwZVwiIFtuelNoYXBlXT1cImJ1dHRvbi5zaGFwZVwiXHJcbiAgICAgICAgICBbbnpTaXplXT1cImJ1dHRvbi5zaXplXCIgW256R2hvc3RdPVwiYnV0dG9uLmdob3N0XCI+e3sgYnV0dG9uLmxhYmVsIH19PC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzQ2FuY2VsVGV4dCE9PW51bGxcIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIiBbbnpMb2FkaW5nXT1cImNhbmNlbExvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImNhbmNlbERpc2FibGVkXCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzT2tUZXh0IT09bnVsbFwiIG56LWJ1dHRvbiBbbnpUeXBlXT1cIm9rVHlwZVwiIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJva0xvYWRpbmdcIiBbZGlzYWJsZWRdPVwib2tEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIEhlbHBmdWwgdG9vbHRpcCBtb2RlbCAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxIZWxwZnVsVGlwcz5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGUgfHwgY21hY3NUaXRsZVwiIGNsYXNzPVwiYW50LW1vZGFsLWhlYWRlciBoZWxwZnVsLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIHN0eWxlPVwicGFkZGluZzogMDsgaGVpZ2h0OiA1MzFweDtcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICAgIDxkaXYgbnotcm93IHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO1wiPlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImNlbnRlclBhbmVsQ29scyA/IGNlbnRlclBhbmVsQ29scyA6IDE2XCIgY2xhc3M9XCJjbWFjcy1tb2RhbC1oZWxwZnVsLWNlbnRlci1wYW5lbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy1tb2RhbC1oZWxwZnVsLWNlbnRlci1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cInJpZ2h0UGFuZWxDb2xzID8gcmlnaHRQYW5lbENvbHMgOiA4XCIgY2xhc3M9XCJjbWFjcy1tb2RhbC1oZWxwZnVsLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLW1vZGFsLWhlbHBmdWwtcmlnaHQtcGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJmb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXIgaGVscGZ1bC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihmb290ZXIpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoZm9vdGVyKVwiPlxyXG4gICAgICAgIDxkaXY+e3tmb290ZXJ9fTwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbEJ1dHRvbnMoZm9vdGVyKVwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBmb290ZXJcIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCIgW256TG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiIFtuelR5cGVdPVwiYnV0dG9uLnR5cGVcIiBbbnpTaGFwZV09XCJidXR0b24uc2hhcGVcIlxyXG4gICAgICAgICAgW256U2l6ZV09XCJidXR0b24uc2l6ZVwiIFtuekdob3N0XT1cImJ1dHRvbi5naG9zdFwiPnt7IGJ1dHRvbi5sYWJlbCB9fTwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbWFjc0NhbmNlbFRleHQhPT1udWxsXCIgbnotYnV0dG9uIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCIgW256TG9hZGluZ109XCJjYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJjYW5jZWxEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbWFjc09rVGV4dCE9PW51bGxcIiBuei1idXR0b24gW256VHlwZV09XCJva1R5cGVcIiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdvaycpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwib2tMb2FkaW5nXCIgW2Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBIZWxwZnVsIHRvb2x0aXAgd2l0aG91dCBwYW5lbCAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxIZWxwZnVsVGlwc1dpdGhvdXRQYW5lbD5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGUgfHwgY21hY3NUaXRsZVwiIGNsYXNzPVwiYW50LW1vZGFsLWhlYWRlciBoZWxwZnVsLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIHN0eWxlPVwicGFkZGluZzogMDsgaGVpZ2h0OiA1MzFweDtcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICAgIDxkaXYgbnotcm93IHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO1wiPlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cIjI0XCIgY2xhc3M9XCJjbWFjcy1tb2RhbC1oZWxwZnVsVGlwcy1uby1wYW5lbC1jZW50ZXJcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtbW9kYWwtaGVscGZ1bFRpcHMtbm8tcGFuZWwtY2VudGVyXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiZm9vdGVyICE9PSBudWxsXCIgY2xhc3M9XCJhbnQtbW9kYWwtZm9vdGVyIGhlbHBmdWwtZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZm9vdGVyKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGZvb3RlcilcIj5cclxuICAgICAgICA8ZGl2Pnt7Zm9vdGVyfX08L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxCdXR0b25zKGZvb3RlcilcIj5cclxuICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2YgZm9vdGVyXCIgbnotYnV0dG9uIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCIhZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ3Nob3cnKVwiIFtuekxvYWRpbmddPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2xvYWRpbmcnKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2Rpc2FibGVkJylcIiBbbnpUeXBlXT1cImJ1dHRvbi50eXBlXCIgW256U2hhcGVdPVwiYnV0dG9uLnNoYXBlXCJcclxuICAgICAgICAgIFtuelNpemVdPVwiYnV0dG9uLnNpemVcIiBbbnpHaG9zdF09XCJidXR0b24uZ2hvc3RcIj57eyBidXR0b24ubGFiZWwgfX08L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY21hY3NDYW5jZWxUZXh0IT09bnVsbFwiIG56LWJ1dHRvbiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKVwiIFtuekxvYWRpbmddPVwiY2FuY2VsTG9hZGluZ1wiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FuY2VsRGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY21hY3NPa1RleHQhPT1udWxsXCIgbnotYnV0dG9uIFtuelR5cGVdPVwib2tUeXBlXCIgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cIm9rTG9hZGluZ1wiIFtkaXNhYmxlZF09XCJva0Rpc2FibGVkXCI+XHJcbiAgICAgICAgICB7eyBva1RleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gW1ByZWRlZmluZWRdIENvbmZpcm0gTW9kYWwgQ29udGVudCAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxDb250ZW50Q29uZmlybT5cclxuICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHlcIj5cclxuICAgICAgICA8aSBuei1pY29uIFt0eXBlXT1cImljb25UeXBlXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tdGl0bGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNtYWNzVGl0bGUpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY21hY3NUaXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIhaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0NvbXBvbmVudChjb250ZW50KVwiIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjb250ZW50KVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNvbnRlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pnt7Y29udGVudH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1idG5zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gKm5nSWY9XCJjbWFjc0NhbmNlbFRleHQhPT1udWxsXCIgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJjYW5jZWxMb2FkaW5nXCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzT2tUZXh0IT09bnVsbFwiICNhdXRvRm9jdXNCdXR0b25PayBuei1idXR0b24gW256VHlwZV09XCJva1R5cGVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiIFtuekxvYWRpbmddPVwib2tMb2FkaW5nXCI+XHJcbiAgICAgICAgICB7eyBva1RleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gPCEtLSAvLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlciAtLT5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19