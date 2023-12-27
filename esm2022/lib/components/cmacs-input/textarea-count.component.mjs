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
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsTextareaCountComponent_Factory(t) { return new (t || CmacsTextareaCountComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTextareaCountComponent, selectors: [["cmacs-textarea-count"]], contentQueries: function CmacsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsInputDirective, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
        } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { maxCharacterCount: "maxCharacterCount", computeCharacterCount: "computeCharacterCount", formatter: "formatter" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function CmacsTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L3RleHRhcmVhLWNvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBRVosS0FBSyxFQUNMLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBWTlELE1BQU0sT0FBTywyQkFBMkI7SUFTdEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFQM0Usc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLDBCQUFxQixHQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0QsY0FBUyxHQUF5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3RixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFFc0QsQ0FBQztJQUV4RixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFlLENBQUMsQ0FDM0Q7aUJBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7NEZBekNVLDJCQUEyQjtvRUFBM0IsMkJBQTJCO3dDQUN4QixtQkFBbUI7Ozs7OztZQVIvQixrQkFBd0Q7Ozt1RkFPL0MsMkJBQTJCO2NBVnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7O0dBRVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSwrQkFBK0I7aUJBQ3ZDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3FGQUVzRCxnQkFBZ0I7a0JBQXBFLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzFDLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLHFCQUFxQjtrQkFBN0IsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIGlzRGV2TW9kZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFTVBUWSwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBDbWFjc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10ZXh0YXJlYS1jb3VudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInRleHRhcmVhW2NtYWNzLWlucHV0XVwiPjwvbmctY29udGVudD5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWlucHV0LXRleHRhcmVhLXNob3ctY291bnQnXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUZXh0YXJlYUNvdW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuICBAQ29udGVudENoaWxkKENtYWNzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG56SW5wdXREaXJlY3RpdmUhOiBDbWFjc0lucHV0RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIG1heENoYXJhY3RlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGNvbXB1dGVDaGFyYWN0ZXJDb3VudDogKHY6IHN0cmluZykgPT4gbnVtYmVyID0gdiA9PiB2Lmxlbmd0aDtcclxuICBASW5wdXQoKSBmb3JtYXR0ZXI6IChjdXI6IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHN0cmluZyA9IChjLCBtKSA9PiBgJHtjfWAgKyAobSA+IDAgPyBgLyR7bX1gIDogYGApO1xyXG5cclxuICBwcml2YXRlIGNvbmZpZ0NoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHt9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ueklucHV0RGlyZWN0aXZlICYmIGlzRGV2TW9kZSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignW256LXRleHRhcmVhLWNvdW50XTogQ291bGQgbm90IGZpbmQgbWF0Y2hpbmcgdGV4dGFyZWFbbnotaW5wdXRdIGNoaWxkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlQ2hhbmdlcyA9IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzIHx8IEVNUFRZO1xyXG4gICAgICBtZXJnZSh2YWx1ZUNoYW5nZXMsIHRoaXMuY29uZmlnQ2hhbmdlJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlIGFzIHN0cmluZylcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGFDb3VudCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREYXRhQ291bnQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlzTm90TmlsKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnJztcclxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IHRoaXMuY29tcHV0ZUNoYXJhY3RlckNvdW50KGlucHV0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YUNvdW50ID0gdGhpcy5mb3JtYXR0ZXIoY3VycmVudENvdW50LCB0aGlzLm1heENoYXJhY3RlckNvdW50KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1jb3VudCcsIGRhdGFDb3VudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnQ2hhbmdlJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=