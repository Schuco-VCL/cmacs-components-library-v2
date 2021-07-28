/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
// tslint:disable-next-line:directive-class-suffix
export class AbstractTable {
    constructor() {
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
        this.headRow = [];
        this.bodyRows = [];
        this.MAX_ROW = 6;
        this.MAX_COL = 7;
        this.prefixCls = 'ant-picker';
        this.activeDate = new CandyDate();
        this.showWeek = false;
        this.selectedValue = []; // Range ONLY
        this.hoverValue = []; // Range ONLY
        this.valueChange = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
    }
    render() {
        if (this.activeDate) {
            this.headRow = this.makeHeadRow();
            this.bodyRows = this.makeBodyRows();
        }
    }
    trackByBodyRow(_index, item) {
        return item.trackByIndex;
    }
    trackByBodyColumn(_index, item) {
        return item.trackByIndex;
    }
    hasRangeValue() {
        var _a, _b;
        return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
    }
    getClassMap(cell) {
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-in-view`]: true,
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
            [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
            [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
            [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
            [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
            [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
            [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
        };
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        if (changes.disabledDate ||
            changes.locale ||
            changes.showWeek ||
            this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
}
AbstractTable.ɵfac = function AbstractTable_Factory(t) { return new (t || AbstractTable)(); };
AbstractTable.ɵdir = i0.ɵɵdefineDirective({ type: AbstractTable, inputs: { prefixCls: "prefixCls", value: "value", locale: "locale", activeDate: "activeDate", showWeek: "showWeek", selectedValue: "selectedValue", hoverValue: "hoverValue", disabledDate: "disabledDate", cellRender: "cellRender", fullCellRender: "fullCellRender" }, outputs: { valueChange: "valueChange", cellHover: "cellHover" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractTable, [{
        type: Directive
    }], null, { prefixCls: [{
            type: Input
        }], value: [{
            type: Input
        }], locale: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], cellRender: [{
            type: Input
        }], fullCellRender: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], cellHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUsxRSxrREFBa0Q7QUFDbEQsTUFBTSxPQUFnQixhQUFhO0lBRm5DO1FBR0Usa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVILGNBQVMsR0FBVyxZQUFZLENBQUM7UUFHakMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhO1FBQzlDLGVBQVUsR0FBZ0IsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUtqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDNUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw2Q0FBNkM7S0EwRjVHO0lBeEZXLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFD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QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBRWEsV0FBVztrQkFBN0IsTUFBTTtZQUNZLFNBQVM7a0JBQTNCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcclxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wLCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IERhdGVCb2R5Um93LCBEYXRlQ2VsbCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcclxuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcclxuICBoZWFkUm93OiBEYXRlQ2VsbFtdID0gW107XHJcbiAgYm9keVJvd3M6IERhdGVCb2R5Um93W10gPSBbXTtcclxuICBNQVhfUk9XID0gNjtcclxuICBNQVhfQ09MID0gNztcclxuXHJcbiAgQElucHV0KCkgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXBpY2tlcic7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgbG9jYWxlITogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XHJcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW10gPSBbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdID0gW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU/OiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBjZWxsUmVuZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8RGF0ZT4gfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGZ1bGxDZWxsUmVuZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8RGF0ZT4gfCBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2VsbEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlRGF0ZSkge1xyXG4gICAgICB0aGlzLmhlYWRSb3cgPSB0aGlzLm1ha2VIZWFkUm93KCk7XHJcbiAgICAgIHRoaXMuYm9keVJvd3MgPSB0aGlzLm1ha2VCb2R5Um93cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUJvZHlSb3coX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVCb2R5Um93KTogTnpTYWZlQW55IHtcclxuICAgIHJldHVybiBpdGVtLnRyYWNrQnlJbmRleDtcclxuICB9XHJcblxyXG4gIHRyYWNrQnlCb2R5Q29sdW1uKF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQ2VsbCk6IE56U2FmZUFueSB7XHJcbiAgICByZXR1cm4gaXRlbS50cmFja0J5SW5kZXg7XHJcbiAgfVxyXG5cclxuICBoYXNSYW5nZVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZT8ubGVuZ3RoID4gMCB8fCB0aGlzLmhvdmVyVmFsdWU/Lmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc01hcChjZWxsOiBEYXRlQ2VsbCk6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXZpZXdgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtc2VsZWN0ZWRgXTogY2VsbC5pc1NlbGVjdGVkLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1kaXNhYmxlZGBdOiBjZWxsLmlzRGlzYWJsZWQsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXJhbmdlYF06ICEhY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2Utc3RhcnRgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydCxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydC1zaW5nbGVgXTogISFjZWxsLmlzU3RhcnRTaW5nbGUsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWVuZC1zaW5nbGVgXTogISFjZWxsLmlzRW5kU2luZ2xlLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3ZlcmBdOiAhIWNlbGwuaXNJbkhvdmVyUmFuZ2UsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLXN0YXJ0YF06ICEhY2VsbC5pc0hvdmVyU3RhcnQsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLWVuZGBdOiAhIWNlbGwuaXNIb3ZlckVuZCxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1zdGFydGBdOiAhIWNlbGwuaXNGaXJzdENlbGxJblBhbmVsLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1lZGdlLWVuZGBdOiAhIWNlbGwuaXNMYXN0Q2VsbEluUGFuZWwsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLXN0YXJ0LW5lYXItaG92ZXJgXTogISFjZWxsLmlzUmFuZ2VTdGFydE5lYXJIb3ZlcixcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kLW5lYXItaG92ZXJgXTogISFjZWxsLmlzUmFuZ2VFbmROZWFySG92ZXJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdO1xyXG4gIGFic3RyYWN0IG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmVEYXRlICYmICFjaGFuZ2VzLmFjdGl2ZURhdGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXMuZGlzYWJsZWREYXRlIHx8XHJcbiAgICAgIGNoYW5nZXMubG9jYWxlIHx8XHJcbiAgICAgIGNoYW5nZXMuc2hvd1dlZWsgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==