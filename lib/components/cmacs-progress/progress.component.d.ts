import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NgStyleInterface } from 'ng-zorro-antd/core/types';
import { NzProgressCirclePath, NzProgressFormatter, NzProgressGapPositionType, NzProgressStatusType, NzProgressStepItem, NzProgressStrokeColorType, NzProgressStrokeLinecapType, NzProgressTypeType } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsProgressComponent implements OnChanges, OnInit, OnDestroy {
    private cdr;
    nzConfigService: NzConfigService;
    private directionality;
    showInfo: boolean;
    width: number;
    strokeColor?: NzProgressStrokeColorType;
    size: 'default' | 'small';
    format?: NzProgressFormatter;
    successPercent?: number;
    percent: number;
    cmacsStrokeWidth?: number;
    gapDegree?: number;
    cmacsStatus?: NzProgressStatusType;
    type: NzProgressTypeType;
    gapPosition: NzProgressGapPositionType;
    strokeLinecap: NzProgressStrokeLinecapType;
    cmacsSteps: number;
    steps: NzProgressStepItem[];
    /** Gradient style when `type` is `line`. */
    lineGradient: string | null;
    /** If user uses gradient color. */
    isGradient: boolean;
    /** If the linear progress is a step progress. */
    isSteps: boolean;
    /**
     * Each progress whose `type` is circle or dashboard should have unique id to
     * define `<linearGradient>`.
     */
    gradientId: number;
    /** Paths to rendered in the template. */
    progressCirclePath: NzProgressCirclePath[];
    circleGradient?: Array<{
        offset: string;
        color: string;
    }>;
    trailPathStyle: NgStyleInterface | null;
    pathString?: string;
    icon: string;
    dir: Direction;
    trackByFn: (index: number) => string;
    get formatter(): NzProgressFormatter;
    get status(): NzProgressStatusType;
    get strokeWidth(): number;
    get isCircleStyle(): boolean;
    private cachedStatus;
    private inferredStatus;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, nzConfigService: NzConfigService, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private updateIcon;
    /**
     * Calculate step render configs.
     */
    private getSteps;
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    private getCirclePaths;
    private setStrokeColor;
    static ɵfac: i0.ɵɵFactoryDef<CmacsProgressComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsProgressComponent, "cmacs-progress", ["cmacsProgress"], { "showInfo": "showInfo"; "width": "width"; "strokeColor": "strokeColor"; "size": "size"; "format": "format"; "successPercent": "successPercent"; "percent": "percent"; "cmacsStrokeWidth": "cmacsStrokeWidth"; "gapDegree": "gapDegree"; "cmacsStatus": "cmacsStatus"; "type": "type"; "gapPosition": "gapPosition"; "strokeLinecap": "strokeLinecap"; "cmacsSteps": "cmacsSteps"; }, {}, never, never>;
}
//# sourceMappingURL=progress.component.d.ts.map