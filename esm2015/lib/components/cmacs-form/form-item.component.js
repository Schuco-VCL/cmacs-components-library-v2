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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1mb3JtL2Zvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNJLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUkvQixpR0FBaUc7QUFtQmpHLE1BQU0sT0FBTyxzQkFBc0I7SUFzQmpDLFlBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ2RixXQUFNLEdBQTRCLElBQUksQ0FBQztRQUN2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUVkLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBa0IvQixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWpCRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBb0I7UUFDakMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQU1ELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7NEZBN0JVLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7O1FBSC9CLGtCQUF5Qjs7dUZBR2hCLHNCQUFzQjtjQWxCbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixtQ0FBbUMsRUFBRSxzQkFBc0I7b0JBQzNELG1DQUFtQyxFQUFFLHNCQUFzQjtvQkFDM0QsaUNBQWlDLEVBQUUsb0JBQW9CO29CQUN2RCxxQ0FBcUMsRUFBRSx5QkFBeUI7b0JBQ2hFLG9DQUFvQyxFQUFFLHVCQUF1QjtvQkFDN0QsaUNBQWlDLEVBQUUsZUFBZTtpQkFDbkQ7Z0JBQ0QsUUFBUSxFQUFFOztHQUVUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgdHlwZSBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAndmFsaWRhdGluZycgfCBudWxsO1xyXG5cclxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWZvcm0taXRlbScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0Zvcm1JdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1oYXMtc3VjY2Vzc10nOiAnc3RhdHVzID09PSBcInN1Y2Nlc3NcIicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0taGFzLXdhcm5pbmddJzogJ3N0YXR1cyA9PT0gXCJ3YXJuaW5nXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1lcnJvcl0nOiAnc3RhdHVzID09PSBcImVycm9yXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWlzLXZhbGlkYXRpbmddJzogJ3N0YXR1cyA9PT0gXCJ2YWxpZGF0aW5nXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWhhcy1mZWVkYmFja10nOiAnaGFzRmVlZGJhY2sgJiYgc3RhdHVzJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwQ2xhc3MnXHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uRGVzdHJveSB7XHJcbiAgc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSA9IG51bGw7XHJcbiAgaGFzRmVlZGJhY2sgPSBmYWxzZTtcclxuICB3aXRoSGVscENsYXNzID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBzZXRXaXRoSGVscFZpYVRpcHModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTdGF0dXMoc3RhdHVzOiBOekZvcm1Db250cm9sU3RhdHVzVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldEhhc0ZlZWRiYWNrKGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvL3RoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=