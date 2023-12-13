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
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.moveLeft()); });
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.isDisableLeft());
} }
function CmacsButtonGroupComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function CmacsButtonGroupComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.moveRight()); });
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
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsButtonGroupComponent_Factory(t) { return new (t || CmacsButtonGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsButtonGroupComponent, selectors: [["cmacs-button-group"]], contentQueries: function CmacsButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsButtonComponent, 4);
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
        } }, dependencies: [i2.NgIf, i3.CmacsButtonComponent], encapsulation: 2, changeDetection: 0 }); }
}
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
        args: [{ selector: 'cmacs-button-group', exportAs: 'cmacsButtonGroup', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, host: {
                    '[class.ant-btn-group-lg]': `size === 'large'`,
                    '[class.ant-btn-group-sm]': `size === 'small'`,
                    '[class.ant-btn-group-rtl]': `dir === 'rtl'`
                }, template: "<button cmacs-button role=\"button\" aria-label=\"Left arrow\" [disabled]=\"isDisableLeft()\" *ngIf=\"overlap\" (click)=\"moveLeft()\">\r\n    <i class=\"iconArrowLarge-Chevron-Left\"></i>\r\n</button>\r\n\r\n<ng-content></ng-content>\r\n\r\n<button cmacs-button role=\"button\" aria-label=\"right arrow\" [disabled]=\"isDisableRight()\" *ngIf=\"overlap\" (click)=\"moveRight()\">\r\n    <i class=\"iconArrowLarge-Chevron-Right\"></i>\r\n</button>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQXFCLFFBQVEsRUFBRSxpQkFBaUIsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsSyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7SUNMaEUsaUNBQTZIO0lBQXJCLHlLQUFTLGVBQUEsaUJBQVUsQ0FBQSxJQUFDO0lBQ3hILHVCQUEyQztJQUMvQyxpQkFBUzs7O0lBRmtELGlEQUE0Qjs7OztJQU12RixpQ0FBZ0k7SUFBdEIseUtBQVMsZUFBQSxrQkFBVyxDQUFBLElBQUM7SUFDM0gsdUJBQTRDO0lBQ2hELGlCQUFTOzs7SUFGbUQsa0RBQTZCOzs7QURrQnpGLE1BQU0sT0FBTyx5QkFBeUI7SUFZcEMsWUFBb0IsVUFBc0IsRUFBc0IsY0FBOEI7UUFBMUUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7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SmxDLHlCQUF5QjtjQWZyQyxTQUFTOzJCQUVFLG9CQUFvQixZQUNwQixrQkFBa0IsbUJBQ1gsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSyxRQUNwQjtvQkFDSiwwQkFBMEIsRUFBRSxrQkFBa0I7b0JBQzlDLDBCQUEwQixFQUFFLGtCQUFrQjtvQkFDOUMsMkJBQTJCLEVBQUUsZUFBZTtpQkFDN0M7O3NCQWdCNEMsUUFBUTt3QkFYNUMsSUFBSTtrQkFBWixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBTWlDLGNBQWM7a0JBQXBELGVBQWU7bUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb250ZW50Q2hpbGRyZW4sIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgVmlld0VuY2Fwc3VsYXRpb24sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgQ21hY3NCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uR3JvdXBTaXplID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLWJ1dHRvbi1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0J1dHRvbkdyb3VwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1idG4tZ3JvdXAtbGddJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1ncm91cC1zbV0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1idXR0b24tZ3JvdXAuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0J1dHRvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIHNpemU6IE56QnV0dG9uR3JvdXBTaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvdmVybGFwID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkTmF2ID0gZmFsc2U7XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGJ1dHRvbnM6IENtYWNzQnV0dG9uQ29tcG9uZW50W10gPSBbXTtcclxuICBpbmRleEJ0biA9IDA7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc0J1dHRvbkNvbXBvbmVudCkgY29udGVudEJ1dHRvbnM6IFF1ZXJ5TGlzdDxDbWFjc0J1dHRvbkNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1idG4tZ3JvdXAnKTtcclxuICB9IFxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25zID0gdGhpcy5jb250ZW50QnV0dG9ucy50b0FycmF5KCk7XHJcbiAgICBpZiAodGhpcy5vdmVybGFwKSB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zW2luZGV4XS5oaWRlQnRuKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2YgdGhpcy5idXR0b25zKSB7XHJcbiAgICAgICAgaXRlcmF0b3IuZGlzYWJsZWRCdG4oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUxlZnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bi0tXS5oaWRlQnRuKCk7XHJcbiAgICB0aGlzLmJ1dHRvbnNbdGhpcy5pbmRleEJ0bl0uc2hvd0J0bigpO1xyXG4gIH1cclxuXHJcbiAgbW92ZVJpZ2h0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5idXR0b25zW3RoaXMuaW5kZXhCdG4rK10uaGlkZUJ0bigpO1xyXG4gICAgdGhpcy5idXR0b25zW3RoaXMuaW5kZXhCdG5dLnNob3dCdG4oKTtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZUxlZnQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleEJ0biA9PT0gMCB8fCB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWROYXY7XHJcbiAgfVxyXG5cclxuICBpc0Rpc2FibGVSaWdodCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4QnRuID09PSB0aGlzLmJ1dHRvbnMubGVuZ3RoIC0gMSB8fCB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZGlzYWJsZWROYXY7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cclxufVxyXG4iLCI8YnV0dG9uIGNtYWNzLWJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkxlZnQgYXJyb3dcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlTGVmdCgpXCIgKm5nSWY9XCJvdmVybGFwXCIgKGNsaWNrKT1cIm1vdmVMZWZ0KClcIj5cclxuICAgIDxpIGNsYXNzPVwiaWNvbkFycm93TGFyZ2UtQ2hldnJvbi1MZWZ0XCI+PC9pPlxyXG48L2J1dHRvbj5cclxuXHJcbjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuXHJcbjxidXR0b24gY21hY3MtYnV0dG9uIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwicmlnaHQgYXJyb3dcIiBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlUmlnaHQoKVwiICpuZ0lmPVwib3ZlcmxhcFwiIChjbGljayk9XCJtb3ZlUmlnaHQoKVwiPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uQXJyb3dMYXJnZS1DaGV2cm9uLVJpZ2h0XCI+PC9pPlxyXG48L2J1dHRvbj5cclxuIl19