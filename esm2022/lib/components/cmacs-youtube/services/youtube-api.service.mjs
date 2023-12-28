import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
const getWindow = () => window;
export class YoutubeApiService {
    constructor() {
        this.apiEmitter = new EventEmitter();
        this.hasLoaded = false;
        this._window = getWindow();
    }
    loadApi() {
        if (!this.hasLoaded) {
            const scriptTag = this._window.document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.src = 'https://www.youtube.com/iframe_api';
            this._window.document.body.appendChild(scriptTag);
            this._window['onYouTubeIframeAPIReady'] = () => {
                this.apiEmitter.emit();
            };
            this.hasLoaded = true;
        }
    }
    static { this.ɵfac = function YoutubeApiService_Factory(t) { return new (t || YoutubeApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: YoutubeApiService, factory: YoutubeApiService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YoutubeApiService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy15b3V0dWJlL3NlcnZpY2VzL3lvdXR1YmUtYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXpELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUcvQixNQUFNLE9BQU8saUJBQWlCO0lBUTFCO1FBTk8sZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFNdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU0sT0FBTztRQUVWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWpCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxTQUFTLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1lBQ25DLFNBQVMsQ0FBQyxHQUFHLEdBQUcsb0NBQW9DLENBQUM7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUUzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztrRkE3QlEsaUJBQWlCO3VFQUFqQixpQkFBaUIsV0FBakIsaUJBQWlCOzt1RkFBakIsaUJBQWlCO2NBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IGdldFdpbmRvdyA9ICgpID0+IHdpbmRvdztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVBcGlTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgYXBpRW1pdHRlcjogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xyXG5cclxuICAgIHByaXZhdGUgaGFzTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IGdldFdpbmRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkQXBpKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaGFzTG9hZGVkKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRUYWcgPSB0aGlzLl93aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdFRhZy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICAgICAgICAgIHNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdFRhZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl93aW5kb3dbJ29uWW91VHViZUlmcmFtZUFQSVJlYWR5J10gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlFbWl0dGVyLmVtaXQoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19