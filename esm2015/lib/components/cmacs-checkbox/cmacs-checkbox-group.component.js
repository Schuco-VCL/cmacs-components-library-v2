import { __decorate } from "tslib";
import { forwardRef, Component, Input, ViewEncapsulation, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "./cmacs-checkbox.component";
function CmacsCheckboxGroupComponent_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵlistener("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { const option_r1 = ctx.$implicit; return option_r1.checked = $event; })("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const option_r1 = ctx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onCheckedChange(option_r1, $event); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", option_r1.disabled || ctx_r0.disabled)("checked", option_r1.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r1.label);
} }
export class CmacsCheckboxGroupComponent {
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
CmacsCheckboxGroupComponent.ɵfac = function CmacsCheckboxGroupComponent_Factory(t) { return new (t || CmacsCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsCheckboxGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCheckboxGroupComponent, selectors: [["cmacs-checkbox-group"]], inputs: { disabled: "disabled" }, exportAs: ["cmacsCheckboxGroup"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsCheckboxGroupComponent),
                multi: true
            }
        ])], decls: 1, vars: 2, consts: [["cmacs-checkbox", "", 3, "disabled", "checked", "checkedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cmacs-checkbox", "", 3, "disabled", "checked", "checkedChange"]], template: function CmacsCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
    } }, directives: [i3.NgForOf, i4.CmacsCheckboxComponent], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxGroupComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-checkbox-group',
                exportAs: 'cmacsCheckboxGroup',
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWNoZWNrYm94L2NtYWNzLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jaGVja2JveC9jbWFjcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBRVQsS0FBSyxFQUdMLGlCQUFpQixFQUVqQixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUNqQnZELGdDQUlvRDtJQURsRCxvTUFBNEIsZ1FBQUE7SUFFNUIsNEJBQU07SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ2pDLGlCQUFROzs7O0lBSk4sZ0VBQXdDLDhCQUFBO0lBR2xDLGVBQWtCO0lBQWxCLHFDQUFrQjs7QURtQzFCLE1BQU0sT0FBTywyQkFBMkI7SUFxQnRDLFlBQ1UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsR0FBc0IsRUFDOUIsUUFBbUIsRUFDQyxjQUE4QjtRQUoxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFFBQUcsR0FBSCxH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QkFBMkI7Y0FkdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7O3NCQTJCSSxRQUFRO3dCQXBCYyxRQUFRO2tCQUFoQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxyXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNoZWNrYm94LWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2hlY2tib3hHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NDaGVja2JveEdyb3VwQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NoZWNrYm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiBudWxsO1xyXG4gIG9wdGlvbnM6IENtYWNzQ2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBvbkNoZWNrZWRDaGFuZ2Uob3B0aW9uOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlLCBjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgb3B0aW9uLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5vcHRpb25zKTtcbiAgfVxyXG5cclxuICB0cmFja0J5T3B0aW9uKF9pbmRleDogbnVtYmVyLCBvcHRpb246IENtYWNzQ2hlY2tCb3hPcHRpb25JbnRlcmZhY2UpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG9wdGlvbi52YWx1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWNoZWNrYm94LWdyb3VwJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IENtYWNzQ2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5vcHRpb25zID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxsYWJlbCBjbWFjcy1jaGVja2JveFxyXG4gICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTp0cmFja0J5T3B0aW9uXCJcclxuICBbZGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkIHx8IGRpc2FibGVkXCJcclxuICBbKGNoZWNrZWQpXT1cIm9wdGlvbi5jaGVja2VkXCJcclxuICAoY2hlY2tlZENoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2Uob3B0aW9uLCAkZXZlbnQpXCI+XHJcbiAgPHNwYW4+e3sgb3B0aW9uLmxhYmVsIH19PC9zcGFuPlxyXG48L2xhYmVsPlxyXG4iXX0=