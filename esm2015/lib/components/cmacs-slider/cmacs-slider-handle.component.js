import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./slider.service";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "@angular/common";
const _c0 = ["handle"];
export class CmacsSliderHandleComponent {
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.dir = 'ltr';
        this.style = {};
        this.enterHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse, dir } = changes;
        if (offset || reverse || dir) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
        }
    }
    updateStyle() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const offset = this.offset;
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { transform: `translateX(${reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-'}50%)` });
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
    getHorizontalStylePosition() {
        let left = this.reverse ? 'auto' : `${this.offset}%`;
        let right = this.reverse ? `${this.offset}%` : 'auto';
        if (this.dir === 'rtl') {
            const tmp = left;
            left = right;
            right = tmp;
        }
        return { left, right };
    }
}
CmacsSliderHandleComponent.ɵfac = function CmacsSliderHandleComponent_Factory(t) { return new (t || CmacsSliderHandleComponent)(i0.ɵɵdirectiveInject(i1.NzSliderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsSliderHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderHandleComponent, selectors: [["cmacs-slider-handle"]], viewQuery: function CmacsSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(NzTooltipDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.handleEl = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function CmacsSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function CmacsSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function CmacsSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipVisible: "tooltipVisible", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter", active: "active", dir: "dir" }, exportAs: ["cmacsSliderHandle"], features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function CmacsSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [i2.NzTooltipDirective, i3.NgStyle], styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSliderHandleComponent.prototype, "active", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderHandleComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-handle',
                exportAs: 'cmacsSliderHandle',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-handle.component.html',
                styleUrls: ['./cmacs-slider-handle.component.css'],
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: i1.NzSliderService }, { type: i0.ChangeDetectorRef }]; }, { handleEl: [{
            type: ViewChild,
            args: ['handle', { static: false }]
        }], tooltip: [{
            type: ViewChild,
            args: [NzTooltipDirective, { static: false }]
        }], vertical: [{
            type: Input
        }], reverse: [{
            type: Input
        }], offset: [{
            type: Input
        }], value: [{
            type: Input
        }], tooltipVisible: [{
            type: Input
        }], tooltipPlacement: [{
            type: Input
        }], tooltipFormatter: [{
            type: Input
        }], active: [{
            type: Input
        }], dir: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQWlCM0QsTUFBTSxPQUFPLDBCQUEwQjtJQWlCckMsWUFBb0IsYUFBOEIsRUFBVSxHQUFzQjtRQUE5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVR6RSxtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBR2hDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBNkI3QixnQkFBVyxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixJQUFJ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RTFCLGtCQUFrQjs7Ozs7O2lIQUZsQixpQkFBYSxnR0FBYixpQkFBYTs7UUNoQzFCLDRCQVFNOztRQUpELG1DQUFpQiw2R0FBQSwwQkFBQSw0Q0FBQTs7QUR1Q0s7SUFBZixZQUFZLEVBQUU7MERBQWdCO3VGQVg3QiwwQkFBMEI7Y0FidEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsZUFBZTtvQkFDL0IsY0FBYyxFQUFFLGVBQWU7aUJBQ2hDO2FBQ0Y7a0dBRXlDLFFBQVE7a0JBQS9DLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNZLE9BQU87a0JBQXhELFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXZDLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE56U2xpZGVyU2VydmljZSB9IGZyb20gJy4vc2xpZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelNsaWRlclNob3dUb29sdGlwIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXItaGFuZGxlJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVySGFuZGxlJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgJyhtb3VzZWVudGVyKSc6ICdlbnRlckhhbmRsZSgpJyxcclxuICAgICcobW91c2VsZWF2ZSknOiAnbGVhdmVIYW5kbGUoKSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgnaGFuZGxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIGhhbmRsZUVsPzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA/OiBOelRvb2x0aXBEaXJlY3RpdmU7XHJcblxyXG4gIEBJbnB1dCgpIHZlcnRpY2FsPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZXZlcnNlPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBvZmZzZXQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdmFsdWU/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgdG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudD86IHN0cmluZztcclxuICBASW5wdXQoKSB0b29sdGlwRm9ybWF0dGVyPzogbnVsbCB8ICgodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nKTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWN0aXZlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgdG9vbHRpcFRpdGxlPzogc3RyaW5nO1xyXG4gIHN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyU2VydmljZTogTnpTbGlkZXJTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG9mZnNldCwgdmFsdWUsIGFjdGl2ZSwgdG9vbHRpcFZpc2libGUsIHJldmVyc2UsIGRpciB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAob2Zmc2V0IHx8IHJldmVyc2UgfHwgZGlyKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGl0bGUoKTtcclxuICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGlmIChhY3RpdmUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9vbHRpcFZpc2libGUgPy5jdXJyZW50VmFsdWUgPT09ICdhbHdheXMnKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b2dnbGVUb29sdGlwKHRydWUsIHRydWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnNsaWRlclNlcnZpY2UuaXNEcmFnZ2luZykge1xyXG4gICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZWF2ZUhhbmRsZSA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGZhbHNlKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVFbCA/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlVG9vbHRpcChzaG93OiBib29sZWFuLCBmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoIWZvcmNlICYmICh0aGlzLnRvb2x0aXBWaXNpYmxlICE9PSAnZGVmYXVsdCcgfHwgIXRoaXMudG9vbHRpcCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA/LnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9vbHRpcCA/LmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIgPyB0aGlzLnRvb2x0aXBGb3JtYXR0ZXIodGhpcy52YWx1ZSEpIDogYCR7dGhpcy52YWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy50b29sdGlwID8udXBkYXRlUG9zaXRpb24oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVN0eWxlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmVydGljYWwgPSB0aGlzLnZlcnRpY2FsO1xyXG4gICAgY29uc3QgcmV2ZXJzZSA9IHRoaXMucmV2ZXJzZTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0O1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uU3R5bGUgPSB2ZXJ0aWNhbFxyXG4gICAgICA/IHtcclxuICAgICAgICBbcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbSddOiBgJHtvZmZzZXR9JWAsXHJcbiAgICAgICAgW3JldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnXTogJ2F1dG8nLFxyXG4gICAgICAgIHRyYW5zZm9ybTogcmV2ZXJzZSA/IG51bGwgOiBgdHJhbnNsYXRlWSgrNTAlKWBcclxuICAgICAgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAuLi50aGlzLmdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCksXHJcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3JldmVyc2UgPyAodGhpcy5kaXIgPT09ICdydGwnID8gJy0nIDogJysnKSA6IHRoaXMuZGlyID09PSAncnRsJyA/ICcrJyA6ICctJ301MCUpYFxyXG4gICAgICB9O1xyXG5cclxuICAgIHRoaXMuc3R5bGUgPSBwb3NpdGlvblN0eWxlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCk6IHsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH0ge1xyXG4gICAgbGV0IGxlZnQgPSB0aGlzLnJldmVyc2UgPyAnYXV0bycgOiBgJHt0aGlzLm9mZnNldH0lYDtcclxuICAgIGxldCByaWdodCA9IHRoaXMucmV2ZXJzZSA/IGAke3RoaXMub2Zmc2V0fSVgIDogJ2F1dG8nO1xyXG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xyXG4gICAgICBjb25zdCB0bXAgPSBsZWZ0O1xyXG4gICAgICBsZWZ0ID0gcmlnaHQ7XHJcbiAgICAgIHJpZ2h0ID0gdG1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQgfTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAjaGFuZGxlXHJcbiAgICAgY2xhc3M9XCJhbnQtc2xpZGVyLWhhbmRsZVwiXHJcbiAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICBuei10b29sdGlwXHJcbiAgICAgW25nU3R5bGVdPVwic3R5bGVcIlxyXG4gICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0b29sdGlwRm9ybWF0dGVyID09PSBudWxsIHx8IHRvb2x0aXBWaXNpYmxlID09PSAnbmV2ZXInID8gbnVsbCA6IHRvb2x0aXBUaXRsZVwiXHJcbiAgICAgW256VG9vbHRpcFRyaWdnZXJdPVwibnVsbFwiXHJcbiAgICAgW256VG9vbHRpcFBsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCI+XHJcbjwvZGl2PlxyXG4iXX0=