import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzRadioService } from './radio.service';
import * as i0 from "@angular/core";
import * as i1 from "./radio.service";
import * as i2 from "@angular/cdk/bidi";
const _c0 = ["*"];
export class CmacsRadioGroupComponent {
    constructor(cdr, nzRadioService, elementRef, directionality) {
        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.value = null;
        this.destroy$ = new Subject();
        this.onChange = () => { };
        this.onTouched = () => { };
        this.disabled = false;
        this.buttonStyle = 'outline';
        this.size = 'default';
        this.name = null;
        this.dir = 'ltr';
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-radio-group');
    }
    ngOnInit() {
        var _a;
        this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            if (this.value !== value) {
                this.value = value;
                this.onChange(this.value);
            }
        });
        this.nzRadioService.touched$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            Promise.resolve().then(() => this.onTouched());
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { nzDisabled, nzName } = changes;
        if (nzDisabled) {
            this.nzRadioService.setDisabled(this.disabled);
        }
        if (nzName) {
            this.nzRadioService.setName(this.name);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.value = value;
        this.nzRadioService.select(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.nzRadioService.setDisabled(isDisabled);
        this.cdr.markForCheck();
    }
}
CmacsRadioGroupComponent.ɵfac = function CmacsRadioGroupComponent_Factory(t) { return new (t || CmacsRadioGroupComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzRadioService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsRadioGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsRadioGroupComponent, selectors: [["cmacs-radio-group"]], hostVars: 8, hostBindings: function CmacsRadioGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-radio-group-large", ctx.size === "large")("ant-radio-group-small", ctx.size === "small")("ant-radio-group-solid", ctx.buttonStyle === "solid")("ant-radio-group-rtl", ctx.dir === "rtl");
    } }, inputs: { disabled: "disabled", buttonStyle: "buttonStyle", size: "size", name: "name" }, exportAs: ["cmacsRadioGroup"], features: [i0.ɵɵProvidersFeature([
            NzRadioService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsRadioGroupComponent),
                multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsRadioGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsRadioGroupComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsRadioGroupComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-radio-group',
                exportAs: 'cmacsRadioGroup',
                preserveWhitespaces: false,
                templateUrl: './cmacs-radio-group.component.html',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    NzRadioService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsRadioGroupComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-group-large]': `size === 'large'`,
                    '[class.ant-radio-group-small]': `size === 'small'`,
                    '[class.ant-radio-group-solid]': `buttonStyle === 'solid'`,
                    '[class.ant-radio-group-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzRadioService }, { type: i0.ElementRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { disabled: [{
            type: Input
        }], buttonStyle: [{
            type: Input
        }], size: [{
            type: Input
        }], name: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXJhZGlvL2NtYWNzLXJhZGlvLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1yYWRpby9jbWFjcy1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQTBCakQsTUFBTSxPQUFPLHdCQUF3QjtJQWFuQyxZQUNVLEdBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLFVBQXNCLEVBQ1YsY0FBOEI7UUFIMUMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFmNUMsVUFBSyxHQUFxQixJQUFJLENBQUM7UUFDL0IsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7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aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnksIE56U2l6ZUxEU1R5cGUsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelJhZGlvU2VydmljZSB9IGZyb20gJy4vcmFkaW8uc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIE56UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXJhZGlvLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzUmFkaW9Hcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTnpSYWRpb1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1JhZGlvR3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cC1zb2xpZF0nOiBgYnV0dG9uU3R5bGUgPT09ICdzb2xpZCdgLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1JhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cbiAgcHJpdmF0ZSB2YWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7IH07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBidXR0b25TdHlsZTogTnpSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnO1xuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBuelJhZGlvU2VydmljZTogTnpSYWRpb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1yYWRpby1ncm91cCcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uelJhZGlvU2VydmljZS5zZWxlY3RlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubnpSYWRpb1NlcnZpY2UudG91Y2hlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TmFtZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gICAgaWYgKG56TmFtZSkge1xuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5zZXROYW1lKHRoaXMubmFtZSEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnNlbGVjdCh2YWx1ZSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==