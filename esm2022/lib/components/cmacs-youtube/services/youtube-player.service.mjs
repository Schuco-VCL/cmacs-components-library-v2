import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./youtube-api.service";
const getWindow = () => window;
export class YoutubePlayerService {
    constructor(zone, youtubeApi) {
        this.zone = zone;
        this.youtubeApi = youtubeApi;
        this._window = getWindow();
    }
    initialise(playerId, config) {
        if (!this._player) {
            if (this._window['YT'] === undefined) {
                this.youtubeApi.apiEmitter.subscribe(() => this.zone.run(() => {
                    this._newPlayer(playerId, config);
                }));
            }
            else {
                this.zone.run(() => this._newPlayer(playerId, config));
            }
        }
    }
    _newPlayer(playerId, config) {
        return this._player = new YT.Player(playerId, config);
    }
    static { this.ɵfac = function YoutubePlayerService_Factory(t) { return new (t || YoutubePlayerService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.YoutubeApiService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: YoutubePlayerService, factory: YoutubePlayerService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YoutubePlayerService, [{
        type: Injectable
    }], function () { return [{ type: i0.NgZone }, { type: i1.YoutubeApiService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS1wbGF5ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy15b3V0dWJlL3NlcnZpY2VzL3lvdXR1YmUtcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBR25ELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUkvQixNQUFNLE9BQU8sb0JBQW9CO0lBTTdCLFlBQ1ksSUFBWSxFQUNaLFVBQTZCO1FBRDdCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUVyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSxVQUFVLENBQUMsUUFBZ0IsRUFBRSxNQUFXO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRWYsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDtpQkFBTTtnQkFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7SUFDTCxDQUFDO0lBRU8sVUFBVSxDQUFDLFFBQWdCLEVBQUUsTUFBVztRQUU1QyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO3FGQWhDUSxvQkFBb0I7dUVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7O3VGQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBZb3V0dWJlQXBpU2VydmljZSB9IGZyb20gJy4veW91dHViZS1hcGkuc2VydmljZSc7XHJcblxyXG5jb25zdCBnZXRXaW5kb3cgPSAoKSA9PiB3aW5kb3c7XHJcbmRlY2xhcmUgdmFyIFlUOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlUGxheWVyU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBZVC5QbGF5ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2luZG93OiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICAgICAgcHJpdmF0ZSB5b3V0dWJlQXBpOiBZb3V0dWJlQXBpU2VydmljZSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3dpbmRvdyA9IGdldFdpbmRvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0aWFsaXNlKHBsYXllcklkOiBzdHJpbmcsIGNvbmZpZzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGxheWVyKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fd2luZG93WydZVCddID09PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlvdXR1YmVBcGkuYXBpRW1pdHRlci5zdWJzY3JpYmUoKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV3UGxheWVyKHBsYXllcklkLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5fbmV3UGxheWVyKHBsYXllcklkLCBjb25maWcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9uZXdQbGF5ZXIocGxheWVySWQ6IHN0cmluZywgY29uZmlnOiBhbnkpOiBZVC5QbGF5ZXIge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fcGxheWVyID0gbmV3IFlULlBsYXllcihwbGF5ZXJJZCwgY29uZmlnKTtcclxuICAgIH1cclxufVxyXG4iXX0=