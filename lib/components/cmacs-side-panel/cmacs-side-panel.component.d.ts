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
    static ɵfac: i0.ɵɵFactoryDef<CmacsSidePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSidePanelComponent, "cmacs-side-panel", never, { "width": "width"; "float": "float"; "visible": "visible"; "collapsible": "collapsible"; }, { "visibleChange": "visibleChange"; }, never, ["*"]>;
}
//# sourceMappingURL=cmacs-side-panel.component.d.ts.map