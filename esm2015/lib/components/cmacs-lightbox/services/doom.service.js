import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LightboxComponent } from '../components/lightbox/lightbox.component';
import * as i0 from "@angular/core";
export class DoomService {
    constructor(_appRef, _componentFactoryResolver, _injector, _document) {
        this._appRef = _appRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._document = _document;
        this._lightboxComponentRef = this._componentFactoryResolver
            .resolveComponentFactory(LightboxComponent)
            .create(this._injector);
        this._lightboxComponentRef.changeDetectorRef.detectChanges();
        this._appRef.attachView(this._lightboxComponentRef.hostView);
        const domElement = this._lightboxComponentRef.hostView
            .rootNodes[0];
        const container = this._document.createElement('div');
        container.classList.add('lightbox-overlay-container');
        this._document.body.appendChild(container);
        container.appendChild(domElement);
    }
    get lightboxComponentRef() {
        return this._lightboxComponentRef;
    }
}
DoomService.ɵfac = function DoomService_Factory(t) { return new (t || DoomService)(i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(DOCUMENT)); };
DoomService.ɵprov = i0.ɵɵdefineInjectable({ token: DoomService, factory: DoomService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoomService, [{
        type: Injectable
    }], function () { return [{ type: i0.ApplicationRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L3NlcnZpY2VzL2Rvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFzRCxNQUFNLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFHOUUsTUFBTSxPQUFPLFdBQVc7SUFJcEIsWUFDcUIsT0FBdUIsRUFDdkIseUJBQW1ELEVBQ25ELFNBQW1CLEVBQ0QsU0FBYztRQUhoQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDRCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBRWpELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMseUJBQXlCO2FBQ3RELHVCQUF1QixDQUFDLGlCQUFpQixDQUFDO2FBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3RCxNQUFNLFVBQVUsR0FBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBaUM7YUFDM0UsU0FBUyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztRQUVqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0RCxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFXLG9CQUFvQjtRQUUzQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUN0QyxDQUFDOztzRUE5QlEsV0FBVyxrSEFRUixRQUFRO21EQVJYLFdBQVcsV0FBWCxXQUFXO3VGQUFYLFdBQVc7Y0FEdkIsVUFBVTs7c0JBU0YsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgQXBwbGljYXRpb25SZWYsIEluamVjdCwgRW1iZWRkZWRWaWV3UmVmLCBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBMaWdodGJveENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERvb21TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9saWdodGJveENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPExpZ2h0Ym94Q29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudDogYW55XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9saWdodGJveENvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICAgICAgICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTGlnaHRib3hDb21wb25lbnQpXHJcbiAgICAgICAgICAgIC5jcmVhdGUodGhpcy5faW5qZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuX2xpZ2h0Ym94Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyh0aGlzLl9saWdodGJveENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSAodGhpcy5fbGlnaHRib3hDb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXHJcbiAgICAgICAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3ZlcmxheS1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxpZ2h0Ym94Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxMaWdodGJveENvbXBvbmVudD4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlnaHRib3hDb21wb25lbnRSZWY7XHJcbiAgICB9XHJcbn1cclxuIl19