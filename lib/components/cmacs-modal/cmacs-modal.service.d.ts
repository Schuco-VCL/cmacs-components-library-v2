import { Overlay } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { ModalControlService } from './cmacs-modal-control.service';
import { CmacsModalRef } from './cmacs-modal-ref.class';
import { CmacsModalComponent } from './cmacs-modal.component';
import { ConfirmType, ModalOptionsForService } from './cmacs-modal.type';
import * as i0 from "@angular/core";
export declare class ModalBuilderForService {
    private overlay;
    private modalRef;
    private overlayRef;
    constructor(overlay: Overlay, options?: ModalOptionsForService);
    getInstance(): CmacsModalComponent | null;
    destroyModal(): void;
    private changeProps;
    private createModal;
}
export declare class CmacsModalService {
    private overlay;
    private modalControl;
    get openModals(): CmacsModalRef[];
    get afterAllClose(): Observable<void>;
    constructor(overlay: Overlay, modalControl: ModalControlService);
    closeAll(): void;
    create<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    confirm<T>(options?: ModalOptionsForService<T>, confirmType?: ConfirmType): CmacsModalRef<T>;
    info<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    success<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    error<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    warning<T>(options?: ModalOptionsForService<T>): CmacsModalRef<T>;
    private simpleConfirm;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CmacsModalService>;
}
//# sourceMappingURL=cmacs-modal.service.d.ts.map