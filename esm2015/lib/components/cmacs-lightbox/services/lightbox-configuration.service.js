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
}
LightboxConfigurationService.ɵfac = function LightboxConfigurationService_Factory(t) { return new (t || LightboxConfigurationService)(); };
LightboxConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ token: LightboxConfigurationService, factory: LightboxConfigurationService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxConfigurationService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sNEJBQTRCO0lBSXJDO1FBRUksSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFDNUIsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDOUIsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2dCQUNuRCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtnQkFDckQsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO2dCQUNsRCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ2hELFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMvRCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDM0MsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUMvQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDakQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQy9DLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDbkMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDekIsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTthQUM3QjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBRWYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQzs7d0dBbkRRLDRCQUE0QjtvRUFBNUIsNEJBQTRCLFdBQTVCLDRCQUE0Qjt1RkFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbHNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRyb2xzLWNvbmZpZ3VyYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1hdGlvbnMtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBMaWdodGJveENvbmZpZ3VyYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgdG9vbGJhcjogeyBwb3NpdGlvbjogJ3RvcCcgfSxcbiAgICAgICAgICAgICAgICBiYWNrOiB7IGljb246ICdhcnJvd19iYWNrJyB9LFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHsgZGlzYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBqdW1wVG9TdGFydDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2ZpcnN0X3BhZ2UnIH0sXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICduYXZpZ2F0ZV9iZWZvcmUnIH0sXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4OiB7IGRpc2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ25hdmlnYXRlX25leHQnIH0sXG4gICAgICAgICAgICAgICAganVtcFRvRW5kOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnbGFzdF9wYWdlJyB9LFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdsaXN0JywgcG9zaXRpb246ICdyaWdodCcgfSxcbiAgICAgICAgICAgICAgICB6b29tOiB7IGRpc2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgem9vbUluOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnYWRkJyB9LFxuICAgICAgICAgICAgICAgIHpvb21PdXQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdyZW1vdmUnIH0sXG4gICAgICAgICAgICAgICAgZmVldFRvV2lkdGg6IHsgZGlzYWJsZTogdHJ1ZSwgaWNvbjogJ3pvb21faW4nIH0sXG4gICAgICAgICAgICAgICAgcmVzZXRab29tOiB7IGRpc2FibGU6IHRydWUsIGljb246ICd6b29tX291dCcgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgdG9vbGJhclNob3c6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgdG9vbGJhckhpZGU6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZhZGVJbjogeyBkdXJhdGlvbjogLjQsIG9wYWNpdHk6IC45IH0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEZhZGVPdXQ6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsc1Nob3c6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsc0hpZGU6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsc1NsaWNlOiB7IGR1cmF0aW9uOiAuNCB9LFxuICAgICAgICAgICAgICAgIHpvb21TaG93OiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIHpvb21IaWRlOiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIHpvb21JbjogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgICAgICB6b29tT3V0OiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIGZlZXRUb1dpZHRoOiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIHJlc2V0Wm9vbTogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgICAgICBpdGVtU2xpY2U6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgaXRlbU9wZW46IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjb250cm9scygpOiBDb250cm9sc0NvbmZpZ3VyYXRpb24ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWd1cmF0aW9uLmNvbnRyb2xzO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgYW5pbWF0aW9ucygpOiBBbmltYXRpb25zQ29uZmlndXJhdGlvbiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uYW5pbWF0aW9ucztcbiAgICB9XG59XG4iXX0=