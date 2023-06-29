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
    duration: 3000,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUFzQjFDLHdDQUEySDtJQUFuRCx5UEFBa0Q7SUFBQyxpQkFBZ0I7OztJQUF6RixzQ0FBcUI7O0FBbkI3RSxNQUFNLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUUzQyxNQUFNLHlCQUF5QixHQUE0QjtJQUN6RCxTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsVUFBVSxFQUFFLENBQUM7SUFDYixjQUFjLEVBQUUsSUFBSTtJQUNwQixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxLQUFLO0NBQ25CLENBQUM7QUFjRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsc0JBQXNCO0lBTXhFLFlBQVksR0FBc0IsRUFBRSxlQUFnQztRQUNsRSxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBTnJCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3hDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFtQyxFQUFFLENBQUM7UUFLN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxLQUFJLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBRVMscUJBQXFCO1FBQzdCLElBQUksQ0FBQyxlQUFlO2FBQ2pCLGdDQUFnQyxDQUFDLHdCQUF3QixDQUFDO2FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3BGLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxZQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLGlEQUNOLHlCQUF5QixHQUN6QixJQUFJLENBQUMsTUFBTSxHQUNYLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FDeEUsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs0R0FuQ1UsOEJBQThCO21FQUE5Qiw4QkFBOEI7UUFMdkMsOEJBQW1GO1FBQ2pGLG1HQUEySTtRQUM3SSxpQkFBTTs7UUFGMkQsOEJBQWlCO1FBQXpELG9EQUF1QztRQUMxQixlQUFZO1FBQVosdUNBQVk7O3VGQUl6Qyw4QkFBOEI7Y0FaMUMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56TU5Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29uZmlnLCBOek1lc3NhZ2VEYXRhIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtZXNzYWdlJztcclxuXHJcbmNvbnN0IE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUc6IFJlcXVpcmVkPE1lc3NhZ2VDb25maWc+ID0ge1xyXG4gIG56QW5pbWF0ZTogdHJ1ZSxcclxuICBkdXJhdGlvbjogMzAwMCxcclxuICBuek1heFN0YWNrOiA3LFxyXG4gIG56UGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gIG56VG9wOiAyNCxcclxuICBuekRpcmVjdGlvbjogJ2x0cidcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1tZXNzYWdlLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01lc3NhZ2VDb250YWluZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1lc3NhZ2VcIiBbY2xhc3MuYW50LW1lc3NhZ2UtcnRsXT1cImRpciA9PT0gJ3J0bCdcIiBbc3R5bGUudG9wXT1cInRvcFwiPlxyXG4gICAgICA8Y21hY3MtbWVzc2FnZSAqbmdGb3I9XCJsZXQgaW5zdGFuY2Ugb2YgaW5zdGFuY2VzXCIgW2luc3RhbmNlXT1cImluc3RhbmNlXCIgKGRlc3Ryb3llZCk9XCJyZW1vdmUoJGV2ZW50LmlkLCAkZXZlbnQudXNlckFjdGlvbilcIj48L2NtYWNzLW1lc3NhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01lc3NhZ2VDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1OQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBpbnN0YW5jZXM6IEFycmF5PFJlcXVpcmVkPE56TWVzc2FnZURhdGE+PiA9IFtdO1xyXG4gIHRvcD86IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcihjZHIsIG56Q29uZmlnU2VydmljZSk7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcclxuICAgIHRoaXMuZGlyID0gY29uZmlnPy5uekRpcmVjdGlvbiB8fCAnbHRyJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSk7XHJcbiAgICAgICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgICAgY29uc3QgeyBuekRpcmVjdGlvbiB9ID0gY29uZmlnO1xyXG4gICAgICAgICAgdGhpcy5kaXIgPSBuekRpcmVjdGlvbiB8fCB0aGlzLmRpcjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZUNvbmZpZygpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAuLi5OWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHLFxyXG4gICAgICAuLi50aGlzLmNvbmZpZyxcclxuICAgICAgLi4udGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSlcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50b3AgPSB0b0Nzc1BpeGVsKHRoaXMuY29uZmlnLm56VG9wKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=