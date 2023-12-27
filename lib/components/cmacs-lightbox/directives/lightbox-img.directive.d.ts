import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
import * as i0 from "@angular/core";
export declare class LightboxImgDirective extends ItemDirectiveBase implements OnInit, OnDestroy {
    private readonly _lightboxService;
    private readonly _elementRef;
    constructor(_lightboxService: LightboxService, _elementRef: ElementRef);
    ngOnInit(): void;
    handleTap($event: any): void;
    open(): void;
    get isLoaded(): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxImgDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<LightboxImgDirective, "img[lightbox-img]", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=lightbox-img.directive.d.ts.map