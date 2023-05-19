import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsDropDownADirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-dropdown-link');
    }
}
CmacsDropDownADirective.ɵfac = function CmacsDropDownADirective_Factory(t) { return new (t || CmacsDropDownADirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsDropDownADirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsDropDownADirective, selectors: [["a", "cmacs-dropdown", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDropDownADirective, [{
        type: Directive,
        args: [{
                selector: 'a[cmacs-dropdown]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vZHJvcGRvd24tYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLGVBQWUsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OEZBSlUsdUJBQXVCOzREQUF2Qix1QkFBdUI7dUZBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbY21hY3MtZHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0Ryb3BEb3duQURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1kcm9wZG93bi1saW5rJyk7XG4gIH1cbn1cbiJdfQ==