import { Directive, Inject, Input, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import * as i0 from "@angular/core";
export class CmacsTabsInkBarDirective {
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
    static { this.ɵfac = function CmacsTabsInkBarDirective_Factory(t) { return new (t || CmacsTabsInkBarDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsTabsInkBarDirective, selectors: [["cmacs-tabs-ink-bar"], ["", "cmacs-tabs-ink-bar", ""]], hostAttrs: [1, "ant-tabs-ink-bar"], hostVars: 2, hostBindings: function CmacsTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tabs-ink-bar-animated", ctx._animated);
        } }, inputs: { position: "position", animated: "animated" } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabsInkBarDirective, [{
        type: Directive,
        args: [{
                selector: 'cmacs-tabs-ink-bar, [cmacs-tabs-ink-bar]',
                host: {
                    class: 'ant-tabs-ink-bar',
                    '[class.ant-tabs-ink-bar-animated]': '_animated'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }]; }, { position: [{
            type: Input
        }], animated: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYnMtaW5rLWJhci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUU3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBVTNELE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEUsQ0FBQztJQUVELFlBQ1UsVUFBbUMsRUFDbkMsTUFBYyxFQUM0QixhQUFzQjtRQUZoRSxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzRCLGtCQUFhLEdBQWIsYUFBYSxDQUFTO1FBVmpFLGFBQVEsR0FBc0IsWUFBWSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLENBQUM7SUFVdEIsQ0FBQztJQUVKLGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFvQjtRQUM1QixNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFFMUQsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtZQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzVELENBQUM7eUZBbERVLHdCQUF3Qiw2RkFXYixxQkFBcUI7b0VBWGhDLHdCQUF3Qjs7Ozt1RkFBeEIsd0JBQXdCO2NBUHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsbUNBQW1DLEVBQUUsV0FBVztpQkFDakQ7YUFDRjs7c0JBWUksUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxxQkFBcUI7d0JBVmxDLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBOZ1pvbmUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcG9seWZpbGwnO1xuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWJzLWluay1iYXIsIFtjbWFjcy10YWJzLWluay1iYXJdJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXRhYnMtaW5rLWJhcicsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkXSc6ICdfYW5pbWF0ZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJzSW5rQmFyRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcG9zaXRpb246IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBhbmltYXRlZCA9IHRydWU7XG5cbiAgZ2V0IF9hbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb25Nb2RlICE9PSAnTm9vcEFuaW1hdGlvbnMnICYmIHRoaXMuYW5pbWF0ZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTklNQVRJT05fTU9EVUxFX1RZUEUpIHB1YmxpYyBhbmltYXRpb25Nb2RlPzogc3RyaW5nXG4gICkge31cblxuICBhbGlnblRvRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB0aGlzLnNldFN0eWxlcyhlbGVtZW50KSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmtCYXI6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpbmtCYXIuc3R5bGUudG9wID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUubGVmdCA9IHRoaXMuZ2V0TGVmdFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgaW5rQmFyLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50V2lkdGgoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlua0Jhci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBpbmtCYXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIGlua0Jhci5zdHlsZS50b3AgPSB0aGlzLmdldFRvcFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgaW5rQmFyLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRMZWZ0UG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwKSArICdweCcgOiAnMCc7XG4gIH1cblxuICBnZXRFbGVtZW50V2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMCkgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0VG9wIHx8IDApICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDApICsgJ3B4JyA6ICcwJztcbiAgfVxufVxuIl19