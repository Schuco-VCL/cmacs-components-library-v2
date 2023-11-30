import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsTimelineItemComponent } from './timeline-item.component';
import { TimelineService } from './timeline.service';
import * as i0 from "@angular/core";
import * as i1 from "./timeline.service";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/outlet";
import * as i5 from "ng-zorro-antd/core/transition-patch";
import * as i6 from "ng-zorro-antd/icon";
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
        var _a;
        this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.cdr.markForCheck();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
}
CmacsTimelineComponent.ɵfac = function CmacsTimelineComponent_Factory(t) { return new (t || CmacsTimelineComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.TimelineService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsTimelineComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTimelineComponent, selectors: [["cmacs-timeline"]], contentQueries: function CmacsTimelineComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsTimelineItemComponent, 0);
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
    } }, directives: [i3.NgIf, i3.NgForOf, i3.NgTemplateOutlet, i4.NzStringTemplateOutletDirective, i5.ɵNzTransitionPatchDirective, i6.NzIconDirective], styles: [".ant-timeline-item{font-family:Roboto-Regular;font-size:12px!important;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.67;letter-spacing:normal;color:#acb3bf}.ant-timeline-item-content{top:-5px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-timeline',
                providers: [TimelineService],
                exportAs: 'cmacsTimeline',
                styleUrls: ['./cmacs-timeline.component.css'],
                template: `
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
  `
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7SUFxQi9DLDJCQUFrRjs7OztJQUFwRCxzQ0FBb0M7Ozs7SUFFbEUsNkJBQWlEO0lBQy9DLHNHQUE4RDtJQUNoRSwwQkFBZTs7O0lBREEsZUFBa0M7SUFBbEMsbURBQWtDOzs7SUFFakQsMkJBQW1GOzs7O0lBQXBELHNDQUFvQzs7O0lBUzdELHdCQUFvRDs7O0lBRnRELDZCQUFtRDtJQUNqRCxZQUNBO0lBQUEsc0dBQW9EO0lBQ3RELDBCQUFlOzs7SUFGYixlQUNBO0lBREEsa0RBQ0E7SUFBSSxlQUFpQjtJQUFqQix5Q0FBaUI7OztJQUl2Qiw2QkFBZ0Q7SUFDOUMsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsOEVBQ0Y7OztJQVhKLDZCQUF3RTtJQUN0RSx5QkFBMEM7SUFDMUMsOEJBQThGO0lBQzVGLDRHQUdlO0lBQ2pCLGlCQUFNO0lBQ04sK0JBQXVDO0lBQ3JDLDRHQUVlO0lBQ2pCLGlCQUFNO0lBQ1IsaUJBQUs7OztJQVZjLGVB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RWxDLElBQUk7a0JBQVosS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O0FBbUVSLFNBQVMscUJBQXFCLENBQUMsWUFBMkI7SUFDeEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxLQUFLLFlBQVksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4SCxDQUFDO0FBRUQsU0FBUywrQkFBK0IsQ0FBQyxLQUFhLEVBQUUsSUFBb0I7SUFDMUUsT0FBTyxJQUFJLEtBQUssUUFBUTtRQUN0QixDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTTtZQUNqQixDQUFDLENBQUMsTUFBTTtZQUNSLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTztnQkFDbEIsQ0FBQyxDQUFDLE9BQU87Z0JBQ1QsQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUN6QyxDQUFDLENBQUMsTUFBTTtvQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2UsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lbGluZS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVsaW5lU2VydmljZSB9IGZyb20gJy4vdGltZWxpbmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE56VGltZWxpbmVNb2RlLCBOelRpbWVsaW5lUG9zaXRpb24gfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lJyxcclxuICBwcm92aWRlcnM6IFtUaW1lbGluZVNlcnZpY2VdLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8dWxcclxuICAgICAgY2xhc3M9XCJhbnQtdGltZWxpbmVcIlxyXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXJpZ2h0XT1cIm1vZGUgPT09ICdyaWdodCdcIlxyXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWFsdGVybmF0ZV09XCJtb2RlID09PSAnYWx0ZXJuYXRlJyB8fCBtb2RlID09PSAnY3VzdG9tJ1wiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtcGVuZGluZ109XCIhIXBlbmRpbmdcIlxyXG4gICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLXJldmVyc2VdPVwicmV2ZXJzZVwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgPlxyXG4gICAgICA8IS0tIHBlbmRpbmcgZG90IChyZXZlcnNlZCkgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXZlcnNlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwicGVuZGluZ1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwhLS0gdGltZWxpbmUgaXRlbXMgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGltZWxpbmVJdGVtc1wiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmV2ZXJzZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBlbmRpbmdUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8IS0tIHBlbmRpbmcgZG90IC0tPlxyXG4gICAgPC91bD5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcGVuZGluZ1RlbXBsYXRlPlxyXG4gICAgICA8bGkgKm5nSWY9XCJwZW5kaW5nXCIgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbSBhbnQtdGltZWxpbmUtaXRlbS1wZW5kaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZCBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbSBhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJwZW5kaW5nRG90XCI+XHJcbiAgICAgICAgICAgIHt7IHBlbmRpbmdEb3QgfX1cclxuICAgICAgICAgICAgPGkgKm5nSWY9XCIhcGVuZGluZ0RvdFwiIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiPjwvaT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwicGVuZGluZ1wiPlxyXG4gICAgICAgICAgICB7eyBpc1BlbmRpbmdCb29sZWFuID8gJycgOiBwZW5kaW5nIH19XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8IS0tIEdyYXNwIGl0ZW1zIC0tPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50KSBsaXN0T2ZJdGVtcyE6IFF1ZXJ5TGlzdDxDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6IE56VGltZWxpbmVNb2RlID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpIHBlbmRpbmc/OiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgcGVuZGluZ0RvdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgaXNQZW5kaW5nQm9vbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRpbWVsaW5lSXRlbXM6IENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50W10gPSBbXTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbW9kZSwgcmV2ZXJzZSwgcGVuZGluZyB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoc2ltcGxlQ2hhbmdlQWN0aXZhdGVkKG1vZGUpIHx8IHNpbXBsZUNoYW5nZUFjdGl2YXRlZChyZXZlcnNlKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gcGVuZGluZy5jdXJyZW50VmFsdWUgPT09IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZWxpbmVTZXJ2aWNlLmNoZWNrJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuXHJcbiAgICB0aGlzLmxpc3RPZkl0ZW1zLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJdGVtcyAmJiB0aGlzLmxpc3RPZkl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxpc3RPZkl0ZW1zLmxlbmd0aDtcclxuXHJcbiAgICAgIHRoaXMubGlzdE9mSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpdGVtLmlzTGFzdCA9ICF0aGlzLnJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xyXG4gICAgICAgIGl0ZW0ucG9zaXRpb24gPSBnZXRJbmZlcnJlZFRpbWVsaW5lSXRlbVBvc2l0aW9uKGluZGV4LCB0aGlzLm1vZGUpO1xyXG4gICAgICAgIGl0ZW0uZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy50aW1lbGluZUl0ZW1zID0gdGhpcy5yZXZlcnNlID8gdGhpcy5saXN0T2ZJdGVtcy50b0FycmF5KCkucmV2ZXJzZSgpIDogdGhpcy5saXN0T2ZJdGVtcy50b0FycmF5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpbXBsZUNoYW5nZUFjdGl2YXRlZChzaW1wbGVDaGFuZ2U/OiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICByZXR1cm4gISEoc2ltcGxlQ2hhbmdlICYmIChzaW1wbGVDaGFuZ2UucHJldmlvdXNWYWx1ZSAhPT0gc2ltcGxlQ2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCBzaW1wbGVDaGFuZ2UuaXNGaXJzdENoYW5nZSgpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEluZmVycmVkVGltZWxpbmVJdGVtUG9zaXRpb24oaW5kZXg6IG51bWJlciwgbW9kZTogTnpUaW1lbGluZU1vZGUpOiBOelRpbWVsaW5lUG9zaXRpb24gfCB1bmRlZmluZWQge1xyXG4gIHJldHVybiBtb2RlID09PSAnY3VzdG9tJ1xyXG4gICAgPyB1bmRlZmluZWRcclxuICAgIDogbW9kZSA9PT0gJ2xlZnQnXHJcbiAgICA/ICdsZWZ0J1xyXG4gICAgOiBtb2RlID09PSAncmlnaHQnXHJcbiAgICA/ICdyaWdodCdcclxuICAgIDogbW9kZSA9PT0gJ2FsdGVybmF0ZScgJiYgaW5kZXggJSAyID09PSAwXHJcbiAgICA/ICdsZWZ0J1xyXG4gICAgOiAncmlnaHQnO1xyXG59XHJcbiJdfQ==