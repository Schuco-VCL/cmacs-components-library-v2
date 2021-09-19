import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
import * as i0 from "@angular/core";
export declare class LightboxImgDirective extends ItemDirectiveBase implements OnInit, OnDestroy {
    private readonly _lightboxService;
    private readonly _elementRef;
    constructor(_lightboxService: LightboxService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<LightboxImgDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LightboxImgDirective, "img[lightbox-img]", never, {}, {}, never>;
}
//# sourceMappingURL=lightbox-img.directive.d.ts.map