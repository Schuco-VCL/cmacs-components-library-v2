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
    i0.ɵɵlistener("destroyed", function CmacsMessageContainerComponent_cmacs_message_1_Template_cmacs_message_destroyed_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.remove($event.id, $event.userAction)); });
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
        this.dir = config?.nzDirection || 'ltr';
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
        this.config = {
            ...NZ_MESSAGE_DEFAULT_CONFIG,
            ...this.config,
            ...this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)
        };
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function CmacsMessageContainerComponent_Factory(t) { return new (t || CmacsMessageContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsMessageContainerComponent, selectors: [["cmacs-message-container"]], exportAs: ["cmacsMessageContainer"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "instance", "destroyed"]], template: function CmacsMessageContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, CmacsMessageContainerComponent_cmacs_message_1_Template, 1, 1, "cmacs-message", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("top", ctx.top);
            i0.ɵɵclassProp("ant-message-rtl", ctx.dir === "rtl");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.instances);
        } }, dependencies: [i2.NgForOf, i3.CmacsMessageComponent], encapsulation: 2, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lc3NhZ2UvbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUFzQjFDLHdDQUEySDtJQUFuRCwwTUFBYSxlQUFBLDJDQUFvQyxDQUFBLElBQUM7SUFBQyxpQkFBZ0I7OztJQUF6RixzQ0FBcUI7O0FBbkI3RSxNQUFNLHdCQUF3QixHQUFHLFNBQVMsQ0FBQztBQUUzQyxNQUFNLHlCQUF5QixHQUE0QjtJQUN6RCxTQUFTLEVBQUUsSUFBSTtJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsVUFBVSxFQUFFLENBQUM7SUFDYixjQUFjLEVBQUUsSUFBSTtJQUNwQixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxLQUFLO0NBQ25CLENBQUM7QUFjRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsc0JBQXNCO0lBTXhFLFlBQVksR0FBc0IsRUFBRSxlQUFnQztRQUNsRSxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBTnJCLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3hDLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUFtQyxFQUFFLENBQUM7UUFLN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLFdBQVcsSUFBSSxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUVTLHFCQUFxQjtRQUM3QixJQUFJLENBQUMsZUFBZTthQUNqQixnQ0FBZ0MsQ0FBQyx3QkFBd0IsQ0FBQzthQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNwRixJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osR0FBRyx5QkFBeUI7WUFDNUIsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNkLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4RSxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7K0ZBbkNVLDhCQUE4QjtvRUFBOUIsOEJBQThCO1lBTHZDLDhCQUFtRjtZQUNqRixtR0FBMkk7WUFDN0ksaUJBQU07O1lBRjJELDhCQUFpQjtZQUF6RCxvREFBdUM7WUFDMUIsZUFBWTtZQUFaLHVDQUFZOzs7dUZBSXpDLDhCQUE4QjtjQVoxQyxTQUFTO2VBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpNTkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VDb25maWcsIE56TWVzc2FnZURhdGEgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21lc3NhZ2UnO1xyXG5cclxuY29uc3QgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJRzogUmVxdWlyZWQ8TWVzc2FnZUNvbmZpZz4gPSB7XHJcbiAgbnpBbmltYXRlOiB0cnVlLFxyXG4gIGR1cmF0aW9uOiAzMDAwLFxyXG4gIG56TWF4U3RhY2s6IDcsXHJcbiAgbnpQYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgbnpUb3A6IDI0LFxyXG4gIG56RGlyZWN0aW9uOiAnbHRyJ1xyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1lc3NhZ2UtY29udGFpbmVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVzc2FnZUNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbWVzc2FnZVwiIFtjbGFzcy5hbnQtbWVzc2FnZS1ydGxdPVwiZGlyID09PSAncnRsJ1wiIFtzdHlsZS50b3BdPVwidG9wXCI+XHJcbiAgICAgIDxjbWFjcy1tZXNzYWdlICpuZ0Zvcj1cImxldCBpbnN0YW5jZSBvZiBpbnN0YW5jZXNcIiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiAoZGVzdHJveWVkKT1cInJlbW92ZSgkZXZlbnQuaWQsICRldmVudC51c2VyQWN0aW9uKVwiPjwvY21hY3MtbWVzc2FnZT5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIE56TU5Db250YWluZXJDb21wb25lbnQge1xyXG4gIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIGluc3RhbmNlczogQXJyYXk8UmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT4+ID0gW107XHJcbiAgdG9wPzogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHtcclxuICAgIHN1cGVyKGNkciwgbnpDb25maWdTZXJ2aWNlKTtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpO1xyXG4gICAgdGhpcy5kaXIgPSBjb25maWc/Lm56RGlyZWN0aW9uIHx8ICdsdHInO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZUNvbmZpZ0NoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoKTtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKTtcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICBjb25zdCB7IG56RGlyZWN0aW9uIH0gPSBjb25maWc7XHJcbiAgICAgICAgICB0aGlzLmRpciA9IG56RGlyZWN0aW9uIHx8IHRoaXMuZGlyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgdXBkYXRlQ29uZmlnKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgIC4uLk5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcsXHJcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxyXG4gICAgICAuLi50aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRvcCA9IHRvQ3NzUGl4ZWwodGhpcy5jb25maWcubnpUb3ApO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==