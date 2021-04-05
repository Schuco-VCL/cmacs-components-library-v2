import { ElementRef, EventEmitter, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NzTabScrollEvent, NzTabScrollEventHandlerFun, NzTabScrollListOffset, NzTabScrollListOffsetEvent } from './interfaces';
import * as i0 from "@angular/core";
export declare class CmacsTabScrollListDirective implements OnInit, OnDestroy {
    private ngZone;
    private elementRef;
    lastWheelDirection: 'x' | 'y' | null;
    lastWheelTimestamp: number;
    lastTimestamp: number;
    lastTimeDiff: number;
    lastMixedWheel: number;
    lastWheelPrevent: boolean;
    touchPosition: NzTabScrollListOffset | null;
    lastOffset: NzTabScrollListOffset | null;
    motion: number;
    unsubscribe: () => void;
    readonly offsetChange: EventEmitter<NzTabScrollListOffsetEvent>;
    readonly tabScroll: EventEmitter<NzTabScrollEvent>;
    constructor(ngZone: NgZone, elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    subscribeWrap<T extends NzTabScrollEvent['event']>(type: NzTabScrollEvent['type'], observable: Observable<T>, handler: NzTabScrollEventHandlerFun<T>): Subscription;
    onTouchEnd: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchStart: (e: TouchEvent) => void;
    onWheel: (e: WheelEvent) => void;
    onOffset(x: number, y: number, event: Event): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTabScrollListDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CmacsTabScrollListDirective, "[cmacsTabScrollList]", never, {}, { "offsetChange": "offsetChange"; "tabScroll": "tabScroll"; }, never>;
}
//# sourceMappingURL=tab-scroll-list.directive.d.ts.map