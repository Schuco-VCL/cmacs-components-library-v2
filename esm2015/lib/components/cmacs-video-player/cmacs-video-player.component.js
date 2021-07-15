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
CmacsVideoPlayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsVideoPlayerComponent, selectors: [["cmacs-video-player"]], inputs: { sources: "sources" }, outputs: { playerReady: "playerReady" }, exportAs: ["cmacsVideoPlayer"], decls: 15, vars: 5, consts: [[3, "onPlayerReady"], [2, "background-color", "#ffffff"], [2, "height", "30px", "background-color", "#0d1e3b", "opacity", "0.5", 3, "vgAutohide", "vgAutohideTime"], [2, "height", "30px", "width", "30px"], [2, "height", "30px"], [3, "vgSlider"], ["vgProperty", "left", "vgFormat", "mm:ss", 2, "height", "30px", "width", "45px", "line-height", "30px"], ["id", "singleVideo", "preload", "auto", "crossorigin", "", 3, "vgMedia"], ["media", ""], [3, "src", "type", 4, "ngFor", "ngForOf"], [3, "src", "type"]], template: function CmacsVideoPlayerComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy12aWRlby1wbGF5ZXIvY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNjbkIsNkJBQW1GOzs7SUFBNUMsZ0VBQW9CO0lBQUMsZ0RBQXNCOztBREd0RixNQUFNLE9BQU8seUJBQXlCO0lBS3BDO1FBRlUsZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztJQUV4RCxDQUFDO0lBRWhCLGFBQWEsQ0FBQyxHQUFTO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2tHQVRVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDeEJ0QyxvQ0FBbUQ7UUFBeEMsK0hBQWlCLHlCQUFxQixJQUFDO1FBQ2hELHFDQUFxRTtRQUNyRSwrQkFBNkI7UUFFN0Isc0NBQW9IO1FBQ2xILG1DQUFrRTtRQUVsRSw2QkFBc0Q7UUFDdEQsK0JBQTZDO1FBRTdDLHVDQUFvQztRQUNsQywrQ0FBeUU7UUFDekUsOENBQTJEO1FBQzdELGlCQUFlO1FBRWYsc0NBQTJIO1FBRTNILG9DQUFxRDtRQUN2RCxpQkFBYztRQUVkLG9DQUE0RTtRQUMxRSxrRkFBbUY7UUFDckYsaUJBQVE7UUFDVixpQkFBWTs7O1FBbkJpRSxlQUFtQjtRQUFuQixpQ0FBbUIscUJBQUE7UUFPL0QsZUFBaUI7UUFBakIsK0JBQWlCO1FBU3pDLGVBQWlCO1FBQWpCLDZCQUFpQjtRQUNLLGVBQVU7UUFBVixxQ0FBVTs7dUZERzVCLHlCQUF5QjtjQVRyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDtzQ0FHVSxPQUFPO2tCQUFmLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJ25neC12aWRlb2d1bGFyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU291cmNlIHtcclxuICBzcmM6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdmlkZW8tcGxheWVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzVmlkZW9QbGF5ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy12aWRlby1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdmlkZW8tcGxheWVyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVmlkZW9QbGF5ZXJDb21wb25lbnR7XHJcblxyXG4gIEBJbnB1dCgpIHNvdXJjZXM6IFNvdXJjZVtdO1xyXG4gIEBPdXRwdXQoKSBwbGF5ZXJSZWFkeTogRXZlbnRFbWl0dGVyPFZnQVBJPiA9IG5ldyBFdmVudEVtaXR0ZXI8VmdBUEk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25QbGF5ZXJSZWFkeShhcGk6VmdBUEkpe1xyXG4gICAgdGhpcy5wbGF5ZXJSZWFkeS5lbWl0KGFwaSk7XHJcbiAgfVxyXG59XHJcbiIsIjx2Zy1wbGF5ZXIgKG9uUGxheWVyUmVhZHkpPVwib25QbGF5ZXJSZWFkeSgkZXZlbnQpXCI+XHJcbiAgPHZnLW92ZXJsYXktcGxheSBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZcIj48L3ZnLW92ZXJsYXktcGxheT5cclxuICA8dmctYnVmZmVyaW5nPjwvdmctYnVmZmVyaW5nPlxyXG5cclxuICA8dmctY29udHJvbHMgc3R5bGU9XCJoZWlnaHQ6IDMwcHg7IGJhY2tncm91bmQtY29sb3I6ICMwZDFlM2I7IG9wYWNpdHk6IDAuNVwiIFt2Z0F1dG9oaWRlXT1cInRydWVcIiBbdmdBdXRvaGlkZVRpbWVdPVwiMlwiPlxyXG4gICAgPHZnLXBsYXktcGF1c2Ugc3R5bGU9XCJoZWlnaHQ6IDMwcHg7IHdpZHRoOiAzMHB4O1wiPjwvdmctcGxheS1wYXVzZT5cclxuXHJcbiAgICA8dmctbXV0ZSBzdHlsZT1cImhlaWdodDogMzBweDsgd2lkdGg6IDMwcHg7XCI+PC92Zy1tdXRlPlxyXG4gICAgPHZnLXZvbHVtZSBzdHlsZT1cImhlaWdodDogMzBweDtcIj48L3ZnLXZvbHVtZT5cclxuXHJcbiAgICA8dmctc2NydWItYmFyIHN0eWxlPVwiaGVpZ2h0OiAzMHB4O1wiPlxyXG4gICAgICA8dmctc2NydWItYmFyLWN1cnJlbnQtdGltZSBbdmdTbGlkZXJdPVwidHJ1ZVwiPjwvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZT5cclxuICAgICAgPHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZT48L3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZT5cclxuICAgIDwvdmctc2NydWItYmFyPlxyXG5cclxuICAgIDx2Zy10aW1lLWRpc3BsYXkgc3R5bGU9XCJoZWlnaHQ6IDMwcHg7IHdpZHRoOiA0NXB4O2xpbmUtaGVpZ2h0OiAzMHB4O1wiIHZnUHJvcGVydHk9XCJsZWZ0XCIgdmdGb3JtYXQ9XCJtbTpzc1wiPjwvdmctdGltZS1kaXNwbGF5PlxyXG5cclxuICAgIDx2Zy1mdWxsc2NyZWVuIHN0eWxlPVwiaGVpZ2h0OiAzMHB4O1wiPjwvdmctZnVsbHNjcmVlbj5cclxuICA8L3ZnLWNvbnRyb2xzPlxyXG5cclxuICA8dmlkZW8gW3ZnTWVkaWFdPVwibWVkaWFcIiAjbWVkaWEgaWQ9XCJzaW5nbGVWaWRlb1wiIHByZWxvYWQ9XCJhdXRvXCIgY3Jvc3NvcmlnaW4+XHJcbiAgICA8c291cmNlICpuZ0Zvcj1cImxldCBzb3VyY2Ugb2Ygc291cmNlc1wiIHNyYz1cInt7c291cmNlLnNyY319XCIgdHlwZT1cInt7c291cmNlLnR5cGV9fVwiPlxyXG4gIDwvdmlkZW8+XHJcbjwvdmctcGxheWVyPlxyXG4iXX0=