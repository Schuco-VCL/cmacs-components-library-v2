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
        return this.selectedValue?.length > 0 || this.hoverValue?.length > 0;
    }
    getClassMap(cell) {
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-in-view`]: true,
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-today`]: cell.isToday,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
            //[`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            //[`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            //[`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            //[`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
            //[`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
            //[`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
            //[`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
            //[`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
            //[`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
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
    static { this.ɵfac = function AbstractTable_Factory(t) { return new (t || AbstractTable)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AbstractTable, inputs: { prefixCls: "prefixCls", value: "value", locale: "locale", activeDate: "activeDate", showWeek: "showWeek", selectedValue: "selectedValue", hoverValue: "hoverValue", disabledDate: "disabledDate", cellRender: "cellRender", fullCellRender: "fullCellRender" }, outputs: { valueChange: "valueChange", cellHover: "cellHover" }, features: [i0.ɵɵNgOnChangesFeature] }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUsxRSxrREFBa0Q7QUFDbEQsTUFBTSxPQUFnQixhQUFhO0lBRm5DO1FBR0Usa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVILGNBQVMsR0FBVyxZQUFZLENBQUM7UUFHakMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhO1FBQzlDLGVBQVUsR0FBZ0IsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUtqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDNUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw2Q0FBNkM7S0EyRjVHO0lBekZXLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFD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LGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDO29CQUNuSCxDQUFDLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBMEIsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRTtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQWUsRUFBRSxLQUFnQjtRQUNsRCxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OEVBOUdtQixhQUFhO29FQUFiLGFBQWE7O3VGQUFiLGFBQWE7Y0FGbEMsU0FBUztnQkFVQyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUVhLFdBQVc7a0JBQTdCLE1BQU07WUFDWSxTQUFTO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdGltZSc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBEYXRlQm9keVJvdywgRGF0ZUNlbGwgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0VGFibGUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XHJcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XHJcbiAgaGVhZFJvdzogRGF0ZUNlbGxbXSA9IFtdO1xyXG4gIGJvZHlSb3dzOiBEYXRlQm9keVJvd1tdID0gW107XHJcbiAgTUFYX1JPVyA9IDY7XHJcbiAgTUFYX0NPTCA9IDc7XHJcblxyXG4gIEBJbnB1dCgpIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1waWNrZXInO1xyXG4gIEBJbnB1dCgpIHZhbHVlITogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdID0gW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogKGQ6IERhdGUpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY2VsbFJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBmdWxsQ2VsbFJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNlbGxIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZURhdGUpIHtcclxuICAgICAgdGhpcy5oZWFkUm93ID0gdGhpcy5tYWtlSGVhZFJvdygpO1xyXG4gICAgICB0aGlzLmJvZHlSb3dzID0gdGhpcy5tYWtlQm9keVJvd3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlCb2R5Um93KF9pbmRleDogbnVtYmVyLCBpdGVtOiBEYXRlQm9keVJvdyk6IE56U2FmZUFueSB7XHJcbiAgICByZXR1cm4gaXRlbS50cmFja0J5SW5kZXg7XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Qm9keUNvbHVtbihfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUNlbGwpOiBOelNhZmVBbnkge1xyXG4gICAgcmV0dXJuIGl0ZW0udHJhY2tCeUluZGV4O1xyXG4gIH1cclxuXHJcbiAgaGFzUmFuZ2VWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWU/Lmxlbmd0aCA+IDAgfHwgdGhpcy5ob3ZlclZhbHVlPy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NNYXAoY2VsbDogRGF0ZUNlbGwpOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBbYGFudC1waWNrZXItY2VsbGBdOiB0cnVlLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi12aWV3YF06IHRydWUsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXNlbGVjdGVkYF06IGNlbGwuaXNTZWxlY3RlZCxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtZGlzYWJsZWRgXTogY2VsbC5pc0Rpc2FibGVkLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC10b2RheWBdOiBjZWxsLmlzVG9kYXksXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWluLXJhbmdlYF06ICEhY2VsbC5pc0luU2VsZWN0ZWRSYW5nZSxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2Utc3RhcnRgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydCxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kYF06ICEhY2VsbC5pc1NlbGVjdGVkRW5kLFxyXG4gICAgICAvL1tgYW50LXBpY2tlci1jZWxsLXJhbmdlLXN0YXJ0LXNpbmdsZWBdOiAhIWNlbGwuaXNTdGFydFNpbmdsZSxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1lbmQtc2luZ2xlYF06ICEhY2VsbC5pc0VuZFNpbmdsZSxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3ZlcmBdOiAhIWNlbGwuaXNJbkhvdmVyUmFuZ2UsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItc3RhcnRgXTogISFjZWxsLmlzSG92ZXJTdGFydCxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1lbmRgXTogISFjZWxsLmlzSG92ZXJFbmQsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZWRnZS1zdGFydGBdOiAhIWNlbGwuaXNGaXJzdENlbGxJblBhbmVsLFxyXG4gICAgICAvL1tgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLWVkZ2UtZW5kYF06ICEhY2VsbC5pc0xhc3RDZWxsSW5QYW5lbCxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydC1uZWFyLWhvdmVyYF06ICEhY2VsbC5pc1JhbmdlU3RhcnROZWFySG92ZXIsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kLW5lYXItaG92ZXJgXTogISFjZWxsLmlzUmFuZ2VFbmROZWFySG92ZXJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBtYWtlSGVhZFJvdygpOiBEYXRlQ2VsbFtdO1xyXG4gIGFic3RyYWN0IG1ha2VCb2R5Um93cygpOiBEYXRlQm9keVJvd1tdO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmVEYXRlICYmICFjaGFuZ2VzLmFjdGl2ZURhdGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBDYW5keURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXMuZGlzYWJsZWREYXRlIHx8XHJcbiAgICAgIGNoYW5nZXMubG9jYWxlIHx8XHJcbiAgICAgIGNoYW5nZXMuc2hvd1dlZWsgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuYWN0aXZlRGF0ZSkgfHxcclxuICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMudmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnNlbGVjdGVkVmFsdWUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmhvdmVyVmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxyXG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDYW5keURhdGUgPSBwcmV2aW91c1ZhbHVlW2luZGV4XTtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzQ2FuZHlEYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gcHJldmlvdXNDYW5keURhdGUuaXNTYW1lRGF5KHZhbHVlKSA6IHByZXZpb3VzQ2FuZHlEYXRlICE9PSB2YWx1ZTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlIGFzIENhbmR5RGF0ZSwgY3VycmVudFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1NhbWVEYXRlKGxlZnQ6IENhbmR5RGF0ZSwgcmlnaHQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZURheShsZWZ0KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==