import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-button/cmacs-button-group.component";
export class CmacsDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
    static { this.ɵfac = function CmacsDropdownButtonDirective_Factory(t) { return new (t || CmacsDropdownButtonDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.CmacsButtonGroupComponent, 9), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsDropdownButtonDirective, selectors: [["", "cmacs-button", "", "cmacs-dropdown", ""]] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDropdownButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-button][cmacs-dropdown]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.CmacsButtonGroupComponent, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9kcm9wZG93bi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLElBQUksRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU1oRyxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBQ1UsUUFBbUIsRUFDQyxzQkFBaUQsRUFDckUsVUFBc0I7UUFGdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMkI7UUFDckUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBQ0osZUFBZTtRQUNiLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQzs2RkFYVSw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7dUZBQTVCLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQzthQUMzQzs7c0JBSUksSUFBSTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc0J1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vY21hY3MtYnV0dG9uL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtYnV0dG9uXVtjbWFjcy1kcm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogQ21hY3NCdXR0b25Hcm91cENvbXBvbmVudCxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge31cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIGlmICh0aGlzLm56QnV0dG9uR3JvdXBDb21wb25lbnQgJiYgcGFyZW50RWxlbWVudCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHBhcmVudEVsZW1lbnQsICdhbnQtZHJvcGRvd24tYnV0dG9uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==