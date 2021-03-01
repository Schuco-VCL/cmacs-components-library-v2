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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zbGlkZXIvY21hY3Mtc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7QUFvQnBFLE1BQU0sT0FBTyx5QkFBeUI7SUFUdEM7UUFVMEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDUixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQyxVQUFLLEdBQXVCLEVBQUUsQ0FBQztLQW1DaEM7SUFqQ0MsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN4RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFM0IsTUFBTSxZQUFZLEdBQXVCLFFBQVE7WUFDL0MsQ0FBQyxDQUFDO2dCQUNBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHO2dCQUMxQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNO2dCQUNwQyxNQUFNLEVBQUUsR0FBRyxNQUFNLEdBQUc7Z0JBQ3BCLFVBQVU7YUFDWDtZQUNELENBQUMsaUNBQ0ksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQ3BDLEtBQUssRUFBRSxHQUFHLE1BQU0sR0FBRyxFQUNuQixVQUFVLEdBQ1gsQ0FBQztRQUVKLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzVCLENBQUM7SUFFTywwQkFBMEI7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNyRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksR0FBRyxLQUFLLENBQUM7WUFDYixLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2I7UUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2tHQTFDVSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ3hCdEMseUJBQXNEOztRQUF4QixtQ0FBaUI7O0FEeUJyQjtJQUFkLFdBQVcsRUFBRTt5REFBb0I7QUFDbEI7SUFBZixZQUFZLEVBQUU7MERBQTBCO0FBRTFCO0lBQWQsV0FBVyxFQUFFO3lEQUFvQjtBQUNsQjtJQUFmLFlBQVksRUFBRTsyREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7MkRBQWtCO3VGQU4vQix5QkFBeUI7Y0FUckMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7Z0JBRXlCLE1BQU07a0JBQTdCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNrQixNQUFNO2tCQUE3QixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnVtYmVySW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBOelNsaWRlclRyYWNrU3R5bGUge1xuICBib3R0b20/OiBzdHJpbmcgfCBudWxsO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudWxsO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVsbDtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudWxsO1xuICB3aWR0aD86IHN0cmluZyB8IG51bGw7XG4gIHZpc2liaWxpdHk/OiBzdHJpbmc7XG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2xpZGVyLXRyYWNrJyxcclxuICBleHBvcnRBczogJ2NtYWNzU2xpZGVyVHJhY2snLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNsaWRlci10cmFjay5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG9mZnNldDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGluY2x1ZGVkID0gZmFsc2U7XG5cbiAgc3R5bGU6IE56U2xpZGVyVHJhY2tTdHlsZSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gdGhpcy52ZXJ0aWNhbDtcbiAgICBjb25zdCByZXZlcnNlID0gdGhpcy5yZXZlcnNlO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSB0aGlzLmluY2x1ZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cbiAgICBjb25zdCBwb3NpdG9uU3R5bGU6IE56U2xpZGVyVHJhY2tTdHlsZSA9IHZlcnRpY2FsXG4gICAgICA/IHtcbiAgICAgICAgW3JldmVyc2UgPyAndG9wJyA6ICdib3R0b20nXTogYCR7b2Zmc2V0fSVgLFxuICAgICAgICBbcmV2ZXJzZSA/ICdib3R0b20nIDogJ3RvcCddOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogYCR7bGVuZ3RofSVgLFxuICAgICAgICB2aXNpYmlsaXR5XG4gICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgLi4udGhpcy5nZXRIb3Jpem9udGFsU3R5bGVQb3NpdGlvbigpLFxuICAgICAgICB3aWR0aDogYCR7bGVuZ3RofSVgLFxuICAgICAgICB2aXNpYmlsaXR5XG4gICAgICB9O1xuXG4gICAgdGhpcy5zdHlsZSA9IHBvc2l0b25TdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG9yaXpvbnRhbFN0eWxlUG9zaXRpb24oKTogeyBsZWZ0OiBzdHJpbmc7IHJpZ2h0OiBzdHJpbmcgfSB7XG4gICAgbGV0IGxlZnQgPSB0aGlzLnJldmVyc2UgPyAnYXV0bycgOiBgJHt0aGlzLm9mZnNldH0lYDtcbiAgICBsZXQgcmlnaHQgPSB0aGlzLnJldmVyc2UgPyBgJHt0aGlzLm9mZnNldH0lYCA6ICdhdXRvJztcbiAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICBjb25zdCB0bXAgPSBsZWZ0O1xuICAgICAgbGVmdCA9IHJpZ2h0O1xuICAgICAgcmlnaHQgPSB0bXA7XG4gICAgfVxuICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0IH07XG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LXNsaWRlci10cmFja1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+Il19