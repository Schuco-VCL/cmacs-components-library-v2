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
    ngOnChanges(changes) {
        if (changes.startIndex || changes.direction || changes.status || changes.current) {
            this.updateChildrenSteps();
        }
        if (changes.direction || changes.nzProgressDot || changes.labelPlacement || changes.size) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
}
CmacsWizardComponent.ɵfac = function CmacsWizardComponent_Factory(t) { return new (t || CmacsWizardComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
CmacsWizardComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsWizardComponent, selectors: [["cmacs-wizard"]], contentQueries: function CmacsWizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsStepComponent, 0);
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
    } }, directives: [i2.NgClass], styles: [".ant-steps{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.6;letter-spacing:normal;color:#97a0ae}.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-process>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#2a7cff}.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-description,.ant-steps-item-wait>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title{color:#97a0ae}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsWizardComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-wizard',
                exportAs: 'cmacsWizard',
                templateUrl: './cmacs-wizard.component.html',
                styleUrls: ['./cmacs-wizard.component.css'],
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zdGVwcy9jbWFjcy13aXphcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXN0ZXBzL2NtYWNzLXdpemFyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztBQWV0RCxNQUFNLE9BQU8sb0JBQW9CO0lBaUMvQixZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE3QnJGLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixjQUFTLEdBQW9CLFVBQVUsQ0FBQztRQUN4QyxtQkFBYyxHQUE4QixZQUFZLENBQUM7UUFDekQsU0FBSSxHQUE2QixTQUFTLENBQUM7UUFDM0MsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBYXZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVwRCxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUd2QyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUMzQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBR3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBdkJELElBQ0ksYUFBYSxDQUFDLEtBQXNDO1FBQ3RELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFnQkQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNoRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtZQUN4RixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsUUFBUTs7UUFDTixNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDN0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNoRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUMxQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztxQkFDNUQ7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDL0g7SUFDSCxDQUFDO0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsQ0FBQyxhQUFhLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDckMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWTtZQUMvRCxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxZQUFZO1lBQzVILENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDdEMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTztZQUMxQyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZO1lBQ3BELENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLO1NBQ3RDLENBQUM7SUFDSixDQUFDOzt3RkE3R1Usb0JBQW9CO3lEQUFwQixvQkFBb0I7b0NBRWQsa0JBQWtCOzs7Ozs7UUMxQ3JDLDhCQUE0QztRQUMxQyxrQkFBeUI7UUFDM0IsaUJBQU07O1FBRmlCLHNDQUFvQjs7dUZEd0M5QixvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7c0JBa0M4QyxRQUFRO3dCQS9CaEIsS0FBSztrQkFBekMsZUFBZTttQkFBQyxrQkFBa0I7WUFFMUIsT0FBTztrQkFBZixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBR0YsYUFBYTtrQkFEaEIsS0FBSztZQVdhLFdBQVc7a0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc1R5cGUsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDbWFjc1N0ZXBDb21wb25lbnQgfSBmcm9tICcuL3N0ZXAuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcclxuZXhwb3J0IHR5cGUgbnpQcm9ncmVzc0RvdFRlbXBsYXRlID0gVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+OyBzdGF0dXM6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9PjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy13aXphcmQnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NXaXphcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy13aXphcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXdpemFyZC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1dpemFyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3RlcENvbXBvbmVudCkgc3RlcHMhOiBRdWVyeUxpc3Q8Q21hY3NTdGVwQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgY3VycmVudCA9IDA7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIGxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdkZWZhdWx0JyB8ICduYXZpZ2F0aW9uJyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgc3RhcnRJbmRleCA9IDA7XHJcbiAgQElucHV0KCkgc3RhdHVzOiBOelN0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBuelByb2dyZXNzRG90VGVtcGxhdGUpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0cnVlO1xyXG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG4gIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT47XHJcbiAgY2xhc3NNYXA6IE5nQ2xhc3NUeXBlID0ge307XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuc3RhcnRJbmRleCB8fCBjaGFuZ2VzLmRpcmVjdGlvbiB8fCBjaGFuZ2VzLnN0YXR1cyB8fCBjaGFuZ2VzLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5kaXJlY3Rpb24gfHwgY2hhbmdlcy5uelByb2dyZXNzRG90IHx8IGNoYW5nZXMubGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5zaXplKSB7XHJcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2UgPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICB0aGlzLnN0ZXBzLmNoYW5nZXMucGlwZShzdGFydFdpdGgobnVsbCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGVwcykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLnN0ZXBzLmxlbmd0aDtcclxuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5zdGF0dXM7XHJcbiAgICAgICAgICBzdGVwLnNob3dQcm9jZXNzRG90ID0gdGhpcy5zaG93UHJvY2Vzc0RvdDtcclxuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3RlcC5jbGlja2FibGUgPSB0aGlzLmluZGV4Q2hhbmdlLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgIHN0ZXAuaW5kZXggPSBpbmRleCArIHRoaXMuc3RhcnRJbmRleDtcclxuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgc3RlcC5sYXN0ID0gbGVuZ3RoID09PSBpbmRleCArIDE7XHJcbiAgICAgICAgICBzdGVwLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuaW5kZXhDaGFuZ2VTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmluZGV4Q2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbmRleENoYW5nZVN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMuc3RlcHMubWFwKHN0ZXAgPT4gc3RlcC5jbGljayQpKS5zdWJzY3JpYmUoaW5kZXggPT4gdGhpcy5pbmRleENoYW5nZS5lbWl0KGluZGV4KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgW2BhbnQtc3RlcHMtJHt0aGlzLmRpcmVjdGlvbn1gXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbGBdOiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGBdOiAodGhpcy5zaG93UHJvY2Vzc0RvdCB8fCB0aGlzLmxhYmVsUGxhY2VtZW50ID09PSAndmVydGljYWwnKSAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxyXG4gICAgICBbYGFudC1zdGVwcy1kb3RgXTogdGhpcy5zaG93UHJvY2Vzc0RvdCxcclxuICAgICAgWydhbnQtc3RlcHMtc21hbGwnXTogdGhpcy5zaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbJ2FudC1zdGVwcy1uYXZpZ2F0aW9uJ106IHRoaXMudHlwZSA9PT0gJ25hdmlnYXRpb24nLFxyXG4gICAgICBbJ2FudC1zdGVwcy1ydGwnXTogdGhpcy5kaXIgPT09ICdydGwnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1zdGVwc1wiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19