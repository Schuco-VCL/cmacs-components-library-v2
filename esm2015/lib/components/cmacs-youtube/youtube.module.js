import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeApiService } from './services/youtube-api.service';
import { YoutubePlayerService } from './services/youtube-player.service';
import { YoutubeComponent } from './components/youtube.component';
import * as i0 from "@angular/core";
export class YoutubeModule {
}
YoutubeModule.ɵfac = function YoutubeModule_Factory(t) { return new (t || YoutubeModule)(); };
YoutubeModule.ɵmod = i0.ɵɵdefineNgModule({ type: YoutubeModule });
YoutubeModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        YoutubeApiService,
        YoutubePlayerService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(YoutubeModule, { declarations: [YoutubeComponent], imports: [CommonModule], exports: [YoutubeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YoutubeModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    YoutubeApiService,
                    YoutubePlayerService
                ],
                declarations: [
                    YoutubeComponent
                ],
                exports: [
                    YoutubeComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MteW91dHViZS95b3V0dWJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFpQmxFLE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhO2lEQUFiLGFBQWE7c0RBWGQ7UUFDVixpQkFBaUI7UUFDakIsb0JBQW9CO0tBQ3BCLFlBTlE7WUFDUixZQUFZO1NBQ1o7d0ZBWVcsYUFBYSxtQkFOeEIsZ0JBQWdCLGFBUGhCLFlBQVksYUFVWixnQkFBZ0I7dUZBR0wsYUFBYTtjQWZ6QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLGlCQUFpQjtvQkFDakIsb0JBQW9CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsZ0JBQWdCO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsZ0JBQWdCO2lCQUNoQjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgWW91dHViZUFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3lvdXR1YmUtYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBZb3V0dWJlUGxheWVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMveW91dHViZS1wbGF5ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFlvdXR1YmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMveW91dHViZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0WW91dHViZUFwaVNlcnZpY2UsXHJcblx0XHRZb3V0dWJlUGxheWVyU2VydmljZVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRZb3V0dWJlQ29tcG9uZW50XHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRZb3V0dWJlQ29tcG9uZW50XHJcblx0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWW91dHViZU1vZHVsZSB7IH1cclxuIl19