import { ChangeDetectionStrategy, Component, ContentChild, Input, isDevMode } from '@angular/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { CmacsInputDirective } from './cmacs-input.directive';
import * as i0 from "@angular/core";
const _c0 = [[["textarea", "cmacs-input", ""]]];
const _c1 = ["textarea[cmacs-input]"];
export class CmacsTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.maxCharacterCount = 0;
        this.computeCharacterCount = v => v.length;
        this.formatter = (c, m) => `${c}` + (m > 0 ? `/${m}` : ``);
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.computeCharacterCount(inputValue);
        const dataCount = this.formatter(currentCount, this.maxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTextareaCountComponent.ɵfac = function CmacsTextareaCountComponent_Factory(t) { return new (t || CmacsTextareaCountComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
CmacsTextareaCountComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTextareaCountComponent, selectors: [["cmacs-textarea-count"]], contentQueries: function CmacsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
    } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { maxCharacterCount: "maxCharacterCount", computeCharacterCount: "computeCharacterCount", formatter: "formatter" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CmacsTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTextareaCountComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-textarea-count',
                template: `
    <ng-content select="textarea[cmacs-input]"></ng-content>
  `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { nzInputDirective: [{
            type: ContentChild,
            args: [CmacsInputDirective, { static: true }]
        }], maxCharacterCount: [{
            type: Input
        }], computeCharacterCount: [{
            type: Input
        }], formatter: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L3RleHRhcmVhLWNvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBRVosS0FBSyxFQUNMLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBWTlELE1BQU0sT0FBTywyQkFBMkI7SUFTdEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFQM0Usc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLDBCQUFxQixHQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0QsY0FBUyxHQUF5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3RixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFFc0QsQ0FBQztJQUV4RixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFlLENBQUMsQ0FDM0Q7aUJBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0dBekNVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO29DQUN4QixtQkFBbUI7Ozs7OztRQVIvQixrQkFBd0Q7O3VGQU8vQywyQkFBMkI7Y0FWdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLCtCQUErQjtpQkFDdkM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7cUZBRXNELGdCQUFnQjtrQkFBcEUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDMUMsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEVNUFRZLCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IENtYWNzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2NtYWNzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRleHRhcmVhLWNvdW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidGV4dGFyZWFbY21hY3MtaW5wdXRdXCI+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtaW5wdXQtdGV4dGFyZWEtc2hvdy1jb3VudCdcclxuICB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RleHRhcmVhQ291bnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpJbnB1dERpcmVjdGl2ZSE6IENtYWNzSW5wdXREaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgbWF4Q2hhcmFjdGVyQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgY29tcHV0ZUNoYXJhY3RlckNvdW50OiAodjogc3RyaW5nKSA9PiBudW1iZXIgPSB2ID0+IHYubGVuZ3RoO1xyXG4gIEBJbnB1dCgpIGZvcm1hdHRlcjogKGN1cjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4gc3RyaW5nID0gKGMsIG0pID0+IGAke2N9YCArIChtID4gMCA/IGAvJHttfWAgOiBgYCk7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56SW5wdXREaXJlY3RpdmUgJiYgaXNEZXZNb2RlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbnotdGV4dGFyZWEtY291bnRdOiBDb3VsZCBub3QgZmluZCBtYXRjaGluZyB0ZXh0YXJlYVtuei1pbnB1dF0gY2hpbGQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wpIHtcclxuICAgICAgY29uc3QgdmFsdWVDaGFuZ2VzID0gdGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMgfHwgRU1QVFk7XHJcbiAgICAgIG1lcmdlKHZhbHVlQ2hhbmdlcywgdGhpcy5jb25maWdDaGFuZ2UkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUgYXMgc3RyaW5nKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YUNvdW50KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGFDb3VudCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaXNOb3ROaWwodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xyXG4gICAgY29uc3QgY3VycmVudENvdW50ID0gdGhpcy5jb21wdXRlQ2hhcmFjdGVyQ291bnQoaW5wdXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhQ291bnQgPSB0aGlzLmZvcm1hdHRlcihjdXJyZW50Q291bnQsIHRoaXMubWF4Q2hhcmFjdGVyQ291bnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvdW50JywgZGF0YUNvdW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19