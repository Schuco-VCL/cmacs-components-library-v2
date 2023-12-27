import { ChangeDetectionStrategy, Component, ContentChildren, Input, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CmacsCommentActionComponent as CommentAction } from './comment-cells';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/comment";
import * as i4 from "ng-zorro-antd/core/outlet";
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
    i0.ɵɵelementStart(0, "li")(1, "span", 13);
    i0.ɵɵtemplate(2, CmacsCommentComponent_ul_6_li_1_ng_template_2_Template, 0, 0, "ng-template", 14);
    i0.ɵɵelementEnd()();
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
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsCommentComponent_Factory(t) { return new (t || CmacsCommentComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCommentComponent, selectors: [["cmacs-comment"]], contentQueries: function CmacsCommentComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CommentAction, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actions = _t);
        } }, hostVars: 4, hostBindings: function CmacsCommentComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
        } }, inputs: { author: "author", datetime: "datetime" }, exportAs: ["cmacsComment"], ngContentSelectors: _c1, decls: 12, vars: 3, consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "cmacs-comment-avatar"], [1, "ant-comment-content-author"], ["class", "ant-comment-content-author-name", 4, "ngIf"], ["class", "ant-comment-actions", 4, "ngIf"], [1, "ant-comment-content"], ["class", "ant-comment-content-author-time", 4, "ngIf"], [1, "ant-comment-nested"], [1, "ant-comment-content-author-name"], [4, "nzStringTemplateOutlet"], [1, "ant-comment-actions"], [4, "ngFor", "ngForOf"], [1, "iconspan"], [3, "nzCommentActionHost"], [1, "ant-comment-content-author-time"]], template: function CmacsCommentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
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
            i0.ɵɵelementEnd()();
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
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.NzCommentActionHostDirective, i4.NzStringTemplateOutletDirective], styles: [".ant-comment-content-author{position:relative;top:6px;display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;color:#3b3f46;width:calc(100% - 140px)}.ant-comment-content-author-name{white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#3b3f46;font-size:14px!important;line-height:unset!important;padding-right:unset!important}.ant-comment-inner{display:block;padding:0 0 20px}.ant-comment-avatar{margin-bottom:14px;cursor:auto}.ant-comment-content{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.83;letter-spacing:normal;color:#97a0ae}.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#656c79}.ant-comment-actions{float:right;padding:0;margin:0;line-height:24px}.cmacs-comment-avatar,.cmacs-comment-avatar img{display:inline-block;border-radius:4px;border:none;max-width:32px;max-height:32px}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:sub}.ant-comment-actions>li:not(:last-child){padding-right:10px}.ant-comment-actions>li>span{padding-right:0;margin-right:0}.ant-comment-actions>li{line-height:20px}.ant-comment-content-detail{margin-bottom:1em}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-comment', exportAs: 'cmacsComment', template: `
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
  `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.ant-comment]': `true`,
                    '[class.ant-comment-rtl]': `dir === "rtl"`
                }, styles: [".ant-comment-content-author{position:relative;top:6px;display:inline-block;margin-left:10px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;color:#3b3f46;width:calc(100% - 140px)}.ant-comment-content-author-name{white-space:pre-line;display:-moz-box;display:-webkit-box;-webkit-line-clamp:2;-moz-line-clamp:2;-moz-box-orient:vertical;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;color:#3b3f46;font-size:14px!important;line-height:unset!important;padding-right:unset!important}.ant-comment-inner{display:block;padding:0 0 20px}.ant-comment-avatar{margin-bottom:14px;cursor:auto}.ant-comment-content{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.83;letter-spacing:normal;color:#97a0ae}.ant-comment-content-author-time{font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.33;letter-spacing:normal;color:#656c79}.ant-comment-actions{float:right;padding:0;margin:0;line-height:24px}.cmacs-comment-avatar,.cmacs-comment-avatar img{display:inline-block;border-radius:4px;border:none;max-width:32px;max-height:32px}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.iconspan i{font-size:16px;position:relative;height:16px;width:16px;display:inline-block;vertical-align:sub}.ant-comment-actions>li:not(:last-child){padding-right:10px}.ant-comment-actions>li>span{padding-right:0;margin-right:0}.ant-comment-actions>li{line-height:20px}.ant-comment-content-detail{margin-bottom:1em}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY29tbWVudC9jb21tZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLDJCQUEyQixJQUFJLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0lBYW5FLDZCQUErQztJQUFBLFlBQVk7SUFBQSwwQkFBZTs7O0lBQTNCLGVBQVk7SUFBWixtQ0FBWTs7O0lBRDdELCtCQUE2RDtJQUMzRCxnR0FBMEU7SUFDNUUsaUJBQU87OztJQURVLGVBQThCO0lBQTlCLHNEQUE4Qjs7OztJQUkvQywwQkFBbUMsZUFBQTtJQUNWLGlHQUFrRTtJQUFBLGlCQUFPLEVBQUE7OztJQUE1RCxlQUFzQztJQUF0Qyx1REFBc0M7OztJQUY5RSw4QkFBd0Q7SUFDdEQsMEVBRUs7SUFDUCxpQkFBSzs7O0lBSG9CLGVBQVU7SUFBVix3Q0FBVTs7O0lBUWpDLDZCQUFpRDtJQUFBLFlBQWM7SUFBQSwwQkFBZTs7O0lBQTdCLGVBQWM7SUFBZCxxQ0FBYzs7O0lBRGpFLGdDQUErRDtJQUM3RCxnR0FBOEU7SUFDaEYsaUJBQU87OztJQURVLGVBQWdDO0lBQWhDLHdEQUFnQzs7OztBQWdCekQsTUFBTSxPQUFPLHFCQUFxQjtJQVFoQyxZQUFvQixHQUFzQixFQUFzQixjQUE4QjtRQUExRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMOUYsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUVmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRzBELENBQUM7SUFFbEcsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7c0ZBdEJVLHFCQUFxQjtvRUFBckIscUJBQXFCO3dDQU9mLGFBQWE7Ozs7Ozs7O1lBMUM1Qiw4QkFBK0IsYUFBQSxhQUFBO1lBR3pCLGtCQUF5RDtZQUMzRCxpQkFBTTtZQUNMLDhCQUF3QztZQUN2Qyx3RUFFTztZQUNULGlCQUFNO1lBQ04sb0VBSUs7WUFDUixpQkFBTTtZQUNMLDhCQUFpQztZQUMvQixxQkFBd0Q7WUFDeEQsd0VBRU87WUFDVCxpQkFBTSxFQUFBO1lBRVIsK0JBQWdDO1lBQzlCLHNCQUF5QjtZQUMzQixpQkFBTTs7WUFuQk8sZUFBWTtZQUFaLGlDQUFZO1lBSVksZUFBcUI7WUFBckIsc0VBQXFCO1lBUS9DLGVBQWM7WUFBZCxtQ0FBYzs7O3VGQWlCaEIscUJBQXFCO2NBdkNqQyxTQUFTOzJCQUNFLGVBQWUsWUFDZixjQUFjLFlBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVCxpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO29CQUNKLHFCQUFxQixFQUFFLE1BQU07b0JBQzdCLHlCQUF5QixFQUFFLGVBQWU7aUJBQzNDOztzQkFVNEMsUUFBUTt3QkFQNUMsTUFBTTtrQkFBZCxLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUswQixPQUFPO2tCQUF0QyxlQUFlO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzQ29tbWVudEFjdGlvbkNvbXBvbmVudCBhcyBDb21tZW50QWN0aW9uIH0gZnJvbSAnLi9jb21tZW50LWNlbGxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtY29tbWVudCcsXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbW1lbnQtaW5uZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY29tbWVudC1hdmF0YXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNtYWNzLWNvbW1lbnQtYXZhdGFyXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtY29tbWVudC1hdmF0YXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yXCI+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJhdXRob3JcIiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLW5hbWVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJhdXRob3JcIj57eyBhdXRob3IgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L3NwYW4+ICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzPVwiYW50LWNvbW1lbnQtYWN0aW9uc1wiICpuZ0lmPVwiYWN0aW9ucz8ubGVuZ3RoXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uc3BhblwiPjxuZy10ZW1wbGF0ZSBbbnpDb21tZW50QWN0aW9uSG9zdF09XCJhY3Rpb24uY29udGVudFwiPjwvbmctdGVtcGxhdGU+PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnRcIj4gICAgICAgIFxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjbWFjcy1jb21tZW50LWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiZGF0ZXRpbWVcIiBjbGFzcz1cImFudC1jb21tZW50LWNvbnRlbnQtYXV0aG9yLXRpbWVcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZGF0ZXRpbWVcIj57eyBkYXRldGltZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3NwYW4+ICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29tbWVudC1uZXN0ZWRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWNvbW1lbnQuY29tcG9uZW50LmNzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtY29tbWVudF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtY29tbWVudC1ydGxdJzogYGRpciA9PT0gXCJydGxcImBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGF1dGhvcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkYXRldGltZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29tbWVudEFjdGlvbikgYWN0aW9ucyE6IFF1ZXJ5TGlzdDxDb21tZW50QWN0aW9uPjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=