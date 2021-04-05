import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzMNComponent } from './base';
import { NzMessageData } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsMessageComponent extends NzMNComponent implements OnInit, OnDestroy {
    instance: Required<NzMessageData>;
    readonly destroyed: EventEmitter<{
        id: string;
        userAction: boolean;
    }>;
    constructor(cdr: ChangeDetectorRef);
    closeMessage(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsMessageComponent, "cmacs-message", ["cmacsMessage"], { "instance": "instance"; }, { "destroyed": "destroyed"; }, never, never>;
}
//# sourceMappingURL=message.component.d.ts.map