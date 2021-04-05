import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./date-picker.component";
// tslint:disable-next-line:directive-class-suffix
export class CmacsYearPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.mode = 'year';
    }
}
CmacsYearPickerComponent.ɵfac = function CmacsYearPickerComponent_Factory(t) { return new (t || CmacsYearPickerComponent)(i0.ɵɵdirectiveInject(i1.CmacsDatePickerComponent, 9)); };
CmacsYearPickerComponent.ɵdir = i0.ɵɵdefineDirective({ type: CmacsYearPickerComponent, selectors: [["cmacs-year-picker"]], exportAs: ["cmacsYearPicker"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsYearPickerComponent, [{
        type: Directive,
        args: [{
                selector: 'cmacs-year-picker',
                exportAs: 'cmacsYearPicker'
            }]
    }], function () { return [{ type: i1.CmacsDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL3llYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8xRCxrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUF1QyxVQUFvQztRQUFwQyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7Z0dBSFUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7c0JBR2MsUUFBUTs7c0JBQUksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY21hY3MteWVhci1waWNrZXInLFxuICBleHBvcnRBczogJ2NtYWNzWWVhclBpY2tlcidcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIENtYWNzWWVhclBpY2tlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5tb2RlID0gJ3llYXInO1xuICB9XG59XG4iXX0=