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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL3llYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8xRCxrREFBa0Q7QUFDbEQsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUF1QyxVQUFvQztRQUFwQyxlQUFVLEdBQVYsVUFBVSxDQUEwQjtRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7Z0dBSFUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7c0JBR2MsUUFBUTs7c0JBQUksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ21hY3NEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy15ZWFyLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1llYXJQaWNrZXInXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBDbWFjc1llYXJQaWNrZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGRhdGVQaWNrZXI6IENtYWNzRGF0ZVBpY2tlckNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5kYXRlUGlja2VyLm1vZGUgPSAneWVhcic7XHJcbiAgfVxyXG59XHJcbiJdfQ==