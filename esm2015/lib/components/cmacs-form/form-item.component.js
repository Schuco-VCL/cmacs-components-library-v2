import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export class CmacsFormItemComponent {
    constructor(elementRef, renderer, cdr) {
        this.cdr = cdr;
        this.status = null;
        this.hasFeedback = false;
        this.withHelpClass = false;
        this.destroy$ = new Subject();
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsFormItemComponent.ɵfac = function CmacsFormItemComponent_Factory(t) { return new (t || CmacsFormItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsFormItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsFormItemComponent, selectors: [["cmacs-form-item"]], hostVars: 12, hostBindings: function CmacsFormItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
    } }, exportAs: ["cmacsFormItem"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsFormItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUkvQixpR0FBaUc7QUFtQmpHLE1BQU0sT0FBTyxzQkFBc0I7SUFzQmpDLFlBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ2RixXQUFNLEdBQTRCLElBQUksQ0FBQztRQUN2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBa0IvQixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWpCRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBb0I7UUFDakMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7NEZBN0JVLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7O1FBSC9CLGtCQUF5Qjs7dUZBR2hCLHNCQUFzQjtjQWxCbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxzQkFBc0I7b0JBQzNELG1DQUFtQyxFQUFFLHNCQUFzQjtvQkFDM0QsaUNBQWlDLEVBQUUsb0JBQW9CO29CQUN2RCxxQ0FBcUMsRUFBRSx5QkFBeUI7b0JBQ2hFLG9DQUFvQyxFQUFFLHVCQUF1QjtvQkFDN0QsaUNBQWlDLEVBQUUsZUFBZTtpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFOztHQUVUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IHR5cGUgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ3ZhbGlkYXRpbmcnIHwgbnVsbDtcblxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtZm9ybS1pdGVtJyxcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm1JdGVtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1zdWNjZXNzXSc6ICdzdGF0dXMgPT09IFwic3VjY2Vzc1wiJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXdhcm5pbmddJzogJ3N0YXR1cyA9PT0gXCJ3YXJuaW5nXCInLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtZXJyb3JdJzogJ3N0YXR1cyA9PT0gXCJlcnJvclwiJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taXMtdmFsaWRhdGluZ10nOiAnc3RhdHVzID09PSBcInZhbGlkYXRpbmdcIicsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1mZWVkYmFja10nOiAnaGFzRmVlZGJhY2sgJiYgc3RhdHVzJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICd3aXRoSGVscENsYXNzJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0Zvcm1JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkRlc3Ryb3kge1xuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcbiAgaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgd2l0aEhlbHBDbGFzcyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIHNldFdpdGhIZWxwVmlhVGlwcyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0U3RhdHVzKHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldEhhc0ZlZWRiYWNrKGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy90aGlzLmhhc0ZlZWRiYWNrID0gaGFzRmVlZGJhY2s7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==