/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
export class CmacsDatetimeValueAccessorDirective {
    keyup() {
        this.changed();
    }
    blur() {
        this.touched();
    }
    changed() {
        if (this._onChange) {
            const value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    }
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    constructor(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    writeValue(value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
    static { this.ɵfac = function CmacsDatetimeValueAccessorDirective_Factory(t) { return new (t || CmacsDatetimeValueAccessorDirective)(i0.ɵɵdirectiveInject(i1.DateHelperService), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsDatetimeValueAccessorDirective, selectors: [["input", "nzTime", ""]], hostBindings: function CmacsDatetimeValueAccessorDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup", function CmacsDatetimeValueAccessorDirective_keyup_HostBindingHandler() { return ctx.keyup(); })("blur", function CmacsDatetimeValueAccessorDirective_blur_HostBindingHandler() { return ctx.blur(); });
        } }, inputs: { nzTime: "nzTime" }, exportAs: ["nzTime"], features: [i0.ɵɵProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimeValueAccessorDirective, multi: true }])] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDatetimeValueAccessorDirective, [{
        type: Directive,
        args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimeValueAccessorDirective, multi: true }]
            }]
    }], function () { return [{ type: i1.DateHelperService }, { type: i0.ElementRef }]; }, { nzTime: [{
            type: Input
        }], keyup: [{
            type: HostListener,
            args: ['keyup']
        }], blur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGV0aW1lLXBpY2tlci9jbWFjcy1kYXRldGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBU3pFLE1BQU0sT0FBTyxtQ0FBbUM7SUFNOUMsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0QsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQU0sQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxZQUFvQixVQUE2QixFQUFVLFVBQXNCO1FBQTdELGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFHLENBQUM7SUFFckYsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7b0dBN0NVLG1DQUFtQztvRUFBbkMsbUNBQW1DO29IQUFuQyxXQUFPLDZGQUFQLFVBQU07a0dBRk4sQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsbUNBQW1DLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDOzt1RkFFL0YsbUNBQW1DO2NBTC9DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcscUNBQXFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQzNHOzZGQUlVLE1BQU07a0JBQWQsS0FBSztZQUdOLEtBQUs7a0JBREosWUFBWTttQkFBQyxPQUFPO1lBTXJCLElBQUk7a0JBREgsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFtuelRpbWVdJyxcclxuICBleHBvcnRBczogJ256VGltZScsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IENtYWNzRGF0ZXRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRldGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9vblRvdWNoOiAoKSA9PiB2b2lkO1xyXG4gIEBJbnB1dCgpIG56VGltZTogc3RyaW5nO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpXHJcbiAga2V5dXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZWQoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIucGFyc2VUaW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKTtcclxuICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fb25Ub3VjaCkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQodmFsdWUsIHRoaXMubnpUaW1lKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoID0gZm47XHJcbiAgfVxyXG59XHJcbiJdfQ==