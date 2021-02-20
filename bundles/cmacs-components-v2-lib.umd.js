(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('cmacs-components-v2-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['cmacs-components-v2-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

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

    var CmacsCheckboxV2Component = /** @class */ (function () {
        function CmacsCheckboxV2Component() {
        }
        CmacsCheckboxV2Component.prototype.ngOnInit = function () {
        };
        return CmacsCheckboxV2Component;
    }());
    CmacsCheckboxV2Component.ɵfac = function CmacsCheckboxV2Component_Factory(t) { return new (t || CmacsCheckboxV2Component)(); };
    CmacsCheckboxV2Component.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCheckboxV2Component, selectors: [["cmacs-checkbox-v2"]], decls: 2, vars: 0, template: function CmacsCheckboxV2Component_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "cmacs-checkbox-v2 works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxV2Component, [{
                type: i0.Component,
                args: [{
                        selector: 'cmacs-checkbox-v2',
                        templateUrl: './cmacs-checkbox-v2.component.html',
                        styleUrls: ['./cmacs-checkbox-v2.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var CmacsComponentsV2LibModule = /** @class */ (function () {
        function CmacsComponentsV2LibModule() {
        }
        return CmacsComponentsV2LibModule;
    }());
    CmacsComponentsV2LibModule.ɵmod = i0.ɵɵdefineNgModule({ type: CmacsComponentsV2LibModule });
    CmacsComponentsV2LibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CmacsComponentsV2LibModule_Factory(t) { return new (t || CmacsComponentsV2LibModule)(); }, imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CmacsComponentsV2LibModule, { declarations: [CmacsComponentsV2LibComponent,
                CmacsCheckboxV2Component], exports: [CmacsComponentsV2LibComponent,
                CmacsCheckboxV2Component] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsComponentsV2LibModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            CmacsComponentsV2LibComponent,
                            CmacsCheckboxV2Component
                        ],
                        imports: [],
                        exports: [
                            CmacsComponentsV2LibComponent,
                            CmacsCheckboxV2Component
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

    exports.CmacsCheckboxV2Component = CmacsCheckboxV2Component;
    exports.CmacsComponentsV2LibComponent = CmacsComponentsV2LibComponent;
    exports.CmacsComponentsV2LibModule = CmacsComponentsV2LibModule;
    exports.CmacsComponentsV2LibService = CmacsComponentsV2LibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cmacs-components-v2-lib.umd.js.map
