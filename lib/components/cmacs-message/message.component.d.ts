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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsMessageComponent, "cmacs-message", ["cmacsMessage"], { "instance": { "alias": "instance"; "required": false; }; }, { "destroyed": "destroyed"; }, never, never, false, never>;
}
//# sourceMappingURL=message.component.d.ts.map