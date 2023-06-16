import { Injectable } from '@angular/core';
import { NzMNService } from './base';
import { CmacsMessageContainerComponent } from './message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/cdk/overlay";
export class CmacsMessageService extends NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'message-';
    }
    success(content, options) {
        return this.createInstance({ type: 'success', content }, options);
    }
    error(content, options) {
        return this.createInstance({ type: 'error', content }, options);
    }
    info(content, options) {
        return this.createInstance({ type: 'info', content }, options);
    }
    warning(content, options) {
        return this.createInstance({ type: 'warning', content }, options);
    }
    loading(content, options) {
        return this.createInstance({ type: 'loading', content }, options);
    }
    create(type, content, options) {
        return this.createInstance({ type, content }, options);
    }
    createInstance(message, options) {
        this.container = this.withContainer(CmacsMessageContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.getInstanceId(),
            options
        }));
    }
}
CmacsMessageService.ɵfac = function CmacsMessageService_Factory(t) { return new (t || CmacsMessageService)(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.Injector)); };
CmacsMessageService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsMessageService, factory: CmacsMessageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NzSingletonService }, { type: i2.Overlay }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFNL0UsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQVc7SUFJbEQsWUFBWSxrQkFBc0MsRUFBRSxPQUFnQixFQUFFLFFBQWtCO1FBQ3RGLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFIckMsb0JBQWUsR0FBRyxVQUFVLENBQUM7SUFJdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE1BQU0sQ0FDSixJQUFtRSxFQUNuRSxPQUFtQyxFQUNuQyxPQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLGNBQWMsQ0FBQyxPQUFzQixFQUFFLE9BQThCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLGlDQUN2QixPQUFPLEdBQ1A7WUFDRCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDL0IsT0FBTztTQUNSLEVBQ0QsQ0FBQztJQUNMLENBQUM7O3NGQS9DVSxtQkFBbUI7MkRBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07dUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2luZ2xldG9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5cbmltcG9ydCB7IE56TU5TZXJ2aWNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFPcHRpb25zLCBOek1lc3NhZ2VSZWYgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDbWFjc01lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgTnpNTlNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyPzogQ21hY3NNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50O1xuICBwcm90ZWN0ZWQgY29tcG9uZW50UHJlZml4ID0gJ21lc3NhZ2UtJztcblxuICBjb25zdHJ1Y3RvcihuelNpbmdsZXRvblNlcnZpY2U6IE56U2luZ2xldG9uU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSwgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgc3VwZXIobnpTaW5nbGV0b25TZXJ2aWNlLCBvdmVybGF5LCBpbmplY3Rvcik7XG4gIH1cblxuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3IoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnZXJyb3InLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5mbyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ2xvYWRpbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sXG4gICAgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zXG4gICk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVJbnN0YW5jZShtZXNzYWdlOiBOek1lc3NhZ2VEYXRhLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy53aXRoQ29udGFpbmVyKENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIuY3JlYXRlKHtcbiAgICAgIC4uLm1lc3NhZ2UsXG4gICAgICAuLi57XG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgbWVzc2FnZUlkOiB0aGlzLmdldEluc3RhbmNlSWQoKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=