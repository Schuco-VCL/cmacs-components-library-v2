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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9tZW51LWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFFBQVEsRUFFUixRQUFRLEVBRVIsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7SUF3QnhELDZCQUE4QztJQUFBLFlBQVc7SUFBQSwwQkFBZTs7O0lBQTFCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBQ3pELDBDQUF5RDs7OztBQXZCL0QsTUFBTSxVQUFVLGdCQUFnQixDQUFDLHlCQUFrQztJQUNqRSxPQUFPLHlCQUF5QixDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3ZFLENBQUM7QUEyQkQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUNTLFVBQXNCLEVBQ3JCLFFBQW1CLEVBQ29CLG9CQUE2QjtRQUZyRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDb0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFTO1FBRTVFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQ3JHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBYSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUN0RSxJQUFJLFNBQVMsRUFBRTtZQUNiLDJCQUEyQjtZQUMzQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztZQUMvRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOzs4RkFwQlUsdUJBQXVCLGdHQU94Qiw4QkFBOEI7NERBUDdCLHVCQUF1Qjs7Ozs7b0dBdEJ2QjtZQUNULG9EQUFvRDtZQUNwRDtnQkFDRSxPQUFPLEVBQUUsOEJBQThCO2dCQUN2QyxVQUFVLEVBQUUsZ0JBQWdCO2dCQUM1QixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO2FBQ3pFO1NBQ0Y7O1FBR0Msb0NBSUM7UUFDQywwRkFBd0U7UUFDeEUsc0ZBQXlEO1FBQzNELGlCQUFNO1FBQ04sa0JBQXlCOztRQVB2QixzRUFBeUQsZ0VBQUE7UUFJMUMsZUFBNkI7UUFBN0Isa0RBQTZCO1FBQ2QsZUFBWTtRQUFaLGlDQUFZOzt1RkFNbkMsdUJBQXVCO2NBMUJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRTtvQkFDVCxvREFBb0Q7b0JBQ3BEO3dCQUNFLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLFVBQVUsRUFBRSxnQkFBZ0I7d0JBQzVCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLDhCQUE4QixDQUFDLENBQUM7cUJBQ3pFO2lCQUNGO2dCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOztzQkFRSSxNQUFNO3VCQUFDLDhCQUE4Qjt3QkFOL0IsS0FBSztrQkFBYixLQUFLO1lBQ3FCLFlBQVk7a0JBQXRDLFNBQVM7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVHcm91cEZhY3RvcnkoaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbjogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc01lbnVJbnNpZGVEcm9wRG93blRva2VuID8gaXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiA6IGZhbHNlO1xyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2NtYWNzLW1lbnUtZ3JvdXBdJyxcclxuICBleHBvcnRBczogJ2NtYWNzTWVudUdyb3VwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8qKiBjaGVjayBpZiBtZW51IGluc2lkZSBkcm9wZG93bi1tZW51IGNvbXBvbmVudCAqKi9cclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuLFxyXG4gICAgICB1c2VGYWN0b3J5OiBNZW51R3JvdXBGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuXV1cclxuICAgIH1cclxuICBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgW2NsYXNzLmFudC1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVdPVwiIWlzTWVudUluc2lkZURyb3BEb3duXCJcclxuICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGVdPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxyXG4gICAgICAjdGl0bGVFbGVtZW50XHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIiAqbmdJZj1cIiF0aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTWVudUdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBAVmlld0NoaWxkKCd0aXRsZUVsZW1lbnQnKSB0aXRsZUVsZW1lbnQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhblxyXG4gICkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwJyA6ICdhbnQtbWVudS1pdGVtLWdyb3VwJztcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgdWxFbGVtZW50ID0gdGhpcy50aXRsZUVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKHVsRWxlbWVudCkge1xyXG4gICAgICAvKiogYWRkIGNsYXNzbmFtZSB0byB1bCAqKi9cclxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3QnIDogJ2FudC1tZW51LWl0ZW0tZ3JvdXAtbGlzdCc7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModWxFbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=