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
    open() {
        this.onClick(null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtaW1nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9kaXJlY3RpdmVzL2xpZ2h0Ym94LWltZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBV3BDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxpQkFBaUI7SUFFdkQsWUFDcUIsZ0JBQWlDLEVBQ2pDLFdBQXVCO1FBRXhDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUhwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0lBRzVDLENBQUM7SUFFTSxRQUFRO1FBRVgsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sV0FBVztRQUVkLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDOzt3RkE3Q1Esb0JBQW9CO3lEQUFwQixvQkFBb0I7bUdBQXBCLG1CQUFlLG9GQUFmLGtCQUFjOzs7O3VGQUFkLG9CQUFvQjtjQVRoQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsSUFBSSxFQUFFO29CQUNGLGdCQUFnQixFQUFFLFFBQVE7b0JBQzFCLG9CQUFvQixFQUFFLFlBQVk7b0JBQ2xDLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzdCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtRGlyZWN0aXZlQmFzZSB9IGZyb20gJy4uL21vZGVscy9pdGVtLWRpcmVjdGl2ZS1iYXNlJztcbmltcG9ydCB7IExpZ2h0Ym94U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpZ2h0Ym94LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1nIH0gZnJvbSAnLi4vbW9kZWxzL2ltZyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnaW1nW2xpZ2h0Ym94LWltZ10nLFxuICAgIGhvc3Q6IHtcbiAgICAgICAgJ1tzdHlsZS5jdXJzb3JdJzogJ2N1cnNvcicsXG4gICAgICAgICdbc3R5bGUudmlzaWJpbGl0eV0nOiAndmlzaWJpbGl0eScsXG4gICAgICAgICcodGFwKSc6ICdvbkNsaWNrKCRldmVudCknLFxuICAgICAgICAnKGxvYWQpJzogJ29uTG9hZCgkZXZlbnQpJ1xuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTGlnaHRib3hJbWdEaXJlY3RpdmUgZXh0ZW5kcyBJdGVtRGlyZWN0aXZlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9saWdodGJveFNlcnZpY2U6IExpZ2h0Ym94U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICAgICkge1xuICAgICAgICBzdXBlcihfbGlnaHRib3hTZXJ2aWNlLCBfZWxlbWVudFJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dHJpYnV0ZSAnbGlnaHRib3gtY29udGFpbmVyJyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlICdsaWdodGJveC10aXRsZScgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEltZygpO1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICAgICAgaXRlbS5jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgaXRlbS5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgaXRlbS54c1NyYyA9IHRoaXMueHNTcmM7XG4gICAgICAgIGl0ZW0uc21TcmMgPSB0aGlzLnNtU3JjO1xuICAgICAgICBpdGVtLm1kU3JjID0gdGhpcy5tZFNyYztcbiAgICAgICAgaXRlbS5sZ1NyYyA9IHRoaXMubGdTcmM7XG4gICAgICAgIGl0ZW0ueGxTcmMgPSB0aGlzLnhsU3JjO1xuICAgICAgICBpdGVtLnhzQnJlYWtwb2ludCA9IHRoaXMueHNCcmVha3BvaW50O1xuICAgICAgICBpdGVtLnNtQnJlYWtwb2ludCA9IHRoaXMuc21CcmVha3BvaW50O1xuICAgICAgICBpdGVtLm1kQnJlYWtwb2ludCA9IHRoaXMubWRCcmVha3BvaW50O1xuICAgICAgICBpdGVtLmxnQnJlYWtwb2ludCA9IHRoaXMubWRCcmVha3BvaW50O1xuICAgICAgICBpdGVtLmlzVmlkZW8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtID0gaXRlbTtcblxuICAgICAgICB0aGlzLl9saWdodGJveFNlcnZpY2UuYWRkSXRlbSh0aGlzLml0ZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKCkge1xuICAgICAgdGhpcy5vbkNsaWNrKG51bGwpO1xyXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubGlnaHRib3hTZXJ2aWNlLnJlbW92ZUl0ZW0odGhpcy5pdGVtKTtcbiAgICB9XG59XG4iXX0=