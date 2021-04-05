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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
}
CmacsTimelineItemComponent.ɵfac = function CmacsTimelineItemComponent_Factory(t) { return new (t || CmacsTimelineItemComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.TimelineService)); };
CmacsTimelineItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTimelineItemComponent, selectors: [["cmacs-timeline-item"], ["", "cmacs-timeline-item", ""]], viewQuery: function CmacsTimelineItemComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
    } }, inputs: { cmacsPosition: "cmacsPosition", color: "color", dot: "dot" }, exportAs: ["cmacsTimelineItem"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["template", ""], [1, "ant-timeline-item"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"]], template: function CmacsTimelineItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsTimelineItemComponent_ng_template_0_Template, 6, 19, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i2.NzStringTemplateOutletDirective], styles: [".ant-timeline-item-head{width:8px;height:8px;border-width:5px}.ant-timeline-item-head-gray{color:#3b3f46;border-color:#dee0e5!important}.ant-timeline-item-tail{border-left-style:dotted}.ant-timeline-item-head-custom{padding:0;width:16px;height:16px}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTimelineItemComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'cmacs-timeline-item, [cmacs-timeline-item]',
                exportAs: 'cmacsTimelineItem',
                styleUrls: ['./cmacs-timeline-item.component.css'],
                template: `
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
  `
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUvdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0lBK0JyRiw2QkFBNEM7SUFBQSxZQUFTO0lBQUEsMEJBQWU7OztJQUF4QixlQUFTO0lBQVQsZ0NBQVM7OztJQWhCekQsNkJBS0M7SUFDQyx5QkFBMEM7SUFDMUMsOEJBUUM7SUFDQywyR0FBb0U7SUFDdEUsaUJBQU07SUFDTiw4QkFBdUM7SUFDckMsa0JBQXlCO0lBQzNCLGlCQUFNO0lBQ1IsaUJBQUs7OztJQW5CSCxnR0FBeUUsZ0ZBQUEseUNBQUE7SUFZdkUsZUFBa0M7SUFBbEMsa0RBQWtDO0lBTGxDLG9FQUFvRCx3REFBQSwwREFBQSx3REFBQSwrQ0FBQTtJQU9yQyxlQUEyQjtJQUEzQixtREFBMkI7OztBQTdCcEQsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBb0NELE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFBb0IsR0FBc0IsRUFBVSxlQUFnQztRQUFoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAzRSxVQUFLLEdBQXdCLE1BQU0sQ0FBQztRQUc3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBR3FELENBQUM7SUFFeEYsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQzs7b0dBMUJVLDBCQUEwQjsrREFBMUIsMEJBQTBCOzs7Ozs7O1FBMUJuQyw2SEF1QmM7O3VGQUdMLDBCQUEwQjtjQWxDdEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDthQUNGO2tHQUUyQyxRQUFRO2tCQUFqRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFFL0IsYUFBYTtrQkFBckIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGltZWxpbmVTZXJ2aWNlIH0gZnJvbSAnLi90aW1lbGluZS5zZXJ2aWNlJztcbmltcG9ydCB7IE56VGltZWxpbmVJdGVtQ29sb3IsIE56VGltZWxpbmVQb3NpdGlvbiwgVGltZWxpbmVUaW1lRGVmYXVsdENvbG9ycyB9IGZyb20gJy4vdHlwaW5ncyc7XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBUaW1lbGluZVRpbWVEZWZhdWx0Q29sb3JzLmZpbmRJbmRleChpID0+IGkgPT09IGNvbG9yKSAhPT0gLTE7XG59XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtaXRlbSwgW2NtYWNzLXRpbWVsaW5lLWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lSXRlbScsXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XG4gICAgICA8bGlcbiAgICAgICAgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbVwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1yaWdodF09XCIoY21hY3NQb3NpdGlvbiB8fCBwb3NpdGlvbikgPT09ICdyaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tbGVmdF09XCIoY21hY3NQb3NpdGlvbiB8fCBwb3NpdGlvbikgPT09ICdsZWZ0J1wiXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sYXN0XT1cImlzTGFzdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS10YWlsXCI+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWhlYWRcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLXJlZF09XCJjb2xvciA9PT0gJ3JlZCdcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWVdPVwiY29sb3IgPT09ICdibHVlJ1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW5dPVwiY29sb3IgPT09ICdncmVlbidcIlxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyYXldPVwiY29sb3IgPT09ICdncmF5J1wiXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtY3VzdG9tXT1cIiEhZG90XCJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJkb3RcIj57eyBkb3QgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGltZWxpbmUtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgY21hY3NQb3NpdGlvbj86IE56VGltZWxpbmVQb3NpdGlvbjtcbiAgQElucHV0KCkgY29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnZ3JheSc7XG4gIEBJbnB1dCgpIGRvdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGlzTGFzdCA9IGZhbHNlO1xuICBib3JkZXJDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHBvc2l0aW9uPzogTnpUaW1lbGluZVBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB0aW1lbGluZVNlcnZpY2U6IFRpbWVsaW5lU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy50aW1lbGluZVNlcnZpY2UubWFya0ZvckNoZWNrKCk7XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlQ3VzdG9tQ29sb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGlzRGVmYXVsdENvbG9yKHRoaXMuY29sb3IpID8gbnVsbCA6IHRoaXMuY29sb3I7XG4gIH1cbn1cbiJdfQ==