import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
let globalCounter = 0;
export class NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        this.nzSingletonService = nzSingletonService;
        this.overlay = overlay;
        this.injector = injector;
    }
    remove(id) {
        if (this.container) {
            if (id) {
                this.container.remove(id);
            }
            else {
                this.container.removeAll();
            }
        }
    }
    getInstanceId() {
        return `${this.componentPrefix}-${globalCounter++}`;
    }
    withContainer(ctor) {
        let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
        if (containerInstance) {
            return containerInstance;
        }
        const overlayRef = this.overlay.create({
            hasBackdrop: false,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy: this.overlay.position().global()
        });
        const componentPortal = new ComponentPortal(ctor, null, this.injector);
        const componentRef = overlayRef.attach(componentPortal);
        const overlayPane = overlayRef.overlayElement;
        overlayPane.style.zIndex = '1010';
        if (!containerInstance) {
            this.container = containerInstance = componentRef.instance;
            this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
        }
        return containerInstance;
    }
}
export class NzMNContainerComponent {
    constructor(cdr, nzConfigService) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.instances = [];
        this.destroy$ = new Subject();
        this.updateConfig();
    }
    ngOnInit() {
        this.subscribeConfigChange();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    create(data) {
        const instance = this.onCreate(data);
        if (this.instances.length >= this.config.nzMaxStack) {
            this.instances = this.instances.slice(1);
        }
        this.instances = [...this.instances, instance];
        this.readyInstances();
        return instance;
    }
    remove(id, userAction = false) {
        this.instances.some((instance, index) => {
            if (instance.messageId === id) {
                this.instances.splice(index, 1);
                this.instances = [...this.instances];
                this.onRemove(instance, userAction);
                this.readyInstances();
                return true;
            }
            return false;
        });
    }
    removeAll() {
        this.instances.forEach(i => this.onRemove(i, false));
        this.instances = [];
        this.readyInstances();
    }
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new Subject();
        return instance;
    }
    onRemove(instance, userAction) {
        instance.onClose.next(userAction);
        instance.onClose.complete();
    }
    readyInstances() {
        this.cdr.detectChanges();
    }
    mergeOptions(options) {
        const { duration, nzAnimate, nzPauseOnHover } = this.config;
        return { duration, nzAnimate, nzPauseOnHover, ...options };
    }
    static { this.ɵfac = function NzMNContainerComponent_Factory(t) { return new (t || NzMNContainerComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzMNContainerComponent }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzMNContainerComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzConfigService }]; }, null); })();
export class NzMNComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.destroyed = new EventEmitter();
        this.animationStateChanged = new Subject();
        this.userAction = false;
        this.eraseTimer = null;
    }
    ngOnInit() {
        this.options = this.instance.options;
        if (this.options.nzAnimate) {
            this.instance.state = 'enter';
            this.animationStateChanged
                .pipe(filter(event => event.phaseName === 'done' && event.toState === 'leave'), take(1))
                .subscribe(() => {
                clearTimeout(this.closeTimer);
                this.destroyed.next({ id: this.instance.messageId, userAction: this.userAction });
            });
        }
        this.autoClose = this.options.duration > 0;
        if (this.autoClose) {
            this.initErase();
            this.startEraseTimeout();
        }
    }
    ngOnDestroy() {
        if (this.autoClose) {
            this.clearEraseTimeout();
        }
        this.animationStateChanged.complete();
    }
    onEnter() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.clearEraseTimeout();
            this.updateTTL();
        }
    }
    onLeave() {
        if (this.autoClose && this.options.nzPauseOnHover) {
            this.startEraseTimeout();
        }
    }
    destroy(userAction = false) {
        this.userAction = userAction;
        if (this.options.nzAnimate) {
            this.instance.state = 'leave';
            this.cdr.detectChanges();
            this.closeTimer = setTimeout(() => {
                this.closeTimer = undefined;
                this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
            }, 200);
        }
        else {
            this.destroyed.next({ id: this.instance.messageId, userAction: userAction });
        }
    }
    initErase() {
        this.eraseTTL = this.options.duration;
        this.eraseTimingStart = Date.now();
    }
    updateTTL() {
        if (this.autoClose) {
            this.eraseTTL -= Date.now() - this.eraseTimingStart;
        }
    }
    startEraseTimeout() {
        if (this.eraseTTL > 0) {
            this.clearEraseTimeout();
            this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
            this.eraseTimingStart = Date.now();
        }
        else {
            this.destroy();
        }
    }
    clearEraseTimeout() {
        if (this.eraseTimer !== null) {
            clearTimeout(this.eraseTimer);
            this.eraseTimer = null;
        }
    }
    static { this.ɵfac = function NzMNComponent_Factory(t) { return new (t || NzMNComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzMNComponent }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzMNComponent, [{
        type: Directive
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tZXNzYWdlL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBcUIsU0FBUyxFQUFFLFlBQVksRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFHeEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJOUMsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBRXRCLE1BQU0sT0FBZ0IsV0FBVztJQUkvQixZQUFzQixrQkFBc0MsRUFBWSxPQUFnQixFQUFVLFFBQWtCO1FBQTlGLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFeEgsTUFBTSxDQUFDLEVBQVc7UUFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksRUFBRSxFQUFFO2dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7SUFFUyxhQUFhO1FBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLGFBQWEsRUFBRSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVTLGFBQWEsQ0FBbUMsSUFBc0I7UUFDOUUsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1C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QUFDLENBQUM7U0FDOUU7SUFDSCxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWlCLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNILENBQUM7OEVBckdtQixhQUFhO29FQUFiLGFBQWE7O3VGQUFiLGFBQWE7Y0FEbEMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudFR5cGUsIE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEluamVjdG9yLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgTnpTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlQ29uZmlnLCBOek1lc3NhZ2VEYXRhLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5ncyc7XHJcblxyXG5sZXQgZ2xvYmFsQ291bnRlciA9IDA7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpNTlNlcnZpY2Uge1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjb21wb25lbnRQcmVmaXg6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgY29udGFpbmVyPzogTnpNTkNvbnRhaW5lckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG56U2luZ2xldG9uU2VydmljZTogTnpTaW5nbGV0b25TZXJ2aWNlLCBwcm90ZWN0ZWQgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XHJcblxyXG4gIHJlbW92ZShpZD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XHJcbiAgICAgIGlmIChpZCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZShpZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRJbnN0YW5jZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5jb21wb25lbnRQcmVmaXh9LSR7Z2xvYmFsQ291bnRlcisrfWA7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgd2l0aENvbnRhaW5lcjxUIGV4dGVuZHMgTnpNTkNvbnRhaW5lckNvbXBvbmVudD4oY3RvcjogQ29tcG9uZW50VHlwZTxUPik6IFQge1xyXG4gICAgbGV0IGNvbnRhaW5lckluc3RhbmNlID0gdGhpcy5uelNpbmdsZXRvblNlcnZpY2UuZ2V0U2luZ2xldG9uV2l0aEtleSh0aGlzLmNvbXBvbmVudFByZWZpeCk7XHJcbiAgICBpZiAoY29udGFpbmVySW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuIGNvbnRhaW5lckluc3RhbmNlIGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ub29wKCksXHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY3RvciwgbnVsbCwgdGhpcy5pbmplY3Rvcik7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnRQb3J0YWwpO1xyXG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSBvdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnO1xyXG5cclxuICAgIGlmICghY29udGFpbmVySW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJJbnN0YW5jZSA9IGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcclxuICAgICAgdGhpcy5uelNpbmdsZXRvblNlcnZpY2UucmVnaXN0ZXJTaW5nbGV0b25XaXRoS2V5KHRoaXMuY29tcG9uZW50UHJlZml4LCBjb250YWluZXJJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lckluc3RhbmNlIGFzIFQ7XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKClcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56TU5Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uZmlnPzogUmVxdWlyZWQ8TWVzc2FnZUNvbmZpZz47XHJcbiAgaW5zdGFuY2VzOiBBcnJheTxSZXF1aXJlZDxOek1lc3NhZ2VEYXRhPj4gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkge1xyXG4gICAgdGhpcy51cGRhdGVDb25maWcoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpYmVDb25maWdDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoZGF0YTogTnpNZXNzYWdlRGF0YSk6IFJlcXVpcmVkPE56TWVzc2FnZURhdGE+IHtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5vbkNyZWF0ZShkYXRhKTtcclxuXHJcbiAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID49IHRoaXMuY29uZmlnIS5uek1heFN0YWNrKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2VzID0gdGhpcy5pbnN0YW5jZXMuc2xpY2UoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnN0YW5jZXMgPSBbLi4udGhpcy5pbnN0YW5jZXMsIGluc3RhbmNlXTtcclxuXHJcbiAgICB0aGlzLnJlYWR5SW5zdGFuY2VzKCk7XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGlkOiBzdHJpbmcsIHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZXMuc29tZSgoaW5zdGFuY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5tZXNzYWdlSWQgPT09IGlkKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IFsuLi50aGlzLmluc3RhbmNlc107XHJcbiAgICAgICAgdGhpcy5vblJlbW92ZShpbnN0YW5jZSwgdXNlckFjdGlvbik7XHJcbiAgICAgICAgdGhpcy5yZWFkeUluc3RhbmNlcygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaChpID0+IHRoaXMub25SZW1vdmUoaSwgZmFsc2UpKTtcclxuICAgIHRoaXMuaW5zdGFuY2VzID0gW107XHJcblxyXG4gICAgdGhpcy5yZWFkeUluc3RhbmNlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uQ3JlYXRlKGluc3RhbmNlOiBOek1lc3NhZ2VEYXRhKTogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT4ge1xyXG4gICAgaW5zdGFuY2Uub3B0aW9ucyA9IHRoaXMubWVyZ2VPcHRpb25zKGluc3RhbmNlLm9wdGlvbnMpO1xyXG4gICAgaW5zdGFuY2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgYXMgUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT47XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25SZW1vdmUoaW5zdGFuY2U6IFJlcXVpcmVkPE56TWVzc2FnZURhdGE+LCB1c2VyQWN0aW9uOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpbnN0YW5jZS5vbkNsb3NlLm5leHQodXNlckFjdGlvbik7XHJcbiAgICBpbnN0YW5jZS5vbkNsb3NlLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVhZHlJbnN0YW5jZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgdXBkYXRlQ29uZmlnKCk6IHZvaWQ7XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBzdWJzY3JpYmVDb25maWdDaGFuZ2UoKTogdm9pZDtcclxuXHJcbiAgcHJvdGVjdGVkIG1lcmdlT3B0aW9ucyhvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhT3B0aW9ucyB7XHJcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBuekFuaW1hdGUsIG56UGF1c2VPbkhvdmVyIH0gPSB0aGlzLmNvbmZpZyE7XHJcbiAgICByZXR1cm4geyBkdXJhdGlvbiwgbnpBbmltYXRlLCBuelBhdXNlT25Ib3ZlciwgLi4ub3B0aW9ucyB9O1xyXG4gIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOek1OQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGluc3RhbmNlITogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YT47XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcblxyXG4gIHJlYWRvbmx5IGRlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpZDogc3RyaW5nOyB1c2VyQWN0aW9uOiBib29sZWFuIH0+KCk7XHJcbiAgcmVhZG9ubHkgYW5pbWF0aW9uU3RhdGVDaGFuZ2VkOiBTdWJqZWN0PEFuaW1hdGlvbkV2ZW50PiA9IG5ldyBTdWJqZWN0PEFuaW1hdGlvbkV2ZW50PigpO1xyXG5cclxuICBwcm90ZWN0ZWQgb3B0aW9ucyE6IFJlcXVpcmVkPE56TWVzc2FnZURhdGFPcHRpb25zPjtcclxuICBwcm90ZWN0ZWQgYXV0b0Nsb3NlPzogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgY2xvc2VUaW1lcj86IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgdXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBlcmFzZVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgZXJhc2VUaW1pbmdTdGFydD86IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgZXJhc2VUVEwhOiBudW1iZXI7XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmluc3RhbmNlLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMubnpBbmltYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSAnZW50ZXInO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlZFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50LnBoYXNlTmFtZSA9PT0gJ2RvbmUnICYmIGV2ZW50LnRvU3RhdGUgPT09ICdsZWF2ZScpLFxyXG4gICAgICAgICAgdGFrZSgxKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpO1xyXG4gICAgICAgICAgdGhpcy5kZXN0cm95ZWQubmV4dCh7IGlkOiB0aGlzLmluc3RhbmNlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbjogdGhpcy51c2VyQWN0aW9uIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXV0b0Nsb3NlID0gdGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMDtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5pbml0RXJhc2UoKTtcclxuICAgICAgdGhpcy5zdGFydEVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UpIHtcclxuICAgICAgdGhpcy5jbGVhckVyYXNlVGltZW91dCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZWQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJFcmFzZVRpbWVvdXQoKTtcclxuICAgICAgdGhpcy51cGRhdGVUVEwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTGVhdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5vcHRpb25zLm56UGF1c2VPbkhvdmVyKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRFcmFzZVRpbWVvdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95KHVzZXJBY3Rpb246IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy51c2VyQWN0aW9uID0gdXNlckFjdGlvbjtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMubnpBbmltYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSAnbGVhdmUnO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KHsgaWQ6IHRoaXMuaW5zdGFuY2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uOiB1c2VyQWN0aW9uIH0pO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kZXN0cm95ZWQubmV4dCh7IGlkOiB0aGlzLmluc3RhbmNlLm1lc3NhZ2VJZCwgdXNlckFjdGlvbjogdXNlckFjdGlvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdEVyYXNlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lcmFzZVRUTCA9IHRoaXMub3B0aW9ucy5kdXJhdGlvbjtcclxuICAgIHRoaXMuZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVRUTCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmF1dG9DbG9zZSkge1xyXG4gICAgICB0aGlzLmVyYXNlVFRMIC09IERhdGUubm93KCkgLSB0aGlzLmVyYXNlVGltaW5nU3RhcnQhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydEVyYXNlVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVyYXNlVFRMID4gMCkge1xyXG4gICAgICB0aGlzLmNsZWFyRXJhc2VUaW1lb3V0KCk7XHJcbiAgICAgIHRoaXMuZXJhc2VUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZXN0cm95KCksIHRoaXMuZXJhc2VUVEwpO1xyXG4gICAgICB0aGlzLmVyYXNlVGltaW5nU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyRXJhc2VUaW1lb3V0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZXJhc2VUaW1lciAhPT0gbnVsbCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lcmFzZVRpbWVyKTtcclxuICAgICAgdGhpcy5lcmFzZVRpbWVyID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19