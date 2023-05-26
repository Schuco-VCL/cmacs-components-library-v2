import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, SkipSelf, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DefaultTooltipIcon } from './form.directive';
import * as i0 from "@angular/core";
import * as i1 from "./form.directive";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
function CmacsFormLabelComponent_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tooltipIconType_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", tooltipIconType_r2)("nzTheme", ctx_r1.tooltipIcon.theme);
} }
function CmacsFormLabelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtemplate(1, CmacsFormLabelComponent_span_2_ng_container_1_Template, 2, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzTooltipTitle", ctx_r0.cmacsTooltipTitle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.tooltipIcon.type);
} }
const _c0 = ["*"];
function toTooltipIcon(value) {
    const icon = typeof value === 'string' ? { type: value } : value;
    return Object.assign(Object.assign({}, DefaultTooltipIcon), icon);
}
export class CmacsFormLabelComponent {
    constructor(elementRef, renderer, cdr, CmacsFormDirective) {
        this.cdr = cdr;
        this.CmacsFormDirective = CmacsFormDirective;
        this.cmacsRequired = false;
        this.noColon = 'default';
        this._tooltipIcon = 'default';
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        if (this.CmacsFormDirective) {
            this.CmacsFormDirective
                .getInputObservable('cmacsNoColon')
                .pipe(filter(() => this.noColon === 'default'), takeUntil(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
            this.CmacsFormDirective
                .getInputObservable('cmacsTooltipIcon')
                .pipe(filter(() => this._tooltipIcon === 'default'), takeUntil(this.destroy$))
                .subscribe(() => this.cdr.markForCheck());
        }
    }
    set cmacsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get cmacsNoColon() {
        var _a;
        return this.noColon !== 'default' ? this.noColon : (_a = this.CmacsFormDirective) === null || _a === void 0 ? void 0 : _a.cmacsNoColon;
    }
    set cmacsTooltipIcon(value) {
        this._tooltipIcon = toTooltipIcon(value);
    }
    // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
    get tooltipIcon() {
        var _a;
        return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(((_a = this.CmacsFormDirective) === null || _a === void 0 ? void 0 : _a.cmacsTooltipIcon) || DefaultTooltipIcon);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsFormLabelComponent.ɵfac = function CmacsFormLabelComponent_Factory(t) { return new (t || CmacsFormLabelComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CmacsFormDirective, 12)); };
CmacsFormLabelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsFormLabelComponent, selectors: [["cmacs-form-label"]], inputs: { cmacsFor: "cmacsFor", cmacsRequired: "cmacsRequired", cmacsNoColon: "cmacsNoColon", cmacsTooltipTitle: "cmacsTooltipTitle", cmacsTooltipIcon: "cmacsTooltipIcon" }, exportAs: ["cmacsFormLabel"], ngContentSelectors: _c0, decls: 3, vars: 6, consts: [["class", "ant-form-item-tooltip", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]], template: function CmacsFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵprojection(1);
        i0.ɵɵtemplate(2, CmacsFormLabelComponent_span_2_Template, 2, 2, "span", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-form-item-no-colon", ctx.cmacsNoColon)("ant-form-item-required", ctx.cmacsRequired);
        i0.ɵɵattribute("for", ctx.cmacsFor);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.cmacsTooltipTitle);
    } }, directives: [i2.NgIf, i3.NzTooltipDirective, i4.NzStringTemplateOutletDirective, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsFormLabelComponent.prototype, "cmacsRequired", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFormLabelComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-form-label',
                exportAs: 'cmacsFormLabel',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <label [attr.for]="cmacsFor" [class.ant-form-item-no-colon]="cmacsNoColon" [class.ant-form-item-required]="cmacsRequired">
      <ng-content></ng-content>
      <span *ngIf="cmacsTooltipTitle" class="ant-form-item-tooltip" nz-tooltip [nzTooltipTitle]="cmacsTooltipTitle">
        <ng-container *nzStringTemplateOutlet="tooltipIcon.type; let tooltipIconType">
          <i nz-icon [nzType]="tooltipIconType" [nzTheme]="tooltipIcon.theme"></i>
        </ng-container>
      </span>
    </label>
  `
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.CmacsFormDirective, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, { cmacsFor: [{
            type: Input
        }], cmacsRequired: [{
            type: Input
        }], cmacsNoColon: [{
            type: Input
        }], cmacsTooltipTitle: [{
            type: Input
        }], cmacsTooltipIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsS0FBSyxFQUVMLFFBQVEsRUFFUixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0lBc0JsRSw2QkFBOEU7SUFDNUUsdUJBQXdFO0lBQzFFLDBCQUFlOzs7O0lBREYsZUFBMEI7SUFBMUIsMkNBQTBCLHFDQUFBOzs7SUFGekMsK0JBQThHO0lBQzVHLGlHQUVlO0lBQ2pCLGlCQUFPOzs7SUFKa0UseURBQW9DO0lBQzVGLGVBQTBDO0lBQTFDLGdFQUEwQzs7O0FBZmpFLFNBQVMsYUFBYSxDQUFDLEtBQWlDO0lBQ3RELE1BQU0sSUFBSSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRSx1Q0FBWSxrQkFBa0IsR0FBSyxJQUFJLEVBQUc7QUFDNUMsQ0FBQztBQW1CRCxNQUFNLE9BQU8sdUJBQXVCO0lBMkJsQyxZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1gsR0FBc0IsRUFD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O1lBQ21CLGFBQWE7a0JBQXJDLEtBQUs7WUFFRixZQUFZO2tCQURmLEtBQUs7WUFVRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFRixnQkFBZ0I7a0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERlZmF1bHRUb29sdGlwSWNvbiwgQ21hY3NGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56Rm9ybVRvb2x0aXBJY29uIHtcclxuICB0eXBlOiBOelRTVHlwZTtcclxuICB0aGVtZTogVGhlbWVUeXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b1Rvb2x0aXBJY29uKHZhbHVlOiBzdHJpbmcgfCBOekZvcm1Ub29sdGlwSWNvbik6IFJlcXVpcmVkPE56Rm9ybVRvb2x0aXBJY29uPiB7XHJcbiAgY29uc3QgaWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IHZhbHVlIH0gOiB2YWx1ZTtcclxuICByZXR1cm4geyAuLi5EZWZhdWx0VG9vbHRpcEljb24sIC4uLmljb24gfTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1mb3JtLWxhYmVsJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybUxhYmVsJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bGFiZWwgW2F0dHIuZm9yXT1cImNtYWNzRm9yXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tbm8tY29sb25dPVwiY21hY3NOb0NvbG9uXCIgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwiY21hY3NSZXF1aXJlZFwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiY21hY3NUb29sdGlwVGl0bGVcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tdG9vbHRpcFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cImNtYWNzVG9vbHRpcFRpdGxlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRvb2x0aXBJY29uLnR5cGU7IGxldCB0b29sdGlwSWNvblR5cGVcIj5cclxuICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJ0b29sdGlwSWNvblR5cGVcIiBbbnpUaGVtZV09XCJ0b29sdGlwSWNvbi50aGVtZVwiPjwvaT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zvcm1MYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzRm9yPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NOb0NvbG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBnZXQgY21hY3NOb0NvbG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubm9Db2xvbiAhPT0gJ2RlZmF1bHQnID8gdGhpcy5ub0NvbG9uIDogdGhpcy5DbWFjc0Zvcm1EaXJlY3RpdmU/LmNtYWNzTm9Db2xvbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbm9Db2xvbjogYm9vbGVhbiB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgY21hY3NUb29sdGlwVGl0bGU/OiBOelRTVHlwZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc1Rvb2x0aXBJY29uKHZhbHVlOiBzdHJpbmcgfCBOekZvcm1Ub29sdGlwSWNvbikge1xyXG4gICAgdGhpcy5fdG9vbHRpcEljb24gPSB0b1Rvb2x0aXBJY29uKHZhbHVlKTtcclxuICB9XHJcbiAgLy8gZHVlIHRvICdnZXQnIGFuZCAnc2V0JyBhY2Nlc3NvciBtdXN0IGhhdmUgdGhlIHNhbWUgdHlwZSwgc28gaXQgd2FzIHJlbmFtZWQgdG8gYHRvb2x0aXBJY29uYFxyXG4gIGdldCB0b29sdGlwSWNvbigpOiBOekZvcm1Ub29sdGlwSWNvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcEljb24gIT09ICdkZWZhdWx0JyA/IHRoaXMuX3Rvb2x0aXBJY29uIDogdG9Ub29sdGlwSWNvbih0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NUb29sdGlwSWNvbiB8fCBEZWZhdWx0VG9vbHRpcEljb24pO1xyXG4gIH1cclxuICBwcml2YXRlIF90b29sdGlwSWNvbjogTnpGb3JtVG9vbHRpcEljb24gfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBDbWFjc0Zvcm1EaXJlY3RpdmU6IENtYWNzRm9ybURpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1sYWJlbCcpO1xyXG5cclxuICAgIGlmICh0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZSkge1xyXG4gICAgICB0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZVxyXG4gICAgICAgIC5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzTm9Db2xvbicpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5ub0NvbG9uID09PSAnZGVmYXVsdCcpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xyXG5cclxuICAgICAgdGhpcy5DbWFjc0Zvcm1EaXJlY3RpdmVcclxuICAgICAgICAuZ2V0SW5wdXRPYnNlcnZhYmxlKCdjbWFjc1Rvb2x0aXBJY29uJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl90b29sdGlwSWNvbiA9PT0gJ2RlZmF1bHQnKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==