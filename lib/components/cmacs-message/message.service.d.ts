import { Overlay } from '@angular/cdk/overlay';
import { Injector, TemplateRef } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core/services';
import { NzMNService } from './base';
import { CmacsMessageContainerComponent } from './message-container.component';
import { NzMessageDataOptions, NzMessageRef } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsMessageService extends NzMNService {
    protected container?: CmacsMessageContainerComponent;
    protected componentPrefix: string;
    constructor(nzSingletonService: NzSingletonService, overlay: Overlay, injector: Injector);
    success(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    error(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    info(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    warning(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    loading(content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    create(type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string, content: string | TemplateRef<void>, options?: NzMessageDataOptions): NzMessageRef;
    private createInstance;
    static ɵfac: i0.ɵɵFactoryDef<CmacsMessageService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CmacsMessageService>;
}
//# sourceMappingURL=message.service.d.ts.map