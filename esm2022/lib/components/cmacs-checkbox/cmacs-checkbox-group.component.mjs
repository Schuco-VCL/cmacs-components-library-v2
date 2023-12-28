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
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 1);
    i0.ɵɵlistener("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; return i0.ɵɵresetView(option_r1.checked = $event); })("checkedChange", function CmacsCheckboxGroupComponent_label_0_Template_label_checkedChange_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const option_r1 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onCheckedChange(option_r1, $event)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", option_r1.disabled || ctx_r0.disabled)("checked", option_r1.checked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r1.label);
} }
export class CmacsCheckboxGroupComponent {
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    trackByOption(_index, option) {
        return option.value;
    }
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
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsCheckboxGroupComponent_Factory(t) { return new (t || CmacsCheckboxGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCheckboxGroupComponent, selectors: [["cmacs-checkbox-group"]], inputs: { disabled: "disabled" }, exportAs: ["cmacsCheckboxGroup"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => CmacsCheckboxGroupComponent),
                    multi: true
                }
            ])], decls: 1, vars: 2, consts: [["cmacs-checkbox", "", 3, "disabled", "checked", "checkedChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cmacs-checkbox", "", 3, "disabled", "checked", "checkedChange"]], template: function CmacsCheckboxGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsCheckboxGroupComponent_label_0_Template, 3, 3, "label", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByOption);
        } }, dependencies: [i3.NgForOf, i4.CmacsCheckboxComponent], encapsulation: 2 }); }
}
__decorate([
    InputBoolean()
], CmacsCheckboxGroupComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCheckboxGroupComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-checkbox-group', exportAs: 'cmacsCheckboxGroup', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsCheckboxGroupComponent),
                        multi: true
                    }
                ], template: "<label cmacs-checkbox\r\n  *ngFor=\"let option of options; trackBy:trackByOption\"\r\n  [disabled]=\"option.disabled || disabled\"\r\n  [(checked)]=\"option.checked\"\r\n  (checkedChange)=\"onCheckedChange(option, $event)\">\r\n  <span>{{ option.label }}</span>\r\n</label>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWNoZWNrYm94L2NtYWNzLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jaGVja2JveC9jbWFjcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBRVQsS0FBSyxFQUdMLGlCQUFpQixFQUVqQixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUNqQnZELGdDQUlvRDtJQURsRCx5TkFBYSwwQ0FDVixJQUR5QiwrT0FDWCxlQUFBLHlDQUErQixDQUFBLElBRHBCO0lBRTVCLDRCQUFNO0lBQUEsWUFBa0I7SUFBQSxpQkFBTyxFQUFBOzs7O0lBSC9CLGdFQUF3Qyw4QkFBQTtJQUdsQyxlQUFrQjtJQUFsQixxQ0FBa0I7O0FEbUMxQixNQUFNLE9BQU8sMkJBQTJCO0lBWXRDLGVBQWUsQ0FBQyxNQUFvQyxFQUFFLE9BQWdCO1FBQ3BFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhLENBQUMsTUFBYyxFQUFFLE1BQW9DO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFDVSxVQUFzQixFQUN0QixZQUEwQixFQUMxQixHQUFzQixFQUM5QixRQUFtQixFQUNDLGNBQThCO1FBSjFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFFVixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF6QnBELGtDQUFrQztRQUNsQyxhQUFRLEdBQXlCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM1QyxrQ0FBa0M7UUFDbEMsY0FBUyxHQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUNsQyxZQUFPLEdBQW1DLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFFZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWtCckMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2RSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFxQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUE2QztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzRGQXBFVSwyQkFBMkI7b0VBQTNCLDJCQUEyQiw4SUFSM0I7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDMUQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ3RDSCxnRkFNUTs7WUFMYSxxQ0FBWSxtQ0FBQTs7O0FENkNOO0lBQWYsWUFBWSxFQUFFOzZEQUFrQjt1RkFOL0IsMkJBQTJCO2NBZHZDLFNBQVM7MkJBQ0Usc0JBQXNCLFlBQ3RCLG9CQUFvQix1QkFDVCxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUksYUFFMUI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLENBQUM7d0JBQzFELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGOztzQkE0QkUsUUFBUTt3QkFwQmMsUUFBUTtrQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcclxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ21hY3NDaGVja0JveE9wdGlvbkludGVyZmFjZSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jaGVja2JveC1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NoZWNrYm94R3JvdXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzQ2hlY2tib3hHcm91cENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDaGVja2JveEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4gbnVsbDtcclxuICBvcHRpb25zOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgb25DaGVja2VkQ2hhbmdlKG9wdGlvbjogQ21hY3NDaGVja0JveE9wdGlvbkludGVyZmFjZSwgY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIG9wdGlvbi5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMub3B0aW9ucyk7XG4gIH1cclxuXHJcbiAgdHJhY2tCeU9wdGlvbihfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC1ncm91cCcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBDbWFjc0NoZWNrQm94T3B0aW9uSW50ZXJmYWNlW10pOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogQ21hY3NDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8bGFiZWwgY21hY3MtY2hlY2tib3hcclxuICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrQnk6dHJhY2tCeU9wdGlvblwiXHJcbiAgW2Rpc2FibGVkXT1cIm9wdGlvbi5kaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgWyhjaGVja2VkKV09XCJvcHRpb24uY2hlY2tlZFwiXHJcbiAgKGNoZWNrZWRDaGFuZ2UpPVwib25DaGVja2VkQ2hhbmdlKG9wdGlvbiwgJGV2ZW50KVwiPlxyXG4gIDxzcGFuPnt7IG9wdGlvbi5sYWJlbCB9fTwvc3Bhbj5cclxuPC9sYWJlbD5cclxuIl19