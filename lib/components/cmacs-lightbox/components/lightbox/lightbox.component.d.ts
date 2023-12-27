/// <reference types="youtube" />
import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Pagination } from '../../models/pagination.interface';
import { LightboxToolbarComponent } from '../lightbox-toolbar/lightbox-toolbar.component';
import { LightboxThumbnailsComponent } from '../lightbox-thumbnails/lightbox-thumbnails.component';
import { LightboxZoomComponent } from '../lightbox-zoom/lightbox-zoom.component';
import { Item } from '../../models/item';
import { LightboxConfigurationService } from '../../services/lightbox-configuration.service';
import { VideoSources } from '../../models/video';
import { LightboxSliceAnimator } from '../../models/lightbox/animations/lightbox-slice-animator';
import { BackgroundVisibilityAnimator } from '../../models/lightbox/animations/background-visibility-animator';
import { Observable } from 'rxjs';
import { VgAPI } from 'ngx-videogular';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as i0 from "@angular/core";
export declare class LightboxComponent implements OnInit, OnDestroy {
    private readonly _lightboxConfigurationService;
    private deviceSelector;
    pagination: Pagination;
    displayZoom: 'hidden' | 'visible';
    background: ElementRef;
    toolbar: LightboxToolbarComponent;
    thumbnails: LightboxThumbnailsComponent;
    lightboxZoom: LightboxZoomComponent;
    hasNext: boolean;
    hasPrevious: boolean;
    displayYoutube: boolean;
    items: {
        [container: string]: Item[];
    };
    activeItem: Item | undefined;
    lightboxSliceAnimator: LightboxSliceAnimator;
    backgroundVisibilityAnimator: BackgroundVisibilityAnimator;
    state: 'opening' | 'opened' | 'closing' | 'closed';
    disableZoomIn: boolean;
    disableZoomOut: boolean;
    disableResetZoom: boolean;
    disableFeetToWidth: boolean;
    private _itemList;
    private _itemsRef;
    private _vgapi;
    private _stateSubscription;
    private _stateBehaviorSubject;
    get $state(): Observable<'opening' | 'opened' | 'closing' | 'closed'>;
    private _ytPlayer;
    private _pointerEvents;
    get config(): LightboxConfigurationService;
    constructor(_lightboxConfigurationService: LightboxConfigurationService, deviceSelector: DeviceDetectorService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openItem(item: Item): void;
    getVideoSources(): VideoSources[];
    addItem(item: Item): void;
    thumbnailsToggle(): void;
    removeItem(item: Item): void;
    onToggle(): void;
    onClose(event: any): void;
    selectItem(item: Item): void;
    onNext(): void;
    onLast(): void;
    onFirst(): void;
    onPrevious(): void;
    zoomIn(): void;
    zoomOut(): void;
    resetZoom(): void;
    feetToWidth(): void;
    swipe(action: string): void;
    onReady(event: YT.PlayerEvent): void;
    onError(event: YT.OnErrorEvent): void;
    onPlayerReady(api: VgAPI): void;
    onChange(event: any): void;
    private _initItems;
    private _openControls;
    private _closeControls;
    private _getContainerDimensionsAfterOpen;
    private _updatePagination;
    private _checkYoutube;
    private _itemRef;
    private _itemIndex;
    private _onResize;
    private _checkZoom;
    static ɵfac: i0.ɵɵFactoryDeclaration<LightboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LightboxComponent, "lightbox", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=lightbox.component.d.ts.map