(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs/operators'), require('rxjs'), require('ng-zorro-antd/core/util'), require('@angular/cdk/a11y'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/config'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/checkbox'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/slider'), require('@angular/cdk/keycodes'), require('@angular/cdk/platform'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/input'), require('ng-zorro-antd/radio'), require('@angular/cdk/overlay'), require('ng-zorro-antd/core/animation'), require('ng-zorro-antd/core/no-animation'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/select'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/core/services')) :
    typeof define === 'function' && define.amd ? define('cmacs-components-v2-lib', ['exports', '@angular/core', '@angular/forms', 'rxjs/operators', 'rxjs', 'ng-zorro-antd/core/util', '@angular/cdk/a11y', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/core/config', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/checkbox', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/slider', '@angular/cdk/keycodes', '@angular/cdk/platform', 'ng-zorro-antd/switch', 'ng-zorro-antd/input', 'ng-zorro-antd/radio', '@angular/cdk/overlay', 'ng-zorro-antd/core/animation', 'ng-zorro-antd/core/no-animation', 'ng-zorro-antd/i18n', 'ng-zorro-antd/select', 'ng-zorro-antd/divider', 'ng-zorro-antd/core/services'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['cmacs-components-v2-lib'] = {}, global.ng.core, global.ng.forms, global.rxjs.operators, global.rxjs, global.util, global.ng.cdk.a11y, global.ng.cdk.bidi, global.ng.common, global.button, global.i1$1, global.icon, global.i4$1, global.checkbox, global.i2$1, global.slider, global.ng.cdk.keycodes, global.ng.cdk.platform, global._switch, global.input, global.radio, global.ng.cdk.overlay, global.animation, global.i2$3, global.i2$4, global.select, global.divider, global.i2$5));
}(this, (function (exports, i0, i4, operators, rxjs, util, i1, i2, i3, button, i1$1, icon, i4$1, checkbox, i2$1, slider, keycodes, i2$2, _switch, input, radio, overlay, animation, i2$3, i2$4, select, divider, i2$5) { 'use strict';

    var CmacsComponentsV2LibService = /** @class */ (function () {
        function CmacsComponentsV2LibService() {
        }
        return CmacsComponentsV2LibService;
    }());
    CmacsComponentsV2LibService.ɵfac = function CmacsComponentsV2LibService_Factory(t) { return new (t || CmacsComponentsV2LibService)(); };
    CmacsComponentsV2LibService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsComponentsV2LibService, factory: CmacsComponentsV2LibService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsComponentsV2LibService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var CmacsComponentsV2LibComponent = /** @class */ (function () {
        function CmacsComponentsV2LibComponent() {
        }
        CmacsComponentsV2LibComponent.prototype.ngOnInit = function () {
        };
        return CmacsComponentsV2LibComponent;
    }());
    CmacsComponentsV2LibComponent.ɵfac = function CmacsComponentsV2LibComponent_Factory(t) { return new (t || CmacsComponentsV2LibComponent)(); };
    CmacsComponentsV2LibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsComponentsV2LibComponent, selectors: [["lib-cmacs-components-v2-lib"]], decls: 2, vars: 0, template: function CmacsComponentsV2LibComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " cmacs-components-v2-lib works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsComponentsV2LibComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-cmacs-components-v2-lib',
                        template: "\n    <p>\n      cmacs-components-v2-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["*"];
    var CmacsCheckboxWrapperComponent = /** @class */ (function () {
        function CmacsCheckboxWrapperComponent(renderer, elementRef) {
            this.nzOnChange = new i0.EventEmitter();
            this.checkboxList = [];
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        CmacsCheckboxWrapperComponent.prototype.addCheckbox = function (value) {
            this.checkboxList.push(value);
        };
        CmacsCheckboxWrapperComponent.prototype.removeCheckbox = function (value) {
            this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
        };
        CmacsCheckboxWrapperComponent.prototype.onChange = function () {
            var listOfCheckedValue = this.checkboxList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
            this.nzOnChange.emit(listOfCheckedValue);
        };
        return CmacsCheckboxWrapperComponent;
    }());
    CmacsCheckboxWrapperComponent.ɵfac = function CmacsCheckboxWrapperComponent_Factory(t) { return new (t || CmacsCheckboxWrapperComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CmacsCheckboxWrapperComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCheckboxWrapperComponent, selectors: [["cmacs-checkbox-wrapper"]], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["cmacsCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsCheckboxWrapperComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxWrapperComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-checkbox-wrapper',
                        exportAs: 'cmacsCheckboxWrapper',
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './cmacs-checkbox-wrapper.component.html'
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzOnChange: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["inputElement"];
    var _c1 = ["cmacs-checkbox-v2", ""];
    var _c2 = ["*"];
    var CmacsCheckboxComponent = /** @class */ (function () {
        function CmacsCheckboxComponent(elementRef, renderer, cmacsCheckboxWrapperComponent, cdr, focusMonitor, directionality) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.cmacsCheckboxWrapperComponent = cmacsCheckboxWrapperComponent;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.directionality = directionality;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.onChange = function () { };
            this.onTouched = function () { };
            this.checkedChange = new i0.EventEmitter();
            this.theme = 'light';
            this.autoFocus = false;
            this.disabled = false;
            this.indeterminate = false;
            this.checked = false;
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-wrapper');
        }
        CmacsCheckboxComponent.prototype.hostClick = function (e) {
            e.preventDefault();
            this.focus();
            this.innerCheckedChange(!this.checked);
        };
        CmacsCheckboxComponent.prototype.innerCheckedChange = function (checked) {
            if (!this.disabled) {
                this.checked = checked;
                this.onChange(this.checked);
                this.checkedChange.emit(this.checked);
                if (this.cmacsCheckboxWrapperComponent) {
                    this.cmacsCheckboxWrapperComponent.onChange();
                }
            }
        };
        CmacsCheckboxComponent.prototype.writeValue = function (value) {
            this.checked = value;
            this.cdr.markForCheck();
        };
        CmacsCheckboxComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CmacsCheckboxComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsCheckboxComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.cdr.markForCheck();
        };
        CmacsCheckboxComponent.prototype.focus = function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        CmacsCheckboxComponent.prototype.blur = function () {
            this.inputElement.nativeElement.blur();
        };
        CmacsCheckboxComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                }
            });
            if (this.cmacsCheckboxWrapperComponent) {
                this.cmacsCheckboxWrapperComponent.addCheckbox(this);
            }
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        CmacsCheckboxComponent.prototype.ngAfterViewInit = function () {
            if (this.autoFocus) {
                this.focus();
            }
        };
        CmacsCheckboxComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
            if (this.cmacsCheckboxWrapperComponent) {
                this.cmacsCheckboxWrapperComponent.removeCheckbox(this);
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsCheckboxComponent;
    }());
    CmacsCheckboxComponent.ɵfac = function CmacsCheckboxComponent_Factory(t) { return new (t || CmacsCheckboxComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(CmacsCheckboxWrapperComponent, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCheckboxComponent, selectors: [["", "cmacs-checkbox-v2", ""]], viewQuery: function CmacsCheckboxComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            }
        }, hostVars: 4, hostBindings: function CmacsCheckboxComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CmacsCheckboxComponent_click_HostBindingHandler($event) { return ctx.hostClick($event); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-checkbox-wrapper-checked", ctx.checked)("ant-checkbox-rtl", ctx.dir === "rtl");
            }
        }, inputs: { value: "value", theme: "theme", autoFocus: "autoFocus", disabled: "disabled", indeterminate: "indeterminate", checked: "checked" }, outputs: { checkedChange: "checkedChange" }, exportAs: ["cmacsCheckboxV2"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsCheckboxComponent; }),
                    multi: true
                }
            ])], attrs: _c1, ngContentSelectors: _c2, decls: 7, vars: 11, consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange", "click"], ["inputElement", ""], [1, "ant-checkbox-inner"], ["contentElement", ""]], template: function CmacsCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵelementStart(1, "input", 1, 2);
                i0.ɵɵlistener("ngModelChange", function CmacsCheckboxComponent_Template_input_ngModelChange_1_listener($event) { return ctx.innerCheckedChange($event); })("click", function CmacsCheckboxComponent_Template_input_click_1_listener($event) { return $event.stopPropagation(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "span", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "span", null, 4);
                i0.ɵɵprojection(6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-checkbox-checked", ctx.checked && !ctx.indeterminate)("ant-checkbox-disabled", ctx.disabled)("cmacs-dark-theme", ctx.theme === "dark")("ant-checkbox-indeterminate", ctx.indeterminate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("checked", ctx.checked)("ngModel", ctx.checked)("disabled", ctx.disabled);
            }
        }, directives: [i4.CheckboxControlValueAccessor, i4.NgControlStatus, i4.NgModel], styles: [".ant-checkbox-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#2a7cff}.ant-checkbox-checked .ant-checkbox-inner{background-color:#fff;border-color:#dee0e5}.ant-checkbox-indeterminate .ant-checkbox-inner:after{width:10px;height:10px;background-color:#2a7cff}.ant-checkbox-disabled .ant-checkbox-inner{background-color:#f6f7fb;border-color:#dee0e5!important}.ant-checkbox-input:focus+.ant-checkbox-inner,.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner{border-color:#bec4cd}.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-checkbox-checked:hover .ant-checkbox-inner,.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-checked .ant-checkbox-inner{background-color:#0d1e3b;border-color:#2d3d5a}.cmacs-dark-theme .ant-checkbox-inner{background-color:#0d1e3b;border:1px solid #2d3d5a}.cmacs-dark-theme.ant-checkbox-indeterminate .ant-checkbox-inner:after{width:10px;height:10px;background-color:#2a7cff}.cmacs-dark-theme.ant-checkbox-disabled .ant-checkbox-inner{background-color:#6a7693;border-color:#2d3d5a!important}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-wrapper:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox:hover .ant-checkbox-inner{border-color:#2d3d5a}.cmacs-dark-theme.ant-checkbox-input:focus+.ant-checkbox-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.cmacs-dark-theme.ant-checkbox-checked:hover .ant-checkbox-inner,.cmacs-dark-theme.ant-checkbox-indeterminate:hover .ant-checkbox-inner{border-color:#2a7cff}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsCheckboxComponent.prototype, "autoFocus", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsCheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsCheckboxComponent.prototype, "indeterminate", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsCheckboxComponent.prototype, "checked", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[cmacs-checkbox-v2]',
                        exportAs: 'cmacsCheckboxV2',
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './cmacs-checkbox.component.html',
                        styleUrls: ['./cmacs-checkbox.component.css'],
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsCheckboxComponent; }),
                                multi: true
                            }
                        ],
                        host: {
                            '[class.ant-checkbox-wrapper-checked]': 'checked',
                            '[class.ant-checkbox-rtl]': "dir === 'rtl'",
                            '(click)': 'hostClick($event)'
                        }
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: CmacsCheckboxWrapperComponent, decorators: [{
                            type: i0.Optional
                        }] }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement', { static: true }]
                }], checkedChange: [{
                    type: i0.Output
                }], value: [{
                    type: i0.Input
                }], theme: [{
                    type: i0.Input
                }], autoFocus: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], indeterminate: [{
                    type: i0.Input
                }], checked: [{
                    type: i0.Input
                }] });
    })();

    function CmacsCheckboxGroupComponent_label_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "label", 1);
            i0.ɵɵlistener("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { var option_r1 = ctx.$implicit; return option_r1.checked = $event; })("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var option_r1 = ctx.$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onCheckedChange(option_r1, $event); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", option_r1.disabled || ctx_r0.disabled)("checked", option_r1.checked);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(option_r1.label);
        }
    }
    var CmacsCheckboxGroupComponent = /** @class */ (function () {
        function CmacsCheckboxGroupComponent(elementRef, focusMonitor, cdr, renderer, directionality) {
            this.elementRef = elementRef;
            this.focusMonitor = focusMonitor;
            this.cdr = cdr;
            this.directionality = directionality;
            // tslint:disable-next-line:no-any
            this.onChange = function () { return null; };
            // tslint:disable-next-line:no-any
            this.onTouched = function () { return null; };
            this.options = [];
            this.disabled = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
        }
        CmacsCheckboxGroupComponent.prototype.onCheckedChange = function (option, checked) {
            option.checked = checked;
            this.onChange(this.options);
        };
        CmacsCheckboxGroupComponent.prototype.trackByOption = function (_index, option) {
            return option.value;
        };
        CmacsCheckboxGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        CmacsCheckboxGroupComponent.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.elementRef);
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsCheckboxGroupComponent.prototype.writeValue = function (value) {
            this.options = value;
            this.cdr.markForCheck();
        };
        CmacsCheckboxGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CmacsCheckboxGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsCheckboxGroupComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.cdr.markForCheck();
        };
        return CmacsCheckboxGroupComponent;
    }());
    CmacsCheckboxGroupComponent.ɵfac = function CmacsCheckboxGroupComponent_Factory(t) { return new (t || CmacsCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsCheckboxGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCheckboxGroupComponent, selectors: [["cmacs-checkbox-group-v2"]], inputs: { disabled: "disabled" }, exportAs: ["cmacsCheckboxGroupV2"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsCheckboxGroupComponent; }),
                    multi: true
                }
            ])], decls: 1, vars: 2, consts: [["cmacs-checkbox-v2", "", 3, "disabled", "checked", "checkedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cmacs-checkbox-v2", "", 3, "disabled", "checked", "checkedChange"]], template: function CmacsCheckboxGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
            }
        }, directives: [i3.NgForOf, CmacsCheckboxComponent], encapsulation: 2 });
    __decorate([
        util.InputBoolean()
    ], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-checkbox-group-v2',
                        exportAs: 'cmacsCheckboxGroupV2',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './cmacs-checkbox-group.component.html',
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsCheckboxGroupComponent; }),
                                multi: true
                            }
                        ]
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { disabled: [{
                    type: i0.Input
                }] });
    })();

    var _c0$2 = ["contentElement"];
    var _c1$1 = ["cmacs-button", ""];
    function CmacsButtonComponent_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 1);
        }
    }
    var _c2$1 = ["*"];
    var NZ_CONFIG_MODULE_NAME = 'button';
    var CmacsButtonComponent = /** @class */ (function () {
        function CmacsButtonComponent(elementRef, cdr, renderer, nzConfigService, directionality) {
            var _this = this;
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
            this.destroy$ = new rxjs.Subject();
            this.loading$ = new rxjs.Subject();
            this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
            this.nzConfigService
                .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function () {
                _this.cdr.markForCheck();
            });
        }
        CmacsButtonComponent.prototype.insertSpan = function (nodes, renderer) {
            nodes.forEach(function (node) {
                if (node.nodeName === '#text') {
                    var span = renderer.createElement('span');
                    var parent = renderer.parentNode(node);
                    renderer.insertBefore(parent, span, node);
                    renderer.appendChild(span, node);
                }
            });
        };
        CmacsButtonComponent.prototype.assertIconOnly = function (element, renderer) {
            var listOfNode = Array.from(element.childNodes);
            var iconCount = listOfNode.filter(function (node) { return node.nodeName === 'I'; }).length;
            var noText = listOfNode.every(function (node) { return node.nodeName !== '#text'; });
            var noSpan = listOfNode.every(function (node) { return node.nodeName !== 'SPAN'; });
            var isIconOnly = noSpan && noText && iconCount >= 1;
            if (isIconOnly) {
                renderer.addClass(element, 'ant-btn-icon-only');
            }
        };
        CmacsButtonComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        CmacsButtonComponent.prototype.ngOnChanges = function (changes) {
            var loading = changes.loading, type = changes.type;
            if (loading) {
                this.loading$.next(this.loading);
            }
        };
        CmacsButtonComponent.prototype.ngAfterViewInit = function () {
            this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
            this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
            this.imageWrapper();
        };
        CmacsButtonComponent.prototype.imageWrapper = function () {
            var _this = this;
            var element = this.elementRef.nativeElement;
            var listOfNode = Array.from(element.childNodes);
            var iconList = listOfNode.filter(function (node) { return node.nodeName === 'I'; });
            iconList.forEach(function (icon) {
                _this.renderer.addClass(icon, 'iconspan');
            });
        };
        CmacsButtonComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.loading$
                .pipe(operators.startWith(this.loading), operators.filter(function () { return !!_this.nzIconDirectiveElement; }), operators.takeUntil(this.destroy$))
                .subscribe(function (loading) {
                var nativeElement = _this.nzIconDirectiveElement.nativeElement;
                if (loading) {
                    _this.renderer.setStyle(nativeElement, 'display', 'none');
                }
                else {
                    _this.renderer.removeStyle(nativeElement, 'display');
                }
            });
        };
        CmacsButtonComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsButtonComponent.prototype.hideBtn = function () {
            this.elementRef.nativeElement.style.display = 'none';
        };
        CmacsButtonComponent.prototype.showBtn = function () {
            this.elementRef.nativeElement.style.display = 'inline-block';
        };
        CmacsButtonComponent.prototype.disabledBtn = function () {
            this.elementRef.nativeElement.disabled = true;
        };
        return CmacsButtonComponent;
    }());
    CmacsButtonComponent.ɵfac = function CmacsButtonComponent_Factory(t) { return new (t || CmacsButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1$1.NzConfigService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsButtonComponent, selectors: [["button", "cmacs-button", ""], ["a", "cmacs-button", ""]], contentQueries: function CmacsButtonComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, icon.NzIconDirective, 1, i0.ElementRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
            }
        }, viewQuery: function CmacsButtonComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
            }
        }, hostVars: 36, hostBindings: function CmacsButtonComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
                i0.ɵɵclassProp("ant-btn-primary", ctx.type === "primary")("ant-btn-default", ctx.type === "default")("ant-btn-dashed", ctx.type === "dashed")("ant-btn-link", ctx.type === "link")("ant-btn-text", ctx.type === "text")("ant-btn-danger", ctx.type === "danger")("ant-btn-circle", ctx.shape === "circle")("ant-btn-round", ctx.shape === "round")("ant-btn-lg", ctx.size === "large")("ant-btn-sm", ctx.size === "small")("ant-btn-dangerous", ctx.danger)("ant-btn-loading", ctx.loading)("ant-btn-background-ghost", ctx.ghost)("ant-btn-block", ctx.block)("ant-input-search-button", ctx.search)("cmacs-btn-action", ctx.action)("ant-btn-rtl", ctx.dir === "rtl");
            }
        }, inputs: { block: "block", ghost: "ghost", search: "search", loading: "loading", danger: "danger", disabled: "disabled", tabIndex: "tabIndex", type: "type", shape: "shape", size: "size", action: "action" }, exportAs: ["cmacsButton"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c1$1, ngContentSelectors: _c2$1, decls: 2, vars: 1, consts: [["nz-icon", "", "type", "loading", 4, "ngIf"], ["nz-icon", "", "type", "loading"]], template: function CmacsButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, CmacsButtonComponent_i_0_Template, 1, 0, "i", 0);
                i0.ɵɵprojection(1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.loading);
            }
        }, directives: [i3.NgIf, i4$1.ɵNzTransitionPatchDirective], styles: [".ant-btn{font-size:14px;line-height:0;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px}.ant-btn-primary{background-color:#2a7cff;border:1px solid #2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover{border:none;color:#97a0ae;background-color:#f3f3f4;cursor:default}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default i,.ant-btn-primary i{font-size:16px;position:relative;height:16px;width:16px;vertical-align:middle;margin:2px}.ant-btn-default:not(.ant-btn-icon-only) i,.ant-btn-primary:not(.ant-btn-icon-only) i{margin-right:5px}.ant-btn-icon-only{vertical-align:unset!important}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-default[disabled],.ant-btn-default[disabled]:focus,.ant-btn-default[disabled]:hover{color:#97a0ae;background-color:#fff;border-color:#dee0e5;cursor:default}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none}.ant-btn-icon-only i{color:#656c79}.ant-btn-icon-only,.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{border:1px solid #dee0e5}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:focus i,.ant-btn-icon-only:enabled:hover i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):focus,.ant-btn-icon-only:not(.ant-btn-background-ghost):hover{background-color:#fff}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;cursor:default}.ant-btn-icon-only:disabled span i{color:#97a0ae}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "block", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "ghost", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "search", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "loading", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "danger", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "disabled", void 0);
    __decorate([
        i1$1.WithConfig()
    ], CmacsButtonComponent.prototype, "size", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonComponent.prototype, "action", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'button[cmacs-button], a[cmacs-button]',
                        exportAs: 'cmacsButton',
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './cmacs-button.component.html',
                        styleUrls: ['./cmacs-button.component.css'],
                        host: {
                            '[class.ant-btn-primary]': "type === 'primary'",
                            '[class.ant-btn-default]': "type === 'default'",
                            '[class.ant-btn-dashed]': "type === 'dashed'",
                            '[class.ant-btn-link]': "type === 'link'",
                            '[class.ant-btn-text]': "type === 'text'",
                            '[class.ant-btn-danger]': "type === 'danger'",
                            '[class.ant-btn-circle]': "shape === 'circle'",
                            '[class.ant-btn-round]': "shape === 'round'",
                            '[class.ant-btn-lg]': "size === 'large'",
                            '[class.ant-btn-sm]': "size === 'small'",
                            '[class.ant-btn-dangerous]': "danger",
                            '[class.ant-btn-loading]': "loading",
                            '[class.ant-btn-background-ghost]': "ghost",
                            '[class.ant-btn-block]': "block",
                            '[class.ant-input-search-button]': "search",
                            '[class.cmacs-btn-action]': "action",
                            '[class.ant-btn-rtl]': "dir === 'rtl'",
                            '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                            '[attr.disabled]': 'disabled || null'
                        }
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1$1.NzConfigService }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { nzIconDirectiveElement: [{
                    type: i0.ContentChild,
                    args: [icon.NzIconDirective, { read: i0.ElementRef }]
                }], block: [{
                    type: i0.Input
                }], ghost: [{
                    type: i0.Input
                }], search: [{
                    type: i0.Input
                }], loading: [{
                    type: i0.Input
                }], danger: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], tabIndex: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], shape: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], action: [{
                    type: i0.Input
                }], contentElement: [{
                    type: i0.ViewChild,
                    args: ['contentElement']
                }] });
    })();

    function CmacsButtonGroupComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveLeft(); });
            i0.ɵɵelement(1, "i", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", ctx_r0.isDisableLeft());
        }
    }
    function CmacsButtonGroupComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moveRight(); });
            i0.ɵɵelement(1, "i", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("disabled", ctx_r1.isDisableRight());
        }
    }
    var _c0$3 = ["*"];
    var CmacsButtonGroupComponent = /** @class */ (function () {
        function CmacsButtonGroupComponent(elementRef, directionality) {
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.size = 'default';
            this.overlap = false;
            this.disabled = false;
            this.disabledNav = false;
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.buttons = [];
            this.indexBtn = 0;
            this.elementRef.nativeElement.classList.add('ant-btn-group');
        }
        CmacsButtonGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        CmacsButtonGroupComponent.prototype.ngAfterContentInit = function () {
            var e_1, _b;
            this.buttons = this.contentButtons.toArray();
            if (this.overlap) {
                for (var index = 1; index < this.buttons.length; index++) {
                    this.buttons[index].hideBtn();
                }
            }
            if (this.disabled) {
                try {
                    for (var _c = __values(this.buttons), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var iterator = _d.value;
                        iterator.disabledBtn();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        };
        CmacsButtonGroupComponent.prototype.moveLeft = function () {
            this.buttons[this.indexBtn--].hideBtn();
            this.buttons[this.indexBtn].showBtn();
        };
        CmacsButtonGroupComponent.prototype.moveRight = function () {
            this.buttons[this.indexBtn++].hideBtn();
            this.buttons[this.indexBtn].showBtn();
        };
        CmacsButtonGroupComponent.prototype.isDisableLeft = function () {
            return this.indexBtn === 0 || this.disabled || this.disabledNav;
        };
        CmacsButtonGroupComponent.prototype.isDisableRight = function () {
            return this.indexBtn === this.buttons.length - 1 || this.disabled || this.disabledNav;
        };
        CmacsButtonGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsButtonGroupComponent;
    }());
    CmacsButtonGroupComponent.ɵfac = function CmacsButtonGroupComponent_Factory(t) { return new (t || CmacsButtonGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsButtonGroupComponent, selectors: [["cmacs-button-group"]], contentQueries: function CmacsButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CmacsButtonComponent, 0);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentButtons = _t);
            }
        }, hostVars: 6, hostBindings: function CmacsButtonGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-btn-group-lg", ctx.size === "large")("ant-btn-group-sm", ctx.size === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
            }
        }, inputs: { size: "size", overlap: "overlap", disabled: "disabled", disabledNav: "disabledNav" }, exportAs: ["cmacsButtonGroup"], ngContentSelectors: _c0$3, decls: 3, vars: 2, consts: [["cmacs-button", "", 3, "disabled", "click", 4, "ngIf"], ["cmacs-button", "", 3, "disabled", "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "iconArrowLarge-Chevron-Right"]], template: function CmacsButtonGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, CmacsButtonGroupComponent_button_0_Template, 2, 1, "button", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵtemplate(2, CmacsButtonGroupComponent_button_2_Template, 2, 1, "button", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.overlap);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.overlap);
            }
        }, directives: [i3.NgIf, CmacsButtonComponent], styles: [""], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsButtonGroupComponent.prototype, "overlap", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonGroupComponent.prototype, "disabled", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsButtonGroupComponent.prototype, "disabledNav", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonGroupComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'cmacs-button-group',
                        exportAs: 'cmacsButtonGroup',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        host: {
                            '[class.ant-btn-group-lg]': "size === 'large'",
                            '[class.ant-btn-group-sm]': "size === 'small'",
                            '[class.ant-btn-group-rtl]': "dir === 'rtl'"
                        },
                        styleUrls: ['./cmacs-button-group.component.css'],
                        templateUrl: './cmacs-button-group.component.html'
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { size: [{
                    type: i0.Input
                }], overlap: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], disabledNav: [{
                    type: i0.Input
                }], contentButtons: [{
                    type: i0.ContentChildren,
                    args: [CmacsButtonComponent]
                }] });
    })();

    function CmacsColorPickerComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵelementStart(2, "div", 4);
            i0.ɵɵlistener("click", function CmacsColorPickerComponent_ng_container_0_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.setColor("transparent"); });
            i0.ɵɵelement(3, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", "transparent" === ctx_r0.color);
        }
    }
    function CmacsColorPickerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 4);
            i0.ɵɵlistener("click", function CmacsColorPickerComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var $color_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setColor($color_r4); });
            i0.ɵɵelement(1, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var $color_r4 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", $color_r4 === ctx_r1.color);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("background-color", $color_r4)("border-color", $color_r4 === "#ffffff" ? "#dee0e5" : "transparent");
        }
    }
    var CmacsColorPickerComponent = /** @class */ (function () {
        function CmacsColorPickerComponent(ref, cdr) {
            this.ref = ref;
            this.cdr = cdr;
            this.type = 'basic';
            this.colorChange = new i0.EventEmitter();
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
        CmacsColorPickerComponent.prototype.setColor = function (color) {
            this.color = color;
            this.colorChange.emit(color);
        };
        CmacsColorPickerComponent.prototype.isColorPickerType = function (type) {
            return this.type === type;
        };
        CmacsColorPickerComponent.prototype.ngAfterViewInit = function () {
            this.width = this.ref.nativeElement.offsetWidth;
            this.cdr.detectChanges();
        };
        return CmacsColorPickerComponent;
    }());
    CmacsColorPickerComponent.ɵfac = function CmacsColorPickerComponent_Factory(t) { return new (t || CmacsColorPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    CmacsColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsColorPickerComponent, selectors: [["cmacs-color-picker"]], hostAttrs: [1, "cmacs-color-picker"], inputs: { type: "type", color: "color" }, outputs: { colorChange: "colorChange" }, exportAs: ["cmacsColorPicker"], decls: 3, vars: 4, consts: [[4, "ngIf"], [2, "display", "inline-block", "float", "right"], ["class", "cmacs-color-picker-color-wrapper", 3, "cmacs-color-picker-color-wrapper-selected", "click", 4, "ngFor", "ngForOf"], [2, "width", "18px", "margin-right", "4px", "display", "inline-block"], [1, "cmacs-color-picker-color-wrapper", 3, "click"], [1, "cmacs-color-picker-color-transparent"], [1, "cmacs-color-picker-color"]], template: function CmacsColorPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsColorPickerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵtemplate(2, CmacsColorPickerComponent_div_2_Template, 2, 6, "div", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.isColorPickerType("basicWithTransparent"));
                i0.ɵɵadvance(1);
                i0.ɵɵstyleProp("width", ctx.isColorPickerType("basicWithTransparent") ? ctx.width - 22 + "px" : "inherit");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.basicColorList);
            }
        }, directives: [i3.NgIf, i3.NgForOf], styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent:before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsColorPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-color-picker',
                        exportAs: 'cmacsColorPicker',
                        templateUrl: './cmacs-color-picker.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            class: 'cmacs-color-picker'
                        },
                        styleUrls: ['./cmacs-color-picker.component.css'],
                        styles: [
                            "\n      cmacs-color-picker {\n        display: block;\n      }\n    "
                        ]
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { type: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], colorChange: [{
                    type: i0.Output
                }] });
    })();

    var NzSliderService = /** @class */ (function () {
        function NzSliderService() {
            this.isDragging = false;
        }
        return NzSliderService;
    }());
    NzSliderService.ɵfac = function NzSliderService_Factory(t) { return new (t || NzSliderService)(); };
    NzSliderService.ɵprov = i0.ɵɵdefineInjectable({ token: NzSliderService, factory: NzSliderService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSliderService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$4 = ["handle"];
    var CmacsSliderHandleComponent = /** @class */ (function () {
        function CmacsSliderHandleComponent(sliderService, cdr) {
            var _this = this;
            this.sliderService = sliderService;
            this.cdr = cdr;
            this.tooltipVisible = 'default';
            this.active = false;
            this.dir = 'ltr';
            this.style = {};
            this.enterHandle = function () {
                if (!_this.sliderService.isDragging) {
                    _this.toggleTooltip(true);
                    _this.updateTooltipPosition();
                    _this.cdr.detectChanges();
                }
            };
            this.leaveHandle = function () {
                if (!_this.sliderService.isDragging) {
                    _this.toggleTooltip(false);
                    _this.cdr.detectChanges();
                }
            };
        }
        CmacsSliderHandleComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            var offset = changes.offset, value = changes.value, active = changes.active, tooltipVisible = changes.tooltipVisible, reverse = changes.reverse, dir = changes.dir;
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
                Promise.resolve().then(function () { return _this.toggleTooltip(true, true); });
            }
        };
        CmacsSliderHandleComponent.prototype.focus = function () {
            var _a;
            (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
        };
        CmacsSliderHandleComponent.prototype.toggleTooltip = function (show, force) {
            if (force === void 0) { force = false; }
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
        };
        CmacsSliderHandleComponent.prototype.updateTooltipTitle = function () {
            this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : "" + this.value;
        };
        CmacsSliderHandleComponent.prototype.updateTooltipPosition = function () {
            var _this = this;
            if (this.tooltip) {
                Promise.resolve().then(function () { var _a; return (_a = _this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
            }
        };
        CmacsSliderHandleComponent.prototype.updateStyle = function () {
            var _c;
            var vertical = this.vertical;
            var reverse = this.reverse;
            var offset = this.offset;
            var positionStyle = vertical
                ? (_c = {},
                    _c[reverse ? 'top' : 'bottom'] = offset + "%",
                    _c[reverse ? 'bottom' : 'top'] = 'auto',
                    _c.transform = reverse ? null : "translateY(+50%)",
                    _c) : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: "translateX(" + (reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-') + "50%)" });
            this.style = positionStyle;
            this.cdr.markForCheck();
        };
        CmacsSliderHandleComponent.prototype.getHorizontalStylePosition = function () {
            var left = this.reverse ? 'auto' : this.offset + "%";
            var right = this.reverse ? this.offset + "%" : 'auto';
            if (this.dir === 'rtl') {
                var tmp = left;
                left = right;
                right = tmp;
            }
            return { left: left, right: right };
        };
        return CmacsSliderHandleComponent;
    }());
    CmacsSliderHandleComponent.ɵfac = function CmacsSliderHandleComponent_Factory(t) { return new (t || CmacsSliderHandleComponent)(i0.ɵɵdirectiveInject(NzSliderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    CmacsSliderHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderHandleComponent, selectors: [["cmacs-slider-handle"]], viewQuery: function CmacsSliderHandleComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$4, 1);
                i0.ɵɵviewQuery(i2$1.NzTooltipDirective, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handleEl = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
            }
        }, hostBindings: function CmacsSliderHandleComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mouseenter", function CmacsSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function CmacsSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
            }
        }, inputs: { vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter", active: "active", dir: "dir" }, exportAs: ["cmacsSliderHandle"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function CmacsSliderHandleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
            }
        }, directives: [i2$1.NzTooltipDirective, i3.NgStyle], styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSliderHandleComponent.prototype, "active", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderHandleComponent, [{
                type: i0.Component,
                args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
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
            }], function () { return [{ type: NzSliderService }, { type: i0.ChangeDetectorRef }]; }, { handleEl: [{
                    type: i0.ViewChild,
                    args: ['handle', { static: false }]
                }], tooltip: [{
                    type: i0.ViewChild,
                    args: [i2$1.NzTooltipDirective, { static: false }]
                }], vertical: [{
                    type: i0.Input
                }], reverse: [{
                    type: i0.Input
                }], offset: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], tooltipVisible: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tooltipFormatter: [{
                    type: i0.Input
                }], active: [{
                    type: i0.Input
                }], dir: [{
                    type: i0.Input
                }] });
    })();

    function CmacsSliderMarksComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 2);
        }
        if (rf & 2) {
            var attr_r1 = ctx.$implicit;
            i0.ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
            i0.ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, i0.ɵɵsanitizeHtml);
        }
    }
    var CmacsSliderMarksComponent = /** @class */ (function () {
        function CmacsSliderMarksComponent() {
            this.lowerBound = null;
            this.upperBound = null;
            this.marksArray = [];
            this.vertical = false;
            this.included = false;
            this.marks = [];
        }
        CmacsSliderMarksComponent.prototype.ngOnChanges = function (changes) {
            var marksArray = changes.marksArray, lowerBound = changes.lowerBound, upperBound = changes.upperBound, reverse = changes.reverse;
            if (marksArray || reverse) {
                this.buildMarks();
            }
            if (marksArray || lowerBound || upperBound || reverse) {
                this.togglePointActive();
            }
        };
        CmacsSliderMarksComponent.prototype.trackById = function (_index, mark) {
            return mark.value;
        };
        CmacsSliderMarksComponent.prototype.buildMarks = function () {
            var _this = this;
            var range = this.max - this.min;
            this.marks = this.marksArray.map(function (mark) {
                var value = mark.value, offset = mark.offset, config = mark.config;
                var style = _this.getMarkStyles(value, range, config);
                var label = isConfigObject(config) ? config.label : config;
                return {
                    label: label,
                    offset: offset,
                    style: style,
                    value: value,
                    config: config,
                    active: false
                };
            });
        };
        CmacsSliderMarksComponent.prototype.getMarkStyles = function (value, range, config) {
            var style;
            var markValue = this.reverse ? this.max + this.min - value : value;
            if (this.vertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: ((markValue - this.min) / range) * 100 + "%"
                };
            }
            else {
                style = {
                    transform: "translate3d(-50%, 0, 0)",
                    left: ((markValue - this.min) / range) * 100 + "%"
                };
            }
            if (isConfigObject(config) && config.style) {
                style = Object.assign(Object.assign({}, style), config.style);
            }
            return style;
        };
        CmacsSliderMarksComponent.prototype.togglePointActive = function () {
            var _this = this;
            if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
                this.marks.forEach(function (mark) {
                    var value = mark.value;
                    var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= _this.upperBound && value >= _this.lowerBound);
                    mark.active = isActive;
                });
            }
        };
        return CmacsSliderMarksComponent;
    }());
    CmacsSliderMarksComponent.ɵfac = function CmacsSliderMarksComponent_Factory(t) { return new (t || CmacsSliderMarksComponent)(); };
    CmacsSliderMarksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderMarksComponent, selectors: [["cmacs-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderMarks"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function CmacsSliderMarksComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, CmacsSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
            }
        }, directives: [i3.NgForOf, i3.NgStyle], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSliderMarksComponent.prototype, "vertical", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderMarksComponent.prototype, "included", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderMarksComponent, [{
                type: i0.Component,
                args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        selector: 'cmacs-slider-marks',
                        exportAs: 'cmacsSliderMarks',
                        templateUrl: './cmacs-slider-marks.component.html'
                    }]
            }], null, { lowerBound: [{
                    type: i0.Input
                }], upperBound: [{
                    type: i0.Input
                }], marksArray: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], vertical: [{
                    type: i0.Input
                }], included: [{
                    type: i0.Input
                }], reverse: [{
                    type: i0.Input
                }] });
    })();
    function isConfigObject(config) {
        return typeof config !== 'string';
    }

    function CmacsSliderStepComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 2);
        }
        if (rf & 2) {
            var mark_r1 = ctx.$implicit;
            i0.ɵɵclassProp("ant-slider-dot-active", mark_r1.active);
            i0.ɵɵproperty("ngStyle", mark_r1.style);
        }
    }
    var CmacsSliderStepComponent = /** @class */ (function () {
        function CmacsSliderStepComponent() {
            this.lowerBound = null;
            this.upperBound = null;
            this.marksArray = [];
            this.vertical = false;
            this.included = false;
            this.steps = [];
        }
        CmacsSliderStepComponent.prototype.ngOnChanges = function (changes) {
            var marksArray = changes.marksArray, lowerBound = changes.lowerBound, upperBound = changes.upperBound, reverse = changes.reverse;
            if (marksArray || reverse) {
                this.buildSteps();
            }
            if (marksArray || lowerBound || upperBound || reverse) {
                this.togglePointActive();
            }
        };
        CmacsSliderStepComponent.prototype.trackById = function (_index, step) {
            return step.value;
        };
        CmacsSliderStepComponent.prototype.buildSteps = function () {
            var _this = this;
            var orient = this.vertical ? 'bottom' : 'left';
            this.steps = this.marksArray.map(function (mark) {
                var _a;
                var value = mark.value, config = mark.config;
                var offset = mark.offset;
                var range = _this.max - _this.min;
                if (_this.reverse) {
                    offset = ((_this.max - value) / range) * 100;
                }
                return {
                    value: value,
                    offset: offset,
                    config: config,
                    active: false,
                    style: (_a = {},
                        _a[orient] = offset + "%",
                        _a)
                };
            });
        };
        CmacsSliderStepComponent.prototype.togglePointActive = function () {
            var _this = this;
            if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
                this.steps.forEach(function (step) {
                    var value = step.value;
                    var isActive = (!_this.included && value === _this.upperBound) || (_this.included && value <= _this.upperBound && value >= _this.lowerBound);
                    step.active = isActive;
                });
            }
        };
        return CmacsSliderStepComponent;
    }());
    CmacsSliderStepComponent.ɵfac = function CmacsSliderStepComponent_Factory(t) { return new (t || CmacsSliderStepComponent)(); };
    CmacsSliderStepComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderStepComponent, selectors: [["cmacs-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderStep"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function CmacsSliderStepComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, CmacsSliderStepComponent_span_1_Template, 1, 3, "span", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
            }
        }, directives: [i3.NgForOf, i3.NgStyle], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSliderStepComponent.prototype, "vertical", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderStepComponent.prototype, "included", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderStepComponent, [{
                type: i0.Component,
                args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'cmacs-slider-step',
                        exportAs: 'cmacsSliderStep',
                        preserveWhitespaces: false,
                        templateUrl: './cmacs-slider-step.component.html'
                    }]
            }], null, { lowerBound: [{
                    type: i0.Input
                }], upperBound: [{
                    type: i0.Input
                }], marksArray: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], vertical: [{
                    type: i0.Input
                }], included: [{
                    type: i0.Input
                }], reverse: [{
                    type: i0.Input
                }] });
    })();

    var CmacsSliderTrackComponent = /** @class */ (function () {
        function CmacsSliderTrackComponent() {
            this.offset = 0;
            this.reverse = false;
            this.dir = 'ltr';
            this.length = 0;
            this.vertical = false;
            this.included = false;
            this.style = {};
        }
        CmacsSliderTrackComponent.prototype.ngOnChanges = function () {
            var _a;
            var vertical = this.vertical;
            var reverse = this.reverse;
            var visibility = this.included ? 'visible' : 'hidden';
            var offset = this.offset;
            var length = this.length;
            var positonStyle = vertical
                ? (_a = {},
                    _a[reverse ? 'top' : 'bottom'] = offset + "%",
                    _a[reverse ? 'bottom' : 'top'] = 'auto',
                    _a.height = length + "%",
                    _a.visibility = visibility,
                    _a) : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: length + "%", visibility: visibility });
            this.style = positonStyle;
        };
        CmacsSliderTrackComponent.prototype.getHorizontalStylePosition = function () {
            var left = this.reverse ? 'auto' : this.offset + "%";
            var right = this.reverse ? this.offset + "%" : 'auto';
            if (this.dir === 'rtl') {
                var tmp = left;
                left = right;
                right = tmp;
            }
            return { left: left, right: right };
        };
        return CmacsSliderTrackComponent;
    }());
    CmacsSliderTrackComponent.ɵfac = function CmacsSliderTrackComponent_Factory(t) { return new (t || CmacsSliderTrackComponent)(); };
    CmacsSliderTrackComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderTrackComponent, selectors: [["cmacs-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["cmacsSliderTrack"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function CmacsSliderTrackComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngStyle", ctx.style);
            }
        }, directives: [i3.NgStyle], styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputNumber()
    ], CmacsSliderTrackComponent.prototype, "offset", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderTrackComponent.prototype, "reverse", void 0);
    __decorate([
        util.InputNumber()
    ], CmacsSliderTrackComponent.prototype, "length", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderTrackComponent.prototype, "vertical", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderTrackComponent.prototype, "included", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderTrackComponent, [{
                type: i0.Component,
                args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'cmacs-slider-track',
                        exportAs: 'cmacsSliderTrack',
                        preserveWhitespaces: false,
                        templateUrl: './cmacs-slider-track.component.html',
                        styleUrls: ['./cmacs-slider-track.component.css']
                    }]
            }], null, { offset: [{
                    type: i0.Input
                }], reverse: [{
                    type: i0.Input
                }], dir: [{
                    type: i0.Input
                }], length: [{
                    type: i0.Input
                }], vertical: [{
                    type: i0.Input
                }], included: [{
                    type: i0.Input
                }] });
    })();

    var _c0$5 = ["slider"];
    function CmacsSliderComponent_cmacs_slider_step_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "cmacs-slider-step", 7);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("min", ctx_r1.min)("max", ctx_r1.max)("vertical", ctx_r1.vertical)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.included)("reverse", ctx_r1.reverse);
        }
    }
    function CmacsSliderComponent_cmacs_slider_handle_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "cmacs-slider-handle", 8);
        }
        if (rf & 2) {
            var handle_r4 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("vertical", ctx_r2.vertical)("reverse", ctx_r2.reverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.tipFormatter)("tooltipVisible", ctx_r2.tooltipVisible)("tooltipPlacement", ctx_r2.tooltipPlacement)("dir", ctx_r2.dir);
        }
    }
    function CmacsSliderComponent_cmacs_slider_marks_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "cmacs-slider-marks", 9);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("vertical", ctx_r3.vertical)("min", ctx_r3.min)("max", ctx_r3.max)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.included)("reverse", ctx_r3.reverse);
        }
    }
    var CmacsSliderComponent = /** @class */ (function () {
        function CmacsSliderComponent(sliderService, cdr, platform, directionality) {
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
            this.onAfterChange = new i0.EventEmitter();
            this.value = null;
            this.cacheSliderStart = null;
            this.cacheSliderLength = null;
            this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
            this.track = { offset: null, length: null }; // Track's offset and length
            this.handles = []; // Handles' offset
            this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
            this.bounds = { lower: null, upper: null }; // now for nz-slider-step
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
        }
        CmacsSliderComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
                _this.updateTrackAndHandles();
                _this.onValueChange(_this.getValue(true));
            });
            this.handles = generateHandlers(this.range ? 2 : 1);
            this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
            this.bindDraggingHandlers();
            this.toggleDragDisabled(this.disabled);
            if (this.getValue() === null) {
                this.setValue(this.formatValue(null));
            }
        };
        CmacsSliderComponent.prototype.ngOnChanges = function (changes) {
            var disabled = changes.disabled, marks = changes.marks, range = changes.range;
            if (disabled && !disabled.firstChange) {
                this.toggleDragDisabled(disabled.currentValue);
            }
            else if (marks && !marks.firstChange) {
                this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
            }
            else if (range && !range.firstChange) {
                this.setValue(this.formatValue(null));
            }
        };
        CmacsSliderComponent.prototype.ngOnDestroy = function () {
            this.unsubscribeDrag();
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsSliderComponent.prototype.writeValue = function (val) {
            this.setValue(val, true);
        };
        CmacsSliderComponent.prototype.onValueChange = function (_value) { };
        CmacsSliderComponent.prototype.onTouched = function () { };
        CmacsSliderComponent.prototype.registerOnChange = function (fn) {
            this.onValueChange = fn;
        };
        CmacsSliderComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsSliderComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.toggleDragDisabled(isDisabled);
        };
        /**
         * Event handler is only triggered when a slider handler is focused.
         */
        CmacsSliderComponent.prototype.onKeyDown = function (e) {
            var code = e.keyCode;
            var isIncrease = code === keycodes.RIGHT_ARROW || code === keycodes.UP_ARROW;
            var isDecrease = code === keycodes.LEFT_ARROW || code === keycodes.DOWN_ARROW;
            if (!(isIncrease || isDecrease)) {
                return;
            }
            e.preventDefault();
            var step = (isDecrease ? -this.step : this.step) * (this.reverse ? -1 : 1);
            step = this.dir === 'rtl' ? step * -1 : step;
            var newVal = this.range ? this.value[this.activeValueIndex] + step : this.value + step;
            this.setActiveValue(util.ensureNumberInRange(newVal, this.min, this.max));
        };
        CmacsSliderComponent.prototype.setValue = function (value, isWriteValue) {
            if (isWriteValue === void 0) { isWriteValue = false; }
            if (isWriteValue) {
                this.value = this.formatValue(value);
                this.updateTrackAndHandles();
            }
            else if (!valuesEqual(this.value, value)) {
                this.value = value;
                this.updateTrackAndHandles();
                this.onValueChange(this.getValue(true));
            }
        };
        CmacsSliderComponent.prototype.getValue = function (cloneAndSort) {
            if (cloneAndSort === void 0) { cloneAndSort = false; }
            if (cloneAndSort && this.value && isValueRange(this.value)) {
                return __spread(this.value).sort(function (a, b) { return a - b; });
            }
            return this.value;
        };
        /**
         * Clone & sort current value and convert them to offsets, then return the new one.
         */
        CmacsSliderComponent.prototype.getValueToOffset = function (value) {
            var _this = this;
            var normalizedValue = value;
            if (typeof normalizedValue === 'undefined') {
                normalizedValue = this.getValue(true);
            }
            return isValueRange(normalizedValue) ? normalizedValue.map(function (val) { return _this.valueToOffset(val); }) : this.valueToOffset(normalizedValue);
        };
        /**
         * Find the closest value to be activated.
         */
        CmacsSliderComponent.prototype.setActiveValueIndex = function (pointerValue) {
            var value = this.getValue();
            if (isValueRange(value)) {
                var minimal_1 = null;
                var gap_1;
                var activeIndex_1 = -1;
                value.forEach(function (val, index) {
                    gap_1 = Math.abs(pointerValue - val);
                    if (minimal_1 === null || gap_1 < minimal_1) {
                        minimal_1 = gap_1;
                        activeIndex_1 = index;
                    }
                });
                this.activeValueIndex = activeIndex_1;
                this.handlerComponents.toArray()[activeIndex_1].focus();
            }
            else {
                this.handlerComponents.toArray()[0].focus();
            }
        };
        CmacsSliderComponent.prototype.setActiveValue = function (pointerValue) {
            if (isValueRange(this.value)) {
                var newValue = __spread(this.value);
                newValue[this.activeValueIndex] = pointerValue;
                this.setValue(newValue);
            }
            else {
                this.setValue(pointerValue);
            }
        };
        /**
          * Update track and handles' position and length.
          */
        CmacsSliderComponent.prototype.updateTrackAndHandles = function () {
            var _b, _c;
            var value = this.getValue();
            var offset = this.getValueToOffset(value);
            var valueSorted = this.getValue(true);
            var offsetSorted = this.getValueToOffset(valueSorted);
            var boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
            var trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
            this.handles.forEach(function (handle, index) {
                handle.offset = isValueRange(offset) ? offset[index] : offset;
                handle.value = isValueRange(value) ? value[index] : value || 0;
            });
            _b = __read(boundParts, 2), this.bounds.lower = _b[0], this.bounds.upper = _b[1];
            _c = __read(trackParts, 2), this.track.offset = _c[0], this.track.length = _c[1];
            this.cdr.markForCheck();
        };
        CmacsSliderComponent.prototype.onDragStart = function (value) {
            this.toggleDragMoving(true);
            this.cacheSliderProperty();
            this.setActiveValueIndex(this.getLogicalValue(value));
            this.setActiveValue(this.getLogicalValue(value));
            this.showHandleTooltip(this.range ? this.activeValueIndex : 0);
        };
        CmacsSliderComponent.prototype.onDragMove = function (value) {
            this.setActiveValue(this.getLogicalValue(value));
            this.cdr.markForCheck();
        };
        CmacsSliderComponent.prototype.getLogicalValue = function (value) {
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
        };
        CmacsSliderComponent.prototype.onDragEnd = function () {
            this.onAfterChange.emit(this.getValue(true));
            this.toggleDragMoving(false);
            this.cacheSliderProperty(true);
            this.hideAllHandleTooltip();
            this.cdr.markForCheck();
        };
        /**
         * Create user interactions handles.
         */
        CmacsSliderComponent.prototype.bindDraggingHandlers = function () {
            var _this = this;
            if (!this.platform.isBrowser) {
                return;
            }
            var sliderDOM = this.slider.nativeElement;
            var orientField = this.vertical ? 'pageY' : 'pageX';
            var mouse = {
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup',
                pluckKey: [orientField]
            };
            var touch = {
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend',
                pluckKey: ['touches', '0', orientField],
                filter: function (e) { return e instanceof TouchEvent; }
            };
            [mouse, touch].forEach(function (source) {
                var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _b = source.filter, filterFunc = _b === void 0 ? function () { return true; } : _b;
                source.startPlucked$ = rxjs.fromEvent(sliderDOM, start).pipe(operators.filter(filterFunc), operators.tap(util.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.map(function (position) { return _this.findClosestValue(position); }));
                source.end$ = rxjs.fromEvent(document, end);
                source.moveResolved$ = rxjs.fromEvent(document, move).pipe(operators.filter(filterFunc), operators.tap(util.silentEvent), operators.pluck.apply(void 0, __spread(pluckKey)), operators.distinctUntilChanged(), operators.map(function (position) { return _this.findClosestValue(position); }), operators.distinctUntilChanged(), operators.takeUntil(source.end$));
            });
            this.dragStart$ = rxjs.merge(mouse.startPlucked$, touch.startPlucked$);
            this.dragMove$ = rxjs.merge(mouse.moveResolved$, touch.moveResolved$);
            this.dragEnd$ = rxjs.merge(mouse.end$, touch.end$);
        };
        CmacsSliderComponent.prototype.subscribeDrag = function (periods) {
            if (periods === void 0) { periods = ['start', 'move', 'end']; }
            if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
                this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
            }
            if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
                this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
            }
            if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
                this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
            }
        };
        CmacsSliderComponent.prototype.unsubscribeDrag = function (periods) {
            if (periods === void 0) { periods = ['start', 'move', 'end']; }
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
        };
        CmacsSliderComponent.prototype.toggleDragMoving = function (movable) {
            var periods = ['move', 'end'];
            if (movable) {
                this.sliderService.isDragging = true;
                this.subscribeDrag(periods);
            }
            else {
                this.sliderService.isDragging = false;
                this.unsubscribeDrag(periods);
            }
        };
        CmacsSliderComponent.prototype.toggleDragDisabled = function (disabled) {
            if (disabled) {
                this.unsubscribeDrag();
            }
            else {
                this.subscribeDrag(['start']);
            }
        };
        CmacsSliderComponent.prototype.findClosestValue = function (position) {
            var sliderStart = this.getSliderStartPosition();
            var sliderLength = this.getSliderLength();
            var ratio = util.ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
            var val = (this.max - this.min) * (this.vertical ? 1 - ratio : ratio) + this.min;
            var points = this.marks === null
                ? []
                : Object.keys(this.marks)
                    .map(parseFloat)
                    .sort(function (a, b) { return a - b; });
            if (this.step !== 0 && !this.dots) {
                var closestOne = Math.round(val / this.step) * this.step;
                points.push(closestOne);
            }
            var gaps = points.map(function (point) { return Math.abs(val - point); });
            var closest = points[gaps.indexOf(Math.min.apply(Math, __spread(gaps)))];
            // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
            return this.step === 0 ? closest : parseFloat(closest.toFixed(util.getPrecision(this.step)));
        };
        CmacsSliderComponent.prototype.valueToOffset = function (value) {
            return util.getPercent(this.min, this.max, value);
        };
        CmacsSliderComponent.prototype.getSliderStartPosition = function () {
            if (this.cacheSliderStart !== null) {
                return this.cacheSliderStart;
            }
            var offset = util.getElementOffset(this.slider.nativeElement);
            return this.vertical ? offset.top : offset.left;
        };
        CmacsSliderComponent.prototype.getSliderLength = function () {
            if (this.cacheSliderLength !== null) {
                return this.cacheSliderLength;
            }
            var sliderDOM = this.slider.nativeElement;
            return this.vertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
        };
        /**
         * Cache DOM layout/reflow operations for performance (may not necessary?)
         */
        CmacsSliderComponent.prototype.cacheSliderProperty = function (remove) {
            if (remove === void 0) { remove = false; }
            this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
            this.cacheSliderLength = remove ? null : this.getSliderLength();
        };
        CmacsSliderComponent.prototype.formatValue = function (value) {
            var _this = this;
            if (!value) {
                return this.range ? [this.min, this.max] : this.min;
            }
            else if (assertValueValid(value, this.range)) {
                return isValueRange(value)
                    ? value.map(function (val) { return util.ensureNumberInRange(val, _this.min, _this.max); })
                    : util.ensureNumberInRange(value, this.min, this.max);
            }
            else {
                return this.defaultValue ? this.defaultValue : this.range ? [this.min, this.max] : this.min;
            }
        };
        /**
         * Show one handle's tooltip and hide others'.
         */
        CmacsSliderComponent.prototype.showHandleTooltip = function (handleIndex) {
            if (handleIndex === void 0) { handleIndex = 0; }
            this.handles.forEach(function (handle, index) {
                handle.active = index === handleIndex;
            });
        };
        CmacsSliderComponent.prototype.hideAllHandleTooltip = function () {
            this.handles.forEach(function (handle) { return (handle.active = false); });
        };
        CmacsSliderComponent.prototype.generateMarkItems = function (marks) {
            var marksArray = [];
            for (var key in marks) {
                var mark = marks[key];
                var val = typeof key === 'number' ? key : parseFloat(key);
                if (val >= this.min && val <= this.max) {
                    marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
                }
            }
            return marksArray.length ? marksArray : null;
        };
        return CmacsSliderComponent;
    }());
    CmacsSliderComponent.ɵfac = function CmacsSliderComponent_Factory(t) { return new (t || CmacsSliderComponent)(i0.ɵɵdirectiveInject(NzSliderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2$2.Platform), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderComponent, selectors: [["cmacs-slider"]], viewQuery: function CmacsSliderComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$5, 3);
                i0.ɵɵviewQuery(CmacsSliderHandleComponent, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slider = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handlerComponents = _t);
            }
        }, hostBindings: function CmacsSliderComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function CmacsSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
            }
        }, inputs: { disabled: "disabled", dots: "dots", included: "included", range: "range", vertical: "vertical", reverse: "reverse", defaultValue: "defaultValue", marks: "marks", max: "max", min: "min", step: "step", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tipFormatter: "tipFormatter" }, outputs: { onAfterChange: "onAfterChange" }, exportAs: ["cmacsSlider"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsSliderComponent; }),
                    multi: true
                },
                NzSliderService
            ]), i0.ɵɵNgOnChangesFeature], decls: 7, vars: 17, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "reverse", "dir", "length"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"]], template: function CmacsSliderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵelement(2, "div", 2);
                i0.ɵɵelement(3, "cmacs-slider-track", 3);
                i0.ɵɵtemplate(4, CmacsSliderComponent_cmacs_slider_step_4_Template, 1, 8, "cmacs-slider-step", 4);
                i0.ɵɵtemplate(5, CmacsSliderComponent_cmacs_slider_handle_5_Template, 1, 9, "cmacs-slider-handle", 5);
                i0.ɵɵtemplate(6, CmacsSliderComponent_cmacs_slider_marks_6_Template, 1, 8, "cmacs-slider-marks", 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.disabled)("ant-slider-vertical", ctx.vertical)("ant-slider-with-marks", ctx.marksArray);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("vertical", ctx.vertical)("included", ctx.included)("offset", ctx.track.offset)("reverse", ctx.reverse)("dir", ctx.dir)("length", ctx.track.length);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.marksArray);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.handles);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.marksArray);
            }
        }, directives: [CmacsSliderTrackComponent, i3.NgIf, i3.NgForOf, CmacsSliderStepComponent, CmacsSliderHandleComponent, CmacsSliderMarksComponent], styles: [".ant-slider-rail{height:3px;border-radius:100px;background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "disabled", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "dots", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "included", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "range", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "vertical", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSliderComponent.prototype, "reverse", void 0);
    __decorate([
        util.InputNumber()
    ], CmacsSliderComponent.prototype, "max", void 0);
    __decorate([
        util.InputNumber()
    ], CmacsSliderComponent.prototype, "min", void 0);
    __decorate([
        util.InputNumber()
    ], CmacsSliderComponent.prototype, "step", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderComponent, [{
                type: i0.Component,
                args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'cmacs-slider',
                        exportAs: 'cmacsSlider',
                        preserveWhitespaces: false,
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsSliderComponent; }),
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
            }], function () {
            return [{ type: NzSliderService }, { type: i0.ChangeDetectorRef }, { type: i2$2.Platform }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { slider: [{
                    type: i0.ViewChild,
                    args: ['slider', { static: true }]
                }], handlerComponents: [{
                    type: i0.ViewChildren,
                    args: [CmacsSliderHandleComponent]
                }], disabled: [{
                    type: i0.Input
                }], dots: [{
                    type: i0.Input
                }], included: [{
                    type: i0.Input
                }], range: [{
                    type: i0.Input
                }], vertical: [{
                    type: i0.Input
                }], reverse: [{
                    type: i0.Input
                }], defaultValue: [{
                    type: i0.Input
                }], marks: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], step: [{
                    type: i0.Input
                }], tooltipVisible: [{
                    type: i0.Input
                }], tooltipPlacement: [{
                    type: i0.Input
                }], tipFormatter: [{
                    type: i0.Input
                }], onAfterChange: [{
                    type: i0.Output
                }] });
    })();
    function getValueTypeNotMatchError() {
        return new Error("The \"range\" can't match the \"ngModel\"'s type, please check these properties: \"range\", \"ngModel\", \"nzDefaultValue\".");
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
            .map(function () { return ({ offset: null, value: null, active: false }); });
    }
    /**
     * Check if value is valid and throw error if value-type/range not match.
     */
    function assertValueValid(value, isRange) {
        if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(function (v) { return isNaN(v); }))) {
            return false;
        }
        return assertValueTypeMatch(value, isRange);
    }
    /**
     * Assert that if `this.range` is `true`, value is also a range, vice versa.
     */
    function assertValueTypeMatch(value, isRange) {
        if (isRange === void 0) { isRange = false; }
        if (isValueRange(value) !== isRange) {
            throw getValueTypeNotMatchError();
        }
        return true;
    }
    function valuesEqual(valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueRange(valA) && isValueRange(valB) ? util.arraysEqual(valA, valB) : valA === valB;
    }

    var NzRadioService = /** @class */ (function () {
        function NzRadioService() {
            this.selected$ = new rxjs.ReplaySubject(1);
            this.touched$ = new rxjs.Subject();
            this.disabled$ = new rxjs.ReplaySubject(1);
            this.name$ = new rxjs.ReplaySubject(1);
        }
        NzRadioService.prototype.touch = function () {
            this.touched$.next();
        };
        NzRadioService.prototype.select = function (value) {
            this.selected$.next(value);
        };
        NzRadioService.prototype.setDisabled = function (value) {
            this.disabled$.next(value);
        };
        NzRadioService.prototype.setName = function (value) {
            this.name$.next(value);
        };
        return NzRadioService;
    }());
    NzRadioService.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); };
    NzRadioService.ɵprov = i0.ɵɵdefineInjectable({ token: NzRadioService, factory: NzRadioService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzRadioService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var _c0$6 = ["*"];
    var CmacsRadioGroupComponent = /** @class */ (function () {
        function CmacsRadioGroupComponent(cdr, nzRadioService, elementRef, directionality) {
            this.cdr = cdr;
            this.nzRadioService = nzRadioService;
            this.elementRef = elementRef;
            this.directionality = directionality;
            this.value = null;
            this.destroy$ = new rxjs.Subject();
            this.onChange = function () { };
            this.onTouched = function () { };
            this.disabled = false;
            this.buttonStyle = 'outline';
            this.size = 'default';
            this.name = null;
            this.dir = 'ltr';
            // TODO: move to host after View Engine deprecation
            this.elementRef.nativeElement.classList.add('ant-radio-group');
        }
        CmacsRadioGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.nzRadioService.selected$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                if (_this.value !== value) {
                    _this.value = value;
                    _this.onChange(_this.value);
                }
            });
            this.nzRadioService.touched$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                Promise.resolve().then(function () { return _this.onTouched(); });
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        CmacsRadioGroupComponent.prototype.ngOnChanges = function (changes) {
            var nzDisabled = changes.nzDisabled, nzName = changes.nzName;
            if (nzDisabled) {
                this.nzRadioService.setDisabled(this.disabled);
            }
            if (nzName) {
                this.nzRadioService.setName(this.name);
            }
        };
        CmacsRadioGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsRadioGroupComponent.prototype.writeValue = function (value) {
            this.value = value;
            this.nzRadioService.select(value);
            this.cdr.markForCheck();
        };
        CmacsRadioGroupComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CmacsRadioGroupComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsRadioGroupComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.nzRadioService.setDisabled(isDisabled);
            this.cdr.markForCheck();
        };
        return CmacsRadioGroupComponent;
    }());
    CmacsRadioGroupComponent.ɵfac = function CmacsRadioGroupComponent_Factory(t) { return new (t || CmacsRadioGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(NzRadioService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsRadioGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsRadioGroupComponent, selectors: [["cmacs-radio-group"]], hostVars: 8, hostBindings: function CmacsRadioGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-radio-group-large", ctx.size === "large")("ant-radio-group-small", ctx.size === "small")("ant-radio-group-solid", ctx.buttonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
            }
        }, inputs: { disabled: "disabled", buttonStyle: "buttonStyle", size: "size", name: "name" }, exportAs: ["cmacsRadioGroup"], features: [i0.ɵɵProvidersFeature([
                NzRadioService,
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsRadioGroupComponent; }),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$6, decls: 1, vars: 0, template: function CmacsRadioGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsRadioGroupComponent.prototype, "disabled", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsRadioGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-radio-group',
                        exportAs: 'cmacsRadioGroup',
                        preserveWhitespaces: false,
                        templateUrl: './cmacs-radio-group.component.html',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [
                            NzRadioService,
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsRadioGroupComponent; }),
                                multi: true
                            }
                        ],
                        host: {
                            '[class.ant-radio-group-large]': "size === 'large'",
                            '[class.ant-radio-group-small]': "size === 'small'",
                            '[class.ant-radio-group-solid]': "buttonStyle === 'solid'",
                            '[class.ant-radio-group-rtl]': "dir === 'rtl'"
                        }
                    }]
            }], function () {
            return [{ type: i0.ChangeDetectorRef }, { type: NzRadioService }, { type: i0.ElementRef }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { disabled: [{
                    type: i0.Input
                }], buttonStyle: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], name: [{
                    type: i0.Input
                }] });
    })();

    var CmacsRadioButtonDirective = /** @class */ (function () {
        function CmacsRadioButtonDirective() {
        }
        return CmacsRadioButtonDirective;
    }());
    CmacsRadioButtonDirective.ɵfac = function CmacsRadioButtonDirective_Factory(t) { return new (t || CmacsRadioButtonDirective)(); };
    CmacsRadioButtonDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsRadioButtonDirective, selectors: [["", "cmacs-radio-button", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsRadioButtonDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[cmacs-radio-button]'
                    }]
            }], null, null);
    })();

    var _c0$7 = ["inputElement"];
    var _c1$2 = ["cmacs-radio", ""];
    var _c2$2 = ["*"];
    var CmacsRadioComponent = /** @class */ (function () {
        function CmacsRadioComponent(elementRef, cdr, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective) {
            this.elementRef = elementRef;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.directionality = directionality;
            this.nzRadioService = nzRadioService;
            this.nzRadioButtonDirective = nzRadioButtonDirective;
            this.isNgModel = false;
            this.destroy$ = new rxjs.Subject();
            this.isChecked = false;
            this.name = null;
            this.isRadioButton = !!this.nzRadioButtonDirective;
            this.onChange = function () { };
            this.onTouched = function () { };
            this.value = null;
            this.disabled = false;
            this.autoFocus = false;
            this.dir = 'ltr';
        }
        /* tslint:disable-next-line:no-any */
        CmacsRadioComponent.prototype.onHostClick = function (event) {
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
        };
        CmacsRadioComponent.prototype.focus = function () {
            this.focusMonitor.focusVia(this.inputElement, 'keyboard');
        };
        CmacsRadioComponent.prototype.blur = function () {
            this.inputElement.nativeElement.blur();
        };
        CmacsRadioComponent.prototype.setDisabledState = function (disabled) {
            this.disabled = disabled;
            this.cdr.markForCheck();
        };
        CmacsRadioComponent.prototype.writeValue = function (value) {
            this.isChecked = value;
            this.cdr.markForCheck();
        };
        CmacsRadioComponent.prototype.registerOnChange = function (fn) {
            this.isNgModel = true;
            this.onChange = fn;
        };
        CmacsRadioComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsRadioComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            if (this.nzRadioService) {
                this.nzRadioService.name$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (name) {
                    _this.name = name;
                    _this.cdr.markForCheck();
                });
                this.nzRadioService.disabled$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (disabled) {
                    _this.disabled = disabled;
                    _this.cdr.markForCheck();
                });
                this.nzRadioService.selected$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                    _this.isChecked = _this.value === value;
                    _this.cdr.markForCheck();
                });
            }
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin) {
                    Promise.resolve().then(function () { return _this.onTouched(); });
                    if (_this.nzRadioService) {
                        _this.nzRadioService.touch();
                    }
                }
            });
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
                _this.cdr.detectChanges();
            });
            this.dir = this.directionality.value;
        };
        CmacsRadioComponent.prototype.ngAfterViewInit = function () {
            if (this.autoFocus) {
                this.focus();
            }
        };
        CmacsRadioComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
            this.focusMonitor.stopMonitoring(this.elementRef);
        };
        return CmacsRadioComponent;
    }());
    CmacsRadioComponent.ɵfac = function CmacsRadioComponent_Factory(t) { return new (t || CmacsRadioComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(NzRadioService, 8), i0.ɵɵdirectiveInject(CmacsRadioButtonDirective, 8)); };
    CmacsRadioComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsRadioComponent, selectors: [["", "cmacs-radio", ""], ["", "cmacs-radio-button", ""]], viewQuery: function CmacsRadioComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$7, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            }
        }, hostVars: 16, hostBindings: function CmacsRadioComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CmacsRadioComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.disabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
            }
        }, inputs: { value: "value", disabled: "disabled", autoFocus: "autoFocus" }, exportAs: ["cmacsRadio"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsRadioComponent; }),
                    multi: true
                }
            ])], attrs: _c1$2, ngContentSelectors: _c2$2, decls: 6, vars: 24, consts: [["type", "radio", 3, "disabled", "checked"], ["inputElement", ""]], template: function CmacsRadioComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "span");
                i0.ɵɵelement(1, "input", 0, 1);
                i0.ɵɵelement(3, "span");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "span");
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.disabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.disabled && ctx.isRadioButton);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
                i0.ɵɵproperty("disabled", ctx.disabled)("checked", ctx.isChecked);
                i0.ɵɵattribute("autofocus", ctx.autoFocus ? "autofocus" : null)("name", ctx.name);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
            }
        }, styles: [".ant-radio-inner:after{top:12%;left:13%;width:11px;height:11px;overflow:visible;background-color:#2a7cff}.ant-radio-checked .ant-radio-inner,.ant-radio-checked .ant-radio-inner:focus,.ant-radio-input:focus+.ant-radio-inner,.ant-radio-wrapper:hover .ant-radio,.ant-radio:hover .ant-radio-inner{border-color:#bec4cd}.ant-radio-input:focus+.ant-radio-inner{box-shadow:0 0 0 3px rgba(190,196,205,.08)}.ant-radio-checked:hover .ant-radio-inner{border-color:#2a7cff}.ant-radio-wrapper{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.ant-radio-wrapper.ant-radio-wrapper-disabled{cursor:default}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsRadioComponent.prototype, "disabled", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsRadioComponent.prototype, "autoFocus", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsRadioComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: '[cmacs-radio],[cmacs-radio-button]',
                        exportAs: 'cmacsRadio',
                        preserveWhitespaces: false,
                        templateUrl: './cmacs-radio.component.html',
                        styleUrls: ['./cmacs-radio.component.css'],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsRadioComponent; }),
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
                            '[class.ant-radio-wrapper-rtl]': "!isRadioButton && dir === 'rtl'",
                            '[class.ant-radio-button-wrapper-rtl]': "isRadioButton && dir === 'rtl'",
                            '(click)': 'onHostClick($event)'
                        }
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }, { type: NzRadioService, decorators: [{
                            type: i0.Optional
                        }] }, { type: CmacsRadioButtonDirective, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement', { static: false }]
                }], value: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], autoFocus: [{
                    type: i0.Input
                }] });
    })();

    function CmacsOptionComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0);
        }
    }
    var _c0$8 = ["*"];
    var CmacsOptionComponent = /** @class */ (function () {
        function CmacsOptionComponent() {
            this.changes = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzCustomContent = false;
        }
        CmacsOptionComponent.prototype.ngOnChanges = function () {
            this.changes.next();
        };
        return CmacsOptionComponent;
    }());
    CmacsOptionComponent.ɵfac = function CmacsOptionComponent_Factory(t) { return new (t || CmacsOptionComponent)(); };
    CmacsOptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionComponent, selectors: [["cmacs-option"]], viewQuery: function CmacsOptionComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i0.TemplateRef, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            }
        }, inputs: { nzLabel: ["label", "nzLabel"], divider: "divider", extendedData: "extendedData", nzValue: ["value", "nzValue"], nzDisabled: ["disabled", "nzDisabled"], nzCustomContent: ["customContent", "nzCustomContent"] }, exportAs: ["cmacsOption"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$8, decls: 1, vars: 0, template: function CmacsOptionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, CmacsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
            }
        }, encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsOptionComponent.prototype, "nzDisabled", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'cmacs-option',
                        exportAs: 'cmacsOption',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        templateUrl: './cmacs-option.component.html'
                    }]
            }], null, { template: [{
                    type: i0.ViewChild,
                    args: [i0.TemplateRef]
                }], nzLabel: [{
                    type: i0.Input,
                    args: ['label']
                }], divider: [{
                    type: i0.Input,
                    args: ['divider']
                }], extendedData: [{
                    type: i0.Input,
                    args: ['extendedData']
                }], nzValue: [{
                    type: i0.Input,
                    args: ['value']
                }], nzDisabled: [{
                    type: i0.Input,
                    args: ['disabled']
                }], nzCustomContent: [{
                    type: i0.Input,
                    args: ['customContent']
                }] });
    })();

    var NzFilterOptionPipe = /** @class */ (function () {
        function NzFilterOptionPipe() {
        }
        NzFilterOptionPipe.prototype.transform = function (options, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return options;
            }
            else {
                return options.filter(function (o) { return filterOption(searchValue, o); });
            }
        };
        return NzFilterOptionPipe;
    }());
    NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
    NzFilterOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzFilterOptionPipe, [{
                type: i0.Pipe,
                args: [{ name: 'nzFilterOption' }]
            }], null, null);
    })();
    var NzFilterGroupOptionPipe = /** @class */ (function () {
        function NzFilterGroupOptionPipe() {
        }
        NzFilterGroupOptionPipe.prototype.transform = function (groups, searchValue, filterOption, serverSearch) {
            if (serverSearch || !searchValue) {
                return groups;
            }
            else {
                return groups.filter(function (g) {
                    return g.listOfNzOptionComponent.some(function (o) { return filterOption(searchValue, o); });
                });
            }
        };
        return NzFilterGroupOptionPipe;
    }());
    NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
    NzFilterGroupOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
                type: i0.Pipe,
                args: [{ name: 'nzFilterGroupOption' }]
            }], null, null);
    })();
    function defaultFilterOption(searchValue, option) {
        if (option && option.nzLabel) {
            return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    var CmacsSelectService = /** @class */ (function () {
        function CmacsSelectService() {
            var _this = this;
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
            this.compareWith = function (o1, o2) { return o1 === o2; };
            // selectedValueChanged should emit ngModelChange or not
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false
            });
            // ContentChildren Change
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfNzOptionComponent: [],
                listOfNzOptionGroupComponent: []
            });
            // searchValue Change
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.editedValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.editedValue = '';
            this.isShowNotFound = false;
            // open
            this.open$ = this.openRaw$.pipe(
            //distinctUntilChanged(),
            operators.share(), operators.tap(function () { return _this.clearInput(); }));
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map(function (data) { return data.value; }));
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter(function (item) { return item.emit; }), operators.map(function (data) {
                var selectedList = data.value;
                var modelValue = null; // tslint:disable-line:no-any
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        if (_this.userDropdown) {
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
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap(function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            }));
            this.editedValue$ = this.editedValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap(function (value) {
                _this.editedValue = value;
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
            this.valueOrOption$ = rxjs.combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(operators.tap(function (data) {
                _this.listOfSelectedValue = data[0];
                _this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
                _this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
                _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
                _this.updateListOfTagOption();
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            }), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.editedValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
        }
        CmacsSelectService.prototype.clickOption = function (option) {
            var _this = this;
            /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
            if (!option.nzDisabled) {
                this.updateActivatedOption(option);
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                if (this.isMultipleOrTags) {
                    var targetValue = !this.userDropdown ? listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.nzValue); }) : listOfSelectedValue.find(function (o) { return _this.compareWith(o.value, option.nzValue); });
                    if (util.isNotNil(targetValue)) {
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
        };
        CmacsSelectService.prototype.updateListOfCachedOption = function () {
            var _this = this;
            if (this.isSingleMode) {
                var selectedOption = this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]); });
                if (!util.isNil(selectedOption)) {
                    this.listOfCachedSelectedOption = [selectedOption];
                }
            }
            else {
                var listOfCachedSelectedOption_1 = [];
                this.listOfSelectedValue.forEach(function (v) {
                    var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                    var option = listOfMixedOption.find(function (o) { return _this.compareWith(o.nzValue, v); });
                    if (option) {
                        listOfCachedSelectedOption_1.push(option);
                    }
                });
                this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
            }
        };
        CmacsSelectService.prototype.updateListOfTagOption = function () {
            var _this = this;
            if (this.isTagsMode || this.isTagsSingleSelectMode) {
                var listOfMissValue = this.listOfSelectedValue.filter(function (value) { return !_this.listOfTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, value); }); });
                this.listOfTagOption = listOfMissValue.map(function (value) {
                    var nzOptionComponent = new CmacsOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    return nzOptionComponent;
                });
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
            }
            else {
                this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
            }
        };
        CmacsSelectService.prototype.updateAddTagOption = function () {
            var _this = this;
            var isMatch = this.listOfTagAndTemplateOption.find(function (item) { return item.nzLabel === _this.searchValue; });
            if ((this.isTagsMode || this.isTagsSingleSelectMode) && this.searchValue && !isMatch) {
                var option = new CmacsOptionComponent();
                option.nzValue = this.searchValue;
                option.nzLabel = this.searchValue;
                this.addedTagOption = option;
                this.updateActivatedOption(option);
            }
            else {
                this.addedTagOption = null;
            }
        };
        CmacsSelectService.prototype.updateListOfFilteredOption = function () {
            this.updateAddTagOption();
            var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
            this.listOfFilteredOption = this.addedTagOption
                ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
            this.isShowNotFound = !this.isTagsMode && !this.isTagsSingleSelectMode && !this.listOfFilteredOption.length;
        };
        CmacsSelectService.prototype.clearInput = function () {
            this.clearInput$.next();
        };
        // tslint:disable-next-line:no-any
        CmacsSelectService.prototype.updateListOfSelectedValue = function (value, emit) {
            this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
        };
        CmacsSelectService.prototype.updateActivatedOption = function (option) {
            this.activatedOption$.next(option);
            this.activatedOption = option;
        };
        CmacsSelectService.prototype.tokenSeparate = function (inputValue, tokenSeparators) {
            // auto tokenSeparators
            if (inputValue &&
                inputValue.length &&
                tokenSeparators.length &&
                this.isMultipleOrTags &&
                this.includesSeparators(inputValue, tokenSeparators)) {
                var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
                this.updateSelectedValueByLabelList(listOfLabel);
                this.clearInput();
            }
        };
        CmacsSelectService.prototype.includesSeparators = function (str, separators) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        CmacsSelectService.prototype.splitBySeparators = function (str, separators) {
            var reg = new RegExp("[" + separators.join() + "]");
            var array = str.split(reg).filter(function (token) { return token; });
            return Array.from(new Set(array));
        };
        CmacsSelectService.prototype.resetActivatedOptionIfNeeded = function () {
            var _this = this;
            var resetActivatedOption = function () {
                var activatedOption = _this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]); });
                _this.updateActivatedOption(activatedOption || null);
            };
            if (this.activatedOption) {
                if (!this.listOfFilteredOption.find(function (item) { return _this.compareWith(item.nzValue, _this.activatedOption.nzValue); }) ||
                    !this.listOfSelectedValue.find(function (item) { return _this.compareWith(item, _this.activatedOption.nzValue); })) {
                    resetActivatedOption();
                }
            }
            else {
                resetActivatedOption();
            }
        };
        CmacsSelectService.prototype.updateTemplateOption = function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
            this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
        };
        CmacsSelectService.prototype.updateSearchValue = function (value) {
            this.searchValueRaw$.next(value);
        };
        CmacsSelectService.prototype.updateEditedValue = function (value) {
            this.editedValueRaw$.next(value);
        };
        CmacsSelectService.prototype.updateSelectedValueByLabelList = function (listOfLabel) {
            var _this = this;
            var listOfSelectedValue = __spread(this.listOfSelectedValue);
            var listOfMatchOptionValue = this.listOfTagAndTemplateOption
                .filter(function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; })
                .map(function (item) { return item.nzValue; })
                .filter(function (item) { return !util.isNotNil(_this.listOfSelectedValue.find(function (v) { return _this.compareWith(v, item); })); });
            if (this.isMultipleMode) {
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
            }
            else {
                var listOfUnMatchOptionValue = listOfLabel.filter(function (label) { return _this.listOfTagAndTemplateOption.map(function (item) { return item.nzLabel; }).indexOf(label) === -1; });
                this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
            }
        };
        CmacsSelectService.prototype.onKeyDown = function (e) {
            var _this = this;
            var keyCode = e.keyCode;
            var eventTarget = e.target;
            var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter(function (item) { return !item.nzDisabled; });
            var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex(function (item) { return item === _this.activatedOption; });
            switch (keyCode) {
                case keycodes.UP_ARROW:
                    e.preventDefault();
                    var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                    break;
                case keycodes.DOWN_ARROW:
                    e.preventDefault();
                    var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                    }
                    break;
                case keycodes.ENTER:
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
                case keycodes.BACKSPACE:
                    if ((this.isMultipleOrTags || this.isTagsSingleSelectMode) && !eventTarget.value && this.listOfCachedSelectedOption.length && !this.tagsOut) {
                        e.preventDefault();
                        this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                    }
                    break;
                case keycodes.SPACE:
                    if (!this.disabled && !this.open) {
                        this.setOpenState(true);
                        e.preventDefault();
                    }
                    break;
                case keycodes.TAB:
                    this.setOpenState(false);
                    break;
            }
        };
        // tslint:disable-next-line:no-any
        CmacsSelectService.prototype.removeValueFormSelected = function (option) {
            var _this = this;
            if (this.disabled || option.nzDisabled) {
                return;
            }
            var listOfSelectedValue = this.listOfSelectedValue.filter(function (item) { return !_this.compareWith(item, option.nzValue); });
            this.updateListOfSelectedValue(listOfSelectedValue, true);
            this.clearInput();
        };
        CmacsSelectService.prototype.setOpenState = function (value) {
            this.openRaw$.next(value);
            this.open = value;
        };
        CmacsSelectService.prototype.check = function () {
            this.checkRaw$.next();
        };
        Object.defineProperty(CmacsSelectService.prototype, "isSingleMode", {
            get: function () {
                return this.mode === 'default';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectService.prototype, "isTagsMode", {
            get: function () {
                return this.mode === 'tags';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectService.prototype, "isTagsSingleSelectMode", {
            get: function () {
                return this.mode === 'tagsSingleSelect';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectService.prototype, "isMultipleMode", {
            get: function () {
                return this.mode === 'multiple';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectService.prototype, "isMultipleOrTags", {
            get: function () {
                return this.mode === 'tags' || this.mode === 'multiple';
            },
            enumerable: false,
            configurable: true
        });
        return CmacsSelectService;
    }());
    CmacsSelectService.ɵfac = function CmacsSelectService_Factory(t) { return new (t || CmacsSelectService)(); };
    CmacsSelectService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsSelectService, factory: CmacsSelectService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var CmacsSelectUnselectableDirective = /** @class */ (function () {
        function CmacsSelectUnselectableDirective() {
        }
        return CmacsSelectUnselectableDirective;
    }());
    CmacsSelectUnselectableDirective.ɵfac = function CmacsSelectUnselectableDirective_Factory(t) { return new (t || CmacsSelectUnselectableDirective)(); };
    CmacsSelectUnselectableDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsSelectUnselectableDirective, selectors: [["", "cmacs-select-unselectable", ""]], hostVars: 3, hostBindings: function CmacsSelectUnselectableDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("unselectable", "unselectable");
                i0.ɵɵstyleProp("user-select", "none");
            }
        }, exportAs: ["cmacsSelectUnselectable"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectUnselectableDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[cmacs-select-unselectable]',
                        exportAs: 'cmacsSelectUnselectable',
                        host: {
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"'
                        }
                    }]
            }], null, null);
    })();

    var _c0$9 = ["inputElement"];
    var _c1$3 = ["inputElementCustom"];
    var _c2$3 = ["cmacs-select-top-control", ""];
    function CmacsSelectTopControlComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 9, 10);
            i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.isComposing = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_0_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.isComposing = false; })("input", function CmacsSelectTopControlComponent_ng_template_0_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.updateWidth(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_0_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.setInputValue($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r1.getSelectedValues().length && !ctx_r1.tagsOut);
            i0.ɵɵproperty("ngStyle", ctx_r1.showCustomSearchStyle)("ngModel", ctx_r1.inputValue)("disabled", ctx_r1.nzSelectService.disabled);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 9, 11);
            i0.ɵɵlistener("compositionstart", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.isComposingCustom = true; })("compositionend", function CmacsSelectTopControlComponent_ng_template_2_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.isComposingCustom = false; })("input", function CmacsSelectTopControlComponent_ng_template_2_Template_input_input_0_listener() { i0.ɵɵrestoreView(_r20_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.updateWidthCustom(); })("ngModelChange", function CmacsSelectTopControlComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20_1); var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.setInputValueCustom($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-select-selection-not-empty", ctx_r3.getSelectedValues().length);
            i0.ɵɵproperty("ngStyle", ctx_r3.showCustomSearchStyle)("ngModel", ctx_r3.inputValueEditableMode)("disabled", ctx_r3.nzSelectService.disabled);
        }
    }
    function CmacsSelectTopControlComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 12);
            i0.ɵɵelement(1, "i", 13);
            i0.ɵɵelementEnd();
        }
    }
    function CmacsSelectTopControlComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 14);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("display", ctx_r5.placeHolderDisplay);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r5.nzPlaceHolder);
        }
    }
    function CmacsSelectTopControlComponent_ng_container_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r24 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", ctx_r24.selectedValueStyle);
            i0.ɵɵattribute("title", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r24.nzSelectService.listOfCachedSelectedOption[0] == null ? null : ctx_r24.nzSelectService.listOfCachedSelectedOption[0].nzLabel, " ");
        }
    }
    function CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template(rf, ctx) { }
    function CmacsSelectTopControlComponent_ng_container_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵelementStart(1, "div", 19);
            i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_ng_template_2_Template, 0, 0, "ng-template", 20);
            i0.ɵɵelementStart(3, "span", 21);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r25 = i0.ɵɵnextContext(2);
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵstyleProp("display", ctx_r25.nzOpen || ctx_r25.nzSelectService.listOfCachedSelectedOption.length ? "block" : "none");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx_r25.inputValue, "\u00A0");
        }
    }
    function CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template(rf, ctx) { }
    function CmacsSelectTopControlComponent_ng_container_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵelementStart(1, "div", 19);
            i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_3_ng_template_2_Template, 0, 0, "ng-template", 20);
            i0.ɵɵelementStart(3, "span", 21);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r26 = i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(3);
            i0.ɵɵstyleProp("display", ctx_r26.nzOpen ? "block" : "none");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx_r26.inputValue, "\u00A0");
        }
    }
    function CmacsSelectTopControlComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_container_7_div_1_Template, 2, 3, "div", 15);
            i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_container_7_div_2_Template, 5, 4, "div", 16);
            i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ng_container_7_div_3_Template, 5, 4, "div", 16);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r6.userDropdown && ctx_r6.nzSelectService.listOfCachedSelectedOption.length && ctx_r6.nzSelectService.listOfSelectedValue.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.showCmacsSearch);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r6.cmacsEditable);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 29);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r39_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 27);
            i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r39_1); var option_r33 = i0.ɵɵnextContext().$implicit; var ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.removeSelectedValue(option_r33, $event); });
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_i_1_Template, 1, 0, "i", 28);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r34 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r34.nzRemoveIcon)("ngIfElse", ctx_r34.nzRemoveIcon);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 24);
            i0.ɵɵelementStart(2, "div", 25);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_span_4_Template, 2, 2, "span", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var option_r33 = ctx.$implicit;
            var ctx_r31 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r33.nzDisabled);
            i0.ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r31.noAnimation == null ? null : ctx_r31.noAnimation.nzNoAnimation);
            i0.ɵɵattribute("title", option_r33.nzLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(option_r33.nzLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !option_r33.nzDisabled);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template(rf, ctx) { }
    var _c3 = function (a0) { return { $implicit: a0 }; };
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 30);
            i0.ɵɵpipe(2, "slice");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r40 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r40.nzMaxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c3, i0.ɵɵpipeBind2(2, 2, ctx_r40.nzSelectService.listOfSelectedValue, ctx_r40.nzMaxTagCount)));
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r41 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" + ", ctx_r41.nzSelectService.listOfCachedSelectedOption.length - ctx_r41.nzMaxTagCount, " ... ");
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 24);
            i0.ɵɵelementStart(1, "div", 25);
            i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_2_Template, 3, 7, "ng-container", 5);
            i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_ng_container_3_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r32 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("@zoomMotion", undefined)("nzNoAnimation", ctx_r32.noAnimation == null ? null : ctx_r32.noAnimation.nzNoAnimation);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r32.nzMaxTagPlaceholder);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r32.nzMaxTagPlaceholder);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 22);
            i0.ɵɵpipe(2, "slice");
            i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_container_1_li_3_Template, 4, 4, "li", 23);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 3, ctx_r29.nzSelectService.listOfCachedSelectedOption, 0, ctx_r29.nzMaxTagCount))("ngForTrackBy", ctx_r29.trackValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r29.nzSelectService.listOfCachedSelectedOption.length > ctx_r29.nzMaxTagCount);
        }
    }
    function CmacsSelectTopControlComponent_ul_8_ng_template_3_Template(rf, ctx) { }
    function CmacsSelectTopControlComponent_ul_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul");
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ul_8_ng_container_1_Template, 4, 7, "ng-container", 5);
            i0.ɵɵelementStart(2, "li", 18);
            i0.ɵɵtemplate(3, CmacsSelectTopControlComponent_ul_8_ng_template_3_Template, 0, 0, "ng-template", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r7.tagsOut && !ctx_r7.userDropdown);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r0);
        }
    }
    function CmacsSelectTopControlComponent_span_9_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 33);
        }
    }
    function CmacsSelectTopControlComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r46_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 31);
            i0.ɵɵlistener("mousedown", function CmacsSelectTopControlComponent_span_9_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectTopControlComponent_span_9_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r46_1); var ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.onClearSelection($event); });
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_span_9_i_1_Template, 1, 0, "i", 32);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("ant-select-selection__clear-search", ctx_r8.showCustomSearch);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r8.nzClearIcon)("ngIfElse", ctx_r8.nzClearIcon);
        }
    }
    function CmacsSelectTopControlComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 34);
            i0.ɵɵelement(1, "i", 35);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-selected-nodes", ctx_r9.getSelectedValues().length);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 40);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 42);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_i_0_Template, 1, 0, "i", 41);
        }
        if (rf & 2) {
            var ctx_r50 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngIf", !ctx_r50.nzSuffixIcon)("ngIfElse", ctx_r50.nzSuffixIcon);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_11_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 37);
            i0.ɵɵtemplate(1, CmacsSelectTopControlComponent_ng_template_11_span_0_i_1_Template, 1, 0, "i", 38);
            i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_11_span_0_ng_template_2_Template, 1, 2, "ng-template", null, 39, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r49 = i0.ɵɵreference(3);
            var ctx_r47 = i0.ɵɵnextContext(2);
            i0.ɵɵclassProp("cmacs-select-action", ctx_r47.action);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r47.nzLoading)("ngIfElse", _r49);
        }
    }
    function CmacsSelectTopControlComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_11_span_0_Template, 4, 4, "span", 36);
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngIf", ctx_r11.nzShowArrow);
        }
    }
    var CmacsSelectTopControlComponent = /** @class */ (function () {
        function CmacsSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.searchValue = '';
            this.isComposing = false;
            this.isComposingCustom = false;
            this.destroy$ = new rxjs.Subject();
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
        CmacsSelectTopControlComponent.prototype.onClearSelection = function (e) {
            e.stopPropagation();
            this.nzSelectService.updateListOfSelectedValue([], true);
            if (this.nzSelectService.isTagsSingleSelectMode) {
                this.setInputValue('');
                this.setInputValueCustom('');
            }
        };
        CmacsSelectTopControlComponent.prototype.getSelectedValues = function () {
            return this.nzSelectService.listOfSelectedValue;
        };
        CmacsSelectTopControlComponent.prototype.setInputValue = function (value) {
            if (this.inputElement) {
                this.inputElement.nativeElement.value = value;
            }
            this.inputValue = value;
            this.updateWidth();
            this.nzSelectService.updateSearchValue(value);
            this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
        };
        CmacsSelectTopControlComponent.prototype.setInputValueCustom = function (value) {
            if (this.inputElementCustom) {
                this.inputElementCustom.nativeElement.value = value;
            }
            this.inputValueEditableMode = value;
            this.updateWidthCustom();
            this.nzSelectService.updateEditedValue(value);
        };
        Object.defineProperty(CmacsSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: function () {
                if (this.cmacsEditable) {
                    return this.inputValueEditableMode || this.isComposingCustom || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
                }
                if (this.userDropdown) {
                    return this.inputValue || this.isComposing ? 'none' : 'block';
                }
                return this.inputValue || this.inputValueEditableMode || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectTopControlComponent.prototype, "selectedValueStyle", {
            get: function () {
                var showSelectedValue = false;
                var opacity = 1;
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
                    opacity: "" + opacity
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectTopControlComponent.prototype, "showCustomSearchStyle", {
            get: function () {
                return {
                    'margin-left.px': this.showCustomSearch ? '15' : '0',
                    'padding-left.px': this.userDropdown ? '0' : null
                };
            },
            enumerable: false,
            configurable: true
        });
        // tslint:disable-next-line:no-any
        CmacsSelectTopControlComponent.prototype.trackValue = function (_index, option) {
            return option.nzValue;
        };
        CmacsSelectTopControlComponent.prototype.updateWidth = function () {
            if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
                if (this.inputValue || this.isComposing) {
                    this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                }
                else {
                    this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                }
            }
        };
        CmacsSelectTopControlComponent.prototype.updateWidthCustom = function () {
            if (this.nzSelectService.isMultipleOrTags && this.inputElementCustom) {
                if (this.inputValueEditableMode || this.isComposingCustom) {
                    this.renderer.setStyle(this.inputElementCustom.nativeElement, 'width', this.inputElementCustom.nativeElement.scrollWidth + "px");
                }
                else {
                    this.renderer.removeStyle(this.inputElementCustom.nativeElement, 'width');
                }
            }
        };
        CmacsSelectTopControlComponent.prototype.removeSelectedValue = function (option, e) {
            this.nzSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        CmacsSelectTopControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (open) {
                if (_this.inputElement && open) {
                    setTimeout(function () { return _this.inputElement.nativeElement.focus(); });
                }
                if (_this.inputElement && _this.cmacsOpen) {
                    setTimeout(function () { return _this.inputElement.nativeElement.focus(); });
                }
                if (_this.inputElementCustom && open) {
                    setTimeout(function () { return _this.inputElementCustom.nativeElement.focus(); });
                }
                if (_this.inputElementCustom && _this.cmacsOpen) {
                    setTimeout(function () { return _this.inputElementCustom.nativeElement.focus(); });
                }
            });
            this.nzSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                if (!(_this.cmacsOpen || _this.nzSelectService.isTagsSingleSelectMode)) {
                    _this.setInputValue('');
                    _this.setInputValueCustom('');
                }
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        CmacsSelectTopControlComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsSelectTopControlComponent.prototype.ngOnChanges = function (changes) {
            if (changes.searchValue && changes.searchValue.currentValue !== undefined) {
                this.setInputValue(changes.searchValue.currentValue);
            }
        };
        return CmacsSelectTopControlComponent;
    }());
    CmacsSelectTopControlComponent.ɵfac = function CmacsSelectTopControlComponent_Factory(t) { return new (t || CmacsSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2$3.NzNoAnimationDirective, 9)); };
    CmacsSelectTopControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSelectTopControlComponent, selectors: [["", "cmacs-select-top-control", ""]], viewQuery: function CmacsSelectTopControlComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$9, 1);
                i0.ɵɵviewQuery(_c1$3, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElementCustom = _t.first);
            }
        }, inputs: { searchValue: "searchValue", nzShowSearch: "nzShowSearch", showCustomSearch: "showCustomSearch", showCmacsSearch: "showCmacsSearch", nzPlaceHolder: "nzPlaceHolder", tagsOut: "tagsOut", nzOpen: "nzOpen", cmacsOpen: "cmacsOpen", cmacsEditable: "cmacsEditable", action: "action", nzMaxTagCount: "nzMaxTagCount", nzAllowClear: "nzAllowClear", nzShowArrow: "nzShowArrow", nzLoading: "nzLoading", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", userDropdown: "userDropdown", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzTokenSeparators: "nzTokenSeparators" }, exportAs: ["cmacsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c2$3, decls: 13, vars: 7, consts: [["inputTemplate", ""], ["customInputTemplate", ""], ["class", "ant-select-arrow cmacs-search-search-icon", "cmacs-select-unselectable", "", 4, "ngIf"], [1, "ant-select-selection__rendered"], ["cmacs-select-unselectable", "", "class", "ant-select-selection__placeholder", 3, "display", 4, "ngIf"], [4, "ngIf"], ["class", "ant-select-selection__clear", "cmacs-select-unselectable", "", 3, "ant-select-selection__clear-search", "mousedown", "click", 4, "ngIf"], ["class", "ant-select-arrow cmacs-search-arrow-right", "cmacs-select-unselectable", "", 3, "cmacs-selected-nodes", 4, "ngIf", "ngIfElse"], ["notCustomArrow", ""], ["autocomplete", "something-new", 1, "ant-select-search__field", 3, "ngStyle", "ngModel", "disabled", "compositionstart", "compositionend", "input", "ngModelChange"], ["inputElement", ""], ["inputElementCustom", ""], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-search-icon"], [1, "iconCreation-Search"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__placeholder"], ["class", "ant-select-selection-selected-value", 3, "ngStyle", 4, "ngIf"], ["class", "ant-select-search ant-select-search--inline", 3, "display", 4, "ngIf"], [1, "ant-select-selection-selected-value", 3, "ngStyle"], [1, "ant-select-search", "ant-select-search--inline"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 3, "nzNoAnimation", 4, "ngIf"], [1, "ant-select-selection__choice", 3, "nzNoAnimation"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["cmacs-select-unselectable", "", 1, "ant-select-selection__clear", 3, "mousedown", "click"], ["nz-icon", "", "type", "close-circle", "theme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close-circle", "theme", "fill", 1, "ant-select-close-icon"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-search-arrow-right"], [1, "iconArrowLarge-Arrow-Right"], ["class", "ant-select-arrow cmacs-dropdown-arrow", "cmacs-select-unselectable", "", 3, "cmacs-select-action", 4, "ngIf"], ["cmacs-select-unselectable", "", 1, "ant-select-arrow", "cmacs-dropdown-arrow"], ["nz-icon", "", "type", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "type", "loading"], ["nz-icon", "", "type", "down", "class", "ant-select-arrow-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "down", 1, "ant-select-arrow-icon"]], template: function CmacsSelectTopControlComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsSelectTopControlComponent_ng_template_0_Template, 2, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(2, CmacsSelectTopControlComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(4, CmacsSelectTopControlComponent_span_4_Template, 2, 0, "span", 2);
                i0.ɵɵelementStart(5, "div", 3);
                i0.ɵɵtemplate(6, CmacsSelectTopControlComponent_div_6_Template, 2, 3, "div", 4);
                i0.ɵɵtemplate(7, CmacsSelectTopControlComponent_ng_container_7_Template, 4, 3, "ng-container", 5);
                i0.ɵɵtemplate(8, CmacsSelectTopControlComponent_ul_8_Template, 4, 2, "ul", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, CmacsSelectTopControlComponent_span_9_Template, 2, 4, "span", 6);
                i0.ɵɵtemplate(10, CmacsSelectTopControlComponent_span_10_Template, 2, 2, "span", 7);
                i0.ɵɵtemplate(11, CmacsSelectTopControlComponent_ng_template_11_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r10 = i0.ɵɵreference(12);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.showCustomSearch);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.nzPlaceHolder);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzAllowClear && ctx.nzSelectService.listOfSelectedValue.length && !ctx.userDropdown);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showCustomSearch)("ngIfElse", _r10);
            }
        }, directives: [i3.NgIf, i4.DefaultValueAccessor, i3.NgStyle, i4.NgControlStatus, i4.NgModel, CmacsSelectUnselectableDirective, i3.NgTemplateOutlet, i3.NgForOf, i4$1.ɵNzTransitionPatchDirective], pipes: [i3.SlicePipe], styles: [".cmacs-select-action{border-left:1px solid #dee0e5}.ant-select-selection__rendered{margin-right:35px}.ant-select-selection--multiple .ant-select-arrow.cmacs-select-action:hover{padding:8px 10px 8px 11px;right:1px;top:7px!important}.ant-select-selection__rendered:hover .cmacs-select-action,.cmacs-select-action:hover{background-color:#f6f7fb}.cmacs-search-search-icon{left:11px;font-size:16px;top:14px}.cmacs-search-arrow-right,.cmacs-search-search-icon{right:unset;z-index:unset;opacity:1!important;margin-left:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.cmacs-search-arrow-right{font-size:27px;top:7px!important;left:calc(100% - 43px);border-left:1px solid #dee0e5;padding:0 5px}cmacs-select:not(.ant-select-disabled) .cmacs-dropdown-arrow{cursor:pointer}cmacs-select .cmacs-dropdown-arrow{right:0;top:6px;padding:9px 11px}.ant-select-selection .ant-select-selection__clear{right:10px;top:12px!important;line-height:1.5}.ant-select-selection--multiple .ant-select-arrow,.ant-select-selection--multiple .ant-select-selection__clear{top:6px}.ant-select-selection:hover .cmacs-selected-nodes .iconArrowLarge-Arrow-Right:before{opacity:0}.ant-select-selection__clear-search{right:15px}.ant-select-search--inline .ant-select-search__field{max-width:94%}.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{padding-left:0!important}.ant-select-selection--single{height:34px}.ant-select-selection--single .ant-select-selection__rendered{line-height:32px}.cmacs-invisible{opacity:0}"], encapsulation: 2, data: { animation: [animation.zoomMotion] }, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSelectTopControlComponent.prototype, "userDropdown", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectTopControlComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[cmacs-select-top-control]',
                        exportAs: 'cmacsSelectTopControl',
                        preserveWhitespaces: false,
                        animations: [animation.zoomMotion],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        templateUrl: './cmacs-select-top-control.component.html',
                        styleUrls: ['./cmacs-select-top-control.component.css']
                    }]
            }], function () {
            return [{ type: i0.Renderer2 }, { type: CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i2$3.NzNoAnimationDirective, decorators: [{
                            type: i0.Host
                        }, {
                            type: i0.Optional
                        }] }];
        }, { searchValue: [{
                    type: i0.Input
                }], inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement']
                }], inputElementCustom: [{
                    type: i0.ViewChild,
                    args: ['inputElementCustom']
                }], nzShowSearch: [{
                    type: i0.Input
                }], showCustomSearch: [{
                    type: i0.Input
                }], showCmacsSearch: [{
                    type: i0.Input
                }], nzPlaceHolder: [{
                    type: i0.Input
                }], tagsOut: [{
                    type: i0.Input
                }], nzOpen: [{
                    type: i0.Input
                }], cmacsOpen: [{
                    type: i0.Input
                }], cmacsEditable: [{
                    type: i0.Input
                }], action: [{
                    type: i0.Input
                }], nzMaxTagCount: [{
                    type: i0.Input
                }], nzAllowClear: [{
                    type: i0.Input
                }], nzShowArrow: [{
                    type: i0.Input
                }], nzLoading: [{
                    type: i0.Input
                }], nzSuffixIcon: [{
                    type: i0.Input
                }], nzClearIcon: [{
                    type: i0.Input
                }], nzRemoveIcon: [{
                    type: i0.Input
                }], userDropdown: [{
                    type: i0.Input
                }], nzMaxTagPlaceholder: [{
                    type: i0.Input
                }], nzTokenSeparators: [{
                    type: i0.Input
                }] });
    })();

    var _c0$a = ["*"];
    var CmacsOptionGroupComponent = /** @class */ (function () {
        function CmacsOptionGroupComponent() {
            this.isLabelString = false;
        }
        Object.defineProperty(CmacsOptionGroupComponent.prototype, "nzLabel", {
            get: function () {
                return this.label;
            },
            set: function (value) {
                this.label = value;
                this.isLabelString = !(this.nzLabel instanceof i0.TemplateRef);
            },
            enumerable: false,
            configurable: true
        });
        return CmacsOptionGroupComponent;
    }());
    CmacsOptionGroupComponent.ɵfac = function CmacsOptionGroupComponent_Factory(t) { return new (t || CmacsOptionGroupComponent)(); };
    CmacsOptionGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionGroupComponent, selectors: [["nz-option-group"]], contentQueries: function CmacsOptionGroupComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CmacsOptionComponent, 0);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
            }
        }, inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], ngContentSelectors: _c0$a, decls: 1, vars: 0, template: function CmacsOptionGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionGroupComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'nz-option-group',
                        exportAs: 'nzOptionGroup',
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        templateUrl: './cmacs-option-group.component.html'
                    }]
            }], null, { listOfNzOptionComponent: [{
                    type: i0.ContentChildren,
                    args: [CmacsOptionComponent]
                }], nzLabel: [{
                    type: i0.Input
                }] });
    })();

    var _c0$b = ["cmacs-option-li", ""];
    function CmacsOptionLiComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r2.highlightKeys[0], "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r2.highlightKeys[1]);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r2.highlightKeys[2], " ");
        }
    }
    function CmacsOptionLiComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r3.nzOption.nzLabel, " ");
        }
    }
    function CmacsOptionLiComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "div", 3);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r4.nzOption.divider);
        }
    }
    function CmacsOptionLiComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_0_ng_container_1_Template, 6, 3, "ng-container", 1);
            i0.ɵɵtemplate(2, CmacsOptionLiComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 1);
            i0.ɵɵtemplate(3, CmacsOptionLiComponent_ng_container_0_ng_container_3_Template, 3, 1, "ng-container", 1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.highlightKeys.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.highlightKeys.length);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.nzOption.divider);
        }
    }
    function CmacsOptionLiComponent_ng_container_1_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 5);
        }
    }
    function CmacsOptionLiComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_i_1_Template, 1, 0, "i", 4);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r1.nzMenuItemSelectedIcon)("ngIfElse", ctx_r1.nzMenuItemSelectedIcon);
        }
    }
    var CmacsOptionLiComponent = /** @class */ (function () {
        function CmacsOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
            this.elementRef = elementRef;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.el = this.elementRef.nativeElement;
            this.selected = false;
            this.active = false;
            this.destroy$ = new rxjs.Subject();
            this.highlightKeys = [];
            renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
        }
        CmacsOptionLiComponent.prototype.clickOption = function () {
            this.nzSelectService.clickOption(this.nzOption);
        };
        CmacsOptionLiComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.listOfSelectedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (list) {
                _this.selected = !_this.nzSelectService.userDropdown ? util.isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })) : util.isNotNil(list.find(function (v) { return _this.nzSelectService.compareWith(v.value, _this.nzOption.nzValue); }));
                _this.cdr.markForCheck();
            });
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                if (option) {
                    _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
                }
                else {
                    _this.active = false;
                }
                _this.cdr.markForCheck();
            });
            this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                _this.highlightKeys = [];
                // tslint:disable-next-line: no-non-null-assertion
                if (value && _this.nzOption.nzLabel && _this.nzOption.nzLabel.toLowerCase().includes(value.toLowerCase())) {
                    // match the search value
                    var index = _this.nzOption.nzLabel.toLowerCase().indexOf(value.toLowerCase());
                    _this.highlightKeys = [
                        _this.nzOption.nzLabel.slice(0, index),
                        _this.nzOption.nzLabel.slice(index, index + value.length),
                        _this.nzOption.nzLabel.slice(index + value.length, _this.nzOption.nzLabel.length)
                    ];
                    _this.highlightKeys = __spread(_this.highlightKeys);
                }
                _this.cdr.detectChanges();
            });
        };
        CmacsOptionLiComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsOptionLiComponent;
    }());
    CmacsOptionLiComponent.ɵfac = function CmacsOptionLiComponent_Factory(t) { return new (t || CmacsOptionLiComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    CmacsOptionLiComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionLiComponent, selectors: [["", "cmacs-option-li", ""]], hostVars: 11, hostBindings: function CmacsOptionLiComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CmacsOptionLiComponent_click_HostBindingHandler() { return ctx.clickOption(); })("mousedown", function CmacsOptionLiComponent_mousedown_HostBindingHandler($event) { return $event.preventDefault(); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("unselectable", "unselectable");
                i0.ɵɵstyleProp("user-select", "none");
                i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx.selected && !ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-disabled", ctx.nzOption.nzDisabled)("ant-select-dropdown-menu-item-active", ctx.active && !ctx.nzOption.nzDisabled)("cmacs-select-dropdown-menu-item-divider", ctx.nzOption.divider);
            }
        }, inputs: { nzOption: "nzOption", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon" }, exportAs: ["cmacsOptionLi"], attrs: _c0$b, decls: 2, vars: 3, consts: [[4, "ngIf", "ngIfElse"], [4, "ngIf"], [2, "color", "#2a7cff"], [1, "cmacs-select-divider"], ["nz-icon", "", "type", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "check", 1, "ant-select-selected-icon"]], template: function CmacsOptionLiComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsOptionLiComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
                i0.ɵɵtemplate(1, CmacsOptionLiComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.nzOption.nzCustomContent)("ngIfElse", ctx.nzOption.template);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags);
            }
        }, directives: [i3.NgIf, i4$1.ɵNzTransitionPatchDirective], styles: [".cmacs-select-divider{font-family:Roboto,Roboto-Regular;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#fff;background-color:#2a7cff;padding:0 3px;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-flex;right:0;position:absolute;top:0}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionLiComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[cmacs-option-li]',
                        exportAs: 'cmacsOptionLi',
                        templateUrl: './cmacs-option-li.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
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
            }], function () { return [{ type: i0.ElementRef }, { type: CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, { nzOption: [{
                    type: i0.Input
                }], nzMenuItemSelectedIcon: [{
                    type: i0.Input
                }] });
    })();

    var _c0$c = ["dropdownUl"];
    var _c1$4 = ["inputElement"];
    var _c2$4 = ["cmacs-option-container", ""];
    function CmacsOptionContainerComponent_li_2_ng_template_2_Template(rf, ctx) { }
    function CmacsOptionContainerComponent_li_2_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelement(0, "i", 13);
            i0.ɵɵelementStart(1, "input", 14, 15);
            i0.ɵɵlistener("ngModelChange", function CmacsOptionContainerComponent_li_2_ng_template_5_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.setInputValue($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵpropertyInterpolate("placeholder", ctx_r10.searchLabel);
            i0.ɵɵproperty("ngModel", ctx_r10.inputValue);
        }
    }
    function CmacsOptionContainerComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 8);
            i0.ɵɵelementStart(1, "div", 9);
            i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_ng_template_2_Template, 0, 0, "ng-template", 10);
            i0.ɵɵelementStart(3, "span", 11);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CmacsOptionContainerComponent_li_2_ng_template_5_Template, 3, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r9 = i0.ɵɵreference(6);
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", _r9);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r1.inputValue);
        }
    }
    function CmacsOptionContainerComponent_li_3_i_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 20);
        }
    }
    function CmacsOptionContainerComponent_li_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 21);
        }
    }
    function CmacsOptionContainerComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 16);
            i0.ɵɵlistener("click", function CmacsOptionContainerComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r17_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.updateCheckboxCache(); });
            i0.ɵɵelementStart(1, "strong", 17);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_i_3_Template, 1, 0, "i", 18);
            i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_3_span_4_Template, 1, 0, "span", 19);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("ant-select-dropdown-menu-item-selected", ctx_r2.isAllChecked() === 1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r2.selectAllLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.isAllChecked() === 1 || !ctx_r2.isAllChecked());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.isAllChecked() === -1);
        }
    }
    function CmacsOptionContainerComponent_li_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0, 10);
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.notFoundContentCustom);
        }
    }
    function CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "nz-embed-empty", 25);
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("nzComponentName", "select")("specificContent", ctx_r19.nzNotFoundContent);
        }
    }
    function CmacsOptionContainerComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 22);
            i0.ɵɵtemplate(1, CmacsOptionContainerComponent_li_4_ng_container_1_Template, 1, 1, "ng-container", 23);
            i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_4_nz_embed_empty_2_Template, 1, 2, "nz-embed-empty", 24);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-not-found-custom", ctx_r3.notFoundContentCustom);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.notFoundContentCustom);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r3.notFoundContentCustom);
        }
    }
    function CmacsOptionContainerComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 26);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r4.nzMenuItemSelectedIcon)("nzOption", ctx_r4.nzSelectService.addedTagOption);
        }
    }
    function CmacsOptionContainerComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 26);
        }
        if (rf & 2) {
            var option_r20 = ctx.$implicit;
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r5.nzMenuItemSelectedIcon)("nzOption", option_r20);
        }
    }
    function CmacsOptionContainerComponent_li_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var group_r21 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", group_r21.nzLabel, " ");
        }
    }
    function CmacsOptionContainerComponent_li_8_li_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 26);
        }
        if (rf & 2) {
            var option_r25 = ctx.$implicit;
            var ctx_r23 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r23.nzMenuItemSelectedIcon)("nzOption", option_r25);
        }
    }
    function CmacsOptionContainerComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 27);
            i0.ɵɵelementStart(1, "div", 28);
            i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_8_ng_container_2_Template, 2, 1, "ng-container", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul", 30);
            i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_8_li_4_Template, 1, 2, "li", 6);
            i0.ɵɵpipe(5, "nzFilterOption");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var group_r21 = ctx.$implicit;
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("title", group_r21.isLabelString ? group_r21.nzLabel : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("cmacsStringTemplateOutlet", group_r21.nzLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(5, 4, group_r21.listOfNzOptionComponent, ctx_r6.nzSelectService.searchValue, ctx_r6.nzSelectService.filterOption, ctx_r6.nzSelectService.serverSearch))("ngForTrackBy", ctx_r6.trackValue);
        }
    }
    function CmacsOptionContainerComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "li", 26);
        }
        if (rf & 2) {
            var option_r26 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzMenuItemSelectedIcon", ctx_r7.nzMenuItemSelectedIcon)("nzOption", option_r26);
        }
    }
    var CmacsOptionContainerComponent = /** @class */ (function () {
        function CmacsOptionContainerComponent(nzSelectService, cdr, ngZone, i18n) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.i18n = i18n;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.notFoundContentShow = true;
            this.userDropdown = false;
            this.showSearch = false;
            this.showSelectAll = true;
            this.selectAllLabel = 'Select All';
            this.searchLabel = 'Search';
            this.showCmacsSearch = false;
            this.nzScrollToBottom = new i0.EventEmitter();
            this.onSearch = new i0.EventEmitter();
        }
        CmacsOptionContainerComponent.prototype.scrollIntoViewIfNeeded = function (option) {
            var _this = this;
            // delay after open
            setTimeout(function () {
                if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                    var targetOption = _this.listOfNzOptionLiComponent.find(function (o) { return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue); });
                    /* tslint:disable:no-any */
                    if (targetOption && targetOption.el && targetOption.el.scrollIntoViewIfNeeded) {
                        targetOption.el.scrollIntoViewIfNeeded(false);
                    }
                    /* tslint:enable:no-any */
                }
            });
        };
        CmacsOptionContainerComponent.prototype.setInputValue = function (value) {
            if (this.inputElement) {
                this.inputElement.nativeElement.value = value;
            }
            this.onSearch.emit(value);
        };
        CmacsOptionContainerComponent.prototype.trackLabel = function (_index, option) {
            return option.nzLabel;
        };
        // tslint:disable-next-line:no-any
        CmacsOptionContainerComponent.prototype.trackValue = function (_index, option) {
            return option.nzValue;
        };
        CmacsOptionContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (option) {
                _this.scrollIntoViewIfNeeded(option);
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
            this.ngZone.runOutsideAngular(function () {
                var ul = _this.dropdownUl.nativeElement;
                rxjs.fromEvent(ul, 'scroll')
                    .pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                        _this.lastScrollTop = ul.scrollTop;
                        _this.ngZone.run(function () {
                            _this.nzScrollToBottom.emit();
                        });
                    }
                });
            });
            this.i18n.localeChange.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                switch (_this.i18n.getLocale().locale) {
                    case 'de':
                        _this.selectAllLabel = 'Alle auswählen';
                        _this.searchLabel = 'Suche';
                        break;
                    case 'en':
                        _this.selectAllLabel = 'Select All';
                        _this.searchLabel = 'Search';
                        break;
                    default:
                        _this.selectAllLabel = 'Select All';
                        _this.searchLabel = 'Search';
                }
                _this.cdr.markForCheck();
            });
        };
        CmacsOptionContainerComponent.prototype.isAllChecked = function () {
            var listOfNotDisabledItems = this.nzSelectService.listOfNzOptionComponent.filter(function (item) { return !item.nzDisabled; });
            if (this.nzSelectService.listOfCachedSelectedOption.length === listOfNotDisabledItems.length) {
                return 1;
            }
            else if (!this.nzSelectService.listOfCachedSelectedOption.length) {
                return 0;
            }
            else {
                return -1;
            }
        };
        CmacsOptionContainerComponent.prototype.updateCheckboxCache = function () {
            var isCheckedState = this.isAllChecked();
            if (!isCheckedState || isCheckedState === -1) {
                var listOfSelectedValue_1 = [];
                this.nzSelectService.listOfNzOptionComponent.forEach(function (option) {
                    if (!option.nzDisabled) {
                        listOfSelectedValue_1.push(option.nzValue);
                    }
                });
                this.nzSelectService.updateListOfSelectedValue(listOfSelectedValue_1, true);
            }
            else {
                this.nzSelectService.updateListOfSelectedValue([], true);
            }
        };
        CmacsOptionContainerComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsOptionContainerComponent;
    }());
    CmacsOptionContainerComponent.ɵfac = function CmacsOptionContainerComponent_Factory(t) { return new (t || CmacsOptionContainerComponent)(i0.ɵɵdirectiveInject(CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2$4.NzI18nService)); };
    CmacsOptionContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionContainerComponent, selectors: [["", "cmacs-option-container", ""]], viewQuery: function CmacsOptionContainerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$c, 1);
                i0.ɵɵviewQuery(_c1$4, 1);
                i0.ɵɵviewQuery(CmacsOptionLiComponent, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropdownUl = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionLiComponent = _t);
            }
        }, inputs: { nzNotFoundContent: "nzNotFoundContent", notFoundContentShow: "notFoundContentShow", userDropdown: "userDropdown", showSearch: "showSearch", showSelectAll: "showSelectAll", selectAllLabel: "selectAllLabel", searchLabel: "searchLabel", showCmacsSearch: "showCmacsSearch", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", notFoundContentCustom: "notFoundContentCustom" }, outputs: { nzScrollToBottom: "nzScrollToBottom", onSearch: "onSearch" }, exportAs: ["cmacsOptionContainer"], attrs: _c2$4, decls: 12, vars: 25, consts: [["role", "menu", "tabindex", "0", 1, "ant-select-dropdown-menu", "ant-select-dropdown-menu-root", "cmacs-custom-scrollbar", "ant-select-dropdown-menu-vertical"], ["dropdownUl", ""], ["class", "ant-select-dropdown-menu-item cmacs-select-search", 4, "ngIf"], ["class", "ant-select-dropdown-menu-item", 3, "ant-select-dropdown-menu-item-selected", "click", 4, "ngIf"], ["cmacs-select-unselectable", "", "class", "ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled", 3, "cmacs-not-found-custom", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngIf"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-dropdown-menu-item-group", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-select-dropdown-menu-item", "cmacs-select-search"], [1, "ant-select-search__field__wrap"], [3, "ngTemplateOutlet"], [1, "ant-select-search__field__mirror"], ["inputTemplate", ""], ["nz-icon", "", "type", "search", 1, "cmacs-select-search-icon"], ["autocomplete", "something-new", 1, "cmacs-select-search-input", 3, "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [1, "ant-select-dropdown-menu-item", 3, "click"], [2, "color", "#656c79 !important"], ["nz-icon", "", "type", "check", "class", "ant-select-selected-icon", 4, "ngIf"], ["class", "ant-select-selected-icon cmacs-indeterminate-selection", 4, "ngIf"], ["nz-icon", "", "type", "check", 1, "ant-select-selected-icon"], [1, "ant-select-selected-icon", "cmacs-indeterminate-selection"], ["cmacs-select-unselectable", "", 1, "ant-select-dropdown-menu-item", "ant-select-dropdown-menu-item-disabled"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "nzComponentName", "specificContent", 4, "ngIf"], [3, "nzComponentName", "specificContent"], ["cmacs-option-li", "", 3, "nzMenuItemSelectedIcon", "nzOption"], [1, "ant-select-dropdown-menu-item-group"], [1, "ant-select-dropdown-menu-item-group-title"], [4, "cmacsStringTemplateOutlet"], [1, "ant-select-dropdown-menu-item-group-list"]], template: function CmacsOptionContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0, 1);
                i0.ɵɵtemplate(2, CmacsOptionContainerComponent_li_2_Template, 7, 2, "li", 2);
                i0.ɵɵtemplate(3, CmacsOptionContainerComponent_li_3_Template, 5, 5, "li", 3);
                i0.ɵɵtemplate(4, CmacsOptionContainerComponent_li_4_Template, 3, 4, "li", 4);
                i0.ɵɵtemplate(5, CmacsOptionContainerComponent_li_5_Template, 1, 2, "li", 5);
                i0.ɵɵtemplate(6, CmacsOptionContainerComponent_li_6_Template, 1, 2, "li", 6);
                i0.ɵɵpipe(7, "nzFilterOption");
                i0.ɵɵtemplate(8, CmacsOptionContainerComponent_li_8_Template, 6, 9, "li", 7);
                i0.ɵɵpipe(9, "nzFilterGroupOption");
                i0.ɵɵtemplate(10, CmacsOptionContainerComponent_li_10_Template, 1, 2, "li", 6);
                i0.ɵɵpipe(11, "nzFilterOption");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showSearch && !ctx.showCmacsSearch);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzSelectService.isMultipleOrTags && !ctx.nzSelectService.isShowNotFound && ctx.showSelectAll);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.nzSelectService.isShowNotFound || ctx.userDropdown) && ctx.notFoundContentShow);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nzSelectService.addedTagOption);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(7, 10, ctx.nzSelectService.listOfNzOptionComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(9, 15, ctx.nzSelectService.listOfNzOptionGroupComponent, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackLabel);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind4(11, 20, ctx.nzSelectService.listOfTagOption, ctx.nzSelectService.searchValue, ctx.nzSelectService.filterOption, ctx.nzSelectService.serverSearch))("ngForTrackBy", ctx.trackValue);
            }
        }, directives: [i3.NgIf, i3.NgForOf, i3.NgTemplateOutlet, i4$1.ɵNzTransitionPatchDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, CmacsSelectUnselectableDirective, CmacsOptionLiComponent], pipes: [NzFilterOptionPipe, NzFilterGroupOptionPipe], styles: [".cmacs-indeterminate-selection{position:relative;top:0;left:0;display:block;width:18px;height:18px;background-color:#fff;border:1px solid #d9d9d9;border-collapse:separate;transition:all .3s}.cmacs-indeterminate-selection:after{position:absolute;display:table;top:50%;left:50%;width:12px;height:12px;background-color:#2a7cff;border:0;transform:translate(-50%,-50%) scale(1);opacity:1;content:\" \";transition:all .1s cubic-bezier(.71,-.46,.88,.6),opacity .1s}.cmacs-not-found-custom,.cmacs-not-found-custom:hover{background-color:#fff;padding:0}"], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[cmacs-option-container]',
                        exportAs: 'cmacsOptionContainer',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        templateUrl: './cmacs-option-container.component.html',
                        styleUrls: ['./cmacs-option-container.component.css']
                    }]
            }], function () { return [{ type: CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i2$4.NzI18nService }]; }, { listOfNzOptionLiComponent: [{
                    type: i0.ViewChildren,
                    args: [CmacsOptionLiComponent]
                }], dropdownUl: [{
                    type: i0.ViewChild,
                    args: ['dropdownUl']
                }], inputElement: [{
                    type: i0.ViewChild,
                    args: ['inputElement']
                }], nzNotFoundContent: [{
                    type: i0.Input
                }], notFoundContentShow: [{
                    type: i0.Input
                }], userDropdown: [{
                    type: i0.Input
                }], showSearch: [{
                    type: i0.Input
                }], showSelectAll: [{
                    type: i0.Input
                }], selectAllLabel: [{
                    type: i0.Input
                }], searchLabel: [{
                    type: i0.Input
                }], showCmacsSearch: [{
                    type: i0.Input
                }], nzMenuItemSelectedIcon: [{
                    type: i0.Input
                }], notFoundContentCustom: [{
                    type: i0.Input
                }], nzScrollToBottom: [{
                    type: i0.Output
                }], onSearch: [{
                    type: i0.Output
                }] });
    })();

    function CmacsSelectComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function CmacsSelectComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r2 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function CmacsSelectComponent_2_ng_template_0_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function CmacsSelectComponent_2_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r2 = i0.ɵɵreference(4);
            i0.ɵɵproperty("ngTemplateOutlet", _r2);
        }
    }
    function CmacsSelectComponent_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, CmacsSelectComponent_2_ng_template_0_Template, 1, 1, "ng-template", 4);
            i0.ɵɵlistener("backdropClick", function CmacsSelectComponent_2_Template_ng_template_backdropClick_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.closeDropDown(); })("detach", function CmacsSelectComponent_2_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.closeDropDown(); })("positionChange", function CmacsSelectComponent_2_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onPositionChange($event); });
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx_r1.dropdownMatchSelectWidth ? null : ctx_r1.triggerWidth)("cdkConnectedOverlayWidth", ctx_r1.dropdownMatchSelectWidth ? ctx_r1.triggerWidth : null)("cdkConnectedOverlayOrigin", ctx_r1.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx_r1.nzOpen);
        }
    }
    function CmacsSelectComponent_ng_template_3_ng_template_2_Template(rf, ctx) { }
    function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 18);
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 16);
            i0.ɵɵlistener("mousedown", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_mousedown_0_listener($event) { return $event.preventDefault(); })("click", function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r22_1); var option_r16 = i0.ɵɵnextContext().$implicit; var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.removeSelectedValue(option_r16, $event); });
            i0.ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_i_1_Template, 1, 0, "i", 17);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r17 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r17.removeIcon)("ngIfElse", ctx_r17.removeIcon);
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "li", 13);
            i0.ɵɵelementStart(2, "div", 14);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_span_4_Template, 2, 2, "span", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var option_r16 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("ant-select-selection__choice__disabled", option_r16.nzDisabled);
            i0.ɵɵproperty("@zoomMotion", undefined);
            i0.ɵɵattribute("title", option_r16.nzLabel);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(option_r16.nzLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !option_r16.nzDisabled);
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template(rf, ctx) { }
    var _c0$d = function (a0) { return { $implicit: a0 }; };
    function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 19);
            i0.ɵɵpipe(2, "slice");
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r23 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r23.maxTagPlaceholder)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0$d, i0.ɵɵpipeBind2(2, 2, ctx_r23.nzSelectService.listOfSelectedValue, ctx_r23.maxTagCount)));
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r24 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" + ", ctx_r24.nzSelectService.listOfCachedSelectedOption.length - ctx_r24.maxTagCount, " ... ");
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_li_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_2_Template, 3, 7, "ng-container", 1);
            i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_li_5_ng_container_3_Template, 2, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("@zoomMotion", undefined);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r15.maxTagPlaceholder);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r15.maxTagPlaceholder);
        }
    }
    function CmacsSelectComponent_ng_template_3_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "ul");
            i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_ng_container_3_Template, 5, 6, "ng-container", 11);
            i0.ɵɵpipe(4, "slice");
            i0.ɵɵtemplate(5, CmacsSelectComponent_ng_template_3_div_3_li_5_Template, 4, 3, "li", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(4, 3, ctx_r13.nzSelectService.listOfCachedSelectedOption, 0, ctx_r13.maxTagCount))("ngForTrackBy", ctx_r13.trackValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r13.nzSelectService.listOfCachedSelectedOption.length > ctx_r13.maxTagCount);
        }
    }
    function CmacsSelectComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵlistener("onSearch", function CmacsSelectComponent_ng_template_3_Template_div_onSearch_1_listener($event) { i0.ɵɵrestoreView(_r27_1); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onSearch($event); })("keydown", function CmacsSelectComponent_ng_template_3_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r27_1); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onKeyDown($event); })("nzScrollToBottom", function CmacsSelectComponent_ng_template_3_Template_div_nzScrollToBottom_1_listener() { i0.ɵɵrestoreView(_r27_1); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.scrollToBottom.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, CmacsSelectComponent_ng_template_3_ng_template_2_Template, 0, 0, "ng-template", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_div_3_Template, 6, 7, "div", 8);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("cmacs-select-user-dropdown", ctx_r3.userDropdown)("cmacs-select-dropdown", ctx_r3.open)("ant-select-dropdown--single", ctx_r3.nzSelectService.isSingleMode)("ant-select-dropdown--multiple", ctx_r3.nzSelectService.isMultipleOrTags)("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
            i0.ɵɵproperty("@slideMotion", ctx_r3.dropDownPosition)("ngStyle", ctx_r3.dropdownStyle);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("showSearch", ctx_r3.showSearch)("showSelectAll", ctx_r3.showSelectAll)("notFoundContentShow", ctx_r3.notFoundContentShow)("notFoundContentCustom", ctx_r3.notFoundContentCustom)("userDropdown", ctx_r3.userDropdown)("selectAllLabel", ctx_r3.selectAllLabel)("showCmacsSearch", ctx_r3.showCmacsSearch)("nzMenuItemSelectedIcon", ctx_r3.menuItemSelectedIcon)("nzNotFoundContent", ctx_r3.notFoundContent);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.dropdownRender);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3._tagsOut && ctx_r3.nzSelectService.listOfCachedSelectedOption.length);
        }
    }
    function CmacsSelectComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0);
        }
    }
    var _c1$5 = ["*"];
    var CmacsSelectComponent = /** @class */ (function () {
        function CmacsSelectComponent(renderer, nzSelectService, cdr, focusMonitor, platform, elementRef, noAnimation) {
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
            this.onChange = function () { return null; };
            this.onTouched = function () { return null; };
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
            this.destroy$ = new rxjs.Subject();
            // tslint:disable-next-line: member-ordering
            this.cmacsOnSearch = new i0.EventEmitter();
            this.cmacsEditedInput = new i0.EventEmitter();
            // tslint:disable-next-line: member-ordering
            this.scrollToBottom = new i0.EventEmitter();
            // tslint:disable-next-line: member-ordering
            this.openChange = new i0.EventEmitter();
            // tslint:disable-next-line: member-ordering
            this.cmacsBlur = new i0.EventEmitter();
            // tslint:disable-next-line: member-ordering
            this.cmacsFocus = new i0.EventEmitter();
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
        Object.defineProperty(CmacsSelectComponent.prototype, "autoClearSearchValue", {
            set: function (value) {
                this.nzSelectService.autoClearSearchValue = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "maxMultipleCount", {
            set: function (value) {
                this.nzSelectService.maxMultipleCount = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "serverSearch", {
            set: function (value) {
                this.nzSelectService.serverSearch = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "cmacsEditable", {
            get: function () {
                return this.nzSelectService.cmacsEditable;
            },
            set: function (value) {
                this.nzSelectService.cmacsEditable = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "userDropdown", {
            get: function () {
                return this.nzSelectService.userDropdown;
            },
            set: function (value) {
                this.nzSelectService.userDropdown = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "mode", {
            set: function (value) {
                this.nzSelectService.mode = value;
                this.nzSelectService.check();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "filterOption", {
            set: function (value) {
                this.nzSelectService.filterOption = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "tagsOut", {
            set: function (value) {
                this._tagsOut = util.toBoolean(value);
                this.nzSelectService.tagsOut = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "compareWith", {
            set: function (value) {
                this.nzSelectService.compareWith = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "autoFocus", {
            get: function () {
                return this._autoFocus;
            },
            set: function (value) {
                this._autoFocus = util.toBoolean(value);
                this.updateAutoFocus();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "cmacsOpen", {
            get: function () {
                return this._cmacsOpen;
            },
            set: function (value) {
                this._cmacsOpen = util.toBoolean(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CmacsSelectComponent.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = util.toBoolean(value);
                this.nzSelectService.disabled = this._disabled;
                this.nzSelectService.check();
                if (this.disabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: false,
            configurable: true
        });
        CmacsSelectComponent.prototype.updateAutoFocus = function () {
            if (this.selectTopControlComponent.inputElement) {
                if (this.autoFocus) {
                    this.renderer.setAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
                }
                else {
                    this.renderer.removeAttribute(this.selectTopControlComponent.inputElement.nativeElement, 'autofocus');
                }
            }
        };
        CmacsSelectComponent.prototype.focus = function () {
            if (this.selectTopControlComponent.inputElement) {
                this.focusMonitor.focusVia(this.selectTopControlComponent.inputElement, 'keyboard');
                this.cmacsFocus.emit();
            }
        };
        // tslint:disable-next-line:no-any
        CmacsSelectComponent.prototype.trackValue = function (_index, option) {
            return option.nzValue;
        };
        CmacsSelectComponent.prototype.blur = function () {
            if (this.selectTopControlComponent.inputElement) {
                this.selectTopControlComponent.inputElement.nativeElement.blur();
                this.cmacsBlur.emit();
            }
        };
        CmacsSelectComponent.prototype.removeSelectedValue = function (option, e) {
            this.nzSelectService.removeValueFormSelected(option);
            e.stopPropagation();
        };
        CmacsSelectComponent.prototype.onKeyDown = function (event) {
            this.nzSelectService.onKeyDown(event);
        };
        CmacsSelectComponent.prototype.toggleDropDown = function () {
            if (!this.disabled) {
                this.nzSelectService.setOpenState(!this.nzOpen);
            }
        };
        CmacsSelectComponent.prototype.closeDropDown = function () {
            this.nzSelectService.setOpenState(false);
        };
        CmacsSelectComponent.prototype.onPositionChange = function (position) {
            this.dropDownPosition = position.connectionPair.originY;
        };
        CmacsSelectComponent.prototype.updateCdkConnectedOverlayStatus = function () {
            if (this.platform.isBrowser) {
                this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
            }
        };
        CmacsSelectComponent.prototype.updateCdkConnectedOverlayPositions = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        };
        // tslint:disable-next-line: jsdoc-format
        /** update ngModel -> update listOfSelectedValue **/
        // tslint:disable-next-line:no-any
        CmacsSelectComponent.prototype.writeValue = function (value) {
            this.value = value;
            var listValue = []; // tslint:disable-line:no-any
            if (util.isNotNil(value)) {
                if (Array.isArray(value)) {
                    listValue = value;
                }
                else {
                    listValue = [value];
                }
            }
            this.nzSelectService.updateListOfSelectedValue(listValue, false);
            this.cdr.markForCheck();
        };
        CmacsSelectComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CmacsSelectComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CmacsSelectComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this.cdr.markForCheck();
        };
        CmacsSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
                if (!focusOrigin && _this.nzSelectService.isTagsSingleSelectMode) {
                    if (_this.selectTopControlComponent.inputValue.length &&
                        _this.nzSelectService.activatedOption &&
                        !_this.nzSelectService.activatedOption.nzDisabled) {
                        _this.nzSelectService.clickOption(_this.nzSelectService.activatedOption);
                    }
                }
            });
            this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                if (_this.userDropdown && data.length && !_this.nzOpen) {
                    _this.nzOpen = true;
                    _this.updateCdkConnectedOverlayStatus();
                }
                _this.cmacsOnSearch.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            });
            this.nzSelectService.editedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (data) {
                _this.cmacsEditedInput.emit(data);
                _this.updateCdkConnectedOverlayPositions();
            });
            this.nzSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (modelValue) {
                if (_this.value !== modelValue) {
                    _this.value = modelValue;
                    _this.onChange(_this.value);
                    _this.updateCdkConnectedOverlayPositions();
                }
            });
            this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(function (value) {
                if (_this.userDropdown && _this.searchValue === '' && value) {
                    _this.nzOpen = false;
                    _this.updateCdkConnectedOverlayStatus();
                    return;
                }
                if (_this.nzSelectService.isTagsSingleSelectMode) {
                    if (value && _this.nzSelectService.listOfCachedSelectedOption.length && _this.selectTopControlComponent.inputValue.length) {
                        value = false;
                        if (_this.nzOpen !== value) {
                            _this.openChange.emit(value);
                        }
                        _this.focus();
                        _this.updateCdkConnectedOverlayStatus();
                        _this.nzOpen = value;
                        return;
                    }
                }
                if (_this.nzOpen !== value) {
                    _this.openChange.emit(value);
                }
                if (value) {
                    _this.focus();
                    _this.updateCdkConnectedOverlayStatus();
                }
                else {
                    _this.blur();
                    _this.onTouched();
                }
                _this.nzOpen = value;
            });
            this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(function () {
                _this.cdr.markForCheck();
            });
        };
        CmacsSelectComponent.prototype.ngAfterViewInit = function () {
            this.updateCdkConnectedOverlayStatus();
            this.isInit = true;
        };
        CmacsSelectComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.listOfCmacsOptionGroupComponent.changes
                .pipe(operators.startWith(true), operators.flatMap(function () { return rxjs.merge.apply(void 0, __spread([_this.listOfCmacsOptionGroupComponent.changes, _this.listOfCmacsOptionComponent.changes], _this.listOfCmacsOptionComponent.map(function (option) { return option.changes; }), _this.listOfCmacsOptionGroupComponent.map(function (group) { return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : rxjs.EMPTY; }))).pipe(operators.startWith(true)); }))
                .subscribe(function () {
                _this.nzSelectService.updateTemplateOption(_this.listOfCmacsOptionComponent.toArray(), _this.listOfCmacsOptionGroupComponent.toArray());
            });
        };
        CmacsSelectComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsSelectComponent.prototype.onSearch = function (value) {
            this.searchValue = value;
        };
        return CmacsSelectComponent;
    }());
    CmacsSelectComponent.ɵfac = function CmacsSelectComponent_Factory(t) { return new (t || CmacsSelectComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(CmacsSelectService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2$2.Platform), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2$3.NzNoAnimationDirective, 9)); };
    CmacsSelectComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSelectComponent, selectors: [["cmacs-select"]], contentQueries: function CmacsSelectComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CmacsOptionComponent, 0);
                i0.ɵɵcontentQuery(dirIndex, CmacsOptionGroupComponent, 0);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfCmacsOptionComponent = _t);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfCmacsOptionGroupComponent = _t);
            }
        }, viewQuery: function CmacsSelectComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(overlay.CdkOverlayOrigin, 1);
                i0.ɵɵviewQuery(overlay.CdkConnectedOverlay, 1);
                i0.ɵɵviewQuery(CmacsSelectTopControlComponent, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectTopControlComponent = _t.first);
            }
        }, hostVars: 14, hostBindings: function CmacsSelectComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function CmacsSelectComponent_click_HostBindingHandler() { return ctx.toggleDropDown(); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("ant-select-lg", ctx.size === "large")("ant-select-sm", ctx.size === "small")("ant-select-enabled", !ctx.disabled)("ant-select-no-arrow", !ctx.showArrow)("ant-select-disabled", ctx.disabled)("ant-select-allow-clear", ctx.allowClear)("ant-select-open", ctx.nzOpen || ctx.cmacsOpen);
            }
        }, inputs: { size: "size", dropdownClassName: "dropdownClassName", dropdownMatchSelectWidth: "dropdownMatchSelectWidth", action: "action", dropdownStyle: "dropdownStyle", notFoundContent: "notFoundContent", notFoundContentShow: "notFoundContentShow", allowClear: "allowClear", open: "open", showSearch: "showSearch", showCmacsSearch: "showCmacsSearch", showCustomSearch: "showCustomSearch", loading: "loading", showSelectAll: "showSelectAll", placeHolder: "placeHolder", maxTagCount: "maxTagCount", dropdownRender: "dropdownRender", suffixIcon: "suffixIcon", clearIcon: "clearIcon", removeIcon: "removeIcon", notFoundContentCustom: "notFoundContentCustom", menuItemSelectedIcon: "menuItemSelectedIcon", showArrow: "showArrow", tokenSeparators: "tokenSeparators", maxTagPlaceholder: "maxTagPlaceholder", selectAllLabel: "selectAllLabel", autoClearSearchValue: "autoClearSearchValue", maxMultipleCount: "maxMultipleCount", serverSearch: "serverSearch", cmacsEditable: "cmacsEditable", userDropdown: "userDropdown", mode: "mode", filterOption: "filterOption", tagsOut: "tagsOut", compareWith: "compareWith", autoFocus: "autoFocus", cmacsOpen: "cmacsOpen", disabled: "disabled" }, outputs: { cmacsOnSearch: "cmacsOnSearch", cmacsEditedInput: "cmacsEditedInput", scrollToBottom: "scrollToBottom", openChange: "openChange", cmacsBlur: "cmacsBlur", cmacsFocus: "cmacsFocus" }, exportAs: ["cmacsSelect"], features: [i0.ɵɵProvidersFeature([
                CmacsSelectService,
                {
                    provide: i4.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return CmacsSelectComponent; }),
                    multi: true
                }
            ])], ngContentSelectors: _c1$5, decls: 6, vars: 32, consts: [["cdkOverlayOrigin", "", "cmacs-select-top-control", "", "tabindex", "0", 1, "ant-select-selection", 3, "nzOpen", "searchValue", "nzMaxTagPlaceholder", "nzPlaceHolder", "nzAllowClear", "nzMaxTagCount", "nzShowArrow", "nzLoading", "cmacsOpen", "cmacsEditable", "nzSuffixIcon", "nzClearIcon", "userDropdown", "tagsOut", "action", "nzRemoveIcon", "nzShowSearch", "showCmacsSearch", "showCustomSearch", "nzTokenSeparators", "keydown"], [4, "ngIf"], ["content", ""], [4, "ngTemplateOutlet"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [1, "ant-select-dropdown", "cmacs-custom-scrollbar", 3, "ngStyle"], ["cmacs-option-container", "", 2, "overflow", "auto", "transform", "translateZ(0px)", "scrollbar-color", "#cfd3d9 #ffffff", "scrollbar-width", "thin", 3, "showSearch", "showSelectAll", "notFoundContentShow", "notFoundContentCustom", "userDropdown", "selectAllLabel", "showCmacsSearch", "nzMenuItemSelectedIcon", "nzNotFoundContent", "onSearch", "keydown", "nzScrollToBottom"], [3, "ngTemplateOutlet"], ["class", "ant-select-selection--multiple cmacs-tags-out", "style", "padding-top: 15px;", 4, "ngIf"], [1, "ant-select-selection--multiple", "cmacs-tags-out", 2, "padding-top", "15px"], [1, "ant-select-selection__rendered", "cmacs-select-selection__rendered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-select-selection__choice", 4, "ngIf"], [1, "ant-select-selection__choice"], [1, "ant-select-selection__choice__content"], ["class", "ant-select-selection__choice__remove", 3, "mousedown", "click", 4, "ngIf"], [1, "ant-select-selection__choice__remove", 3, "mousedown", "click"], ["nz-icon", "", "type", "close", "class", "ant-select-remove-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "type", "close", 1, "ant-select-remove-icon"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("keydown", function CmacsSelectComponent_Template_div_keydown_0_listener($event) { return ctx.onKeyDown($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(1, CmacsSelectComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, CmacsSelectComponent_2_Template, 1, 5, undefined, 1);
                i0.ɵɵtemplate(3, CmacsSelectComponent_ng_template_3_Template, 4, 25, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, CmacsSelectComponent_ng_template_5_Template, 1, 0, "ng-template");
            }
            if (rf & 2) {
                i0.ɵɵclassProp("cmacs-select-selection", ctx.open)("ant-select-selection--single", ctx.nzSelectService.isSingleMode || ctx.nzSelectService.isTagsSingleSelectMode)("ant-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--multiple", ctx.nzSelectService.isMultipleOrTags)("cmacs-select-selection--action", ctx.action);
                i0.ɵɵproperty("nzOpen", ctx.nzOpen)("searchValue", ctx.searchValue)("nzMaxTagPlaceholder", ctx.maxTagPlaceholder)("nzPlaceHolder", ctx.placeHolder)("nzAllowClear", ctx.allowClear)("nzMaxTagCount", ctx.maxTagCount)("nzShowArrow", ctx.showArrow)("nzLoading", ctx.loading)("cmacsOpen", ctx.cmacsOpen)("cmacsEditable", ctx.cmacsEditable)("nzSuffixIcon", ctx.suffixIcon)("nzClearIcon", ctx.clearIcon)("userDropdown", ctx.userDropdown)("tagsOut", ctx._tagsOut)("action", ctx.action)("nzRemoveIcon", ctx.removeIcon)("nzShowSearch", ctx.showSearch)("showCmacsSearch", ctx.showCmacsSearch)("showCustomSearch", ctx.showCustomSearch)("nzTokenSeparators", ctx.tokenSeparators);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.open);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.open);
            }
        }, directives: [CmacsSelectTopControlComponent, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, CmacsOptionContainerComponent, i3.NgForOf, i4$1.ɵNzTransitionPatchDirective], pipes: [i3.SlicePipe], styles: [".cmacs-tags-out{padding-top:15px;font-size:12px;font-family:Roboto-Regular}.cmacs-select-dropdown-menu-item-divider{border-top:1px solid #2a7cff!important}.ant-select{width:inherit}.ant-select-dropdown-menu-item-disabled{color:rgba(0,0,0,.25)!important}.cmacs-select-dropdown{box-shadow:none;border-bottom:1px solid #dee0e5;border-right:1px solid #dee0e5;border-left:1px solid #dee0e5;border-radius:0 0 3px 3px;z-index:unset}.cmacs-select-selection .ant-select-open .ant-select-arrow-icon svg{transform:unset!important}.cmacs-select-selection,.cmacs-select-selection:focus,.cmacs-select-selection:hover{border:1px solid #dee0e5!important;border-radius:3px 3px 0 0!important}.cmacs-select-selection .ant-select-arrow{top:15px}.ant-select-selection{border:1px solid #dee0e5;border-radius:3px}.ant-select-selection:focus-within,.ant-select-selection:hover{border:1px solid #bec4cd;text-shadow:none}.ant-select-open .ant-select-selection,.ant-select-open .ant-select-selection:focus,.ant-select-open .ant-select-selection:focus-within,.ant-select-open .ant-select-selection:hover{border-color:#dee0e5;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:3px 3px 0 0}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:6px!important}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon{color:transparent}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{color:#2a7cff!important;padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon{border-color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{padding:2px;border:1px solid #dee0e5}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon:hover{color:transparent}.ant-select-dropdown-menu-item-active,.ant-select-dropdown-menu-item:hover{background-color:#f6f7fb}.ant-select-dropdown{margin-bottom:0;border:1px solid #dee0e5;margin-top:-1px;box-shadow:0 3px 7px rgba(59,63,70,.2);border-radius:0 0 3px 3px}.ant-select-dropdown-menu-item:first-child{border-top:none}.ant-select-dropdown-menu-item{font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-top:1px solid #dee0e5;padding:7px 14px}.ant-select-dropdown.cmacs-select-user-dropdown .ant-select-dropdown-menu-item{border-top:none}.ant-select-selection--multiple .ant-select-selection__rendered>ul>li{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#656c79}.ant-select-selection:focus{box-shadow:none;border:1px solid #bec4cd}.ant-select-selection--multiple .ant-select-selection__choice__remove>*{line-height:2.2}.ant-select-selection__placeholder{margin-left:0}.ant-select-selection-selected-value{padding-left:0}.ant-select-dropdown-menu-item-selected{color:#2a7cff!important}.ant-select-dropdown-menu-item-selected,.ant-select-dropdown-menu-item-selected:hover{color:#2a7cff}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item{padding-right:12px;padding-left:42px}.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{left:12px;right:unset}.cmacs-select-search-input{width:100%;border:none;outline:none;padding:0 10px 0 6px}.cmacs-select-search-input::-moz-placeholder{color:#acb3bf}.cmacs-select-search-input:-ms-input-placeholder{color:#acb3bf}.cmacs-select-search-input::placeholder{color:#acb3bf}.cmacs-select-search,.cmacs-select-search:hover{background-color:#fff;padding-left:14px!important}.cmacs-select-search-icon{color:#dee0e5}.cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{max-width:94%}.cmacs-select-selection--action .ant-select-search--inline .ant-select-search__field{max-width:87%}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon{top:unset;transform:unset;bottom:15px;background-color:#fff!important}.ant-select-dropdown.cmacs-select-user-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .cmacs-user-dropdown-last-elem+.ant-select-selected-icon{bottom:22px}", "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "], encapsulation: 2, data: { animation: [animation.slideMotion, animation.zoomMotion] }, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "notFoundContentShow", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "allowClear", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "open", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "showSearch", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "showCmacsSearch", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "showCustomSearch", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "loading", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsSelectComponent.prototype, "showSelectAll", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'cmacs-select',
                        exportAs: 'cmacsSelect',
                        preserveWhitespaces: false,
                        providers: [
                            CmacsSelectService,
                            {
                                provide: i4.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return CmacsSelectComponent; }),
                                multi: true
                            }
                        ],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        animations: [animation.slideMotion, animation.zoomMotion],
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
                            "\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "
                        ],
                        styleUrls: ['./cmacs-select.component.css']
                    }]
            }], function () {
            return [{ type: i0.Renderer2 }, { type: CmacsSelectService }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2$2.Platform }, { type: i0.ElementRef }, { type: i2$3.NzNoAnimationDirective, decorators: [{
                            type: i0.Host
                        }, {
                            type: i0.Optional
                        }] }];
        }, { cdkOverlayOrigin: [{
                    type: i0.ViewChild,
                    args: [overlay.CdkOverlayOrigin]
                }], cdkConnectedOverlay: [{
                    type: i0.ViewChild,
                    args: [overlay.CdkConnectedOverlay]
                }], selectTopControlComponent: [{
                    type: i0.ViewChild,
                    args: [CmacsSelectTopControlComponent]
                }], listOfCmacsOptionComponent: [{
                    type: i0.ContentChildren,
                    args: [CmacsOptionComponent]
                }], listOfCmacsOptionGroupComponent: [{
                    type: i0.ContentChildren,
                    args: [CmacsOptionGroupComponent]
                }], cmacsOnSearch: [{
                    type: i0.Output
                }], cmacsEditedInput: [{
                    type: i0.Output
                }], scrollToBottom: [{
                    type: i0.Output
                }], openChange: [{
                    type: i0.Output
                }], cmacsBlur: [{
                    type: i0.Output
                }], cmacsFocus: [{
                    type: i0.Output
                }], size: [{
                    type: i0.Input
                }], dropdownClassName: [{
                    type: i0.Input
                }], dropdownMatchSelectWidth: [{
                    type: i0.Input
                }], action: [{
                    type: i0.Input
                }], dropdownStyle: [{
                    type: i0.Input
                }], notFoundContent: [{
                    type: i0.Input
                }], notFoundContentShow: [{
                    type: i0.Input
                }], allowClear: [{
                    type: i0.Input
                }], open: [{
                    type: i0.Input
                }], showSearch: [{
                    type: i0.Input
                }], showCmacsSearch: [{
                    type: i0.Input
                }], showCustomSearch: [{
                    type: i0.Input
                }], loading: [{
                    type: i0.Input
                }], showSelectAll: [{
                    type: i0.Input
                }], placeHolder: [{
                    type: i0.Input
                }], maxTagCount: [{
                    type: i0.Input
                }], dropdownRender: [{
                    type: i0.Input
                }], suffixIcon: [{
                    type: i0.Input
                }], clearIcon: [{
                    type: i0.Input
                }], removeIcon: [{
                    type: i0.Input
                }], notFoundContentCustom: [{
                    type: i0.Input
                }], menuItemSelectedIcon: [{
                    type: i0.Input
                }], showArrow: [{
                    type: i0.Input
                }], tokenSeparators: [{
                    type: i0.Input
                }], maxTagPlaceholder: [{
                    type: i0.Input
                }], selectAllLabel: [{
                    type: i0.Input
                }], autoClearSearchValue: [{
                    type: i0.Input
                }], maxMultipleCount: [{
                    type: i0.Input
                }], serverSearch: [{
                    type: i0.Input
                }], cmacsEditable: [{
                    type: i0.Input
                }], userDropdown: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], filterOption: [{
                    type: i0.Input
                }], tagsOut: [{
                    type: i0.Input
                }], compareWith: [{
                    type: i0.Input
                }], autoFocus: [{
                    type: i0.Input
                }], cmacsOpen: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }] });
    })();

    function CmacsDividerComponent_span_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.text);
        }
    }
    function CmacsDividerComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 1);
            i0.ɵɵtemplate(1, CmacsDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.text);
        }
    }
    var CmacsDividerComponent = /** @class */ (function () {
        function CmacsDividerComponent(elementRef) {
            this.elementRef = elementRef;
            this.type = 'vertical';
            this.orientation = '';
            this.dashed = false;
            this.plain = false;
            this.elementRef.nativeElement.classList.add('ant-divider');
        }
        return CmacsDividerComponent;
    }());
    CmacsDividerComponent.ɵfac = function CmacsDividerComponent_Factory(t) { return new (t || CmacsDividerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CmacsDividerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDividerComponent, selectors: [["cmacs-divider"]], hostVars: 16, hostBindings: function CmacsDividerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-divider-horizontal", ctx.type === "horizontal")("ant-divider-vertical", ctx.type === "vertical")("ant-divider-with-text", ctx.text)("ant-divider-plain", ctx.plain)("ant-divider-with-text-left", ctx.text && ctx.orientation === "left")("ant-divider-with-text-right", ctx.text && ctx.orientation === "right")("ant-divider-with-text-center", ctx.text && ctx.orientation === "center")("ant-divider-dashed", ctx.dashed);
            }
        }, inputs: { text: "text", type: "type", orientation: "orientation", dashed: "dashed", plain: "plain" }, exportAs: ["cmacsDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function CmacsDividerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsDividerComponent_span_0_Template, 2, 1, "span", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.text);
            }
        }, directives: [i3.NgIf], styles: [".ant-divider-vertical{height:1em!important}"], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsDividerComponent.prototype, "dashed", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsDividerComponent.prototype, "plain", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDividerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-divider',
                        exportAs: 'cmacsDivider',
                        templateUrl: './cmacs-divider.component.html',
                        styleUrls: ['./cmacs-divider.component.css'],
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.ant-divider-horizontal]': "type === 'horizontal'",
                            '[class.ant-divider-vertical]': "type === 'vertical'",
                            '[class.ant-divider-with-text]': "text",
                            '[class.ant-divider-plain]': "plain",
                            '[class.ant-divider-with-text-left]': "text && orientation === 'left'",
                            '[class.ant-divider-with-text-right]': "text && orientation === 'right'",
                            '[class.ant-divider-with-text-center]': "text && orientation === 'center'",
                            '[class.ant-divider-dashed]': "dashed"
                        }
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, { text: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], orientation: [{
                    type: i0.Input
                }], dashed: [{
                    type: i0.Input
                }], plain: [{
                    type: i0.Input
                }] });
    })();

    var CmacsInputDirective = /** @class */ (function () {
        function CmacsInputDirective(ngControl, renderer, elementRef, directionality) {
            this.ngControl = ngControl;
            this.directionality = directionality;
            this.borderless = false;
            this.size = 'default';
            this._disabled = false;
            this.disabled$ = new rxjs.Subject();
            this.dir = 'ltr';
            this.destroy$ = new rxjs.Subject();
            this.opened = false;
            renderer.addClass(elementRef.nativeElement, 'ant-input');
            renderer.addClass(elementRef.nativeElement, 'cmacs-input-fix');
        }
        Object.defineProperty(CmacsInputDirective.prototype, "disabled", {
            get: function () {
                if (this.ngControl && this.ngControl.disabled !== null) {
                    return this.ngControl.disabled;
                }
                return this._disabled;
            },
            set: function (value) {
                this._disabled = value != null && "" + value !== 'false';
            },
            enumerable: false,
            configurable: true
        });
        CmacsInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            if (this.ngControl) {
                (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(operators.filter(function () { return _this.ngControl.disabled !== null; }), operators.takeUntil(this.destroy$)).subscribe(function () {
                    _this.disabled$.next(_this.ngControl.disabled);
                });
            }
            this.dir = this.directionality.value;
            (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        CmacsInputDirective.prototype.ngOnChanges = function (changes) {
            var disabled = changes.disabled;
            if (disabled) {
                this.disabled$.next(this.disabled);
            }
        };
        CmacsInputDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsInputDirective;
    }());
    CmacsInputDirective.ɵfac = function CmacsInputDirective_Factory(t) { return new (t || CmacsInputDirective)(i0.ɵɵdirectiveInject(i4.NgControl, 10), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsInputDirective, selectors: [["input", "cmacs-input", ""], ["textarea", "cmacs-input", ""]], hostVars: 13, hostBindings: function CmacsInputDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("disabled", ctx.disabled || null);
                i0.ɵɵclassProp("ant-input-disabled", ctx.disabled)("cmacs-input-opened", ctx.opened)("ant-input-lg", ctx.size === "large")("ant-input-sm", ctx.size === "small")("ant-input-borderless", ctx.borderless)("ant-input-rtl", ctx.dir === "rtl");
            }
        }, inputs: { borderless: "borderless", size: "size", disabled: "disabled", opened: "opened" }, exportAs: ["cmacsInput"], features: [i0.ɵɵNgOnChangesFeature] });
    __decorate([
        util.InputBoolean()
    ], CmacsInputDirective.prototype, "borderless", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsInputDirective.prototype, "opened", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputDirective, [{
                type: i0.Directive,
                args: [{
                        // tslint:disable-next-line: directive-selector
                        selector: 'input[cmacs-input],textarea[cmacs-input]',
                        exportAs: 'cmacsInput',
                        // tslint:disable-next-line: use-host-property-decorator
                        host: {
                            '[class.ant-input-disabled]': 'disabled',
                            '[class.cmacs-input-opened]': 'opened',
                            '[class.ant-input-lg]': "size === 'large'",
                            '[class.ant-input-sm]': "size === 'small'",
                            '[class.ant-input-borderless]': 'borderless',
                            '[attr.disabled]': 'disabled || null',
                            '[class.ant-input-rtl]': "dir=== 'rtl'"
                        }
                    }]
            }], function () {
            return [{ type: i4.NgControl, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Self
                        }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { borderless: [{
                    type: i0.Input
                }], size: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], opened: [{
                    type: i0.Input
                }] });
    })();

    var _c0$e = ["cmacs-input-group-slot", ""];
    function CmacsInputGroupSlotComponent_i_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "i", 2);
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("nzType", ctx_r0.icon);
        }
    }
    function CmacsInputGroupSlotComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r1.template);
        }
    }
    var CmacsInputGroupSlotComponent = /** @class */ (function () {
        function CmacsInputGroupSlotComponent() {
            this.icon = null;
            this.type = null;
            this.template = null;
        }
        return CmacsInputGroupSlotComponent;
    }());
    CmacsInputGroupSlotComponent.ɵfac = function CmacsInputGroupSlotComponent_Factory(t) { return new (t || CmacsInputGroupSlotComponent)(); };
    CmacsInputGroupSlotComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsInputGroupSlotComponent, selectors: [["", "cmacs-input-group-slot", ""]], hostVars: 6, hostBindings: function CmacsInputGroupSlotComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
            }
        }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0$e, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function CmacsInputGroupSlotComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, CmacsInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0);
                i0.ɵɵtemplate(1, CmacsInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.icon);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
            }
        }, directives: [i3.NgIf, i4$1.ɵNzTransitionPatchDirective], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputGroupSlotComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[cmacs-input-group-slot]',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <i nz-icon [nzType]=\"icon\" *ngIf=\"icon\"></i>\n    <ng-container *nzStringTemplateOutlet=\"template\">{{ template }}</ng-container>\n  ",
                        host: {
                            '[class.ant-input-group-addon]': "type === 'addon'",
                            '[class.ant-input-prefix]': "type === 'prefix'",
                            '[class.ant-input-suffix]': "type === 'suffix'"
                        }
                    }]
            }], null, { icon: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], template: [{
                    type: i0.Input
                }] });
    })();

    function CmacsInputGroupComponent_span_0_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 7);
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("icon", ctx_r7.cmacsAddOnBeforeIcon)("template", ctx_r7.cmacsAddOnBefore);
        }
    }
    function CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
    function CmacsInputGroupComponent_span_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 8);
            i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(4);
            i0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r3);
        }
    }
    function CmacsInputGroupComponent_span_0_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 7);
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("icon", ctx_r9.cmacsAddOnAfterIcon)("template", ctx_r9.cmacsAddOnAfter);
        }
    }
    function CmacsInputGroupComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 4);
            i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
            i0.ɵɵtemplate(2, CmacsInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
            i0.ɵɵtemplate(3, CmacsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(6);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnBefore || ctx_r0.cmacsAddOnBeforeIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnAfter || ctx_r0.cmacsAddOnAfterIcon);
        }
    }
    function CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
    function CmacsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
        }
        if (rf & 2) {
            i0.ɵɵnextContext(2);
            var _r3 = i0.ɵɵreference(4);
            i0.ɵɵproperty("ngTemplateOutlet", _r3);
        }
    }
    function CmacsInputGroupComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(6);
            i0.ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
        }
    }
    function CmacsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 13);
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("icon", ctx_r13.cmacsPrefixIcon)("template", ctx_r13.cmacsPrefix);
        }
    }
    function CmacsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
    function CmacsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 14);
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("icon", ctx_r15.cmacsSuffixIcon)("template", ctx_r15.cmacsSuffix);
        }
    }
    function CmacsInputGroupComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
            i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
            i0.ɵɵtemplate(2, CmacsInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(6);
            i0.ɵɵproperty("ngIf", ctx_r4.cmacsPrefix || ctx_r4.cmacsPrefixIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", _r5);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r4.cmacsSuffix || ctx_r4.cmacsSuffixIcon);
        }
    }
    function CmacsInputGroupComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojection(0);
        }
    }
    var _c0$f = ["*"];
    var CmacsInputGroupComponent = /** @class */ (function () {
        function CmacsInputGroupComponent(focusMonitor, elementRef, cdr, directionality) {
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
            this.destroy$ = new rxjs.Subject();
        }
        CmacsInputGroupComponent.prototype.updateChildrenInputSize = function () {
            var _this = this;
            if (this.listOfNzInputDirective) {
                this.listOfNzInputDirective.forEach(function (item) { return (item.size = _this.cmacsSize); });
            }
        };
        CmacsInputGroupComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.focusMonitor
                .monitor(this.elementRef, true)
                .pipe(operators.takeUntil(this.destroy$))
                .subscribe(function (focusOrigin) {
                _this.focused = !!focusOrigin;
                _this.cdr.markForCheck();
            });
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        CmacsInputGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.updateChildrenInputSize();
            var listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(operators.startWith(this.listOfNzInputDirective));
            listOfInputChange$
                .pipe(operators.switchMap(function (list) {
                return rxjs.merge.apply(void 0, __spread([listOfInputChange$], list.map(function (input) { return input.disabled$; })));
            }), operators.mergeMap(function () { return listOfInputChange$; }), operators.map(function (list) { return list.some(function (input) { return input.disabled; }); }), operators.takeUntil(this.destroy$))
                .subscribe(function (disabled) {
                _this.disabled = disabled;
                _this.cdr.markForCheck();
            });
        };
        CmacsInputGroupComponent.prototype.ngOnChanges = function (changes) {
            var cmacsSize = changes.cmacsSize, cmacsSuffix = changes.cmacsSuffix, cmacsPrefix = changes.cmacsPrefix, cmacsPrefixIcon = changes.cmacsPrefixIcon, cmacsSuffixIcon = changes.cmacsSuffixIcon, cmacsAddOnAfter = changes.cmacsAddOnAfter, cmacsAddOnBefore = changes.cmacsAddOnBefore, cmacsAddOnAfterIcon = changes.cmacsAddOnAfterIcon, cmacsAddOnBeforeIcon = changes.cmacsAddOnBeforeIcon;
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
        };
        CmacsInputGroupComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsInputGroupComponent;
    }());
    CmacsInputGroupComponent.ɵfac = function CmacsInputGroupComponent_Factory(t) { return new (t || CmacsInputGroupComponent)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
    CmacsInputGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsInputGroupComponent, selectors: [["cmacs-input-group"]], contentQueries: function CmacsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 0);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
            }
        }, hostVars: 40, hostBindings: function CmacsInputGroupComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("ant-input-group-compact", ctx.compact)("ant-input-search-enter-button", ctx.search)("ant-input-search", ctx.search)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.search && ctx.isSmall)("ant-input-search-large", ctx.search && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
            }
        }, inputs: { cmacsAddOnBeforeIcon: "cmacsAddOnBeforeIcon", cmacsAddOnAfterIcon: "cmacsAddOnAfterIcon", cmacsPrefixIcon: "cmacsPrefixIcon", cmacsSuffixIcon: "cmacsSuffixIcon", cmacsAddOnBefore: "cmacsAddOnBefore", cmacsAddOnAfter: "cmacsAddOnAfter", cmacsPrefix: "cmacsPrefix", cmacsSuffix: "cmacsSuffix", cmacsSize: "cmacsSize", search: "search", compact: "compact" }, exportAs: ["cmacsInputGroup"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$f, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function CmacsInputGroupComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, CmacsInputGroupComponent_span_0_Template, 4, 4, "span", 0);
                i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, CmacsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(5, CmacsInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                i0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
            }
        }, directives: [i3.NgIf, CmacsInputGroupSlotComponent, i3.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    __decorate([
        util.InputBoolean()
    ], CmacsInputGroupComponent.prototype, "search", void 0);
    __decorate([
        util.InputBoolean()
    ], CmacsInputGroupComponent.prototype, "compact", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputGroupComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line: component-selector
                        selector: 'cmacs-input-group',
                        exportAs: 'cmacsInputGroup',
                        preserveWhitespaces: false,
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        templateUrl: './cmacs-input-group.component.html',
                        // tslint:disable-next-line: use-host-property-decorator
                        host: {
                            '[class.ant-input-group-compact]': "compact",
                            '[class.ant-input-search-enter-button]': "search",
                            '[class.ant-input-search]': "search",
                            '[class.ant-input-search-rtl]': "dir === 'rtl'",
                            '[class.ant-input-search-sm]': "search && isSmall",
                            '[class.ant-input-search-large]': "search && isLarge",
                            '[class.ant-input-group-wrapper]': "isAddOn",
                            '[class.ant-input-group-wrapper-rtl]': "dir === 'rtl'",
                            '[class.ant-input-group-wrapper-lg]': "isAddOn && isLarge",
                            '[class.ant-input-group-wrapper-sm]': "isAddOn && isSmall",
                            '[class.ant-input-affix-wrapper]': "isAffix && !isAddOn",
                            '[class.ant-input-affix-wrapper-rtl]': "dir === 'rtl'",
                            '[class.ant-input-affix-wrapper-focused]': "isAffix && focused",
                            '[class.ant-input-affix-wrapper-disabled]': "isAffix && disabled",
                            '[class.ant-input-affix-wrapper-lg]': "isAffix && !isAddOn && isLarge",
                            '[class.ant-input-affix-wrapper-sm]': "isAffix && !isAddOn && isSmall",
                            '[class.ant-input-group]': "!isAffix && !isAddOn",
                            '[class.ant-input-group-rtl]': "dir === 'rtl'",
                            '[class.ant-input-group-lg]': "!isAffix && !isAddOn && isLarge",
                            '[class.ant-input-group-sm]': "!isAffix && !isAddOn && isSmall"
                        }
                    }]
            }], function () {
            return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { listOfNzInputDirective: [{
                    type: i0.ContentChildren,
                    args: [CmacsInputDirective]
                }], cmacsAddOnBeforeIcon: [{
                    type: i0.Input
                }], cmacsAddOnAfterIcon: [{
                    type: i0.Input
                }], cmacsPrefixIcon: [{
                    type: i0.Input
                }], cmacsSuffixIcon: [{
                    type: i0.Input
                }], cmacsAddOnBefore: [{
                    type: i0.Input
                }], cmacsAddOnAfter: [{
                    type: i0.Input
                }], cmacsPrefix: [{
                    type: i0.Input
                }], cmacsSuffix: [{
                    type: i0.Input
                }], cmacsSize: [{
                    type: i0.Input
                }], search: [{
                    type: i0.Input
                }], compact: [{
                    type: i0.Input
                }] });
    })();

    var CmacsAutosizeDirective = /** @class */ (function () {
        function CmacsAutosizeDirective(elementRef, ngZone, platform, resizeService) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.platform = platform;
            this.resizeService = resizeService;
            this.autosize = false;
            this.el = this.elementRef.nativeElement;
            this.maxHeight = null;
            this.minHeight = null;
            this.destroy$ = new rxjs.Subject();
            this.inputGap = 10;
        }
        Object.defineProperty(CmacsAutosizeDirective.prototype, "cmacsAutosize", {
            set: function (value) {
                var isAutoSizeType = function (data) {
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
            },
            enumerable: false,
            configurable: true
        });
        CmacsAutosizeDirective.prototype.resizeToFitContent = function (force) {
            var _this = this;
            if (force === void 0) { force = false; }
            this.cacheTextareaLineHeight();
            // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.
            if (!this.cachedLineHeight) {
                return;
            }
            var textarea = this.el;
            var value = textarea.value;
            // Only resize if the value or minRows have changed since these calculations can be expensive.
            if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
                return;
            }
            var placeholderText = textarea.placeholder;
            // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.
            textarea.classList.add('nz-textarea-autosize-measuring');
            textarea.placeholder = '';
            var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
            if (this.maxHeight !== null && height > this.maxHeight) {
                height = this.maxHeight;
            }
            if (this.minHeight !== null && height < this.minHeight) {
                height = this.minHeight;
            }
            // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
            textarea.style.height = height + "px";
            textarea.classList.remove('nz-textarea-autosize-measuring');
            textarea.placeholder = placeholderText;
            // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
            // We need to re-set the selection in order for it to scroll to the proper position.
            if (typeof requestAnimationFrame !== 'undefined') {
                this.ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }); });
            }
            this.previousValue = value;
            this.previousMinRows = this.minRows;
        };
        CmacsAutosizeDirective.prototype.cacheTextareaLineHeight = function () {
            if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
                return;
            }
            // Use a clone element because we have to override some styles.
            var textareaClone = this.el.cloneNode(false);
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
        };
        CmacsAutosizeDirective.prototype.setMinHeight = function () {
            var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
            if (minHeight !== null) {
                this.el.style.minHeight = minHeight + "px";
            }
            return minHeight;
        };
        CmacsAutosizeDirective.prototype.setMaxHeight = function () {
            var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
            if (maxHeight !== null) {
                this.el.style.maxHeight = maxHeight + "px";
            }
            return maxHeight;
        };
        CmacsAutosizeDirective.prototype.noopInputHandler = function () {
            // no-op handler that ensures we're running change detection on input events.
        };
        CmacsAutosizeDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.autosize && this.platform.isBrowser) {
                this.resizeToFitContent();
                this.resizeService
                    .subscribe()
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            }
        };
        CmacsAutosizeDirective.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        CmacsAutosizeDirective.prototype.ngDoCheck = function () {
            if (this.autosize && this.platform.isBrowser) {
                this.resizeToFitContent();
            }
        };
        return CmacsAutosizeDirective;
    }());
    CmacsAutosizeDirective.ɵfac = function CmacsAutosizeDirective_Factory(t) { return new (t || CmacsAutosizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i2$2.Platform), i0.ɵɵdirectiveInject(i2$5.NzResizeService)); };
    CmacsAutosizeDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsAutosizeDirective, selectors: [["textarea", "cmacsAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function CmacsAutosizeDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("input", function CmacsAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
            }
        }, inputs: { cmacsAutosize: "cmacsAutosize" }, exportAs: ["cmacsAutosize"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsAutosizeDirective, [{
                type: i0.Directive,
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
            }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i2$2.Platform }, { type: i2$5.NzResizeService }]; }, { cmacsAutosize: [{
                    type: i0.Input
                }] });
    })();

    var _c0$g = [[["textarea", "cmacs-input", ""]]];
    var _c1$6 = ["textarea[cmacs-input]"];
    var CmacsTextareaCountComponent = /** @class */ (function () {
        function CmacsTextareaCountComponent(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.maxCharacterCount = 0;
            this.computeCharacterCount = function (v) { return v.length; };
            this.formatter = function (c, m) { return "" + c + (m > 0 ? "/" + m : ""); };
            this.configChange$ = new rxjs.Subject();
            this.destroy$ = new rxjs.Subject();
        }
        CmacsTextareaCountComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (!this.nzInputDirective && i0.isDevMode()) {
                throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
            }
            if (this.nzInputDirective.ngControl) {
                var valueChanges = this.nzInputDirective.ngControl.valueChanges || rxjs.EMPTY;
                rxjs.merge(valueChanges, this.configChange$)
                    .pipe(operators.takeUntil(this.destroy$), operators.map(function () { return _this.nzInputDirective.ngControl.value; }), operators.startWith(this.nzInputDirective.ngControl.value))
                    .subscribe(function (value) {
                    _this.setDataCount(value);
                });
            }
        };
        CmacsTextareaCountComponent.prototype.setDataCount = function (value) {
            var inputValue = util.isNotNil(value) ? String(value) : '';
            var currentCount = this.computeCharacterCount(inputValue);
            var dataCount = this.formatter(currentCount, this.maxCharacterCount);
            this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
        };
        CmacsTextareaCountComponent.prototype.ngOnDestroy = function () {
            this.configChange$.complete();
            this.destroy$.next();
            this.destroy$.complete();
        };
        return CmacsTextareaCountComponent;
    }());
    CmacsTextareaCountComponent.ɵfac = function CmacsTextareaCountComponent_Factory(t) { return new (t || CmacsTextareaCountComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    CmacsTextareaCountComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTextareaCountComponent, selectors: [["cmacs-textarea-count"]], contentQueries: function CmacsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
            }
        }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { maxCharacterCount: "maxCharacterCount", computeCharacterCount: "computeCharacterCount", formatter: "formatter" }, ngContentSelectors: _c1$6, decls: 1, vars: 0, template: function CmacsTextareaCountComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0$g);
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTextareaCountComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-textarea-count',
                        template: "\n    <ng-content select=\"textarea[cmacs-input]\"></ng-content>\n  ",
                        host: {
                            class: 'ant-input-textarea-show-count'
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzInputDirective: [{
                    type: i0.ContentChild,
                    args: [CmacsInputDirective, { static: true }]
                }], maxCharacterCount: [{
                    type: i0.Input
                }], computeCharacterCount: [{
                    type: i0.Input
                }], formatter: [{
                    type: i0.Input
                }] });
    })();

    var CmacsComponentsV2LibModule = /** @class */ (function () {
        function CmacsComponentsV2LibModule() {
        }
        return CmacsComponentsV2LibModule;
    }());
    CmacsComponentsV2LibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmacsComponentsV2LibModule });
    CmacsComponentsV2LibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CmacsComponentsV2LibModule_Factory(t) { return new (t || CmacsComponentsV2LibModule)(); }, imports: [[
                i3.CommonModule,
                i4.FormsModule,
                button.NzButtonModule,
                checkbox.NzCheckboxModule,
                i2$1.NzToolTipModule,
                slider.NzSliderModule,
                _switch.NzSwitchModule,
                input.NzInputModule,
                radio.NzRadioModule,
                select.NzSelectModule,
                divider.NzDividerModule
            ], divider.NzDividerModule,
            button.NzButtonModule,
            checkbox.NzCheckboxModule,
            i2$1.NzToolTipModule,
            slider.NzSliderModule,
            _switch.NzSwitchModule,
            input.NzInputModule,
            radio.NzRadioModule,
            select.NzSelectModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmacsComponentsV2LibModule, { declarations: [CmacsComponentsV2LibComponent,
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
                CmacsTextareaCountComponent], imports: [i3.CommonModule,
                i4.FormsModule,
                button.NzButtonModule,
                checkbox.NzCheckboxModule,
                i2$1.NzToolTipModule,
                slider.NzSliderModule,
                _switch.NzSwitchModule,
                input.NzInputModule,
                radio.NzRadioModule,
                select.NzSelectModule,
                divider.NzDividerModule], exports: [CmacsDividerComponent,
                divider.NzDividerModule,
                CmacsComponentsV2LibComponent,
                CmacsCheckboxComponent,
                CmacsCheckboxWrapperComponent,
                CmacsCheckboxGroupComponent,
                button.NzButtonModule,
                CmacsButtonComponent,
                CmacsButtonGroupComponent,
                checkbox.NzCheckboxModule,
                CmacsColorPickerComponent,
                CmacsSliderHandleComponent,
                CmacsSliderMarksComponent,
                CmacsSliderStepComponent,
                CmacsSliderTrackComponent,
                CmacsSliderComponent,
                i2$1.NzToolTipModule,
                slider.NzSliderModule,
                _switch.NzSwitchModule,
                input.NzInputModule,
                CmacsRadioGroupComponent,
                CmacsRadioComponent,
                CmacsRadioButtonDirective,
                radio.NzRadioModule,
                CmacsSelectComponent,
                CmacsSelectTopControlComponent,
                CmacsSelectUnselectableDirective,
                CmacsOptionComponent,
                CmacsOptionContainerComponent,
                CmacsOptionGroupComponent,
                CmacsOptionLiComponent,
                NzFilterGroupOptionPipe,
                NzFilterOptionPipe,
                select.NzSelectModule,
                CmacsInputDirective,
                CmacsInputGroupComponent,
                CmacsAutosizeDirective,
                CmacsInputGroupSlotComponent,
                CmacsTextareaCountComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsComponentsV2LibModule, [{
                type: i0.NgModule,
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
                            i3.CommonModule,
                            i4.FormsModule,
                            button.NzButtonModule,
                            checkbox.NzCheckboxModule,
                            i2$1.NzToolTipModule,
                            slider.NzSliderModule,
                            _switch.NzSwitchModule,
                            input.NzInputModule,
                            radio.NzRadioModule,
                            select.NzSelectModule,
                            divider.NzDividerModule
                        ],
                        exports: [
                            CmacsDividerComponent,
                            divider.NzDividerModule,
                            CmacsComponentsV2LibComponent,
                            CmacsCheckboxComponent,
                            CmacsCheckboxWrapperComponent,
                            CmacsCheckboxGroupComponent,
                            button.NzButtonModule,
                            CmacsButtonComponent,
                            CmacsButtonGroupComponent,
                            checkbox.NzCheckboxModule,
                            CmacsColorPickerComponent,
                            CmacsSliderHandleComponent,
                            CmacsSliderMarksComponent,
                            CmacsSliderStepComponent,
                            CmacsSliderTrackComponent,
                            CmacsSliderComponent,
                            i2$1.NzToolTipModule,
                            slider.NzSliderModule,
                            _switch.NzSwitchModule,
                            input.NzInputModule,
                            CmacsRadioGroupComponent,
                            CmacsRadioComponent,
                            CmacsRadioButtonDirective,
                            radio.NzRadioModule,
                            CmacsSelectComponent,
                            CmacsSelectTopControlComponent,
                            CmacsSelectUnselectableDirective,
                            CmacsOptionComponent,
                            CmacsOptionContainerComponent,
                            CmacsOptionGroupComponent,
                            CmacsOptionLiComponent,
                            NzFilterGroupOptionPipe,
                            NzFilterOptionPipe,
                            select.NzSelectModule,
                            CmacsInputDirective,
                            CmacsInputGroupComponent,
                            CmacsAutosizeDirective,
                            CmacsInputGroupSlotComponent,
                            CmacsTextareaCountComponent
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of cmacs-components-v2-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CmacsAutosizeDirective = CmacsAutosizeDirective;
    exports.CmacsButtonComponent = CmacsButtonComponent;
    exports.CmacsButtonGroupComponent = CmacsButtonGroupComponent;
    exports.CmacsCheckboxComponent = CmacsCheckboxComponent;
    exports.CmacsCheckboxGroupComponent = CmacsCheckboxGroupComponent;
    exports.CmacsCheckboxWrapperComponent = CmacsCheckboxWrapperComponent;
    exports.CmacsColorPickerComponent = CmacsColorPickerComponent;
    exports.CmacsComponentsV2LibComponent = CmacsComponentsV2LibComponent;
    exports.CmacsComponentsV2LibModule = CmacsComponentsV2LibModule;
    exports.CmacsComponentsV2LibService = CmacsComponentsV2LibService;
    exports.CmacsDividerComponent = CmacsDividerComponent;
    exports.CmacsInputDirective = CmacsInputDirective;
    exports.CmacsInputGroupComponent = CmacsInputGroupComponent;
    exports.CmacsInputGroupSlotComponent = CmacsInputGroupSlotComponent;
    exports.CmacsOptionComponent = CmacsOptionComponent;
    exports.CmacsOptionContainerComponent = CmacsOptionContainerComponent;
    exports.CmacsOptionGroupComponent = CmacsOptionGroupComponent;
    exports.CmacsOptionLiComponent = CmacsOptionLiComponent;
    exports.CmacsRadioButtonDirective = CmacsRadioButtonDirective;
    exports.CmacsRadioComponent = CmacsRadioComponent;
    exports.CmacsRadioGroupComponent = CmacsRadioGroupComponent;
    exports.CmacsSelectComponent = CmacsSelectComponent;
    exports.CmacsSelectService = CmacsSelectService;
    exports.CmacsSelectTopControlComponent = CmacsSelectTopControlComponent;
    exports.CmacsSelectUnselectableDirective = CmacsSelectUnselectableDirective;
    exports.CmacsSliderComponent = CmacsSliderComponent;
    exports.CmacsSliderHandleComponent = CmacsSliderHandleComponent;
    exports.CmacsSliderMarksComponent = CmacsSliderMarksComponent;
    exports.CmacsSliderStepComponent = CmacsSliderStepComponent;
    exports.CmacsSliderTrackComponent = CmacsSliderTrackComponent;
    exports.CmacsTextareaCountComponent = CmacsTextareaCountComponent;
    exports.NzFilterGroupOptionPipe = NzFilterGroupOptionPipe;
    exports.NzFilterOptionPipe = NzFilterOptionPipe;
    exports.NzRadioService = NzRadioService;
    exports.NzSliderService = NzSliderService;
    exports.defaultFilterOption = defaultFilterOption;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cmacs-components-v2-lib.umd.js.map
