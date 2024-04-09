/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A collection module of standard output for all lib components
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { DateHeaderComponent } from './date-header.component';
import { DateTableComponent } from './date-table.component';
import { DecadeHeaderComponent } from './decade-header.component';
import { DecadeTableComponent } from './decade-table.component';
import { MonthHeaderComponent } from './month-header.component';
import { MonthTableComponent } from './month-table.component';
import { YearHeaderComponent } from './year-header.component';
import { YearTableComponent } from './year-table.component';
import * as i0 from "@angular/core";
export class LibPackerModule {
    static { this.ɵfac = function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LibPackerModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LibPackerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LibPackerModule, { declarations: [DateHeaderComponent,
        DateTableComponent,
        DecadeHeaderComponent,
        DecadeTableComponent,
        MonthHeaderComponent,
        MonthTableComponent,
        YearHeaderComponent,
        YearTableComponent], imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule], exports: [DateHeaderComponent,
        DateTableComponent,
        DecadeHeaderComponent,
        DecadeTableComponent,
        MonthHeaderComponent,
        MonthTableComponent,
        YearHeaderComponent,
        YearTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXBhY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2xpYi1wYWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRztBQUVIOztHQUVHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBeUI1RCxNQUFNLE9BQU8sZUFBZTtnRkFBZixlQUFlO21FQUFmLGVBQWU7dUVBdEJoQixZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxjQUFjOzt1RkFzQjFFLGVBQWU7Y0F2QjNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUM7Z0JBQ3RGLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLG1CQUFtQjtvQkFDbkIsa0JBQWtCO29CQUNsQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNuQjthQUNGOzt3RkFDWSxlQUFlLG1CQVZ4QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsa0JBQWtCLGFBbkJWLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsYUFFbkYsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG4vKipcclxuICogQSBjb2xsZWN0aW9uIG1vZHVsZSBvZiBzdGFuZGFyZCBvdXRwdXQgZm9yIGFsbCBsaWIgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgTnpUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90aW1lLXBpY2tlcic7XHJcbmltcG9ydCB7IERhdGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZWNhZGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2RlY2FkZS1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVjYWRlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RlY2FkZS10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb250aEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoVGFibGVDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFllYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXItaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFllYXJUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4veWVhci10YWJsZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelRpbWVQaWNrZXJNb2R1bGUsIE56T3V0bGV0TW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEYXRlSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRGF0ZVRhYmxlQ29tcG9uZW50LFxyXG4gICAgRGVjYWRlSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRGVjYWRlVGFibGVDb21wb25lbnQsXHJcbiAgICBNb250aEhlYWRlckNvbXBvbmVudCxcclxuICAgIE1vbnRoVGFibGVDb21wb25lbnQsXHJcbiAgICBZZWFySGVhZGVyQ29tcG9uZW50LFxyXG4gICAgWWVhclRhYmxlQ29tcG9uZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIERhdGVIZWFkZXJDb21wb25lbnQsXHJcbiAgICBEYXRlVGFibGVDb21wb25lbnQsXHJcbiAgICBEZWNhZGVIZWFkZXJDb21wb25lbnQsXHJcbiAgICBEZWNhZGVUYWJsZUNvbXBvbmVudCxcclxuICAgIE1vbnRoSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudCxcclxuICAgIFllYXJIZWFkZXJDb21wb25lbnQsXHJcbiAgICBZZWFyVGFibGVDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJQYWNrZXJNb2R1bGUge31cclxuIl19