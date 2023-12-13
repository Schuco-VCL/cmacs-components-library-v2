import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
import * as i2 from "ng-zorro-antd/core/services";
export class CmacsAutosizeDirective {
    set cmacsAutosize(value) {
        const isAutoSizeType = (data) => {
            return typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
        };
        if (typeof value === 'string' || value === true) {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = true;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        }
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight + this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = this.maxHeight;
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = this.minHeight;
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = `${minHeight}px`;
        }
        return minHeight;
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = `${maxHeight}px`;
        }
        return maxHeight;
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    constructor(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    ngAfterViewInit() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    static { this.ɵfac = function CmacsAutosizeDirective_Factory(t) { return new (t || CmacsAutosizeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.Platform), i0.ɵɵdirectiveInject(i2.NzResizeService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsAutosizeDirective, selectors: [["textarea", "cmacsAutosize", ""]], hostAttrs: ["rows", "1"], hostBindings: function CmacsAutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("input", function CmacsAutosizeDirective_input_HostBindingHandler() { return ctx.noopInputHandler(); });
        } }, inputs: { cmacsAutosize: "cmacsAutosize" }, exportAs: ["cmacsAutosize"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsAutosizeDirective, [{
        type: Directive,
        args: [{
                selector: 'textarea[cmacsAutosize]',
                exportAs: 'cmacsAutosize',
                host: {
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    rows: '1',
                    '(input)': 'noopInputHandler()'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.Platform }, { type: i2.NzResizeService }]; }, { cmacsAutosize: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L2F1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWlCLFNBQVMsRUFBdUIsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWlCM0MsTUFBTSxPQUFPLHNCQUFzQjtJQWFqQyxJQUNJLGFBQWEsQ0FBQyxLQUFzQztRQUN0RCxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQXFDLEVBQXdCLEVBQUU7WUFDckYsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRyxDQUFDLENBQUM7UUFDRixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyQyxJ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clxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpSZXNpemVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TaXplVHlwZSB7XHJcbiAgbWluUm93cz86IG51bWJlcjtcclxuICBtYXhSb3dzPzogbnVtYmVyO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ3RleHRhcmVhW2NtYWNzQXV0b3NpemVdJyxcclxuICBleHBvcnRBczogJ2NtYWNzQXV0b3NpemUnLFxyXG4gIGhvc3Q6IHtcclxuICAgIC8vIFRleHRhcmVhIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgZGlyZWN0aXZlIGFwcGxpZWQgc2hvdWxkIGhhdmUgYSBzaW5nbGUgcm93IGJ5IGRlZmF1bHQuXHJcbiAgICAvLyBCcm93c2VycyBub3JtYWxseSBzaG93IHR3byByb3dzIGJ5IGRlZmF1bHQgYW5kIHRoZXJlZm9yZSB0aGlzIGxpbWl0cyB0aGUgbWluUm93cyBiaW5kaW5nLlxyXG4gICAgcm93czogJzEnLFxyXG4gICAgJyhpbnB1dCknOiAnbm9vcElucHV0SGFuZGxlcigpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQXV0b3NpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xyXG4gIHByaXZhdGUgYXV0b3NpemU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGVsOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgY2FjaGVkTGluZUhlaWdodCE6IG51bWJlcjtcclxuICBwcml2YXRlIHByZXZpb3VzVmFsdWUhOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c01pblJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG1pblJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG1heFJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG1heEhlaWdodDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBtaW5IZWlnaHQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaW5wdXRHYXAgPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY21hY3NBdXRvc2l6ZSh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSkge1xyXG4gICAgY29uc3QgaXNBdXRvU2l6ZVR5cGUgPSAoZGF0YTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSk6IGRhdGEgaXMgQXV0b1NpemVUeXBlID0+IHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YSAhPT0gJ2Jvb2xlYW4nICYmICghIWRhdGEubWF4Um93cyB8fCAhIWRhdGEubWluUm93cyk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzQXV0b1NpemVUeXBlKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmF1dG9zaXplID0gdHJ1ZTtcclxuICAgICAgdGhpcy5taW5Sb3dzID0gdmFsdWUubWluUm93cztcclxuICAgICAgdGhpcy5tYXhSb3dzID0gdmFsdWUubWF4Um93cztcclxuICAgICAgdGhpcy5tYXhIZWlnaHQgPSB0aGlzLnNldE1heEhlaWdodCgpO1xyXG4gICAgICB0aGlzLm1pbkhlaWdodCA9IHRoaXMuc2V0TWluSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNpemVUb0ZpdENvbnRlbnQoZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWNoZVRleHRhcmVhTGluZUhlaWdodCgpO1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmVuJ3QgZGV0ZXJtaW5lZCB0aGUgbGluZS1oZWlnaHQgeWV0LCB3ZSBrbm93IHdlJ3JlIHN0aWxsIGhpZGRlbiBhbmQgdGhlcmUncyBubyBwb2ludFxyXG4gICAgLy8gaW4gY2hlY2tpbmcgdGhlIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEuXHJcbiAgICBpZiAoIXRoaXMuY2FjaGVkTGluZUhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWEgPSB0aGlzLmVsIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRleHRhcmVhLnZhbHVlO1xyXG5cclxuICAgIC8vIE9ubHkgcmVzaXplIGlmIHRoZSB2YWx1ZSBvciBtaW5Sb3dzIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGVzZSBjYWxjdWxhdGlvbnMgY2FuIGJlIGV4cGVuc2l2ZS5cclxuICAgIGlmICghZm9yY2UgJiYgdGhpcy5taW5Sb3dzID09PSB0aGlzLnByZXZpb3VzTWluUm93cyAmJiB2YWx1ZSA9PT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IHRleHRhcmVhLnBsYWNlaG9sZGVyO1xyXG5cclxuICAgIC8vIFJlc2V0IHRoZSB0ZXh0YXJlYSBoZWlnaHQgdG8gYXV0byBpbiBvcmRlciB0byBzaHJpbmsgYmFjayB0byBpdHMgZGVmYXVsdCBzaXplLlxyXG4gICAgLy8gQWxzbyB0ZW1wb3JhcmlseSBmb3JjZSBvdmVyZmxvdzpoaWRkZW4sIHNvIHNjcm9sbCBiYXJzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCBjYWxjdWxhdGlvbnMuXHJcbiAgICAvLyBMb25nIHBsYWNlaG9sZGVycyB0aGF0IGFyZSB3aWRlciB0aGFuIHRoZSB0ZXh0YXJlYSB3aWR0aCBtYXkgbGVhZCB0byBhIGJpZ2dlciBzY3JvbGxIZWlnaHRcclxuICAgIC8vIHZhbHVlLiBUbyBlbnN1cmUgdGhhdCB0aGUgc2Nyb2xsSGVpZ2h0IGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgY29udGVudCwgdGhlIHBsYWNlaG9sZGVyc1xyXG4gICAgLy8gbmVlZCB0byBiZSByZW1vdmVkIHRlbXBvcmFyaWx5LlxyXG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LmFkZCgnbnotdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgbGV0IGhlaWdodCA9IE1hdGgucm91bmQoKHRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHRoaXMuaW5wdXRHYXApIC8gdGhpcy5jYWNoZWRMaW5lSGVpZ2h0KSAqIHRoaXMuY2FjaGVkTGluZUhlaWdodCArIHRoaXMuaW5wdXRHYXA7XHJcbiAgICBpZiAodGhpcy5tYXhIZWlnaHQgIT09IG51bGwgJiYgaGVpZ2h0ID4gdGhpcy5tYXhIZWlnaHQpIHtcclxuICAgICAgaGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQhO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubWluSGVpZ2h0ICE9PSBudWxsICYmIGhlaWdodCA8IHRoaXMubWluSGVpZ2h0KSB7XHJcbiAgICAgIGhlaWdodCA9IHRoaXMubWluSGVpZ2h0ITtcclxuICAgIH1cclxuICAgIC8vIFVzZSB0aGUgc2Nyb2xsSGVpZ2h0IHRvIGtub3cgaG93IGxhcmdlIHRoZSB0ZXh0YXJlYSAqd291bGQqIGJlIGlmIGZpdCBpdHMgZW50aXJlIHZhbHVlLlxyXG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ256LXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZycpO1xyXG4gICAgdGV4dGFyZWEucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlclRleHQ7XHJcblxyXG4gICAgLy8gT24gRmlyZWZveCByZXNpemluZyB0aGUgdGV4dGFyZWEgd2lsbCBwcmV2ZW50IGl0IGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBjYXJldCBwb3NpdGlvbi5cclxuICAgIC8vIFdlIG5lZWQgdG8gcmUtc2V0IHRoZSBzZWxlY3Rpb24gaW4gb3JkZXIgZm9yIGl0IHRvIHNjcm9sbCB0byB0aGUgcHJvcGVyIHBvc2l0aW9uLlxyXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gdGV4dGFyZWE7XHJcblxyXG4gICAgICAgICAgLy8gSUUgd2lsbCB0aHJvdyBhbiBcIlVuc3BlY2lmaWVkIGVycm9yXCIgaWYgd2UgdHJ5IHRvIHNldCB0aGUgc2VsZWN0aW9uIHJhbmdlIGFmdGVyIHRoZVxyXG4gICAgICAgICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcclxuICAgICAgICAgIC8vIGJldHdlZW4gdGhlIHRpbWUgd2UgcmVxdWVzdGVkIHRoZSBhbmltYXRpb24gZnJhbWUgYW5kIHdoZW4gaXQgd2FzIGV4ZWN1dGVkLlxyXG4gICAgICAgICAgLy8gQWxzbyBub3RlIHRoYXQgd2UgaGF2ZSB0byBhc3NlcnQgdGhhdCB0aGUgdGV4dGFyZWEgaXMgZm9jdXNlZCBiZWZvcmUgd2Ugc2V0IHRoZVxyXG4gICAgICAgICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXHJcbiAgICAgICAgICAvLyBpdCB0byByZWNlaXZlIGZvY3VzIG9uIElFIGFuZCBFZGdlLlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmRlc3Ryb3kkLmlzU3RvcHBlZCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5wcmV2aW91c01pblJvd3MgPSB0aGlzLm1pblJvd3M7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVkTGluZUhlaWdodCA+PSAwIHx8ICF0aGlzLmVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZSBhIGNsb25lIGVsZW1lbnQgYmVjYXVzZSB3ZSBoYXZlIHRvIG92ZXJyaWRlIHNvbWUgc3R5bGVzLlxyXG4gICAgY29uc3QgdGV4dGFyZWFDbG9uZSA9IHRoaXMuZWwuY2xvbmVOb2RlKGZhbHNlKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGV4dGFyZWFDbG9uZS5yb3dzID0gMTtcclxuXHJcbiAgICAvLyBVc2UgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgc28gdGhhdCB0aGlzIGRvZXNuJ3QgY2F1c2UgYSBicm93c2VyIGxheW91dCBhbmQgdXNlXHJcbiAgICAvLyBgdmlzaWJpbGl0eTogaGlkZGVuYCBzbyB0aGF0IG5vdGhpbmcgaXMgcmVuZGVyZWQuIENsZWFyIGFueSBvdGhlciBzdHlsZXMgdGhhdFxyXG4gICAgLy8gd291bGQgYWZmZWN0IHRoZSBoZWlnaHQuXHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5taW5IZWlnaHQgPSAnJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgLy8gSW4gRmlyZWZveCBpdCBoYXBwZW5zIHRoYXQgdGV4dGFyZWEgZWxlbWVudHMgYXJlIGFsd2F5cyBiaWdnZXIgdGhhbiB0aGUgc3BlY2lmaWVkIGFtb3VudFxyXG4gICAgLy8gb2Ygcm93cy4gVGhpcyBpcyBiZWNhdXNlIEZpcmVmb3ggdHJpZXMgdG8gYWRkIGV4dHJhIHNwYWNlIGZvciB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuXHJcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdGhhdCByZW1vdmVzIHRoZSBleHRyYSBzcGFjZSBmb3IgdGhlIHNjcm9sbGJhciwgd2UgY2FuIGp1c3Qgc2V0IG92ZXJmbG93XHJcbiAgICAvLyB0byBoaWRkZW4uIFRoaXMgZW5zdXJlcyB0aGF0IHRoZXJlIGlzIG5vIGludmFsaWQgY2FsY3VsYXRpb24gb2YgdGhlIGxpbmUgaGVpZ2h0LlxyXG4gICAgLy8gU2VlIEZpcmVmb3ggYnVnIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzM2NTRcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB0aGlzLmVsLnBhcmVudE5vZGUhLmFwcGVuZENoaWxkKHRleHRhcmVhQ2xvbmUpO1xyXG4gICAgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID0gdGV4dGFyZWFDbG9uZS5jbGllbnRIZWlnaHQgLSB0aGlzLmlucHV0R2FwO1xyXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0ZXh0YXJlYUNsb25lKTtcclxuXHJcbiAgICAvLyBNaW4gYW5kIG1heCBoZWlnaHRzIGhhdmUgdG8gYmUgcmUtY2FsY3VsYXRlZCBpZiB0aGUgY2FjaGVkIGxpbmUgaGVpZ2h0IGNoYW5nZXNcclxuICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy5zZXRNYXhIZWlnaHQoKTtcclxuICAgIHRoaXMubWluSGVpZ2h0ID0gdGhpcy5zZXRNaW5IZWlnaHQoKTtcclxuICB9XHJcblxyXG4gIHNldE1pbkhlaWdodCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMubWluUm93cyAmJiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPyB0aGlzLm1pblJvd3MgKiB0aGlzLmNhY2hlZExpbmVIZWlnaHQgKyB0aGlzLmlucHV0R2FwIDogbnVsbDtcclxuXHJcbiAgICBpZiAobWluSGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZWwuc3R5bGUubWluSGVpZ2h0ID0gYCR7bWluSGVpZ2h0fXB4YDtcclxuICAgIH1cclxuICAgIHJldHVybiBtaW5IZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBzZXRNYXhIZWlnaHQoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLm1heFJvd3MgJiYgdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID8gdGhpcy5tYXhSb3dzICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICsgdGhpcy5pbnB1dEdhcCA6IG51bGw7XHJcbiAgICBpZiAobWF4SGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZWwuc3R5bGUubWF4SGVpZ2h0ID0gYCR7bWF4SGVpZ2h0fXB4YDtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXhIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBub29wSW5wdXRIYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgLy8gbm8tb3AgaGFuZGxlciB0aGF0IGVuc3VyZXMgd2UncmUgcnVubmluZyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGlucHV0IGV2ZW50cy5cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgcmVzaXplU2VydmljZTogTnpSZXNpemVTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvc2l6ZSAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCgpO1xyXG4gICAgICB0aGlzLnJlc2l6ZVNlcnZpY2VcclxuICAgICAgICAuc3Vic2NyaWJlKClcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9zaXplICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==