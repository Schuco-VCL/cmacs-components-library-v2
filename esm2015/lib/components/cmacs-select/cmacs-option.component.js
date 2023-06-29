import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
function CmacsOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class CmacsOptionComponent {
    constructor() {
        this.changes = new Subject();
        this.visible = false;
        this.nzDisabled = false;
        this.nzCustomContent = false;
    }
    ngOnChanges() {
        this.changes.next();
    }
}
CmacsOptionComponent.ɵfac = function CmacsOptionComponent_Factory(t) { return new (t || CmacsOptionComponent)(); };
CmacsOptionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOptionComponent, selectors: [["cmacs-option"]], viewQuery: function CmacsOptionComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(TemplateRef, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { nzLabel: ["label", "nzLabel"], divider: "divider", extendedData: "extendedData", nzValue: ["value", "nzValue"], visible: "visible", nzDisabled: ["disabled", "nzDisabled"], nzCustomContent: ["customContent", "nzCustomContent"] }, exportAs: ["cmacsOption"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsOptionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-option',
                exportAs: 'cmacsOption',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                templateUrl: './cmacs-option.component.html'
            }]
    }], null, { template: [{
            type: ViewChild,
            args: [TemplateRef]
        }], nzLabel: [{
            type: Input,
            args: ['label']
        }], divider: [{
            type: Input,
            args: ['divider']
        }], extendedData: [{
            type: Input,
            args: ['extendedData']
        }], nzValue: [{
            type: Input,
            args: ['value']
        }], visible: [{
            type: Input,
            args: ['visible']
        }], nzDisabled: [{
            type: Input,
            args: ['disabled']
        }], nzCustomContent: [{
            type: Input,
            args: ['customContent']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQ2Q3QixrQkFBeUI7OztBRHlCM0IsTUFBTSxPQUFPLG9CQUFvQjtJQVJqQztRQVVFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUU4sWUFBTyxHQUFRLEtBQUssQ0FBQztRQUNKLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztLQUtqRTtJQUhDLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O3dGQWhCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjt1QkFHcEIsV0FBVzs7Ozs7O1FDN0J4QixrRkFFYzs7QURtQ3VCO0lBQWYsWUFBWSxFQUFFO3dEQUFvQjtBQUNkO0lBQWYsWUFBWSxFQUFFOzZEQUF5Qjt1RkFackQsb0JBQW9CO2NBUmhDLFNBQVM7ZUFBQztnQkFDWCwrQ0FBK0M7Z0JBQzdDLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDO2dCQUl5QixRQUFRO2tCQUEvQixTQUFTO21CQUFDLFdBQVc7WUFFTixPQUFPO2tCQUF0QixLQUFLO21CQUFDLE9BQU87WUFDSSxPQUFPO2tCQUF4QixLQUFLO21CQUFDLFNBQVM7WUFDTyxZQUFZO2tCQUFsQyxLQUFLO21CQUFDLGNBQWM7WUFFTCxPQUFPO2tCQUF0QixLQUFLO21CQUFDLE9BQU87WUFDSSxPQUFPO2tCQUF4QixLQUFLO21CQUFDLFNBQVM7WUFDbUIsVUFBVTtrQkFBNUMsS0FBSzttQkFBQyxVQUFVO1lBQ3VCLGVBQWU7a0JBQXRELEtBQUs7bUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3QoKTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbnB1dC1yZW5hbWVcclxuICBASW5wdXQoJ2xhYmVsJykgbnpMYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgnZGl2aWRlcicpIGRpdmlkZXI6IHN0cmluZztcclxuICBASW5wdXQoJ2V4dGVuZGVkRGF0YScpIGV4dGVuZGVkRGF0YTogc3RyaW5nO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoJ3ZhbHVlJykgbnpWYWx1ZTogYW55O1xyXG4gIEBJbnB1dCgndmlzaWJsZScpIHZpc2libGU6IGFueSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnZGlzYWJsZWQnKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgnY3VzdG9tQ29udGVudCcpIEBJbnB1dEJvb2xlYW4oKSBuekN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==