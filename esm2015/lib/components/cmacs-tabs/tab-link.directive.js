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
}
CmacsTabLinkTemplateDirective.ɵfac = function CmacsTabLinkTemplateDirective_Factory(t) { return new (t || CmacsTabLinkTemplateDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef, 1)); };
CmacsTabLinkTemplateDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsTabLinkTemplateDirective, selectors: [["ng-template", "cmacsTabLink", ""]], exportAs: ["cmacsTabLinkTemplate"] });
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
}
CmacsTabLinkDirective.ɵfac = function CmacsTabLinkDirective_Factory(t) { return new (t || CmacsTabLinkDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.RouterLink, 10), i0.ɵɵdirectiveInject(i1.RouterLinkWithHref, 10)); };
CmacsTabLinkDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsTabLinkDirective, selectors: [["a", "cmacs-tab-link", ""]], exportAs: ["cmacsTabLink"] });
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
            }] }, { type: i1.RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQWUsTUFBTSxlQUFlLENBQUM7OztBQUt6Rjs7R0FFRztBQUtILE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBMkIsV0FBNEM7UUFBNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWlDO0lBQUcsQ0FBQzs7MEdBRGhFLDZCQUE2QjtrRUFBN0IsNkJBQTZCO3VGQUE3Qiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7O3NCQUVjLElBQUk7O0FBR25COztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUNoQyxZQUNTLFVBQXlDLEVBQ3JCLFVBQXVCLEVBQ3ZCLGtCQUF1QztRQUYzRCxlQUFVLEdBQVYsVUFBVSxDQUErQjtRQUNyQixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQ3ZCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7SUFDakUsQ0FBQzs7MEZBTE8scUJBQXFCOzBEQUFyQixxQkFBcUI7dUZBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGNBQWM7YUFDekI7O3NCQUlJLFFBQVE7O3NCQUFJLElBQUk7O3NCQUNoQixRQUFROztzQkFBSSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBPcHRpb25hbCwgU2VsZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRhYlRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg1NjNcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbY21hY3NUYWJMaW5rXScsXG4gIGV4cG9ydEFzOiAnY21hY3NUYWJMaW5rVGVtcGxhdGUnXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPFRhYlRlbXBsYXRlQ29udGV4dD4pIHt9XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaXMgZm9yIGNhdGNoaW5nIGByb3V0ZXJMaW5rYCBkaXJlY3RpdmUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbY21hY3MtdGFiLWxpbmtdJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYkxpbmsnXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGFiTGlua0RpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxBbmNob3JFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rPzogUm91dGVyTGluayxcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyByb3V0ZXJMaW5rV2l0aEhyZWY/OiBSb3V0ZXJMaW5rV2l0aEhyZWZcbiAgKSB7fVxufVxuIl19