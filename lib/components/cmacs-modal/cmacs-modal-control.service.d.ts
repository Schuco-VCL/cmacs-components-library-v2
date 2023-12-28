import { Subject } from 'rxjs';
import { CmacsModalRef } from './cmacs-modal-ref.class';
import * as i0 from "@angular/core";
export declare class ModalControlService {
    private parentService;
    get afterAllClose(): Subject<void>;
    get openModals(): CmacsModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private get registeredMetaMap();
    constructor(parentService: ModalControlService);
    registerModal(modalRef: CmacsModalRef): void;
    deregisterModal(modalRef: CmacsModalRef): void;
    hasRegistered(modalRef: CmacsModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalControlService, [{ optional: true; skipSelf: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalControlService>;
}
//# sourceMappingURL=cmacs-modal-control.service.d.ts.map