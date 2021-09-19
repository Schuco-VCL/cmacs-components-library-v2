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
}
LightboxButtonComponent.ɵfac = function LightboxButtonComponent_Factory(t) { return new (t || LightboxButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
LightboxButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LightboxButtonComponent, selectors: [["button", "lightbox-button", ""], ["button", "lightbox-icon-button", ""]], hostBindings: function LightboxButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function LightboxButtonComponent_mouseenter_HostBindingHandler() { return ctx._onMouseEnter(); })("mouseleave", function LightboxButtonComponent_mouseleave_HostBindingHandler() { return ctx._onMouseLeave(); });
    } }, inputs: { disable: "disable" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [[1, "button-focus-overlay"]], template: function LightboxButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("@hoverAnimation", ctx.hoverAnimation);
    } }, styles: ["[_nghost-%COMP%]{color:inherit;border:none;cursor:pointer;height:40px;width:40px;border-radius:50%;position:relative;background-color:transparent;padding:0;outline:none}[_nghost-%COMP%]   .button-focus-overlay[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%;padding:8px}.disable[_nghost-%COMP%]{opacity:.5;cursor:default}"], data: { animation: [
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
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxButtonComponent, [{
        type: Component,
        args: [{
                selector: 'button[lightbox-button], button[lightbox-icon-button]',
                templateUrl: 'lightbox-button.component.html',
                styleUrls: ['lightbox-button.component.scss'],
                animations: [
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
                ],
                host: {
                    '(mouseenter)': '_onMouseEnter()',
                    '(mouseleave)': '_onMouseLeave()'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { disable: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9jb21wb25lbnRzL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtYnV0dG9uL2xpZ2h0Ym94LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpGLE1BQU0sc0JBQXNCLEdBQUc7SUFDM0IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QixDQUFDO0FBeUJGLE1BQU0sT0FBTyx1QkFBdUI7SUFRaEMsWUFDWSxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVBuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRWxDLG1CQUFjLEdBQXNCLE9BQU8sQ0FBQztRQUUzQyxrQkFBYSxHQUFZLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBSzdFLEtBQUssTUFBTSxJQUFJLElBQUksc0JBQXNCLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEU7U0FDSjtJQUNMLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekUsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sRUFBRTtnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsSUFBSyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQTZCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDOUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0U7U0FDSjtJQUNMLENBQUM7SUFFTyxhQUFhO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRU8sYUFBYTtRQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxDQUFDO0lBRU8sZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFHLFVBQW9CO1FBQzlDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7OzhGQWxEUSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs4R0FBdkIsbUJBQWUsNkZBQWYsbUJBQWU7OztRQy9CNUIsOEJBQXFFO1FBQ2pFLGtCQUF5QjtRQUM3QixpQkFBTTs7UUFGNEIsb0RBQWtDO29hRFlwRDtZQUNSLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdEIsS0FBSyxDQUFDLE9BQU8sRUFDVCxLQUFLLENBQUMsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxLQUFLLENBQUMsT0FBTyxFQUNULEtBQUssQ0FBQyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLENBQUM7Z0JBQ3pELFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQztpQkFDakIsQ0FBQztnQkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ2pCLENBQUM7YUFDTCxDQUFDO1NBQ0w7dUZBTVEsdUJBQXVCO2NBdkJuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVEQUF1RDtnQkFDakUsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3RCLEtBQUssQ0FBQyxPQUFPLEVBQ1QsS0FBSyxDQUFDLEVBQUUsZUFBZSxFQUFFLDBCQUEwQixFQUFFLENBQUMsQ0FBQzt3QkFDM0QsS0FBSyxDQUFDLE9BQU8sRUFDVCxLQUFLLENBQUMsRUFBRSxlQUFlLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUM7eUJBQ2pCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzRCQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDO3lCQUNqQixDQUFDO3FCQUNMLENBQUM7aUJBQ0w7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLGNBQWMsRUFBRSxpQkFBaUI7b0JBQ2pDLGNBQWMsRUFBRSxpQkFBaUI7aUJBQ3BDO2FBQ0o7NkRBR21CLE9BQU87a0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBCVVRUT05fSE9TVF9BVFRSSUJVVEVTID0gW1xuICAgICdsaWdodGJveC1idXR0b24nLFxuICAgICdsaWdodGJveC1pY29uLWJ1dHRvbidcbl07XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYnV0dG9uW2xpZ2h0Ym94LWJ1dHRvbl0sIGJ1dHRvbltsaWdodGJveC1pY29uLWJ1dHRvbl0nLFxuICAgIHRlbXBsYXRlVXJsOiAnbGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW1xuICAgICAgICB0cmlnZ2VyKCdob3ZlckFuaW1hdGlvbicsIFtcbiAgICAgICAgICAgIHN0YXRlKCdlbnRlcicsXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyknIH0pKSxcbiAgICAgICAgICAgIHN0YXRlKCdsZWF2ZScsXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyB9KSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdsZWF2ZSA9PiBlbnRlcicsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcuMXMnKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdlbnRlciA9PiBsZWF2ZScsIFtcbiAgICAgICAgICAgICAgICBhbmltYXRlKCcuMXMnKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICBdLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdfb25Nb3VzZUVudGVyKCknLFxuICAgICAgICAnKG1vdXNlbGVhdmUpJzogJ19vbk1vdXNlTGVhdmUoKSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaG92ZXJBbmltYXRpb246ICdsZWF2ZScgfCAnZW50ZXInID0gJ2xlYXZlJztcblxuICAgIHByaXZhdGUgX2lzSWNvbkJ1dHRvbjogYm9vbGVhbiA9IHRoaXMuX2hhc0hvc3RBdHRyaWJ1dGVzKCdsaWdodGJveC1pY29uLWJ1dHRvbicpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIG9mIEJVVFRPTl9IT1NUX0FUVFJJQlVURVMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNIb3N0QXR0cmlidXRlcyhhdHRyKSkge1xuICAgICAgICAgICAgICAgIChfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGUpIHtcbiAgICAgICAgICAgICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhvdmVyQW5pbWF0aW9uID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlckFuaW1hdGlvbiA9ICdsZWF2ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk1vdXNlRW50ZXIoKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJBbmltYXRpb24gPSAnZW50ZXInO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25Nb3VzZUxlYXZlKCkge1xuXG4gICAgICAgIHRoaXMuaG92ZXJBbmltYXRpb24gPSAnbGVhdmUnO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEhvc3RFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhc0hvc3RBdHRyaWJ1dGVzKC4uLmF0dHJpYnV0ZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzLnNvbWUoKGF0dHJpYnV0ZSkgPT4gdGhpcy5fZ2V0SG9zdEVsZW1lbnQoKS5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImJ1dHRvbi1mb2N1cy1vdmVybGF5XCIgW0Bob3ZlckFuaW1hdGlvbl09XCJob3ZlckFuaW1hdGlvblwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PiJdfQ==