import { Direction, Directionality } from '@angular/cdk/bidi';
import { ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';
import { ThemeType } from '@ant-design/icons-angular';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { InputObservable } from 'ng-zorro-antd/core/types';
import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare type NzFormLayoutType = 'horizontal' | 'vertical' | 'inline';
export declare const DefaultTooltipIcon: {
    readonly type: "question-circle";
    readonly theme: "outline";
};
export declare class CmacsFormDirective implements OnChanges, OnDestroy, InputObservable {
    nzConfigService: NzConfigService;
    private renderer;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    cmacsLayout: NzFormLayoutType;
    cmacsNoColon: boolean;
    cmacsAutoTips: Record<string, Record<string, string>>;
    cmacsDisableAutoTips: boolean;
    cmacsTooltipIcon: string | {
        type: string;
        theme: ThemeType;
    };
    dir: Direction;
    destroy$: Subject<unknown>;
    private inputChanges$;
    getInputObservable<K extends keyof this>(changeType: K): Observable<SimpleChange>;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsFormDirective, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsFormDirective, "[cmacs-form]", ["cmacsForm"], { "cmacsLayout": "cmacsLayout"; "cmacsNoColon": "cmacsNoColon"; "cmacsAutoTips": "cmacsAutoTips"; "cmacsDisableAutoTips": "cmacsDisableAutoTips"; "cmacsTooltipIcon": "cmacsTooltipIcon"; }, {}, never>;
}
//# sourceMappingURL=form.directive.d.ts.map