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
            [`ant-picker-cell-today`]: cell.isToday,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2Fic3RyYWN0LXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUsxRSxrREFBa0Q7QUFDbEQsTUFBTSxPQUFnQixhQUFhO0lBRm5DO1FBR0Usa0JBQWEsR0FBRyxhQUFhLENBQUM7UUFDOUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDcEMsWUFBTyxHQUFlLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVILGNBQVMsR0FBVyxZQUFZLENBQUM7UUFHakMsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFnQixFQUFFLENBQUMsQ0FBQyxhQUFhO1FBQzlDLGVBQVUsR0FBZ0IsRUFBRSxDQUFDLENBQUMsYUFBYTtRQUtqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDNUMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw2Q0FBNkM7S0EyRjVHO0lBekZXLE1BQU07UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFD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QUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQTBCLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDbkU7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFlLEVBQUUsS0FBZ0I7UUFDbEQsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzswRUE5R21CLGFBQWE7a0RBQWIsYUFBYTt1RkFBYixhQUFhO2NBRmxDLFNBQVM7Z0JBVUMsU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFFYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksU0FBUztrQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgRGF0ZUJvZHlSb3csIERhdGVDZWxsIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRhYmxlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xyXG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xyXG4gIGhlYWRSb3c6IERhdGVDZWxsW10gPSBbXTtcclxuICBib2R5Um93czogRGF0ZUJvZHlSb3dbXSA9IFtdO1xyXG4gIE1BWF9ST1cgPSA2O1xyXG4gIE1BWF9DT0wgPSA3O1xyXG5cclxuICBASW5wdXQoKSBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtcGlja2VyJztcclxuICBASW5wdXQoKSB2YWx1ZSE6IENhbmR5RGF0ZTtcclxuICBASW5wdXQoKSBsb2NhbGUhOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBhY3RpdmVEYXRlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXSA9IFtdOyAvLyBSYW5nZSBPTkxZXHJcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW10gPSBbXTsgLy8gUmFuZ2UgT05MWVxyXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZT86IChkOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGNlbGxSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcbiAgQElucHV0KCkgZnVsbENlbGxSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjZWxsSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVEYXRlKSB7XHJcbiAgICAgIHRoaXMuaGVhZFJvdyA9IHRoaXMubWFrZUhlYWRSb3coKTtcclxuICAgICAgdGhpcy5ib2R5Um93cyA9IHRoaXMubWFrZUJvZHlSb3dzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja0J5Qm9keVJvdyhfaW5kZXg6IG51bWJlciwgaXRlbTogRGF0ZUJvZHlSb3cpOiBOelNhZmVBbnkge1xyXG4gICAgcmV0dXJuIGl0ZW0udHJhY2tCeUluZGV4O1xyXG4gIH1cclxuXHJcbiAgdHJhY2tCeUJvZHlDb2x1bW4oX2luZGV4OiBudW1iZXIsIGl0ZW06IERhdGVDZWxsKTogTnpTYWZlQW55IHtcclxuICAgIHJldHVybiBpdGVtLnRyYWNrQnlJbmRleDtcclxuICB9XHJcblxyXG4gIGhhc1JhbmdlVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlPy5sZW5ndGggPiAwIHx8IHRoaXMuaG92ZXJWYWx1ZT8ubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldENsYXNzTWFwKGNlbGw6IERhdGVDZWxsKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGxgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtaW4tdmlld2BdOiB0cnVlLFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1zZWxlY3RlZGBdOiBjZWxsLmlzU2VsZWN0ZWQsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLWRpc2FibGVkYF06IGNlbGwuaXNEaXNhYmxlZCxcclxuICAgICAgW2BhbnQtcGlja2VyLWNlbGwtdG9kYXlgXTogY2VsbC5pc1RvZGF5LFxyXG4gICAgICBbYGFudC1waWNrZXItY2VsbC1pbi1yYW5nZWBdOiAhIWNlbGwuaXNJblNlbGVjdGVkUmFuZ2UsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLXN0YXJ0YF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnQsXHJcbiAgICAgIFtgYW50LXBpY2tlci1jZWxsLXJhbmdlLWVuZGBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZCxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1zdGFydC1zaW5nbGVgXTogISFjZWxsLmlzU3RhcnRTaW5nbGUsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtZW5kLXNpbmdsZWBdOiAhIWNlbGwuaXNFbmRTaW5nbGUsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXJgXTogISFjZWxsLmlzSW5Ib3ZlclJhbmdlLFxyXG4gICAgICAvL1tgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLXN0YXJ0YF06ICEhY2VsbC5pc0hvdmVyU3RhcnQsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2UtaG92ZXItZW5kYF06ICEhY2VsbC5pc0hvdmVyRW5kLFxyXG4gICAgICAvL1tgYW50LXBpY2tlci1jZWxsLXJhbmdlLWhvdmVyLWVkZ2Utc3RhcnRgXTogISFjZWxsLmlzRmlyc3RDZWxsSW5QYW5lbCxcclxuICAgICAgLy9bYGFudC1waWNrZXItY2VsbC1yYW5nZS1ob3Zlci1lZGdlLWVuZGBdOiAhIWNlbGwuaXNMYXN0Q2VsbEluUGFuZWwsXHJcbiAgICAgIC8vW2BhbnQtcGlja2VyLWNlbGwtcmFuZ2Utc3RhcnQtbmVhci1ob3ZlcmBdOiAhIWNlbGwuaXNSYW5nZVN0YXJ0TmVhckhvdmVyLFxyXG4gICAgICAvL1tgYW50LXBpY2tlci1jZWxsLXJhbmdlLWVuZC1uZWFyLWhvdmVyYF06ICEhY2VsbC5pc1JhbmdlRW5kTmVhckhvdmVyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgbWFrZUhlYWRSb3coKTogRGF0ZUNlbGxbXTtcclxuICBhYnN0cmFjdCBtYWtlQm9keVJvd3MoKTogRGF0ZUJvZHlSb3dbXTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlRGF0ZSAmJiAhY2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBjaGFuZ2VzLmRpc2FibGVkRGF0ZSB8fFxyXG4gICAgICBjaGFuZ2VzLmxvY2FsZSB8fFxyXG4gICAgICBjaGFuZ2VzLnNob3dXZWVrIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLmFjdGl2ZURhdGUpIHx8XHJcbiAgICAgIHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxyXG4gICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICAgIGlmIChjaGFuZ2UpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcclxuICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIUFycmF5LmlzQXJyYXkocHJldmlvdXNWYWx1ZSkgfHxcclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5sZW5ndGggIT09IHByZXZpb3VzVmFsdWUubGVuZ3RoIHx8XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2FuZHlEYXRlID0gcHJldmlvdXNWYWx1ZVtpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c0NhbmR5RGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IHByZXZpb3VzQ2FuZHlEYXRlLmlzU2FtZURheSh2YWx1ZSkgOiBwcmV2aW91c0NhbmR5RGF0ZSAhPT0gdmFsdWU7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCAmJiByaWdodC5pc1NhbWVEYXkobGVmdCkpO1xyXG4gIH1cclxufVxyXG4iXX0=