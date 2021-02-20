import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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

class CmacsCheckboxV2Component {
    constructor() { }
    ngOnInit() {
    }
}
CmacsCheckboxV2Component.ɵfac = function CmacsCheckboxV2Component_Factory(t) { return new (t || CmacsCheckboxV2Component)(); };
CmacsCheckboxV2Component.ɵcmp = ɵɵdefineComponent({ type: CmacsCheckboxV2Component, selectors: [["cmacs-checkbox-v2"]], decls: 2, vars: 0, template: function CmacsCheckboxV2Component_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "cmacs-checkbox-v2 works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsCheckboxV2Component, [{
        type: Component,
        args: [{
                selector: 'cmacs-checkbox-v2',
                templateUrl: './cmacs-checkbox-v2.component.html',
                styleUrls: ['./cmacs-checkbox-v2.component.css']
            }]
    }], function () { return []; }, null); })();

class CmacsComponentsV2LibModule {
}
CmacsComponentsV2LibModule.ɵmod = ɵɵdefineNgModule({ type: CmacsComponentsV2LibModule });
CmacsComponentsV2LibModule.ɵinj = ɵɵdefineInjector({ factory: function CmacsComponentsV2LibModule_Factory(t) { return new (t || CmacsComponentsV2LibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CmacsComponentsV2LibModule, { declarations: [CmacsComponentsV2LibComponent,
        CmacsCheckboxV2Component], exports: [CmacsComponentsV2LibComponent,
        CmacsCheckboxV2Component] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CmacsComponentsV2LibModule, [{
        type: NgModule,
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
    }], null, null); })();

/*
 * Public API Surface of cmacs-components-v2-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CmacsCheckboxV2Component, CmacsComponentsV2LibComponent, CmacsComponentsV2LibModule, CmacsComponentsV2LibService };
//# sourceMappingURL=cmacs-components-v2-lib.js.map
