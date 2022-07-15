import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsColorPickerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵlistener("click", function CmacsColorPickerComponent_ng_container_0_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.setColor("transparent"); });
    i0.ɵɵelement(3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", "transparent" === ctx_r0.color)("is-mobile", ctx_r0.mobile);
} }
function CmacsColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function CmacsColorPickerComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const $color_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setColor($color_r4); });
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
}
CmacsColorPickerComponent.ɵfac = function CmacsColorPickerComponent_Factory(t) { return new (t || CmacsColorPickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsColorPickerComponent, selectors: [["cmacs-color-picker"]], hostAttrs: [1, "cmacs-color-picker"], inputs: { type: "type", color: "color", mobile: "mobile", basicColorList: "basicColorList" }, outputs: { colorChange: "colorChange" }, exportAs: ["cmacsColorPicker"], decls: 3, vars: 4, consts: [[4, "ngIf"], [2, "display", "inline-block", "float", "right"], ["class", "cmacs-color-picker-color-wrapper", 3, "is-mobile", "cmacs-color-picker-color-wrapper-selected", "click", 4, "ngFor", "ngForOf"], [1, "cmacs-color-picker-color-transparent-wrapper", 2, "width", "18px", "margin-right", "4px", "display", "inline-block"], [1, "cmacs-color-picker-color-wrapper", "cmacs-color-picker-color-transparent-inner-wrapper", 3, "click"], [1, "cmacs-color-picker-color-transparent"], [1, "cmacs-color-picker-color-wrapper", 3, "click"], [1, "cmacs-color-picker-color"]], template: function CmacsColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgIf, i1.NgForOf], styles: [".cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color:after{position:relative;display:table;border:2px solid #fff;border-top:0;border-left:0;transform:rotate(45deg) scale(1) translate(-50%,-50%);opacity:1;transition:all .2s cubic-bezier(.12,.4,.29,1.46) .1s;content:\" \";left:2.8px;top:4.8px;width:3px;height:6px}.cmacs-color-picker-color-wrapper.cmacs-color-picker-color-wrapper-selected.is-mobile .cmacs-color-picker-color.is-white:after{border:2px solid #dee0e5;border-top:0;border-left:0}.cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper-selected:not(.is-mobile),.cmacs-color-picker-color-wrapper:not(.is-mobile):hover{cursor:pointer;background-color:#dee0e5}.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected:not(.is-mobile) .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper:not(.is-mobile):hover .cmacs-color-picker-color-transparent:before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsColorPickerComponent.prototype, "mobile", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsColorPickerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-color-picker',
                exportAs: 'cmacsColorPicker',
                templateUrl: './cmacs-color-picker.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'cmacs-color-picker'
                },
                styleUrls: ['./cmacs-color-picker.component.css'],
                styles: [
                    `
      cmacs-color-picker {
        display: block;
      }
    `
                ]
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztJQ1Z2RCw2QkFDQztJQUNDLDhCQUF3SDtJQUN0SCw4QkFLQztJQURDLDRMQUFrQixhQUFhLEtBQUU7SUFFakMseUJBQXdEO0lBQzFELGlCQUFNO0lBQ1IsaUJBQU07SUFDUiwwQkFBZTs7O0lBUFQsZUFBMkU7SUFBM0UsMkZBQTJFLDRCQUFBOzs7O0lBYS9FLDhCQUtDO0lBREksa09BQTBCO0lBRTdCLHlCQUlPO0lBQ1QsaUJBQU07Ozs7SUFURCwwQ0FBMEIseUVBQUE7SUFLeEIsZUFBZ0M7SUFBaEMsNkNBQWdDLHFFQUFBO0lBQ2hDLG1EQUF1Qzs7QURJaEQsTUFBTSxPQUFPLHlCQUF5QjtJQXlCcEMsWUFBb0IsR0FBZSxFQUNmLEdBQXNCO1FBRHRCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXhCakMsU0FBSSxHQUFzQyxPQUFPLENBQUM7UUFFbEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFbkQsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNULG1CQUFjLEdBQWM7WUFDbkMsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO0lBRzJDLENBQUM7SUFFOUMsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVk7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7a0dBeENVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDOUJ0Qyw0RkFZZTtRQUVmLDhCQUdDO1FBQ0MsMkVBV007UUFDUixpQkFBTTs7UUE5QlMsb0VBQStDO1FBZ0I1RCxlQUF5RjtRQUF6RiwwR0FBeUY7UUFHakUsZUFBaUI7UUFBakIsNENBQWlCOztBRGVoQjtJQUFmLFlBQVksRUFBRTt5REFBZ0I7dUZBSjdCLHlCQUF5QjtjQWxCckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxvQkFBb0I7aUJBQzVCO2dCQUNELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOzZGQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ0ksV0FBVztrQkFBcEIsTUFBTTtZQUdFLGNBQWM7a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1jb2xvci1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb2xvclBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2NtYWNzLWNvbG9yLXBpY2tlcidcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbG9yLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWNvbG9yLXBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcclxuXHJcbiAgQElucHV0KCkgdHlwZSA6ICdiYXNpYycgfCAnYmFzaWNXaXRoVHJhbnNwYXJlbnQnID0gJ2Jhc2ljJztcclxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtb2JpbGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgYmFzaWNDb2xvckxpc3Q6IHN0cmluZyBbXSA9IFtcclxuICAgICcjMDAwMDAwJyxcclxuICAgICcjZmZmZmZmJyxcclxuICAgICcjY2MyMjI5JyxcclxuICAgICcjZjY1MDNjJyxcclxuICAgICcjZmZhMjM0JyxcclxuICAgICcjZmZmMTAwJyxcclxuICAgICcjMDBjZTdkJyxcclxuICAgICcjMDA5ZmUzJyxcclxuICAgICcjMmE3Y2ZmJyxcclxuICAgICcjYTEwMGNkJyxcclxuICAgICcjY2YxMzg0JyxcclxuICAgICcjNzk0YzE4JyxcclxuICAgICcjYmVjNGNkJyxcclxuICAgICcjNjU2Yzc5J1xyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGlzQ29sb3JQaWNrZXJUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ29sb3JQaWNrZXJUeXBlKCdiYXNpY1dpdGhUcmFuc3BhcmVudCcpXCJcclxuPlxyXG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMThweDsgbWFyZ2luLXJpZ2h0OiA0cHg7IGRpc3BsYXk6IGlubGluZS1ibG9ja1wiIGNsYXNzPVwiY21hY3MtY29sb3ItcGlja2VyLWNvbG9yLXRyYW5zcGFyZW50LXdyYXBwZXJcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJjbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlciBjbWFjcy1jb2xvci1waWNrZXItY29sb3ItdHJhbnNwYXJlbnQtaW5uZXItd3JhcHBlclwiXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlci1zZWxlY3RlZF09XCIndHJhbnNwYXJlbnQnID09PSBjb2xvclwiXHJcbiAgICAgIFtjbGFzcy5pcy1tb2JpbGVdPVwibW9iaWxlXCJcclxuICAgICAgKGNsaWNrKT1cInNldENvbG9yKCd0cmFuc3BhcmVudCcpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbG9yLXBpY2tlci1jb2xvci10cmFuc3BhcmVudFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPGRpdlxyXG4gIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHRcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJpc0NvbG9yUGlja2VyVHlwZSgnYmFzaWNXaXRoVHJhbnNwYXJlbnQnKSA/IHdpZHRoIC0gMjIgKyAncHgnIDogJ2luaGVyaXQnXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlclwiXHJcbiAgICAgICAqbmdGb3I9XCJsZXQgJGNvbG9yIG9mIGJhc2ljQ29sb3JMaXN0XCJcclxuICAgICAgIFtjbGFzcy5pcy1tb2JpbGVdPVwibW9iaWxlXCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlci1zZWxlY3RlZF09XCIkY29sb3IgPT09IGNvbG9yXCJcclxuICAgICAgIChjbGljayk9XCJzZXRDb2xvcigkY29sb3IpXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29sb3ItcGlja2VyLWNvbG9yXCJcclxuICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCIkY29sb3JcIlxyXG4gICAgICAgICBbY2xhc3MuaXMtd2hpdGVdPVwiJGNvbG9yID09PSAnI2ZmZmZmZidcIlxyXG4gICAgICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiJGNvbG9yID09PSAnI2ZmZmZmZicgPyAnI2RlZTBlNScgOiAndHJhbnNwYXJlbnQnXCJcclxuICAgID48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=