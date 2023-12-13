import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./date-picker.component";
// tslint:disable-next-line:directive-class-suffix
export class CmacsWeekPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.mode = 'week';
    }
    static { this.ɵfac = function CmacsWeekPickerComponent_Factory(t) { return new (t || CmacsWeekPickerComponent)(i0.ɵɵdirectiveInject(i1.CmacsDatePickerComponent, 9)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsWeekPickerComponent, selectors: [["cmacs-week-picker"]], exportAs: ["cmacsWeekPicker"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsWeekPickerComponent, [{
        type: Directive,
        args: [{
                selector: 'cmacs-week-picker',
                exportAs: 'cmacsWeekPicker'
            }]
    }], function () { return [{ type: i1.CmacsDatePickerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL3dlZWstcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8xRCxrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUF1QyxVQUFvQztRQUFwQyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzt5RkFIVSx3QkFBd0I7b0VBQXhCLHdCQUF3Qjs7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7c0JBR2MsUUFBUTs7c0JBQUksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY21hY3Mtd2Vlay1waWNrZXInLFxuICBleHBvcnRBczogJ2NtYWNzV2Vla1BpY2tlcidcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIENtYWNzV2Vla1BpY2tlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCkge1xuICAgIHRoaXMuZGF0ZVBpY2tlci5tb2RlID0gJ3dlZWsnO1xuICB9XG59XG4iXX0=