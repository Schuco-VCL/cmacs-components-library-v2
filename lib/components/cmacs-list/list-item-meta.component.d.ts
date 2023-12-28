import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { CmacsListItemMetaDescriptionComponent as DescriptionComponent, CmacsListItemMetaTitleComponent as TitleComponent } from './list-item-meta-cell';
import * as i0 from "@angular/core";
export declare class CmacsListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl?: TemplateRef<void>;
    set avatar(value: string | TemplateRef<void>);
    cmacsTitle?: string | TemplateRef<void>;
    description?: string | TemplateRef<void>;
    descriptionComponent?: DescriptionComponent;
    titleComponent?: TitleComponent;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsListItemMetaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsListItemMetaComponent, "cmacs-list-item-meta, [cmacs-list-item-meta]", ["cmacsListItemMeta"], { "avatar": { "alias": "avatar"; "required": false; }; "cmacsTitle": { "alias": "cmacsTitle"; "required": false; }; "description": { "alias": "description"; "required": false; }; }, {}, ["descriptionComponent", "titleComponent"], ["cmacs-list-item-meta-avatar", "cmacs-list-item-meta-title", "cmacs-list-item-meta-description"], false, never>;
}
//# sourceMappingURL=list-item-meta.component.d.ts.map