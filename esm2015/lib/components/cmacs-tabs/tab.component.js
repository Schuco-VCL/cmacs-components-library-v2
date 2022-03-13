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
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        var _a;
        return this.cmacsTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
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
}
CmacsTabComponent.ɵfac = function CmacsTabComponent_Factory(t) { return new (t || CmacsTabComponent)(i0.ɵɵdirectiveInject(NZ_TAB_SET)); };
CmacsTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabComponent, selectors: [["cmacs-tab"]], contentQueries: function CmacsTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsTabLinkTemplateDirective, 1);
        i0.ɵɵcontentQuery(dirIndex, CmacsTabDirective, 1, TemplateRef);
        i0.ɵɵcontentQuery(dirIndex, CmacsTabLinkDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTabLinkTemplateDirective = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function CmacsTabComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { cmacsTitle: "cmacsTitle", cmacsType: "cmacsType", closable: "closable", closeIcon: "closeIcon", disabled: "disabled", forceRender: "forceRender" }, outputs: { select: "select", deselect: "deselect", cmacsClick: "cmacsClick", cmacsContextmenu: "cmacsContextmenu" }, exportAs: ["cmacsTab"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function CmacsTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵtemplate(0, CmacsTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, CmacsTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } }, styles: [".ant-tabs-tab{line-height:2.86;padding:0 12px 2px;margin:unset;font-family:Roboto}.ant-tabs>.ant-tabs-nav .ant-tabs-nav-add,.ant-tabs>div>.ant-tabs-nav .ant-tabs-nav-add{min-width:40px;position:relative;top:8px;background:#fff;border:none;outline:0;height:24px;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1)}.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{color:#2a7cff}.ant-tabs-bottom>.ant-tabs-nav:before,.ant-tabs-bottom>div>.ant-tabs-nav:before,.ant-tabs-top>.ant-tabs-nav:before,.ant-tabs-top>div>.ant-tabs-nav:before{border-bottom:1px solid #dee0e5}.ant-tabs-ink-bar{height:1px;background-color:#2a7cff}.ant-tabs-tab{font-weight:500;font-size:14px}.ant-tabs-tab .ant-tabs-tab-active,.ant-tabs-tab .ant-tabs-tab:hover{color:#2a7cff}.ant-tabs-tab .ant-tabs-tab:not(.cmacs-timeline-datepicker-label){line-height:2.86;padding:0 12px 2px;margin:unset;font-weight:500;font-family:Roboto-Medium}.ant-tabs-bar{border-color:#dee0e5}.cmacs-tabs-icon{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0 auto}.cmacs-tabs-next-after-property .ant-tabs-tab-next-icon,.cmacs-tabs-next-after-property .ant-tabs-tab-prev-icon{padding-bottom:15px}.cmacs-tabs-next-after-property .ant-tabs-tab{width:100%}.cmacs-tabs-next-after-property .cmacs-ant-tab-nav-content{margin:0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cmacs-tabs-icon .ant-tabs-tab .anticon{font-size:16px;margin:0 auto}.cmacs-tabs-icon .ant-tabs-tab.ant-tabs-tab-active{color:#2a7cff;border:1px solid #dee0e5;border-bottom-color:transparent}.ant-tabs-tab:hover{color:#2a7cff}.cmacs-tabs-icon .ant-tabs-ink-bar{background-color:#fff}.cmacs-tabs-icon .ant-tabs-tab{padding:5px 8px;line-height:unset;margin-left:13px;margin-right:13px}.cmacs-tabs-ems .ant-tabs-tab .anticon,.cmacs-tabs-schedule .ant-tabs-tab .anticon{margin-right:0}.cmacs-tabs-ems .ant-tabs-tab,.cmacs-tabs-schedule .ant-tabs-tab{font-size:16px}.cmacs-tabs-ems .ant-tabs-tab{line-height:unset;padding:12px 18px;margin:unset}.cmacs-tabs-schedule .ant-tabs-tab{line-height:unset;padding:0 0 10px;margin-left:10px;margin-right:10px}.cmacs-tabs-schedule .ant-tabs-tab:first-child{margin-left:0}.cmacs-tabs-property .ant-tabs-tab{line-height:unset;padding:0 34px 15px;margin:unset}.cmacs-side-panel-wrapper cmacs-tabset .ant-tabs-nav{margin-right:30px;margin-left:30px}.cmacs-side-panel-wrapper .ant-tabs-content{height:calc(100% - 56px);word-break:break-word}.cmacs-side-panel-wrapper .ant-tabs-content>span{width:310px;display:inline-block}.ant-tabs-tab{color:#97a0ae}"], encapsulation: 2, changeDetection: 0 });
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
        args: [{
                selector: 'cmacs-tab',
                exportAs: 'cmacsTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                styleUrls: ['./tab.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[cmacs-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0lBZ0I5QyxrQkFBbUQ7OztJQUV2QixxQkFBeUI7Ozs7QUFoQjNEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksY0FBYyxDQUFZLFlBQVksQ0FBQyxDQUFDO0FBZ0J0RSxNQUFNLE9BQU8saUJBQWlCO0lBK0I1QixZQUF1QyxhQUF3QjtRQUF4QixrQkFBYSxHQUFiLGFBQWEsQ0FBVztRQTdCdEQsZUFBVSxHQUE2QyxFQUFFLENBQUM7UUFDMUQsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNILGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFvQyxPQUFPLENBQUM7UUFDckMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNsQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBR0UsYUFBUSxHQUE2QixJQUFJLENBQUM7UUFJakgsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQWtCLElBQUksQ0FBQztRQUMvQixXQUFNLEdBQWtCLElBQUksQ0FBQztRQUNwQixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFVc0IsQ0FBQztJQVJuRSxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxLQUFLOztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsV0FBSSxJQUFJLENBQUMsMEJBQTBCLDBDQUFFLFdBQVcsQ0FBQSxDQUFDO0lBQ3pFLENBQUM7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3RELElBQUksVUFBVSxJQUFJLFFBQVEsSUFBSSxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDOztrRkExQ1UsaUJBQWlCLHVCQStCUixVQUFVO3NEQS9CbkIsaUJBQWlCO29DQWFkLDZCQUE2QjtvQ0FDN0IsaUJBQWlCLEtBQXlCLFdBQVc7b0NBQ3JELHFCQUFxQjs7Ozs7Ozs7Ozs7OztRQXJCakMsbUhBRWM7UUFDZCxtSEFBcUU7O0FBTzlDO0lBQWYsWUFBWSxFQUFFO21EQUFrQjtBQUVqQjtJQUFmLFlBQVksRUFBRTttREFBa0I7QUFDakI7SUFBZixZQUFZLEVBQUU7c0RBQXFCO3VGQVBsQyxpQkFBaUI7Y0FkN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztHQUtUO2FBQ0Y7O3NCQWdDYyxNQUFNO3VCQUFDLFVBQVU7d0JBN0JyQixVQUFVO2tCQUFsQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDYSxNQUFNO2tCQUF4QixNQUFNO1lBQ1ksUUFBUTtrQkFBMUIsTUFBTTtZQUNZLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxnQkFBZ0I7a0JBQWxDLE1BQU07WUFFeUQsMEJBQTBCO2tCQUF6RixZQUFZO21CQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNTLFFBQVE7a0JBQTlFLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDYixhQUFhO2tCQUFwRSxZQUFZO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNOLGVBQWU7a0JBQTlELFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiVGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQ21hY3NUYWJMaW5rRGlyZWN0aXZlLCBDbWFjc1RhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWxpbmsuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ21hY3NUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5cclxuLyoqXHJcbiAqIFVzZWQgdG8gcHJvdmlkZSBhIHRhYiBzZXQgdG8gYSB0YWIgd2l0aG91dCBjYXVzaW5nIGEgY2lyY3VsYXIgZGVwZW5kZW5jeS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBOWl9UQUJfU0VUID0gbmV3IEluamVjdGlvblRva2VuPE56U2FmZUFueT4oJ05aX1RBQl9TRVQnKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGFiJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFiJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYi5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSAjdGFiTGlua1RlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbY21hY3MtdGFiLWxpbmtdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBjbWFjc1RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxUYWJUZW1wbGF0ZUNvbnRleHQ+ID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NUeXBlID0gJ2ljb24nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbG9zYWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNsb3NlSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdjbG9zZSc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZvcmNlUmVuZGVyID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNtYWNzQ29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NUYWJMaW5rVGVtcGxhdGVEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBuelRhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSE6IENtYWNzVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGQoQ21hY3NUYWJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVGVtcGxhdGVSZWYgfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQENvbnRlbnRDaGlsZChDbWFjc1RhYkxpbmtEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KSBsaW5rRGlyZWN0aXZlITogQ21hY3NUYWJMaW5rRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIGNvbnRlbnRUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XHJcblxyXG4gIGlzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIG9yaWdpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZSB8fCB0aGlzLmNvbnRlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNtYWNzVGl0bGUgfHwgdGhpcy5uelRhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZT8udGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX1RBQl9TRVQpIHB1YmxpYyBjbG9zZXN0VGFiU2V0OiBOelNhZmVBbnkpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgY21hY3NUaXRsZSwgZGlzYWJsZWQsIGZvcmNlUmVuZGVyIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGNtYWNzVGl0bGUgfHwgZGlzYWJsZWQgfHwgZm9yY2VSZW5kZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=