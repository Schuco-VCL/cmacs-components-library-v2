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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXdCLFFBQVEsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFHckksT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4RCxNQUFNLHFCQUFxQixHQUFnQixNQUFNLENBQUM7QUFJbEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixLQUFLLEVBQUUsU0FBUztDQUNSLENBQUM7QUFZWCxNQUFNLE9BQU8sa0JBQWtCO0lBb0I3QixZQUNTLGVBQWdDLEVBQ3ZDLFVBQXNCLEVBQ2QsUUFBbUIsRUFDUCxjQUE4Qjs7UUFIM0Msb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBRS9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF2QjNDLGtCQUFhLEdBQWdCLHFCQUFxQixDQUFDO1FBRW5ELGdCQUFXLEdBQXFCLFlBQVksQ0FBQztRQUNmLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlDLGtCQUFhLEdBQTJDLEVBQUUsQ0FBQztRQUN6RCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDL0IscUJBQWdCLEdBQWdELGtCQUFrQixDQUFDO1FBRTFHLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakIsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQWVuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFDckMsTUFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sMENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLENBQUMsRUFBRTtJQUNMLENBQUM7SUFuQkQsa0JBQWtCLENBQXVCLFVBQWE7UUFDcEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxFQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQyxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBZ0JELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O29GQTFDVSxrQkFBa0I7dURBQWxCLGtCQUFrQjs7O0FBSVU7SUFBN0IsVUFBVSxFQUFFO0lBQUUsWUFBWSxFQUFFO3dEQUErQjtBQUM5QztJQUFiLFVBQVUsRUFBRTt5REFBNEQ7QUFDekQ7SUFBZixZQUFZLEVBQUU7Z0VBQThCO0FBQy9CO0lBQWIsVUFBVSxFQUFFOzREQUFvRjt1RkFQL0Ysa0JBQWtCO2NBVjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSiw2QkFBNkIsRUFBRSw4QkFBOEI7b0JBQzdELDJCQUEyQixFQUFFLDRCQUE0QjtvQkFDekQseUJBQXlCLEVBQUUsMEJBQTBCO29CQUNyRCxzQkFBc0IsRUFBRSxlQUFlO2lCQUN4QzthQUNGOztzQkF5QkksUUFBUTt3QkFyQkYsV0FBVztrQkFBbkIsS0FBSztZQUNpQyxZQUFZO2tCQUFsRCxLQUFLO1lBQ2lCLGFBQWE7a0JBQW5DLEtBQUs7WUFDbUIsb0JBQW9CO2tCQUE1QyxLQUFLO1lBQ2lCLGdCQUFnQjtrQkFBdEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dE9ic2VydmFibGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdmb3JtJztcblxuZXhwb3J0IHR5cGUgTnpGb3JtTGF5b3V0VHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnaW5saW5lJztcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb29sdGlwSWNvbiA9IHtcbiAgdHlwZTogJ3F1ZXN0aW9uLWNpcmNsZScsXG4gIHRoZW1lOiAnb3V0bGluZSdcbn0gYXMgY29uc3Q7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjbWFjcy1mb3JtXScsXG4gIGV4cG9ydEFzOiAnY21hY3NGb3JtJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taG9yaXpvbnRhbF0nOiBgY21hY3NMYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS12ZXJ0aWNhbF0nOiBgY21hY3NMYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LWZvcm0taW5saW5lXSc6IGBjbWFjc0xheW91dCA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LWZvcm0tcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzRm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBJbnB1dE9ic2VydmFibGUge1xuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcblxuICBASW5wdXQoKSBjbWFjc0xheW91dDogTnpGb3JtTGF5b3V0VHlwZSA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXRCb29sZWFuKCkgY21hY3NOb0NvbG9uOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY21hY3NBdXRvVGlwczogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzRGlzYWJsZUF1dG9UaXBzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY21hY3NUb29sdGlwSWNvbjogc3RyaW5nIHwgeyB0eXBlOiBzdHJpbmc7IHRoZW1lOiBUaGVtZVR5cGUgfSA9IERlZmF1bHRUb29sdGlwSWNvbjtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgaW5wdXRDaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+KCk7XG5cbiAgZ2V0SW5wdXRPYnNlcnZhYmxlPEsgZXh0ZW5kcyBrZXlvZiB0aGlzPihjaGFuZ2VUeXBlOiBLKTogT2JzZXJ2YWJsZTxTaW1wbGVDaGFuZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dENoYW5nZXMkLnBpcGUoXG4gICAgICBmaWx0ZXIoY2hhbmdlcyA9PiBjaGFuZ2VUeXBlIGluIGNoYW5nZXMpLFxuICAgICAgbWFwKHZhbHVlID0+IHZhbHVlW2NoYW5nZVR5cGUgYXMgc3RyaW5nXSlcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0nKTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRDaGFuZ2VzJC5uZXh0KGNoYW5nZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dENoYW5nZXMkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=