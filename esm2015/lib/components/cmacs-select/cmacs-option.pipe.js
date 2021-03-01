import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NzFilterOptionPipe {
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return options.filter(o => filterOption(searchValue, o));
        }
    }
}
NzFilterOptionPipe.ɵfac = function NzFilterOptionPipe_Factory(t) { return new (t || NzFilterOptionPipe)(); };
NzFilterOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterOption", type: NzFilterOptionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzFilterOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterOption' }]
    }], null, null); })();
export class NzFilterGroupOptionPipe {
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return groups.filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(searchValue, o));
            });
        }
    }
}
NzFilterGroupOptionPipe.ɵfac = function NzFilterGroupOptionPipe_Factory(t) { return new (t || NzFilterGroupOptionPipe)(); };
NzFilterGroupOptionPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "nzFilterGroupOption", type: NzFilterGroupOptionPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzFilterGroupOptionPipe, [{
        type: Pipe,
        args: [{ name: 'nzFilterGroupOption' }]
    }], null, null); })();
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU9wRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FDUCxPQUErQixFQUMvQixXQUFtQixFQUNuQixZQUEyQixFQUMzQixZQUFxQjtRQUVyQixJQUFJLFlBQVksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBUSxPQUFrQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7O29GQVpVLGtCQUFrQjsyRUFBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQWlCaEMsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxTQUFTLENBQ1AsTUFBbUMsRUFDbkMsV0FBbUIsRUFDbkIsWUFBMkIsRUFDM0IsWUFBcUI7UUFFckIsSUFBSSxZQUFZLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBUSxNQUFzQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDeEQsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs4RkFkVSx1QkFBdUI7cUZBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7QUFrQnJDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQTRCO0lBQ25GLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jbWFjcy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ21hY3NPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJPcHRpb24nIH0pXHJcbmV4cG9ydCBjbGFzcyBOekZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICBvcHRpb25zOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbixcclxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxyXG4gICk6IENtYWNzT3B0aW9uQ29tcG9uZW50W10ge1xyXG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgQ21hY3NPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlckdyb3VwT3B0aW9uJyB9KVxyXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJHcm91cE9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oXHJcbiAgICBncm91cHM6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSxcclxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXHJcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXHJcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cclxuICApOiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W10ge1xyXG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xyXG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZTogc3RyaW5nLCBvcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XHJcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==