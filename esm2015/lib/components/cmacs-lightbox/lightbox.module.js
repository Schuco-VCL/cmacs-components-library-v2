import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxButtonComponent } from './components/lightbox-button/lightbox-button.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { LightboxToolbarComponent } from './components/lightbox-toolbar/lightbox-toolbar.component';
import { LightboxImgDirective } from './directives/lightbox-img.directive';
import { LightboxVideoDirective } from './directives/lightbox-video.directive';
import { LightboxItemComponent } from './components/lightbox-item/lightbox-item.component';
import { LightboxZoomComponent } from './components/lightbox-zoom/lightbox-zoom.component';
import { LightboxThumbnailsComponent } from './components/lightbox-thumbnails/lightbox-thumbnails.component';
import { LightboxService } from './services/lightbox.service';
import { DoomService } from './services/doom.service';
import { LightboxConfigurationService } from './services/lightbox-configuration.service';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammerConfig } from './models/HammerConfig';
import { LazyLoadingModule } from '../cmacs-lazy-loading';
import { YoutubeModule } from '../cmacs-youtube';
import * as i0 from "@angular/core";
export class LightboxModule {
}
LightboxModule.ɵfac = function LightboxModule_Factory(t) { return new (t || LightboxModule)(); };
LightboxModule.ɵmod = i0.ɵɵdefineNgModule({ type: LightboxModule });
LightboxModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: HammerConfig
        },
        LightboxService,
        DoomService,
        LightboxConfigurationService
    ], imports: [[
            BrowserModule,
            HammerModule,
            CommonModule,
            LazyLoadingModule,
            YoutubeModule
        ], HammerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LightboxModule, { declarations: [LightboxButtonComponent,
        LightboxComponent,
        LightboxToolbarComponent,
        LightboxImgDirective,
        LightboxVideoDirective,
        LightboxItemComponent,
        LightboxZoomComponent,
        LightboxThumbnailsComponent], imports: [BrowserModule,
        HammerModule,
        CommonModule,
        LazyLoadingModule,
        YoutubeModule], exports: [HammerModule,
        LightboxImgDirective,
        LightboxVideoDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LightboxModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LightboxButtonComponent,
                    LightboxComponent,
                    LightboxToolbarComponent,
                    LightboxImgDirective,
                    LightboxVideoDirective,
                    LightboxItemComponent,
                    LightboxZoomComponent,
                    LightboxThumbnailsComponent
                ],
                imports: [
                    BrowserModule,
                    HammerModule,
                    CommonModule,
                    LazyLoadingModule,
                    YoutubeModule
                ],
                exports: [
                    HammerModule,
                    LightboxImgDirective,
                    LightboxVideoDirective
                ],
                providers: [
                    {
                        provide: HAMMER_GESTURE_CONFIG,
                        useClass: HammerConfig
                    },
                    LightboxService,
                    DoomService,
                    LightboxConfigurationService
                ],
                entryComponents: [LightboxComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L2xpZ2h0Ym94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFvQ2pELE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2tEQUFkLGNBQWM7dURBWFo7UUFDUDtZQUNJLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLFlBQVk7U0FDekI7UUFDRCxlQUFlO1FBQ2YsV0FBVztRQUNYLDRCQUE0QjtLQUMvQixZQXBCTTtZQUNILGFBQWE7WUFDYixZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixhQUFhO1NBQ2hCLEVBRUcsWUFBWTt3RkFlUCxjQUFjLG1CQWhDbkIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLDJCQUEyQixhQUczQixhQUFhO1FBQ2IsWUFBWTtRQUNaLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsYUFBYSxhQUdiLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsc0JBQXNCO3VGQWFqQixjQUFjO2NBbEMxQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQix3QkFBd0I7b0JBQ3hCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsMkJBQTJCO2lCQUM5QjtnQkFDSCxPQUFPLEVBQUU7b0JBQ0gsYUFBYTtvQkFDYixZQUFZO29CQUNaLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixhQUFhO2lCQUNoQjtnQkFDSCxPQUFPLEVBQUU7b0JBQ0gsWUFBWTtvQkFDWixvQkFBb0I7b0JBQ3BCLHNCQUFzQjtpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSxZQUFZO3FCQUN6QjtvQkFDRCxlQUFlO29CQUNmLFdBQVc7b0JBQ1gsNEJBQTRCO2lCQUMvQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IExpZ2h0Ym94QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0Ym94LWJ1dHRvbi9saWdodGJveC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlnaHRib3gvbGlnaHRib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0Ym94LXRvb2xiYXIvbGlnaHRib3gtdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveEltZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9saWdodGJveC1pbWcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTGlnaHRib3hWaWRlb0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9saWdodGJveC12aWRlby5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMaWdodGJveEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlnaHRib3gtaXRlbS9saWdodGJveC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0Ym94Wm9vbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saWdodGJveC16b29tL2xpZ2h0Ym94LXpvb20uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRib3hUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpZ2h0Ym94LXRodW1ibmFpbHMvbGlnaHRib3gtdGh1bWJuYWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodGJveFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xpZ2h0Ym94LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEb29tU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG9vbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGlnaHRib3gtY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgSGFtbWVyTW9kdWxlLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSGFtbWVyQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMvSGFtbWVyQ29uZmlnJztcclxuaW1wb3J0IHsgTGF6eUxvYWRpbmdNb2R1bGUgfSBmcm9tICcuLi9jbWFjcy1sYXp5LWxvYWRpbmcnO1xyXG5pbXBvcnQgeyBZb3V0dWJlTW9kdWxlIH0gZnJvbSAnLi4vY21hY3MteW91dHViZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTGlnaHRib3hCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgTGlnaHRib3hDb21wb25lbnQsXHJcbiAgICAgICAgTGlnaHRib3hUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgICAgIExpZ2h0Ym94SW1nRGlyZWN0aXZlLFxyXG4gICAgICAgIExpZ2h0Ym94VmlkZW9EaXJlY3RpdmUsXHJcbiAgICAgICAgTGlnaHRib3hJdGVtQ29tcG9uZW50LFxyXG4gICAgICAgIExpZ2h0Ym94Wm9vbUNvbXBvbmVudCxcclxuICAgICAgICBMaWdodGJveFRodW1ibmFpbHNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICAgICAgSGFtbWVyTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBMYXp5TG9hZGluZ01vZHVsZSxcclxuICAgICAgICBZb3V0dWJlTW9kdWxlXHJcbiAgICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgICAgICBIYW1tZXJNb2R1bGUsXHJcbiAgICAgICAgTGlnaHRib3hJbWdEaXJlY3RpdmUsXHJcbiAgICAgICAgTGlnaHRib3hWaWRlb0RpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLFxyXG4gICAgICAgICAgICB1c2VDbGFzczogSGFtbWVyQ29uZmlnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMaWdodGJveFNlcnZpY2UsXHJcbiAgICAgICAgRG9vbVNlcnZpY2UsXHJcbiAgICAgICAgTGlnaHRib3hDb25maWd1cmF0aW9uU2VydmljZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW0xpZ2h0Ym94Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlnaHRib3hNb2R1bGUgeyB9XHJcbiJdfQ==