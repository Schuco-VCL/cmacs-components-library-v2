import { ElementRef, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CmacsDividerComponent {
    elementRef: ElementRef;
    text: string | TemplateRef<void>;
    type: 'horizontal' | 'vertical';
    orientation: 'left' | 'right' | '';
    dashed: boolean;
    plain: boolean;
    constructor(elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDividerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsDividerComponent, "cmacs-divider", ["cmacsDivider"], { "text": { "alias": "text"; "required": false; }; "type": { "alias": "type"; "required": false; }; "orientation": { "alias": "orientation"; "required": false; }; "dashed": { "alias": "dashed"; "required": false; }; "plain": { "alias": "plain"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=cmacs-divider.component.d.ts.map