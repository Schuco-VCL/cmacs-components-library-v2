import { __decorate } from "tslib";
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, InputBoolean, InputNumber, silentEvent } from 'ng-zorro-antd/core/util';
import { fromEvent, merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { NzSliderService } from './slider.service';
import { CmacsSliderHandleComponent } from './cmacs-slider-handle.component';
import * as i0 from "@angular/core";
import * as i1 from "./slider.service";
import * as i2 from "@angular/cdk/platform";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "./cmacs-slider-track.component";
import * as i5 from "@angular/common";
import * as i6 from "./cmacs-slider-step.component";
import * as i7 from "./cmacs-slider-handle.component";
import * as i8 from "./cmacs-slider-marks.component";
const _c0 = ["slider"];
function CmacsSliderComponent_cmacs_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-slider-step", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("min", ctx_r1.min)("max", ctx_r1.max)("vertical", ctx_r1.vertical)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.included)("reverse", ctx_r1.reverse);
} }
function CmacsSliderComponent_cmacs_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-slider-handle", 8);
} if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vertical", ctx_r2.vertical)("reverse", ctx_r2.reverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.tipFormatter)("tooltipVisible", ctx_r2.tooltipVisible)("tooltipPlacement", ctx_r2.tooltipPlacement)("dir", ctx_r2.dir);
} }
function CmacsSliderComponent_cmacs_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-slider-marks", 9);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("vertical", ctx_r3.vertical)("min", ctx_r3.min)("max", ctx_r3.max)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.included)("reverse", ctx_r3.reverse);
} }
export class CmacsSliderComponent {
    constructor(sliderService, cdr, platform, directionality) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.directionality = directionality;
        this.disabled = false;
        this.dots = false;
        this.included = true;
        this.range = false;
        this.vertical = false;
        this.reverse = false;
        this.marks = null;
        this.max = 100;
        this.min = 0;
        this.step = 1;
        this.tooltipVisible = 'default';
        this.tooltipPlacement = 'top';
        this.onAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.handles = []; // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        });
        this.handles = generateHandlers(this.range ? 2 : 1);
        this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.disabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnChanges(changes) {
        const { disabled, marks, range } = changes;
        if (disabled && !disabled.firstChange) {
            this.toggleDragDisabled(disabled.currentValue);
        }
        else if (marks && !marks.firstChange) {
            this.marksArray = this.marks ? this.generateMarkItems(this.marks) : null;
        }
        else if (range && !range.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    ngOnDestroy() {
        this.unsubscribeDrag();
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e) {
        const code = e.keyCode;
        const isIncrease = code === RIGHT_ARROW || code === UP_ARROW;
        const isDecrease = code === LEFT_ARROW || code === DOWN_ARROW;
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        let step = (isDecrease ? -this.step : this.step) * (this.reverse ? -1 : 1);
        step = this.dir === 'rtl' ? step * -1 : step;
        const newVal = this.range ? this.value[this.activeValueIndex] + step : this.value + step;
        this.setActiveValue(ensureNumberInRange(newVal, this.min, this.max));
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value !== null && this.value !== undefined && isValueRange(this.value)) {
            return [...this.value].sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueRange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    setActiveValue(pointerValue) {
        if (isValueRange(this.value)) {
            const newValue = [...this.value];
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
      * Update track and handles' position and length.
      */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.range ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    getLogicalValue(value) {
        if (this.reverse) {
            if (!this.vertical && this.dir === 'rtl') {
                return value;
            }
            return this.max - value + this.min;
        }
        if (!this.vertical && this.dir === 'rtl') {
            return this.max - value + this.min;
        }
        return value;
    }
    onDragEnd() {
        this.onAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        const sliderDOM = this.slider.nativeElement;
        const orientField = this.vertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
        });
        this.dragStart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = merge(mouse.end$, touch.end$);
    }
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    toggleDragMoving(movable) {
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.max - this.min) * (this.vertical ? 1 - ratio : ratio) + this.min;
        const points = this.marks === null
            ? []
            : Object.keys(this.marks)
                .map(parseFloat)
                .sort((a, b) => a - b);
        if (this.step !== 0 && !this.dots) {
            const closestOne = Math.round(val / this.step) * this.step;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return parseFloat(closest.toFixed(getPrecision(this.nzStep)));
        return this.step === 0 ? closest : parseFloat(closest.toFixed(getPrecision(this.step)));
    }
    valueToOffset(value) {
        return getPercent(this.min, this.max, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = getElementOffset(this.slider.nativeElement);
        return this.vertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.slider.nativeElement;
        return this.vertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        if (value === null || this.value === undefined) {
            return this.range ? [this.min, this.max] : this.min;
        }
        else if (assertValueValid(value, this.range)) {
            return isValueRange(value)
                ? value.map(val => ensureNumberInRange(val, this.min, this.max))
                : ensureNumberInRange(value, this.min, this.max);
        }
        else {
            return this.defaultValue ? this.defaultValue : this.range ? [this.min, this.max] : this.min;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            const mark = marks[key];
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.min && val <= this.max) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
CmacsSliderComponent.ɵfac = function CmacsSliderComponent_Factory(t) { return new (t || CmacsSliderComponent)(i0.ɵɵdirectiveInject(i1.NzSliderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
CmacsSliderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderComponent, selectors: [["cmacs-slider"]], viewQuery: function CmacsSliderComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(CmacsSliderHandleComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slider = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function CmacsSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function CmacsSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { disabled: "disabled", dots: "dots", included: "included", range: "range", vertical: "vertical", reverse: "reverse", defaultValue: "defaultValue", marks: "marks", max: "max", min: "min", step: "step", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tipFormatter: "tipFormatter" }, outputs: { onAfterChange: "onAfterChange" }, exportAs: ["cmacsSlider"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSliderComponent),
                multi: true
            },
            NzSliderService
        ]), i0.ɵɵNgOnChangesFeature], decls: 7, vars: 17, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "reverse", "dir", "length"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse", 4, "ngIf"], [3, "min", "max", "vertical", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"]], template: function CmacsSliderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelement(2, "div", 2);
        i0.ɵɵelement(3, "cmacs-slider-track", 3);
        i0.ɵɵtemplate(4, CmacsSliderComponent_cmacs_slider_step_4_Template, 1, 8, "cmacs-slider-step", 4);
        i0.ɵɵtemplate(5, CmacsSliderComponent_cmacs_slider_handle_5_Template, 1, 9, "cmacs-slider-handle", 5);
        i0.ɵɵtemplate(6, CmacsSliderComponent_cmacs_slider_marks_6_Template, 1, 8, "cmacs-slider-marks", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.disabled)("ant-slider-vertical", ctx.vertical)("ant-slider-with-marks", ctx.marksArray);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("vertical", ctx.vertical)("included", ctx.included)("offset", ctx.track.offset)("reverse", ctx.reverse)("dir", ctx.dir)("length", ctx.track.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.marksArray);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.handles);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.marksArray);
    } }, directives: [i4.CmacsSliderTrackComponent, i3.Dir, i5.NgIf, i5.NgForOf, i6.CmacsSliderStepComponent, i7.CmacsSliderHandleComponent, i8.CmacsSliderMarksComponent], styles: [".ant-slider-rail{height:3px;border-radius:100px;background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "dots", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "included", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "range", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderComponent.prototype, "reverse", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "max", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "min", void 0);
__decorate([
    InputNumber()
], CmacsSliderComponent.prototype, "step", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider',
                exportAs: 'cmacsSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSliderComponent),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                templateUrl: './cmacs-slider.component.html',
                styleUrls: ['./cmacs-slider.component.css']
            }]
    }], function () { return [{ type: i1.NzSliderService }, { type: i0.ChangeDetectorRef }, { type: i2.Platform }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { slider: [{
            type: ViewChild,
            args: ['slider', { static: true }]
        }], handlerComponents: [{
            type: ViewChildren,
            args: [CmacsSliderHandleComponent]
        }], disabled: [{
            type: Input
        }], dots: [{
            type: Input
        }], included: [{
            type: Input
        }], range: [{
            type: Input
        }], vertical: [{
            type: Input
        }], reverse: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], marks: [{
            type: Input
        }], max: [{
            type: Input
        }], min: [{
            type: Input
        }], step: [{
            type: Input
        }], tooltipVisible: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tipFormatter: [{
            type: Input
        }], onAfterChange: [{
            type: Output
        }] }); })();
function getValueTypeNotMatchError() {
    return new Error(`The "range" can't match the "ngModel"'s type, please check these properties: "range", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map(() => ({ offset: null, value: null, active: false }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(v => isNaN(v)))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.range` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? arraysEqual(valA, valB) : valA === valB;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEYsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFFWCxXQUFXLEVBQ1osTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FB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LEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2hHLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLEtBQW9CLEVBQUUsVUFBbUIsS0FBSztJQUMxRSxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDbkMsTUFBTSx5QkFBeUIsRUFBRSxDQUFDO0tBQ25DO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsSUFBbUIsRUFBRSxJQUFtQjtJQUMzRCxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQU8sSUFBSSxFQUFFO1FBQy9CLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBUyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7QUFDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHtcbiAgYXJyYXlzRXF1YWwsXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXG4gIGdldEVsZW1lbnRPZmZzZXQsXG4gIGdldFBlcmNlbnQsXG4gIGdldFByZWNpc2lvbixcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnLFxuICBzaWxlbnRFdmVudFxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekV4dGVuZGVkTWFyaywgTnpNYXJrcywgTnpTbGlkZXJIYW5kbGVyLCBOelNsaWRlclNob3dUb29sdGlwLCBOelNsaWRlclZhbHVlIH0gZnJvbSAnLi90eXBpbmdzJztcclxuaW1wb3J0IHsgTnpTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9zbGlkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzU2xpZGVySGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzU2xpZGVyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBOelNsaWRlclNlcnZpY2VcclxuICBdLFxyXG4gIGhvc3Q6IHtcbiAgICAnKGtleWRvd24pJzogJ29uS2V5RG93bigkZXZlbnQpJ1xuICB9LFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNsaWRlci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBAVmlld0NoaWxkKCdzbGlkZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBzbGlkZXIhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICBAVmlld0NoaWxkcmVuKENtYWNzU2xpZGVySGFuZGxlQ29tcG9uZW50KSBoYW5kbGVyQ29tcG9uZW50cyE6IFF1ZXJ5TGlzdDxDbWFjc1NsaWRlckhhbmRsZUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkb3RzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRWYWx1ZT86IE56U2xpZGVyVmFsdWU7XHJcbiAgQElucHV0KCkgbWFya3M6IE56TWFya3MgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtYXggPSAxMDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbWluID0gMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzdGVwID0gMTtcclxuICBASW5wdXQoKSB0b29sdGlwVmlzaWJsZTogTnpTbGlkZXJTaG93VG9vbHRpcCA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuICBASW5wdXQoKSB0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTbGlkZXJWYWx1ZT4oKTtcclxuXHJcbiAgdmFsdWU6IE56U2xpZGVyVmFsdWUgfCBudWxsID0gbnVsbDtcclxuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgYWN0aXZlVmFsdWVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXHJcbiAgdHJhY2s6IHsgb2Zmc2V0OiBudWxsIHwgbnVtYmVyOyBsZW5ndGg6IG51bGwgfCBudW1iZXIgfSA9IHsgb2Zmc2V0OiBudWxsLCBsZW5ndGg6IG51bGwgfTsgLy8gVHJhY2sncyBvZmZzZXQgYW5kIGxlbmd0aFxyXG4gIGhhbmRsZXM6IE56U2xpZGVySGFuZGxlcltdID0gW107IC8vIEhhbmRsZXMnIG9mZnNldFxyXG4gIG1hcmtzQXJyYXk6IE56RXh0ZW5kZWRNYXJrW10gfCBudWxsID0gbnVsbDsgLy8gXCJzdGVwc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcclxuICBib3VuZHM6IHsgbG93ZXI6IE56U2xpZGVyVmFsdWUgfCBudWxsOyB1cHBlcjogTnpTbGlkZXJWYWx1ZSB8IG51bGwgfSA9IHsgbG93ZXI6IG51bGwsIHVwcGVyOiBudWxsIH07IC8vIG5vdyBmb3Igbnotc2xpZGVyLXN0ZXBcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBwcml2YXRlIGRyYWdTdGFydCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZHJhZ01vdmUkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwcml2YXRlIGRyYWdFbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XG4gIHByaXZhdGUgZHJhZ1N0YXJ0Xz86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG4gIHByaXZhdGUgZHJhZ01vdmVfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnRW5kXz86IFN1YnNjcmlwdGlvbiB8IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNsaWRlclNlcnZpY2U6IE56U2xpZGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcyA9IGdlbmVyYXRlSGFuZGxlcnModGhpcy5yYW5nZSA/IDIgOiAxKTtcbiAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm1hcmtzKSA6IG51bGw7XG4gICAgdGhpcy5iaW5kRHJhZ2dpbmdIYW5kbGVycygpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKHRoaXMuZGlzYWJsZWQpO1xuXG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGRpc2FibGVkLCBtYXJrcywgcmFuZ2UgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKGRpc2FibGVkICYmICFkaXNhYmxlZC5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChtYXJrcyAmJiAhbWFya3MuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5tYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5tYXJrcykgOiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChyYW5nZSAmJiAhcmFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbDogTnpTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UoX3ZhbHVlOiBOelNsaWRlclZhbHVlKTogdm9pZCB7fVxyXG5cclxuICBvblRvdWNoZWQoKTogdm9pZCB7fVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IE56U2xpZGVyVmFsdWUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBpcyBvbmx5IHRyaWdnZXJlZCB3aGVuIGEgc2xpZGVyIGhhbmRsZXIgaXMgZm9jdXNlZC5cbiAgICovXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY29kZSA9IGUua2V5Q29kZTtcbiAgICBjb25zdCBpc0luY3JlYXNlID0gY29kZSA9PT0gUklHSFRfQVJST1cgfHwgY29kZSA9PT0gVVBfQVJST1c7XG4gICAgY29uc3QgaXNEZWNyZWFzZSA9IGNvZGUgPT09IExFRlRfQVJST1cgfHwgY29kZSA9PT0gRE9XTl9BUlJPVztcblxuICAgIGlmICghKGlzSW5jcmVhc2UgfHwgaXNEZWNyZWFzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgc3RlcCA9IChpc0RlY3JlYXNlID8gLXRoaXMuc3RlcCA6IHRoaXMuc3RlcCkgKiAodGhpcy5yZXZlcnNlID8gLTEgOiAxKTtcbiAgICBzdGVwID0gdGhpcy5kaXIgPT09ICdydGwnID8gc3RlcCAqIC0xIDogc3RlcDtcbiAgICBjb25zdCBuZXdWYWwgPSB0aGlzLnJhbmdlID8gKHRoaXMudmFsdWUgYXMgbnVtYmVyW10pW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdICsgc3RlcCA6ICh0aGlzLnZhbHVlIGFzIG51bWJlcikgKyBzdGVwO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUoZW5zdXJlTnVtYmVySW5SYW5nZShuZXdWYWwsIHRoaXMubWluLCB0aGlzLm1heCkpO1xuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IE56U2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF2YWx1ZXNFcXVhbCh0aGlzLnZhbHVlISwgdmFsdWUhKSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLmdldFZhbHVlKHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBOelNsaWRlclZhbHVlIHtcclxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXNWYWx1ZVJhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMudmFsdWVdLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWUhO1xyXG4gIH1cclxuXHJcbiAgLyoqXG4gICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXG4gICAqL1xuICBwcml2YXRlIGdldFZhbHVlVG9PZmZzZXQodmFsdWU/OiBOelNsaWRlclZhbHVlKTogTnpTbGlkZXJWYWx1ZSB7XG4gICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbHVlUmFuZ2Uobm9ybWFsaXplZFZhbHVlKSA/IG5vcm1hbGl6ZWRWYWx1ZS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKSA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xuICB9XHJcblxyXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBjbG9zZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZC5cbiAgICovXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWVJbmRleChwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGlmIChpc1ZhbHVlUmFuZ2UodmFsdWUpKSB7XG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgZ2FwOiBudW1iZXI7XG4gICAgICBsZXQgYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCEpIHtcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hY3RpdmVWYWx1ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG4gICAgICB0aGlzLmhhbmRsZXJDb21wb25lbnRzLnRvQXJyYXkoKVthY3RpdmVJbmRleF0uZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVyQ29tcG9uZW50cy50b0FycmF5KClbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGlzVmFsdWVSYW5nZSh0aGlzLnZhbHVlISkpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gWy4uLih0aGlzLnZhbHVlIGFzIG51bWJlcltdKV07XG4gICAgICBuZXdWYWx1ZVt0aGlzLmFjdGl2ZVZhbHVlSW5kZXghXSA9IHBvaW50ZXJWYWx1ZTtcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHBvaW50ZXJWYWx1ZSk7XG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXG4gICAgKiBVcGRhdGUgdHJhY2sgYW5kIGhhbmRsZXMnIHBvc2l0aW9uIGFuZCBsZW5ndGguXG4gICAgKi9cbiAgcHJpdmF0ZSB1cGRhdGVUcmFja0FuZEhhbmRsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZVNvcnRlZCA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcbiAgICBjb25zdCBib3VuZFBhcnRzID0gaXNWYWx1ZVJhbmdlKHZhbHVlU29ydGVkKSA/IHZhbHVlU29ydGVkIDogWzAsIHZhbHVlU29ydGVkXTtcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZVJhbmdlKG9mZnNldFNvcnRlZCkgPyBbb2Zmc2V0U29ydGVkWzBdLCBvZmZzZXRTb3J0ZWRbMV0gLSBvZmZzZXRTb3J0ZWRbMF1dIDogWzAsIG9mZnNldFNvcnRlZF07XG5cbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLm9mZnNldCA9IGlzVmFsdWVSYW5nZShvZmZzZXQpID8gb2Zmc2V0W2luZGV4XSA6IG9mZnNldDtcbiAgICAgIGhhbmRsZS52YWx1ZSA9IGlzVmFsdWVSYW5nZSh2YWx1ZSkgPyB2YWx1ZVtpbmRleF0gOiB2YWx1ZSB8fCAwO1xuICAgIH0pO1xuXG4gICAgW3RoaXMuYm91bmRzLmxvd2VyLCB0aGlzLmJvdW5kcy51cHBlcl0gPSBib3VuZFBhcnRzO1xuICAgIFt0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGhdID0gdHJhY2tQYXJ0cztcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRyYWdTdGFydCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWVJbmRleCh0aGlzLmdldExvZ2ljYWxWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLnNob3dIYW5kbGVUb29sdGlwKHRoaXMucmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZSh0aGlzLmdldExvZ2ljYWxWYWx1ZSh2YWx1ZSkpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2dpY2FsVmFsdWUodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMucmV2ZXJzZSkge1xuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsICYmIHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5tYXggLSB2YWx1ZSArIHRoaXMubWluO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudmVydGljYWwgJiYgdGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXggLSB2YWx1ZSArIHRoaXMubWluO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMub25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KHRydWUpO1xuICAgIHRoaXMuaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdXNlciBpbnRlcmFjdGlvbnMgaGFuZGxlcy5cbiAgICovXG4gIHByaXZhdGUgYmluZERyYWdnaW5nSGFuZGxlcnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgb3JpZW50RmllbGQgPSB0aGlzLnZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgICAgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogW29yaWVudEZpZWxkXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbJ3RvdWNoZXMnLCAnMCcsIG9yaWVudEZpZWxkXSxcbiAgICAgIGZpbHRlcjogKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudFxuICAgIH07XG5cbiAgICBbbW91c2UsIHRvdWNoXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XG5cbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXG4gICAgICApO1xuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRyYWdTdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkISwgdG91Y2guc3RhcnRQbHVja2VkJCEpO1xuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcbiAgICB0aGlzLmRyYWdFbmQkID0gbWVyZ2UobW91c2UuZW5kJCEsIHRvdWNoLmVuZCQhKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0JCAmJiAhdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gdGhpcy5kcmFnTW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kJCAmJiAhdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IHRoaXMuZHJhZ0VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnU3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdTdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xuICAgICAgdGhpcy5kcmFnTW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ01vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnRW5kXykge1xuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnRW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVyU2VydmljZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgICBjb25zdCByYXRpbyA9IGVuc3VyZU51bWJlckluUmFuZ2UoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAodGhpcy52ZXJ0aWNhbCA/IDEgLSByYXRpbyA6IHJhdGlvKSArIHRoaXMubWluO1xuICAgIGNvbnN0IHBvaW50cyA9XG4gICAgICB0aGlzLm1hcmtzID09PSBudWxsXG4gICAgICAgID8gW11cbiAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLm1hcmtzKVxuICAgICAgICAgIC5tYXAocGFyc2VGbG9hdClcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gMCAmJiAhdGhpcy5kb3RzKSB7XG4gICAgICBjb25zdCBjbG9zZXN0T25lID0gTWF0aC5yb3VuZCh2YWwgLyB0aGlzLnN0ZXApICogdGhpcy5zdGVwO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdE9uZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzW2dhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSldO1xuXG4gICAgLy8gcmV0dXJuIHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKGdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcbiAgICByZXR1cm4gdGhpcy5zdGVwID09PSAwID8gY2xvc2VzdCA6IHBhcnNlRmxvYXQoY2xvc2VzdC50b0ZpeGVkKGdldFByZWNpc2lvbih0aGlzLnN0ZXApKSk7XG4gIH1cblxuICBwcml2YXRlIHZhbHVlVG9PZmZzZXQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFBlcmNlbnQodGhpcy5taW4sIHRoaXMubWF4LCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlclN0YXJ0O1xuICAgIH1cbiAgICBjb25zdCBvZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5sZWZ0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGlkZXJMZW5ndGgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlckxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnMgZm9yIHBlcmZvcm1hbmNlIChtYXkgbm90IG5lY2Vzc2FyeT8pXG4gICAqL1xuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlU2xpZGVyU3RhcnQgPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgdGhpcy5jYWNoZVNsaWRlckxlbmd0aCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRWYWx1ZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwpOiBOelNsaWRlclZhbHVlIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZSA/IFt0aGlzLm1pbiwgdGhpcy5tYXhdIDogdGhpcy5taW47XG4gICAgfSBlbHNlIGlmIChhc3NlcnRWYWx1ZVZhbGlkKHZhbHVlLCB0aGlzLnJhbmdlKSkge1xuICAgICAgcmV0dXJuIGlzVmFsdWVSYW5nZSh2YWx1ZSlcbiAgICAgICAgPyB2YWx1ZS5tYXAodmFsID0+IGVuc3VyZU51bWJlckluUmFuZ2UodmFsLCB0aGlzLm1pbiwgdGhpcy5tYXgpKVxuICAgICAgICA6IGVuc3VyZU51bWJlckluUmFuZ2UodmFsdWUsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRWYWx1ZSA/IHRoaXMuZGVmYXVsdFZhbHVlIDogdGhpcy5yYW5nZSA/IFt0aGlzLm1pbiwgdGhpcy5tYXhdIDogdGhpcy5taW47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJy5cbiAgICovXG4gIHByaXZhdGUgc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IChoYW5kbGUuYWN0aXZlID0gZmFsc2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVNYXJrSXRlbXMobWFya3M6IE56TWFya3MpOiBOekV4dGVuZGVkTWFya1tdIHwgbnVsbCB7XG4gICAgY29uc3QgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XG4gICAgICBjb25zdCBtYXJrID0gbWFya3Nba2V5XTtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBrZXkgPT09ICdudW1iZXInID8ga2V5IDogcGFyc2VGbG9hdChrZXkpO1xuICAgICAgaWYgKHZhbCA+PSB0aGlzLm1pbiAmJiB2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgICAgbWFya3NBcnJheS5wdXNoKHsgdmFsdWU6IHZhbCwgb2Zmc2V0OiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSwgY29uZmlnOiBtYXJrIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFya3NBcnJheS5sZW5ndGggPyBtYXJrc0FycmF5IDogbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZVR5cGVOb3RNYXRjaEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICBgVGhlIFwicmFuZ2VcIiBjYW4ndCBtYXRjaCB0aGUgXCJuZ01vZGVsXCIncyB0eXBlLCBwbGVhc2UgY2hlY2sgdGhlc2UgcHJvcGVydGllczogXCJyYW5nZVwiLCBcIm5nTW9kZWxcIiwgXCJuekRlZmF1bHRWYWx1ZVwiLmBcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZVJhbmdlKHZhbHVlOiBOelNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSGFuZGxlcnMoYW1vdW50OiBudW1iZXIpOiBOelNsaWRlckhhbmRsZXJbXSB7XG4gIHJldHVybiBBcnJheShhbW91bnQpXG4gICAgLmZpbGwoMClcbiAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0VmFsdWVWYWxpZCh2YWx1ZTogTnpTbGlkZXJWYWx1ZSwgaXNSYW5nZT86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCghaXNWYWx1ZVJhbmdlKHZhbHVlKSAmJiBpc05hTih2YWx1ZSkpIHx8IChpc1ZhbHVlUmFuZ2UodmFsdWUpICYmIHZhbHVlLnNvbWUodiA9PiBpc05hTih2KSkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBhc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSwgaXNSYW5nZSk7XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgaWYgYHRoaXMucmFuZ2VgIGlzIGB0cnVlYCwgdmFsdWUgaXMgYWxzbyBhIHJhbmdlLCB2aWNlIHZlcnNhLlxuICovXG5mdW5jdGlvbiBhc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZTogTnpTbGlkZXJWYWx1ZSwgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XG4gIGlmIChpc1ZhbHVlUmFuZ2UodmFsdWUpICE9PSBpc1JhbmdlKSB7XG4gICAgdGhyb3cgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNFcXVhbCh2YWxBOiBOelNsaWRlclZhbHVlLCB2YWxCOiBOelNsaWRlclZhbHVlKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsQSAhPT0gdHlwZW9mIHZhbEIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzVmFsdWVSYW5nZSh2YWxBKSAmJiBpc1ZhbHVlUmFuZ2UodmFsQikgPyBhcnJheXNFcXVhbDxudW1iZXI+KHZhbEEsIHZhbEIpIDogdmFsQSA9PT0gdmFsQjtcbn1cbiIsIjxkaXYgI3NsaWRlclxyXG4gIGNsYXNzPVwiYW50LXNsaWRlclwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbY2xhc3MuYW50LXNsaWRlci12ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItd2l0aC1tYXJrc109XCJtYXJrc0FycmF5XCI+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1zbGlkZXItcmFpbFwiPjwvZGl2PlxyXG4gIDxjbWFjcy1zbGlkZXItdHJhY2tcclxuICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgICBbaW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxyXG4gICAgW29mZnNldF09XCJ0cmFjay5vZmZzZXRcIlxyXG4gICAgW3JldmVyc2VdPVwicmV2ZXJzZVwiXG4gICAgW2Rpcl09XCJkaXJcIlxyXG4gICAgW2xlbmd0aF09XCJ0cmFjay5sZW5ndGghXCI+PC9jbWFjcy1zbGlkZXItdHJhY2s+XHJcbiAgPGNtYWNzLXNsaWRlci1zdGVwXHJcbiAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW21pbl09XCJtaW5cIlxuICAgIFttYXhdPVwibWF4XCJcclxuICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXHJcbiAgICBbbG93ZXJCb3VuZF09XCIkYW55KGJvdW5kcy5sb3dlcilcIlxuICAgIFt1cHBlckJvdW5kXT1cIiRhbnkoYm91bmRzLnVwcGVyKVwiXG4gICAgW21hcmtzQXJyYXldPVwibWFya3NBcnJheVwiXG4gICAgW2luY2x1ZGVkXT1cImluY2x1ZGVkXCJcbiAgICBbcmV2ZXJzZV09XCJyZXZlcnNlXCI+PC9jbWFjcy1zbGlkZXItc3RlcD5cclxuICA8Y21hY3Mtc2xpZGVyLWhhbmRsZVxyXG4gICAgKm5nRm9yPVwibGV0IGhhbmRsZSBvZiBoYW5kbGVzXCJcclxuICAgIFt2ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiXG4gICAgW3JldmVyc2VdPVwicmV2ZXJzZVwiXG4gICAgW29mZnNldF09XCJoYW5kbGUub2Zmc2V0IVwiXG4gICAgW3ZhbHVlXT1cImhhbmRsZS52YWx1ZSFcIlxuICAgIFthY3RpdmVdPVwiaGFuZGxlLmFjdGl2ZVwiXG4gICAgW3Rvb2x0aXBGb3JtYXR0ZXJdPVwidGlwRm9ybWF0dGVyXCJcbiAgICBbdG9vbHRpcFZpc2libGVdPVwidG9vbHRpcFZpc2libGVcIlxuICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgIFtkaXJdPVwiZGlyXCI+PC9jbWFjcy1zbGlkZXItaGFuZGxlPlxyXG4gIDxjbWFjcy1zbGlkZXItbWFya3NcclxuICAgICpuZ0lmPVwibWFya3NBcnJheVwiXHJcbiAgICBbdmVydGljYWxdPVwidmVydGljYWxcIlxuICAgIFttaW5dPVwibWluXCJcbiAgICBbbWF4XT1cIm1heFwiXG4gICAgW2xvd2VyQm91bmRdPVwiJGFueShib3VuZHMubG93ZXIpXCJcbiAgICBbdXBwZXJCb3VuZF09XCIkYW55KGJvdW5kcy51cHBlcilcIlxuICAgIFttYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxuICAgIFtpbmNsdWRlZF09XCJpbmNsdWRlZFwiXG4gICAgW3JldmVyc2VdPVwicmV2ZXJzZVwiPjwvY21hY3Mtc2xpZGVyLW1hcmtzPlxyXG48L2Rpdj5cclxuIl19