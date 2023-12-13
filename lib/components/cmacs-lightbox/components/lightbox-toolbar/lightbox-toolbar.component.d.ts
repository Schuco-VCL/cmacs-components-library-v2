import { EventEmitter, OnInit } from '@angular/core';
import { Pagination } from '../../models/pagination.interface';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { ToolbarVisibilityAnimator } from '../../models/toolbar/animations/toolbar-visibility-animator';
import * as i0 from "@angular/core";
export declare enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37
}
export declare class LightboxToolbarComponent implements OnInit {
    private readonly _lightboxConfigurationService;
    nextEvent: EventEmitter<any>;
    previousEvent: EventEmitter<any>;
    firstEvent: EventEmitter<any>;
    lastEvent: EventEmitter<any>;
    closeEvent: EventEmitter<any>;
    thumbnailsToggleEvent: EventEmitter<any>;
    title: string;
    pagination: Pagination;
    toolbarVisibilityAnimator: ToolbarVisibilityAnimator;
    private _state;
    get config(): LightboxConfigurationService;
    constructor(_lightboxConfigurationService: LightboxConfigurationService);
    onKeyboardEvent($event: KeyboardEvent): void;
    ngOnInit(): void;
    onNext(): void;
    onPrevious(): void;
    onFirst(): void;
    onLast(): void;
    onClose(): void;
    onThumbnailsToggle(): void;
    open(): void;
    close(): void;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LightboxToolbarComponent, "lightbox-toolbar", never, { "title": { "alias": "title"; "required": false; }; "pagination": { "alias": "pagination"; "required": false; }; }, { "nextEvent": "nextEvent"; "previousEvent": "previousEvent"; "firstEvent": "firstEvent"; "lastEvent": "lastEvent"; "closeEvent": "closeEvent"; "thumbnailsToggleEvent": "thumbnailsToggleEvent"; }, never, never, false, never>;
}
//# sourceMappingURL=lightbox-toolbar.component.d.ts.map