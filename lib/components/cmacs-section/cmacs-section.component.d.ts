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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSectionComponent, "cmacs-section", never, { "extra": { "alias": "extra"; "required": false; }; "widgetSpan": { "alias": "widgetSpan"; "required": false; }; "title": { "alias": "title"; "required": false; }; "titleIcon": { "alias": "titleIcon"; "required": false; }; "showCollapse": { "alias": "showCollapse"; "required": false; }; "extraData": { "alias": "extraData"; "required": false; }; "collapsed": { "alias": "collapsed"; "required": false; }; "validate": { "alias": "validate"; "required": false; }; }, { "onbeforecollapse": "onbeforecollapse"; "oncollapse": "oncollapse"; "onbeforeexpand": "onbeforeexpand"; "onexpand": "onexpand"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-section.component.d.ts.map