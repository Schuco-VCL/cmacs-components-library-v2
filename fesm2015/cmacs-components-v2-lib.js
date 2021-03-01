import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, EventEmitter, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵprojectionDef, ɵɵprojection, ChangeDetectionStrategy, ViewEncapsulation, Output, ChangeDetectorRef, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵlistener, ɵɵclassProp, ɵɵProvidersFeature, forwardRef, ɵɵelement, ɵɵadvance, ɵɵproperty, Optional, ViewChild, Input, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵcontentQuery, ɵɵattribute, ɵɵNgOnChangesFeature, ContentChild, ContentChildren, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵstyleProp, ɵɵsanitizeHtml, ViewChildren, ɵɵdefineDirective, Directive, TemplateRef, ɵɵdefinePipe, Pipe, ɵɵtextInterpolate1, ɵɵreference, ɵɵpipe, ɵɵpureFunction1, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵtemplateRefExtractor, Host, ɵɵpropertyInterpolate, ɵɵelementContainer, ɵɵpipeBind4, NgZone, Self, isDevMode, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { __decorate } from 'tslib';
import { NG_VALUE_ACCESSOR, CheckboxControlValueAccessor, NgControlStatus, NgModel, DefaultValueAccessor, NgControl, FormsModule } from '@angular/forms';
import { takeUntil, startWith, filter, tap, pluck, map, distinctUntilChanged, share, skip, flatMap, switchMap, mergeMap } from 'rxjs/operators';
import { Subject, fromEvent, merge, ReplaySubject, BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { InputBoolean, InputNumber, ensureNumberInRange, silentEvent, getPrecision, getPercent, getElementOffset, arraysEqual, isNotNil, isNil, toBoolean } from 'ng-zorro-antd/core/util';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { NgForOf, NgIf, NgStyle, NgTemplateOutlet, SlicePipe, CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzConfigService, WithConfig } from 'ng-zorro-antd/core/config';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { RIGHT_ARROW, UP_ARROW, LEFT_ARROW, DOWN_ARROW, TAB, SPACE, BACKSPACE, ENTER } from '@angular/cdk/keycodes';
import { Platform } from '@angular/cdk/platform';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CdkOverlayOrigin, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { zoomMotion, slideMotion } from 'ng-zorro-antd/core/animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzResizeService } from 'ng-zorro-antd/core/services';

class CmacsComponentsV2LibService {
    constructor() { }
}
CmacsComponentsV2LibService.ɵfac = function CmacsComponentsV2LibService_Factory(t) { return new (t || CmacsComponentsV2LibService)(); };
CmacsComponentsV2LibService.ɵprov = ɵɵdefineInjectable({ token: CmacsComponentsV2LibService, factory: CmacsComponentsV2LibService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsComponentsV2LibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CmacsComponentsV2LibComponent {
    constructor() { }
    ngOnInit() {
    }
}
CmacsComponentsV2LibComponent.ɵfac = function CmacsComponentsV2LibComponent_Factory(t) { return new (t || CmacsComponentsV2LibComponent)(); };
CmacsComponentsV2LibComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsComponentsV2LibComponent, selectors: [["lib-cmacs-components-v2-lib"]], decls: 2, vars: 0, template: function CmacsComponentsV2LibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " cmacs-components-v2-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsComponentsV2LibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-cmacs-components-v2-lib',
                template: `
    <p>
      cmacs-components-v2-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

const _c0 = ["*"];
class CmacsCheckboxWrapperComponent {
    constructor(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    onChange() {
        const listOfCheckedValue = this.checkboxList.filter(item => item.checked).map(item => item.value);
        this.nzOnChange.emit(listOfCheckedValue);
    }
}
CmacsCheckboxWrapperComponent.ɵfac = function CmacsCheckboxWrapperComponent_Factory(t) { return new (t || CmacsCheckboxWrapperComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
CmacsCheckboxWrapperComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsCheckboxWrapperComponent, selectors: [["cmacs-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["cmacsCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsCheckboxWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-checkbox-wrapper',
                exportAs: 'cmacsCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-checkbox-wrapper.component.html'
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { nzOnChange: [{
            type: Output
        }] }); })();

const _c0$1 = ["inputElement"];
const _c1 = ["cmacs-checkbox-v2", ""];
const _c2 = ["*"];
class CmacsCheckboxComponent {
    constructor(elementRef, renderer, cmacsCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cmacsCheckboxWrapperComponent = cmacsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.checkedChange = new EventEmitter();
        this.theme = 'light';
        this.autoFocus = false;
        this.disabled = false;
        this.indeterminate = false;
        this.checked = false;
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
    }
    hostClick(e) {
        e.preventDefault();
        this.focus();
        this.innerCheckedChange(!this.checked);
    }
    innerCheckedChange(checked) {
        if (!this.disabled) {
            this.checked = checked;
            this.onChange(this.checked);
            this.checkedChange.emit(this.checked);
            if (this.cmacsCheckboxWrapperComponent) {
                this.cmacsCheckboxWrapperComponent.onChange();
            }
        }
    }
    writeValue(value) {
        this.checked = value;
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
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnInit() {
        var _a;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.addCheckbox(this);
        }
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.cmacsCheckboxWrapperComponent) {
            this.cmacsCheckboxWrapperComponent.removeCheckbox(this);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsCheckboxComponent.ɵfac = function CmacsCheckboxComponent_Factory(t) { return new (t || CmacsCheckboxComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CmacsCheckboxWrapperComponent, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8)); };
CmacsCheckboxComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsCheckboxComponent, selectors: [["", "cmacs-checkbox-v2", ""]], viewQuery: function CmacsCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 4, hostBindings: function CmacsCheckboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function CmacsCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("ant-checkbox-wrapper-checked", ctx.checked)("ant-checkbox-rtl", ctx.dir === "rtl");
    } }, inputs: { value: "value", theme: "theme", autoFocus: "autoFocus", disabled: "disabled", indeterminate: "indeterminate", checked: "checked" }, outputs: { checkedChange: "checkedChange" }, exportAs: ["cmacsCheckboxV2"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsCheckboxComponent),
                multi: true
            }
        ])], attrs: _c1, ngContentSelectors: _c2, decls: 7, vars: 11, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], ["contentElement", ""]], template: function CmacsCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span", 0);
        ɵɵelementStart(1, "input", 1, 2);
        ɵɵlistener("ngModelChange", function CmacsCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function CmacsCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
        ɵɵelementEnd();
        ɵɵelement(3, "span", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "span", null, 4);
        ɵɵprojection(6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-checkbox-checked", ctx.checked && !ctx.indeterminate)("ant-checkbox-disabled", ctx.disabled)("cmacs-dark-theme", ctx.theme === "dark")("ant-checkbox-indeterminate", ctx.indeterminate);
        ɵɵadvance(1);
        ɵɵproperty("checked", ctx.checked)("ngModel", ctx.checked)("disabled", ctx.disabled);
    } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], styles: [".ant-checkbox-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#2a7cff}.ant-checkbox-checked .ant-checkbox-inner{background-color:#fff;border-color:#dee0e5}.ant-checkbox-indeterminate .ant-checkbox-inner:after{width:10px;height:10px;background-color:#2a7cff}.ant-checkbox-disabled .ant-checkbox-inner{background-color:#f6f7fb;border-color:#dee0e5!important}.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner{border-color:#bec4cd}.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-checkbox-checked:hover .ant-checkbox-inner,.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-checked .ant-checkbox-inner{background-color:#0d1e3b;border-color:#2d3d5a}.cmacs-dark-theme .ant-checkbox-inner{background-color:#0d1e3b;border:1px solid #2d3d5a}.cmacs-dark-theme.ant-checkbox-indeterminate .ant-checkbox-inner:after{width:10px;height:10px;background-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-disabled .ant-checkbox-inner{background-color:#6a7693;border-color:#2d3d5a!important}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-wrapper:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox:hover .ant-checkbox-inner{border-color:#2d3d5a}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.cmacs-dark-theme.ant-checkbox-checked:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsCheckboxComponent.prototype, "autoFocus", void 0);
__decorate([
    InputBoolean()
], CmacsCheckboxComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsCheckboxComponent.prototype, "indeterminate", void 0);
__decorate([
    InputBoolean()
], CmacsCheckboxComponent.prototype, "checked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsCheckboxComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-checkbox-v2]',
                exportAs: 'cmacsCheckboxV2',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-checkbox.component.html',
                styleUrls: ['./cmacs-checkbox.component.css'],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsCheckboxComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-checkbox-wrapper-checked]': 'checked',
                    '[class.ant-checkbox-rtl]': `dir === 'rtl'`,
                    '(click)': 'hostClick($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: CmacsCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: ChangeDetectorRef }, { type: FocusMonitor }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], checkedChange: [{
            type: Output
        }], value: [{
            type: Input
        }], theme: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], indeterminate: [{
            type: Input
        }], checked: [{
            type: Input
        }] }); })();

function CmacsCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵlistener("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { const option_r1 = ctx.$implicit; return option_r1.checked = $event; })("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r3 = ɵɵnextContext(); return ctx_r3.onCheckedChange(option_r1, $event); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabled", option_r1.disabled || ctx_r0.disabled)("checked", option_r1.checked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r1.label);
} }
class CmacsCheckboxGroupComponent {
    constructor(elementRef, focusMonitor, cdr, renderer, directionality) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.directionality = directionality;
        // tslint:disable-next-line:no-any
        this.onChange = () => null;
        // tslint:disable-next-line:no-any
        this.onTouched = () => null;
        this.options = [];
        this.disabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    trackByOption(_index, option) {
        return option.value;
    }
    ngOnInit() {
        var _a;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.options = value;
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
}
CmacsCheckboxGroupComponent.ɵfac = function CmacsCheckboxGroupComponent_Factory(t) { return new (t || CmacsCheckboxGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8)); };
CmacsCheckboxGroupComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsCheckboxGroupComponent, selectors: [["cmacs-checkbox-group-v2"]], inputs: { disabled: "disabled" }, exportAs: ["cmacsCheckboxGroupV2"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsCheckboxGroupComponent),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["cmacs-checkbox-v2", "", 3, "disabled", "checked", "checkedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cmacs-checkbox-v2", "", 3, "disabled", "checked", "checkedChange"]], template: function CmacsCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [NgForOf, CmacsCheckboxComponent], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-checkbox-group-v2',
                exportAs: 'cmacsCheckboxGroupV2',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-checkbox-group.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsCheckboxGroupComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: FocusMonitor }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabled: [{
            type: Input
        }] }); })();

const _c0$2 = ["contentElement"];
const _c1$1 = ["cmacs-button", ""];
function CmacsButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 1);
} }
const _c2$1 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'button';
class CmacsButtonComponent {
    constructor(elementRef, cdr, renderer, nzConfigService, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this.block = false;
        this.ghost = false;
        this.search = false;
        this.loading = false;
        this.danger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.type = 'default';
        this.shape = null;
        this.size = 'default';
        this.action = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    insertSpan(nodes, renderer) {
        nodes.forEach(node => {
            if (node.nodeName === '#text') {
                const span = renderer.createElement('span');
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        });
    }
    assertIconOnly(element, renderer) {
        const listOfNode = Array.from(element.childNodes);
        const iconCount = listOfNode.filter(node => node.nodeName === 'I').length;
        const noText = listOfNode.every(node => node.nodeName !== '#text');
        const noSpan = listOfNode.every(node => node.nodeName !== 'SPAN');
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { loading, type } = changes;
        if (loading) {
            this.loading$.next(this.loading);
        }
    }
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
        this.imageWrapper();
    }
    imageWrapper() {
        const element = this.elementRef.nativeElement;
        const listOfNode = Array.from(element.childNodes);
        const iconList = listOfNode.filter(node => node.nodeName === 'I');
        iconList.forEach(icon => {
            this.renderer.addClass(icon, 'iconspan');
        });
    }
    ngAfterContentInit() {
        this.loading$
            .pipe(startWith(this.loading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$))
            .subscribe(loading => {
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    hideBtn() {
        this.elementRef.nativeElement.style.display = 'none';
    }
    showBtn() {
        this.elementRef.nativeElement.style.display = 'inline-block';
    }
    disabledBtn() {
        this.elementRef.nativeElement.disabled = true;
    }
}
CmacsButtonComponent.ɵfac = function CmacsButtonComponent_Factory(t) { return new (t || CmacsButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality, 8)); };
CmacsButtonComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsButtonComponent, selectors: [["button", "cmacs-button", ""], ["a", "cmacs-button", ""]], contentQueries: function CmacsButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NzIconDirective, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    } }, viewQuery: function CmacsButtonComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostVars: 36, hostBindings: function CmacsButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
        ɵɵclassProp("ant-btn-primary", ctx.type === "primary")("ant-btn-default", ctx.type === "default")("ant-btn-dashed", ctx.type === "dashed")("ant-btn-link", ctx.type === "link")("ant-btn-text", ctx.type === "text")("ant-btn-danger", ctx.type === "danger")("ant-btn-circle", ctx.shape === "circle")("ant-btn-round", ctx.shape === "round")("ant-btn-lg", ctx.size === "large")("ant-btn-sm", ctx.size === "small")("ant-btn-dangerous", ctx.danger)("ant-btn-loading", ctx.loading)("ant-btn-background-ghost", ctx.ghost)("ant-btn-block", ctx.block)("ant-input-search-button", ctx.search)("cmacs-btn-action", ctx.action)("ant-btn-rtl", ctx.dir === "rtl");
    } }, inputs: { block: "block", ghost: "ghost", search: "search", loading: "loading", danger: "danger", disabled: "disabled", tabIndex: "tabIndex", type: "type", shape: "shape", size: "size", action: "action" }, exportAs: ["cmacsButton"], features: [ɵɵNgOnChangesFeature], attrs: _c1$1, ngContentSelectors: _c2$1, decls: 2, vars: 1, consts: [["nz-icon", "", "type", "loading", 4, "ngIf"], ["nz-icon", "", "type", "loading"]], template: function CmacsButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CmacsButtonComponent_i_0_Template, 1, 0, "i", 0);
        ɵɵprojection(1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.loading);
    } }, directives: [NgIf, ɵNzTransitionPatchDirective], styles: [".ant-btn{font-size:14px;line-height:0;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px}.ant-btn-primary{background-color:#2a7cff;border:1px solid #2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover{border:none;color:#97a0ae;background-color:#f3f3f4;cursor:default}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default i,.ant-btn-primary i{font-size:16px;position:relative;height:16px;width:16px;vertical-align:middle;margin:2px}.ant-btn-default:not(.ant-btn-icon-only) i,.ant-btn-primary:not(.ant-btn-icon-only) i{margin-right:5px}.ant-btn-icon-only{vertical-align:unset!important}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-default[disabled],.ant-btn-default[disabled]:focus,.ant-btn-default[disabled]:hover{color:#97a0ae;background-color:#fff;border-color:#dee0e5;cursor:default}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none}.ant-btn-icon-only i{color:#656c79}.ant-btn-icon-only,.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{border:1px solid #dee0e5}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:focus i,.ant-btn-icon-only:enabled:hover i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):focus,.ant-btn-icon-only:not(.ant-btn-background-ghost):hover{background-color:#fff}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;cursor:default}.ant-btn-icon-only:disabled span i{color:#97a0ae}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "block", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "ghost", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "danger", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "disabled", void 0);
__decorate([
    WithConfig()
], CmacsButtonComponent.prototype, "size", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "action", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsButtonComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'button[cmacs-button], a[cmacs-button]',
                exportAs: 'cmacsButton',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-button.component.html',
                styleUrls: ['./cmacs-button.component.css'],
                host: {
                    '[class.ant-btn-primary]': `type === 'primary'`,
                    '[class.ant-btn-default]': `type === 'default'`,
                    '[class.ant-btn-dashed]': `type === 'dashed'`,
                    '[class.ant-btn-link]': `type === 'link'`,
                    '[class.ant-btn-text]': `type === 'text'`,
                    '[class.ant-btn-danger]': `type === 'danger'`,
                    '[class.ant-btn-circle]': `shape === 'circle'`,
                    '[class.ant-btn-round]': `shape === 'round'`,
                    '[class.ant-btn-lg]': `size === 'large'`,
                    '[class.ant-btn-sm]': `size === 'small'`,
                    '[class.ant-btn-dangerous]': `danger`,
                    '[class.ant-btn-loading]': `loading`,
                    '[class.ant-btn-background-ghost]': `ghost`,
                    '[class.ant-btn-block]': `block`,
                    '[class.ant-input-search-button]': `search`,
                    '[class.cmacs-btn-action]': `action`,
                    '[class.ant-btn-rtl]': `dir === 'rtl'`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: Renderer2 }, { type: NzConfigService }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzIconDirectiveElement: [{
            type: ContentChild,
            args: [NzIconDirective, { read: ElementRef }]
        }], block: [{
            type: Input
        }], ghost: [{
            type: Input
        }], search: [{
            type: Input
        }], loading: [{
            type: Input
        }], danger: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], type: [{
            type: Input
        }], shape: [{
            type: Input
        }], size: [{
            type: Input
        }], action: [{
            type: Input
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement']
        }] }); })();

function CmacsButtonGroupComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function CmacsButtonGroupComponent_button_0_Template_button_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.moveLeft(); });
    ɵɵelement(1, "i", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r0.isDisableLeft());
} }
function CmacsButtonGroupComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function CmacsButtonGroupComponent_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.moveRight(); });
    ɵɵelement(1, "i", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r1.isDisableRight());
} }
const _c0$3 = ["*"];
class CmacsButtonGroupComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.size = 'default';
        this.overlap = false;
        this.disabled = false;
        this.disabledNav = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.buttons = [];
        this.indexBtn = 0;
        this.elementRef.nativeElement.classList.add('ant-btn-group');
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.buttons = this.contentButtons.toArray();
        if (this.overlap) {
            for (let index = 1; index < this.buttons.length; index++) {
                this.buttons[index].hideBtn();
            }
        }
        if (this.disabled) {
            for (const iterator of this.buttons) {
                iterator.disabledBtn();
            }
        }
    }
    moveLeft() {
        this.buttons[this.indexBtn--].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    moveRight() {
        this.buttons[this.indexBtn++].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    isDisableLeft() {
        return this.indexBtn === 0 || this.disabled || this.disabledNav;
    }
    isDisableRight() {
        return this.indexBtn === this.buttons.length - 1 || this.disabled || this.disabledNav;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsButtonGroupComponent.ɵfac = function CmacsButtonGroupComponent_Factory(t) { return new (t || CmacsButtonGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8)); };
CmacsButtonGroupComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsButtonGroupComponent, selectors: [["cmacs-button-group"]], contentQueries: function CmacsButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CmacsButtonComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentButtons = _t);
    } }, hostVars: 6, hostBindings: function CmacsButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-btn-group-lg", ctx.size === "large")("ant-btn-group-sm", ctx.size === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
    } }, inputs: { size: "size", overlap: "overlap", disabled: "disabled", disabledNav: "disabledNav" }, exportAs: ["cmacsButtonGroup"], ngContentSelectors: _c0$3, decls: 3, vars: 2, consts: [["cmacs-button", "", 3, "disabled", "click", 4, "ngIf"], ["cmacs-button", "", 3, "disabled", "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "iconArrowLarge-Chevron-Right"]], template: function CmacsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CmacsButtonGroupComponent_button_0_Template, 2, 1, "button", 0);
        ɵɵprojection(1);
        ɵɵtemplate(2, CmacsButtonGroupComponent_button_2_Template, 2, 1, "button", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.overlap);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.overlap);
    } }, directives: [NgIf, CmacsButtonComponent], styles: [""], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "overlap", void 0);
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "disabledNav", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsButtonGroupComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-button-group',
                exportAs: 'cmacsButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-btn-group-lg]': `size === 'large'`,
                    '[class.ant-btn-group-sm]': `size === 'small'`,
                    '[class.ant-btn-group-rtl]': `dir === 'rtl'`
                },
                styleUrls: ['./cmacs-button-group.component.css'],
                templateUrl: './cmacs-button-group.component.html'
            }]
    }], function () { return [{ type: ElementRef }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { size: [{
            type: Input
        }], overlap: [{
            type: Input
        }], disabled: [{
            type: Input
        }], disabledNav: [{
            type: Input
        }], contentButtons: [{
            type: ContentChildren,
            args: [CmacsButtonComponent]
        }] }); })();

function CmacsColorPickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵlistener("click", function CmacsColorPickerComponent_ng_container_0_Template_div_click_2_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.setColor("transparent"); });
    ɵɵelement(3, "div", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", "transparent" === ctx_r0.color);
} }
function CmacsColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function CmacsColorPickerComponent_div_2_Template_div_click_0_listener() { ɵɵrestoreView(_r6); const $color_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.setColor($color_r4); });
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const $color_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", $color_r4 === ctx_r1.color);
    ɵɵadvance(1);
    ɵɵstyleProp("background-color", $color_r4)("border-color", $color_r4 === "#ffffff" ? "#dee0e5" : "transparent");
} }
class CmacsColorPickerComponent {
    constructor(ref, cdr) {
        this.ref = ref;
        this.cdr = cdr;
        this.type = 'basic';
        this.colorChange = new EventEmitter();
        this.width = 0;
        this.basicColorList = [
            '#000000',
            '#ffffff',
            '#cc2229',
            '#f6503c',
            '#ffa234',
            '#fff100',
            '#00ce7d',
            '#009fe3',
            '#2a7cff',
            '#a100cd',
            '#cf1384',
            '#794c18',
            '#bec4cd',
            '#656c79'
        ];
    }
    setColor(color) {
        this.color = color;
        this.colorChange.emit(color);
    }
    isColorPickerType(type) {
        return this.type === type;
    }
    ngAfterViewInit() {
        this.width = this.ref.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    }
}
CmacsColorPickerComponent.ɵfac = function CmacsColorPickerComponent_Factory(t) { return new (t || CmacsColorPickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
CmacsColorPickerComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsColorPickerComponent, selectors: [["cmacs-color-picker"]], hostAttrs: [1, "cmacs-color-picker"], inputs: { type: "type", color: "color" }, outputs: { colorChange: "colorChange" }, exportAs: ["cmacsColorPicker"], decls: 3, vars: 4, consts: [[4, "ngIf"], [2, "display", "inline-block", "float", "right"], ["class", "cmacs-color-picker-color-wrapper", 3, "cmacs-color-picker-color-wrapper-selected", "click", 4, "ngFor", "ngForOf"], [2, "width", "18px", "margin-right", "4px", "display", "inline-block"], [1, "cmacs-color-picker-color-wrapper", 3, "click"], [1, "cmacs-color-picker-color-transparent"], [1, "cmacs-color-picker-color"]], template: function CmacsColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsColorPickerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, CmacsColorPickerComponent_div_2_Template, 2, 6, "div", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isColorPickerType("basicWithTransparent"));
        ɵɵadvance(1);
        ɵɵstyleProp("width", ctx.isColorPickerType("basicWithTransparent") ? ctx.width - 22 + "px" : "inherit");
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.basicColorList);
    } }, directives: [NgIf, NgForOf], styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent:before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsColorPickerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-color-picker',
                exportAs: 'cmacsColorPicker',
                templateUrl: './cmacs-color-picker.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'cmacs-color-picker'
                },
                styleUrls: ['./cmacs-color-picker.component.css'],
                styles: [
                    `
      cmacs-color-picker {
        display: block;
      }
    `
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], color: [{
            type: Input
        }], colorChange: [{
            type: Output
        }] }); })();

class NzSliderService {
    constructor() {
        this.isDragging = false;
    }
}
NzSliderService.ɵfac = function NzSliderService_Factory(t) { return new (t || NzSliderService)(); };
NzSliderService.ɵprov = ɵɵdefineInjectable({ token: NzSliderService, factory: NzSliderService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzSliderService, [{
        type: Injectable
    }], null, null); })();

const _c0$4 = ["handle"];
class CmacsSliderHandleComponent {
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.dir = 'ltr';
        this.style = {};
        this.enterHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse, dir } = changes;
        if (offset || reverse || dir) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
        }
    }
    updateStyle() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const offset = this.offset;
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: `translateX(${reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-'}50%)` });
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
CmacsSliderHandleComponent.ɵfac = function CmacsSliderHandleComponent_Factory(t) { return new (t || CmacsSliderHandleComponent)(ɵɵdirectiveInject(NzSliderService), ɵɵdirectiveInject(ChangeDetectorRef)); };
CmacsSliderHandleComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSliderHandleComponent, selectors: [["cmacs-slider-handle"]], viewQuery: function CmacsSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$4, 1);
        ɵɵviewQuery(NzTooltipDirective, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handleEl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function CmacsSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mouseenter", function CmacsSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function CmacsSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter", active: "active", dir: "dir" }, exportAs: ["cmacsSliderHandle"], features: [ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function CmacsSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0, 1);
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [NzTooltipDirective, NgStyle], styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderHandleComponent.prototype, "active", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSliderHandleComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-handle',
                exportAs: 'cmacsSliderHandle',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-handle.component.html',
                styleUrls: ['./cmacs-slider-handle.component.css'],
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: NzSliderService }, { type: ChangeDetectorRef }]; }, { handleEl: [{
            type: ViewChild,
            args: ['handle', { static: false }]
        }], tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], vertical: [{
            type: Input
        }], reverse: [{
            type: Input
        }], offset: [{
            type: Input
        }], value: [{
            type: Input
        }], tooltipVisible: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipFormatter: [{
            type: Input
        }], active: [{
            type: Input
        }], dir: [{
            type: Input
        }] }); })();

function CmacsSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, ɵɵsanitizeHtml);
} }
class CmacsSliderMarksComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.max - this.min;
        this.marks = this.marksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        const markValue = this.reverse ? this.max + this.min - value : value;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((markValue - this.min) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((markValue - this.min) / range) * 100}%`
            };
        }
        if (isConfigObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                mark.active = isActive;
            });
        }
    }
}
CmacsSliderMarksComponent.ɵfac = function CmacsSliderMarksComponent_Factory(t) { return new (t || CmacsSliderMarksComponent)(); };
CmacsSliderMarksComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSliderMarksComponent, selectors: [["cmacs-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderMarks"], features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function CmacsSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, CmacsSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [NgForOf, NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-slider-marks',
                exportAs: 'cmacsSliderMarks',
                templateUrl: './cmacs-slider-marks.component.html'
            }]
    }], null, { lowerBound: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], marksArray: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }], reverse: [{
            type: Input
        }] }); })();
function isConfigObject(config) {
    return typeof config !== 'string';
}

function CmacsSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const mark_r1 = ctx.$implicit;
    ɵɵclassProp("ant-slider-dot-active", mark_r1.active);
    ɵɵproperty("ngStyle", mark_r1.style);
} }
class CmacsSliderStepComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.steps = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildSteps();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map(mark => {
            const { value, config } = mark;
            let offset = mark.offset;
            const range = this.max - this.min;
            if (this.reverse) {
                offset = ((this.max - value) / range) * 100;
            }
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        });
    }
    togglePointActive() {
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                step.active = isActive;
            });
        }
    }
}
CmacsSliderStepComponent.ɵfac = function CmacsSliderStepComponent_Factory(t) { return new (t || CmacsSliderStepComponent)(); };
CmacsSliderStepComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSliderStepComponent, selectors: [["cmacs-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderStep"], features: [ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function CmacsSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, CmacsSliderStepComponent_span_1_Template, 1, 3, "span", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [NgForOf, NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSliderStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-step',
                exportAs: 'cmacsSliderStep',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-step.component.html'
            }]
    }], null, { lowerBound: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], marksArray: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }], reverse: [{
            type: Input
        }] }); })();

class CmacsSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.reverse = false;
        this.dir = 'ltr';
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    ngOnChanges() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const visibility = this.included ? 'visible' : 'hidden';
        const offset = this.offset;
        const length = this.length;
        const positonStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                height: `${length}%`,
                visibility
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: `${length}%`, visibility });
        this.style = positonStyle;
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
CmacsSliderTrackComponent.ɵfac = function CmacsSliderTrackComponent_Factory(t) { return new (t || CmacsSliderTrackComponent)(); };
CmacsSliderTrackComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSliderTrackComponent, selectors: [["cmacs-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["cmacsSliderTrack"], features: [ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function CmacsSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [NgStyle], styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputNumber()
], CmacsSliderTrackComponent.prototype, "offset", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "reverse", void 0);
__decorate([
    InputNumber()
], CmacsSliderTrackComponent.prototype, "length", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-track',
                exportAs: 'cmacsSliderTrack',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-track.component.html',
                styleUrls: ['./cmacs-slider-track.component.css']
            }]
    }], null, { offset: [{
            type: Input
        }], reverse: [{
            type: Input
        }], dir: [{
            type: Input
        }], length: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }] }); })();

const _c0$5 = ["slider"];
function CmacsSliderComponent_cmacs_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cmacs-slider-step", 7);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("min", ctx_r1.min)("max", ctx_r1.max)("vertical", ctx_r1.vertical)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.included)("reverse", ctx_r1.reverse);
} }
function CmacsSliderComponent_cmacs_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cmacs-slider-handle", 8);
} if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("vertical", ctx_r2.vertical)("reverse", ctx_r2.reverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.tipFormatter)("tooltipVisible", ctx_r2.tooltipVisible)("tooltipPlacement", ctx_r2.tooltipPlacement)("dir", ctx_r2.dir);
} }
function CmacsSliderComponent_cmacs_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cmacs-slider-marks", 9);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("vertical", ctx_r3.vertical)("min", ctx_r3.min)("max", ctx_r3.max)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.included)("reverse", ctx_r3.reverse);
} }
class CmacsSliderComponent {
    constructor(sliderService, cdr, platform, directionality) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.directionality = directionality;
        this.disabled = false;
        this.dots = false;
        this.included = true;
        this.range = false;
        this.vertical = false;
        this.reverse = false;
        this.marks = null;
        this.max = 100;
        this.min = 0;
        this.step = 1;
        this.tooltipVisible = 'default';
        this.tooltipPlacement = 'top';
        this.onAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.handles = []; // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        });
        this.handles = generateHandlers(this.range ? 2 : 1);
        this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.disabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnChanges(changes) {
        const { disabled, marks, range } = changes;
        if (disabled && !disabled.firstChange) {
            this.toggleDragDisabled(disabled.currentValue);
        }
        else if (marks && !marks.firstChange) {
            this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        }
        else if (range && !range.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnDestroy() {
        this.unsubscribeDrag();
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e) {
        const code = e.keyCode;
        const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
        const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        let step = (isDecrease ? -this.step : this.step) * (this.reverse ? -1 : 1);
        step = this.dir === 'rtl' ? step * -1 : step;
        const newVal = this.range ? this.value[this.activeValueIndex] + step : this.value + step;
        this.setActiveValue(ensureNumberInRange(newVal, this.min, this.max));
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueRange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    setActiveValue(pointerValue) {
        if (isValueRange(this.value)) {
            const newValue = [...this.value];
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
      * Update track and handles' position and length.
      */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.range ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    getLogicalValue(value) {
        if (this.reverse) {
            if (!this.vertical && this.dir === 'rtl') {
                return value;
            }
            return this.max - value + this.min;
        }
        if (!this.vertical && this.dir === 'rtl') {
            return this.max - value + this.min;
        }
        return value;
    }
    onDragEnd() {
        this.onAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        const sliderDOM = this.slider.nativeElement;
        const orientField = this.vertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
        });
        this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = merge(mouse.end$, touch.end$);
    }
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    toggleDragMoving(movable) {
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.max - this.min) * (this.vertical ? 1 - ratio : ratio) + this.min;
        const points = this.marks === null
            ? []
            : Object.keys(this.marks)
                .map(parseFloat)
                .sort((a, b) => a - b);
        if (this.step !== 0 && !this.dots) {
            const closestOne = Math.round(val / this.step) * this.step;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
        return this.step === 0 ? closest : parseFloat(closest.toFixed(getPrecision(this.step)));
    }
    valueToOffset(value) {
        return getPercent(this.min, this.max, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = getElementOffset(this.slider.nativeElement);
        return this.vertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.slider.nativeElement;
        return this.vertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        if (!value) {
            return this.range ? [this.min, this.max] : this.min;
        }
        else if (assertValueValid(value, this.range)) {
            return isValueRange(value)
                ? value.map(val => ensureNumberInRange(val, this.min, this.max))
                : ensureNumberInRange(value, this.min, this.max);
        }
        else {
            return this.defaultValue ? this.defaultValue : this.range ? [this.min, this.max] : this.min;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            const mark = marks[key];
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.min && val <= this.max) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
CmacsSliderComponent.ɵfac = function CmacsSliderComponent_Factory(t) { return new (t || CmacsSliderComponent)(ɵɵdirectiveInject(NzSliderService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Directionality, 8)); };
CmacsSliderComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSliderComponent, selectors: [["cmacs-slider"]], viewQuery: function CmacsSliderComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$5, 3);
        ɵɵviewQuery(CmacsSliderHandleComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slider = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function CmacsSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function CmacsSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { disabled: "disabled", dots: "dots", included: "included", range: "range", vertical: "vertical", reverse: "reverse", defaultValue: "defaultValue", marks: "marks", max: "max", min: "min", step: "step", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tipFormatter: "tipFormatter" }, outputs: { onAfterChange: "onAfterChange" }, exportAs: ["cmacsSlider"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSliderComponent),
                multi: true
            },
            NzSliderService
        ]), ɵɵNgOnChangesFeature], decls: 7, vars: 17, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "reverse", "dir", "length"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"]], template: function CmacsSliderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵelement(2, "div", 2);
        ɵɵelement(3, "cmacs-slider-track", 3);
        ɵɵtemplate(4, CmacsSliderComponent_cmacs_slider_step_4_Template, 1, 8, "cmacs-slider-step", 4);
        ɵɵtemplate(5, CmacsSliderComponent_cmacs_slider_handle_5_Template, 1, 9, "cmacs-slider-handle", 5);
        ɵɵtemplate(6, CmacsSliderComponent_cmacs_slider_marks_6_Template, 1, 8, "cmacs-slider-marks", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.disabled)("ant-slider-vertical", ctx.vertical)("ant-slider-with-marks", ctx.marksArray);
        ɵɵadvance(3);
        ɵɵproperty("vertical", ctx.vertical)("included", ctx.included)("offset", ctx.track.offset)("reverse", ctx.reverse)("dir", ctx.dir)("length", ctx.track.length);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.marksArray);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.handles);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.marksArray);
    } }, directives: [CmacsSliderTrackComponent, NgIf, NgForOf, CmacsSliderStepComponent, CmacsSliderHandleComponent, CmacsSliderMarksComponent], styles: [".ant-slider-rail{height:3px;border-radius:100px;background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "dots", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "included", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "range", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "reverse", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "min", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "step", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSliderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider',
                exportAs: 'cmacsSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSliderComponent),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                templateUrl: './cmacs-slider.component.html',
                styleUrls: ['./cmacs-slider.component.css']
            }]
    }], function () { return [{ type: NzSliderService }, { type: ChangeDetectorRef }, { type: Platform }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { slider: [{
            type: ViewChild,
            args: ['slider', { static: true }]
        }], handlerComponents: [{
            type: ViewChildren,
            args: [CmacsSliderHandleComponent]
        }], disabled: [{
            type: Input
        }], dots: [{
            type: Input
        }], included: [{
            type: Input
        }], range: [{
            type: Input
        }], vertical: [{
            type: Input
        }], reverse: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], marks: [{
            type: Input
        }], max: [{
            type: Input
        }], min: [{
            type: Input
        }], step: [{
            type: Input
        }], tooltipVisible: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tipFormatter: [{
            type: Input
        }], onAfterChange: [{
            type: Output
        }] }); })();
function getValueTypeNotMatchError() {
    return new Error(`The "range" can't match the "ngModel"'s type, please check these properties: "range", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map(() => ({ offset: null, value: null, active: false }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(v => isNaN(v)))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.range` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}

class NzRadioService {
    constructor() {
        this.selected$ = new ReplaySubject(1);
        this.touched$ = new Subject();
        this.disabled$ = new ReplaySubject(1);
        this.name$ = new ReplaySubject(1);
    }
    touch() {
        this.touched$.next();
    }
    select(value) {
        this.selected$.next(value);
    }
    setDisabled(value) {
        this.disabled$.next(value);
    }
    setName(value) {
        this.name$.next(value);
    }
}
NzRadioService.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); };
NzRadioService.ɵprov = ɵɵdefineInjectable({ token: NzRadioService, factory: NzRadioService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzRadioService, [{
        type: Injectable
    }], null, null); })();

const _c0$6 = ["*"];
class CmacsRadioGroupComponent {
    constructor(cdr, nzRadioService, elementRef, directionality) {
        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.value = null;
        this.destroy$ = new Subject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = false;
        this.buttonStyle = 'outline';
        this.size = 'default';
        this.name = null;
        this.dir = 'ltr';
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-radio-group');
    }
    ngOnInit() {
        var _a;
        this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            if (this.value !== value) {
                this.value = value;
                this.onChange(this.value);
            }
        });
        this.nzRadioService.touched$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            Promise.resolve().then(() => this.onTouched());
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzName } = changes;
        if (nzDisabled) {
            this.nzRadioService.setDisabled(this.disabled);
        }
        if (nzName) {
            this.nzRadioService.setName(this.name);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.value = value;
        this.nzRadioService.select(value);
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
        this.nzRadioService.setDisabled(isDisabled);
        this.cdr.markForCheck();
    }
}
CmacsRadioGroupComponent.ɵfac = function CmacsRadioGroupComponent_Factory(t) { return new (t || CmacsRadioGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzRadioService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8)); };
CmacsRadioGroupComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsRadioGroupComponent, selectors: [["cmacs-radio-group"]], hostVars: 8, hostBindings: function CmacsRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-radio-group-large", ctx.size === "large")("ant-radio-group-small", ctx.size === "small")("ant-radio-group-solid", ctx.buttonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
    } }, inputs: { disabled: "disabled", buttonStyle: "buttonStyle", size: "size", name: "name" }, exportAs: ["cmacsRadioGroup"], features: [ɵɵProvidersFeature([
            NzRadioService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsRadioGroupComponent),
                multi: true
            }
        ]), ɵɵNgOnChangesFeature], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function CmacsRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsRadioGroupComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-radio-group',
                exportAs: 'cmacsRadioGroup',
                preserveWhitespaces: false,
                templateUrl: './cmacs-radio-group.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzRadioService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsRadioGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': `size === 'large'`,
                    '[class.ant-radio-group-small]': `size === 'small'`,
                    '[class.ant-radio-group-solid]': `buttonStyle === 'solid'`,
                    '[class.ant-radio-group-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: NzRadioService }, { type: ElementRef }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabled: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }], size: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();

class CmacsRadioButtonDirective {
}
CmacsRadioButtonDirective.ɵfac = function CmacsRadioButtonDirective_Factory(t) { return new (t || CmacsRadioButtonDirective)(); };
CmacsRadioButtonDirective.ɵdir = ɵɵdefineDirective({ type: CmacsRadioButtonDirective, selectors: [["", "cmacs-radio-button", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsRadioButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-radio-button]'
            }]
    }], null, null); })();

const _c0$7 = ["inputElement"];
const _c1$2 = ["cmacs-radio", ""];
const _c2$2 = ["*"];
class CmacsRadioComponent {
    constructor(elementRef, cdr, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.value = null;
        this.disabled = false;
        this.autoFocus = false;
        this.dir = 'ltr';
    }
    /* tslint:disable-next-line:no-any */
    onHostClick(event) {
        /** prevent label click triggered twice. **/
        event.stopPropagation();
        event.preventDefault();
        if (!this.disabled && !this.isChecked) {
            if (this.nzRadioService) {
                this.nzRadioService.select(this.value);
            }
            if (this.isNgModel) {
                this.isChecked = true;
                this.onChange(true);
            }
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
        var _a;
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe(name => {
                this.name = name;
                this.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe(disabled => {
                this.disabled = disabled;
                this.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                this.isChecked = this.value === value;
                this.cdr.markForCheck();
            });
        }
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
CmacsRadioComponent.ɵfac = function CmacsRadioComponent_Factory(t) { return new (t || CmacsRadioComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzRadioService, 8), ɵɵdirectiveInject(CmacsRadioButtonDirective, 8)); };
CmacsRadioComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsRadioComponent, selectors: [["", "cmacs-radio", ""], ["", "cmacs-radio-button", ""]], viewQuery: function CmacsRadioComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$7, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, hostVars: 16, hostBindings: function CmacsRadioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function CmacsRadioComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } if (rf & 2) {
        ɵɵclassProp("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.disabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
    } }, inputs: { value: "value", disabled: "disabled", autoFocus: "autoFocus" }, exportAs: ["cmacsRadio"], features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsRadioComponent),
                multi: true
            }
        ])], attrs: _c1$2, ngContentSelectors: _c2$2, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]], template: function CmacsRadioComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "span");
        ɵɵelement(1, "input", 0, 1);
        ɵɵelement(3, "span");
        ɵɵelementEnd();
        ɵɵelementStart(4, "span");
        ɵɵprojection(5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.disabled && ctx.isRadioButton);
        ɵɵadvance(1);
        ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
        ɵɵproperty("disabled", ctx.disabled)("checked", ctx.isChecked);
        ɵɵattribute("autofocus", ctx.autoFocus ? "autofocus" : null)("name", ctx.name);
        ɵɵadvance(2);
        ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
    } }, styles: [".ant-radio-inner:after{top:12%;left:13%;width:11px;height:11px;overflow:visible;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus,.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-radio-wrapper.ant-radio-wrapper-disabled{cursor:default}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsRadioComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsRadioComponent.prototype, "autoFocus", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsRadioComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: '[cmacs-radio],[cmacs-radio-button]',
                exportAs: 'cmacsRadio',
                preserveWhitespaces: false,
                templateUrl: './cmacs-radio.component.html',
                styleUrls: ['./cmacs-radio.component.css'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsRadioComponent),
                        multi: true
                    }
                ],
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-radio-wrapper]': '!isRadioButton',
                    '[class.ant-radio-button-wrapper]': 'isRadioButton',
                    '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                    '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                    '[class.ant-radio-wrapper-disabled]': 'disabled && !isRadioButton',
                    '[class.ant-radio-button-wrapper-disabled]': 'disabled && isRadioButton',
                    '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
                    '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`,
                    '(click)': 'onHostClick($event)'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }, { type: FocusMonitor }, { type: Directionality, decorators: [{
                type: Optional
            }] }, { type: NzRadioService, decorators: [{
                type: Optional
            }] }, { type: CmacsRadioButtonDirective, decorators: [{
                type: Optional
            }] }]; }, { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: false }]
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], autoFocus: [{
            type: Input
        }] }); })();

function CmacsOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c0$8 = ["*"];
class CmacsOptionComponent {
    constructor() {
        this.changes = new Subject();
        this.nzDisabled = false;
        this.nzCustomContent = false;
    }
    ngOnChanges() {
        this.changes.next();
    }
}
CmacsOptionComponent.ɵfac = function CmacsOptionComponent_Factory(t) { return new (t || CmacsOptionComponent)(); };
CmacsOptionComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsOptionComponent, selectors: [["cmacs-option"]], viewQuery: function CmacsOptionComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(TemplateRef, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { nzLabel: ["label", "nzLabel"], divider: "divider", extendedData: "extendedData", nzValue: ["value", "nzValue"], nzDisabled: ["disabled", "nzDisabled"], nzCustomContent: ["customContent", "nzCustomContent"] }, exportAs: ["cmacsOption"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function CmacsOptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CmacsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsOptionComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-option',
                exportAs: 'cmacsOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-option.component.html'
            }]
    }], null, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }], nzLabel: [{
            type: Input,
            args: ['label']
        }], divider: [{
            type: Input,
            args: ['divider']
        }], extendedData: [{
            type: Input,
            args: ['extendedData']
        }], nzValue: [{
            type: Input,
            args: ['value']
        }], nzDisabled: [{
            type: Input,
            args: ['disabled']
        }], nzCustomContent: [{
            type: Input,
            args: ['customContent']
        }] }); })();

class NzFilterOptionPipe {
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(o => filterOption(searchValue, o));
        }
    }
}
NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
NzFilterOptionPipe.ɵpipe = ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzFilterOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterOption' }]
    }], null, null); })();
class NzFilterGroupOptionPipe {
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(searchValue, o));
            });
        }
    }
}
NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
NzFilterGroupOptionPipe.ɵpipe = ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterGroupOption' }]
    }], null, null); })();
function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

class CmacsSelectService {
    constructor() {
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.tagsOut = false;
        this.cmacsEditable = false;
        this.userDropdown = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (o1, o2) => o1 === o2;
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // ContentChildren Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.editedValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.editedValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(
        //distinctUntilChanged(),
        share(), tap(() => this.clearInput()));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(data => data.value));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(item => item.emit), map(data => {
            const selectedList = data.value;
            let modelValue = null; // tslint:disable-line:no-any
            if (this.isSingleMode) {
                if (selectedList.length) {
                    if (this.userDropdown) {
                        modelValue = selectedList;
                    }
                    else {
                        modelValue = selectedList[0];
                    }
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        }));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        }));
        this.editedValue$ = this.editedValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(value => {
            this.editedValue = value;
        }));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // flat ViewChildren
        this.listOfTemplateOption = [];
        // tag option
        this.listOfTagOption = [];
        // tag option concat template option
        this.listOfTagAndTemplateOption = [];
        // ViewChildren
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // display in top control
        this.listOfCachedSelectedOption = [];
        // selected value or ViewChildren change
        this.valueOrOption$ = combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(tap(data => {
            this.listOfSelectedValue = data[0];
            this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()], []));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.editedValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                const targetValue = !this.userDropdown ? listOfSelectedValue.find(o => this.compareWith(o, option.nzValue)) : listOfSelectedValue.find(o => this.compareWith(o.value, option.nzValue));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    if (!this.userDropdown) {
                        listOfSelectedValue.push(option.nzValue);
                    }
                    else {
                        listOfSelectedValue.push(option.extendedData);
                    }
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                if (this.userDropdown) {
                    listOfSelectedValue = [option.extendedData];
                }
                else {
                    listOfSelectedValue = [option.nzValue];
                }
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if ((this.isSingleMode && !this.cmacsEditable) || this.isTagsSingleSelectMode || this.userDropdown) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            const selectedOption = this.listOfTemplateOption.find(o => this.compareWith(o.nzValue, this.listOfSelectedValue[0]));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach(v => {
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                const option = listOfMixedOption.find(o => this.compareWith(o.nzValue, v));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            });
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    updateListOfTagOption() {
        if (this.isTagsMode || this.isTagsSingleSelectMode) {
            const listOfMissValue = this.listOfSelectedValue.filter(value => !this.listOfTemplateOption.find(o => this.compareWith(o.nzValue, value)));
            this.listOfTagOption = listOfMissValue.map(value => {
                const nzOptionComponent = new CmacsOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            });
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    updateAddTagOption() {
        const isMatch = this.listOfTagAndTemplateOption.find(item => item.nzLabel === this.searchValue);
        if ((this.isTagsMode || this.isTagsSingleSelectMode) && this.searchValue && !isMatch) {
            const option = new CmacsOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        this.isShowNotFound = !this.isTagsMode && !this.isTagsSingleSelectMode && !this.listOfFilteredOption.length;
    }
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    tokenSeparate(inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    splitBySeparators(str, separators) {
        const reg = new RegExp(`[${separators.join()}]`);
        const array = str.split(reg).filter(token => token);
        return Array.from(new Set(array));
    }
    resetActivatedOptionIfNeeded() {
        const resetActivatedOption = () => {
            const activatedOption = this.listOfFilteredOption.find(item => this.compareWith(item.nzValue, this.listOfSelectedValue[0]));
            this.updateActivatedOption(activatedOption || null);
        };
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find(item => this.compareWith(item.nzValue, this.activatedOption.nzValue)) ||
                !this.listOfSelectedValue.find(item => this.compareWith(item, this.activatedOption.nzValue))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    updateEditedValue(value) {
        this.editedValueRaw$.next(value);
    }
    updateSelectedValueByLabelList(listOfLabel) {
        const listOfSelectedValue = [...this.listOfSelectedValue];
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter(item => listOfLabel.indexOf(item.nzLabel) !== -1)
            .map(item => item.nzValue)
            .filter(item => !isNotNil(this.listOfSelectedValue.find(v => this.compareWith(v, item))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            const listOfUnMatchOptionValue = listOfLabel.filter(label => this.listOfTagAndTemplateOption.map(item => item.nzLabel).indexOf(label) === -1);
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    onKeyDown(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        const listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter(item => !item.nzDisabled);
        const activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex(item => item === this.activatedOption);
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if ((this.isMultipleOrTags || this.isTagsSingleSelectMode) && !eventTarget.value && this.listOfCachedSelectedOption.length && !this.tagsOut) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    }
    // tslint:disable-next-line:no-any
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        const listOfSelectedValue = this.listOfSelectedValue.filter(item => !this.compareWith(item, option.nzValue));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    check() {
        this.checkRaw$.next();
    }
    get isSingleMode() {
        return this.mode === 'default';
    }
    get isTagsMode() {
        return this.mode === 'tags';
    }
    get isTagsSingleSelectMode() {
        return this.mode === 'tagsSingleSelect';
    }
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
CmacsSelectService.ɵfac = function CmacsSelectService_Factory(t) { return new (t || CmacsSelectService)(); };
CmacsSelectService.ɵprov = ɵɵdefineInjectable({ token: CmacsSelectService, factory: CmacsSelectService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSelectService, [{
        type: Injectable
    }], null, null); })();

class CmacsSelectUnselectableDirective {
}
CmacsSelectUnselectableDirective.ɵfac = function CmacsSelectUnselectableDirective_Factory(t) { return new (t || CmacsSelectUnselectableDirective)(); };
CmacsSelectUnselectableDirective.ɵdir = ɵɵdefineDirective({ type: CmacsSelectUnselectableDirective, selectors: [["", "cmacs-select-unselectable", ""]], hostVars: 3, hostBindings: function CmacsSelectUnselectableDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("unselectable", "unselectable");
        ɵɵstyleProp("user-select", "none");
    } }, exportAs: ["cmacsSelectUnselectable"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSelectUnselectableDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-select-unselectable]',
                exportAs: 'cmacsSelectUnselectable',
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }]
    }], null, null); })();

const _c0$9 = ["inputElement"];
const _c1$3 = ["inputElementCustom"];
const _c2$3 = ["cmacs-select-top-control", ""];
function CmacsSelectTopControlComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 9, 10);
    ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.isComposing = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener() { ɵɵrestoreView(_r14); const ctx_r15 = ɵɵnextContext(); return ctx_r15.isComposing = false; })("input", function CmacsSelectTopControlComponent_ng_template_0_Template_input_input_0_listener() { ɵɵrestoreView(_r14); const ctx_r16 = ɵɵnextContext(); return ctx_r16.updateWidth(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r17 = ɵɵnextContext(); return ctx_r17.setInputValue($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r1.getSelectedValues().length && !ctx_r1.tagsOut);
    ɵɵproperty("ngStyle", ctx_r1.showCustomSearchStyle)("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 9, 11);
    ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionstart_0_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(); return ctx_r19.isComposingCustom = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionend_0_listener() { ɵɵrestoreView(_r20); const ctx_r21 = ɵɵnextContext(); return ctx_r21.isComposingCustom = false; })("input", function CmacsSelectTopControlComponent_ng_template_2_Template_input_input_0_listener() { ɵɵrestoreView(_r20); const ctx_r22 = ɵɵnextContext(); return ctx_r22.updateWidthCustom(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { ɵɵrestoreView(_r20); const ctx_r23 = ɵɵnextContext(); return ctx_r23.setInputValueCustom($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r3.getSelectedValues().length);
    ɵɵproperty("ngStyle", ctx_r3.showCustomSearchStyle)("ngModel", ctx_r3.inputValueEditableMode)("disabled", ctx_r3.nzSelectService.disabled);
} }
function CmacsSelectTopControlComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵelement(1, "i", 13);
    ɵɵelementEnd();
} }
function CmacsSelectTopControlComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵstyleProp("display", ctx_r5.placeHolderDisplay);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.nzPlaceHolder);
} }
function CmacsSelectTopControlComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r24.selectedValueStyle);
    ɵɵattribute("title", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel, " ");
} }
function CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "div", 19);
    ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template, 0, 0, "ng-template", 20);
    ɵɵelementStart(3, "span", 21);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    const _r0 = ɵɵreference(1);
    ɵɵstyleProp("display", ctx_r25.nzOpen || ctx_r25.nzSelectService.listOfCachedSelectedOption.length ? "block" : "none");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r0);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r25.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵelementStart(1, "div", 19);
    ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template, 0, 0, "ng-template", 20);
    ɵɵelementStart(3, "span", 21);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(3);
    ɵɵstyleProp("display", ctx_r26.nzOpen ? "block" : "none");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r26.inputValue, "\u00A0");
} }
function CmacsSelectTopControlComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_container_7_div_1_Template, 2, 3, "div", 15);
    ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_Template, 5, 4, "div", 16);
    ɵɵtemplate(3, CmacsSelectTopControlComponent_ng_container_7_div_3_Template, 5, 4, "div", 16);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.userDropdown && ctx_r6.nzSelectService.listOfCachedSelectedOption.length && ctx_r6.nzSelectService.listOfSelectedValue.length);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.showCmacsSearch);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.cmacsEditable);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 29);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 27);
    ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_click_0_listener($event) { ɵɵrestoreView(_r39); const option_r33 = ɵɵnextContext().$implicit; const ctx_r37 = ɵɵnextContext(3); return ctx_r37.removeSelectedValue(option_r33, $event); });
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template, 1, 0, "i", 28);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r34.nzRemoveIcon)("ngIfElse", ctx_r34.nzRemoveIcon);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 24);
    ɵɵelementStart(2, "div", 25);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template, 2, 2, "span", 26);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    const ctx_r31 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-selection__choice__disabled", option_r33.nzDisabled);
    ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r31.noAnimation == null ? null : ctx_r31.noAnimation.nzNoAnimation);
    ɵɵattribute("title", option_r33.nzLabel);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r33.nzLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !option_r33.nzDisabled);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0) { return { $implicit: a0 }; };
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 30);
    ɵɵpipe(2, "slice");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r40.nzMaxTagPlaceholder)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, ɵɵpipeBind2(2, 2, ctx_r40.nzSelectService.listOfSelectedValue, ctx_r40.nzMaxTagCount)));
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" + ", ctx_r41.nzSelectService.listOfCachedSelectedOption.length - ctx_r41.nzMaxTagCount, " ... ");
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template, 3, 7, "ng-container", 5);
    ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(3);
    ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r32.noAnimation == null ? null : ctx_r32.noAnimation.nzNoAnimation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r32.nzMaxTagPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r32.nzMaxTagPlaceholder);
} }
function CmacsSelectTopControlComponent_ul_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 22);
    ɵɵpipe(2, "slice");
    ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template, 4, 4, "li", 23);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(2, 3, ctx_r29.nzSelectService.listOfCachedSelectedOption, 0, ctx_r29.nzMaxTagCount))("ngForTrackBy", ctx_r29.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r29.nzSelectService.listOfCachedSelectedOption.length > ctx_r29.nzMaxTagCount);
} }
function CmacsSelectTopControlComponent_ul_8_ng_template_3_Template(rf, ctx) { }
function CmacsSelectTopControlComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_Template, 4, 7, "ng-container", 5);
    ɵɵelementStart(2, "li", 18);
    ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_template_3_Template, 0, 0, "ng-template", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const _r0 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.tagsOut && !ctx_r7.userDropdown);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsSelectTopControlComponent_span_9_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 33);
} }
function CmacsSelectTopControlComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    const _r46 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 31);
    ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_span_9_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_span_9_Template_span_click_0_listener($event) { ɵɵrestoreView(_r46); const ctx_r45 = ɵɵnextContext(); return ctx_r45.onClearSelection($event); });
    ɵɵtemplate(1, CmacsSelectTopControlComponent_span_9_i_1_Template, 1, 0, "i", 32);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵclassProp("ant-select-selection__clear-search", ctx_r8.showCustomSearch);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.nzClearIcon)("ngIfElse", ctx_r8.nzClearIcon);
} }
function CmacsSelectTopControlComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 34);
    ɵɵelement(1, "i", 35);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassProp("cmacs-selected-nodes", ctx_r9.getSelectedValues().length);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 40);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 42);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template, 1, 0, "i", 41);
} if (rf & 2) {
    const ctx_r50 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r50.nzSuffixIcon)("ngIfElse", ctx_r50.nzSuffixIcon);
} }
function CmacsSelectTopControlComponent_ng_template_11_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 37);
    ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template, 1, 0, "i", 38);
    ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template, 1, 2, "ng-template", null, 39, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r49 = ɵɵreference(3);
    const ctx_r47 = ɵɵnextContext(2);
    ɵɵclassProp("cmacs-select-action", ctx_r47.action);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r47.nzLoading)("ngIfElse", _r49);
} }
function CmacsSelectTopControlComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_Template, 4, 4, "span", 36);
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r11.nzShowArrow);
} }
class CmacsSelectTopControlComponent {
    constructor(renderer, nzSelectService, cdr, noAnimation) {
        this.renderer = renderer;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.searchValue = '';
        this.isComposing = false;
        this.isComposingCustom = false;
        this.destroy$ = new Subject();
        this.nzShowSearch = false;
        this.showCustomSearch = false;
        // tslint:disable-next-line: member-ordering
        this.showCmacsSearch = false;
        this.tagsOut = false;
        this.nzOpen = false;
        this.cmacsOpen = false;
        this.cmacsEditable = false;
        this.action = false;
        this.nzAllowClear = false;
        this.nzShowArrow = true;
        this.nzLoading = false;
        this.userDropdown = false;
        this.nzTokenSeparators = [];
    }
    onClearSelection(e) {
        e.stopPropagation();
        this.nzSelectService.updateListOfSelectedValue([], true);
        if (this.nzSelectService.isTagsSingleSelectMode) {
            this.setInputValue('');
            this.setInputValueCustom('');
        }
    }
    getSelectedValues() {
        return this.nzSelectService.listOfSelectedValue;
    }
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.inputValue = value;
        this.updateWidth();
        this.nzSelectService.updateSearchValue(value);
        this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
    }
    setInputValueCustom(value) {
        if (this.inputElementCustom) {
            this.inputElementCustom.nativeElement.value = value;
        }
        this.inputValueEditableMode = value;
        this.updateWidthCustom();
        this.nzSelectService.updateEditedValue(value);
    }
    get placeHolderDisplay() {
        if (this.cmacsEditable) {
            return this.inputValueEditableMode || this.isComposingCustom || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
        }
        if (this.userDropdown) {
            return this.inputValue || this.isComposing ? 'none' : 'block';
        }
        return this.inputValue || this.inputValueEditableMode || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
    }
    get selectedValueStyle() {
        let showSelectedValue = false;
        let opacity = 1;
        if (!this.nzShowSearch && !this.showCmacsSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                if (this.cmacsEditable) {
                    showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                }
                else {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                }
                if (showSelectedValue) {
                    opacity = 1;
                }
            }
            else {
                showSelectedValue = true;
                if (this.cmacsEditable) {
                    showSelectedValue = !(this.isComposingCustom || this.inputValueEditableMode);
                }
            }
        }
        if (this.nzSelectService.isTagsSingleSelectMode && this.inputValue) {
            showSelectedValue = false;
        }
        if (this.nzSelectService.isTagsSingleSelectMode && !this.inputValue) {
            opacity = 1;
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            'margin-left.px': this.showCustomSearch ? '15' : '0',
            opacity: `${opacity}`
        };
    }
    get showCustomSearchStyle() {
        return {
            'margin-left.px': this.showCustomSearch ? '15' : '0',
            'padding-left.px': this.userDropdown ? '0' : null
        };
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    updateWidth() {
        if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    updateWidthCustom() {
        if (this.nzSelectService.isMultipleOrTags && this.inputElementCustom) {
            if (this.inputValueEditableMode || this.isComposingCustom) {
                this.renderer.setStyle(this.inputElementCustom.nativeElement, 'width', `${this.inputElementCustom.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElementCustom.nativeElement, 'width');
            }
        }
    }
    removeSelectedValue(option, e) {
        this.nzSelectService.removeValueFormSelected(option);
        e.stopPropagation();
    }
    ngOnInit() {
        this.nzSelectService.open$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            if (this.inputElement && open) {
                setTimeout(() => this.inputElement.nativeElement.focus());
            }
            if (this.inputElement && this.cmacsOpen) {
                setTimeout(() => this.inputElement.nativeElement.focus());
            }
            if (this.inputElementCustom && open) {
                setTimeout(() => this.inputElementCustom.nativeElement.focus());
            }
            if (this.inputElementCustom && this.cmacsOpen) {
                setTimeout(() => this.inputElementCustom.nativeElement.focus());
            }
        });
        this.nzSelectService.clearInput$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (!(this.cmacsOpen || this.nzSelectService.isTagsSingleSelectMode)) {
                this.setInputValue('');
                this.setInputValueCustom('');
            }
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if (changes.searchValue && changes.searchValue.currentValue !== undefined) {
            this.setInputValue(changes.searchValue.currentValue);
        }
    }
}
CmacsSelectTopControlComponent.ɵfac = function CmacsSelectTopControlComponent_Factory(t) { return new (t || CmacsSelectTopControlComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CmacsSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
CmacsSelectTopControlComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSelectTopControlComponent, selectors: [["", "cmacs-select-top-control", ""]], viewQuery: function CmacsSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$9, 1);
        ɵɵviewQuery(_c1$3, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElementCustom = _t.first);
    } }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [ɵɵNgOnChangesFeature], attrs: _c2$3, decls: 13, vars: 7, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "type", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "type", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "type", "loading"], ["nz-icon", "", "type", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_0_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, CmacsSelectTopControlComponent_span_4_Template, 2, 0, "span", 2);
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, CmacsSelectTopControlComponent_div_6_Template, 2, 3, "div", 4);
        ɵɵtemplate(7, CmacsSelectTopControlComponent_ng_container_7_Template, 4, 3, "ng-container", 5);
        ɵɵtemplate(8, CmacsSelectTopControlComponent_ul_8_Template, 4, 2, "ul", 5);
        ɵɵelementEnd();
        ɵɵtemplate(9, CmacsSelectTopControlComponent_span_9_Template, 2, 4, "span", 6);
        ɵɵtemplate(10, CmacsSelectTopControlComponent_span_10_Template, 2, 2, "span", 7);
        ɵɵtemplate(11, CmacsSelectTopControlComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r10 = ɵɵreference(12);
        ɵɵadvance(4);
        ɵɵproperty("ngIf", ctx.showCustomSearch);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.nzPlaceHolder);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length && !ctx.userDropdown);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showCustomSearch)("ngIfElse", _r10);
    } }, directives: [NgIf, DefaultValueAccessor, NgStyle, NgControlStatus, NgModel, CmacsSelectUnselectableDirective, NgTemplateOutlet, NgForOf, ɵNzTransitionPatchDirective], pipes: [SlicePipe], styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;font-size:16px;top:14px}.cmacs-search-arrow-right,.cmacs-search-search-icon{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:10px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"], encapsulation: 2, data: { animation: [zoomMotion] }, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSelectTopControlComponent.prototype, "userDropdown", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-select-top-control]',
                exportAs: 'cmacsSelectTopControl',
                preserveWhitespaces: false,
                animations: [zoomMotion],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-select-top-control.component.html',
                styleUrls: ['./cmacs-select-top-control.component.css']
            }]
    }], function () { return [{ type: Renderer2 }, { type: CmacsSelectService }, { type: ChangeDetectorRef }, { type: NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { searchValue: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], inputElementCustom: [{
            type: ViewChild,
            args: ['inputElementCustom']
        }], nzShowSearch: [{
            type: Input
        }], showCustomSearch: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], nzPlaceHolder: [{
            type: Input
        }], tagsOut: [{
            type: Input
        }], nzOpen: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], cmacsEditable: [{
            type: Input
        }], action: [{
            type: Input
        }], nzMaxTagCount: [{
            type: Input
        }], nzAllowClear: [{
            type: Input
        }], nzShowArrow: [{
            type: Input
        }], nzLoading: [{
            type: Input
        }], nzSuffixIcon: [{
            type: Input
        }], nzClearIcon: [{
            type: Input
        }], nzRemoveIcon: [{
            type: Input
        }], userDropdown: [{
            type: Input
        }], nzMaxTagPlaceholder: [{
            type: Input
        }], nzTokenSeparators: [{
            type: Input
        }] }); })();

const _c0$a = ["*"];
class CmacsOptionGroupComponent {
    constructor() {
        this.isLabelString = false;
    }
    set nzLabel(value) {
        this.label = value;
        this.isLabelString = !(this.nzLabel instanceof TemplateRef);
    }
    get nzLabel() {
        return this.label;
    }
}
CmacsOptionGroupComponent.ɵfac = function CmacsOptionGroupComponent_Factory(t) { return new (t || CmacsOptionGroupComponent)(); };
CmacsOptionGroupComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function CmacsOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CmacsOptionComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
    } }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function CmacsOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-option-group.component.html'
            }]
    }], null, { listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [CmacsOptionComponent]
        }], nzLabel: [{
            type: Input
        }] }); })();

const _c0$b = ["cmacs-option-li", ""];
function CmacsOptionLiComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementStart(3, "span", 2);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.highlightKeys[0], "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.highlightKeys[1]);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r2.highlightKeys[2], " ");
} }
function CmacsOptionLiComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.nzOption.nzLabel, " ");
} }
function CmacsOptionLiComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.nzOption.divider);
} }
function CmacsOptionLiComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
    ɵɵtemplate(2, CmacsOptionLiComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵtemplate(3, CmacsOptionLiComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.highlightKeys.length);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.highlightKeys.length);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.nzOption.divider);
} }
function CmacsOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 5);
} }
function CmacsOptionLiComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 4);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1.nzMenuItemSelectedIcon);
} }
class CmacsOptionLiComponent {
    constructor(elementRef, nzSelectService, cdr, renderer) {
        this.elementRef = elementRef;
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.destroy$ = new Subject();
        this.highlightKeys = [];
        renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
    }
    clickOption() {
        this.nzSelectService.clickOption(this.nzOption);
    }
    ngOnInit() {
        this.nzSelectService.listOfSelectedValue$.pipe(takeUntil(this.destroy$)).subscribe(list => {
            this.selected = !this.nzSelectService.userDropdown ? isNotNil(list.find(v => this.nzSelectService.compareWith(v, this.nzOption.nzValue))) : isNotNil(list.find(v => this.nzSelectService.compareWith(v.value, this.nzOption.nzValue)));
            this.cdr.markForCheck();
        });
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            if (option) {
                this.active = this.nzSelectService.compareWith(option.nzValue, this.nzOption.nzValue);
            }
            else {
                this.active = false;
            }
            this.cdr.markForCheck();
        });
        this.nzSelectService.searchValue$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.highlightKeys = [];
            // tslint:disable-next-line: no-non-null-assertion
            if (value && this.nzOption.nzLabel && this.nzOption.nzLabel.toLowerCase().includes(value.toLowerCase())) {
                // match the search value
                const index = this.nzOption.nzLabel.toLowerCase().indexOf(value.toLowerCase());
                this.highlightKeys = [
                    this.nzOption.nzLabel.slice(0, index),
                    this.nzOption.nzLabel.slice(index, index + value.length),
                    this.nzOption.nzLabel.slice(index + value.length, this.nzOption.nzLabel.length)
                ];
                this.highlightKeys = [...this.highlightKeys];
            }
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOptionLiComponent.ɵfac = function CmacsOptionLiComponent_Factory(t) { return new (t || CmacsOptionLiComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CmacsSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2)); };
CmacsOptionLiComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsOptionLiComponent, selectors: [["", "cmacs-option-li", ""]], hostVars: 11, hostBindings: function CmacsOptionLiComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function CmacsOptionLiComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function CmacsOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        ɵɵattribute("unselectable", "unselectable");
        ɵɵstyleProp("user-select", "none");
        ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled)("cmacs-select-dropdown-menu-item-divider", ctx.nzOption.divider);
    } }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["cmacsOptionLi"], attrs: _c0$b, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], [2, "color", "#2a7cff"], [1, "cmacs-select-divider"], ["nz-icon", "", "type", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "check", 1, "ant-select-selected-icon"]], template: function CmacsOptionLiComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsOptionLiComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
    } }, directives: [NgIf, ɵNzTransitionPatchDirective], styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-flex;right:0;position:absolute;top:0}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsOptionLiComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-option-li]',
                exportAs: 'cmacsOptionLi',
                templateUrl: './cmacs-option-li.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                    '[class.cmacs-select-dropdown-menu-item-divider]': 'nzOption.divider',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"',
                    '(click)': 'clickOption()',
                    '(mousedown)': '$event.preventDefault()'
                },
                styleUrls: ['./cmacs-option-li.component.css']
            }]
    }], function () { return [{ type: ElementRef }, { type: CmacsSelectService }, { type: ChangeDetectorRef }, { type: Renderer2 }]; }, { nzOption: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }] }); })();

const _c0$c = ["dropdownUl"];
const _c1$4 = ["inputElement"];
const _c2$4 = ["cmacs-option-container", ""];
function CmacsOptionContainerComponent_li_2_ng_template_2_Template(rf, ctx) { }
function CmacsOptionContainerComponent_li_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelement(0, "i", 13);
    ɵɵelementStart(1, "input", 14, 15);
    ɵɵlistener("ngModelChange", function CmacsOptionContainerComponent_li_2_ng_template_5_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r13); const ctx_r12 = ɵɵnextContext(2); return ctx_r12.setInputValue($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("placeholder", ctx_r10.searchLabel);
    ɵɵproperty("ngModel", ctx_r10.inputValue);
} }
function CmacsOptionContainerComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementStart(3, "span", 11);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, CmacsOptionContainerComponent_li_2_ng_template_5_Template, 3, 2, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r9 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r9);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.inputValue);
} }
function CmacsOptionContainerComponent_li_3_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 20);
} }
function CmacsOptionContainerComponent_li_3_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 21);
} }
function CmacsOptionContainerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 16);
    ɵɵlistener("click", function CmacsOptionContainerComponent_li_3_Template_li_click_0_listener() { ɵɵrestoreView(_r17); const ctx_r16 = ɵɵnextContext(); return ctx_r16.updateCheckboxCache(); });
    ɵɵelementStart(1, "strong", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_i_3_Template, 1, 0, "i", 18);
    ɵɵtemplate(4, CmacsOptionContainerComponent_li_3_span_4_Template, 1, 0, "span", 19);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx_r2.isAllChecked() === 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.selectAllLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isAllChecked() === 1 || !ctx_r2.isAllChecked());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isAllChecked() === -1);
} }
function CmacsOptionContainerComponent_li_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0, 10);
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r18.notFoundContentCustom);
} }
function CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "nz-embed-empty", 25);
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r19.nzNotFoundContent);
} }
function CmacsOptionContainerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 22);
    ɵɵtemplate(1, CmacsOptionContainerComponent_li_4_ng_container_1_Template, 1, 1, "ng-container", 23);
    ɵɵtemplate(2, CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template, 1, 2, "nz-embed-empty", 24);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("cmacs-not-found-custom", ctx_r3.notFoundContentCustom);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.notFoundContentCustom);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.notFoundContentCustom);
} }
function CmacsOptionContainerComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r4.nzMenuItemSelectedIcon)("nzOption", ctx_r4.nzSelectService.addedTagOption);
} }
function CmacsOptionContainerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r20 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r5.nzMenuItemSelectedIcon)("nzOption", option_r20);
} }
function CmacsOptionContainerComponent_li_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const group_r21 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", group_r21.nzLabel, " ");
} }
function CmacsOptionContainerComponent_li_8_li_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r25 = ctx.$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r23.nzMenuItemSelectedIcon)("nzOption", option_r25);
} }
function CmacsOptionContainerComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 27);
    ɵɵelementStart(1, "div", 28);
    ɵɵtemplate(2, CmacsOptionContainerComponent_li_8_ng_container_2_Template, 2, 1, "ng-container", 29);
    ɵɵelementEnd();
    ɵɵelementStart(3, "ul", 30);
    ɵɵtemplate(4, CmacsOptionContainerComponent_li_8_li_4_Template, 1, 2, "li", 6);
    ɵɵpipe(5, "nzFilterOption");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r21 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("title", group_r21.isLabelString ? group_r21.nzLabel : "");
    ɵɵadvance(1);
    ɵɵproperty("cmacsStringTemplateOutlet", group_r21.nzLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind4(5, 4, group_r21.listOfNzOptionComponent, ctx_r6.nzSelectService.searchValue, ctx_r6.nzSelectService.filterOption, ctx_r6.nzSelectService.serverSearch))("ngForTrackBy", ctx_r6.trackValue);
} }
function CmacsOptionContainerComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "li", 26);
} if (rf & 2) {
    const option_r26 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("nzMenuItemSelectedIcon", ctx_r7.nzMenuItemSelectedIcon)("nzOption", option_r26);
} }
class CmacsOptionContainerComponent {
    constructor(nzSelectService, cdr, ngZone, i18n) {
        this.nzSelectService = nzSelectService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        this.lastScrollTop = 0;
        this.notFoundContentShow = true;
        this.userDropdown = false;
        this.showSearch = false;
        this.showSelectAll = true;
        this.selectAllLabel = 'Select All';
        this.searchLabel = 'Search';
        this.showCmacsSearch = false;
        this.nzScrollToBottom = new EventEmitter();
        this.onSearch = new EventEmitter();
    }
    scrollIntoViewIfNeeded(option) {
        // delay after open
        setTimeout(() => {
            if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length && option) {
                const targetOption = this.listOfNzOptionLiComponent.find(o => this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue));
                /* tslint:disable:no-any */
                if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                    targetOption.el.scrollIntoViewIfNeeded(false);
                }
                /* tslint:enable:no-any */
            }
        });
    }
    setInputValue(value) {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = value;
        }
        this.onSearch.emit(value);
    }
    trackLabel(_index, option) {
        return option.nzLabel;
    }
    // tslint:disable-next-line:no-any
    trackValue(_index, option) {
        return option.nzValue;
    }
    ngOnInit() {
        this.nzSelectService.activatedOption$.pipe(takeUntil(this.destroy$)).subscribe(option => {
            this.scrollIntoViewIfNeeded(option);
        });
        this.nzSelectService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        this.ngZone.runOutsideAngular(() => {
            const ul = this.dropdownUl.nativeElement;
            fromEvent(ul, 'scroll')
                .pipe(takeUntil(this.destroy$))
                .subscribe(e => {
                e.preventDefault();
                e.stopPropagation();
                if (ul && ul.scrollTop > this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                    this.lastScrollTop = ul.scrollTop;
                    this.ngZone.run(() => {
                        this.nzScrollToBottom.emit();
                    });
                }
            });
        });
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.selectAllLabel = 'Alle auswählen';
                    this.searchLabel = 'Suche';
                    break;
                case 'en':
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
                    break;
                default:
                    this.selectAllLabel = 'Select All';
                    this.searchLabel = 'Search';
            }
            this.cdr.markForCheck();
        });
    }
    isAllChecked() {
        const listOfNotDisabledItems = this.nzSelectService.listOfNzOptionComponent.filter(item => !item.nzDisabled);
        if (this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length) {
            return 1;
        }
        else if (!this.nzSelectService.listOfCachedSelectedOption.length) {
            return 0;
        }
        else {
            return -1;
        }
    }
    updateCheckboxCache() {
        const isCheckedState = this.isAllChecked();
        if (!isCheckedState || isCheckedState === -1) {
            const listOfSelectedValue = [];
            this.nzSelectService.listOfNzOptionComponent.forEach(option => {
                if (!option.nzDisabled) {
                    listOfSelectedValue.push(option.nzValue);
                }
            });
            this.nzSelectService.updateListOfSelectedValue(listOfSelectedValue, true);
        }
        else {
            this.nzSelectService.updateListOfSelectedValue([], true);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOptionContainerComponent.ɵfac = function CmacsOptionContainerComponent_Factory(t) { return new (t || CmacsOptionContainerComponent)(ɵɵdirectiveInject(CmacsSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzI18nService)); };
CmacsOptionContainerComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsOptionContainerComponent, selectors: [["", "cmacs-option-container", ""]], viewQuery: function CmacsOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$c, 1);
        ɵɵviewQuery(_c1$4, 1);
        ɵɵviewQuery(CmacsOptionLiComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
    } }, inputs: { nzNotFoundContent: "nzNotFoundContent", notFoundContentShow: "notFoundContentShow", userDropdown: "userDropdown", showSearch: "showSearch", showSelectAll: "showSelectAll", selectAllLabel: "selectAllLabel", searchLabel: "searchLabel", showCmacsSearch: "showCmacsSearch", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", notFoundContentCustom: "notFoundContentCustom" }, outputs: { nzScrollToBottom: "nzScrollToBottom", onSearch: "onSearch" }, exportAs: ["cmacsOptionContainer"], attrs: _c2$4, decls: 12, vars: 25, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "cmacs-custom-scrollbar", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["class", "ant-select-dropdown-menu-item cmacs-select-search", 4, "ngIf"], ["class", "ant-select-dropdown-menu-item", 3, "ant-select-dropdown-menu-item-selected", "click", 4, "ngIf"], ["cmacs-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 3, "cmacs-not-found-custom", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-select-dropdown-menu-item", "cmacs-select-search"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], ["inputTemplate", ""], ["nz-icon", "", "type", "search", 1, "cmacs-select-search-icon"], ["autocomplete", "something-new", 1, "cmacs-select-search-input", 3, "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown-menu-item", 3, "click"], [2, "color", "#656c79 !important"], ["nz-icon", "", "type", "check", "class", "ant-select-selected-icon", 4, "ngIf"], ["class", "ant-select-selected-icon cmacs-indeterminate-selection", 4, "ngIf"], ["nz-icon", "", "type", "check", 1, "ant-select-selected-icon"], [1, "ant-select-selected-icon", "cmacs-indeterminate-selection"], ["cmacs-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "nzComponentName", "specificContent", 4, "ngIf"], [3, "nzComponentName", "specificContent"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "cmacsStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function CmacsOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "ul", 0, 1);
        ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_Template, 7, 2, "li", 2);
        ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_Template, 5, 5, "li", 3);
        ɵɵtemplate(4, CmacsOptionContainerComponent_li_4_Template, 3, 4, "li", 4);
        ɵɵtemplate(5, CmacsOptionContainerComponent_li_5_Template, 1, 2, "li", 5);
        ɵɵtemplate(6, CmacsOptionContainerComponent_li_6_Template, 1, 2, "li", 6);
        ɵɵpipe(7, "nzFilterOption");
        ɵɵtemplate(8, CmacsOptionContainerComponent_li_8_Template, 6, 9, "li", 7);
        ɵɵpipe(9, "nzFilterGroupOption");
        ɵɵtemplate(10, CmacsOptionContainerComponent_li_10_Template, 1, 2, "li", 6);
        ɵɵpipe(11, "nzFilterOption");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showSearch && !ctx.showCmacsSearch);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags && !ctx.nzSelectService.isShowNotFound && ctx.showSelectAll);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.nzSelectService.isShowNotFound || ctx.userDropdown) && ctx.notFoundContentShow);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ɵɵpipeBind4(7, 10, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind4(9, 15, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ɵɵpipeBind4(11, 20, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
    } }, directives: [NgIf, NgForOf, NgTemplateOutlet, ɵNzTransitionPatchDirective, DefaultValueAccessor, NgControlStatus, NgModel, CmacsSelectUnselectableDirective, CmacsOptionLiComponent], pipes: [NzFilterOptionPipe, NzFilterGroupOptionPipe], styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-option-container]',
                exportAs: 'cmacsOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                templateUrl: './cmacs-option-container.component.html',
                styleUrls: ['./cmacs-option-container.component.css']
            }]
    }], function () { return [{ type: CmacsSelectService }, { type: ChangeDetectorRef }, { type: NgZone }, { type: NzI18nService }]; }, { listOfNzOptionLiComponent: [{
            type: ViewChildren,
            args: [CmacsOptionLiComponent]
        }], dropdownUl: [{
            type: ViewChild,
            args: ['dropdownUl']
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement']
        }], nzNotFoundContent: [{
            type: Input
        }], notFoundContentShow: [{
            type: Input
        }], userDropdown: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], showSelectAll: [{
            type: Input
        }], selectAllLabel: [{
            type: Input
        }], searchLabel: [{
            type: Input
        }], showCmacsSearch: [{
            type: Input
        }], nzMenuItemSelectedIcon: [{
            type: Input
        }], notFoundContentCustom: [{
            type: Input
        }], nzScrollToBottom: [{
            type: Output
        }], onSearch: [{
            type: Output
        }] }); })();

function CmacsSelectComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function CmacsSelectComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2 = ɵɵreference(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsSelectComponent_2_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function CmacsSelectComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r2);
} }
function CmacsSelectComponent_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_Template, 1, 1, "ng-template", 4);
    ɵɵlistener("backdropClick", function CmacsSelectComponent_2_Template_ng_template_backdropClick_0_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.closeDropDown(); })("detach", function CmacsSelectComponent_2_Template_ng_template_detach_0_listener() { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.closeDropDown(); })("positionChange", function CmacsSelectComponent_2_Template_ng_template_positionChange_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(); return ctx_r11.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx_r1.dropdownMatchSelectWidth ? null : ctx_r1.triggerWidth)("cdkConnectedOverlayWidth", ctx_r1.dropdownMatchSelectWidth ? ctx_r1.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx_r1.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx_r1.nzOpen);
} }
function CmacsSelectComponent_ng_template_3_ng_template_2_Template(rf, ctx) { }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 18);
} }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("mousedown", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_click_0_listener($event) { ɵɵrestoreView(_r22); const option_r16 = ɵɵnextContext().$implicit; const ctx_r20 = ɵɵnextContext(3); return ctx_r20.removeSelectedValue(option_r16, $event); });
    ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template, 1, 0, "i", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r17.removeIcon)("ngIfElse", ctx_r17.removeIcon);
} }
function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 13);
    ɵɵelementStart(2, "div", 14);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template, 2, 2, "span", 15);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-selection__choice__disabled", option_r16.nzDisabled);
    ɵɵproperty("@zoomMotion", undefined);
    ɵɵattribute("title", option_r16.nzLabel);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r16.nzLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !option_r16.nzDisabled);
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
const _c0$d = function (a0) { return { $implicit: a0 }; };
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 19);
    ɵɵpipe(2, "slice");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r23.maxTagPlaceholder)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c0$d, ɵɵpipeBind2(2, 2, ctx_r23.nzSelectService.listOfSelectedValue, ctx_r23.maxTagCount)));
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" + ", ctx_r24.nzSelectService.listOfCachedSelectedOption.length - ctx_r24.maxTagCount, " ... ");
} }
function CmacsSelectComponent_ng_template_3_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template, 3, 7, "ng-container", 1);
    ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵproperty("@zoomMotion", undefined);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r15.maxTagPlaceholder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r15.maxTagPlaceholder);
} }
function CmacsSelectComponent_ng_template_3_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template, 5, 6, "ng-container", 11);
    ɵɵpipe(4, "slice");
    ɵɵtemplate(5, CmacsSelectComponent_ng_template_3_div_3_li_5_Template, 4, 3, "li", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind3(4, 3, ctx_r13.nzSelectService.listOfCachedSelectedOption, 0, ctx_r13.maxTagCount))("ngForTrackBy", ctx_r13.trackValue);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r13.nzSelectService.listOfCachedSelectedOption.length > ctx_r13.maxTagCount);
} }
function CmacsSelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵelementStart(1, "div", 6);
    ɵɵlistener("onSearch", function CmacsSelectComponent_ng_template_3_Template_div_onSearch_1_listener($event) { ɵɵrestoreView(_r27); const ctx_r26 = ɵɵnextContext(); return ctx_r26.onSearch($event); })("keydown", function CmacsSelectComponent_ng_template_3_Template_div_keydown_1_listener($event) { ɵɵrestoreView(_r27); const ctx_r28 = ɵɵnextContext(); return ctx_r28.onKeyDown($event); })("nzScrollToBottom", function CmacsSelectComponent_ng_template_3_Template_div_nzScrollToBottom_1_listener() { ɵɵrestoreView(_r27); const ctx_r29 = ɵɵnextContext(); return ctx_r29.scrollToBottom.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
    ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_Template, 6, 7, "div", 8);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("cmacs-select-user-dropdown", ctx_r3.userDropdown)("cmacs-select-dropdown", ctx_r3.open)("ant-select-dropdown--single", ctx_r3.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r3.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
    ɵɵproperty("@slideMotion", ctx_r3.dropDownPosition)("ngStyle", ctx_r3.dropdownStyle);
    ɵɵadvance(1);
    ɵɵproperty("showSearch", ctx_r3.showSearch)("showSelectAll", ctx_r3.showSelectAll)("notFoundContentShow", ctx_r3.notFoundContentShow)("notFoundContentCustom", ctx_r3.notFoundContentCustom)("userDropdown", ctx_r3.userDropdown)("selectAllLabel", ctx_r3.selectAllLabel)("showCmacsSearch", ctx_r3.showCmacsSearch)("nzMenuItemSelectedIcon", ctx_r3.menuItemSelectedIcon)("nzNotFoundContent", ctx_r3.notFoundContent);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dropdownRender);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3._tagsOut && ctx_r3.nzSelectService.listOfCachedSelectedOption.length);
} }
function CmacsSelectComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c1$5 = ["*"];
class CmacsSelectComponent {
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
CmacsSelectComponent.ɵfac = function CmacsSelectComponent_Factory(t) { return new (t || CmacsSelectComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(CmacsSelectService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9)); };
CmacsSelectComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsSelectComponent, selectors: [["cmacs-select"]], contentQueries: function CmacsSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CmacsOptionComponent, 0);
        ɵɵcontentQuery(dirIndex, CmacsOptionGroupComponent, 0);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfCmacsOptionComponent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfCmacsOptionGroupComponent = _t);
    } }, viewQuery: function CmacsSelectComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(CdkOverlayOrigin, 1);
        ɵɵviewQuery(CdkConnectedOverlay, 1);
        ɵɵviewQuery(CmacsSelectTopControlComponent, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectTopControlComponent = _t.first);
    } }, hostVars: 14, hostBindings: function CmacsSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("click", function CmacsSelectComponent_click_HostBindingHandler() { return ctx.toggleDropDown(); });
    } if (rf & 2) {
        ɵɵclassProp("ant-select-lg", ctx.size === "large")("ant-select-sm", ctx.size === "small")("ant-select-enabled", !ctx.disabled)("ant-select-no-arrow", !ctx.showArrow)("ant-select-disabled", ctx.disabled)("ant-select-allow-clear", ctx.allowClear)("ant-select-open", ctx.nzOpen || ctx.cmacsOpen);
    } }, inputs: { size: "size", dropdownClassName: "dropdownClassName", dropdownMatchSelectWidth: "dropdownMatchSelectWidth", action: "action", dropdownStyle: "dropdownStyle", notFoundContent: "notFoundContent", notFoundContentShow: "notFoundContentShow", allowClear: "allowClear", open: "open", showSearch: "showSearch", showCmacsSearch: "showCmacsSearch", showCustomSearch: "showCustomSearch", loading: "loading", showSelectAll: "showSelectAll", placeHolder: "placeHolder", maxTagCount: "maxTagCount", dropdownRender: "dropdownRender", suffixIcon: "suffixIcon", clearIcon: "clearIcon", removeIcon: "removeIcon", notFoundContentCustom: "notFoundContentCustom", menuItemSelectedIcon: "menuItemSelectedIcon", showArrow: "showArrow", tokenSeparators: "tokenSeparators", maxTagPlaceholder: "maxTagPlaceholder", selectAllLabel: "selectAllLabel", autoClearSearchValue: "autoClearSearchValue", maxMultipleCount: "maxMultipleCount", serverSearch: "serverSearch", cmacsEditable: "cmacsEditable", userDropdown: "userDropdown", mode: "mode", filterOption: "filterOption", tagsOut: "tagsOut", compareWith: "compareWith", autoFocus: "autoFocus", cmacsOpen: "cmacsOpen", disabled: "disabled" }, outputs: { cmacsOnSearch: "cmacsOnSearch", cmacsEditedInput: "cmacsEditedInput", scrollToBottom: "scrollToBottom", openChange: "openChange", cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus" }, exportAs: ["cmacsSelect"], features: [ɵɵProvidersFeature([
            CmacsSelectService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSelectComponent),
                multi: true
            }
        ])], ngContentSelectors: _c1$5, decls: 6, vars: 32, consts: [["cdkOverlayOrigin", "", "cmacs-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "searchValue", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "cmacsOpen", "cmacsEditable", "nzSuffixIcon", "nzClearIcon", "userDropdown", "tagsOut", "action", "nzRemoveIcon", "nzShowSearch", "showCmacsSearch", "showCustomSearch", "nzTokenSeparators", "keydown"], [4, "ngIf"], ["content", ""], [4, "ngTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", "cmacs-custom-scrollbar", 3, "ngStyle"], ["cmacs-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", "scrollbar-color", "#cfd3d9 #ffffff", "scrollbar-width", "thin", 3, "showSearch", "showSelectAll", "notFoundContentShow", "notFoundContentCustom", "userDropdown", "selectAllLabel", "showCmacsSearch", "nzMenuItemSelectedIcon", "nzNotFoundContent", "onSearch", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"], ["class", "ant-select-selection--multiple cmacs-tags-out", "style", "padding-top: 15px;", 4, "ngIf"], [1, "ant-select-selection--multiple", "cmacs-tags-out", 2, "padding-top", "15px"], [1, "ant-select-selection__rendered", "cmacs-select-selection__rendered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsSelectComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keydown", function CmacsSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        ɵɵelementEnd();
        ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵɵtemplate(2, CmacsSelectComponent_2_Template, 1, 5, undefined, 1);
        ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_Template, 4, 25, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, CmacsSelectComponent_ng_template_5_Template, 1, 0, "ng-template");
    } if (rf & 2) {
        ɵɵclassProp("cmacs-select-selection", ctx.open)("ant-select-selection--single", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--action", ctx.action);
        ɵɵproperty("nzOpen", ctx.nzOpen)("searchValue", ctx.searchValue)("nzMaxTagPlaceholder", ctx.maxTagPlaceholder)("nzPlaceHolder", ctx.placeHolder)("nzAllowClear", ctx.allowClear)("nzMaxTagCount", ctx.maxTagCount)("nzShowArrow", ctx.showArrow)("nzLoading", ctx.loading)("cmacsOpen", ctx.cmacsOpen)("cmacsEditable", ctx.cmacsEditable)("nzSuffixIcon", ctx.suffixIcon)("nzClearIcon", ctx.clearIcon)("userDropdown", ctx.userDropdown)("tagsOut", ctx._tagsOut)("action", ctx.action)("nzRemoveIcon", ctx.removeIcon)("nzShowSearch", ctx.showSearch)("showCmacsSearch", ctx.showCmacsSearch)("showCustomSearch", ctx.showCustomSearch)("nzTokenSeparators", ctx.tokenSeparators);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.open);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.open);
    } }, directives: [CmacsSelectTopControlComponent, NgIf, NgTemplateOutlet, NgStyle, CmacsOptionContainerComponent, NgForOf, ɵNzTransitionPatchDirective], pipes: [SlicePipe], styles: [".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.cmacs-select-dropdown-menu-item-divider{border-top:1px solid #2a7cff!important}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection,.ant-select-open .ant-select-selection:focus,.ant-select-open .ant-select-selection:focus-within,.ant-select-open .ant-select-selection:hover{border-color:#dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:3px 3px 0 0}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-bottom:0;border:1px solid #dee0e5;margin-top:-1px;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:0 0 3px 3px}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-dropdown-menu-item{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-top:1px solid #dee0e5;padding:7px 14px}.ant-select-dropdown.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{left:12px;right:unset}.cmacs-select-search-input{width:100%;border:none;outline:none;padding:0 10px 0 6px}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff;padding-left:14px!important}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{max-width:94%}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{top:unset;transform:unset;bottom:15px;background-color:#fff!important}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .cmacs-user-dropdown-last-elem+.ant-select-selected-icon{bottom:22px}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [slideMotion, zoomMotion] }, changeDetection: 0 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsSelectComponent, [{
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
    }], function () { return [{ type: Renderer2 }, { type: CmacsSelectService }, { type: ChangeDetectorRef }, { type: FocusMonitor }, { type: Platform }, { type: ElementRef }, { type: NzNoAnimationDirective, decorators: [{
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

function CmacsDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.text);
} }
function CmacsDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, CmacsDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.text);
} }
class CmacsDividerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'vertical';
        this.orientation = '';
        this.dashed = false;
        this.plain = false;
        this.elementRef.nativeElement.classList.add('ant-divider');
    }
}
CmacsDividerComponent.ɵfac = function CmacsDividerComponent_Factory(t) { return new (t || CmacsDividerComponent)(ɵɵdirectiveInject(ElementRef)); };
CmacsDividerComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsDividerComponent, selectors: [["cmacs-divider"]], hostVars: 16, hostBindings: function CmacsDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-divider-horizontal", ctx.type === "horizontal")("ant-divider-vertical", ctx.type === "vertical")("ant-divider-with-text", ctx.text)("ant-divider-plain", ctx.plain)("ant-divider-with-text-left", ctx.text && ctx.orientation === "left")("ant-divider-with-text-right", ctx.text && ctx.orientation === "right")("ant-divider-with-text-center", ctx.text && ctx.orientation === "center")("ant-divider-dashed", ctx.dashed);
    } }, inputs: { text: "text", type: "type", orientation: "orientation", dashed: "dashed", plain: "plain" }, exportAs: ["cmacsDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function CmacsDividerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.text);
    } }, directives: [NgIf], styles: [".ant-divider-vertical{height:1em!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsDividerComponent.prototype, "dashed", void 0);
__decorate([
    InputBoolean()
], CmacsDividerComponent.prototype, "plain", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsDividerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-divider',
                exportAs: 'cmacsDivider',
                templateUrl: './cmacs-divider.component.html',
                styleUrls: ['./cmacs-divider.component.css'],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-divider-horizontal]': `type === 'horizontal'`,
                    '[class.ant-divider-vertical]': `type === 'vertical'`,
                    '[class.ant-divider-with-text]': `text`,
                    '[class.ant-divider-plain]': `plain`,
                    '[class.ant-divider-with-text-left]': `text && orientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `text && orientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `text && orientation === 'center'`,
                    '[class.ant-divider-dashed]': `dashed`
                }
            }]
    }], function () { return [{ type: ElementRef }]; }, { text: [{
            type: Input
        }], type: [{
            type: Input
        }], orientation: [{
            type: Input
        }], dashed: [{
            type: Input
        }], plain: [{
            type: Input
        }] }); })();

class CmacsInputDirective {
    constructor(ngControl, renderer, elementRef, directionality) {
        this.ngControl = ngControl;
        this.directionality = directionality;
        this.borderless = false;
        this.size = 'default';
        this._disabled = false;
        this.disabled$ = new Subject();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
        renderer.addClass(elementRef.nativeElement, 'cmacs-input-fix');
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    ngOnInit() {
        var _a, _b;
        if (this.ngControl) {
            (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$)).subscribe(() => {
                this.disabled$.next(this.ngControl.disabled);
            });
        }
        this.dir = this.directionality.value;
        (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { disabled } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsInputDirective.ɵfac = function CmacsInputDirective_Factory(t) { return new (t || CmacsInputDirective)(ɵɵdirectiveInject(NgControl, 10), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8)); };
CmacsInputDirective.ɵdir = ɵɵdefineDirective({ type: CmacsInputDirective, selectors: [["input", "cmacs-input", ""], ["textarea", "cmacs-input", ""]], hostVars: 13, hostBindings: function CmacsInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("disabled", ctx.disabled || null);
        ɵɵclassProp("ant-input-disabled", ctx.disabled)("cmacs-input-opened", ctx.opened)("ant-input-lg", ctx.size === "large")("ant-input-sm", ctx.size === "small")("ant-input-borderless", ctx.borderless)("ant-input-rtl", ctx.dir === "rtl");
    } }, inputs: { borderless: "borderless", size: "size", disabled: "disabled", opened: "opened" }, exportAs: ["cmacsInput"], features: [ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], CmacsInputDirective.prototype, "borderless", void 0);
__decorate([
    InputBoolean()
], CmacsInputDirective.prototype, "opened", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsInputDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'input[cmacs-input],textarea[cmacs-input]',
                exportAs: 'cmacsInput',
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.cmacs-input-opened]': 'opened',
                    '[class.ant-input-lg]': `size === 'large'`,
                    '[class.ant-input-sm]': `size === 'small'`,
                    '[class.ant-input-borderless]': 'borderless',
                    '[attr.disabled]': 'disabled || null',
                    '[class.ant-input-rtl]': `dir=== 'rtl'`
                }
            }]
    }], function () { return [{ type: NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: Renderer2 }, { type: ElementRef }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { borderless: [{
            type: Input
        }], size: [{
            type: Input
        }], disabled: [{
            type: Input
        }], opened: [{
            type: Input
        }] }); })();

const _c0$e = ["cmacs-input-group-slot", ""];
function CmacsInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.icon);
} }
function CmacsInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.template);
} }
class CmacsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
}
CmacsInputGroupSlotComponent.ɵfac = function CmacsInputGroupSlotComponent_Factory(t) { return new (t || CmacsInputGroupSlotComponent)(); };
CmacsInputGroupSlotComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsInputGroupSlotComponent, selectors: [["", "cmacs-input-group-slot", ""]], hostVars: 6, hostBindings: function CmacsInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
    } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0$e, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function CmacsInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CmacsInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
        ɵɵtemplate(1, CmacsInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.icon);
        ɵɵadvance(1);
        ɵɵproperty("nzStringTemplateOutlet", ctx.template);
    } }, directives: [NgIf, ɵNzTransitionPatchDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsInputGroupSlotComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], null, { icon: [{
            type: Input
        }], type: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();

function CmacsInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r7.cmacsAddOnBeforeIcon)("template", ctx_r7.cmacsAddOnBefore);
} }
function CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    const _r3 = ɵɵreference(4);
    ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r9.cmacsAddOnAfterIcon)("template", ctx_r9.cmacsAddOnAfter);
} }
function CmacsInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    ɵɵtemplate(2, CmacsInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    ɵɵtemplate(3, CmacsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cmacsAddOnBefore || ctx_r0.cmacsAddOnBeforeIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.cmacsAddOnAfter || ctx_r0.cmacsAddOnAfterIcon);
} }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    ɵɵnextContext(2);
    const _r3 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function CmacsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r13.cmacsPrefixIcon)("template", ctx_r13.cmacsPrefix);
} }
function CmacsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r15.cmacsSuffixIcon)("template", ctx_r15.cmacsSuffix);
} }
function CmacsInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵtemplate(2, CmacsInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵproperty("ngIf", ctx_r4.cmacsPrefix || ctx_r4.cmacsPrefixIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.cmacsSuffix || ctx_r4.cmacsSuffixIcon);
} }
function CmacsInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵprojection(0);
} }
const _c0$f = ["*"];
class CmacsInputGroupComponent {
    constructor(focusMonitor, elementRef, cdr, directionality) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.directionality = directionality;
        this.cmacsAddOnBeforeIcon = null;
        this.cmacsAddOnAfterIcon = null;
        this.cmacsPrefixIcon = null;
        this.cmacsSuffixIcon = null;
        this.cmacsSize = 'default';
        this.search = false;
        this.compact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.cmacsSize));
        }
    }
    ngOnInit() {
        var _a;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => {
            return merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)]);
        }), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { cmacsSize, cmacsSuffix, cmacsPrefix, cmacsPrefixIcon, cmacsSuffixIcon, cmacsAddOnAfter, cmacsAddOnBefore, cmacsAddOnAfterIcon, cmacsAddOnBeforeIcon } = changes;
        if (cmacsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.cmacsSize === 'large';
            this.isSmall = this.cmacsSize === 'small';
        }
        if (cmacsSuffix || cmacsPrefix || cmacsPrefixIcon || cmacsSuffixIcon) {
            this.isAffix = !!(this.cmacsSuffix || this.cmacsPrefix || this.cmacsPrefixIcon || this.cmacsSuffixIcon);
        }
        if (cmacsAddOnAfter || cmacsAddOnBefore || cmacsAddOnAfterIcon || cmacsAddOnBeforeIcon) {
            this.isAddOn = !!(this.cmacsAddOnAfter || this.cmacsAddOnBefore || this.cmacsAddOnAfterIcon || this.cmacsAddOnBeforeIcon);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsInputGroupComponent.ɵfac = function CmacsInputGroupComponent_Factory(t) { return new (t || CmacsInputGroupComponent)(ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8)); };
CmacsInputGroupComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsInputGroupComponent, selectors: [["cmacs-input-group"]], contentQueries: function CmacsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CmacsInputDirective, 0);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
    } }, hostVars: 40, hostBindings: function CmacsInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("ant-input-group-compact", ctx.compact)("ant-input-search-enter-button", ctx.search)("ant-input-search", ctx.search)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.search && ctx.isSmall)("ant-input-search-large", ctx.search && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
    } }, inputs: { cmacsAddOnBeforeIcon: "cmacsAddOnBeforeIcon", cmacsAddOnAfterIcon: "cmacsAddOnAfterIcon", cmacsPrefixIcon: "cmacsPrefixIcon", cmacsSuffixIcon: "cmacsSuffixIcon", cmacsAddOnBefore: "cmacsAddOnBefore", cmacsAddOnAfter: "cmacsAddOnAfter", cmacsPrefix: "cmacsPrefix", cmacsSuffix: "cmacsSuffix", cmacsSize: "cmacsSize", search: "search", compact: "compact" }, exportAs: ["cmacsInputGroup"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$f, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function CmacsInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, CmacsInputGroupComponent_span_0_Template, 4, 4, "span", 0);
        ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, CmacsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(5, CmacsInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
    } }, directives: [NgIf, CmacsInputGroupSlotComponent, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "compact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsInputGroupComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-input-group',
                exportAs: 'cmacsInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-input-group.component.html',
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-group-compact]': `compact`,
                    '[class.ant-input-search-enter-button]': `search`,
                    '[class.ant-input-search]': `search`,
                    '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-search-sm]': `search && isSmall`,
                    '[class.ant-input-search-large]': `search && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], function () { return [{ type: FocusMonitor }, { type: ElementRef }, { type: ChangeDetectorRef }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzInputDirective: [{
            type: ContentChildren,
            args: [CmacsInputDirective]
        }], cmacsAddOnBeforeIcon: [{
            type: Input
        }], cmacsAddOnAfterIcon: [{
            type: Input
        }], cmacsPrefixIcon: [{
            type: Input
        }], cmacsSuffixIcon: [{
            type: Input
        }], cmacsAddOnBefore: [{
            type: Input
        }], cmacsAddOnAfter: [{
            type: Input
        }], cmacsPrefix: [{
            type: Input
        }], cmacsSuffix: [{
            type: Input
        }], cmacsSize: [{
            type: Input
        }], search: [{
            type: Input
        }], compact: [{
            type: Input
        }] }); })();

class CmacsAutosizeDirective {
    constructor(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    set cmacsAutosize(value) {
        const isAutoSizeType = (data) => {
            return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
        };
        if (typeof value === 'string' || value === true) {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = true;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        }
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = this.maxHeight;
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = this.minHeight;
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = `${minHeight}px`;
        }
        return minHeight;
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = `${maxHeight}px`;
        }
        return maxHeight;
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    ngAfterViewInit() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
}
CmacsAutosizeDirective.ɵfac = function CmacsAutosizeDirective_Factory(t) { return new (t || CmacsAutosizeDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzResizeService)); };
CmacsAutosizeDirective.ɵdir = ɵɵdefineDirective({ type: CmacsAutosizeDirective, selectors: [["textarea", "cmacsAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function CmacsAutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("input", function CmacsAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
    } }, inputs: { cmacsAutosize: "cmacsAutosize" }, exportAs: ["cmacsAutosize"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsAutosizeDirective, [{
        type: Directive,
        args: [{
                selector: 'textarea[cmacsAutosize]',
                exportAs: 'cmacsAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }, { type: Platform }, { type: NzResizeService }]; }, { cmacsAutosize: [{
            type: Input
        }] }); })();

const _c0$g = [[["textarea", "cmacs-input", ""]]];
const _c1$6 = ["textarea[cmacs-input]"];
class CmacsTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.maxCharacterCount = 0;
        this.computeCharacterCount = v => v.length;
        this.formatter = (c, m) => `${c}` + (m > 0 ? `/${m}` : ``);
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.computeCharacterCount(inputValue);
        const dataCount = this.formatter(currentCount, this.maxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTextareaCountComponent.ɵfac = function CmacsTextareaCountComponent_Factory(t) { return new (t || CmacsTextareaCountComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
CmacsTextareaCountComponent.ɵcmp = ɵɵdefineComponent({ type: CmacsTextareaCountComponent, selectors: [["cmacs-textarea-count"]], contentQueries: function CmacsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CmacsInputDirective, 3);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { maxCharacterCount: "maxCharacterCount", computeCharacterCount: "computeCharacterCount", formatter: "formatter" }, ngContentSelectors: _c1$6, decls: 1, vars: 0, template: function CmacsTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c0$g);
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsTextareaCountComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-textarea-count',
                template: `
    <ng-content select="textarea[cmacs-input]"></ng-content>
  `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { nzInputDirective: [{
            type: ContentChild,
            args: [CmacsInputDirective, { static: true }]
        }], maxCharacterCount: [{
            type: Input
        }], computeCharacterCount: [{
            type: Input
        }], formatter: [{
            type: Input
        }] }); })();

class CmacsComponentsV2LibModule {
}
CmacsComponentsV2LibModule.ɵmod = ɵɵdefineNgModule({ type: CmacsComponentsV2LibModule });
CmacsComponentsV2LibModule.ɵinj = ɵɵdefineInjector({ factory: function CmacsComponentsV2LibModule_Factory(t) { return new (t || CmacsComponentsV2LibModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            NzButtonModule,
            NzCheckboxModule,
            NzToolTipModule,
            NzSliderModule,
            NzSwitchModule,
            NzInputModule,
            NzRadioModule,
            NzSelectModule,
            NzDividerModule
        ], NzDividerModule,
        NzButtonModule,
        NzCheckboxModule,
        NzToolTipModule,
        NzSliderModule,
        NzSwitchModule,
        NzInputModule,
        NzRadioModule,
        NzSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmacsComponentsV2LibModule, { declarations: [CmacsComponentsV2LibComponent,
        CmacsCheckboxComponent,
        CmacsCheckboxWrapperComponent,
        CmacsCheckboxGroupComponent,
        CmacsButtonComponent,
        CmacsButtonGroupComponent,
        CmacsColorPickerComponent,
        CmacsSliderHandleComponent,
        CmacsSliderMarksComponent,
        CmacsSliderStepComponent,
        CmacsSliderTrackComponent,
        CmacsSliderComponent,
        CmacsRadioGroupComponent,
        CmacsRadioComponent,
        CmacsRadioButtonDirective,
        CmacsSelectComponent,
        CmacsSelectTopControlComponent,
        CmacsSelectUnselectableDirective,
        CmacsOptionComponent,
        CmacsOptionContainerComponent,
        CmacsOptionGroupComponent,
        CmacsOptionLiComponent,
        NzFilterGroupOptionPipe,
        NzFilterOptionPipe,
        CmacsDividerComponent,
        CmacsInputDirective,
        CmacsInputGroupComponent,
        CmacsAutosizeDirective,
        CmacsInputGroupSlotComponent,
        CmacsTextareaCountComponent], imports: [CommonModule,
        FormsModule,
        NzButtonModule,
        NzCheckboxModule,
        NzToolTipModule,
        NzSliderModule,
        NzSwitchModule,
        NzInputModule,
        NzRadioModule,
        NzSelectModule,
        NzDividerModule], exports: [CmacsDividerComponent,
        NzDividerModule,
        CmacsComponentsV2LibComponent,
        CmacsCheckboxComponent,
        CmacsCheckboxWrapperComponent,
        CmacsCheckboxGroupComponent,
        NzButtonModule,
        CmacsButtonComponent,
        CmacsButtonGroupComponent,
        NzCheckboxModule,
        CmacsColorPickerComponent,
        CmacsSliderHandleComponent,
        CmacsSliderMarksComponent,
        CmacsSliderStepComponent,
        CmacsSliderTrackComponent,
        CmacsSliderComponent,
        NzToolTipModule,
        NzSliderModule,
        NzSwitchModule,
        NzInputModule,
        CmacsRadioGroupComponent,
        CmacsRadioComponent,
        CmacsRadioButtonDirective,
        NzRadioModule,
        CmacsSelectComponent,
        CmacsSelectTopControlComponent,
        CmacsSelectUnselectableDirective,
        CmacsOptionComponent,
        CmacsOptionContainerComponent,
        CmacsOptionGroupComponent,
        CmacsOptionLiComponent,
        NzFilterGroupOptionPipe,
        NzFilterOptionPipe,
        NzSelectModule,
        CmacsInputDirective,
        CmacsInputGroupComponent,
        CmacsAutosizeDirective,
        CmacsInputGroupSlotComponent,
        CmacsTextareaCountComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsComponentsV2LibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CmacsComponentsV2LibComponent,
                    CmacsCheckboxComponent,
                    CmacsCheckboxWrapperComponent,
                    CmacsCheckboxGroupComponent,
                    CmacsButtonComponent,
                    CmacsButtonGroupComponent,
                    CmacsColorPickerComponent,
                    CmacsSliderHandleComponent,
                    CmacsSliderMarksComponent,
                    CmacsSliderStepComponent,
                    CmacsSliderTrackComponent,
                    CmacsSliderComponent,
                    CmacsRadioGroupComponent,
                    CmacsRadioComponent,
                    CmacsRadioButtonDirective,
                    CmacsSelectComponent,
                    CmacsSelectTopControlComponent,
                    CmacsSelectUnselectableDirective,
                    CmacsOptionComponent,
                    CmacsOptionContainerComponent,
                    CmacsOptionGroupComponent,
                    CmacsOptionLiComponent,
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    CmacsDividerComponent,
                    CmacsInputDirective,
                    CmacsInputGroupComponent,
                    CmacsAutosizeDirective,
                    CmacsInputGroupSlotComponent,
                    CmacsTextareaCountComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    NzButtonModule,
                    NzCheckboxModule,
                    NzToolTipModule,
                    NzSliderModule,
                    NzSwitchModule,
                    NzInputModule,
                    NzRadioModule,
                    NzSelectModule,
                    NzDividerModule
                ],
                exports: [
                    CmacsDividerComponent,
                    NzDividerModule,
                    CmacsComponentsV2LibComponent,
                    CmacsCheckboxComponent,
                    CmacsCheckboxWrapperComponent,
                    CmacsCheckboxGroupComponent,
                    NzButtonModule,
                    CmacsButtonComponent,
                    CmacsButtonGroupComponent,
                    NzCheckboxModule,
                    CmacsColorPickerComponent,
                    CmacsSliderHandleComponent,
                    CmacsSliderMarksComponent,
                    CmacsSliderStepComponent,
                    CmacsSliderTrackComponent,
                    CmacsSliderComponent,
                    NzToolTipModule,
                    NzSliderModule,
                    NzSwitchModule,
                    NzInputModule,
                    CmacsRadioGroupComponent,
                    CmacsRadioComponent,
                    CmacsRadioButtonDirective,
                    NzRadioModule,
                    CmacsSelectComponent,
                    CmacsSelectTopControlComponent,
                    CmacsSelectUnselectableDirective,
                    CmacsOptionComponent,
                    CmacsOptionContainerComponent,
                    CmacsOptionGroupComponent,
                    CmacsOptionLiComponent,
                    NzFilterGroupOptionPipe,
                    NzFilterOptionPipe,
                    NzSelectModule,
                    CmacsInputDirective,
                    CmacsInputGroupComponent,
                    CmacsAutosizeDirective,
                    CmacsInputGroupSlotComponent,
                    CmacsTextareaCountComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of cmacs-components-v2-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CmacsAutosizeDirective, CmacsButtonComponent, CmacsButtonGroupComponent, CmacsCheckboxComponent, CmacsCheckboxGroupComponent, CmacsCheckboxWrapperComponent, CmacsColorPickerComponent, CmacsComponentsV2LibComponent, CmacsComponentsV2LibModule, CmacsComponentsV2LibService, CmacsDividerComponent, CmacsInputDirective, CmacsInputGroupComponent, CmacsInputGroupSlotComponent, CmacsOptionComponent, CmacsOptionContainerComponent, CmacsOptionGroupComponent, CmacsOptionLiComponent, CmacsRadioButtonDirective, CmacsRadioComponent, CmacsRadioGroupComponent, CmacsSelectComponent, CmacsSelectService, CmacsSelectTopControlComponent, CmacsSelectUnselectableDirective, CmacsSliderComponent, CmacsSliderHandleComponent, CmacsSliderMarksComponent, CmacsSliderStepComponent, CmacsSliderTrackComponent, CmacsTextareaCountComponent, NzFilterGroupOptionPipe, NzFilterOptionPipe, NzRadioService, NzSliderService, defaultFilterOption };
//# sourceMappingURL=cmacs-components-v2-lib.js.map
