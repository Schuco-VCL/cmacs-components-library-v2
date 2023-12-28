import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsSelectUnselectableDirective {
    static { this.ɵfac = function CmacsSelectUnselectableDirective_Factory(t) { return new (t || CmacsSelectUnselectableDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsSelectUnselectableDirective, selectors: [["", "cmacs-select-unselectable", ""]], hostVars: 3, hostBindings: function CmacsSelectUnselectableDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("unselectable", "unselectable");
            i0.ɵɵstyleProp("user-select", "none");
        } }, exportAs: ["cmacsSelectUnselectable"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectUnselectableDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-select-unselectable]',
                exportAs: 'cmacsSelectUnselectable',
                host: {
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LXVuc2VsZWN0YWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC11bnNlbGVjdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVTFDLE1BQU0sT0FBTyxnQ0FBZ0M7aUdBQWhDLGdDQUFnQztvRUFBaEMsZ0NBQWdDOzs7Ozt1RkFBaEMsZ0NBQWdDO2NBUjVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxJQUFJLEVBQUU7b0JBQ0oscUJBQXFCLEVBQUUsZ0JBQWdCO29CQUN2QyxxQkFBcUIsRUFBRSxRQUFRO2lCQUNoQzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zZWxlY3QtdW5zZWxlY3RhYmxlXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NlbGVjdFVuc2VsZWN0YWJsZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1thdHRyLnVuc2VsZWN0YWJsZV0nOiAnXCJ1bnNlbGVjdGFibGVcIicsXHJcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XSc6ICdcIm5vbmVcIidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFVuc2VsZWN0YWJsZURpcmVjdGl2ZSB7fVxyXG4iXX0=