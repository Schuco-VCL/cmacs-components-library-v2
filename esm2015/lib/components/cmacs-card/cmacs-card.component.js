import { __decorate } from "tslib";
import { Component, ContentChild, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { CmacsCardTabComponent } from './cmacs-card-tab.component';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import propagating from 'propagating-hammerjs';
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
function CmacsCardComponent_div_2_div_2_ng_container_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r11.extra);
} }
function CmacsCardComponent_div_2_div_2_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_2_ng_container_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r10.extra);
} }
function CmacsCardComponent_div_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_2_div_2_ng_container_1_div_2_Template, 2, 1, "div", 12);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.extra);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.title);
} }
function CmacsCardComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_div_2_ng_container_1_Template, 5, 2, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.title);
} }
function CmacsCardComponent_div_2_ng_container_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_2_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.tab.template);
} }
function CmacsCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsCardComponent_div_2_div_2_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_div_2_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.tab);
} }
function CmacsCardComponent_div_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template(rf, ctx) { }
function CmacsCardComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 16);
    i0.ɵɵlistener("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.selected = $event; })("ngModelChange", function CmacsCardComponent_div_3_ng_container_2_Template_label_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.checkRadio(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_div_3_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 14);
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
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CmacsCardComponent_div_3_ng_template_1_Template, 0, 0, "ng-template", 14);
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
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "img", 18);
    i0.ɵɵelementStart(4, "div", 19);
    i0.ɵɵelementStart(5, "span", 20);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 21);
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 22);
    i0.ɵɵelement(14, "i", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 22);
    i0.ɵɵelement(16, "i", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 22);
    i0.ɵɵelement(18, "i", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 22);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 22);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 22);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.weather.temp + (ctx_r19.celcius ? "\u00B0C" : "\u00B0F"));
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("alt", ctx_r19.weather.description);
    i0.ɵɵproperty("src", ctx_r19.weather.icon, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 9, ctx_r19.weather.description));
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
function CmacsCardComponent_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r30.todo.UniqueId);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelementStart(1, "span", 40);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-todo-card-overdue", ctx_r31.todo.isOverdue);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r31.todo.date);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r32.todo.project);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 44);
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r39.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "i", 45);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1, a2) { return { id: a0, name: a1, logoUrl: a2 }; };
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_2_div_11_ng_container_1_Template, 1, 1, "ng-container", 43);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_div_11_a_2_Template, 2, 0, "a", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r33.todoUserAssigned)("ngTemplateOutletContext", i0.ɵɵpureFunction3(3, _c0, ctx_r33.todo.userAssignedId, ctx_r33.todo.userAssignedName, ctx_r33.todo.userAssignedLogoUrl));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r33.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("color", ctx_r35.todo.stateColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", "flag");
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "span", 51);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.goToModuleToDo($event, ctx_r41.todo.link); });
    i0.ɵɵelement(2, "i", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.iconsToDoClick($event, "attachments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r37.todo.attachments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.iconsToDoClick($event, "comments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r38.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_2_ng_container_3_Template, 3, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_2_div_4_Template, 3, 3, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 29);
    i0.ɵɵelementStart(6, "div", 30);
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_2_div_9_Template, 3, 1, "div", 32);
    i0.ɵɵelementStart(10, "div", 33);
    i0.ɵɵtemplate(11, CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template, 3, 7, "div", 34);
    i0.ɵɵtemplate(12, CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template, 3, 0, "div", 35);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template, 3, 3, "div", 36);
    i0.ɵɵtemplate(14, CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template, 3, 0, "div", 37);
    i0.ɵɵtemplate(15, CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template, 5, 1, "div", 38);
    i0.ɵɵtemplate(16, CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template, 5, 1, "div", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
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
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r47.cmacsIcon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r47.file.extension);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_ng_template_1_Template, 0, 0, "ng-template", 14);
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
    const ctx_r51 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r51.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r49.extra);
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
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 67);
    i0.ɵɵelementStart(2, "cmacs-video-player", 68);
    i0.ɵɵlistener("playerReady", function CmacsCardComponent_ng_container_5_ng_container_4_Template_cmacs_video_player_playerReady_2_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onPlayerReady($event); });
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
    const ctx_r55 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r55.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r54.extra);
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
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_7_ng_template_1_Template, 0, 0, "ng-template", 14);
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
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 84);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r68); const person_r62 = i0.ɵɵnextContext().$implicit; const ctx_r66 = i0.ɵɵnextContext(4); return ctx_r66.onError(person_r62); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r62 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("alt", person_r62.name);
    i0.ɵɵproperty("src", person_r62.image, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r62 = i0.ɵɵnextContext().$implicit;
    const ctx_r65 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r65.getInitials(person_r62.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template, 1, 2, "img", 83);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_span_2_Template, 2, 1, "span", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const person_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("background-color", !person_r62.image || person_r62.pictureError ? "#512DA8" : "#c7f5ff")("padding", !person_r62.image || person_r62.pictureError ? "4px" : "0px")("display", i_r63 >= 4 && ctx_r60.team.length > 5 ? "none" : "inline-block");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", person_r62.image && !person_r62.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !person_r62.image || person_r62.pictureError);
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r61.team.length - 4, "");
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
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r58.team);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.team.length > 5);
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
function CmacsCardComponent_ng_container_5_ng_container_9_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 105);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_img_3_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return ctx_r75.onError(ctx_r75.project); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r71.getBackgroundImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r71.project.name);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 106);
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r72.defaultImage, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r72.project.name);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 107);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(3); return ctx_r77.onError(ctx_r77.project.teamLead); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("alt", ctx_r73.project.teamLead.name);
    i0.ɵɵproperty("src", ctx_r73.project.teamLead.avatar, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 108);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r74 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r74.getInitials(ctx_r74.project.teamLead.name));
} }
function CmacsCardComponent_ng_container_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 86);
    i0.ɵɵelementStart(2, "div", 87);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_9_img_3_Template, 1, 2, "img", 88);
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_9_img_4_Template, 1, 2, "img", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "cmacs-tag", 90);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 91);
    i0.ɵɵelementStart(8, "span", 92);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 93);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 76);
    i0.ɵɵelement(13, "i", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 93);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 95);
    i0.ɵɵelement(17, "div", 96);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 97);
    i0.ɵɵtemplate(19, CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template, 1, 2, "img", 98);
    i0.ɵɵtemplate(20, CmacsCardComponent_ng_container_5_ng_container_9_span_20_Template, 2, 1, "span", 99);
    i0.ɵɵelementStart(21, "div", 100);
    i0.ɵɵelement(22, "div", 101);
    i0.ɵɵelement(23, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "a", 103);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_9_Template_a_click_24_listener($event) { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(2); return ctx_r79.openMail($event); });
    i0.ɵɵelement(25, "i", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage !== "" && !ctx_r27.project.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r27.project.projectImage === "" || ctx_r27.project.pictureError);
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
    i0.ɵɵproperty("ngIf", !ctx_r27.project.teamLead.pictureError);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r27.project.teamLead.avatar || ctx_r27.project.teamLead.avatar === "" || ctx_r27.project.teamLead.pictureError);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.name), i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", ctx_r27.buildLabel(ctx_r27.project.teamLead.charge), i0.ɵɵsanitizeHtml);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template(rf, ctx) { }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 14);
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
    const ctx_r87 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r87.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r86.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 109);
    i0.ɵɵelementStart(2, "a", 76);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 110, 111);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r89); const _r84 = i0.ɵɵreference(5); const ctx_r88 = i0.ɵɵnextContext(3); return ctx_r88.toggleEdit(_r84); });
    i0.ɵɵelementStart(6, "span", 112, 113);
    i0.ɵɵlistener("keydown.enter", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keydown_enter_6_listener($event) { i0.ɵɵrestoreView(_r89); const _r84 = i0.ɵɵreference(5); const _r85 = i0.ɵɵreference(7); const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.handleEnter($event, _r84, _r85); })("keyup", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keyup_6_listener($event) { i0.ɵɵrestoreView(_r89); const _r85 = i0.ɵɵreference(7); const ctx_r91 = i0.ɵɵnextContext(3); return ctx_r91.handleEdit($event, _r85); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template, 2, 1, "div", 114);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r82 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMap(ctx_r82.folderIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("title", ctx_r82.title);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("contentEditable", ctx_r82.isEditable);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r82.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r82.extra);
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
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 122);
    i0.ɵɵelementStart(1, "a", 123);
    i0.ɵɵelement(2, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r93.newIcon);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 124);
    i0.ɵɵelement(1, "img", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r94 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("src", ctx_r94.template.templateImage, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "cmacs-tag", 128);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r98 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tag_r98);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_cmacs_tag_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-tag", 128);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r97.cmacsTagsOverflow, "");
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_span_1_Template, 3, 1, "span", 126);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_cmacs_tag_2_Template, 2, 1, "cmacs-tag", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r95 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r95.cmacsTagContents);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r95.cmacsTagsOverflow !== 0);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_1_Template, 3, 2, "div", 116);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_2_Template, 2, 1, "div", 117);
    i0.ɵɵelementStart(3, "div", 118);
    i0.ɵɵelementStart(4, "div", 119);
    i0.ɵɵelement(5, "img", 120);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 121);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_8_Template, 3, 2, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r92.template.NewTemplate);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r92.template.NewTemplate);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r92.icon_template, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r92.template.name, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r92.template.NewTemplate && ctx_r92.template.type === "form");
} }
function CmacsCardComponent_ng_container_5_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_Template, 9, 5, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r29.useDefaultContent);
} }
function CmacsCardComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_1_Template, 25, 11, "ng-container", 4);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_2_Template, 17, 13, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_Template, 14, 6, "ng-container", 4);
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_4_Template, 7, 3, "ng-container", 4);
    i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_ng_container_5_Template, 8, 6, "ng-container", 4);
    i0.ɵɵtemplate(6, CmacsCardComponent_ng_container_5_ng_container_6_Template, 7, 1, "ng-container", 4);
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_7_Template, 2, 1, "ng-container", 4);
    i0.ɵɵtemplate(8, CmacsCardComponent_ng_container_5_ng_container_8_Template, 3, 2, "ng-container", 4);
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_9_Template, 26, 13, "ng-container", 4);
    i0.ɵɵtemplate(10, CmacsCardComponent_ng_container_5_ng_container_10_Template, 3, 2, "ng-container", 4);
    i0.ɵɵtemplate(11, CmacsCardComponent_ng_container_5_ng_container_11_Template, 2, 1, "ng-container", 4);
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsType === "template");
} }
function CmacsCardComponent_cmacs_card_loading_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-card-loading");
} }
function CmacsCardComponent_ul_7_li_1_ng_template_2_Template(rf, ctx) { }
function CmacsCardComponent_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtemplate(2, CmacsCardComponent_ul_7_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r100 = ctx.$implicit;
    const ctx_r99 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("width", 100 / ctx_r99.actions.length, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", action_r100);
} }
function CmacsCardComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 129);
    i0.ɵɵtemplate(1, CmacsCardComponent_ul_7_li_1_Template, 3, 3, "li", 130);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r6.actions);
} }
const _c1 = ["*", [["", "cmacs-action-panel", ""]]];
const _c2 = ["*", "[cmacs-action-panel]"];
Hammer = propagating(Hammer);
export class CmacsCardComponent {
    constructor(cdr, renderer, sanitizer, elementRef) {
        this.cdr = cdr;
        this.sanitizer = sanitizer;
        this.folderIcon = '';
        this.newIcon = '';
        this.iconspan_template = '';
        this.icon_template = '';
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
        this.template = [];
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
        this.cmacsTagContents = [];
        this.cmacsTagsOverflow = 0;
        this.iconToDoClick = new EventEmitter();
        this.defaultImage = 'assets/images/Project_images/D_1.svg';
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
        if (this.cmacsType === 'template') {
            if (this.template.tags !== undefined) {
                this.cmacsTagContents = this.template.tags.slice(0, 2);
                if (this.template.tags.length > 0) {
                    this.cmacsTagsOverflow = this.template.tags.length - 2;
                }
            }
            if (this.template.NewTemplate) {
                this.newIcon = 'iconUILarge-New';
            }
            if (this.template.type === 'file') {
                this.iconspan_template = 'iconspan-template-file';
                this.icon_template = 'assets/images/Card_Icons/folder.svg';
            }
            if (this.template.type === 'schedule') {
                this.iconspan_template = 'iconspan-template-schedule';
                this.icon_template = 'assets/images/Card_Icons/schedule.svg';
            }
            if (this.template.type === 'form') {
                this.iconspan_template = 'iconspan-template-form';
                this.icon_template = 'assets/images/Card_Icons/form.svg';
            }
            if (this.template.type === 'qr') {
                this.iconspan_template = 'iconspan-template-qr-code';
                this.icon_template = 'assets/images/Card_Icons/qr.svg';
            }
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
    markForCheck() {
        this.cdr.markForCheck();
    }
    select(event) {
        event.preventDefault();
        if (this.cmacsType !== 'todo') {
            event.stopPropagation();
        }
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
        return this.project.projectImage;
    }
    onError(elem) {
        elem.pictureError = true;
        this.cdr.detectChanges();
    }
    iconsToDoClick(event, icon) {
        event.preventDefault();
        this.iconToDoClick.next({ icon, id: this.todo.UniqueId });
    }
    goToModuleToDo(event, url) {
        event.preventDefault();
        event.stopPropagation();
        this.goToModule.emit(url);
    }
    buildLabel(value) {
        let result = '&nbsp;';
        if (value !== undefined && value !== null && value !== '') {
            if (value.length > 20) {
                result = `${value.slice(0, 20)}...`;
            }
            else if (value.length > 0) {
                result = value;
            }
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
    } }, hostVars: 52, hostBindings: function CmacsCardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("tap", function CmacsCardComponent_tap_HostBindingHandler($event) { return ctx.onClick($event); })("doubletap", function CmacsCardComponent_doubletap_HostBindingHandler($event) { return ctx.onDblClick($event); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-card-loading", ctx.loading)("ant-card-bordered", ctx.bordered)("ant-card-hoverable", ctx.hoverable || ctx.cmacsType === "selection")("ant-card-type-inner", ctx.type === "inner")("ant-card-contain-tabs", !!ctx.tab)("cmacs-card-files-wrapper", ctx.cmacsType === "file")("cmacs-card-measure-wrapper", ctx.cmacsType === "measure")("cmacs-card-measure-wrapper-selected", ctx.cmacsType === "measure" && ctx.selected)("cmacs-selection-card", ctx.cmacsType === "selection")("cmacs-card-selected", ctx.cmacsType === "selection" && ctx.selected)("cmacs-card-disabled", ctx.cmacsType === "selection" && ctx.disabled)("cmacs-action-card", ctx.cmacsType === "action")("cmacs-weather-card", ctx.cmacsType === "weather")("cmacs-big-file-card", ctx.cmacsType === "big-file")("cmacs-big-file-card-selected", ctx.cmacsType === "big-file" && ctx.selected)("cmacs-action-card-disabled", ctx.cmacsType === "action" && ctx.disabled)("cmacs-information-card", ctx.cmacsType === "team")("cmacs-team-card", ctx.cmacsType === "project")("cmacs-video-player-card", ctx.cmacsType === "video")("cmacs-todo-card", ctx.cmacsType === "todo")("cmacs-todo-card-selected", ctx.cmacsType === "todo" && ctx.selected)("cmacs-team-card-selected", ctx.cmacsType === "project" && ctx.selected)("cmacs-card-files-folders-wrapper", ctx.cmacsType === "folder")("file-card-selected", ctx.cmacsType === "folder" && ctx.selected)("cmacs-template-card", ctx.cmacsType === "template" && ctx.template.NewTemplate)("cmacs-template-card-dark", ctx.cmacsType === "template" && !ctx.template.NewTemplate);
    } }, inputs: { bordered: "bordered", opened: "opened", editable: "editable", isRadio: "isRadio", loading: "loading", disabled: "disabled", hoverable: "hoverable", useDefaultContent: "useDefaultContent", sources: "sources", bodyStyle: "bodyStyle", cover: "cover", body: "body", actions: "actions", team: "team", file: "file", project: "project", template: "template", projectDateLabel: "projectDateLabel", todo: "todo", weather: "weather", celcius: "celcius", type: "type", cmacsType: "cmacsType", cmacsIcon: "cmacsIcon", cmacsIconOpenedFolder: "cmacsIconOpenedFolder", cmacsIconClosedFolder: "cmacsIconClosedFolder", title: "title", labelTitle: "labelTitle", extra: "extra", selected: "selected", value: "value", todoUserAssigned: "todoUserAssigned" }, outputs: { playerReady: "playerReady", titleChange: "titleChange", ondlclickCard: "ondlclickCard", open: "open", close: "close", selectedChange: "selectedChange", goToModule: "goToModule", iconToDoClick: "iconToDoClick" }, exportAs: ["cmacsCard"], ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["content", ""], ["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "cmacs-card-title"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], ["cmacs-radio", "", 3, "ngModel", "disabled", "ngModelChange"], [1, "cmacs-weather-card-temp"], [1, "cmacs-weather-card-cloud-img", 3, "src", "alt"], [1, "cmacs-weather-card-description-wrapper"], [1, "cmacs-weather-card-description"], [1, "cmacs-weather-card-temp-min-max"], [1, "cmacs-weather-col-1-3"], [1, "iconUILarge-Rain"], [1, "iconUILarge-Humidity"], [1, "iconUILarge-Wind"], ["nz-row", "", 1, "todo-card-header"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], [1, "todo-card-content"], [1, "cmacs-todo-card-title"], ["placement", "bottom", "cmacs-tooltip", "", 3, "title"], ["class", "cmacs-todo-card-project", 4, "ngIf"], ["nz-row", "", 1, "cmacs-todo-card-action"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-person", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-team", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-priority", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-association", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-attachments", 3, "tap", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", "class", "cmacs-todo-card-comments", 3, "tap", 4, "ngIf"], [1, "cmacs-todo-card-date"], [1, "cmacs-todo-card-project"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-person"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngIf"], [1, "iconCreation-User"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-team"], [1, "iconUILarge-Team"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-priority"], ["nz-icon", "", 3, "nzType"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-association"], [3, "click"], [1, "iconUILarge-Link"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-attachments", 3, "tap"], [1, "iconUILarge-Attached"], ["nz-col", "", "nzSpan", "4", 1, "cmacs-todo-card-comments", 3, "tap"], [1, "iconUILarge-Comments"], [1, "cmacs-card-big-file-meta"], [1, "cmacs-card-big-file-description"], [1, "cmacs-card-big-file-description-left-panel"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-big-file-title", 3, "title"], [1, "cmacs-card-big-file-date"], [1, "cmacs-card-big-file-description-right-panel"], ["class", "cmacs-card-big-file-extra", 4, "ngIf"], [1, "cmacs-card-big-file-icon-wrapper"], [1, "cmacs-card-big-file-extension-wrapper"], [1, "cmacs-card-big-file-extra"], [1, "cmacs-card-video-player-wrapper"], [3, "sources", "playerReady"], [1, "cmacs-card-video-description"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-video-title", 3, "title"], [1, "cmacs-card-files-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-label-recent", 3, "title"], ["class", "cmacs-card-file-extra", 4, "ngIf"], [1, "cmacs-card-file-extra"], [1, "cmacs-card-measure-icon-wrapper"], [1, "iconspan"], [1, "iconUILarge-Ruler"], [1, "cmacs-card-label-measure"], [2, "margin-bottom", "20px", "min-height", "25px", "display", "inline-flex"], ["class", "team-person-card", 3, "backgroundColor", "padding", "display", 4, "ngFor", "ngForOf"], ["class", "plus-team-card", 4, "ngIf"], [1, "team-person-card"], ["width", "30px", "height", "30px", 3, "src", "alt", "error", 4, "ngIf"], ["width", "30px", "height", "30px", 3, "src", "alt", "error"], [1, "plus-team-card"], [1, "projectimagecontainer"], [1, "project-image"], [3, "src", "alt", "error", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [1, "project-status", 3, "cmacsGridType"], [1, "project-dates-wrapper"], [1, "project-dates-title"], [1, "project-dates", "project-dates-date"], [1, "iconArrowLarge-Arrow-Right", "project-dates"], [1, "project-card-progress-bar"], [1, "project-card-progress-bar-inner"], [1, "project-manager-details"], ["class", "manager-avatar", "width", "30px", "height", "30px", 3, "alt", "src", "error", 4, "ngIf"], ["class", "cmacs-proj-avatar-text", 4, "ngIf"], [1, "project-manager-metadata"], [1, "manager-name", 3, "innerHtml"], [1, "manager-charge", 3, "innerHtml"], [1, "iconspan", "project-email-icon", 3, "click"], [1, "iconUILarge-Message"], [3, "src", "alt", "error"], [3, "src", "alt"], ["width", "30px", "height", "30px", 1, "manager-avatar", 3, "alt", "src", "error"], [1, "cmacs-proj-avatar-text"], [1, "card-files-folders-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "card-files-folders-label", 3, "title", "click"], ["titleContainer", ""], [3, "keydown.enter", "keyup"], ["name", ""], ["class", "card-files-folder-extra iconspan", 4, "ngIf"], [1, "card-files-folder-extra", "iconspan"], ["class", "card-new-icon-wrapper", 4, "ngIf"], ["class", "card-image-wrapper", 4, "ngIf"], [1, "template-card-content"], [1, "template-logo"], [3, "src"], [1, "template-card-content-title"], [1, "card-new-icon-wrapper"], [1, "iconspan-new-icon"], [1, "card-image-wrapper"], [1, "image", 3, "src"], [4, "ngFor", "ngForOf"], ["class", "template-tag", 4, "ngIf"], [1, "template-tag"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function CmacsCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CmacsCardComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsCardComponent_div_2_Template, 4, 2, "div", 1);
        i0.ɵɵtemplate(3, CmacsCardComponent_div_3_Template, 3, 2, "div", 2);
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, CmacsCardComponent_ng_container_5_Template, 12, 11, "ng-container", 4);
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
    } }, directives: [i2.NgIf, i2.NgStyle, i3.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i4.CmacsRadioComponent, i5.NgControlStatus, i5.NgModel, i6.NzRowDirective, i6.NzColDirective, i7.CmacsTooltipDirective, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CmacsVideoPlayerComponent, i2.NgForOf, i11.CmacsTagComponent, i12.CmacsCardLoadingComponent], pipes: [i2.TitleCasePipe], styles: [".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:18px;height:40px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-size:12px;font-weight:400;line-height:1.67}.cmacs-weather-card-temp,.cmacs-weather-col-1-3{font-family:Roboto-Regular;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-size:24px;font-weight:500;line-height:2.08}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}.cmacs-card-title{white-space:normal;word-wrap:normal;line-height:24px}.cmacs-card-title span{display:block;width:150px}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px 7px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%;border-radius:8px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled+span,.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:40px;color:#fff;text-align:center;cursor:pointer;margin-right:10px}.cmacs-information-card img{border-radius:40px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:30px;background-color:#dae8ff;color:#2a7cff;text-align:center;cursor:pointer;padding:4px}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a,.project-manager-metadata{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;height:15.45px}.manager-charge,.manager-name{max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;height:17.26px}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:40px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important;border-radius:8px}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;transition:all .3s}.cmacs-big-file-card:before{content:\" \";width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;transition:all .3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;transition:all .3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;transition:all .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;transition:all .3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;transition:all .3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected.cmacs-big-file-card:before,.cmacs-big-file-card-selected .cmacs-card-big-file-meta{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px;margin:7px auto;border:1px solid #dee0e5;border-radius:8px}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-webkit-box-orient:vertical}.cmacs-todo-card-project,.cmacs-todo-card-title{font-size:12px;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;white-space:nowrap}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;float:right;padding:0 5px}.cmacs-todo-card-action{padding:15px 14px 0 15px;font-size:14px;position:absolute;bottom:12px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-template-card,.cmacs-template-card-dark{width:243px;border:1px solid #dee0e5;border-radius:8px}.cmacs-template-card .ant-card-body{padding:0;border-radius:7px;background-color:#f6f7fb}.cmacs-template-card-dark .ant-card-body{padding:0;border-radius:7px;background-color:#0d1e3b}.cmacs-template-card-dark:hover{box-shadow:0 6px 10px 0 rgba(59,63,70,.14901960784313725)}.cmacs-template-card-dark:hover,.cmacs-template-card-dark:hover .template-card-content,.cmacs-template-card-dark:hover .template-logo,.cmacs-template-card:hover,.cmacs-template-card:hover .template-card-content,.cmacs-template-card:hover .template-logo{border-color:#2a7cff}.cmacs-template-card-dark-selected,.cmacs-template-card-selected{border-color:#2a7cff!important;background-color:#f6f7fb}.card-new-icon-wrapper{padding-top:10px}.card-image-wrapper,.card-new-icon-wrapper{margin:20px;width:82%;height:91px;border-radius:8px 8px 0 0;display:inline-block;vertical-align:middle;background-color:#fff;text-align:center}.template-card-content{border-radius:8px;margin:-25px -1px -1px;width:101%;height:100%;display:inline-block;border:1px solid #dee0e5;box-shadow:0 -3px 11px rgba(13,30,59,.11);padding:15px}.template-card-content,.template-logo{vertical-align:middle;background-color:#fff}.template-logo{border-radius:12px;float:right;margin-top:-35px;display:flex;justify-content:center;padding:6px 8px;border:1px solid #dee0e5;-webkit-clip-path:polygon(100% 42%,0 42%,-90% -60%,180% -60%,100% 42%,15% 42%,15% 91%,86% 91%,86% 42%);clip-path:polygon(100% 42%,0 42%,-90% -60%,180% -60%,100% 42%,15% 42%,15% 91%,86% 91%,86% 42%)}.template-card-content-title{margin-bottom:10px;font-size:13px;color:#3b3f46;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.iconspan-new-icon{font-size:50px}.iconspan-template-file{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#cc2229}.iconspan-template-file:hover{color:#fff}.image{width:100%;height:100%;border-radius:7px 7px 0 0}.template-tag{border-radius:10px!important;padding:0 10px!important;color:#656c79}.iconspan-template-schedule{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#00cda1}.iconspan-template-schedule:hover{color:#fff}.iconspan-template-form{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#0d1e3b}.iconspan-template-form:hover{color:#fff}.iconspan-template-qr-code{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#a100cd}.iconspan-template-qr-code:hover{color:#fff}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#512da8}.cmacs-proj-card-div-Logo{background-color:#512da8;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:40px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5;background-color:#f6f7fb}.project-image{background-repeat:no-repeat;background-position:50%;background-size:contain;text-align:center}.project-image,.project-image img{height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #dee0e5}.todo-card-content{min-height:110px}.cardrow{margin-left:-4px;margin-right:-4px}.cardcolumn{padding-left:4px;padding-right:4px}", "cmacs-card {\n        display: block;\n      }\n    "], encapsulation: 2 });
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
                    '[class.file-card-selected]': "cmacsType === 'folder' && selected",
                    '[class.cmacs-template-card]': "cmacsType === 'template' && template.NewTemplate",
                    '[class.cmacs-template-card-dark]': "cmacsType === 'template' && !template.NewTemplate"
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
        }], template: [{
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
            args: ['tap', ['$event']]
        }], onDblClick: [{
            type: HostListener,
            args: ['doubletap', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNBLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUdoQyxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNkN0Msa0JBQXlCOzs7SUFVZiw2QkFBOEM7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsbUNBQVc7OztJQUQzRCwrQkFBMEM7SUFDeEMsdUhBQXdFO0lBQzFFLGlCQUFNOzs7SUFEVyxlQUE2QjtJQUE3QixzREFBNkI7OztJQUhsRCw2QkFBOEM7SUFDNUMsK0JBQThCO0lBQzVCLCtGQUVNO0lBQ04sNEJBQU07SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDMUIsaUJBQU07SUFDUiwwQkFBZTs7O0lBTGtCLGVBQVc7SUFBWCxtQ0FBVztJQUdsQyxlQUFXO0lBQVgsa0NBQVc7OztJQU52Qiw4QkFBK0M7SUFDN0Msa0dBT2U7SUFDakIsaUJBQU07OztJQVJXLGVBQTZCO0lBQTdCLHFEQUE2Qjs7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Q0csS0FBSztrQkFBYixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRSxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFHSSxhQUFhO2tCQUF0QixNQUFNO1lBaUUwQixPQUFPO2tCQUF2QyxZQUFZO21CQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU1RLFVBQVU7a0JBQWhELFlBQVk7bUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENtYWNzQ2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICduZ3gtdmlkZW9ndWxhcic7XHJcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCIuLi9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCBwcm9wYWdhdGluZyBmcm9tICdwcm9wYWdhdGluZy1oYW1tZXJqcyc7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc0NhcmRUeXBlID0gJ2ZpbGUnIHwgJ3NlbGVjdGlvbicgfFxyXG4gICdhY3Rpb24nIHwgJ3RlYW0nIHwgJ3Byb2plY3QnIHwgJ2ZvbGRlcicgfCAnbWVhc3VyZScgfCAnd2VhdGhlcicgfFxyXG4gICdiaWctZmlsZScgfCAnbm9uZScgfCAndmlkZW8nIHwgJ3RvZG8nIHwgJ3RlbXBsYXRlJztcclxuZXhwb3J0IGludGVyZmFjZSBCaWdGaWxlIHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZF9hdD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyIHtcclxuICB0ZW1wPzogbnVtYmVyLFxyXG4gIHRlbXBfbWluPzogbnVtYmVyLFxyXG4gIHRlbXBfbWF4PzogbnVtYmVyLFxyXG4gIGh1bWlkaXR5PzogbnVtYmVyLFxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gIGljb24/OiBzdHJpbmcsXHJcbiAgY2xvdWRzX2FsbD86IG51bWJlcixcclxuICB3aW5kX3NwZWVkPzogbnVtYmVyXHJcbn1cclxuXHJcbkhhbW1lciA9IHByb3BhZ2F0aW5nKEhhbW1lcik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNhcmQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDYXJkJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBjbWFjcy1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1sb2FkaW5nXSc6ICdsb2FkaW5nJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtYm9yZGVyZWRdJzogJ2JvcmRlcmVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtaG92ZXJhYmxlXSc6IFwiaG92ZXJhYmxlIHx8IGNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuYW50LWNhcmQtdHlwZS1pbm5lcl0nOiBgdHlwZSA9PT0gJ2lubmVyJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFic10nOiAnISF0YWInLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLXdyYXBwZXJdJzogXCJjbWFjc1R5cGUgPT09ICdmaWxlJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLW1lYXN1cmUtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ21lYXN1cmUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3Mtc2VsZWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWFjdGlvbi1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy13ZWF0aGVyLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd3ZWF0aGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1iaWctZmlsZS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAnYmlnLWZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZScgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmQtZGlzYWJsZWRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nICYmIGRpc2FibGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWluZm9ybWF0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0ZWFtJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0J1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy12aWRlby1wbGF5ZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3ZpZGVvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJ1wiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10b2RvLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICd0b2RvJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZWFtLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdwcm9qZWN0JyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1jYXJkLWZpbGVzLWZvbGRlcnMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZvbGRlcidcIixcclxuICAgICdbY2xhc3MuZmlsZS1jYXJkLXNlbGVjdGVkXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10ZW1wbGF0ZS1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndGVtcGxhdGUnICYmIHRlbXBsYXRlLk5ld1RlbXBsYXRlXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlbXBsYXRlLWNhcmQtZGFya10nOiBcImNtYWNzVHlwZSA9PT0gJ3RlbXBsYXRlJyAmJiAhdGVtcGxhdGUuTmV3VGVtcGxhdGVcIlxyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtY2FyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZvbGRlckljb24gPSAnJztcclxuICBuZXdJY29uID0gJyc7XHJcbiAgaWNvbnNwYW5fdGVtcGxhdGUgPSAnJztcclxuICBpY29uX3RlbXBsYXRlID0gJyc7XHJcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG9wZW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlZGl0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1JhZGlvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaG92ZXJhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHVzZURlZmF1bHRDb250ZW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc291cmNlczogU291cmNlW107XHJcbiAgQE91dHB1dCgpIHBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8VmdBUEk+ID0gbmV3IEV2ZW50RW1pdHRlcjxWZ0FQST4oKTtcclxuICBASW5wdXQoKSBib2R5U3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgQElucHV0KCkgY292ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIHRlYW06IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIGZpbGU6IEJpZ0ZpbGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHByb2plY3Q6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBhbnkgPSBbXTtcclxuICBASW5wdXQoKSBwcm9qZWN0RGF0ZUxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRvZG86IGFueTtcclxuICBASW5wdXQoKSB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gIEBJbnB1dCgpIGNlbGNpdXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzQ2FyZFR5cGUgPSAnbm9uZSc7XHJcbiAgQElucHV0KCkgY21hY3NJY29uOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjbWFjc0ljb25PcGVuZWRGb2xkZXI6IHN0cmluZyA9ICdpY29uVUlMYXJnZS1Gb2xkZXInO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbkNsb3NlZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGxhYmVsVGl0bGU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgdGl0bGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NDYXJkVGFiQ29tcG9uZW50KSB0YWI6IENtYWNzQ2FyZFRhYkNvbXBvbmVudDtcclxuICBAT3V0cHV0KCkgb25kbGNsaWNrQ2FyZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvcGVuID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWx1ZTogYW55O1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBnb1RvTW9kdWxlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQElucHV0KCkgdG9kb1VzZXJBc3NpZ25lZDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgY21hY3NUYWdDb250ZW50czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gIGNtYWNzVGFnc092ZXJmbG93Om51bWJlciA9IDA7XHJcbiAgQE91dHB1dCgpIGljb25Ub0RvQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBkZWZhdWx0SW1hZ2UgPSAnYXNzZXRzL2ltYWdlcy9Qcm9qZWN0X2ltYWdlcy9EXzEuc3ZnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1haWwoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBsaW5rID0gYG1haWx0bzogJHt0aGlzLnByb2plY3QudGVhbUxlYWQuZW1haWx9YDtcclxuICAgIGxvY2F0aW9uLmhyZWYgPSBsaW5rO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdmb2xkZXInKSB7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gdGhpcy5jbWFjc0ljb25PcGVuZWRGb2xkZXIgOiB0aGlzLmNtYWNzSWNvbkNsb3NlZEZvbGRlcjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ3RlbXBsYXRlJykge1xyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLnRhZ3MhPT11bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmNtYWNzVGFnQ29udGVudHMgPSB0aGlzLnRlbXBsYXRlLnRhZ3Muc2xpY2UoMCwyKTtcclxuICAgICAgICBpZih0aGlzLnRlbXBsYXRlLnRhZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5jbWFjc1RhZ3NPdmVyZmxvdyA9IHRoaXMudGVtcGxhdGUudGFncy5sZW5ndGggLSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgICAgaWYodGhpcy50ZW1wbGF0ZS5OZXdUZW1wbGF0ZSl7XHJcbiAgICAgICAgdGhpcy5uZXdJY29uID0gJ2ljb25VSUxhcmdlLU5ldyc7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgaWYodGhpcy50ZW1wbGF0ZS50eXBlID09PSAnZmlsZScpe1xyXG4gICAgICAgIHRoaXMuaWNvbnNwYW5fdGVtcGxhdGUgPSAnaWNvbnNwYW4tdGVtcGxhdGUtZmlsZSc7XHJcbiAgICAgICAgdGhpcy5pY29uX3RlbXBsYXRlID0gJ2Fzc2V0cy9pbWFnZXMvQ2FyZF9JY29ucy9mb2xkZXIuc3ZnJztcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLnR5cGUgPT09ICdzY2hlZHVsZScpe1xyXG4gICAgICAgIHRoaXMuaWNvbnNwYW5fdGVtcGxhdGUgPSAnaWNvbnNwYW4tdGVtcGxhdGUtc2NoZWR1bGUnO1xyXG4gICAgICAgIHRoaXMuaWNvbl90ZW1wbGF0ZSA9ICdhc3NldHMvaW1hZ2VzL0NhcmRfSWNvbnMvc2NoZWR1bGUuc3ZnJztcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLnR5cGUgPT09ICdmb3JtJyl7XHJcbiAgICAgICAgdGhpcy5pY29uc3Bhbl90ZW1wbGF0ZSA9ICdpY29uc3Bhbi10ZW1wbGF0ZS1mb3JtJztcclxuICAgICAgICB0aGlzLmljb25fdGVtcGxhdGUgPSAnYXNzZXRzL2ltYWdlcy9DYXJkX0ljb25zL2Zvcm0uc3ZnJztcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLnR5cGUgPT09ICdxcicpe1xyXG4gICAgICAgIHRoaXMuaWNvbnNwYW5fdGVtcGxhdGUgPSAnaWNvbnNwYW4tdGVtcGxhdGUtcXItY29kZSc7XHJcbiAgICAgICAgdGhpcy5pY29uX3RlbXBsYXRlID0gJ2Fzc2V0cy9pbWFnZXMvQ2FyZF9JY29ucy9xci5zdmcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9qZWN0RGF0ZUxhYmVsID09PSB1bmRlZmluZWQgfHwgdGhpcy5wcm9qZWN0RGF0ZUxhYmVsID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdERhdGVMYWJlbCA9ICdQcm9qZWN0IERhdGVzJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGxheWVyUmVhZHkoYXBpOiBWZ0FQSSkge1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY2hlY2tSYWRpbygpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3RhcCcsIFsnJGV2ZW50J10pIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMudXNlRGVmYXVsdENvbnRlbnQgfHwgdGhpcy5jbWFjc1R5cGUgPT09ICdiaWctZmlsZScpIHtcclxuICAgICAgdGhpcy5zZWxlY3QoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG91YmxldGFwJywgWyckZXZlbnQnXSkgb25EYmxDbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicgJiYgIXRoaXMudXNlRGVmYXVsdENvbnRlbnQpIHtcclxuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XHJcbiAgICAgIHRoaXMuZm9sZGVySWNvbiA9IHRoaXMub3BlbmVkID8gdGhpcy5jbWFjc0ljb25PcGVuZWRGb2xkZXIgOiB0aGlzLmNtYWNzSWNvbkNsb3NlZEZvbGRlcjtcclxuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAncHJvamVjdCcpIHtcclxuICAgICAgdGhpcy5vbmRsY2xpY2tDYXJkLmVtaXQodGhpcy5wcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhcFRpbWVvdXRIYW5kbGVyID0gbnVsbDtcclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSAhPT0gJ3RvZG8nKSB7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSAgXHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUmFkaW8pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdGVkIDogIXRoaXMuc2VsZWN0ZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlQ29udGFpbmVyLCB0aXRsZVNwYW4pIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLnRleHRPdmVyZmxvdyA9ICdlbGxpcHNpcyc7XHJcbiAgICBjb25zdCB0ZXh0ID0gdGl0bGVTcGFuLmlubmVyVGV4dC5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTtcclxuICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFZGl0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0aXRsZVNwYW4pIHtcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgdGhpcy50aXRsZUNoYW5nZS5lbWl0KHRleHQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcikge1xyXG4gICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5lZGl0YWJsZTtcclxuICAgIGlmICh0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdGlhbHMobmFtZTogYW55KSB7XHJcbiAgICBsZXQgaW5pdGlhbHMgPSBuYW1lLm1hdGNoKC9cXGJcXHcvZykgfHwgW107XHJcbiAgICBpbml0aWFscyA9ICgoaW5pdGlhbHMuc2hpZnQoKSB8fCAnJykgKyAoaW5pdGlhbHMucG9wKCkgfHwgJycpKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QmFja2dyb3VuZEltYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdC5wcm9qZWN0SW1hZ2U7XHJcbiAgfVxyXG5cclxuICBvbkVycm9yKGVsZW0pIHtcclxuICAgIGVsZW0ucGljdHVyZUVycm9yID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGljb25zVG9Eb0NsaWNrKGV2ZW50OiBhbnksIGljb246IHN0cmluZykge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaWNvblRvRG9DbGljay5uZXh0KHsgaWNvbiwgaWQ6IHRoaXMudG9kby5VbmlxdWVJZCB9KTtcclxuICB9XHJcblxyXG4gIGdvVG9Nb2R1bGVUb0RvKGV2ZW50OiBhbnksIHVybDogc3RyaW5nKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5nb1RvTW9kdWxlLmVtaXQodXJsKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkTGFiZWwodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgcmVzdWx0ID0gJyZuYnNwOyc7XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDIwKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYCR7dmFsdWUuc2xpY2UoMCwgMjApfS4uLmA7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICB9ICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1oZWFkXCJcclxuICAqbmdJZj1cIih0aXRsZSB8fCBleHRyYSB8fCB0YWIgKSAmJiAoY21hY3NUeXBlID09PSAnbm9uZScgfHwgY21hY3NUeXBlID09PSAndGVhbScgfHwgY21hY3NUeXBlID09PSAncHJvamVjdCcpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWQtdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtZXh0cmFcIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPnt7IHRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIudGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gc2VsZWN0aW9uIGNhcmQgZm9yIHByb2plY3QgY3JlYXRpb24gLS0+XHJcbjxkaXYgY2xhc3M9XCJhbnQtY2FyZC1jb3ZlclwiICpuZ0lmPVwiY292ZXIgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyB8fCBjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCI+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvdmVyXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiPlxyXG4gICAgPGxhYmVsIGNtYWNzLXJhZGlvIFsobmdNb2RlbCldPVwic2VsZWN0ZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja1JhZGlvKClcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj57e2xhYmVsVGl0bGV9fTwvbGFiZWw+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWJvZHlcIiBbbmdTdHlsZV09XCJib2R5U3R5bGVcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWxvYWRpbmdcIj5cclxuXHJcbiAgICA8IS0tIHdlYXRoZXIgY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICd3ZWF0aGVyJ1wiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC10ZW1wXCI+e3t3ZWF0aGVyLnRlbXAgKyAoKGNlbGNpdXMpID8gJ8KwQycgOiAnwrBGJyl9fTwvc3Bhbj5cclxuICAgICAgPGltZyBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC1jbG91ZC1pbWdcIiBbc3JjXT1cIndlYXRoZXIuaWNvblwiIGFsdD1cInt7d2VhdGhlci5kZXNjcmlwdGlvbn19XCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLWRlc2NyaXB0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY2FyZC1kZXNjcmlwdGlvblwiPnt7d2VhdGhlci5kZXNjcmlwdGlvbiB8IHRpdGxlY2FzZX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLXRlbXAtbWluLW1heFwiPlxyXG4gICAgICAgICAgPHNwYW4+e3t3ZWF0aGVyLnRlbXBfbWluICsgJ8KwIC8gJ319PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e3t3ZWF0aGVyLnRlbXBfbWF4ICsgJ8KwJ319PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1SYWluXCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1IdW1pZGl0eVwiPjwvaT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtV2luZFwiPjwvaT48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci5jbG91ZHNfYWxsICsgJyUnfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci5odW1pZGl0eSArICclJ319PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj57e3dlYXRoZXIud2luZF9zcGVlZCArICcgS20vSCd9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSB0byBkbyBjYXJkIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWNhcmQtaGVhZGVyXCIgbnotcm93PlxyXG4gICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjEyXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG9kby5VbmlxdWVJZFwiID5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLlVuaXF1ZUlkfX08L3NwYW4+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidG9kby5kYXRlXCIgbnotY29sIG56U3Bhbj1cIjEyXCIgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLWRhdGVcIiBbY2xhc3MuY21hY3MtdG9kby1jYXJkLW92ZXJkdWVdPVwidG9kby5pc092ZXJkdWVcIj57e3RvZG8uZGF0ZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPHNwYW4gW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1vdmVyZHVlXT1cInRvZG8uaXNPdmVyZHVlXCIgdGl0bGU9XCJ7e3RvZG8udGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+e3t0b2RvLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInRvZG8ucHJvamVjdFwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXByb2plY3RcIj5cclxuICAgICAgICAgIDxzcGFuPnt7dG9kby5wcm9qZWN0fX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBuei1yb3cgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgICA8IS0tIHVzZXIgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cIiF0b2RvLmlzVGVhbVwiICBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1wZXJzb25cIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdJZl09XCJ0b2RvVXNlckFzc2lnbmVkXCIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0b2RvVXNlckFzc2lnbmVkOyBjb250ZXh0OiB7aWQ6IHRvZG8udXNlckFzc2lnbmVkSWQsIG5hbWU6IHRvZG8udXNlckFzc2lnbmVkTmFtZSwgbG9nb1VybDogdG9kby51c2VyQXNzaWduZWRMb2dvVXJsfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8YSAqbmdJZj1cIiF0b2RvVXNlckFzc2lnbmVkXCI+PGkgY2xhc3M9XCJpY29uQ3JlYXRpb24tVXNlclwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gdGVhbSBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5pc1RlYW1cIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC10ZWFtXCI+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtVGVhbVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gZmxhZyBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5oYXNQcmlvcml0eUZsYWdcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1wcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8YSBbc3R5bGUuY29sb3JdPVwidG9kby5zdGF0ZUNvbG9yXCI+PGkgbnotaWNvbiBbbnpUeXBlXT1cIidmbGFnJ1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gbGluayBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwidG9kby5hc3NvY2lhdGlvblwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLWFzc29jaWF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJnb1RvTW9kdWxlVG9EbygkZXZlbnQsIHRvZG8ubGluaylcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUxpbmtcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGF0dGFjaG1lbnRzIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmF0dGFjaG1lbnRzXCIgKHRhcCk9XCJpY29uc1RvRG9DbGljaygkZXZlbnQsICdhdHRhY2htZW50cycpXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYXR0YWNobWVudHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLmF0dGFjaG1lbnRzfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQXR0YWNoZWRcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIGNvbW1lbnRzIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI0XCIgKm5nSWY9XCJ0b2RvLmNvbW1lbnRzXCIgKHRhcCk9XCJpY29uc1RvRG9DbGljaygkZXZlbnQsICdjb21tZW50cycpXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtY29tbWVudHNcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3t0b2RvLmNvbW1lbnRzfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtQ29tbWVudHNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBmaWxlcyAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtbWV0YVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YT48aSBjbGFzcz1cInt7Y21hY3NJY29ufX1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1leHRlbnNpb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUuZXh0ZW5zaW9ufX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb24tbGVmdC1wYW5lbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtdGl0bGVcIiB0aXRsZT1cInt7ZmlsZS50aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICAgICAgPHNwYW4+e3tmaWxlLnRpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRhdGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3tmaWxlLmNyZWF0ZWRfYXR9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWRlc2NyaXB0aW9uLXJpZ2h0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1leHRyYVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gdmlkZW9zIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3ZpZGVvJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC12aWRlby1wbGF5ZXItd3JhcHBlclwiPlxyXG4gICAgICAgIDxjbWFjcy12aWRlby1wbGF5ZXIgW3NvdXJjZXNdPVwic291cmNlc1wiIChwbGF5ZXJSZWFkeSk9XCJvblBsYXllclJlYWR5KCRldmVudClcIj48L2NtYWNzLXZpZGVvLXBsYXllcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLXZpZGVvLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtdmlkZW8tdGl0bGVcIiB0aXRsZT1cInt7dGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+XHJcbiAgICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBmaWxlcyBjYXJkIGZvciByZWNlbnQgcGFuZWwtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdmaWxlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1maWxlcy1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICA8YT48aSBjbGFzcz1cInt7Y21hY3NJY29ufX1cIj48L2k+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtbGFiZWwtcmVjZW50XCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWZpbGUtZXh0cmFcIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImV4dHJhXCI+e3sgZXh0cmEgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIHJhZGlvIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtbWVhc3VyZS1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1SdWxlclwiPjwvaT48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1sYWJlbC1tZWFzdXJlXCI+XHJcbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnbm9uZScgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJyB8fCBjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICA8IS0tIHRlYW0gY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICd0ZWFtJ1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDIwcHg7IG1pbi1oZWlnaHQ6IDI1cHg7IGRpc3BsYXk6IGlubGluZS1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVhbS1wZXJzb24tY2FyZFwiICpuZ0Zvcj1cImxldCBwZXJzb24gb2YgdGVhbTsgaW5kZXggYXMgaVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiKCFwZXJzb24uaW1hZ2UgfHwgcGVyc29uLnBpY3R1cmVFcnJvcikgPyAnIzUxMkRBOCcgOiAnI2M3ZjVmZidcIlxyXG4gICAgICAgICAgICBbc3R5bGUucGFkZGluZ109XCIoIXBlcnNvbi5pbWFnZSB8fCBwZXJzb24ucGljdHVyZUVycm9yKSA/ICc0cHgnIDogJzBweCdcIlxyXG4gICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCIoaSA+PSA0ICYmIHRlYW0ubGVuZ3RoID4gNSkgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyBcIj5cclxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgKm5nSWY9XCJwZXJzb24uaW1hZ2UgJiYgIXBlcnNvbi5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgIFtzcmNdPVwicGVyc29uLmltYWdlXCIgYWx0PVwie3twZXJzb24ubmFtZX19XCIgKGVycm9yKT1cIm9uRXJyb3IocGVyc29uKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFwZXJzb24uaW1hZ2UgfHwgcGVyc29uLnBpY3R1cmVFcnJvclwiPnt7Z2V0SW5pdGlhbHMocGVyc29uLm5hbWUpfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGx1cy10ZWFtLWNhcmRcIiAqbmdJZj1cInRlYW0ubGVuZ3RoID4gNVwiPit7e3RlYW0ubGVuZ3RoIC0gNH19PC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLWFjdGlvbi1wYW5lbF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBwcm9qZWN0IC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0aW1hZ2Vjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyAqbmdJZj1cInByb2plY3QucHJvamVjdEltYWdlICE9PSAnJyAmJiAhcHJvamVjdC5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICBzcmM9XCJ7e2dldEJhY2tncm91bmRJbWFnZSgpfX1cIiBhbHQ9XCJ7e3Byb2plY3QubmFtZX19XCIgKGVycm9yKT1cIm9uRXJyb3IocHJvamVjdClcIj5cclxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJwcm9qZWN0LnByb2plY3RJbWFnZSA9PT0gJycgfHwgcHJvamVjdC5waWN0dXJlRXJyb3JcIlxyXG4gICAgICAgICAgICAgICBzcmM9XCJ7e2RlZmF1bHRJbWFnZX19XCIgYWx0PVwie3twcm9qZWN0Lm5hbWV9fVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxjbWFjcy10YWcgY2xhc3M9XCJwcm9qZWN0LXN0YXR1c1wiIFtjbWFjc0dyaWRUeXBlXT1cInByb2plY3Quc3RhdHVzVGFnXCI+e3twcm9qZWN0LnN0YXR1c319PC9jbWFjcy10YWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRhdGVzLXdyYXBwZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGF0ZXMtdGl0bGVcIj57e3Byb2plY3REYXRlTGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtZGF0ZXMgcHJvamVjdC1kYXRlcy1kYXRlXCI+e3twcm9qZWN0LnN0YXJ0RGF0ZX19PC9zcGFuPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiaWNvbnNwYW5cIj48aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUFycm93LVJpZ2h0IHByb2plY3QtZGF0ZXNcIj48L2k+PC9hPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1kYXRlcyBwcm9qZWN0LWRhdGVzLWRhdGVcIj57e3Byb2plY3QuZW5kRGF0ZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtY2FyZC1wcm9ncmVzcy1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jYXJkLXByb2dyZXNzLWJhci1pbm5lclwiIFtzdHlsZS53aWR0aF09XCJwcm9qZWN0LmNvbXBsZXRpb25cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LW1hbmFnZXItZGV0YWlsc1wiPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9XCIhcHJvamVjdC50ZWFtTGVhZC5waWN0dXJlRXJyb3JcIiBjbGFzcz1cIm1hbmFnZXItYXZhdGFyXCIgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzBweFwiXHJcbiAgICAgICAgICAgICBhbHQ9XCJ7e3Byb2plY3QudGVhbUxlYWQubmFtZX19XCIgKGVycm9yKT1cIm9uRXJyb3IocHJvamVjdC50ZWFtTGVhZClcIlxyXG4gICAgICAgICAgW3NyY109XCJwcm9qZWN0LnRlYW1MZWFkLmF2YXRhclwiPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXByb2plY3QudGVhbUxlYWQuYXZhdGFyIHx8IHByb2plY3QudGVhbUxlYWQuYXZhdGFyID09PSAnJyB8fCBwcm9qZWN0LnRlYW1MZWFkLnBpY3R1cmVFcnJvclwiXHJcbiAgICAgICAgICBjbGFzcz1cImNtYWNzLXByb2otYXZhdGFyLXRleHRcIj57e2dldEluaXRpYWxzKHByb2plY3QudGVhbUxlYWQubmFtZSl9fTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1tYW5hZ2VyLW1ldGFkYXRhXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuYWdlci1uYW1lXCIgW2lubmVySHRtbF09XCJidWlsZExhYmVsKHByb2plY3QudGVhbUxlYWQubmFtZSlcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1hbmFnZXItY2hhcmdlXCIgW2lubmVySHRtbF09XCJidWlsZExhYmVsKHByb2plY3QudGVhbUxlYWQuY2hhcmdlKVwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGEgKGNsaWNrKT1cIm9wZW5NYWlsKCRldmVudClcIiBjbGFzcz1cImljb25zcGFuIHByb2plY3QtZW1haWwtaWNvblwiPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTWVzc2FnZVwiPjwvaT48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG48IS0tIGZvbGRlcnMgZGVmYXVsdCAgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAnZm9sZGVyJ1wiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZmlsZXMtZm9sZGVycy1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbnNwYW5cIj48aSBbY2xhc3NdPVwiZm9sZGVySWNvblwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAjdGl0bGVDb250YWluZXIgKGNsaWNrKT1cInRvZ2dsZUVkaXQodGl0bGVDb250YWluZXIpXCIgY2xhc3M9XCJjYXJkLWZpbGVzLWZvbGRlcnMtbGFiZWxcIiB0aXRsZT1cInt7dGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+XHJcbiAgICAgICAgICA8c3BhbiAjbmFtZSAoa2V5ZG93bi5lbnRlcik9XCJoYW5kbGVFbnRlcigkZXZlbnQsIHRpdGxlQ29udGFpbmVyLCBuYW1lKVwiIChrZXl1cCk9XCJoYW5kbGVFZGl0KCRldmVudCwgbmFtZSlcIlxyXG4gICAgICAgICAgICBbYXR0ci5jb250ZW50RWRpdGFibGVdPVwiaXNFZGl0YWJsZVwiPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWxlcy1mb2xkZXItZXh0cmEgaWNvbnNwYW5cIiAqbmdJZj1cImV4dHJhXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIHRlbXBsYXRlIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAndGVtcGxhdGUnXCI+ICAgICBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZURlZmF1bHRDb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1uZXctaWNvbi13cmFwcGVyXCIgKm5nSWY9XCJ0ZW1wbGF0ZS5OZXdUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImljb25zcGFuLW5ldy1pY29uXCI+PGkgW2NsYXNzXT1cIm5ld0ljb25cIj48L2k+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZS13cmFwcGVyXCIgKm5nSWY9XCIhdGVtcGxhdGUuTmV3VGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlXCIgIHNyYz1cInt7dGVtcGxhdGUudGVtcGxhdGVJbWFnZX19XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1jYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8IS0tIDxhIFtjbGFzc109XCJpY29uc3Bhbl90ZW1wbGF0ZVwiPjxpIFtjbGFzc109XCJpY29uX3RlbXBsYXRlXCI+PC9pPjwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJ7e2ljb25fdGVtcGxhdGV9fVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWNhcmQtY29udGVudC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIHt7dGVtcGxhdGUubmFtZX19XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiF0ZW1wbGF0ZS5OZXdUZW1wbGF0ZSAmJiB0ZW1wbGF0ZS50eXBlID09PSAnZm9ybSdcIj5cclxuICAgICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdGFnIG9mIGNtYWNzVGFnQ29udGVudHNcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy10YWcgY2xhc3M9XCJ0ZW1wbGF0ZS10YWdcIiA+e3t0YWd9fTwvY21hY3MtdGFnPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Y21hY3MtdGFnICpuZ0lmPVwiY21hY3NUYWdzT3ZlcmZsb3chPT0wXCIgY2xhc3M9XCJ0ZW1wbGF0ZS10YWdcIiA+K3t7Y21hY3NUYWdzT3ZlcmZsb3d9fTwvY21hY3MtdGFnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxjbWFjcy1jYXJkLWxvYWRpbmcgKm5nSWY9XCJsb2FkaW5nXCI+PC9jbWFjcy1jYXJkLWxvYWRpbmc+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjx1bCBjbGFzcz1cImFudC1jYXJkLWFjdGlvbnNcIiAqbmdJZj1cImFjdGlvbnMubGVuZ3RoXCI+XHJcbiAgPGxpICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiIFtzdHlsZS53aWR0aC4lXT1cIjEwMCAvIGFjdGlvbnMubGVuZ3RoXCI+XHJcbiAgICA8c3Bhbj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvblwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9saT5cclxuPC91bD5cclxuIl19