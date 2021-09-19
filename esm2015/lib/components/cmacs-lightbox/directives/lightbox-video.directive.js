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
        if (!this.youtubeId) {
            throw new Error("Attribute 'youtube-id' is required");
        }
        const item = new Video();
        item.title = this.title;
        item.container = this.container;
        item.youtubeVieoId = this.youtubeId;
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
    } }, inputs: { youtubeId: ["youtube-id", "youtubeId"] }, features: [i0.ɵɵInheritDefinitionFeature] });
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
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, { youtubeId: [{
            type: Input,
            args: ['youtube-id']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2RpcmVjdGl2ZXMvbGlnaHRib3gtdmlkZW8uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlDLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVd4QyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCO0lBSXpELFlBQ3FCLGdCQUFpQyxFQUNqQyxXQUF1QjtRQUV4QyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFIcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUc1QyxDQUFDO0lBRU0sUUFBUTtRQUVYLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1NBQzdEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFdBQVc7UUFFZCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7NEZBaERRLHNCQUFzQjsyREFBdEIsc0JBQXNCO3FHQUF0QixtQkFBZSxzRkFBZixrQkFBYzs7Ozt1RkFBZCxzQkFBc0I7Y0FUbEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRTtvQkFDRixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixvQkFBb0IsRUFBRSxZQUFZO29CQUNsQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjthQUNKOzJGQUcrQixTQUFTO2tCQUFwQyxLQUFLO21CQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbURpcmVjdGl2ZUJhc2UgfSBmcm9tICcuLi9tb2RlbHMvaXRlbS1kaXJlY3RpdmUtYmFzZSc7XG5pbXBvcnQgeyBMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWdodGJveC5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZGVvJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdpbWdbbGlnaHRib3gtdmlkZW9dJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbc3R5bGUuY3Vyc29yXSc6ICdjdXJzb3InLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKHRhcCknOiAnb25DbGljaygkZXZlbnQpJyxcbiAgICAgICAgJyhsb2FkKSc6ICdvbkxvYWQoJGV2ZW50KSdcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94VmlkZW9EaXJlY3RpdmUgZXh0ZW5kcyBJdGVtRGlyZWN0aXZlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIEBJbnB1dCgneW91dHViZS1pZCcpIHB1YmxpYyB5b3V0dWJlSWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveFNlcnZpY2U6IExpZ2h0Ym94U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICBzdXBlcihfbGlnaHRib3hTZXJ2aWNlLCBfZWxlbWVudFJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dHJpYnV0ZSAnbGlnaHRib3gtY29udGFpbmVyJyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC10aXRsZScgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMueW91dHViZUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ3lvdXR1YmUtaWQnIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBWaWRlbygpO1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgaXRlbS55b3V0dWJlVmllb0lkID0gdGhpcy55b3V0dWJlSWQ7XG4gICAgICAgIGl0ZW0uc3JjID0gdGhpcy5zcmM7XG4gICAgICAgIGl0ZW0ueHNTcmMgPSB0aGlzLnhzU3JjO1xuICAgICAgICBpdGVtLnNtU3JjID0gdGhpcy5zbVNyYztcbiAgICAgICAgaXRlbS5tZFNyYyA9IHRoaXMubWRTcmM7XG4gICAgICAgIGl0ZW0ubGdTcmMgPSB0aGlzLmxnU3JjO1xuICAgICAgICBpdGVtLnhsU3JjID0gdGhpcy54bFNyYztcbiAgICAgICAgaXRlbS54c0JyZWFrcG9pbnQgPSB0aGlzLnhzQnJlYWtwb2ludDtcbiAgICAgICAgaXRlbS5zbUJyZWFrcG9pbnQgPSB0aGlzLnNtQnJlYWtwb2ludDtcbiAgICAgICAgaXRlbS5tZEJyZWFrcG9pbnQgPSB0aGlzLm1kQnJlYWtwb2ludDtcbiAgICAgICAgaXRlbS5sZ0JyZWFrcG9pbnQgPSB0aGlzLm1kQnJlYWtwb2ludDtcbiAgICAgICAgaXRlbS5pc1ZpZGVvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcblxuICAgICAgICB0aGlzLl9saWdodGJveFNlcnZpY2UuYWRkSXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5yZW1vdmVJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxufVxuIl19