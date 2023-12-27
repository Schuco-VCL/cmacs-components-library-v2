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
            style = { ...style, ...config.style };
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
    static { this.ɵfac = function CmacsSliderMarksComponent_Factory(t) { return new (t || CmacsSliderMarksComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSliderMarksComponent, selectors: [["cmacs-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", min: "min", max: "max", vertical: "vertical", included: "included", reverse: "reverse" }, exportAs: ["cmacsSliderMarks"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function CmacsSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CmacsSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
        } }, dependencies: [i1.NgForOf, i1.NgStyle], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderMarksComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderMarksComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, selector: 'cmacs-slider-marks', exportAs: 'cmacsSliderMarks', template: "<div class=\"ant-slider-mark\">\r\n  <span\r\n    class=\"ant-slider-mark-text\"\r\n    *ngFor=\"let attr of marks; trackBy: trackById\"\r\n    [class.ant-slider-mark-active]=\"attr.active\"\r\n    [ngStyle]=\"attr.style\"\r\n    [innerHTML]=\"attr.label\">\r\n  </span>\r\n</div>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0lDRHJELDBCQU1POzs7SUFITCx3REFBNEM7SUFDNUMsdUNBQXNCLCtDQUFBOztBRFMxQixNQUFNLE9BQU8seUJBQXlCO0lBUnRDO1FBU1csZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFrQixJQUFJLENBQUM7UUFDakMsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFHbEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFDLFVBQUssR0FBc0IsRUFBRSxDQUFDO0tBdUUvQjtJQXJFQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUVoRSxJQUFJLFVBQVUsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxVQUFVLElBQUksVUFBVSxJQUFJLFVBQVUs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TU87WUFDVCxpQkFBTTs7WUFMZSxlQUFVO1lBQVYsbUNBQVUsK0JBQUE7OztBRGlCSjtJQUFmLFlBQVksRUFBRTsyREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7MkRBQWtCO3VGQVAvQix5QkFBeUI7Y0FSckMsU0FBUztrQ0FDUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLHVCQUNoQixLQUFLLFlBQ2hCLG9CQUFvQixZQUNwQixrQkFBa0I7Z0JBSW5CLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O0FBMkVSLFNBQVMsY0FBYyxDQUFDLE1BQWM7SUFDcEMsT0FBTyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuXG5pbXBvcnQgeyBOekRpc3BsYXllZE1hcmssIE56RXh0ZW5kZWRNYXJrLCBOek1hcmssIE56TWFya09iaiB9IGZyb20gJy4vdHlwaW5ncyc7XG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci1tYXJrcycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NsaWRlck1hcmtzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHVwcGVyQm91bmQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtYXJrc0FycmF5OiBOekV4dGVuZGVkTWFya1tdID0gW107XG4gIEBJbnB1dCgpIG1pbiE6IG51bWJlcjtcbiAgQElucHV0KCkgbWF4ITogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHJldmVyc2UhOiBib29sZWFuO1xuXG4gIG1hcmtzOiBOekRpc3BsYXllZE1hcmtbXSA9IFtdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1hcmtzQXJyYXksIGxvd2VyQm91bmQsIHVwcGVyQm91bmQsIHJldmVyc2UgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobWFya3NBcnJheSB8fCByZXZlcnNlKSB7XG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcbiAgICB9XG5cbiAgICBpZiAobWFya3NBcnJheSB8fCBsb3dlckJvdW5kIHx8IHVwcGVyQm91bmQgfHwgcmV2ZXJzZSkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChfaW5kZXg6IG51bWJlciwgbWFyazogTnpEaXNwbGF5ZWRNYXJrKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbWFyay52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRNYXJrcygpOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubWF4IC0gdGhpcy5taW47XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy5tYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldE1hcmtTdHlsZXModmFsdWUsIHJhbmdlLCBjb25maWcpO1xuICAgICAgY29uc3QgbGFiZWwgPSBpc0NvbmZpZ09iamVjdChjb25maWcpID8gY29uZmlnLmxhYmVsIDogY29uZmlnO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbCxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFya1N0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE56TWFyayk6IE5nU3R5bGVJbnRlcmZhY2Uge1xuICAgIGxldCBzdHlsZTtcbiAgICBjb25zdCBtYXJrVmFsdWUgPSB0aGlzLnJldmVyc2UgPyB0aGlzLm1heCArIHRoaXMubWluIC0gdmFsdWUgOiB2YWx1ZTtcblxuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXG4gICAgICAgIGJvdHRvbTogYCR7KChtYXJrVmFsdWUgLSB0aGlzLm1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKWAsXG4gICAgICAgIGxlZnQ6IGAkeygobWFya1ZhbHVlIC0gdGhpcy5taW4pIC8gcmFuZ2UpICogMTAwfSVgXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0NvbmZpZ09iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLnVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWFya3MuZm9yRWFjaChtYXJrID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgKCF0aGlzLmluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLnVwcGVyQm91bmQpIHx8ICh0aGlzLmluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMudXBwZXJCb3VuZCEgJiYgdmFsdWUgPj0gdGhpcy5sb3dlckJvdW5kISk7XG5cbiAgICAgICAgbWFyay5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvbmZpZ09iamVjdChjb25maWc6IE56TWFyayk6IGNvbmZpZyBpcyBOek1hcmtPYmoge1xuICByZXR1cm4gdHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZyc7XG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLW1hcmtcIj5cclxuICA8c3BhblxyXG4gICAgY2xhc3M9XCJhbnQtc2xpZGVyLW1hcmstdGV4dFwiXHJcbiAgICAqbmdGb3I9XCJsZXQgYXR0ciBvZiBtYXJrczsgdHJhY2tCeTogdHJhY2tCeUlkXCJcclxuICAgIFtjbGFzcy5hbnQtc2xpZGVyLW1hcmstYWN0aXZlXT1cImF0dHIuYWN0aXZlXCJcclxuICAgIFtuZ1N0eWxlXT1cImF0dHIuc3R5bGVcIlxyXG4gICAgW2lubmVySFRNTF09XCJhdHRyLmxhYmVsXCI+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj4iXX0=