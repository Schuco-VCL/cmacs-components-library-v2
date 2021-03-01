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
import { slideMotion, zoomMotion } from 'ng-zorro-antd/core/animation';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./cmacs-select.service";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "ng-zorro-antd/core/no-animation";
import * as i5 from "./cmacs-select-top-control.component";
import * as i6 from "@angular/common";
import * as i7 from "./cmacs-option-container.component";
import * as i8 from "ng-zorro-antd/core/transition-patch";
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
    i0.ɵɵproperty("@zoomMotion", undefined);
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
    i0.ɵɵproperty("@zoomMotion", undefined);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r15.maxTagPlaceholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r15.maxTagPlaceholder);
} }
function CmacsSelectComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template, 5, 6, "ng-container", 11);
    i0.ɵɵpipe(4, "slice");
    i0.ɵɵtemplate(5, CmacsSelectComponent_ng_template_3_div_3_li_5_Template, 4, 3, "li", 12);
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
    } }, inputs: { size: "size", dropdownClassName: "dropdownClassName", dropdownMatchSelectWidth: "dropdownMatchSelectWidth", action: "action", dropdownStyle: "dropdownStyle", notFoundContent: "notFoundContent", notFoundContentShow: "notFoundContentShow", allowClear: "allowClear", open: "open", showSearch: "showSearch", showCmacsSearch: "showCmacsSearch", showCustomSearch: "showCustomSearch", loading: "loading", showSelectAll: "showSelectAll", placeHolder: "placeHolder", maxTagCount: "maxTagCount", dropdownRender: "dropdownRender", suffixIcon: "suffixIcon", clearIcon: "clearIcon", removeIcon: "removeIcon", notFoundContentCustom: "notFoundContentCustom", menuItemSelectedIcon: "menuItemSelectedIcon", showArrow: "showArrow", tokenSeparators: "tokenSeparators", maxTagPlaceholder: "maxTagPlaceholder", selectAllLabel: "selectAllLabel", autoClearSearchValue: "autoClearSearchValue", maxMultipleCount: "maxMultipleCount", serverSearch: "serverSearch", cmacsEditable: "cmacsEditable", userDropdown: "userDropdown", mode: "mode", filterOption: "filterOption", tagsOut: "tagsOut", compareWith: "compareWith", autoFocus: "autoFocus", cmacsOpen: "cmacsOpen", disabled: "disabled" }, outputs: { cmacsOnSearch: "cmacsOnSearch", cmacsEditedInput: "cmacsEditedInput", scrollToBottom: "scrollToBottom", openChange: "openChange", cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus" }, exportAs: ["cmacsSelect"], features: [i0.ɵɵProvidersFeature([
            CmacsSelectService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSelectComponent),
                multi: true
            }
        ])], ngContentSelectors: _c1, decls: 6, vars: 32, consts: [["cdkOverlayOrigin", "", "cmacs-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "searchValue", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "cmacsOpen", "cmacsEditable", "nzSuffixIcon", "nzClearIcon", "userDropdown", "tagsOut", "action", "nzRemoveIcon", "nzShowSearch", "showCmacsSearch", "showCustomSearch", "nzTokenSeparators", "keydown"], [4, "ngIf"], ["content", ""], [4, "ngTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", "cmacs-custom-scrollbar", 3, "ngStyle"], ["cmacs-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", "scrollbar-color", "#cfd3d9 #ffffff", "scrollbar-width", "thin", 3, "showSearch", "showSelectAll", "notFoundContentShow", "notFoundContentCustom", "userDropdown", "selectAllLabel", "showCmacsSearch", "nzMenuItemSelectedIcon", "nzNotFoundContent", "onSearch", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"], ["class", "ant-select-selection--multiple cmacs-tags-out", "style", "padding-top: 15px;", 4, "ngIf"], [1, "ant-select-selection--multiple", "cmacs-tags-out", 2, "padding-top", "15px"], [1, "ant-select-selection__rendered", "cmacs-select-selection__rendered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsSelectComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("nzOpen", ctx.nzOpen)("searchValue", ctx.searchValue)("nzMaxTagPlaceholder", ctx.maxTagPlaceholder)("nzPlaceHolder", ctx.placeHolder)("nzAllowClear", ctx.allowClear)("nzMaxTagCount", ctx.maxTagCount)("nzShowArrow", ctx.showArrow)("nzLoading", ctx.loading)("cmacsOpen", ctx.cmacsOpen)("cmacsEditable", ctx.cmacsEditable)("nzSuffixIcon", ctx.suffixIcon)("nzClearIcon", ctx.clearIcon)("userDropdown", ctx.userDropdown)("tagsOut", ctx._tagsOut)("action", ctx.action)("nzRemoveIcon", ctx.removeIcon)("nzShowSearch", ctx.showSearch)("showCmacsSearch", ctx.showCmacsSearch)("showCustomSearch", ctx.showCustomSearch)("nzTokenSeparators", ctx.tokenSeparators);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.open);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.open);
    } }, directives: [i5.CmacsSelectTopControlComponent, i6.NgIf, i6.NgTemplateOutlet, i6.NgStyle, i7.CmacsOptionContainerComponent, i6.NgForOf, i8.ɵNzTransitionPatchDirective], pipes: [i6.SlicePipe], styles: [".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.cmacs-select-dropdown-menu-item-divider{border-top:1px solid #2a7cff!important}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection,.ant-select-open .ant-select-selection:focus,.ant-select-open .ant-select-selection:focus-within,.ant-select-open .ant-select-selection:hover{border-color:#dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:3px 3px 0 0}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-bottom:0;border:1px solid #dee0e5;margin-top:-1px;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:0 0 3px 3px}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-dropdown-menu-item{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-top:1px solid #dee0e5;padding:7px 14px}.ant-select-dropdown.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{left:12px;right:unset}.cmacs-select-search-input{width:100%;border:none;outline:none;padding:0 10px 0 6px}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff;padding-left:14px!important}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{max-width:94%}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{top:unset;transform:unset;bottom:15px;background-color:#fff!important}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .cmacs-user-dropdown-last-elem+.ant-select-selected-icon{bottom:22px}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion, zoomMotion] }, changeDetection: 0 });
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
                animations: [slideMotion, zoomMotion],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFFN0csT0FBTyxFQUNMLFVBQVUsRUFHVix1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFFZixZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUlOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxF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O2tCQUFuQixLQUFLO1lBRUcsY0FBYztrQkFBdEIsS0FBSztZQUVHLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUVHLG9CQUFvQjtrQkFBNUIsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxlQUFlO2tCQUF2QixLQUFLO1lBR0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUdGLG9CQUFvQjtrQkFEdkIsS0FBSztZQU1GLGdCQUFnQjtrQkFEbkIsS0FBSztZQU1GLFlBQVk7a0JBRGYsS0FBSztZQU1GLGFBQWE7a0JBRGhCLEtBQUs7WUFVRixZQUFZO2tCQURmLEtBQUs7WUFVRixJQUFJO2tCQURQLEtBQUs7WUFPRixZQUFZO2tCQURmLEtBQUs7WUFNRixPQUFPO2tCQURWLEtBQUs7WUFRRixXQUFXO2tCQUZkLEtBQUs7WUFPRixTQUFTO2tCQURaLEtBQUs7WUFXRixTQUFTO2tCQURaLEtBQUs7WUFVRixRQUFRO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1lcmdlLCBFTVBUWSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmbGF0TWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IENtYWNzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q21hY3NTZWxlY3RTZXJ2aWNlfSBmcm9tIFwiLi9jbWFjcy1zZWxlY3Quc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24sIHpvb21Nb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlbGVjdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NlbGVjdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbWFjc1NlbGVjdFNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlbGVjdENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGFuaW1hdGlvbnM6IFtzbGlkZU1vdGlvbiwgem9vbU1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWhvc3QtcHJvcGVydHktZGVjb3JhdG9yXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXSc6ICdzaXplPT09XCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnc2l6ZT09PVwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nOiAnIWRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1uby1hcnJvd10nOiAnIXNob3dBcnJvdycsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYWxsb3dDbGVhcicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnbnpPcGVuIHx8IGNtYWNzT3BlbicsXHJcbiAgICAnKGNsaWNrKSc6ICd0b2dnbGVEcm9wRG93bigpJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VsZWN0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIG56T3BlbiA9IGZhbHNlO1xyXG4gIF90YWdzT3V0ID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHZhbHVlOiBhbnkgfCBhbnlbXTtcclxuICBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY21hY3NPcGVuID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4pIGNka092ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSBzZWxlY3RUb3BDb250cm9sQ29tcG9uZW50OiBDbWFjc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc09wdGlvbkNvbXBvbmVudCkgbGlzdE9mQ21hY3NPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxDbWFjc09wdGlvbkNvbXBvbmVudD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NPcHRpb25Hcm91cENvbXBvbmVudD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzT25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NFZGl0ZWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbWFjc0ZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nID0gJ3Rlc3QtY2xhc3MnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBhY3Rpb24gPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBkcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBub3RGb3VuZENvbnRlbnRTaG93ID0gdHJ1ZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuID0gZmFsc2U7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93Q21hY3NTZWFyY2ggPSBmYWxzZTtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0N1c3RvbVNlYXJjaCA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXI6IHN0cmluZztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBjbGVhckljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudEN1c3RvbTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgbWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gIEBJbnB1dCgpIHNob3dBcnJvdyA9IHRydWU7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcbiAgQElucHV0KCkgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICBASW5wdXQoKSBtYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueVtdIH0+O1xyXG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBBbGwnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvQ2xlYXJTZWFyY2hWYWx1ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbWF4TXVsdGlwbGVDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5tYXhNdWx0aXBsZUNvdW50ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZXJ2ZXJTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNlcnZlclNlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc0VkaXRhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5jbWFjc0VkaXRhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBjbWFjc0VkaXRhYmxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNtYWNzRWRpdGFibGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB1c2VyRHJvcGRvd24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93biA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgdXNlckRyb3Bkb3duKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVzZXJEcm9wZG93bjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG1vZGUodmFsdWU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgfCAndGFnc1NpbmdsZVNlbGVjdCcpIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLm1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmaWx0ZXJPcHRpb24odmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZmlsdGVyT3B0aW9uID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0YWdzT3V0ICh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdGFnc091dCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS50YWdzT3V0ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHNldCBjb21wYXJlV2l0aCh2YWx1ZTogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNvbXBhcmVXaXRoID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGF1dG9Gb2N1cygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NtYWNzT3BlbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgY21hY3NPcGVuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NtYWNzT3BlbjtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5kaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2hlY2soKTtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMuaXNJbml0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcclxuICAgICAgaWYgKHRoaXMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAnYXV0b2ZvY3VzJyxcclxuICAgICAgICAgICdhdXRvZm9jdXMnXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICAgICAgdGhpcy5jbWFjc0ZvY3VzLmVtaXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYW55IHtcclxuICAgIHJldHVybiBvcHRpb24ubnpWYWx1ZTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICB0aGlzLmNtYWNzQmx1ci5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbik7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vbktleURvd24oZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoIXRoaXMubnpPcGVuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIG56U2VsZWN0U2VydmljZTogQ21hY3NTZWxlY3RTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1zZWxlY3QnKTtcclxuICB9XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGpzZG9jLWZvcm1hdFxyXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdFZhbHVlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbiAmJiB0aGlzLm56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dFZhbHVlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uICYmXHJcbiAgICAgICAgICAhdGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uLm56RGlzYWJsZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuY2xpY2tPcHRpb24odGhpcy5uelNlbGVjdFNlcnZpY2UuYWN0aXZhdGVkT3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLnNlYXJjaFZhbHVlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICBpZiAodGhpcy51c2VyRHJvcGRvd24gJiYgZGF0YS5sZW5ndGggJiYgIXRoaXMubnpPcGVuKSB7XHJcbiAgICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY21hY3NPblNlYXJjaC5lbWl0KGRhdGEpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UuZWRpdGVkVmFsdWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMuY21hY3NFZGl0ZWRJbnB1dC5lbWl0KGRhdGEpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelNlbGVjdFNlcnZpY2UubW9kZWxDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobW9kZWxWYWx1ZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG1vZGVsVmFsdWU7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm56U2VsZWN0U2VydmljZS5vcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgaWYgKHRoaXMudXNlckRyb3Bkb3duICYmIHRoaXMuc2VhcmNoVmFsdWUgPT09ICcnICYmIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubnpTZWxlY3RTZXJ2aWNlLmlzVGFnc1NpbmdsZVNlbGVjdE1vZGUpIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5uelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoICYmIHRoaXMuc2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgdmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLm56T3BlbiAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XHJcbiAgICAgICAgICB0aGlzLm56T3BlbiA9IHZhbHVlO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uek9wZW4gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJsdXIoKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubnpPcGVuID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubnpTZWxlY3RTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIGZsYXRNYXAoKCkgPT5cclxuICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgdGhpcy5saXN0T2ZDbWFjc09wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50Lm1hcChvcHRpb24gPT4gb3B0aW9uLmNoYW5nZXMpLFxyXG4gICAgICAgICAgICAuLi50aGlzLmxpc3RPZkNtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQubWFwKGdyb3VwID0+XHJcbiAgICAgICAgICAgICAgZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPyBncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzIDogRU1QVFlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uelNlbGVjdFNlcnZpY2UudXBkYXRlVGVtcGxhdGVPcHRpb24oXHJcbiAgICAgICAgICB0aGlzLmxpc3RPZkNtYWNzT3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKSxcclxuICAgICAgICAgIHRoaXMubGlzdE9mQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudC50b0FycmF5KClcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nKXtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjZGtPdmVybGF5T3JpZ2luXHJcbiAgY21hY3Mtc2VsZWN0LXRvcC1jb250cm9sXHJcbiAgdGFiaW5kZXg9XCIwXCJcclxuICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uXCJcclxuICBbY2xhc3MuY21hY3Mtc2VsZWN0LXNlbGVjdGlvbl09XCJvcGVuXCJcclxuICBbbnpPcGVuXT1cIm56T3BlblwiXHJcbiAgW3NlYXJjaFZhbHVlXT1cInNlYXJjaFZhbHVlXCJcclxuICBbbnpNYXhUYWdQbGFjZWhvbGRlcl09XCJtYXhUYWdQbGFjZWhvbGRlclwiXHJcbiAgW256UGxhY2VIb2xkZXJdPVwicGxhY2VIb2xkZXJcIlxyXG4gIFtuekFsbG93Q2xlYXJdPVwiYWxsb3dDbGVhclwiXHJcbiAgW256TWF4VGFnQ291bnRdPVwibWF4VGFnQ291bnRcIlxyXG4gIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxyXG4gIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4gIFtjbWFjc0VkaXRhYmxlXT1cImNtYWNzRWRpdGFibGVcIlxyXG4gIFtuelN1ZmZpeEljb25dPVwic3VmZml4SWNvblwiXHJcbiAgW256Q2xlYXJJY29uXT1cImNsZWFySWNvblwiXHJcbiAgW3VzZXJEcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gIFt0YWdzT3V0XT1cIl90YWdzT3V0XCJcclxuICBbYWN0aW9uXT1cImFjdGlvblwiXHJcbiAgW256UmVtb3ZlSWNvbl09XCJyZW1vdmVJY29uXCJcclxuICBbbnpTaG93U2VhcmNoXT1cInNob3dTZWFyY2hcIlxyXG4gIFtzaG93Q21hY3NTZWFyY2hdPVwic2hvd0NtYWNzU2VhcmNoXCJcclxuICBbc2hvd0N1c3RvbVNlYXJjaF09XCJzaG93Q3VzdG9tU2VhcmNoXCJcclxuICBbbnpUb2tlblNlcGFyYXRvcnNdPVwidG9rZW5TZXBhcmF0b3JzXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLXNpbmdsZV09XCJuelNlbGVjdFNlcnZpY2UuaXNTaW5nbGVNb2RlIHx8IG56U2VsZWN0U2VydmljZS5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlXCJcclxuICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlXT1cIm56U2VsZWN0U2VydmljZS5pc011bHRpcGxlT3JUYWdzXCJcclxuICBbY2xhc3MuY21hY3Mtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIlxyXG4gIFtjbGFzcy5jbWFjcy1zZWxlY3Qtc2VsZWN0aW9uLS1hY3Rpb25dPVwiYWN0aW9uXCJcclxuICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPlxyXG48L2Rpdj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wZW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZVxyXG4gICpuZ0lmPVwiIW9wZW5cIlxyXG4gIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheUhhc0JhY2tkcm9wXT1cInRydWVcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoPyBudWxsIDogdHJpZ2dlcldpZHRoXCJcclxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cImRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aD8gdHJpZ2dlcldpZHRoIDogbnVsbFwiXHJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2VEcm9wRG93bigpXCJcclxuICAoZGV0YWNoKT1cImNsb3NlRHJvcERvd24oKTtcIlxyXG4gIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJuek9wZW5cIj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiYW50LXNlbGVjdC1kcm9wZG93biBjbWFjcy1jdXN0b20tc2Nyb2xsYmFyXCJcclxuICAgIFtjbGFzcy5jbWFjcy1zZWxlY3QtdXNlci1kcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gICAgW2NsYXNzLmNtYWNzLXNlbGVjdC1kcm9wZG93bl09XCJvcGVuXCJcclxuICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzU2luZ2xlTW9kZVwiXHJcbiAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGVdPVwibnpTZWxlY3RTZXJ2aWNlLmlzTXVsdGlwbGVPclRhZ3NcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG5cclxuICAgIFtAc2xpZGVNb3Rpb25dPVwiZHJvcERvd25Qb3NpdGlvblwiXHJcbiAgICBbbmdTdHlsZV09XCJkcm9wZG93blN0eWxlXCI+XHJcbiAgICA8ZGl2IGNtYWNzLW9wdGlvbi1jb250YWluZXJcclxuICAgICAgICAgc3R5bGU9XCJvdmVyZmxvdzogYXV0bzt0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KTsgc2Nyb2xsYmFyLWNvbG9yOiAjY2ZkM2Q5ICNmZmZmZmY7IHNjcm9sbGJhci13aWR0aDogdGhpbjtcIlxyXG4gICAgICAgICAob25TZWFyY2gpPVwib25TZWFyY2goJGV2ZW50KVwiXHJcbiAgICAgICAgIFtzaG93U2VhcmNoXT1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgICBbc2hvd1NlbGVjdEFsbF09XCJzaG93U2VsZWN0QWxsXCJcclxuICAgICAgICAgW25vdEZvdW5kQ29udGVudFNob3ddPVwibm90Rm91bmRDb250ZW50U2hvd1wiXHJcbiAgICAgICAgIFtub3RGb3VuZENvbnRlbnRDdXN0b21dPVwibm90Rm91bmRDb250ZW50Q3VzdG9tXCJcclxuICAgICAgICAgW3VzZXJEcm9wZG93bl09XCJ1c2VyRHJvcGRvd25cIlxyXG4gICAgICAgICBbc2VsZWN0QWxsTGFiZWxdPVwic2VsZWN0QWxsTGFiZWxcIlxyXG4gICAgICAgICBbc2hvd0NtYWNzU2VhcmNoXT1cInNob3dDbWFjc1NlYXJjaFwiXHJcbiAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgICAgW256TWVudUl0ZW1TZWxlY3RlZEljb25dPVwibWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgICAgICBbbnpOb3RGb3VuZENvbnRlbnRdPVwibm90Rm91bmRDb250ZW50XCJcclxuICAgICAgICAgKG56U2Nyb2xsVG9Cb3R0b20pPVwic2Nyb2xsVG9Cb3R0b20uZW1pdCgpXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkcm9wZG93blJlbmRlclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIl90YWdzT3V0ICYmIG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGhcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSBjbWFjcy10YWdzLW91dFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDE1cHg7XCI+XHJcbiAgICA8ZGl2ICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCBjbWFjcy1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZFwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gfCBzbGljZTogMCA6IG1heFRhZ0NvdW50O3RyYWNrQnk6dHJhY2tWYWx1ZTtcIj5cclxuICAgICAgICAgIDxsaSBbQHpvb21Nb3Rpb25dIFthdHRyLnRpdGxlXT1cIm9wdGlvbi5uekxhYmVsXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWRdPVwib3B0aW9uLm56RGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX2NvbnRlbnRcIj57eyBvcHRpb24ubnpMYWJlbCB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFvcHRpb24ubnpEaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlXCJcclxuICAgICAgICAgICAgICAgICAgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChjbGljayk9XCJyZW1vdmVTZWxlY3RlZFZhbHVlKG9wdGlvbiwgJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiB0eXBlPVwiY2xvc2VcIiBjbGFzcz1cImFudC1zZWxlY3QtcmVtb3ZlLWljb25cIiAqbmdJZj1cIiFyZW1vdmVJY29uOyBlbHNlIHJlbW92ZUljb25cIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bGkgKm5nSWY9XCJuelNlbGVjdFNlcnZpY2UubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gbWF4VGFnQ291bnRcIiBbQHpvb21Nb3Rpb25dXHJcbiAgICAgICAgICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtYXhUYWdQbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJtYXhUYWdQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbnpTZWxlY3RTZXJ2aWNlLmxpc3RPZlNlbGVjdGVkVmFsdWUgfCBzbGljZTogbWF4VGFnQ291bnR9XCI+XHJcbiAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbWF4VGFnUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICArIHt7IG56U2VsZWN0U2VydmljZS5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5sZW5ndGggLSBtYXhUYWdDb3VudCB9fSAuLi5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS1jYW4gbm90IHVzZSBWaWV3Q2hpbGQgc2luY2UgaXQgd2lsbCBtYXRjaCBzdWIgb3B0aW9ucyBpbiBvcHRpb24gZ3JvdXAgLS0+XHJcbjxuZy10ZW1wbGF0ZT5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==