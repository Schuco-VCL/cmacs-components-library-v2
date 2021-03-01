import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ReplaySubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NzRadioService {
    selected$: ReplaySubject<any>;
    touched$: Subject<void>;
    disabled$: ReplaySubject<boolean>;
    name$: ReplaySubject<string>;
    touch(): void;
    select(value: NzSafeAny): void;
    setDisabled(value: boolean): void;
    setName(value: string): void;
    static ɵfac: i0.ɵɵFactoryDef<NzRadioService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NzRadioService>;
}
//# sourceMappingURL=radio.service.d.ts.map