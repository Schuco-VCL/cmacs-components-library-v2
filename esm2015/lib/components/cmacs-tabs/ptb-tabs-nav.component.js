import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { PtbTabLabelDirective } from './ptb-tab-label.directive';
import { PtbTabsInkBarDirective } from './ptb-tabs-ink-bar.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "./ptb-tabs-ink-bar.directive";
const _c0 = ["navContainerElement"];
const _c1 = ["navListElement"];
const _c2 = ["scrollListElement"];
function PtbTabsNavComponent_div_0_ng_template_1_Template(rf, ctx) { }
function PtbTabsNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, PtbTabsNavComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.nzTabBarExtraContent);
} }
const _c3 = ["*"];
const EXAGGERATED_OVERSCROLL = 64;
export class PtbTabsNavComponent {
    constructor(elementRef, ngZone, renderer, cdr, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.cdr = cdr;
        this.dir = dir;
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzAnimated = true;
        this.nzHideBar = false;
        this.nzShowPagination = true;
        this.nzType = 'line';
    }
    set nzPositionMode(value) {
        this._tabPositionMode = value;
        this.alignInkBarToSelectedTab();
        if (this.nzShowPagination) {
            Promise.resolve().then(() => {
                this.updatePagination();
            });
        }
    }
    get nzPositionMode() {
        return this._tabPositionMode;
    }
    set selectedIndex(value) {
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    onContentChanges() {
        const textContent = this.elementRef.nativeElement.textContent;
        // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).
        if (textContent !== this.currentTextContent) {
            this.ngZone.run(() => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
                this.cdr.markForCheck();
            });
        }
    }
    scrollHeader(scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += ((scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix) / 3;
    }
    ngAfterContentChecked() {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
            this.cdr.markForCheck();
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.nzShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
        if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngAfterContentInit() {
        this.realignInkBar = this.ngZone.runOutsideAngular(() => {
            const dirChange = this.dir ? this.dir.change : observableOf(null);
            const resize = typeof window !== 'undefined' ? fromEvent(window, 'resize').pipe(auditTime(10)) : observableOf(null);
            return merge(dirChange, resize)
                .pipe(startWith(null))
                .subscribe(() => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
            });
        });
    }
    ngOnDestroy() {
        if (this.realignInkBar) {
            this.realignInkBar.unsubscribe();
        }
    }
    updateTabScrollPosition() {
        const scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
        }
    }
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    checkPaginationEnabled() {
        const isEnabled = this.tabListScrollWidthHeightPix > this.tabListScrollOffSetWidthHeight;
        if (!isEnabled) {
            this.scrollDistance = 0;
        }
        if (isEnabled !== this.showPaginationControls) {
            this.cdr.markForCheck();
        }
        this.showPaginationControls = isEnabled;
    }
    scrollToLabel(labelIndex) {
        const selectedLabel = this.listOfNzTabLabelDirective ? this.listOfNzTabLabelDirective.toArray()[labelIndex] : null;
        if (selectedLabel) {
            // The view length is the visible width of the tab labels.
            setTimeout(() => {
                let labelBeforePos;
                let labelAfterPos;
                if (this.nzPositionMode === 'horizontal') {
                    if (this.getLayoutDirection() === 'ltr') {
                        labelBeforePos = selectedLabel.getOffsetLeft();
                        labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                    }
                    else {
                        labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                        labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                    }
                }
                else {
                    labelBeforePos = selectedLabel.getOffsetTop();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
                }
                const beforeVisiblePos = this.scrollDistance;
                const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
                if (labelBeforePos < beforeVisiblePos) {
                    // Scroll header to move label to the before direction
                    this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
                }
                else if (labelAfterPos > afterVisiblePos) {
                    // Scroll header to move label to the after direction
                    this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
                }
            }, 200);
        }
    }
    checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
        this.cdr.markForCheck();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance() {
        return this.tabListScrollWidthHeightPix - this.viewWidthHeightPix || 0;
    }
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
    }
    get scrollDistance() {
        return this._scrollDistance;
    }
    get viewWidthHeightPix() {
        let PAGINATION_PIX = 0;
        if (this.showPaginationControls) {
            PAGINATION_PIX = 64;
        }
        if (this.nzPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
        }
        else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
        }
    }
    get tabListScrollWidthHeightPix() {
        if (this.nzPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
        }
        else {
            return this.navListElement.nativeElement.scrollHeight;
        }
    }
    get tabListScrollOffSetWidthHeight() {
        if (this.nzPositionMode === 'horizontal') {
            return this.scrollListElement.nativeElement.offsetWidth;
        }
        else {
            return this.elementRef.nativeElement.offsetHeight;
        }
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    alignInkBarToSelectedTab() {
        if (this.nzType === 'line') {
            const selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    }
}
PtbTabsNavComponent.ɵfac = function PtbTabsNavComponent_Factory(t) { return new (t || PtbTabsNavComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
PtbTabsNavComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PtbTabsNavComponent, selectors: [["ptb-tabs-nav"]], contentQueries: function PtbTabsNavComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, PtbTabLabelDirective, 0);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzTabLabelDirective = _t);
    } }, viewQuery: function PtbTabsNavComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(PtbTabsInkBarDirective, 1);
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(_c2, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzTabsInkBarDirective = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navContainerElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navListElement = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.scrollListElement = _t.first);
    } }, inputs: { nzTabBarExtraContent: "nzTabBarExtraContent", nzAnimated: "nzAnimated", nzHideBar: "nzHideBar", nzShowPagination: "nzShowPagination", nzType: "nzType", nzPositionMode: "nzPositionMode", selectedIndex: "selectedIndex" }, outputs: { nzOnNextClick: "nzOnNextClick", nzOnPrevClick: "nzOnPrevClick" }, exportAs: ["ptbTabsNav"], ngContentSelectors: _c3, decls: 17, vars: 18, consts: [["style", "float:right;", "class", "ant-tabs-extra-content", 4, "ngIf"], [1, "ant-tabs-nav-container"], ["navContainerElement", ""], [1, "ant-tabs-tab-prev", 3, "click"], [1, "ant-tabs-tab-prev-icon"], ["nz-icon", "", 1, "ant-tabs-tab-prev-icon-target", 3, "nzType"], [1, "ant-tabs-tab-next", 3, "click"], [1, "ant-tabs-tab-next-icon"], ["nz-icon", "", 1, "ant-tabs-tab-next-icon-target", 3, "nzType"], [1, "ant-tabs-nav-wrap"], [1, "ant-tabs-nav-scroll"], ["scrollListElement", ""], [1, "ant-tabs-nav", 3, "cdkObserveContent"], ["navListElement", ""], ["ptb-tabs-ink-bar", "", 2, "display", "block", 3, "hidden", "nzAnimated", "nzPositionMode"], [1, "ant-tabs-extra-content", 2, "float", "right"], [3, "ngTemplateOutlet"]], template: function PtbTabsNavComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, PtbTabsNavComponent_div_0_Template, 2, 1, "div", 0);
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵlistener("click", function PtbTabsNavComponent_Template_span_click_3_listener() { return ctx.scrollHeader("before"); });
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵelement(5, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span", 6);
        i0.ɵɵlistener("click", function PtbTabsNavComponent_Template_span_click_6_listener() { return ctx.scrollHeader("after"); });
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵelement(8, "i", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 9);
        i0.ɵɵelementStart(10, "div", 10, 11);
        i0.ɵɵelementStart(12, "div", 12, 13);
        i0.ɵɵlistener("cdkObserveContent", function PtbTabsNavComponent_Template_div_cdkObserveContent_12_listener() { return ctx.onContentChanges(); });
        i0.ɵɵelementStart(14, "div");
        i0.ɵɵprojection(15);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.nzTabBarExtraContent);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-tabs-nav-container-scrolling", ctx.showPaginationControls);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollBefore)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "left" : "up");
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ant-tabs-tab-btn-disabled", ctx.disableScrollAfter)("ant-tabs-tab-arrow-show", ctx.showPaginationControls);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nzType", ctx.nzPositionMode === "horizontal" ? "right" : "down");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("ant-tabs-nav-animated", ctx.nzAnimated);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("hidden", ctx.nzHideBar)("nzAnimated", ctx.nzAnimated)("nzPositionMode", ctx.nzPositionMode);
    } }, directives: [i2.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective, i5.PtbTabsInkBarDirective, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], PtbTabsNavComponent.prototype, "nzAnimated", void 0);
__decorate([
    InputBoolean()
], PtbTabsNavComponent.prototype, "nzHideBar", void 0);
__decorate([
    InputBoolean()
], PtbTabsNavComponent.prototype, "nzShowPagination", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PtbTabsNavComponent, [{
        type: Component,
        args: [{
                selector: 'ptb-tabs-nav',
                exportAs: 'ptbTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './ptb-tabs-nav.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { listOfNzTabLabelDirective: [{
            type: ContentChildren,
            args: [PtbTabLabelDirective]
        }], nzTabsInkBarDirective: [{
            type: ViewChild,
            args: [PtbTabsInkBarDirective]
        }], navContainerElement: [{
            type: ViewChild,
            args: ['navContainerElement', { static: true }]
        }], navListElement: [{
            type: ViewChild,
            args: ['navListElement', { static: true }]
        }], scrollListElement: [{
            type: ViewChild,
            args: ['scrollListElement', { static: true }]
        }], nzOnNextClick: [{
            type: Output
        }], nzOnPrevClick: [{
            type: Output
        }], nzTabBarExtraContent: [{
            type: Input
        }], nzAnimated: [{
            type: Input
        }], nzHideBar: [{
            type: Input
        }], nzShowPagination: [{
            type: Input
        }], nzType: [{
            type: Input
        }], nzPositionMode: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRiLXRhYnMtbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3B0Yi10YWJzLW5hdi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdGFicy9wdGItdGFicy1uYXYuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFFZixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDMUJ0RSwrQkFBc0Y7SUFDcEYsMkZBQXFFO0lBQ3ZFLGlCQUFNOzs7SUFEUyxlQUF5QztJQUF6Qyw4REFBeUM7OztBRDBCeEQsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFXbEMsTUFBTSxPQUFPLG1CQUFtQjtJQW1EOUIsWUFDUyxVQUFzQixFQUNyQixNQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBc0IsRUFDVixHQUFt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Y0FBYztrQkFBNUQsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSyxpQkFBaUI7a0JBQWxFLFNBQVM7bUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQzdCLGFBQWE7a0JBQS9CLE1BQU07WUFDWSxhQUFhO2tCQUEvQixNQUFNO1lBQ0Usb0JBQW9CO2tCQUE1QixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixnQkFBZ0I7a0JBQXhDLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFHRixjQUFjO2tCQURqQixLQUFLO1lBZ0JGLGFBQWE7a0JBRGhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUHRiVGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL3B0Yi10YWItbGFiZWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUHRiVGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vcHRiLXRhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5jb25zdCBFWEFHR0VSQVRFRF9PVkVSU0NST0xMID0gNjQ7XHJcbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncHRiLXRhYnMtbmF2JyxcclxuICBleHBvcnRBczogJ3B0YlRhYnNOYXYnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3B0Yi10YWJzLW5hdi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFB0YlRhYnNOYXZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XHJcbiAgcHJpdmF0ZSBfc2Nyb2xsRGlzdGFuY2UgPSAwO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xyXG4gIC8qKiBDYWNoZWQgdGV4dCBjb250ZW50IG9mIHRoZSBoZWFkZXIuICovXHJcbiAgcHJpdmF0ZSBjdXJyZW50VGV4dENvbnRlbnQ6IHN0cmluZztcclxuICBzaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gZmFsc2U7XHJcbiAgZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcclxuICBkaXNhYmxlU2Nyb2xsQmVmb3JlID0gdHJ1ZTtcclxuICBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xyXG4gIHJlYWxpZ25JbmtCYXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gIHRhYkxhYmVsQ291bnQ6IG51bWJlcjtcclxuICBzY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihQdGJUYWJMYWJlbERpcmVjdGl2ZSkgbGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZTogUXVlcnlMaXN0PFB0YlRhYkxhYmVsRGlyZWN0aXZlPjtcclxuICBAVmlld0NoaWxkKFB0YlRhYnNJbmtCYXJEaXJlY3RpdmUpIG56VGFic0lua0JhckRpcmVjdGl2ZTogUHRiVGFic0lua0JhckRpcmVjdGl2ZTtcclxuICBAVmlld0NoaWxkKCduYXZDb250YWluZXJFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgbmF2Q29udGFpbmVyRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCduYXZMaXN0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdkxpc3RFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbExpc3RFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc2Nyb2xsTGlzdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFuaW1hdGVkID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlQmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56VHlwZSA9ICdsaW5lJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpQb3NpdGlvbk1vZGUodmFsdWU6IE56VGFiUG9zaXRpb25Nb2RlKSB7XHJcbiAgICB0aGlzLl90YWJQb3NpdGlvbk1vZGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelBvc2l0aW9uTW9kZSgpOiBOelRhYlBvc2l0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFiUG9zaXRpb25Nb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gdGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gdmFsdWU7XHJcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyOiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge31cclxuXHJcbiAgb25Db250ZW50Q2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAvLyBXZSBuZWVkIHRvIGRpZmYgdGhlIHRleHQgY29udGVudCBvZiB0aGUgaGVhZGVyLCBiZWNhdXNlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGNhbGxiYWNrXHJcbiAgICAvLyB3aWxsIGZpcmUgZXZlbiBpZiB0aGUgdGV4dCBjb250ZW50IGRpZG4ndCBjaGFuZ2Ugd2hpY2ggaXMgaW5lZmZpY2llbnQgYW5kIGlzIHByb25lXHJcbiAgICAvLyB0byBpbmZpbml0ZSBsb29wcyBpZiBhIHBvb3JseSBjb25zdHJ1Y3RlZCBleHByZXNzaW9uIGlzIHBhc3NlZCBpbiAoc2VlICMxNDI0OSkuXHJcbiAgICBpZiAodGV4dENvbnRlbnQgIT09IHRoaXMuY3VycmVudFRleHRDb250ZW50KSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGVhZGVyKHNjcm9sbERpcjogU2Nyb2xsRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBpZiAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlKSB7XHJcbiAgICAgIHRoaXMubnpPblByZXZDbGljay5lbWl0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHNjcm9sbERpciA9PT0gJ2FmdGVyJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIpIHtcclxuICAgICAgdGhpcy5uek9uTmV4dENsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuICAgIC8vIE1vdmUgdGhlIHNjcm9sbCBkaXN0YW5jZSBvbmUtdGhpcmQgdGhlIGxlbmd0aCBvZiB0aGUgdGFiIGxpc3QncyB2aWV3cG9ydC5cclxuICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gKChzY3JvbGxEaXIgPT09ICdiZWZvcmUnID8gLTEgOiAxKSAqIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4KSAvIDM7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJMYWJlbENvdW50ICE9PSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoKSB7XHJcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRhYkxhYmVsQ291bnQgPSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcclxuICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcclxuICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhbGlnbklua0JhciA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvYnNlcnZhYmxlT2YobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc2l6ZSA9XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShhdWRpdFRpbWUoMTApKSA6IG9ic2VydmFibGVPZihudWxsKTtcclxuICAgICAgcmV0dXJuIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplKVxyXG4gICAgICAgIC5waXBlKHN0YXJ0V2l0aChudWxsKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJlYWxpZ25JbmtCYXIpIHtcclxuICAgICAgdGhpcy5yZWFsaWduSW5rQmFyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcclxuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInID8gLXNjcm9sbERpc3RhbmNlIDogc2Nyb2xsRGlzdGFuY2U7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMCwgMClgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsJHstc2Nyb2xsRGlzdGFuY2V9cHgsIDApYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja1BhZ2luYXRpb25FbmFibGVkKCk7XHJcbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcclxuICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIGNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0VuYWJsZWQgPSB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCA+IHRoaXMudGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0O1xyXG4gICAgaWYgKCFpc0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNFbmFibGVkICE9PSB0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBpc0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0xhYmVsKGxhYmVsSW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZSA/IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS50b0FycmF5KClbbGFiZWxJbmRleF0gOiBudWxsO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZExhYmVsKSB7XHJcbiAgICAgIC8vIFRoZSB2aWV3IGxlbmd0aCBpcyB0aGUgdmlzaWJsZSB3aWR0aCBvZiB0aGUgdGFiIGxhYmVscy5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxhYmVsQmVmb3JlUG9zOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcclxuICAgICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcclxuICAgICAgICAgICAgbGFiZWxBZnRlclBvcyA9IGxhYmVsQmVmb3JlUG9zICsgc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRXaWR0aCgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFiZWxBZnRlclBvcyA9IHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xyXG4gICAgICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IGxhYmVsQWZ0ZXJQb3MgLSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRUb3AoKTtcclxuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0SGVpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJlZm9yZVZpc2libGVQb3MgPSB0aGlzLnNjcm9sbERpc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeDtcclxuXHJcbiAgICAgICAgaWYgKGxhYmVsQmVmb3JlUG9zIDwgYmVmb3JlVmlzaWJsZVBvcykge1xyXG4gICAgICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBiZWZvcmUgZGlyZWN0aW9uXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlIC09IGJlZm9yZVZpc2libGVQb3MgLSBsYWJlbEJlZm9yZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsYWJlbEFmdGVyUG9zID4gYWZ0ZXJWaXNpYmxlUG9zKSB7XHJcbiAgICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGFmdGVyIGRpcmVjdGlvblxyXG4gICAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSBsYWJlbEFmdGVyUG9zIC0gYWZ0ZXJWaXNpYmxlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk6IHZvaWQge1xyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXHJcbiAgICB0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSAwO1xyXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQWZ0ZXIgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSB0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xyXG4gICAqIGlzIGVxdWFsIHRvIHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGhlIHRhYiBsaXN0IGNvbnRhaW5lciBhbmQgdGFiIGhlYWRlciBjb250YWluZXIuXHJcbiAgICpcclxuICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXHJcbiAgICogc2hvdWxkIGJlIGNhbGxlZCBzcGFyaW5nbHkuXHJcbiAgICovXHJcbiAgZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCAtIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4IHx8IDA7XHJcbiAgfVxyXG5cclxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXHJcbiAgc2V0IHNjcm9sbERpc3RhbmNlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcclxuXHJcbiAgICAvLyBNYXJrIHRoYXQgdGhlIHNjcm9sbCBkaXN0YW5jZSBoYXMgY2hhbmdlZCBzbyB0aGF0IGFmdGVyIHRoZSB2aWV3IGlzIGNoZWNrZWQsIHRoZSBDU1NcclxuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXHJcbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldCB2aWV3V2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcclxuICAgIGxldCBQQUdJTkFUSU9OX1BJWCA9IDA7XHJcbiAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XHJcbiAgICAgIFBBR0lOQVRJT05fUElYID0gNjQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIFBBR0lOQVRJT05fUElYO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAtIFBBR0lOQVRJT05fUElYO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiTGlzdFNjcm9sbE9mZlNldFdpZHRoSGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXIgJiYgdGhpcy5kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcclxuICB9XHJcblxyXG4gIGFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2xpbmUnKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxXcmFwcGVyID1cclxuICAgICAgICB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUgJiYgdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aFxyXG4gICAgICAgICAgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleF0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgICA6IG51bGw7XHJcbiAgICAgIGlmICh0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMubnpUYWJzSW5rQmFyRGlyZWN0aXZlLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkTGFiZWxXcmFwcGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IHN0eWxlPVwiZmxvYXQ6cmlnaHQ7XCIgKm5nSWY9XCJuelRhYkJhckV4dHJhQ29udGVudFwiIGNsYXNzPVwiYW50LXRhYnMtZXh0cmEtY29udGVudFwiPlxuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibnpUYWJCYXJFeHRyYUNvbnRlbnRcIj48L25nLXRlbXBsYXRlPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2LWNvbnRhaW5lclwiXG4gIFtjbGFzcy5hbnQtdGFicy1uYXYtY29udGFpbmVyLXNjcm9sbGluZ109XCJzaG93UGFnaW5hdGlvbkNvbnRyb2xzXCJcbiAgI25hdkNvbnRhaW5lckVsZW1lbnQ+XG4gIDxzcGFuIGNsYXNzPVwiYW50LXRhYnMtdGFiLXByZXZcIlxuICAgIChjbGljayk9XCJzY3JvbGxIZWFkZXIoJ2JlZm9yZScpXCJcbiAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWJ0bi1kaXNhYmxlZF09XCJkaXNhYmxlU2Nyb2xsQmVmb3JlXCJcbiAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFycm93LXNob3ddPVwic2hvd1BhZ2luYXRpb25Db250cm9sc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYnMtdGFiLXByZXYtaWNvblwiPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcgPyAnbGVmdCcgOiAndXAnXCIgY2xhc3M9XCJhbnQtdGFicy10YWItcHJldi1pY29uLXRhcmdldFwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJhbnQtdGFicy10YWItbmV4dFwiXG4gICAgKGNsaWNrKT1cInNjcm9sbEhlYWRlcignYWZ0ZXInKVwiXG4gICAgW2NsYXNzLmFudC10YWJzLXRhYi1idG4tZGlzYWJsZWRdPVwiZGlzYWJsZVNjcm9sbEFmdGVyXCJcbiAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFycm93LXNob3ddPVwic2hvd1BhZ2luYXRpb25Db250cm9sc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LXRhYnMtdGFiLW5leHQtaWNvblwiPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cIm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcgPyAncmlnaHQnIDogJ2Rvd24nXCIgY2xhc3M9XCJhbnQtdGFicy10YWItbmV4dC1pY29uLXRhcmdldFwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImFudC10YWJzLW5hdi13cmFwXCI+XG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLW5hdi1zY3JvbGxcIiAjc2Nyb2xsTGlzdEVsZW1lbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2XCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi1hbmltYXRlZF09XCJuekFuaW1hdGVkXCJcbiAgICAgICAgI25hdkxpc3RFbGVtZW50XG4gICAgICAgIChjZGtPYnNlcnZlQ29udGVudCk9XCJvbkNvbnRlbnRDaGFuZ2VzKClcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHB0Yi10YWJzLWluay1iYXIgW2hpZGRlbl09XCJuekhpZGVCYXJcIiBbbnpBbmltYXRlZF09XCJuekFuaW1hdGVkXCIgW256UG9zaXRpb25Nb2RlXT1cIm56UG9zaXRpb25Nb2RlXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19