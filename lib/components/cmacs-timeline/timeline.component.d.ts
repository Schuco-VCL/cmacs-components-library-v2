import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { CmacsTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
import { NzTimelineMode } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsTimelineComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
    private cdr;
    private timelineService;
    private directionality;
    listOfItems: QueryList<CmacsTimelineItemComponent>;
    mode: NzTimelineMode;
    pending?: string | boolean | TemplateRef<void>;
    pendingDot?: string | TemplateRef<void>;
    reverse: boolean;
    isPendingBoolean: boolean;
    timelineItems: CmacsTimelineItemComponent[];
    dir: Direction;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, timelineService: TimelineService, directionality: Directionality);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateChildren;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTimelineComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTimelineComponent, "cmacs-timeline", ["cmacsTimeline"], { "mode": "mode"; "pending": "pending"; "pendingDot": "pendingDot"; "reverse": "reverse"; }, {}, ["listOfItems"], ["*"]>;
}
//# sourceMappingURL=timeline.component.d.ts.map