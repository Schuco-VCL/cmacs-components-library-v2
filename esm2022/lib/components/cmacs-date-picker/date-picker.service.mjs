import { Injectable } from '@angular/core';
import { CandyDate, cloneDate, normalizeRangeValue } from 'ng-zorro-antd/core/time';
import { ReplaySubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DatePickerService {
    constructor() {
        this.activeInput = 'left';
        this.arrowLeft = 0;
        this.isRange = false;
        this.valueChange$ = new ReplaySubject(1);
        this.emitValue$ = new Subject();
        this.inputPartChange$ = new Subject();
    }
    initValue() {
        if (this.isRange) {
            this.initialValue = [];
        }
        else {
            this.initialValue = null;
        }
        this.setValue(this.initialValue);
    }
    hasValue(value = this.value) {
        if (Array.isArray(value)) {
            return !!value[0] || !!value[1];
        }
        else {
            return !!value;
        }
    }
    makeValue(value) {
        if (this.isRange) {
            return value ? value.map(val => new CandyDate(val)) : [];
        }
        else {
            return value ? new CandyDate(value) : null;
        }
    }
    setActiveDate(value, hasTimePicker = false, mode = 'month') {
        const parentPanels = {
            date: 'month',
            month: 'year',
            year: 'decade'
        };
        if (this.isRange) {
            this.activeDate = normalizeRangeValue(value, hasTimePicker, parentPanels[mode], this.activeInput);
        }
        else {
            this.activeDate = cloneDate(value);
        }
    }
    setValue(value) {
        this.value = value;
        this.valueChange$.next(this.value);
    }
    getActiveIndex(part = this.activeInput) {
        return { left: 0, right: 1 }[part];
    }
    ngOnDestroy() {
        this.valueChange$.complete();
        this.emitValue$.complete();
        this.inputPartChange$.complete();
    }
    static { this.ɵfac = function DatePickerService_Factory(t) { return new (t || DatePickerService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DatePickerService, factory: DatePickerService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQW1DLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSTlDLE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFLRSxnQkFBVyxHQUFrQixNQUFNLENBQUM7UUFDcEMsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO0tBc0RqRDtJQXBEQyxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxRQUFRLENBQUMsUUFBeUIsSUFBSSxDQUFDLEtBQUs7UUFDMUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUUsS0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDdEU7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFzQixFQUFFLGdCQUF5QixLQUFLLEVBQUUsT0FBdUIsT0FBTztRQUNsRyxNQUFNLFlBQVksR0FBNkM7WUFDN0QsSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsTUFBTTtZQUNiLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLEtBQW9CLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEg7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFzQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFzQixJQUFJLENBQUMsV0FBVztRQUNuRCxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25DLENBQUM7a0ZBL0RVLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQjs7dUZBQWpCLGlCQUFpQjtjQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSwgY2xvbmVEYXRlLCBDb21wYXRpYmxlVmFsdWUsIE5vcm1hbGl6ZWRNb2RlLCBub3JtYWxpemVSYW5nZVZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBhdGlibGVEYXRlLCBOekRhdGVNb2RlLCBSYW5nZVBhcnRUeXBlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgaW5pdGlhbFZhbHVlPzogQ29tcGF0aWJsZVZhbHVlO1xyXG4gIHZhbHVlITogQ29tcGF0aWJsZVZhbHVlO1xyXG4gIGFjdGl2ZURhdGU/OiBDb21wYXRpYmxlVmFsdWU7XHJcbiAgYWN0aXZlSW5wdXQ6IFJhbmdlUGFydFR5cGUgPSAnbGVmdCc7XHJcbiAgYXJyb3dMZWZ0OiBudW1iZXIgPSAwO1xyXG4gIGlzUmFuZ2UgPSBmYWxzZTtcclxuXHJcbiAgdmFsdWVDaGFuZ2UkID0gbmV3IFJlcGxheVN1YmplY3Q8Q29tcGF0aWJsZVZhbHVlPigxKTtcclxuICBlbWl0VmFsdWUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBpbnB1dFBhcnRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8UmFuZ2VQYXJ0VHlwZT4oKTtcclxuXHJcbiAgaW5pdFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xyXG4gICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmluaXRpYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBoYXNWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlID0gdGhpcy52YWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiAhIXZhbHVlWzBdIHx8ICEhdmFsdWVbMV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gISF2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1ha2VWYWx1ZSh2YWx1ZT86IENvbXBhdGlibGVEYXRlKTogQ29tcGF0aWJsZVZhbHVlIHtcclxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID8gKHZhbHVlIGFzIERhdGVbXSkubWFwKHZhbCA9PiBuZXcgQ2FuZHlEYXRlKHZhbCkpIDogW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdmFsdWUgPyBuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpIDogbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZURhdGUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSwgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlLCBtb2RlOiBOb3JtYWxpemVkTW9kZSA9ICdtb250aCcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudFBhbmVsczogeyBba2V5IGluIE56RGF0ZU1vZGVdPzogTm9ybWFsaXplZE1vZGUgfSA9IHtcclxuICAgICAgZGF0ZTogJ21vbnRoJyxcclxuICAgICAgbW9udGg6ICd5ZWFyJyxcclxuICAgICAgeWVhcjogJ2RlY2FkZSdcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWUgYXMgQ2FuZHlEYXRlW10sIGhhc1RpbWVQaWNrZXIsIHBhcmVudFBhbmVsc1ttb2RlXSwgdGhpcy5hY3RpdmVJbnB1dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBjbG9uZURhdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZSQubmV4dCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldEFjdGl2ZUluZGV4KHBhcnQ6IFJhbmdlUGFydFR5cGUgPSB0aGlzLmFjdGl2ZUlucHV0KTogbnVtYmVyIHtcclxuICAgIHJldHVybiB7IGxlZnQ6IDAsIHJpZ2h0OiAxIH1bcGFydF07XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmVtaXRWYWx1ZSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuaW5wdXRQYXJ0Q2hhbmdlJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=