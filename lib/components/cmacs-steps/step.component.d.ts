import { ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CmacsStepComponent implements OnDestroy {
    private cdr;
    processDotTemplate?: TemplateRef<void>;
    cmacsTitle?: string | TemplateRef<void>;
    subtitle?: string | TemplateRef<void>;
    description?: string | TemplateRef<void>;
    disabled: boolean;
    secondary: boolean;
    get status(): string;
    set status(status: string);
    isCustomStatus: boolean;
    private _status;
    get cmacsIcon(): NgClassType | TemplateRef<void> | undefined;
    set cmacsIcon(value: NgClassType | TemplateRef<void> | undefined);
    oldAPIIcon: boolean;
    private _icon?;
    customProcessTemplate?: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    direction: string;
    index: number;
    last: boolean;
    outStatus: string;
    showProcessDot: boolean;
    clickable: boolean;
    click$: Subject<number>;
    get currentIndex(): number;
    set currentIndex(current: number);
    private _currentIndex;
    constructor(cdr: ChangeDetectorRef);
    onClick(): void;
    enable(): void;
    disable(): void;
    markForCheck(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsStepComponent, "cmacs-step", ["cmacsStep"], { "cmacsTitle": "cmacsTitle"; "subtitle": "subtitle"; "description": "description"; "disabled": "disabled"; "secondary": "secondary"; "status": "status"; "cmacsIcon": "cmacsIcon"; }, {}, never, never>;
}
//# sourceMappingURL=step.component.d.ts.map