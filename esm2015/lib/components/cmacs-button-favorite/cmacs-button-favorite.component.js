import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CmacsButtonFavoriteComponent {
    constructor() {
        this.onChangedValue = new EventEmitter();
        this.iconFavorites = '';
    }
    ngOnInit() {
    }
    changedValue() {
        this.value = this.value ? false : true;
        this.onChangedValue.emit(this.value);
    }
}
CmacsButtonFavoriteComponent.ɵfac = function CmacsButtonFavoriteComponent_Factory(t) { return new (t || CmacsButtonFavoriteComponent)(); };
CmacsButtonFavoriteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsButtonFavoriteComponent, selectors: [["cmacs-button-favorite"]], inputs: { value: "value" }, outputs: { onChangedValue: "onChangedValue" }, decls: 1, vars: 1, consts: [[1, "cmacs-button-favorite", 3, "ngClass", "click"]], template: function CmacsButtonFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "i", 0);
        i0.ɵɵlistener("click", function CmacsButtonFavoriteComponent_Template_i_click_0_listener() { return ctx.changedValue(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.value ? "iconUILarge-Favorites" : "iconUILarge-Favorites_Unselcted");
    } }, directives: [i1.NgClass], styles: [".iconUILarge-Favorites[_ngcontent-%COMP%]{color:#ffc634}.iconUILarge-Favorites_Unselcted[_ngcontent-%COMP%]{color:#7f7f7f}.cmacs-button-favorite[_ngcontent-%COMP%]{cursor:pointer;font-size:14px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonFavoriteComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-button-favorite',
                templateUrl: './cmacs-button-favorite.component.html',
                styleUrls: ['./cmacs-button-favorite.component.css']
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], onChangedValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24tZmF2b3JpdGUvY21hY3MtYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24tZmF2b3JpdGUvY21hY3MtYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8vRSxNQUFNLE9BQU8sNEJBQTRCO0lBS3ZDO1FBSFUsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RSxrQkFBYSxHQUFVLEVBQUUsQ0FBQztJQUVWLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFBLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7d0dBYlUsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7UUNQekMsNEJBQzJCO1FBQXpCLG9HQUFTLGtCQUFjLElBQUM7UUFBQyxpQkFBSTs7UUFERSxpR0FBMkU7O3VGRE8vRiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEO3NDQUVVLEtBQUs7a0JBQWIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJ1dHRvbi1mYXZvcml0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWJ1dHRvbi1mYXZvcml0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnV0dG9uLWZhdm9yaXRlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCdXR0b25GYXZvcml0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlZFZhbHVlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgaWNvbkZhdm9yaXRlczpzdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkVmFsdWUoKXtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlPyBmYWxzZTp0cnVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZWRWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGkgY2xhc3M9XCJjbWFjcy1idXR0b24tZmF2b3JpdGVcIiBbbmdDbGFzc109XCJ2YWx1ZT8naWNvblVJTGFyZ2UtRmF2b3JpdGVzJzonaWNvblVJTGFyZ2UtRmF2b3JpdGVzX1Vuc2VsY3RlZCdcIlxyXG4gIChjbGljayk9XCJjaGFuZ2VkVmFsdWUoKVwiPjwvaT5cclxuIl19