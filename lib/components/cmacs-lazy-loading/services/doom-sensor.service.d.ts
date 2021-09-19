import { TrackedProperties } from '../models/tracked-properties.interface';
import * as i0 from "@angular/core";
export declare class DoomSensorService {
    private _trackedItems;
    private _trackInterval;
    constructor();
    track(nativeElement: any, trackedProperties: TrackedProperties, callBack: () => void): void;
    untrack(nativeElement: any): void;
    private _testList;
    private _testItem;
    private _getState;
    static ɵfac: i0.ɵɵFactoryDef<DoomSensorService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DoomSensorService>;
}
//# sourceMappingURL=doom-sensor.service.d.ts.map