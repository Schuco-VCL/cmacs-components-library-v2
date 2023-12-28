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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSliderStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSliderStepComponent, "cmacs-slider-step", ["cmacsSliderStep"], { "lowerBound": { "alias": "lowerBound"; "required": false; }; "upperBound": { "alias": "upperBound"; "required": false; }; "marksArray": { "alias": "marksArray"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "included": { "alias": "included"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-slider-step.component.d.ts.map