import { Directive } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { Img } from '../models/img';
import * as i0 from "@angular/core";
import * as i1 from "../services/lightbox.service";
export class LightboxImgDirective extends ItemDirectiveBase {
    constructor(_lightboxService, _elementRef) {
        super(_lightboxService, _elementRef);
        this._lightboxService = _lightboxService;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        if (!this.container) {
            throw new Error("Attribute 'lightbox-container' is required");
        }
        if (!this.title) {
            throw new Error("Attribute 'lightbox-title' is required");
        }
        const item = new Img();
        item.title = this.title;
        item.container = this.container;
        item.src = this.src;
        item.xsSrc = this.xsSrc;
        item.smSrc = this.smSrc;
        item.mdSrc = this.mdSrc;
        item.lgSrc = this.lgSrc;
        item.xlSrc = this.xlSrc;
        item.xsBreakpoint = this.xsBreakpoint;
        item.smBreakpoint = this.smBreakpoint;
        item.mdBreakpoint = this.mdBreakpoint;
        item.lgBreakpoint = this.mdBreakpoint;
        item.isVideo = false;
        this.item = item;
        this._lightboxService.addItem(this.item);
    }
    ngOnDestroy() {
        this.lightboxService.removeItem(this.item);
    }
}
LightboxImgDirective.ɵfac = function LightboxImgDirective_Factory(t) { return new (t || LightboxImgDirective)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
LightboxImgDirective.ɵdir = i0.ɵɵdefineDirective({ type: LightboxImgDirective, selectors: [["img", "lightbox-img", ""]], hostVars: 4, hostBindings: function LightboxImgDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("tap", function LightboxImgDirective_tap_HostBindingHandler($event) { return ctx.onClick($event); })("load", function LightboxImgDirective_load_HostBindingHandler($event) { return ctx.onLoad($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("cursor", ctx.cursor)("visibility", ctx.visibility);
    } }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxImgDirective, [{
        type: Directive,
        args: [{
                selector: 'img[lightbox-img]',
                host: {
                    '[style.cursor]': 'cursor',
                    '[style.visibility]': 'visibility',
                    '(tap)': 'onClick($event)',
                    '(load)': 'onLoad($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9kaXJlY3RpdmVzL2xpZ2h0Ym94LWltZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBV3BDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFFdkQsWUFDcUIsZ0JBQWlDLEVBQ2pDLFdBQXVCO1FBRXhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUhwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBRzVDLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O3dGQXpDUSxvQkFBb0I7eURBQXBCLG9CQUFvQjttR0FBcEIsbUJBQWUsb0ZBQWYsa0JBQWM7Ozs7dUZBQWQsb0JBQW9CO2NBVGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0YsZ0JBQWdCLEVBQUUsUUFBUTtvQkFDMUIsb0JBQW9CLEVBQUUsWUFBWTtvQkFDbEMsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDN0I7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1EaXJlY3RpdmVCYXNlIH0gZnJvbSAnLi4vbW9kZWxzL2l0ZW0tZGlyZWN0aXZlLWJhc2UnO1xuaW1wb3J0IHsgTGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlnaHRib3guc2VydmljZSc7XG5pbXBvcnQgeyBJbWcgfSBmcm9tICcuLi9tb2RlbHMvaW1nJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbWdbbGlnaHRib3gtaW1nXScsXG4gICAgaG9zdDoge1xuICAgICAgICAnW3N0eWxlLmN1cnNvcl0nOiAnY3Vyc29yJyxcbiAgICAgICAgJ1tzdHlsZS52aXNpYmlsaXR5XSc6ICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJyh0YXApJzogJ29uQ2xpY2soJGV2ZW50KScsXG4gICAgICAgICcobG9hZCknOiAnb25Mb2FkKCRldmVudCknXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBMaWdodGJveEltZ0RpcmVjdGl2ZSBleHRlbmRzIEl0ZW1EaXJlY3RpdmVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94U2VydmljZTogTGlnaHRib3hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKF9saWdodGJveFNlcnZpY2UsIF9lbGVtZW50UmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC1jb250YWluZXInIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ2xpZ2h0Ym94LXRpdGxlJyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSW1nKCk7XG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgICAgICBpdGVtLmNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBpdGVtLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICBpdGVtLnhzU3JjID0gdGhpcy54c1NyYztcbiAgICAgICAgaXRlbS5zbVNyYyA9IHRoaXMuc21TcmM7XG4gICAgICAgIGl0ZW0ubWRTcmMgPSB0aGlzLm1kU3JjO1xuICAgICAgICBpdGVtLmxnU3JjID0gdGhpcy5sZ1NyYztcbiAgICAgICAgaXRlbS54bFNyYyA9IHRoaXMueGxTcmM7XG4gICAgICAgIGl0ZW0ueHNCcmVha3BvaW50ID0gdGhpcy54c0JyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0uc21CcmVha3BvaW50ID0gdGhpcy5zbUJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0ubWRCcmVha3BvaW50ID0gdGhpcy5tZEJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0ubGdCcmVha3BvaW50ID0gdGhpcy5tZEJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0uaXNWaWRlbyA9IGZhbHNlO1xuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuXG4gICAgICAgIHRoaXMuX2xpZ2h0Ym94U2VydmljZS5hZGRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubGlnaHRib3hTZXJ2aWNlLnJlbW92ZUl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG59XG4iXX0=