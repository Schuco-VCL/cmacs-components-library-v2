import { ElementRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LightboxButtonComponent implements OnChanges {
    private _elementRef;
    disable: boolean;
    hoverAnimation: 'leave' | 'enter';
    private _isIconButton;
    constructor(_elementRef: ElementRef);
    ngOnChanges(): void;
    private _onMouseEnter;
    private _onMouseLeave;
    private _getHostElement;
    private _hasHostAttributes;
    static ɵfac: i0.ɵɵFactoryDef<LightboxButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LightboxButtonComponent, "button[lightbox-button], button[lightbox-icon-button]", never, { "disable": "disable"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=lightbox-button.component.d.ts.map