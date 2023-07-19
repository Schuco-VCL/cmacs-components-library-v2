import { __decorate } from "tslib";
import { Directive, Input, Optional } from '@angular/core';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
const NZ_CONFIG_MODULE_NAME = 'form';
export const DefaultTooltipIcon = {
    type: 'question-circle',
    theme: 'outline'
};
export class CmacsFormDirective {
    constructor(nzConfigService, elementRef, renderer, directionality) {
        var _a;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.cmacsLayout = 'horizontal';
        this.cmacsNoColon = false;
        this.cmacsAutoTips = {};
        this.cmacsDisableAutoTips = false;
        this.cmacsTooltipIcon = DefaultTooltipIcon;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.inputChanges$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    getInputObservable(changeType) {
        return this.inputChanges$.pipe(filter(changes => changeType in changes), map(value => value[changeType]));
    }
    ngOnChanges(changes) {
        this.inputChanges$.next(changes);
    }
    ngOnDestroy() {
        this.inputChanges$.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsFormDirective.ɵfac = function CmacsFormDirective_Factory(t) { return new (t || CmacsFormDirective)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsFormDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsFormDirective, selectors: [["", "cmacs-form", ""]], hostVars: 8, hostBindings: function CmacsFormDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-form-horizontal", ctx.cmacsLayout === "horizontal")("ant-form-vertical", ctx.cmacsLayout === "vertical")("ant-form-inline", ctx.cmacsLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
    } }, inputs: { cmacsLayout: "cmacsLayout", cmacsNoColon: "cmacsNoColon", cmacsAutoTips: "cmacsAutoTips", cmacsDisableAutoTips: "cmacsDisableAutoTips", cmacsTooltipIcon: "cmacsTooltipIcon" }, exportAs: ["cmacsForm"], features: [i0.ɵɵNgOnChangesFeature] });
__decorate([
    WithConfig(),
    InputBoolean()
], CmacsFormDirective.prototype, "cmacsNoColon", void 0);
__decorate([
    WithConfig()
], CmacsFormDirective.prototype, "cmacsAutoTips", void 0);
__decorate([
    InputBoolean()
], CmacsFormDirective.prototype, "cmacsDisableAutoTips", void 0);
__decorate([
    WithConfig()
], CmacsFormDirective.prototype, "cmacsTooltipIcon", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsFormDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacs-form]',
                exportAs: 'cmacsForm',
                host: {
                    '[class.ant-form-horizontal]': `cmacsLayout === 'horizontal'`,
                    '[class.ant-form-vertical]': `cmacsLayout === 'vertical'`,
                    '[class.ant-form-inline]': `cmacsLayout === 'inline'`,
                    '[class.ant-form-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { cmacsLayout: [{
            type: Input
        }], cmacsNoColon: [{
            type: Input
        }], cmacsAutoTips: [{
            type: Input
        }], cmacsDisableAutoTips: [{
            type: Input
        }], cmacsTooltipIcon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXdCLFFBQVEsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFHckksT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4RCxNQUFNLHFCQUFxQixHQUFnQixNQUFNLENBQUM7QUFJbEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixLQUFLLEVBQUUsU0FBUztDQUNSLENBQUM7QUFZWCxNQUFNLE9BQU8sa0JBQWtCO0lBb0I3QixZQUNTLGVBQWdDLEVBQ3ZDLFVBQXNCLEVBQ2QsUUFBbUIsRUFDUCxjQUE4Qjs7UUFIM0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRS9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2QjNDLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO1FBRW5ELGdCQUFXLEdBQXFCLFlBQVksQ0FBQztRQUNmLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlDLGtCQUFhLEdBQTJDLEVBQUUsQ0FBQztRQUN6RCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDL0IscUJBQWdCLEdBQWdELGtCQUFrQixDQUFDO1FBRTFHLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQWVuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLENBQUMsRUFBRTtJQUNMLENBQUM7SUFuQkQsa0JBQWtCLENBQXVCLFVBQWE7UUFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxFQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQyxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBZ0JELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O29GQTFDVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7O0FBSVU7SUFBN0IsVUFBVSxFQUFFO0lBQUUsWUFBWSxFQUFFO3dEQUErQjtBQUM5QztJQUFiLFVBQVUsRUFBRTt5REFBNEQ7QUFDekQ7SUFBZixZQUFZLEVBQUU7Z0VBQThCO0FBQy9CO0lBQWIsVUFBVSxFQUFFOzREQUFvRjt1RkFQL0Ysa0JBQWtCO2NBVjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSw4QkFBOEI7b0JBQzdELDJCQUEyQixFQUFFLDRCQUE0QjtvQkFDekQseUJBQXlCLEVBQUUsMEJBQTBCO29CQUNyRCxzQkFBc0IsRUFBRSxlQUFlO2lCQUN4QzthQUNGOztzQkF5QkksUUFBUTt3QkFyQkYsV0FBVztrQkFBbkIsS0FBSztZQUNpQyxZQUFZO2tCQUFsRCxLQUFLO1lBQ2lCLGFBQWE7a0JBQW5DLEtBQUs7WUFDbUIsb0JBQW9CO2tCQUE1QyxLQUFLO1lBQ2lCLGdCQUFnQjtrQkFBdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRPYnNlcnZhYmxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2Zvcm0nO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpGb3JtTGF5b3V0VHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJztcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0VG9vbHRpcEljb24gPSB7XHJcbiAgdHlwZTogJ3F1ZXN0aW9uLWNpcmNsZScsXHJcbiAgdGhlbWU6ICdvdXRsaW5lJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3MtZm9ybV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWhvcml6b250YWxdJzogYGNtYWNzTGF5b3V0ID09PSAnaG9yaXpvbnRhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS12ZXJ0aWNhbF0nOiBgY21hY3NMYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pbmxpbmVdJzogYGNtYWNzTGF5b3V0ID09PSAnaW5saW5lJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0Zvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgSW5wdXRPYnNlcnZhYmxlIHtcclxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcclxuXHJcbiAgQElucHV0KCkgY21hY3NMYXlvdXQ6IE56Rm9ybUxheW91dFR5cGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgY21hY3NOb0NvbG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBjbWFjc0F1dG9UaXBzOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHt9O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc0Rpc2FibGVBdXRvVGlwcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY21hY3NUb29sdGlwSWNvbjogc3RyaW5nIHwgeyB0eXBlOiBzdHJpbmc7IHRoZW1lOiBUaGVtZVR5cGUgfSA9IERlZmF1bHRUb29sdGlwSWNvbjtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBpbnB1dENoYW5nZXMkID0gbmV3IFN1YmplY3Q8U2ltcGxlQ2hhbmdlcz4oKTtcclxuXHJcbiAgZ2V0SW5wdXRPYnNlcnZhYmxlPEsgZXh0ZW5kcyBrZXlvZiB0aGlzPihjaGFuZ2VUeXBlOiBLKTogT2JzZXJ2YWJsZTxTaW1wbGVDaGFuZ2U+IHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0Q2hhbmdlcyQucGlwZShcclxuICAgICAgZmlsdGVyKGNoYW5nZXMgPT4gY2hhbmdlVHlwZSBpbiBjaGFuZ2VzKSxcclxuICAgICAgbWFwKHZhbHVlID0+IHZhbHVlW2NoYW5nZVR5cGUgYXMgc3RyaW5nXSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybScpO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dENoYW5nZXMkLm5leHQoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRDaGFuZ2VzJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==