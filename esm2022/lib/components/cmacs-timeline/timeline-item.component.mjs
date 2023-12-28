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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUvdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0lBK0JyRiw2QkFBNEM7SUFBQSxZQUFTO0lBQUEsMEJBQWU7OztJQUF4QixlQUFTO0lBQVQsZ0NBQVM7OztJQWhCekQsNkJBS0M7SUFDQyx5QkFBMEM7SUFDMUMsOEJBUUM7SUFDQywyR0FBb0U7SUFDdEUsaUJBQU07SUFDTiw4QkFBdUM7SUFDckMsa0JBQXlCO0lBQzNCLGlCQUFNLEVBQUE7OztJQWxCTixnR0FBeUUsZ0ZBQUEseUNBQUE7SUFZdkUsZUFBa0M7SUFBbEMsa0RBQWtDO0lBTGxDLG9FQUFvRCx3REFBQSwwREFBQSx3REFBQSwrQ0FBQTtJQU9yQyxlQUEyQjtJQUEzQixtREFBMkI7OztBQTdCcEQsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBb0NELE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFBb0IsR0FBc0IsRUFBVSxlQUFnQztRQUFoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAzRSxVQUFLLEdBQXdCLE1BQU0sQ0FBQztRQUc3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBR3FELENBQUM7SUFFeEYsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQzsyRkExQlUsMEJBQTBCO29FQUExQiwwQkFBMEI7Ozs7Ozs7WUExQm5DLDZIQXVCYzs7O3VGQUdMLDBCQUEwQjtjQWxDdEMsU0FBUztrQ0FDUyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLHVCQUNoQixLQUFLLFlBQ2hCLDRDQUE0QyxZQUM1QyxtQkFBbUIsWUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5QlQ7a0dBR3lDLFFBQVE7a0JBQWpELFNBQVM7bUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUUvQixhQUFhO2tCQUFyQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUaW1lbGluZVNlcnZpY2UgfSBmcm9tICcuL3RpbWVsaW5lLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db2xvciwgTnpUaW1lbGluZVBvc2l0aW9uLCBUaW1lbGluZVRpbWVEZWZhdWx0Q29sb3JzIH0gZnJvbSAnLi90eXBpbmdzJztcblxuZnVuY3Rpb24gaXNEZWZhdWx0Q29sb3IoY29sb3I/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRpbWVsaW5lVGltZURlZmF1bHRDb2xvcnMuZmluZEluZGV4KGkgPT4gaSA9PT0gY29sb3IpICE9PSAtMTtcbn1cblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1pdGVtLCBbY21hY3MtdGltZWxpbmUtaXRlbV0nLFxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVJdGVtJyxcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtaXRlbS5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZT5cbiAgICAgIDxsaVxuICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLXJpZ2h0XT1cIihjbWFjc1Bvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ3JpZ2h0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sZWZ0XT1cIihjbWFjc1Bvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ2xlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWxhc3RdPVwiaXNMYXN0XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW0taGVhZFwiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkXT1cImNvbG9yID09PSAncmVkJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtYmx1ZV09XCJjb2xvciA9PT0gJ2JsdWUnXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ncmVlbl09XCJjb2xvciA9PT0gJ2dyZWVuJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JheV09XCJjb2xvciA9PT0gJ2dyYXknXCJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1jdXN0b21dPVwiISFkb3RcIlxuICAgICAgICAgIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiYm9yZGVyQ29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImRvdFwiPnt7IGRvdCB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBjbWFjc1Bvc2l0aW9uPzogTnpUaW1lbGluZVBvc2l0aW9uO1xuICBASW5wdXQoKSBjb2xvcjogTnpUaW1lbGluZUl0ZW1Db2xvciA9ICdncmF5JztcbiAgQElucHV0KCkgZG90Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaXNMYXN0ID0gZmFsc2U7XG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcbiAgICBpZiAoY2hhbmdlcy5jb2xvcikge1xuICAgICAgdGhpcy51cGRhdGVDdXN0b21Db2xvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDdXN0b21Db2xvcigpOiB2b2lkIHtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gaXNEZWZhdWx0Q29sb3IodGhpcy5jb2xvcikgPyBudWxsIDogdGhpcy5jb2xvcjtcbiAgfVxufVxuIl19