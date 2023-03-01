import { Component, ElementRef, HostListener, Input, ViewChild, } from '@angular/core';
import { FormControl } from "@angular/forms";
import { slideAlertMotion } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-divider/cmacs-divider.component";
import * as i2 from "../cmacs-input/cmacs-input.directive";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@angular/forms";
const _c0 = ["textarea"];
export class CmacsOpenTextareaComponent {
    constructor() {
        this.formControlCustom = new FormControl('', []);
        this.width = 250;
        this.placeholder = '';
        this.allowEdition = false;
        this.enableDivider = true;
    }
    onClick(event) {
        if (this.textarea && event.target !== this.textarea.nativeElement) {
            this.allowEdition = false;
            this.enableDivider = false;
        }
    }
    isEnabled() {
        if (this.allowEdition || !this.formControlCustom.value) {
            this.allowEdition = true;
            return true;
        }
        this.allowEdition = false;
        return false;
    }
    isTextEnabled() {
        return !this.allowEdition && this.formControlCustom.value;
    }
    startEdition($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        this.allowEdition = true;
    }
    ngAfterViewInit() {
        this.enableDivider = this.allowEdition;
    }
}
CmacsOpenTextareaComponent.ɵfac = function CmacsOpenTextareaComponent_Factory(t) { return new (t || CmacsOpenTextareaComponent)(); };
CmacsOpenTextareaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOpenTextareaComponent, selectors: [["cmacs-open-textarea"]], viewQuery: function CmacsOpenTextareaComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textarea = _t.first);
    } }, hostBindings: function CmacsOpenTextareaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsOpenTextareaComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { formControlCustom: "formControlCustom", width: "width", placeholder: "placeholder" }, exportAs: ["cmacsOpenTextarea"], decls: 5, vars: 10, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], ["cmacs-input", "", "nzAutosize", "", 1, "cmacs-textarea", 3, "opened", "placeholder", "formControl"], ["textarea", ""]], template: function CmacsOpenTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "cmacs-divider", 1);
        i0.ɵɵelementStart(2, "textarea", 2, 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("opacity", ctx.enableDivider || !ctx.formControlCustom.value);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.width, "px");
        i0.ɵɵproperty("opened", true)("placeholder", ctx.placeholder)("formControl", ctx.formControlCustom);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("                 <span *ngIf=\"isTextEnabled()\" (click)=\"startEdition($event)\">\n                       ", ctx.formControlCustom.value, "\n                 </span>\n    ");
    } }, directives: [i1.CmacsDividerComponent, i2.CmacsInputDirective, i3.NzAutosizeDirective, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective], styles: [".cmacs-textarea[_ngcontent-%COMP%]{padding:5px 0 0;overflow:hidden;font-size:12px;min-height:31px;line-height:1.83;font-family:Roboto-Regular}.cmacs-text-area-span[_ngcontent-%COMP%]:after{content:\"\"}.cmacs-text-area-span[_ngcontent-%COMP%]:hover:after{font-family:UISmall!important;content:\"\\e99f\";font-size:19px;position:absolute;margin-top:-3px;margin-left:5px;color:#2a7cff}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:20px;margin-top:2px}.cmacs-input-opened.ant-input[_ngcontent-%COMP%]:enabled:hover, .cmacs-input-opened.ant-input[_ngcontent-%COMP%]:focus{box-shadow:none;border:none}textarea.cmacs-input-opened[_ngcontent-%COMP%]{border:none;resize:none}", "cmacs-open-textarea[_ngcontent-%COMP%] {\n        display: block;\n      }"], data: { animation: [slideAlertMotion] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenTextareaComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-open-textarea',
                exportAs: 'cmacsOpenTextarea',
                animations: [slideAlertMotion],
                templateUrl: './cmacs-open-textarea.component.html',
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-open-textarea.component.css'],
                styles: [
                    `
      cmacs-open-textarea {
        display: block;
      }
    `
                ]
            }]
    }], function () { return []; }, { formControlCustom: [{
            type: Input
        }], width: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], textarea: [{
            type: ViewChild,
            args: ['textarea', { read: ElementRef }]
        }], onClick: [{
            type: HostListener,
            args: ['window:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi10ZXh0YXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtb3Blbi10ZXh0YXJlYS9jbWFjcy1vcGVuLXRleHRhcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLXRleHRhcmVhL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFBRSxVQUFVLEVBQ1AsWUFBWSxFQUMxQixLQUFLLEVBSVEsU0FBUyxHQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFpQmhFLE1BQU0sT0FBTywwQkFBMEI7SUFTckM7UUFQUyxzQkFBaUIsR0FBZ0IsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7SUFHTCxDQUFDO0lBR2pCLE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWE7UUFDeEIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLENBQUM7O29HQXhDVSwwQkFBMEI7K0RBQTFCLDBCQUEwQjsrQkFPUCxVQUFVOzs7Ozs2R0FQN0IsbUJBQWU7O1FDNUI1Qiw4QkFFbUM7UUFDakMsbUNBQzJGO1FBRXpGLHNDQUl1RDtRQUMxQyxZQUdiO1FBQUEsaUJBQVc7UUFtQmYsaUJBQU07O1FBaENELHdDQUF3QjtRQUdaLGVBQTJEO1FBQTNELDRFQUEyRDtRQUc5RCxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFDZCw2QkFBZSxnQ0FBQSxzQ0FBQTtRQUd0QixlQUdiO1FBSGEscU1BR2I7MDdCREVVLENBQUMsZ0JBQWdCLENBQUM7dUZBWW5CLDBCQUEwQjtjQWZ0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNsRCxNQUFNLEVBQUU7b0JBQ047Ozs7S0FJQztpQkFDRjthQUNGO3NDQUdVLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFHcUMsUUFBUTtrQkFBbEQsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBS3pDLE9BQU87a0JBRE4sWUFBWTttQkFBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgc2xpZGVBbGVydE1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcGVuLXRleHRhcmVhJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3BlblRleHRhcmVhJyxcclxuICBhbmltYXRpb25zOiBbc2xpZGVBbGVydE1vdGlvbl0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wZW4tdGV4dGFyZWEuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1vcGVuLXRleHRhcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3BlblRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Db250cm9sQ3VzdG9tOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW10pO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIGVuYWJsZURpdmlkZXIgPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoJ3RleHRhcmVhJywge3JlYWQ6IEVsZW1lbnRSZWZ9KSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMudGV4dGFyZWEgJiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLnRleHRhcmVhLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5lbmFibGVEaXZpZGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VuYWJsZWQoKSB7XHJcbiAgICBpZiAodGhpcy5hbGxvd0VkaXRpb24gfHwgIXRoaXMuZm9ybUNvbnRyb2xDdXN0b20udmFsdWUpIHtcclxuICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1RleHRFbmFibGVkKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLmFsbG93RWRpdGlvbiAmJiB0aGlzLmZvcm1Db250cm9sQ3VzdG9tLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0aW9uKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lbmFibGVEaXZpZGVyID0gdGhpcy5hbGxvd0VkaXRpb247XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYS1vcGVuZWQtd3JhcHBlclwiXHJcbiAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCJcclxuICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O1wiPlxyXG4gIDxjbWFjcy1kaXZpZGVyIGNsYXNzPVwiY21hY3Mtb3Blbi10ZXh0YXJlYS1kaXZpZGVyXCJcclxuICAgICAgICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJlbmFibGVEaXZpZGVyIHx8ICFmb3JtQ29udHJvbEN1c3RvbS52YWx1ZVwiPjwvY21hY3MtZGl2aWRlcj5cclxuXHJcbiAgICA8dGV4dGFyZWEgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYVwiIFxyXG4gICAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFxyXG4gICAgICAgICAgICAgICN0ZXh0YXJlYSBbb3BlbmVkXT1cInRydWVcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sQ3VzdG9tXCIgbnpBdXRvc2l6ZT5cclxuICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzVGV4dEVuYWJsZWQoKVwiIChjbGljayk9XCJzdGFydEVkaXRpb24oJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt7Zm9ybUNvbnRyb2xDdXN0b20udmFsdWV9fVxyXG4gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgIDwvdGV4dGFyZWE+XHJcbiAgICBcclxuICA8IS0tIDx0ZXh0YXJlYSBjbGFzcz1cImNtYWNzLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXHJcbiAgICAgICAgICAgICN0ZXh0YXJlYSBbb3BlbmVkXT1cInRydWVcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xDdXN0b21cIlxyXG4gICAgICAgICAgICBuekF1dG9zaXplPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuICA8c3BhbiAoY2xpY2spPVwic3RhcnRFZGl0aW9uKCRldmVudClcIlxyXG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiXHJcbiAgICAgICAgKm5nSWY9XCJpc1RleHRFbmFibGVkKClcIlxyXG4gICAgICAgIChtb3VzZW92ZXIpPVwiZW5hYmxlRGl2aWRlciA9IHRydWU7XCJcclxuICAgICAgICAobW91c2VvdXQpPVwiZW5hYmxlRGl2aWRlciA9IGZhbHNlO1wiXHJcbiAgICAgICAgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYSBjbWFjcy10ZXh0LWFyZWEtc3BhblwiPlxyXG4gICAgICB7e2Zvcm1Db250cm9sQ3VzdG9tLnZhbHVlfX1cclxuICA8L3NwYW4+IC0tPlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==