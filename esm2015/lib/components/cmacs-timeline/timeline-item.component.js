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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGltZWxpbmUvdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUEyQyx5QkFBeUIsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7O0lBK0JyRiw2QkFBNEM7SUFBQSxZQUFTO0lBQUEsMEJBQWU7OztJQUF4QixlQUFTO0lBQVQsZ0NBQVM7OztJQWhCekQsNkJBS0M7SUFDQyx5QkFBMEM7SUFDMUMsOEJBUUM7SUFDQywyR0FBb0U7SUFDdEUsaUJBQU07SUFDTiw4QkFBdUM7SUFDckMsa0JBQXlCO0lBQzNCLGlCQUFNO0lBQ1IsaUJBQUs7OztJQW5CSCxnR0FBeUUsZ0ZBQUEseUNBQUE7SUFZdkUsZUFBa0M7SUFBbEMsa0RBQWtDO0lBTGxDLG9FQUFvRCx3REFBQSwwREFBQSx3REFBQSwrQ0FBQTtJQU9yQyxlQUEyQjtJQUEzQixtREFBMkI7OztBQTdCcEQsU0FBUyxjQUFjLENBQUMsS0FBYztJQUNwQyxPQUFPLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBb0NELE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFBb0IsR0FBc0IsRUFBVSxlQUFnQztRQUFoRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAzRSxVQUFLLEdBQXdCLE1BQU0sQ0FBQztRQUc3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDO0lBR3FELENBQUM7SUFFeEYsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEUsQ0FBQzs7b0dBMUJVLDBCQUEwQjsrREFBMUIsMEJBQTBCOzs7Ozs7O1FBMUJuQyw2SEF1QmM7O3VGQUdMLDBCQUEwQjtjQWxDdEMsU0FBUztlQUFDO2dCQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCVDthQUNGO2tHQUUyQyxRQUFRO2tCQUFqRCxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFFL0IsYUFBYTtrQkFBckIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGltZWxpbmVTZXJ2aWNlIH0gZnJvbSAnLi90aW1lbGluZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db2xvciwgTnpUaW1lbGluZVBvc2l0aW9uLCBUaW1lbGluZVRpbWVEZWZhdWx0Q29sb3JzIH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbmZ1bmN0aW9uIGlzRGVmYXVsdENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIFRpbWVsaW5lVGltZURlZmF1bHRDb2xvcnMuZmluZEluZGV4KGkgPT4gaSA9PT0gY29sb3IpICE9PSAtMTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWl0ZW0sIFtjbWFjcy10aW1lbGluZS1pdGVtXScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lSXRlbScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtaXRlbS5jb21wb25lbnQuY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjdGVtcGxhdGU+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzPVwiYW50LXRpbWVsaW5lLWl0ZW1cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1yaWdodF09XCIoY21hY3NQb3NpdGlvbiB8fCBwb3NpdGlvbikgPT09ICdyaWdodCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1sZWZ0XT1cIihjbWFjc1Bvc2l0aW9uIHx8IHBvc2l0aW9uKSA9PT0gJ2xlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0tbGFzdF09XCJpc0xhc3RcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLXRhaWxcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWhlYWRcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkXT1cImNvbG9yID09PSAncmVkJ1wiXHJcbiAgICAgICAgICBbY2xhc3MuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlXT1cImNvbG9yID09PSAnYmx1ZSdcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW5dPVwiY29sb3IgPT09ICdncmVlbidcIlxyXG4gICAgICAgICAgW2NsYXNzLmFudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JheV09XCJjb2xvciA9PT0gJ2dyYXknXCJcclxuICAgICAgICAgIFtjbGFzcy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkLWN1c3RvbV09XCIhIWRvdFwiXHJcbiAgICAgICAgICBbc3R5bGUuYm9yZGVyLWNvbG9yXT1cImJvcmRlckNvbG9yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZG90XCI+e3sgZG90IH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10aW1lbGluZS1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRlbXBsYXRlITogVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzUG9zaXRpb24/OiBOelRpbWVsaW5lUG9zaXRpb247XHJcbiAgQElucHV0KCkgY29sb3I6IE56VGltZWxpbmVJdGVtQ29sb3IgPSAnZ3JheSc7XHJcbiAgQElucHV0KCkgZG90Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIGlzTGFzdCA9IGZhbHNlO1xyXG4gIGJvcmRlckNvbG9yOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwb3NpdGlvbj86IE56VGltZWxpbmVQb3NpdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHRpbWVsaW5lU2VydmljZTogVGltZWxpbmVTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWVsaW5lU2VydmljZS5tYXJrRm9yQ2hlY2soKTtcclxuICAgIGlmIChjaGFuZ2VzLmNvbG9yKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ3VzdG9tQ29sb3IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUN1c3RvbUNvbG9yKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGlzRGVmYXVsdENvbG9yKHRoaXMuY29sb3IpID8gbnVsbCA6IHRoaXMuY29sb3I7XHJcbiAgfVxyXG59XHJcbiJdfQ==