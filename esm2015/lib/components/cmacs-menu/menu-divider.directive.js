import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
}
CmacsMenuDividerDirective.ɵfac = function CmacsMenuDividerDirective_Factory(t) { return new (t || CmacsMenuDividerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
CmacsMenuDividerDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsMenuDividerDirective, selectors: [["", "cmacs-menu-divider", ""]], exportAs: ["cmacsMenuDivider"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMenuDividerDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-menu-divider]',
                exportAs: 'cmacsMenuDivider'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1kaXZpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L21lbnUtZGl2aWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsTUFBTSxlQUFlLENBQUM7O0FBTWpFLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7a0dBSFUseUJBQXlCOzhEQUF6Qix5QkFBeUI7dUZBQXpCLHlCQUF5QjtjQUpyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51LWRpdmlkZXJdJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVudURpdmlkZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01lbnVEaXZpZGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tZGl2aWRlcicpO1xyXG4gIH1cclxufVxyXG4iXX0=