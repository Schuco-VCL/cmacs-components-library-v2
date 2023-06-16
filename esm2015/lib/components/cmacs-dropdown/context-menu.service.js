import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { fromEvent, merge, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { CmacsContextMenuServiceModule } from './context-menu.service.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
const listOfPositions = [
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
];
export class CmacsContextMenuService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayRef = null;
        this.closeSubscription = Subscription.EMPTY;
    }
    create($event, nzDropdownMenuComponent) {
        this.close(true);
        const { x, y } = $event;
        if ($event instanceof MouseEvent) {
            $event.preventDefault();
        }
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo({ x, y })
            .withPositions(listOfPositions)
            .withTransformOriginOn('.ant-dropdown');
        this.overlayRef = this.overlay.create({
            positionStrategy,
            disposeOnNavigation: true,
            scrollStrategy: this.overlay.scrollStrategies.close()
        });
        this.closeSubscription = merge(nzDropdownMenuComponent.descendantMenuItemClick$, fromEvent(document, 'click').pipe(filter(event => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), 
        /** handle firefox contextmenu event **/
        filter(event => event.button !== 2), take(1))).subscribe(() => {
            this.close();
        });
        this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
    }
    close(clear = false) {
        if (this.overlayRef) {
            this.overlayRef.detach();
            if (clear) {
                this.overlayRef.dispose();
            }
            this.overlayRef = null;
            this.closeSubscription.unsubscribe();
        }
    }
}
CmacsContextMenuService.ɵfac = function CmacsContextMenuService_Factory(t) { return new (t || CmacsContextMenuService)(i0.ɵɵinject(i1.Overlay)); };
CmacsContextMenuService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsContextMenuService, factory: CmacsContextMenuService.ɵfac, providedIn: CmacsContextMenuServiceModule });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsContextMenuService, [{
        type: Injectable,
        args: [{
                providedIn: CmacsContextMenuServiceModule
            }]
    }], function () { return [{ type: i1.Overlay }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtZHJvcGRvd24vY29udGV4dC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUF1QixNQUFNLHNCQUFzQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7QUFHOUUsTUFBTSxlQUFlLEdBQUc7SUFDdEIsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDeEcsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDM0csSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDekcsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDdkcsQ0FBQztBQUtGLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUg1QixlQUFVLEdBQXNCLElBQUksQ0FBQztRQUNyQyxzQkFBaUIsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBRVIsQ0FBQztJQUV4QyxNQUFNLENBQUMsTUFBNkMsRUFBRSx1QkFBbUQ7UUFDdkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLE1BQU0sWUFBWSxVQUFVLEVBQUU7WUFDaEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTzthQUNsQyxRQUFRLEVBQUU7YUFDVixtQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUM3QixhQUFhLENBQUMsZUFBZSxDQUFDO2FBQzlCLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDcEMsZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFFLElBQUk7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFO1NBQ3RELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQzVCLHVCQUF1QixDQUFDLHdCQUF3QixFQUNoRCxTQUFTLENBQWEsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQXFCLENBQUMsQ0FBQztRQUMzRyx3Q0FBd0M7UUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFDbkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQ0YsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVILENBQUM7SUFFRCxLQUFLLENBQUMsUUFBaUIsS0FBSztRQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7OEZBN0NVLHVCQUF1QjsrREFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGdEIsNkJBQTZCO3VGQUU5Qix1QkFBdUI7Y0FIbkMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSw2QkFBNkI7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21hY3NDb250ZXh0TWVudVNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL2NvbnRleHQtbWVudS5zZXJ2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbWFjc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cbmNvbnN0IGxpc3RPZlBvc2l0aW9ucyA9IFtcbiAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxuICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXG4gIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuXTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDbWFjc0NvbnRleHRNZW51U2VydmljZU1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbnRleHRNZW51U2VydmljZSB7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNsb3NlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge31cblxuICBjcmVhdGUoJGV2ZW50OiBNb3VzZUV2ZW50IHwgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBuekRyb3Bkb3duTWVudUNvbXBvbmVudDogQ21hY3NEcm9wZG93bk1lbnVDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gJGV2ZW50O1xuICAgIGlmICgkZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHsgeCwgeSB9KVxuICAgICAgLndpdGhQb3NpdGlvbnMobGlzdE9mUG9zaXRpb25zKVxuICAgICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLmFudC1kcm9wZG93bicpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKVxuICAgIH0pO1xuICAgIHRoaXMuY2xvc2VTdWJzY3JpcHRpb24gPSBtZXJnZShcbiAgICAgIG56RHJvcGRvd25NZW51Q29tcG9uZW50LmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCxcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ2NsaWNrJykucGlwZShcbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+ICEhdGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSksXG4gICAgICAgIC8qKiBoYW5kbGUgZmlyZWZveCBjb250ZXh0bWVudSBldmVudCAqKi9cbiAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmJ1dHRvbiAhPT0gMiksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgVGVtcGxhdGVQb3J0YWwobnpEcm9wZG93bk1lbnVDb21wb25lbnQudGVtcGxhdGVSZWYsIG56RHJvcGRvd25NZW51Q29tcG9uZW50LnZpZXdDb250YWluZXJSZWYpKTtcbiAgfVxuXG4gIGNsb3NlKGNsZWFyOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICBpZiAoY2xlYXIpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gICAgICB0aGlzLmNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=