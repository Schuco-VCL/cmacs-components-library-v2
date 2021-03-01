import { ChangeDetectionStrategy, Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
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
    i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", "transparent" === ctx_r0.color);
} }
function CmacsColorPickerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("click", function CmacsColorPickerComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const $color_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.setColor($color_r4); });
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const $color_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-color-picker-color-wrapper-selected", $color_r4 === ctx_r1.color);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", $color_r4)("border-color", $color_r4 === "#ffffff" ? "#dee0e5" : "transparent");
} }
export class CmacsColorPickerComponent {
    constructor(ref, cdr) {
        this.ref = ref;
        this.cdr = cdr;
        this.type = 'basic';
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
CmacsColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsColorPickerComponent, selectors: [["cmacs-color-picker"]], hostAttrs: [1, "cmacs-color-picker"], inputs: { type: "type", color: "color" }, outputs: { colorChange: "colorChange" }, exportAs: ["cmacsColorPicker"], decls: 3, vars: 4, consts: [[4, "ngIf"], [2, "display", "inline-block", "float", "right"], ["class", "cmacs-color-picker-color-wrapper", 3, "cmacs-color-picker-color-wrapper-selected", "click", 4, "ngFor", "ngForOf"], [2, "width", "18px", "margin-right", "4px", "display", "inline-block"], [1, "cmacs-color-picker-color-wrapper", 3, "click"], [1, "cmacs-color-picker-color-transparent"], [1, "cmacs-color-picker-color"]], template: function CmacsColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsColorPickerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsColorPickerComponent_div_2_Template, 2, 6, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isColorPickerType("basicWithTransparent"));
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.isColorPickerType("basicWithTransparent") ? ctx.width - 22 + "px" : "inherit");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.basicColorList);
    } }, directives: [i1.NgIf, i1.NgForOf], styles: [".cmacs-color-picker-color{width:12px;height:12px;border-radius:100px;border:1px solid;margin:0 auto}.cmacs-color-picker-color-wrapper{width:18px;height:18px;border-radius:100px;background-color:transparent;padding-top:3px;display:inline-block;transition:all .3s}.cmacs-color-picker-color-wrapper-selected,.cmacs-color-picker-color-wrapper:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent{border:none}.cmacs-color-picker-color-transparent{width:12px;height:12px;border-radius:100px;border:1px solid #dee0e5;margin:0 auto;background-color:#dee0e5;overflow:hidden}.cmacs-color-picker-color-transparent:before{content:\"/\";font-size:12px;color:#f6503c;transform:rotate(20deg);display:block;position:relative;top:-3px;left:3px}.cmacs-color-picker-color-wrapper-selected .cmacs-color-picker-color-transparent:before,.cmacs-color-picker-color-wrapper:hover .cmacs-color-picker-color-transparent:before{font-size:14px}", "\n      cmacs-color-picker {\n        display: block;\n      }\n    "], encapsulation: 2, changeDetection: 0 });
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
        }], colorChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb2xvci1waWNrZXIvY21hY3MtY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNUdkIsNkJBQ0M7SUFDQyw4QkFBbUU7SUFDakUsOEJBSUM7SUFEQyw0TEFBa0IsYUFBYSxLQUFFO0lBRWpDLHlCQUF3RDtJQUMxRCxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsMEJBQWU7OztJQU5ULGVBQTJFO0lBQTNFLDJGQUEyRTs7OztJQVkvRSw4QkFJQztJQURJLGtPQUEwQjtJQUU3Qix5QkFHTztJQUNULGlCQUFNOzs7O0lBUEQsdUZBQW9FO0lBSWxFLGVBQWdDO0lBQWhDLDZDQUFnQyxxRUFBQTs7QURNekMsTUFBTSxPQUFPLHlCQUF5QjtJQXdCcEMsWUFBb0IsR0FBZSxFQUNmLEdBQXNCO1FBRHRCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZCakMsU0FBSSxHQUFzQyxPQUFPLENBQUM7UUFFakQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRW5ELFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsbUJBQWMsR0FBYztZQUMxQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7SUFHMkMsQ0FBQztJQUU5QyxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOztrR0F2Q1UseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUM3QnRDLDRGQVdlO1FBRWYsOEJBR0M7UUFDQywwRUFTTTtRQUNSLGlCQUFNOztRQTNCUyxvRUFBK0M7UUFlNUQsZUFBeUY7UUFBekYsMEdBQXlGO1FBR2pFLGVBQWlCO1FBQWpCLDRDQUFpQjs7dUZEVzlCLHlCQUF5QjtjQWxCckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxvQkFBb0I7aUJBQzVCO2dCQUNELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRCxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGOzZGQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLFdBQVc7a0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBPdXRwdXQsXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29sb3ItcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29sb3JQaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdjbWFjcy1jb2xvci1waWNrZXInXHJcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1jb2xvci1waWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1jb2xvci1waWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb2xvclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgOiAnYmFzaWMnIHwgJ2Jhc2ljV2l0aFRyYW5zcGFyZW50JyA9ICdiYXNpYyc7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcclxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgYmFzaWNDb2xvckxpc3Q6IHN0cmluZyBbXSA9IFtcclxuICAgICcjMDAwMDAwJyxcclxuICAgICcjZmZmZmZmJyxcclxuICAgICcjY2MyMjI5JyxcclxuICAgICcjZjY1MDNjJyxcclxuICAgICcjZmZhMjM0JyxcclxuICAgICcjZmZmMTAwJyxcclxuICAgICcjMDBjZTdkJyxcclxuICAgICcjMDA5ZmUzJyxcclxuICAgICcjMmE3Y2ZmJyxcclxuICAgICcjYTEwMGNkJyxcclxuICAgICcjY2YxMzg0JyxcclxuICAgICcjNzk0YzE4JyxcclxuICAgICcjYmVjNGNkJyxcclxuICAgICcjNjU2Yzc5J1xyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgc2V0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb2xvckNoYW5nZS5lbWl0KGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGlzQ29sb3JQaWNrZXJUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ29sb3JQaWNrZXJUeXBlKCdiYXNpY1dpdGhUcmFuc3BhcmVudCcpXCJcclxuPlxyXG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMThweDsgbWFyZ2luLXJpZ2h0OiA0cHg7IGRpc3BsYXk6IGlubGluZS1ibG9ja1wiPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImNtYWNzLWNvbG9yLXBpY2tlci1jb2xvci13cmFwcGVyXCJcclxuICAgICAgW2NsYXNzLmNtYWNzLWNvbG9yLXBpY2tlci1jb2xvci13cmFwcGVyLXNlbGVjdGVkXT1cIid0cmFuc3BhcmVudCcgPT09IGNvbG9yXCJcclxuICAgICAgKGNsaWNrKT1cInNldENvbG9yKCd0cmFuc3BhcmVudCcpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbG9yLXBpY2tlci1jb2xvci10cmFuc3BhcmVudFwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPGRpdlxyXG4gIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbG9hdDogcmlnaHRcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJpc0NvbG9yUGlja2VyVHlwZSgnYmFzaWNXaXRoVHJhbnNwYXJlbnQnKSA/IHdpZHRoIC0gMjIgKyAncHgnIDogJ2luaGVyaXQnXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlclwiXHJcbiAgICAgICAqbmdGb3I9XCJsZXQgJGNvbG9yIG9mIGJhc2ljQ29sb3JMaXN0XCJcclxuICAgICAgIFtjbGFzcy5jbWFjcy1jb2xvci1waWNrZXItY29sb3Itd3JhcHBlci1zZWxlY3RlZF09XCIkY29sb3IgPT09IGNvbG9yXCJcclxuICAgICAgIChjbGljayk9XCJzZXRDb2xvcigkY29sb3IpXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MtY29sb3ItcGlja2VyLWNvbG9yXCJcclxuICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCIkY29sb3JcIlxyXG4gICAgICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiJGNvbG9yID09PSAnI2ZmZmZmZic/ICcjZGVlMGU1JyA6ICd0cmFuc3BhcmVudCdcIlxyXG4gICAgPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==