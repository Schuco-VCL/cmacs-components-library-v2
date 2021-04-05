import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core/types';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CmacsStepComponent } from './step.component';
import * as i0 from "@angular/core";
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare type nzProgressDotTemplate = TemplateRef<{
    $implicit: TemplateRef<void>;
    status: string;
    index: number;
}>;
export declare class CmacsWizardComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit {
    private cdr;
    private directionality;
    steps: QueryList<CmacsStepComponent>;
    current: number;
    direction: NzDirectionType;
    labelPlacement: 'horizontal' | 'vertical';
    type: 'default' | 'navigation';
    size: NzSizeDSType;
    startIndex: number;
    status: NzStatusType;
    set nzProgressDot(value: boolean | nzProgressDotTemplate);
    readonly indexChange: EventEmitter<number>;
    private destroy$;
    private indexChangeSubscription?;
    showProcessDot: boolean;
    customProcessDotTemplate?: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    classMap: NgClassType;
    dir: Direction;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateChildrenSteps;
    private setClassMap;
    static ɵfac: i0.ɵɵFactoryDef<CmacsWizardComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsWizardComponent, "cmacs-wizard", ["cmacsWizard"], { "current": "current"; "direction": "direction"; "labelPlacement": "labelPlacement"; "type": "type"; "size": "size"; "startIndex": "startIndex"; "status": "status"; "nzProgressDot": "nzProgressDot"; }, { "indexChange": "indexChange"; }, ["steps"], ["*"]>;
}
//# sourceMappingURL=cmacs-wizard.component.d.ts.map