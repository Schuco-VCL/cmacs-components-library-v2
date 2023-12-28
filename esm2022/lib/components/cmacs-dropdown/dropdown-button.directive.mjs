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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kcm9wZG93bi9kcm9wZG93bi1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFjLElBQUksRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7OztBQU1oRyxNQUFNLE9BQU8sNEJBQTRCO0lBQ3ZDLFlBQ1UsUUFBbUIsRUFDQyxzQkFBaUQsRUFDckUsVUFBc0I7UUFGdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMkI7UUFDckUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBQ0osZUFBZTtRQUNiLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQzs2RkFYVSw0QkFBNEI7b0VBQTVCLDRCQUE0Qjs7dUZBQTVCLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQzthQUMzQzs7c0JBSUksSUFBSTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21hY3NCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2NtYWNzLWJ1dHRvbi9jbWFjcy1idXR0b24tZ3JvdXAuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NtYWNzLWJ1dHRvbl1bY21hY3MtZHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3Bkb3duQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogQ21hY3NCdXR0b25Hcm91cENvbXBvbmVudCxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgaWYgKHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudCAmJiBwYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHBhcmVudEVsZW1lbnQsICdhbnQtZHJvcGRvd24tYnV0dG9uJyk7XG4gICAgfVxuICB9XG59XG4iXX0=