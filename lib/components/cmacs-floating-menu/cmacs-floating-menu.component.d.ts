import { EventEmitter, OnChanges } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export type FloatingMenuType = 'top' | 'bottom' | 'left' | 'right';
export declare const FLOATING_MENU_LOCALIZATION: {
    'Dock To Left': string;
    'Dock To Right': string;
    'Dock To Top': string;
    'Dock To Bottom': string;
    'Minimize Toolbar': string;
};
export declare class CmacsFloatingMenuComponent implements OnChanges {
    _minimizeToolbar: boolean;
    _i18n: {
        'Dock To Left': string;
        'Dock To Right': string;
        'Dock To Top': string;
        'Dock To Bottom': string;
        'Minimize Toolbar': string;
    };
    cdkDrag: CdkDrag;
    position: FloatingMenuType;
    trigger: string;
    visible: boolean;
    showExtras: boolean;
    dragBoundary: string;
    positionChange: EventEmitter<FloatingMenuType>;
    oncoordinateschange: EventEmitter<any>;
    carrot: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    topBoundary: string;
    bottomBoundary: string;
    leftBoundary: string;
    rightBoundary: string;
    i18n: any;
    constructor();
    ngOnChanges(): void;
    minimizeToolbar(): void;
    expandToolbar(): void;
    dockToLeft(): void;
    dockToRight(): void;
    dockToTop(): void;
    onDragEnded($event: any): void;
    dockToBottom(): void;
    getPlacement(): "left" | "right" | "top" | "bottom";
    resetDragDrop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsFloatingMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsFloatingMenuComponent, "cmacs-floating-menu", ["cmacsFloatingMenu"], { "position": { "alias": "position"; "required": false; }; "trigger": { "alias": "trigger"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "showExtras": { "alias": "showExtras"; "required": false; }; "dragBoundary": { "alias": "dragBoundary"; "required": false; }; "carrot": { "alias": "carrot"; "required": false; }; "top": { "alias": "top"; "required": false; }; "bottom": { "alias": "bottom"; "required": false; }; "left": { "alias": "left"; "required": false; }; "right": { "alias": "right"; "required": false; }; "topBoundary": { "alias": "topBoundary"; "required": false; }; "bottomBoundary": { "alias": "bottomBoundary"; "required": false; }; "leftBoundary": { "alias": "leftBoundary"; "required": false; }; "rightBoundary": { "alias": "rightBoundary"; "required": false; }; "i18n": { "alias": "i18n"; "required": false; }; }, { "positionChange": "positionChange"; "oncoordinateschange": "oncoordinateschange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=cmacs-floating-menu.component.d.ts.map