import { Injectable } from '@angular/core';
import { filter, first, skip } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./doom.service";
export class LightboxService {
    constructor(_doomService) {
        this._doomService = _doomService;
    }
    addItem(item) {
        this._doomService.lightboxComponentRef.instance.addItem(item);
    }
    openItem(item) {
        this._doomService.lightboxComponentRef.instance.openItem(item);
    }
    removeItem(item) {
        this._doomService.lightboxComponentRef.instance.removeItem(item);
    }
    onClosed(func) {
        this._doomService.lightboxComponentRef.instance.$state.pipe(filter((state) => state === 'closed'), skip(1), first()).subscribe(() => {
            func();
        });
    }
    onOpening(func) {
        this._doomService.lightboxComponentRef.instance.$state.pipe(filter((state) => state === 'opening'), first()).subscribe(() => {
            func();
        });
    }
}
LightboxService.ɵfac = function LightboxService_Factory(t) { return new (t || LightboxService)(i0.ɵɵinject(i1.DoomService)); };
LightboxService.ɵprov = i0.ɵɵdefineInjectable({ token: LightboxService, factory: LightboxService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxService, [{
        type: Injectable
    }], function () { return [{ type: i1.DoomService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9zZXJ2aWNlcy9saWdodGJveC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUlyRCxNQUFNLE9BQU8sZUFBZTtJQUV4QixZQUNxQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUMxQyxDQUFDO0lBRUUsT0FBTyxDQUFDLElBQVU7UUFFckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBVTtRQUV0QixJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFVO1FBRXhCLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sUUFBUSxDQUFDLElBQWdCO1FBRTlCLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUU5SCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFNBQVMsQ0FBQyxJQUFnQjtRQUU3QixJQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUV4SCxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OEVBbkNRLGVBQWU7dURBQWYsZUFBZSxXQUFmLGVBQWU7dUZBQWYsZUFBZTtjQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb29tU2VydmljZSB9IGZyb20gJy4vZG9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL21vZGVscy9pdGVtJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi9tb2RlbHMvcG9zaXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaWdodGJveFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2Rvb21TZXJ2aWNlOiBEb29tU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgYWRkSXRlbShpdGVtOiBJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2Rvb21TZXJ2aWNlLmxpZ2h0Ym94Q29tcG9uZW50UmVmLmluc3RhbmNlLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5JdGVtKGl0ZW06IEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fZG9vbVNlcnZpY2UubGlnaHRib3hDb21wb25lbnRSZWYuaW5zdGFuY2Uub3Blbkl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oaXRlbTogSXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9kb29tU2VydmljZS5saWdodGJveENvbXBvbmVudFJlZi5pbnN0YW5jZS5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlZChmdW5jOiAoKSA9PiB2b2lkKSB7XHJcblxyXG4gICAgICB0aGlzLl9kb29tU2VydmljZS5saWdodGJveENvbXBvbmVudFJlZi5pbnN0YW5jZS4kc3RhdGUucGlwZShmaWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZSA9PT0gJ2Nsb3NlZCcpLCBza2lwKDEpLCBmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbk9wZW5pbmcoZnVuYzogKCkgPT4gdm9pZCkge1xyXG5cclxuICAgICAgICB0aGlzLl9kb29tU2VydmljZS5saWdodGJveENvbXBvbmVudFJlZi5pbnN0YW5jZS4kc3RhdGUucGlwZShmaWx0ZXIoKHN0YXRlKSA9PiBzdGF0ZSA9PT0gJ29wZW5pbmcnKSwgZmlyc3QoKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGZ1bmMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=