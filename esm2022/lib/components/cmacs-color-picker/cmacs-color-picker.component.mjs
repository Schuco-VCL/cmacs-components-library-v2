import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsColorPickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4);
    i0.ɵɵlistener("click", function CmacsColorPickerComponent_ng_container_0_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setColor("transparent")); });
    i0.ɵɵelement(3, "div", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", "transparent" === ctx_r0.color)("is-mobile", ctx_r0.mobile);
} }
function CmacsColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function CmacsColorPickerComponent_div_2_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r6); const $color_r4 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.setColor($color_r4)); });
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $color_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-mobile", ctx_r1.mobile)("cmacs-color-picker-color-wrapper-selected", $color_r4 === ctx_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", $color_r4)("border-color", $color_r4 === "#ffffff" ? "#dee0e5" : "transparent");
    i0.ɵɵclassProp("is-white", $color_r4 === "#ffffff");
} }
export class CmacsColorPickerComponent {
    constructor(ref, cdr) {
        this.ref = ref;
        this.cdr = cdr;
        this.type = 'basic';
        this.mobile = false;
        this.colorChange = new EventEmitter();
        this.width = 0;
        this.basicColorList = [
            '#000000',
            '#ffffff',
            '#cc2229',
            '#f6503c',
            '#ffa234',
            '#fff100',
            '#00ce7d',
            '#009fe3',
            '#2a7cff',
            '#a100cd',
            '#cf1384',
            '#794c18',
            '#bec4cd',
            '#656c79'
        ];
    }
    setColor(color) {
        this.color = color;
        this.colorChange.emit(color);
    }
    isColorPickerType(type) {
        return this.type === type;
    }
    ngAfterViewInit() {
        this.width = this.ref.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = function CmacsColorPickerComponent_Factory(t) { return new (t || CmacsColorPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsColorPickerComponent, selectors: [["cmacs-color-picker"]], hostAttrs: [1, "cmacs-color-picker"], inputs: { type: "type", color: "color", mobile: "mobile", basicColorList: "basicColorList" }, outputs: { colorChange: "colorChange" }, exportAs: ["cmacsColorPicker"], decls: 3, vars: 4, consts: [[4, "ngIf"], [2, "display", "inline-block", "float", "right"], ["class", "cmacs-color-picker-color-wrapper", 3, "is-mobile", "cmacs-color-picker-color-wrapper-selected", "click", 4, "ngFor", "ngForOf"], [1, "cmacs-color-picker-color-transparent-wrapper", 2, "width", "18px", "margin-right", "4px", "display", "inline-block"], [1, "cmacs-color-picker-color-wrapper", "cmacs-color-picker-color-transparent-inner-wrapper", 3, "click"], [1, "cmacs-color-picker-color-transparent"], [1, "cmacs-color-picker-color-wrapper", 3, "click"], [1, "cmacs-color-picker-color"]], template: function CmacsColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsColorPickerComponent_ng_container_0_Template, 4, 4, "ng-container", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtemplate(2, CmacsColorPickerComponent_div_2_Template, 2, 10, "div", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isColorPickerType("basicWithTransparent"));
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("width", ctx.isColorPickerType("basicWithTransparent") ? ctx.width - 22 + "px" : "inherit");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.basicColorList);
        } }, dependencies: [i1.NgForOf, i1.NgIf], styles: [".cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color:after{position:relative;display:table;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%,-50%);opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \";left:2.8px;top:4.8px;width:3px;height:6px}.cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color.is-white:after{border:2px solid #dee0e5;border-top:0;border-left:0}.cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:solid 1px;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile){cursor:pointer;background-color:#dee0e5}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:solid 1px #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent:before{font-size:14px}\n", "cmacs-color-picker{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsColorPickerComponent.prototype, "mobile", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsColorPickerComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-color-picker', exportAs: 'cmacsColorPicker', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'cmacs-color-picker'
                }, template: "<ng-container *ngIf=\"isColorPickerType('basicWithTransparent')\"\r\n>\r\n  <div style=\"width: 18px; margin-right: 4px; display: inline-block\" class=\"cmacs-color-picker-color-transparent-wrapper\">\r\n    <div\r\n      class=\"cmacs-color-picker-color-wrapper cmacs-color-picker-color-transparent-inner-wrapper\"\r\n      [class.cmacs-color-picker-color-wrapper-selected]=\"'transparent' === color\"\r\n      [class.is-mobile]=\"mobile\"\r\n      (click)=\"setColor('transparent')\"\r\n    >\r\n      <div class=\"cmacs-color-picker-color-transparent\"></div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n\r\n<div\r\n  style=\"display: inline-block; float: right\"\r\n  [style.width]=\"isColorPickerType('basicWithTransparent') ? width - 22 + 'px' : 'inherit'\"\r\n>\r\n  <div class=\"cmacs-color-picker-color-wrapper\"\r\n       *ngFor=\"let $color of basicColorList\"\r\n       [class.is-mobile]=\"mobile\"\r\n       [class.cmacs-color-picker-color-wrapper-selected]=\"$color === color\"\r\n       (click)=\"setColor($color)\"\r\n  >\r\n    <div class=\"cmacs-color-picker-color\"\r\n         [style.backgroundColor]=\"$color\"\r\n         [class.is-white]=\"$color === '#ffffff'\"\r\n         [style.borderColor]=\"$color === '#ffffff' ? '#dee0e5' : 'transparent'\"\r\n    ></div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color:after{position:relative;display:table;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%,-50%);opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \";left:2.8px;top:4.8px;width:3px;height:6px}.cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color.is-white:after{border:2px solid #dee0e5;border-top:0;border-left:0}.cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:solid 1px;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile){cursor:pointer;background-color:#dee0e5}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:solid 1px #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent:before{font-size:14px}\n", "cmacs-color-picker{display:block}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], color: [{
            type: Input
        }], mobile: [{
            type: Input
        }], colorChange: [{
            type: Output
        }], basicColorList: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztJQ1Z2RCw2QkFDQztJQUNDLDhCQUF3SCxhQUFBO0lBS3BILDRLQUFTLGVBQUEsZ0JBQVMsYUFBYSxDQUFDLENBQUEsSUFBQztJQUVqQyx5QkFBd0Q7SUFDMUQsaUJBQU0sRUFBQTtJQUVWLDBCQUFlOzs7SUFQVCxlQUEyRTtJQUEzRSwyRkFBMkUsNEJBQUE7Ozs7SUFhL0UsOEJBS0M7SUFESSxnT0FBUyxlQUFBLDBCQUFnQixDQUFBLElBQUM7SUFFN0IseUJBSU87SUFDVCxpQkFBTTs7OztJQVRELDBDQUEwQix5RUFBQTtJQUt4QixlQUFnQztJQUFoQyw2Q0FBZ0MscUVBQUE7SUFDaEMsbURBQXVDOztBREloRCxNQUFNLE9BQU8seUJBQXlCO0lBeUJwQyxZQUFvQixHQUFlLEVBQ2YsR0FBc0I7UUFEdEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEJqQyxTQUFJLEdBQXNDLE9BQU8sQ0FBQztRQUVsQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVuRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ1QsbUJBQWMsR0FBYztZQUNuQyxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7SUFHMkMsQ0FBQztJQUU5QyxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzBGQXhDVSx5QkFBeUI7b0VBQXpCLHlCQUF5QjtZQzlCdEMsNEZBWWU7WUFFZiw4QkFHQztZQUNDLDJFQVdNO1lBQ1IsaUJBQU07O1lBOUJTLG9FQUErQztZQWdCNUQsZUFBeUY7WUFBekYsMEdBQXlGO1lBR2pFLGVBQWlCO1lBQWpCLDRDQUFpQjs7O0FEZWhCO0lBQWYsWUFBWSxFQUFFO3lEQUFnQjt1RkFKN0IseUJBQXlCO2NBbEJyQyxTQUFTOzJCQUNFLG9CQUFvQixZQUNwQixrQkFBa0IsaUJBRWIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxRQUN6QztvQkFDSixLQUFLLEVBQUUsb0JBQW9CO2lCQUM1Qjs2RkFZUSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU07WUFHRSxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgT3V0cHV0LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29sb3ItcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29sb3JQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdjbWFjcy1jb2xvci1waWNrZXInXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jb2xvci1waWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgOiAnYmFzaWMnIHwgJ2Jhc2ljV2l0aFRyYW5zcGFyZW50JyA9ICdiYXNpYyc7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbW9iaWxlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGNvbG9yQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGJhc2ljQ29sb3JMaXN0OiBzdHJpbmcgW10gPSBbXHJcbiAgICAnIzAwMDAwMCcsXHJcbiAgICAnI2ZmZmZmZicsXHJcbiAgICAnI2NjMjIyOScsXHJcbiAgICAnI2Y2NTAzYycsXHJcbiAgICAnI2ZmYTIzNCcsXHJcbiAgICAnI2ZmZjEwMCcsXHJcbiAgICAnIzAwY2U3ZCcsXHJcbiAgICAnIzAwOWZlMycsXHJcbiAgICAnIzJhN2NmZicsXHJcbiAgICAnI2ExMDBjZCcsXHJcbiAgICAnI2NmMTM4NCcsXHJcbiAgICAnIzc5NGMxOCcsXHJcbiAgICAnI2JlYzRjZCcsXHJcbiAgICAnIzY1NmM3OSdcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29sb3JDaGFuZ2UuZW1pdChjb2xvcik7XHJcbiAgfVxyXG5cclxuICBpc0NvbG9yUGlja2VyVHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NvbG9yUGlja2VyVHlwZSgnYmFzaWNXaXRoVHJhbnNwYXJlbnQnKVwiXHJcbj5cclxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE4cHg7IG1hcmdpbi1yaWdodDogNHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcIiBjbGFzcz1cImNtYWNzLWNvbG9yLXBpY2tlci1jb2xvci10cmFuc3BhcmVudC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXdyYXBwZXIgY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXRyYW5zcGFyZW50LWlubmVyLXdyYXBwZXJcIlxyXG4gICAgICBbY2xhc3MuY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXdyYXBwZXItc2VsZWN0ZWRdPVwiJ3RyYW5zcGFyZW50JyA9PT0gY29sb3JcIlxyXG4gICAgICBbY2xhc3MuaXMtbW9iaWxlXT1cIm1vYmlsZVwiXHJcbiAgICAgIChjbGljayk9XCJzZXRDb2xvcigndHJhbnNwYXJlbnQnKVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb2xvci1waWNrZXItY29sb3ItdHJhbnNwYXJlbnRcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxkaXZcclxuICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgZmxvYXQ6IHJpZ2h0XCJcclxuICBbc3R5bGUud2lkdGhdPVwiaXNDb2xvclBpY2tlclR5cGUoJ2Jhc2ljV2l0aFRyYW5zcGFyZW50JykgPyB3aWR0aCAtIDIyICsgJ3B4JyA6ICdpbmhlcml0J1wiXHJcbj5cclxuICA8ZGl2IGNsYXNzPVwiY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXdyYXBwZXJcIlxyXG4gICAgICAgKm5nRm9yPVwibGV0ICRjb2xvciBvZiBiYXNpY0NvbG9yTGlzdFwiXHJcbiAgICAgICBbY2xhc3MuaXMtbW9iaWxlXT1cIm1vYmlsZVwiXHJcbiAgICAgICBbY2xhc3MuY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXdyYXBwZXItc2VsZWN0ZWRdPVwiJGNvbG9yID09PSBjb2xvclwiXHJcbiAgICAgICAoY2xpY2spPVwic2V0Q29sb3IoJGNvbG9yKVwiXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbG9yLXBpY2tlci1jb2xvclwiXHJcbiAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiJGNvbG9yXCJcclxuICAgICAgICAgW2NsYXNzLmlzLXdoaXRlXT1cIiRjb2xvciA9PT0gJyNmZmZmZmYnXCJcclxuICAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cIiRjb2xvciA9PT0gJyNmZmZmZmYnID8gJyNkZWUwZTUnIDogJ3RyYW5zcGFyZW50J1wiXHJcbiAgICA+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19