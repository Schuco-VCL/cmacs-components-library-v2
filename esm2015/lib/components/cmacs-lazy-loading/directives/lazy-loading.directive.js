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
        if (!this.xsSrc && !this.smSrc && !this.mdSrc && !this.lgSrc && !this.xlSrc && !this.src) {
            throw new Error("At least one of this attributes must be defined 'xs-src | sm-src | md-src | lg-src | xl-src | src'");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkaW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1sYXp5LWxvYWRpbmcvZGlyZWN0aXZlcy9sYXp5LWxvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnRCxNQUFNLGVBQWUsQ0FBQzs7O0FBSS9GLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUszQixNQUFNLE9BQU8sb0JBQW9CO0lBMEI3QixZQUNxQixrQkFBcUMsRUFDckMsV0FBdUI7UUFEdkIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUN4QyxDQUFDO0lBRUUsUUFBUTtRQUVYLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFdEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxvR0FBb0csQ0FBQyxDQUFDO1NBQ3pIO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFFcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7U0FDckM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUVwQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztT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QUMsZUFBZTtZQUVTLFlBQVk7a0JBQTFDLEtBQUs7bUJBQUMsZUFBZTtZQUVTLFlBQVk7a0JBQTFDLEtBQUs7bUJBQUMsZUFBZTtZQUVTLFlBQVk7a0JBQTFDLEtBQUs7bUJBQUMsZUFBZTtZQUVFLEtBQUs7a0JBQTVCLEtBQUs7bUJBQUMsUUFBUTtZQUVTLEtBQUs7a0JBQTVCLEtBQUs7bUJBQUMsUUFBUTtZQUVTLEtBQUs7a0JBQTVCLEtBQUs7bUJBQUMsUUFBUTtZQUVTLEtBQUs7a0JBQTVCLEtBQUs7bUJBQUMsUUFBUTtZQUVTLEtBQUs7a0JBQTVCLEtBQUs7bUJBQUMsUUFBUTtZQUVNLEdBQUc7a0JBQXZCLEtBQUs7bUJBQUMsS0FBSztZQUVVLElBQUk7a0JBQXpCLEtBQUs7bUJBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvb21TZW5zb3JTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZG9vbS1zZW5zb3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IFRyYWNrZWRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vbW9kZWxzL3RyYWNrZWQtcHJvcGVydGllcy5pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgWFNfQlJFQUtQT0lOVCA9IDE1MDtcclxuY29uc3QgU01fQlJFQUtQT0lOVCA9IDMwMDtcclxuY29uc3QgTURfQlJFQUtQT0lOVCA9IDYwMDtcclxuY29uc3QgTEdfQlJFQUtQT0lOVCA9IDEyMDA7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnaW1nW2xhenktbG9hZGluZ10nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCd4cy1icmVha3BvaW50JykgcHVibGljIHhzQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgnc20tYnJlYWtwb2ludCcpIHB1YmxpYyBzbUJyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoJ21kLWJyZWFrcG9pbnQnKSBwdWJsaWMgbWRCcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCdsZy1icmVha3BvaW50JykgcHVibGljIGxnQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgneHMtc3JjJykgcHVibGljIHhzU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdzbS1zcmMnKSBwdWJsaWMgc21TcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ21kLXNyYycpIHB1YmxpYyBtZFNyYzogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgnbGctc3JjJykgcHVibGljIGxnU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCd4bC1zcmMnKSBwdWJsaWMgeGxTcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ3NyYycpIHB1YmxpYyBzcmM6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoJ2xvYWQnKSBwdWJsaWMgbG9hZDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50UmVzb2x1dGlvbjogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBfZG9vbVNlbnNvclNlcnZpY2U6IERvb21TZW5zb3JTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMueHNTcmMgJiYgIXRoaXMuc21TcmMgJiYgIXRoaXMubWRTcmMgJiYgIXRoaXMubGdTcmMgJiYgIXRoaXMueGxTcmMgJiYgIXRoaXMuc3JjKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgb2YgdGhpcyBhdHRyaWJ1dGVzIG11c3QgYmUgZGVmaW5lZCAneHMtc3JjIHwgc20tc3JjIHwgbWQtc3JjIHwgbGctc3JjIHwgeGwtc3JjIHwgc3JjJ1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy54c0JyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMueHNCcmVha3BvaW50ID0gWFNfQlJFQUtQT0lOVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zbUJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc21CcmVha3BvaW50ID0gU01fQlJFQUtQT0lOVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5tZEJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWRCcmVha3BvaW50ID0gTURfQlJFQUtQT0lOVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5sZ0JyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGdCcmVha3BvaW50ID0gTEdfQlJFQUtQT0lOVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNyYykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIHRoaXMuc3JjICsgJyknO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRTcmMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhY2tlZFByb3BlcnRpZXM6IFRyYWNrZWRQcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB0b3A6IHRydWUsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9kb29tU2Vuc29yU2VydmljZS50cmFjayh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRyYWNrZWRQcm9wZXJ0aWVzLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXRTcmMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2Rvb21TZW5zb3JTZXJ2aWNlLnVudHJhY2sodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRTcmMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc0luVmlld1BvcnQoKSB8fCB0aGlzLmxvYWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMueGxTcmMgJiYgd2lkdGggPiB0aGlzLmxnQnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiAhPT0gJ3hsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uID0gJ3hsJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy54bFNyYztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIHRoaXMueGxTcmMgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxnU3JjICYmIHdpZHRoID4gdGhpcy5tZEJyZWFrcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY3VycmVudFJlc29sdXRpb24gfHwgdGhpcy5fY3VycmVudFJlc29sdXRpb24gIT09ICdsZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiA9ICdsZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubGdTcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyB0aGlzLmxnU3JjICsgJyknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tZFNyYyAmJiB3aWR0aCA+IHRoaXMuc21CcmVha3BvaW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uICE9PSAnbWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJlc29sdXRpb24gPSAnbWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLm1kU3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgdGhpcy5tZFNyYyArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc21TcmMgJiYgd2lkdGggPiB0aGlzLnhzQnJlYWtwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiB8fCB0aGlzLl9jdXJyZW50UmVzb2x1dGlvbiAhPT0gJ3NtJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uID0gJ3NtJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5zbVNyYztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd1cmwoJyArIHRoaXMuc21TcmMgKyAnKSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnhzU3JjKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uIHx8IHRoaXMuX2N1cnJlbnRSZXNvbHV0aW9uICE9PSAneHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFJlc29sdXRpb24gPSAneHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnhzU3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybCgnICsgdGhpcy54c1NyYyArICcpJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3JjKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMuc3JjO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAndXJsKCcgKyB0aGlzLnNyYyArICcpJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pc0luVmlld1BvcnQoKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRUb3AgPSBNYXRoLnJvdW5kKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICBjb25zdCBlbGVtZW50TGVmdCA9IE1hdGgucm91bmQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpO1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRSaWdodCA9IGVsZW1lbnRMZWZ0ICsgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICByZXR1cm4gKGVsZW1lbnRMZWZ0IDw9IHdpbmRvdy5pbm5lcldpZHRoICYmIGVsZW1lbnRSaWdodCA+PSAwICYmIGVsZW1lbnRUb3AgPD0gd2luZG93LmlubmVySGVpZ2h0ICYmIGVsZW1lbnRCb3R0b20gPj0gMCk7XHJcbiAgICB9XHJcbn1cclxuIl19