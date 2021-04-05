import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';
import { NzTSType } from 'ng-zorro-antd/core/types';
import { CmacsFormDirective } from './form.directive';
import * as i0 from "@angular/core";
export interface NzFormTooltipIcon {
    type: NzTSType;
    theme: ThemeType;
}
export declare class CmacsFormLabelComponent implements OnDestroy {
    private cdr;
    private CmacsFormDirective;
    cmacsFor?: string;
    cmacsRequired: boolean;
    set cmacsNoColon(value: boolean);
    get cmacsNoColon(): boolean;
    private noColon;
    cmacsTooltipTitle?: NzTSType;
    set cmacsTooltipIcon(value: string | NzFormTooltipIcon);
    get tooltipIcon(): NzFormTooltipIcon;
    private _tooltipIcon;
    private destroy$;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, CmacsFormDirective: CmacsFormDirective);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsFormLabelComponent, [null, null, null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsFormLabelComponent, "cmacs-form-label", ["cmacsFormLabel"], { "cmacsFor": "cmacsFor"; "cmacsRequired": "cmacsRequired"; "cmacsNoColon": "cmacsNoColon"; "cmacsTooltipTitle": "cmacsTooltipTitle"; "cmacsTooltipIcon": "cmacsTooltipIcon"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=form-label.component.d.ts.map