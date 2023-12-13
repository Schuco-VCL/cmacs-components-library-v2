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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsStepComponent, "cmacs-step", ["cmacsStep"], { "cmacsTitle": { "alias": "cmacsTitle"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "description": { "alias": "description"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "secondary": { "alias": "secondary"; "required": false; }; "status": { "alias": "status"; "required": false; }; "cmacsIcon": { "alias": "cmacsIcon"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=step.component.d.ts.map