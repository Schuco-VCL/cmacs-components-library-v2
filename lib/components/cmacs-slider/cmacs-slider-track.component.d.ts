import { Direction } from '@angular/cdk/bidi';
import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export interface NzSliderTrackStyle {
    bottom?: string | null;
    height?: string | null;
    left?: string | null;
    right?: string | null;
    width?: string | null;
    visibility?: string;
}
export declare class CmacsSliderTrackComponent implements OnChanges {
    offset: number;
    reverse: boolean;
    dir: Direction;
    length: number;
    vertical: boolean;
    included: boolean;
    style: NzSliderTrackStyle;
    ngOnChanges(): void;
    private getHorizontalStylePosition;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSliderTrackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSliderTrackComponent, "cmacs-slider-track", ["cmacsSliderTrack"], { "offset": "offset"; "reverse": "reverse"; "dir": "dir"; "length": "length"; "vertical": "vertical"; "included": "included"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-slider-track.component.d.ts.map