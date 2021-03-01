import { OnChanges, SimpleChanges } from '@angular/core';
import { NzDisplayedStep, NzExtendedMark } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsSliderStepComponent implements OnChanges {
    lowerBound: number | null;
    upperBound: number | null;
    marksArray: NzExtendedMark[];
    min: number;
    max: number;
    vertical: boolean;
    included: boolean;
    reverse: boolean;
    steps: NzDisplayedStep[];
    ngOnChanges(changes: SimpleChanges): void;
    trackById(_index: number, step: NzDisplayedStep): number;
    private buildSteps;
    private togglePointActive;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSliderStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSliderStepComponent, "cmacs-slider-step", ["cmacsSliderStep"], { "lowerBound": "lowerBound"; "upperBound": "upperBound"; "marksArray": "marksArray"; "min": "min"; "max": "max"; "vertical": "vertical"; "included": "included"; "reverse": "reverse"; }, {}, never, never>;
}
//# sourceMappingURL=cmacs-slider-step.component.d.ts.map