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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsS0FBSyxFQUVMLFFBQVEsRUFFUixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0lBc0JsRSw2QkFBOEU7SUFDNUUsdUJBQXdFO0lBQzFFLDBCQUFlOzs7O0lBREYsZUFBMEI7SUFBMUIsMkNBQTBCLHFDQUFBOzs7SUFGekMsK0JBQThHO0lBQzVHLGlHQUVlO0lBQ2pCLGlCQUFPOzs7SUFKa0UseURBQW9DO0lBQzVGLGVBQTBDO0lBQTFDLGdFQUEwQzs7O0FBZmpFLFNBQVMsYUFBYSxDQUFDLEtBQWlDO0lBQ3RELE1BQU0sSUFBSSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRSx1Q0FBWSxrQkFBa0IsR0FBSyxJQUFJLEVBQUc7QUFDNUMsQ0FBQztBQW1CRCxNQUFNLE9BQU8sdUJBQXVCO0lBMkJsQyxZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1gsR0FBc0IsRUFD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O1lBQ21CLGFBQWE7a0JBQXJDLEtBQUs7WUFFRixZQUFZO2tCQURmLEtBQUs7WUFVRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFRixnQkFBZ0I7a0JBRG5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2tpcFNlbGYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERlZmF1bHRUb29sdGlwSWNvbiwgQ21hY3NGb3JtRGlyZWN0aXZlIH0gZnJvbSAnLi9mb3JtLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpGb3JtVG9vbHRpcEljb24ge1xuICB0eXBlOiBOelRTVHlwZTtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbn1cblxuZnVuY3Rpb24gdG9Ub29sdGlwSWNvbih2YWx1ZTogc3RyaW5nIHwgTnpGb3JtVG9vbHRpcEljb24pOiBSZXF1aXJlZDxOekZvcm1Ub29sdGlwSWNvbj4ge1xuICBjb25zdCBpY29uID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsdWUgfSA6IHZhbHVlO1xuICByZXR1cm4geyAuLi5EZWZhdWx0VG9vbHRpcEljb24sIC4uLmljb24gfTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1sYWJlbCcsXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtTGFiZWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGxhYmVsIFthdHRyLmZvcl09XCJjbWFjc0ZvclwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLW5vLWNvbG9uXT1cImNtYWNzTm9Db2xvblwiIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cImNtYWNzUmVxdWlyZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDxzcGFuICpuZ0lmPVwiY21hY3NUb29sdGlwVGl0bGVcIiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tdG9vbHRpcFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cImNtYWNzVG9vbHRpcFRpdGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0b29sdGlwSWNvbi50eXBlOyBsZXQgdG9vbHRpcEljb25UeXBlXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInRvb2x0aXBJY29uVHlwZVwiIFtuelRoZW1lXT1cInRvb2x0aXBJY29uLnRoZW1lXCI+PC9pPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBjbWFjc0Zvcj86IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzUmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KClcbiAgc2V0IGNtYWNzTm9Db2xvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgZ2V0IGNtYWNzTm9Db2xvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ub0NvbG9uICE9PSAnZGVmYXVsdCcgPyB0aGlzLm5vQ29sb24gOiB0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NOb0NvbG9uO1xuICB9XG5cbiAgcHJpdmF0ZSBub0NvbG9uOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpIGNtYWNzVG9vbHRpcFRpdGxlPzogTnpUU1R5cGU7XG4gIEBJbnB1dCgpXG4gIHNldCBjbWFjc1Rvb2x0aXBJY29uKHZhbHVlOiBzdHJpbmcgfCBOekZvcm1Ub29sdGlwSWNvbikge1xuICAgIHRoaXMuX3Rvb2x0aXBJY29uID0gdG9Ub29sdGlwSWNvbih2YWx1ZSk7XG4gIH1cbiAgLy8gZHVlIHRvICdnZXQnIGFuZCAnc2V0JyBhY2Nlc3NvciBtdXN0IGhhdmUgdGhlIHNhbWUgdHlwZSwgc28gaXQgd2FzIHJlbmFtZWQgdG8gYHRvb2x0aXBJY29uYFxuICBnZXQgdG9vbHRpcEljb24oKTogTnpGb3JtVG9vbHRpcEljb24ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWNvbiAhPT0gJ2RlZmF1bHQnID8gdGhpcy5fdG9vbHRpcEljb24gOiB0b1Rvb2x0aXBJY29uKHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlPy5jbWFjc1Rvb2x0aXBJY29uIHx8IERlZmF1bHRUb29sdGlwSWNvbik7XG4gIH1cbiAgcHJpdmF0ZSBfdG9vbHRpcEljb246IE56Rm9ybVRvb2x0aXBJY29uIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBDbWFjc0Zvcm1EaXJlY3RpdmU6IENtYWNzRm9ybURpcmVjdGl2ZVxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG5cbiAgICBpZiAodGhpcy5DbWFjc0Zvcm1EaXJlY3RpdmUpIHtcbiAgICAgIHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlXG4gICAgICAgIC5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzTm9Db2xvbicpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLm5vQ29sb24gPT09ICdkZWZhdWx0JyksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG5cbiAgICAgIHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlXG4gICAgICAgIC5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzVG9vbHRpcEljb24nKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fdG9vbHRpcEljb24gPT09ICdkZWZhdWx0JyksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=