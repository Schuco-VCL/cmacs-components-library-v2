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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L3NlcnZpY2VzL2xpZ2h0Ym94LWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sNEJBQTRCO0lBSXJDO1FBRUksSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtnQkFDNUIsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDOUIsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2dCQUNuRCxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRTtnQkFDckQsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtnQkFDN0IsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO2dCQUNsRCxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ2hELFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUM5RCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUN4QixNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Z0JBQ3ZDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDM0MsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUMvQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDakQ7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQy9DLGlCQUFpQixFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDbkMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDaEMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDekIsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDN0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtnQkFDM0IsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTthQUM3QjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBRWYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBRWpCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFDMUMsQ0FBQzs2RkFuRFEsNEJBQTRCO3VFQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCOzt1RkFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWdodGJveENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbHNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbnRyb2xzLWNvbmZpZ3VyYXRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2FuaW1hdGlvbnMtY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9jb25maWd1cmF0aW9uOiBMaWdodGJveENvbmZpZ3VyYXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHtcbiAgICAgICAgdGhpcy5fY29uZmlndXJhdGlvbiA9IHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICAgICAgdG9vbGJhcjogeyBwb3NpdGlvbjogJ3RvcCcgfSxcbiAgICAgICAgICAgICAgICBiYWNrOiB7IGljb246ICdhcnJvd19iYWNrJyB9LFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHsgZGlzYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBqdW1wVG9TdGFydDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ2ZpcnN0X3BhZ2UnIH0sXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICduYXZpZ2F0ZV9iZWZvcmUnIH0sXG4gICAgICAgICAgICAgICAgaXRlbUluZGV4OiB7IGRpc2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ25hdmlnYXRlX25leHQnIH0sXG4gICAgICAgICAgICAgICAganVtcFRvRW5kOiB7IGRpc2FibGU6IGZhbHNlLCBpY29uOiAnbGFzdF9wYWdlJyB9LFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdsaXN0JywgcG9zaXRpb246ICdsZWZ0JyB9LFxuICAgICAgICAgICAgICAgIHpvb206IHsgZGlzYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB6b29tSW46IHsgZGlzYWJsZTogZmFsc2UsIGljb246ICdhZGQnIH0sXG4gICAgICAgICAgICAgICAgem9vbU91dDogeyBkaXNhYmxlOiBmYWxzZSwgaWNvbjogJ3JlbW92ZScgfSxcbiAgICAgICAgICAgICAgICBmZWV0VG9XaWR0aDogeyBkaXNhYmxlOiB0cnVlLCBpY29uOiAnem9vbV9pbicgfSxcbiAgICAgICAgICAgICAgICByZXNldFpvb206IHsgZGlzYWJsZTogdHJ1ZSwgaWNvbjogJ3pvb21fb3V0JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB0b29sYmFyU2hvdzogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICB0b29sYmFySGlkZTogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmFkZUluOiB7IGR1cmF0aW9uOiAuNCwgb3BhY2l0eTogLjkgfSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kRmFkZU91dDogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxzU2hvdzogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxzSGlkZTogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgICAgICB0aHVtYm5haWxzU2xpY2U6IHsgZHVyYXRpb246IC40IH0sXG4gICAgICAgICAgICAgICAgem9vbVNob3c6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgem9vbUhpZGU6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgem9vbUluOiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIHpvb21PdXQ6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgZmVldFRvV2lkdGg6IHsgZHVyYXRpb246IC4wIH0sXG4gICAgICAgICAgICAgICAgcmVzZXRab29tOiB7IGR1cmF0aW9uOiAuMCB9LFxuICAgICAgICAgICAgICAgIGl0ZW1TbGljZTogeyBkdXJhdGlvbjogLjQgfSxcbiAgICAgICAgICAgICAgICBpdGVtT3BlbjogeyBkdXJhdGlvbjogLjAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGNvbnRyb2xzKCk6IENvbnRyb2xzQ29uZmlndXJhdGlvbiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb24uY29udHJvbHM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhbmltYXRpb25zKCk6IEFuaW1hdGlvbnNDb25maWd1cmF0aW9uIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlndXJhdGlvbi5hbmltYXRpb25zO1xuICAgIH1cbn1cbiJdfQ==