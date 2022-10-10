import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsCommentActionComponent as CommentAction } from './comment-cells';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/outlet";
import * as i4 from "ng-zorro-antd/comment";
function CmacsCommentComponent_span_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.author);
} }
function CmacsCommentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtemplate(1, CmacsCommentComponent_span_5_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.author);
} }
function CmacsCommentComponent_ul_6_li_1_ng_template_2_Template(rf, ctx) { }
function CmacsCommentComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵtemplate(2, CmacsCommentComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nzCommentActionHost", action_r5.content);
} }
function CmacsCommentComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 11);
    i0.ɵɵtemplate(1, CmacsCommentComponent_ul_6_li_1_Template, 3, 1, "li", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.actions);
} }
function CmacsCommentComponent_span_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r7.datetime);
} }
function CmacsCommentComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtemplate(1, CmacsCommentComponent_span_9_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.datetime);
} }
const _c0 = [[["", "cmacs-comment-avatar", ""]], [["cmacs-comment-content"]], "*"];
const _c1 = ["[cmacs-comment-avatar]", "cmacs-comment-content", "*"];
export class CmacsCommentComponent {
    constructor(cdr, directionality) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsCommentComponent.ɵfac = function CmacsCommentComponent_Factory(t) { return new (t || CmacsCommentComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
CmacsCommentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsCommentComponent, selectors: [["cmacs-comment"]], contentQueries: function CmacsCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CommentAction, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actions = _t);
    } }, hostVars: 4, hostBindings: function CmacsCommentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
    } }, inputs: { author: "author", datetime: "datetime" }, exportAs: ["cmacsComment"], ngContentSelectors: _c1, decls: 12, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "cmacs-comment-avatar"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-content"], ["class", "ant-comment-content-author-time", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [1, "iconspan"], [3, "nzCommentActionHost"], [1, "ant-comment-content-author-time"]], template: function CmacsCommentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, CmacsCommentComponent_span_5_Template, 2, 1, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, CmacsCommentComponent_ul_6_Template, 2, 1, "ul", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵprojection(8, 1);
        i0.ɵɵtemplate(9, CmacsCommentComponent_span_9_Template, 2, 1, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 8);
        i0.ɵɵprojection(11, 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.author);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.actions == null ? null : ctx.actions.length);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.datetime);
    } }, directives: [i2.NgIf, i3.NzStringTemplateOutletDirective, i2.NgForOf, i4.NzCommentActionHostDirective], styles: [".ant-comment-content-author{display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;color:#3b3f46;width:calc(100% - 140px)}.ant-comment-content-author-name{white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#3b3f46;font-size:14px!important;line-height:unset!important;padding-right:unset!important}.ant-comment-inner{display:block;padding:0 0 20px}.ant-comment-avatar{margin-bottom:14px}.ant-comment-content{line-height:1.83;color:#97a0ae}.ant-comment-content,.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.ant-comment-content-author-time{line-height:1.33;color:#656c79}.ant-comment-actions{float:right;padding:0;margin:0;line-height:32px}.cmacs-comment-avatar,.cmacs-comment-avatar img{display:inline-block;border-radius:4px;border:none;max-width:32px;max-height:32px}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:sub}.ant-comment-actions>li:not(:last-child){padding-right:10px}.ant-comment-actions>li>span{padding-right:0;margin-right:0}.ant-comment-actions>li{line-height:20px}.ant-comment-content-detail{margin-bottom:1em}"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-comment',
                exportAs: 'cmacsComment',
                template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <div class="cmacs-comment-avatar">
          <ng-content select="[cmacs-comment-avatar]"></ng-content>
        </div>
         <div class="ant-comment-content-author">
          <span *ngIf="author" class="ant-comment-content-author-name">
            <ng-container *nzStringTemplateOutlet="author">{{ author }}</ng-container>
          </span>          
        </div>
        <ul class="ant-comment-actions" *ngIf="actions?.length">
          <li *ngFor="let action of actions">
            <span class="iconspan"><ng-template [nzCommentActionHost]="action.content"></ng-template></span>
          </li>
        </ul>
     </div>
      <div class="ant-comment-content">        
        <ng-content select="cmacs-comment-content"></ng-content>
        <span *ngIf="datetime" class="ant-comment-content-author-time">
          <ng-container *nzStringTemplateOutlet="datetime">{{ datetime }}</ng-container>
        </span>        
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content></ng-content>
    </div>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: ['./cmacs-comment.component.css'],
                host: {
                    '[class.ant-comment]': `true`,
                    '[class.ant-comment-rtl]': `dir === "rtl"`
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { author: [{
            type: Input
        }], datetime: [{
            type: Input
        }], actions: [{
            type: ContentChildren,
            args: [CommentAction]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudC9jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDJCQUEyQixJQUFJLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0lBYW5FLDZCQUErQztJQUFBLFlBQVk7SUFBQSwwQkFBZTs7O0lBQTNCLGVBQVk7SUFBWixtQ0FBWTs7O0lBRDdELCtCQUE2RDtJQUMzRCxnR0FBMEU7SUFDNUUsaUJBQU87OztJQURVLGVBQThCO0lBQTlCLHNEQUE4Qjs7OztJQUkvQywwQkFBbUM7SUFDakMsZ0NBQXVCO0lBQUEsaUdBQWtFO0lBQUEsaUJBQU87SUFDbEcsaUJBQUs7OztJQURpQyxlQUFzQztJQUF0Qyx1REFBc0M7OztJQUY5RSw4QkFBd0Q7SUFDdEQsMEVBRUs7SUFDUCxpQkFBSzs7O0lBSG9CLGVBQVU7SUFBVix3Q0FBVTs7O0lBUWpDLDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7O0lBRGpFLGdDQUErRDtJQUM3RCxnR0FBOEU7SUFDaEYsaUJBQU87OztJQURVLGVBQWdDO0lBQWhDLHdEQUFnQzs7OztBQWdCekQsTUFBTSxPQUFPLHFCQUFxQjtJQVFoQyxZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMOUYsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRzBELENBQUM7SUFFbEcsUUFBUTs7UUFDTixNQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUU7UUFFSCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzBGQXRCVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtvQ0FPZixhQUFhOzs7Ozs7OztRQTFDNUIsOEJBQStCO1FBQzdCLDhCQUFnQztRQUM5Qiw4QkFBa0M7UUFDaEMsa0JBQXlEO1FBQzNELGlCQUFNO1FBQ0wsOEJBQXdDO1FBQ3ZDLHdFQUVPO1FBQ1QsaUJBQU07UUFDTixvRUFJSztRQUNSLGlCQUFNO1FBQ0wsOEJBQWlDO1FBQy9CLHFCQUF3RDtRQUN4RCx3RUFFTztRQUNULGlCQUFNO1FBQ1IsaUJBQU07UUFDTiwrQkFBZ0M7UUFDOUIsc0JBQXlCO1FBQzNCLGlCQUFNOztRQW5CTyxlQUFZO1FBQVosaUNBQVk7UUFJWSxlQUFxQjtRQUFyQixzRUFBcUI7UUFRL0MsZUFBYztRQUFkLG1DQUFjOzt1RkFpQmhCLHFCQUFxQjtjQXZDakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlQ7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsSUFBSSxFQUFFO29CQUNKLHFCQUFxQixFQUFFLE1BQU07b0JBQzdCLHlCQUF5QixFQUFFLGVBQWU7aUJBQzNDO2FBQ0Y7O3NCQVM4QyxRQUFRO3dCQVA1QyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBSzBCLE9BQU87a0JBQXRDLGVBQWU7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENtYWNzQ29tbWVudEFjdGlvbkNvbXBvbmVudCBhcyBDb21tZW50QWN0aW9uIH0gZnJvbSAnLi9jb21tZW50LWNlbGxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtaW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWF2YXRhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jb21tZW50LWF2YXRhclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NtYWNzLWNvbW1lbnQtYXZhdGFyXVwiPjwvbmctY29udGVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cImF1dGhvclwiIGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItbmFtZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYXV0aG9yXCI+e3sgYXV0aG9yIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3NwYW4+ICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImFudC1jb21tZW50LWFjdGlvbnNcIiAqbmdJZj1cImFjdGlvbnM/Lmxlbmd0aFwiPlxyXG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25zcGFuXCI+PG5nLXRlbXBsYXRlIFtuekNvbW1lbnRBY3Rpb25Ib3N0XT1cImFjdGlvbi5jb250ZW50XCI+PC9uZy10ZW1wbGF0ZT48L3NwYW4+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY29tbWVudC1jb250ZW50XCI+ICAgICAgICBcclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1jb21tZW50LWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXRldGltZVwiIGNsYXNzPVwiYW50LWNvbW1lbnQtY29udGVudC1hdXRob3ItdGltZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImRhdGV0aW1lXCI+e3sgZGF0ZXRpbWUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3NwYW4+ICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29tbWVudC1uZXN0ZWRcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50LmNzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWNvbW1lbnRdJzogYHRydWVgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY29tbWVudC1ydGxdJzogYGRpciA9PT0gXCJydGxcImBcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgYXV0aG9yPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZGF0ZXRpbWU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb21tZW50QWN0aW9uKSBhY3Rpb25zITogUXVlcnlMaXN0PENvbW1lbnRBY3Rpb24+O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHkpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=