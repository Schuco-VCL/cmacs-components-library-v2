import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsCardLoadingComponent {
    constructor(elementRef, renderer) {
        renderer.addClass(elementRef.nativeElement, 'ant-card-loading-content');
    }
    static { this.ɵfac = function CmacsCardLoadingComponent_Factory(t) { return new (t || CmacsCardLoadingComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCardLoadingComponent, selectors: [["cmacs-card-loading"]], exportAs: ["cmacsCardLoading"], decls: 33, vars: 0, consts: [[1, "ant-card-loading-content"], [1, "ant-row", "cardrow"], [1, "ant-col-22", "cardcolumn"], [1, "ant-card-loading-block"], [1, "ant-col-8", "cardcolumn"], [1, "ant-col-15", "cardcolumn"], [1, "ant-col-6", "cardcolumn"], [1, "ant-col-18", "cardcolumn"], [1, "ant-col-13", "cardcolumn"], [1, "ant-col-9", "cardcolumn"], [1, "ant-col-4", "cardcolumn"], [1, "ant-col-3", "cardcolumn"], [1, "ant-col-16", "cardcolumn"]], template: function CmacsCardLoadingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵelement(3, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 1)(5, "div", 4);
            i0.ɵɵelement(6, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵelement(8, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 1)(10, "div", 6);
            i0.ɵɵelement(11, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵelement(13, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 1)(15, "div", 8);
            i0.ɵɵelement(16, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 9);
            i0.ɵɵelement(18, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 1)(20, "div", 10);
            i0.ɵɵelement(21, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 11);
            i0.ɵɵelement(23, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 12);
            i0.ɵɵelement(25, "div", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 1)(27, "div", 4);
            i0.ɵɵelement(28, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 6);
            i0.ɵɵelement(30, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 4);
            i0.ɵɵelement(32, "div", 3);
            i0.ɵɵelementEnd()()();
        } }, styles: ["cmacs-card-loading{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCardLoadingComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-card-loading', exportAs: 'cmacsCardLoading', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-card-loading-content\">\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-22 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-8 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-15 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-6 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-18 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-13 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-9 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-4 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-3 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-16 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-row cardrow\">\r\n    <div class=\"ant-col-8 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-6 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n    <div class=\"ant-col-8 cardcolumn\">\r\n      <div class=\"ant-card-loading-block\"></div>\r\n    </div>\r\n  </div>\r\n</div>", styles: ["cmacs-card-loading{display:block}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FyZC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jYXJkL2NtYWNzLWNhcmQtbG9hZGluZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtY2FyZC9jbWFjcy1jYXJkLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBeUIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBaUI3RyxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLFlBQVksVUFBc0IsRUFBRSxRQUFtQjtRQUNyRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUMxRSxDQUFDOzBGQUhVLHlCQUF5QjtvRUFBekIseUJBQXlCO1lDakJ0Qyw4QkFBc0MsYUFBQSxhQUFBO1lBR2hDLHlCQUEwQztZQUM1QyxpQkFBTSxFQUFBO1lBRVIsOEJBQTZCLGFBQUE7WUFFekIseUJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sOEJBQW1DO1lBQ2pDLHlCQUEwQztZQUM1QyxpQkFBTSxFQUFBO1lBRVIsOEJBQTZCLGNBQUE7WUFFekIsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sK0JBQW1DO1lBQ2pDLDBCQUEwQztZQUM1QyxpQkFBTSxFQUFBO1lBRVIsK0JBQTZCLGNBQUE7WUFFekIsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sK0JBQWtDO1lBQ2hDLDBCQUEwQztZQUM1QyxpQkFBTSxFQUFBO1lBRVIsK0JBQTZCLGVBQUE7WUFFekIsMEJBQTBDO1lBQzVDLGlCQUFNO1lBQ04sZ0NBQWtDO1lBQ2hDLDBCQUEwQztZQUM1QyxpQkFBTTtZQUNOLGdDQUFtQztZQUNqQywwQkFBMEM7WUFDNUMsaUJBQU0sRUFBQTtZQUVSLCtCQUE2QixjQUFBO1lBRXpCLDBCQUEwQztZQUM1QyxpQkFBTTtZQUNOLCtCQUFrQztZQUNoQywwQkFBMEM7WUFDNUMsaUJBQU07WUFDTiwrQkFBa0M7WUFDaEMsMEJBQTBDO1lBQzVDLGlCQUFNLEVBQUEsRUFBQTs7O3VGRGpDRyx5QkFBeUI7Y0FmckMsU0FBUzsyQkFDRSxvQkFBb0IsWUFDcEIsa0JBQWtCLHVCQUVQLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FyZC1sb2FkaW5nJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FyZExvYWRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYXJkLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLWNhcmQtbG9hZGluZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhcmRMb2FkaW5nQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FyZC1sb2FkaW5nLWNvbnRlbnQnKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctY29udGVudFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93IGNhcmRyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTIyIGNhcmRjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93IGNhcmRyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTggY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0xNSBjYXJkY29sdW1uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LXJvdyBjYXJkcm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC02IGNhcmRjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMTggY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3cgY2FyZHJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMTMgY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC05IGNhcmRjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtcm93IGNhcmRyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTQgY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC0zIGNhcmRjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtMTYgY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1yb3cgY2FyZHJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1jb2wtOCBjYXJkY29sdW1uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2FyZC1sb2FkaW5nLWJsb2NrXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtY29sLTYgY2FyZGNvbHVtblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LWNhcmQtbG9hZGluZy1ibG9ja1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWNvbC04IGNhcmRjb2x1bW5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jYXJkLWxvYWRpbmctYmxvY2tcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4iXX0=