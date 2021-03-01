import { OnChanges, SimpleChanges } from '@angular/core';
import { NzDisplayedMark, NzExtendedMark } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsSliderMarksComponent implements OnChanges {
    lowerBound: number | null;
    upperBound: number | null;
    marksArray: NzExtendedMark[];
    min: number;
    max: number;
    vertical: boolean;
    included: boolean;
    reverse: boolean;
    marks: NzDisplayedMark[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, mark: NzDisplayedMark): number;
    private buildMarks;
    private getMarkStyles;
    private togglePointActive;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSliderMarksComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSliderMarksComponent, "cmacs-slider-marks", ["cmacsSliderMarks"], { "lowerBound": "lowerBound"; "upperBound": "upperBound"; "marksArray": "marksArray"; "min": "min"; "max": "max"; "vertical": "vertical"; "included": "included"; "reverse": "reverse"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-slider-marks.component.d.ts.map