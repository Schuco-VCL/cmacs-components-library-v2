import { ChangeDetectorRef } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { Subject } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';
import { NzMNContainerComponent } from './base';
import { NzMessageData } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsMessageContainerComponent extends NzMNContainerComponent {
    readonly destroy$: Subject<void>;
    dir: Direction;
    instances: Array<Required<NzMessageData>>;
    top?: string | null;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService);
    protected subscribeConfigChange(): void;
    protected updateConfig(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsMessageContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsMessageContainerComponent, "cmacs-message-container", ["cmacsMessageContainer"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=message-container.component.d.ts.map