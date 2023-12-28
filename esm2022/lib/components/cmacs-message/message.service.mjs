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
        return this.container.create({
            ...message,
            ...{
                createdAt: new Date(),
                messageId: this.getInstanceId(),
                options
            }
        });
    }
    static { this.ɵfac = function CmacsMessageService_Factory(t) { return new (t || CmacsMessageService)(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.Injector)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CmacsMessageService, factory: CmacsMessageService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMessageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.NzSingletonService }, { type: i2.Overlay }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQXlCLE1BQU0sZUFBZSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFNL0UsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQVc7SUFJbEQsWUFBWSxrQkFBc0MsRUFBRSxPQUFnQixFQUFFLFFBQWtCO1FBQ3RGLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFIckMsb0JBQWUsR0FBRyxVQUFVLENBQUM7SUFJdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQyxFQUFFLE9BQThCO1FBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELE1BQU0sQ0FDSixJQUFtRSxFQUNuRSxPQUFtQyxFQUNuQyxPQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVPLGNBQWMsQ0FBQyxPQUFzQixFQUFFLE9BQThCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDM0IsR0FBRyxPQUFPO1lBQ1YsR0FBRztnQkFDRCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMvQixPQUFPO2FBQ1I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO29GQS9DVSxtQkFBbUI7dUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07O3VGQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNpbmdsZXRvblNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xuXG5pbXBvcnQgeyBOek1OU2VydmljZSB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhT3B0aW9ucywgTnpNZXNzYWdlUmVmIH0gZnJvbSAnLi90eXBpbmdzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NNZXNzYWdlU2VydmljZSBleHRlbmRzIE56TU5TZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcj86IENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudDtcbiAgcHJvdGVjdGVkIGNvbXBvbmVudFByZWZpeCA9ICdtZXNzYWdlLSc7XG5cbiAgY29uc3RydWN0b3IobnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXksIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKG56U2luZ2xldG9uU2VydmljZSwgb3ZlcmxheSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgc3VjY2Vzcyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdzdWNjZXNzJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGluZm8oY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZVJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnaW5mbycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICB3YXJuaW5nKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgbG9hZGluZyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdsb2FkaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnIHwgc3RyaW5nLFxuICAgIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LFxuICAgIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9uc1xuICApOiBOek1lc3NhZ2VSZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZSwgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSW5zdGFuY2UobWVzc2FnZTogTnpNZXNzYWdlRGF0YSwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlUmVmIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMud2l0aENvbnRhaW5lcihDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmNyZWF0ZSh7XG4gICAgICAuLi5tZXNzYWdlLFxuICAgICAgLi4ue1xuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5nZXRJbnN0YW5jZUlkKCksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19