import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ExcelService {
    constructor() {
        this._exportCompleted = new Subject();
        this.exportCompleted = this._exportCompleted.asObservable();
    }
    static toExportFileName(excelFileName) {
        return `${excelFileName}.xlsx`;
    }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = XLSX.utils.json_to_sheet(json);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        XLSX.writeFile(workbook, ExcelService.toExportFileName(excelFileName));
        this._exportCompleted.next(true);
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = i0.ɵɵdefineInjectable({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExcelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2V4Y2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEtBQUssSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sWUFBWTtJQUt2QjtRQUhRLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3JELG9CQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRzlELENBQUM7SUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBcUI7UUFDM0MsT0FBTyxHQUFHLGFBQWEsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxJQUFXLEVBQUUsYUFBcUI7UUFDekQsTUFBTSxTQUFTLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sUUFBUSxHQUFrQixFQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7d0VBakJVLFlBQVk7b0RBQVosWUFBWSxXQUFaLFlBQVksbUJBRlgsTUFBTTt1RkFFUCxZQUFZO2NBSHhCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIFhMU1ggZnJvbSAneGxzeCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4Y2VsU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2V4cG9ydENvbXBsZXRlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHB1YmxpYyBleHBvcnRDb21wbGV0ZWQgPSB0aGlzLl9leHBvcnRDb21wbGV0ZWQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvRXhwb3J0RmlsZU5hbWUoZXhjZWxGaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtleGNlbEZpbGVOYW1lfS54bHN4YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBleHBvcnRBc0V4Y2VsRmlsZShqc29uOiBhbnlbXSwgZXhjZWxGaWxlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCB3b3Jrc2hlZXQ6IFhMU1guV29ya1NoZWV0ID0gWExTWC51dGlscy5qc29uX3RvX3NoZWV0KGpzb24pO1xyXG4gICAgY29uc3Qgd29ya2Jvb2s6IFhMU1guV29ya0Jvb2sgPSB7U2hlZXRzOiB7J2RhdGEnOiB3b3Jrc2hlZXR9LCBTaGVldE5hbWVzOiBbJ2RhdGEnXX07XHJcbiAgICBYTFNYLndyaXRlRmlsZSh3b3JrYm9vaywgRXhjZWxTZXJ2aWNlLnRvRXhwb3J0RmlsZU5hbWUoZXhjZWxGaWxlTmFtZSkpO1xyXG4gICAgdGhpcy5fZXhwb3J0Q29tcGxldGVkLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==