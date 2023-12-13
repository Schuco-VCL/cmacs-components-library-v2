import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ModalControlService {
    // Track singleton afterAllClose through over the injection tree
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    // Track singleton openModals array through over the injection tree
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Register a modal to listen its open/close
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    // deregister modals
    deregisterModal(modalRef) {
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    closeAll() {
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
    static { this.ɵfac = function ModalControlService_Factory(t) { return new (t || ModalControlService)(i0.ɵɵinject(ModalControlService, 12)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalControlService, factory: ModalControlService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalControlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ModalControlService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1vZGFsL2NtYWNzLW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7O0FBYTdDLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsZ0VBQWdFO0lBQ2hFLElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBa0IsQ0FBQztJQUN6RixDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFlLENBQUM7SUFDbkYsQ0FBQztJQU1ELElBQVksaUJBQWlCO1FBQzNCLG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBc0IsQ0FBQztJQUNqRyxDQUFDO0lBRUQsWUFBNEMsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBVHRFLG1CQUFjLEdBQTJCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hFLHNCQUFpQixHQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFRLENBQUM7UUFDMUYsMEJBQXFCLEdBQThDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU9oQyxDQUFDO0lBRWxGLDRDQUE0QztJQUM1QyxhQUFhLENBQUMsUUFBdUI7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5HLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztTQUNuRztJQUNILENBQUM7SUFFRCxvQkFBb0I7SUFDcEIsZUFBZSxDQUFDLFFBQXVCO1FBQ3JDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsbUdBQW1HO1lBQ25HLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRCxjQUFjLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsUUFBdUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxFQUFFLEVBQUU7WUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVPLGVBQWUsQ0FBQyxRQUF1QjtRQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7b0ZBbkVVLG1CQUFtQjt1RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTs7dUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBcUJjLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc01vZGFsUmVmIH0gZnJvbSAnLi9jbWFjcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyZWRNZXRhIHtcclxuICBtb2RhbFJlZjogQ21hY3NNb2RhbFJlZjtcclxuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBhZnRlckNsb3NlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udHJvbFNlcnZpY2Uge1xyXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBhZnRlckFsbENsb3NlIHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcclxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBTdWJqZWN0PHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UuYWZ0ZXJBbGxDbG9zZSA6IHRoaXMucm9vdEFmdGVyQWxsQ2xvc2UhO1xyXG4gIH1cclxuXHJcbiAgLy8gVHJhY2sgc2luZ2xldG9uIG9wZW5Nb2RhbHMgYXJyYXkgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxyXG4gIGdldCBvcGVuTW9kYWxzKCk6IENtYWNzTW9kYWxSZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLm9wZW5Nb2RhbHMgOiB0aGlzLnJvb3RPcGVuTW9kYWxzITtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcm9vdE9wZW5Nb2RhbHM6IENtYWNzTW9kYWxSZWZbXSB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogW107XHJcbiAgcHJpdmF0ZSByb290QWZ0ZXJBbGxDbG9zZTogU3ViamVjdDx2b2lkPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDogTWFwPENtYWNzTW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IE1hcCgpO1xyXG5cclxuICBwcml2YXRlIGdldCByZWdpc3RlcmVkTWV0YU1hcCgpOiBNYXA8Q21hY3NNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHtcclxuICAgIC8vIFJlZ2lzdGVyZWQgbW9kYWwgZm9yIGxhdGVyIHVzYWdlXHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLnJlZ2lzdGVyZWRNZXRhTWFwIDogdGhpcy5yb290UmVnaXN0ZXJlZE1ldGFNYXAhO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnRTZXJ2aWNlOiBNb2RhbENvbnRyb2xTZXJ2aWNlKSB7fVxyXG5cclxuICAvLyBSZWdpc3RlciBhIG1vZGFsIHRvIGxpc3RlbiBpdHMgb3Blbi9jbG9zZVxyXG4gIHJlZ2lzdGVyTW9kYWwobW9kYWxSZWY6IENtYWNzTW9kYWxSZWYpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkKG1vZGFsUmVmKSkge1xyXG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGRlcmVnaXN0ZXIgbW9kYWxzXHJcbiAgZGVyZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBDbWFjc01vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWdpc3RlcmVkTWV0YSA9IHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZ2V0KG1vZGFsUmVmKTtcclxuICAgIGlmIChyZWdpc3RlcmVkTWV0YSkge1xyXG4gICAgICAvLyBSZW1vdmUgdGhpcyBtb2RhbCBpZiBpdCBpcyBzdGlsbCBpbiB0aGUgb3BlbmVkIG1vZGFsIGxpc3QgKE5PVEU6IGl0IG1heSB0cmlnZ2VyIFwiYWZ0ZXJBbGxDbG9zZVwiKVxyXG4gICAgICB0aGlzLnJlbW92ZU9wZW5Nb2RhbChyZWdpc3RlcmVkTWV0YS5tb2RhbFJlZik7XHJcbiAgICAgIHJlZ2lzdGVyZWRNZXRhLmFmdGVyT3BlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlckNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuZGVsZXRlKG1vZGFsUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhc1JlZ2lzdGVyZWQobW9kYWxSZWY6IENtYWNzTW9kYWxSZWYpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmhhcyhtb2RhbFJlZik7XHJcbiAgfVxyXG5cclxuICAvLyBDbG9zZSBhbGwgcmVnaXN0ZXJlZCBvcGVuZWQgbW9kYWxzXHJcbiAgY2xvc2VBbGwoKTogdm9pZCB7XHJcbiAgICBsZXQgaSA9IHRoaXMub3Blbk1vZGFscy5sZW5ndGg7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbHNbaV0uY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmOiBDbWFjc01vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZS5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19