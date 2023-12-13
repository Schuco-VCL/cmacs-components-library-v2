import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const mark_r1 = ctx.$implicit;
    i0.ɵɵclassProp("ant-slider-dot-active", mark_r1.active);
    i0.ɵɵproperty("ngStyle", mark_r1.style);
} }
export class CmacsSliderStepComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.steps = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildSteps();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map(mark => {
            const { value, config } = mark;
            let offset = mark.offset;
            const range = this.max - this.min;
            if (this.reverse) {
                offset = ((this.max - value) / range) * 100;
            }
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        });
    }
    togglePointActive() {
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                step.active = isActive;
            });
        }
    }
    static { this.ɵfac = function CmacsSliderStepComponent_Factory(t) { return new (t || CmacsSliderStepComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSliderStepComponent, selectors: [["cmacs-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderStep"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function CmacsSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CmacsSliderStepComponent_span_1_Template, 1, 3, "span", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
        } }, dependencies: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderStepComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, selector: 'cmacs-slider-step', exportAs: 'cmacsSliderStep', preserveWhitespaces: false, template: "<div class=\"ant-slider-step\">\r\n  <span\r\n    class=\"ant-slider-dot\"\r\n    *ngFor=\"let mark of steps; trackBy: trackById\"\r\n    [class.ant-slider-dot-active]=\"mark.active\"\r\n    [ngStyle]=\"mark.style\">\r\n  </span>\r\n</div>" }]
    }], null, { lowerBound: [{
            type: Input
        }], upperBound: [{
            type: Input
        }], marksArray: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }], reverse: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDRnJELDBCQUtPOzs7SUFGTCx1REFBMkM7SUFDM0MsdUNBQXNCOztBRFUxQixNQUFNLE9BQU8sd0JBQXdCO0lBUnJDO1FBU1csZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBc0IsRUFBRSxDQUFDO0tBbUQvQjtJQWpEQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVoRSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUVsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDN0M7WUFFRCxPQUFPO2dCQUNMLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixNQUFNO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO2lCQUN2QjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6QixNQUFNLFFBQVEsR0FDWixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2dCQUM3SCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzt5RkE1RFUsd0JBQXdCO29FQUF4Qix3QkFBd0I7WUNmckMsOEJBQTZCO1lBQzNCLDJFQUtPO1lBQ1QsaUJBQU07O1lBSmUsZUFBVTtZQUFWLG1DQUFVLCtCQUFBOzs7QURrQko7SUFBZixZQUFZLEVBQUU7MERBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzBEQUFrQjt1RkFQL0Isd0JBQXdCO2NBUnBDLFNBQVM7a0NBQ1MsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxZQUMzQixtQkFBbUIsWUFDbkIsaUJBQWlCLHVCQUNOLEtBQUs7Z0JBSWpCLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOekRpc3BsYXllZFN0ZXAsIE56RXh0ZW5kZWRNYXJrIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXItc3RlcCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NsaWRlclN0ZXAnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXItc3RlcC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdID0gW107XG4gIEBJbnB1dCgpIG1pbiE6IG51bWJlcjtcbiAgQElucHV0KCkgbWF4ITogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJldmVyc2UhOiBib29sZWFuO1xuXG4gIHN0ZXBzOiBOekRpc3BsYXllZFN0ZXBbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1hcmtzQXJyYXksIGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIHJldmVyc2UgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobWFya3NBcnJheSB8fCByZXZlcnNlKSB7XG4gICAgICB0aGlzLmJ1aWxkU3RlcHMoKTtcbiAgICB9XG4gICAgaWYgKG1hcmtzQXJyYXkgfHwgbG93ZXJCb3VuZCB8fCB1cHBlckJvdW5kIHx8IHJldmVyc2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIHN0ZXA6IE56RGlzcGxheWVkU3RlcCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN0ZXAudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3RlcHMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZW50ID0gdGhpcy52ZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnO1xuXG4gICAgdGhpcy5zdGVwcyA9IHRoaXMubWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBjb25maWcgfSA9IG1hcms7XG4gICAgICBsZXQgb2Zmc2V0ID0gbWFyay5vZmZzZXQ7XG4gICAgICBjb25zdCByYW5nZSA9IHRoaXMubWF4IC0gdGhpcy5taW47XG5cbiAgICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgICAgb2Zmc2V0ID0gKCh0aGlzLm1heCAtIHZhbHVlKSAvIHJhbmdlKSAqIDEwMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIFtvcmllbnRdOiBgJHtvZmZzZXR9JWBcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMgJiYgdGhpcy5sb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMudXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAoIXRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMudXBwZXJCb3VuZCkgfHwgKHRoaXMuaW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy51cHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLmxvd2VyQm91bmQhKTtcbiAgICAgICAgc3RlcC5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImFudC1zbGlkZXItc3RlcFwiPlxyXG4gIDxzcGFuXHJcbiAgICBjbGFzcz1cImFudC1zbGlkZXItZG90XCJcclxuICAgICpuZ0Zvcj1cImxldCBtYXJrIG9mIHN0ZXBzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxyXG4gICAgW2NsYXNzLmFudC1zbGlkZXItZG90LWFjdGl2ZV09XCJtYXJrLmFjdGl2ZVwiXHJcbiAgICBbbmdTdHlsZV09XCJtYXJrLnN0eWxlXCI+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj4iXX0=