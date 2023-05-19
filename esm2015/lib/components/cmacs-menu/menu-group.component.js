import { ChangeDetectionStrategy, Component, Inject, Input, Optional, SkipSelf, ViewChild, ViewEncapsulation } from '@angular/core';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/outlet";
import * as i2 from "@angular/common";
const _c0 = ["titleElement"];
const _c1 = ["cmacs-menu-group", ""];
function CmacsMenuGroupComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
function CmacsMenuGroupComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!title"]);
} }
const _c2 = ["*", [["", "title", ""]]];
const _c3 = ["*", "[title]"];
export function MenuGroupFactory(isMenuInsideDropDownToken) {
    return isMenuInsideDropDownToken ? isMenuInsideDropDownToken : false;
}
export class CmacsMenuGroupComponent {
    constructor(elementRef, renderer, isMenuInsideDropDown) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group' : 'ant-menu-item-group';
        this.renderer.addClass(elementRef.nativeElement, className);
    }
    ngAfterViewInit() {
        const ulElement = this.titleElement.nativeElement.nextElementSibling;
        if (ulElement) {
            /** add classname to ul **/
            const className = this.isMenuInsideDropDown ? 'ant-dropdown-menu-item-group-list' : 'ant-menu-item-group-list';
            this.renderer.addClass(ulElement, className);
        }
    }
}
CmacsMenuGroupComponent.ɵfac = function CmacsMenuGroupComponent_Factory(t) { return new (t || CmacsMenuGroupComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken)); };
CmacsMenuGroupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsMenuGroupComponent, selectors: [["", "cmacs-menu-group", ""]], viewQuery: function CmacsMenuGroupComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.titleElement = _t.first);
    } }, inputs: { title: "title" }, exportAs: ["cmacsMenuGroup"], features: [i0.ɵɵProvidersFeature([
            /** check if menu inside dropdown-menu component **/
            {
                provide: CmacsIsMenuInsideDropDownToken,
                useFactory: MenuGroupFactory,
                deps: [[new SkipSelf(), new Optional(), CmacsIsMenuInsideDropDownToken]]
            }
        ])], attrs: _c1, ngContentSelectors: _c3, decls: 5, vars: 6, consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"], [4, "ngIf"]], template: function CmacsMenuGroupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵelementStart(0, "div", null, 0);
        i0.ɵɵtemplate(2, CmacsMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        i0.ɵɵtemplate(3, CmacsMenuGroupComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵprojection(4);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzStringTemplateOutlet", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.title);
    } }, directives: [i1.NzStringTemplateOutletDirective, i2.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMenuGroupComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-menu-group]',
                exportAs: 'cmacsMenuGroup',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    /** check if menu inside dropdown-menu component **/
                    {
                        provide: CmacsIsMenuInsideDropDownToken,
                        useFactory: MenuGroupFactory,
                        deps: [[new SkipSelf(), new Optional(), CmacsIsMenuInsideDropDownToken]]
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      <ng-content select="[title]" *ngIf="!title"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }]; }, { title: [{
            type: Input
        }], titleElement: [{
            type: ViewChild,
            args: ['titleElement']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFFUixRQUFRLEVBRVIsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7SUF3QnhELDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBQ3pELDBDQUF5RDs7OztBQXZCL0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLHlCQUFrQztJQUNqRSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUEyQkQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUNTLFVBQXNCLEVBQ3JCLFFBQW1CLEVBQ29CLG9CQUE2QjtRQUZyRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDb0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBRTVFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQ3JHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxJQUFJLFNBQVMsRUFBRTtZQUNiLDJCQUEyQjtZQUMzQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztZQUMvRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs4RkFwQlUsdUJBQXVCLGdHQU94Qiw4QkFBOEI7NERBUDdCLHVCQUF1Qjs7Ozs7b0dBdEJ2QjtZQUNULG9EQUFvRDtZQUNwRDtnQkFDRSxPQUFPLEVBQUUsOEJBQThCO2dCQUN2QyxVQUFVLEVBQUUsZ0JBQWdCO2dCQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7O1FBR0Msb0NBSUM7UUFDQywwRkFBd0U7UUFDeEUsc0ZBQXlEO1FBQzNELGlCQUFNO1FBQ04sa0JBQXlCOztRQVB2QixzRUFBeUQsZ0VBQUE7UUFJMUMsZUFBNkI7UUFBN0Isa0RBQTZCO1FBQ2QsZUFBWTtRQUFaLGlDQUFZOzt1RkFNbkMsdUJBQXVCO2NBMUJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVCxvREFBb0Q7b0JBQ3BEO3dCQUNFLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLFVBQVUsRUFBRSxnQkFBZ0I7d0JBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDhCQUE4QixDQUFDLENBQUM7cUJBQ3pFO2lCQUNGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOztzQkFRSSxNQUFNO3VCQUFDLDhCQUE4Qjt3QkFOL0IsS0FBSztrQkFBYixLQUFLO1lBQ3FCLFlBQVk7a0JBQXRDLFNBQVM7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNraXBTZWxmLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBNZW51R3JvdXBGYWN0b3J5KGlzTWVudUluc2lkZURyb3BEb3duVG9rZW46IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzTWVudUluc2lkZURyb3BEb3duVG9rZW4gPyBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuIDogZmFsc2U7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY21hY3MtbWVudS1ncm91cF0nLFxuICBleHBvcnRBczogJ2NtYWNzTWVudUdyb3VwJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIC8qKiBjaGVjayBpZiBtZW51IGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cbiAgICB7XG4gICAgICBwcm92aWRlOiBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXG4gICAgICB1c2VGYWN0b3J5OiBNZW51R3JvdXBGYWN0b3J5LFxuICAgICAgZGVwczogW1tuZXcgU2tpcFNlbGYoKSwgbmV3IE9wdGlvbmFsKCksIENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbl1dXG4gICAgfVxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIFtjbGFzcy5hbnQtbWVudS1pdGVtLWdyb3VwLXRpdGxlXT1cIiFpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZV09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICAjdGl0bGVFbGVtZW50XG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIiAqbmdJZj1cIiF0aXRsZVwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzTWVudUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ3RpdGxlRWxlbWVudCcpIHRpdGxlRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW5cbiAgKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwJyA6ICdhbnQtbWVudS1pdGVtLWdyb3VwJztcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1bEVsZW1lbnQgPSB0aGlzLnRpdGxlRWxlbWVudCEubmF0aXZlRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHVsRWxlbWVudCkge1xuICAgICAgLyoqIGFkZCBjbGFzc25hbWUgdG8gdWwgKiovXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLmlzTWVudUluc2lkZURyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtbGlzdCcgOiAnYW50LW1lbnUtaXRlbS1ncm91cC1saXN0JztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModWxFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxufVxuIl19