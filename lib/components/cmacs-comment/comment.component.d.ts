import { ChangeDetectorRef, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CmacsCommentActionComponent as CommentAction } from './comment-cells';
import * as i0 from "@angular/core";
export declare class CmacsCommentComponent implements OnDestroy, OnInit {
    private cdr;
    private directionality;
    author?: string | TemplateRef<void>;
    datetime?: string | TemplateRef<void>;
    dir: Direction;
    private destroy$;
    actions: QueryList<CommentAction>;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsCommentComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsCommentComponent, "cmacs-comment", ["cmacsComment"], { "author": "author"; "datetime": "datetime"; }, {}, ["actions"], ["[cmacs-comment-avatar]", "cmacs-comment-content", "*"]>;
}
//# sourceMappingURL=comment.component.d.ts.map