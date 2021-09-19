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
                thumbnails: { disable: false, icon: 'list', position: 'right' },
                zoom: { disable: false },
                zoomIn: { disable: false, icon: 'add' },
                zoomOut: { disable: false, icon: 'remove' },
                feetToWidth: { disable: false, icon: 'zoom_in' },
                resetZoom: { disable: false, icon: 'zoom_out' },
            },
            animations: {
                toolbarShow: { duration: .4 },
                toolbarHide: { duration: .05 },
                backgroundFadeIn: { duration: .4, opacity: .9 },
                backgroundFadeOut: { duration: .05 },
                thumbnailsShow: { duration: .4 },
                thumbnailsHide: { duration: .05 },
                thumbnailsSlice: { duration: .4 },
                zoomShow: { duration: .4 },
                zoomHide: { duration: .05 },
                zoomIn: { duration: .4 },
                zoomOut: { duration: .4 },
                feetToWidth: { duration: .4 },
                resetZoom: { duration: .4 },
                itemSlice: { duration: .4 },
                itemOpen: { duration: .4 },
            }
        };
    }
    get controls() {
        return this._configuration.controls;
    }
    get animations() {
        return this._configuration.animations;
    }
}
LightboxConfigurationService.ɵfac = function LightboxConfigurationService_Factory(t) { return new (t || LightboxConfigurationService)(); };
LightboxConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ token: LightboxConfigurationService, factory: LightboxConfigurationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxConfigurationService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sNEJBQTRCO0lBSXJDO1FBRUksSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFDNUIsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDOUIsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2dCQUNuRCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtnQkFDckQsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO2dCQUNsRCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ2hELFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMvRCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDM0MsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUNoRCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDbEQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDOUIsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQy9DLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDcEMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDakMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDM0IsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDekIsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTthQUM3QjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBRWYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQzs7d0dBbkRRLDRCQUE0QjtvRUFBNUIsNEJBQTRCLFdBQTVCLDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbHNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRyb2xzLWNvbmZpZ3VyYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1hdGlvbnMtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBMaWdodGJveENvbmZpZ3VyYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgdG9vbGJhcjogeyBwb3NpdGlvbjogJ3RvcCcgfSxcbiAgICAgICAgICAgICAgICBiYWNrOiB7IGljb246ICdhcnJvd19iYWNrJyB9LFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHsgZGlzYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBqdW1wVG9TdGFydDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2ZpcnN0X3BhZ2UnIH0sXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICduYXZpZ2F0ZV9iZWZvcmUnIH0sXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4OiB7IGRpc2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ25hdmlnYXRlX25leHQnIH0sXG4gICAgICAgICAgICAgICAganVtcFRvRW5kOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnbGFzdF9wYWdlJyB9LFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdsaXN0JywgcG9zaXRpb246ICdyaWdodCcgfSxcbiAgICAgICAgICAgICAgICB6b29tOiB7IGRpc2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgem9vbUluOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnYWRkJyB9LFxuICAgICAgICAgICAgICAgIHpvb21PdXQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdyZW1vdmUnIH0sXG4gICAgICAgICAgICAgICAgZmVldFRvV2lkdGg6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICd6b29tX2luJyB9LFxuICAgICAgICAgICAgICAgIHJlc2V0Wm9vbTogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ3pvb21fb3V0JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0b29sYmFyU2hvdzogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICB0b29sYmFySGlkZTogeyBkdXJhdGlvbjogLjA1IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZhZGVJbjogeyBkdXJhdGlvbjogLjQsIG9wYWNpdHk6IC45IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZhZGVPdXQ6IHsgZHVyYXRpb246IC4wNSB9LFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHNTaG93OiB7IGR1cmF0aW9uOiAuNCB9LFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHNIaWRlOiB7IGR1cmF0aW9uOiAuMDUgfSxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxzU2xpY2U6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgem9vbVNob3c6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgem9vbUhpZGU6IHsgZHVyYXRpb246IC4wNSB9LFxuICAgICAgICAgICAgICAgIHpvb21JbjogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICB6b29tT3V0OiB7IGR1cmF0aW9uOiAuNCB9LFxuICAgICAgICAgICAgICAgIGZlZXRUb1dpZHRoOiB7IGR1cmF0aW9uOiAuNCB9LFxuICAgICAgICAgICAgICAgIHJlc2V0Wm9vbTogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICBpdGVtU2xpY2U6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgaXRlbU9wZW46IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb250cm9scygpOiBDb250cm9sc0NvbmZpZ3VyYXRpb24ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uLmNvbnRyb2xzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9ucygpOiBBbmltYXRpb25zQ29uZmlndXJhdGlvbiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uYW5pbWF0aW9ucztcbiAgICB9XG59XG4iXX0=