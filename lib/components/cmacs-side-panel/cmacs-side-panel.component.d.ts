import { OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsSidePanelComponent implements OnInit, OnChanges {
    width: number | string;
    float: string;
    visible: boolean;
    collapsible: boolean;
    visibleChange: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSidePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSidePanelComponent, "cmacs-side-panel", never, { "width": { "alias": "width"; "required": false; }; "float": { "alias": "float"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "collapsible": { "alias": "collapsible"; "required": false; }; }, { "visibleChange": "visibleChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-side-panel.component.d.ts.map