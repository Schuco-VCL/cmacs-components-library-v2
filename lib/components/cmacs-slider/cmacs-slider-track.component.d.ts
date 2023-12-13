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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSliderTrackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSliderTrackComponent, "cmacs-slider-track", ["cmacsSliderTrack"], { "offset": { "alias": "offset"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; "dir": { "alias": "dir"; "required": false; }; "length": { "alias": "length"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "included": { "alias": "included"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-slider-track.component.d.ts.map