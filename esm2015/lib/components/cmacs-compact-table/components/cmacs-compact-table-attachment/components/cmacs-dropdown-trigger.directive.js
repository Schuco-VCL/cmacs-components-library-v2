import { Directive, HostListener, Input } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class CmacsDropdownTriggerDirective {
    constructor(overlay, elementRef, viewContainerRef) {
        this.overlay = overlay;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.isDropdownOpen = false;
        this.dropdownClosingActionsSub = Subscription.EMPTY;
        this.isOpenPane = false;
    }
    toggleDropdown() {
        this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
    }
    openDropdown() {
        this.isDropdownOpen = true;
        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.overlay
                .position()
                .flexibleConnectedTo(this.elementRef)
                .withPositions([
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                    offsetY: 0
                }
            ])
        });
        const templatePortal = new TemplatePortal(this.dropdownPanel.templateRef, this.viewContainerRef);
        this.overlayRef.attach(templatePortal);
        this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(() => this.destroyDropdown());
    }
    dropdownClosingActions() {
        const backdropClick$ = this.overlayRef.backdropClick();
        const detachment$ = this.overlayRef.detachments();
        const dropdownClosed = this.dropdownPanel.closed;
        return merge(backdropClick$, detachment$, dropdownClosed);
    }
    destroyDropdown() {
        if (!this.overlayRef || !this.isDropdownOpen || this.isOpenPane) {
            return;
        }
        this.dropdownClosingActionsSub.unsubscribe();
        this.isDropdownOpen = false;
        this.overlayRef.detach();
    }
    clickout(event) {
        let element = document.getElementById('cta-dropdown-options');
        if (element && element.contains(event.target)) {
            this.isOpenPane = true;
        }
        else {
            this.isOpenPane = false;
        }
    }
    ngOnDestroy() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
}
CmacsDropdownTriggerDirective.ɵfac = function CmacsDropdownTriggerDirective_Factory(t) { return new (t || CmacsDropdownTriggerDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
CmacsDropdownTriggerDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsDropdownTriggerDirective, selectors: [["", "dropdownTrigger", ""]], hostBindings: function CmacsDropdownTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsDropdownTriggerDirective_click_HostBindingHandler() { return ctx.toggleDropdown(); })("mousedown", function CmacsDropdownTriggerDirective_mousedown_HostBindingHandler($event) { return ctx.clickout($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { dropdownPanel: ["dropdownTrigger", "dropdownPanel"] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsDropdownTriggerDirective, [{
        type: Directive,
        args: [{
                selector: '[dropdownTrigger]',
                host: {
                    '(click)': 'toggleDropdown()'
                }
            }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }]; }, { dropdownPanel: [{
            type: Input,
            args: ['dropdownTrigger']
        }], clickout: [{
            type: HostListener,
            args: ['document:mousedown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZHJvcGRvd24tdHJpZ2dlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tcGFjdC10YWJsZS9jb21wb25lbnRzL2NtYWNzLWNvbXBhY3QtdGFibGUtYXR0YWNobWVudC9jb21wb25lbnRzL2NtYWNzLWRyb3Bkb3duLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxLQUFLLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFTdkQsTUFBTSxPQUFPLDZCQUE2QjtJQVN4QyxZQUNVLE9BQWdCLEVBQ2hCLFVBQW1DLEVBQ25DLGdCQUFrQztRQUZsQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYcEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFdkIsOEJBQXlCLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUV2RCxlQUFVLEdBQVcsS0FBSyxDQUFDO0lBUXhCLENBQUM7SUFFSixjQUFjO1FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3BDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1lBQ3JELGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUMzQixRQUFRLEVBQUU7aUJBQ1YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDcEMsYUFBYSxDQUFDO2dCQUNiO29CQUNFLE9BQU8sRUFBRSxRQUFRO29CQUNqQixPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxLQUFLO29CQUNmLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2FBQ0YsQ0FBQztTQUNMLENBQUMsQ0FBQztRQUVILE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLFNBQVMsQ0FDdEUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUMsY0FBYyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMvRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQVU7UUFDZixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFDN0QsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBSztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7OzBHQS9FVSw2QkFBNkI7a0VBQTdCLDZCQUE2QjswR0FBN0Isb0JBQWdCLHVHQUFoQixvQkFBZ0I7O3VGQUFoQiw2QkFBNkI7Y0FOekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsa0JBQWtCO2lCQUM5QjthQUNGO2tIQVFrQyxhQUFhO2tCQUE3QyxLQUFLO21CQUFDLGlCQUFpQjtZQTJEeEIsUUFBUTtrQkFEUCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEcm9wZG93blBhbmVsIH0gZnJvbSAnLi9jbWFjcy1kcm9wZG93bi1wYW5lbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkcm9wZG93blRyaWdnZXJdJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICd0b2dnbGVEcm9wZG93bigpJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRHJvcGRvd25UcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGlzRHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgZHJvcGRvd25DbG9zaW5nQWN0aW9uc1N1YiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuXHJcbiAgaXNPcGVuUGFuZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgnZHJvcGRvd25UcmlnZ2VyJykgcHVibGljIGRyb3Bkb3duUGFuZWw6IERyb3Bkb3duUGFuZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge31cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID8gdGhpcy5kZXN0cm95RHJvcGRvd24oKSA6IHRoaXMub3BlbkRyb3Bkb3duKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gdHJ1ZTtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheVxyXG4gICAgICAgIC5wb3NpdGlvbigpXHJcbiAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmKVxyXG4gICAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgICBvdmVybGF5WDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgICAgICAgb2Zmc2V0WTogMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZVBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbChcclxuICAgICAgdGhpcy5kcm9wZG93blBhbmVsLnRlbXBsYXRlUmVmLFxyXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWZcclxuICAgICk7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRlbXBsYXRlUG9ydGFsKTtcclxuICAgIHRoaXMuZHJvcGRvd25DbG9zaW5nQWN0aW9uc1N1YiA9IHRoaXMuZHJvcGRvd25DbG9zaW5nQWN0aW9ucygpLnN1YnNjcmliZShcclxuICAgICAgKCkgPT4gdGhpcy5kZXN0cm95RHJvcGRvd24oKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJvcGRvd25DbG9zaW5nQWN0aW9ucygpOiBPYnNlcnZhYmxlPE1vdXNlRXZlbnQgfCB2b2lkPiB7XHJcbiAgICBjb25zdCBiYWNrZHJvcENsaWNrJCA9IHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCk7XHJcbiAgICBjb25zdCBkZXRhY2htZW50JCA9IHRoaXMub3ZlcmxheVJlZi5kZXRhY2htZW50cygpO1xyXG4gICAgY29uc3QgZHJvcGRvd25DbG9zZWQgPSB0aGlzLmRyb3Bkb3duUGFuZWwuY2xvc2VkO1xyXG4gICAgcmV0dXJuIG1lcmdlKGJhY2tkcm9wQ2xpY2skLCBkZXRhY2htZW50JCwgZHJvcGRvd25DbG9zZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95RHJvcGRvd24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZiB8fCAhdGhpcy5pc0Ryb3Bkb3duT3BlbiB8fCB0aGlzLmlzT3BlblBhbmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcm9wZG93bkNsb3NpbmdBY3Rpb25zU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmlzRHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIGNsaWNrb3V0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3RhLWRyb3Bkb3duLW9wdGlvbnMnKVxyXG4gICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgIHRoaXMuaXNPcGVuUGFuZSA9IHRydWU7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICB0aGlzLmlzT3BlblBhbmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==