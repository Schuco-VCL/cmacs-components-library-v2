import { OnInit, EventEmitter, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsSectionComponent implements OnInit, OnChanges {
    extra: string | TemplateRef<void>;
    widgetSpan: string;
    title: string;
    titleIcon: string;
    showCollapse: boolean;
    extraData: any;
    collapsed: boolean;
    validate: boolean;
    onbeforecollapse: EventEmitter<any>;
    oncollapse: EventEmitter<any>;
    onbeforeexpand: EventEmitter<any>;
    onexpand: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    collapseSection(): void;
    ngOnChanges(changes: SimpleChanges): void;
    triggerCollapseEvents(before: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsSectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsSectionComponent, "cmacs-section", never, { "extra": "extra"; "widgetSpan": "widgetSpan"; "title": "title"; "titleIcon": "titleIcon"; "showCollapse": "showCollapse"; "extraData": "extraData"; "collapsed": "collapsed"; "validate": "validate"; }, { "onbeforecollapse": "onbeforecollapse"; "oncollapse": "oncollapse"; "onbeforeexpand": "onbeforeexpand"; "onexpand": "onexpand"; }, never, ["*"]>;
}
//# sourceMappingURL=cmacs-section.component.d.ts.map