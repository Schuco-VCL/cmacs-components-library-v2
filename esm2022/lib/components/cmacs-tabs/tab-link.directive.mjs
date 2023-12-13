import { Directive, Host, Optional, Self } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
export class CmacsTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = function CmacsTabLinkTemplateDirective_Factory(t) { return new (t || CmacsTabLinkTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef, 1)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsTabLinkTemplateDirective, selectors: [["ng-template", "cmacsTabLink", ""]], exportAs: ["cmacsTabLinkTemplate"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabLinkTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[cmacsTabLink]',
                exportAs: 'cmacsTabLinkTemplate'
            }]
    }], function () { return [{ type: i0.TemplateRef, decorators: [{
                type: Host
            }] }]; }, null); })();
/**
 * This component is for catching `routerLink` directive.
 */
export class CmacsTabLinkDirective {
    constructor(elementRef, routerLink, routerLinkWithHref) {
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
    static { this.ɵfac = function CmacsTabLinkDirective_Factory(t) { return new (t || CmacsTabLinkDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.RouterLink, 10), i0.ɵɵdirectiveInject(i1.RouterLink, 10)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsTabLinkDirective, selectors: [["a", "cmacs-tab-link", ""]], exportAs: ["cmacsTabLink"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[cmacs-tab-link]',
                exportAs: 'cmacsTabLink'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQUt6Rjs7R0FFRztBQUtILE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBMkIsV0FBNEM7UUFBNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWlDO0lBQUcsQ0FBQzs4RkFEaEUsNkJBQTZCO29FQUE3Qiw2QkFBNkI7O3VGQUE3Qiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7O3NCQUVjLElBQUk7O0FBR25COztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNTLFVBQXlDLEVBQ3JCLFVBQXVCLEVBQ3ZCLGtCQUErQjtRQUZuRCxlQUFVLEdBQVYsVUFBVSxDQUErQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBYTtJQUN6RCxDQUFDO3NGQUxPLHFCQUFxQjtvRUFBckIscUJBQXFCOzt1RkFBckIscUJBQXFCO2NBSmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsY0FBYzthQUN6Qjs7c0JBSUksUUFBUTs7c0JBQUksSUFBSTs7c0JBQ2hCLFFBQVE7O3NCQUFJLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIE9wdGlvbmFsLCBTZWxmLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRhYlRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG4vKipcclxuICogRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg1NjNcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbY21hY3NUYWJMaW5rXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYkxpbmtUZW1wbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8VGFiVGVtcGxhdGVDb250ZXh0Pikge31cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBjYXRjaGluZyBgcm91dGVyTGlua2AgZGlyZWN0aXZlLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdhW2NtYWNzLXRhYi1saW5rXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYkxpbmsnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYkxpbmtEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEFuY2hvckVsZW1lbnQ+LFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcm91dGVyTGluaz86IFJvdXRlckxpbmssXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rXHJcbiAgKSB7fVxyXG59XHJcbiJdfQ==