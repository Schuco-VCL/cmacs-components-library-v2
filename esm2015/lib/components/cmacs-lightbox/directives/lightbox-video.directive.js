import { Directive, Input } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { Video } from '../models/video';
import * as i0 from "@angular/core";
import * as i1 from "../services/lightbox.service";
export class LightboxVideoDirective extends ItemDirectiveBase {
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
        if (!this.sources) {
            throw new Error("Attribute 'sources' is required");
        }
        const item = new Video();
        item.title = this.title;
        item.container = this.container;
        item.sources = this.sources;
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
        item.isVideo = true;
        this.item = item;
        this._lightboxService.addItem(this.item);
    }
    ngOnDestroy() {
        this.lightboxService.removeItem(this.item);
    }
}
LightboxVideoDirective.ɵfac = function LightboxVideoDirective_Factory(t) { return new (t || LightboxVideoDirective)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
LightboxVideoDirective.ɵdir = i0.ɵɵdefineDirective({ type: LightboxVideoDirective, selectors: [["img", "lightbox-video", ""]], hostVars: 4, hostBindings: function LightboxVideoDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("tap", function LightboxVideoDirective_tap_HostBindingHandler($event) { return ctx.onClick($event); })("load", function LightboxVideoDirective_load_HostBindingHandler($event) { return ctx.onLoad($event); });
    } if (rf & 2) {
        i0.ɵɵstyleProp("cursor", ctx.cursor)("visibility", ctx.visibility);
    } }, inputs: { sources: "sources" }, features: [i0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxVideoDirective, [{
        type: Directive,
        args: [{
                selector: 'img[lightbox-video]',
                host: {
                    '[style.cursor]': 'cursor',
                    '[style.visibility]': 'visibility',
                    '(tap)': 'onClick($event)',
                    '(load)': 'onLoad($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, { sources: [{
            type: Input,
            args: ['sources']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2RpcmVjdGl2ZXMvbGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLGlCQUFpQixDQUFDOzs7QUFXdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUl6RCxZQUNxQixnQkFBaUMsRUFDakMsV0FBdUI7UUFFeEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBSHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFHNUMsQ0FBQztJQUVNLFFBQVE7UUFFWCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFdBQVc7UUFFZCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7NEZBaERRLHNCQUFzQjsyREFBdEIsc0JBQXNCO3FHQUF0QixtQkFBZSxzRkFBZixrQkFBYzs7Ozt1RkFBZCxzQkFBc0I7Y0FUbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRTtvQkFDRixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixvQkFBb0IsRUFBRSxZQUFZO29CQUNsQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjthQUNKOzJGQUc0QixPQUFPO2tCQUEvQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtRGlyZWN0aXZlQmFzZSB9IGZyb20gJy4uL21vZGVscy9pdGVtLWRpcmVjdGl2ZS1iYXNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlnaHRib3guc2VydmljZSc7XHJcbmltcG9ydCB7IFZpZGVvLCBWaWRlb1NvdXJjZXMgfSBmcm9tICcuLi9tb2RlbHMvdmlkZW8nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2ltZ1tsaWdodGJveC12aWRlb10nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbc3R5bGUuY3Vyc29yXSc6ICdjdXJzb3InLFxyXG4gICAgICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAndmlzaWJpbGl0eScsXHJcbiAgICAgICAgJyh0YXApJzogJ29uQ2xpY2soJGV2ZW50KScsXHJcbiAgICAgICAgJyhsb2FkKSc6ICdvbkxvYWQoJGV2ZW50KSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94VmlkZW9EaXJlY3RpdmUgZXh0ZW5kcyBJdGVtRGlyZWN0aXZlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoJ3NvdXJjZXMnKSBwdWJsaWMgc291cmNlczogVmlkZW9Tb3VyY2VzW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hTZXJ2aWNlOiBMaWdodGJveFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoX2xpZ2h0Ym94U2VydmljZSwgX2VsZW1lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ2xpZ2h0Ym94LWNvbnRhaW5lcicgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC10aXRsZScgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc291cmNlcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ3NvdXJjZXMnIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBWaWRlbygpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XHJcbiAgICAgICAgaXRlbS5zb3VyY2VzID0gdGhpcy5zb3VyY2VzO1xyXG4gICAgICAgIGl0ZW0uc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgaXRlbS54c1NyYyA9IHRoaXMueHNTcmM7XHJcbiAgICAgICAgaXRlbS5zbVNyYyA9IHRoaXMuc21TcmM7XHJcbiAgICAgICAgaXRlbS5tZFNyYyA9IHRoaXMubWRTcmM7XHJcbiAgICAgICAgaXRlbS5sZ1NyYyA9IHRoaXMubGdTcmM7XHJcbiAgICAgICAgaXRlbS54bFNyYyA9IHRoaXMueGxTcmM7XHJcbiAgICAgICAgaXRlbS54c0JyZWFrcG9pbnQgPSB0aGlzLnhzQnJlYWtwb2ludDtcclxuICAgICAgICBpdGVtLnNtQnJlYWtwb2ludCA9IHRoaXMuc21CcmVha3BvaW50O1xyXG4gICAgICAgIGl0ZW0ubWRCcmVha3BvaW50ID0gdGhpcy5tZEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgaXRlbS5sZ0JyZWFrcG9pbnQgPSB0aGlzLm1kQnJlYWtwb2ludDtcclxuICAgICAgICBpdGVtLmlzVmlkZW8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgIHRoaXMuX2xpZ2h0Ym94U2VydmljZS5hZGRJdGVtKHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5yZW1vdmVJdGVtKHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuIl19