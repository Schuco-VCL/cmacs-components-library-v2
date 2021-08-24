import { FocusKeyManager } from '@angular/cdk/a11y';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW, ENTER, hasModifierKey, LEFT_ARROW, RIGHT_ARROW, SPACE, UP_ARROW } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { animationFrameScheduler, asapScheduler, merge, of, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { CmacsTabAddButtonComponent } from './tab-add-button.component';
import { CmacsTabNavItemDirective } from './tab-nav-item.directive';
import { CmacsTabNavOperationComponent } from './tab-nav-operation.component';
import { CmacsTabsInkBarDirective } from './tabs-ink-bar.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "ng-zorro-antd/core/resize-observers";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "./tab-scroll-list.directive";
import * as i5 from "@angular/common";
import * as i6 from "./tabs-ink-bar.directive";
import * as i7 from "./tab-nav-operation.component";
import * as i8 from "./tab-add-button.component";
const _c0 = ["navWarp"];
const _c1 = ["navList"];
function CmacsTabNavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function CmacsTabNavBarComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.addClicked.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("addIcon", ctx_r2.addIcon);
} }
function CmacsTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) { }
function CmacsTabNavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, CmacsTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.extraTemplate);
} }
const _c2 = ["*"];
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? animationFrameScheduler : asapScheduler;
const CSS_TRANSFORM_TIME = 150;
export class CmacsTabNavBarComponent {
    constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.viewportRuler = viewportRuler;
        this.nzResizeObserver = nzResizeObserver;
        this.dir = dir;
        this.indexFocused = new EventEmitter();
        this.selectFocusedIndex = new EventEmitter();
        this.addClicked = new EventEmitter();
        this.tabScroll = new EventEmitter();
        this.position = 'horizontal';
        this.addable = false;
        this.hideBar = false;
        this.addIcon = 'plus';
        this.inkBarAnimated = true;
        this.cmacsType = 'icon';
        this.translate = null;
        this.transformX = 0;
        this.transformY = 0;
        this.pingLeft = false;
        this.pingRight = false;
        this.pingTop = false;
        this.pingBottom = false;
        this.hiddenItems = [];
        this.destroy$ = new Subject();
        this._selectedIndex = 0;
        this.wrapperWidth = 0;
        this.wrapperHeight = 0;
        this.scrollListWidth = 0;
        this.scrollListHeight = 0;
        this.operationWidth = 0;
        this.operationHeight = 0;
        this.addButtonWidth = 0;
        this.addButtonHeight = 0;
        this.selectedIndexChanged = false;
        this.lockAnimationTimeoutId = -1;
        this.cssTransformTimeWaitingId = -1;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        const newValue = coerceNumberProperty(value);
        if (this._selectedIndex !== newValue) {
            this._selectedIndex = value;
            this.selectedIndexChanged = true;
            if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
            }
        }
    }
    isCmacsType(type) {
        return type === this.cmacsType;
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this.keyManager ? this.keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    get showAddButton() {
        return this.hiddenItems.length === 0 && this.addable;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const dirChange = this.dir ? this.dir.change : of(null);
        const resize = this.viewportRuler.change(150);
        const realign = () => {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
        };
        this.keyManager = new FocusKeyManager(this.items)
            .withHorizontalOrientation(this.getLayoutDirection())
            .withWrap();
        this.keyManager.updateActiveItem(0);
        reqAnimFrame(realign);
        merge(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
            .pipe(takeUntil(this.destroy$), auditTime(16, RESIZE_SCHEDULER))
            .subscribe(() => {
            realign();
        });
        merge(dirChange, resize, this.items.changes)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            Promise.resolve().then(realign);
            this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
        });
        this.keyManager.change.pipe(takeUntil(this.destroy$)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
            this.scrollToTab(this.keyManager.activeItem);
        });
    }
    ngAfterContentChecked() {
        if (this.selectedIndexChanged) {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.lockAnimationTimeoutId);
        clearTimeout(this.cssTransformTimeWaitingId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSelectedFromMenu(tab) {
        const tabIndex = this.items.toArray().findIndex(e => e === tab);
        if (tabIndex !== -1) {
            this.keyManager.updateActiveItem(tabIndex);
            if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
            }
        }
    }
    onOffsetChange(e) {
        if (this.position === 'horizontal') {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                    return;
                }
                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformX = this.clampTransformX(this.transformX + e.x);
            this.setTransform(this.transformX, 0);
        }
        else {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                    return;
                }
                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformY = this.clampTransformY(this.transformY + e.y);
            this.setTransform(0, this.transformY);
        }
        this.lockAnimation();
        this.setVisibleRange();
        this.setPingStatus();
    }
    handleKeydown(event) {
        const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
        if (hasModifierKey(event) || !inNavigationList) {
            return;
        }
        switch (event.keyCode) {
            case LEFT_ARROW:
            case UP_ARROW:
            case RIGHT_ARROW:
            case DOWN_ARROW:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;
            case ENTER:
            case SPACE:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                }
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    isValidIndex(index) {
        if (!this.items) {
            return true;
        }
        const tab = this.items ? this.items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    scrollToTab(tab) {
        if (!this.items.find(e => e === tab)) {
            return;
        }
        const tabs = this.items.toArray();
        if (this.position === 'horizontal') {
            let newTransform = this.transformX;
            if (this.getLayoutDirection() === 'rtl') {
                const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                if (right < this.transformX) {
                    newTransform = right;
                }
                else if (right + tab.width > this.transformX + this.wrapperWidth) {
                    newTransform = right + tab.width - this.wrapperWidth;
                }
            }
            else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
            }
            else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
            }
            this.transformX = newTransform;
            this.transformY = 0;
            this.setTransform(newTransform, 0);
        }
        else {
            let newTransform = this.transformY;
            if (tab.top < -this.transformY) {
                newTransform = -tab.top;
            }
            else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                newTransform = -(tab.top + tab.height - this.wrapperHeight);
            }
            this.transformY = newTransform;
            this.transformX = 0;
            this.setTransform(0, newTransform);
        }
        clearTimeout(this.cssTransformTimeWaitingId);
        this.cssTransformTimeWaitingId = setTimeout(() => {
            this.setVisibleRange();
        }, CSS_TRANSFORM_TIME);
    }
    lockAnimation() {
        if (this.lockAnimationTimeoutId === -1) {
            this.ngZone.runOutsideAngular(() => {
                this.navListRef.nativeElement.style.transition = 'none';
                this.lockAnimationTimeoutId = setTimeout(() => {
                    this.navListRef.nativeElement.style.transition = '';
                    this.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
            });
        }
    }
    setTransform(x, y) {
        this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    clampTransformX(transform) {
        const scrollWidth = this.wrapperWidth - this.scrollListWidth;
        if (this.getLayoutDirection() === 'rtl') {
            return Math.max(Math.min(scrollWidth, transform), 0);
        }
        else {
            return Math.min(Math.max(scrollWidth, transform), 0);
        }
    }
    clampTransformY(transform) {
        return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
    }
    updateScrollListPosition() {
        this.resetSizes();
        this.transformX = this.clampTransformX(this.transformX);
        this.transformY = this.clampTransformY(this.transformY);
        this.setVisibleRange();
        this.setPingStatus();
        if (this.keyManager) {
            this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
            if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
            }
        }
    }
    resetSizes() {
        this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
        this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
        this.operationWidth = this.operationRef.getElementWidth();
        this.operationHeight = this.operationRef.getElementHeight();
        this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
        this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
        this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
        this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
    }
    alignInkBarToSelectedTab() {
        const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
        const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedItemElement) {
            /**
             * .ant-tabs-nav-list - Target offset parent element
             *   └──.ant-tabs-tab
             *        └──.ant-tabs-tab-btn - Currently focused element
             */
            this.inkBar.alignToElement(selectedItemElement.parentElement);
        }
    }
    setPingStatus() {
        const ping = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        const navWarp = this.navWarpRef.nativeElement;
        if (this.position === 'horizontal') {
            if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
        }
        else {
            ping.top = this.transformY < 0;
            ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        Object.keys(ping).forEach(pos => {
            const className = `ant-tabs-nav-wrap-ping-${pos}`;
            if (ping[pos]) {
                navWarp.classList.add(className);
            }
            else {
                navWarp.classList.remove(className);
            }
        });
    }
    setVisibleRange() {
        let unit;
        let position;
        let transformSize;
        let basicSize;
        let tabContentSize;
        let addSize;
        const tabs = this.items.toArray();
        const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
        const getOffset = (index) => {
            let offset;
            const size = tabs[index] || DEFAULT_SIZE;
            if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
            }
            else {
                offset = size[position];
            }
            return offset;
        };
        if (this.position === 'horizontal') {
            unit = 'width';
            basicSize = this.wrapperWidth;
            tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
            addSize = this.addButtonWidth;
            transformSize = Math.abs(this.transformX);
            if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
            }
        }
        else {
            unit = 'height';
            basicSize = this.wrapperHeight;
            tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
            addSize = this.addButtonHeight;
            position = 'top';
            transformSize = -this.transformY;
            this.pingTop = this.transformY < 0;
            this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        let mergedBasicSize = basicSize;
        if (tabContentSize + addSize > basicSize) {
            mergedBasicSize = basicSize - addSize;
        }
        if (!tabs.length) {
            this.hiddenItems = [];
            this.cdr.markForCheck();
            return;
        }
        const len = tabs.length;
        let endIndex = len;
        for (let i = 0; i < len; i += 1) {
            const offset = getOffset(i);
            const size = tabs[i] || DEFAULT_SIZE;
            if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
            }
        }
        let startIndex = 0;
        for (let i = len - 1; i >= 0; i -= 1) {
            const offset = getOffset(i);
            if (offset < transformSize) {
                startIndex = i + 1;
                break;
            }
        }
        const startHiddenTabs = tabs.slice(0, startIndex);
        const endHiddenTabs = tabs.slice(endIndex + 1);
        this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
        this.cdr.markForCheck();
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    setTabFocus(_tabIndex) { }
    ngOnChanges(changes) {
        const { position } = changes;
        // The first will be aligning in ngAfterViewInit
        if (position && !position.isFirstChange()) {
            this.alignInkBarToSelectedTab();
            this.lockAnimation();
            this.updateScrollListPosition();
        }
    }
}
CmacsTabNavBarComponent.ɵfac = function CmacsTabNavBarComponent_Factory(t) { return new (t || CmacsTabNavBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.ViewportRuler), i0.ɵɵdirectiveInject(i2.NzResizeObserver), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
CmacsTabNavBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabNavBarComponent, selectors: [["cmacs-tabs-nav"]], contentQueries: function CmacsTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsTabNavItemDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.items = _t);
    } }, viewQuery: function CmacsTabNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
        i0.ɵɵviewQuery(CmacsTabNavOperationComponent, 3);
        i0.ɵɵviewQuery(CmacsTabAddButtonComponent, 1);
        i0.ɵɵviewQuery(CmacsTabsInkBarDirective, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navWarpRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.navListRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.operationRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.addBtnRef = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inkBar = _t.first);
    } }, hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"], hostBindings: function CmacsTabNavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function CmacsTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", extraTemplate: "extraTemplate", cmacsType: "cmacsType", selectedIndex: "selectedIndex" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["cmacsTabsNav"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 9, vars: 24, consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["cmacsTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["cmacs-tab-add-button", "", "aria-label", "add icon", "role", "button", 3, "addIcon", "click", 4, "ngIf"], ["cmacs-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["cmacs-tab-add-button", "", "aria-label", "add icon", "role", "button", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]], template: function CmacsTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("offsetChange", function CmacsTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function CmacsTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
        i0.ɵɵprojection(4);
        i0.ɵɵtemplate(5, CmacsTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
        i0.ɵɵelement(6, "div", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "cmacs-tab-nav-operation", 6);
        i0.ɵɵlistener("addClicked", function CmacsTabNavBarComponent_Template_cmacs_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function CmacsTabNavBarComponent_Template_cmacs_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CmacsTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        i0.ɵɵclassProp("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("cmacs-tabs-icon", ctx.isCmacsType("icon"))("cmacs-tabs-ems", ctx.isCmacsType("ems"))("cmacs-tabs-schedule", ctx.isCmacsType("schedule"))("cmacs-tabs-property", ctx.isCmacsType("property"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.showAddButton);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.extraTemplate);
    } }, directives: [i4.CmacsTabScrollListDirective, i5.NgIf, i6.CmacsTabsInkBarDirective, i7.CmacsTabNavOperationComponent, i8.CmacsTabAddButtonComponent, i5.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabNavBarComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tabs-nav',
                exportAs: 'cmacsTabsNav',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div class="ant-tabs-nav-list"
       [class.cmacs-tabs-icon]="isCmacsType('icon')"
         [class.cmacs-tabs-ems]="isCmacsType('ems')"
         [class.cmacs-tabs-schedule]="isCmacsType('schedule')"
         [class.cmacs-tabs-property]="isCmacsType('property')"
       #navList cmacsTabScrollList (offsetChange)="onOffsetChange($event)" (tabScroll)="tabScroll.emit($event)">
        <ng-content></ng-content>
        <button *ngIf="showAddButton" cmacs-tab-add-button aria-label="add icon" [addIcon]="addIcon" role="button" (click)="addClicked.emit()"></button>
        <div cmacs-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <cmacs-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></cmacs-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
                host: {
                    role: 'tablist',
                    class: 'ant-tabs-nav',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.NgZone }, { type: i1.ViewportRuler }, { type: i2.NzResizeObserver }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { indexFocused: [{
            type: Output
        }], selectFocusedIndex: [{
            type: Output
        }], addClicked: [{
            type: Output
        }], tabScroll: [{
            type: Output
        }], position: [{
            type: Input
        }], addable: [{
            type: Input
        }], hideBar: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], inkBarAnimated: [{
            type: Input
        }], extraTemplate: [{
            type: Input
        }], cmacsType: [{
            type: Input
        }], selectedIndex: [{
            type: Input
        }], navWarpRef: [{
            type: ViewChild,
            args: ['navWarp', { static: true }]
        }], navListRef: [{
            type: ViewChild,
            args: ['navList', { static: true }]
        }], operationRef: [{
            type: ViewChild,
            args: [CmacsTabNavOperationComponent, { static: true }]
        }], addBtnRef: [{
            type: ViewChild,
            args: [CmacsTabAddButtonComponent, { static: false }]
        }], inkBar: [{
            type: ViewChild,
            args: [CmacsTabsInkBarDirective, { static: true }]
        }], items: [{
            type: ContentChildren,
            args: [CmacsTabNavItemDirective, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLW5hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEgsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUVmLFlBQVksRUFDWixLQUFLLEVBS0wsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBMkI1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O2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRixhQUFhO2tCQURoQixLQUFLO1lBbUJrQyxVQUFVO2tCQUFqRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxVQUFVO2tCQUFqRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDc0IsWUFBWTtrQkFBdkUsU0FBUzttQkFBQyw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDQSxTQUFTO2tCQUFsRSxTQUFTO21CQUFDLDBCQUEwQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNELE1BQU07a0JBQTVELFNBQVM7bUJBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2EsS0FBSztrQkFBdEUsZUFBZTttQkFBQyx3QkFBd0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c0tleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIGhhc01vZGlmaWVyS2V5LCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGFzYXBTY2hlZHVsZXIsIG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XHJcbmltcG9ydCB7IE51bWJlcklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUsIE56VGFiU2Nyb2xsRXZlbnQsIE56VGFiU2Nyb2xsTGlzdE9mZnNldEV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21hY3NUYWJBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1hZGQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdi1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LW9wZXJhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgUkVTSVpFX1NDSEVEVUxFUiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnID8gYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgOiBhc2FwU2NoZWR1bGVyO1xyXG5jb25zdCBDU1NfVFJBTlNGT1JNX1RJTUUgPSAxNTA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYnMtbmF2JyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFic05hdicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFudC10YWJzLW5hdi13cmFwXCJcclxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctbGVmdF09XCJwaW5nTGVmdFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGFicy1uYXYtd3JhcC1waW5nLXJpZ2h0XT1cInBpbmdSaWdodFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGFicy1uYXYtd3JhcC1waW5nLXRvcF09XCJwaW5nVG9wXCJcclxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctYm90dG9tXT1cInBpbmdCb3R0b21cIlxyXG4gICAgICAjbmF2V2FycFxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2LWxpc3RcIlxyXG4gICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtaWNvbl09XCJpc0NtYWNzVHlwZSgnaWNvbicpXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtZW1zXT1cImlzQ21hY3NUeXBlKCdlbXMnKVwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJzLXNjaGVkdWxlXT1cImlzQ21hY3NUeXBlKCdzY2hlZHVsZScpXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtcHJvcGVydHldPVwiaXNDbWFjc1R5cGUoJ3Byb3BlcnR5JylcIlxyXG4gICAgICAgI25hdkxpc3QgY21hY3NUYWJTY3JvbGxMaXN0IChvZmZzZXRDaGFuZ2UpPVwib25PZmZzZXRDaGFuZ2UoJGV2ZW50KVwiICh0YWJTY3JvbGwpPVwidGFiU2Nyb2xsLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0FkZEJ1dHRvblwiIGNtYWNzLXRhYi1hZGQtYnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgaWNvblwiIFthZGRJY29uXT1cImFkZEljb25cIiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZENsaWNrZWQuZW1pdCgpXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbWFjcy10YWJzLWluay1iYXIgW2hpZGRlbl09XCJoaWRlQmFyXCIgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCIgW2FuaW1hdGVkXT1cImlua0JhckFuaW1hdGVkXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Y21hY3MtdGFiLW5hdi1vcGVyYXRpb25cclxuICAgICAgKGFkZENsaWNrZWQpPVwiYWRkQ2xpY2tlZC5lbWl0KClcIlxyXG4gICAgICAoc2VsZWN0ZWQpPVwib25TZWxlY3RlZEZyb21NZW51KCRldmVudClcIlxyXG4gICAgICBbYWRkSWNvbl09XCJhZGRJY29uXCJcclxuICAgICAgW2FkZGFibGVdPVwiYWRkYWJsZVwiXHJcbiAgICAgIFtpdGVtc109XCJoaWRkZW5JdGVtc1wiXHJcbiAgICA+PC9jbWFjcy10YWItbmF2LW9wZXJhdGlvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFicy1leHRyYS1jb250ZW50XCIgKm5nSWY9XCJleHRyYVRlbXBsYXRlXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgcm9sZTogJ3RhYmxpc3QnLFxyXG4gICAgY2xhc3M6ICdhbnQtdGFicy1uYXYnLFxyXG4gICAgJyhrZXlkb3duKSc6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJOYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGluZGV4Rm9jdXNlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Rm9jdXNlZEluZGV4OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZGRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0YWJTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiU2Nyb2xsRXZlbnQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBhZGRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlkZUJhcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gPSAncGx1cyc7XHJcbiAgQElucHV0KCkgaW5rQmFyQW5pbWF0ZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGV4dHJhVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjbWFjc1R5cGUgPSAnaWNvbic7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5rZXlNYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0odmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NtYWNzVHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0eXBlID09PSB0aGlzLmNtYWNzVHlwZTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ25hdldhcnAnLCB7IHN0YXRpYzogdHJ1ZSB9KSBuYXZXYXJwUmVmITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnbmF2TGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdkxpc3RSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKENtYWNzVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBvcGVyYXRpb25SZWYhOiBDbWFjc1RhYk5hdk9wZXJhdGlvbkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENtYWNzVGFiQWRkQnV0dG9uQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgYWRkQnRuUmVmITogQ21hY3NUYWJBZGRCdXR0b25Db21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZChDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGlua0JhciE6IENtYWNzVGFic0lua0JhckRpcmVjdGl2ZTtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBpdGVtcyE6IFF1ZXJ5TGlzdDxDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICAvKiogVHJhY2tzIHdoaWNoIGVsZW1lbnQgaGFzIGZvY3VzOyB1c2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uICovXHJcbiAgZ2V0IGZvY3VzSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmtleU1hbmFnZXIgPyB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ISA6IDA7XHJcbiAgfVxyXG5cclxuICAvKiogV2hlbiB0aGUgZm9jdXMgaW5kZXggaXMgc2V0LCB3ZSBtdXN0IG1hbnVhbGx5IHNlbmQgZm9jdXMgdG8gdGhlIGNvcnJlY3QgbGFiZWwgKi9cclxuICBzZXQgZm9jdXNJbmRleCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZEluZGV4KHZhbHVlKSB8fCB0aGlzLmZvY3VzSW5kZXggPT09IHZhbHVlIHx8ICF0aGlzLmtleU1hbmFnZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMua2V5TWFuYWdlci5zZXRBY3RpdmVJdGVtKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBzaG93QWRkQnV0dG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlkZGVuSXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMuYWRkYWJsZTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZTogbnVsbCB8IHN0cmluZyA9IG51bGw7XHJcbiAgdHJhbnNmb3JtWCA9IDA7XHJcbiAgdHJhbnNmb3JtWSA9IDA7XHJcbiAgcGluZ0xlZnQgPSBmYWxzZTtcclxuICBwaW5nUmlnaHQgPSBmYWxzZTtcclxuICBwaW5nVG9wID0gZmFsc2U7XHJcbiAgcGluZ0JvdHRvbSA9IGZhbHNlO1xyXG4gIGhpZGRlbkl0ZW1zOiBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGtleU1hbmFnZXIhOiBGb2N1c0tleU1hbmFnZXI8Q21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlPjtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4ID0gMDtcclxuICBwcml2YXRlIHdyYXBwZXJXaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSB3cmFwcGVySGVpZ2h0ID0gMDtcclxuICBwcml2YXRlIHNjcm9sbExpc3RXaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxMaXN0SGVpZ2h0ID0gMDtcclxuICBwcml2YXRlIG9wZXJhdGlvbldpZHRoID0gMDtcclxuICBwcml2YXRlIG9wZXJhdGlvbkhlaWdodCA9IDA7XHJcbiAgcHJpdmF0ZSBhZGRCdXR0b25XaWR0aCA9IDA7XHJcbiAgcHJpdmF0ZSBhZGRCdXR0b25IZWlnaHQgPSAwO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGxvY2tBbmltYXRpb25UaW1lb3V0SWQgPSAtMTtcclxuICBwcml2YXRlIGNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQgPSAtMTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxyXG4gICAgcHJpdmF0ZSBuelJlc2l6ZU9ic2VydmVyOiBOelJlc2l6ZU9ic2VydmVyLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXI6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpckNoYW5nZSA9IHRoaXMuZGlyID8gdGhpcy5kaXIuY2hhbmdlIDogb2YobnVsbCk7XHJcbiAgICBjb25zdCByZXNpemUgPSB0aGlzLnZpZXdwb3J0UnVsZXIuY2hhbmdlKDE1MCk7XHJcblxyXG4gICAgY29uc3QgcmVhbGlnbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgIH07XHJcbiAgICB0aGlzLmtleU1hbmFnZXIgPSBuZXcgRm9jdXNLZXlNYW5hZ2VyPENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZT4odGhpcy5pdGVtcylcclxuICAgICAgLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSlcclxuICAgICAgLndpdGhXcmFwKCk7XHJcbiAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSgwKTtcclxuXHJcbiAgICByZXFBbmltRnJhbWUocmVhbGlnbik7XHJcblxyXG4gICAgbWVyZ2UodGhpcy5uelJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5uYXZXYXJwUmVmKSwgdGhpcy5uelJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5uYXZMaXN0UmVmKSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLCBhdWRpdFRpbWUoMTYsIFJFU0laRV9TQ0hFRFVMRVIpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICByZWFsaWduKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgbWVyZ2UoZGlyQ2hhbmdlLCByZXNpemUsIHRoaXMuaXRlbXMuY2hhbmdlcylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKHJlYWxpZ24pO1xyXG4gICAgICAgIHRoaXMua2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmtleU1hbmFnZXIuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobmV3Rm9jdXNJbmRleCA9PiB7XHJcbiAgICAgIHRoaXMuaW5kZXhGb2N1c2VkLmVtaXQobmV3Rm9jdXNJbmRleCk7XHJcbiAgICAgIHRoaXMuc2V0VGFiRm9jdXMobmV3Rm9jdXNJbmRleCk7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9UYWIodGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0hKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQpIHtcclxuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTtcclxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jc3NUcmFuc2Zvcm1UaW1lV2FpdGluZ0lkKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3RlZEZyb21NZW51KHRhYjogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMuaXRlbXMudG9BcnJheSgpLmZpbmRJbmRleChlID0+IGUgPT09IHRhYik7XHJcbiAgICBpZiAodGFiSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMua2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHRhYkluZGV4KTtcclxuICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RGb2N1c2VkSW5kZXguZW1pdCh0aGlzLmZvY3VzSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9UYWIodGFiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25PZmZzZXRDaGFuZ2UoZTogTnpUYWJTY3JvbGxMaXN0T2Zmc2V0RXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgaWYgKHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9PT0gLTEpIHtcclxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1YID49IDAgJiYgZS54ID4gMCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50cmFuc2Zvcm1YIDw9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zY3JvbGxMaXN0V2lkdGggJiYgZS54IDwgMCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1YKHRoaXMudHJhbnNmb3JtWCArIGUueCk7XHJcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtWCwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID09PSAtMSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVkgPj0gMCAmJiBlLnkgPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVkgPD0gdGhpcy53cmFwcGVySGVpZ2h0IC0gdGhpcy5zY3JvbGxMaXN0SGVpZ2h0ICYmIGUueSA8IDApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZS5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVkgPSB0aGlzLmNsYW1wVHJhbnNmb3JtWSh0aGlzLnRyYW5zZm9ybVkgKyBlLnkpO1xyXG4gICAgICB0aGlzLnNldFRyYW5zZm9ybSgwLCB0aGlzLnRyYW5zZm9ybVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xyXG4gICAgdGhpcy5zZXRWaXNpYmxlUmFuZ2UoKTtcclxuICAgIHRoaXMuc2V0UGluZ1N0YXR1cygpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5OYXZpZ2F0aW9uTGlzdCA9IHRoaXMubmF2V2FycFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICBpZiAoaGFzTW9kaWZpZXJLZXkoZXZlbnQpIHx8ICFpbk5hdmlnYXRpb25MaXN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgdGhpcy5sb2NrQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgIGNhc2UgU1BBQ0U6XHJcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNJbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEZvY3VzZWRJbmRleC5lbWl0KHRoaXMuZm9jdXNJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMua2V5TWFuYWdlci5vbktleWRvd24oZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkSW5kZXgoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLml0ZW1zKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRhYiA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLnRvQXJyYXkoKVtpbmRleF0gOiBudWxsO1xyXG4gICAgcmV0dXJuICEhdGFiICYmICF0YWIuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcm9sbFRvVGFiKHRhYjogQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXRlbXMuZmluZChlID0+IGUgPT09IHRhYikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFicyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgbGV0IG5ld1RyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtWDtcclxuICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XHJcbiAgICAgICAgY29uc3QgcmlnaHQgPSB0YWJzWzBdLmxlZnQgKyB0YWJzWzBdLndpZHRoIC0gdGFiLmxlZnQgLSB0YWIud2lkdGg7XHJcblxyXG4gICAgICAgIGlmIChyaWdodCA8IHRoaXMudHJhbnNmb3JtWCkge1xyXG4gICAgICAgICAgbmV3VHJhbnNmb3JtID0gcmlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodCArIHRhYi53aWR0aCA+IHRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoKSB7XHJcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSByaWdodCArIHRhYi53aWR0aCAtIHRoaXMud3JhcHBlcldpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0YWIubGVmdCA8IC10aGlzLnRyYW5zZm9ybVgpIHtcclxuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtdGFiLmxlZnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAodGFiLmxlZnQgKyB0YWIud2lkdGggPiAtdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGgpIHtcclxuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYi5sZWZ0ICsgdGFiLndpZHRoIC0gdGhpcy53cmFwcGVyV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IG5ld1RyYW5zZm9ybTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1ZID0gMDtcclxuICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0obmV3VHJhbnNmb3JtLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBuZXdUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVk7XHJcblxyXG4gICAgICBpZiAodGFiLnRvcCA8IC10aGlzLnRyYW5zZm9ybVkpIHtcclxuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtdGFiLnRvcDtcclxuICAgICAgfSBlbHNlIGlmICh0YWIudG9wICsgdGFiLmhlaWdodCA+IC10aGlzLnRyYW5zZm9ybVkgKyB0aGlzLndyYXBwZXJIZWlnaHQpIHtcclxuICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtKHRhYi50b3AgKyB0YWIuaGVpZ2h0IC0gdGhpcy53cmFwcGVySGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRyYW5zZm9ybVkgPSBuZXdUcmFuc2Zvcm07XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IDA7XHJcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKDAsIG5ld1RyYW5zZm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuY3NzVHJhbnNmb3JtVGltZVdhaXRpbmdJZCk7XHJcbiAgICB0aGlzLmNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRWaXNpYmxlUmFuZ2UoKTtcclxuICAgIH0sIENTU19UUkFOU0ZPUk1fVElNRSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvY2tBbmltYXRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID09PSAtMSkge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcclxuICAgICAgICB0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuICAgICAgICAgIHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IC0xO1xyXG4gICAgICAgIH0sIENTU19UUkFOU0ZPUk1fVElNRSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUcmFuc2Zvcm0oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhbXBUcmFuc2Zvcm1YKHRyYW5zZm9ybTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbExpc3RXaWR0aDtcclxuICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xyXG4gICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oc2Nyb2xsV2lkdGgsIHRyYW5zZm9ybSksIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHNjcm9sbFdpZHRoLCB0cmFuc2Zvcm0pLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhbXBUcmFuc2Zvcm1ZKHRyYW5zZm9ybTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbExpc3RIZWlnaHQsIHRyYW5zZm9ybSksIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVTY3JvbGxMaXN0UG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0U2l6ZXMoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtWCA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1YKHRoaXMudHJhbnNmb3JtWCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybVkgPSB0aGlzLmNsYW1wVHJhbnNmb3JtWSh0aGlzLnRyYW5zZm9ybVkpO1xyXG4gICAgdGhpcy5zZXRWaXNpYmxlUmFuZ2UoKTtcclxuICAgIHRoaXMuc2V0UGluZ1N0YXR1cygpO1xyXG4gICAgaWYgKHRoaXMua2V5TWFuYWdlcikge1xyXG4gICAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ISk7XHJcbiAgICAgIGlmICh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9UYWIodGhpcy5rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U2l6ZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZEJ1dHRvbldpZHRoID0gdGhpcy5hZGRCdG5SZWYgPyB0aGlzLmFkZEJ0blJlZi5nZXRFbGVtZW50V2lkdGgoKSA6IDA7XHJcbiAgICB0aGlzLmFkZEJ1dHRvbkhlaWdodCA9IHRoaXMuYWRkQnRuUmVmID8gdGhpcy5hZGRCdG5SZWYuZ2V0RWxlbWVudEhlaWdodCgpIDogMDtcclxuICAgIHRoaXMub3BlcmF0aW9uV2lkdGggPSB0aGlzLm9wZXJhdGlvblJlZi5nZXRFbGVtZW50V2lkdGgoKTtcclxuICAgIHRoaXMub3BlcmF0aW9uSGVpZ2h0ID0gdGhpcy5vcGVyYXRpb25SZWYuZ2V0RWxlbWVudEhlaWdodCgpO1xyXG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSB0aGlzLm5hdldhcnBSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xyXG4gICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy5uYXZXYXJwUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDA7XHJcbiAgICB0aGlzLnNjcm9sbExpc3RIZWlnaHQgPSB0aGlzLm5hdkxpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcclxuICAgIHRoaXMuc2Nyb2xsTGlzdFdpZHRoID0gdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaXRlbXMudG9BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleF0gOiBudWxsO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtRWxlbWVudCA9IHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSXRlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xyXG5cclxuICAgIGlmIChzZWxlY3RlZEl0ZW1FbGVtZW50KSB7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiAuYW50LXRhYnMtbmF2LWxpc3QgLSBUYXJnZXQgb2Zmc2V0IHBhcmVudCBlbGVtZW50XHJcbiAgICAgICAqICAg4pSU4pSA4pSALmFudC10YWJzLXRhYlxyXG4gICAgICAgKiAgICAgICAg4pSU4pSA4pSALmFudC10YWJzLXRhYi1idG4gLSBDdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50XHJcbiAgICAgICAqL1xyXG4gICAgICB0aGlzLmlua0Jhci5hbGlnblRvRWxlbWVudChzZWxlY3RlZEl0ZW1FbGVtZW50LnBhcmVudEVsZW1lbnQhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGluZ1N0YXR1cygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBpbmcgPSB7XHJcbiAgICAgIHRvcDogZmFsc2UsXHJcbiAgICAgIHJpZ2h0OiBmYWxzZSxcclxuICAgICAgYm90dG9tOiBmYWxzZSxcclxuICAgICAgbGVmdDogZmFsc2VcclxuICAgIH07XHJcbiAgICBjb25zdCBuYXZXYXJwID0gdGhpcy5uYXZXYXJwUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xyXG4gICAgICAgIHBpbmcucmlnaHQgPSB0aGlzLnRyYW5zZm9ybVggPiAwO1xyXG4gICAgICAgIHBpbmcubGVmdCA9IHRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoIDwgdGhpcy5zY3JvbGxMaXN0V2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGluZy5sZWZ0ID0gdGhpcy50cmFuc2Zvcm1YIDwgMDtcclxuICAgICAgICBwaW5nLnJpZ2h0ID0gLXRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoIDwgdGhpcy5zY3JvbGxMaXN0V2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBpbmcudG9wID0gdGhpcy50cmFuc2Zvcm1ZIDwgMDtcclxuICAgICAgcGluZy5ib3R0b20gPSAtdGhpcy50cmFuc2Zvcm1ZICsgdGhpcy53cmFwcGVySGVpZ2h0IDwgdGhpcy5zY3JvbGxMaXN0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIChPYmplY3Qua2V5cyhwaW5nKSBhcyBBcnJheTwndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0Jz4pLmZvckVhY2gocG9zID0+IHtcclxuICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGFudC10YWJzLW5hdi13cmFwLXBpbmctJHtwb3N9YDtcclxuICAgICAgaWYgKHBpbmdbcG9zXSkge1xyXG4gICAgICAgIG5hdldhcnAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdldhcnAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmlzaWJsZVJhbmdlKCk6IHZvaWQge1xyXG4gICAgbGV0IHVuaXQ6ICd3aWR0aCcgfCAnaGVpZ2h0JztcclxuICAgIGxldCBwb3NpdGlvbjogJ2xlZnQnIHwgJ3RvcCcgfCAncmlnaHQnO1xyXG4gICAgbGV0IHRyYW5zZm9ybVNpemU6IG51bWJlcjtcclxuICAgIGxldCBiYXNpY1NpemU6IG51bWJlcjtcclxuICAgIGxldCB0YWJDb250ZW50U2l6ZTogbnVtYmVyO1xyXG4gICAgbGV0IGFkZFNpemU6IG51bWJlcjtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IERFRkFVTFRfU0laRSA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCwgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCB9O1xyXG5cclxuICAgIGNvbnN0IGdldE9mZnNldCA9IChpbmRleDogbnVtYmVyKTogbnVtYmVyID0+IHtcclxuICAgICAgbGV0IG9mZnNldDogbnVtYmVyO1xyXG4gICAgICBjb25zdCBzaXplID0gdGFic1tpbmRleF0gfHwgREVGQVVMVF9TSVpFO1xyXG4gICAgICBpZiAocG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICBvZmZzZXQgPSB0YWJzWzBdLmxlZnQgKyB0YWJzWzBdLndpZHRoIC0gdGFic1tpbmRleF0ubGVmdCAtIHRhYnNbaW5kZXhdLndpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG9mZnNldCA9IHNpemVbcG9zaXRpb25dO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdW5pdCA9ICd3aWR0aCc7XHJcbiAgICAgIGJhc2ljU2l6ZSA9IHRoaXMud3JhcHBlcldpZHRoO1xyXG4gICAgICB0YWJDb250ZW50U2l6ZSA9IHRoaXMuc2Nyb2xsTGlzdFdpZHRoIC0gKHRoaXMuaGlkZGVuSXRlbXMubGVuZ3RoID8gdGhpcy5vcGVyYXRpb25XaWR0aCA6IDApO1xyXG4gICAgICBhZGRTaXplID0gdGhpcy5hZGRCdXR0b25XaWR0aDtcclxuICAgICAgdHJhbnNmb3JtU2l6ZSA9IE1hdGguYWJzKHRoaXMudHJhbnNmb3JtWCk7XHJcbiAgICAgIGlmICh0aGlzLmdldExheW91dERpcmVjdGlvbigpID09PSAncnRsJykge1xyXG4gICAgICAgIHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICB0aGlzLnBpbmdSaWdodCA9IHRoaXMudHJhbnNmb3JtWCA+IDA7XHJcbiAgICAgICAgdGhpcy5waW5nTGVmdCA9IHRoaXMudHJhbnNmb3JtWCArIHRoaXMud3JhcHBlcldpZHRoIDwgdGhpcy5zY3JvbGxMaXN0V2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5waW5nTGVmdCA9IHRoaXMudHJhbnNmb3JtWCA8IDA7XHJcbiAgICAgICAgdGhpcy5waW5nUmlnaHQgPSAtdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcclxuICAgICAgICBwb3NpdGlvbiA9ICdsZWZ0JztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdW5pdCA9ICdoZWlnaHQnO1xyXG4gICAgICBiYXNpY1NpemUgPSB0aGlzLndyYXBwZXJIZWlnaHQ7XHJcbiAgICAgIHRhYkNvbnRlbnRTaXplID0gdGhpcy5zY3JvbGxMaXN0SGVpZ2h0IC0gKHRoaXMuaGlkZGVuSXRlbXMubGVuZ3RoID8gdGhpcy5vcGVyYXRpb25IZWlnaHQgOiAwKTtcclxuICAgICAgYWRkU2l6ZSA9IHRoaXMuYWRkQnV0dG9uSGVpZ2h0O1xyXG4gICAgICBwb3NpdGlvbiA9ICd0b3AnO1xyXG4gICAgICB0cmFuc2Zvcm1TaXplID0gLXRoaXMudHJhbnNmb3JtWTtcclxuICAgICAgdGhpcy5waW5nVG9wID0gdGhpcy50cmFuc2Zvcm1ZIDwgMDtcclxuICAgICAgdGhpcy5waW5nQm90dG9tID0gLXRoaXMudHJhbnNmb3JtWSArIHRoaXMud3JhcHBlckhlaWdodCA8IHRoaXMuc2Nyb2xsTGlzdEhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWVyZ2VkQmFzaWNTaXplID0gYmFzaWNTaXplO1xyXG4gICAgaWYgKHRhYkNvbnRlbnRTaXplICsgYWRkU2l6ZSA+IGJhc2ljU2l6ZSkge1xyXG4gICAgICBtZXJnZWRCYXNpY1NpemUgPSBiYXNpY1NpemUgLSBhZGRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFicy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5oaWRkZW5JdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxlbiA9IHRhYnMubGVuZ3RoO1xyXG4gICAgbGV0IGVuZEluZGV4ID0gbGVuO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQoaSk7XHJcbiAgICAgIGNvbnN0IHNpemUgPSB0YWJzW2ldIHx8IERFRkFVTFRfU0laRTtcclxuICAgICAgaWYgKG9mZnNldCArIHNpemVbdW5pdF0gPiB0cmFuc2Zvcm1TaXplICsgbWVyZ2VkQmFzaWNTaXplKSB7XHJcbiAgICAgICAgZW5kSW5kZXggPSBpIC0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGkgLT0gMSkge1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBnZXRPZmZzZXQoaSk7XHJcbiAgICAgIGlmIChvZmZzZXQgPCB0cmFuc2Zvcm1TaXplKSB7XHJcbiAgICAgICAgc3RhcnRJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnRIaWRkZW5UYWJzID0gdGFicy5zbGljZSgwLCBzdGFydEluZGV4KTtcclxuICAgIGNvbnN0IGVuZEhpZGRlblRhYnMgPSB0YWJzLnNsaWNlKGVuZEluZGV4ICsgMSk7XHJcbiAgICB0aGlzLmhpZGRlbkl0ZW1zID0gWy4uLnN0YXJ0SGlkZGVuVGFicywgLi4uZW5kSGlkZGVuVGFic107XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXIgJiYgdGhpcy5kaXIudmFsdWUgPT09ICdydGwnID8gJ3J0bCcgOiAnbHRyJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGFiRm9jdXMoX3RhYkluZGV4OiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgcG9zaXRpb24gfSA9IGNoYW5nZXM7XHJcbiAgICAvLyBUaGUgZmlyc3Qgd2lsbCBiZSBhbGlnbmluZyBpbiBuZ0FmdGVyVmlld0luaXRcclxuICAgIGlmIChwb3NpdGlvbiAmJiAhcG9zaXRpb24uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XHJcbiAgICAgIHRoaXMubG9ja0FuaW1hdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=