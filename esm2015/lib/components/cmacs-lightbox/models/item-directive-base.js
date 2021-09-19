import { Directive, Input } from '@angular/core';
import { Dimensions } from './dimensions.interface';
import * as i0 from "@angular/core";
import * as i1 from "../services/lightbox.service";
export class ItemDirectiveBase {
    constructor(lightboxService, elementRef) {
        this.lightboxService = lightboxService;
        this.elementRef = elementRef;
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
}
ItemDirectiveBase.ɵfac = function ItemDirectiveBase_Factory(t) { return new (t || ItemDirectiveBase)(i0.ɵɵdirectiveInject(i1.LightboxService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ItemDirectiveBase.ɵdir = i0.ɵɵdefineDirective({ type: ItemDirectiveBase, inputs: { container: "container", src: "src", title: "title", xsBreakpoint: ["xs-breakpoint", "xsBreakpoint"], smBreakpoint: ["sm-breakpoint", "smBreakpoint"], mdBreakpoint: ["md-breakpoint", "mdBreakpoint"], lgBreakpoint: ["lg-breakpoint", "lgBreakpoint"], xsSrc: ["xs-src", "xsSrc"], smSrc: ["sm-src", "smSrc"], mdSrc: ["md-src", "mdSrc"], lgSrc: ["lg-src", "lgSrc"], xlSrc: ["xl-src", "xlSrc"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ItemDirectiveBase, [{
        type: Directive
    }], function () { return [{ type: i1.LightboxService }, { type: i0.ElementRef }]; }, { container: [{
            type: Input,
            args: ['container']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kaXJlY3RpdmUtYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9tb2RlbHMvaXRlbS1kaXJlY3RpdmUtYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQWEsU0FBUyxFQUFjLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUdwRCxNQUFNLE9BQWdCLGlCQUFpQjtJQWtDbkMsWUFDdUIsZUFBZ0MsRUFDaEMsVUFBc0I7UUFEdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSbkMsV0FBTSxHQUEwQixTQUFTLENBQUM7UUFJNUMsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUs5QixDQUFDO0lBRU0sT0FBTyxDQUFDLEtBQVk7UUFFMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRWQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUVoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDaEYsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7YUFDckYsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3SCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUUvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVTLE1BQU0sQ0FBQyxLQUFZO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUV2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEk7SUFDTCxDQUFDOztrRkFuRWlCLGlCQUFpQjtzREFBakIsaUJBQWlCO3VGQUFqQixpQkFBaUI7Y0FEdEMsU0FBUzsyRkFHd0IsU0FBUztrQkFBdEMsS0FBSzttQkFBQyxXQUFXO1lBRU0sR0FBRztrQkFBMUIsS0FBSzttQkFBQyxLQUFLO1lBRWMsS0FBSztrQkFBOUIsS0FBSzttQkFBQyxPQUFPO1lBRW9CLFlBQVk7a0JBQTdDLEtBQUs7bUJBQUMsZUFBZTtZQUVZLFlBQVk7a0JBQTdDLEtBQUs7bUJBQUMsZUFBZTtZQUVZLFlBQVk7a0JBQTdDLEtBQUs7bUJBQUMsZUFBZTtZQUVZLFlBQVk7a0JBQTdDLEtBQUs7bUJBQUMsZUFBZTtZQUVLLEtBQUs7a0JBQS9CLEtBQUs7bUJBQUMsUUFBUTtZQUVZLEtBQUs7a0JBQS9CLEtBQUs7bUJBQUMsUUFBUTtZQUVZLEtBQUs7a0JBQS9CLEtBQUs7bUJBQUMsUUFBUTtZQUVZLEtBQUs7a0JBQS9CLEtBQUs7bUJBQUMsUUFBUTtZQUVZLEtBQUs7a0JBQS9CLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpZ2h0Ym94U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpZ2h0Ym94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuL3Bvc2l0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuL2RpbWVuc2lvbnMuaW50ZXJmYWNlJztcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbURpcmVjdGl2ZUJhc2Uge1xyXG5cclxuICAgIEBJbnB1dCgnY29udGFpbmVyJykgcHJvdGVjdGVkIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgnc3JjJykgcHJvdGVjdGVkIHNyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgndGl0bGUnKSBwcm90ZWN0ZWQgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ3hzLWJyZWFrcG9pbnQnKSBwcm90ZWN0ZWQgeHNCcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCdzbS1icmVha3BvaW50JykgcHJvdGVjdGVkIHNtQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgnbWQtYnJlYWtwb2ludCcpIHByb3RlY3RlZCBtZEJyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoJ2xnLWJyZWFrcG9pbnQnKSBwcm90ZWN0ZWQgbGdCcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCd4cy1zcmMnKSBwcm90ZWN0ZWQgeHNTcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ3NtLXNyYycpIHByb3RlY3RlZCBzbVNyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgnbWQtc3JjJykgcHJvdGVjdGVkIG1kU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdsZy1zcmMnKSBwcm90ZWN0ZWQgbGdTcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ3hsLXNyYycpIHByb3RlY3RlZCB4bFNyYzogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBpdGVtOiBJdGVtO1xyXG5cclxuICAgIHByb3RlY3RlZCBjdXJzb3I6ICdwb2ludGVyJyB8ICdkZWZhdWx0JyA9ICdwb2ludGVyJztcclxuXHJcbiAgICBwcm90ZWN0ZWQgdmlzaWJpbGl0eTogJ2hpZGRlbicgfCAndmlzaWJsZSc7XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGxpZ2h0Ym94U2VydmljZTogTGlnaHRib3hTZXJ2aWNlLFxyXG4gICAgICAgIHByb3RlY3RlZCByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlnaHRib3hTZXJ2aWNlLm9uT3BlbmluZygoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3A6IE1hdGgucm91bmQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSxcclxuICAgICAgICAgICAgICAgIG9mZnNldExlZnQ6IE1hdGgucm91bmQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveFNlcnZpY2Uub3Blbkl0ZW0odGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5saWdodGJveFNlcnZpY2Uub25DbG9zZWQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLml0ZW0uZGltZW5zaW9ucykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtLmRpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5uYXR1cmFsV2lkdGgsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5hdHVyYWxIZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=