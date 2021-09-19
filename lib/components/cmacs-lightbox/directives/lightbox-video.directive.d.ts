import { OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ItemDirectiveBase } from '../models/item-directive-base';
import { LightboxService } from '../services/lightbox.service';
import * as i0 from "@angular/core";
export declare class LightboxVideoDirective extends ItemDirectiveBase implements OnInit, OnDestroy {
    private readonly _lightboxService;
    private readonly _elementRef;
    youtubeId: string;
    constructor(_lightboxService: LightboxService, _elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<LightboxVideoDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<LightboxVideoDirective, "img[lightbox-video]", never, { "youtubeId": "youtube-id"; }, {}, never>;
}
//# sourceMappingURL=lightbox-video.directive.d.ts.map