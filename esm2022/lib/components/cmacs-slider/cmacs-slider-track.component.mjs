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
            : {
                ...this.getHorizontalStylePosition(),
                width: `${length}%`,
                visibility
            };
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
    static { this.ɵfac = function CmacsSliderTrackComponent_Factory(t) { return new (t || CmacsSliderTrackComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSliderTrackComponent, selectors: [["cmacs-slider-track"]], inputs: { offset: "offset", reverse: "reverse", dir: "dir", length: "length", vertical: "vertical", included: "included" }, exportAs: ["cmacsSliderTrack"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function CmacsSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngStyle", ctx.style);
        } }, dependencies: [i1.NgStyle], styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}\n"], encapsulation: 2, changeDetection: 0 }); }
}
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
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, selector: 'cmacs-slider-track', exportAs: 'cmacsSliderTrack', preserveWhitespaces: false, template: "<div class=\"ant-slider-track\" [ngStyle]=\"style\"></div>", styles: [".ant-slider-track{height:3px;border-radius:100px;background-color:#cfd3d9!important}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFvQnBFLE1BQU0sT0FBTyx5QkFBeUI7SUFUdEM7UUFVMEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDUixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztLQW1DaEM7SUFqQ0MsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN4RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFM0IsTUFBTSxZQUFZLEdBQXVCLFFBQVE7WUFDL0MsQ0FBQyxDQUFDO2dCQUNBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO2dCQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNO2dCQUNwQyxNQUFNLEVBQUUsR0FBRyxNQUFNLEdBQUc7Z0JBQ3BCLFVBQVU7YUFDWDtZQUNELENBQUMsQ0FBQztnQkFDQSxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRTtnQkFDcEMsS0FBSyxFQUFFLEdBQUcsTUFBTSxHQUFHO2dCQUNuQixVQUFVO2FBQ1gsQ0FBQztRQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzVCLENBQUM7SUFFTywwQkFBMEI7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksR0FBRyxLQUFLLENBQUM7WUFDYixLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2I7UUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7MEZBMUNVLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDeEJ0Qyx5QkFBc0Q7O1lBQXhCLG1DQUFpQjs7O0FEeUJyQjtJQUFkLFdBQVcsRUFBRTt5REFBb0I7QUFDbEI7SUFBZixZQUFZLEVBQUU7MERBQTBCO0FBRTFCO0lBQWQsV0FBVyxFQUFFO3lEQUFvQjtBQUNsQjtJQUFmLFlBQVksRUFBRTsyREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7MkRBQWtCO3VGQU4vQix5QkFBeUI7Y0FUckMsU0FBUztrQ0FDUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLFlBQzNCLG9CQUFvQixZQUNwQixrQkFBa0IsdUJBQ1AsS0FBSztnQkFLRixNQUFNO2tCQUE3QixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUs7WUFDa0IsTUFBTTtrQkFBN0IsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpTbGlkZXJUcmFja1N0eWxlIHtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVsbDtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVsbDtcbiAgbGVmdD86IHN0cmluZyB8IG51bGw7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVsbDtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudWxsO1xuICB2aXNpYmlsaXR5Pzogc3RyaW5nO1xufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNsaWRlci10cmFjaycsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1NsaWRlclRyYWNrJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zbGlkZXItdHJhY2suY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBvZmZzZXQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxlbmd0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmNsdWRlZCA9IGZhbHNlO1xuXG4gIHN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGUgPSB7fTtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IHRoaXMudmVydGljYWw7XG4gICAgY29uc3QgcmV2ZXJzZSA9IHRoaXMucmV2ZXJzZTtcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gdGhpcy5pbmNsdWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gICAgY29uc3QgcG9zaXRvblN0eWxlOiBOelNsaWRlclRyYWNrU3R5bGUgPSB2ZXJ0aWNhbFxuICAgICAgPyB7XG4gICAgICAgIFtyZXZlcnNlID8gJ3RvcCcgOiAnYm90dG9tJ106IGAke29mZnNldH0lYCxcbiAgICAgICAgW3JldmVyc2UgPyAnYm90dG9tJyA6ICd0b3AnXTogJ2F1dG8nLFxuICAgICAgICBoZWlnaHQ6IGAke2xlbmd0aH0lYCxcbiAgICAgICAgdmlzaWJpbGl0eVxuICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgIC4uLnRoaXMuZ2V0SG9yaXpvbnRhbFN0eWxlUG9zaXRpb24oKSxcbiAgICAgICAgd2lkdGg6IGAke2xlbmd0aH0lYCxcbiAgICAgICAgdmlzaWJpbGl0eVxuICAgICAgfTtcblxuICAgIHRoaXMuc3R5bGUgPSBwb3NpdG9uU3R5bGU7XG4gIH1cblxuICBwcml2YXRlIGdldEhvcml6b250YWxTdHlsZVBvc2l0aW9uKCk6IHsgbGVmdDogc3RyaW5nOyByaWdodDogc3RyaW5nIH0ge1xuICAgIGxldCBsZWZ0ID0gdGhpcy5yZXZlcnNlID8gJ2F1dG8nIDogYCR7dGhpcy5vZmZzZXR9JWA7XG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5yZXZlcnNlID8gYCR7dGhpcy5vZmZzZXR9JWAgOiAnYXV0byc7XG4gICAgaWYgKHRoaXMuZGlyID09PSAncnRsJykge1xuICAgICAgY29uc3QgdG1wID0gbGVmdDtcbiAgICAgIGxlZnQgPSByaWdodDtcbiAgICAgIHJpZ2h0ID0gdG1wO1xuICAgIH1cbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCB9O1xuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1zbGlkZXItdHJhY2tcIiBbbmdTdHlsZV09XCJzdHlsZVwiPjwvZGl2PiJdfQ==