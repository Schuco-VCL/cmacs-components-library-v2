import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cmacs-modal/cmacs-to-css-unit.pipe";
function CmacsSidePanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵpipe(1, "cmacsToCssUnit");
    i0.ɵɵelement(2, "div");
    i0.ɵɵelementStart(3, "div", 2);
    i0.ɵɵprojection(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(1, 6, ctx_r0.width))("float", ctx_r0.float);
    i0.ɵɵclassProp("cmacs-side-panel-collapsible-wrapper", ctx_r0.collapsible);
} }
const _c0 = ["*"];
export class CmacsSidePanelComponent {
    constructor() {
        this.width = 370;
        this.float = 'right';
        this.visible = true;
        this.collapsible = false;
        this.visibleChange = new EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.visible !== undefined) {
            this.visibleChange.emit(this.visible);
        }
    }
}
CmacsSidePanelComponent.ɵfac = function CmacsSidePanelComponent_Factory(t) { return new (t || CmacsSidePanelComponent)(); };
CmacsSidePanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSidePanelComponent, selectors: [["cmacs-side-panel"]], inputs: { width: "width", float: "float", visible: "visible", collapsible: "collapsible" }, outputs: { visibleChange: "visibleChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "cmacs-side-panel-wrapper", 3, "cmacs-side-panel-collapsible-wrapper", "width", "float", 4, "ngIf"], [1, "cmacs-side-panel-wrapper"], [1, "cmacs-side-panel-content"]], template: function CmacsSidePanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsSidePanelComponent_div_0_Template, 5, 8, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [i1.NgIf], pipes: [i2.CmacsToCssUnitPipe], styles: [".cmacs-side-panel-wrapper[_ngcontent-%COMP%]{height:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,.1);background-color:#fff;padding:24px 0 0;transition:all .3s}.cmacs-side-panel-content[_ngcontent-%COMP%]{height:100%}.cmacs-side-panel-collapsible-wrapper[_ngcontent-%COMP%]{box-shadow:7px 0 7px 0 rgba(59,63,70,.2)}.cmacs-side-panel-collapsible-wrapper[_ngcontent-%COMP%]:before{content:\"\"}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSidePanelComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-side-panel',
                templateUrl: './cmacs-side-panel.component.html',
                styleUrls: ['./cmacs-side-panel.component.css']
            }]
    }], function () { return []; }, { width: [{
            type: Input
        }], float: [{
            type: Input
        }], visible: [{
            type: Input
        }], collapsible: [{
            type: Input
        }], visibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2lkZS1wYW5lbC9jbWFjcy1zaWRlLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zaWRlLXBhbmVsL2NtYWNzLXNpZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNSdkIsOEJBTUM7O0lBQ0Msc0JBQVc7SUFDWCw4QkFBc0M7SUFDcEMsa0JBQXlCO0lBQzNCLGlCQUFNO0lBQ1IsaUJBQU07OztJQVJKLDJEQUFzQyx1QkFBQTtJQUR0QywwRUFBMEQ7OztBRGE1RCxNQUFNLE9BQU8sdUJBQXVCO0lBUWxDO1FBTlMsVUFBSyxHQUFvQixHQUFHLENBQUM7UUFDN0IsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7SUFFN0QsQ0FBQztJQUVqQixRQUFRLEtBQUssQ0FBQztJQUVkLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7OzhGQWhCVSx1QkFBdUI7NERBQXZCLHVCQUF1Qjs7UUNmcEMsd0VBV007O1FBTkgsa0NBQWE7O3VGRFVILHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7c0NBR1UsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNJLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zaWRlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2lkZS1wYW5lbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nID0gMzcwO1xyXG4gIEBJbnB1dCgpIGZsb2F0OiBzdHJpbmcgPSAncmlnaHQnO1xyXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGNvbGxhcHNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMudmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2XHJcbiAgY2xhc3M9XCJjbWFjcy1zaWRlLXBhbmVsLXdyYXBwZXJcIlxyXG4gIFtjbGFzcy5jbWFjcy1zaWRlLXBhbmVsLWNvbGxhcHNpYmxlLXdyYXBwZXJdPVwiY29sbGFwc2libGVcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJ3aWR0aCB8IGNtYWNzVG9Dc3NVbml0XCJcclxuICBbc3R5bGUuZmxvYXRdPVwiZmxvYXRcIlxyXG4gICpuZ0lmPVwidmlzaWJsZVwiXHJcbj5cclxuICA8ZGl2PjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1zaWRlLXBhbmVsLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==