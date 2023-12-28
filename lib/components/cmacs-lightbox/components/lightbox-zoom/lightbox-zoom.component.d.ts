import { EventEmitter, OnInit } from '@angular/core';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ZoomVisibilityAnimator } from '../../models/zoom/animations/zoom-visibility-animator';
import * as i0 from "@angular/core";
export declare class LightboxZoomComponent implements OnInit {
    private readonly _lightboxConfigurationService;
    zoomInEvent: EventEmitter<any>;
    zoomOutEvent: EventEmitter<any>;
    resetZoomEvent: EventEmitter<any>;
    feetToWidthEvent: EventEmitter<any>;
    disableZoomIn: boolean;
    disableZoomOut: boolean;
    disableResetZoom: boolean;
    disableFeetToWidth: boolean;
    zoomVisibilityAnimator: ZoomVisibilityAnimator;
    private _state;
    get config(): LightboxConfigurationService;
    constructor(_lightboxConfigurationService: LightboxConfigurationService);
    ngOnInit(): void;
    close(): void;
    open(): void;
    toggle(): void;
    onZoomIn(): void;
    onZoomOut(): void;
    onResetZoom(): void;
    onFeetToWidth(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxZoomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LightboxZoomComponent, "lightbox-zoom", never, { "disableZoomIn": { "alias": "disableZoomIn"; "required": false; }; "disableZoomOut": { "alias": "disableZoomOut"; "required": false; }; "disableResetZoom": { "alias": "disableResetZoom"; "required": false; }; "disableFeetToWidth": { "alias": "disableFeetToWidth"; "required": false; }; }, { "zoomInEvent": "zoomInEvent"; "zoomOutEvent": "zoomOutEvent"; "resetZoomEvent": "resetZoomEvent"; "feetToWidthEvent": "feetToWidthEvent"; }, never, never, false, never>;
}
//# sourceMappingURL=lightbox-zoom.component.d.ts.map