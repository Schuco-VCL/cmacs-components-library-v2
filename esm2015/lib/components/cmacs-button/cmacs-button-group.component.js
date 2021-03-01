import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ContentChildren, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CmacsButtonComponent } from './cmacs-button.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "./cmacs-button.component";
function CmacsButtonGroupComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveLeft(); });
    i0.ɵɵelement(1, "i", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.isDisableLeft());
} }
function CmacsButtonGroupComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moveRight(); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.isDisableRight());
} }
const _c0 = ["*"];
export class CmacsButtonGroupComponent {
    constructor(elementRef, directionality) {
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.size = 'default';
        this.overlap = false;
        this.disabled = false;
        this.disabledNav = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.buttons = [];
        this.indexBtn = 0;
        this.elementRef.nativeElement.classList.add('ant-btn-group');
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.buttons = this.contentButtons.toArray();
        if (this.overlap) {
            for (let index = 1; index < this.buttons.length; index++) {
                this.buttons[index].hideBtn();
            }
        }
        if (this.disabled) {
            for (const iterator of this.buttons) {
                iterator.disabledBtn();
            }
        }
    }
    moveLeft() {
        this.buttons[this.indexBtn--].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    moveRight() {
        this.buttons[this.indexBtn++].hideBtn();
        this.buttons[this.indexBtn].showBtn();
    }
    isDisableLeft() {
        return this.indexBtn === 0 || this.disabled || this.disabledNav;
    }
    isDisableRight() {
        return this.indexBtn === this.buttons.length - 1 || this.disabled || this.disabledNav;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsButtonGroupComponent.ɵfac = function CmacsButtonGroupComponent_Factory(t) { return new (t || CmacsButtonGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
CmacsButtonGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsButtonGroupComponent, selectors: [["cmacs-button-group"]], contentQueries: function CmacsButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsButtonComponent, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentButtons = _t);
    } }, hostVars: 6, hostBindings: function CmacsButtonGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-btn-group-lg", ctx.size === "large")("ant-btn-group-sm", ctx.size === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
    } }, inputs: { size: "size", overlap: "overlap", disabled: "disabled", disabledNav: "disabledNav" }, exportAs: ["cmacsButtonGroup"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["cmacs-button", "", 3, "disabled", "click", 4, "ngIf"], ["cmacs-button", "", 3, "disabled", "click"], [1, "iconArrowLarge-Chevron-Left"], [1, "iconArrowLarge-Chevron-Right"]], template: function CmacsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsButtonGroupComponent_button_0_Template, 2, 1, "button", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵtemplate(2, CmacsButtonGroupComponent_button_2_Template, 2, 1, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.overlap);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.overlap);
    } }, directives: [i2.NgIf, i3.CmacsButtonComponent], styles: [""], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "overlap", void 0);
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsButtonGroupComponent.prototype, "disabledNav", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonGroupComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-button-group',
                exportAs: 'cmacsButtonGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-btn-group-lg]': `size === 'large'`,
                    '[class.ant-btn-group-sm]': `size === 'small'`,
                    '[class.ant-btn-group-rtl]': `dir === 'rtl'`
                },
                styleUrls: ['./cmacs-button-group.component.css'],
                templateUrl: './cmacs-button-group.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { size: [{
            type: Input
        }], overlap: [{
            type: Input
        }], disabled: [{
            type: Input
        }], disabledNav: [{
            type: Input
        }], contentButtons: [{
            type: ContentChildren,
            args: [CmacsButtonComponent]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFFBQVEsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsSyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNMaEUsaUNBQXVGO0lBQXJCLDhMQUFvQjtJQUNsRix1QkFBMkM7SUFDL0MsaUJBQVM7OztJQUZZLGlEQUE0Qjs7OztJQU1qRCxpQ0FBeUY7SUFBdEIsK0xBQXFCO0lBQ3BGLHVCQUE0QztJQUNoRCxpQkFBUzs7O0lBRlksa0RBQTZCOzs7QURrQmxELE1BQU0sT0FBTyx5QkFBeUI7SUFZcEMsWUFBb0IsVUFBc0IsRUFBc0IsY0FBOEI7UUFBMUUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFYckYsU0FBSSxHQUFzQixTQUFTLENBQUM7UUFDcEIsWUFBTyxHQUFH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QyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBRTtvQkFDSiwwQkFBMEIsRUFBRSxrQkFBa0I7b0JBQzlDLDBCQUEwQixFQUFFLGtCQUFrQjtvQkFDOUMsMkJBQTJCLEVBQUUsZUFBZTtpQkFDN0M7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7O3NCQWE4QyxRQUFRO3dCQVg1QyxJQUFJO2tCQUFaLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFNaUMsY0FBYztrQkFBcEQsZUFBZTttQkFBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbnRlbnRDaGlsZHJlbiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBWaWV3RW5jYXBzdWxhdGlvbiwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBDbWFjc0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3MtYnV0dG9uLmNvbXBvbmVudCc7XHJcblxuZXhwb3J0IHR5cGUgTnpCdXR0b25Hcm91cFNpemUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3MtYnV0dG9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnV0dG9uR3JvdXAnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWJ0bi1ncm91cC1sZ10nOiBgc2l6ZSA9PT0gJ2xhcmdlJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWdyb3VwLXNtXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZ3JvdXAtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgc2l6ZTogTnpCdXR0b25Hcm91cFNpemUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG92ZXJsYXAgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWROYXYgPSBmYWxzZTtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgYnV0dG9uczogQ21hY3NCdXR0b25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGluZGV4QnRuID0gMDtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzQnV0dG9uQ29tcG9uZW50KSBjb250ZW50QnV0dG9uczogUXVlcnlMaXN0PENtYWNzQnV0dG9uQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWJ0bi1ncm91cCcpO1xyXG4gIH0gXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSB0aGlzLmNvbnRlbnRCdXR0b25zLnRvQXJyYXkoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXApIHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbnNbaW5kZXhdLmhpZGVCdG4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiB0aGlzLmJ1dHRvbnMpIHtcclxuICAgICAgICBpdGVyYXRvci5kaXNhYmxlZEJ0bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlTGVmdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuLS1dLmhpZGVCdG4oKTtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuXS5zaG93QnRuKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlUmlnaHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bisrXS5oaWRlQnRuKCk7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bl0uc2hvd0J0bigpO1xyXG4gIH1cclxuXHJcbiAgaXNEaXNhYmxlTGVmdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4QnRuID09PSAwIHx8IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZE5hdjtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZVJpZ2h0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhCdG4gPT09IHRoaXMuYnV0dG9ucy5sZW5ndGggLSAxIHx8IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZE5hdjtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxyXG59XHJcbiIsIjxidXR0b24gY21hY3MtYnV0dG9uIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVMZWZ0KClcIiAqbmdJZj1cIm92ZXJsYXBcIiAoY2xpY2spPVwibW92ZUxlZnQoKVwiPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLUxlZnRcIj48L2k+XHJcbjwvYnV0dG9uPlxyXG5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG5cclxuPGJ1dHRvbiBjbWFjcy1idXR0b24gW2Rpc2FibGVkXT1cImlzRGlzYWJsZVJpZ2h0KClcIiAqbmdJZj1cIm92ZXJsYXBcIiAoY2xpY2spPVwibW92ZVJpZ2h0KClcIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1SaWdodFwiPjwvaT5cclxuPC9idXR0b24+XHJcbiJdfQ==