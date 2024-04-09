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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9yYWRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRzlDLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRUUsY0FBUyxHQUFHLElBQUksYUFBYSxDQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBVSxDQUFDLENBQUMsQ0FBQztRQUMxQyxVQUFLLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7S0FhdEM7SUFaQyxLQUFLO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWdCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxXQUFXLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0QsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQzsrRUFoQlUsY0FBYzt1RUFBZCxjQUFjLFdBQWQsY0FBYzs7dUZBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelJhZGlvU2VydmljZSB7XHJcbiAgc2VsZWN0ZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8TnpTYWZlQW55PigxKTtcclxuICB0b3VjaGVkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgZGlzYWJsZWQkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XHJcbiAgbmFtZSQgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xyXG4gIHRvdWNoKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b3VjaGVkJC5uZXh0KCk7XHJcbiAgfVxyXG4gIHNlbGVjdCh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcbiAgc2V0RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBzZXROYW1lKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubmFtZSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==