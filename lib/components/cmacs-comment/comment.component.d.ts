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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCommentComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCommentComponent, "cmacs-comment", ["cmacsComment"], { "author": { "alias": "author"; "required": false; }; "datetime": { "alias": "datetime"; "required": false; }; }, {}, ["actions"], ["[cmacs-comment-avatar]", "cmacs-comment-content", "*"], false, never>;
}
//# sourceMappingURL=comment.component.d.ts.map