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
    handleTap($event) {
        if (this.openOnClick) {
            this.onClick($event);
        }
    }
    open() {
        this.onClick(null);
    }
    get isLoaded() {
        return this._loaded;
    }
    ngOnDestroy() {
        this.lightboxService.removeItem(this.item);
    }
}
LightboxImgDirective.ɵfac = function LightboxImgDirective_Factory(t) { return new (t || LightboxImgDirective)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
LightboxImgDirective.ɵdir = i0.ɵɵdefineDirective({ type: LightboxImgDirective, selectors: [["img", "lightbox-img", ""]], hostVars: 4, hostBindings: function LightboxImgDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("tap", function LightboxImgDirective_tap_HostBindingHandler($event) { return ctx.handleTap($event); })("load", function LightboxImgDirective_load_HostBindingHandler($event) { return ctx.onLoad($event); });
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
                    '(tap)': 'handleTap($event)',
                    '(load)': 'onLoad($event)'
                }
            }]
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9kaXJlY3RpdmVzL2xpZ2h0Ym94LWltZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBV3BDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFFdkQsWUFDcUIsZ0JBQWlDLEVBQ2pDLFdBQXVCO1FBRXhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUhwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBRzVDLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7O3dGQXZEUSxvQkFBb0I7eURBQXBCLG9CQUFvQjttR0FBcEIscUJBQWlCLG9GQUFqQixrQkFBYzs7Ozt1RkFBZCxvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLElBQUksRUFBRTtvQkFDRixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixvQkFBb0IsRUFBRSxZQUFZO29CQUNsQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSXRlbURpcmVjdGl2ZUJhc2UgfSBmcm9tICcuLi9tb2RlbHMvaXRlbS1kaXJlY3RpdmUtYmFzZSc7XG5pbXBvcnQgeyBMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWdodGJveC5zZXJ2aWNlJztcbmltcG9ydCB7IEltZyB9IGZyb20gJy4uL21vZGVscy9pbWcnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2ltZ1tsaWdodGJveC1pbWddJyxcbiAgICBob3N0OiB7XG4gICAgICAgICdbc3R5bGUuY3Vyc29yXSc6ICdjdXJzb3InLFxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxuICAgICAgICAnKHRhcCknOiAnaGFuZGxlVGFwKCRldmVudCknLFxuICAgICAgICAnKGxvYWQpJzogJ29uTG9hZCgkZXZlbnQpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTGlnaHRib3hJbWdEaXJlY3RpdmUgZXh0ZW5kcyBJdGVtRGlyZWN0aXZlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveFNlcnZpY2U6IExpZ2h0Ym94U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICBzdXBlcihfbGlnaHRib3hTZXJ2aWNlLCBfZWxlbWVudFJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dHJpYnV0ZSAnbGlnaHRib3gtY29udGFpbmVyJyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC10aXRsZScgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEltZygpO1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgaXRlbS5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgaXRlbS54c1NyYyA9IHRoaXMueHNTcmM7XG4gICAgICAgIGl0ZW0uc21TcmMgPSB0aGlzLnNtU3JjO1xuICAgICAgICBpdGVtLm1kU3JjID0gdGhpcy5tZFNyYztcbiAgICAgICAgaXRlbS5sZ1NyYyA9IHRoaXMubGdTcmM7XG4gICAgICAgIGl0ZW0ueGxTcmMgPSB0aGlzLnhsU3JjO1xuICAgICAgICBpdGVtLnhzQnJlYWtwb2ludCA9IHRoaXMueHNCcmVha3BvaW50O1xuICAgICAgICBpdGVtLnNtQnJlYWtwb2ludCA9IHRoaXMuc21CcmVha3BvaW50O1xuICAgICAgICBpdGVtLm1kQnJlYWtwb2ludCA9IHRoaXMubWRCcmVha3BvaW50O1xuICAgICAgICBpdGVtLmxnQnJlYWtwb2ludCA9IHRoaXMubWRCcmVha3BvaW50O1xuICAgICAgICBpdGVtLmlzVmlkZW8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcblxuICAgICAgICB0aGlzLl9saWdodGJveFNlcnZpY2UuYWRkSXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxuICAgIGhhbmRsZVRhcCgkZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5PbkNsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrKCRldmVudClcclxuICAgICAgfVxyXG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oKSB7XG4gICAgICB0aGlzLm9uQ2xpY2sobnVsbCk7XHJcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzTG9hZGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlZDsgICAgICBcclxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5yZW1vdmVJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxufVxuIl19