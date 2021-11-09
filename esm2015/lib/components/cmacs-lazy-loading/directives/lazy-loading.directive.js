import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/doom-sensor.service";
const XS_BREAKPOINT = 150;
const SM_BREAKPOINT = 300;
const MD_BREAKPOINT = 600;
const LG_BREAKPOINT = 1200;
export class LazyLoadingDirective {
    constructor(_doomSensorService, _elementRef) {
        this._doomSensorService = _doomSensorService;
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        /*if (!this.xsSrc && !this.smSrc && !this.mdSrc && !this.lgSrc && !this.xlSrc && !this.src) {

            throw new Error("At least one of this attributes must be defined 'xs-src | sm-src | md-src | lg-src | xl-src | src'");
        }*/
        if (!this.xsBreakpoint) {
            this.xsBreakpoint = XS_BREAKPOINT;
        }
        if (!this.smBreakpoint) {
            this.smBreakpoint = SM_BREAKPOINT;
        }
        if (!this.mdBreakpoint) {
            this.mdBreakpoint = MD_BREAKPOINT;
        }
        if (!this.lgBreakpoint) {
            this.lgBreakpoint = LG_BREAKPOINT;
        }
        if (this.src) {
            this._elementRef.nativeElement.src = this.src;
            this._elementRef.nativeElement.style.background = 'url(' + this.src + ')';
        }
    }
    ngAfterViewInit() {
        this._setSrc();
        const trackedProperties = {
            width: true,
            height: true,
            top: true,
            left: true
        };
        this._doomSensorService.track(this._elementRef.nativeElement, trackedProperties, () => {
            this._setSrc();
        });
    }
    ngOnDestroy() {
        this._doomSensorService.untrack(this._elementRef.nativeElement);
    }
    _setSrc() {
        if (this._isInViewPort() || this.load) {
            const width = this._elementRef.nativeElement.clientWidth;
            if (this.xlSrc && width > this.lgBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'xl') {
                    this._currentResolution = 'xl';
                    this._elementRef.nativeElement.src = this.xlSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.xlSrc + ')';
                }
                return;
            }
            if (this.lgSrc && width > this.mdBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'lg') {
                    this._currentResolution = 'lg';
                    this._elementRef.nativeElement.src = this.lgSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.lgSrc + ')';
                }
                return;
            }
            if (this.mdSrc && width > this.smBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'md') {
                    this._currentResolution = 'md';
                    this._elementRef.nativeElement.src = this.mdSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.mdSrc + ')';
                }
                return;
            }
            if (this.smSrc && width > this.xsBreakpoint) {
                if (!this._currentResolution || this._currentResolution !== 'sm') {
                    this._currentResolution = 'sm';
                    this._elementRef.nativeElement.src = this.smSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.smSrc + ')';
                }
                return;
            }
            if (this.xsSrc) {
                if (!this._currentResolution || this._currentResolution !== 'xs') {
                    this._currentResolution = 'xs';
                    this._elementRef.nativeElement.src = this.xsSrc;
                    this._elementRef.nativeElement.style.background = 'url(' + this.xsSrc + ')';
                }
                return;
            }
            if (this.src) {
                this._elementRef.nativeElement.src = this.src;
                this._elementRef.nativeElement.style.background = 'url(' + this.src + ')';
            }
            else {
                this._elementRef.nativeElement.src = '';
                this._elementRef.nativeElement.style.background = 'none';
            }
        }
    }
    _isInViewPort() {
        const elementTop = Math.round(this._elementRef.nativeElement.getBoundingClientRect().top);
        const elementBottom = elementTop + this._elementRef.nativeElement.clientHeight;
        const elementLeft = Math.round(this._elementRef.nativeElement.getBoundingClientRect().left);
        const elementRight = elementLeft + this._elementRef.nativeElement.clientWidth;
        return (elementLeft <= window.innerWidth && elementRight >= 0 && elementTop <= window.innerHeight && elementBottom >= 0);
    }
}
LazyLoadingDirective.ɵfac = function LazyLoadingDirective_Factory(t) { return new (t || LazyLoadingDirective)(i0.ɵɵdirectiveInject(i1.DoomSensorService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
LazyLoadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: LazyLoadingDirective, selectors: [["img", "lazy-loading", ""]], inputs: { xsBreakpoint: ["xs-breakpoint", "xsBreakpoint"], smBreakpoint: ["sm-breakpoint", "smBreakpoint"], mdBreakpoint: ["md-breakpoint", "mdBreakpoint"], lgBreakpoint: ["lg-breakpoint", "lgBreakpoint"], xsSrc: ["xs-src", "xsSrc"], smSrc: ["sm-src", "smSrc"], mdSrc: ["md-src", "mdSrc"], lgSrc: ["lg-src", "lgSrc"], xlSrc: ["xl-src", "xlSrc"], src: "src", load: "load" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LazyLoadingDirective, [{
        type: Directive,
        args: [{
                selector: 'img[lazy-loading]',
            }]
    }], function () { return [{ type: i1.DoomSensorService }, { type: i0.ElementRef }]; }, { xsBreakpoint: [{
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
        }], src: [{
            type: Input,
            args: ['src']
        }], load: [{
            type: Input,
            args: ['load']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1sYXp5LWxvYWRpbmcvZGlyZWN0aXZlcy9sYXp5LWxvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnRCxNQUFNLGVBQWUsQ0FBQzs7O0FBSS9GLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUszQixNQUFNLE9BQU8sb0JBQW9CO0lBMEI3QixZQUNxQixrQkFBcUMsRUFDckMsV0FBdUI7UUFEdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUN4QyxDQUFDO0lBRUUsUUFBUTtRQUVYOzs7V0FHRztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRXBCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUVwQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztTQUNyQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRXBCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRVYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDN0U7SUFDTCxDQUFDO0lBRU0sZUFBZTtRQUVsQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixNQUFNLGlCQUFpQixHQUFzQjtZQUN6QyxLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJO1lBQ1osR0FBRyxFQUFFLElBQUk7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtZQUVsRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sV0FBVztRQUVkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU8sT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBRXpELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO29CQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7aUJBQy9FO2dCQUNELE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO29CQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7aUJBQy9FO2dCQUNELE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO29CQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7aUJBQy9FO2dCQUNELE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssSUFBSSxFQUFFO29CQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7aUJBQy9FO2dCQUNELE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxJQUFJLEVBQUU7b0JBQzlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7b0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztpQkFDL0U7Z0JBQ0QsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUVWLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzthQUM3RTtpQkFBTTtnQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzthQUM1RDtTQUNKO0lBQ0wsQ0FBQztJQUVPLGFBQWE7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFGLE1BQU0sYUFBYSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDL0UsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVGLE1BQU0sWUFBWSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFFOUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLFlBQVksSUFBSSxDQUFDLElBQUksVUFBVSxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUksYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdILENBQUM7O3dGQTlKUSxvQkFBb0I7eURBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2FBQ2hDOzZGQUdrQyxZQUFZO2tCQUExQyxLQUFLO21CQUFDLGVBQWU7WUFFUyxZQUFZO2tCQUExQyxLQUFLO21CQUFDLGVBQWU7WUFFUyxZQUFZO2tCQUExQyxLQUFLO21CQUFDLGVBQWU7WUFFUyxZQUFZO2tCQUExQyxLQUFLO21CQUFDLGVBQWU7WUFFRSxLQUFLO2tCQUE1QixLQUFLO21CQUFDLFFBQVE7WUFFUyxLQUFLO2tCQUE1QixLQUFLO21CQUFDLFFBQVE7WUFFUyxLQUFLO2tCQUE1QixLQUFLO21CQUFDLFFBQVE7WUFFUyxLQUFLO2tCQUE1QixLQUFLO21CQUFDLFFBQVE7WUFFUyxLQUFLO2tCQUE1QixLQUFLO21CQUFDLFFBQVE7WUFFTSxHQUFHO2tCQUF2QixLQUFLO21CQUFDLEtBQUs7WUFFVSxJQUFJO2tCQUF6QixLQUFLO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb29tU2Vuc29yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Rvb20tc2Vuc29yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUcmFja2VkUHJvcGVydGllcyB9IGZyb20gJy4uL21vZGVscy90cmFja2VkLXByb3BlcnRpZXMuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IFhTX0JSRUFLUE9JTlQgPSAxNTA7XHJcbmNvbnN0IFNNX0JSRUFLUE9JTlQgPSAzMDA7XHJcbmNvbnN0IE1EX0JSRUFLUE9JTlQgPSA2MDA7XHJcbmNvbnN0IExHX0JSRUFLUE9JTlQgPSAxMjAwO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2ltZ1tsYXp5LWxvYWRpbmddJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhenlMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgneHMtYnJlYWtwb2ludCcpIHB1YmxpYyB4c0JyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoJ3NtLWJyZWFrcG9pbnQnKSBwdWJsaWMgc21CcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCdtZC1icmVha3BvaW50JykgcHVibGljIG1kQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgnbGctYnJlYWtwb2ludCcpIHB1YmxpYyBsZ0JyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoJ3hzLXNyYycpIHB1YmxpYyB4c1NyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgnc20tc3JjJykgcHVibGljIHNtU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdtZC1zcmMnKSBwdWJsaWMgbWRTcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ2xnLXNyYycpIHB1YmxpYyBsZ1NyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgneGwtc3JjJykgcHVibGljIHhsU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdzcmMnKSBwdWJsaWMgc3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdsb2FkJykgcHVibGljIGxvYWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudFJlc29sdXRpb246ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rvb21TZW5zb3JTZXJ2aWNlOiBEb29tU2Vuc29yU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLyppZiAoIXRoaXMueHNTcmMgJiYgIXRoaXMuc21TcmMgJiYgIXRoaXMubWRTcmMgJiYgIXRoaXMubGdTcmMgJiYgIXRoaXMueGxTcmMgJiYgIXRoaXMuc3JjKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgb2YgdGhpcyBhdHRyaWJ1dGVzIG11c3QgYmUgZGVmaW5lZCAneHMtc3JjIHwgc20tc3JjIHwgbWQtc3JjIHwgbGctc3JjIHwgeGwtc3JjIHwgc3JjJ1wiKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnhzQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy54c0JyZWFrcG9pbnQgPSBYU19CUkVBS1BPSU5UO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNtQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zbUJyZWFrcG9pbnQgPSBTTV9CUkVBS1BPSU5UO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm1kQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZEJyZWFrcG9pbnQgPSBNRF9CUkVBS1BPSU5UO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxnQnJlYWtwb2ludCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sZ0JyZWFrcG9pbnQgPSBMR19CUkVBS1BPSU5UO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgdGhpcy5zcmMgKyAnKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldFNyYygpO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFja2VkUHJvcGVydGllczogVHJhY2tlZFByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIHRvcDogdHJ1ZSxcclxuICAgICAgICAgICAgbGVmdDogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuX2Rvb21TZW5zb3JTZXJ2aWNlLnRyYWNrKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJhY2tlZFByb3BlcnRpZXMsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldFNyYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fZG9vbVNlbnNvclNlcnZpY2UudW50cmFjayh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldFNyYygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSW5WaWV3UG9ydCgpIHx8IHRoaXMubG9hZCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy54bFNyYyAmJiB3aWR0aCA+IHRoaXMubGdCcmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uICE9PSAneGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJlc29sdXRpb24gPSAneGwnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnhsU3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgdGhpcy54bFNyYyArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubGdTcmMgJiYgd2lkdGggPiB0aGlzLm1kQnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiAhPT0gJ2xnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uID0gJ2xnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5sZ1NyYztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIHRoaXMubGdTcmMgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1kU3JjICYmIHdpZHRoID4gdGhpcy5zbUJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy5fY3VycmVudFJlc29sdXRpb24gIT09ICdtZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiA9ICdtZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubWRTcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyB0aGlzLm1kU3JjICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zbVNyYyAmJiB3aWR0aCA+IHRoaXMueHNCcmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uICE9PSAnc20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJlc29sdXRpb24gPSAnc20nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnNtU3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgdGhpcy5zbVNyYyArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMueHNTcmMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy5fY3VycmVudFJlc29sdXRpb24gIT09ICd4cycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiA9ICd4cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMueHNTcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyB0aGlzLnhzU3JjICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zcmMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5zcmM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIHRoaXMuc3JjICsgJyknO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzSW5WaWV3UG9ydCgpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IE1hdGgucm91bmQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRMZWZ0ID0gTWF0aC5yb3VuZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudFJpZ2h0ID0gZWxlbWVudExlZnQgKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIHJldHVybiAoZWxlbWVudExlZnQgPD0gd2luZG93LmlubmVyV2lkdGggJiYgZWxlbWVudFJpZ2h0ID49IDAgJiYgZWxlbWVudFRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZWxlbWVudEJvdHRvbSA+PSAwKTtcclxuICAgIH1cclxufVxyXG4iXX0=