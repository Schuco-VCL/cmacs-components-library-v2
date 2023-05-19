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
}
CmacsSliderStepComponent.ɵfac = function CmacsSliderStepComponent_Factory(t) { return new (t || CmacsSliderStepComponent)(); };
CmacsSliderStepComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderStepComponent, selectors: [["cmacs-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderStep"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function CmacsSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsSliderStepComponent_span_1_Template, 1, 3, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderStepComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderStepComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-step',
                exportAs: 'cmacsSliderStep',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-step.component.html'
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDRnJELDBCQUtPOzs7SUFGTCx1REFBMkM7SUFDM0MsdUNBQXNCOztBRFUxQixNQUFNLE9BQU8sd0JBQXdCO0lBUnJDO1FBU1csZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBc0IsRUFBRSxDQUFDO0tBbUQvQjtJQWpEQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVoRSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDckQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWMsRUFBRSxJQUFxQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVPLFVBQVU7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFakQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUVsQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDN0M7WUFFRCxPQUFPO2dCQUNMLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixNQUFNO2dCQUNOLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO2lCQUN2QjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6QixNQUFNLFFBQVEsR0FDWixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVcsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVcsQ0FBQyxDQUFDO2dCQUM3SCxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0dBNURVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDZnJDLDhCQUE2QjtRQUMzQiwyRUFLTztRQUNULGlCQUFNOztRQUplLGVBQVU7UUFBVixtQ0FBVSwrQkFBQTs7QURrQko7SUFBZixZQUFZLEVBQUU7MERBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzBEQUFrQjt1RkFQL0Isd0JBQXdCO2NBUnBDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFdBQVcsRUFBRSxvQ0FBb0M7YUFDbEQ7Z0JBRVUsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56RGlzcGxheWVkU3RlcCwgTnpFeHRlbmRlZE1hcmsgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci1zdGVwJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyU3RlcCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci1zdGVwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG1hcmtzQXJyYXk6IE56RXh0ZW5kZWRNYXJrW10gPSBbXTtcbiAgQElucHV0KCkgbWluITogbnVtYmVyO1xuICBASW5wdXQoKSBtYXghOiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2ZXJ0aWNhbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5jbHVkZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcmV2ZXJzZSE6IGJvb2xlYW47XG5cbiAgc3RlcHM6IE56RGlzcGxheWVkU3RlcFtdID0gW107XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWFya3NBcnJheSwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCwgcmV2ZXJzZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChtYXJrc0FycmF5IHx8IHJldmVyc2UpIHtcbiAgICAgIHRoaXMuYnVpbGRTdGVwcygpO1xuICAgIH1cbiAgICBpZiAobWFya3NBcnJheSB8fCBsb3dlckJvdW5kIHx8IHVwcGVyQm91bmQgfHwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChfaW5kZXg6IG51bWJlciwgc3RlcDogTnpEaXNwbGF5ZWRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RlcC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLnZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XG5cbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5tYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGNvbmZpZyB9ID0gbWFyaztcbiAgICAgIGxldCBvZmZzZXQgPSBtYXJrLm9mZnNldDtcbiAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcblxuICAgICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgICBvZmZzZXQgPSAoKHRoaXMubWF4IC0gdmFsdWUpIC8gcmFuZ2UpICogMTAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgW29yaWVudF06IGAke29mZnNldH0lYFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGVwcyAmJiB0aGlzLmxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy51cHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RlcC52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICghdGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy51cHBlckJvdW5kKSB8fCAodGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLnVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubG93ZXJCb3VuZCEpO1xuICAgICAgICBzdGVwLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci1zdGVwXCI+XHJcbiAgPHNwYW5cclxuICAgIGNsYXNzPVwiYW50LXNsaWRlci1kb3RcIlxyXG4gICAgKm5nRm9yPVwibGV0IG1hcmsgb2Ygc3RlcHM7IHRyYWNrQnk6IHRyYWNrQnlJZFwiXHJcbiAgICBbY2xhc3MuYW50LXNsaWRlci1kb3QtYWN0aXZlXT1cIm1hcmsuYWN0aXZlXCJcclxuICAgIFtuZ1N0eWxlXT1cIm1hcmsuc3R5bGVcIj5cclxuICA8L3NwYW4+XHJcbjwvZGl2PiJdfQ==