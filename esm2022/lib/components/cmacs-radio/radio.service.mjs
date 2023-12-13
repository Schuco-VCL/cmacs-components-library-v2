import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NzRadioService {
    constructor() {
        this.selected$ = new ReplaySubject(1);
        this.touched$ = new Subject();
        this.disabled$ = new ReplaySubject(1);
        this.name$ = new ReplaySubject(1);
    }
    touch() {
        this.touched$.next();
    }
    select(value) {
        this.selected$.next(value);
    }
    setDisabled(value) {
        this.disabled$.next(value);
    }
    setName(value) {
        this.name$.next(value);
    }
    static { this.ɵfac = function NzRadioService_Factory(t) { return new (t || NzRadioService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzRadioService, factory: NzRadioService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzRadioService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9yYWRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzlDLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRUUsY0FBUyxHQUFHLElBQUksYUFBYSxDQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7S0FhdEM7SUFaQyxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWdCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxXQUFXLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzsrRUFoQlUsY0FBYzt1RUFBZCxjQUFjLFdBQWQsY0FBYzs7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56UmFkaW9TZXJ2aWNlIHtcbiAgc2VsZWN0ZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TnpTYWZlQW55PigxKTtcbiAgdG91Y2hlZCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXNhYmxlZCQgPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcbiAgbmFtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xuICB0b3VjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWQkLm5leHQoKTtcbiAgfVxuICBzZWxlY3QodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQodmFsdWUpO1xuICB9XG4gIHNldERpc2FibGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgc2V0TmFtZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uYW1lJC5uZXh0KHZhbHVlKTtcbiAgfVxufVxuIl19