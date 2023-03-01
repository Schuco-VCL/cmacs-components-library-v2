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
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "span", 39);
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
    i0.ɵɵelementStart(0, "div", 40);
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
    i0.ɵɵelementContainer(0, 43);
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r39.todoUserAssigned);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a");
    i0.ɵɵelement(1, "i", 44);
    i0.ɵɵelementEnd();
} }
const _c0 = function (a0, a1, a2) { return { id: a0, name: a1, logoUrl: a2 }; };
function CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_2_div_11_ng_container_1_Template, 1, 1, "ng-container", 42);
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
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelementStart(1, "a");
    i0.ɵɵelement(2, "i", 48);
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
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵelementStart(1, "span", 50);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.goToModuleToDo($event, ctx_r41.todo.link); });
    i0.ɵɵelement(2, "i", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(3); return ctx_r43.iconsToDoClick($event, "attachments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r37.todo.attachments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54);
    i0.ɵɵlistener("tap", function CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template_div_tap_0_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(3); return ctx_r45.iconsToDoClick($event, "comments"); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a");
    i0.ɵɵelement(4, "i", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r38.todo.comments);
} }
function CmacsCardComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementStart(2, "div", 26);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_2_ng_container_3_Template, 3, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_2_div_4_Template, 3, 3, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 28);
    i0.ɵɵelementStart(6, "div", 29);
    i0.ɵɵelementStart(7, "span", 30);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_2_div_9_Template, 3, 1, "div", 31);
    i0.ɵɵelementStart(10, "div", 32);
    i0.ɵɵtemplate(11, CmacsCardComponent_ng_container_5_ng_container_2_div_11_Template, 3, 7, "div", 33);
    i0.ɵɵtemplate(12, CmacsCardComponent_ng_container_5_ng_container_2_div_12_Template, 3, 0, "div", 34);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_2_div_13_Template, 3, 3, "div", 35);
    i0.ɵɵtemplate(14, CmacsCardComponent_ng_container_5_ng_container_2_div_14_Template, 3, 0, "div", 36);
    i0.ɵɵtemplate(15, CmacsCardComponent_ng_container_5_ng_container_2_div_15_Template, 5, 1, "div", 37);
    i0.ɵɵtemplate(16, CmacsCardComponent_ng_container_5_ng_container_2_div_16_Template, 5, 1, "div", 38);
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
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 64);
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
    const ctx_r51 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r51.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_3_div_13_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r49.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 56);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_2_Template, 7, 4, "ng-container", 4);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 57);
    i0.ɵɵelementStart(5, "div", 58);
    i0.ɵɵelementStart(6, "div", 59);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 60);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 61);
    i0.ɵɵtemplate(13, CmacsCardComponent_ng_container_5_ng_container_3_div_13_Template, 2, 1, "div", 62);
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
    i0.ɵɵelementStart(1, "div", 66);
    i0.ɵɵelementStart(2, "cmacs-video-player", 67);
    i0.ɵɵlistener("playerReady", function CmacsCardComponent_ng_container_5_ng_container_4_Template_cmacs_video_player_playerReady_2_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onPlayerReady($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 68);
    i0.ɵɵelementStart(4, "div", 69);
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
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_5_div_7_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r54.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 70);
    i0.ɵɵelementStart(2, "a");
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 71);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CmacsCardComponent_ng_container_5_ng_container_5_div_7_Template, 2, 1, "div", 72);
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
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵelementStart(2, "a", 75);
    i0.ɵɵelement(3, "i", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 77);
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
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 83);
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
    i0.ɵɵelementStart(0, "div", 81);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_img_1_Template, 1, 2, "img", 82);
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
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r61.team.length - 4, "");
} }
function CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 78);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_2_Template, 3, 8, "div", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_8_ng_container_2_div_3_Template, 2, 1, "div", 80);
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
    i0.ɵɵelementStart(0, "img", 104);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_img_3_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return ctx_r75.onError(ctx_r75.project); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r71.getBackgroundImage(), i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r71.project.name);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 105);
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("src", ctx_r72.defaultImage, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r72.project.name);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 106);
    i0.ɵɵlistener("error", function CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template_img_error_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r77 = i0.ɵɵnextContext(3); return ctx_r77.onError(ctx_r77.project.teamLead); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("alt", ctx_r73.project.teamLead.name);
    i0.ɵɵproperty("src", ctx_r73.project.teamLead.avatar, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_9_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 107);
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
    i0.ɵɵelementStart(1, "div", 85);
    i0.ɵɵelementStart(2, "div", 86);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_9_img_3_Template, 1, 2, "img", 87);
    i0.ɵɵtemplate(4, CmacsCardComponent_ng_container_5_ng_container_9_img_4_Template, 1, 2, "img", 88);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "cmacs-tag", 89);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 90);
    i0.ɵɵelementStart(8, "span", 91);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 92);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "a", 75);
    i0.ɵɵelement(13, "i", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 92);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 94);
    i0.ɵɵelement(17, "div", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 96);
    i0.ɵɵtemplate(19, CmacsCardComponent_ng_container_5_ng_container_9_img_19_Template, 1, 2, "img", 97);
    i0.ɵɵtemplate(20, CmacsCardComponent_ng_container_5_ng_container_9_span_20_Template, 2, 1, "span", 98);
    i0.ɵɵelementStart(21, "div", 99);
    i0.ɵɵelement(22, "div", 100);
    i0.ɵɵelement(23, "div", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "a", 102);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_9_Template_a_click_24_listener($event) { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(2); return ctx_r79.openMail($event); });
    i0.ɵɵelement(25, "i", 103);
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
    const ctx_r87 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r87.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 114);
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r86 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r86.extra);
} }
function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 108);
    i0.ɵɵelementStart(2, "a", 75);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 109, 110);
    i0.ɵɵlistener("click", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r89); const _r84 = i0.ɵɵreference(5); const ctx_r88 = i0.ɵɵnextContext(3); return ctx_r88.toggleEdit(_r84); });
    i0.ɵɵelementStart(6, "span", 111, 112);
    i0.ɵɵlistener("keydown.enter", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keydown_enter_6_listener($event) { i0.ɵɵrestoreView(_r89); const _r84 = i0.ɵɵreference(5); const _r85 = i0.ɵɵreference(7); const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.handleEnter($event, _r84, _r85); })("keyup", function CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_Template_span_keyup_6_listener($event) { i0.ɵɵrestoreView(_r89); const _r85 = i0.ɵɵreference(7); const ctx_r91 = i0.ɵɵnextContext(3); return ctx_r91.handleEdit($event, _r85); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_10_ng_container_2_div_9_Template, 2, 1, "div", 113);
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
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 122);
    i0.ɵɵelement(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(ctx_r93.newIcon);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 123);
} if (rf & 2) {
    const ctx_r94 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("src", ctx_r94.template.templateImage, i0.ɵɵsanitizeUrl);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "cmacs-tag", 126);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tag_r98 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tag_r98);
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_cmacs_tag_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-tag", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("+", ctx_r97.cmacsTagsOverflow, "");
} }
function CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_span_1_Template, 3, 1, "span", 124);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_cmacs_tag_2_Template, 2, 1, "cmacs-tag", 125);
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
    i0.ɵɵelementStart(1, "div", 115);
    i0.ɵɵtemplate(2, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_a_2_Template, 2, 2, "a", 116);
    i0.ɵɵtemplate(3, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_img_3_Template, 1, 1, "img", 117);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 118);
    i0.ɵɵelementStart(5, "div", 119);
    i0.ɵɵelement(6, "img", 120);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 121);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_div_9_Template, 3, 2, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
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
    i0.ɵɵtemplate(1, CmacsCardComponent_ng_container_5_ng_container_11_ng_container_1_Template, 10, 5, "ng-container", 4);
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
    i0.ɵɵtemplate(2, CmacsCardComponent_ul_7_li_1_ng_template_2_Template, 0, 0, "ng-template", 13);
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
    i0.ɵɵelementStart(0, "ul", 127);
    i0.ɵɵtemplate(1, CmacsCardComponent_ul_7_li_1_Template, 3, 3, "li", 128);
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
    } }, inputs: { bordered: "bordered", opened: "opened", editable: "editable", isRadio: "isRadio", loading: "loading", disabled: "disabled", hoverable: "hoverable", useDefaultContent: "useDefaultContent", sources: "sources", bodyStyle: "bodyStyle", cover: "cover", body: "body", actions: "actions", team: "team", file: "file", project: "project", template: "template", projectDateLabel: "projectDateLabel", todo: "todo", weather: "weather", celcius: "celcius", type: "type", cmacsType: "cmacsType", cmacsIcon: "cmacsIcon", cmacsIconOpenedFolder: "cmacsIconOpenedFolder", cmacsIconClosedFolder: "cmacsIconClosedFolder", title: "title", labelTitle: "labelTitle", extra: "extra", selected: "selected", value: "value", todoUserAssigned: "todoUserAssigned" }, outputs: { playerReady: "playerReady", titleChange: "titleChange", ondlclickCard: "ondlclickCard", open: "open", close: "close", selectedChange: "selectedChange", goToModule: "goToModule", iconToDoClick: "iconToDoClick" }, exportAs: ["cmacsCard"], ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["content", ""], ["class", "ant-card-head", 4, "ngIf"], ["class", "ant-card-cover", 4, "ngIf"], [1, "ant-card-body", 3, "ngStyle"], [4, "ngIf"], ["class", "ant-card-actions", 4, "ngIf"], [1, "ant-card-head"], [1, "ant-card-head-wrapper"], ["class", "ant-card-head-title", 4, "ngIf"], ["class", "ant-card-extra", 4, "ngIf"], [1, "ant-card-head-title"], [4, "nzStringTemplateOutlet"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [1, "ant-card-cover"], ["cmacs-radio", "", 3, "ngModel", "disabled", "ngModelChange"], [1, "cmacs-weather-card-temp"], [1, "cmacs-weather-card-cloud-img", 3, "src", "alt"], [1, "cmacs-weather-card-description-wrapper"], [1, "cmacs-weather-card-description"], [1, "cmacs-weather-card-temp-min-max"], [1, "cmacs-weather-col-1-3"], [1, "iconUILarge-Rain"], [1, "iconUILarge-Humidity"], [1, "iconUILarge-Wind"], ["nz-row", "", 1, "todo-card-header"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], [1, "todo-card-content"], [1, "cmacs-todo-card-title"], ["placement", "bottom", "cmacs-tooltip", "", 3, "title"], ["class", "cmacs-todo-card-project", 4, "ngIf"], ["nz-row", "", 1, "cmacs-todo-card-action"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-person", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-team", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-priority", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-association", 4, "ngIf"], ["nz-col", "", "nzSpan", "5", "class", "cmacs-todo-card-attachments", 3, "tap", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", "class", "cmacs-todo-card-comments", 3, "tap", 4, "ngIf"], [1, "cmacs-todo-card-date"], [1, "cmacs-todo-card-project"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-person"], [3, "ngIf", 4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngIf"], [1, "iconCreation-User"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-team"], [1, "iconUILarge-Team"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-priority"], ["nz-icon", "", 3, "nzType"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-association"], [3, "click"], [1, "iconUILarge-Link"], ["nz-col", "", "nzSpan", "5", 1, "cmacs-todo-card-attachments", 3, "tap"], [1, "iconUILarge-Attached"], ["nz-col", "", "nzSpan", "4", 1, "cmacs-todo-card-comments", 3, "tap"], [1, "iconUILarge-Comments"], [1, "cmacs-card-big-file-meta"], [1, "cmacs-card-big-file-description"], [1, "cmacs-card-big-file-description-left-panel"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-big-file-title", 3, "title"], [1, "cmacs-card-big-file-date"], [1, "cmacs-card-big-file-description-right-panel"], ["class", "cmacs-card-big-file-extra", 4, "ngIf"], [1, "cmacs-card-big-file-icon-wrapper"], [1, "cmacs-card-big-file-extension-wrapper"], [1, "cmacs-card-big-file-extra"], [1, "cmacs-card-video-player-wrapper"], [3, "sources", "playerReady"], [1, "cmacs-card-video-description"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-video-title", 3, "title"], [1, "cmacs-card-files-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "cmacs-card-label-recent", 3, "title"], ["class", "cmacs-card-file-extra", 4, "ngIf"], [1, "cmacs-card-file-extra"], [1, "cmacs-card-measure-icon-wrapper"], [1, "iconspan"], [1, "iconUILarge-Ruler"], [1, "cmacs-card-label-measure"], [2, "margin-bottom", "20px", "min-height", "25px", "display", "inline-flex"], ["class", "team-person-card", 3, "backgroundColor", "padding", "display", 4, "ngFor", "ngForOf"], ["class", "plus-team-card", 4, "ngIf"], [1, "team-person-card"], ["width", "30px", "height", "30px", 3, "src", "alt", "error", 4, "ngIf"], ["width", "30px", "height", "30px", 3, "src", "alt", "error"], [1, "plus-team-card"], [1, "projectimagecontainer"], [1, "project-image"], [3, "src", "alt", "error", 4, "ngIf"], [3, "src", "alt", 4, "ngIf"], [1, "project-status", 3, "cmacsGridType"], [1, "project-dates-wrapper"], [1, "project-dates-title"], [1, "project-dates", "project-dates-date"], [1, "iconArrowLarge-Arrow-Right", "project-dates"], [1, "project-card-progress-bar"], [1, "project-card-progress-bar-inner"], [1, "project-manager-details"], ["class", "manager-avatar", "width", "30px", "height", "30px", 3, "alt", "src", "error", 4, "ngIf"], ["class", "cmacs-proj-avatar-text", 4, "ngIf"], [1, "project-manager-metadata"], [1, "manager-name", 3, "innerHtml"], [1, "manager-charge", 3, "innerHtml"], [1, "iconspan", "project-email-icon", 3, "click"], [1, "iconUILarge-Message"], [3, "src", "alt", "error"], [3, "src", "alt"], ["width", "30px", "height", "30px", 1, "manager-avatar", 3, "alt", "src", "error"], [1, "cmacs-proj-avatar-text"], [1, "card-files-folders-icon-wrapper"], ["placement", "bottom", "cmacs-tooltip", "", 1, "card-files-folders-label", 3, "title", "click"], ["titleContainer", ""], [3, "keydown.enter", "keyup"], ["name", ""], ["class", "card-files-folder-extra iconspan", 4, "ngIf"], [1, "card-files-folder-extra", "iconspan"], [1, "card-new-icon-wrapper"], ["class", "iconspan-new-icon", 4, "ngIf"], ["class", "image", 3, "src", 4, "ngIf"], [1, "template-card-content"], [1, "template-logo"], [1, "img-template", 3, "src"], [1, "template-card-content-title"], [1, "iconspan-new-icon"], [1, "image", 3, "src"], [4, "ngFor", "ngForOf"], ["class", "template-tag", 4, "ngIf"], [1, "template-tag"], [1, "ant-card-actions"], [3, "width", 4, "ngFor", "ngForOf"]], template: function CmacsCardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CmacsCardComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsCardComponent_div_2_Template, 5, 3, "div", 1);
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
    } }, directives: [i2.NgIf, i2.NgStyle, i3.NzStringTemplateOutletDirective, i2.NgTemplateOutlet, i4.CmacsRadioComponent, i5.NgControlStatus, i5.NgModel, i6.NzRowDirective, i6.NzColDirective, i7.CmacsTooltipDirective, i8.ɵNzTransitionPatchDirective, i9.NzIconDirective, i10.CmacsVideoPlayerComponent, i2.NgForOf, i11.CmacsTagComponent, i12.CmacsCardLoadingComponent], pipes: [i2.TitleCasePipe], styles: [".cmacs-weather-card{width:318px;height:218px;border-radius:10px;background-color:#fff;border-color:transparent;box-shadow:0 2px 4px rgba(0,0,0,.1)}.cmacs-weather-card .ant-card-body{padding-top:35px}.cmacs-weather-card-cloud-img{width:75px;height:auto;float:right}.cmacs-weather-card-temp-min-max{font-family:Roboto-Regular;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#97a0ae;margin-left:10px}.cmacs-weather-card-description-wrapper{margin-top:14px;margin-bottom:18px;height:40px}.cmacs-weather-card-description{font-family:Roboto-Regular;font-size:14px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.43;letter-spacing:normal;color:#656c79}.cmacs-weather-col-1-3 i{font-size:22px}.cmacs-weather-col-1-3{width:33.3333%;display:inline-block;text-align:center;font-size:12px;font-weight:400;line-height:1.67}.cmacs-weather-card-temp,.cmacs-weather-col-1-3{font-family:Roboto-Regular;font-stretch:normal;font-style:normal;letter-spacing:normal;color:#3b3f46}.cmacs-weather-card-temp{font-size:24px;font-weight:500;line-height:2.08}.ant-card,.ant-card-head{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-card-extra,.ant-card-head-title{padding:0;font-size:12px;font-weight:500;font-family:Roboto-Medium}.ant-card-head{min-height:40px;padding:12px}.ant-card-grid{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;cursor:pointer}.card-list-row .ant-card-grid>*{display:block}.card-list-row .ant-card-grid>*,.cmacs-card-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-shared-I .cmacs-card-title{width:100%}.cmacs-card-left-panel label.cmacs-checkbox-card{float:left}.cmacs-card-shared-II .cmacs-card-title{width:calc(100% - 40px);left:80px}.cmacs-card-person-info-II{display:flex}.cmacs-card-shared-III .cmacs-card-title{width:calc(100% - 60px)}.cmacs-card-files-wrapper{width:223px;height:36px;border:none}.cmacs-card-measure-wrapper{height:36px;border:1px solid #dee0e5}.cmacs-card-label-measure{padding:6px 20px;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;vertical-align:middle;width:calc(100% - 35px)}.cmacs-card-measure-wrapper-selected,.cmacs-card-measure-wrapper:hover{border-color:#2a7cff;cursor:pointer;box-shadow:0 6px 10px 0 rgba(0,0,0,.15)}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper{border-right-color:#2a7cff}.cmacs-card-measure-wrapper-selected .cmacs-card-measure-icon-wrapper i,.cmacs-card-measure-wrapper:hover .cmacs-card-measure-icon-wrapper i{color:#2a7cff}.cmacs-card-files-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.cmacs-card-files-wrapper .ant-card-body,.cmacs-card-measure-wrapper .ant-card-body{padding:0;width:100%}.cmacs-card-files-wrapper div,.cmacs-card-measure-wrapper div{display:inline-block}.cmacs-card-files-icon-wrapper{width:36px;height:36px;border-radius:3px;box-shadow:0 6px 10px 0 rgba(0,0,0,.15);background-color:#fff;margin-right:16px;text-align:center;position:relative;top:-8px}.cmacs-card-measure-icon-wrapper{background-color:#fff;text-align:center;padding:7px 7px 6px;border-right:1px solid #dee0e5}.cmacs-card-measure-icon-wrapper i{color:#dee0e5}.cmacs-card-files-icon-wrapper i{color:#fb3147!important;font-size:18px;top:23%;position:relative}.cmacs-card-file-extra{font-size:22px;float:right;margin-top:2px;margin-right:5px}.cmacs-card-file-extra i{color:#bec4cd!important}.cmacs-card-label-recent{padding:10px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:calc(100% - 96px);vertical-align:middle}.cmacs-selection-card{height:100%;border-radius:8px}.cmacs-selection-card .ant-card-cover{padding:15px}.cmacs-selection-card .ant-card-body{padding:10px 10px 30px;text-align:center;font-size:12px}.cmacs-selection-card .ant-card-meta-description{color:#656c79}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled){border:1px solid #bec4cd;box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-selection-card.ant-card-hoverable:hover:not(.cmacs-card-disabled) .ant-radio-inner{border-color:#bec4cd}.cmacs-card-selected,.cmacs-card-selected:hover,.cmacs-card-selected:hover .ant-radio-inner{border-color:#2a7cff!important}.ant-radio-disabled+span,.ant-radio-disabled .ant-radio-inner,.ant-radio-disabled .ant-radio-input,.ant-radio.ant-radio-disabled,input[type=radio][disabled]{cursor:default}.cmacs-card-disabled:hover .ant-radio-inner{border-color:#dee0e5!important;cursor:default;background-color:#f3f3f4}.cmacs-card-selected .ant-card-meta-description{color:#2a7cff!important}.cmacs-card-disabled,.cmacs-card-disabled:hover{border-color:#dee0e5;cursor:default;box-shadow:none}.cmacs-card-disabled .ant-card-meta-description{color:#97a0ae!important}.cmacs-action-card{border:none;margin-left:auto;margin-right:auto;min-width:131px}.cmacs-action-card:hover{cursor:pointer}.cmacs-action-card-disabled:hover{cursor:default}.cmacs-action-card:hover .ant-card-meta-title{color:#2164c9}.cmacs-action-card .ant-card-meta-description{text-align:center;color:#acb3bf}.cmacs-action-card .ant-card-body{padding:13px}.cmacs-action-card .ant-card-meta-title{color:#2a7cff;white-space:normal;text-align:center;font-size:12px;padding-top:18px}.cmacs-action-card-disabled .ant-card-meta-title,.cmacs-action-card-disabled:hover .ant-card-meta-title{color:#97a0ae}.cmacs-information-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-information-card .ant-card-head{min-height:30px}.cmacs-information-card .cmacs-btn-action{border-color:#dee0e5}.cmacs-information-card:hover .cmacs-btn-action,.cmacs-information-card:hover .cmacs-btn-action span i{color:#2a7cff!important}.cmacs-information-card .ant-card-body{padding:20px 10px}.cmacs-information-card .team-person-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:40px;color:#fff;text-align:center;cursor:pointer;margin-right:10px}.cmacs-information-card img{border-radius:40px}.cmacs-information-card .team-person-card:last-child{margin-right:0}.cmacs-information-card .plus-team-card{line-height:22px;font-size:12px;width:30px;height:30px;display:inline-block;border-radius:30px;background-color:#dae8ff;color:#2a7cff;text-align:center;cursor:pointer;padding:4px}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:text-top}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.cmacs-team-card.ant-card-bordered{border-color:#dee0e5;border-radius:8px}.cmacs-team-card.ant-card-bordered:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-team-card-selected.ant-card-bordered{border-color:#2a7cff}.cmacs-team-card .ant-card-head{min-height:30px}.cmacs-team-card .ant-card-body{padding:0}.project-card-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.project-card-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;width:83%;margin:0 auto}.project-dates{display:inline-block}.project-status{position:relative;top:-36px;left:18px}.project-dates-wrapper{padding:0 20px;margin-top:-10px;margin-bottom:10px}.project-dates-title{color:#97a0ae;display:block;margin-bottom:5px}.project-dates-date{color:#656c79}.project-dates-wrapper a,.project-manager-metadata{margin-left:10px;margin-right:10px}.project-manager-metadata{display:inline-block}.manager-name{font-family:Roboto-Medium;font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#97a0ae;height:15.45px}.manager-charge,.manager-name{max-width:111px;width:111px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;position:relative}.manager-charge{color:#acb3bf;height:17.26px}.project-manager-details{margin:20px}.manager-avatar{display:inline-block;border-radius:40px;font-size:12px;color:#fff;text-align:center;line-height:1.33;float:left}.project-manager-details i{color:#656c79}.project-email-icon{float:right}.cmacs-card-files-folders-wrapper{height:48px;background-color:#fff;border:1px solid #dee0e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer!important;border-radius:8px}.card-files-uploading-wrapper{width:170px;height:48px;background-color:#f3f3f4;border:1px solid #dee0e5}.cmacs-card-files-folders-wrapper:hover{background-color:#f6f7fb;cursor:pointer}.file-card-selected,.file-card-selected:hover{background-color:#f2f7ff;border-color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folders-label{color:#2a7cff}.cmacs-card-files-folders-wrapper:hover .card-files-folder-extra a{opacity:1}.card-files-folder-extra{display:inline-block;font-size:20px}.card-files-folder-extra a{opacity:0}.card-files-folders-label{width:calc(100% - 50px);display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;vertical-align:middle}.card-files-uploading-wrapper .ant-card-body,.cmacs-card-files-folders-wrapper .ant-card-body{padding:14px 10px}.card-files-folders-icon-wrapper{margin-right:10px;display:inline-block;vertical-align:middle}.card-files-uploading-wrapper i,.cmacs-card-files-folders-wrapper i{color:#656c79!important}.card-files-progress-bar-inner{height:5px;background-color:#2a7cff;border-radius:5px}.card-files-progress-bar{height:5px;background-color:#dee0e5;border-radius:5px;margin-top:7px}.cmacs-big-file-card{width:243px;border:none;overflow:hidden}.cmacs-big-file-card .ant-card-body{padding:0}.cmacs-card-big-file-meta{border:1px solid #dee0e5;transition:all .3s}.cmacs-big-file-card:before{content:\" \";width:40px;height:21px;background-color:#fff;position:absolute;left:calc(100% - 26px);transform:rotate(45deg);top:-4px;border-bottom:1px solid #dee0e5;transition:all .3s}.cmacs-card-big-file-icon-wrapper{font-size:22px;margin:0 auto;width:22px;padding-top:60px;padding-bottom:40px}.cmacs-card-big-file-extension-wrapper{text-align:right;padding:0 10px 10px 0;color:#acb3bf}.cmacs-card-big-file-description{height:61px;margin-top:10px;transition:all .3s}.cmacs-card-big-file-title{padding:10px 10px 5px;font-size:12px;color:#3b3f46;font-weight:500;transition:all .3s;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-big-file-date{padding:0 10px 10px;font-size:12px;color:#acb3bf;font-weight:500}.cmacs-card-big-file-extra{font-size:21px;padding-top:3px;transition:all .3s}.cmacs-card-big-file-extra a{color:#656c79;opacity:0;transition:all .3s}.cmacs-card-big-file-description-left-panel{width:90%;float:left}.cmacs-card-big-file-description-right-panel{width:10%;float:right}.cmacs-big-file-card:hover{cursor:pointer}.cmacs-big-file-card:hover .cmacs-card-big-file-description{background-color:#f6f7fb}.cmacs-big-file-card:hover .cmacs-card-big-file-title{color:#2a7cff}.cmacs-big-file-card:hover .cmacs-card-big-file-extra a{opacity:1}.cmacs-big-file-card-selected .cmacs-card-big-file-description,.cmacs-big-file-card-selected:hover .cmacs-card-big-file-description{background-color:#f2f7ff}.cmacs-big-file-card-selected.cmacs-big-file-card:before,.cmacs-big-file-card-selected .cmacs-card-big-file-meta{border-color:#2a7cff}.cmacs-card-video-description{color:#3b3f46;font-weight:600;font-size:12px;margin-top:17px}.cmacs-card-video-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-card-video-player-wrapper{width:337px;height:226px;border:1px solid #dee0e5}.cmacs-video-player-card{border:none;width:337px}.cmacs-video-player-card .ant-card-body{padding:0}.cmacs-todo-card-upper-line{width:95%;margin:5px;height:2px;border-radius:100px}.cmacs-todo-card{width:243px;margin:7px auto;border:1px solid #dee0e5;border-radius:8px}.cmacs-todo-card.ant-card-hoverable:hover{box-shadow:0 6px 10px rgba(59,63,70,.15)}.cmacs-todo-card .ant-card-body{padding:0}.cmacs-todo-card-title{color:#3b3f46;margin:15px 14px 0;white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-webkit-box-orient:vertical}.cmacs-todo-card-project,.cmacs-todo-card-title{font-size:12px;overflow:hidden;text-overflow:ellipsis}.cmacs-todo-card-project{color:#97a0ae;margin:10px 14px 0;white-space:nowrap}.cmacs-todo-card-date{color:#656c79;background-color:#f6f7fb;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;float:right;padding:0 5px}.cmacs-todo-card-action{padding:15px 14px 0 15px;font-size:14px;position:absolute;bottom:12px;width:100%}.cmacs-todo-card-attachments,.cmacs-todo-card-comments,.cmacs-todo-card-person,.cmacs-todo-card-team{float:left}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span{margin-right:3px;color:#2a7cff;font-size:12px}.cmacs-todo-card-priority{float:left}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a,.cmacs-todo-card-person a,.cmacs-todo-card-team a{color:#656c79}.cmacs-todo-card-project-img{width:241px;height:100px;overflow:hidden}.cmacs-todo-card-project-img img{width:241px}.cmacs-todo-card-selected{border-color:#2a7cff!important}.cmacs-template-card{width:243px;border:1px solid #dee0e5;border-radius:8px}.cmacs-template-card .ant-card-body{padding:0;border-radius:8px;background-color:#f6f7fb}.cmacs-template-card-selected{border-color:#2a7cff!important;background-color:#f6f7fb}.cmacs-template-card-dark{width:243px;border:1px solid #dee0e5;border-radius:8px}.cmacs-template-card-dark .ant-card-body{padding:0;border-radius:7px;background-color:#0d1e3b}.cmacs-template-card-dark:hover{box-shadow:0 6px 10px 0 rgba(59,63,70,.14901960784313725)}.cmacs-template-card-dark:hover,.cmacs-template-card-dark:hover .template-card-content,.cmacs-template-card-dark:hover .template-logo{border-color:#2a7cff}.cmacs-template-card-dark-selected{border-color:#2a7cff!important;background-color:#f6f7fb}.card-new-icon-wrapper{margin:20px;width:82%;height:91px;border-radius:8px 8px 0 0;display:inline-block;vertical-align:middle;background-color:#0d1e3b;text-align:center}.img-template{margin-top:6px}.template-card-content{border-radius:8px;margin:-25px -1px -1px;width:101%;height:100%;display:inline-block;border-color:#dee0e5;box-shadow:0 -3px 11px rgba(13,30,59,.11);padding:15px}.template-card-content,.template-logo{vertical-align:middle;background-color:#fff}.template-logo{border-radius:12px;float:right;margin-top:-35px;display:flex;justify-content:center;padding:6px 10px;border:1px solid #dee0e5;-webkit-clip-path:polygon(100% 42%,0 42%,-90% -60%,180% -60%,100% 42%,15% 42%,15% 91%,86% 91%,86% 42%);clip-path:polygon(100% 42%,0 42%,-90% -60%,180% -60%,100% 42%,15% 42%,15% 91%,86% 91%,86% 42%)}.template-card-content-title{margin-bottom:10px;font-size:13px;color:#3b3f46;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.iconspan-new-icon{font-size:50px}.iconspan-template-file{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#cc2229}.iconspan-template-file:hover{color:#fff}.image{width:100%;height:100%;border-radius:7px 7px 0 0}.template-tag{border-radius:10px!important;margin-bottom:5px;color:#656c79}.iconspan-template-schedule{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#00cda1}.iconspan-template-schedule:hover{color:#fff}.iconspan-template-form{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#0d1e3b}.iconspan-template-form:hover{color:#fff}.iconspan-template-qr-code{margin-left:7px;margin-top:3px;width:30px;height:30px;text-align:center;display:inline-block;font-size:22px;border-radius:8px;color:#fff;background-color:#a100cd}.iconspan-template-qr-code:hover{color:#fff}.cmacs-proj-card-text-Logo{font-size:50px;color:#fff;background-color:#512da8}.cmacs-proj-card-div-Logo{background-color:#512da8;width:221px;height:107px;text-align:center}.cmacs-proj-avatar-text{height:30px;width:30px;line-height:22px;font-size:11px;border-radius:40px;background:#512da8;color:#fff;text-align:center;cursor:pointer;padding:4px;display:inline-block;float:left}.projectimagecontainer{height:107px;border-top:1px solid #dee0e5;border-bottom:1px solid #dee0e5;background-color:#f6f7fb}.project-image{background-repeat:no-repeat;background-position:50%;background-size:contain;text-align:center}.project-image,.project-image img{height:100%;width:auto}.cmacs-todo-card-attachments span,.cmacs-todo-card-comments span,.cmacs-todo-card-person a{vertical-align:middle}.cmacs-todo-card-attachments a,.cmacs-todo-card-comments a{vertical-align:sub;font-size:18px}.cmacs-todo-card-team a{font-size:19px;vertical-align:top}.cmacs-todo-card-overdue{color:#f5222d}.cmacs-todo-card-association{float:left;cursor:pointer;font-size:18px}.todo-card-header{padding:12px;border-bottom:1px solid #dee0e5}.todo-card-content{min-height:110px}.cardrow{margin-left:-4px;margin-right:-4px}.cardcolumn{padding-left:4px;padding-right:4px}", "cmacs-card {\n        display: block;\n      }\n    "], encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNBLFlBQVksRUFBYyxZQUFZLEVBQ2xELEtBQUssRUFBcUIsTUFBTSxFQUdoQyxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNkN0Msa0JBQXlCOzs7SUFPckIsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQStDO0lBQzdDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7SUFHNUMsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQTBDO0lBQ3hDLGtHQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0IscURBQTZCOzs7O0lBR2hELDZCQUEwQjtJQUN4Qix5R0FBNkQ7SUFDL0QsMEJBQWU7OztJQURBLGVBQWlDO0lBQWpDLHNEQUFpQzs7O0lBWGxELDhCQUNnSDtJQUM5Ryw4QkFBbUM7SUFDakMseUVBRU07SUFDTix5RUFFTTtJQUNSLGlCQUFNO0lBQ04sMkZBRWU7SUFDakIsaUJBQU07OztJQVZnQyxlQUFXO0lBQVgsbUNBQVc7SUFHaEIsZUFBVztJQUFYLG1DQUFXO0lBSTNCLGVBQVM7SUFBVCxpQ0FBUzs7Ozs7O0lBUXhCLDZCQUFnRDtJQUM5QyxpQ0FDd0I7SUFETCxtT0FBc0IsMk1BQUE7SUFDakIsWUFBYztJQUFBLGlCQUFRO0lBQzlDLHlHQUFxRDtJQUN2RCwwQkFBZTs7O0lBSE0sZUFBc0I7SUFBdEIsMENBQXNCLDhCQUFBO0lBQ2pCLGVBQWM7SUFBZCx3Q0FBYztJQUN6QixlQUF5QjtJQUF6QiwrQ0FBeUI7OztJQUwxQywrQkFBaUc7SUFDL0YsMEZBQXNEO0lBQ3RELDJGQUllO0lBQ2pCLGlCQUFNOzs7SUFOUyxlQUEwQjtJQUExQiwrQ0FBMEI7SUFDeEIsZUFBK0I7SUFBL0IsdURBQStCOzs7SUFXNUMsNkJBQThDO0lBQzVDLGdDQUFzQztJQUFBLFlBQTRDO0lBQUEsaUJBQU87SUFDekYsMEJBQTZGO0lBRTdGLCtCQUFvRDtJQUNsRCxnQ0FBNkM7SUFBQSxZQUFtQzs7SUFBQSxpQkFBTztJQUN2RixnQ0FBOEM7SUFDNUMsNEJBQU07SUFBQSxhQUE2QjtJQUFBLGlCQUFPO0lBQzFDLDZCQUFNO0lBQUEsYUFBMEI7SUFBQSxpQkFBTztJQUN6QyxpQkFBTztJQUNULGlCQUFNO0lBRU4sZ0NBQW1DO0lBQUEseUJBQWdDO0lBQUEsaUJBQU07SUFDekUsZ0NBQW1DO0lBQUEseUJBQW9DO0lBQUEsaUJBQU07SUFDN0UsZ0NBQW1DO0lBQUEseUJBQWdDO0lBQUEsaUJBQU07SUFDekUsZ0NBQW1DO0lBQUEsYUFBNEI7SUFBQSxpQkFBTTtJQUNyRSxnQ0FBbUM7SUFBQSxhQUEwQjtJQUFBLGlCQUFNO0lBQ25FLGdDQUFtQztJQUFBLGFBQWdDO0lBQUEsaUJBQU07SUFDM0UsMEJBQWU7OztJQWpCeUIsZUFBNEM7SUFBNUMsc0ZBQTRDO0lBQ25CLGVBQTZCO0lBQTdCLDREQUE2QjtJQUFsRCw0REFBb0I7SUFHZixlQUFtQztJQUFuQyx1RUFBbUM7SUFFeEUsZUFBNkI7SUFBN0IsNERBQTZCO0lBQzdCLGVBQTBCO0lBQTFCLHlEQUEwQjtJQU9ELGVBQTRCO0lBQTVCLHNEQUE0QjtJQUM1QixlQUEwQjtJQUExQixvREFBMEI7SUFDMUIsZUFBZ0M7SUFBaEMsMERBQWdDOzs7SUFPL0QsNkJBQXFDO0lBQ25DLDRCQUFNO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNoQywwQkFBZTs7O0lBRFAsZUFBaUI7SUFBakIsMkNBQWlCOzs7SUFJM0IsK0JBQTRDO0lBQzFDLGdDQUFvRjtJQUFBLFlBQWE7SUFBQSxpQkFBTztJQUMxRyxpQkFBTTs7O0lBRCtCLGVBQWdEO0lBQWhELGlFQUFnRDtJQUFDLGVBQWE7SUFBYix1Q0FBYTs7O0lBT25HLCtCQUEwRDtJQUN4RCw0QkFBTTtJQUFBLFlBQWdCO0lBQUEsaUJBQU87SUFDL0IsaUJBQU07OztJQURFLGVBQWdCO0lBQWhCLDBDQUFnQjs7O0lBS3BCLDRCQUFnTTs7O0lBQWxMLCtDQUF5Qjs7O0lBQ3ZDLHlCQUE2QjtJQUFBLHdCQUFpQztJQUFBLGlCQUFJOzs7O0lBRnBFLCtCQUE0RTtJQUMxRSwySEFBZ007SUFDaE0sb0dBQWtFO0lBQ3BFLGlCQUFNOzs7SUFGcUMsZUFBb0M7SUFBcEMsMkRBQW9DLHFKQUFBO0lBQ3pFLGVBQXVCO0lBQXZCLGdEQUF1Qjs7O0lBRzdCLCtCQUF3RTtJQUN0RSx5QkFBRztJQUFBLHdCQUFnQztJQUFBLGlCQUFJO0lBQ3pDLGlCQUFNOzs7SUFFTiwrQkFBcUY7SUFDbkYseUJBQW1DO0lBQUEsd0JBQWlDO0lBQUEsaUJBQUk7SUFDMUUsaUJBQU07OztJQURELGVBQStCO0lBQS9CLGdEQUErQjtJQUFZLGVBQWlCO0lBQWpCLCtCQUFpQjs7OztJQUdqRSwrQkFBb0Y7SUFDbEYsZ0NBQWtEO0lBQTVDLDBQQUEyQztJQUFDLHdCQUFnQztJQUFBLGlCQUFPO0lBQzNGLGlCQUFNOzs7O0lBRU4sK0JBQWtJO0lBQWxGLCtOQUE4QixhQUFhLEtBQUU7SUFDM0YsNEJBQU07SUFBQSxZQUFvQjtJQUFBLGlCQUFPO0lBQ2pDLHlCQUFHO0lBQUEsd0JBQW9DO0lBQUEsaUJBQUk7SUFDN0MsaUJBQU07OztJQUZFLGVBQW9CO0lBQXBCLDhDQUFvQjs7OztJQUk1QiwrQkFBeUg7SUFBNUUsK05BQThCLFVBQVUsS0FBRTtJQUNyRiw0QkFBTTtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDOUIseUJBQUc7SUFBQSx3QkFBb0M7SUFBQSxpQkFBSTtJQUM3QyxpQkFBTTs7O0lBRkUsZUFBaUI7SUFBakIsMkNBQWlCOzs7SUE1Qy9CLDZCQUEyQztJQUN6QywrQkFBcUM7SUFDbkMsK0JBQXdCO0lBQ3RCLG1IQUVlO0lBQ2pCLGlCQUFNO0lBRU4sa0dBRU07SUFDUixpQkFBTTtJQUNOLCtCQUErQjtJQUM3QiwrQkFBbUM7SUFDakMsZ0NBQStHO0lBQUEsWUFBYztJQUFBLGlCQUFPO0lBQ3RJLGlCQUFNO0lBQ04sa0dBRU07SUFDTixnQ0FBMkM7SUFFekMsb0dBR007SUFFTixvR0FFTTtJQUVOLG9HQUVNO0lBRU4sb0dBRU07SUFFTixvR0FHTTtJQUVOLG9HQUdNO0lBQ1IsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUE5Q00sZUFBbUI7SUFBbkIsNENBQW1CO0lBSzlCLGVBQWU7SUFBZix3Q0FBZTtJQU1iLGVBQWdEO0lBQWhELGlFQUFnRDtJQUFDLHFEQUFzQjtJQUFrQyxlQUFjO0lBQWQsd0NBQWM7SUFFekgsZUFBa0I7SUFBbEIsMkNBQWtCO0lBS0UsZUFBa0I7SUFBbEIsMkNBQWtCO0lBS2xCLGVBQWlCO0lBQWpCLDBDQUFpQjtJQUlqQixlQUEwQjtJQUExQixtREFBMEI7SUFJMUIsZUFBc0I7SUFBdEIsK0NBQXNCO0lBSXRCLGVBQXNCO0lBQXRCLCtDQUFzQjtJQUt0QixlQUFtQjtJQUFuQiw0Q0FBbUI7OztJQVc3Qyw2QkFBeUM7SUFDdkMsK0JBQThDO0lBQzVDLHlCQUFHO0lBQUEsb0JBQTZCO0lBQUEsaUJBQUk7SUFDdEMsaUJBQU07SUFDTiwrQkFBbUQ7SUFDakQsNEJBQU07SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ2pDLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxMLGVBQXFCO0lBQXJCLGdDQUFxQjtJQUdyQixlQUFrQjtJQUFsQiw0Q0FBa0I7Ozs7SUFHNUIsNkJBQXdDO0lBQ3RDLGlJQUF3RDtJQUMxRCwwQkFBZTs7OztJQURBLGVBQTRCO0lBQTVCLHNDQUE0Qjs7O0lBY3ZDLDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxtQ0FBVzs7O0lBRDNELCtCQUFxRDtJQUNuRCwySEFBd0U7SUFDMUUsaUJBQU07OztJQURXLGVBQTZCO0lBQTdCLHNEQUE2Qjs7O0lBekJwRCw2QkFBK0M7SUFDN0MsK0JBQXNDO0lBQ3BDLG1IQU9lO0lBQ2YsbUhBRWU7SUFDakIsaUJBQU07SUFDTiwrQkFBNkM7SUFDM0MsK0JBQXdEO0lBQ3RELCtCQUErRjtJQUM3Riw0QkFBTTtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUM3QixpQkFBTTtJQUNOLCtCQUFzQztJQUNwQyw2QkFBTTtJQUFBLGFBQW1CO0lBQUEsaUJBQU87SUFDbEMsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUF5RDtJQUN2RCxvR0FFTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBM0JJLGVBQXdCO0lBQXhCLGlEQUF3QjtJQVF4QixlQUF1QjtJQUF2QixnREFBdUI7SUFNRyxlQUFzQjtJQUF0QixxREFBc0I7SUFDckQsZUFBYztJQUFkLHdDQUFjO0lBR2QsZUFBbUI7SUFBbkIsNkNBQW1CO0lBSWEsZUFBVztJQUFYLG9DQUFXOzs7O0lBUXpELDZCQUE0QztJQUMxQywrQkFBNkM7SUFDM0MsOENBQThFO0lBQXRDLHlQQUFxQztJQUFDLGlCQUFxQjtJQUNyRyxpQkFBTTtJQUNOLCtCQUEwQztJQUN4QywrQkFBdUY7SUFDckYsNEJBQU07SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFDeEIsaUJBQU07SUFDUixpQkFBTTtJQUNSLDBCQUFlOzs7SUFQUyxlQUFtQjtJQUFuQix5Q0FBbUI7SUFHSCxlQUFpQjtJQUFqQixnREFBaUI7SUFDN0MsZUFBUztJQUFULG1DQUFTOzs7SUFjakIsNkJBQThDO0lBQUEsWUFBVztJQUFBLDBCQUFlOzs7SUFBMUIsZUFBVztJQUFYLG1DQUFXOzs7SUFEM0QsK0JBQWlEO0lBQy9DLDBIQUF3RTtJQUMxRSxpQkFBTTs7O0lBRFcsZUFBNkI7SUFBN0Isc0RBQTZCOzs7SUFSaEQsNkJBQTJDO0lBQ3pDLCtCQUEyQztJQUN6Qyx5QkFBRztJQUFBLG9CQUE2QjtJQUFBLGlCQUFJO0lBQ3RDLGlCQUFNO0lBQ04sK0JBQXdGO0lBQ3RGLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ3hCLGlCQUFNO0lBQ04sa0dBRU07SUFDUiwwQkFBZTs7O0lBUkwsZUFBcUI7SUFBckIsZ0NBQXFCO0lBRVEsZUFBaUI7SUFBakIsZ0RBQWlCO0lBQzlDLGVBQVM7SUFBVCxtQ0FBUztJQUVtQixlQUFXO0lBQVgsb0NBQVc7OztJQU1qRCw2QkFBOEM7SUFDNUMsK0JBQTZDO0lBQzNDLDZCQUFvQjtJQUFBLHdCQUFpQztJQUFBLGlCQUFJO0lBQzNELGlCQUFNO0lBQ04sK0JBQXNDO0lBQ3BDLDRCQUFNO0lBQUEsWUFBUztJQUFBLGlCQUFPO0lBQ3hCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUZMLGVBQVM7SUFBVCxtQ0FBUzs7OztJQUtuQiw2QkFBa0c7SUFDaEcsa0hBQXdEO0lBQzFELDBCQUFlOzs7O0lBREEsZUFBNEI7SUFBNUIsc0NBQTRCOzs7O0lBTXpDLDZCQUF3QztJQUN0QyxpSUFBd0Q7SUFDMUQsMEJBQWU7Ozs7SUFEQSxlQUE0QjtJQUE1QixzQ0FBNEI7Ozs7SUFRckMsK0JBQzBFO0lBQTFCLGtTQUF5QjtJQUR6RSxpQkFDMEU7OztJQUFoRCxnREFBcUI7SUFBMUMsd0RBQW9COzs7SUFDekIsNEJBQW1EO0lBQUEsWUFBNEI7SUFBQSxpQkFBTzs7OztJQUFuQyxlQUE0QjtJQUE1QiwwREFBNEI7OztJQU5qRiwrQkFHMkU7SUFDekUsdUhBQzBFO0lBQzFFLHdIQUFzRjtJQUN4RixpQkFBTTs7Ozs7SUFOSix3R0FBd0YseUVBQUEsNEVBQUE7SUFHdkQsZUFBMEM7SUFBMUMsbUVBQTBDO0lBRXBFLGVBQTBDO0lBQTFDLG1FQUEwQzs7O0lBR3JELCtCQUFvRDtJQUFBLFlBQW9CO0lBQUEsaUJBQU07OztJQUExQixlQUFvQjtJQUFwQix1REFBb0I7OztJQVgxRSw2QkFBeUM7SUFDdkMsK0JBQXlFO0lBQ3ZFLGlIQU9NO0lBQ1IsaUJBQU07SUFDTixpSEFBOEU7SUFDOUUscUJBQXVEO0lBQ3pELDBCQUFlOzs7SUFYc0MsZUFBUztJQUFULHNDQUFTO0lBUy9CLGVBQXFCO0lBQXJCLDhDQUFxQjs7O0lBZnRELDZCQUEyQztJQUN6QyxtSEFFZTtJQUNmLG1IQWFlO0lBQ2pCLDBCQUFlOzs7SUFqQkUsZUFBdUI7SUFBdkIsZ0RBQXVCO0lBR3ZCLGVBQXdCO0lBQXhCLGlEQUF3Qjs7OztJQW9CbkMsZ0NBQ3NGO0lBQTNCLGlPQUEwQjtJQURyRixpQkFDc0Y7OztJQUFqRiwrRUFBOEI7SUFBQyxxREFBc0I7OztJQUMxRCwyQkFDbUQ7OztJQUE5Qyx1RUFBc0I7SUFBQyxxREFBc0I7Ozs7SUFlcEQsZ0NBRWtDO0lBREcsMk9BQW1DO0lBRHhFLGlCQUVrQzs7O0lBRDdCLDhEQUErQjtJQUNsQyx1RUFBK0I7OztJQUNqQyxpQ0FDaUM7SUFBQSxZQUFzQztJQUFBLGlCQUFPOzs7SUFBN0MsZUFBc0M7SUFBdEMsd0VBQXNDOzs7O0lBekIzRSw2QkFBOEM7SUFDNUMsK0JBQW1DO0lBQ2pDLCtCQUEyQjtJQUN6QixrR0FDc0Y7SUFDdEYsa0dBQ21EO0lBQ3JELGlCQUFNO0lBQ1IsaUJBQU07SUFFTixxQ0FBc0U7SUFBQSxZQUFrQjtJQUFBLGlCQUFZO0lBQ3BHLCtCQUFtQztJQUNqQyxnQ0FBa0M7SUFBQSxZQUFvQjtJQUFBLGlCQUFPO0lBQzdELGlDQUErQztJQUFBLGFBQXFCO0lBQUEsaUJBQU87SUFDM0UsOEJBQW9CO0lBQUEseUJBQXdEO0lBQUEsaUJBQUk7SUFDaEYsaUNBQStDO0lBQUEsYUFBbUI7SUFBQSxpQkFBTztJQUMzRSxpQkFBTTtJQUNOLGdDQUF1QztJQUNyQywyQkFBc0Y7SUFDeEYsaUJBQU07SUFDTixnQ0FBcUM7SUFDbkMsb0dBRWtDO0lBQ2xDLHNHQUM4RTtJQUM5RSxnQ0FBc0M7SUFDcEMsNEJBQ007SUFDTiw0QkFDTTtJQUNSLGlCQUFNO0lBQ04sK0JBQWtFO0lBQS9ELHdOQUEwQjtJQUFxQywwQkFBbUM7SUFBQSxpQkFBSTtJQUMzRyxpQkFBTTtJQUNSLDBCQUFlOzs7SUEvQkgsZUFBMEQ7SUFBMUQsMkZBQTBEO0lBRTFELGVBQXlEO0lBQXpELDBGQUF5RDtJQUtqQyxlQUFtQztJQUFuQyx5REFBbUM7SUFBQyxlQUFrQjtJQUFsQiw0Q0FBa0I7SUFFcEQsZUFBb0I7SUFBcEIsOENBQW9CO0lBQ1AsZUFBcUI7SUFBckIsK0NBQXFCO0lBRXJCLGVBQW1CO0lBQW5CLDZDQUFtQjtJQUdyQixlQUFrQztJQUFsQyxtREFBa0M7SUFHekUsZUFBb0M7SUFBcEMsNkRBQW9DO0lBR25DLGVBQWlHO0lBQWpHLDBJQUFpRztJQUc1RSxlQUErQztJQUEvQyxnR0FBK0M7SUFFN0MsZUFBaUQ7SUFBakQsa0dBQWlEOzs7O0lBU2pGLDZCQUF3QztJQUN0QyxrSUFBd0Q7SUFDMUQsMEJBQWU7Ozs7SUFEQSxlQUE0QjtJQUE1QixzQ0FBNEI7OztJQVd2Qyw2QkFBOEM7SUFBQSxZQUFXO0lBQUEsMEJBQWU7OztJQUExQixlQUFXO0lBQVgsbUNBQVc7OztJQUQzRCxnQ0FBNEQ7SUFDMUQsMElBQXdFO0lBQzFFLGlCQUFNOzs7SUFEVyxlQUE2QjtJQUE3QixzREFBNkI7Ozs7SUFUaEQsNkJBQXlDO0lBQ3ZDLGdDQUE2QztJQUMzQyw2QkFBb0I7SUFBQSxvQkFBNEI7SUFBQSxpQkFBSTtJQUN0RCxpQkFBTTtJQUNOLHFDQUE4STtJQUF6SCxtUUFBb0M7SUFDdkQsc0NBQ3NDO0lBRDFCLHlVQUEyRCxxUUFBQTtJQUNqQyxZQUFTO0lBQUEsaUJBQU87SUFDeEQsaUJBQU07SUFDTixtSEFFTTtJQUNSLDBCQUFlOzs7SUFUWSxlQUFvQjtJQUFwQixpQ0FBb0I7SUFFOEMsZUFBaUI7SUFBakIsZ0RBQWlCO0lBRXhHLGVBQW1DO0lBQW5DLHFEQUFtQztJQUFDLGVBQVM7SUFBVCxtQ0FBUztJQUVGLGVBQVc7SUFBWCxvQ0FBVzs7O0lBWjlELDZCQUE2QztJQUMzQyxvSEFFZTtJQUNmLHFIQVdlO0lBQ2pCLDBCQUFlOzs7SUFmRSxlQUF1QjtJQUF2QixnREFBdUI7SUFHdkIsZUFBd0I7SUFBeEIsaURBQXdCOzs7SUFrQmpDLDhCQUEwRDtJQUFBLG9CQUF5QjtJQUFBLGlCQUFJOzs7SUFBMUIsZUFBaUI7SUFBakIsOEJBQWlCOzs7SUFDOUUsMkJBQW1GOzs7SUFBakMsaUZBQWdDOzs7SUFXaEYsNEJBQTJDO0lBQ3pDLHNDQUFpQztJQUFBLFlBQU87SUFBQSxpQkFBWTtJQUN0RCxpQkFBTzs7O0lBRDRCLGVBQU87SUFBUCw2QkFBTzs7O0lBRTFDLHNDQUErRDtJQUFBLFlBQXNCO0lBQUEsaUJBQVk7OztJQUFsQyxlQUFzQjtJQUF0Qix5REFBc0I7OztJQUp2RiwyQkFBK0Q7SUFDN0QsMkhBRU87SUFDUCxxSUFBaUc7SUFDbkcsaUJBQU07OztJQUprQixlQUFtQjtJQUFuQixrREFBbUI7SUFHN0IsZUFBMkI7SUFBM0Isc0RBQTJCOzs7SUFqQjdDLDZCQUF5QztJQUN2QyxnQ0FBbUM7SUFDakMsK0dBQXVGO0lBQ3ZGLG1IQUFtRjtJQUNyRixpQkFBTTtJQUNOLGdDQUFtQztJQUNqQyxnQ0FBMkI7SUFFekIsMkJBQWtEO0lBQ3BELGlCQUFNO0lBQ04sZ0NBQXlDO0lBQ3ZDLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLGlIQUtNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBbEJQLGVBQTBCO0lBQTFCLG1EQUEwQjtJQUN4QixlQUEyQjtJQUEzQixvREFBMkI7SUFLTCxlQUF1QjtJQUF2Qix3RUFBdUI7SUFHakQsZUFDRjtJQURFLHNEQUNGO0lBQ00sZUFBdUQ7SUFBdkQsd0ZBQXVEOzs7SUFkckUsNkJBQStDO0lBQzNDLHFIQW9CZTtJQUNuQiwwQkFBZTs7O0lBckJJLGVBQXdCO0lBQXhCLGlEQUF3Qjs7O0lBbk83Qyw2QkFBK0I7SUFHN0Isc0dBa0JlO0lBR2Ysc0dBaURlO0lBR2YscUdBNkJlO0lBR2Ysb0dBU2U7SUFHZixvR0FVZTtJQUdmLG9HQU9lO0lBR2Ysb0dBRWU7SUFJZixvR0FrQmU7SUFHZixzR0FrQ2U7SUFHZixzR0FnQmU7SUFHZixzR0FzQmU7SUFDakIsMEJBQWU7OztJQXRQRSxlQUE2QjtJQUE3QixxREFBNkI7SUFxQjdCLGVBQTBCO0lBQTFCLGtEQUEwQjtJQW9EMUIsZUFBOEI7SUFBOUIsc0RBQThCO0lBZ0M5QixlQUEyQjtJQUEzQixtREFBMkI7SUFZM0IsZUFBMEI7SUFBMUIsa0RBQTBCO0lBYTFCLGVBQTZCO0lBQTdCLHFEQUE2QjtJQVU3QixlQUFpRjtJQUFqRix1SEFBaUY7SUFNakYsZUFBMEI7SUFBMUIsa0RBQTBCO0lBcUIxQixlQUE2QjtJQUE3QixxREFBNkI7SUFxQzdCLGVBQTRCO0lBQTVCLG9EQUE0QjtJQW1CNUIsZUFBOEI7SUFBOUIsc0RBQThCOzs7SUF5Qi9DLHFDQUF5RDs7OztJQUt6RCwwQkFBMEU7SUFDeEUsNEJBQU07SUFDSiw4RkFBdUQ7SUFDekQsaUJBQU87SUFDVCxpQkFBSzs7OztJQUo4QiwwREFBc0M7SUFFeEQsZUFBMkI7SUFBM0IsOENBQTJCOzs7SUFIOUMsK0JBQW9EO0lBQ2xELHdFQUlLO0lBQ1AsaUJBQUs7OztJQUxvQixlQUFVO0lBQVYsd0NBQVU7Ozs7QUR6UG5DLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUE0QzdCLE1BQU0sT0FBTyxrQkFBa0I7SUFtRDdCLFlBQW9CLEdBQXNCLEVBQ3hDLFFBQW1CLEVBQ1gsU0FBdUIsRUFDL0IsVUFBc0I7UUFISixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUVoQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBcERqQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNNLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFFekMsZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUk5RCxZQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUN2QyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFJbkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUVmLGNBQVMsR0FBa0IsTUFBTSxDQUFDO1FBQ2xDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQVcsb0JBQW9CLENBQUM7UUFDckQsMEJBQXFCLEdBQVcsb0JBQW9CLENBQUM7UUFHcEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUcvRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVoQixtQkFBYyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BFLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWxELHFCQUFnQixHQUFrQixFQUFFLENBQUM7UUFDckMsc0JBQWlCLEdBQVUsQ0FBQyxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxpQkFBWSxHQUFHLHNDQUFzQyxDQUFDO1FBcUZ0RCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUEvRXZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQWE7UUFDcEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUFHLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEQsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDekY7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO1lBQ2pDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUcsU0FBUyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDeEQ7YUFDRjtZQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUM7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7YUFDbEM7WUFDRCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBQztnQkFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLHdCQUF3QixDQUFDO2dCQUNsRCxJQUFJLENBQUMsYUFBYSxHQUFHLHFDQUFxQyxDQUFDO2FBQzVEO1lBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUM7Z0JBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyw0QkFBNEIsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyx1Q0FBdUMsQ0FBQzthQUM5RDtZQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFDO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsd0JBQXdCLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsbUNBQW1DLENBQUM7YUFDMUQ7WUFDRCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksRUFBQztnQkFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO2dCQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLGlDQUFpQyxDQUFDO2FBQ3hEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFaEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVTtRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBR0QsVUFBVTtRQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRWdDLE9BQU8sQ0FBQyxLQUFZO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFFc0MsVUFBVSxDQUFDLEtBQVk7UUFDNUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUlELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1lBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoRTtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsS0FBb0IsRUFBRSxjQUFjLEVBQUUsU0FBUztRQUN6RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDakMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9DLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBb0IsRUFBRSxTQUFTO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxVQUFVLENBQUMsY0FBYztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsSUFBUztRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVSxFQUFFLElBQVk7UUFDckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVLEVBQUUsR0FBVztRQUNwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUNyQixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDaEI7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O29GQXROVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtvQ0FxQ2YscUJBQXFCOzs7OztpR0FyQ3hCLG1CQUFlLDRGQUFmLHNCQUFrQjs7Ozs7UUNqRi9CLG9IQUVjO1FBRWQsbUVBYU07UUFHTixtRUFPTTtRQUVOLDhCQUFpRDtRQUMvQyx1RkF5UGU7UUFFZixpR0FBeUQ7UUFDM0QsaUJBQU07UUFHTixpRUFNSzs7UUE5UkYsZUFBMkc7UUFBM0csbUpBQTJHO1FBZWpGLGVBQWtFO1FBQWxFLCtGQUFrRTtRQVNwRSxlQUFxQjtRQUFyQix1Q0FBcUI7UUFDL0IsZUFBYztRQUFkLG1DQUFjO1FBMlBSLGVBQWE7UUFBYixrQ0FBYTtRQUlOLGVBQW9CO1FBQXBCLHlDQUFvQjs7QUR0TXZCO0lBQWYsWUFBWSxFQUFFO29EQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTtrREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTtvREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7bURBQWlCO0FBQ2hCO0lBQWYsWUFBWSxFQUFFO21EQUFpQjtBQUNoQjtJQUFmLFlBQVksRUFBRTtvREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7cURBQW1CO0FBQ2xCO0lBQWYsWUFBWSxFQUFFOzZEQUEyQjt1RkFieEMsa0JBQWtCO2NBMUM5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsTUFBTSxFQUFFO29CQUNOOzs7S0FHQztpQkFDRjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osMEJBQTBCLEVBQUUsU0FBUztvQkFDckMsMkJBQTJCLEVBQUUsVUFBVTtvQkFDdkMsNEJBQTRCLEVBQUUsd0NBQXdDO29CQUN0RSw2QkFBNkIsRUFBRSxrQkFBa0I7b0JBQ2pELCtCQUErQixFQUFFLE9BQU87b0JBQ3hDLGtDQUFrQyxFQUFFLHNCQUFzQjtvQkFDMUQsb0NBQW9DLEVBQUUseUJBQXlCO29CQUMvRCw2Q0FBNkMsRUFBRSxxQ0FBcUM7b0JBQ3BGLDhCQUE4QixFQUFFLDJCQUEyQjtvQkFDM0QsNkJBQTZCLEVBQUUsdUNBQXVDO29CQUN0RSw2QkFBNkIsRUFBRSx1Q0FBdUM7b0JBQ3RFLDJCQUEyQixFQUFFLHdCQUF3QjtvQkFDckQsNEJBQTRCLEVBQUUseUJBQXlCO29CQUN2RCw2QkFBNkIsRUFBRSwwQkFBMEI7b0JBQ3pELHNDQUFzQyxFQUFFLHNDQUFzQztvQkFDOUUsb0NBQW9DLEVBQUUsb0NBQW9DO29CQUMxRSxnQ0FBZ0MsRUFBRSxzQkFBc0I7b0JBQ3hELHlCQUF5QixFQUFFLHlCQUF5QjtvQkFDcEQsaUNBQWlDLEVBQUUsdUJBQXVCO29CQUMxRCx5QkFBeUIsRUFBRSxzQkFBc0I7b0JBQ2pELGtDQUFrQyxFQUFFLGtDQUFrQztvQkFDdEUsa0NBQWtDLEVBQUUscUNBQXFDO29CQUN6RSwwQ0FBMEMsRUFBRSx3QkFBd0I7b0JBQ3BFLDRCQUE0QixFQUFFLG9DQUFvQztvQkFDbEUsNkJBQTZCLEVBQUUsa0RBQWtEO29CQUNqRixrQ0FBa0MsRUFBRSxtREFBbUQ7aUJBQ3hGO2dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDO2dKQU8wQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLGlCQUFpQjtrQkFBekMsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFDRSxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFDRSxLQUFLO2tCQUFiLEtBQUs7WUFDK0IsR0FBRztrQkFBdkMsWUFBWTttQkFBQyxxQkFBcUI7WUFDekIsYUFBYTtrQkFBdEIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQUNHLEtBQUs7a0JBQWQsTUFBTTtZQUNFLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxjQUFjO2tCQUF2QixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUNFLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdJLGFBQWE7a0JBQXRCLE1BQU07WUFpRTBCLE9BQU87a0JBQXZDLFlBQVk7bUJBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBTVEsVUFBVTtrQkFBaEQsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1jYXJkLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJ25neC12aWRlb2d1bGFyJztcclxuaW1wb3J0IHsgU291cmNlIH0gZnJvbSBcIi4uL2NtYWNzLXZpZGVvLXBsYXllci9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHByb3BhZ2F0aW5nIGZyb20gJ3Byb3BhZ2F0aW5nLWhhbW1lcmpzJztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzQ2FyZFR5cGUgPSAnZmlsZScgfCAnc2VsZWN0aW9uJyB8XHJcbiAgJ2FjdGlvbicgfCAndGVhbScgfCAncHJvamVjdCcgfCAnZm9sZGVyJyB8ICdtZWFzdXJlJyB8ICd3ZWF0aGVyJyB8XHJcbiAgJ2JpZy1maWxlJyB8ICdub25lJyB8ICd2aWRlbycgfCAndG9kbycgfCAndGVtcGxhdGUnO1xyXG5leHBvcnQgaW50ZXJmYWNlIEJpZ0ZpbGUge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZztcclxuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYXRoZXIge1xyXG4gIHRlbXA/OiBudW1iZXIsXHJcbiAgdGVtcF9taW4/OiBudW1iZXIsXHJcbiAgdGVtcF9tYXg/OiBudW1iZXIsXHJcbiAgaHVtaWRpdHk/OiBudW1iZXIsXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgaWNvbj86IHN0cmluZyxcclxuICBjbG91ZHNfYWxsPzogbnVtYmVyLFxyXG4gIHdpbmRfc3BlZWQ/OiBudW1iZXJcclxufVxyXG5cclxuSGFtbWVyID0gcHJvcGFnYXRpbmcoSGFtbWVyKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FyZCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NhcmQnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGNtYWNzLWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJzogJ2xvYWRpbmcnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZF0nOiAnYm9yZGVyZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJzogXCJob3ZlcmFibGUgfHwgY21hY3NUeXBlID09PSAnc2VsZWN0aW9uJ1wiLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyXSc6IGB0eXBlID09PSAnaW5uZXInYCxcclxuICAgICdbY2xhc3MuYW50LWNhcmQtY29udGFpbi10YWJzXSc6ICchIXRhYicsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtd3JhcHBlcl0nOiBcImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtbWVhc3VyZS13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnbWVhc3VyZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1tZWFzdXJlLXdyYXBwZXItc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1zZWxlY3Rpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbidcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgc2VsZWN0ZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3NlbGVjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtYWN0aW9uLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdhY3Rpb24nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXdlYXRoZXItY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3dlYXRoZXInXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWJpZy1maWxlLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICdiaWctZmlsZSdcIixcclxuICAgICdbY2xhc3MuY21hY3MtYmlnLWZpbGUtY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJyAmJiBzZWxlY3RlZFwiLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1hY3Rpb24tY2FyZC1kaXNhYmxlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ2FjdGlvbicgJiYgZGlzYWJsZWRcIixcclxuICAgICdbY2xhc3MuY21hY3MtaW5mb3JtYXRpb24tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXZpZGVvLXBsYXllci1jYXJkXSc6IFwiY21hY3NUeXBlID09PSAndmlkZW8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRvZG8tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3RvZG8nICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlYW0tY2FyZC1zZWxlY3RlZF0nOiBcImNtYWNzVHlwZSA9PT0gJ3Byb2plY3QnICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLWNhcmQtZmlsZXMtZm9sZGVycy13cmFwcGVyXSc6IFwiY21hY3NUeXBlID09PSAnZm9sZGVyJ1wiLFxyXG4gICAgJ1tjbGFzcy5maWxlLWNhcmQtc2VsZWN0ZWRdJzogXCJjbWFjc1R5cGUgPT09ICdmb2xkZXInICYmIHNlbGVjdGVkXCIsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRlbXBsYXRlLWNhcmRdJzogXCJjbWFjc1R5cGUgPT09ICd0ZW1wbGF0ZScgJiYgdGVtcGxhdGUuTmV3VGVtcGxhdGVcIixcclxuICAgICdbY2xhc3MuY21hY3MtdGVtcGxhdGUtY2FyZC1kYXJrXSc6IFwiY21hY3NUeXBlID09PSAndGVtcGxhdGUnICYmICF0ZW1wbGF0ZS5OZXdUZW1wbGF0ZVwiXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jYXJkLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZm9sZGVySWNvbiA9ICcnO1xyXG4gIG5ld0ljb24gPSAnJztcclxuICBpY29uc3Bhbl90ZW1wbGF0ZSA9ICcnO1xyXG4gIGljb25fdGVtcGxhdGUgPSAnJztcclxuICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVkaXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGlzUmFkaW8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBob3ZlcmFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdXNlRGVmYXVsdENvbnRlbnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzb3VyY2VzOiBTb3VyY2VbXTtcclxuICBAT3V0cHV0KCkgcGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxWZ0FQST4gPSBuZXcgRXZlbnRFbWl0dGVyPFZnQVBJPigpO1xyXG4gIEBJbnB1dCgpIGJvZHlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBASW5wdXQoKSBjb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XHJcbiAgQElucHV0KCkgdGVhbTogYW55ID0gW107XHJcbiAgQElucHV0KCkgZmlsZTogQmlnRmlsZSA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvamVjdDogYW55ID0gW107XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IGFueSA9IFtdO1xyXG4gIEBJbnB1dCgpIHByb2plY3REYXRlTGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdG9kbzogYW55O1xyXG4gIEBJbnB1dCgpIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgQElucHV0KCkgY2VsY2l1cyA9IHRydWU7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZTogQ21hY3NDYXJkVHlwZSA9ICdub25lJztcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbk9wZW5lZEZvbGRlcjogc3RyaW5nID0gJ2ljb25VSUxhcmdlLUZvbGRlcic7XHJcbiAgQElucHV0KCkgY21hY3NJY29uQ2xvc2VkRm9sZGVyOiBzdHJpbmcgPSAnaWNvblVJTGFyZ2UtRm9sZGVyJztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbGFiZWxUaXRsZTogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB0aXRsZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSBleHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc0NhcmRUYWJDb21wb25lbnQpIHRhYjogQ21hY3NDYXJkVGFiQ29tcG9uZW50O1xyXG4gIEBPdXRwdXQoKSBvbmRsY2xpY2tDYXJkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGdvVG9Nb2R1bGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBASW5wdXQoKSB0b2RvVXNlckFzc2lnbmVkOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBjbWFjc1RhZ0NvbnRlbnRzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgY21hY3NUYWdzT3ZlcmZsb3c6bnVtYmVyID0gMDtcclxuICBAT3V0cHV0KCkgaWNvblRvRG9DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGRlZmF1bHRJbWFnZSA9ICdhc3NldHMvaW1hZ2VzL1Byb2plY3RfaW1hZ2VzL0RfMS5zdmcnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jYXJkJyk7XHJcbiAgfVxyXG5cclxuICBvcGVuTWFpbCgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGxpbmsgPSBgbWFpbHRvOiAke3RoaXMucHJvamVjdC50ZWFtTGVhZC5lbWFpbH1gO1xyXG4gICAgbG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmNtYWNzVHlwZSA9PT0gJ2ZvbGRlcicpIHtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAndGVtcGxhdGUnKSB7XHJcbiAgICAgIGlmKHRoaXMudGVtcGxhdGUudGFncyE9PXVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuY21hY3NUYWdDb250ZW50cyA9IHRoaXMudGVtcGxhdGUudGFncy5zbGljZSgwLDIpO1xyXG4gICAgICAgIGlmKHRoaXMudGVtcGxhdGUudGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNtYWNzVGFnc092ZXJmbG93ID0gdGhpcy50ZW1wbGF0ZS50YWdzLmxlbmd0aCAtIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLk5ld1RlbXBsYXRlKXtcclxuICAgICAgICB0aGlzLm5ld0ljb24gPSAnaWNvblVJTGFyZ2UtTmV3JztcclxuICAgICAgfSAgICAgIFxyXG4gICAgICBpZih0aGlzLnRlbXBsYXRlLnR5cGUgPT09ICdmaWxlJyl7XHJcbiAgICAgICAgdGhpcy5pY29uc3Bhbl90ZW1wbGF0ZSA9ICdpY29uc3Bhbi10ZW1wbGF0ZS1maWxlJztcclxuICAgICAgICB0aGlzLmljb25fdGVtcGxhdGUgPSAnYXNzZXRzL2ltYWdlcy9DYXJkX0ljb25zL2ZvbGRlci5zdmcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMudGVtcGxhdGUudHlwZSA9PT0gJ3NjaGVkdWxlJyl7XHJcbiAgICAgICAgdGhpcy5pY29uc3Bhbl90ZW1wbGF0ZSA9ICdpY29uc3Bhbi10ZW1wbGF0ZS1zY2hlZHVsZSc7XHJcbiAgICAgICAgdGhpcy5pY29uX3RlbXBsYXRlID0gJ2Fzc2V0cy9pbWFnZXMvQ2FyZF9JY29ucy9zY2hlZHVsZS5zdmcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMudGVtcGxhdGUudHlwZSA9PT0gJ2Zvcm0nKXtcclxuICAgICAgICB0aGlzLmljb25zcGFuX3RlbXBsYXRlID0gJ2ljb25zcGFuLXRlbXBsYXRlLWZvcm0nO1xyXG4gICAgICAgIHRoaXMuaWNvbl90ZW1wbGF0ZSA9ICdhc3NldHMvaW1hZ2VzL0NhcmRfSWNvbnMvZm9ybS5zdmcnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMudGVtcGxhdGUudHlwZSA9PT0gJ3FyJyl7XHJcbiAgICAgICAgdGhpcy5pY29uc3Bhbl90ZW1wbGF0ZSA9ICdpY29uc3Bhbi10ZW1wbGF0ZS1xci1jb2RlJztcclxuICAgICAgICB0aGlzLmljb25fdGVtcGxhdGUgPSAnYXNzZXRzL2ltYWdlcy9DYXJkX0ljb25zL3FyLnN2Zyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2plY3REYXRlTGFiZWwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnByb2plY3REYXRlTGFiZWwgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0RGF0ZUxhYmVsID0gJ1Byb2plY3QgRGF0ZXMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShhcGk6IFZnQVBJKSB7XHJcbiAgICB0aGlzLnBsYXllclJlYWR5LmVtaXQoYXBpKTtcclxuICB9XHJcblxyXG5cclxuICBjaGVja1JhZGlvKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigndGFwJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudDogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy51c2VEZWZhdWx0Q29udGVudCB8fCB0aGlzLmNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJykge1xyXG4gICAgICB0aGlzLnNlbGVjdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb3VibGV0YXAnLCBbJyRldmVudCddKSBvbkRibENsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlID09PSAnZm9sZGVyJyAmJiAhdGhpcy51c2VEZWZhdWx0Q29udGVudCkge1xyXG4gICAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcclxuICAgICAgdGhpcy5mb2xkZXJJY29uID0gdGhpcy5vcGVuZWQgPyB0aGlzLmNtYWNzSWNvbk9wZW5lZEZvbGRlciA6IHRoaXMuY21hY3NJY29uQ2xvc2VkRm9sZGVyO1xyXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLm9wZW4uZW1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jbWFjc1R5cGUgPT09ICdwcm9qZWN0Jykge1xyXG4gICAgICB0aGlzLm9uZGxjbGlja0NhcmQuZW1pdCh0aGlzLnByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFwVGltZW91dEhhbmRsZXIgPSBudWxsO1xyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRoaXMuY21hY3NUeXBlICE9PSAndG9kbycpIHtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9ICBcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNSYWRpbykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZCA/IHRoaXMuc2VsZWN0ZWQgOiAhdGhpcy5zZWxlY3RlZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCwgdGl0bGVDb250YWluZXIsIHRpdGxlU3Bhbikge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGl0bGVDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2VsbGlwc2lzJztcclxuICAgIGNvbnN0IHRleHQgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpO1xyXG4gICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLmlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIHRoaXMudGl0bGVDaGFuZ2UuZW1pdCh0ZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVkaXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHRpdGxlU3Bhbikge1xyXG4gICAgY29uc3QgdGV4dCA9IHRpdGxlU3Bhbi5pbm5lclRleHQucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7XHJcbiAgICB0aGlzLnRpdGxlQ2hhbmdlLmVtaXQodGV4dCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVFZGl0KHRpdGxlQ29udGFpbmVyKSB7XHJcbiAgICB0aGlzLmlzRWRpdGFibGUgPSB0aGlzLmVkaXRhYmxlO1xyXG4gICAgaWYgKHRoaXMuaXNFZGl0YWJsZSkge1xyXG4gICAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnaW5pdGlhbCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbml0aWFscyhuYW1lOiBhbnkpIHtcclxuICAgIGxldCBpbml0aWFscyA9IG5hbWUubWF0Y2goL1xcYlxcdy9nKSB8fCBbXTtcclxuICAgIGluaXRpYWxzID0gKChpbml0aWFscy5zaGlmdCgpIHx8ICcnKSArIChpbml0aWFscy5wb3AoKSB8fCAnJykpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbHM7XHJcbiAgfVxyXG5cclxuICBnZXRCYWNrZ3JvdW5kSW1hZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0LnByb2plY3RJbWFnZTtcclxuICB9XHJcblxyXG4gIG9uRXJyb3IoZWxlbSkge1xyXG4gICAgZWxlbS5waWN0dXJlRXJyb3IgPSB0cnVlO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgaWNvbnNUb0RvQ2xpY2soZXZlbnQ6IGFueSwgaWNvbjogc3RyaW5nKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5pY29uVG9Eb0NsaWNrLm5leHQoeyBpY29uLCBpZDogdGhpcy50b2RvLlVuaXF1ZUlkIH0pO1xyXG4gIH1cclxuXHJcbiAgZ29Ub01vZHVsZVRvRG8oZXZlbnQ6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICB0aGlzLmdvVG9Nb2R1bGUuZW1pdCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRMYWJlbCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCByZXN1bHQgPSAnJm5ic3A7JztcclxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICBpZiAodmFsdWUubGVuZ3RoID4gMjApIHtcclxuICAgICAgICByZXN1bHQgPSBgJHt2YWx1ZS5zbGljZSgwLCAyMCl9Li4uYDtcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gdmFsdWU7XHJcbiAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGUgI2NvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWhlYWRcIlxyXG4gICpuZ0lmPVwiKHRpdGxlIHx8IGV4dHJhIHx8IHRhYiApICYmIChjbWFjc1R5cGUgPT09ICdub25lJyB8fCBjbWFjc1R5cGUgPT09ICd0ZWFtJyB8fCBjbWFjc1R5cGUgPT09ICdwcm9qZWN0JylcIj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtaGVhZC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtaGVhZC10aXRsZVwiICpuZ0lmPVwidGl0bGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWV4dHJhXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRhYlwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBzZWxlY3Rpb24gY2FyZCBmb3IgcHJvamVjdCBjcmVhdGlvbiAtLT5cclxuPGRpdiBjbGFzcz1cImFudC1jYXJkLWNvdmVyXCIgKm5nSWY9XCJjb3ZlciB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nIHx8IGNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIj5cclxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY292ZXJcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nXCI+XHJcbiAgICA8bGFiZWwgY21hY3MtcmFkaW8gWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrUmFkaW8oKVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPnt7bGFiZWxUaXRsZX19PC9sYWJlbD5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5XCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYW50LWNhcmQtYm9keVwiIFtuZ1N0eWxlXT1cImJvZHlTdHlsZVwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGluZ1wiPlxyXG5cclxuICAgIDwhLS0gd2VhdGhlciBjYXJkIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3dlYXRoZXInXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLXRlbXBcIj57e3dlYXRoZXIudGVtcCArICgoY2VsY2l1cykgPyAnwrBDJyA6ICfCsEYnKX19PC9zcGFuPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLWNsb3VkLWltZ1wiIFtzcmNdPVwid2VhdGhlci5pY29uXCIgYWx0PVwie3t3ZWF0aGVyLmRlc2NyaXB0aW9ufX1cIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtZGVzY3JpcHRpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jYXJkLWRlc2NyaXB0aW9uXCI+e3t3ZWF0aGVyLmRlc2NyaXB0aW9uIHwgdGl0bGVjYXNlfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNhcmQtdGVtcC1taW4tbWF4XCI+XHJcbiAgICAgICAgICA8c3Bhbj57e3dlYXRoZXIudGVtcF9taW4gKyAnwrAgLyAnfX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57e3dlYXRoZXIudGVtcF9tYXggKyAnwrAnfX08L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLVJhaW5cIj48L2k+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy13ZWF0aGVyLWNvbC0xLTNcIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUh1bWlkaXR5XCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1XaW5kXCI+PC9pPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+e3t3ZWF0aGVyLmNsb3Vkc19hbGwgKyAnJSd9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3Mtd2VhdGhlci1jb2wtMS0zXCI+e3t3ZWF0aGVyLmh1bWlkaXR5ICsgJyUnfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLXdlYXRoZXItY29sLTEtM1wiPnt7d2VhdGhlci53aW5kX3NwZWVkICsgJyBLbS9IJ319PC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIHRvIGRvIGNhcmQgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAndG9kbydcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRvZG8tY2FyZC1oZWFkZXJcIiBuei1yb3c+XHJcbiAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiMTJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0b2RvLlVuaXF1ZUlkXCIgPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3RvZG8uVW5pcXVlSWR9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ0b2RvLmRhdGVcIiBuei1jb2wgbnpTcGFuPVwiMTJcIiAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtZGF0ZVwiIFtjbGFzcy5jbWFjcy10b2RvLWNhcmQtb3ZlcmR1ZV09XCJ0b2RvLmlzT3ZlcmR1ZVwiPnt7dG9kby5kYXRlfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9kby1jYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBbY2xhc3MuY21hY3MtdG9kby1jYXJkLW92ZXJkdWVdPVwidG9kby5pc092ZXJkdWVcIiB0aXRsZT1cInt7dG9kby50aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD57e3RvZG8udGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidG9kby5wcm9qZWN0XCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtcHJvamVjdFwiPlxyXG4gICAgICAgICAgPHNwYW4+e3t0b2RvLnByb2plY3R9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IG56LXJvdyBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICAgIDwhLS0gdXNlciBpY29uIC0tPlxyXG4gICAgICAgICAgPGRpdiBuei1jb2wgbnpTcGFuPVwiNVwiICpuZ0lmPVwiIXRvZG8uaXNUZWFtXCIgIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXBlcnNvblwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ0lmXT1cInRvZG9Vc2VyQXNzaWduZWRcIiAqbmdUZW1wbGF0ZU91dGxldD1cInRvZG9Vc2VyQXNzaWduZWQ7IGNvbnRleHQ6IHtpZDogdG9kby51c2VyQXNzaWduZWRJZCwgbmFtZTogdG9kby51c2VyQXNzaWduZWROYW1lLCBsb2dvVXJsOiB0b2RvLnVzZXJBc3NpZ25lZExvZ29Vcmx9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxhICpuZ0lmPVwiIXRvZG9Vc2VyQXNzaWduZWRcIj48aSBjbGFzcz1cImljb25DcmVhdGlvbi1Vc2VyXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSB0ZWFtIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmlzVGVhbVwiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXRlYW1cIj5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1UZWFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBmbGFnIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmhhc1ByaW9yaXR5RmxhZ1wiIGNsYXNzPVwiY21hY3MtdG9kby1jYXJkLXByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxhIFtzdHlsZS5jb2xvcl09XCJ0b2RvLnN0YXRlQ29sb3JcIj48aSBuei1pY29uIFtuelR5cGVdPVwiJ2ZsYWcnXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBsaW5rIGljb24gLS0+XHJcbiAgICAgICAgICA8ZGl2IG56LWNvbCBuelNwYW49XCI1XCIgKm5nSWY9XCJ0b2RvLmFzc29jaWF0aW9uXCIgY2xhc3M9XCJjbWFjcy10b2RvLWNhcmQtYXNzb2NpYXRpb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImdvVG9Nb2R1bGVUb0RvKCRldmVudCwgdG9kby5saW5rKVwiPjxpIGNsYXNzPVwiaWNvblVJTGFyZ2UtTGlua1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gYXR0YWNobWVudHMgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjVcIiAqbmdJZj1cInRvZG8uYXR0YWNobWVudHNcIiAodGFwKT1cImljb25zVG9Eb0NsaWNrKCRldmVudCwgJ2F0dGFjaG1lbnRzJylcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1hdHRhY2htZW50c1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3RvZG8uYXR0YWNobWVudHN9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1BdHRhY2hlZFwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gY29tbWVudHMgaWNvbiAtLT5cclxuICAgICAgICAgIDxkaXYgbnotY29sIG56U3Bhbj1cIjRcIiAqbmdJZj1cInRvZG8uY29tbWVudHNcIiAodGFwKT1cImljb25zVG9Eb0NsaWNrKCRldmVudCwgJ2NvbW1lbnRzJylcIiBjbGFzcz1cImNtYWNzLXRvZG8tY2FyZC1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e3RvZG8uY29tbWVudHN9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGE+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1Db21tZW50c1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIGZpbGVzIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2JpZy1maWxlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1tZXRhXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtaWNvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxhPjxpIGNsYXNzPVwie3tjbWFjc0ljb259fVwiPjwvaT48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWV4dGVuc2lvbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7ZmlsZS5leHRlbnNpb259fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS1kZXNjcmlwdGlvbi1sZWZ0LXBhbmVsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1iaWctZmlsZS10aXRsZVwiIHRpdGxlPVwie3tmaWxlLnRpdGxlfX1cIiBwbGFjZW1lbnQ9XCJib3R0b21cIiBjbWFjcy10b29sdGlwPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUudGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGF0ZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57e2ZpbGUuY3JlYXRlZF9hdH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtYmlnLWZpbGUtZGVzY3JpcHRpb24tcmlnaHQtcGFuZWxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWJpZy1maWxlLWV4dHJhXCIgKm5nSWY9XCJleHRyYVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSB2aWRlb3MgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAndmlkZW8nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLXZpZGVvLXBsYXllci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGNtYWNzLXZpZGVvLXBsYXllciBbc291cmNlc109XCJzb3VyY2VzXCIgKHBsYXllclJlYWR5KT1cIm9uUGxheWVyUmVhZHkoJGV2ZW50KVwiPjwvY21hY3MtdmlkZW8tcGxheWVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtdmlkZW8tZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC12aWRlby10aXRsZVwiIHRpdGxlPVwie3t0aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuPnt7dGl0bGV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIGZpbGVzIGNhcmQgZm9yIHJlY2VudCBwYW5lbC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ2ZpbGUnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWZpbGVzLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxhPjxpIGNsYXNzPVwie3tjbWFjc0ljb259fVwiPjwvaT48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1sYWJlbC1yZWNlbnRcIiB0aXRsZT1cInt7dGl0bGV9fVwiIHBsYWNlbWVudD1cImJvdHRvbVwiIGNtYWNzLXRvb2x0aXA+XHJcbiAgICAgICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNhcmQtZmlsZS1leHRyYVwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZXh0cmFcIj57eyBleHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwhLS0gcmFkaW8gY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdtZWFzdXJlJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY2FyZC1tZWFzdXJlLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiaWNvbnNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLVJ1bGVyXCI+PC9pPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jYXJkLWxhYmVsLW1lYXN1cmVcIj5cclxuICAgICAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdub25lJyB8fCBjbWFjc1R5cGUgPT09ICdzZWxlY3Rpb24nIHx8IGNtYWNzVHlwZSA9PT0gJ2FjdGlvbidcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgIDwhLS0gdGVhbSBjYXJkIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNtYWNzVHlwZSA9PT0gJ3RlYW0nXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMjBweDsgbWluLWhlaWdodDogMjVweDsgZGlzcGxheTogaW5saW5lLWZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLXBlcnNvbi1jYXJkXCIgKm5nRm9yPVwibGV0IHBlcnNvbiBvZiB0ZWFtOyBpbmRleCBhcyBpXCJcclxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCIoIXBlcnNvbi5pbWFnZSB8fCBwZXJzb24ucGljdHVyZUVycm9yKSA/ICcjNTEyREE4JyA6ICcjYzdmNWZmJ1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5wYWRkaW5nXT1cIighcGVyc29uLmltYWdlIHx8IHBlcnNvbi5waWN0dXJlRXJyb3IpID8gJzRweCcgOiAnMHB4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cIihpID49IDQgJiYgdGVhbS5sZW5ndGggPiA1KSA/ICdub25lJyA6ICdpbmxpbmUtYmxvY2snIFwiPlxyXG4gICAgICAgICAgICA8aW1nIHdpZHRoPVwiMzBweFwiIGhlaWdodD1cIjMwcHhcIiAqbmdJZj1cInBlcnNvbi5pbWFnZSAmJiAhcGVyc29uLnBpY3R1cmVFcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgW3NyY109XCJwZXJzb24uaW1hZ2VcIiBhbHQ9XCJ7e3BlcnNvbi5uYW1lfX1cIiAoZXJyb3IpPVwib25FcnJvcihwZXJzb24pXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXBlcnNvbi5pbWFnZSB8fCBwZXJzb24ucGljdHVyZUVycm9yXCI+e3tnZXRJbml0aWFscyhwZXJzb24ubmFtZSl9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbHVzLXRlYW0tY2FyZFwiICpuZ0lmPVwidGVhbS5sZW5ndGggPiA1XCI+K3t7dGVhbS5sZW5ndGggLSA0fX08L2Rpdj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtYWN0aW9uLXBhbmVsXVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIHByb2plY3QgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY21hY3NUeXBlID09PSAncHJvamVjdCdcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RpbWFnZWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nICpuZ0lmPVwicHJvamVjdC5wcm9qZWN0SW1hZ2UgIT09ICcnICYmICFwcm9qZWN0LnBpY3R1cmVFcnJvclwiXHJcbiAgICAgICAgICAgICAgIHNyYz1cInt7Z2V0QmFja2dyb3VuZEltYWdlKCl9fVwiIGFsdD1cInt7cHJvamVjdC5uYW1lfX1cIiAoZXJyb3IpPVwib25FcnJvcihwcm9qZWN0KVwiPlxyXG4gICAgICAgICAgPGltZyAqbmdJZj1cInByb2plY3QucHJvamVjdEltYWdlID09PSAnJyB8fCBwcm9qZWN0LnBpY3R1cmVFcnJvclwiXHJcbiAgICAgICAgICAgICAgIHNyYz1cInt7ZGVmYXVsdEltYWdlfX1cIiBhbHQ9XCJ7e3Byb2plY3QubmFtZX19XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGNtYWNzLXRhZyBjbGFzcz1cInByb2plY3Qtc3RhdHVzXCIgW2NtYWNzR3JpZFR5cGVdPVwicHJvamVjdC5zdGF0dXNUYWdcIj57e3Byb2plY3Quc3RhdHVzfX08L2NtYWNzLXRhZz5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGF0ZXMtd3JhcHBlclwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1kYXRlcy10aXRsZVwiPnt7cHJvamVjdERhdGVMYWJlbH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1kYXRlcyBwcm9qZWN0LWRhdGVzLWRhdGVcIj57e3Byb2plY3Quc3RhcnREYXRlfX08L3NwYW4+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJpY29uc3BhblwiPjxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQXJyb3ctUmlnaHQgcHJvamVjdC1kYXRlc1wiPjwvaT48L2E+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LWRhdGVzIHByb2plY3QtZGF0ZXMtZGF0ZVwiPnt7cHJvamVjdC5lbmREYXRlfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1jYXJkLXByb2dyZXNzLWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNhcmQtcHJvZ3Jlc3MtYmFyLWlubmVyXCIgW3N0eWxlLndpZHRoXT1cInByb2plY3QuY29tcGxldGlvblwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbWFuYWdlci1kZXRhaWxzXCI+XHJcbiAgICAgICAgPGltZyAqbmdJZj1cIiFwcm9qZWN0LnRlYW1MZWFkLnBpY3R1cmVFcnJvclwiIGNsYXNzPVwibWFuYWdlci1hdmF0YXJcIiB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgIGFsdD1cInt7cHJvamVjdC50ZWFtTGVhZC5uYW1lfX1cIiAoZXJyb3IpPVwib25FcnJvcihwcm9qZWN0LnRlYW1MZWFkKVwiXHJcbiAgICAgICAgICBbc3JjXT1cInByb2plY3QudGVhbUxlYWQuYXZhdGFyXCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhcHJvamVjdC50ZWFtTGVhZC5hdmF0YXIgfHwgcHJvamVjdC50ZWFtTGVhZC5hdmF0YXIgPT09ICcnIHx8IHByb2plY3QudGVhbUxlYWQucGljdHVyZUVycm9yXCJcclxuICAgICAgICAgIGNsYXNzPVwiY21hY3MtcHJvai1hdmF0YXItdGV4dFwiPnt7Z2V0SW5pdGlhbHMocHJvamVjdC50ZWFtTGVhZC5uYW1lKX19PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LW1hbmFnZXItbWV0YWRhdGFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYW5hZ2VyLW5hbWVcIiBbaW5uZXJIdG1sXT1cImJ1aWxkTGFiZWwocHJvamVjdC50ZWFtTGVhZC5uYW1lKVwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFuYWdlci1jaGFyZ2VcIiBbaW5uZXJIdG1sXT1cImJ1aWxkTGFiZWwocHJvamVjdC50ZWFtTGVhZC5jaGFyZ2UpXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YSAoY2xpY2spPVwib3Blbk1haWwoJGV2ZW50KVwiIGNsYXNzPVwiaWNvbnNwYW4gcHJvamVjdC1lbWFpbC1pY29uXCI+PGkgY2xhc3M9XCJpY29uVUlMYXJnZS1NZXNzYWdlXCI+PC9pPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbjwhLS0gZm9sZGVycyBkZWZhdWx0ICAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICdmb2xkZXInXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1c2VEZWZhdWx0Q29udGVudFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWxlcy1mb2xkZXJzLWljb24td3JhcHBlclwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJpY29uc3BhblwiPjxpIFtjbGFzc109XCJmb2xkZXJJY29uXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICN0aXRsZUNvbnRhaW5lciAoY2xpY2spPVwidG9nZ2xlRWRpdCh0aXRsZUNvbnRhaW5lcilcIiBjbGFzcz1cImNhcmQtZmlsZXMtZm9sZGVycy1sYWJlbFwiIHRpdGxlPVwie3t0aXRsZX19XCIgcGxhY2VtZW50PVwiYm90dG9tXCIgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuICNuYW1lIChrZXlkb3duLmVudGVyKT1cImhhbmRsZUVudGVyKCRldmVudCwgdGl0bGVDb250YWluZXIsIG5hbWUpXCIgKGtleXVwKT1cImhhbmRsZUVkaXQoJGV2ZW50LCBuYW1lKVwiXHJcbiAgICAgICAgICAgIFthdHRyLmNvbnRlbnRFZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+e3t0aXRsZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZpbGVzLWZvbGRlci1leHRyYSBpY29uc3BhblwiICpuZ0lmPVwiZXh0cmFcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJleHRyYVwiPnt7IGV4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gdGVtcGxhdGUgY2FyZCAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjbWFjc1R5cGUgPT09ICd0ZW1wbGF0ZSdcIj4gICAgIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlRGVmYXVsdENvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLW5ldy1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGEgKm5nSWY9XCJ0ZW1wbGF0ZS5OZXdUZW1wbGF0ZVwiIGNsYXNzPVwiaWNvbnNwYW4tbmV3LWljb25cIj48aSBbY2xhc3NdPVwibmV3SWNvblwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhdGVtcGxhdGUuTmV3VGVtcGxhdGVcIiBjbGFzcz1cImltYWdlXCIgIHNyYz1cInt7dGVtcGxhdGUudGVtcGxhdGVJbWFnZX19XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbGF0ZS1jYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBsYXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8IS0tIDxhIFtjbGFzc109XCJpY29uc3Bhbl90ZW1wbGF0ZVwiPjxpIFtjbGFzc109XCJpY29uX3RlbXBsYXRlXCI+PC9pPjwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10ZW1wbGF0ZVwiIHNyYz1cInt7aWNvbl90ZW1wbGF0ZX19XCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxhdGUtY2FyZC1jb250ZW50LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAge3t0ZW1wbGF0ZS5uYW1lfX1cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIXRlbXBsYXRlLk5ld1RlbXBsYXRlICYmIHRlbXBsYXRlLnR5cGUgPT09ICdmb3JtJ1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0YWcgb2YgY21hY3NUYWdDb250ZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPGNtYWNzLXRhZyBjbGFzcz1cInRlbXBsYXRlLXRhZ1wiID57e3RhZ319PC9jbWFjcy10YWc+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxjbWFjcy10YWcgKm5nSWY9XCJjbWFjc1RhZ3NPdmVyZmxvdyE9PTBcIiBjbGFzcz1cInRlbXBsYXRlLXRhZ1wiID4re3tjbWFjc1RhZ3NPdmVyZmxvd319PC9jbWFjcy10YWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPGNtYWNzLWNhcmQtbG9hZGluZyAqbmdJZj1cImxvYWRpbmdcIj48L2NtYWNzLWNhcmQtbG9hZGluZz5cclxuPC9kaXY+XHJcblxyXG5cclxuPHVsIGNsYXNzPVwiYW50LWNhcmQtYWN0aW9uc1wiICpuZ0lmPVwiYWN0aW9ucy5sZW5ndGhcIj5cclxuICA8bGkgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBhY3Rpb25zXCIgW3N0eWxlLndpZHRoLiVdPVwiMTAwIC8gYWN0aW9ucy5sZW5ndGhcIj5cclxuICAgIDxzcGFuPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=