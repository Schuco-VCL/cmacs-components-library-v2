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
    static { this.ɵfac = function LightboxImgDirective_Factory(t) { return new (t || LightboxImgDirective)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LightboxImgDirective, selectors: [["img", "lightbox-img", ""]], hostVars: 4, hostBindings: function LightboxImgDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("tap", function LightboxImgDirective_tap_HostBindingHandler($event) { return ctx.handleTap($event); })("load", function LightboxImgDirective_load_HostBindingHandler($event) { return ctx.onLoad($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("cursor", ctx.cursor)("visibility", ctx.visibility);
        } }, features: [i0.ɵɵInheritDefinitionFeature] }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9kaXJlY3RpdmVzL2xpZ2h0Ym94LWltZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBV3BDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFFdkQsWUFDcUIsZ0JBQWlDLEVBQ2pDLFdBQXVCO1FBRXhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUhwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBRzVDLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBTTtRQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQztJQUVNLElBQUk7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXO1FBRWQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7cUZBdkRRLG9CQUFvQjtvRUFBcEIsb0JBQW9CO3VHQUFwQixxQkFBaUIsb0ZBQWpCLGtCQUFjOzs7Ozt1RkFBZCxvQkFBb0I7Y0FUaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLElBQUksRUFBRTtvQkFDRixnQkFBZ0IsRUFBRSxRQUFRO29CQUMxQixvQkFBb0IsRUFBRSxZQUFZO29CQUNsQyxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtRGlyZWN0aXZlQmFzZSB9IGZyb20gJy4uL21vZGVscy9pdGVtLWRpcmVjdGl2ZS1iYXNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlnaHRib3guc2VydmljZSc7XHJcbmltcG9ydCB7IEltZyB9IGZyb20gJy4uL21vZGVscy9pbWcnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2ltZ1tsaWdodGJveC1pbWddJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW3N0eWxlLmN1cnNvcl0nOiAnY3Vyc29yJyxcclxuICAgICAgICAnW3N0eWxlLnZpc2liaWxpdHldJzogJ3Zpc2liaWxpdHknLFxyXG4gICAgICAgICcodGFwKSc6ICdoYW5kbGVUYXAoJGV2ZW50KScsXHJcbiAgICAgICAgJyhsb2FkKSc6ICdvbkxvYWQoJGV2ZW50KSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpZ2h0Ym94SW1nRGlyZWN0aXZlIGV4dGVuZHMgSXRlbURpcmVjdGl2ZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfbGlnaHRib3hTZXJ2aWNlOiBMaWdodGJveFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoX2xpZ2h0Ym94U2VydmljZSwgX2VsZW1lbnRSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgJ2xpZ2h0Ym94LWNvbnRhaW5lcicgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC10aXRsZScgaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEltZygpO1xyXG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgIGl0ZW0uY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XHJcbiAgICAgICAgaXRlbS5zcmMgPSB0aGlzLnNyYztcclxuICAgICAgICBpdGVtLnhzU3JjID0gdGhpcy54c1NyYztcclxuICAgICAgICBpdGVtLnNtU3JjID0gdGhpcy5zbVNyYztcclxuICAgICAgICBpdGVtLm1kU3JjID0gdGhpcy5tZFNyYztcclxuICAgICAgICBpdGVtLmxnU3JjID0gdGhpcy5sZ1NyYztcclxuICAgICAgICBpdGVtLnhsU3JjID0gdGhpcy54bFNyYztcclxuICAgICAgICBpdGVtLnhzQnJlYWtwb2ludCA9IHRoaXMueHNCcmVha3BvaW50O1xyXG4gICAgICAgIGl0ZW0uc21CcmVha3BvaW50ID0gdGhpcy5zbUJyZWFrcG9pbnQ7XHJcbiAgICAgICAgaXRlbS5tZEJyZWFrcG9pbnQgPSB0aGlzLm1kQnJlYWtwb2ludDtcclxuICAgICAgICBpdGVtLmxnQnJlYWtwb2ludCA9IHRoaXMubWRCcmVha3BvaW50O1xyXG4gICAgICAgIGl0ZW0uaXNWaWRlbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XHJcblxyXG4gICAgICAgIHRoaXMuX2xpZ2h0Ym94U2VydmljZS5hZGRJdGVtKHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlVGFwKCRldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5vcGVuT25DbGljaykge1xyXG4gICAgICAgIHRoaXMub25DbGljaygkZXZlbnQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlbigpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNMb2FkZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkZWQ7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5yZW1vdmVJdGVtKHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbn1cclxuIl19