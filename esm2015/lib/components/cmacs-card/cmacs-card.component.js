import { __decorate } from "tslib";
import { Component, ContentChild, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "../cmacs-radio/cmacs-radio.component";
import * as i5 from "@angular/forms";
import * as i6 from "ng-zorro-antd/grid";
import * as i7 from "../cmacs-tooltip/tooltip";
import * as i8 from "ng-zorro-antd/core/transition-patch";
import * as i9 from "ng-zorro-antd/icon";
import * as i10 from "../cmacs-video-player/cmacs-video-player.component";
import * as i11 from "../cmacs-tag/tag.component";
import * as i12 from "./cmacs-card-loading.component";
function CmacsCardComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function CmacsCardComponent_div_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.title);
} }
function CmacsCardComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_2_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.title);
} }
function CmacsCardComponent_div_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.extra);
} }
function CmacsCardComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r8.extra);
} }
function CmacsCardComponent_div_2_ng_container_4_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r9.tab.template);
} }
function CmacsCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_2_div_2_Template, 2, 1, "div", 8);
    i0.ɵɵtemplate(3, CmacsCardComponent_div_2_div_3_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCardComponent_div_2_ng_container_4_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.extra);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.tab);
} }
function CmacsCardComponent_div_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 15);
    i0.ɵɵlistener("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.selected = $event; })("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.checkRadio(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r14.selected)("disabled", ctx_r14.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.labelTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r14.body);
} }
function CmacsCardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_3_ng_container_2_Template, 4, 4, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.cover);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.cmacsType === "selection");
} }
function CmacsCardComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 17);
    i0.ɵɵelementStart(4, "div", 18);
    i0.ɵɵelementStart(5, "span", 19);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 20);
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 21);
    i0.ɵɵelement(14, "i", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 21);
    i0.ɵɵelement(16, "i", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 21);
    i0.ɵɵelement(18, "i", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 21);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 21);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 21);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp + (ctx_r19.celcius ? "\u00B0C" : "\u00B0F"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r19.weather.icon, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 8, ctx_r19.weather.description));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp_min + "\u00B0 / ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp_max + "\u00B0");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r19.weather.clouds_all + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.humidity + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.wind_speed + " Km/H");
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.todo.UniqueId);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-todo-card-overdue", ctx_r30.todo.isOverdue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r30.todo.date);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r31.todo.project);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 44);
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r38.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_10_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1) { return { id: a0, name: a1 }; };
function CmacsCardComponent_ng_container_5_ng_container_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_2_div_10_ng_container_1_Template, 1, 1, "ng-container", 43);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_div_10_a_2_Template, 2, 0, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r32.todoUserAssigned)("ngTemplateOutletContext", i0.ɵɵpureFunction2(3, _c0, ctx_r32.todo.userAssignedId, ctx_r32.todo.userAssignedName));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r32.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r34.todo.stateColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", "flag");
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "span", 51);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.goToModuleToDo($event, ctx_r40.todo.link); });
    i0.ɵɵelement(2, "i", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.iconsToDoClick("attachments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r36.todo.attachments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return ctx_r44.iconsToDoClick("comments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r37.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_div_2_Template, 3, 1, "div", 26);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_2_div_3_Template, 3, 3, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 28);
    i0.ɵɵelementStart(5, "div", 29);
    i0.ɵɵelementStart(6, "span", 30);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CmacsCardComponent_ng_container_5_ng_container_2_div_8_Template, 3, 1, "div", 31);
    i0.ɵɵelementStart(9, "div", 32);
    i0.ɵɵtemplate(10, CmacsCardComponent_ng_container_5_ng_container_2_div_10_Template, 3, 6, "div", 33);
    i0.ɵɵtemplate(11, CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template, 3, 0, "div", 34);
    i0.ɵɵtemplate(12, CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template, 3, 3, "div", 35);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template, 3, 0, "div", 36);
    i0.ɵɵtemplate(14, CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template, 5, 1, "div", 37);
    i0.ɵɵtemplate(15, CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template, 5, 1, "div", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.UniqueId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.date);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("cmacs-todo-card-overdue", ctx_r20.todo.isOverdue);
    i0.ɵɵpropertyInterpolate("title", ctx_r20.todo.title);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r20.todo.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.project);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r20.todo.isTeam);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.isTeam);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.hasPriorityFlag);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.association);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.attachments);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 64);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 65);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r46.cmacsIcon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r46.file.extension);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r50.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r48.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_2_Template, 7, 4, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 58);
    i0.ɵɵelementStart(5, "div", 59);
    i0.ɵɵelementStart(6, "div", 60);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 61);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 62);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template, 2, 1, "div", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r21.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.useDefaultContent);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("title", ctx_r21.file.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r21.file.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r21.file.created_at);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r21.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 67);
    i0.ɵɵelementStart(2, "cmacs-video-player", 68);
    i0.ɵɵlistener("playerReady", function CmacsCardComponent_ng_container_5_ng_container_4_Template_cmacs_video_player_playerReady_2_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.onPlayerReady($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 69);
    i0.ɵɵelementStart(4, "div", 70);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("sources", ctx_r22.sources);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", ctx_r22.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r22.title);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r54.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r53.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 71);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 72);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template, 2, 1, "div", 73);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r23.cmacsIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r23.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r23.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 75);
    i0.ɵɵelementStart(2, "a", 76);
    i0.ɵɵelement(3, "i", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 78);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r24.title);
} }
function CmacsCardComponent_ng_container_5_ng_container_7_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_7_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 84);
} if (rf & 2) {
    const person_r61 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", person_r61.image, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r61 = i0.ɵɵnextContext().$implicit;
    const ctx_r64 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r64.getInitials(person_r61.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template, 1, 1, "img", 83);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r61 = ctx.$implicit;
    const i_r62 = ctx.index;
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("background-color", !person_r61.image ? "#512DA8" : "#c7f5ff")("padding", !person_r61.image ? "4px" : "0px")("display", i_r62 >= 4 && ctx_r59.team.length > 5 ? "none" : "inline-block");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", person_r61.image);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !person_r61.image);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r60.team.length - 4, "");
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 79);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template, 3, 8, "div", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template, 2, 1, "div", 81);
    i0.ɵɵprojection(4, 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r57.team);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r57.team.length > 5);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_Template, 5, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r26.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r26.useDefaultContent);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 104);
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("background-image", ctx_r67.getBackgroundImage());
} }
function CmacsCardComponent_ng_container_5_ng_container_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 105);
    i0.ɵɵelementStart(1, "span", 106);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r68 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r68.getInitials(ctx_r68.project.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 107);
} if (rf & 2) {
    const ctx_r69 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r69.project.teamLead.avatar, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r70.getInitials(ctx_r70.project.teamLead.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 86);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_9_div_2_Template, 1, 2, "div", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_9_div_3_Template, 3, 1, "div", 88);
    i0.ɵɵelementStart(4, "cmacs-tag", 89);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 90);
    i0.ɵɵelementStart(7, "span", 91);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 92);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 76);
    i0.ɵɵelement(12, "i", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 92);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 94);
    i0.ɵɵelement(16, "div", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 96);
    i0.ɵɵtemplate(18, CmacsCardComponent_ng_container_5_ng_container_9_img_18_Template, 1, 1, "img", 97);
    i0.ɵɵtemplate(19, CmacsCardComponent_ng_container_5_ng_container_9_span_19_Template, 2, 1, "span", 98);
    i0.ɵɵelementStart(20, "div", 99);
    i0.ɵɵelement(21, "div", 100);
    i0.ɵɵelement(22, "div", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "a", 102);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_9_Template_a_click_23_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.openMail($event); });
    i0.ɵɵelement(24, "i", 103);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage !== "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage === "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cmacsGridType", ctx_r27.project.statusTag);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r27.project.status);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r27.projectDateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r27.project.startDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r27.project.endDate);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r27.project.completion);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r27.project.teamLead.avatar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r27.project.teamLead.avatar || ctx_r27.project.teamLead.avatar === "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.name), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.charge), i0.ɵɵsanitizeHtml);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r79 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r79.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r78.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 109);
    i0.ɵɵelementStart(2, "a", 76);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 110, 111);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r81); const _r76 = i0.ɵɵreference(5); const ctx_r80 = i0.ɵɵnextContext(3); return ctx_r80.toggleEdit(_r76); });
    i0.ɵɵelementStart(6, "span", 112, 113);
    i0.ɵɵlistener("keydown.enter", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keydown_enter_6_listener($event) { i0.ɵɵrestoreView(_r81); const _r76 = i0.ɵɵreference(5); const _r77 = i0.ɵɵreference(7); const ctx_r82 = i0.ɵɵnextContext(3); return ctx_r82.handleEnter($event, _r76, _r77); })("keyup", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keyup_6_listener($event) { i0.ɵɵrestoreView(_r81); const _r77 = i0.ɵɵreference(7); const ctx_r83 = i0.ɵɵnextContext(3); return ctx_r83.handleEdit($event, _r77); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template, 2, 1, "div", 114);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r74.folderIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r74.title);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("contentEditable", ctx_r74.isEditable);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r74.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r74.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template, 10, 6, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.useDefaultContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r28.useDefaultContent);
} }
function CmacsCardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_1_Template, 25, 10, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_Template, 16, 13, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_Template, 14, 6, "ng-container", 4);
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_4_Template, 7, 3, "ng-container", 4);
    i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_ng_container_5_Template, 8, 6, "ng-container", 4);
    i0.ɵɵtemplate(6, CmacsCardComponent_ng_container_5_ng_container_6_Template, 7, 1, "ng-container", 4);
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_7_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(8, CmacsCardComponent_ng_container_5_ng_container_8_Template, 3, 2, "ng-container", 4);
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_9_Template, 25, 13, "ng-container", 4);
    i0.ɵɵtemplate(10, CmacsCardComponent_ng_container_5_ng_container_10_Template, 3, 2, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "weather");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "todo");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "big-file");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "video");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "file");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "measure");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "none" || ctx_r4.cmacsType === "selection" || ctx_r4.cmacsType === "action");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "team");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "project");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "folder");
} }
function CmacsCardComponent_cmacs_card_loading_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-card-loading");
} }
function CmacsCardComponent_ul_7_li_1_ng_template_2_Template(rf, ctx) { }
function CmacsCardComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, CmacsCardComponent_ul_7_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r85 = ctx.$implicit;
    const ctx_r84 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", 100 / ctx_r84.actions.length, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", action_r85);
} }
function CmacsCardComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 116);
    i0.ɵɵtemplate(1, CmacsCardComponent_ul_7_li_1_Template, 3, 3, "li", 117);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.actions);
} }
const _c1 = ["*", [["", "cmacs-action-panel", ""]]];
const _c2 = ["*", "[cmacs-action-panel]"];
export class CmacsCardComponent {
    constructor(cdr, renderer, sanitizer, elementRef) {
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.folderIcon = '';
        this.isEditable = false;
        this.bordered = true;
        this.opened = false;
        this.editable = false;
        this.isRadio = false;
        this.loading = false;
        this.disabled = false;
        this.hoverable = false;
        this.useDefaultContent = false;
        this.playerReady = new EventEmitter();
        this.actions = [];
        this.team = [];
        this.file = null;
        this.project = [];
        this.celcius = true;
        this.cmacsType = 'none';
        this.cmacsIcon = '';
        this.cmacsIconOpenedFolder = 'iconUILarge-Folder';
        this.cmacsIconClosedFolder = 'iconUILarge-Folder';
        this.titleChange = new EventEmitter();
        this.ondlclickCard = new EventEmitter();
        this.open = new EventEmitter();
        this.close = new EventEmitter();
        this.selected = false;
        this.selectedChange = new EventEmitter();
        this.goToModule = new EventEmitter();
        this.iconToDoClick = new EventEmitter();
        this.tapTimeoutHandler = null;
        renderer.addClass(elementRef.nativeElement, 'ant-card');
    }
    openMail($event) {
        $event.stopImmediatePropagation();
        $event.preventDefault();
        const link = `mailto: ${this.project.teamLead.email}`;
        location.href = link;
    }
    ngOnInit() {
        if (this.cmacsType === 'folder') {
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
        }
        this.isEditable = this.editable;
        if (this.projectDateLabel === undefined || this.projectDateLabel === null) {
            this.projectDateLabel = 'Project Dates';
        }
    }
    onPlayerReady(api) {
        this.playerReady.emit(api);
    }
    checkRadio() {
        this.selectedChange.emit(this.selected);
    }
    onClick(event) {
        if (!this.useDefaultContent || this.cmacsType === 'big-file') {
            this.select(event);
        }
    }
    onDblClick(event) {
        if (this.cmacsType === 'folder' && !this.useDefaultContent) {
            this.opened = !this.opened;
            this.folderIcon = this.opened ? this.cmacsIconOpenedFolder : this.cmacsIconClosedFolder;
            if (this.opened) {
                this.open.emit();
            }
            else {
                this.close.emit();
            }
        }
        if (this.cmacsType === 'project') {
            this.ondlclickCard.emit(this.project);
        }
    }
    onTouchStart($event) {
        $event.preventDefault();
        if (!this.tapTimeoutHandler) {
            this.tapTimeoutHandler = setTimeout(() => {
                this.onClick($event);
                this.tapTimeoutHandler = null;
            }, 300);
        }
        else {
            clearTimeout(this.tapTimeoutHandler);
            this.tapTimeoutHandler = null;
            this.onDblClick($event);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    select(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled) {
            if (!this.isRadio) {
                this.selected = !this.selected;
            }
            else {
                this.selected = this.selected ? this.selected : !this.selected;
            }
            this.selectedChange.emit(this.selected);
        }
    }
    handleEnter(event, titleContainer, titleSpan) {
        event.preventDefault();
        event.stopImmediatePropagation();
        titleContainer.style.textOverflow = 'ellipsis';
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        titleSpan.innerText = text;
        this.isEditable = false;
        this.titleChange.emit(text);
    }
    handleEdit(event, titleSpan) {
        const text = titleSpan.innerText.replace(/(\r\n|\n|\r)/gm, "");
        this.titleChange.emit(text);
    }
    toggleEdit(titleContainer) {
        this.isEditable = this.editable;
        if (this.isEditable) {
            titleContainer.style.textOverflow = 'initial';
        }
    }
    getInitials(name) {
        let initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    }
    getBackgroundImage() {
        return this.sanitizer.bypassSecurityTrustStyle('url(\'' + this.project.projectImage + '\')');
    }
    iconsToDoClick(icon) {
        this.iconToDoClick.next({ icon, id: this.todo.UniqueId });
    }
    goToModuleToDo(event, url) {
        event.preventDefault();
        event.stopPropagation();
        this.goToModule.emit(url);
    }
    buildLabel(value) {
        let result = '&nbsp;';
        if (value.length > 20) {
            result = `${value.slice(0, 20)}...`;
        }
        else if (value !== undefined && value !== null && value !== '' && value.length > 0) {
            result = value;
        }
        return result;
    }
}
CmacsCardComponent.ɵfac = function CmacsCardComponent_Factory(t) { return new (t || CmacsCardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsCardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCardComponent, selectors: [["cmacs-card"]], contentQueries: function CmacsCardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsCardTabComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tab = _t.first);
    } }, hostVars: 48, hostBindings: function CmacsCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsCardComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function CmacsCardComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("touchstart", function CmacsCardComponent_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-card-loading", ctx.loading)("ant-card-bordered", ctx.bordered)("ant-card-hoverable", ctx.hoverable || ctx.cmacsType === "selection")("ant-card-type-inner", ctx.type === "inner")("ant-card-contain-tabs", !!ctx.tab)("cmacs-card-files-wrapper", ctx.cmacsType === "file")("cmacs-card-measure-wrapper", ctx.cmacsType === "measure")("cmacs-card-measure-wrapper-selected", ctx.cmacsType === "measure" && ctx.selected)("cmacs-selection-card", ctx.cmacsType === "selection")("cmacs-card-selected", ctx.cmacsType === "selection" && ctx.selected)("cmacs-card-disabled", ctx.cmacsType === "selection" && ctx.disabled)("cmacs-action-card", ctx.cmacsType === "action")("cmacs-weather-card", ctx.cmacsType === "weather")("cmacs-big-file-card", ctx.cmacsType === "big-file")("cmacs-big-file-card-selected", ctx.cmacsType === "big-file" && ctx.selected)("cmacs-action-card-disabled", ctx.cmacsType === "action" && ctx.disabled)("cmacs-information-card", ctx.cmacsType === "team")("cmacs-team-card", ctx.cmacsType === "project")("cmacs-video-player-card", ctx.cmacsType === "video")("cmacs-todo-card", ctx.cmacsType === "todo")("cmacs-todo-card-selected", ctx.cmacsType === "todo" && ctx.selected)("cmacs-team-card-selected", ctx.cmacsType === "project" && ctx.selected)("cmacs-card-files-folders-wrapper", ctx.cmacsType === "folder")("file-card-selected", ctx.cmacsType === "folder" && ctx.selected);
    } }, inputs: { bordered: "bordered", opened: "opened", editable: "editable", isRadio: "isRadio", loading: "loading", disabled: "disabled", hoverable: "hoverable", useDefaultContent: "useDefaultContent", sources: "sources", bodyStyle: "bodyStyle", cover: "cover", body: "body", actions: "actions", team: "team", file: "file", project: "project", projectDateLabel: "projectDateLabel", todo: "todo", weather: "weather", celcius: "celcius", type: "type", cmacsType: "cmacsType", cmacsIcon: "cmacsIcon", cmacsIconOpenedFolder: "cmacsIconOpenedFolder", cmacsIconClosedFolder: "cmacsIconClosedFolder", title: "title", labelTitle: "labelTitle", extra: "extra", selected: "selected", value: "value", todoUserAssigned: "todoUserAssigned" }, outputs: { playerReady: "playerReady", titleChange: "titleChange", ondlclickCard: "ondlclickCard", open: "open", close: "close", selectedChange: "selectedChange", goToModule: "goToModule", iconToDoClick: "iconToDoClick" }, exportAs: ["cmacsCard"], ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["content", ""], ["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], ["cmacs-radio", "", 3, "ngModel", "disabled", "ngModelChange"], [1, "cmacs-weather-card-temp"], [1, "cmacs-weather-card-cloud-img", 3, "src"], [1, "cmacs-weather-card-description-wrapper"], [1, "cmacs-weather-card-description"], [1, "cmacs-weather-card-temp-min-max"], [1, "cmacs-weather-col-1-3"], [1, "iconUILarge-Rain"], [1, "iconUILarge-Humidity"], [1, "iconUILarge-Wind"], ["nz-row", "", 1, "todo-card-header"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-col", "", "nzSpan", "6", "class", "cmacs-todo-card-date", 4, "ngIf"], [1, "todo-card-content"], [1, "cmacs-todo-card-title"], ["placement", "bottom", "cmacs-tooltip", "", 3, "title"], ["class", "cmacs-todo-card-project", 4, "ngIf"], ["nz-row", "", 1, "cmacs-todo-card-action"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-person", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-team", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-priority", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-association", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-attachments", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", "class", "cmacs-todo-card-comments", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "6", 1, "cmacs-todo-card-date"], [1, "cmacs-todo-card-project"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-person"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngIf"], [1, "iconCreation-User"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-team"], [1, "iconUILarge-Team"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-priority"], ["nz-icon", "", 3, "type"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-association"], [3, "click"], [1, "iconUILarge-Link"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-attachments", 3, "click"], [1, "iconUILarge-Attached"], ["nz-col", "", "nzSpan", "4", 1, "cmacs-todo-card-comments", 3, "click"], [1, "iconUILarge-Comments"], [1, "cmacs-card-big-file-meta"], [1, "cmacs-card-big-file-description"], [1, "cmacs-card-big-file-description-left-panel"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-big-file-title", 3, "title"], [1, "cmacs-card-big-file-date"], [1, "cmacs-card-big-file-description-right-panel"], ["class", "cmacs-card-big-file-extra", 4, "ngIf"], [1, "cmacs-card-big-file-icon-wrapper"], [1, "cmacs-card-big-file-extension-wrapper"], [1, "cmacs-card-big-file-extra"], [1, "cmacs-card-video-player-wrapper"], [3, "sources", "playerReady"], [1, "cmacs-card-video-description"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-video-title", 3, "title"], [1, "cmacs-card-files-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-label-recent", 3, "title"], ["class", "cmacs-card-file-extra", 4, "ngIf"], [1, "cmacs-card-file-extra"], [1, "cmacs-card-measure-icon-wrapper"], [1, "iconspan"], [1, "iconUILarge-Ruler"], [1, "cmacs-card-label-measure"], [2, "margin-bottom", "20px", "min-height", "25px", "display", "inline-flex"], ["class", "team-person-card", 3, "backgroundColor", "padding", "display", 4, "ngFor", "ngForOf"], ["class", "plus-team-card", 4, "ngIf"], [1, "team-person-card"], ["width", "30px", "height", "30px", 3, "src", 4, "ngIf"], ["width", "30px", "height", "30px", 3, "src"], [1, "plus-team-card"], [1, "projectimagecontainer"], ["class", "project-image", 3, "background-image", 4, "ngIf"], ["class", "cmacs-proj-card-div-Logo", 4, "ngIf"], [1, "project-status", 3, "cmacsGridType"], [1, "project-dates-wrapper"], [1, "project-dates-title"], [1, "project-dates", "project-dates-date"], [1, "iconArrowLarge-Arrow-Right", "project-dates"], [1, "project-card-progress-bar"], [1, "project-card-progress-bar-inner"], [1, "project-manager-details"], ["class", "manager-avatar", "width", "30px", "height", "30px", 3, "src", 4, "ngIf"], ["class", "cmacs-proj-avatar-text", 4, "ngIf"], [1, "project-manager-metadata"], [1, "manager-name", 3, "innerHtml"], [1, "manager-charge", 3, "innerHtml"], [1, "iconspan", "project-email-icon", 3, "click"], [1, "iconUILarge-Message"], [1, "project-image"], [1, "cmacs-proj-card-div-Logo"], [1, "cmacs-proj-card-text-Logo"], ["width", "30px", "height", "30px", 1, "manager-avatar", 3, "src"], [1, "cmacs-proj-avatar-text"], [1, "card-files-folders-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "card-files-folders-label", 3, "title", "click"], ["titleContainer", ""], [3, "keydown.enter", "keyup"], ["name", ""], ["class", "card-files-folder-extra iconspan", 4, "ngIf"], [1, "card-files-folder-extra", "iconspan"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function CmacsCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CmacsCardComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsCardComponent_div_2_Template, 5, 3, "div", 1);
        i0.ɵɵtemplate(3, CmacsCardComponent_div_3_Template, 3, 2, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_Template, 11, 10, "ng-container", 4);
        i0.ɵɵtemplate(6, CmacsCardComponent_cmacs_card_loading_6_Template, 1, 0, "cmacs-card-loading", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, CmacsCardComponent_ul_7_Template, 2, 1, "ul", 5);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.title || ctx.extra || ctx.tab) && (ctx.cmacsType === "none" || ctx.cmacsType === "team" || ctx.cmacsType === "project"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.cover || ctx.cmacsType === "selection" || ctx.cmacsType === "action");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", ctx.bodyStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.actions.length);
    } }, directives: [i2.NgIf, i2.NgStyle, i3.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i4.CmacsRadioComponent, i5.NgControlStatus, i5.NgModel, i6.NzRowDirective, i7.CmacsTooltipDirective, i6.NzColDirective, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CmacsVideoPlayerComponent, i2.NgForOf, i11.CmacsTagComponent, i12.CmacsCardLoadingComponent], pipes: [i2.TitleCasePipe], styles: [".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:18px;height:40px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-size:12px;font-weight:400;line-height:1.67}.cmacs-weather-card-temp,.cmacs-weather-col-1-3{font-family:Roboto-Regular;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-size:24px;font-weight:500;line-height:2.08}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{display:block}.card-list-row .ant-card-grid>*,.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px 7px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled+span,.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;margin-right:10px}.cmacs-information-card img{border-radius:3px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:3px;background-color:#dae8ff;color:#2a7cff;text-align:center;cursor:pointer;padding:4px}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a,.project-manager-metadata{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;height:15.45px}.manager-charge,.manager-name{max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;height:17.26px}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:3px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;transition:all .3s}.cmacs-big-file-card:before{content:\" \";width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;transition:all .3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;transition:all .3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;transition:all .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;transition:all .3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;transition:all .3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected.cmacs-big-file-card:before,.cmacs-big-file-card-selected .cmacs-card-big-file-meta{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px;margin:7px auto}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-webkit-box-orient:vertical}.cmacs-todo-card-project,.cmacs-todo-card-title{font-size:12px;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;white-space:nowrap}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;float:right;padding:0 5px}.cmacs-todo-card-action{padding:15px 14px 30px 15px;font-size:14px;position:absolute;bottom:-18px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#512da8}.cmacs-proj-card-div-Logo{background-color:#512da8;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:3px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5;background-color:#f6f7fb}.project-image{background-repeat:no-repeat;background-position:50%;background-size:contain;height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #e8e8e8}.todo-card-content{min-height:110px}", "cmacs-card {\n        display: block;\n      }\n    "], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "opened", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "editable", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "isRadio", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "hoverable", void 0);
__decorate([
    InputBoolean()
], CmacsCardComponent.prototype, "useDefaultContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCardComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-card',
                exportAs: 'cmacsCard',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-card.component.html',
                styles: [
                    `cmacs-card {
        display: block;
      }
    `
                ],
                host: {
                    '[class.ant-card-loading]': 'loading',
                    '[class.ant-card-bordered]': 'bordered',
                    '[class.ant-card-hoverable]': "hoverable || cmacsType === 'selection'",
                    '[class.ant-card-type-inner]': `type === 'inner'`,
                    '[class.ant-card-contain-tabs]': '!!tab',
                    '[class.cmacs-card-files-wrapper]': "cmacsType === 'file'",
                    '[class.cmacs-card-measure-wrapper]': "cmacsType === 'measure'",
                    '[class.cmacs-card-measure-wrapper-selected]': "cmacsType === 'measure' && selected",
                    '[class.cmacs-selection-card]': "cmacsType === 'selection'",
                    '[class.cmacs-card-selected]': "cmacsType === 'selection' && selected",
                    '[class.cmacs-card-disabled]': "cmacsType === 'selection' && disabled",
                    '[class.cmacs-action-card]': "cmacsType === 'action'",
                    '[class.cmacs-weather-card]': "cmacsType === 'weather'",
                    '[class.cmacs-big-file-card]': "cmacsType === 'big-file'",
                    '[class.cmacs-big-file-card-selected]': "cmacsType === 'big-file' && selected",
                    '[class.cmacs-action-card-disabled]': "cmacsType === 'action' && disabled",
                    '[class.cmacs-information-card]': "cmacsType === 'team'",
                    '[class.cmacs-team-card]': "cmacsType === 'project'",
                    '[class.cmacs-video-player-card]': "cmacsType === 'video'",
                    '[class.cmacs-todo-card]': "cmacsType === 'todo'",
                    '[class.cmacs-todo-card-selected]': "cmacsType === 'todo' && selected",
                    '[class.cmacs-team-card-selected]': "cmacsType === 'project' && selected",
                    '[class.cmacs-card-files-folders-wrapper]': "cmacsType === 'folder'",
                    '[class.file-card-selected]': "cmacsType === 'folder' && selected"
                },
                styleUrls: ['./cmacs-card.component.css'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.DomSanitizer }, { type: i0.ElementRef }]; }, { bordered: [{
            type: Input
        }], opened: [{
            type: Input
        }], editable: [{
            type: Input
        }], isRadio: [{
            type: Input
        }], loading: [{
            type: Input
        }], disabled: [{
            type: Input
        }], hoverable: [{
            type: Input
        }], useDefaultContent: [{
            type: Input
        }], sources: [{
            type: Input
        }], playerReady: [{
            type: Output
        }], bodyStyle: [{
            type: Input
        }], cover: [{
            type: Input
        }], body: [{
            type: Input
        }], actions: [{
            type: Input
        }], team: [{
            type: Input
        }], file: [{
            type: Input
        }], project: [{
            type: Input
        }], projectDateLabel: [{
            type: Input
        }], todo: [{
            type: Input
        }], weather: [{
            type: Input
        }], celcius: [{
            type: Input
        }], type: [{
            type: Input
        }], cmacsType: [{
            type: Input
        }], cmacsIcon: [{
            type: Input
        }], cmacsIconOpenedFolder: [{
            type: Input
        }], cmacsIconClosedFolder: [{
            type: Input
        }], title: [{
            type: Input
        }], labelTitle: [{
            type: Input
        }], titleChange: [{
            type: Output
        }], extra: [{
            type: Input
        }], tab: [{
            type: ContentChild,
            args: [CmacsCardTabComponent]
        }], ondlclickCard: [{
            type: Output
        }], open: [{
            type: Output
        }], close: [{
            type: Output
        }], selected: [{
            type: Input
        }], value: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], goToModule: [{
            type: Output
        }], todoUserAssigned: [{
            type: Input
        }], iconToDoClick: [{
            type: Output
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }], onTouchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNBLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUdoQyxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNickQsa0JBQXlCOzs7SUFPckIsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQStDO0lBQzdDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7SUFHNUMsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQTBDO0lBQ3hDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7O0lBR2hELDZCQUEwQjtJQUN4Qix5R0FBNkQ7SUFDL0QsMEJBQWU7OztJQURBLGVBQWlDO0lBQWpDLHNEQUFpQzs7O0lBWGxELDhCQUNnSDtJQUM5Ryw4QkFBbUM7SUFDakMseUVBRU07SUFDTix5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QUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzQ2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICduZ3gtdmlkZW9ndWxhcic7XHJcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCIuLi9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0NhcmRUeXBlID0gJ2ZpbGUnIHwgJ3NlbGVjdGlvbicgfFxyXG4gICdhY3Rpb24nIHwgJ3RlYW0nIHwgJ3Byb2plY3QnIHwgJ2ZvbGRlcicgfCAnbWVhc3VyZScgfCAnd2VhdGhlcicgfFxyXG4gICdiaWctZmlsZScgfCAnbm9uZScgfCAndmlkZW8nIHwgJ3RvZG8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCaWdGaWxlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyIHtcclxuICB0ZW1wPzogbnVtYmVyLFxyXG4gIHRlbXBfbWluPzogbnVtYmVyLFxyXG4gIHRlbXBfbWF4PzogbnVtYmVyLFxyXG4gIGh1bWlkaXR5PzogbnVtYmVyLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGljb24/OiBzdHJpbmcsXHJcbiAgY2xvdWRzX2FsbD86IG51bWJlcixcclxuICB3aW5kX3NwZWVkPzogbnVtYmVyXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NhcmQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGNtYWNzLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnYm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogXCJob3ZlcmFibGUgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6IGB0eXBlID09PSAnaW5uZXInYCxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzXSc6ICchIXRhYicsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXItc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zZWxlY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXdlYXRoZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3dlYXRoZXInXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtaW5mb3JtYXRpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXZpZGVvLXBsYXllci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndmlkZW8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtZm9sZGVycy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInICYmIHNlbGVjdGVkXCJcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNhcmQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb2xkZXJJY29uID0gJyc7XHJcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1JhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaG92ZXJhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZURlZmF1bHRDb250ZW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc291cmNlczogU291cmNlW107XHJcbiAgQE91dHB1dCgpIHBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8VmdBUEk+ID0gbmV3IEV2ZW50RW1pdHRlcjxWZ0FQST4oKTtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgY292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHRlYW06IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEJpZ0ZpbGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHByb2plY3Q6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHByb2plY3REYXRlTGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdG9kbzogYW55O1xyXG4gIEBJbnB1dCgpIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgQElucHV0KCkgY2VsY2l1cyA9IHRydWU7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbk9wZW5lZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgY21hY3NJY29uQ2xvc2VkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbGFiZWxUaXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGdvVG9Nb2R1bGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSB0b2RvVXNlckFzc2lnbmVkOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQE91dHB1dCgpIGljb25Ub0RvQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1haWwoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsaW5rID0gYG1haWx0bzogJHt0aGlzLnByb2plY3QudGVhbUxlYWQuZW1haWx9YDtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBsaW5rO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gdGhpcy5jbWFjc0ljb25PcGVuZWRGb2xkZXIgOiB0aGlzLmNtYWNzSWNvbkNsb3NlZEZvbGRlcjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRoaXMuZWRpdGFibGU7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvamVjdERhdGVMYWJlbCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucHJvamVjdERhdGVMYWJlbCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByb2plY3REYXRlTGFiZWwgPSAnUHJvamVjdCBEYXRlcyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblBsYXllclJlYWR5KGFwaTogVmdBUEkpIHtcclxuICAgIHRoaXMucGxheWVyUmVhZHkuZW1pdChhcGkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoZWNrUmFkaW8oKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudXNlRGVmYXVsdENvbnRlbnQgfHwgdGhpcy5jbWFjc1R5cGUgPT09ICdiaWctZmlsZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKSBvbkRibENsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiAhdGhpcy51c2VEZWZhdWx0Q29udGVudCkge1xyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdwcm9qZWN0Jykge1xyXG4gICAgICB0aGlzLm9uZGxjbGlja0NhcmQuZW1pdCh0aGlzLnByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFwVGltZW91dEhhbmRsZXIgPSBudWxsO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgb25Ub3VjaFN0YXJ0KCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLnRhcFRpbWVvdXRIYW5kbGVyKSB7XHJcbiAgICAgIHRoaXMudGFwVGltZW91dEhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2soJGV2ZW50KTtcclxuICAgICAgICB0aGlzLnRhcFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRhcFRpbWVvdXRIYW5kbGVyKTtcclxuICAgICAgdGhpcy50YXBUaW1lb3V0SGFuZGxlciA9IG51bGw7XHJcbiAgICAgIHRoaXMub25EYmxDbGljaygkZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmFkaW8pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkIDogIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlQ29udGFpbmVyLCB0aXRsZVNwYW4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcclxuICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgndXJsKFxcJycgKyB0aGlzLnByb2plY3QucHJvamVjdEltYWdlICsgJ1xcJyknKTtcclxuICB9XHJcblxyXG4gIGljb25zVG9Eb0NsaWNrKGljb246IHN0cmluZykge1xyXG4gICAgdGhpcy5pY29uVG9Eb0NsaWNrLm5leHQoeyBpY29uLCBpZDogdGhpcy50b2RvLlVuaXF1ZUlkIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub01vZHVsZVRvRG8oZXZlbnQ6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmdvVG9Nb2R1bGUuZW1pdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRMYWJlbCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJm5ic3A7JztcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyMCkge1xyXG4gICAgICByZXN1bHQgPSBgJHt2YWx1ZS5zbGljZSgwLCAyMCl9Li4uYDtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjY29udGVudD5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48ZGl2IGNsYXNzPVwiYW50LWNhcmQtaGVhZFwiXHJcbiAgKm5nSWY9XCIodGl0bGUgfHwgZXh0cmEgfHwgdGFiICkgJiYgKGNtYWNzVHlwZSA9PT0gJ25vbmUnIHx8IGNtYWNzVHlwZSA9PT0gJ3RlYW0nIHx8IGNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnKVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkLXRpdGxlXCIgKm5nSWY9XCJ0aXRsZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtZXh0cmFcIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidGFiXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcblxyXG48IS0tIHNlbGVjdGlvbiBjYXJkIGZvciBwcm9qZWN0IGNyZWF0aW9uIC0tPlxyXG48ZGl2IGNsYXNzPVwiYW50LWNhcmQtY292ZXJcIiAqbmdJZj1cImNvdmVyIHx8IGNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgfHwgY21hY3NUeXBlID09PSAnYWN0aW9uJ1wiPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb3ZlclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIj5cclxuICAgIDxsYWJlbCBjbWFjcy1yYWRpbyBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tSYWRpbygpXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+e3tsYWJlbFRpdGxlfX08L2xhYmVsPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1ib2R5XCIgW25nU3R5bGVdPVwiYm9keVN0eWxlXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nXCI+XHJcblxyXG4gICAgPCEtLSB3ZWF0aGVyIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnd2VhdGhlcidcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtdGVtcFwiPnt7d2VhdGhlci50ZW1wICsgKChjZWxjaXVzKSA/ICfCsEMnIDogJ8KwRicpfX08L3NwYW4+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtY2xvdWQtaW1nXCIgW3NyY109XCJ3ZWF0aGVyLmljb25cIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtZGVzY3JpcHRpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLWRlc2NyaXB0aW9uXCI+e3t3ZWF0aGVyLmRlc2NyaXB0aW9uIHwgdGl0bGVjYXNlfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtdGVtcC1taW4tbWF4XCI+XHJcbiAgICAgICAgICA8c3Bhbj57e3dlYXRoZXIudGVtcF9taW4gKyAnwrAgLyAnfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57e3dlYXRoZXIudGVtcF9tYXggKyAnwrAnfX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLVJhaW5cIj48L2k+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUh1bWlkaXR5XCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1XaW5kXCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+e3t3ZWF0aGVyLmNsb3Vkc19hbGwgKyAnJSd9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+e3t3ZWF0aGVyLmh1bWlkaXR5ICsgJyUnfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci53aW5kX3NwZWVkICsgJyBLbS9IJ319PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIHRvIGRvIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAndG9kbydcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZC1oZWFkZXJcIiBuei1yb3c+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInRvZG8uVW5pcXVlSWRcIiBuei1jb2wgbnpTcGFuPVwiMTJcIj5cclxuICAgICAgICAgIDxzcGFuPnt7dG9kby5VbmlxdWVJZH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ0b2RvLmRhdGVcIiBuei1jb2wgbnpTcGFuPVwiNlwiICBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1kYXRlXCI+XHJcbiAgICAgICAgICA8c3BhbiBbY2xhc3MuY21hY3MtdG9kby1jYXJkLW92ZXJkdWVdPVwidG9kby5pc092ZXJkdWVcIj57e3RvZG8uZGF0ZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1vdmVyZHVlXT1cInRvZG8uaXNPdmVyZHVlXCIgdGl0bGU9XCJ7e3RvZG8udGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+e3t0b2RvLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInRvZG8ucHJvamVjdFwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXByb2plY3RcIj5cclxuICAgICAgICAgIDxzcGFuPnt7dG9kby5wcm9qZWN0fX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICA8IS0tIHVzZXIgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cIiF0b2RvLmlzVGVhbVwiICBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1wZXJzb25cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdJZl09XCJ0b2RvVXNlckFzc2lnbmVkXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0b2RvVXNlckFzc2lnbmVkOyBjb250ZXh0OiB7aWQ6IHRvZG8udXNlckFzc2lnbmVkSWQsIG5hbWU6IHRvZG8udXNlckFzc2lnbmVkTmFtZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGEgKm5nSWY9XCIhdG9kb1VzZXJBc3NpZ25lZFwiPjxpIGNsYXNzPVwiaWNvbkNyZWF0aW9uLVVzZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIHRlYW0gaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cInRvZG8uaXNUZWFtXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtdGVhbVwiPlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzcz1cImljb25VSUxhcmdlLVRlYW1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGZsYWcgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cInRvZG8uaGFzUHJpb3JpdHlGbGFnXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtcHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgPGEgW3N0eWxlLmNvbG9yXT1cInRvZG8uc3RhdGVDb2xvclwiPjxpIG56LWljb24gW3R5cGVdPVwiJ2ZsYWcnXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBsaW5rIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmFzc29jaWF0aW9uXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYXNzb2NpYXRpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImdvVG9Nb2R1bGVUb0RvKCRldmVudCwgdG9kby5saW5rKVwiPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTGlua1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gYXR0YWNobWVudHMgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cInRvZG8uYXR0YWNobWVudHNcIiAoY2xpY2spPVwiaWNvbnNUb0RvQ2xpY2soJ2F0dGFjaG1lbnRzJylcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1hdHRhY2htZW50c1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3RvZG8uYXR0YWNobWVudHN9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1BdHRhY2hlZFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gY29tbWVudHMgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjRcIiAqbmdJZj1cInRvZG8uY29tbWVudHNcIiAoY2xpY2spPVwiaWNvbnNUb0RvQ2xpY2soJ2NvbW1lbnRzJylcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3RvZG8uY29tbWVudHN9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Db21tZW50c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIGZpbGVzIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1tZXRhXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtaWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwie3tjbWFjc0ljb259fVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWV4dGVuc2lvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZmlsZS5leHRlbnNpb259fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1kZXNjcmlwdGlvbi1sZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS10aXRsZVwiIHRpdGxlPVwie3tmaWxlLnRpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUuY3JlYXRlZF9hdH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb24tcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWV4dHJhXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSB2aWRlb3MgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAndmlkZW8nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLXZpZGVvLXBsYXllci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGNtYWNzLXZpZGVvLXBsYXllciBbc291cmNlc109XCJzb3VyY2VzXCIgKHBsYXllclJlYWR5KT1cIm9uUGxheWVyUmVhZHkoJGV2ZW50KVwiPjwvY21hY3MtdmlkZW8tcGxheWVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtdmlkZW8tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC12aWRlby10aXRsZVwiIHRpdGxlPVwie3t0aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIGZpbGVzIGNhcmQgZm9yIHJlY2VudCBwYW5lbC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWZpbGVzLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxhPjxpIGNsYXNzPVwie3tjbWFjc0ljb259fVwiPjwvaT48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1sYWJlbC1yZWNlbnRcIiB0aXRsZT1cInt7dGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+XHJcbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtZmlsZS1leHRyYVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gcmFkaW8gY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1tZWFzdXJlLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiaWNvbnNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLVJ1bGVyXCI+PC9pPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWxhYmVsLW1lYXN1cmVcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdub25lJyB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nIHx8IGNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDwhLS0gdGVhbSBjYXJkIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDsgbWluLWhlaWdodDogMjVweDsgZGlzcGxheTogaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLXBlcnNvbi1jYXJkXCIgKm5nRm9yPVwibGV0IHBlcnNvbiBvZiB0ZWFtOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCIhcGVyc29uLmltYWdlID8gJyM1MTJEQTgnIDogJyNjN2Y1ZmYnXCJcclxuICAgICAgICAgICAgW3N0eWxlLnBhZGRpbmddPVwiIXBlcnNvbi5pbWFnZSA/ICc0cHgnIDogJzBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCIoaSA+PSA0ICYmIHRlYW0ubGVuZ3RoID4gNSkgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyBcIj5cclxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgKm5nSWY9XCJwZXJzb24uaW1hZ2VcIiBbc3JjXT1cInBlcnNvbi5pbWFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFwZXJzb24uaW1hZ2VcIj57e2dldEluaXRpYWxzKHBlcnNvbi5uYW1lKX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBsdXMtdGVhbS1jYXJkXCIgKm5nSWY9XCJ0ZWFtLmxlbmd0aCA+IDVcIj4re3t0ZWFtLmxlbmd0aCAtIDR9fTwvZGl2PlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy1hY3Rpb24tcGFuZWxdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gcHJvamVjdCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0J1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdGltYWdlY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiAqbmdJZj1cInByb2plY3QucHJvamVjdEltYWdlICE9PSAnJ1wiIFtzdHlsZS5iYWNrZ3JvdW5kLWltYWdlXT1cImdldEJhY2tncm91bmRJbWFnZSgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwicHJvamVjdC5wcm9qZWN0SW1hZ2UgPT09ICcnXCIgY2xhc3M9XCJjbWFjcy1wcm9qLWNhcmQtZGl2LUxvZ29cIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXByb2otY2FyZC10ZXh0LUxvZ29cIj57e2dldEluaXRpYWxzKHByb2plY3QubmFtZSl9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjbWFjcy10YWcgY2xhc3M9XCJwcm9qZWN0LXN0YXR1c1wiIFtjbWFjc0dyaWRUeXBlXT1cInByb2plY3Quc3RhdHVzVGFnXCI+e3twcm9qZWN0LnN0YXR1c319PC9jbWFjcy10YWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRhdGVzLXdyYXBwZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGF0ZXMtdGl0bGVcIj57e3Byb2plY3REYXRlTGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGF0ZXMgcHJvamVjdC1kYXRlcy1kYXRlXCI+e3twcm9qZWN0LnN0YXJ0RGF0ZX19PC9zcGFuPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiaWNvbnNwYW5cIj48aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUFycm93LVJpZ2h0IHByb2plY3QtZGF0ZXNcIj48L2k+PC9hPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1kYXRlcyBwcm9qZWN0LWRhdGVzLWRhdGVcIj57e3Byb2plY3QuZW5kRGF0ZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtY2FyZC1wcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jYXJkLXByb2dyZXNzLWJhci1pbm5lclwiIFtzdHlsZS53aWR0aF09XCJwcm9qZWN0LmNvbXBsZXRpb25cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LW1hbmFnZXItZGV0YWlsc1wiPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9XCJwcm9qZWN0LnRlYW1MZWFkLmF2YXRhclwiIGNsYXNzPVwibWFuYWdlci1hdmF0YXJcIiB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIFtzcmNdPVwicHJvamVjdC50ZWFtTGVhZC5hdmF0YXJcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFwcm9qZWN0LnRlYW1MZWFkLmF2YXRhciB8fCBwcm9qZWN0LnRlYW1MZWFkLmF2YXRhciA9PT0gJydcIlxyXG4gICAgICAgICAgY2xhc3M9XCJjbWFjcy1wcm9qLWF2YXRhci10ZXh0XCI+e3tnZXRJbml0aWFscyhwcm9qZWN0LnRlYW1MZWFkLm5hbWUpfX08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbWFuYWdlci1tZXRhZGF0YVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmFnZXItbmFtZVwiIFtpbm5lckh0bWxdPVwiYnVpbGRMYWJlbChwcm9qZWN0LnRlYW1MZWFkLm5hbWUpXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW5hZ2VyLWNoYXJnZVwiIFtpbm5lckh0bWxdPVwiYnVpbGRMYWJlbChwcm9qZWN0LnRlYW1MZWFkLmNoYXJnZSlcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhIChjbGljayk9XCJvcGVuTWFpbCgkZXZlbnQpXCIgY2xhc3M9XCJpY29uc3BhbiBwcm9qZWN0LWVtYWlsLWljb25cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLU1lc3NhZ2VcIj48L2k+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuPCEtLSBmb2xkZXJzIGRlZmF1bHQgIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcidcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZpbGVzLWZvbGRlcnMtaWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuXCI+PGkgW2NsYXNzXT1cImZvbGRlckljb25cIj48L2k+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgI3RpdGxlQ29udGFpbmVyIChjbGljayk9XCJ0b2dnbGVFZGl0KHRpdGxlQ29udGFpbmVyKVwiIGNsYXNzPVwiY2FyZC1maWxlcy1mb2xkZXJzLWxhYmVsXCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgICAgPHNwYW4gI25hbWUgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlRW50ZXIoJGV2ZW50LCB0aXRsZUNvbnRhaW5lciwgbmFtZSlcIiAoa2V5dXApPVwiaGFuZGxlRWRpdCgkZXZlbnQsIG5hbWUpXCJcclxuICAgICAgICAgICAgW2F0dHIuY29udGVudEVkaXRhYmxlXT1cImlzRWRpdGFibGVcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZXMtZm9sZGVyLWV4dHJhIGljb25zcGFuXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPGNtYWNzLWNhcmQtbG9hZGluZyAqbmdJZj1cImxvYWRpbmdcIj48L2NtYWNzLWNhcmQtbG9hZGluZz5cclxuPC9kaXY+XHJcblxyXG5cclxuPHVsIGNsYXNzPVwiYW50LWNhcmQtYWN0aW9uc1wiICpuZ0lmPVwiYWN0aW9ucy5sZW5ndGhcIj5cclxuICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCIgW3N0eWxlLndpZHRoLiVdPVwiMTAwIC8gYWN0aW9ucy5sZW5ndGhcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=