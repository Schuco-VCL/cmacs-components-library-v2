import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export class CmacsFormItemComponent {
    setWithHelpViaTips(value) {
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    setStatus(status) {
        this.status = status;
        this.cdr.markForCheck();
    }
    setHasFeedback(hasFeedback) {
        //this.hasFeedback = hasFeedback;
        this.cdr.markForCheck();
    }
    constructor(elementRef, renderer, cdr) {
        this.cdr = cdr;
        this.status = null;
        this.hasFeedback = false;
        this.withHelpClass = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsFormItemComponent_Factory(t) { return new (t || CmacsFormItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsFormItemComponent, selectors: [["cmacs-form-item"]], hostVars: 12, hostBindings: function CmacsFormItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
        } }, exportAs: ["cmacsFormItem"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsFormItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFormItemComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-form-item',
                exportAs: 'cmacsFormItem',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[class.ant-form-item-has-success]': 'status === "success"',
                    '[class.ant-form-item-has-warning]': 'status === "warning"',
                    '[class.ant-form-item-has-error]': 'status === "error"',
                    '[class.ant-form-item-is-validating]': 'status === "validating"',
                    '[class.ant-form-item-has-feedback]': 'hasFeedback && status',
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                },
                template: `
    <ng-content></ng-content>
  `
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUkvQixpR0FBaUc7QUFtQmpHLE1BQU0sT0FBTyxzQkFBc0I7SUFPakMsa0JBQWtCLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBK0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQW9CO1FBQ2pDLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBVSxHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXJCdkYsV0FBTSxHQUE0QixJQUFJLENBQUM7UUFDdkMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFZCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQWtCL0IsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO3VGQTdCVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjs7OztZQUgvQixrQkFBeUI7Ozt1RkFHaEIsc0JBQXNCO2NBbEJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLHNCQUFzQjtvQkFDM0QsbUNBQW1DLEVBQUUsc0JBQXNCO29CQUMzRCxpQ0FBaUMsRUFBRSxvQkFBb0I7b0JBQ3ZELHFDQUFxQyxFQUFFLHlCQUF5QjtvQkFDaEUsb0NBQW9DLEVBQUUsdUJBQXVCO29CQUM3RCxpQ0FBaUMsRUFBRSxlQUFlO2lCQUNuRDtnQkFDRCxRQUFRLEVBQUU7O0dBRVQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICd2YWxpZGF0aW5nJyB8IG51bGw7XHJcblxyXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1pdGVtJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybUl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1zdWNjZXNzXSc6ICdzdGF0dXMgPT09IFwic3VjY2Vzc1wiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtd2FybmluZ10nOiAnc3RhdHVzID09PSBcIndhcm5pbmdcIicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWVycm9yXSc6ICdzdGF0dXMgPT09IFwiZXJyb3JcIicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taXMtdmFsaWRhdGluZ10nOiAnc3RhdHVzID09PSBcInZhbGlkYXRpbmdcIicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLWZlZWRiYWNrXSc6ICdoYXNGZWVkYmFjayAmJiBzdGF0dXMnLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnd2l0aEhlbHBDbGFzcydcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25EZXN0cm95IHtcclxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcclxuICBoYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHdpdGhIZWxwQ2xhc3MgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHNldFdpdGhIZWxwVmlhVGlwcyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy53aXRoSGVscENsYXNzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldFN0YXR1cyhzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0SGFzRmVlZGJhY2soaGFzRmVlZGJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vdGhpcy5oYXNGZWVkYmFjayA9IGhhc0ZlZWRiYWNrO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=