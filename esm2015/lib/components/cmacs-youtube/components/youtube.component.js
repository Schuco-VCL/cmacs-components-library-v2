import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/youtube-api.service";
import * as i2 from "../services/youtube-player.service";
export class YoutubeComponent {
    constructor(youtubeApi, youtubePlayer) {
        this.youtubeApi = youtubeApi;
        this.youtubePlayer = youtubePlayer;
        this.ready = new EventEmitter();
        this.change = new EventEmitter();
        this.error = new EventEmitter();
        this._ready = new BehaviorSubject(false);
        this.youtubeApi.loadApi();
        this._config = {
            height: this.height ? this.height : 390,
            width: this.width ? this.width : 390,
            videoId: '',
            playerVars: this.playerVars ? this.playerVars : {
                rel: 0,
                showinfo: 0
            },
            events: {
                onReady: this.onReady.bind(this),
                onError: this.onError.bind(this)
            }
        };
    }
    ngOnChanges(changes) {
        if (changes['videoId'] && changes['videoId'].currentValue) {
            this._config.videoId = changes['videoId'].currentValue;
            this.youtubePlayer.initialise('lightbox-youtube-player', this._config);
            this._ready.pipe(filter((value) => value), first()).subscribe(() => {
                if (this.videoId) {
                    this.ytPlayer.cueVideoById(this.videoId);
                }
            });
        }
    }
    onReady(event) {
        this.ytPlayer = event.target;
        this._ready.next(true);
        this.ytPlayer.addEventListener('onStateChange', (e) => {
            this.onChange(e);
        });
        this.ready.emit(event);
    }
    onChange(event) {
        this.change.emit(event);
    }
    onError(event) {
        this.error.emit(event);
    }
    ngOnDestroy() {
        if (this.ytPlayer) {
            this.ytPlayer.destroy();
        }
    }
}
YoutubeComponent.ɵfac = function YoutubeComponent_Factory(t) { return new (t || YoutubeComponent)(i0.ɵɵdirectiveInject(i1.YoutubeApiService), i0.ɵɵdirectiveInject(i2.YoutubePlayerService)); };
YoutubeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YoutubeComponent, selectors: [["youtube"]], inputs: { videoId: "videoId", height: "height", width: "width", playerVars: "playerVars" }, outputs: { ready: "ready", change: "change", error: "error" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 0, consts: [["id", "lightbox-youtube-player"]], template: function YoutubeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 0);
    } }, styles: ["youtube iframe{top:0;position:absolute;z-index:1;height:100%;width:100%}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YoutubeComponent, [{
        type: Component,
        args: [{
                selector: 'youtube',
                templateUrl: 'youtube.component.html',
                styleUrls: ['youtube.component.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.YoutubeApiService }, { type: i2.YoutubePlayerService }]; }, { videoId: [{
            type: Input
        }], height: [{
            type: Input
        }], width: [{
            type: Input
        }], playerVars: [{
            type: Input
        }], ready: [{
            type: Output
        }], change: [{
            type: Output
        }], error: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MteW91dHViZS9jb21wb25lbnRzL3lvdXR1YmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXlvdXR1YmUvY29tcG9uZW50cy95b3V0dWJlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXVDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRy9ILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVUvQyxNQUFNLE9BQU8sZ0JBQWdCO0lBc0J6QixZQUNXLFVBQTZCLEVBQzdCLGFBQW1DO1FBRG5DLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQWQ3QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFFM0MsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBRTVDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUlyRCxXQUFNLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBUTNFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJ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TUFBTTtZQUVVLEtBQUs7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFlvdXR1YmVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMveW91dHViZS1hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IFlvdXR1YmVQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMveW91dHViZS1wbGF5ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZGVjbGFyZSB2YXIgWVQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd5b3V0dWJlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAneW91dHViZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsneW91dHViZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHZpZGVvSWQ6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIHBsYXllclZhcnM6IFlULlBsYXllclZhcnM7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8WVQuUGxheWVyRXZlbnQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFlULlBsYXllckV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFlULk9uRXJyb3JFdmVudD4oKTtcclxuXHJcbiAgICBwdWJsaWMgeXRQbGF5ZXI6IFlULlBsYXllcjtcclxuXHJcbiAgICBwcml2YXRlIF9yZWFkeTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBZVC5QbGF5ZXJPcHRpb25zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB5b3V0dWJlQXBpOiBZb3V0dWJlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgeW91dHViZVBsYXllcjogWW91dHViZVBsYXllclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMueW91dHViZUFwaS5sb2FkQXBpKCk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0ID8gdGhpcy5oZWlnaHQgOiAzOTAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAgdGhpcy53aWR0aCA/IHRoaXMud2lkdGggOiAzOTAsXHJcbiAgICAgICAgICAgIHZpZGVvSWQ6ICcnLFxyXG4gICAgICAgICAgICBwbGF5ZXJWYXJzOiB0aGlzLnBsYXllclZhcnMgPyB0aGlzLnBsYXllclZhcnMgOiB7XHJcbiAgICAgICAgICAgICAgICByZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBzaG93aW5mbzogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIG9uUmVhZHk6IHRoaXMub25SZWFkeS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3ZpZGVvSWQnXSAmJiBjaGFuZ2VzWyd2aWRlb0lkJ10uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy52aWRlb0lkID0gY2hhbmdlc1sndmlkZW9JZCddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy55b3V0dWJlUGxheWVyLmluaXRpYWxpc2UoJ2xpZ2h0Ym94LXlvdXR1YmUtcGxheWVyJywgdGhpcy5fY29uZmlnKTtcclxuXHJcbiAgICAgICAgICB0aGlzLl9yZWFkeS5waXBlKGZpbHRlcigodmFsdWUpID0+IHZhbHVlKSwgZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWRlb0lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueXRQbGF5ZXIuY3VlVmlkZW9CeUlkKHRoaXMudmlkZW9JZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZWFkeShldmVudDogWVQuUGxheWVyRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy55dFBsYXllciA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB0aGlzLl9yZWFkeS5uZXh0KHRydWUpO1xyXG4gICAgICAgIHRoaXMueXRQbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25TdGF0ZUNoYW5nZScsIChlOiBZVC5QbGF5ZXJFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlYWR5LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZShldmVudDogWVQuUGxheWVyRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXJyb3IoZXZlbnQ6IFlULk9uRXJyb3JFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueXRQbGF5ZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMueXRQbGF5ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGlkPVwibGlnaHRib3gteW91dHViZS1wbGF5ZXJcIj48L2Rpdj4iXX0=