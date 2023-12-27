import { Direction, Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzExtendedMark, NzMarks, NzSliderHandler, NzSliderShowTooltip, NzSliderValue } from './typings';
import { NzSliderService } from './slider.service';
import { CmacsSliderHandleComponent } from './cmacs-slider-handle.component';
import * as i0 from "@angular/core";
export declare class CmacsSliderComponent implements ControlValueAccessor, OnInit, OnChanges, OnDestroy {
    private sliderService;
    private cdr;
    private platform;
    private directionality;
    slider: ElementRef<HTMLDivElement>;
    handlerComponents: QueryList<CmacsSliderHandleComponent>;
    disabled: boolean;
    dots: boolean;
    included: boolean;
    range: boolean;
    vertical: boolean;
    reverse: boolean;
    defaultValue?: NzSliderValue;
    marks: NzMarks | null;
    max: number;
    min: number;
    step: number;
    tooltipVisible: NzSliderShowTooltip;
    tooltipPlacement: string;
    tipFormatter?: null | ((value: number) => string);
    readonly onAfterChange: EventEmitter<NzSliderValue>;
    value: NzSliderValue | null;
    cacheSliderStart: number | null;
    cacheSliderLength: number | null;
    activeValueIndex: number | undefined;
    track: {
        offset: null | number;
        length: null | number;
    };
    handles: NzSliderHandler[];
    marksArray: NzExtendedMark[] | null;
    bounds: {
        lower: NzSliderValue | null;
        upper: NzSliderValue | null;
    };
    dir: Direction;
    private dragStart$?;
    private dragMove$?;
    private dragEnd$?;
    private dragStart_?;
    private dragMove_?;
    private dragEnd_?;
    private destroy$;
    constructor(sliderService: NzSliderService, cdr: ChangeDetectorRef, platform: Platform, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(val: NzSliderValue | null): void;
    onValueChange(_value: NzSliderValue): void;
    onTouched(): void;
    registerOnChange(fn: (value: NzSliderValue) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e: KeyboardEvent): void;
    private setValue;
    private getValue;
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    private getValueToOffset;
    /**
     * Find the closest value to be activated.
     */
    private setActiveValueIndex;
    private setActiveValue;
    /**
      * Update track and handles' position and length.
      */
    private updateTrackAndHandles;
    private onDragStart;
    private onDragMove;
    private getLogicalValue;
    private onDragEnd;
    /**
     * Create user interactions handles.
     */
    private bindDraggingHandlers;
    private subscribeDrag;
    private unsubscribeDrag;
    private toggleDragMoving;
    private toggleDragDisabled;
    private findClosestValue;
    private valueToOffset;
    private getSliderStartPosition;
    private getSliderLength;
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    private cacheSliderProperty;
    private formatValue;
    /**
     * Show one handle's tooltip and hide others'.
     */
    private showHandleTooltip;
    private hideAllHandleTooltip;
    private generateMarkItems;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsSliderComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsSliderComponent, "cmacs-slider", ["cmacsSlider"], { "disabled": { "alias": "disabled"; "required": false; }; "dots": { "alias": "dots"; "required": false; }; "included": { "alias": "included"; "required": false; }; "range": { "alias": "range"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; "defaultValue": { "alias": "defaultValue"; "required": false; }; "marks": { "alias": "marks"; "required": false; }; "max": { "alias": "max"; "required": false; }; "min": { "alias": "min"; "required": false; }; "step": { "alias": "step"; "required": false; }; "tooltipVisible": { "alias": "tooltipVisible"; "required": false; }; "tooltipPlacement": { "alias": "tooltipPlacement"; "required": false; }; "tipFormatter": { "alias": "tipFormatter"; "required": false; }; }, { "onAfterChange": "onAfterChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-slider.component.d.ts.map