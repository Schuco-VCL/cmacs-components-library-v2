import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i0 from "@angular/core";
const _c0 = ["lightbox-button", ""];
const _c1 = ["*"];
const BUTTON_HOST_ATTRIBUTES = [
    'lightbox-button',
    'lightbox-icon-button'
];
export class LightboxButtonComponent {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.disable = false;
        this.hoverAnimation = 'leave';
        this._isIconButton = this._hasHostAttributes('lightbox-icon-button');
        for (const attr of BUTTON_HOST_ATTRIBUTES) {
            if (this._hasHostAttributes(attr)) {
                _elementRef.nativeElement.classList.add(attr);
            }
        }
    }
    ngOnChanges() {
        if (this.disable) {
            this._elementRef.nativeElement.classList.add('disable');
            if (this.hoverAnimation === 'enter') {
                this.hoverAnimation = 'leave';
            }
        }
        else {
            if (this._elementRef.nativeElement.classList.contains('disable')) {
                this._elementRef.nativeElement.classList.remove('disable');
            }
        }
    }
    _onMouseEnter() {
        if (!this.disable) {
            this.hoverAnimation = 'enter';
        }
    }
    _onMouseLeave() {
        this.hoverAnimation = 'leave';
    }
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    _hasHostAttributes(...attributes) {
        return attributes.some((attribute) => this._getHostElement().hasAttribute(attribute));
    }
    static { this.ɵfac = function LightboxButtonComponent_Factory(t) { return new (t || LightboxButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LightboxButtonComponent, selectors: [["button", "lightbox-button", ""], ["button", "lightbox-icon-button", ""]], hostBindings: function LightboxButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseenter", function LightboxButtonComponent_mouseenter_HostBindingHandler() { return ctx._onMouseEnter(); })("mouseleave", function LightboxButtonComponent_mouseleave_HostBindingHandler() { return ctx._onMouseLeave(); });
        } }, inputs: { disable: "disable" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function LightboxButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["[_nghost-%COMP%]{color:#656c79;border:none;cursor:pointer;height:20px;width:20px;border-radius:50%;position:relative;background-color:transparent;padding:0;outline:none}[_nghost-%COMP%]   .button-focus-overlay[_ngcontent-%COMP%]{inset:0;position:absolute;pointer-events:none;border-radius:50%;background-color:#fff0!important}.disable[_nghost-%COMP%]{opacity:.5;cursor:default}"], data: { animation: [
                trigger('hoverAnimation', [
                    state('enter', style({ backgroundColor: 'rgba(255, 255, 255, 0.3)' })),
                    state('leave', style({ backgroundColor: 'rgba(255, 255, 255, 0)' })),
                    transition('leave => enter', [
                        animate('.1s')
                    ]),
                    transition('enter => leave', [
                        animate('.1s')
                    ])
                ])
            ] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxButtonComponent, [{
        type: Component,
        args: [{ selector: 'button[lightbox-button], button[lightbox-icon-button]', animations: [
                    trigger('hoverAnimation', [
                        state('enter', style({ backgroundColor: 'rgba(255, 255, 255, 0.3)' })),
                        state('leave', style({ backgroundColor: 'rgba(255, 255, 255, 0)' })),
                        transition('leave => enter', [
                            animate('.1s')
                        ]),
                        transition('enter => leave', [
                            animate('.1s')
                        ])
                    ])
                ], host: {
                    '(mouseenter)': '_onMouseEnter()',
                    '(mouseleave)': '_onMouseLeave()'
                }, template: "<!--<div class=\"button-focus-overlay\" [@hoverAnimation]=\"hoverAnimation\">-->\r\n<ng-content></ng-content>\r\n<!--</div>-->\r\n\r\n", styles: [":host{color:#656c79;border:none;cursor:pointer;height:20px;width:20px;border-radius:50%;position:relative;background-color:transparent;padding:0;outline:none}:host .button-focus-overlay{inset:0;position:absolute;pointer-events:none;border-radius:50%;background-color:#fff0!important}:host.disable{opacity:.5;cursor:default}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { disable: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9jb21wb25lbnRzL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtYnV0dG9uL2xpZ2h0Ym94LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpGLE1BQU0sc0JBQXNCLEdBQUc7SUFDM0IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QixDQUFDO0FBeUJGLE1BQU0sT0FBTyx1QkFBdUI7SUFRaEMsWUFDWSxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVBuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRWxDLG1CQUFjLEdBQXNCLE9BQU8sQ0FBQztRQUUzQyxrQkFBYSxHQUFZLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBSzdFLEtBQUssTUFBTSxJQUFJLElBQUksc0JBQXNCLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEU7U0FDSjtJQUNMLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekUsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sRUFBRTtnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsSUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQTZCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0U7U0FDSjtJQUNMLENBQUM7SUFFTyxhQUFhO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRU8sZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFHLFVBQW9CO1FBQzlDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7d0ZBbERRLHVCQUF1QjtvRUFBdkIsdUJBQXVCO2tIQUF2QixtQkFBZSw2RkFBZixtQkFBZTs7O1lDOUI1QixrQkFBeUI7dWFEV1Q7Z0JBQ1IsT0FBTyxDQUFDLGdCQUFnQixFQUFFO29CQUN0QixLQUFLLENBQUMsT0FBTyxFQUNULEtBQUssQ0FBQyxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7b0JBQzNELEtBQUssQ0FBQyxPQUFPLEVBQ1QsS0FBSyxDQUFDLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQztvQkFDekQsVUFBVSxDQUFDLGdCQUFnQixFQUFFO3dCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDO3FCQUNqQixDQUFDO29CQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFDakIsQ0FBQztpQkFDTCxDQUFDO2FBQ0w7O3VGQU1RLHVCQUF1QjtjQXZCbkMsU0FBUzsyQkFDSSx1REFBdUQsY0FHckQ7b0JBQ1IsT0FBTyxDQUFDLGdCQUFnQixFQUFFO3dCQUN0QixLQUFLLENBQUMsT0FBTyxFQUNULEtBQUssQ0FBQyxFQUFFLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSxDQUFDLENBQUM7d0JBQzNELEtBQUssQ0FBQyxPQUFPLEVBQ1QsS0FBSyxDQUFDLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQzt3QkFDekQsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzRCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDO3lCQUNqQixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQzt5QkFDakIsQ0FBQztxQkFDTCxDQUFDO2lCQUNMLFFBQ0s7b0JBQ0YsY0FBYyxFQUFFLGlCQUFpQjtvQkFDakMsY0FBYyxFQUFFLGlCQUFpQjtpQkFDcEM7NkRBSWUsT0FBTztrQkFBdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbmNvbnN0IEJVVFRPTl9IT1NUX0FUVFJJQlVURVMgPSBbXHJcbiAgICAnbGlnaHRib3gtYnV0dG9uJyxcclxuICAgICdsaWdodGJveC1pY29uLWJ1dHRvbidcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdidXR0b25bbGlnaHRib3gtYnV0dG9uXSwgYnV0dG9uW2xpZ2h0Ym94LWljb24tYnV0dG9uXScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2xpZ2h0Ym94LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignaG92ZXJBbmltYXRpb24nLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScgfSkpLFxyXG4gICAgICAgICAgICBzdGF0ZSgnbGVhdmUnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2xlYXZlID0+IGVudGVyJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnLjFzJylcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2VudGVyID0+IGxlYXZlJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgnLjFzJylcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ19vbk1vdXNlRW50ZXIoKScsXHJcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdfb25Nb3VzZUxlYXZlKCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaG92ZXJBbmltYXRpb246ICdsZWF2ZScgfCAnZW50ZXInID0gJ2xlYXZlJztcclxuXHJcbiAgICBwcml2YXRlIF9pc0ljb25CdXR0b246IGJvb2xlYW4gPSB0aGlzLl9oYXNIb3N0QXR0cmlidXRlcygnbGlnaHRib3gtaWNvbi1idXR0b24nKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgQlVUVE9OX0hPU1RfQVRUUklCVVRFUykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faGFzSG9zdEF0dHJpYnV0ZXMoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgIChfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZSkge1xyXG4gICAgICAgICAgICAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhvdmVyQW5pbWF0aW9uID09PSAnZW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyQW5pbWF0aW9uID0gJ2xlYXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uTW91c2VFbnRlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ob3ZlckFuaW1hdGlvbiA9ICdlbnRlcic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uTW91c2VMZWF2ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ob3ZlckFuaW1hdGlvbiA9ICdsZWF2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oYXNIb3N0QXR0cmlidXRlcyguLi5hdHRyaWJ1dGVzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoKGF0dHJpYnV0ZSkgPT4gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiPCEtLTxkaXYgY2xhc3M9XCJidXR0b24tZm9jdXMtb3ZlcmxheVwiIFtAaG92ZXJBbmltYXRpb25dPVwiaG92ZXJBbmltYXRpb25cIj4tLT5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48IS0tPC9kaXY+LS0+XHJcblxyXG4iXX0=