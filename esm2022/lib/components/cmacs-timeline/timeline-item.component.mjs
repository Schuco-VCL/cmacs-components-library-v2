import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { TimelineTimeDefaultColors } from './typings';
import * as i0 from "@angular/core";
import * as i1 from "./timeline.service";
import * as i2 from "ng-zorro-antd/core/outlet";
const _c0 = ["template"];
function CmacsTimelineItemComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.dot);
} }
function CmacsTimelineItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 1);
    i0.ɵɵelement(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵtemplate(3, CmacsTimelineItemComponent_ng_template_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵprojection(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-timeline-item-right", (ctx_r1.cmacsPosition || ctx_r1.position) === "right")("ant-timeline-item-left", (ctx_r1.cmacsPosition || ctx_r1.position) === "left")("ant-timeline-item-last", ctx_r1.isLast);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("border-color", ctx_r1.borderColor);
    i0.ɵɵclassProp("ant-timeline-item-head-red", ctx_r1.color === "red")("ant-timeline-item-head-blue", ctx_r1.color === "blue")("ant-timeline-item-head-green", ctx_r1.color === "green")("ant-timeline-item-head-gray", ctx_r1.color === "gray")("ant-timeline-item-head-custom", !!ctx_r1.dot);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.dot);
} }
const _c1 = ["*"];
function isDefaultColor(color) {
    return TimelineTimeDefaultColors.findIndex(i => i === color) !== -1;
}
export class CmacsTimelineItemComponent {
    constructor(cdr, timelineService) {
        this.cdr = cdr;
        this.timelineService = timelineService;
        this.color = 'gray';
        this.isLast = false;
        this.borderColor = null;
    }
    ngOnChanges(changes) {
        this.timelineService.markForCheck();
        if (changes.color) {
            this.updateCustomColor();
        }
    }
    detectChanges() {
        this.cdr.detectChanges();
    }
    updateCustomColor() {
        this.borderColor = isDefaultColor(this.color) ? null : this.color;
    }
    static { this.ɵfac = function CmacsTimelineItemComponent_Factory(t) { return new (t || CmacsTimelineItemComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.TimelineService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTimelineItemComponent, selectors: [["cmacs-timeline-item"], ["", "cmacs-timeline-item", ""]], viewQuery: function CmacsTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, inputs: { cmacsPosition: "cmacsPosition", color: "color", dot: "dot" }, exportAs: ["cmacsTimelineItem"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function CmacsTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsTimelineItemComponent_ng_template_0_Template, 6, 19, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [i2.NzStringTemplateOutletDirective], styles: [".ant-timeline-item-head{width:8px;height:8px;border-width:5px}.ant-timeline-item-head-gray{color:#3b3f46;border-color:#dee0e5!important}.ant-timeline-item-tail{border-left-style:dotted}.ant-timeline-item-head-custom{padding:0;width:16px;height:16px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineItemComponent, [{
        type: Component,
        args: [{ changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, selector: 'cmacs-timeline-item, [cmacs-timeline-item]', exportAs: 'cmacsTimelineItem', template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(cmacsPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(cmacsPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="color === 'red'"
          [class.ant-timeline-item-head-blue]="color === 'blue'"
          [class.ant-timeline-item-head-green]="color === 'green'"
          [class.ant-timeline-item-head-gray]="color === 'gray'"
          [class.ant-timeline-item-head-custom]="!!dot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="dot">{{ dot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `, styles: [".ant-timeline-item-head{width:8px;height:8px;border-width:5px}.ant-timeline-item-head-gray{color:#3b3f46;border-color:#dee0e5!important}.ant-timeline-item-tail{border-left-style:dotted}.ant-timeline-item-head-custom{padding:0;width:16px;height:16px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TimelineService }]; }, { template: [{
            type: ViewChild,
            args: ['template', { static: false }]
        }], cmacsPosition: [{
            type: Input
        }], color: [{
            type: Input
        }], dot: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUvdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0lBK0JyRiw2QkFBNEM7SUFBQSxZQUFTO0lBQUEsMEJBQWU7OztJQUF4QixlQUFTO0lBQVQsZ0NBQVM7OztJQWhCekQsNkJBS0M7SUFDQyx5QkFBMEM7SUFDMUMsOEJBUUM7SUFDQywyR0FBb0U7SUFDdEUsaUJBQU07SUFDTiw4QkFBdUM7SUFDckMsa0JBQXlCO0lBQzNCLGlCQUFNLEVBQUE7OztJQWxCTixnR0FBeUUsZ0ZBQUEseUNBQUE7SUFZdkUsZUFBa0M7SUFBbEMsa0RBQWtDO0lBTGxDLG9FQUFvRCx3REFBQSwwREFBQSx3REFBQSwrQ0FBQTtJQU9yQyxlQUEyQjtJQUEzQixtREFBMkI7OztBQTdCcEQsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBb0NELE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFBb0IsR0FBc0IsRUFBVSxlQUFnQztRQUFoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAzRSxVQUFLLEdBQXdCLE1BQU0sQ0FBQztRQUc3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBR3FELENBQUM7SUFFeEYsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQzsyRkExQlUsMEJBQTBCO29FQUExQiwwQkFBMEI7Ozs7Ozs7WUExQm5DLDZIQXVCYzs7O3VGQUdMLDBCQUEwQjtjQWxDdEMsU0FBUztrQ0FDUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLHVCQUNoQixLQUFLLFlBQ2hCLDRDQUE0QyxZQUM1QyxtQkFBbUIsWUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QlQ7a0dBR3lDLFFBQVE7a0JBQWpELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUUvQixhQUFhO2tCQUFyQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUaW1lbGluZVNlcnZpY2UgfSBmcm9tICcuL3RpbWVsaW5lLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelRpbWVsaW5lSXRlbUNvbG9yLCBOelRpbWVsaW5lUG9zaXRpb24sIFRpbWVsaW5lVGltZURlZmF1bHRDb2xvcnMgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5cclxuZnVuY3Rpb24gaXNEZWZhdWx0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gVGltZWxpbmVUaW1lRGVmYXVsdENvbG9ycy5maW5kSW5kZXgoaSA9PiBpID09PSBjb2xvcikgIT09IC0xO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtaXRlbSwgW2NtYWNzLXRpbWVsaW5lLWl0ZW1dJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVJdGVtJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLXJpZ2h0XT1cIihjbWFjc1Bvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWxlZnRdPVwiKGNtYWNzUG9zaXRpb24gfHwgcG9zaXRpb24pID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sYXN0XT1cImlzTGFzdFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tdGFpbFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZFwiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1yZWRdPVwiY29sb3IgPT09ICdyZWQnXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVdPVwiY29sb3IgPT09ICdibHVlJ1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmVlbl09XCJjb2xvciA9PT0gJ2dyZWVuJ1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmF5XT1cImNvbG9yID09PSAnZ3JheSdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtY3VzdG9tXT1cIiEhZG90XCJcclxuICAgICAgICAgIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiYm9yZGVyQ29sb3JcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJkb3RcIj57eyBkb3QgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgY21hY3NQb3NpdGlvbj86IE56VGltZWxpbmVQb3NpdGlvbjtcclxuICBASW5wdXQoKSBjb2xvcjogTnpUaW1lbGluZUl0ZW1Db2xvciA9ICdncmF5JztcclxuICBASW5wdXQoKSBkb3Q/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgaXNMYXN0ID0gZmFsc2U7XHJcbiAgYm9yZGVyQ29sb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIHBvc2l0aW9uPzogTnpUaW1lbGluZVBvc2l0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdGltZWxpbmVTZXJ2aWNlOiBUaW1lbGluZVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZWxpbmVTZXJ2aWNlLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcclxuICAgICAgdGhpcy51cGRhdGVDdXN0b21Db2xvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gaXNEZWZhdWx0Q29sb3IodGhpcy5jb2xvcikgPyBudWxsIDogdGhpcy5jb2xvcjtcclxuICB9XHJcbn1cclxuIl19