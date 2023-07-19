import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    i0.ɵɵclassProp("ant-slider-mark-active", attr_r1.active);
    i0.ɵɵproperty("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, i0.ɵɵsanitizeHtml);
} }
export class CmacsSliderMarksComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound, reverse } = changes;
        if (marksArray || reverse) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound || reverse) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.max - this.min;
        this.marks = this.marksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
        let style;
        const markValue = this.reverse ? this.max + this.min - value : value;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((markValue - this.min) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((markValue - this.min) / range) * 100}%`
            };
        }
        if (isConfigObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                mark.active = isActive;
            });
        }
    }
}
CmacsSliderMarksComponent.ɵfac = function CmacsSliderMarksComponent_Factory(t) { return new (t || CmacsSliderMarksComponent)(); };
CmacsSliderMarksComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderMarksComponent, selectors: [["cmacs-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderMarks"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function CmacsSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderMarksComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-slider-marks',
                exportAs: 'cmacsSliderMarks',
                templateUrl: './cmacs-slider-marks.component.html'
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
function isConfigObject(config) {
    return typeof config !== 'string';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDRHJELDBCQU1POzs7SUFITCx3REFBNEM7SUFDNUMsdUNBQXNCLCtDQUFBOztBRFMxQixNQUFNLE9BQU8seUJBQXlCO0lBUnRDO1FBU1csZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBc0IsRUFBRSxDQUFDO0tBdUUvQjtJQXJFQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVoRSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVUs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OztRQUxlLGVBQVU7UUFBVixtQ0FBVSwrQkFBQTs7QURpQko7SUFBZixZQUFZLEVBQUU7MkRBQWtCO0FBQ2pCO0lBQWYsWUFBWSxFQUFFOzJEQUFrQjt1RkFQL0IseUJBQXlCO2NBUnJDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7Z0JBRVUsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSzs7QUEyRVIsU0FBUyxjQUFjLENBQUMsTUFBYztJQUNwQyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgTnpEaXNwbGF5ZWRNYXJrLCBOekV4dGVuZGVkTWFyaywgTnpNYXJrLCBOek1hcmtPYmogfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci1tYXJrcycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NsaWRlck1hcmtzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG1pbiE6IG51bWJlcjtcclxuICBASW5wdXQoKSBtYXghOiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZlcnRpY2FsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmV2ZXJzZSE6IGJvb2xlYW47XHJcblxyXG4gIG1hcmtzOiBOekRpc3BsYXllZE1hcmtbXSA9IFtdO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG1hcmtzQXJyYXksIGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIHJldmVyc2UgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG1hcmtzQXJyYXkgfHwgcmV2ZXJzZSkge1xyXG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWFya3NBcnJheSB8fCBsb3dlckJvdW5kIHx8IHVwcGVyQm91bmQgfHwgcmV2ZXJzZSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IE56RGlzcGxheWVkTWFyayk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbWFyay52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRNYXJrcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcclxuXHJcbiAgICB0aGlzLm1hcmtzID0gdGhpcy5tYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRNYXJrU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSBpc0NvbmZpZ09iamVjdChjb25maWcpID8gY29uZmlnLmxhYmVsIDogY29uZmlnO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICBvZmZzZXQsXHJcbiAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgY29uZmlnLFxyXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRNYXJrU3R5bGVzKHZhbHVlOiBudW1iZXIsIHJhbmdlOiBudW1iZXIsIGNvbmZpZzogTnpNYXJrKTogTmdTdHlsZUludGVyZmFjZSB7XHJcbiAgICBsZXQgc3R5bGU7XHJcbiAgICBjb25zdCBtYXJrVmFsdWUgPSB0aGlzLnJldmVyc2UgPyB0aGlzLm1heCArIHRoaXMubWluIC0gdmFsdWUgOiB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xyXG4gICAgICBzdHlsZSA9IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcclxuICAgICAgICBib3R0b206IGAkeygobWFya1ZhbHVlIC0gdGhpcy5taW4pIC8gcmFuZ2UpICogMTAwfSVgXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZSA9IHtcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKWAsXHJcbiAgICAgICAgbGVmdDogYCR7KChtYXJrVmFsdWUgLSB0aGlzLm1pbikgLyByYW5nZSkgKiAxMDB9JWBcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNDb25maWdPYmplY3QoY29uZmlnKSAmJiBjb25maWcuc3R5bGUpIHtcclxuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3R5bGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWFya3MgJiYgdGhpcy5sb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMudXBwZXJCb3VuZCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID1cclxuICAgICAgICAgICghdGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy51cHBlckJvdW5kKSB8fCAodGhpcy5pbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLnVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubG93ZXJCb3VuZCEpO1xyXG5cclxuICAgICAgICBtYXJrLmFjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29uZmlnT2JqZWN0KGNvbmZpZzogTnpNYXJrKTogY29uZmlnIGlzIE56TWFya09iaiB7XHJcbiAgcmV0dXJuIHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnO1xyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLW1hcmtcIj5cclxuICA8c3BhblxyXG4gICAgY2xhc3M9XCJhbnQtc2xpZGVyLW1hcmstdGV4dFwiXHJcbiAgICAqbmdGb3I9XCJsZXQgYXR0ciBvZiBtYXJrczsgdHJhY2tCeTogdHJhY2tCeUlkXCJcclxuICAgIFtjbGFzcy5hbnQtc2xpZGVyLW1hcmstYWN0aXZlXT1cImF0dHIuYWN0aXZlXCJcclxuICAgIFtuZ1N0eWxlXT1cImF0dHIuc3R5bGVcIlxyXG4gICAgW2lubmVySFRNTF09XCJhdHRyLmxhYmVsXCI+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj4iXX0=