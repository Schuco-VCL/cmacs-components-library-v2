import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
import * as i0 from "@angular/core";
import * as i1 from "./timeline.service";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
function CmacsTimelineComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 4);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsTimelineComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function CmacsTimelineComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsTimelineComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r5.template);
} }
function CmacsTimelineComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 4);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ngTemplateOutlet", _r3);
} }
function CmacsTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 12);
} }
function CmacsTimelineComponent_ng_template_4_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CmacsTimelineComponent_ng_template_4_li_0_ng_container_3_i_2_Template, 1, 0, "i", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.pendingDot, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.pendingDot);
} }
function CmacsTimelineComponent_ng_template_4_li_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.isPendingBoolean ? "" : ctx_r9.pending, " ");
} }
function CmacsTimelineComponent_ng_template_4_li_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵelement(1, "div", 7);
    i0.ɵɵelementStart(2, "div", 8);
    i0.ɵɵtemplate(3, CmacsTimelineComponent_ng_template_4_li_0_ng_container_3_Template, 3, 2, "ng-container", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 10);
    i0.ɵɵtemplate(5, CmacsTimelineComponent_ng_template_4_li_0_ng_container_5_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.pendingDot);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.pending);
} }
function CmacsTimelineComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsTimelineComponent_ng_template_4_li_0_Template, 6, 2, "li", 5);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.pending);
} }
const _c0 = ["*"];
export class CmacsTimelineComponent {
    constructor(cdr, timelineService, directionality) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.directionality = directionality;
        this.mode = 'left';
        this.reverse = false;
        this.isPendingBoolean = false;
        this.timelineItems = [];
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { mode, reverse, pending } = changes;
        if (simpleChangeActivated(mode) || simpleChangeActivated(reverse)) {
            this.updateChildren();
        }
        if (pending) {
            this.isPendingBoolean = pending.currentValue === true;
        }
    }
    ngOnInit() {
        this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.updateChildren();
        this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateChildren();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateChildren() {
        if (this.listOfItems && this.listOfItems.length) {
            const length = this.listOfItems.length;
            this.listOfItems.forEach((item, index) => {
                item.isLast = !this.reverse ? index === length - 1 : index === 0;
                item.position = getInferredTimelineItemPosition(index, this.mode);
                item.detectChanges();
            });
            this.timelineItems = this.reverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
        }
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function CmacsTimelineComponent_Factory(t) { return new (t || CmacsTimelineComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.TimelineService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTimelineComponent, selectors: [["cmacs-timeline"]], contentQueries: function CmacsTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsTimelineItemComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfItems = _t);
        } }, inputs: { mode: "mode", pending: "pending", pendingDot: "pendingDot", reverse: "reverse" }, exportAs: ["cmacsTimeline"], features: [i0.ɵɵProvidersFeature([TimelineService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 13, consts: [[1, "ant-timeline"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pendingTemplate", ""], [3, "ngTemplateOutlet"], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function CmacsTimelineComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, CmacsTimelineComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, CmacsTimelineComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
            i0.ɵɵtemplate(3, CmacsTimelineComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CmacsTimelineComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵprojection(6);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-timeline-right", ctx.mode === "right")("ant-timeline-alternate", ctx.mode === "alternate" || ctx.mode === "custom")("ant-timeline-pending", !!ctx.pending)("ant-timeline-reverse", ctx.reverse)("ant-timeline-rtl", ctx.dir === "rtl");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.reverse);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.timelineItems);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.reverse);
        } }, dependencies: [i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective], styles: [".ant-timeline-item{font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#acb3bf}.ant-timeline-item-content{top:-5px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, selector: 'cmacs-timeline', providers: [TimelineService], exportAs: 'cmacsTimeline', template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-right]="mode === 'right'"
      [class.ant-timeline-alternate]="mode === 'alternate' || mode === 'custom'"
      [class.ant-timeline-pending]="!!pending"
      [class.ant-timeline-reverse]="reverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      <ng-container *ngIf="reverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- timeline items -->
      <ng-container *ngFor="let item of timelineItems">
        <ng-template [ngTemplateOutlet]="item.template"></ng-template>
      </ng-container>
      <ng-container *ngIf="!reverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      <li *ngIf="pending" class="ant-timeline-item ant-timeline-item-pending">
        <div class="ant-timeline-item-tail"></div>
        <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
          <ng-container *nzStringTemplateOutlet="pendingDot">
            {{ pendingDot }}
            <i *ngIf="!pendingDot" nz-icon nzType="loading"></i>
          </ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-container *nzStringTemplateOutlet="pending">
            {{ isPendingBoolean ? '' : pending }}
          </ng-container>
        </div>
      </li>
    </ng-template>
    <!-- Grasp items -->
    <ng-content></ng-content>
  `, styles: [".ant-timeline-item{font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#acb3bf}.ant-timeline-item-content{top:-5px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TimelineService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfItems: [{
            type: ContentChildren,
            args: [CmacsTimelineItemComponent]
        }], mode: [{
            type: Input
        }], pending: [{
            type: Input
        }], pendingDot: [{
            type: Input
        }], reverse: [{
            type: Input
        }] }); })();
function simpleChangeActivated(simpleChange) {
    return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
    return mode === 'custom'
        ? undefined
        : mode === 'left'
            ? 'left'
            : mode === 'right'
                ? 'right'
                : mode === 'alternate' && index % 2 === 0
                    ? 'left'
                    : 'right';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUFxQi9DLDJCQUFrRjs7OztJQUFwRCxzQ0FBb0M7Ozs7SUFFbEUsNkJBQWlEO0lBQy9DLHNHQUE4RDtJQUNoRSwwQkFBZTs7O0lBREEsZUFBa0M7SUFBbEMsbURBQWtDOzs7SUFFakQsMkJBQW1GOzs7O0lBQXBELHNDQUFvQzs7O0lBUzdELHdCQUFvRDs7O0lBRnRELDZCQUFtRDtJQUNqRCxZQUNBO0lBQUEsc0dBQW9EO0lBQ3RELDBCQUFlOzs7SUFGYixlQUNBO0lBREEsa0RBQ0E7SUFBSSxlQUFpQjtJQUFqQix5Q0FBaUI7OztJQUl2Qiw2QkFBZ0Q7SUFDOUMsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsOEVBQ0Y7OztJQVhKLDZCQUF3RTtJQUN0RSx5QkFBMEM7SUFDMUMsOEJBQThGO0lBQzVGLDRHQUdlO0lBQ2pCLGlCQUFNO0lBQ04sK0JBQXVDO0lBQ3JDLDRHQUVlO0lBQ2pCLGlCQUFNLEVBQUE7OztJQVRXLGVBQWtDO0lB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Q0FBQyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsS0FBSyxZQUFZLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUVELFNBQVMsK0JBQStCLENBQUMsS0FBYSxFQUFFLElBQW9CO0lBQzFFLE9BQU8sSUFBSSxLQUFLLFFBQVE7UUFDdEIsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU07WUFDakIsQ0FBQyxDQUFDLE1BQU07WUFDUixDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU87Z0JBQ2xCLENBQUMsQ0FBQyxPQUFPO2dCQUNULENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDekMsQ0FBQyxDQUFDLE1BQU07b0JBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lbGluZVNlcnZpY2UgfSBmcm9tICcuL3RpbWVsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelRpbWVsaW5lTW9kZSwgTnpUaW1lbGluZVBvc2l0aW9uIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZScsXHJcbiAgcHJvdmlkZXJzOiBbVGltZWxpbmVTZXJ2aWNlXSxcclxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmUnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHVsXHJcbiAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lXCJcclxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1yaWdodF09XCJtb2RlID09PSAncmlnaHQnXCJcclxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1hbHRlcm5hdGVdPVwibW9kZSA9PT0gJ2FsdGVybmF0ZScgfHwgbW9kZSA9PT0gJ2N1c3RvbSdcIlxyXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXBlbmRpbmddPVwiISFwZW5kaW5nXCJcclxuICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1yZXZlcnNlXT1cInJldmVyc2VcIlxyXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgID5cclxuICAgICAgPCEtLSBwZW5kaW5nIGRvdCAocmV2ZXJzZWQpIC0tPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmV2ZXJzZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBlbmRpbmdUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8IS0tIHRpbWVsaW5lIGl0ZW1zIC0tPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRpbWVsaW5lSXRlbXNcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbS50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJldmVyc2VcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJwZW5kaW5nVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPCEtLSBwZW5kaW5nIGRvdCAtLT5cclxuICAgIDwvdWw+XHJcbiAgICA8bmctdGVtcGxhdGUgI3BlbmRpbmdUZW1wbGF0ZT5cclxuICAgICAgPGxpICpuZ0lmPVwicGVuZGluZ1wiIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0gYW50LXRpbWVsaW5lLWl0ZW0tcGVuZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS10YWlsXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWhlYWQgYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1jdXN0b20gYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwicGVuZGluZ0RvdFwiPlxyXG4gICAgICAgICAgICB7eyBwZW5kaW5nRG90IH19XHJcbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIXBlbmRpbmdEb3RcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIj48L2k+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInBlbmRpbmdcIj5cclxuICAgICAgICAgICAge3sgaXNQZW5kaW5nQm9vbGVhbiA/ICcnIDogcGVuZGluZyB9fVxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPCEtLSBHcmFzcCBpdGVtcyAtLT5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudCkgbGlzdE9mSXRlbXMhOiBRdWVyeUxpc3Q8Q21hY3NUaW1lbGluZUl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBtb2RlOiBOelRpbWVsaW5lTW9kZSA9ICdsZWZ0JztcclxuICBASW5wdXQoKSBwZW5kaW5nPzogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHBlbmRpbmdEb3Q/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSByZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGlzUGVuZGluZ0Jvb2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICB0aW1lbGluZUl0ZW1zOiBDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudFtdID0gW107XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB0aW1lbGluZVNlcnZpY2U6IFRpbWVsaW5lU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG1vZGUsIHJldmVyc2UsIHBlbmRpbmcgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKHNpbXBsZUNoYW5nZUFjdGl2YXRlZChtb2RlKSB8fCBzaW1wbGVDaGFuZ2VBY3RpdmF0ZWQocmV2ZXJzZSkpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgIHRoaXMuaXNQZW5kaW5nQm9vbGVhbiA9IHBlbmRpbmcuY3VycmVudFZhbHVlID09PSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5jaGVjayQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcblxyXG4gICAgdGhpcy5saXN0T2ZJdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlzdE9mSXRlbXMgJiYgdGhpcy5saXN0T2ZJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5saXN0T2ZJdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgICB0aGlzLmxpc3RPZkl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5yZXZlcnNlID8gaW5kZXggPT09IGxlbmd0aCAtIDEgOiBpbmRleCA9PT0gMDtcclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gZ2V0SW5mZXJyZWRUaW1lbGluZUl0ZW1Qb3NpdGlvbihpbmRleCwgdGhpcy5tb2RlKTtcclxuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMudGltZWxpbmVJdGVtcyA9IHRoaXMucmV2ZXJzZSA/IHRoaXMubGlzdE9mSXRlbXMudG9BcnJheSgpLnJldmVyc2UoKSA6IHRoaXMubGlzdE9mSXRlbXMudG9BcnJheSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaW1wbGVDaGFuZ2VBY3RpdmF0ZWQoc2ltcGxlQ2hhbmdlPzogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICEhKHNpbXBsZUNoYW5nZSAmJiAoc2ltcGxlQ2hhbmdlLnByZXZpb3VzVmFsdWUgIT09IHNpbXBsZUNoYW5nZS5jdXJyZW50VmFsdWUgfHwgc2ltcGxlQ2hhbmdlLmlzRmlyc3RDaGFuZ2UoKSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbmZlcnJlZFRpbWVsaW5lSXRlbVBvc2l0aW9uKGluZGV4OiBudW1iZXIsIG1vZGU6IE56VGltZWxpbmVNb2RlKTogTnpUaW1lbGluZVBvc2l0aW9uIHwgdW5kZWZpbmVkIHtcclxuICByZXR1cm4gbW9kZSA9PT0gJ2N1c3RvbSdcclxuICAgID8gdW5kZWZpbmVkXHJcbiAgICA6IG1vZGUgPT09ICdsZWZ0J1xyXG4gICAgPyAnbGVmdCdcclxuICAgIDogbW9kZSA9PT0gJ3JpZ2h0J1xyXG4gICAgPyAncmlnaHQnXHJcbiAgICA6IG1vZGUgPT09ICdhbHRlcm5hdGUnICYmIGluZGV4ICUgMiA9PT0gMFxyXG4gICAgPyAnbGVmdCdcclxuICAgIDogJ3JpZ2h0JztcclxufVxyXG4iXX0=