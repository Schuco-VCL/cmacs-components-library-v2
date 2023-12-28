import { ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { LightboxComponent } from '../components/lightbox/lightbox.component';
import * as i0 from "@angular/core";
export declare class DoomService {
    private readonly _appRef;
    private readonly _componentFactoryResolver;
    private readonly _injector;
    private readonly _document;
    private _lightboxComponentRef;
    constructor(_appRef: ApplicationRef, _componentFactoryResolver: ComponentFactoryResolver, _injector: Injector, _document: any);
    get lightboxComponentRef(): ComponentRef<LightboxComponent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoomService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DoomService>;
}
//# sourceMappingURL=doom.service.d.ts.map