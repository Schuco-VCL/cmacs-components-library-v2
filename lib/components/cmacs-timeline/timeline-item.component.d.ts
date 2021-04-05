import { ChangeDetectorRef, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { TimelineService } from './timeline.service';
import { NzTimelineItemColor, NzTimelinePosition } from './typings';
import * as i0 from "@angular/core";
export declare class CmacsTimelineItemComponent implements OnChanges {
    private cdr;
    private timelineService;
    template: TemplateRef<void>;
    cmacsPosition?: NzTimelinePosition;
    color: NzTimelineItemColor;
    dot?: string | TemplateRef<void>;
    isLast: boolean;
    borderColor: string | null;
    position?: NzTimelinePosition;
    constructor(cdr: ChangeDetectorRef, timelineService: TimelineService);
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    private updateCustomColor;
    static ɵfac: i0.ɵɵFactoryDef<CmacsTimelineItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsTimelineItemComponent, "cmacs-timeline-item, [cmacs-timeline-item]", ["cmacsTimelineItem"], { "cmacsPosition": "cmacsPosition"; "color": "color"; "dot": "dot"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=timeline-item.component.d.ts.map