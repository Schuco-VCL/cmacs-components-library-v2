import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzTabPositionMode } from 'ng-zorro-antd/tabs';
import { Subscription } from 'rxjs';
import { PtbTabLabelDirective } from './ptb-tab-label.directive';
import { PtbTabsInkBarDirective } from './ptb-tabs-ink-bar.directive';
import * as i0 from "@angular/core";
export type ScrollDirection = 'after' | 'before';
export declare class PtbTabsNavComponent implements AfterContentChecked, AfterContentInit, OnDestroy {
    elementRef: ElementRef;
    private ngZone;
    private renderer;
    private cdr;
    private dir;
    private _tabPositionMode;
    private _scrollDistance;
    private _selectedIndex;
    /** Cached text content of the header. */
    private currentTextContent;
    showPaginationControls: boolean;
    disableScrollAfter: boolean;
    disableScrollBefore: boolean;
    selectedIndexChanged: boolean;
    realignInkBar: Subscription | null;
    tabLabelCount: number;
    scrollDistanceChanged: boolean;
    listOfNzTabLabelDirective: QueryList<PtbTabLabelDirective>;
    nzTabsInkBarDirective: PtbTabsInkBarDirective;
    navContainerElement: ElementRef;
    navListElement: ElementRef;
    scrollListElement: ElementRef;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    nzTabBarExtraContent: TemplateRef<void>;
    nzAnimated: boolean;
    nzHideBar: boolean;
    nzShowPagination: boolean;
    nzType: string;
    set nzPositionMode(value: NzTabPositionMode);
    get nzPositionMode(): NzTabPositionMode;
    set selectedIndex(value: number);
    get selectedIndex(): number;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2, cdr: ChangeDetectorRef, dir: Directionality);
    onContentChanges(): void;
    scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateTabScrollPosition(): void;
    updatePagination(): void;
    checkPaginationEnabled(): void;
    scrollToLabel(labelIndex: number): void;
    checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    set scrollDistance(v: number);
    get scrollDistance(): number;
    get viewWidthHeightPix(): number;
    get tabListScrollWidthHeightPix(): number;
    get tabListScrollOffSetWidthHeight(): number;
    getLayoutDirection(): Direction;
    alignInkBarToSelectedTab(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PtbTabsNavComponent, [null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PtbTabsNavComponent, "ptb-tabs-nav", ["ptbTabsNav"], { "nzTabBarExtraContent": { "alias": "nzTabBarExtraContent"; "required": false; }; "nzAnimated": { "alias": "nzAnimated"; "required": false; }; "nzHideBar": { "alias": "nzHideBar"; "required": false; }; "nzShowPagination": { "alias": "nzShowPagination"; "required": false; }; "nzType": { "alias": "nzType"; "required": false; }; "nzPositionMode": { "alias": "nzPositionMode"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; }, { "nzOnNextClick": "nzOnNextClick"; "nzOnPrevClick": "nzOnPrevClick"; }, ["listOfNzTabLabelDirective"], ["*"], false, never>;
}
//# sourceMappingURL=ptb-tabs-nav.component.d.ts.map