import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { merge, Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { CmacsStepComponent } from './step.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
const _c0 = ["*"];
export class CmacsWizardComponent {
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
    }
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.current = 0;
        this.direction = 'vertical';
        this.labelPlacement = 'horizontal';
        this.type = 'default';
        this.size = 'default';
        this.startIndex = 0;
        this.status = 'process';
        this.indexChange = new EventEmitter();
        this.destroy$ = new Subject();
        this.showProcessDot = false;
        this.classMap = {};
        this.dir = 'ltr';
        this.setClassMap();
    }
    ngOnChanges(changes) {
        if (changes.startIndex || changes.direction || changes.status || changes.current) {
            this.updateChildrenSteps();
        }
        if (changes.direction || changes.nzProgressDot || changes.labelPlacement || changes.size) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.setClassMap();
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setClassMap();
        this.updateChildrenSteps();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
                this.updateChildrenSteps();
            });
        }
    }
    updateChildrenSteps() {
        if (this.steps) {
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
                    step.outStatus = this.status;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.indexChange.observers.length > 0;
                    step.direction = this.direction;
                    step.index = index + this.startIndex;
                    step.currentIndex = this.current;
                    step.last = length === index + 1;
                    step.markForCheck();
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = merge(...this.steps.map(step => step.click$)).subscribe(index => this.indexChange.emit(index));
        }
    }
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.direction}`]: true,
            [`ant-steps-label-horizontal`]: this.direction === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.labelPlacement === 'vertical') && this.direction === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.size === 'small',
            ['ant-steps-navigation']: this.type === 'navigation',
            ['ant-steps-rtl']: this.dir === 'rtl'
        };
    }
    static { this.ɵfac = function CmacsWizardComponent_Factory(t) { return new (t || CmacsWizardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsWizardComponent, selectors: [["cmacs-wizard"]], contentQueries: function CmacsWizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsStepComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.steps = _t);
        } }, inputs: { current: "current", direction: "direction", labelPlacement: "labelPlacement", type: "type", size: "size", startIndex: "startIndex", status: "status", nzProgressDot: "nzProgressDot" }, outputs: { indexChange: "indexChange" }, exportAs: ["cmacsWizard"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function CmacsWizardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classMap);
        } }, dependencies: [i2.NgClass], styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#97a0ae}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsWizardComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, selector: 'cmacs-wizard', exportAs: 'cmacsWizard', template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#97a0ae}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { steps: [{
            type: ContentChildren,
            args: [CmacsStepComponent]
        }], current: [{
            type: Input
        }], direction: [{
            type: Input
        }], labelPlacement: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }], startIndex: [{
            type: Input
        }], status: [{
            type: Input
        }], nzProgressDot: [{
            type: Input
        }], indexChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zdGVwcy9jbWFjcy13aXphcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXN0ZXBzL2NtYWNzLXdpemFyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQWV0RCxNQUFNLE9BQU8sb0JBQW9CO0lBWS9CLElBQ0ksYUFBYSxDQUFDLEtBQXNDO1FBQ3RELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lB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IEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc1R5cGUsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDbWFjc1N0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcbmV4cG9ydCB0eXBlIG56UHJvZ3Jlc3NEb3RUZW1wbGF0ZSA9IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtd2l6YXJkJyxcclxuICBleHBvcnRBczogJ2NtYWNzV2l6YXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy13aXphcmQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc1N0ZXBDb21wb25lbnQpIHN0ZXBzITogUXVlcnlMaXN0PENtYWNzU3RlcENvbXBvbmVudD47XG5cbiAgQElucHV0KCkgY3VycmVudCA9IDA7XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgbGFiZWxQbGFjZW1lbnQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIHR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2l6ZTogTnpTaXplRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzdGFydEluZGV4ID0gMDtcbiAgQElucHV0KCkgc3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBuelByb2dyZXNzRG90VGVtcGxhdGUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5kZXhDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpbmRleENoYW5nZVN1YnNjcmlwdGlvbj86IFN1YnNjcmlwdGlvbjtcblxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xuICBjdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xuICBjbGFzc01hcDogTmdDbGFzc1R5cGUgPSB7fTtcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnN0YXJ0SW5kZXggfHwgY2hhbmdlcy5kaXJlY3Rpb24gfHwgY2hhbmdlcy5zdGF0dXMgfHwgY2hhbmdlcy5jdXJyZW50KSB7XG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLmxhYmVsUGxhY2VtZW50IHx8IGNoYW5nZXMuc2l6ZSkge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlID8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKG51bGwpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGlsZHJlblN0ZXBzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGVwLmNsaWNrYWJsZSA9IHRoaXMuaW5kZXhDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLnN0YXJ0SW5kZXg7XG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgc3RlcC5sYXN0ID0gbGVuZ3RoID09PSBpbmRleCArIDE7XG4gICAgICAgICAgc3RlcC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnN0ZXBzLm1hcChzdGVwID0+IHN0ZXAuY2xpY2skKSkuc3Vic2NyaWJlKGluZGV4ID0+IHRoaXMuaW5kZXhDaGFuZ2UuZW1pdChpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFtgYW50LXN0ZXBzLSR7dGhpcy5kaXJlY3Rpb259YF06IHRydWUsXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYF06IHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGBdOiAodGhpcy5zaG93UHJvY2Vzc0RvdCB8fCB0aGlzLmxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgW2BhbnQtc3RlcHMtZG90YF06IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLnNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbJ2FudC1zdGVwcy1uYXZpZ2F0aW9uJ106IHRoaXMudHlwZSA9PT0gJ25hdmlnYXRpb24nLFxuICAgICAgWydhbnQtc3RlcHMtcnRsJ106IHRoaXMuZGlyID09PSAncnRsJ1xuICAgIH07XG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1zdGVwc1wiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19