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
    getInputObservable(changeType) {
        return this.inputChanges$.pipe(filter(changes => changeType in changes), map(value => value[changeType]));
    }
    constructor(nzConfigService, elementRef, renderer, directionality) {
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
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        this.inputChanges$.next(changes);
    }
    ngOnDestroy() {
        this.inputChanges$.complete();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsFormDirective_Factory(t) { return new (t || CmacsFormDirective)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsFormDirective, selectors: [["", "cmacs-form", ""]], hostVars: 8, hostBindings: function CmacsFormDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-form-horizontal", ctx.cmacsLayout === "horizontal")("ant-form-vertical", ctx.cmacsLayout === "vertical")("ant-form-inline", ctx.cmacsLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
        } }, inputs: { cmacsLayout: "cmacsLayout", cmacsNoColon: "cmacsNoColon", cmacsAutoTips: "cmacsAutoTips", cmacsDisableAutoTips: "cmacsDisableAutoTips", cmacsTooltipIcon: "cmacsTooltipIcon" }, exportAs: ["cmacsForm"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZm9ybS9mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXdCLFFBQVEsRUFBMEMsTUFBTSxlQUFlLENBQUM7QUFHckksT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV4RCxNQUFNLHFCQUFxQixHQUFnQixNQUFNLENBQUM7QUFJbEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixLQUFLLEVBQUUsU0FBUztDQUNSLENBQUM7QUFZWCxNQUFNLE9BQU8sa0JBQWtCO0lBYTdCLGtCQUFrQixDQUF1QixVQUFhO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsRUFDeEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUMsQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUVELFlBQ1MsZUFBZ0MsRUFDdkMsVUFBc0IsRUFDZCxRQUFtQixFQUNQLGNBQThCO1FBSDNDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUUvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ1AsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkIzQyxrQkFBYSxHQUFnQixxQkFBcUIsQ0FBQztRQUVuRCxnQkFBVyxHQUFxQixZQUFZLENBQUM7UUFDZixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QyxrQkFBYSxHQUEyQyxFQUFFLENBQUM7UUFDekQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHFCQUFnQixHQUFnRCxrQkFBa0IsQ0FBQztRQUUxRyxRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ3ZCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQWlCLENBQUM7UUFlbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO21GQTFDVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjs7OztBQUlVO0lBQTdCLFVBQVUsRUFBRTtJQUFFLFlBQVksRUFBRTt3REFBK0I7QUFDOUM7SUFBYixVQUFVLEVBQUU7eURBQTREO0FBQ3pEO0lBQWYsWUFBWSxFQUFFO2dFQUE4QjtBQUMvQjtJQUFiLFVBQVUsRUFBRTs0REFBb0Y7dUZBUC9GLGtCQUFrQjtjQVY5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osNkJBQTZCLEVBQUUsOEJBQThCO29CQUM3RCwyQkFBMkIsRUFBRSw0QkFBNEI7b0JBQ3pELHlCQUF5QixFQUFFLDBCQUEwQjtvQkFDckQsc0JBQXNCLEVBQUUsZUFBZTtpQkFDeEM7YUFDRjs7c0JBeUJJLFFBQVE7d0JBckJGLFdBQVc7a0JBQW5CLEtBQUs7WUFDaUMsWUFBWTtrQkFBbEQsS0FBSztZQUNpQixhQUFhO2tCQUFuQyxLQUFLO1lBQ21CLG9CQUFvQjtrQkFBNUMsS0FBSztZQUNpQixnQkFBZ0I7a0JBQXRDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0T2JzZXJ2YWJsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdmb3JtJztcclxuXHJcbmV4cG9ydCB0eXBlIE56Rm9ybUxheW91dFR5cGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ2lubGluZSc7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvb2x0aXBJY29uID0ge1xyXG4gIHR5cGU6ICdxdWVzdGlvbi1jaXJjbGUnLFxyXG4gIHRoZW1lOiAnb3V0bGluZSdcclxufSBhcyBjb25zdDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLWZvcm1dJyxcclxuICBleHBvcnRBczogJ2NtYWNzRm9ybScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1ob3Jpem9udGFsXSc6IGBjbWFjc0xheW91dCA9PT0gJ2hvcml6b250YWwnYCxcclxuICAgICdbY2xhc3MuYW50LWZvcm0tdmVydGljYWxdJzogYGNtYWNzTGF5b3V0ID09PSAndmVydGljYWwnYCxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taW5saW5lXSc6IGBjbWFjc0xheW91dCA9PT0gJ2lubGluZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIElucHV0T2JzZXJ2YWJsZSB7XHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzTGF5b3V0OiBOekZvcm1MYXlvdXRUeXBlID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0Qm9vbGVhbigpIGNtYWNzTm9Db2xvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgY21hY3NBdXRvVGlwczogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NEaXNhYmxlQXV0b1RpcHMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGNtYWNzVG9vbHRpcEljb246IHN0cmluZyB8IHsgdHlwZTogc3RyaW5nOyB0aGVtZTogVGhlbWVUeXBlIH0gPSBEZWZhdWx0VG9vbHRpcEljb247XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgaW5wdXRDaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PFNpbXBsZUNoYW5nZXM+KCk7XHJcblxyXG4gIGdldElucHV0T2JzZXJ2YWJsZTxLIGV4dGVuZHMga2V5b2YgdGhpcz4oY2hhbmdlVHlwZTogSyk6IE9ic2VydmFibGU8U2ltcGxlQ2hhbmdlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnB1dENoYW5nZXMkLnBpcGUoXHJcbiAgICAgIGZpbHRlcihjaGFuZ2VzID0+IGNoYW5nZVR5cGUgaW4gY2hhbmdlcyksXHJcbiAgICAgIG1hcCh2YWx1ZSA9PiB2YWx1ZVtjaGFuZ2VUeXBlIGFzIHN0cmluZ10pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0nKTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRDaGFuZ2VzJC5uZXh0KGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0Q2hhbmdlcyQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19