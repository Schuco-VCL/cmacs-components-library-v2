import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
export class PtbTabsInkBarDirective {
    constructor(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.nzAnimated = false;
        this.nzPositionMode = 'horizontal';
        renderer.addClass(elementRef.nativeElement, 'ant-tabs-ink-bar');
    }
    alignToElement(element) {
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => this.setStyles(element));
            });
        }
        else {
            this.setStyles(element);
        }
    }
    setStyles(element) {
        /** when horizontal remove height style and add transform left **/
        if (this.nzPositionMode === 'horizontal') {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
        }
        else {
            /** when vertical remove width style and add transform top **/
            this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
            this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
            this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
        }
    }
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
    static { this.ɵfac = function PtbTabsInkBarDirective_Factory(t) { return new (t || PtbTabsInkBarDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PtbTabsInkBarDirective, selectors: [["", "ptb-tabs-ink-bar", ""]], hostVars: 4, hostBindings: function PtbTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tabs-ink-bar-animated", ctx.nzAnimated)("ant-tabs-ink-bar-no-animated", !ctx.nzAnimated);
        } }, inputs: { nzAnimated: "nzAnimated", nzPositionMode: "nzPositionMode" }, exportAs: ["ptbTabsInkBar"] }); }
}
__decorate([
    InputBoolean()
], PtbTabsInkBarDirective.prototype, "nzAnimated", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PtbTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: '[ptb-tabs-ink-bar]',
                exportAs: 'ptbTabsInkBar',
                host: {
                    '[class.ant-tabs-ink-bar-animated]': 'nzAnimated',
                    '[class.ant-tabs-ink-bar-no-animated]': '!nzAnimated'
                }
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, { nzAnimated: [{
            type: Input
        }], nzPositionMode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRiLXRhYnMtaW5rLWJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGFicy9wdGItdGFicy1pbmstYmFyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFXdkQsTUFBTSxPQUFPLHNCQUFzQjtJQUtqQyxZQUFvQixRQUFtQixFQUFVLFVBQXNCLEVBQVUsTUFBYztRQUEzRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKdEUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQyxtQkFBYyxHQUFzQixZQUFZLENBQUM7UUFHeEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxJQUFJLE9BQU8scUJBQXFCLEtBQUssV0FBVyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO2dCQUNqQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsT0FBb0I7UUFDNUIsa0VBQWtFO1FBQ2xFLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsZUFBZSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQzFELENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQy9GO2FBQU07WUFDTCw4REFBOEQ7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLEVBQ1gsb0JBQW9CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FDekQsQ0FBQztZQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNqRztJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQW9CO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDO3VGQXZEVSxzQkFBc0I7b0VBQXRCLHNCQUFzQjs7OztBQUNSO0lBQWYsWUFBWSxFQUFFOzBEQUFvQjt1RkFEakMsc0JBQXNCO2NBUmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsZUFBZTtnQkFDekIsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLFlBQVk7b0JBQ2pELHNDQUFzQyxFQUFFLGFBQWE7aUJBQ3REO2FBQ0Y7MEdBRTBCLFVBQVU7a0JBQWxDLEtBQUs7WUFFRyxjQUFjO2tCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xyXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twdGItdGFicy1pbmstYmFyXScsXG4gIGV4cG9ydEFzOiAncHRiVGFic0lua0JhcicsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWRdJzogJ256QW5pbWF0ZWQnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1uby1hbmltYXRlZF0nOiAnIW56QW5pbWF0ZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUHRiVGFic0lua0JhckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYnMtaW5rLWJhcicpO1xuICB9XG5cbiAgYWxpZ25Ub0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuc2V0U3R5bGVzKGVsZW1lbnQpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0eWxlcyhlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAvKiogd2hlbiBob3Jpem9udGFsIHJlbW92ZSBoZWlnaHQgc3R5bGUgYW5kIGFkZCB0cmFuc2Zvcm0gbGVmdCAqKi9cbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgIGB0cmFuc2xhdGUzZCgke3RoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpfSwgMHB4LCAwcHgpYFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMuZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyoqIHdoZW4gdmVydGljYWwgcmVtb3ZlIHdpZHRoIHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIHRvcCAqKi9cbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICBgdHJhbnNsYXRlM2QoMHB4LCAke3RoaXMuZ2V0VG9wUG9zaXRpb24oZWxlbWVudCl9LCAwcHgpYFxuICAgICAgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcgOiAnMCc7XG4gIH1cbn1cbiJdfQ==