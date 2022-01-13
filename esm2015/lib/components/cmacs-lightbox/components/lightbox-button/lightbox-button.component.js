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
    } }, inputs: { disable: "disable" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function LightboxButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, styles: ["[_nghost-%COMP%]{color:#656c79;border:none;cursor:pointer;height:20px;width:20px;border-radius:50%;position:relative;background-color:transparent;padding:0;outline:none}[_nghost-%COMP%]   .button-focus-overlay[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%;background-color:hsla(0,0%,100%,0)!important}.disable[_nghost-%COMP%]{opacity:.5;cursor:default}"], data: { animation: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9jb21wb25lbnRzL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2NvbXBvbmVudHMvbGlnaHRib3gtYnV0dG9uL2xpZ2h0Ym94LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpGLE1BQU0sc0JBQXNCLEdBQUc7SUFDM0IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QixDQUFDO0FBeUJGLE1BQU0sT0FBTyx1QkFBdUI7SUFRaEMsWUFDWSxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVBuQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRWxDLG1CQUFjLEdBQXNCLE9BQU8sQ0FBQztRQUUzQyxrQkFBYSxHQUFZLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBSzdFLEtBQUssTUFBTSxJQUFJLElBQUksc0JBQXNCLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLFdBQVcsQ0FBQyxhQUE2QixDQUFDLFNBQVMsQ0FBQyxH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IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmNvbnN0IEJVVFRPTl9IT1NUX0FUVFJJQlVURVMgPSBbXG4gICAgJ2xpZ2h0Ym94LWJ1dHRvbicsXG4gICAgJ2xpZ2h0Ym94LWljb24tYnV0dG9uJ1xuXTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdidXR0b25bbGlnaHRib3gtYnV0dG9uXSwgYnV0dG9uW2xpZ2h0Ym94LWljb24tYnV0dG9uXScsXG4gICAgdGVtcGxhdGVVcmw6ICdsaWdodGJveC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydsaWdodGJveC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbXG4gICAgICAgIHRyaWdnZXIoJ2hvdmVyQW5pbWF0aW9uJywgW1xuICAgICAgICAgICAgc3RhdGUoJ2VudGVyJyxcbiAgICAgICAgICAgICAgICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScgfSkpLFxuICAgICAgICAgICAgc3RhdGUoJ2xlYXZlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSh7IGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknIH0pKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2xlYXZlID0+IGVudGVyJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJy4xcycpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ2VudGVyID0+IGxlYXZlJywgW1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoJy4xcycpXG4gICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgIF0sXG4gICAgaG9zdDoge1xuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ19vbk1vdXNlRW50ZXIoKScsXG4gICAgICAgICcobW91c2VsZWF2ZSknOiAnX29uTW91c2VMZWF2ZSgpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTGlnaHRib3hCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBob3ZlckFuaW1hdGlvbjogJ2xlYXZlJyB8ICdlbnRlcicgPSAnbGVhdmUnO1xuXG4gICAgcHJpdmF0ZSBfaXNJY29uQnV0dG9uOiBib29sZWFuID0gdGhpcy5faGFzSG9zdEF0dHJpYnV0ZXMoJ2xpZ2h0Ym94LWljb24tYnV0dG9uJyk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgQlVUVE9OX0hPU1RfQVRUUklCVVRFUykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc0hvc3RBdHRyaWJ1dGVzKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZSkge1xuICAgICAgICAgICAgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJBbmltYXRpb24gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyQW5pbWF0aW9uID0gJ2xlYXZlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29uTW91c2VFbnRlcigpIHtcblxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5ob3ZlckFuaW1hdGlvbiA9ICdlbnRlcic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk1vdXNlTGVhdmUoKSB7XG5cbiAgICAgICAgdGhpcy5ob3ZlckFuaW1hdGlvbiA9ICdsZWF2ZSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0SG9zdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFzSG9zdEF0dHJpYnV0ZXMoLi4uYXR0cmlidXRlczogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZSgoYXR0cmlidXRlKSA9PiB0aGlzLl9nZXRIb3N0RWxlbWVudCgpLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKTtcbiAgICB9XG59XG4iLCI8IS0tPGRpdiBjbGFzcz1cImJ1dHRvbi1mb2N1cy1vdmVybGF5XCIgW0Bob3ZlckFuaW1hdGlvbl09XCJob3ZlckFuaW1hdGlvblwiPi0tPlxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPCEtLTwvZGl2Pi0tPlxuXG4iXX0=