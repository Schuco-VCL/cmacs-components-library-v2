import { ChangeDetectionStrategy, Component, EventEmitter, Output, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-videogular";
import * as i2 from "@angular/common";
function CmacsVideoPlayerComponent_source_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "source", 10);
} if (rf & 2) {
    const source_r2 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("src", source_r2.src, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("type", source_r2.type);
} }
export class CmacsVideoPlayerComponent {
    constructor() {
        this.playerReady = new EventEmitter();
    }
    onPlayerReady(api) {
        this.playerReady.emit(api);
    }
}
CmacsVideoPlayerComponent.ɵfac = function CmacsVideoPlayerComponent_Factory(t) { return new (t || CmacsVideoPlayerComponent)(); };
CmacsVideoPlayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsVideoPlayerComponent, selectors: [["cmacs-video-player"]], inputs: { sources: "sources" }, outputs: { playerReady: "playerReady" }, exportAs: ["cmacsVideoPlayer"], decls: 15, vars: 5, consts: [[3, "onPlayerReady"], [2, "background-color", "white"], [2, "height", "30px", "background-color", "#0d1e3b", "opacity", "0.5", 3, "vgAutohide", "vgAutohideTime"], [2, "height", "30px", "width", "30px"], [2, "height", "30px"], [3, "vgSlider"], ["vgProperty", "left", "vgFormat", "mm:ss", 2, "height", "30px", "width", "45px", "line-height", "30px"], ["id", "singleVideo", "preload", "auto", "crossorigin", "", 3, "vgMedia"], ["media", ""], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"]], template: function CmacsVideoPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "vg-player", 0);
        i0.ɵɵlistener("onPlayerReady", function CmacsVideoPlayerComponent_Template_vg_player_onPlayerReady_0_listener($event) { return ctx.onPlayerReady($event); });
        i0.ɵɵelement(1, "vg-overlay-play", 1);
        i0.ɵɵelement(2, "vg-buffering");
        i0.ɵɵelementStart(3, "vg-controls", 2);
        i0.ɵɵelement(4, "vg-play-pause", 3);
        i0.ɵɵelement(5, "vg-mute", 3);
        i0.ɵɵelement(6, "vg-volume", 4);
        i0.ɵɵelementStart(7, "vg-scrub-bar", 4);
        i0.ɵɵelement(8, "vg-scrub-bar-current-time", 5);
        i0.ɵɵelement(9, "vg-scrub-bar-buffering-time");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "vg-time-display", 6);
        i0.ɵɵelement(11, "vg-fullscreen", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "video", 7, 8);
        i0.ɵɵtemplate(14, CmacsVideoPlayerComponent_source_14_Template, 1, 2, "source", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(13);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("vgAutohide", true)("vgAutohideTime", 2);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("vgSlider", true);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("vgMedia", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.sources);
    } }, directives: [i1.ɵr, i1.ɵt, i1.ɵa, i1.ɵb, i1.ɵf, i1.ɵd, i1.ɵe, i1.ɵh, i1.ɵk, i1.ɵi, i1.ɵm, i1.ɵc, i1.ɵp, i2.NgForOf], styles: ["vg-time-display:before{content:\"-\";color:#fff;margin-right:2px}vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow:before{content:\"\\e01b\";font-size:28px;background-color:#2a7cff;padding:11px;border-radius:30px}[class*=\" vg-icon-\"]{font-size:19px}vg-volume .volumeValue{height:3px!important;border-radius:100px;background-color:#2d3d5a!important}vg-volume .volumeBackground{height:3px!important;border-radius:100px;background-color:#6a7693!important}vg-volume .volumeKnob{height:12px!important;width:12px!important}vg-scrub-bar-current-time{background-color:#6a7693!important}vg-scrub-bar-buffering-time,vg-scrub-bar-current-time{height:3px!important;border-radius:100px!important;top:calc(50% - 1px)!important}vg-scrub-bar-current-time .slider{height:12px!important;width:12px!important;z-index:2}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsVideoPlayerComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-video-player',
                exportAs: 'cmacsVideoPlayer',
                templateUrl: './cmacs-video-player.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-video-player.component.css'],
            }]
    }], function () { return []; }, { sources: [{
            type: Input
        }], playerReady: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNjbkIsNkJBQW1GOzs7SUFBNUMsZ0VBQW9CO0lBQUMsZ0RBQXNCOztBREd0RixNQUFNLE9BQU8seUJBQXlCO0lBS3BDO1FBRlUsZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUV4RCxDQUFDO0lBRWhCLGFBQWEsQ0FBQyxHQUFTO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2tHQVRVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDeEJ0QyxvQ0FBbUQ7UUFBeEMsK0hBQWlCLHlCQUFxQixJQUFDO1FBQ2hELHFDQUFtRTtRQUNuRSwrQkFBNkI7UUFFN0Isc0NBQW9IO1FBQ2xILG1DQUFrRTtRQUVsRSw2QkFBc0Q7UUFDdEQsK0JBQTZDO1FBRTdDLHVDQUFvQztRQUNsQywrQ0FBeUU7UUFDekUsOENBQTJEO1FBQzdELGlCQUFlO1FBRWYsc0NBQTJIO1FBRTNILG9DQUFxRDtRQUN2RCxpQkFBYztRQUVkLG9DQUE0RTtRQUMxRSxrRkFBbUY7UUFDckYsaUJBQVE7UUFDVixpQkFBWTs7O1FBbkJpRSxlQUFtQjtRQUFuQixpQ0FBbUIscUJBQUE7UUFPL0QsZUFBaUI7UUFBakIsK0JBQWlCO1FBU3pDLGVBQWlCO1FBQWpCLDZCQUFpQjtRQUNLLGVBQVU7UUFBVixxQ0FBVTs7dUZERzVCLHlCQUF5QjtjQVRyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDtzQ0FHVSxPQUFPO2tCQUFmLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJ25neC12aWRlb2d1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlIHtcclxuICBzcmM6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdmlkZW8tcGxheWVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzVmlkZW9QbGF5ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVmlkZW9QbGF5ZXJDb21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIHNvdXJjZXM6IFNvdXJjZVtdO1xyXG4gIEBPdXRwdXQoKSBwbGF5ZXJSZWFkeTogRXZlbnRFbWl0dGVyPFZnQVBJPiA9IG5ldyBFdmVudEVtaXR0ZXI8VmdBUEk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShhcGk6VmdBUEkpe1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG59XHJcbiIsIjx2Zy1wbGF5ZXIgKG9uUGxheWVyUmVhZHkpPVwib25QbGF5ZXJSZWFkeSgkZXZlbnQpXCI+XHJcbiAgPHZnLW92ZXJsYXktcGxheSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlXCI+PC92Zy1vdmVybGF5LXBsYXk+XHJcbiAgPHZnLWJ1ZmZlcmluZz48L3ZnLWJ1ZmZlcmluZz5cclxuXHJcbiAgPHZnLWNvbnRyb2xzIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxZTNiOyBvcGFjaXR5OiAwLjVcIiBbdmdBdXRvaGlkZV09XCJ0cnVlXCIgW3ZnQXV0b2hpZGVUaW1lXT1cIjJcIj5cclxuICAgIDx2Zy1wbGF5LXBhdXNlIHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyB3aWR0aDogMzBweDtcIj48L3ZnLXBsYXktcGF1c2U+XHJcblxyXG4gICAgPHZnLW11dGUgc3R5bGU9XCJoZWlnaHQ6IDMwcHg7IHdpZHRoOiAzMHB4O1wiPjwvdmctbXV0ZT5cclxuICAgIDx2Zy12b2x1bWUgc3R5bGU9XCJoZWlnaHQ6IDMwcHg7XCI+PC92Zy12b2x1bWU+XHJcblxyXG4gICAgPHZnLXNjcnViLWJhciBzdHlsZT1cImhlaWdodDogMzBweDtcIj5cclxuICAgICAgPHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUgW3ZnU2xpZGVyXT1cInRydWVcIj48L3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWU+XHJcbiAgICAgIDx2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWU+PC92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWU+XHJcbiAgICA8L3ZnLXNjcnViLWJhcj5cclxuXHJcbiAgICA8dmctdGltZS1kaXNwbGF5IHN0eWxlPVwiaGVpZ2h0OiAzMHB4OyB3aWR0aDogNDVweDtsaW5lLWhlaWdodDogMzBweDtcIiB2Z1Byb3BlcnR5PVwibGVmdFwiIHZnRm9ybWF0PVwibW06c3NcIj48L3ZnLXRpbWUtZGlzcGxheT5cclxuXHJcbiAgICA8dmctZnVsbHNjcmVlbiBzdHlsZT1cImhlaWdodDogMzBweDtcIj48L3ZnLWZ1bGxzY3JlZW4+XHJcbiAgPC92Zy1jb250cm9scz5cclxuXHJcbiAgPHZpZGVvIFt2Z01lZGlhXT1cIm1lZGlhXCIgI21lZGlhIGlkPVwic2luZ2xlVmlkZW9cIiBwcmVsb2FkPVwiYXV0b1wiIGNyb3Nzb3JpZ2luPlxyXG4gICAgPHNvdXJjZSAqbmdGb3I9XCJsZXQgc291cmNlIG9mIHNvdXJjZXNcIiBzcmM9XCJ7e3NvdXJjZS5zcmN9fVwiIHR5cGU9XCJ7e3NvdXJjZS50eXBlfX1cIj5cclxuICA8L3ZpZGVvPlxyXG48L3ZnLXBsYXllcj5cclxuIl19