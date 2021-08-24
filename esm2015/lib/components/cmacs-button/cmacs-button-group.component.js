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
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveLeft(); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.isDisableLeft());
} }
function CmacsButtonGroupComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moveRight(); });
    i0.ɵɵelement(1, "i", 5);
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
    } }, inputs: { size: "size", overlap: "overlap", disabled: "disabled", disabledNav: "disabledNav" }, exportAs: ["cmacsButtonGroup"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["cmacs-button", "", "role", "button", "aria-label", "Left arrow", 3, "disabled", "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", "aria-label", "right arrow", 3, "disabled", "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", "aria-label", "Left arrow", 3, "disabled", "click"], [1, "iconArrowLarge-Chevron-Left"], ["cmacs-button", "", "role", "button", "aria-label", "right arrow", 3, "disabled", "click"], [1, "iconArrowLarge-Chevron-Right"]], template: function CmacsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsButtonGroupComponent_button_0_Template, 2, 1, "button", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵtemplate(2, CmacsButtonGroupComponent_button_2_Template, 2, 1, "button", 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFFBQVEsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsSyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNMaEUsaUNBQTZIO0lBQXJCLDhMQUFvQjtJQUN4SCx1QkFBMkM7SUFDL0MsaUJBQVM7OztJQUZrRCxpREFBNEI7Ozs7SUFNdkYsaUNBQWdJO0lBQXRCLCtMQUFxQjtJQUMzSCx1QkFBNEM7SUFDaEQsaUJBQVM7OztJQUZtRCxrREFBNkI7OztBRGtCekYsTUFBTSxPQUFPLHlCQUF5QjtJQVlwQyxZQUFvQixVQUFzQixFQUFzQixjQUE4QjtRQUExRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQXNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVhyRixTQUFJLEdBQXNCLFNBQVMsQ0FBQztRQUNwQixZQUFPLEdB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QzdDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFFO29CQUNKLDBCQUEwQixFQUFFLGtCQUFrQjtvQkFDOUMsMEJBQTBCLEVBQUUsa0JBQWtCO29CQUM5QywyQkFBMkIsRUFBRSxlQUFlO2lCQUM3QztnQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQztnQkFDakQsV0FBVyxFQUFFLHFDQUFxQzthQUNuRDs7c0JBYThDLFFBQVE7d0JBWDVDLElBQUk7a0JBQVosS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQU1pQyxjQUFjO2tCQUFwRCxlQUFlO21CQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29udGVudENoaWxkcmVuLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdFbmNhcHN1bGF0aW9uLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IENtYWNzQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1idXR0b24uY29tcG9uZW50JztcclxuXG5leHBvcnQgdHlwZSBOekJ1dHRvbkdyb3VwU2l6ZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1idXR0b24tZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NCdXR0b25Hcm91cCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtYnRuLWdyb3VwLWxnXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZ3JvdXAtc21dJzogYHNpemUgPT09ICdzbWFsbCdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1ncm91cC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzaXplOiBOekJ1dHRvbkdyb3VwU2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3ZlcmxhcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZE5hdiA9IGZhbHNlO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBidXR0b25zOiBDbWFjc0J1dHRvbkNvbXBvbmVudFtdID0gW107XHJcbiAgaW5kZXhCdG4gPSAwO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NCdXR0b25Db21wb25lbnQpIGNvbnRlbnRCdXR0b25zOiBRdWVyeUxpc3Q8Q21hY3NCdXR0b25Db21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5KSB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtYnRuLWdyb3VwJyk7XHJcbiAgfSBcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9ucyA9IHRoaXMuY29udGVudEJ1dHRvbnMudG9BcnJheSgpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmxhcCkge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uc1tpbmRleF0uaGlkZUJ0bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuYnV0dG9ucykge1xyXG4gICAgICAgIGl0ZXJhdG9yLmRpc2FibGVkQnRuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmVMZWZ0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25zW3RoaXMuaW5kZXhCdG4tLV0uaGlkZUJ0bigpO1xyXG4gICAgdGhpcy5idXR0b25zW3RoaXMuaW5kZXhCdG5dLnNob3dCdG4oKTtcclxuICB9XHJcblxyXG4gIG1vdmVSaWdodCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuKytdLmhpZGVCdG4oKTtcclxuICAgIHRoaXMuYnV0dG9uc1t0aGlzLmluZGV4QnRuXS5zaG93QnRuKCk7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVMZWZ0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhCdG4gPT09IDAgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkTmF2O1xyXG4gIH1cclxuXHJcbiAgaXNEaXNhYmxlUmlnaHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleEJ0biA9PT0gdGhpcy5idXR0b25zLmxlbmd0aCAtIDEgfHwgdGhpcy5kaXNhYmxlZCB8fCB0aGlzLmRpc2FibGVkTmF2O1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XHJcbn1cclxuIiwiPGJ1dHRvbiBjbWFjcy1idXR0b24gcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJMZWZ0IGFycm93XCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZUxlZnQoKVwiICpuZ0lmPVwib3ZlcmxhcFwiIChjbGljayk9XCJtb3ZlTGVmdCgpXCI+XHJcbiAgICA8aSBjbGFzcz1cImljb25BcnJvd0xhcmdlLUNoZXZyb24tTGVmdFwiPjwvaT5cclxuPC9idXR0b24+XHJcblxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcblxyXG48YnV0dG9uIGNtYWNzLWJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInJpZ2h0IGFycm93XCIgW2Rpc2FibGVkXT1cImlzRGlzYWJsZVJpZ2h0KClcIiAqbmdJZj1cIm92ZXJsYXBcIiAoY2xpY2spPVwibW92ZVJpZ2h0KClcIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1SaWdodFwiPjwvaT5cclxuPC9idXR0b24+XHJcbiJdfQ==