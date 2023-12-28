import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core/types';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CmacsStepComponent } from './step.component';
import * as i0 from "@angular/core";
export type NzDirectionType = 'horizontal' | 'vertical';
export type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export type nzProgressDotTemplate = TemplateRef<{
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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsWizardComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsWizardComponent, "cmacs-wizard", ["cmacsWizard"], { "current": { "alias": "current"; "required": false; }; "direction": { "alias": "direction"; "required": false; }; "labelPlacement": { "alias": "labelPlacement"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; "startIndex": { "alias": "startIndex"; "required": false; }; "status": { "alias": "status"; "required": false; }; "nzProgressDot": { "alias": "nzProgressDot"; "required": false; }; }, { "indexChange": "indexChange"; }, ["steps"], ["*"], false, never>;
}
//# sourceMappingURL=cmacs-wizard.component.d.ts.map