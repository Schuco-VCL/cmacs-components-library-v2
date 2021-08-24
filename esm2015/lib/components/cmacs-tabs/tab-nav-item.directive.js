import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
CmacsTabNavItemDirective.ɵfac = function CmacsTabNavItemDirective_Factory(t) { return new (t || CmacsTabNavItemDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsTabNavItemDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsTabNavItemDirective, selectors: [["", "cmacsTabNavItem", ""]], inputs: { disabled: "disabled", tab: "tab", active: "active" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabNavItemDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacsTabNavItem]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { disabled: [{
            type: Input
        }], tab: [{
            type: Input
        }], active: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYi1uYXYtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTzdELE1BQU0sT0FBTyx3QkFBd0I7SUFPbkMsWUFBbUIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFON0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBSy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDOztnR0E5QlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUhwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs2REFFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNhYmxlT3B0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDbWFjc1RhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbWFjc1RhYk5hdkl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBGb2N1c2FibGVPcHRpb24ge1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWIhOiBDbWFjc1RhYkNvbXBvbmVudDtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgZWwhOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50ITogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQhO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgZ2V0IHRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0VG9wO1xuICB9XG59XG4iXX0=