import { __decorate } from "tslib";
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, EMPTY, Subject } from 'rxjs';
import { flatMap, startWith, takeUntil } from 'rxjs/operators';
import { CmacsSelectTopControlComponent } from './cmacs-select-top-control.component';
import { CmacsOptionComponent } from './cmacs-option.component';
import { CmacsOptionGroupComponent } from "./cmacs-option-group.component";
import { CmacsSelectService } from "./cmacs-select.service";
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/core/no-animation";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "./cmacs-select-top-control.component";
import * as i7 from "@angular/common";
import * as i8 from "ng-zorro-antd/core/overlay";
import * as i9 from "./cmacs-option-container.component";
import * as i10 from "ng-zorro-antd/core/transition-patch";
import * as i11 from "ng-zorro-antd/icon";
function CmacsSelectComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsSelectComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsSelectComponent_2_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CmacsSelectComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsSelectComponent_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_Template, 1, 1, "ng-template", 4);
    i0.ɵɵlistener("backdropClick", function CmacsSelectComponent_2_Template_ng_template_backdropClick_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.closeDropDown(); })("detach", function CmacsSelectComponent_2_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.closeDropDown(); })("positionChange", function CmacsSelectComponent_2_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx_r1.dropdownMatchSelectWidth ? null : ctx_r1.triggerWidth)("cdkConnectedOverlayWidth", ctx_r1.dropdownMatchSelectWidth ? ctx_r1.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx_r1.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx_r1.nzOpen);
} }
function CmacsSelectComponent_ng_template_3_ng_template_2_Template(rf, ctx) { }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 18);
} }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵlistener("mousedown", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r22); const option_r16 = i0.ɵɵnextContext().$implicit; const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.removeSelectedValue(option_r16, $event); });
    i0.ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template, 1, 0, "i", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r17.removeIcon)("ngIfElse", ctx_r17.removeIcon);
} }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 13);
    i0.ɵɵelementStart(2, "div", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template, 2, 2, "span", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r16.nzDisabled);
    i0.ɵɵattribute("title", option_r16.nzLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r16.nzLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !option_r16.nzDisabled);
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0) { return { $implicit: a0 }; };
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 19);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r23.maxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, i0.ɵɵpipeBind2(2, 2, ctx_r23.nzSelectService.listOfSelectedValue, ctx_r23.maxTagCount)));
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" + ", ctx_r24.nzSelectService.listOfCachedSelectedOption.length - ctx_r24.maxTagCount, " ... ");
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template, 3, 7, "ng-container", 1);
    i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.maxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r15.maxTagPlaceholder);
} }
function CmacsSelectComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template, 5, 5, "ng-container", 11);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, CmacsSelectComponent_ng_template_3_div_3_li_5_Template, 4, 2, "li", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 3, ctx_r13.nzSelectService.listOfCachedSelectedOption, 0, ctx_r13.maxTagCount))("ngForTrackBy", ctx_r13.trackValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r13.nzSelectService.listOfCachedSelectedOption.length > ctx_r13.maxTagCount);
} }
function CmacsSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementStart(1, "div", 6);
    i0.ɵɵlistener("onSearch", function CmacsSelectComponent_ng_template_3_Template_div_onSearch_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onSearch($event); })("keydown", function CmacsSelectComponent_ng_template_3_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onKeyDown($event); })("nzScrollToBottom", function CmacsSelectComponent_ng_template_3_Template_div_nzScrollToBottom_1_listener() { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.scrollToBottom.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_Template, 6, 7, "div", 8);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-select-user-dropdown", ctx_r3.userDropdown)("cmacs-select-dropdown", ctx_r3.open)("ant-select-dropdown--single", ctx_r3.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r3.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
    i0.ɵɵproperty("@slideMotion", ctx_r3.dropDownPosition)("ngStyle", ctx_r3.dropdownStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSearch", ctx_r3.showSearch)("showSelectAll", ctx_r3.showSelectAll)("notFoundContentShow", ctx_r3.notFoundContentShow)("notFoundContentCustom", ctx_r3.notFoundContentCustom)("userDropdown", ctx_r3.userDropdown)("selectAllLabel", ctx_r3.selectAllLabel)("showCmacsSearch", ctx_r3.showCmacsSearch)("nzMenuItemSelectedIcon", ctx_r3.menuItemSelectedIcon)("nzNotFoundContent", ctx_r3.notFoundContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.dropdownRender);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3._tagsOut && ctx_r3.nzSelectService.listOfCachedSelectedOption.length);
} }
function CmacsSelectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c1 = ["*"];
export class CmacsSelectComponent {
    constructor(renderer, nzSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.platform = platform;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this.nzOpen = false;
        this._tagsOut = false;
        this.searchValue = '';
        this.onChange = () => null;
        this.onTouched = () => null;
        // tslint:disable-next-line: member-ordering
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line: member-ordering
        // tslint:disable-next-line: variable-name
        // tslint:disable-next-line: member-ordering
        this._disabled = false;
        this._cmacsOpen = false;
        // tslint:disable-next-line: member-ordering
        this._autoFocus = false;
        // tslint:disable-next-line: member-ordering
        this.isInit = false;
        // tslint:disable-next-line: member-ordering
        this.destroy$ = new Subject();
        // tslint:disable-next-line: member-ordering
        this.cmacsOnSearch = new EventEmitter();
        this.cmacsEditedInput = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.scrollToBottom = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.openChange = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsBlur = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.cmacsFocus = new EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.size = 'default';
        // tslint:disable-next-line: member-ordering
        this.dropdownClassName = 'test-class';
        // tslint:disable-next-line: member-ordering
        this.dropdownMatchSelectWidth = true;
        // tslint:disable-next-line: member-ordering
        this.action = false;
        this.notFoundContentShow = true;
        // tslint:disable-next-line: member-ordering
        this.allowClear = false;
        this.open = false;
        // tslint:disable-next-line: member-ordering
        this.showSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.loading = false;
        this.showSelectAll = true;
        this.maxTagCountAuto = false;
        // tslint:disable-next-line: member-ordering
        this.showArrow = true;
        // tslint:disable-next-line: member-ordering
        this.tokenSeparators = [];
        this.selectAllLabel = 'Select All';
        renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    }
    set autoClearSearchValue(value) {
        this.nzSelectService.autoClearSearchValue = toBoolean(value);
    }
    set maxMultipleCount(value) {
        this.nzSelectService.maxMultipleCount = value;
    }
    set serverSearch(value) {
        this.nzSelectService.serverSearch = toBoolean(value);
    }
    set cmacsEditable(value) {
        this.nzSelectService.cmacsEditable = toBoolean(value);
    }
    get cmacsEditable() {
        return this.nzSelectService.cmacsEditable;
    }
    set userDropdown(value) {
        this.nzSelectService.userDropdown = toBoolean(value);
    }
    get userDropdown() {
        return this.nzSelectService.userDropdown;
    }
    set mode(value) {
        this.nzSelectService.mode = value;
        this.nzSelectService.check();
    }
    set filterOption(value) {
        this.nzSelectService.filterOption = value;
    }
    set tagsOut(value) {
        this._tagsOut = toBoolean(value);
        this.nzSelectService.tagsOut = toBoolean(value);
    }
    set compareWith(value) {
        this.nzSelectService.compareWith = value;
    }
    set autoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    get autoFocus() {
        return this._autoFocus;
    }
    set cmacsOpen(value) {
        this._cmacsOpen = toBoolean(value);
    }
    get cmacsOpen() {
        return this._cmacsOpen;
    }
    set disabled(value) {
        this._disabled = toBoolean(value);
        this.nzSelectService.disabled = this._disabled;
        this.nzSelectService.check();
        if (this.disabled && this.isInit) {
            this.closeDropDown();
        }
    }
    get disabled() {
        return this._disabled;
    }
    updateAutoFocus() {
        if (this.selectTopControlComponent.inputElement) {
            if (this.autoFocus) {
                this.renderer.setAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    focus() {
        if (this.selectTopControlComponent.inputElement) {
            this.focusMonitor.focusVia(this.selectTopControlComponent.inputElement, 'keyboard');
            this.cmacsFocus.emit();
        }
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    blur() {
        if (this.selectTopControlComponent.inputElement) {
            this.selectTopControlComponent.inputElement.nativeElement.blur();
            this.cmacsBlur.emit();
        }
    }
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    onKeyDown(event) {
        this.nzSelectService.onKeyDown(event);
    }
    toggleDropDown() {
        if (!this.disabled) {
            this.nzSelectService.setOpenState(!this.nzOpen);
        }
    }
    closeDropDown() {
        this.nzSelectService.setOpenState(false);
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser) {
            this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        }
    }
    updateCdkConnectedOverlayPositions() {
        setTimeout(() => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
        });
    }
    // tslint:disable-next-line: jsdoc-format
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    writeValue(value) {
        this.value = value;
        let listValue = []; // tslint:disable-line:no-any
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
        this.nzSelectService.updateListOfSelectedValue(listValue, false);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin && this.nzSelectService.isTagsSingleSelectMode) {
                if (this.selectTopControlComponent.inputValue.length &&
                    this.nzSelectService.activatedOption &&
                    !this.nzSelectService.activatedOption.nzDisabled) {
                    this.nzSelectService.clickOption(this.nzSelectService.activatedOption);
                }
            }
        });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(data => {
            if (this.userDropdown && data.length && !this.nzOpen) {
                this.nzOpen = true;
                this.updateCdkConnectedOverlayStatus();
            }
            this.cmacsOnSearch.emit(data);
            this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.editedValue$.pipe(takeUntil(this.destroy$)).subscribe(data => {
            this.cmacsEditedInput.emit(data);
            this.updateCdkConnectedOverlayPositions();
        });
        this.nzSelectService.modelChange$.pipe(takeUntil(this.destroy$)).subscribe(modelValue => {
            if (this.value !== modelValue) {
                this.value = modelValue;
                this.onChange(this.value);
                this.updateCdkConnectedOverlayPositions();
            }
        });
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            if (this.userDropdown && this.searchValue === '' && value) {
                this.nzOpen = false;
                this.updateCdkConnectedOverlayStatus();
                return;
            }
            if (this.nzSelectService.isTagsSingleSelectMode) {
                if (value && this.nzSelectService.listOfCachedSelectedOption.length && this.selectTopControlComponent.inputValue.length) {
                    value = false;
                    if (this.nzOpen !== value) {
                        this.openChange.emit(value);
                    }
                    this.focus();
                    this.updateCdkConnectedOverlayStatus();
                    this.nzOpen = value;
                    return;
                }
            }
            if (this.nzOpen !== value) {
                this.openChange.emit(value);
            }
            if (value) {
                this.focus();
                this.updateCdkConnectedOverlayStatus();
            }
            else {
                this.blur();
                this.onTouched();
            }
            this.nzOpen = value;
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
        this.isInit = true;
    }
    ngAfterContentInit() {
        this.listOfCmacsOptionGroupComponent.changes
            .pipe(startWith(true), flatMap(() => merge(this.listOfCmacsOptionGroupComponent.changes, this.listOfCmacsOptionComponent.changes, ...this.listOfCmacsOptionComponent.map(option => option.changes), ...this.listOfCmacsOptionGroupComponent.map(group => group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : EMPTY)).pipe(startWith(true))))
            .subscribe(() => {
            this.nzSelectService.updateTemplateOption(this.listOfCmacsOptionComponent.toArray(), this.listOfCmacsOptionGroupComponent.toArray());
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSearch(value) {
        this.searchValue = value;
    }
}
CmacsSelectComponent.ɵfac = function CmacsSelectComponent_Factory(t) { return new (t || CmacsSelectComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i4.NzNoAnimationDirective, 9)); };
CmacsSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSelectComponent, selectors: [["cmacs-select"]], contentQueries: function CmacsSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsOptionComponent, 0);
        i0.ɵɵcontentQuery(dirIndex, CmacsOptionGroupComponent, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfCmacsOptionComponent = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfCmacsOptionGroupComponent = _t);
    } }, viewQuery: function CmacsSelectComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CdkOverlayOrigin, 1);
        i0.ɵɵviewQuery(CdkConnectedOverlay, 1);
        i0.ɵɵviewQuery(CmacsSelectTopControlComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectTopControlComponent = _t.first);
    } }, hostVars: 14, hostBindings: function CmacsSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsSelectComponent_click_HostBindingHandler() { return ctx.toggleDropDown(); });
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-select-lg", ctx.size === "large")("ant-select-sm", ctx.size === "small")("ant-select-enabled", !ctx.disabled)("ant-select-no-arrow", !ctx.showArrow)("ant-select-disabled", ctx.disabled)("ant-select-allow-clear", ctx.allowClear)("ant-select-open", ctx.nzOpen || ctx.cmacsOpen);
    } }, inputs: { size: "size", dropdownClassName: "dropdownClassName", dropdownMatchSelectWidth: "dropdownMatchSelectWidth", action: "action", dropdownStyle: "dropdownStyle", notFoundContent: "notFoundContent", notFoundContentShow: "notFoundContentShow", allowClear: "allowClear", open: "open", showSearch: "showSearch", showCmacsSearch: "showCmacsSearch", showCustomSearch: "showCustomSearch", loading: "loading", showSelectAll: "showSelectAll", placeHolder: "placeHolder", maxTagCount: "maxTagCount", maxTagCountAuto: "maxTagCountAuto", dropdownRender: "dropdownRender", suffixIcon: "suffixIcon", clearIcon: "clearIcon", removeIcon: "removeIcon", notFoundContentCustom: "notFoundContentCustom", menuItemSelectedIcon: "menuItemSelectedIcon", showArrow: "showArrow", tokenSeparators: "tokenSeparators", maxTagPlaceholder: "maxTagPlaceholder", selectAllLabel: "selectAllLabel", autoClearSearchValue: "autoClearSearchValue", maxMultipleCount: "maxMultipleCount", serverSearch: "serverSearch", cmacsEditable: "cmacsEditable", userDropdown: "userDropdown", mode: "mode", filterOption: "filterOption", tagsOut: "tagsOut", compareWith: "compareWith", autoFocus: "autoFocus", cmacsOpen: "cmacsOpen", disabled: "disabled" }, outputs: { cmacsOnSearch: "cmacsOnSearch", cmacsEditedInput: "cmacsEditedInput", scrollToBottom: "scrollToBottom", openChange: "openChange", cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus" }, exportAs: ["cmacsSelect"], features: [i0.ɵɵProvidersFeature([
            CmacsSelectService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSelectComponent),
                multi: true
            }
        ])], ngContentSelectors: _c1, decls: 6, vars: 33, consts: [["cdkOverlayOrigin", "", "cmacs-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "searchValue", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "maxTagCountAuto", "nzShowArrow", "nzLoading", "cmacsOpen", "cmacsEditable", "nzSuffixIcon", "nzClearIcon", "userDropdown", "tagsOut", "action", "nzRemoveIcon", "nzShowSearch", "showCmacsSearch", "showCustomSearch", "nzTokenSeparators", "keydown"], [4, "ngIf"], ["content", ""], [4, "ngTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", "cmacs-custom-scrollbar", 3, "ngStyle"], ["cmacs-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", "scrollbar-color", "#cfd3d9 #ffffff", "scrollbar-width", "thin", 3, "showSearch", "showSelectAll", "notFoundContentShow", "notFoundContentCustom", "userDropdown", "selectAllLabel", "showCmacsSearch", "nzMenuItemSelectedIcon", "nzNotFoundContent", "onSearch", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"], ["class", "ant-select-selection--multiple cmacs-tags-out", "style", "padding-top: 15px;", 4, "ngIf"], [1, "ant-select-selection--multiple", "cmacs-tags-out", 2, "padding-top", "15px"], [1, "ant-select-selection__rendered", "cmacs-select-selection__rendered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "nzType", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("keydown", function CmacsSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, CmacsSelectComponent_2_Template, 1, 5, undefined, 1);
        i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_Template, 4, 25, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, CmacsSelectComponent_ng_template_5_Template, 1, 0, "ng-template");
    } if (rf & 2) {
        i0.ɵɵclassProp("cmacs-select-selection", ctx.open)("ant-select-selection--single", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--action", ctx.action);
        i0.ɵɵproperty("nzOpen", ctx.nzOpen)("searchValue", ctx.searchValue)("nzMaxTagPlaceholder", ctx.maxTagPlaceholder)("nzPlaceHolder", ctx.placeHolder)("nzAllowClear", ctx.allowClear)("nzMaxTagCount", ctx.maxTagCount)("maxTagCountAuto", ctx.maxTagCountAuto)("nzShowArrow", ctx.showArrow)("nzLoading", ctx.loading)("cmacsOpen", ctx.cmacsOpen)("cmacsEditable", ctx.cmacsEditable)("nzSuffixIcon", ctx.suffixIcon)("nzClearIcon", ctx.clearIcon)("userDropdown", ctx.userDropdown)("tagsOut", ctx._tagsOut)("action", ctx.action)("nzRemoveIcon", ctx.removeIcon)("nzShowSearch", ctx.showSearch)("showCmacsSearch", ctx.showCmacsSearch)("showCustomSearch", ctx.showCustomSearch)("nzTokenSeparators", ctx.tokenSeparators);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.open);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.open);
    } }, directives: [i5.CdkOverlayOrigin, i6.CmacsSelectTopControlComponent, i7.NgIf, i7.NgTemplateOutlet, i5.CdkConnectedOverlay, i8.NzConnectedOverlayDirective, i7.NgStyle, i9.CmacsOptionContainerComponent, i7.NgForOf, i10.ɵNzTransitionPatchDirective, i11.NzIconDirective], pipes: [i7.SlicePipe], styles: [".ant-select{box-sizing:border-box;margin:0;padding:0;color:#3b3f46;font-size:14px;font-variant:tabular-nums;line-height:1.5;list-style:none;font-feature-settings:\"tnum\";position:relative;display:inline-block;outline:0}.ant-select-dropdown{margin-top:0!important;margin-bottom:0!important}.ant-select-dropdown button{width:calc(100% - 28px);margin:9px 14px}.ant-select ol,.ant-select ul{margin:0;padding:0;list-style:none}.ant-select>ul>li>a{padding:0;background-color:#fff}.ant-select-arrow{display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;top:50%;right:11px;margin-top:-6px;color:#656c79;font-size:12px;line-height:1;transform-origin:50% 50%}.ant-select-arrow>*{line-height:1}.ant-select-arrow svg{display:inline-block}.ant-select-arrow:before{display:none}.ant-select-arrow .ant-select-arrow-icon{display:block}.ant-select-arrow .ant-select-arrow-icon svg{transition:transform .3s}.ant-select-selection{border-top:1.02px solid #dee0e5;border-radius:4px}.ant-select-selection:hover{border-color:#2a7cff;border-right-width:1px!important}.ant-select-focused .ant-select-selection,.ant-select-selection:active,.ant-select-selection:focus{border-color:#2a7cff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2)}.ant-select-selection__clear{position:absolute;top:50%;right:11px;z-index:1;display:inline-block;width:12px;height:12px;margin-top:-6px;color:#656c79;font-size:12px;font-style:normal;line-height:12px;text-align:center;text-transform:none;background:#fff;cursor:pointer;opacity:0;transition:color .3s ease,opacity .15s ease;text-rendering:auto}.ant-select-selection__clear:before{display:block}.ant-select-selection__clear:hover{color:#656c79}.ant-select-selection:hover .ant-select-selection__clear{opacity:1}.ant-select-selection-selected-value{float:left;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-select-no-arrow .ant-select-selection-selected-value{padding-right:0}.ant-select-disabled{color:#bec4cd}.ant-select-disabled .ant-select-selection{background:#f6f7fb;cursor:not-allowed}.ant-select-disabled .ant-select-selection:active,.ant-select-disabled .ant-select-selection:focus,.ant-select-disabled .ant-select-selection:hover{border-color:#dee0e5;box-shadow:none}.ant-select-disabled .ant-select-selection__clear{display:none;visibility:hidden;pointer-events:none}.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice{padding-right:10px;color:#bec4cd;background:#f6f7fb}.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove{display:none}.ant-select-selection--single{position:relative;height:32px;cursor:pointer}.ant-select-selection__rendered{margin-right:11px;line-height:30px}.ant-select-selection__rendered:after{display:inline-block;width:0;visibility:hidden;pointer-events:none;content:\".\"}.ant-select-lg{font-size:16px}.ant-select-lg .ant-select-selection--single{height:40px}.ant-select-lg .ant-select-selection__rendered{line-height:38px}.ant-select-lg .ant-select-selection--multiple{min-height:40px}.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li{height:32px;line-height:32px}.ant-select-lg .ant-select-selection--multiple .ant-select-arrow,.ant-select-lg .ant-select-selection--multiple .ant-select-selection__clear{top:20px}.ant-select-sm .ant-select-selection--single{height:24px}.ant-select-sm .ant-select-selection__rendered{margin:0 7px;line-height:22px}.ant-select-sm .ant-select-selection--multiple{min-height:24px}.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li{height:16px;line-height:14px}.ant-select-sm .ant-select-selection--multiple .ant-select-arrow,.ant-select-sm .ant-select-selection--multiple .ant-select-selection__clear{top:12px}.ant-select-sm .ant-select-arrow,.ant-select-sm .ant-select-selection__clear{right:8px}.ant-select-disabled .ant-select-selection__choice__remove{color:#bec4cd;cursor:default}.ant-select-disabled .ant-select-selection__choice__remove:hover{color:#bec4cd}.ant-select-search__field__wrap{position:relative;display:inline-block}.ant-select-search__field__placeholder,.ant-select-selection__placeholder{position:absolute;top:50%;right:9px;left:0;max-width:100%;height:20px;margin-top:-10px;overflow:hidden;color:#acb3bf;line-height:20px;white-space:nowrap;text-align:left;text-overflow:ellipsis}.ant-select-search__field__placeholder{left:12px}.ant-select-search__field__mirror{position:absolute;top:0;left:0;white-space:pre;opacity:0;pointer-events:none}.ant-select-search--inline{position:absolute;width:100%;height:100%}.ant-select-search--inline .ant-select-search__field__wrap{width:100%;height:100%}.ant-select-search--inline .ant-select-search__field{width:100%;height:100%;font-size:100%;line-height:1;background:transparent;border-width:0;border-radius:4px;outline:0}.ant-select-search--inline>i{float:right}.ant-select-selection--multiple{min-height:32px;padding-bottom:3px;cursor:text;zoom:1}.ant-select-selection--multiple:after,.ant-select-selection--multiple:before{content:\"\";display:table}.ant-select-selection--multiple:after{clear:both}.ant-select-selection--multiple .ant-select-search--inline{position:static;float:left;width:auto;max-width:100%;padding:0}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field{width:.75em;max-width:100%}.ant-select-selection--multiple .ant-select-selection__rendered{height:auto;margin-bottom:-3px;margin-left:5px}.ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:6px}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li,.ant-select-selection--multiple>ul>li{height:24px;margin-top:3px;line-height:22px}.ant-select-selection--multiple .ant-select-selection__choice{position:relative;float:left;max-width:99%;margin-right:4px;padding:0 20px 0 10px;overflow:hidden;color:#656c79;background-color:#f6f7fb;border:1px solid #dee0e5;border-radius:2px;cursor:default;transition:padding .3s cubic-bezier(.645,.045,.355,1)}.ant-select-selection--multiple .ant-select-selection__choice__disabled{padding:0 10px}.ant-select-selection--multiple .ant-select-selection__choice__content{display:inline-block;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;transition:margin .3s cubic-bezier(.645,.045,.355,1)}.ant-select-selection--multiple .ant-select-selection__choice__remove{color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:absolute;right:4px;color:#656c79;font-weight:700;line-height:inherit;cursor:pointer;transition:all .3s;display:inline-block;font-size:12px;font-size:10px\\9;transform:scale(.83333333) rotate(0deg)}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:1}.ant-select-selection--multiple .ant-select-selection__choice__remove svg{display:inline-block}.ant-select-selection--multiple .ant-select-selection__choice__remove:before{display:none}.ant-select-selection--multiple .ant-select-selection__choice__remove .ant-select-selection--multiple .ant-select-selection__choice__remove-icon{display:block}:root .ant-select-selection--multiple .ant-select-selection__choice__remove{font-size:12px}.ant-select-selection--multiple .ant-select-selection__choice__remove:hover{color:#656c79}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:16px}.ant-select-allow-clear .ant-select-selection--single .ant-select-selection-selected-value{padding-right:16px}.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered,.ant-select-show-arrow .ant-select-selection--multiple .ant-select-selection__rendered{margin-right:20px}.ant-select-open .ant-select-arrow-icon svg{transform:rotate(180deg)}.ant-select-open .ant-select-selection{border-color:#2a7cff;border-right-width:1px!important;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2)}.ant-select-combobox .ant-select-arrow{display:none}.ant-select-combobox .ant-select-search--inline{float:none;width:100%;height:100%}.ant-select-combobox .ant-select-search__field__wrap{width:100%;height:100%}.ant-select-combobox .ant-select-search__field{position:relative;z-index:1;width:100%;height:100%;box-shadow:none;transition:all .3s cubic-bezier(.645,.045,.355,1),height 0s}.ant-select-combobox.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered,.ant-select-combobox.ant-select-show-arrow .ant-select-selection:hover .ant-select-selection__rendered{margin-right:20px}.ant-select-dropdown{margin:0;padding:0;color:#656c79;font-variant:tabular-nums;line-height:1.5;list-style:none;font-feature-settings:\"tnum\";position:absolute;top:-9999px;left:-9999px;z-index:1050;box-sizing:border-box;font-size:14px;font-variant:normal;background-color:#fff;border-radius:4px;outline:none;box-shadow:0 2px 8px rgba(0,0,0,.15)}.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft,.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft{-webkit-animation-name:antSlideUpIn;animation-name:antSlideUpIn}.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft,.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft{-webkit-animation-name:antSlideDownIn;animation-name:antSlideDownIn}.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft{-webkit-animation-name:antSlideUpOut;animation-name:antSlideUpOut}.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft{-webkit-animation-name:antSlideDownOut;animation-name:antSlideDownOut}.ant-select-dropdown-hidden{display:none}.ant-select-dropdown-menu-item-group-list{margin:0;padding:0}.ant-select-dropdown-menu-item-group-list>.ant-select-dropdown-menu-item{padding-left:20px}.ant-select-dropdown-menu-item-group-title{height:32px;padding:0 12px;color:#656c79;font-size:12px;line-height:32px}.ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:first-child:not(:last-child),.ant-select-dropdown-menu-item-group:not(:last-child) .ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:last-child{border-radius:0}.ant-select-dropdown-menu-item{position:relative;display:block;padding:5px 12px;overflow:hidden;line-height:22px;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;transition:background .3s ease}.ant-select-dropdown-menu-item:first-child{border-radius:4px 4px 0 0}.ant-select-dropdown-menu-item:last-child{border-radius:0 0 4px 4px}.ant-select-dropdown-menu-item-disabled{color:#bec4cd;cursor:not-allowed}.ant-select-dropdown-menu-item-disabled:hover{color:#bec4cd;background-color:#fff;cursor:not-allowed}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#656c79;font-weight:600;background-color:#f6f7fb}.ant-select-dropdown-menu-item-divider{height:1px;margin:1px 0;overflow:hidden;line-height:0;background-color:#dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:32px}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{position:absolute;top:50%;right:12px;color:transparent;font-weight:700;font-size:12px;text-shadow:0 .1px 0,.1px 0 0,0 -.1px 0,-.1px 0;transform:translateY(-50%);transition:all .2s}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:#656c79}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled .ant-select-selected-icon{display:none}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{display:inline-block;color:#2a7cff}.ant-select-dropdown--empty.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px}.ant-select-dropdown-container-open .ant-select-dropdown,.ant-select-dropdown-open .ant-select-dropdown{display:block}.ant-empty{margin:0 8px;font-size:14px;line-height:22px;text-align:center}.ant-empty-image{height:100px;margin-bottom:8px}.ant-empty-image img{height:100%}.ant-empty-description{margin:0}.ant-empty-footer{margin-top:16px}.ant-empty-normal{margin:32px 0;color:#bec4cd}.ant-empty-normal .ant-empty-image{height:40px}.ant-empty-small{margin:8px 0;color:#bec4cd}.ant-empty-small .ant-empty-image{height:35px}.cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.cmacs-select-dropdown-menu-item-divider{border-top:1px solid #2a7cff!important}.ant-select-dropdown-menu{max-height:250px;margin-bottom:0;padding-left:0;overflow:auto;list-style:none;outline:none}.ant-select{width:100%}.ant-select-dropdown-menu-item-disabled{color:#bec4cd!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection,.ant-select-open .ant-select-selection:focus,.ant-select-open .ant-select-selection:focus-within,.ant-select-open .ant-select-selection:hover{border-color:#dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:3px 3px 0 0}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-bottom:0;border:1px solid #dee0e5;border-top:none;margin-top:-1px;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:0 0 3px 3px}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-dropdown-menu-item{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-top:1px solid #dee0e5;padding:7px 14px}.ant-select-dropdown.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{left:12px;right:unset}.cmacs-select-search-input{width:100%;border:none;outline:none;padding:0 10px 0 6px}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff;padding-left:14px!important}.cmacs-select-search-icon{color:#bec4cd;font-size:14px}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{max-width:94%}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{top:unset;transform:unset;bottom:15px;background-color:#fff!important}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .cmacs-user-dropdown-last-elem+.ant-select-selected-icon{bottom:22px}.ant-select-selection__rendered{position:relative;display:block;margin-left:11px}.ant-select-selection{display:block;box-sizing:border-box;background-color:#fff;outline:none;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ant-select-arrow,.ant-select-clear{position:absolute;width:unset;height:unset}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "notFoundContentShow", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "allowClear", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "open", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "showSearch", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "showCmacsSearch", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "showSelectAll", void 0);
__decorate([
    InputBoolean()
], CmacsSelectComponent.prototype, "maxTagCountAuto", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-select',
                exportAs: 'cmacsSelect',
                preserveWhitespaces: false,
                providers: [
                    CmacsSelectService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSelectComponent),
                        multi: true
                    }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [slideMotion],
                templateUrl: './cmacs-select.component.html',
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-select-lg]': 'size==="large"',
                    '[class.ant-select-sm]': 'size==="small"',
                    '[class.ant-select-enabled]': '!disabled',
                    '[class.ant-select-no-arrow]': '!showArrow',
                    '[class.ant-select-disabled]': 'disabled',
                    '[class.ant-select-allow-clear]': 'allowClear',
                    '[class.ant-select-open]': 'nzOpen || cmacsOpen',
                    '(click)': 'toggleDropDown()'
                },
                styles: [
                    `
      .ant-select-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `
                ],
                styleUrls: ['./cmacs-select.component.css']
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Platform }, { type: i0.ElementRef }, { type: i4.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay]
        }], selectTopControlComponent: [{
            type: ViewChild,
            args: [CmacsSelectTopControlComponent]
        }], listOfCmacsOptionComponent: [{
            type: ContentChildren,
            args: [CmacsOptionComponent]
        }], listOfCmacsOptionGroupComponent: [{
            type: ContentChildren,
            args: [CmacsOptionGroupComponent]
        }], cmacsOnSearch: [{
            type: Output
        }], cmacsEditedInput: [{
            type: Output
        }], scrollToBottom: [{
            type: Output
        }], openChange: [{
            type: Output
        }], cmacsBlur: [{
            type: Output
        }], cmacsFocus: [{
            type: Output
        }], size: [{
            type: Input
        }], dropdownClassName: [{
            type: Input
        }], dropdownMatchSelectWidth: [{
            type: Input
        }], action: [{
            type: Input
        }], dropdownStyle: [{
            type: Input
        }], notFoundContent: [{
            type: Input
        }], notFoundContentShow: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], open: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], showCustomSearch: [{
            type: Input
        }], loading: [{
            type: Input
        }], showSelectAll: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], maxTagCountAuto: [{
            type: Input
        }], dropdownRender: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], clearIcon: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], notFoundContentCustom: [{
            type: Input
        }], menuItemSelectedIcon: [{
            type: Input
        }], showArrow: [{
            type: Input
        }], tokenSeparators: [{
            type: Input
        }], maxTagPlaceholder: [{
            type: Input
        }], selectAllLabel: [{
            type: Input
        }], autoClearSearchValue: [{
            type: Input
        }], maxMultipleCount: [{
            type: Input
        }], serverSearch: [{
            type: Input
        }], cmacsEditable: [{
            type: Input
        }], userDropdown: [{
            type: Input
        }], mode: [{
            type: Input
        }], filterOption: [{
            type: Input
        }], tagsOut: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0csT0FBTyxFQUNMLFVBQVUsRUFHVix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFFZixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxF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SztZQUVHLFdBQVc7a0JBQW5CLEtBQUs7WUFDbUIsZUFBZTtrQkFBdkMsS0FBSztZQUVHLGNBQWM7a0JBQXRCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBRUcsU0FBUztrQkFBakIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFFRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsZUFBZTtrQkFBdkIsS0FBSztZQUdHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFHRixvQkFBb0I7a0JBRHZCLEtBQUs7WUFNRixnQkFBZ0I7a0JBRG5CLEtBQUs7WUFNRixZQUFZO2tCQURmLEtBQUs7WUFNRixhQUFhO2tCQURoQixLQUFLO1lBVUYsWUFBWTtrQkFEZixLQUFLO1lBVUYsSUFBSTtrQkFEUCxLQUFLO1lBT0YsWUFBWTtrQkFEZixLQUFLO1lBTUYsT0FBTztrQkFEVixLQUFLO1lBUUYsV0FBVztrQkFGZCxLQUFLO1lBT0YsU0FBUztrQkFEWixLQUFLO1lBV0YsU0FBUztrQkFEWixLQUFLO1lBVUYsUUFBUTtrQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBtZXJnZSwgRU1QVFksIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmxhdE1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q21hY3NPcHRpb25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vY21hY3Mtb3B0aW9uLWdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NtYWNzU2VsZWN0U2VydmljZX0gZnJvbSBcIi4vY21hY3Mtc2VsZWN0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTZWxlY3QnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnc2l6ZT09PVwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ3NpemU9PT1cInNtYWxsXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJzogJyFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtbm8tYXJyb3ddJzogJyFzaG93QXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ256T3BlbiB8fCBjbWFjc09wZW4nLFxyXG4gICAgJyhjbGljayknOiAndG9nZ2xlRHJvcERvd24oKSdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlbGVjdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBuek9wZW4gPSBmYWxzZTtcclxuICBfdGFnc091dCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB2YWx1ZTogYW55IHwgYW55W107XHJcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NtYWNzT3BlbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrQ29ubmVjdGVkT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDogQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Db21wb25lbnQpIGxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Db21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzRWRpdGVkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZyA9ICd0ZXN0LWNsYXNzJztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgYWN0aW9uID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbm90Rm91bmRDb250ZW50U2hvdyA9IHRydWU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0NtYWNzU2VhcmNoID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dDdXN0b21TZWFyY2ggPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWxlY3RBbGwgPSB0cnVlO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbWF4VGFnQ291bnRBdXRvID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgZHJvcGRvd25SZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHN1ZmZpeEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGNsZWFySWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50Q3VzdG9tOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2hvd0Fycm93ID0gdHJ1ZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSB0b2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG1heFRhZ1BsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55W10gfT47XHJcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IEFsbCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9DbGVhclNlYXJjaFZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBtYXhNdWx0aXBsZUNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1heE11bHRpcGxlQ291bnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlcnZlclNlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VydmVyU2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzRWRpdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNtYWNzRWRpdGFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNtYWNzRWRpdGFibGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UuY21hY3NFZGl0YWJsZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHVzZXJEcm9wZG93bih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXNlckRyb3Bkb3duID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCB1c2VyRHJvcGRvd24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdFNlcnZpY2UudXNlckRyb3Bkb3duO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbW9kZSh2YWx1ZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyB8ICd0YWdzU2luZ2xlU2VsZWN0Jykge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZpbHRlck9wdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5maWx0ZXJPcHRpb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRhZ3NPdXQgKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl90YWdzT3V0ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnRhZ3NPdXQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IGNvbXBhcmVXaXRoKHZhbHVlOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY29tcGFyZVdpdGggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fY21hY3NPcGVuID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbWFjc09wZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY21hY3NPcGVuO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmRpc2FibGVkID0gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jaGVjaygpO1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5pc0luaXQpIHtcclxuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgIHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICdhdXRvZm9jdXMnLFxyXG4gICAgICAgICAgJ2F1dG9mb2N1cydcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gICAgICB0aGlzLmNtYWNzRm9jdXMuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiBhbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uelZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgIHRoaXMuY21hY3NCbHVyLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWUob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQob3B0aW9uKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9uS2V5RG93bihldmVudCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZSghdGhpcy5uek9wZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwdWJsaWMgbnpTZWxlY3RTZXJ2aWNlOiBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNlbGVjdCcpO1xyXG4gIH1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZToganNkb2MtZm9ybWF0XHJcbiAgLyoqIHVwZGF0ZSBuZ01vZGVsIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZFZhbHVlICoqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgbGV0IGxpc3RWYWx1ZTogYW55W10gPSBbXTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdFZhbHVlID0gW3ZhbHVlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0VmFsdWUsIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luICYmIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0VmFsdWUubGVuZ3RoICYmXHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24gJiZcclxuICAgICAgICAgICF0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24ubnpEaXNhYmxlZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbGlja09wdGlvbih0aGlzLm56U2VsZWN0U2VydmljZS5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2Uuc2VhcmNoVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnVzZXJEcm9wZG93biAmJiBkYXRhLmxlbmd0aCAmJiAhdGhpcy5uek9wZW4pIHtcclxuICAgICAgICB0aGlzLm56T3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbWFjc09uU2VhcmNoLmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5lZGl0ZWRWYWx1ZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5jbWFjc0VkaXRlZElucHV0LmVtaXQoZGF0YSk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tb2RlbENoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShtb2RlbFZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbW9kZWxWYWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICBpZiAodGhpcy51c2VyRHJvcGRvd24gJiYgdGhpcy5zZWFyY2hWYWx1ZSA9PT0gJycgJiYgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelNlbGVjdFNlcnZpY2UuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggJiYgdGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0VmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMubnpPcGVuICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgICAgIHRoaXMubnpPcGVuID0gdmFsdWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56T3BlbiAhPT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmx1cigpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5uek9wZW4gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2skLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgZmxhdE1hcCgoKSA9PlxyXG4gICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQubWFwKG9wdGlvbiA9PiBvcHRpb24uY2hhbmdlcyksXHJcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC5tYXAoZ3JvdXAgPT5cclxuICAgICAgICAgICAgICBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudCA/IGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMgOiBFTVBUWVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApLnBpcGUoc3RhcnRXaXRoKHRydWUpKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS51cGRhdGVUZW1wbGF0ZU9wdGlvbihcclxuICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQudG9BcnJheSgpLFxyXG4gICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LnRvQXJyYXkoKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoKHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNka092ZXJsYXlPcmlnaW5cclxuICBjbWFjcy1zZWxlY3QtdG9wLWNvbnRyb2xcclxuICB0YWJpbmRleD1cIjBcIlxyXG4gIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25cIlxyXG4gIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uXT1cIm9wZW5cIlxyXG4gIFtuek9wZW5dPVwibnpPcGVuXCJcclxuICBbc2VhcmNoVmFsdWVdPVwic2VhcmNoVmFsdWVcIlxyXG4gIFtuek1heFRhZ1BsYWNlaG9sZGVyXT1cIm1heFRhZ1BsYWNlaG9sZGVyXCJcclxuICBbbnpQbGFjZUhvbGRlcl09XCJwbGFjZUhvbGRlclwiXHJcbiAgW256QWxsb3dDbGVhcl09XCJhbGxvd0NsZWFyXCJcclxuICBbbnpNYXhUYWdDb3VudF09XCJtYXhUYWdDb3VudFwiXHJcbiAgW21heFRhZ0NvdW50QXV0b109XCJtYXhUYWdDb3VudEF1dG9cIlxyXG4gIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxyXG4gIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4gIFtjbWFjc0VkaXRhYmxlXT1cImNtYWNzRWRpdGFibGVcIlxyXG4gIFtuelN1ZmZpeEljb25dPVwic3VmZml4SWNvblwiXHJcbiAgW256Q2xlYXJJY29uXT1cImNsZWFySWNvblwiXHJcbiAgW3VzZXJEcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gIFt0YWdzT3V0XT1cIl90YWdzT3V0XCJcclxuICBbYWN0aW9uXT1cImFjdGlvblwiXHJcbiAgW256UmVtb3ZlSWNvbl09XCJyZW1vdmVJY29uXCJcclxuICBbbnpTaG93U2VhcmNoXT1cInNob3dTZWFyY2hcIlxyXG4gIFtzaG93Q21hY3NTZWFyY2hdPVwic2hvd0NtYWNzU2VhcmNoXCJcclxuICBbc2hvd0N1c3RvbVNlYXJjaF09XCJzaG93Q3VzdG9tU2VhcmNoXCJcclxuICBbbnpUb2tlblNlcGFyYXRvcnNdPVwidG9rZW5TZXBhcmF0b3JzXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLXNpbmdsZV09XCJuelNlbGVjdFNlcnZpY2UuaXNTaW5nbGVNb2RlIHx8IG56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlXT1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzXCJcclxuICBbY2xhc3MuY21hY3Mtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIlxyXG4gIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLS1hY3Rpb25dPVwiYWN0aW9uXCJcclxuICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wZW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gICpuZ0lmPVwiIW9wZW5cIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPyBudWxsIDogdHJpZ2dlcldpZHRoXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD8gdHJpZ2dlcldpZHRoIDogbnVsbFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAoZGV0YWNoKT1cImNsb3NlRHJvcERvd24oKTtcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBjbWFjcy1jdXN0b20tc2Nyb2xsYmFyXCJcclxuICAgIFtjbGFzcy5jbWFjcy1zZWxlY3QtdXNlci1kcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1kcm9wZG93bl09XCJvcGVuXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZVwiXHJcbiAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG5cclxuICAgIFtAc2xpZGVNb3Rpb25dPVwiZHJvcERvd25Qb3NpdGlvblwiXHJcbiAgICBbbmdTdHlsZV09XCJkcm9wZG93blN0eWxlXCI+XHJcbiAgICA8ZGl2IGNtYWNzLW9wdGlvbi1jb250YWluZXJcclxuICAgICAgICAgc3R5bGU9XCJvdmVyZmxvdzogYXV0bzt0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTsgc2Nyb2xsYmFyLWNvbG9yOiAjY2ZkM2Q5ICNmZmZmZmY7IHNjcm9sbGJhci13aWR0aDogdGhpbjtcIlxyXG4gICAgICAgICAob25TZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXHJcbiAgICAgICAgIFtzaG93U2VhcmNoXT1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgICBbc2hvd1NlbGVjdEFsbF09XCJzaG93U2VsZWN0QWxsXCJcclxuICAgICAgICAgW25vdEZvdW5kQ29udGVudFNob3ddPVwibm90Rm91bmRDb250ZW50U2hvd1wiXHJcbiAgICAgICAgIFtub3RGb3VuZENvbnRlbnRDdXN0b21dPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCJcclxuICAgICAgICAgW3VzZXJEcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gICAgICAgICBbc2VsZWN0QWxsTGFiZWxdPVwic2VsZWN0QWxsTGFiZWxcIlxyXG4gICAgICAgICBbc2hvd0NtYWNzU2VhcmNoXT1cInNob3dDbWFjc1NlYXJjaFwiXHJcbiAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwibm90Rm91bmRDb250ZW50XCJcclxuICAgICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20uZW1pdCgpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkcm9wZG93blJlbmRlclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl90YWdzT3V0ICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGhcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSBjbWFjcy10YWdzLW91dFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDE1cHg7XCI+XHJcbiAgICA8ZGl2ICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCBjbWFjcy1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gfCBzbGljZTogMCA6IG1heFRhZ0NvdW50O3RyYWNrQnk6dHJhY2tWYWx1ZTtcIj5cclxuICAgICAgICAgIDxsaSBbYXR0ci50aXRsZV09XCJvcHRpb24ubnpMYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2Rpc2FibGVkXT1cIm9wdGlvbi5uekRpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+e3sgb3B0aW9uLm56TGFiZWwgfX08L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhb3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIiAoY2xpY2spPVwicmVtb3ZlU2VsZWN0ZWRWYWx1ZShvcHRpb24sICRldmVudClcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIiAqbmdJZj1cIiFyZW1vdmVJY29uOyBlbHNlIHJlbW92ZUljb25cIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gbWF4VGFnQ291bnRcIlxyXG4gICAgICAgICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG56U2VsZWN0U2VydmljZS5saXN0T2ZTZWxlY3RlZFZhbHVlIHwgc2xpY2U6IG1heFRhZ0NvdW50fVwiPlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW1heFRhZ1BsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgKyB7eyBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoIC0gbWF4VGFnQ291bnQgfX0gLi4uXHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48IS0tY2FuIG5vdCB1c2UgVmlld0NoaWxkIHNpbmNlIGl0IHdpbGwgbWF0Y2ggc3ViIG9wdGlvbnMgaW4gb3B0aW9uIGdyb3VwIC0tPlxyXG48bmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=