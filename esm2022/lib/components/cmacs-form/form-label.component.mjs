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
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
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
    return { ...DefaultTooltipIcon, ...icon };
}
export class CmacsFormLabelComponent {
    set cmacsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get cmacsNoColon() {
        return this.noColon !== 'default' ? this.noColon : this.CmacsFormDirective?.cmacsNoColon;
    }
    set cmacsTooltipIcon(value) {
        this._tooltipIcon = toTooltipIcon(value);
    }
    // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
    get tooltipIcon() {
        return this._tooltipIcon !== 'default' ? this._tooltipIcon : toTooltipIcon(this.CmacsFormDirective?.cmacsTooltipIcon || DefaultTooltipIcon);
    }
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
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsFormLabelComponent_Factory(t) { return new (t || CmacsFormLabelComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.CmacsFormDirective, 12)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsFormLabelComponent, selectors: [["cmacs-form-label"]], inputs: { cmacsFor: "cmacsFor", cmacsRequired: "cmacsRequired", cmacsNoColon: "cmacsNoColon", cmacsTooltipTitle: "cmacsTooltipTitle", cmacsTooltipIcon: "cmacsTooltipIcon" }, exportAs: ["cmacsFormLabel"], ngContentSelectors: _c0, decls: 3, vars: 6, consts: [["class", "ant-form-item-tooltip", "nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], ["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]], template: function CmacsFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i2.NgIf, i3.NzTooltipDirective, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsS0FBSyxFQUVMLFFBQVEsRUFFUixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0lBc0JsRSw2QkFBOEU7SUFDNUUsdUJBQXdFO0lBQzFFLDBCQUFlOzs7O0lBREYsZUFBMEI7SUFBMUIsMkNBQTBCLHFDQUFBOzs7SUFGekMsK0JBQThHO0lBQzVHLGlHQUVlO0lBQ2pCLGlCQUFPOzs7SUFKa0UseURBQW9DO0lBQzVGLGVBQTBDO0lBQTFDLGdFQUEwQzs7O0FBZmpFLFNBQVMsYUFBYSxDQUFDLEtBQWlDO0lBQ3RELE1BQU0sSUFBSSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRSxPQUFPLEVBQUUsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFtQkQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDO0lBQzNGLENBQUM7SUFLRCxJQUNJLGdCQUFnQixDQUFDLEtBQWlDO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCw4RkFBOEY7SUFDOUYsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlJLENBQUM7SUFLRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQW1CLEVBQ1gsR0FBc0IsRUFDRSxrQkFBc0M7UUFEOUQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBNUIvQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVN2QyxZQUFPLEdBQXdCLFNBQVMsQ0FBQztRQVd6QyxpQkFBWSxHQUFrQyxTQUFTLENBQUM7UUFFeEQsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFRL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQjtpQkFDcEIsa0JBQWtCLENBQUMsY0FBYyxDQUFDO2lCQUNsQyxJQUFJLENBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLEVBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2lCQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLGtCQUFrQjtpQkFDcEIsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7aUJBQ3RDLElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsRUFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7aUJBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO3dGQXpEVSx1QkFBdUI7b0VBQXZCLHVCQUF1Qjs7WUFWaEMsNkJBQTBIO1lBQ3hILGtCQUF5QjtZQUN6QiwwRUFJTztZQUNULGlCQUFROztZQVBxQiwwREFBNkMsNkNBQUE7WUFBbkUsbUNBQXFCO1lBRW5CLGVBQXVCO1lBQXZCLDRDQUF1Qjs7O0FBV1Q7SUFBZixZQUFZLEVBQUU7OERBQXVCO3VGQUhwQyx1QkFBdUI7Y0FqQm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7c0JBZ0NJLFFBQVE7O3NCQUFJLFFBQVE7d0JBN0JkLFFBQVE7a0JBQWhCLEtBQUs7WUFDbUIsYUFBYTtrQkFBckMsS0FBSztZQUVGLFlBQVk7a0JBRGYsS0FBSztZQVVHLGlCQUFpQjtrQkFBekIsS0FBSztZQUVGLGdCQUFnQjtrQkFEbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTa2lwU2VsZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGVmYXVsdFRvb2x0aXBJY29uLCBDbWFjc0Zvcm1EaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0uZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpGb3JtVG9vbHRpcEljb24ge1xyXG4gIHR5cGU6IE56VFNUeXBlO1xyXG4gIHRoZW1lOiBUaGVtZVR5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvVG9vbHRpcEljb24odmFsdWU6IHN0cmluZyB8IE56Rm9ybVRvb2x0aXBJY29uKTogUmVxdWlyZWQ8TnpGb3JtVG9vbHRpcEljb24+IHtcclxuICBjb25zdCBpY29uID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHsgdHlwZTogdmFsdWUgfSA6IHZhbHVlO1xyXG4gIHJldHVybiB7IC4uLkRlZmF1bHRUb29sdGlwSWNvbiwgLi4uaWNvbiB9O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0tbGFiZWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtTGFiZWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwiY21hY3NGb3JcIiBbY2xhc3MuYW50LWZvcm0taXRlbS1uby1jb2xvbl09XCJjbWFjc05vQ29sb25cIiBbY2xhc3MuYW50LWZvcm0taXRlbS1yZXF1aXJlZF09XCJjbWFjc1JlcXVpcmVkXCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPHNwYW4gKm5nSWY9XCJjbWFjc1Rvb2x0aXBUaXRsZVwiIGNsYXNzPVwiYW50LWZvcm0taXRlbS10b29sdGlwXCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwiY21hY3NUb29sdGlwVGl0bGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidG9vbHRpcEljb24udHlwZTsgbGV0IHRvb2x0aXBJY29uVHlwZVwiPlxyXG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cInRvb2x0aXBJY29uVHlwZVwiIFtuelRoZW1lXT1cInRvb2x0aXBJY29uLnRoZW1lXCI+PC9pPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2xhYmVsPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgY21hY3NGb3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBjbWFjc05vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBjbWFjc05vQ29sb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5ub0NvbG9uICE9PSAnZGVmYXVsdCcgPyB0aGlzLm5vQ29sb24gOiB0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZT8uY21hY3NOb0NvbG9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBub0NvbG9uOiBib29sZWFuIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG5cclxuICBASW5wdXQoKSBjbWFjc1Rvb2x0aXBUaXRsZT86IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNtYWNzVG9vbHRpcEljb24odmFsdWU6IHN0cmluZyB8IE56Rm9ybVRvb2x0aXBJY29uKSB7XHJcbiAgICB0aGlzLl90b29sdGlwSWNvbiA9IHRvVG9vbHRpcEljb24odmFsdWUpO1xyXG4gIH1cclxuICAvLyBkdWUgdG8gJ2dldCcgYW5kICdzZXQnIGFjY2Vzc29yIG11c3QgaGF2ZSB0aGUgc2FtZSB0eXBlLCBzbyBpdCB3YXMgcmVuYW1lZCB0byBgdG9vbHRpcEljb25gXHJcbiAgZ2V0IHRvb2x0aXBJY29uKCk6IE56Rm9ybVRvb2x0aXBJY29uIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwSWNvbiAhPT0gJ2RlZmF1bHQnID8gdGhpcy5fdG9vbHRpcEljb24gOiB0b1Rvb2x0aXBJY29uKHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlPy5jbWFjc1Rvb2x0aXBJY29uIHx8IERlZmF1bHRUb29sdGlwSWNvbik7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXBJY29uOiBOekZvcm1Ub29sdGlwSWNvbiB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIENtYWNzRm9ybURpcmVjdGl2ZTogQ21hY3NGb3JtRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWxhYmVsJyk7XHJcblxyXG4gICAgaWYgKHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuQ21hY3NGb3JtRGlyZWN0aXZlXHJcbiAgICAgICAgLmdldElucHV0T2JzZXJ2YWJsZSgnY21hY3NOb0NvbG9uJylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLm5vQ29sb24gPT09ICdkZWZhdWx0JyksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcblxyXG4gICAgICB0aGlzLkNtYWNzRm9ybURpcmVjdGl2ZVxyXG4gICAgICAgIC5nZXRJbnB1dE9ic2VydmFibGUoJ2NtYWNzVG9vbHRpcEljb24nKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3Rvb2x0aXBJY29uID09PSAnZGVmYXVsdCcpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==