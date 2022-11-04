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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2RpcmVjdGl2ZXMvbGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFnQixNQUFNLGlCQUFpQixDQUFDOzs7QUFXdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGlCQUFpQjtJQUl6RCxZQUNxQixnQkFBaUMsRUFDakMsV0FBdUI7UUFFeEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBSHBCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7SUFHNUMsQ0FBQztJQUVNLFFBQVE7UUFFWCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFdBQVc7UUFFZCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7NEZBaERRLHNCQUFzQjsyREFBdEIsc0JBQXNCO3FHQUF0QixtQkFBZSxzRkFBZixrQkFBYzs7Ozt1RkFBZCxzQkFBc0I7Y0FUbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRTtvQkFDRixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixvQkFBb0IsRUFBRSxZQUFZO29CQUNsQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjthQUNKOzJGQUc0QixPQUFPO2tCQUEvQixLQUFLO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbURpcmVjdGl2ZUJhc2UgfSBmcm9tICcuLi9tb2RlbHMvaXRlbS1kaXJlY3RpdmUtYmFzZSc7XG5pbXBvcnQgeyBMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWdodGJveC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZGVvLCBWaWRlb1NvdXJjZXMgfSBmcm9tICcuLi9tb2RlbHMvdmlkZW8nO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2ltZ1tsaWdodGJveC12aWRlb10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tzdHlsZS5jdXJzb3JdJzogJ2N1cnNvcicsXG4gICAgICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAndmlzaWJpbGl0eScsXG4gICAgICAgICcodGFwKSc6ICdvbkNsaWNrKCRldmVudCknLFxuICAgICAgICAnKGxvYWQpJzogJ29uTG9hZCgkZXZlbnQpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTGlnaHRib3hWaWRlb0RpcmVjdGl2ZSBleHRlbmRzIEl0ZW1EaXJlY3RpdmVCYXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCdzb3VyY2VzJykgcHVibGljIHNvdXJjZXM6IFZpZGVvU291cmNlc1tdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2xpZ2h0Ym94U2VydmljZTogTGlnaHRib3hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKF9saWdodGJveFNlcnZpY2UsIF9lbGVtZW50UmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC1jb250YWluZXInIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ2xpZ2h0Ym94LXRpdGxlJyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zb3VyY2VzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ3NvdXJjZXMnIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBWaWRlbygpO1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgaXRlbS5zb3VyY2VzID0gdGhpcy5zb3VyY2VzO1xuICAgICAgICBpdGVtLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICBpdGVtLnhzU3JjID0gdGhpcy54c1NyYztcbiAgICAgICAgaXRlbS5zbVNyYyA9IHRoaXMuc21TcmM7XG4gICAgICAgIGl0ZW0ubWRTcmMgPSB0aGlzLm1kU3JjO1xuICAgICAgICBpdGVtLmxnU3JjID0gdGhpcy5sZ1NyYztcbiAgICAgICAgaXRlbS54bFNyYyA9IHRoaXMueGxTcmM7XG4gICAgICAgIGl0ZW0ueHNCcmVha3BvaW50ID0gdGhpcy54c0JyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0uc21CcmVha3BvaW50ID0gdGhpcy5zbUJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0ubWRCcmVha3BvaW50ID0gdGhpcy5tZEJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0ubGdCcmVha3BvaW50ID0gdGhpcy5tZEJyZWFrcG9pbnQ7XG4gICAgICAgIGl0ZW0uaXNWaWRlbyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG5cbiAgICAgICAgdGhpcy5fbGlnaHRib3hTZXJ2aWNlLmFkZEl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5saWdodGJveFNlcnZpY2UucmVtb3ZlSXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cbn1cbiJdfQ==