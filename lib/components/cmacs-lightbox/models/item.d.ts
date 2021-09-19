import { Position } from './position.interface';
import { Dimensions } from './dimensions.interface';
import { Observable } from 'rxjs';
export declare class Item {
    title: string;
    container: string;
    src: string;
    xsSrc: string;
    smSrc: string;
    mdSrc: string;
    lgSrc: string;
    xlSrc: string;
    xsBreakpoint: number;
    smBreakpoint: number;
    mdBreakpoint: number;
    lgBreakpoint: number;
    position?: Position;
    isVideo: boolean;
    private _dimensionsBehaviorSubject;
    get dimensions(): Dimensions;
    set dimensions(value: Dimensions);
    get $dimensions(): Observable<Dimensions>;
}
//# sourceMappingURL=item.d.ts.map