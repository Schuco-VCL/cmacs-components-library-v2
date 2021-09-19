import { NgModule } from '@angular/core';
import { DoomSensorService } from './services/doom-sensor.service';
import { LazyLoadingDirective } from './directives/lazy-loading.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class LazyLoadingModule {
}
LazyLoadingModule.ɵfac = function LazyLoadingModule_Factory(t) { return new (t || LazyLoadingModule)(); };
LazyLoadingModule.ɵmod = i0.ɵɵdefineNgModule({ type: LazyLoadingModule });
LazyLoadingModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        DoomSensorService
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LazyLoadingModule, { declarations: [LazyLoadingDirective], imports: [CommonModule], exports: [LazyLoadingDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LazyLoadingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    LazyLoadingDirective
                ],
                exports: [
                    LazyLoadingDirective
                ],
                providers: [
                    DoomSensorService
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1sb2FkaW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1sYXp5LWxvYWRpbmcvbGF6eS1sb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFnQi9DLE1BQU0sT0FBTyxpQkFBaUI7O2tGQUFqQixpQkFBaUI7cURBQWpCLGlCQUFpQjswREFKZjtRQUNQLGlCQUFpQjtLQUNwQixZQVhRO1lBQ0wsWUFBWTtTQUNmO3dGQVdRLGlCQUFpQixtQkFUdEIsb0JBQW9CLGFBSHBCLFlBQVksYUFNWixvQkFBb0I7dUZBTWYsaUJBQWlCO2NBZDdCLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1Ysb0JBQW9CO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsb0JBQW9CO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1AsaUJBQWlCO2lCQUNwQjthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9vbVNlbnNvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Rvb20tc2Vuc29yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMYXp5TG9hZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sYXp5LWxvYWRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTGF6eUxvYWRpbmdEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTGF6eUxvYWRpbmdEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBEb29tU2Vuc29yU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==