import { Directive, Input } from '@angular/core';
import { Dimensions } from './dimensions.interface';
import * as i0 from "@angular/core";
import * as i1 from "../services/lightbox.service";
export class ItemDirectiveBase {
    constructor(lightboxService, elementRef) {
        this.lightboxService = lightboxService;
        this.elementRef = elementRef;
        this.openOnClick = true;
        this.cursor = 'pointer';
        this._loaded = false;
    }
    onClick(event) {
        if (this._loaded) {
            this.lightboxService.onOpening(() => {
                this.visibility = 'hidden';
            });
            this.item.position = {
                offsetTop: Math.round(this.elementRef.nativeElement.getBoundingClientRect().top),
                offsetLeft: Math.round(this.elementRef.nativeElement.getBoundingClientRect().left)
            };
            this.item.dimensions = new Dimensions(this.elementRef.nativeElement.clientWidth, this.elementRef.nativeElement.clientHeight);
            this.lightboxService.openItem(this.item);
            this.lightboxService.onClosed(() => {
                this.visibility = 'visible';
            });
        }
    }
    onLoad(event) {
        this._loaded = true;
        if (!this.item.dimensions) {
            this.item.dimensions = new Dimensions(this.elementRef.nativeElement.naturalWidth, this.elementRef.nativeElement.naturalHeight);
        }
    }
    static { this.ɵfac = function ItemDirectiveBase_Factory(t) { return new (t || ItemDirectiveBase)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ItemDirectiveBase, inputs: { container: "container", openOnClick: "openOnClick", src: "src", title: "title", xsBreakpoint: ["xs-breakpoint", "xsBreakpoint"], smBreakpoint: ["sm-breakpoint", "smBreakpoint"], mdBreakpoint: ["md-breakpoint", "mdBreakpoint"], lgBreakpoint: ["lg-breakpoint", "lgBreakpoint"], xsSrc: ["xs-src", "xsSrc"], smSrc: ["sm-src", "smSrc"], mdSrc: ["md-src", "mdSrc"], lgSrc: ["lg-src", "lgSrc"], xlSrc: ["xl-src", "xlSrc"] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ItemDirectiveBase, [{
        type: Directive
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, { container: [{
            type: Input,
            args: ['container']
        }], openOnClick: [{
            type: Input,
            args: ['openOnClick']
        }], src: [{
            type: Input,
            args: ['src']
        }], title: [{
            type: Input,
            args: ['title']
        }], xsBreakpoint: [{
            type: Input,
            args: ['xs-breakpoint']
        }], smBreakpoint: [{
            type: Input,
            args: ['sm-breakpoint']
        }], mdBreakpoint: [{
            type: Input,
            args: ['md-breakpoint']
        }], lgBreakpoint: [{
            type: Input,
            args: ['lg-breakpoint']
        }], xsSrc: [{
            type: Input,
            args: ['xs-src']
        }], smSrc: [{
            type: Input,
            args: ['sm-src']
        }], mdSrc: [{
            type: Input,
            args: ['md-src']
        }], lgSrc: [{
            type: Input,
            args: ['lg-src']
        }], xlSrc: [{
            type: Input,
            args: ['xl-src']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kaXJlY3RpdmUtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9tb2RlbHMvaXRlbS1kaXJlY3RpdmUtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWEsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUdwRCxNQUFNLE9BQWdCLGlCQUFpQjtJQW9DbkMsWUFDdUIsZUFBZ0MsRUFDaEMsVUFBc0I7UUFEdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFsQ2IsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUEwQnpDLFdBQU0sR0FBMEIsU0FBUyxDQUFDO1FBSTFDLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFLaEMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFZO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVkLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFFaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hGLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2FBQ3JGLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFFL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFUyxNQUFNLENBQUMsS0FBWTtRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2xJO0lBQ0wsQ0FBQztrRkFwRWlCLGlCQUFpQjtvRUFBakIsaUJBQWlCOzt1RkFBakIsaUJBQWlCO2NBRHRDLFNBQVM7MkZBR3dCLFNBQVM7a0JBQXRDLEtBQUs7bUJBQUMsV0FBVztZQUVjLFdBQVc7a0JBQTFDLEtBQUs7bUJBQUMsYUFBYTtZQUVJLEdBQUc7a0JBQTFCLEtBQUs7bUJBQUMsS0FBSztZQUVjLEtBQUs7a0JBQTlCLEtBQUs7bUJBQUMsT0FBTztZQUVvQixZQUFZO2tCQUE3QyxLQUFLO21CQUFDLGVBQWU7WUFFWSxZQUFZO2tCQUE3QyxLQUFLO21CQUFDLGVBQWU7WUFFWSxZQUFZO2tCQUE3QyxLQUFLO21CQUFDLGVBQWU7WUFFWSxZQUFZO2tCQUE3QyxLQUFLO21CQUFDLGVBQWU7WUFFSyxLQUFLO2tCQUEvQixLQUFLO21CQUFDLFFBQVE7WUFFWSxLQUFLO2tCQUEvQixLQUFLO21CQUFDLFFBQVE7WUFFWSxLQUFLO2tCQUEvQixLQUFLO21CQUFDLFFBQVE7WUFFWSxLQUFLO2tCQUEvQixLQUFLO21CQUFDLFFBQVE7WUFFWSxLQUFLO2tCQUEvQixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWdodGJveC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi9wb3NpdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi9kaW1lbnNpb25zLmludGVyZmFjZSc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEl0ZW1EaXJlY3RpdmVCYXNlIHtcclxuXHJcbiAgICBASW5wdXQoJ2NvbnRhaW5lcicpIHByb3RlY3RlZCBjb250YWluZXI6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ29wZW5PbkNsaWNrJykgcHJvdGVjdGVkIG9wZW5PbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoJ3NyYycpIHByb3RlY3RlZCBzcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ3RpdGxlJykgcHJvdGVjdGVkIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCd4cy1icmVha3BvaW50JykgcHJvdGVjdGVkIHhzQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgnc20tYnJlYWtwb2ludCcpIHByb3RlY3RlZCBzbUJyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoJ21kLWJyZWFrcG9pbnQnKSBwcm90ZWN0ZWQgbWRCcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCdsZy1icmVha3BvaW50JykgcHJvdGVjdGVkIGxnQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgneHMtc3JjJykgcHJvdGVjdGVkIHhzU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdzbS1zcmMnKSBwcm90ZWN0ZWQgc21TcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ21kLXNyYycpIHByb3RlY3RlZCBtZFNyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgnbGctc3JjJykgcHJvdGVjdGVkIGxnU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCd4bC1zcmMnKSBwcm90ZWN0ZWQgeGxTcmM6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXRlbTogSXRlbTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY3Vyc29yOiAncG9pbnRlcicgfCAnZGVmYXVsdCcgPSAncG9pbnRlcic7XHJcblxyXG4gICAgcHJvdGVjdGVkIHZpc2liaWxpdHk6ICdoaWRkZW4nIHwgJ3Zpc2libGUnO1xyXG5cclxuICAgIHByb3RlY3RlZCBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGxpZ2h0Ym94U2VydmljZTogTGlnaHRib3hTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRlZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5saWdodGJveFNlcnZpY2Uub25PcGVuaW5nKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbS5wb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG9mZnNldFRvcDogTWF0aC5yb3VuZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0TGVmdDogTWF0aC5yb3VuZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5vcGVuSXRlbSh0aGlzLml0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmxpZ2h0Ym94U2VydmljZS5vbkNsb3NlZCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZChldmVudDogRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoIXRoaXMuaXRlbS5kaW1lbnNpb25zKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLml0ZW0uZGltZW5zaW9ucyA9IG5ldyBEaW1lbnNpb25zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5hdHVyYWxXaWR0aCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQubmF0dXJhbEhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==