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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L3RleHRhcmVhLWNvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBRVosS0FBSyxFQUNMLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBWTlELE1BQU0sT0FBTywyQkFBMkI7SUFTdEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFQM0Usc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLDBCQUFxQixHQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDN0QsY0FBUyxHQUF5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUU3RixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFFc0QsQ0FBQztJQUV4RixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFlLENBQUMsQ0FDM0Q7aUJBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0dBekNVLDJCQUEyQjtnRUFBM0IsMkJBQTJCO29DQUN4QixtQkFBbUI7Ozs7OztRQVIvQixrQkFBd0Q7O3VGQU8vQywyQkFBMkI7Y0FWdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLCtCQUErQjtpQkFDdkM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7cUZBRXNELGdCQUFnQjtrQkFBcEUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDMUMsaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0cscUJBQXFCO2tCQUE3QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIGlzRGV2TW9kZSxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVNUFRZLCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBDbWFjc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NtYWNzLXRleHRhcmVhLWNvdW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ0ZXh0YXJlYVtjbWFjcy1pbnB1dF1cIj48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2FudC1pbnB1dC10ZXh0YXJlYS1zaG93LWNvdW50J1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1RleHRhcmVhQ291bnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkKENtYWNzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG56SW5wdXREaXJlY3RpdmUhOiBDbWFjc0lucHV0RGlyZWN0aXZlO1xuICBASW5wdXQoKSBtYXhDaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY29tcHV0ZUNoYXJhY3RlckNvdW50OiAodjogc3RyaW5nKSA9PiBudW1iZXIgPSB2ID0+IHYubGVuZ3RoO1xuICBASW5wdXQoKSBmb3JtYXR0ZXI6IChjdXI6IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHN0cmluZyA9IChjLCBtKSA9PiBgJHtjfWAgKyAobSA+IDAgPyBgLyR7bX1gIDogYGApO1xuXG4gIHByaXZhdGUgY29uZmlnQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56SW5wdXREaXJlY3RpdmUgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignW256LXRleHRhcmVhLWNvdW50XTogQ291bGQgbm90IGZpbmQgbWF0Y2hpbmcgdGV4dGFyZWFbbnotaW5wdXRdIGNoaWxkLicpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sKSB7XG4gICAgICBjb25zdCB2YWx1ZUNoYW5nZXMgPSB0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlQ2hhbmdlcyB8fCBFTVBUWTtcbiAgICAgIG1lcmdlKHZhbHVlQ2hhbmdlcywgdGhpcy5jb25maWdDaGFuZ2UkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLnNldERhdGFDb3VudCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldERhdGFDb3VudCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlzTm90TmlsKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnJztcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLmNvbXB1dGVDaGFyYWN0ZXJDb3VudChpbnB1dFZhbHVlKTtcbiAgICBjb25zdCBkYXRhQ291bnQgPSB0aGlzLmZvcm1hdHRlcihjdXJyZW50Q291bnQsIHRoaXMubWF4Q2hhcmFjdGVyQ291bnQpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1jb3VudCcsIGRhdGFDb3VudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==