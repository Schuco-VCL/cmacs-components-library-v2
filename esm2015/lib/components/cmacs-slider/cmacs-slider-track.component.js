import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CmacsSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.reverse = false;
        this.dir = 'ltr';
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    ngOnChanges() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const visibility = this.included ? 'visible' : 'hidden';
        const offset = this.offset;
        const length = this.length;
        const positonStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                height: `${length}%`,
                visibility
            }
            : Object.assign(Object.assign({}, this.getHorizontalStylePosition()), { width: `${length}%`, visibility });
        this.style = positonStyle;
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
CmacsSliderTrackComponent.ɵfac = function CmacsSliderTrackComponent_Factory(t) { return new (t || CmacsSliderTrackComponent)(); };
CmacsSliderTrackComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSliderTrackComponent, selectors: [["cmacs-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["cmacsSliderTrack"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function CmacsSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", ctx.style);
    } }, directives: [i1.NgStyle], styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputNumber()
], CmacsSliderTrackComponent.prototype, "offset", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "reverse", void 0);
__decorate([
    InputNumber()
], CmacsSliderTrackComponent.prototype, "length", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "vertical", void 0);
__decorate([
    InputBoolean()
], CmacsSliderTrackComponent.prototype, "included", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSliderTrackComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-slider-track',
                exportAs: 'cmacsSliderTrack',
                preserveWhitespaces: false,
                templateUrl: './cmacs-slider-track.component.html',
                styleUrls: ['./cmacs-slider-track.component.css']
            }]
    }], null, { offset: [{
            type: Input
        }], reverse: [{
            type: Input
        }], dir: [{
            type: Input
        }], length: [{
            type: Input
        }], vertical: [{
            type: Input
        }], included: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFvQnBFLE1BQU0sT0FBTyx5QkFBeUI7SUFUdEM7UUFVMEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDUixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztLQW1DaEM7SUFqQ0MsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN4RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFM0IsTUFBTSxZQUFZLEdBQXVCLFFBQVE7WUFDL0MsQ0FBQyxDQUFDO2dCQUNBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO2dCQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNO2dCQUNwQyxNQUFNLEVBQUUsR0FBRyxNQUFNLEdBQUc7Z0JBQ3BCLFVBQVU7YUFDWDtZQUNELENBQUMsaUNBQ0ksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQ3BDLEtBQUssRUFBRSxHQUFHLE1BQU0sR0FBRyxFQUNuQixVQUFVLEdBQ1gsQ0FBQztRQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzVCLENBQUM7SUFFTywwQkFBMEI7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksR0FBRyxLQUFLLENBQUM7WUFDYixLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2I7UUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2tHQTFDVSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ3hCdEMseUJBQXNEOztRQUF4QixtQ0FBaUI7O0FEeUJyQjtJQUFkLFdBQVcsRUFBRTt5REFBb0I7QUFDbEI7SUFBZixZQUFZLEVBQUU7MERBQTBCO0FBRTFCO0lBQWQsV0FBVyxFQUFFO3lEQUFvQjtBQUNsQjtJQUFmLFlBQVksRUFBRTsyREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7MkRBQWtCO3VGQU4vQix5QkFBeUI7Y0FUckMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7Z0JBRXlCLE1BQU07a0JBQTdCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNrQixNQUFNO2tCQUE3QixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOelNsaWRlclRyYWNrU3R5bGUge1xyXG4gIGJvdHRvbT86IHN0cmluZyB8IG51bGw7XHJcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVsbDtcclxuICBsZWZ0Pzogc3RyaW5nIHwgbnVsbDtcclxuICByaWdodD86IHN0cmluZyB8IG51bGw7XHJcbiAgd2lkdGg/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHZpc2liaWxpdHk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zbGlkZXItdHJhY2snLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTbGlkZXJUcmFjaycsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNsaWRlci10cmFjay5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTbGlkZXJUcmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsZW5ndGg6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZlcnRpY2FsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XHJcblxyXG4gIHN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGUgPSB7fTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMudmVydGljYWw7XHJcbiAgICBjb25zdCByZXZlcnNlID0gdGhpcy5yZXZlcnNlO1xyXG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IHRoaXMuaW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0O1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgcG9zaXRvblN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGUgPSB2ZXJ0aWNhbFxyXG4gICAgICA/IHtcclxuICAgICAgICBbcmV2ZXJzZSA/ICd0b3AnIDogJ2JvdHRvbSddOiBgJHtvZmZzZXR9JWAsXHJcbiAgICAgICAgW3JldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnXTogJ2F1dG8nLFxyXG4gICAgICAgIGhlaWdodDogYCR7bGVuZ3RofSVgLFxyXG4gICAgICAgIHZpc2liaWxpdHlcclxuICAgICAgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAuLi50aGlzLmdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCksXHJcbiAgICAgICAgd2lkdGg6IGAke2xlbmd0aH0lYCxcclxuICAgICAgICB2aXNpYmlsaXR5XHJcbiAgICAgIH07XHJcblxyXG4gICAgdGhpcy5zdHlsZSA9IHBvc2l0b25TdHlsZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0SG9yaXpvbnRhbFN0eWxlUG9zaXRpb24oKTogeyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfSB7XHJcbiAgICBsZXQgbGVmdCA9IHRoaXMucmV2ZXJzZSA/ICdhdXRvJyA6IGAke3RoaXMub2Zmc2V0fSVgO1xyXG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5yZXZlcnNlID8gYCR7dGhpcy5vZmZzZXR9JWAgOiAnYXV0byc7XHJcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XHJcbiAgICAgIGNvbnN0IHRtcCA9IGxlZnQ7XHJcbiAgICAgIGxlZnQgPSByaWdodDtcclxuICAgICAgcmlnaHQgPSB0bXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCB9O1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci10cmFja1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+Il19