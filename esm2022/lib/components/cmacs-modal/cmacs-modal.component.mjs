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
import * as i6 from "ng-zorro-antd/core/wave";
import * as i7 from "ng-zorro-antd/grid";
import * as i8 from "ng-zorro-antd/button";
import * as i9 from "ng-zorro-antd/core/transition-patch";
import * as i10 from "ng-zorro-antd/icon";
import * as i11 from "ng-zorro-antd/core/no-animation";
import * as i12 from "@angular/cdk/drag-drop";
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
    i0.ɵɵlistener("click", function CmacsModalComponent_div_2_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r21.onClickCloseBtn()); });
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
    i0.ɵɵlistener("click", function CmacsModalComponent_div_2_Template_div_click_2_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29.onClickMask($event)); });
    i0.ɵɵelementStart(3, "div", 12, 13);
    i0.ɵɵpipe(5, "cmacsToCssUnit");
    i0.ɵɵelementStart(6, "div", 14);
    i0.ɵɵtemplate(7, CmacsModalComponent_div_2_button_7_Template, 2, 1, "button", 15);
    i0.ɵɵtemplate(8, CmacsModalComponent_div_2_ng_container_8_Template, 7, 7, "ng-container", 16);
    i0.ɵɵelementEnd()()()();
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
    i0.ɵɵelementStart(0, "div")(1, "div", 25);
    i0.ɵɵpipe(2, "cmacsToCssUnit");
    i0.ɵɵelementStart(3, "div", 26)(4, "button", 18);
    i0.ɵɵlistener("click", function CmacsModalComponent_div_3_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r33.closeInteraction()); });
    i0.ɵɵelementStart(5, "span", 27);
    i0.ɵɵelement(6, "i", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 28)(8, "div", 29);
    i0.ɵɵtemplate(9, CmacsModalComponent_div_3_div_9_Template, 2, 1, "div", 2);
    i0.ɵɵtemplate(10, CmacsModalComponent_div_3_div_10_Template, 2, 1, "div", 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 30);
    i0.ɵɵelementContainer(12, 24);
    i0.ɵɵelementEnd()()()();
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
    i0.ɵɵelementStart(0, "div", 34)(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_4_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_4_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_4_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_4_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementStart(0, "div", 41)(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_6_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_6_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_6_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_6_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
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
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_4_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r63); const button_r61 = restoredCtx.$implicit; const ctx_r62 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r62.onButtonClick(button_r61)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r61 = ctx.$implicit;
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", button_r61.label);
    i0.ɵɵproperty("hidden", !ctx_r60.getButtonCallableProp(button_r61, "show"))("nzLoading", ctx_r60.getButtonCallableProp(button_r61, "loading"))("disabled", ctx_r60.getButtonCallableProp(button_r61, "disabled"))("nzType", button_r61.type)("nzShape", button_r61.shape)("nzSize", button_r61.size)("nzGhost", button_r61.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r61.label);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_6_div_5_ng_container_4_button_1_Template, 2, 9, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r58.footer);
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r66.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r64.cancelText);
    i0.ɵɵproperty("nzLoading", ctx_r64.cancelLoading)("disabled", ctx_r64.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r64.cancelText, " ");
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r68.onClickOkCancel("ok")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r65.okText);
    i0.ɵɵproperty("nzType", ctx_r65.okType)("nzLoading", ctx_r65.okLoading)("disabled", ctx_r65.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r65.okText, " ");
} }
function CmacsModalComponent_ng_template_6_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_1_Template, 2, 4, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_6_div_5_ng_container_5_button_2_Template, 2, 5, "button", 47);
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
    i0.ɵɵelementStart(0, "div", 58)(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_8_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_8_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_8_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_8_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
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
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_4_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r84); const button_r82 = restoredCtx.$implicit; const ctx_r83 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r83.onButtonClick(button_r82)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r82 = ctx.$implicit;
    const ctx_r81 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", button_r82.label);
    i0.ɵɵproperty("hidden", !ctx_r81.getButtonCallableProp(button_r82, "show"))("nzLoading", ctx_r81.getButtonCallableProp(button_r82, "loading"))("disabled", ctx_r81.getButtonCallableProp(button_r82, "disabled"))("nzType", button_r82.type)("nzShape", button_r82.shape)("nzSize", button_r82.size)("nzGhost", button_r82.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r82.label);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_8_div_10_ng_container_4_button_1_Template, 2, 9, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r79 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r79.footer);
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r87.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r85 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r85.cancelText);
    i0.ɵɵproperty("nzLoading", ctx_r85.cancelLoading)("disabled", ctx_r85.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r85.cancelText, " ");
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r89.onClickOkCancel("ok")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r86.okText);
    i0.ɵɵproperty("nzType", ctx_r86.okType)("nzLoading", ctx_r86.okLoading)("disabled", ctx_r86.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r86.okText, " ");
} }
function CmacsModalComponent_ng_template_8_div_10_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_1_Template, 2, 4, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_8_div_10_ng_container_5_button_2_Template, 2, 5, "button", 47);
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
    i0.ɵɵelementStart(1, "div", 51)(2, "div", 52)(3, "div", 53);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 54);
    i0.ɵɵprojection(6, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 55, 56);
    i0.ɵɵprojection(9, 3);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_10_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_10_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_10_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_10_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
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
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_4_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r104); const button_r102 = restoredCtx.$implicit; const ctx_r103 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r103.onButtonClick(button_r102)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r102 = ctx.$implicit;
    const ctx_r101 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", button_r102.label);
    i0.ɵɵproperty("hidden", !ctx_r101.getButtonCallableProp(button_r102, "show"))("nzLoading", ctx_r101.getButtonCallableProp(button_r102, "loading"))("disabled", ctx_r101.getButtonCallableProp(button_r102, "disabled"))("nzType", button_r102.type)("nzShape", button_r102.shape)("nzSize", button_r102.size)("nzGhost", button_r102.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r102.label);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_10_div_7_ng_container_4_button_1_Template, 2, 9, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r99 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r99.footer);
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r108 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r108); const ctx_r107 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r107.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r105 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r105.cancelText);
    i0.ɵɵproperty("nzLoading", ctx_r105.cancelLoading)("disabled", ctx_r105.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r105.cancelText, " ");
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r110 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r110); const ctx_r109 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r109.onClickOkCancel("ok")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r106.okText);
    i0.ɵɵproperty("nzType", ctx_r106.okType)("nzLoading", ctx_r106.okLoading)("disabled", ctx_r106.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r106.okText, " ");
} }
function CmacsModalComponent_ng_template_10_div_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_1_Template, 2, 4, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_10_div_7_ng_container_5_button_2_Template, 2, 5, "button", 47);
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
    i0.ɵɵelementStart(1, "div", 61)(2, "div", 52)(3, "div", 62);
    i0.ɵɵprojection(4, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 63);
    i0.ɵɵprojection(6, 5);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 35);
    i0.ɵɵelementContainerStart(2, 22);
    i0.ɵɵtemplate(3, CmacsModalComponent_ng_template_12_div_0_ng_container_3_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(4, CmacsModalComponent_ng_template_12_div_0_ng_container_4_Template, 1, 1, "ng-container", 23);
    i0.ɵɵtemplate(5, CmacsModalComponent_ng_template_12_div_0_ng_container_5_Template, 3, 1, "ng-container", 36);
    i0.ɵɵtemplate(6, CmacsModalComponent_ng_template_12_div_0_ng_container_6_Template, 3, 1, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
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
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_4_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r124); const button_r122 = restoredCtx.$implicit; const ctx_r123 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r123.onButtonClick(button_r122)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r122 = ctx.$implicit;
    const ctx_r121 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", button_r122.label);
    i0.ɵɵproperty("hidden", !ctx_r121.getButtonCallableProp(button_r122, "show"))("nzLoading", ctx_r121.getButtonCallableProp(button_r122, "loading"))("disabled", ctx_r121.getButtonCallableProp(button_r122, "disabled"))("nzType", button_r122.type)("nzShape", button_r122.shape)("nzSize", button_r122.size)("nzGhost", button_r122.ghost);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r122.label);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_12_div_5_ng_container_4_button_1_Template, 2, 9, "button", 44);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r119.footer);
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r128); const ctx_r127 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r127.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r125.cancelText);
    i0.ɵɵproperty("nzLoading", ctx_r125.cancelLoading)("disabled", ctx_r125.cancelDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r125.cancelText, " ");
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r130 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r130); const ctx_r129 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r129.onClickOkCancel("ok")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r126 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r126.okText);
    i0.ɵɵproperty("nzType", ctx_r126.okType)("nzLoading", ctx_r126.okLoading)("disabled", ctx_r126.okDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r126.okText, " ");
} }
function CmacsModalComponent_ng_template_12_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_1_Template, 2, 4, "button", 46);
    i0.ɵɵtemplate(2, CmacsModalComponent_ng_template_12_div_5_ng_container_5_button_2_Template, 2, 5, "button", 47);
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
    i0.ɵɵelementStart(1, "div", 61)(2, "div", 52)(3, "div", 67);
    i0.ɵɵprojection(4, 6);
    i0.ɵɵelementEnd()()();
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
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_14_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r142); const ctx_r141 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r141.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r136.cancelText);
    i0.ɵɵproperty("nzLoading", ctx_r136.cancelLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r136.cancelText, " ");
} }
function CmacsModalComponent_ng_template_14_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77, 78);
    i0.ɵɵlistener("click", function CmacsModalComponent_ng_template_14_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r145); const ctx_r144 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r144.onClickOkCancel("ok")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r137.okText);
    i0.ɵɵproperty("nzType", ctx_r137.okType)("nzLoading", ctx_r137.okLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r137.okText, " ");
} }
function CmacsModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 68)(2, "div", 69);
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
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 73);
    i0.ɵɵtemplate(14, CmacsModalComponent_ng_template_14_button_14_Template, 2, 3, "button", 74);
    i0.ɵɵtemplate(15, CmacsModalComponent_ng_template_14_button_15_Template, 3, 4, "button", 75);
    i0.ɵɵelementEnd()()();
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
            return {
                ...{
                    type: 'default',
                    size: 'default',
                    autoLoading: true,
                    show: true,
                    loading: false,
                    disabled: false
                },
                ...button
            };
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
    static { this.ɵfac = function CmacsModalComponent_Factory(t) { return new (t || CmacsModalComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i2.NzI18nService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.ModalControlService), i0.ɵɵdirectiveInject(i4.FocusTrapFactory), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(MODAL_CONFIG, 8), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsModalComponent, selectors: [["cmacs-modal"]], viewQuery: function CmacsModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5, ViewContainerRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
            i0.ɵɵviewQuery(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tipsCreationWizard = _t);
        } }, inputs: { visible: "visible", closable: "closable", okLoading: "okLoading", okDisabled: "okDisabled", cancelDisabled: "cancelDisabled", cancelLoading: "cancelLoading", keyboard: "keyboard", noAnimation: "noAnimation", cmacsMask: "cmacsMask", cmacsMaskClosable: "cmacsMaskClosable", showHelpfulTips: "showHelpfulTips", useCmacsDefaultSizes: "useCmacsDefaultSizes", content: "content", componentParams: "componentParams", footer: "footer", getContainer: "getContainer", zIndex: "zIndex", leftPanelCols: "leftPanelCols", centerPanelCols: "centerPanelCols", rightPanelCols: "rightPanelCols", width: "width", wrapClassName: "wrapClassName", className: "className", cmacsStyle: "cmacsStyle", title: "title", cmacsTitle: "cmacsTitle", maskStyle: "maskStyle", bodyStyle: "bodyStyle", cmacsOkText: "cmacsOkText", cmacsCancelText: "cmacsCancelText", okType: "okType", iconType: "iconType", modalType: "modalType", onOk: "onOk", onCancel: "onCancel" }, outputs: { onOk: "onOk", onCancel: "onCancel", cmacsAfterOpen: "cmacsAfterOpen", cmacsAfterClose: "cmacsAfterClose", visibleChange: "visibleChange" }, exportAs: ["cmacsModal"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c5, decls: 16, vars: 2, consts: [["tplOriginContent", ""], [3, "nzNoAnimation", 4, "ngIf"], [4, "ngIf"], ["tplContentPassive", ""], ["tplContentDefault", ""], ["tplCreationDefault", ""], ["tplHelpfulTips", ""], ["tplHelpfulTipsWithoutPanel", ""], ["tplContentConfirm", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click"], ["role", "document", 3, "ngClass", "ngStyle"], ["modalContainer", ""], [1, "ant-modal-content"], ["role", "button", "class", "ant-modal-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], ["role", "button", "aria-label", "Close", 1, "ant-modal-close", 3, "click"], ["class", "iconspan", 3, "ant-modal-close-x", "ant-modal-close-x-basic", 4, "ngIf"], [1, "iconspan"], [1, "iconUILarge-Close"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["cdkDrag", "", 1, "cmacs-interaction-modal", 3, "ngStyle"], [1, "cmacs-interaction-modal-content"], [1, "ant-modal-close-x", "iconspan"], [1, "ant-modal-header", "cmacs-custom-header"], [1, "ant-modal-title", 2, "color", "#ffffff"], [1, "ant-modal-body", 2, "padding", "10px"], ["class", "ant-modal-header", "style", "height: 34px", 3, "padding", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["bodyContainer", ""], [1, "ant-modal-header", 2, "height", "34px"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], ["class", "ant-modal-header", 3, "height", "padding", 4, "ngIf"], [1, "ant-modal-body", "trans-model-body", 3, "ngStyle"], ["class", "ant-modal-footer trans-model-footer", 3, "border-top", "padding-bottom", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-footer", "trans-model-footer"], [4, "ngSwitchDefault"], ["role", "button", "nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "aria-label", "click", 4, "ngFor", "ngForOf"], ["role", "button", "nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "aria-label", "click"], ["role", "button", "nz-button", "", 3, "nzLoading", "disabled", "aria-label", "click", 4, "ngIf"], ["role", "button", "nz-button", "", 3, "nzType", "nzLoading", "disabled", "aria-label", "click", 4, "ngIf"], ["role", "button", "nz-button", "", 3, "nzLoading", "disabled", "aria-label", "click"], ["role", "button", "nz-button", "", 3, "nzType", "nzLoading", "disabled", "aria-label", "click"], ["class", "ant-modal-header creation-header", 4, "ngIf"], [1, "ant-modal-body", 2, "padding", "0", 3, "ngStyle"], ["nz-row", "", 2, "height", "100%", "overflow", "hidden"], ["nz-col", "", 1, "cmacs-modal-creation-left-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-creation-center-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-creation-right-panel", 3, "nzSpan"], ["tipsCreationWizard", ""], ["class", "ant-modal-footer creation-footer", 4, "ngIf"], [1, "ant-modal-header", "creation-header"], [1, "ant-modal-footer", "creation-footer"], ["class", "ant-modal-header helpful-header", 4, "ngIf"], [1, "ant-modal-body", 2, "padding", "0", "height", "531px", 3, "ngStyle"], ["nz-col", "", 1, "cmacs-modal-helpful-center-panel", 3, "nzSpan"], ["nz-col", "", 1, "cmacs-modal-helpful-right-panel", 3, "nzSpan"], ["class", "ant-modal-footer helpful-footer", 4, "ngIf"], [1, "ant-modal-header", "helpful-header"], [1, "ant-modal-footer", "helpful-footer"], ["nz-col", "", 1, "cmacs-modal-helpfulTips-no-panel-center", 3, "nzSpan"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "type"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["nz-button", "", "role", "button", 3, "nzLoading", "aria-label", "click", 4, "ngIf"], ["role", "button", "nz-button", "", 3, "nzType", "nzLoading", "aria-label", "click", 4, "ngIf"], ["nz-button", "", "role", "button", 3, "nzLoading", "aria-label", "click"], ["role", "button", "nz-button", "", 3, "nzType", "nzLoading", "aria-label", "click"], ["autoFocusButtonOk", ""]], template: function CmacsModalComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i5.NgClass, i5.NgForOf, i5.NgIf, i5.NgTemplateOutlet, i5.NgStyle, i5.NgSwitch, i5.NgSwitchCase, i5.NgSwitchDefault, i6.NzWaveDirective, i7.NzColDirective, i7.NzRowDirective, i8.NzButtonComponent, i9.ɵNzTransitionPatchDirective, i10.NzIconDirective, i11.NzNoAnimationDirective, i12.CdkDrag, i13.CmacsToCssUnitPipe], styles: [".ant-modal-content[_ngcontent-%COMP%]{border-radius:9px;box-shadow:0 3px 7px #3b3f4633}.ant-modal-body[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;line-height:1.5;word-wrap:break-word;color:#656c79}  .ant-modal-body h2{font-weight:400;font-size:16px;line-height:1.25em;color:#3b3f46;margin-bottom:18px}.model-wrapper[_ngcontent-%COMP%]{display:flex!important;height:100%}  .cmacs-signature-modal .cmacs-modal-helpfulTips-no-panel-center{padding-top:20px!important}  .ant-modal-footer .ant-btn-danger:hover{opacity:1!important}.model-container[_ngcontent-%COMP%]{margin:auto;top:0}.ant-btn-danger[_ngcontent-%COMP%], .ant-btn-danger[_ngcontent-%COMP%]:hover{background-color:#f6503c!important;border-color:#f6503c!important}.ant-modal-header[_ngcontent-%COMP%]{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff;border-radius:8px 8px 0 0}.ant-modal-title[_ngcontent-%COMP%]{font-family:Roboto-Regular;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x[_ngcontent-%COMP%]{color:#fff;line-height:34px;margin-right:20px}.ant-modal-close-x-basic[_ngcontent-%COMP%]{color:#fff;margin-right:20px;padding-right:15px;line-height:50px}.ant-modal-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.cmacs-interaction-modal[_ngcontent-%COMP%]{box-sizing:border-box;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;font-feature-settings:\"tnum\";position:absolute;width:auto;min-width:150px;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content[_ngcontent-%COMP%]{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px #00000026}.cmacs-custom-header[_ngcontent-%COMP%]{height:30px;padding:6px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal-content[_ngcontent-%COMP%]   .ant-modal-close-x[_ngcontent-%COMP%]{margin-right:12px}.trans-model-body[_ngcontent-%COMP%]{padding:24px 20px 10px}.trans-model-footer[_ngcontent-%COMP%]{padding:10px 20px 20px}  .trans-model-footer.ant-modal-footer button+button{margin-left:15px}.creation-header[_ngcontent-%COMP%], .creation-footer[_ngcontent-%COMP%], .helpful-header[_ngcontent-%COMP%], .helpful-footer[_ngcontent-%COMP%]{padding:16px 40px}.cmacs-modal-creation-left-panel[_ngcontent-%COMP%]{padding:0 40px;height:calc(100% - 80px);overflow:auto;border-right:1px solid #dee0e5;margin-top:40px;margin-bottom:40px;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%], .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%], .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]{height:100%;padding:40px;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-modal-creation-right-panel[_ngcontent-%COMP%], .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]{background-color:#f6f7fb;padding:40px 35px 35px;height:100%;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.creation-footer[_ngcontent-%COMP%], .helpful-footer[_ngcontent-%COMP%]{box-shadow:0 -2px 5px #3b3f461a;border-top:none;border-radius:0 0 8px 8px;z-index:1;position:relative}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.cmacs-modal-creation-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-creation-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpful-center-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpful-right-panel[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .cmacs-modal-helpfulTips-no-panel-center[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}@media screen and (max-width: 1024px){.ant-modal.largemodal[_ngcontent-%COMP%]{max-width:100vw;max-height:100vh;margin:auto;width:100%!important;height:100%!important;padding:0;top:0!important}.ant-modal.largemodal[_ngcontent-%COMP%] > .ant-modal-content[_ngcontent-%COMP%]{height:100%}.ant-modal.largemodal[_ngcontent-%COMP%] > .ant-modal-content[_ngcontent-%COMP%] > .ant-modal-body[_ngcontent-%COMP%]{height:calc(100% - 116px)!important}}"] }); }
}
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
        args: [{ selector: 'cmacs-modal', exportAs: 'cmacsModal', changeDetection: ChangeDetectionStrategy.Default, template: "<ng-template #tplOriginContent>\r\n  <ng-content></ng-content>\r\n</ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n  <!-- container for the models -->\r\n<div [nzNoAnimation]=\"noAnimation\" *ngIf=\"!isModalType('interaction')\">\r\n  <div *ngIf=\"mask\" class=\"ant-modal-mask\" [ngClass]=\"maskAnimationClassMap\" [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"maskStyle\" [style.zIndex]=\"zIndex\"></div>\r\n  <div (click)=\"onClickMask($event)\" class=\"ant-modal-wrap {{ wrapClassName }} model-wrapper\" [style.zIndex]=\"zIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\" tabindex=\"-1\" role=\"dialog\">\r\n    <div #modalContainer [ngClass]=\"getClass()\" [class]=\"modalAnimationClassMap\" [ngStyle]=\"cmacsStyle\"\r\n      [style.width]=\"width | cmacsToCssUnit\" [style.transform-origin]=\"transformOrigin\" role=\"document\">\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"closable\" role=\"button\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span *ngIf=\"isModalType('passive') || isModalType('interaction') || isModalType('basic')\"\r\n            [class.ant-modal-close-x]=\"!isModalType('basic')\" [class.ant-modal-close-x-basic]=\"isModalType('basic')\" class=\"iconspan\">\r\n            <i class=\"iconUILarge-Close\"></i>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('transactional')\" [ngTemplateOutlet]=\"tplContentDefault\">\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('creation')\" [ngTemplateOutlet]=\"tplCreationDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTips')\" [ngTemplateOutlet]=\"tplHelpfulTips\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('helpfulTipsNoPanel') || isModalType('basic')\"\r\n            [ngTemplateOutlet]=\"tplHelpfulTipsWithoutPanel\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('passive') || isModalType('interaction')\"\r\n            [ngTemplateOutlet]=\"tplContentPassive\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- interactive model -->\r\n<div *ngIf=\"isModalType('interaction')\">\r\n  <div [style.display]=\"visible ? 'inherit' : 'none'\" class=\"cmacs-interaction-modal\" cdkDrag [style.zIndex]=\"zIndex\"\r\n    [ngStyle]=\"cmacsStyle\" [style.width]=\"width | cmacsToCssUnit\">\r\n    <div class=\"cmacs-interaction-modal-content\">\r\n      <button class=\"ant-modal-close\" role=\"button\" aria-label=\"Close\" (click)=\"closeInteraction()\">\r\n        <span class=\"ant-modal-close-x iconspan\">\r\n          <i class=\"iconUILarge-Close\"></i>\r\n        </span>\r\n      </button>\r\n      <div class=\"ant-modal-header cmacs-custom-header\">\r\n        <div class=\"ant-modal-title\" style=\"color: #ffffff;\">\r\n          <div *ngIf=\"!isNonEmptyString(cmacsTitle)\">{{title}}</div>\r\n          <div *ngIf=\"isNonEmptyString(cmacsTitle)\">{{cmacsTitle}}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-body\" style=\"padding: 10px\">\r\n        <ng-container [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Passive model -->\r\n<ng-template #tplContentPassive>\r\n  <div *ngIf=\"title || cmacsTitle\" class=\"ant-modal-header\" [style.padding]=\"modalType === 'passive' ? '6px 20px' : '7px 10px'\"\r\n    style=\"height: 34px\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n          <div>{{title}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n          <div>{{cmacsTitle}}</div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\" [style.padding]=\"modalType === 'passive' ? '24px 10px 46px 20px' : '0'\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n          <div>{{content}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- transactional model -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"title || cmacsTitle\" class=\"ant-modal-header\" [style.height.px]=\"modalType === 'transactional' ? 30 : 50\"\r\n    [style.padding]=\"modalType === 'transactional' ? '6px 20px' : '16px 40px'\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n          <div>{{title}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n          <div>{{cmacsTitle}}</div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body trans-model-body\" [ngStyle]=\"bodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n          <div>{{content}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer trans-model-footer\"\r\n    [style.border-top]=\"modalType === 'transactional' ? 'none' : 'inherit'\"\r\n    [style.padding-bottom]=\"modalType === 'transactional' || modalType === 'passive' ? '20px' : 'inherit'\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div>{{footer}}</div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" role=\"button\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\" aria-label=\"{{button.label}}\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" role=\"button\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\" aria-label=\"{{ cancelText }}\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" role=\"button\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\" aria-label=\"{{ okText }}\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Creation Modal Content -->\r\n<ng-template #tplCreationDefault>\r\n  <div *ngIf=\"title || cmacsTitle\" class=\"ant-modal-header creation-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n          <div>{{title}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n          <div>{{cmacsTitle}}</div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? leftPanelCols : 6\" class=\"cmacs-modal-creation-left-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-left-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"showHelpfulTips ? centerPanelCols : (24 - leftPanelCols)\"\r\n        class=\"cmacs-modal-creation-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [style.display]=\"showHelpfulTips ? 'inherit' : 'none'\" #tipsCreationWizard [nzSpan]=\"rightPanelCols\"\r\n        class=\"cmacs-modal-creation-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-creation-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer creation-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div>{{footer}}</div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" role=\"button\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\" aria-label=\"{{ button.label }}\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" role=\"button\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\" aria-label=\"{{ cancelText }}\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" role=\"button\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\" aria-label=\"{{ okText }}\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Helpful tooltip model -->\r\n<ng-template #tplHelpfulTips>\r\n  <div *ngIf=\"title || cmacsTitle\" class=\"ant-modal-header helpful-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n          <div>{{title}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n          <div>{{cmacsTitle}}</div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"centerPanelCols ? centerPanelCols : 16\" class=\"cmacs-modal-helpful-center-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-center-panel]\"></ng-content>\r\n      </div>\r\n      <div nz-col [nzSpan]=\"rightPanelCols ? rightPanelCols : 8\" class=\"cmacs-modal-helpful-right-panel\">\r\n        <ng-content select=\"[cmacs-modal-helpful-right-panel]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer helpful-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div>{{footer}}</div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" role=\"button\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\" aria-label=\"{{ button.label }}\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" role=\"button\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\" aria-label=\"{{ cancelText }}\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" role=\"button\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\" aria-label=\"{{ okText }}\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Helpful tooltip without panel -->\r\n<ng-template #tplHelpfulTipsWithoutPanel>\r\n  <div *ngIf=\"title || cmacsTitle\" class=\"ant-modal-header helpful-header\">\r\n    <div class=\"ant-modal-title\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n          <div>{{title}}</div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n          <div>{{cmacsTitle}}</div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" style=\"padding: 0; height: 531px;\" [ngStyle]=\"bodyStyle\">\r\n    <div nz-row style=\"height: 100%; overflow: hidden;\">\r\n      <div nz-col [nzSpan]=\"24\" class=\"cmacs-modal-helpfulTips-no-panel-center\">\r\n        <ng-content select=\"[cmacs-modal-helpfulTips-no-panel-center]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"footer !== null\" class=\"ant-modal-footer helpful-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(footer)\">\r\n        <div>{{footer}}</div>\r\n      </ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(footer)\">\r\n        <button *ngFor=\"let button of footer\" role=\"button\" nz-button (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\" [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\" [nzType]=\"button.type\" [nzShape]=\"button.shape\"\r\n          [nzSize]=\"button.size\" [nzGhost]=\"button.ghost\" aria-label=\"{{ button.label }}\">{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"cmacsCancelText!==null\" role=\"button\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"cancelLoading\"\r\n          [disabled]=\"cancelDisabled\" aria-label=\"{{ cancelText }}\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" role=\"button\" nz-button [nzType]=\"okType\" (click)=\"onClickOkCancel('ok')\"\r\n          [nzLoading]=\"okLoading\" [disabled]=\"okDisabled\" aria-label=\"{{ okText }}\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [type]=\"iconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(title) && !isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"title\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(cmacsTitle)\" [ngTemplateOutlet]=\"cmacsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"!isNonEmptyString(cmacsTitle)\">\r\n              <div>{{title}}</div>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(cmacsTitle)\">\r\n              <div>{{cmacsTitle}}</div>\r\n            </ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container>\r\n            <ng-container *ngIf=\"!isComponent(content)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(content)\">\r\n                <div>{{content}}</div>\r\n              </ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button nz-button role=\"button\" *ngIf=\"cmacsCancelText!==null\" (click)=\"onClickOkCancel('cancel')\"\r\n          [nzLoading]=\"cancelLoading\" aria-label=\"{{ cancelText }}\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"cmacsOkText!==null\" role=\"button\" #autoFocusButtonOk nz-button [nzType]=\"okType\"\r\n          (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"okLoading\" aria-label=\"{{ okText }}\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n", styles: [".ant-modal-content{border-radius:9px;box-shadow:0 3px 7px #3b3f4633}.ant-modal-body{font-family:Roboto-Regular;font-size:14px;line-height:1.5;word-wrap:break-word;color:#656c79}::ng-deep .ant-modal-body h2{font-weight:400;font-size:16px;line-height:1.25em;color:#3b3f46;margin-bottom:18px}.model-wrapper{display:flex!important;height:100%}::ng-deep .cmacs-signature-modal .cmacs-modal-helpfulTips-no-panel-center{padding-top:20px!important}::ng-deep .ant-modal-footer .ant-btn-danger:hover{opacity:1!important}.model-container{margin:auto;top:0}.ant-btn-danger,.ant-btn-danger:hover{background-color:#f6503c!important;border-color:#f6503c!important}.ant-modal-header{background:#2a7cff;height:50px;border-bottom:1px solid #2a7cff;border-radius:8px 8px 0 0}.ant-modal-title{font-family:Roboto-Regular;font-size:14px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.29;letter-spacing:normal;color:#fff}.ant-modal-close-x{color:#fff;line-height:34px;margin-right:20px}.ant-modal-close-x-basic{color:#fff;margin-right:20px;padding-right:15px;line-height:50px}.ant-modal-close i{color:#fff}.cmacs-interaction-modal{box-sizing:border-box;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;font-feature-settings:\"tnum\";position:absolute;width:auto;min-width:150px;margin:0 auto;padding-bottom:24px}.cmacs-interaction-modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:0;border-radius:4px;box-shadow:0 4px 12px #00000026}.cmacs-custom-header{height:30px;padding:6px 12px;background:#2a7cff;border-bottom:1px solid #2a7cff}.cmacs-interaction-modal-content .ant-modal-close-x{margin-right:12px}.trans-model-body{padding:24px 20px 10px}.trans-model-footer{padding:10px 20px 20px}::ng-deep .trans-model-footer.ant-modal-footer button+button{margin-left:15px}.creation-header,.creation-footer,.helpful-header,.helpful-footer{padding:16px 40px}.cmacs-modal-creation-left-panel{padding:0 40px;height:calc(100% - 80px);overflow:auto;border-right:1px solid #dee0e5;margin-top:40px;margin-bottom:40px;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-modal-creation-center-panel,.cmacs-modal-helpful-center-panel,.cmacs-modal-helpfulTips-no-panel-center{height:100%;padding:40px;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-modal-creation-right-panel,.cmacs-modal-helpful-right-panel{background-color:#f6f7fb;padding:40px 35px 35px;height:100%;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.creation-footer,.helpful-footer{box-shadow:0 -2px 5px #3b3f461a;border-top:none;border-radius:0 0 8px 8px;z-index:1;position:relative}.cmacs-modal-creation-center-panel::-webkit-scrollbar,.cmacs-modal-creation-right-panel::-webkit-scrollbar,.cmacs-modal-helpful-center-panel::-webkit-scrollbar,.cmacs-modal-helpful-right-panel::-webkit-scrollbar,.cmacs-modal-helpfulTips-no-panel-center::-webkit-scrollbar{width:6px;height:6px}.cmacs-modal-creation-center-panel::-webkit-scrollbar-thumb,.cmacs-modal-creation-right-panel::-webkit-scrollbar-thumb,.cmacs-modal-helpful-center-panel::-webkit-scrollbar-thumb,.cmacs-modal-helpful-right-panel::-webkit-scrollbar-thumb,.cmacs-modal-helpfulTips-no-panel-center::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}.cmacs-modal-creation-center-panel::-webkit-scrollbar-thumb:hover,.cmacs-modal-creation-right-panel::-webkit-scrollbar-thumb:hover,.cmacs-modal-helpful-center-panel::-webkit-scrollbar-thumb:hover,.cmacs-modal-helpful-right-panel::-webkit-scrollbar-thumb:hover,.cmacs-modal-helpfulTips-no-panel-center::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}@media screen and (max-width: 1024px){.ant-modal.largemodal{max-width:100vw;max-height:100vh;margin:auto;width:100%!important;height:100%!important;padding:0;top:0!important}.ant-modal.largemodal>.ant-modal-content{height:100%}.ant-modal.largemodal>.ant-modal-content>.ant-modal-body{height:calc(100% - 116px)!important}}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1vZGFsL2NtYWNzLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy1tb2RhbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUdULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFBRSxZQUFZLEVBQ3ZCLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLFlBQVksRUFBZSxNQUFNLHNCQUFzQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RDekQsa0JBQXlCOzs7SUFLekIsMEJBQ3NEOzs7SUFBOUIseUNBQXVCO0lBRDRCLHVEQUFzQztJQUF4RSx1REFBaUMsOEJBQUE7OztJQVFsRSxnQ0FDNEg7SUFDMUgsd0JBQWlDO0lBQ25DLGlCQUFPOzs7SUFGTCxrRUFBaUQseURBQUE7Ozs7SUFGckQsa0NBQThHO0lBQXZFLDRLQUFTLGVBQUEseUJBQWlCLENBQUEsSUFBQztJQUNoRSxzRkFHTztJQUNULGlCQUFTOzs7SUFKQSxlQUFrRjtJQUFsRiwySEFBa0Y7OztJQU16Riw0QkFDZTs7OztJQUQ0QyxzQ0FBc0M7OztJQUVqRyw0QkFBMkc7Ozs7SUFBdEQsdUNBQXNDOzs7SUFDM0YsNEJBQTZHOzs7O0lBQXZELHNDQUF1Qzs7O0lBQzdGLDRCQUE0Rzs7OztJQUFuRCx1Q0FBbUM7OztJQUM1Riw0QkFDaUU7Ozs7SUFBL0QsdUNBQStDOzs7SUFDakQsNEJBQ3dEOzs7O0lBQXRELHNDQUFzQzs7O0lBVDFDLGlDQUFnRDtJQUM5Qyw0R0FDZTtJQUNmLDRHQUEyRztJQUMzRyw0R0FBNkc7SUFDN0csNEdBQTRHO0lBQzVHLDRHQUNpRTtJQUNqRSw0R0FDd0Q7SUFDMUQsMEJBQWU7OztJQVZlLCtCQUFpQjtJQUM5QixlQUEwQztJQUExQyxtRUFBMEM7SUFFMUMsZUFBb0M7SUFBcEMsNkRBQW9DO0lBQ3BDLGVBQXFDO0lBQXJDLDhEQUFxQztJQUNyQyxlQUF3QztJQUF4QyxpRUFBd0M7SUFDeEMsZUFBdUU7SUFBdkUsd0dBQXVFO0lBRXZFLGVBQWtFO0lBQWxFLG1HQUFrRTs7OztJQXRCM0YsOEJBQXVFO0lBQ3JFLDJFQUNzRDtJQUN0RCwrQkFDNEU7SUFEdkUscUtBQVMsZUFBQSwyQkFBbUIsQ0FBQSxJQUFDO0lBRWhDLG1DQUNvRzs7SUFDbEcsK0JBQStCO0lBQzdCLGlGQUtTO0lBQ1QsNkZBVWU7SUFDakIsaUJBQU0sRUFBQSxFQUFBLEVBQUE7OztJQXpCUCxrREFBNkI7SUFDMUIsZUFBVTtJQUFWLGtDQUFVO0lBRW1CLGVBQXdEO0lBQXhELG9GQUF3RDtJQUFDLHdDQUF1QiwrQ0FBQTtJQUVyRSxlQUFnQztJQUFoQyw0Q0FBZ0M7SUFDMUUsNERBQXNDLDRDQUFBO0lBRG5CLDJDQUFzQiw4QkFBQTtJQUc5QixlQUFjO0lBQWQsc0NBQWM7SUFNUixlQUFhO0lBQWIscUNBQWE7OztJQTRCMUIsMkJBQTJDO0lBQUEsWUFBUztJQUFBLGlCQUFNOzs7SUFBZixlQUFTO0lBQVQsbUNBQVM7OztJQUNwRCwyQkFBMEM7SUFBQSxZQUFjO0lBQUEsaUJBQU07OztJQUFwQixlQUFjO0lBQWQsd0NBQWM7Ozs7SUFabEUsMkJBQXdDLGNBQUE7O0lBR3BDLCtCQUE2QyxpQkFBQTtJQUNzQixrS0FBUyxlQUFBLDBCQUFrQixDQUFBLElBQUM7SUFDM0YsZ0NBQXlDO0lBQ3ZDLHdCQUFpQztJQUNuQyxpQkFBTyxFQUFBO0lBRVQsK0JBQWtELGNBQUE7SUFFOUMsMEVBQTBEO0lBQzFELDRFQUE4RDtJQUNoRSxpQkFBTSxFQUFBO0lBRVIsZ0NBQWtEO0lBQ2hELDZCQUFtRTtJQUNyRSxpQkFBTSxFQUFBLEVBQUEsRUFBQTs7OztJQWhCTCxlQUE4QztJQUE5Qyw4REFBOEMsMEJBQUEsOENBQUE7SUFDakQsMkNBQXNCO0lBU1YsZUFBbUM7SUFBbkMsa0VBQW1DO0lBQ25DLGVBQWtDO0lBQWxDLGlFQUFrQztJQUk1QixlQUFxQztJQUFyQyxzQ0FBcUM7OztJQVluRCw0QkFBMkg7OztJQUExQyxnREFBMEI7OztJQUMzRyw0QkFBdUc7OztJQUEvQyxxREFBK0I7OztJQUN2Riw2QkFBNEQ7SUFDMUQsMkJBQUs7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDdEIsMEJBQWU7OztJQURSLGVBQVM7SUFBVCxtQ0FBUzs7O0lBRWhCLDZCQUEyRDtJQUN6RCwyQkFBSztJQUFBLFlBQWM7SUFBQSxpQkFBTTtJQUMzQiwwQkFBZTs7O0lBRFIsZUFBYztJQUFkLHdDQUFjOzs7SUFWM0IsK0JBQ3VCLGNBQUE7SUFFbkIsaUNBQWdDO0lBQzlCLDJHQUEySDtJQUMzSCwyR0FBdUc7SUFDdkcsMkdBRWU7SUFDZiwyR0FFZTtJQUNqQiwwQkFBZTtJQUNqQixpQkFBTSxFQUFBOzs7SUFia0Qsb0ZBQW1FO0lBRzNHLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQWdFO0lBQWhFLGlIQUFnRTtJQUNoRSxlQUF1QztJQUF2Qyx3RUFBdUM7SUFDdkMsZUFBMkM7SUFBM0MsNEVBQTJDO0lBRzNDLGVBQTBDO0lBQTFDLDJFQUEwQzs7O0lBU3pELDRCQUFpRzs7O0lBQTVDLGtEQUE0Qjs7O0lBQ2pGLDZCQUF3RDtJQUN0RCwyQkFBSztJQUFBLFlBQVc7SUFBQSxpQkFBTTtJQUN4QiwwQkFBZTs7O0lBRFIsZUFBVztJQUFYLHFDQUFXOzs7SUFFbEIsNEJBQW9GOzs7O0lBQXJELHNDQUFxQzs7O0lBTHRFLGlDQUE4RDtJQUM1RCxvSEFBaUc7SUFDakcsb0hBRWU7SUFDZixvSEFBb0Y7SUFDdEYsMEJBQWU7OztJQU42QiwrQkFBaUI7SUFDNUMsZUFBb0M7SUFBcEMscUVBQW9DO0lBQ3BDLGVBQXVDO0lBQXZDLHdFQUF1Qzs7O0lBbkI1RCxtRkFjTTtJQUNOLCtCQUEwSDtJQUN4SCx1Q0FBNkI7SUFDM0IscUdBTWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07OztJQXpCQSx3REFBeUI7SUFlbUIsZUFBdUU7SUFBdkUsdUZBQXVFO0lBQTdGLDBDQUFxQjtJQUU5QixlQUEyQjtJQUEzQiwwREFBMkI7OztJQWlCeEMsNEJBQTJIOzs7SUFBMUMsZ0RBQTBCOzs7SUFDM0csNEJBQXVHOzs7SUFBL0MscURBQStCOzs7SUFDdkYsNkJBQTREO0lBQzFELDJCQUFLO0lBQUEsWUFBUztJQUFBLGlCQUFNO0lBQ3RCLDBCQUFlOzs7SUFEUixlQUFTO0lBQVQsbUNBQVM7OztJQUVoQiw2QkFBMkQ7SUFDekQsMkJBQUs7SUFBQSxZQUFjO0lBQUEsaUJBQU07SUFDM0IsMEJBQWU7OztJQURSLGVBQWM7SUFBZCx3Q0FBYzs7O0lBVjNCLCtCQUM2RSxjQUFBO0lBRXpFLGlDQUFnQztJQUM5QiwyR0FBMkg7SUFDM0gsMkdBQXVHO0lBQ3ZHLDJHQUVlO0lBQ2YsMkdBRWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU0sRUFBQTs7O0lBYmtELCtFQUEyRCw2RUFBQTtJQUduRyxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFnRTtJQUFoRSxpSEFBZ0U7SUFDaEUsZUFBdUM7SUFBdkMsd0VBQXVDO0lBQ3ZDLGVBQTJDO0lBQTNDLDRFQUEyQztJQUczQyxlQUEwQztJQUExQywyRUFBMEM7OztJQVN6RCw0QkFBaUc7OztJQUE1QyxrREFBNEI7OztJQUNqRiw2QkFBd0Q7SUFDdEQsMkJBQUs7SUFBQSxZQUFXO0lBQUEsaUJBQU07SUFDeEIsMEJBQWU7OztJQURSLGVBQVc7SUFBWCxxQ0FBVzs7O0lBRWxCLDRCQUFvRjs7OztJQUFyRCxzQ0FBcUM7OztJQUx0RSxpQ0FBOEQ7SUFDNUQsb0hBQWlHO0lBQ2pHLG9IQUVlO0lBQ2Ysb0hBQW9GO0lBQ3RGLDBCQUFlOzs7SUFONkIsK0JBQWlCO0lBQzVDLGVBQW9DO0lBQXBDLHFFQUFvQztJQUNwQyxlQUF1QztJQUF2Qyx3RUFBdUM7OztJQVd4RCw0QkFBK0Y7OztJQUEzQyxpREFBMkI7OztJQUMvRSw2QkFBdUQ7SUFDckQsMkJBQUs7SUFBQSxZQUFVO0lBQUEsaUJBQU07SUFDdkIsMEJBQWU7OztJQURSLGVBQVU7SUFBVixvQ0FBVTs7OztJQUdmLGtDQUdnRjtJQUhsQix1UUFBUyxlQUFBLGlDQUFxQixDQUFBLElBQUM7SUFHYixZQUFrQjtJQUFBLGlCQUFTOzs7O0lBQXpELHdEQUE2QjtJQUY3RSwyRUFBaUQsbUVBQUEsbUVBQUEsMkJBQUEsNkJBQUEsMkJBQUEsNkJBQUE7SUFFNkIsZUFBa0I7SUFBbEIsc0NBQWtCOzs7SUFKcEcsNkJBQXFEO0lBQ25ELDhHQUcyRztJQUM3RywwQkFBZTs7O0lBSmMsZUFBUztJQUFULHdDQUFTOzs7O0lBTXBDLGtDQUM0RDtJQURHLHlNQUFTLGVBQUEsd0JBQWdCLFFBQVEsQ0FBQyxDQUFBLElBQUM7SUFFaEcsWUFDRjtJQUFBLGlCQUFTOzs7SUFGcUIsMERBQTZCO0lBRHdDLGlEQUEyQixvQ0FBQTtJQUU1SCxlQUNGO0lBREUsbURBQ0Y7Ozs7SUFDQSxrQ0FDNEU7SUFEQyx5TUFBUyxlQUFBLHdCQUFnQixJQUFJLENBQUMsQ0FBQSxJQUFDO0lBRTFHLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRnlDLHNEQUF5QjtJQURoQix1Q0FBaUIsZ0NBQUEsZ0NBQUE7SUFFMUUsZUFDRjtJQURFLCtDQUNGOzs7SUFSRiw2QkFBK0I7SUFDN0IsOEdBR1M7SUFDVCw4R0FHUztJQUNYLDBCQUFlOzs7SUFSSixlQUE0QjtJQUE1Qix1REFBNEI7SUFJNUIsZUFBd0I7SUFBeEIsbURBQXdCOzs7SUFuQnZDLCtCQUV5RztJQUN2RyxpQ0FBZ0M7SUFDOUIsMkdBQStGO0lBQy9GLDJHQUVlO0lBQ2YsMkdBS2U7SUFDZiwyR0FTZTtJQUNqQiwwQkFBZTtJQUNqQixpQkFBTTs7O0lBeEJKLHdGQUF1RSxpSEFBQTtJQUV6RCxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFtQztJQUFuQyxvRUFBbUM7SUFDbkMsZUFBc0M7SUFBdEMsdUVBQXNDO0lBR3RDLGVBQW9DO0lBQXBDLHFFQUFvQzs7O0lBbEN2RCxtRkFjTTtJQUNOLCtCQUFtRTtJQUNqRSx1Q0FBNkI7SUFDM0IscUdBTWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07SUFDTixtRkF5Qk07OztJQW5EQSx3REFBeUI7SUFlYyxlQUFxQjtJQUFyQiwwQ0FBcUI7SUFFL0MsZUFBMkI7SUFBM0IsMERBQTJCO0lBU3hDLGVBQXFCO0lBQXJCLDZDQUFxQjs7O0lBaUNyQiw0QkFBMkg7OztJQUExQyxnREFBMEI7OztJQUMzRyw0QkFBdUc7OztJQUEvQyxxREFBK0I7OztJQUN2Riw2QkFBNEQ7SUFDMUQsMkJBQUs7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDdEIsMEJBQWU7OztJQURSLGVBQVM7SUFBVCxtQ0FBUzs7O0lBRWhCLDZCQUEyRDtJQUN6RCwyQkFBSztJQUFBLFlBQWM7SUFBQSxpQkFBTTtJQUMzQiwwQkFBZTs7O0lBRFIsZUFBYztJQUFkLHdDQUFjOzs7SUFUM0IsK0JBQTBFLGNBQUE7SUFFdEUsaUNBQWdDO0lBQzlCLDJHQUEySDtJQUMzSCwyR0FBdUc7SUFDdkcsMkdBRWU7SUFDZiwyR0FFZTtJQUNqQiwwQkFBZTtJQUNqQixpQkFBTSxFQUFBOzs7SUFWVSxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFnRTtJQUFoRSxpSEFBZ0U7SUFDaEUsZUFBdUM7SUFBdkMsd0VBQXVDO0lBQ3ZDLGVBQTJDO0lBQTNDLDRFQUEyQztJQUczQyxlQUEwQztJQUExQywyRUFBMEM7OztJQXVCM0QsNEJBQStGOzs7SUFBM0MsaURBQTJCOzs7SUFDL0UsNkJBQXVEO0lBQ3JELDJCQUFLO0lBQUEsWUFBVTtJQUFBLGlCQUFNO0lBQ3ZCLDBCQUFlOzs7SUFEUixlQUFVO0lBQVYsb0NBQVU7Ozs7SUFHZixrQ0FHa0Y7SUFIcEIsd1FBQVMsZUFBQSxpQ0FBcUIsQ0FBQSxJQUFDO0lBR1gsWUFBa0I7SUFBQSxpQkFBUzs7OztJQUEzRCx3REFBK0I7SUFGL0UsMkVBQWlELG1FQUFBLG1FQUFBLDJCQUFBLDZCQUFBLDJCQUFBLDZCQUFBO0lBRStCLGVBQWtCO0lBQWxCLHNDQUFrQjs7O0lBSnRHLDZCQUFxRDtJQUNuRCwrR0FHNkc7SUFDL0csMEJBQWU7OztJQUpjLGVBQVM7SUFBVCx3Q0FBUzs7OztJQU1wQyxrQ0FDNEQ7SUFERywwTUFBUyxlQUFBLHdCQUFnQixRQUFRLENBQUMsQ0FBQSxJQUFDO0lBRWhHLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRnFCLDBEQUE2QjtJQUR3QyxpREFBMkIsb0NBQUE7SUFFNUgsZUFDRjtJQURFLG1EQUNGOzs7O0lBQ0Esa0NBQzRFO0lBREMsME1BQVMsZUFBQSx3QkFBZ0IsSUFBSSxDQUFDLENBQUEsSUFBQztJQUUxRyxZQUNGO0lBQUEsaUJBQVM7OztJQUZ5QyxzREFBeUI7SUFEaEIsdUNBQWlCLGdDQUFBLGdDQUFBO0lBRTFFLGVBQ0Y7SUFERSwrQ0FDRjs7O0lBUkYsNkJBQStCO0lBQzdCLCtHQUdTO0lBQ1QsK0dBR1M7SUFDWCwwQkFBZTs7O0lBUkosZUFBNEI7SUFBNUIsdURBQTRCO0lBSTVCLGVBQXdCO0lBQXhCLG1EQUF3Qjs7O0lBakJ2QywrQkFBc0U7SUFDcEUsaUNBQWdDO0lBQzlCLDRHQUErRjtJQUMvRiw0R0FFZTtJQUNmLDRHQUtlO0lBQ2YsNEdBU2U7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07OztJQXRCVSxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFtQztJQUFuQyxvRUFBbUM7SUFDbkMsZUFBc0M7SUFBdEMsdUVBQXNDO0lBR3RDLGVBQW9DO0lBQXBDLHFFQUFvQzs7O0lBbkN2RCxtRkFhTTtJQUNOLCtCQUFxRSxjQUFBLGNBQUE7SUFHL0QscUJBQW9FO0lBQ3RFLGlCQUFNO0lBQ04sK0JBQzRDO0lBQzFDLHFCQUFzRTtJQUN4RSxpQkFBTTtJQUNOLG1DQUMyQztJQUN6QyxxQkFBcUU7SUFDdkUsaUJBQU0sRUFBQSxFQUFBO0lBR1YscUZBdUJNOzs7SUFwREEsd0RBQXlCO0lBY2dCLGVBQXFCO0lBQXJCLDBDQUFxQjtJQUVwRCxlQUE4QztJQUE5QywwRUFBOEM7SUFHOUMsZUFBbUU7SUFBbkUsb0dBQW1FO0lBSW5FLGVBQXNEO0lBQXRELHNFQUFzRDtJQUFxQiw4Q0FBeUI7SUFNOUcsZUFBcUI7SUFBckIsNkNBQXFCOzs7SUErQnJCLDRCQUEySDs7O0lBQTFDLGdEQUEwQjs7O0lBQzNHLDRCQUF1Rzs7O0lBQS9DLHFEQUErQjs7O0lBQ3ZGLDZCQUE0RDtJQUMxRCwyQkFBSztJQUFBLFlBQVM7SUFBQSxpQkFBTTtJQUN0QiwwQkFBZTs7O0lBRFIsZUFBUztJQUFULG1DQUFTOzs7SUFFaEIsNkJBQTJEO0lBQ3pELDJCQUFLO0lBQUEsWUFBYztJQUFBLGlCQUFNO0lBQzNCLDBCQUFlOzs7SUFEUixlQUFjO0lBQWQsd0NBQWM7OztJQVQzQiwrQkFBeUUsY0FBQTtJQUVyRSxpQ0FBZ0M7SUFDOUIsNEdBQTJIO0lBQzNILDRHQUF1RztJQUN2Ryw0R0FFZTtJQUNmLDRHQUVlO0lBQ2pCLDBCQUFlO0lBQ2pCLGlCQUFNLEVBQUE7OztJQVZVLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQWdFO0lBQWhFLGlIQUFnRTtJQUNoRSxlQUF1QztJQUF2Qyx3RUFBdUM7SUFDdkMsZUFBMkM7SUFBM0MsNEVBQTJDO0lBRzNDLGVBQTBDO0lBQTFDLDJFQUEwQzs7O0lBa0IzRCw0QkFBK0Y7OztJQUEzQyxpREFBMkI7OztJQUMvRSw2QkFBdUQ7SUFDckQsMkJBQUs7SUFBQSxZQUFVO0lBQUEsaUJBQU07SUFDdkIsMEJBQWU7OztJQURSLGVBQVU7SUFBVixvQ0FBVTs7OztJQUdmLGtDQUdrRjtJQUhwQiwyUUFBUyxlQUFBLG1DQUFxQixDQUFBLElBQUM7SUFHWCxZQUFrQjtJQUFBLGlCQUFTOzs7O0lBQTNELHlEQUErQjtJQUYvRSw2RUFBaUQscUVBQUEscUVBQUEsNEJBQUEsOEJBQUEsNEJBQUEsOEJBQUE7SUFFK0IsZUFBa0I7SUFBbEIsdUNBQWtCOzs7SUFKdEcsNkJBQXFEO0lBQ25ELCtHQUc2RztJQUMvRywwQkFBZTs7O0lBSmMsZUFBUztJQUFULHdDQUFTOzs7O0lBTXBDLGtDQUM0RDtJQURHLDRNQUFTLGVBQUEseUJBQWdCLFFBQVEsQ0FBQyxDQUFBLElBQUM7SUFFaEcsWUFDRjtJQUFBLGlCQUFTOzs7SUFGcUIsMkRBQTZCO0lBRHdDLGtEQUEyQixxQ0FBQTtJQUU1SCxlQUNGO0lBREUsb0RBQ0Y7Ozs7SUFDQSxrQ0FDNEU7SUFEQyw0TUFBUyxlQUFBLHlCQUFnQixJQUFJLENBQUMsQ0FBQSxJQUFDO0lBRTFHLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRnlDLHVEQUF5QjtJQURoQix3Q0FBaUIsaUNBQUEsaUNBQUE7SUFFMUUsZUFDRjtJQURFLGdEQUNGOzs7SUFSRiw2QkFBK0I7SUFDN0IsK0dBR1M7SUFDVCwrR0FHUztJQUNYLDBCQUFlOzs7SUFSSixlQUE0QjtJQUE1Qix3REFBNEI7SUFJNUIsZUFBd0I7SUFBeEIsb0RBQXdCOzs7SUFqQnZDLCtCQUFxRTtJQUNuRSxpQ0FBZ0M7SUFDOUIsNEdBQStGO0lBQy9GLDRHQUVlO0lBQ2YsNEdBS2U7SUFDZiw0R0FTZTtJQUNqQiwwQkFBZTtJQUNqQixpQkFBTTs7O0lBdEJVLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQW1DO0lBQW5DLG9FQUFtQztJQUNuQyxlQUFzQztJQUF0Qyx1RUFBc0M7SUFHdEMsZUFBb0M7SUFBcEMscUVBQW9DOzs7SUE5QnZELG9GQWFNO0lBQ04sK0JBQXFGLGNBQUEsY0FBQTtJQUcvRSxxQkFBcUU7SUFDdkUsaUJBQU07SUFDTiwrQkFBbUc7SUFDakcscUJBQW9FO0lBQ3RFLGlCQUFNLEVBQUEsRUFBQTtJQUdWLG9GQXVCTTs7O0lBL0NBLDBEQUF5QjtJQWNnQyxlQUFxQjtJQUFyQiwyQ0FBcUI7SUFFcEUsZUFBaUQ7SUFBakQsK0VBQWlEO0lBR2pELGVBQThDO0lBQTlDLDRFQUE4QztJQUt4RCxlQUFxQjtJQUFyQiw4Q0FBcUI7OztJQStCckIsNEJBQTJIOzs7SUFBMUMsaURBQTBCOzs7SUFDM0csNEJBQXVHOzs7SUFBL0Msc0RBQStCOzs7SUFDdkYsNkJBQTREO0lBQzFELDJCQUFLO0lBQUEsWUFBUztJQUFBLGlCQUFNO0lBQ3RCLDBCQUFlOzs7SUFEUixlQUFTO0lBQVQsb0NBQVM7OztJQUVoQiw2QkFBMkQ7SUFDekQsMkJBQUs7SUFBQSxZQUFjO0lBQUEsaUJBQU07SUFDM0IsMEJBQWU7OztJQURSLGVBQWM7SUFBZCx5Q0FBYzs7O0lBVDNCLCtCQUF5RSxjQUFBO0lBRXJFLGlDQUFnQztJQUM5Qiw0R0FBMkg7SUFDM0gsNEdBQXVHO0lBQ3ZHLDRHQUVlO0lBQ2YsNEdBRWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU0sRUFBQTs7O0lBVlUsZUFBaUI7SUFBakIsK0JBQWlCO0lBQ2QsZUFBZ0U7SUFBaEUscUhBQWdFO0lBQ2hFLGVBQXVDO0lBQXZDLDBFQUF1QztJQUN2QyxlQUEyQztJQUEzQyw4RUFBMkM7SUFHM0MsZUFBMEM7SUFBMUMsNkVBQTBDOzs7SUFlM0QsNEJBQStGOzs7SUFBM0Msa0RBQTJCOzs7SUFDL0UsNkJBQXVEO0lBQ3JELDJCQUFLO0lBQUEsWUFBVTtJQUFBLGlCQUFNO0lBQ3ZCLDBCQUFlOzs7SUFEUixlQUFVO0lBQVYscUNBQVU7Ozs7SUFHZixrQ0FHa0Y7SUFIcEIsMlFBQVMsZUFBQSxtQ0FBcUIsQ0FBQSxJQUFDO0lBR1gsWUFBa0I7SUFBQSxpQkFBUzs7OztJQUEzRCx5REFBK0I7SUFGL0UsNkVBQWlELHFFQUFBLHFFQUFBLDRCQUFBLDhCQUFBLDRCQUFBLDhCQUFBO0lBRStCLGVBQWtCO0lBQWxCLHVDQUFrQjs7O0lBSnRHLDZCQUFxRDtJQUNuRCwrR0FHNkc7SUFDL0csMEJBQWU7OztJQUpjLGVBQVM7SUFBVCx5Q0FBUzs7OztJQU1wQyxrQ0FDNEQ7SUFERyw0TUFBUyxlQUFBLHlCQUFnQixRQUFRLENBQUMsQ0FBQSxJQUFDO0lBRWhHLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRnFCLDJEQUE2QjtJQUR3QyxrREFBMkIscUNBQUE7SUFFNUgsZUFDRjtJQURFLG9EQUNGOzs7O0lBQ0Esa0NBQzRFO0lBREMsNE1BQVMsZUFBQSx5QkFBZ0IsSUFBSSxDQUFDLENBQUEsSUFBQztJQUUxRyxZQUNGO0lBQUEsaUJBQVM7OztJQUZ5Qyx1REFBeUI7SUFEaEIsd0NBQWlCLGlDQUFBLGlDQUFBO0lBRTFFLGVBQ0Y7SUFERSxnREFDRjs7O0lBUkYsNkJBQStCO0lBQzdCLCtHQUdTO0lBQ1QsK0dBR1M7SUFDWCwwQkFBZTs7O0lBUkosZUFBNEI7SUFBNUIsd0RBQTRCO0lBSTVCLGVBQXdCO0lBQXhCLG9EQUF3Qjs7O0lBakJ2QywrQkFBcUU7SUFDbkUsaUNBQWdDO0lBQzlCLDRHQUErRjtJQUMvRiw0R0FFZTtJQUNmLDRHQUtlO0lBQ2YsNEdBU2U7SUFDakIsMEJBQWU7SUFDakIsaUJBQU07OztJQXRCVSxlQUFpQjtJQUFqQiwrQkFBaUI7SUFDZCxlQUFtQztJQUFuQyxzRUFBbUM7SUFDbkMsZUFBc0M7SUFBdEMseUVBQXNDO0lBR3RDLGVBQW9DO0lBQXBDLHVFQUFvQzs7O0lBM0J2RCxvRkFhTTtJQUNOLCtCQUFxRixjQUFBLGNBQUE7SUFHL0UscUJBQTRFO0lBQzlFLGlCQUFNLEVBQUEsRUFBQTtJQUdWLG9GQXVCTTs7O0lBNUNBLDBEQUF5QjtJQWNnQyxlQUFxQjtJQUFyQiwyQ0FBcUI7SUFFcEUsZUFBYTtJQUFiLDJCQUFhO0lBS3ZCLGVBQXFCO0lBQXJCLDhDQUFxQjs7O0lBa0NqQiw0QkFBMkg7OztJQUExQyxpREFBMEI7OztJQUMzRyw0QkFBdUc7OztJQUEvQyxzREFBK0I7OztJQUN2Riw2QkFBNEQ7SUFDMUQsMkJBQUs7SUFBQSxZQUFTO0lBQUEsaUJBQU07SUFDdEIsMEJBQWU7OztJQURSLGVBQVM7SUFBVCxvQ0FBUzs7O0lBRWhCLDZCQUEyRDtJQUN6RCwyQkFBSztJQUFBLFlBQWM7SUFBQSxpQkFBTTtJQUMzQiwwQkFBZTs7O0lBRFIsZUFBYztJQUFkLHlDQUFjOzs7SUFPbkIsNEJBQWlHOzs7SUFBNUMsbURBQTRCOzs7SUFDakYsNkJBQXdEO0lBQ3RELDJCQUFLO0lBQUEsWUFBVztJQUFBLGlCQUFNO0lBQ3hCLDBCQUFlOzs7SUFEUixlQUFXO0lBQVgsc0NBQVc7OztJQUVsQiw0QkFBb0Y7Ozs7SUFBckQsc0NBQXFDOzs7SUFMdEUsaUNBQThEO0lBQzVELHNIQUFpRztJQUNqRyxzSEFFZTtJQUNmLHNIQUFvRjtJQUN0RiwwQkFBZTs7O0lBTjZCLCtCQUFpQjtJQUM1QyxlQUFvQztJQUFwQyx1RUFBb0M7SUFDcEMsZUFBdUM7SUFBdkMsMEVBQXVDOzs7O0lBUzVELGtDQUM0RDtJQURHLHdMQUFTLGVBQUEseUJBQWdCLFFBQVEsQ0FBQyxDQUFBLElBQUM7SUFFaEcsWUFDRjtJQUFBLGlCQUFTOzs7SUFGcUIsMkRBQTZCO0lBQXpELGtEQUEyQjtJQUMzQixlQUNGO0lBREUsb0RBQ0Y7Ozs7SUFDQSxzQ0FDb0Y7SUFBbEYsd0xBQVMsZUFBQSx5QkFBZ0IsSUFBSSxDQUFDLENBQUEsSUFBQztJQUMvQixZQUNGO0lBQUEsaUJBQVM7OztJQUZpRCx1REFBeUI7SUFETCx3Q0FBaUIsaUNBQUE7SUFFN0YsZUFDRjtJQURFLGdEQUNGOzs7SUFwQ04sK0JBQWtELGNBQUEsY0FBQTtJQUc1Qyx3QkFBaUM7SUFDakMsZ0NBQXNDO0lBQ3BDLGlDQUFnQztJQUM5QixzR0FBMkg7SUFDM0gsc0dBQXVHO0lBQ3ZHLHNHQUVlO0lBQ2Ysc0dBRWU7SUFDakIsMEJBQWU7SUFDakIsaUJBQU87SUFDUCxnQ0FBdUM7SUFDckMsOEJBQWM7SUFDWix3R0FNZTtJQUNqQiwwQkFBZTtJQUNqQixpQkFBTSxFQUFBO0lBRVIsZ0NBQW9DO0lBQ2xDLDRGQUdTO0lBQ1QsNEZBR1M7SUFDWCxpQkFBTSxFQUFBLEVBQUE7OztJQXJDa0IsMkNBQXFCO0lBR2hDLGVBQWlCO0lBQWpCLHVDQUFpQjtJQUVaLGVBQWlCO0lBQWpCLCtCQUFpQjtJQUNkLGVBQWdFO0lBQWhFLGlIQUFnRTtJQUNoRSxlQUF1QztJQUF2Qyx3RUFBdUM7SUFDdkMsZUFBMkM7SUFBM0MsNEVBQTJDO0lBRzNDLGVBQTBDO0lBQTFDLDJFQUEwQztJQU8xQyxlQUEyQjtJQUEzQiw0REFBMkI7SUFXYixlQUE0QjtJQUE1Qix1REFBNEI7SUFJcEQsZUFBd0I7SUFBeEIsbURBQXdCOzs7O0FEeFN6QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLENBQUMsQ0FBQyx3Q0FBd0M7QUFhbkYsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxtQkFBc0MsU0FBUSxhQUFtQjtJQWdENUUsUUFBUTtRQUNOLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakQsV0FBVyxJQUFJLGFBQWEsSUFBSSxDQUFDLFNBQVMsa0JBQWtCLENBQUM7UUFDN0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLHNDQUFzQztRQUN0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLGtDQUFrQztRQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVcsQ0FBQztJQUN6RCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0MsQ0FBQyxDQUFDLDZDQUE2QztJQUUvQzs7Ozs7O09BTUc7SUFDSCxJQUFJLElBQUk7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2QjthQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzdFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxJQUFJLFlBQVk7UUFDZCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7YUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLElBQUksSUFBSSxFQUFFO1lBQ3JGLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO1NBQ2pEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQWlCRCxZQUNVLE9BQWdCLEVBQ2hCLElBQW1CLEVBQ25CLEdBQTZCLEVBQzdCLFVBQXNCLEVBQ3RCLGFBQStCLEVBQy9CLFlBQWlDLEVBQ2pDLGdCQUFrQyxFQUNsQyxHQUFzQixFQUNZLGlCQUE4QixFQUM5QyxRQUFhLENBQUMsNkJBQTZCOztRQUVyRSxLQUFLLEVBQUUsQ0FBQztRQVhBLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNZLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYTtRQUM5QyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBeEloQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFHcEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBSTVDLGlCQUFZLEdBQWdFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXO1FBQ3BILFdBQU0sR0FBVyxJQUFJLENBQUM7UUFJdEIsVUFBSyxHQUFvQixHQUFHLENBQUM7UUFVN0IsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixhQUFRLEdBQVcsaUJBQWlCLENBQUMsQ0FBQyxxQkFBcUI7UUFDM0QsY0FBUyxHQUFjLGVBQWUsQ0FBQztRQUVwQixTQUFJLEdBQXlDLElBQUksWUFBWSxFQUFLLENBQUM7UUFDbkUsYUFBUSxHQUF5QyxJQUFJLFlBQVksRUFBSyxDQUFDO1FBRWhGLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQyxDQUFDLG9EQUFvRDtRQUMvRixvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFLLENBQUMsQ0FBQywwQ0FBMEM7UUFDbkYsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBd0UvRCxXQUFNLEdBQTZDLEVBQUUsQ0FBQztRQUd0RCxvQkFBZSxHQUFHLGFBQWEsQ0FBQyxDQUFDLDJDQUEyQztRQUtwRSxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFvQnpDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBMkMsQ0FBQztRQUMzRixDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO2FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBa0IsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO1NBQzdGO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwQywrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQXNDLENBQUMsQ0FBQztTQUNwRjtRQUVELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNuRyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksV0FBVyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0Q7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksVUFBVSxFQUFFO1lBQy9DLG1GQUFtRjtZQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxRTtRQUVELDBCQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDN0csSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDNUM7UUFFRCxJQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFDO1lBQ3JFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7UUFFRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDhDQUE4QztJQUM5Qyw2REFBNkQ7SUFDN0QsMEZBQTBGO0lBQzFGLHVJQUF1STtJQUN2SSxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDhDQUE4QztTQUMxSDtRQUNELElBQUksT0FBTyxDQUFDLGVBQWUsS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLG9CQUFvQixLQUFLLFNBQVMsRUFBRTtZQUN2RixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUFFO1NBQ25FO0lBQ0gsQ0FBQztJQUVELHVCQUF1QjtRQUNyQixRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdEIsS0FBSyxVQUFVO2dCQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQy9DLE1BQU07WUFDTixLQUFLLGFBQWE7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1lBQ04sS0FBSyxvQkFBb0I7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1lBQ04sS0FBSyxPQUFPO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLGlGQUFpRjtRQUNqRixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBbUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyRTtJQUVILENBQUM7SUFFRCxXQUFXO1FBQ1QsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBRUgsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksVUFBVSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFvQjtRQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBVTtRQUNkLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFVO1FBQ2hCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQzFELENBQUM7SUFFRCxXQUFXLENBQUMsTUFBa0I7UUFDNUIsSUFDRSxJQUFJLENBQUMsU0FBUztZQUNkLElBQUksQ0FBQyxpQkFBaUI7WUFDckIsTUFBTSxDQUFDLE1BQXNCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRSxJQUFJLENBQUMsT0FBTyxFQUNaO1lBQ0EsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsSUFBZTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxlQUFlO1FBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxJQUFxQjtRQUMxQyxNQUFNLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsTUFBTSxVQUFVLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLE9BQU8sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO2FBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDeEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7WUFDbkQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUE0QixFQUFFLEVBQUUsQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBWSxDQUFDLENBQUMsQ0FBQyx5REFBeUQ7WUFDNUosSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBNEIsRUFBRSxFQUFFO29CQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztnQkFDRCxNQUF3QixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBUztRQUMvQixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTSxhQUFhLENBQUMsS0FBUztRQUM1QixPQUFPLEtBQUssWUFBWSxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFTO1FBQzFCLE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQXFFO1FBQ3pGLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNENBQTRDO0lBQ3BDLHdCQUF3QixDQUFDLE9BQWdCLEVBQUUsWUFBcUIsSUFBSSxFQUFFLFdBQWU7UUFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsaURBQWlEO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1lBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDaEYsOENBQThDO2dCQUM5QyxJQUFJLE9BQU8sRUFBRTtvQkFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM5Qiw2RkFBNkY7b0JBQzdGLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3pCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxrSEFBa0g7SUFDM0cscUJBQXFCLENBQUMsT0FBOEIsRUFBRSxJQUFZO1FBQ3ZFLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixNQUFNLElBQUksR0FBUSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMxRSxDQUFDO0lBRUQsaUNBQWlDO0lBQzFCLGFBQWEsQ0FBQyxNQUE2QjtRQUNoRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO1FBQ3RGLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE1BQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNwRztJQUNILENBQUM7SUFFRCw2QkFBNkI7SUFDckIsdUJBQXVCLENBQUMsT0FBZ0IsRUFBRSxXQUFlO1FBQy9ELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsbUNBQW1DO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDbEU7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sb0JBQW9CLENBQUMsS0FBcUI7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMscUJBQXFCLEdBQUc7Z0JBQzNCLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUk7Z0JBQ3ZCLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxFQUFFLElBQUk7YUFDL0IsQ0FBQztZQUNGLElBQUksQ0FBQyxzQkFBc0IsR0FBRztnQkFDNUIsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSTtnQkFDdkIsQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLEVBQUUsSUFBSTthQUMvQixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQztJQUVPLFNBQVMsQ0FBQyxTQUFrQjtRQUNsQyxJQUFJLFNBQVMsRUFBRTtZQUNiLHNEQUFzRDtZQUN0RCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLDJLQUEySztTQUM1TjtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUMzQixVQUFVLENBQ1IsR0FBRyxFQUFFO1lBQ0gsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUM5QyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sa0JBQWtCLENBQUMsT0FBcUM7UUFDOUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLE9BQU87Z0JBQ0wsR0FBRztvQkFDRCxJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsU0FBUztvQkFDZixXQUFXLEVBQUUsSUFBSTtvQkFDakIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELEdBQUcsTUFBTTthQUNWLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxzQkFBc0IsQ0FBQyxTQUFrQjtRQUMvQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjO1NBQzFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0Qsd0hBQXdIO1FBQ3hILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUVBQWlFO0lBQ3pELHFCQUFxQjtRQUMzQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQTRCLENBQUM7UUFDdEUsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDakMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoRixNQUFNLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyRSxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsTUFBTSxDQUFDLEdBQUcsWUFBWSxDQUFDLFNBQVMsUUFBUSxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBNEIsQ0FBQztTQUM1RTtJQUNILENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDOUU7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVPLFlBQVk7UUFDbEIseUZBQXlGO1FBQ3pGLElBQUksSUFBSSxDQUFDLHdCQUF3QixJQUFJLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7WUFDOUYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO29GQXpnQlUsbUJBQW1CLHlXQXlJUixZQUFZLDJCQUN4QixRQUFRO29FQTFJUCxtQkFBbUI7O21DQTRDTSxnQkFBZ0I7bUNBQ1osVUFBVTs7Ozs7Ozs7OztZQ3BHcEQscUhBRWM7WUFHZCxxRUE0Qk07WUFHTixzRUFvQk07WUFHTixxSEEyQmM7WUFHZCxxSEFxRGM7WUFHZCxzSEFzRGM7WUFHZCx1SEFpRGM7WUFHZCx1SEE4Q2M7WUFHZCx5SEF5Q2M7O1lBblZzQixlQUFpQztZQUFqQyxzREFBaUM7WUErQi9ELGVBQWdDO1lBQWhDLHFEQUFnQzs7O0FEcUJYO0lBQWYsWUFBWSxFQUFFO29EQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTtxREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7c0RBQTRCO0FBQzNCO0lBQWYsWUFBWSxFQUFFO3VEQUE2QjtBQUM1QjtJQUFmLFlBQVksRUFBRTsyREFBaUM7QUFDaEM7SUFBZixZQUFZLEVBQUU7MERBQWdDO0FBQy9CO0lBQWYsWUFBWSxFQUFFO3FEQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTt3REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7c0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFOzhEQUE0QjtBQUMzQjtJQUFmLFlBQVksRUFBRTs0REFBd0I7QUFDdkI7SUFBZixZQUFZLEVBQUU7aUVBQTZCO3VGQWIxQyxtQkFBbUI7Y0FWL0IsU0FBUzsyQkFDRSxhQUFhLFlBQ2IsWUFBWSxtQkFJTCx1QkFBdUIsQ0FBQyxPQUFPOztzQkE2STdDLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsWUFBWTs7c0JBQy9CLE1BQU07dUJBQUMsUUFBUTt3QkF4SU8sT0FBTztrQkFBL0IsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixjQUFjO2tCQUF0QyxLQUFLO1lBQ21CLGFBQWE7a0JBQXJDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsaUJBQWlCO2tCQUF6QyxLQUFLO1lBQ21CLGVBQWU7a0JBQXZDLEtBQUs7WUFDbUIsb0JBQW9CO2tCQUE1QyxLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBRXNCLElBQUk7a0JBQS9CLEtBQUs7O2tCQUFJLE1BQU07WUFDWSxRQUFRO2tCQUFuQyxLQUFLOztrQkFBSSxNQUFNO1lBRUcsY0FBYztrQkFBaEMsTUFBTTtZQUNZLGVBQWU7a0JBQWpDLE1BQU07WUFDWSxhQUFhO2tCQUEvQixNQUFNO1lBRXNCLGNBQWM7a0JBQTFDLFNBQVM7bUJBQUMsZ0JBQWdCO1lBQzZCLGFBQWE7a0JBQXBFLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ0EsaUJBQWlCO2tCQUF0RSxTQUFTO21CQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNoQixrQkFBa0I7a0JBQXJELFlBQVk7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCwgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7IE1PREFMX0NPTkZJRywgTW9kYWxDb25maWcgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbmZpZyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzTW9kYWxSZWYgfSBmcm9tICcuL2NtYWNzLW1vZGFsLXJlZi5jbGFzcyc7XHJcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGUsIE9uQ2xpY2tDYWxsYmFjayB9IGZyb20gJy4vY21hY3MtbW9kYWwudHlwZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50T2Zmc2V0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuXHJcbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vZGFsJyxcclxuICBleHBvcnRBczogJ2NtYWNzTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW9kYWwuY29tcG9uZW50LmNzcyddLFxyXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxyXG59KVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIENtYWNzTW9kYWxSZWY8VCwgUj5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBva0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NNYXNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc01hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0hlbHBmdWxUaXBzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlQ21hY3NEZWZhdWx0U2l6ZXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxyXG4gIEBJbnB1dCgpIGNvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBjb250ZW50IGlzIGEgY29tcG9uZW50XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT4gfCBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHwgbnVsbDsgLy8gW1NUQVRJQ10gRGVmYXVsdCBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgZ2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKSA9ICgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUoKTsgLy8gW1NUQVRJQ11cclxuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDEwMDA7XHJcbiAgQElucHV0KCkgbGVmdFBhbmVsQ29sczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNlbnRlclBhbmVsQ29sczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJpZ2h0UGFuZWxDb2xzOiBudW1iZXI7XHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDQwMDtcclxuICBASW5wdXQoKSB3cmFwQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgY21hY3NUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xyXG4gIEBJbnB1dCgpIG1hc2tTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGNtYWNzT2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzQ2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBva1R5cGUgPSAncHJpbWFyeSc7XHJcbiAgQElucHV0KCkgaWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBtb2RhbFR5cGU6IE1vZGFsVHlwZSA9ICd0cmFuc2FjdGlvbmFsJztcclxuXHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IG9uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgb25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJykgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYm9keUNvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG9Gb2N1c0J1dHRvbk9rJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmOyAvLyBPbmx5IGFpbSB0byBmb2N1cyB0aGUgb2sgYnV0dG9uIHRoYXQgbmVlZHMgdG8gYmUgYXV0byBmb2N1c2VkXHJcbiAgQFZpZXdDaGlsZHJlbigndGlwc0NyZWF0aW9uV2l6YXJkJykgdGlwc0NyZWF0aW9uV2l6YXJkOiBRdWVyeUxpc3Q8YW55PjtcclxuXHJcbiAgZ2V0Q2xhc3MoKSB7XHJcbiAgICBsZXQgY2xhc3NDdXN0b20gPSB0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwcycpIHx8XHJcbiAgICAgIHRoaXMuaXNNb2RhbFR5cGUoJ2NyZWF0aW9uJykgfHxcclxuICAgICAgdGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHNOb1BhbmVsJykgfHxcclxuICAgICAgdGhpcy5pc01vZGFsVHlwZSgnYmFzaWMnKSA/ICdsYXJnZW1vZGFsICcgOiAnJztcclxuICAgIGNsYXNzQ3VzdG9tICs9IGBhbnQtbW9kYWwgJHt0aGlzLmNsYXNzTmFtZX0gbW9kZWwtY29udGFpbmVyYDtcclxuICAgIHJldHVybiBjbGFzc0N1c3RvbTtcclxuICB9XHJcblxyXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBjbWFjc0FmdGVyT3BlblxyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NBZnRlck9wZW4uYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPFI+IHtcclxuICAgIC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGFmdGVyQ2xvc2VcclxuICAgIHJldHVybiB0aGlzLmNtYWNzQWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc0NhbmNlbFRleHQgfHwgdGhpcy5sb2NhbGUuY2FuY2VsVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jbWFjc09rVGV4dCB8fCB0aGlzLmxvY2FsZS5va1RleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy52aXNpYmxlICYmICF0aGlzLmFuaW1hdGlvblN0YXRlO1xyXG4gIH0gLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIGRpYWxvZyBzaG91bGQgaGlkZGVuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2sgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFzayBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2soKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jbWFjc01hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbWFjc01hc2s7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2s7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2tDbG9zYWJsZSB2YWx1ZVxyXG4gICAqXHJcbiAgICogV2VpZ2h0IG9mIGRpZmZlcmVudCBtYXNrQ2xvc2FibGUgaW5wdXQ6XHJcbiAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAqL1xyXG4gIGdldCBtYXNrQ2xvc2FibGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jbWFjc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNtYWNzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMubW9kYWxHbG9iYWxDb25maWcuY21hY3NNYXNrQ2xvc2FibGUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2RhbEdsb2JhbENvbmZpZy5jbWFjc01hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9jYWxlOiB7IG9rVGV4dD86IHN0cmluZzsgY2FuY2VsVGV4dD86IHN0cmluZyB9ID0ge307XHJcbiAgbWFza0FuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgdHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JzsgLy8gVGhlIG9yaWdpbiBwb2ludCB0aGF0IGFuaW1hdGlvbiBiYXNlZCBvblxyXG5cclxuICBwcml2YXRlIGNvbnRlbnRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjsgLy8gSGFuZGxlIHRoZSByZWZlcmVuY2Ugd2hlbiB1c2luZyBjb250ZW50IGFzIENvbXBvbmVudFxyXG4gIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU6IEFuaW1hdGlvblN0YXRlOyAvLyBDdXJyZW50IGFuaW1hdGlvbiBzdGF0ZVxyXG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGZvY3VzVHJhcDogRm9jdXNUcmFwO1xyXG4gIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IEJsb2NrU2Nyb2xsU3RyYXRlZ3k7XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IE1vZGFsQ29udHJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1PREFMX0NPTkZJRykgcHJpdmF0ZSBtb2RhbEdsb2JhbENvbmZpZzogTW9kYWxDb25maWcsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJykgYXMgeyBva1RleHQ6IHN0cmluZzsgY2FuY2VsVGV4dDogc3RyaW5nIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5kb2N1bWVudC5ib2R5LCAna2V5ZG93bicpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDb21wb25lbnQodGhpcy5jb250ZW50KSkge1xyXG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5jb250ZW50IGFzIFR5cGU8VD4pOyAvLyBDcmVhdGUgY29tcG9uZW50IGFsb25nIHdpdGhvdXQgVmlld1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzTW9kYWxCdXR0b25zKHRoaXMuZm9vdGVyKSkge1xyXG4gICAgICAvLyBTZXR1cCBkZWZhdWx0IGJ1dHRvbiBvcHRpb25zXHJcbiAgICAgIHRoaXMuZm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5mb290ZXIgYXMgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGxhY2UgdGhlIG1vZGFsIGRvbSB0byBlbHNld2hlcmVcclxuICAgIHRoaXMuY29udGFpbmVyID0gdHlwZW9mIHRoaXMuZ2V0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5nZXRDb250YWluZXIoKSA6IHRoaXMuZ2V0Q29udGFpbmVyO1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgLy8gTk9URTogb25seSBhdHRhY2ggdGhlIGRvbSB0byBvdmVybGF5LCB0aGUgdmlldyBjb250YWluZXIgaXMgbm90IGNoYW5nZWQgYWN0dWFsbHlcclxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyZWF0aW9uIG1vZGFsIHNldHRpbmdzXHJcbiAgICBpZiAodGhpcy5pc01vZGFsVHlwZSgnY3JlYXRpb24nKSB8fCB0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwcycpIHx8IHRoaXMuaXNNb2RhbFR5cGUoJ2hlbHBmdWxUaXBzTm9QYW5lbCcpKSB7XHJcbiAgICAgIHRoaXMuY21hY3NDYW5jZWxUZXh0ID0gbnVsbDtcclxuICAgICAgdGhpcy5jbWFjc09rVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGhpcy5pc01vZGFsVHlwZSgnaGVscGZ1bFRpcHMnKSl7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLndpZHRoID8gdGhpcy53aWR0aCA6IDgzNTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLmlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwc05vUGFuZWwnKSB8fCB0aGlzLmlzTW9kYWxUeXBlKCdiYXNpYycpKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGggPyB0aGlzLndpZHRoIDogNTcwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnVzZUNtYWNzRGVmYXVsdFNpemVzKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtVG9EZWZhdWx0U2l6ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWdpc3RlciBtb2RhbCB3aGVuIGFmdGVyT3Blbi9hZnRlckNsb3NlIGlzIHN0YWJsZVxyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wucmVnaXN0ZXJNb2RhbCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8vIFtOT1RFXSBOT1QgYXZhaWxhYmxlIHdoZW4gdXNpbmcgYnkgc2VydmljZSFcclxuICAvLyBCZWNhdXNlIG5nT25DaGFuZ2VzIG5ldmVyIGJlIGNhbGxlZCB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UsXHJcbiAgLy8gaGVyZSB3ZSBjYW4ndCBzdXBwb3J0IFwiY29udGVudFwiKENvbXBvbmVudCkgZXRjLiBhcyBpbnB1dHMgdGhhdCBpbml0aWFsaXplZCBkeW5hbWljYWxseS5cclxuICAvLyBCVVQ6IFVzZXIgYWxzbyBjYW4gY2hhbmdlIFwiY29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMudmlzaWJsZSwgIWNoYW5nZXMudmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnNob3dIZWxwZnVsVGlwcyAhPT0gdW5kZWZpbmVkIHx8IGNoYW5nZXMudXNlQ21hY3NEZWZhdWx0U2l6ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAodGhpcy51c2VDbWFjc0RlZmF1bHRTaXplcykgeyB0aGlzLnRyYW5zZm9ybVRvRGVmYXVsdFNpemVzKCk7IH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVRvRGVmYXVsdFNpemVzKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLm1vZGFsVHlwZSkge1xyXG4gICAgICBjYXNlICdjcmVhdGlvbic6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc2hvd0hlbHBmdWxUaXBzID8gMTEwMCA6IDgzNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoZWxwZnVsVGlwcyc6XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDgzNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoZWxwZnVsVGlwc05vUGFuZWwnOlxyXG4gICAgICAgIHRoaXMud2lkdGggPSA1NzA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYmFzaWMnOlxyXG4gICAgICAgIHRoaXMud2lkdGggPSA1NzA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAvLyBJZiB1c2luZyBDb21wb25lbnQsIGl0IGlzIHRoZSB0aW1lIHRvIGF0dGFjaCBWaWV3IHdoaWxlIGJvZHlDb250YWluZXIgaXMgcmVhZHlcclxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcclxuICAgICAgdGhpcy5ib2R5Q29udGFpbmVyLmluc2VydCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rKSB7XHJcbiAgICAgICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBDbG9zZSBzZWxmIGJlZm9yZSBkZXN0cnVjdGluZ1xyXG4gICAgaWYgKCF0aGlzLmlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbG9zZUludGVyYWN0aW9uKCk7XHJcbiAgICAgIHRoaXMuZGVzdHJveU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZGVzdHJveU1vZGFsKCkge1xyXG4gICAgdGhpcy5tb2RhbENvbnRyb2wuZGVyZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG5cclxuICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGtleWRvd25MaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmtleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSwgcmVzdWx0KTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQge1xyXG4gICAgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcclxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICB9XHJcblxyXG4gIGdldEluc3RhbmNlKCk6IENtYWNzTW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25DbGlja01hc2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY21hY3NNYXNrICYmXHJcbiAgICAgIHRoaXMuY21hY3NNYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYW50LW1vZGFsLXdyYXAnKSAmJlxyXG4gICAgICB0aGlzLnZpc2libGVcclxuICAgICkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsVHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrQ2xvc2VCdG4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZUludGVyYWN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHsgb2s6IHRoaXMub25PaywgY2FuY2VsOiB0aGlzLm9uQ2FuY2VsIH1bdHlwZV07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ29rTG9hZGluZycsIGNhbmNlbDogJ2NhbmNlbExvYWRpbmcnIH1bdHlwZV07XHJcbiAgICBpZiAodHJpZ2dlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xyXG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0cmlnZ2VyKHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IGRvQ2xvc2UgIT09IGZhbHNlICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTsgLy8gVXNlcnMgY2FuIHJldHVybiBcImZhbHNlXCIgdG8gcHJldmVudCBjbG9zaW5nIGJ5IGRlZmF1bHRcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGhlbiA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiB7XHJcbiAgICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gZmFsc2U7XHJcbiAgICAgICAgICBjYXNlQ2xvc2UoZG9DbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAocmVzdWx0IGFzIFByb21pc2U8dm9pZD4pLnRoZW4oaGFuZGxlVGhlbikuY2F0Y2goaGFuZGxlVGhlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXHJcbiAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbiwgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZSwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuaXNNb2RhbFR5cGUoJ2ludGVyYWN0aW9uJykpIHtcclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXHJcbiAgICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFuaW1hdGlvbiA/IHRoaXMuYW5pbWF0ZVRvKHZpc2libGUpIDogdW5kZWZpbmVkKS50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXHJcbiAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgIHRoaXMuY21hY3NBZnRlck9wZW4uZW1pdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNtYWNzQWZ0ZXJDbG9zZS5lbWl0KGNsb3NlUmVzdWx0KTtcclxuICAgICAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAgIC8vIE1hcmsgdGhlIGZvciBjaGVjayBzbyBpdCBjYW4gcmVhY3QgaWYgdGhlIHZpZXcgY29udGFpbmVyIGlzIHVzaW5nIE9uUHVzaCBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvb2t1cCBhIGJ1dHRvbidzIHByb3BlcnR5LCBpZiB0aGUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBjYWxsICYgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCwgb3RoZXJ3aXNlLCByZXR1cm4gaXRzZWxmLlxyXG4gIHB1YmxpYyBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zPFQ+LCBwcm9wOiBzdHJpbmcpOiB7fSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbcHJvcF07XHJcbiAgICBjb25zdCBhcmdzOiBUW10gPSBbXTtcclxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcclxuICAgICAgYXJncy5wdXNoKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgYXJncykgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIE9uIGZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgdmlzaWJsZSBmcm9tIGluc2lkZVxyXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIC8vIENoYW5nZSB2aXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZSwgdHJ1ZSwgY2xvc2VSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZShzdGF0ZTogQW5pbWF0aW9uU3RhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYGZhZGUtJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYGZhZGUtJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgem9vbS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgem9vbS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbmltYXRlVG8oaXNWaXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb24gd2hlbiBzaG93cyB1cFxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtT3JpZ2luKCkpOyAvLyBbTk9URV0gVXNpbmcgdGltZW91dCBkdWUgdG8gdGhlIGRvY3VtZW50LmNsaWNrIGV2ZW50IGlzIGZpcmVkIGxhdGVyIHRoYW4gdmlzaWJsZSBjaGFuZ2UsIHNvIGlmIG5vdCBwb3N0cG9uZWQgdG8gbmV4dCBldmVudC1sb29wLCB3ZSBjYW4ndCBnZXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb25cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKGlzVmlzaWJsZSA/ICdlbnRlcicgOiAnbGVhdmUnKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgLy8gUmV0dXJuIHdoZW4gYW5pbWF0aW9uIGlzIG92ZXJcclxuICAgICAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUobnVsbCk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzLm5vQW5pbWF0aW9uID8gMCA6IE1PREFMX0FOSU1BVEVfRFVSQVRJT05cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcclxuICAgIHJldHVybiBidXR0b25zLm1hcChidXR0b24gPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLntcclxuICAgICAgICAgIHR5cGU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIHNpemU6ICdkZWZhdWx0JyxcclxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICAuLi5idXR0b25cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcclxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8VD4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xyXG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XHJcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ21hY3NNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfV0sXHJcbiAgICAgIHBhcmVudDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50UGFyYW1zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlLCB0aGlzLmNvbXBvbmVudFBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICAvLyBEbyB0aGUgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBpbW1lZGlhdGVseSAob3Igd2UgZG8gZGV0ZWN0aW9uIGF0IG5nQWZ0ZXJWaWV3SW5pdCwgbXVsdGktY2hhbmdlcyBlcnJvciB3aWxsIGJlIHRocm93bilcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBVcGRhdGUgdHJhbnNmb3JtLW9yaWdpbiB0byB0aGUgbGFzdCBjbGljayBwb3NpdGlvbiBvbiBkb2N1bWVudFxyXG4gIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtT3JpZ2luKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzbHlET01SZWN0ID0gdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCB4ID0gbGFzdFBvc2l0aW9uLmxlZnQgKyBwcmV2aW91c2x5RE9NUmVjdC53aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IHkgPSBsYXN0UG9zaXRpb24udG9wICsgcHJldmlvdXNseURPTVJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHt4IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHt5IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCAmJiB0eXBlb2YgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjdHBsT3JpZ2luQ29udGVudD5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+IDwhLS0gQ29tcGF0aWJsZTogdGhlIDxuZy1jb250ZW50PiBjYW4gYXBwZWFyIG9ubHkgb25jZSAtLT5cclxuXHJcbiAgPCEtLSBjb250YWluZXIgZm9yIHRoZSBtb2RlbHMgLS0+XHJcbjxkaXYgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb25cIiAqbmdJZj1cIiFpc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKVwiPlxyXG4gIDxkaXYgKm5nSWY9XCJtYXNrXCIgY2xhc3M9XCJhbnQtbW9kYWwtbWFza1wiIFtuZ0NsYXNzXT1cIm1hc2tBbmltYXRpb25DbGFzc01hcFwiIFtjbGFzcy5hbnQtbW9kYWwtbWFzay1oaWRkZW5dPVwiaGlkZGVuXCJcclxuICAgIFtuZ1N0eWxlXT1cIm1hc2tTdHlsZVwiIFtzdHlsZS56SW5kZXhdPVwiekluZGV4XCI+PC9kaXY+XHJcbiAgPGRpdiAoY2xpY2spPVwib25DbGlja01hc2soJGV2ZW50KVwiIGNsYXNzPVwiYW50LW1vZGFsLXdyYXAge3sgd3JhcENsYXNzTmFtZSB9fSBtb2RlbC13cmFwcGVyXCIgW3N0eWxlLnpJbmRleF09XCJ6SW5kZXhcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwiaGlkZGVuID8gJ2hpZGRlbicgOiBudWxsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIj5cclxuICAgIDxkaXYgI21vZGFsQ29udGFpbmVyIFtuZ0NsYXNzXT1cImdldENsYXNzKClcIiBbY2xhc3NdPVwibW9kYWxBbmltYXRpb25DbGFzc01hcFwiIFtuZ1N0eWxlXT1cImNtYWNzU3R5bGVcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwid2lkdGggfCBjbWFjc1RvQ3NzVW5pdFwiIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRyYW5zZm9ybU9yaWdpblwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2xvc2FibGVcIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2tDbG9zZUJ0bigpXCIgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNNb2RhbFR5cGUoJ3Bhc3NpdmUnKSB8fCBpc01vZGFsVHlwZSgnaW50ZXJhY3Rpb24nKSB8fCBpc01vZGFsVHlwZSgnYmFzaWMnKVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtbW9kYWwtY2xvc2UteF09XCIhaXNNb2RhbFR5cGUoJ2Jhc2ljJylcIiBbY2xhc3MuYW50LW1vZGFsLWNsb3NlLXgtYmFzaWNdPVwiaXNNb2RhbFR5cGUoJ2Jhc2ljJylcIiBjbGFzcz1cImljb25zcGFuXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRkZW5cIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ3RyYW5zYWN0aW9uYWwnKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnREZWZhdWx0XCI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdjb25maXJtJylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxDb250ZW50Q29uZmlybVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ2NyZWF0aW9uJylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxDcmVhdGlvbkRlZmF1bHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwcycpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsSGVscGZ1bFRpcHNcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdoZWxwZnVsVGlwc05vUGFuZWwnKSB8fCBpc01vZGFsVHlwZSgnYmFzaWMnKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbEhlbHBmdWxUaXBzV2l0aG91dFBhbmVsXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgncGFzc2l2ZScpIHx8IGlzTW9kYWxUeXBlKCdpbnRlcmFjdGlvbicpXCJcclxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsQ29udGVudFBhc3NpdmVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIGludGVyYWN0aXZlIG1vZGVsIC0tPlxyXG48ZGl2ICpuZ0lmPVwiaXNNb2RhbFR5cGUoJ2ludGVyYWN0aW9uJylcIj5cclxuICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cInZpc2libGUgPyAnaW5oZXJpdCcgOiAnbm9uZSdcIiBjbGFzcz1cImNtYWNzLWludGVyYWN0aW9uLW1vZGFsXCIgY2RrRHJhZyBbc3R5bGUuekluZGV4XT1cInpJbmRleFwiXHJcbiAgICBbbmdTdHlsZV09XCJjbWFjc1N0eWxlXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoIHwgY21hY3NUb0Nzc1VuaXRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1pbnRlcmFjdGlvbi1tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2VcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgKGNsaWNrKT1cImNsb3NlSW50ZXJhY3Rpb24oKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlLXggaWNvbnNwYW5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXIgY21hY3MtY3VzdG9tLWhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtdGl0bGVcIiBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO1wiPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBzdHlsZT1cInBhZGRpbmc6IDEwcHhcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFBhc3NpdmUgbW9kZWwgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudFBhc3NpdmU+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXJcIiBbc3R5bGUucGFkZGluZ109XCJtb2RhbFR5cGUgPT09ICdwYXNzaXZlJyA/ICc2cHggMjBweCcgOiAnN3B4IDEwcHgnXCJcclxuICAgIHN0eWxlPVwiaGVpZ2h0OiAzNHB4XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKHRpdGxlKSAmJiAhaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNtYWNzVGl0bGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIhaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICA8ZGl2Pnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCIgW3N0eWxlLnBhZGRpbmddPVwibW9kYWxUeXBlID09PSAncGFzc2l2ZScgPyAnMjRweCAxMHB4IDQ2cHggMjBweCcgOiAnMCdcIj5cclxuICAgIDxuZy1jb250YWluZXIgI2JvZHlDb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb21wb25lbnQoY29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjb250ZW50KVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NvbnRlbnR9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdCBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxPcmlnaW5Db250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIHRyYW5zYWN0aW9uYWwgbW9kZWwgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudERlZmF1bHQ+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cIm1vZGFsVHlwZSA9PT0gJ3RyYW5zYWN0aW9uYWwnID8gMzAgOiA1MFwiXHJcbiAgICBbc3R5bGUucGFkZGluZ109XCJtb2RhbFR5cGUgPT09ICd0cmFuc2FjdGlvbmFsJyA/ICc2cHggMjBweCcgOiAnMTZweCA0MHB4J1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keSB0cmFucy1tb2RlbC1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KGNvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNvbnRlbnQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY29udGVudClcIj5cclxuICAgICAgICAgIDxkaXY+e3tjb250ZW50fX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsT3JpZ2luQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJmb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXIgdHJhbnMtbW9kZWwtZm9vdGVyXCJcclxuICAgIFtzdHlsZS5ib3JkZXItdG9wXT1cIm1vZGFsVHlwZSA9PT0gJ3RyYW5zYWN0aW9uYWwnID8gJ25vbmUnIDogJ2luaGVyaXQnXCJcclxuICAgIFtzdHlsZS5wYWRkaW5nLWJvdHRvbV09XCJtb2RhbFR5cGUgPT09ICd0cmFuc2FjdGlvbmFsJyB8fCBtb2RhbFR5cGUgPT09ICdwYXNzaXZlJyA/ICcyMHB4JyA6ICdpbmhlcml0J1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGZvb3RlcilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGRpdj57e2Zvb3Rlcn19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGZvb3RlclwiIHJvbGU9XCJidXR0b25cIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCIgW256TG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiIFtuelR5cGVdPVwiYnV0dG9uLnR5cGVcIiBbbnpTaGFwZV09XCJidXR0b24uc2hhcGVcIlxyXG4gICAgICAgICAgW256U2l6ZV09XCJidXR0b24uc2l6ZVwiIFtuekdob3N0XT1cImJ1dHRvbi5naG9zdFwiIGFyaWEtbGFiZWw9XCJ7e2J1dHRvbi5sYWJlbH19XCI+e3sgYnV0dG9uLmxhYmVsIH19PC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzQ2FuY2VsVGV4dCE9PW51bGxcIiByb2xlPVwiYnV0dG9uXCIgbnotYnV0dG9uIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCIgW256TG9hZGluZ109XCJjYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJjYW5jZWxEaXNhYmxlZFwiIGFyaWEtbGFiZWw9XCJ7eyBjYW5jZWxUZXh0IH19XCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzT2tUZXh0IT09bnVsbFwiIHJvbGU9XCJidXR0b25cIiBuei1idXR0b24gW256VHlwZV09XCJva1R5cGVcIiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdvaycpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwib2tMb2FkaW5nXCIgW2Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIiBhcmlhLWxhYmVsPVwie3sgb2tUZXh0IH19XCI+XHJcbiAgICAgICAgICB7eyBva1RleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gQ3JlYXRpb24gTW9kYWwgQ29udGVudCAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxDcmVhdGlvbkRlZmF1bHQ+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXIgY3JlYXRpb24taGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKHRpdGxlKSAmJiAhaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNtYWNzVGl0bGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIhaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICA8ZGl2Pnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgc3R5bGU9XCJwYWRkaW5nOiAwXCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCI+XHJcbiAgICA8ZGl2IG56LXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cclxuICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCJzaG93SGVscGZ1bFRpcHMgPyBsZWZ0UGFuZWxDb2xzIDogNlwiIGNsYXNzPVwiY21hY3MtbW9kYWwtY3JlYXRpb24tbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy1tb2RhbC1jcmVhdGlvbi1sZWZ0LXBhbmVsXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgbnotY29sIFtuelNwYW5dPVwic2hvd0hlbHBmdWxUaXBzID8gY2VudGVyUGFuZWxDb2xzIDogKDI0IC0gbGVmdFBhbmVsQ29scylcIlxyXG4gICAgICAgIGNsYXNzPVwiY21hY3MtbW9kYWwtY3JlYXRpb24tY2VudGVyLXBhbmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLW1vZGFsLWNyZWF0aW9uLWNlbnRlci1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG56LWNvbCBbc3R5bGUuZGlzcGxheV09XCJzaG93SGVscGZ1bFRpcHMgPyAnaW5oZXJpdCcgOiAnbm9uZSdcIiAjdGlwc0NyZWF0aW9uV2l6YXJkIFtuelNwYW5dPVwicmlnaHRQYW5lbENvbHNcIlxyXG4gICAgICAgIGNsYXNzPVwiY21hY3MtbW9kYWwtY3JlYXRpb24tcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtbW9kYWwtY3JlYXRpb24tcmlnaHQtcGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJmb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXIgY3JlYXRpb24tZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoZm9vdGVyKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGZvb3RlcilcIj5cclxuICAgICAgICA8ZGl2Pnt7Zm9vdGVyfX08L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxCdXR0b25zKGZvb3RlcilcIj5cclxuICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2YgZm9vdGVyXCIgcm9sZT1cImJ1dHRvblwiIG56LWJ1dHRvbiAoY2xpY2spPVwib25CdXR0b25DbGljayhidXR0b24pXCJcclxuICAgICAgICAgIFtoaWRkZW5dPVwiIWdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdzaG93JylcIiBbbnpMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCIgW256VHlwZV09XCJidXR0b24udHlwZVwiIFtuelNoYXBlXT1cImJ1dHRvbi5zaGFwZVwiXHJcbiAgICAgICAgICBbbnpTaXplXT1cImJ1dHRvbi5zaXplXCIgW256R2hvc3RdPVwiYnV0dG9uLmdob3N0XCIgYXJpYS1sYWJlbD1cInt7IGJ1dHRvbi5sYWJlbCB9fVwiPnt7IGJ1dHRvbi5sYWJlbCB9fTwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbWFjc0NhbmNlbFRleHQhPT1udWxsXCIgcm9sZT1cImJ1dHRvblwiIG56LWJ1dHRvbiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKVwiIFtuekxvYWRpbmddPVwiY2FuY2VsTG9hZGluZ1wiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FuY2VsRGlzYWJsZWRcIiBhcmlhLWxhYmVsPVwie3sgY2FuY2VsVGV4dCB9fVwiPlxyXG4gICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJjbWFjc09rVGV4dCE9PW51bGxcIiByb2xlPVwiYnV0dG9uXCIgbnotYnV0dG9uIFtuelR5cGVdPVwib2tUeXBlXCIgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiXHJcbiAgICAgICAgICBbbnpMb2FkaW5nXT1cIm9rTG9hZGluZ1wiIFtkaXNhYmxlZF09XCJva0Rpc2FibGVkXCIgYXJpYS1sYWJlbD1cInt7IG9rVGV4dCB9fVwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIEhlbHBmdWwgdG9vbHRpcCBtb2RlbCAtLT5cclxuPG5nLXRlbXBsYXRlICN0cGxIZWxwZnVsVGlwcz5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGUgfHwgY21hY3NUaXRsZVwiIGNsYXNzPVwiYW50LW1vZGFsLWhlYWRlciBoZWxwZnVsLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZih0aXRsZSkgJiYgIWlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiIWlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhjbWFjc1RpdGxlKVwiPlxyXG4gICAgICAgICAgPGRpdj57e2NtYWNzVGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIHN0eWxlPVwicGFkZGluZzogMDsgaGVpZ2h0OiA1MzFweDtcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICAgIDxkaXYgbnotcm93IHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO1wiPlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImNlbnRlclBhbmVsQ29scyA/IGNlbnRlclBhbmVsQ29scyA6IDE2XCIgY2xhc3M9XCJjbWFjcy1tb2RhbC1oZWxwZnVsLWNlbnRlci1wYW5lbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy1tb2RhbC1oZWxwZnVsLWNlbnRlci1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cInJpZ2h0UGFuZWxDb2xzID8gcmlnaHRQYW5lbENvbHMgOiA4XCIgY2xhc3M9XCJjbWFjcy1tb2RhbC1oZWxwZnVsLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLW1vZGFsLWhlbHBmdWwtcmlnaHQtcGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJmb290ZXIgIT09IG51bGxcIiBjbGFzcz1cImFudC1tb2RhbC1mb290ZXIgaGVscGZ1bC1mb290ZXJcIj5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihmb290ZXIpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoZm9vdGVyKVwiPlxyXG4gICAgICAgIDxkaXY+e3tmb290ZXJ9fTwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbEJ1dHRvbnMoZm9vdGVyKVwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBmb290ZXJcIiByb2xlPVwiYnV0dG9uXCIgbnotYnV0dG9uIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCIhZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ3Nob3cnKVwiIFtuekxvYWRpbmddPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2xvYWRpbmcnKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ2Rpc2FibGVkJylcIiBbbnpUeXBlXT1cImJ1dHRvbi50eXBlXCIgW256U2hhcGVdPVwiYnV0dG9uLnNoYXBlXCJcclxuICAgICAgICAgIFtuelNpemVdPVwiYnV0dG9uLnNpemVcIiBbbnpHaG9zdF09XCJidXR0b24uZ2hvc3RcIiBhcmlhLWxhYmVsPVwie3sgYnV0dG9uLmxhYmVsIH19XCI+e3sgYnV0dG9uLmxhYmVsIH19PC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzQ2FuY2VsVGV4dCE9PW51bGxcIiByb2xlPVwiYnV0dG9uXCIgbnotYnV0dG9uIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCIgW256TG9hZGluZ109XCJjYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJjYW5jZWxEaXNhYmxlZFwiIGFyaWEtbGFiZWw9XCJ7eyBjYW5jZWxUZXh0IH19XCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNtYWNzT2tUZXh0IT09bnVsbFwiIHJvbGU9XCJidXR0b25cIiBuei1idXR0b24gW256VHlwZV09XCJva1R5cGVcIiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdvaycpXCJcclxuICAgICAgICAgIFtuekxvYWRpbmddPVwib2tMb2FkaW5nXCIgW2Rpc2FibGVkXT1cIm9rRGlzYWJsZWRcIiBhcmlhLWxhYmVsPVwie3sgb2tUZXh0IH19XCI+XHJcbiAgICAgICAgICB7eyBva1RleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gSGVscGZ1bCB0b29sdGlwIHdpdGhvdXQgcGFuZWwgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsSGVscGZ1bFRpcHNXaXRob3V0UGFuZWw+XHJcbiAgPGRpdiAqbmdJZj1cInRpdGxlIHx8IGNtYWNzVGl0bGVcIiBjbGFzcz1cImFudC1tb2RhbC1oZWFkZXIgaGVscGZ1bC1oZWFkZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtdGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYodGl0bGUpICYmICFpc1RlbXBsYXRlUmVmKGNtYWNzVGl0bGUpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNtYWNzVGl0bGUpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY21hY3NUaXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIiFpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICA8ZGl2Pnt7dGl0bGV9fTwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgIDxkaXY+e3tjbWFjc1RpdGxlfX08L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBzdHlsZT1cInBhZGRpbmc6IDA7IGhlaWdodDogNTMxcHg7XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCI+XHJcbiAgICA8ZGl2IG56LXJvdyBzdHlsZT1cImhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cclxuICAgICAgPGRpdiBuei1jb2wgW256U3Bhbl09XCIyNFwiIGNsYXNzPVwiY21hY3MtbW9kYWwtaGVscGZ1bFRpcHMtbm8tcGFuZWwtY2VudGVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLW1vZGFsLWhlbHBmdWxUaXBzLW5vLXBhbmVsLWNlbnRlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImZvb3RlciAhPT0gbnVsbFwiIGNsYXNzPVwiYW50LW1vZGFsLWZvb3RlciBoZWxwZnVsLWZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGZvb3RlcilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJmb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGRpdj57e2Zvb3Rlcn19PC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhmb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGZvb3RlclwiIHJvbGU9XCJidXR0b25cIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCIgW256TG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiIFtuelR5cGVdPVwiYnV0dG9uLnR5cGVcIiBbbnpTaGFwZV09XCJidXR0b24uc2hhcGVcIlxyXG4gICAgICAgICAgW256U2l6ZV09XCJidXR0b24uc2l6ZVwiIFtuekdob3N0XT1cImJ1dHRvbi5naG9zdFwiIGFyaWEtbGFiZWw9XCJ7eyBidXR0b24ubGFiZWwgfX1cIj57eyBidXR0b24ubGFiZWwgfX08L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY21hY3NDYW5jZWxUZXh0IT09bnVsbFwiIHJvbGU9XCJidXR0b25cIiBuei1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIiBbbnpMb2FkaW5nXT1cImNhbmNlbExvYWRpbmdcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImNhbmNlbERpc2FibGVkXCIgYXJpYS1sYWJlbD1cInt7IGNhbmNlbFRleHQgfX1cIj5cclxuICAgICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY21hY3NPa1RleHQhPT1udWxsXCIgcm9sZT1cImJ1dHRvblwiIG56LWJ1dHRvbiBbbnpUeXBlXT1cIm9rVHlwZVwiIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJva0xvYWRpbmdcIiBbZGlzYWJsZWRdPVwib2tEaXNhYmxlZFwiIGFyaWEtbGFiZWw9XCJ7eyBva1RleHQgfX1cIj5cclxuICAgICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPCEtLSBbUHJlZGVmaW5lZF0gQ29uZmlybSBNb2RhbCBDb250ZW50IC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbENvbnRlbnRDb25maXJtPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cImJvZHlTdHlsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW3R5cGVdPVwiaWNvblR5cGVcIj48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS10aXRsZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKHRpdGxlKSAmJiAhaXNUZW1wbGF0ZVJlZihjbWFjc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoY21hY3NUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjbWFjc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIiFpc05vbkVtcHR5U3RyaW5nKGNtYWNzVGl0bGUpXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj57e3RpdGxlfX08L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY21hY3NUaXRsZSlcIj5cclxuICAgICAgICAgICAgICA8ZGl2Pnt7Y21hY3NUaXRsZX19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KGNvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGNvbnRlbnQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoY29udGVudClcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3tjb250ZW50fX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsT3JpZ2luQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJ0bnNcIj5cclxuICAgICAgICA8YnV0dG9uIG56LWJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKm5nSWY9XCJjbWFjc0NhbmNlbFRleHQhPT1udWxsXCIgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIlxyXG4gICAgICAgICAgW256TG9hZGluZ109XCJjYW5jZWxMb2FkaW5nXCIgYXJpYS1sYWJlbD1cInt7IGNhbmNlbFRleHQgfX1cIj5cclxuICAgICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY21hY3NPa1RleHQhPT1udWxsXCIgcm9sZT1cImJ1dHRvblwiICNhdXRvRm9jdXNCdXR0b25PayBuei1idXR0b24gW256VHlwZV09XCJva1R5cGVcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiIFtuekxvYWRpbmddPVwib2tMb2FkaW5nXCIgYXJpYS1sYWJlbD1cInt7IG9rVGV4dCB9fVwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IDwhLS0gLy5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXIgLS0+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==