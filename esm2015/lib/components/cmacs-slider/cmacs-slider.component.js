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
        if (cloneAndSort && this.value && isValueRange(this.value)) {
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
        if (!value) {
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
    } }, directives: [i4.CmacsSliderTrackComponent, i5.NgIf, i5.NgForOf, i6.CmacsSliderStepComponent, i7.CmacsSliderHandleComponent, i8.CmacsSliderMarksComponent], styles: [".ant-slider-rail{height:3px;border-radius:100px;background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEYsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFHTixTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLFdBQVcsRUFFWCxXQUFXLEVBQ1osTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FB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UUFDaEcsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsb0JBQW9CLENBQUMsS0FBb0IsRUFBRSxVQUFtQixLQUFLO0lBQzFFLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sRUFBRTtRQUNuQyxNQUFNLHlCQUF5QixFQUFFLENBQUM7S0FDbkM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFtQixFQUFFLElBQW1CO0lBQzNELElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLEVBQUU7UUFDL0IsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFTLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNwRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IERPV05fQVJST1csIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQge1xuICBhcnJheXNFcXVhbCxcbiAgZW5zdXJlTnVtYmVySW5SYW5nZSxcbiAgZ2V0RWxlbWVudE9mZnNldCxcbiAgZ2V0UGVyY2VudCxcbiAgZ2V0UHJlY2lzaW9uLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxuICBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcsXG4gIHNpbGVudEV2ZW50XG59IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56RXh0ZW5kZWRNYXJrLCBOek1hcmtzLCBOelNsaWRlckhhbmRsZXIsIE56U2xpZGVyU2hvd1Rvb2x0aXAsIE56U2xpZGVyVmFsdWUgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL3NsaWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLXNsaWRlci1oYW5kbGUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTbGlkZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTbGlkZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIE56U2xpZGVyU2VydmljZVxyXG4gIF0sXHJcbiAgaG9zdDoge1xuICAgICcoa2V5ZG93biknOiAnb25LZXlEb3duKCRldmVudCknXG4gIH0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2xpZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicsIHsgc3RhdGljOiB0cnVlIH0pIHNsaWRlciE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGRyZW4oQ21hY3NTbGlkZXJIYW5kbGVDb21wb25lbnQpIGhhbmRsZXJDb21wb25lbnRzITogUXVlcnlMaXN0PENtYWNzU2xpZGVySGFuZGxlQ29tcG9uZW50PjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRvdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaW5jbHVkZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGVmYXVsdFZhbHVlPzogTnpTbGlkZXJWYWx1ZTtcclxuICBASW5wdXQoKSBtYXJrczogTnpNYXJrcyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG1heCA9IDEwMDtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBtaW4gPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHN0ZXAgPSAxO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBWaXNpYmxlOiBOelNsaWRlclNob3dUb29sdGlwID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIHRpcEZvcm1hdHRlcj86IG51bGwgfCAoKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNsaWRlclZhbHVlPigpO1xyXG5cclxuICB2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xyXG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIGNhY2hlU2xpZGVyTGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7IC8vIEN1cnJlbnQgYWN0aXZhdGVkIGhhbmRsZSdzIGluZGV4IE9OTFkgZm9yIHJhbmdlPXRydWVcclxuICB0cmFjazogeyBvZmZzZXQ6IG51bGwgfCBudW1iZXI7IGxlbmd0aDogbnVsbCB8IG51bWJlciB9ID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXHJcbiAgaGFuZGxlczogTnpTbGlkZXJIYW5kbGVyW10gPSBbXTsgLy8gSGFuZGxlcycgb2Zmc2V0XHJcbiAgbWFya3NBcnJheTogTnpFeHRlbmRlZE1hcmtbXSB8IG51bGwgPSBudWxsOyAvLyBcInN0ZXBzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xyXG4gIGJvdW5kczogeyBsb3dlcjogTnpTbGlkZXJWYWx1ZSB8IG51bGw7IHVwcGVyOiBOelNsaWRlclZhbHVlIHwgbnVsbCB9ID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXJ0JD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBkcmFnTW92ZSQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgZHJhZ0VuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkcmFnTW92ZV8/OiBTdWJzY3JpcHRpb24gfCBudWxsO1xuICBwcml2YXRlIGRyYWdFbmRfPzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2xpZGVyU2VydmljZTogTnpTbGlkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVzID0gZ2VuZXJhdGVIYW5kbGVycyh0aGlzLnJhbmdlID8gMiA6IDEpO1xuICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubWFya3MpIDogbnVsbDtcbiAgICB0aGlzLmJpbmREcmFnZ2luZ0hhbmRsZXJzKCk7XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5kaXNhYmxlZCk7XG5cbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG1hcmtzLCByYW5nZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoZGlzYWJsZWQgJiYgIWRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKG1hcmtzICYmICFtYXJrcy5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm1hcmtzID8gdGhpcy5nZW5lcmF0ZU1hcmtJdGVtcyh0aGlzLm1hcmtzKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlICYmICFyYW5nZS5maXJzdENoYW5nZSkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMuZm9ybWF0VmFsdWUobnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsOiBOelNsaWRlclZhbHVlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25WYWx1ZUNoYW5nZShfdmFsdWU6IE56U2xpZGVyVmFsdWUpOiB2b2lkIHt9XHJcblxyXG4gIG9uVG91Y2hlZCgpOiB2b2lkIHt9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogTnpTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGVyIGlzIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBzbGlkZXIgaGFuZGxlciBpcyBmb2N1c2VkLlxuICAgKi9cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGlzSW5jcmVhc2UgPSBjb2RlID09PSBSSUdIVF9BUlJPVyB8fCBjb2RlID09PSBVUF9BUlJPVztcbiAgICBjb25zdCBpc0RlY3JlYXNlID0gY29kZSA9PT0gTEVGVF9BUlJPVyB8fCBjb2RlID09PSBET1dOX0FSUk9XO1xuXG4gICAgaWYgKCEoaXNJbmNyZWFzZSB8fCBpc0RlY3JlYXNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBzdGVwID0gKGlzRGVjcmVhc2UgPyAtdGhpcy5zdGVwIDogdGhpcy5zdGVwKSAqICh0aGlzLnJldmVyc2UgPyAtMSA6IDEpO1xuICAgIHN0ZXAgPSB0aGlzLmRpciA9PT0gJ3J0bCcgPyBzdGVwICogLTEgOiBzdGVwO1xuICAgIGNvbnN0IG5ld1ZhbCA9IHRoaXMucmFuZ2UgPyAodGhpcy52YWx1ZSBhcyBudW1iZXJbXSlbdGhpcy5hY3RpdmVWYWx1ZUluZGV4IV0gKyBzdGVwIDogKHRoaXMudmFsdWUgYXMgbnVtYmVyKSArIHN0ZXA7XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZShlbnN1cmVOdW1iZXJJblJhbmdlKG5ld1ZhbCwgdGhpcy5taW4sIHRoaXMubWF4KSk7XG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSB8IG51bGwsIGlzV3JpdGVWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcclxuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcclxuICAgIH0gZWxzZSBpZiAoIXZhbHVlc0VxdWFsKHRoaXMudmFsdWUhLCB2YWx1ZSEpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcclxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IE56U2xpZGVyVmFsdWUge1xyXG4gICAgaWYgKGNsb25lQW5kU29ydCAmJiB0aGlzLnZhbHVlICYmIGlzVmFsdWVSYW5nZSh0aGlzLnZhbHVlKSkge1xuICAgICAgcmV0dXJuIFsuLi50aGlzLnZhbHVlXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcclxuICB9XHJcblxyXG4gIC8qKlxuICAgKiBDbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogTnpTbGlkZXJWYWx1ZSk6IE56U2xpZGVyVmFsdWUge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlb2Ygbm9ybWFsaXplZFZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgbm9ybWFsaXplZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNWYWx1ZVJhbmdlKG5vcm1hbGl6ZWRWYWx1ZSkgPyBub3JtYWxpemVkVmFsdWUubWFwKHZhbCA9PiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSkgOiB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlKTtcbiAgfVxyXG5cclxuICAvKipcbiAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQuXG4gICAqL1xuICBwcml2YXRlIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBpZiAoaXNWYWx1ZVJhbmdlKHZhbHVlKSkge1xuICAgICAgbGV0IG1pbmltYWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IGdhcDogbnVtYmVyO1xuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICB2YWx1ZS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGdhcCA9IE1hdGguYWJzKHBvaW50ZXJWYWx1ZSAtIHZhbCk7XG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwhKSB7XG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWN0aXZlVmFsdWVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgICAgdGhpcy5oYW5kbGVyQ29tcG9uZW50cy50b0FycmF5KClbYWN0aXZlSW5kZXhdLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlckNvbXBvbmVudHMudG9BcnJheSgpWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbHVlUmFuZ2UodGhpcy52YWx1ZSEpKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IFsuLi4odGhpcy52YWx1ZSBhcyBudW1iZXJbXSldO1xuICAgICAgbmV3VmFsdWVbdGhpcy5hY3RpdmVWYWx1ZUluZGV4IV0gPSBwb2ludGVyVmFsdWU7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxuICAgICogVXBkYXRlIHRyYWNrIGFuZCBoYW5kbGVzJyBwb3NpdGlvbiBhbmQgbGVuZ3RoLlxuICAgICovXG4gIHByaXZhdGUgdXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZSk7XG4gICAgY29uc3QgdmFsdWVTb3J0ZWQgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XG4gICAgY29uc3QgYm91bmRQYXJ0cyA9IGlzVmFsdWVSYW5nZSh2YWx1ZVNvcnRlZCkgPyB2YWx1ZVNvcnRlZCA6IFswLCB2YWx1ZVNvcnRlZF07XG4gICAgY29uc3QgdHJhY2tQYXJ0cyA9IGlzVmFsdWVSYW5nZShvZmZzZXRTb3J0ZWQpID8gW29mZnNldFNvcnRlZFswXSwgb2Zmc2V0U29ydGVkWzFdIC0gb2Zmc2V0U29ydGVkWzBdXSA6IFswLCBvZmZzZXRTb3J0ZWRdO1xuXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSBpc1ZhbHVlUmFuZ2Uob2Zmc2V0KSA/IG9mZnNldFtpbmRleF0gOiBvZmZzZXQ7XG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlUmFuZ2UodmFsdWUpID8gdmFsdWVbaW5kZXhdIDogdmFsdWUgfHwgMDtcbiAgICB9KTtcblxuICAgIFt0aGlzLmJvdW5kcy5sb3dlciwgdGhpcy5ib3VuZHMudXBwZXJdID0gYm91bmRQYXJ0cztcbiAgICBbdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoXSA9IHRyYWNrUGFydHM7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgb25EcmFnU3RhcnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkoKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlSW5kZXgodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHRoaXMuZ2V0TG9naWNhbFZhbHVlKHZhbHVlKSk7XG4gICAgdGhpcy5zaG93SGFuZGxlVG9vbHRpcCh0aGlzLnJhbmdlID8gdGhpcy5hY3RpdmVWYWx1ZUluZGV4IDogMCk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ01vdmUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodGhpcy5nZXRMb2dpY2FsVmFsdWUodmFsdWUpKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TG9naWNhbFZhbHVlKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnJldmVyc2UpIHtcbiAgICAgIGlmICghdGhpcy52ZXJ0aWNhbCAmJiB0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubWF4IC0gdmFsdWUgKyB0aGlzLm1pbjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsICYmIHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgcmV0dXJuIHRoaXMubWF4IC0gdmFsdWUgKyB0aGlzLm1pbjtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcoZmFsc2UpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcbiAgICB0aGlzLmhpZGVBbGxIYW5kbGVUb29sdGlwKCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXG4gICAqL1xuICBwcml2YXRlIGJpbmREcmFnZ2luZ0hhbmRsZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy52ZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xuICAgIGNvbnN0IG1vdXNlOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydDogJ21vdXNlZG93bicsXG4gICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICAgIGVuZDogJ21vdXNldXAnLFxuICAgICAgcGx1Y2tLZXk6IFtvcmllbnRGaWVsZF1cbiAgICB9O1xuICAgIGNvbnN0IHRvdWNoOiBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcgPSB7XG4gICAgICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgICBlbmQ6ICd0b3VjaGVuZCcsXG4gICAgICBwbHVja0tleTogWyd0b3VjaGVzJywgJzAnLCBvcmllbnRGaWVsZF0sXG4gICAgICBmaWx0ZXI6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnRcbiAgICB9O1xuXG4gICAgW21vdXNlLCB0b3VjaF0uZm9yRWFjaChzb3VyY2UgPT4ge1xuICAgICAgY29uc3QgeyBzdGFydCwgbW92ZSwgZW5kLCBwbHVja0tleSwgZmlsdGVyOiBmaWx0ZXJGdW5jID0gKCkgPT4gdHJ1ZSB9ID0gc291cmNlO1xuXG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcChzaWxlbnRFdmVudCksXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKVxuICAgICAgKTtcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xuICAgICAgc291cmNlLm1vdmVSZXNvbHZlZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIG1vdmUpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcbiAgICAgICAgcGx1Y2s8RXZlbnQsIG51bWJlcj4oLi4ucGx1Y2tLZXkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwoc291cmNlLmVuZCQpXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnU3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCEsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQhKTtcbiAgICB0aGlzLmRyYWdNb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQhLCB0b3VjaC5tb3ZlUmVzb2x2ZWQkISk7XG4gICAgdGhpcy5kcmFnRW5kJCA9IG1lcmdlKG1vdXNlLmVuZCQhLCB0b3VjaC5lbmQkISk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJ10pOiB2b2lkIHtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydCQgJiYgIXRoaXMuZHJhZ1N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRfID0gdGhpcy5kcmFnU3RhcnQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZSQgJiYgIXRoaXMuZHJhZ01vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IHRoaXMuZHJhZ01vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZCQgJiYgIXRoaXMuZHJhZ0VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSB0aGlzLmRyYWdFbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsnc3RhcnQnLCAnbW92ZScsICdlbmQnXSk6IHZvaWQge1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ1N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnU3RhcnRfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnTW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ01vdmVfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ0VuZF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcGVyaW9kcyA9IFsnbW92ZScsICdlbmQnXTtcbiAgICBpZiAobW92YWJsZSkge1xuICAgICAgdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlRHJhZyhbJ3N0YXJ0J10pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIGNvbnN0IHNsaWRlckxlbmd0aCA9IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gICAgY29uc3QgcmF0aW8gPSBlbnN1cmVOdW1iZXJJblJhbmdlKChwb3NpdGlvbiAtIHNsaWRlclN0YXJ0KSAvIHNsaWRlckxlbmd0aCwgMCwgMSk7XG4gICAgY29uc3QgdmFsID0gKHRoaXMubWF4IC0gdGhpcy5taW4pICogKHRoaXMudmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm1pbjtcbiAgICBjb25zdCBwb2ludHMgPVxuICAgICAgdGhpcy5tYXJrcyA9PT0gbnVsbFxuICAgICAgICA/IFtdXG4gICAgICAgIDogT2JqZWN0LmtleXModGhpcy5tYXJrcylcbiAgICAgICAgICAubWFwKHBhcnNlRmxvYXQpXG4gICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICAgIGlmICh0aGlzLnN0ZXAgIT09IDAgJiYgIXRoaXMuZG90cykge1xuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5zdGVwKSAqIHRoaXMuc3RlcDtcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhcHMgPSBwb2ludHMubWFwKHBvaW50ID0+IE1hdGguYWJzKHZhbCAtIHBvaW50KSk7XG4gICAgY29uc3QgY2xvc2VzdCA9IHBvaW50c1tnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpXTtcblxuICAgIC8vIHJldHVybiBwYXJzZUZsb2F0KGNsb3Nlc3QudG9GaXhlZChnZXRQcmVjaXNpb24odGhpcy5uelN0ZXApKSk7XG4gICAgcmV0dXJuIHRoaXMuc3RlcCA9PT0gMCA/IGNsb3Nlc3QgOiBwYXJzZUZsb2F0KGNsb3Nlc3QudG9GaXhlZChnZXRQcmVjaXNpb24odGhpcy5zdGVwKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRQZXJjZW50KHRoaXMubWluLCB0aGlzLm1heCwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJTdGFydCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJTdGFydDtcbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0ID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2xpZGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsID8gc2xpZGVyRE9NLmNsaWVudEhlaWdodCA6IHNsaWRlckRPTS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zIGZvciBwZXJmb3JtYW5jZSAobWF5IG5vdCBuZWNlc3Nhcnk/KVxuICAgKi9cbiAgcHJpdmF0ZSBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVNsaWRlclN0YXJ0ID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IE56U2xpZGVyVmFsdWUgfCBudWxsKTogTnpTbGlkZXJWYWx1ZSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZ2UgPyBbdGhpcy5taW4sIHRoaXMubWF4XSA6IHRoaXMubWluO1xuICAgIH0gZWxzZSBpZiAoYXNzZXJ0VmFsdWVWYWxpZCh2YWx1ZSwgdGhpcy5yYW5nZSkpIHtcbiAgICAgIHJldHVybiBpc1ZhbHVlUmFuZ2UodmFsdWUpXG4gICAgICAgID8gdmFsdWUubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5taW4sIHRoaXMubWF4KSlcbiAgICAgICAgOiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0VmFsdWUgPyB0aGlzLmRlZmF1bHRWYWx1ZSA6IHRoaXMucmFuZ2UgPyBbdGhpcy5taW4sIHRoaXMubWF4XSA6IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXG4gICAqL1xuICBwcml2YXRlIHNob3dIYW5kbGVUb29sdGlwKGhhbmRsZUluZGV4OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcbiAgICAgIGhhbmRsZS5hY3RpdmUgPSBpbmRleCA9PT0gaGFuZGxlSW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhpZGVBbGxIYW5kbGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTWFya0l0ZW1zKG1hcmtzOiBOek1hcmtzKTogTnpFeHRlbmRlZE1hcmtbXSB8IG51bGwge1xuICAgIGNvbnN0IG1hcmtzQXJyYXk6IE56RXh0ZW5kZWRNYXJrW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXJrcykge1xuICAgICAgY29uc3QgbWFyayA9IG1hcmtzW2tleV07XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5taW4gJiYgdmFsIDw9IHRoaXMubWF4KSB7XG4gICAgICAgIG1hcmtzQXJyYXkucHVzaCh7IHZhbHVlOiB2YWwsIG9mZnNldDogdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCksIGNvbmZpZzogbWFyayB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hcmtzQXJyYXkubGVuZ3RoID8gbWFya3NBcnJheSA6IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoXG4gICAgYFRoZSBcInJhbmdlXCIgY2FuJ3QgbWF0Y2ggdGhlIFwibmdNb2RlbFwiJ3MgdHlwZSwgcGxlYXNlIGNoZWNrIHRoZXNlIHByb3BlcnRpZXM6IFwicmFuZ2VcIiwgXCJuZ01vZGVsXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVSYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZhbHVlIGlzIG51bWJlcltdIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhhbmRsZXJzKGFtb3VudDogbnVtYmVyKTogTnpTbGlkZXJIYW5kbGVyW10ge1xuICByZXR1cm4gQXJyYXkoYW1vdW50KVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoKSA9PiAoeyBvZmZzZXQ6IG51bGwsIHZhbHVlOiBudWxsLCBhY3RpdmU6IGZhbHNlIH0pKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCBhbmQgdGhyb3cgZXJyb3IgaWYgdmFsdWUtdHlwZS9yYW5nZSBub3QgbWF0Y2guXG4gKi9cbmZ1bmN0aW9uIGFzc2VydFZhbHVlVmFsaWQodmFsdWU6IE56U2xpZGVyVmFsdWUsIGlzUmFuZ2U/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gIGlmICgoIWlzVmFsdWVSYW5nZSh2YWx1ZSkgJiYgaXNOYU4odmFsdWUpKSB8fCAoaXNWYWx1ZVJhbmdlKHZhbHVlKSAmJiB2YWx1ZS5zb21lKHYgPT4gaXNOYU4odikpKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VmFsdWVUeXBlTWF0Y2godmFsdWUsIGlzUmFuZ2UpO1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IGlmIGB0aGlzLnJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0VmFsdWVUeXBlTWF0Y2godmFsdWU6IE56U2xpZGVyVmFsdWUsIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICBpZiAoaXNWYWx1ZVJhbmdlKHZhbHVlKSAhPT0gaXNSYW5nZSkge1xuICAgIHRocm93IGdldFZhbHVlVHlwZU5vdE1hdGNoRXJyb3IoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzRXF1YWwodmFsQTogTnpTbGlkZXJWYWx1ZSwgdmFsQjogTnpTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbEEgIT09IHR5cGVvZiB2YWxCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc1ZhbHVlUmFuZ2UodmFsQSkgJiYgaXNWYWx1ZVJhbmdlKHZhbEIpID8gYXJyYXlzRXF1YWw8bnVtYmVyPih2YWxBLCB2YWxCKSA6IHZhbEEgPT09IHZhbEI7XG59XG4iLCI8ZGl2ICNzbGlkZXJcclxuICBjbGFzcz1cImFudC1zbGlkZXJcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICBbY2xhc3MuYW50LXNsaWRlci1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgW2NsYXNzLmFudC1zbGlkZXItdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gIFtjbGFzcy5hbnQtc2xpZGVyLXdpdGgtbWFya3NdPVwibWFya3NBcnJheVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtc2xpZGVyLXJhaWxcIj48L2Rpdj5cclxuICA8Y21hY3Mtc2xpZGVyLXRyYWNrXHJcbiAgICBbdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gICAgW2luY2x1ZGVkXT1cImluY2x1ZGVkXCJcclxuICAgIFtvZmZzZXRdPVwidHJhY2sub2Zmc2V0XCJcclxuICAgIFtyZXZlcnNlXT1cInJldmVyc2VcIlxuICAgIFtkaXJdPVwiZGlyXCJcclxuICAgIFtsZW5ndGhdPVwidHJhY2subGVuZ3RoIVwiPjwvY21hY3Mtc2xpZGVyLXRyYWNrPlxyXG4gIDxjbWFjcy1zbGlkZXItc3RlcFxyXG4gICAgKm5nSWY9XCJtYXJrc0FycmF5XCJcclxuICAgIFttaW5dPVwibWluXCJcbiAgICBbbWF4XT1cIm1heFwiXHJcbiAgICBbdmVydGljYWxdPVwidmVydGljYWxcIlxyXG4gICAgW2xvd2VyQm91bmRdPVwiJGFueShib3VuZHMubG93ZXIpXCJcbiAgICBbdXBwZXJCb3VuZF09XCIkYW55KGJvdW5kcy51cHBlcilcIlxuICAgIFttYXJrc0FycmF5XT1cIm1hcmtzQXJyYXlcIlxuICAgIFtpbmNsdWRlZF09XCJpbmNsdWRlZFwiXG4gICAgW3JldmVyc2VdPVwicmV2ZXJzZVwiPjwvY21hY3Mtc2xpZGVyLXN0ZXA+XHJcbiAgPGNtYWNzLXNsaWRlci1oYW5kbGVcclxuICAgICpuZ0Zvcj1cImxldCBoYW5kbGUgb2YgaGFuZGxlc1wiXHJcbiAgICBbdmVydGljYWxdPVwidmVydGljYWxcIlxuICAgIFtyZXZlcnNlXT1cInJldmVyc2VcIlxuICAgIFtvZmZzZXRdPVwiaGFuZGxlLm9mZnNldCFcIlxuICAgIFt2YWx1ZV09XCJoYW5kbGUudmFsdWUhXCJcbiAgICBbYWN0aXZlXT1cImhhbmRsZS5hY3RpdmVcIlxuICAgIFt0b29sdGlwRm9ybWF0dGVyXT1cInRpcEZvcm1hdHRlclwiXG4gICAgW3Rvb2x0aXBWaXNpYmxlXT1cInRvb2x0aXBWaXNpYmxlXCJcbiAgICBbdG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICBbZGlyXT1cImRpclwiPjwvY21hY3Mtc2xpZGVyLWhhbmRsZT5cclxuICA8Y21hY3Mtc2xpZGVyLW1hcmtzXHJcbiAgICAqbmdJZj1cIm1hcmtzQXJyYXlcIlxyXG4gICAgW3ZlcnRpY2FsXT1cInZlcnRpY2FsXCJcbiAgICBbbWluXT1cIm1pblwiXG4gICAgW21heF09XCJtYXhcIlxuICAgIFtsb3dlckJvdW5kXT1cIiRhbnkoYm91bmRzLmxvd2VyKVwiXG4gICAgW3VwcGVyQm91bmRdPVwiJGFueShib3VuZHMudXBwZXIpXCJcbiAgICBbbWFya3NBcnJheV09XCJtYXJrc0FycmF5XCJcbiAgICBbaW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgIFtyZXZlcnNlXT1cInJldmVyc2VcIj48L2NtYWNzLXNsaWRlci1tYXJrcz5cclxuPC9kaXY+XHJcbiJdfQ==