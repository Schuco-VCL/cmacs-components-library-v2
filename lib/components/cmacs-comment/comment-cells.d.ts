import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsCommentAvatarDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCommentAvatarDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsCommentAvatarDirective, "div[cmacs-comment-avatar], cmacs-comment-avatar, [cmacs-comment-avatar]", ["cmacsCommentAvatar"], {}, {}, never, never, false, never>;
}
export declare class CmacsCommentContentDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCommentContentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsCommentContentDirective, "cmacs-comment-content, [cmacs-comment-content]", ["cmacsCommentContent"], {}, {}, never, never, false, never>;
}
export declare class CmacsCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy, AfterViewInit {
    nzCommentActionHost?: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCommentActionHostDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsCommentActionHostDirective, "[cmacsCommentActionHost]", ["cmacsCommentActionHost"], { "nzCommentActionHost": { "alias": "nzCommentActionHost"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class CmacsCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    get content(): TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsCommentActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsCommentActionComponent, "cmacs-comment-action", ["cmacsCommentAction"], {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=comment-cells.d.ts.map