import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "./slider.service";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
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
        if (tooltipVisible?.currentValue === 'always') {
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        this.handleEl?.nativeElement.focus();
    }
    toggleTooltip(show, force = false) {
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            this.tooltip?.show();
        }
        else {
            this.tooltip?.hide();
        }
    }
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => this.tooltip?.updatePosition());
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
            : {
                ...this.getHorizontalStylePosition(),
                transform: `translateX(${reverse ? (this.dir === 'rtl' ? '-' : '+') : this.dir === 'rtl' ? '+' : '-'}50%)`
            };
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
    static { this.ɵfac = function CmacsSliderHandleComponent_Factory(t) { return new (t || CmacsSliderHandleComponent)(i0.ɵɵdirectiveInject(i1.NzSliderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSliderHandleComponent, selectors: [["cmacs-slider-handle"]], viewQuery: function CmacsSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(NzTooltipDirective, 5);
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
        } }, dependencies: [i2.NgStyle, i3.NzTooltipDirective], styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsSliderHandleComponent.prototype, "active", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderHandleComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, selector: 'cmacs-slider-handle', exportAs: 'cmacsSliderHandle', preserveWhitespaces: false, host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }, template: "<div #handle\r\n     class=\"ant-slider-handle\"\r\n     tabindex=\"0\"\r\n     nz-tooltip\r\n     [ngStyle]=\"style\"\r\n     [nzTooltipTitle]=\"tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle\"\r\n     [nzTooltipTrigger]=\"null\"\r\n     [nzTooltipPlacement]=\"tooltipPlacement\">\r\n</div>\r\n", styles: [".ant-slider-handle{background-color:#2a7cff;border:none}.ant-slider-disabled .ant-slider-handle{background-color:#cfd3d9}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2xpZGVyL2NtYWNzLXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXNsaWRlci9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxLQUFLLEVBR0wsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQWlCM0QsTUFBTSxPQUFPLDBCQUEwQjtJQWlCckMsWUFBb0IsYUFBOEIsRUFBVSxHQUFzQjtRQUE5RCxrQkFBYSxHQUFiLGFBQWEsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVR6RSxtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBR2hDLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBNkI3QixnQkFBVyxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUM3QixJQUFJ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aUJBQWEsZ0dBQWIsaUJBQWE7O1lDaEMxQiw0QkFRTTs7WUFKRCxtQ0FBaUIsNkdBQUEsMEJBQUEsNENBQUE7OztBRHVDSztJQUFmLFlBQVksRUFBRTswREFBZ0I7dUZBWDdCLDBCQUEwQjtjQWJ0QyxTQUFTO2tDQUNTLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksWUFDM0IscUJBQXFCLFlBQ3JCLG1CQUFtQix1QkFDUixLQUFLLFFBR3BCO29CQUNKLGNBQWMsRUFBRSxlQUFlO29CQUMvQixjQUFjLEVBQUUsZUFBZTtpQkFDaEM7a0dBR3VDLFFBQVE7a0JBQS9DLFNBQVM7bUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNZLE9BQU87a0JBQXhELFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXZDLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL3NsaWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE56U2xpZGVyU2hvd1Rvb2x0aXAgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci1oYW5kbGUnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTbGlkZXJIYW5kbGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnKG1vdXNlZW50ZXIpJzogJ2VudGVySGFuZGxlKCknLFxyXG4gICAgJyhtb3VzZWxlYXZlKSc6ICdsZWF2ZUhhbmRsZSgpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKCdoYW5kbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgaGFuZGxlRWw/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKE56VG9vbHRpcERpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvb2x0aXA/OiBOelRvb2x0aXBEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgdmVydGljYWw/OiBib29sZWFuO1xuICBASW5wdXQoKSByZXZlcnNlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgb2Zmc2V0PzogbnVtYmVyO1xuICBASW5wdXQoKSB2YWx1ZT86IG51bWJlcjtcbiAgQElucHV0KCkgdG9vbHRpcFZpc2libGU6IE56U2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBGb3JtYXR0ZXI/OiBudWxsIHwgKCh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgdG9vbHRpcFRpdGxlPzogc3RyaW5nO1xuICBzdHlsZTogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2xpZGVyU2VydmljZTogTnpTbGlkZXJTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9mZnNldCwgdmFsdWUsIGFjdGl2ZSwgdG9vbHRpcFZpc2libGUsIHJldmVyc2UsIGRpciB9ID0gY2hhbmdlcztcblxuICAgIGlmIChvZmZzZXQgfHwgcmV2ZXJzZSB8fCBkaXIpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRpdGxlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGlmIChhY3RpdmUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvb2x0aXBWaXNpYmxlID8uY3VycmVudFZhbHVlID09PSAnYWx3YXlzJykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnRvZ2dsZVRvb2x0aXAodHJ1ZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGVudGVySGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0cnVlKTtcbiAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGxlYXZlSGFuZGxlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zbGlkZXJTZXJ2aWNlLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcChmYWxzZSk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9O1xuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRWwgPy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVRvb2x0aXAoc2hvdzogYm9vbGVhbiwgZm9yY2U6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmICghZm9yY2UgJiYgKHRoaXMudG9vbHRpcFZpc2libGUgIT09ICdkZWZhdWx0JyB8fCAhdGhpcy50b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnRvb2x0aXAgPy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9vbHRpcCA/LmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMudG9vbHRpcEZvcm1hdHRlciA/IHRoaXMudG9vbHRpcEZvcm1hdHRlcih0aGlzLnZhbHVlISkgOiBgJHt0aGlzLnZhbHVlfWA7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMudG9vbHRpcCA/LnVwZGF0ZVBvc2l0aW9uKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3QgdmVydGljYWwgPSB0aGlzLnZlcnRpY2FsO1xuICAgIGNvbnN0IHJldmVyc2UgPSB0aGlzLnJldmVyc2U7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICBjb25zdCBwb3NpdGlvblN0eWxlID0gdmVydGljYWxcbiAgICAgID8ge1xuICAgICAgICBbcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbSddOiBgJHtvZmZzZXR9JWAsXG4gICAgICAgIFtyZXZlcnNlID8gJ2JvdHRvbScgOiAndG9wJ106ICdhdXRvJyxcbiAgICAgICAgdHJhbnNmb3JtOiByZXZlcnNlID8gbnVsbCA6IGB0cmFuc2xhdGVZKCs1MCUpYFxuICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgIC4uLnRoaXMuZ2V0SG9yaXpvbnRhbFN0eWxlUG9zaXRpb24oKSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3JldmVyc2UgPyAodGhpcy5kaXIgPT09ICdydGwnID8gJy0nIDogJysnKSA6IHRoaXMuZGlyID09PSAncnRsJyA/ICcrJyA6ICctJ301MCUpYFxuICAgICAgfTtcblxuICAgIHRoaXMuc3R5bGUgPSBwb3NpdGlvblN0eWxlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3Jpem9udGFsU3R5bGVQb3NpdGlvbigpOiB7IGxlZnQ6IHN0cmluZzsgcmlnaHQ6IHN0cmluZyB9IHtcbiAgICBsZXQgbGVmdCA9IHRoaXMucmV2ZXJzZSA/ICdhdXRvJyA6IGAke3RoaXMub2Zmc2V0fSVgO1xuICAgIGxldCByaWdodCA9IHRoaXMucmV2ZXJzZSA/IGAke3RoaXMub2Zmc2V0fSVgIDogJ2F1dG8nO1xuICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgIGNvbnN0IHRtcCA9IGxlZnQ7XG4gICAgICBsZWZ0ID0gcmlnaHQ7XG4gICAgICByaWdodCA9IHRtcDtcbiAgICB9XG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQgfTtcbiAgfVxyXG59XHJcbiIsIjxkaXYgI2hhbmRsZVxyXG4gICAgIGNsYXNzPVwiYW50LXNsaWRlci1oYW5kbGVcIlxyXG4gICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgbnotdG9vbHRpcFxyXG4gICAgIFtuZ1N0eWxlXT1cInN0eWxlXCJcclxuICAgICBbbnpUb29sdGlwVGl0bGVdPVwidG9vbHRpcEZvcm1hdHRlciA9PT0gbnVsbCB8fCB0b29sdGlwVmlzaWJsZSA9PT0gJ25ldmVyJyA/IG51bGwgOiB0b29sdGlwVGl0bGVcIlxyXG4gICAgIFtuelRvb2x0aXBUcmlnZ2VyXT1cIm51bGxcIlxyXG4gICAgIFtuelRvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiPlxyXG48L2Rpdj5cclxuIl19