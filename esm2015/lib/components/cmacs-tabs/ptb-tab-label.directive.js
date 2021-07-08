import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
export class PtbTabLabelDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.disabled = false;
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-tab');
    }
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    getOffsetTop() {
        return this.elementRef.nativeElement.offsetTop;
    }
    getOffsetHeight() {
        return this.elementRef.nativeElement.offsetHeight;
    }
}
PtbTabLabelDirective.ɵfac = function PtbTabLabelDirective_Factory(t) { return new (t || PtbTabLabelDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
PtbTabLabelDirective.ɵdir = i0.ɵɵdefineDirective({ type: PtbTabLabelDirective, selectors: [["", "ptb-tab-label", ""]], hostVars: 2, hostBindings: function PtbTabLabelDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-tabs-tab-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled" }, exportAs: ["ptbTabLabel"] });
__decorate([
    InputBoolean()
], PtbTabLabelDirective.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PtbTabLabelDirective, [{
        type: Directive,
        args: [{
                selector: '[ptb-tab-label]',
                exportAs: 'ptbTabLabel',
                host: {
                    '[class.ant-tabs-tab-disabled]': 'disabled'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { disabled: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRiLXRhYi1sYWJlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGFicy9wdGItdGFiLWxhYmVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVN2RCxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLFlBQW1CLFVBQXNCLEVBQUUsUUFBbUI7UUFBM0MsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDbkQsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3BELENBQUM7O3dGQXJCVSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7O0FBQ047SUFBZixZQUFZLEVBQUU7c0RBQWtCO3VGQUQvQixvQkFBb0I7Y0FQaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsVUFBVTtpQkFDNUM7YUFDRjtxRkFFMEIsUUFBUTtrQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twdGItdGFiLWxhYmVsXScsXG4gIGV4cG9ydEFzOiAncHRiVGFiTGFiZWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy10YWItZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFB0YlRhYkxhYmVsRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFicy10YWInKTtcbiAgfVxuXG4gIGdldE9mZnNldExlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgfVxuXG4gIGdldE9mZnNldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgZ2V0T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgfVxuXG4gIGdldE9mZnNldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==