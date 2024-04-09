import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class LightboxConfigurationService {
    constructor() {
        this._configuration = {
            controls: {
                toolbar: { position: 'top' },
                back: { icon: 'arrow_back' },
                navigation: { disable: false },
                jumpToStart: { disable: false, icon: 'first_page' },
                backward: { disable: false, icon: 'navigate_before' },
                itemIndex: { disable: false },
                forward: { disable: false, icon: 'navigate_next' },
                jumpToEnd: { disable: false, icon: 'last_page' },
                thumbnails: { disable: false, icon: 'list', position: 'left' },
                zoom: { disable: false },
                zoomIn: { disable: false, icon: 'add' },
                zoomOut: { disable: false, icon: 'remove' },
                feetToWidth: { disable: true, icon: 'zoom_in' },
                resetZoom: { disable: true, icon: 'zoom_out' },
            },
            animations: {
                toolbarShow: { duration: .4 },
                toolbarHide: { duration: .0 },
                backgroundFadeIn: { duration: .4, opacity: .9 },
                backgroundFadeOut: { duration: .0 },
                thumbnailsShow: { duration: .4 },
                thumbnailsHide: { duration: .0 },
                thumbnailsSlice: { duration: .4 },
                zoomShow: { duration: .0 },
                zoomHide: { duration: .0 },
                zoomIn: { duration: .0 },
                zoomOut: { duration: .0 },
                feetToWidth: { duration: .0 },
                resetZoom: { duration: .0 },
                itemSlice: { duration: .4 },
                itemOpen: { duration: .0 },
            }
        };
    }
    get controls() {
        return this._configuration.controls;
    }
    get animations() {
        return this._configuration.animations;
    }
    static { this.ɵfac = function LightboxConfigurationService_Factory(t) { return new (t || LightboxConfigurationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LightboxConfigurationService, factory: LightboxConfigurationService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxConfigurationService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sNEJBQTRCO0lBSXJDO1FBRUksSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFDNUIsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDOUIsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2dCQUNuRCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtnQkFDckQsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO2dCQUNsRCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ2hELFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUM5RCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDM0MsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUMvQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDakQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQy9DLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDbkMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDekIsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTthQUM3QjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBRWYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQzs2RkFuRFEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCOzt1RkFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9saWdodGJveC1jb25maWd1cmF0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IENvbnRyb2xzQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb250cm9scy1jb25maWd1cmF0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1hdGlvbnMtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29uZmlndXJhdGlvbjogTGlnaHRib3hDb25maWd1cmF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICAgICAgICAgIHRvb2xiYXI6IHsgcG9zaXRpb246ICd0b3AnIH0sXHJcbiAgICAgICAgICAgICAgICBiYWNrOiB7IGljb246ICdhcnJvd19iYWNrJyB9LFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogeyBkaXNhYmxlOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAganVtcFRvU3RhcnQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdmaXJzdF9wYWdlJyB9LFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICduYXZpZ2F0ZV9iZWZvcmUnIH0sXHJcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXg6IHsgZGlzYWJsZTogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICduYXZpZ2F0ZV9uZXh0JyB9LFxyXG4gICAgICAgICAgICAgICAganVtcFRvRW5kOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnbGFzdF9wYWdlJyB9LFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsczogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2xpc3QnLCBwb3NpdGlvbjogJ2xlZnQnIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tOiB7IGRpc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tSW46IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdhZGQnIH0sXHJcbiAgICAgICAgICAgICAgICB6b29tT3V0OiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAncmVtb3ZlJyB9LFxyXG4gICAgICAgICAgICAgICAgZmVldFRvV2lkdGg6IHsgZGlzYWJsZTogdHJ1ZSwgaWNvbjogJ3pvb21faW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZXNldFpvb206IHsgZGlzYWJsZTogdHJ1ZSwgaWNvbjogJ3pvb21fb3V0JyB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0b29sYmFyU2hvdzogeyBkdXJhdGlvbjogLjQgfSxcclxuICAgICAgICAgICAgICAgIHRvb2xiYXJIaWRlOiB7IGR1cmF0aW9uOiAuMCB9LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZhZGVJbjogeyBkdXJhdGlvbjogLjQsIG9wYWNpdHk6IC45IH0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmFkZU91dDogeyBkdXJhdGlvbjogLjAgfSxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHNTaG93OiB7IGR1cmF0aW9uOiAuNCB9LFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsc0hpZGU6IHsgZHVyYXRpb246IC4wIH0sXHJcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxzU2xpY2U6IHsgZHVyYXRpb246IC40IH0sXHJcbiAgICAgICAgICAgICAgICB6b29tU2hvdzogeyBkdXJhdGlvbjogLjAgfSxcclxuICAgICAgICAgICAgICAgIHpvb21IaWRlOiB7IGR1cmF0aW9uOiAuMCB9LFxyXG4gICAgICAgICAgICAgICAgem9vbUluOiB7IGR1cmF0aW9uOiAuMCB9LFxyXG4gICAgICAgICAgICAgICAgem9vbU91dDogeyBkdXJhdGlvbjogLjAgfSxcclxuICAgICAgICAgICAgICAgIGZlZXRUb1dpZHRoOiB7IGR1cmF0aW9uOiAuMCB9LFxyXG4gICAgICAgICAgICAgICAgcmVzZXRab29tOiB7IGR1cmF0aW9uOiAuMCB9LFxyXG4gICAgICAgICAgICAgICAgaXRlbVNsaWNlOiB7IGR1cmF0aW9uOiAuNCB9LFxyXG4gICAgICAgICAgICAgICAgaXRlbU9wZW46IHsgZHVyYXRpb246IC4wIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udHJvbHMoKTogQ29udHJvbHNDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uY29udHJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbmltYXRpb25zKCk6IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uYW5pbWF0aW9ucztcclxuICAgIH1cclxufVxyXG4iXX0=