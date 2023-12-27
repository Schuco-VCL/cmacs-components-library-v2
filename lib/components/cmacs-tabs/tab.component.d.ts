import { EventEmitter, InjectionToken, OnChanges, OnDestroy, SimpleChanges, TemplateRef } from '@angular/core';
import { TabTemplateContext } from './interfaces';
import { Subject } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { CmacsTabLinkDirective, CmacsTabLinkTemplateDirective } from './tab-link.directive';
import * as i0 from "@angular/core";
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
export declare const NZ_TAB_SET: InjectionToken<any>;
export declare class CmacsTabComponent implements OnChanges, OnDestroy {
    closestTabSet: NzSafeAny;
    cmacsTitle: string | TemplateRef<TabTemplateContext>;
    cmacsType: string;
    closable: boolean;
    closeIcon: string | TemplateRef<NzSafeAny>;
    disabled: boolean;
    forceRender: boolean;
    readonly select: EventEmitter<void>;
    readonly deselect: EventEmitter<void>;
    readonly cmacsClick: EventEmitter<void>;
    readonly cmacsContextmenu: EventEmitter<MouseEvent>;
    nzTabLinkTemplateDirective: CmacsTabLinkTemplateDirective;
    template: TemplateRef<void> | null;
    linkDirective: CmacsTabLinkDirective;
    contentTemplate: TemplateRef<NzSafeAny>;
    isActive: boolean;
    position: number | null;
    origin: number | null;
    readonly stateChanges: Subject<void>;
    get content(): TemplateRef<NzSafeAny>;
    get label(): string | TemplateRef<NzSafeAny>;
    constructor(closestTabSet: NzSafeAny);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTabComponent, "cmacs-tab", ["cmacsTab"], { "cmacsTitle": { "alias": "cmacsTitle"; "required": false; }; "cmacsType": { "alias": "cmacsType"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "closeIcon": { "alias": "closeIcon"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "forceRender": { "alias": "forceRender"; "required": false; }; }, { "select": "select"; "deselect": "deselect"; "cmacsClick": "cmacsClick"; "cmacsContextmenu": "cmacsContextmenu"; }, ["nzTabLinkTemplateDirective", "template", "linkDirective"], ["[cmacs-tab-link]", "*"], false, never>;
}
//# sourceMappingURL=tab.component.d.ts.map