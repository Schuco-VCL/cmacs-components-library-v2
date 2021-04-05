import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMNContainerComponent } from './base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/common";
import * as i3 from "./message.component";
function CmacsMessageContainerComponent_cmacs_message_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-message", 2);
    i0.ɵɵlistener("destroyed", function CmacsMessageContainerComponent_cmacs_message_1_Template_cmacs_message_destroyed_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.remove($event.id, $event.userAction); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const instance_r1 = ctx.$implicit;
    i0.ɵɵproperty("instance", instance_r1);
} }
const NZ_CONFIG_COMPONENT_NAME = 'message';
const NZ_MESSAGE_DEFAULT_CONFIG = {
    nzAnimate: true,
    nzDuration: 3000,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzTop: 24,
    nzDirection: 'ltr'
};
export class CmacsMessageContainerComponent extends NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.destroy$ = new Subject();
        this.dir = 'ltr';
        this.instances = [];
        const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
        this.dir = (config === null || config === void 0 ? void 0 : config.nzDirection) || 'ltr';
    }
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateConfig();
            const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
            if (config) {
                const { nzDirection } = config;
                this.dir = nzDirection || this.dir;
            }
        });
    }
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
}
CmacsMessageContainerComponent.ɵfac = function CmacsMessageContainerComponent_Factory(t) { return new (t || CmacsMessageContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService)); };
CmacsMessageContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsMessageContainerComponent, selectors: [["cmacs-message-container"]], exportAs: ["cmacsMessageContainer"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "instance", "destroyed"]], template: function CmacsMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, CmacsMessageContainerComponent_cmacs_message_1_Template, 1, 1, "cmacs-message", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("top", ctx.top);
        i0.ɵɵclassProp("ant-message-rtl", ctx.dir === "rtl");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.instances);
    } }, directives: [i2.NgForOf, i3.CmacsMessageComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMessageContainerComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-message-container',
                exportAs: 'cmacsMessageContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      <cmacs-message *ngFor="let instance of instances" [instance]="instance" (destroyed)="remove($event.id, $event.userAction)"></cmacs-message>
    </div>
  `
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUFzQjFDLHdDQUEySDtJQUFuRCx5UEFBa0Q7SUFBQyxpQkFBZ0I7OztJQUF6RixzQ0FBcUI7O0FBbkI3RSxNQUFNLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUUzQyxNQUFNLHlCQUF5QixHQUE0QjtJQUN6RCxTQUFTLEVBQUUsSUFBSTtJQUNmLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsY0FBYyxFQUFFLElBQUk7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxXQUFXLEVBQUUsS0FBSztDQUNuQixDQUFDO0FBY0YsTUFBTSxPQUFPLDhCQUErQixTQUFRLHNCQUFzQjtJQU14RSxZQUFZLEdBQXNCLEVBQUUsZUFBZ0M7UUFDbEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztRQU5yQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN4QyxRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ3ZCLGNBQVMsR0FBbUMsRUFBRSxDQUFDO1FBSzdDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsS0FBSSxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNwRixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxpREFDTix5QkFBeUIsR0FDekIsSUFBSSxDQUFDLE1BQU0sR0FDWCxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLHdCQUF3QixDQUFDLENBQ3hFLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7NEdBbkNVLDhCQUE4QjttRUFBOUIsOEJBQThCO1FBTHZDLDhCQUFtRjtRQUNqRixtR0FBMkk7UUFDN0ksaUJBQU07O1FBRjJELDhCQUFpQjtRQUF6RCxvREFBdUM7UUFDMUIsZUFBWTtRQUFaLHVDQUFZOzt1RkFJekMsOEJBQThCO2NBWjFDLFNBQVM7ZUFBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRTs7OztHQUlUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VDb25maWcsIE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhIH0gZnJvbSAnLi90eXBpbmdzJztcblxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21lc3NhZ2UnO1xuXG5jb25zdCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHOiBSZXF1aXJlZDxNZXNzYWdlQ29uZmlnPiA9IHtcbiAgbnpBbmltYXRlOiB0cnVlLFxuICBuekR1cmF0aW9uOiAzMDAwLFxuICBuek1heFN0YWNrOiA3LFxuICBuelBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgbnpUb3A6IDI0LFxuICBuekRpcmVjdGlvbjogJ2x0cidcbn07XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdjbWFjcy1tZXNzYWdlLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnY21hY3NNZXNzYWdlQ29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1tZXNzYWdlXCIgW2NsYXNzLmFudC1tZXNzYWdlLXJ0bF09XCJkaXIgPT09ICdydGwnXCIgW3N0eWxlLnRvcF09XCJ0b3BcIj5cbiAgICAgIDxjbWFjcy1tZXNzYWdlICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiBpbnN0YW5jZXNcIiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiPjwvY21hY3MtbWVzc2FnZT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1OQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBpbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56TWVzc2FnZURhdGE+PiA9IFtdO1xuICB0b3A/OiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoY2RyLCBuekNvbmZpZ1NlcnZpY2UpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xuICAgIHRoaXMuZGlyID0gY29uZmlnPy5uekRpcmVjdGlvbiB8fCAnbHRyJztcbiAgfVxuXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XG4gICAgICAgIGlmIChjb25maWcpIHtcbiAgICAgICAgICBjb25zdCB7IG56RGlyZWN0aW9uIH0gPSBjb25maWc7XG4gICAgICAgICAgdGhpcy5kaXIgPSBuekRpcmVjdGlvbiB8fCB0aGlzLmRpcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlQ29uZmlnKCk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcbiAgICB9O1xuXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLm56VG9wKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19