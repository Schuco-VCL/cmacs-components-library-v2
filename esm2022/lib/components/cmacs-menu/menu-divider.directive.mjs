import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsMenuDividerDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(elementRef.nativeElement, 'ant-dropdown-menu-item-divider');
    }
    static { this.ɵfac = function CmacsMenuDividerDirective_Factory(t) { return new (t || CmacsMenuDividerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsMenuDividerDirective, selectors: [["", "cmacs-menu-divider", ""]], exportAs: ["cmacsMenuDivider"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMenuDividerDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-menu-divider]',
                exportAs: 'cmacsMenuDivider'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1kaXZpZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZW51L21lbnUtZGl2aWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBeUIsTUFBTSxlQUFlLENBQUM7O0FBTWpFLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDckYsQ0FBQzswRkFIVSx5QkFBeUI7b0VBQXpCLHlCQUF5Qjs7dUZBQXpCLHlCQUF5QjtjQUpyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbWFjcy1tZW51LWRpdmlkZXJdJyxcbiAgZXhwb3J0QXM6ICdjbWFjc01lbnVEaXZpZGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBDbWFjc01lbnVEaXZpZGVyRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXZpZGVyJyk7XG4gIH1cbn1cbiJdfQ==