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
        this.changes.next(true);
    }
    static { this.ɵfac = function CmacsOptionComponent_Factory(t) { return new (t || CmacsOptionComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOptionComponent, selectors: [["cmacs-option"]], viewQuery: function CmacsOptionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, inputs: { nzLabel: ["label", "nzLabel"], divider: "divider", extendedData: "extendedData", nzValue: ["value", "nzValue"], visible: "visible", nzDisabled: ["disabled", "nzDisabled"], nzCustomContent: ["customContent", "nzCustomContent"] }, exportAs: ["cmacsOption"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean()
], CmacsOptionComponent.prototype, "nzCustomContent", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOptionComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-option', exportAs: 'cmacsOption', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWxlY3QvY21hY3Mtb3B0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQ2Q3QixrQkFBeUI7OztBRHlCM0IsTUFBTSxPQUFPLG9CQUFvQjtJQVJqQztRQVVFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBUU4sWUFBTyxHQUFRLEtBQUssQ0FBQztRQUNKLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDZCxvQkFBZSxHQUFHLEtBQUssQ0FBQztLQUtqRTtJQUhDLFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO3FGQWhCVSxvQkFBb0I7b0VBQXBCLG9CQUFvQjsyQkFHcEIsV0FBVzs7Ozs7O1lDN0J4QixrRkFFYzs7O0FEbUN1QjtJQUFmLFlBQVksRUFBRTt3REFBb0I7QUFDZDtJQUFmLFlBQVksRUFBRTs2REFBeUI7dUZBWnJELG9CQUFvQjtjQVJoQyxTQUFTOzJCQUVFLGNBQWMsWUFDZCxhQUFhLGlCQUNSLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07Z0JBTXZCLFFBQVE7a0JBQS9CLFNBQVM7bUJBQUMsV0FBVztZQUVOLE9BQU87a0JBQXRCLEtBQUs7bUJBQUMsT0FBTztZQUNJLE9BQU87a0JBQXhCLEtBQUs7bUJBQUMsU0FBUztZQUNPLFlBQVk7a0JBQWxDLEtBQUs7bUJBQUMsY0FBYztZQUVMLE9BQU87a0JBQXRCLEtBQUs7bUJBQUMsT0FBTztZQUNJLE9BQU87a0JBQXhCLEtBQUs7bUJBQUMsU0FBUztZQUNtQixVQUFVO2tCQUE1QyxLQUFLO21CQUFDLFVBQVU7WUFDdUIsZUFBZTtrQkFBdEQsS0FBSzttQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3B0aW9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3B0aW9uJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcHRpb24uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdCgpO1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgnbGFiZWwnKSBuekxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCdkaXZpZGVyJykgZGl2aWRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgnZXh0ZW5kZWREYXRhJykgZXh0ZW5kZWREYXRhOiBzdHJpbmc7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgndmFsdWUnKSBuelZhbHVlOiBhbnk7XHJcbiAgQElucHV0KCd2aXNpYmxlJykgdmlzaWJsZTogYW55ID0gZmFsc2U7XHJcbiAgQElucHV0KCdkaXNhYmxlZCcpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCdjdXN0b21Db250ZW50JykgQElucHV0Qm9vbGVhbigpIG56Q3VzdG9tQ29udGVudCA9IGZhbHNlO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlcy5uZXh0KHRydWUpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==