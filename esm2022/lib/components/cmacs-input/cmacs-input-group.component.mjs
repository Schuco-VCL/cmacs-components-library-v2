import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { merge, Subject } from 'rxjs';
import { map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CmacsInputDirective } from './cmacs-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "./input-group-slot.component";
function CmacsInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r7.cmacsAddOnBeforeIcon)("template", ctx_r7.cmacsAddOnBefore);
} }
function CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵclassProp("ant-input-affix-wrapper-sm", ctx_r8.isSmall)("ant-input-affix-wrapper-lg", ctx_r8.isLarge);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r9.cmacsAddOnAfterIcon)("template", ctx_r9.cmacsAddOnAfter);
} }
function CmacsInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5);
    i0.ɵɵtemplate(2, CmacsInputGroupComponent_span_0_span_2_Template, 2, 5, "span", 6);
    i0.ɵɵtemplate(3, CmacsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnBefore || ctx_r0.cmacsAddOnBeforeIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.cmacsAddOnAfter || ctx_r0.cmacsAddOnAfterIcon);
} }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r2.isAffix)("ngIfElse", _r5);
} }
function CmacsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r13.cmacsPrefixIcon)("template", ctx_r13.cmacsPrefix);
} }
function CmacsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function CmacsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 14);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r15.cmacsSuffixIcon)("template", ctx_r15.cmacsSuffix);
} }
function CmacsInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11);
    i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵtemplate(2, CmacsInputGroupComponent_ng_template_3_span_2_Template, 1, 2, "span", 12);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsPrefix || ctx_r4.cmacsPrefixIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.cmacsSuffix || ctx_r4.cmacsSuffixIcon);
} }
function CmacsInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class CmacsInputGroupComponent {
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
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsInputGroupComponent_Factory(t) { return new (t || CmacsInputGroupComponent)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsInputGroupComponent, selectors: [["cmacs-input-group"]], contentQueries: function CmacsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
        } }, hostVars: 40, hostBindings: function CmacsInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-compact", ctx.compact)("ant-input-search-enter-button", ctx.search)("ant-input-search", ctx.search)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.search && ctx.isSmall)("ant-input-search-large", ctx.search && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
        } }, inputs: { cmacsAddOnBeforeIcon: "cmacsAddOnBeforeIcon", cmacsAddOnAfterIcon: "cmacsAddOnAfterIcon", cmacsPrefixIcon: "cmacsPrefixIcon", cmacsSuffixIcon: "cmacsSuffixIcon", cmacsAddOnBefore: "cmacsAddOnBefore", cmacsAddOnAfter: "cmacsAddOnAfter", cmacsPrefix: "cmacsPrefix", cmacsSuffix: "cmacsSuffix", cmacsSize: "cmacsSize", search: "search", compact: "compact" }, exportAs: ["cmacsInputGroup"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], ["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], [1, "ant-input-wrapper", "ant-input-group"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", 4, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["cmacs-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["cmacs-input-group-slot", "", "type", "suffix", 3, "icon", "template"]], template: function CmacsInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsInputGroupComponent_span_0_Template, 4, 4, "span", 0);
            i0.ɵɵtemplate(1, CmacsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(3, CmacsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(5, CmacsInputGroupComponent_ng_template_5_Template, 1, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", _r1);
        } }, dependencies: [i3.NgIf, i3.NgTemplateOutlet, i4.CmacsInputGroupSlotComponent], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsInputGroupComponent.prototype, "compact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputGroupComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-input-group', exportAs: 'cmacsInputGroup', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
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
                }, template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn; else noAddOnTemplate\">\r\n  <span *ngIf=\"cmacsAddOnBefore || cmacsAddOnBeforeIcon\"\r\n        cmacs-input-group-slot\r\n        type=\"addon\"\r\n        [icon]=\"cmacsAddOnBeforeIcon\"\r\n        [template]=\"cmacsAddOnBefore\"></span>\r\n  <span *ngIf=\"isAffix; else contentTemplate\"\r\n        class=\"ant-input-affix-wrapper\"\r\n        [class.ant-input-affix-wrapper-sm]=\"isSmall\"\r\n        [class.ant-input-affix-wrapper-lg]=\"isLarge\">\r\n    <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\r\n  </span>\r\n  <span *ngIf=\"cmacsAddOnAfter || cmacsAddOnAfterIcon\"\r\n        cmacs-input-group-slot\r\n        type=\"addon\"\r\n        [icon]=\"cmacsAddOnAfterIcon\"\r\n        [template]=\"cmacsAddOnAfter\"></span>\r\n</span>\r\n<ng-template #noAddOnTemplate>\r\n  <ng-template [ngIf]=\"isAffix\" [ngIfElse]=\"contentTemplate\">\r\n    <ng-template [ngTemplateOutlet]=\"affixTemplate\"></ng-template>\r\n  </ng-template>\r\n</ng-template>\r\n<ng-template #affixTemplate>\r\n  <span *ngIf=\"cmacsPrefix || cmacsPrefixIcon\" cmacs-input-group-slot type=\"prefix\" [icon]=\"cmacsPrefixIcon\" [template]=\"cmacsPrefix\"></span>\r\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\r\n  <span *ngIf=\"cmacsSuffix || cmacsSuffixIcon\" cmacs-input-group-slot type=\"suffix\" [icon]=\"cmacsSuffixIcon\" [template]=\"cmacsSuffix\"></span>\r\n</ng-template>\r\n<ng-template #contentTemplate>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L2NtYWNzLWlucHV0LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1pbnB1dC9jbWFjcy1pbnB1dC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUdmLEtBQUssRUFJTCxRQUFRLEVBSVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7O0lDdkI1RCwwQkFJMkM7OztJQURyQyxrREFBNkIscUNBQUE7Ozs7SUFFbkMsK0JBR21EO0lBQ2pELHVHQUE4RDtJQUNoRSxpQkFBTzs7OztJQUhELDREQUE0Qyw4Q0FBQTtJQUVuQyxlQUFrQztJQUFsQyxzQ0FBa0M7OztJQUVqRCwwQkFJMEM7OztJQURwQyxpREFBNEIsb0NBQUE7OztJQWZwQywrQkFBc0Y7SUFDcEYsa0ZBSTJDO0lBQzNDLGtGQUtPO0lBQ1Asa0ZBSTBDO0lBQzVDLGlCQUFPOzs7O0lBaEJFLGVBQThDO0lB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RSxvQkFBb0I7b0JBQzFELG9DQUFvQyxFQUFFLG9CQUFvQjtvQkFDMUQsaUNBQWlDLEVBQUUscUJBQXFCO29CQUN4RCxxQ0FBcUMsRUFBRSxlQUFlO29CQUN0RCx5Q0FBeUMsRUFBRSxvQkFBb0I7b0JBQy9ELDBDQUEwQyxFQUFFLHFCQUFxQjtvQkFDakUsb0NBQW9DLEVBQUUsZ0NBQWdDO29CQUN0RSxvQ0FBb0MsRUFBRSxnQ0FBZ0M7b0JBQ3RFLHlCQUF5QixFQUFFLHNCQUFzQjtvQkFDakQsNkJBQTZCLEVBQUUsZUFBZTtvQkFDOUMsNEJBQTRCLEVBQUUsaUNBQWlDO29CQUMvRCw0QkFBNEIsRUFBRSxpQ0FBaUM7aUJBQ2hFOztzQkE2QkUsUUFBUTt3QkF6QjJCLHNCQUFzQjtrQkFBM0QsZUFBZTttQkFBQyxtQkFBbUI7WUFDM0Isb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWlucHV0LWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzSW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1ob3N0LXByb3BlcnR5LWRlY29yYXRvclxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RdJzogYGNvbXBhY3RgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogYHNlYXJjaGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoXSc6IGBzZWFyY2hgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgc2VhcmNoICYmIGlzU21hbGxgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sYXJnZV0nOiBgc2VhcmNoICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXJdJzogYGlzQWRkT25gLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6IGBpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItc21dJzogYGlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZm9jdXNlZF0nOiBgaXNBZmZpeCAmJiBmb2N1c2VkYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWRpc2FibGVkXSc6IGBpc0FmZml4ICYmIGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzTGFyZ2VgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc21dJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGAsXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJzogYCFpc0FmZml4ICYmICFpc0FkZE9uYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWxnXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc0xhcmdlYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0lucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NJbnB1dERpcmVjdGl2ZSkgbGlzdE9mTnpJbnB1dERpcmVjdGl2ZSE6IFF1ZXJ5TGlzdDxDbWFjc0lucHV0RGlyZWN0aXZlPjtcbiAgQElucHV0KCkgY21hY3NBZGRPbkJlZm9yZUljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY21hY3NBZGRPbkFmdGVySWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjbWFjc1ByZWZpeEljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY21hY3NTdWZmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNtYWNzQWRkT25CZWZvcmU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY21hY3NBZGRPbkFmdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNtYWNzUHJlZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNtYWNzU3VmZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNtYWNzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29tcGFjdCA9IGZhbHNlO1xuICBpc0xhcmdlID0gZmFsc2U7XG4gIGlzU21hbGwgPSBmYWxzZTtcbiAgaXNBZmZpeCA9IGZhbHNlO1xuICBpc0FkZE9uID0gZmFsc2U7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cclxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcbiAgKSB7IH1cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuZm9yRWFjaChpdGVtID0+IChpdGVtLnNpemUgPSB0aGlzLmNtYWNzU2l6ZSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gISFmb2N1c09yaWdpbjtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcbiAgICBsaXN0T2ZJbnB1dENoYW5nZSRcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lcmdlKC4uLltsaXN0T2ZJbnB1dENoYW5nZSQsIC4uLmxpc3QubWFwKChpbnB1dDogQ21hY3NJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQkKV0pO1xuICAgICAgICB9KSxcbiAgICAgICAgbWVyZ2VNYXAoKCkgPT4gbGlzdE9mSW5wdXRDaGFuZ2UkKSxcbiAgICAgICAgbWFwKGxpc3QgPT4gbGlzdC5zb21lKChpbnB1dDogQ21hY3NJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGRpc2FibGVkID0+IHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBjbWFjc1NpemUsXG4gICAgICBjbWFjc1N1ZmZpeCxcbiAgICAgIGNtYWNzUHJlZml4LFxuICAgICAgY21hY3NQcmVmaXhJY29uLFxuICAgICAgY21hY3NTdWZmaXhJY29uLFxuICAgICAgY21hY3NBZGRPbkFmdGVyLFxuICAgICAgY21hY3NBZGRPbkJlZm9yZSxcbiAgICAgIGNtYWNzQWRkT25BZnRlckljb24sXG4gICAgICBjbWFjc0FkZE9uQmVmb3JlSWNvblxuICAgIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChjbWFjc1NpemUpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgICAgIHRoaXMuaXNMYXJnZSA9IHRoaXMuY21hY3NTaXplID09PSAnbGFyZ2UnO1xuICAgICAgdGhpcy5pc1NtYWxsID0gdGhpcy5jbWFjc1NpemUgPT09ICdzbWFsbCc7XG4gICAgfVxuICAgIGlmIChjbWFjc1N1ZmZpeCB8fCBjbWFjc1ByZWZpeCB8fCBjbWFjc1ByZWZpeEljb24gfHwgY21hY3NTdWZmaXhJY29uKSB7XG4gICAgICB0aGlzLmlzQWZmaXggPSAhISh0aGlzLmNtYWNzU3VmZml4IHx8IHRoaXMuY21hY3NQcmVmaXggfHwgdGhpcy5jbWFjc1ByZWZpeEljb24gfHwgdGhpcy5jbWFjc1N1ZmZpeEljb24pO1xuICAgIH1cbiAgICBpZiAoY21hY3NBZGRPbkFmdGVyIHx8IGNtYWNzQWRkT25CZWZvcmUgfHwgY21hY3NBZGRPbkFmdGVySWNvbiB8fCBjbWFjc0FkZE9uQmVmb3JlSWNvbikge1xuICAgICAgdGhpcy5pc0FkZE9uID0gISEodGhpcy5jbWFjc0FkZE9uQWZ0ZXIgfHwgdGhpcy5jbWFjc0FkZE9uQmVmb3JlIHx8IHRoaXMuY21hY3NBZGRPbkFmdGVySWNvbiB8fCB0aGlzLmNtYWNzQWRkT25CZWZvcmVJY29uKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJhbnQtaW5wdXQtd3JhcHBlciBhbnQtaW5wdXQtZ3JvdXBcIiAqbmdJZj1cImlzQWRkT247IGVsc2Ugbm9BZGRPblRlbXBsYXRlXCI+XHJcbiAgPHNwYW4gKm5nSWY9XCJjbWFjc0FkZE9uQmVmb3JlIHx8IGNtYWNzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBjbWFjcy1pbnB1dC1ncm91cC1zbG90XHJcbiAgICAgICAgdHlwZT1cImFkZG9uXCJcclxuICAgICAgICBbaWNvbl09XCJjbWFjc0FkZE9uQmVmb3JlSWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImNtYWNzQWRkT25CZWZvcmVcIj48L3NwYW4+XHJcbiAgPHNwYW4gKm5nSWY9XCJpc0FmZml4OyBlbHNlIGNvbnRlbnRUZW1wbGF0ZVwiXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtaW5wdXQtYWZmaXgtd3JhcHBlclwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXT1cImlzU21hbGxcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ109XCJpc0xhcmdlXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuICpuZ0lmPVwiY21hY3NBZGRPbkFmdGVyIHx8IGNtYWNzQWRkT25BZnRlckljb25cIlxyXG4gICAgICAgIGNtYWNzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwiYWRkb25cIlxyXG4gICAgICAgIFtpY29uXT1cImNtYWNzQWRkT25BZnRlckljb25cIlxyXG4gICAgICAgIFt0ZW1wbGF0ZV09XCJjbWFjc0FkZE9uQWZ0ZXJcIj48L3NwYW4+XHJcbjwvc3Bhbj5cclxuPG5nLXRlbXBsYXRlICNub0FkZE9uVGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzQWZmaXhcIiBbbmdJZkVsc2VdPVwiY29udGVudFRlbXBsYXRlXCI+XHJcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxyXG4gIDxzcGFuICpuZ0lmPVwiY21hY3NQcmVmaXggfHwgY21hY3NQcmVmaXhJY29uXCIgY21hY3MtaW5wdXQtZ3JvdXAtc2xvdCB0eXBlPVwicHJlZml4XCIgW2ljb25dPVwiY21hY3NQcmVmaXhJY29uXCIgW3RlbXBsYXRlXT1cImNtYWNzUHJlZml4XCI+PC9zcGFuPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxzcGFuICpuZ0lmPVwiY21hY3NTdWZmaXggfHwgY21hY3NTdWZmaXhJY29uXCIgY21hY3MtaW5wdXQtZ3JvdXAtc2xvdCB0eXBlPVwic3VmZml4XCIgW2ljb25dPVwiY21hY3NTdWZmaXhJY29uXCIgW3RlbXBsYXRlXT1cImNtYWNzU3VmZml4XCI+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==