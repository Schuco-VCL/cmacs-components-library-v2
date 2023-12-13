import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Inject, InjectionToken, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { CmacsTabLinkDirective, CmacsTabLinkTemplateDirective } from './tab-link.directive';
import { CmacsTabDirective } from './tab.directive';
import * as i0 from "@angular/core";
const _c0 = ["contentTemplate"];
function CmacsTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function CmacsTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
const _c1 = [[["", "cmacs-tab-link", ""]], "*"];
const _c2 = ["[cmacs-tab-link]", "*"];
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
export const NZ_TAB_SET = new InjectionToken('NZ_TAB_SET');
export class CmacsTabComponent {
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        return this.cmacsTitle || this.nzTabLinkTemplateDirective?.templateRef;
    }
    constructor(closestTabSet) {
        this.closestTabSet = closestTabSet;
        this.cmacsTitle = '';
        this.cmacsType = 'icon';
        this.closable = false;
        this.closeIcon = 'close';
        this.disabled = false;
        this.forceRender = false;
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        this.cmacsClick = new EventEmitter();
        this.cmacsContextmenu = new EventEmitter();
        this.template = null;
        this.isActive = false;
        this.position = null;
        this.origin = null;
        this.stateChanges = new Subject();
    }
    ngOnChanges(changes) {
        const { cmacsTitle, disabled, forceRender } = changes;
        if (cmacsTitle || disabled || forceRender) {
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    static { this.ɵfac = function CmacsTabComponent_Factory(t) { return new (t || CmacsTabComponent)(i0.ɵɵdirectiveInject(NZ_TAB_SET)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTabComponent, selectors: [["cmacs-tab"]], contentQueries: function CmacsTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsTabLinkTemplateDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, CmacsTabDirective, 5, TemplateRef);
            i0.ɵɵcontentQuery(dirIndex, CmacsTabLinkDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTabLinkTemplateDirective = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
        } }, viewQuery: function CmacsTabComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        } }, inputs: { cmacsTitle: "cmacsTitle", cmacsType: "cmacsType", closable: "closable", closeIcon: "closeIcon", disabled: "disabled", forceRender: "forceRender" }, outputs: { select: "select", deselect: "deselect", cmacsClick: "cmacsClick", cmacsContextmenu: "cmacsContextmenu" }, exportAs: ["cmacsTab"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function CmacsTabComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵtemplate(0, CmacsTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, CmacsTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } }, styles: [".ant-tabs-tab{line-height:2.86;padding:0 12px 2px;margin:unset;font-weight:500;font-family:Roboto;font-size:14px}.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add{min-width:40px;position:relative;top:8px;background:#ffffff;border:none;outline:0;height:24px;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1)}.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{color:#2a7cff}.ant-tabs-bottom>.ant-tabs-nav:before,.ant-tabs-bottom>div>.ant-tabs-nav:before,.ant-tabs-top>.ant-tabs-nav:before,.ant-tabs-top>div>.ant-tabs-nav:before{border-bottom:1px solid #DEE0E5}.ant-tabs-ink-bar{height:1px;background-color:#2a7cff}.ant-tabs-tab{font-weight:500;font-size:14px}.ant-tabs-tab .ant-tabs-tab-active,.ant-tabs-tab .ant-tabs-tab:hover{color:#2a7cff}.ant-tabs-tab .ant-tabs-tab:not(.cmacs-timeline-datepicker-label){line-height:2.86;padding:0 12px 2px;margin:unset;font-weight:500;font-family:Roboto-Medium}.ant-tabs-bar{border-color:#dee0e5}.cmacs-tabs-icon{width:-moz-fit-content;width:fit-content;margin:0 auto}.cmacs-tabs-next-after-property .ant-tabs-tab-prev-icon,.cmacs-tabs-next-after-property .ant-tabs-tab-next-icon{padding-bottom:15px}.cmacs-tabs-next-after-property .ant-tabs-tab{width:100%}.cmacs-tabs-next-after-property .cmacs-ant-tab-nav-content{margin:0 auto;width:-moz-fit-content;width:fit-content}.cmacs-tabs-icon .ant-tabs-tab .anticon{font-size:16px;margin:0 auto}.cmacs-tabs-icon .ant-tabs-tab.ant-tabs-tab-active{color:#2a7cff;border:1px solid #dee0e5;border-bottom-color:transparent}.ant-tabs-tab:hover{color:#2a7cff}.cmacs-tabs-icon .ant-tabs-ink-bar{background-color:#fff}.cmacs-tabs-icon .ant-tabs-tab{padding:5px 8px;line-height:unset;margin-left:13px;margin-right:13px}.cmacs-tabs-ems .ant-tabs-tab .anticon,.cmacs-tabs-schedule .ant-tabs-tab .anticon{margin-right:0}.cmacs-tabs-ems .ant-tabs-tab,.cmacs-tabs-schedule .ant-tabs-tab{font-size:16px}.cmacs-tabs-ems .ant-tabs-tab{line-height:unset;padding:12px 18px;margin:unset}.cmacs-tabs-schedule .ant-tabs-tab{line-height:unset;padding:0 0 10px;margin-left:10px;margin-right:10px}.cmacs-tabs-schedule .ant-tabs-tab:first-child{margin-left:0}.cmacs-tabs-property .ant-tabs-tab{line-height:unset;padding:0 34px 15px;margin:unset}.cmacs-side-panel-wrapper cmacs-tabset .ant-tabs-nav{margin-right:30px;margin-left:30px}.cmacs-side-panel-wrapper .ant-tabs-content{height:calc(100% - 56px);word-break:break-word}.cmacs-side-panel-wrapper .ant-tabs-content>span{width:310px;display:inline-block}.ant-tabs-tab{color:#97a0ae}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsTabComponent.prototype, "closable", void 0);
__decorate([
    InputBoolean()
], CmacsTabComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsTabComponent.prototype, "forceRender", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-tab', exportAs: 'cmacsTab', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[cmacs-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `, styles: [".ant-tabs-tab{line-height:2.86;padding:0 12px 2px;margin:unset;font-weight:500;font-family:Roboto;font-size:14px}.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add{min-width:40px;position:relative;top:8px;background:#ffffff;border:none;outline:0;height:24px;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1)}.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{color:#2a7cff}.ant-tabs-bottom>.ant-tabs-nav:before,.ant-tabs-bottom>div>.ant-tabs-nav:before,.ant-tabs-top>.ant-tabs-nav:before,.ant-tabs-top>div>.ant-tabs-nav:before{border-bottom:1px solid #DEE0E5}.ant-tabs-ink-bar{height:1px;background-color:#2a7cff}.ant-tabs-tab{font-weight:500;font-size:14px}.ant-tabs-tab .ant-tabs-tab-active,.ant-tabs-tab .ant-tabs-tab:hover{color:#2a7cff}.ant-tabs-tab .ant-tabs-tab:not(.cmacs-timeline-datepicker-label){line-height:2.86;padding:0 12px 2px;margin:unset;font-weight:500;font-family:Roboto-Medium}.ant-tabs-bar{border-color:#dee0e5}.cmacs-tabs-icon{width:-moz-fit-content;width:fit-content;margin:0 auto}.cmacs-tabs-next-after-property .ant-tabs-tab-prev-icon,.cmacs-tabs-next-after-property .ant-tabs-tab-next-icon{padding-bottom:15px}.cmacs-tabs-next-after-property .ant-tabs-tab{width:100%}.cmacs-tabs-next-after-property .cmacs-ant-tab-nav-content{margin:0 auto;width:-moz-fit-content;width:fit-content}.cmacs-tabs-icon .ant-tabs-tab .anticon{font-size:16px;margin:0 auto}.cmacs-tabs-icon .ant-tabs-tab.ant-tabs-tab-active{color:#2a7cff;border:1px solid #dee0e5;border-bottom-color:transparent}.ant-tabs-tab:hover{color:#2a7cff}.cmacs-tabs-icon .ant-tabs-ink-bar{background-color:#fff}.cmacs-tabs-icon .ant-tabs-tab{padding:5px 8px;line-height:unset;margin-left:13px;margin-right:13px}.cmacs-tabs-ems .ant-tabs-tab .anticon,.cmacs-tabs-schedule .ant-tabs-tab .anticon{margin-right:0}.cmacs-tabs-ems .ant-tabs-tab,.cmacs-tabs-schedule .ant-tabs-tab{font-size:16px}.cmacs-tabs-ems .ant-tabs-tab{line-height:unset;padding:12px 18px;margin:unset}.cmacs-tabs-schedule .ant-tabs-tab{line-height:unset;padding:0 0 10px;margin-left:10px;margin-right:10px}.cmacs-tabs-schedule .ant-tabs-tab:first-child{margin-left:0}.cmacs-tabs-property .ant-tabs-tab{line-height:unset;padding:0 34px 15px;margin:unset}.cmacs-side-panel-wrapper cmacs-tabset .ant-tabs-nav{margin-right:30px;margin-left:30px}.cmacs-side-panel-wrapper .ant-tabs-content{height:calc(100% - 56px);word-break:break-word}.cmacs-side-panel-wrapper .ant-tabs-content>span{width:310px;display:inline-block}.ant-tabs-tab{color:#97a0ae}\n"] }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [NZ_TAB_SET]
            }] }]; }, { cmacsTitle: [{
            type: Input
        }], cmacsType: [{
            type: Input
        }], closable: [{
            type: Input
        }], closeIcon: [{
            type: Input
        }], disabled: [{
            type: Input
        }], forceRender: [{
            type: Input
        }], select: [{
            type: Output
        }], deselect: [{
            type: Output
        }], cmacsClick: [{
            type: Output
        }], cmacsContextmenu: [{
            type: Output
        }], nzTabLinkTemplateDirective: [{
            type: ContentChild,
            args: [CmacsTabLinkTemplateDirective, { static: false }]
        }], template: [{
            type: ContentChild,
            args: [CmacsTabDirective, { static: false, read: TemplateRef }]
        }], linkDirective: [{
            type: ContentChild,
            args: [CmacsTabLinkDirective, { static: false }]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0lBZ0I5QyxrQkFBbUQ7OztJQUV2QixxQkFBeUI7Ozs7QUFoQjNEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFZLFlBQVksQ0FBQyxDQUFDO0FBZ0J0RSxNQUFNLE9BQU8saUJBQWlCO0lBdUI1QixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxXQUFXLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQXVDLGFBQXdCO1FBQXhCLGtCQUFhLEdBQWIsYUFBYSxDQUFXO1FBN0J0RCxlQUFVLEdBQTZDLEVBQUUsQ0FBQztRQUMxRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ0gsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQW9DLE9BQU8sQ0FBQztRQUNyQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3BDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFHRSxhQUFRLEdBQTZCLElBQUksQ0FBQztRQUlqSCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLFdBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQVVzQixDQUFDO0lBRW5FLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDdEQsSUFBSSxVQUFVLElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7a0ZBMUNVLGlCQUFpQix1QkErQlIsVUFBVTtvRUEvQm5CLGlCQUFpQjt3Q0FhZCw2QkFBNkI7d0NBQzdCLGlCQUFpQixLQUF5QixXQUFXO3dDQUNyRCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7WUFyQmpDLG1IQUVjO1lBQ2QsbUhBQXFFOzs7QUFPOUM7SUFBZixZQUFZLEVBQUU7bURBQWtCO0FBRWpCO0lBQWYsWUFBWSxFQUFFO21EQUFrQjtBQUNqQjtJQUFmLFlBQVksRUFBRTtzREFBcUI7dUZBUGxDLGlCQUFpQjtjQWQ3QixTQUFTOzJCQUNFLFdBQVcsWUFDWCxVQUFVLHVCQUNDLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSxtQkFFcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQzs7Ozs7R0FLVDs7c0JBaUNZLE1BQU07dUJBQUMsVUFBVTt3QkE3QnJCLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNhLE1BQU07a0JBQXhCLE1BQU07WUFDWSxRQUFRO2tCQUExQixNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUNZLGdCQUFnQjtrQkFBbEMsTUFBTTtZQUV5RCwwQkFBMEI7a0JBQXpGLFlBQVk7bUJBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ1MsUUFBUTtrQkFBOUUsWUFBWTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQUNiLGFBQWE7a0JBQXBFLFlBQVk7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ04sZUFBZTtrQkFBOUQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc1RhYkxpbmtEaXJlY3RpdmUsIENtYWNzVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbGluay5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBDbWFjc1RhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XHJcblxyXG4vKipcclxuICogVXNlZCB0byBwcm92aWRlIGEgdGFiIHNldCB0byBhIHRhYiB3aXRob3V0IGNhdXNpbmcgYSBjaXJjdWxhciBkZXBlbmRlbmN5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5aX1RBQl9TRVQgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpTYWZlQW55PignTlpfVEFCX1NFVCcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlICN0YWJMaW5rVGVtcGxhdGU+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltjbWFjcy10YWItbGlua11cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50VGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPFRhYlRlbXBsYXRlQ29udGV4dD4gPSAnJztcclxuICBASW5wdXQoKSBjbWFjc1R5cGUgPSAnaWNvbic7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNsb3NhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ2Nsb3NlJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZm9yY2VSZW5kZXIgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NDb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc1RhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIG56VGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlITogQ21hY3NUYWJMaW5rVGVtcGxhdGVEaXJlY3RpdmU7XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc1RhYkRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBAQ29udGVudENoaWxkKENtYWNzVGFiTGlua0RpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pIGxpbmtEaXJlY3RpdmUhOiBDbWFjc1RhYkxpbmtEaXJlY3RpdmU7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudFRlbXBsYXRlITogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcclxuXHJcbiAgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgb3JpZ2luOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICByZWFkb25seSBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBnZXQgY29udGVudCgpOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlIHx8IHRoaXMuY29udGVudFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY21hY3NUaXRsZSB8fCB0aGlzLm56VGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlPy50ZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlpfVEFCX1NFVCkgcHVibGljIGNsb3Nlc3RUYWJTZXQ6IE56U2FmZUFueSkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjbWFjc1RpdGxlLCBkaXNhYmxlZCwgZm9yY2VSZW5kZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoY21hY3NUaXRsZSB8fCBkaXNhYmxlZCB8fCBmb3JjZVJlbmRlcikge1xyXG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==