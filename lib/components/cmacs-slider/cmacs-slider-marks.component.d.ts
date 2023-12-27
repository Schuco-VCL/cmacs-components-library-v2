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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSliderMarksComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSliderMarksComponent, "cmacs-slider-marks", ["cmacsSliderMarks"], { "lowerBound": { "alias": "lowerBound"; "required": false; }; "upperBound": { "alias": "upperBound"; "required": false; }; "marksArray": { "alias": "marksArray"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "included": { "alias": "included"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-slider-marks.component.d.ts.map