import { Overlay } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { IndexableObject } from 'ng-zorro-antd/core/types';
import { CmacsDropdownMenuComponent, NzPlacementType } from './dropdown-menu.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as i0 from "@angular/core";
export declare class CmacsDropDownDirective implements AfterViewInit, OnDestroy, OnChanges, OnInit {
    elementRef: ElementRef;
    private deviceService;
    private overlay;
    private renderer;
    private viewContainerRef;
    private platform;
    private portal?;
    private overlayRef;
    private destroy$;
    private longPress;
    private positionStrategy;
    private inputVisible$;
    private cmacsTrigger$;
    private overlayClose$;
    dropdownMenu: CmacsDropdownMenuComponent | null;
    cmacsTrigger: 'click' | 'hover' | 'contextmenu';
    matchWidthElement: ElementRef | null;
    /**
     * @deprecated Not supported, use `hasBackdrop` instead.
     * @breaking-change 12.0.0
     */
    backdrop: boolean;
    hasBackdrop: boolean;
    clickHide: boolean;
    disabled: boolean;
    visible: boolean;
    overlayClassName: string;
    overlayStyle: IndexableObject;
    placement: NzPlacementType;
    readonly visibleChange: EventEmitter<boolean>;
    setDropdownMenuValue<T extends keyof CmacsDropdownMenuComponent>(key: T, value: CmacsDropdownMenuComponent[T]): void;
    constructor(elementRef: ElementRef, deviceService: DeviceDetectorService, overlay: Overlay, renderer: Renderer2, viewContainerRef: ViewContainerRef, platform: Platform);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsDropDownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsDropDownDirective, "[cmacs-dropdown]", ["cmacsDropdown"], { "dropdownMenu": "dropdownMenu"; "cmacsTrigger": "cmacsTrigger"; "matchWidthElement": "matchWidthElement"; "backdrop": "backdrop"; "hasBackdrop": "hasBackdrop"; "clickHide": "clickHide"; "disabled": "disabled"; "visible": "visible"; "overlayClassName": "overlayClassName"; "overlayStyle": "overlayStyle"; "placement": "placement"; }, { "visibleChange": "visibleChange"; }, never>;
}
//# sourceMappingURL=dropdown.directive.d.ts.map