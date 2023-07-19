import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
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
    } }, directives: [i1.NgIf, i2.NzStringTemplateOutletDirective], styles: [".ant-divider-vertical{height:1em}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGl2aWRlci9jbWFjcy1kaXZpZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kaXZpZGVyL2NtYWNzLWRpdmlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNGckQsNkJBQTZDO0lBQUEsWUFBVTtJQUFBLDBCQUFlOzs7SUFBekIsZUFBVTtJQUFWLGlDQUFVOzs7SUFEekQsK0JBQWtEO0lBQ2hELCtGQUFzRTtJQUN4RSxpQkFBTzs7O0lBRFUsZUFBNEI7SUFBNUIsb0RBQTRCOztBRHVCN0MsTUFBTSxPQUFPLHFCQUFxQjtJQU9oQyxZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTGhDLFNBQUksR0FBOEIsVUFBVSxDQUFDO1FBQzdDLGdCQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUN4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUdyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdELENBQUM7OzBGQVRVLHFCQUFxQjswREFBckIscUJBQXFCOzs7UUN4QmxDLHdFQUVPOztRQUZBLCtCQUFVOztBRDRCVTtJQUFmLFlBQVksRUFBRTtxREFBZ0I7QUFDZjtJQUFmLFlBQVksRUFBRTtvREFBZTt1RkFMNUIscUJBQXFCO2NBbkJqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osZ0NBQWdDLEVBQUUsdUJBQXVCO29CQUN6RCw4QkFBOEIsRUFBRSxxQkFBcUI7b0JBQ3JELCtCQUErQixFQUFFLE1BQU07b0JBQ3ZDLDJCQUEyQixFQUFFLE9BQU87b0JBQ3BDLG9DQUFvQyxFQUFFLGdDQUFnQztvQkFDdEUscUNBQXFDLEVBQUUsaUNBQWlDO29CQUN4RSxzQ0FBc0MsRUFBRSxrQ0FBa0M7b0JBQzFFLDRCQUE0QixFQUFFLFFBQVE7aUJBQ3ZDO2FBQ0Y7NkRBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ21CLEtBQUs7a0JBQTdCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRpdmlkZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NEaXZpZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZGl2aWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZGl2aWRlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLWhvcml6b250YWxdJzogYHR5cGUgPT09ICdob3Jpem9udGFsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLXZlcnRpY2FsXSc6IGB0eXBlID09PSAndmVydGljYWwnYCxcclxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItd2l0aC10ZXh0XSc6IGB0ZXh0YCxcclxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItcGxhaW5dJzogYHBsYWluYCxcclxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItd2l0aC10ZXh0LWxlZnRdJzogYHRleHQgJiYgb3JpZW50YXRpb24gPT09ICdsZWZ0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1yaWdodF0nOiBgdGV4dCAmJiBvcmllbnRhdGlvbiA9PT0gJ3JpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1jZW50ZXJdJzogYHRleHQgJiYgb3JpZW50YXRpb24gPT09ICdjZW50ZXInYCxcclxuICAgICdbY2xhc3MuYW50LWRpdmlkZXItZGFzaGVkXSc6IGBkYXNoZWRgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEaXZpZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSB0eXBlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ3ZlcnRpY2FsJztcclxuICBASW5wdXQoKSBvcmllbnRhdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICcnID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRhc2hlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBwbGFpbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWRpdmlkZXInKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxzcGFuICpuZ0lmPVwidGV4dFwiIGNsYXNzPVwiYW50LWRpdmlkZXItaW5uZXItdGV4dFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZXh0XCI+e3sgdGV4dCB9fTwvbmctY29udGFpbmVyPlxyXG48L3NwYW4+XHJcbiJdfQ==