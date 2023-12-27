import { AfterContentChecked, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, OnDestroy } from '@angular/core';
import 'moment/locale/en-ie';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzTabChangeEvent } from '../cmacs-tabs/interfaces';
import * as i0 from "@angular/core";
export type CmacsTimelineDatePickerMode = 'week' | 'quarter' | 'month' | 'week-range' | 'month-range';
export declare class CmacsTimelineDatepickerComponent implements AfterContentChecked, OnInit, OnChanges, OnDestroy {
    private renderer;
    private elementRef;
    private i18n;
    private cdr;
    private indexToSelect;
    private destroy$;
    private el;
    private _selectedIndex;
    private _selectedRangeIdxs;
    private _date;
    private _range;
    listOfNzTabComponent: any[];
    gutter: number;
    mode: CmacsTimelineDatePickerMode;
    restrictMode: boolean;
    ranged: boolean;
    weekLocale: {
        week: {
            dow: number;
            doy: number;
        };
    };
    locale: string;
    readonly onNextClick: EventEmitter<void>;
    readonly onPrevClick: EventEmitter<void>;
    readonly selectChange: EventEmitter<NzTabChangeEvent>;
    readonly selectedIndexChange: EventEmitter<number>;
    readonly dateChange: EventEmitter<Date>;
    readonly rangeChange: EventEmitter<Date[]>;
    modeChange: EventEmitter<any>;
    showPreviousYearWeek: boolean;
    previousYearWeek: any;
    modeOptions: {
        title: string;
        value: string;
        selected: boolean;
    }[];
    set selectedIndex(value: any);
    get selectedIndex(): any;
    set selectedRangeIdxs(value: number[]);
    get selectedRangeIdxs(): number[];
    set date(value: Date | null);
    set range(range: Date[]);
    get range(): Date[] | null;
    onChange(range: Date[]): void;
    get date(): Date | null;
    getWeek(result: Date): void;
    getWeekNumber(date: any): number;
    getWeeksInYearCustom(date: any): number;
    clickLabel(index: number, disabled: boolean): void;
    createChangeEvent(index: number): NzTabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    constructor(renderer: Renderer2, elementRef: ElementRef, i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateSelectedMode(): void;
    getValuesSlider(): any[];
    getDefaultMonths(): {
        title: string;
    }[];
    getWeeksInYear(date: Date): any[];
    formatWeekNumber(value: number): string;
    ngAfterContentChecked(): void;
    customSelect(index: number): void;
    getSelected(): {
        title: string;
        value: string;
        selected: boolean;
    }[];
    getMonth(result: Date): void;
    ngOnDestroy(): void;
    checkActiveTab(index: number): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsTimelineDatepickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsTimelineDatepickerComponent, "cmacs-timeline-datepicker", ["cmacsTimelineDatepicker"], { "gutter": { "alias": "gutter"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "restrictMode": { "alias": "restrictMode"; "required": false; }; "ranged": { "alias": "ranged"; "required": false; }; "weekLocale": { "alias": "weekLocale"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "selectedIndex": { "alias": "selectedIndex"; "required": false; }; "selectedRangeIdxs": { "alias": "selectedRangeIdxs"; "required": false; }; "date": { "alias": "date"; "required": false; }; "range": { "alias": "range"; "required": false; }; }, { "onNextClick": "onNextClick"; "onPrevClick": "onPrevClick"; "selectChange": "selectChange"; "selectedIndexChange": "selectedIndexChange"; "dateChange": "dateChange"; "rangeChange": "rangeChange"; "modeChange": "modeChange"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-timeline-datepicker.component.d.ts.map