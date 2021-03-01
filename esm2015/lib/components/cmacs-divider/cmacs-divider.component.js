import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function CmacsDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.text);
} }
function CmacsDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtemplate(1, CmacsDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.text);
} }
export class CmacsDividerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'vertical';
        this.orientation = '';
        this.dashed = false;
        this.plain = false;
        this.elementRef.nativeElement.classList.add('ant-divider');
    }
}
CmacsDividerComponent.ɵfac = function CmacsDividerComponent_Factory(t) { return new (t || CmacsDividerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsDividerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsDividerComponent, selectors: [["cmacs-divider"]], hostVars: 16, hostBindings: function CmacsDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-divider-horizontal", ctx.type === "horizontal")("ant-divider-vertical", ctx.type === "vertical")("ant-divider-with-text", ctx.text)("ant-divider-plain", ctx.plain)("ant-divider-with-text-left", ctx.text && ctx.orientation === "left")("ant-divider-with-text-right", ctx.text && ctx.orientation === "right")("ant-divider-with-text-center", ctx.text && ctx.orientation === "center")("ant-divider-dashed", ctx.dashed);
    } }, inputs: { text: "text", type: "type", orientation: "orientation", dashed: "dashed", plain: "plain" }, exportAs: ["cmacsDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function CmacsDividerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.text);
    } }, directives: [i1.NgIf], styles: [".ant-divider-vertical{height:1em!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsDividerComponent.prototype, "dashed", void 0);
__decorate([
    InputBoolean()
], CmacsDividerComponent.prototype, "plain", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDividerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-divider',
                exportAs: 'cmacsDivider',
                templateUrl: './cmacs-divider.component.html',
                styleUrls: ['./cmacs-divider.component.css'],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.ant-divider-horizontal]': `type === 'horizontal'`,
                    '[class.ant-divider-vertical]': `type === 'vertical'`,
                    '[class.ant-divider-with-text]': `text`,
                    '[class.ant-divider-plain]': `plain`,
                    '[class.ant-divider-with-text-left]': `text && orientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `text && orientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `text && orientation === 'center'`,
                    '[class.ant-divider-dashed]': `dashed`
                }
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { text: [{
            type: Input
        }], type: [{
            type: Input
        }], orientation: [{
            type: Input
        }], dashed: [{
            type: Input
        }], plain: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGl2aWRlci9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kaXZpZGVyL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ0ZyRCw2QkFBNkM7SUFBQSxZQUFVO0lBQUEsMEJBQWU7OztJQUF6QixlQUFVO0lBQVYsaUNBQVU7OztJQUR6RCwrQkFBa0Q7SUFDaEQsK0ZBQXNFO0lBQ3hFLGlCQUFPOzs7SUFEVSxlQUE0QjtJQUE1QixvREFBNEI7O0FEdUI3QyxNQUFNLE9BQU8scUJBQXFCO0lBT2hDLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFMaEMsU0FBSSxHQUE4QixVQUFVLENBQUM7UUFDN0MsZ0JBQVcsR0FBMEIsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR3JDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7MEZBVFUscUJBQXFCOzBEQUFyQixxQkFBcUI7OztRQ3hCbEMsd0VBRU87O1FBRkEsK0JBQVU7O0FENEJVO0lBQWYsWUFBWSxFQUFFO3FEQUFnQjtBQUNmO0lBQWYsWUFBWSxFQUFFO29EQUFlO3VGQUw1QixxQkFBcUI7Y0FuQmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixnQ0FBZ0MsRUFBRSx1QkFBdUI7b0JBQ3pELDhCQUE4QixFQUFFLHFCQUFxQjtvQkFDckQsK0JBQStCLEVBQUUsTUFBTTtvQkFDdkMsMkJBQTJCLEVBQUUsT0FBTztvQkFDcEMsb0NBQW9DLEVBQUUsZ0NBQWdDO29CQUN0RSxxQ0FBcUMsRUFBRSxpQ0FBaUM7b0JBQ3hFLHNDQUFzQyxFQUFFLGtDQUFrQztvQkFDMUUsNEJBQTRCLEVBQUUsUUFBUTtpQkFDdkM7YUFDRjs2REFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsS0FBSztrQkFBN0IsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGl2aWRlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RpdmlkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLWhvcml6b250YWxdJzogYHR5cGUgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZGl2aWRlci12ZXJ0aWNhbF0nOiBgdHlwZSA9PT0gJ3ZlcnRpY2FsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZGl2aWRlci13aXRoLXRleHRdJzogYHRleHRgLFxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItcGxhaW5dJzogYHBsYWluYCxcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1sZWZ0XSc6IGB0ZXh0ICYmIG9yaWVudGF0aW9uID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItd2l0aC10ZXh0LXJpZ2h0XSc6IGB0ZXh0ICYmIG9yaWVudGF0aW9uID09PSAncmlnaHQnYCxcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1jZW50ZXJdJzogYHRleHQgJiYgb3JpZW50YXRpb24gPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLWRhc2hlZF0nOiBgZGFzaGVkYFxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RpdmlkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiAnbGVmdCcgfCAncmlnaHQnIHwgJycgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGFzaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHBsYWluID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtZGl2aWRlcicpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPHNwYW4gKm5nSWY9XCJ0ZXh0XCIgY2xhc3M9XCJhbnQtZGl2aWRlci1pbm5lci10ZXh0XCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRleHRcIj57eyB0ZXh0IH19PC9uZy1jb250YWluZXI+XHJcbjwvc3Bhbj5cclxuIl19