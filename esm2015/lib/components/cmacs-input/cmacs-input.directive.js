import { __decorate } from "tslib";
import { Directive, Input, Optional, Self } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/bidi";
export class CmacsInputDirective {
    constructor(ngControl, renderer, elementRef, directionality) {
        this.ngControl = ngControl;
        this.directionality = directionality;
        this.borderless = false;
        this.size = 'default';
        this._disabled = false;
        this.disabled$ = new Subject();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.opened = false;
        renderer.addClass(elementRef.nativeElement, 'ant-input');
        renderer.addClass(elementRef.nativeElement, 'cmacs-input-fix');
    }
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    ngOnInit() {
        var _a, _b;
        if (this.ngControl) {
            (_a = this.ngControl.statusChanges) === null || _a === void 0 ? void 0 : _a.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$)).subscribe(() => {
                this.disabled$.next(this.ngControl.disabled);
            });
        }
        this.dir = this.directionality.value;
        (_b = this.directionality.change) === null || _b === void 0 ? void 0 : _b.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { disabled } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsInputDirective.ɵfac = function CmacsInputDirective_Factory(t) { return new (t || CmacsInputDirective)(i0.ɵɵdirectiveInject(i1.NgControl, 10), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsInputDirective, selectors: [["input", "cmacs-input", ""], ["textarea", "cmacs-input", ""]], hostVars: 13, hostBindings: function CmacsInputDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("disabled", ctx.disabled || null);
        i0.ɵɵclassProp("ant-input-disabled", ctx.disabled)("cmacs-input-opened", ctx.opened)("ant-input-lg", ctx.size === "large")("ant-input-sm", ctx.size === "small")("ant-input-borderless", ctx.borderless)("ant-input-rtl", ctx.dir === "rtl");
    } }, inputs: { borderless: "borderless", size: "size", disabled: "disabled", opened: "opened" }, exportAs: ["cmacsInput"], features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    InputBoolean()
], CmacsInputDirective.prototype, "borderless", void 0);
__decorate([
    InputBoolean()
], CmacsInputDirective.prototype, "opened", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsInputDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: 'input[cmacs-input],textarea[cmacs-input]',
                exportAs: 'cmacsInput',
                // tslint:disable-next-line: use-host-property-decorator
                host: {
                    '[class.ant-input-disabled]': 'disabled',
                    '[class.cmacs-input-opened]': 'opened',
                    '[class.ant-input-lg]': `size === 'large'`,
                    '[class.ant-input-sm]': `size === 'small'`,
                    '[class.ant-input-borderless]': 'borderless',
                    '[attr.disabled]': 'disabled || null',
                    '[class.ant-input-rtl]': `dir=== 'rtl'`
                }
            }]
    }], function () { return [{ type: i1.NgControl, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { borderless: [{
            type: Input
        }], size: [{
            type: Input
        }], disabled: [{
            type: Input
        }], opened: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWlucHV0L2NtYWNzLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWdDLFFBQVEsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3JJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFpQm5ELE1BQU0sT0FBTyxtQkFBbUI7SUFtQjlCLFlBQzZCLFNBQW9CLEVBQy9DLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ0YsY0FBOEI7UUFIdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUczQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF0QjNCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkMsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFXekMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUNuQyxRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBUXRDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6RCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBeEJELElBQ0ksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQWlCRCxRQUFROztRQUNOLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSwwQ0FBRSxJQUFJLENBQzlCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsRUFDOUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFFdkIsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsRUFBRTtTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDdkIsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7c0ZBeERVLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7O0FBQ0w7SUFBZixZQUFZLEVBQUU7dURBQW9CO0FBZ0JuQjtJQUFmLFlBQVksRUFBRTttREFBZ0I7dUZBakI3QixtQkFBbUI7Y0FmL0IsU0FBUztlQUFDO2dCQUNYLCtDQUErQztnQkFDN0MsUUFBUSxFQUFFLDBDQUEwQztnQkFDcEQsUUFBUSxFQUFFLFlBQVk7Z0JBQ3hCLHdEQUF3RDtnQkFDdEQsSUFBSSxFQUFFO29CQUNKLDRCQUE0QixFQUFFLFVBQVU7b0JBQ3hDLDRCQUE0QixFQUFFLFFBQVE7b0JBQ3RDLHNCQUFzQixFQUFFLGtCQUFrQjtvQkFDMUMsc0JBQXNCLEVBQUUsa0JBQWtCO29CQUMxQyw4QkFBOEIsRUFBRSxZQUFZO29CQUM1QyxpQkFBaUIsRUFBRSxrQkFBa0I7b0JBQ3JDLHVCQUF1QixFQUFFLGNBQWM7aUJBQ3hDO2FBQ0Y7O3NCQXFCSSxRQUFROztzQkFBSSxJQUFJOztzQkFHaEIsUUFBUTt3QkF0QmMsVUFBVTtrQkFBbEMsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUVGLFFBQVE7a0JBRFgsS0FBSztZQWNtQixNQUFNO2tCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2VsZiwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRpcmVjdGl2ZS1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW5wdXRbY21hY3MtaW5wdXRdLHRleHRhcmVhW2NtYWNzLWlucHV0XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0lucHV0JyxcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtaG9zdC1wcm9wZXJ0eS1kZWNvcmF0b3JcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy1pbnB1dC1vcGVuZWRdJzogJ29wZW5lZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1sZ10nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zbV0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ib3JkZXJsZXNzXSc6ICdib3JkZXJsZXNzJyxcclxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ydGxdJzogYGRpcj09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0lucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmxlc3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcclxuICB9XHJcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcclxuICB9XHJcbiAgX2Rpc2FibGVkID0gZmFsc2U7XHJcbiAgZGlzYWJsZWQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1pbnB1dCcpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY21hY3MtaW5wdXQtZml4Jyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xyXG4gICAgICB0aGlzLm5nQ29udHJvbC5zdGF0dXNDaGFuZ2VzPy5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMubmdDb250cm9sLmRpc2FibGVkISk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCQubmV4dCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==