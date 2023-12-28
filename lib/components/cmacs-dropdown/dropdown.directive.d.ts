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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsDropDownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CmacsDropDownDirective, "[cmacs-dropdown]", ["cmacsDropdown"], { "dropdownMenu": { "alias": "dropdownMenu"; "required": false; }; "cmacsTrigger": { "alias": "cmacsTrigger"; "required": false; }; "matchWidthElement": { "alias": "matchWidthElement"; "required": false; }; "backdrop": { "alias": "backdrop"; "required": false; }; "hasBackdrop": { "alias": "hasBackdrop"; "required": false; }; "clickHide": { "alias": "clickHide"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "overlayClassName": { "alias": "overlayClassName"; "required": false; }; "overlayStyle": { "alias": "overlayStyle"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; }, { "visibleChange": "visibleChange"; }, never, never, false, never>;
}
//# sourceMappingURL=dropdown.directive.d.ts.map