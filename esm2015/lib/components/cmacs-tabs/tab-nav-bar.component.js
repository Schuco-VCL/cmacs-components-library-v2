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
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", extraTemplate: "extraTemplate", cmacsType: "cmacsType", selectedIndex: "selectedIndex" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["cmacsTabsNav"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 9, vars: 24, consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["cmacsTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["cmacs-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["cmacs-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["cmacs-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]], template: function CmacsTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
        <button *ngIf="showAddButton" cmacs-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRhYnMvdGFiLW5hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEgsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUVmLFlBQVksRUFDWixLQUFLLEVBS0wsUUFBUSxFQUNSLE1BQU0sRUFJTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLM0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBMkI1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O2tCQUFmLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRixhQUFhO2tCQURoQixLQUFLO1lBbUJrQyxVQUFVO2tCQUFqRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDRSxVQUFVO2tCQUFqRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDc0IsWUFBWTtrQkFBdkUsU0FBUzttQkFBQyw2QkFBNkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDQSxTQUFTO2tCQUFsRSxTQUFTO21CQUFDLDBCQUEwQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNELE1BQU07a0JBQTVELFNBQVM7bUJBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ2EsS0FBSztrQkFBdEUsZUFBZTttQkFBQyx3QkFBd0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c0tleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIGhhc01vZGlmaWVyS2V5LCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgVmlld3BvcnRSdWxlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIGFzYXBTY2hlZHVsZXIsIG1lcmdlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IE56UmVzaXplT2JzZXJ2ZXIgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvcmVzaXplLW9ic2VydmVycyc7XHJcbmltcG9ydCB7IE51bWJlcklucHV0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgTnpUYWJQb3NpdGlvbk1vZGUsIE56VGFiU2Nyb2xsRXZlbnQsIE56VGFiU2Nyb2xsTGlzdE9mZnNldEV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21hY3NUYWJBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3RhYi1hZGQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLW5hdi1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENtYWNzVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LW9wZXJhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1RhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgUkVTSVpFX1NDSEVEVUxFUiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnID8gYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgOiBhc2FwU2NoZWR1bGVyO1xyXG5jb25zdCBDU1NfVFJBTlNGT1JNX1RJTUUgPSAxNTA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYnMtbmF2JyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFic05hdicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImFudC10YWJzLW5hdi13cmFwXCJcclxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctbGVmdF09XCJwaW5nTGVmdFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGFicy1uYXYtd3JhcC1waW5nLXJpZ2h0XT1cInBpbmdSaWdodFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtdGFicy1uYXYtd3JhcC1waW5nLXRvcF09XCJwaW5nVG9wXCJcclxuICAgICAgW2NsYXNzLmFudC10YWJzLW5hdi13cmFwLXBpbmctYm90dG9tXT1cInBpbmdCb3R0b21cIlxyXG4gICAgICAjbmF2V2FycFxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYnMtbmF2LWxpc3RcIlxyXG4gICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtaWNvbl09XCJpc0NtYWNzVHlwZSgnaWNvbicpXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtZW1zXT1cImlzQ21hY3NUeXBlKCdlbXMnKVwiXHJcbiAgICAgICAgIFtjbGFzcy5jbWFjcy10YWJzLXNjaGVkdWxlXT1cImlzQ21hY3NUeXBlKCdzY2hlZHVsZScpXCJcclxuICAgICAgICAgW2NsYXNzLmNtYWNzLXRhYnMtcHJvcGVydHldPVwiaXNDbWFjc1R5cGUoJ3Byb3BlcnR5JylcIlxyXG4gICAgICAgI25hdkxpc3QgY21hY3NUYWJTY3JvbGxMaXN0IChvZmZzZXRDaGFuZ2UpPVwib25PZmZzZXRDaGFuZ2UoJGV2ZW50KVwiICh0YWJTY3JvbGwpPVwidGFiU2Nyb2xsLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwic2hvd0FkZEJ1dHRvblwiIGNtYWNzLXRhYi1hZGQtYnV0dG9uIFthZGRJY29uXT1cImFkZEljb25cIiAoY2xpY2spPVwiYWRkQ2xpY2tlZC5lbWl0KClcIj48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNtYWNzLXRhYnMtaW5rLWJhciBbaGlkZGVuXT1cImhpZGVCYXJcIiBbcG9zaXRpb25dPVwicG9zaXRpb25cIiBbYW5pbWF0ZWRdPVwiaW5rQmFyQW5pbWF0ZWRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxjbWFjcy10YWItbmF2LW9wZXJhdGlvblxyXG4gICAgICAoYWRkQ2xpY2tlZCk9XCJhZGRDbGlja2VkLmVtaXQoKVwiXHJcbiAgICAgIChzZWxlY3RlZCk9XCJvblNlbGVjdGVkRnJvbU1lbnUoJGV2ZW50KVwiXHJcbiAgICAgIFthZGRJY29uXT1cImFkZEljb25cIlxyXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcclxuICAgICAgW2l0ZW1zXT1cImhpZGRlbkl0ZW1zXCJcclxuICAgID48L2NtYWNzLXRhYi1uYXYtb3BlcmF0aW9uPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLWV4dHJhLWNvbnRlbnRcIiAqbmdJZj1cImV4dHJhVGVtcGxhdGVcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAndGFibGlzdCcsXHJcbiAgICBjbGFzczogJ2FudC10YWJzLW5hdicsXHJcbiAgICAnKGtleWRvd24pJzogJ2hhbmRsZUtleWRvd24oJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RhYk5hdkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaW5kZXhGb2N1c2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RGb2N1c2VkSW5kZXg6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFkZENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRhYlNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJTY3JvbGxFdmVudD4oKTtcclxuXHJcbiAgQElucHV0KCkgcG9zaXRpb246IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xyXG4gIEBJbnB1dCgpIGFkZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWRlQmFyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcclxuICBASW5wdXQoKSBpbmtCYXJBbmltYXRlZCA9IHRydWU7XHJcbiAgQElucHV0KCkgZXh0cmFUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGNtYWNzVHlwZSA9ICdpY29uJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpO1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLmtleU1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbSh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQ21hY3NUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IHRoaXMuY21hY3NUeXBlO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnbmF2V2FycCcsIHsgc3RhdGljOiB0cnVlIH0pIG5hdldhcnBSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBAVmlld0NoaWxkKCduYXZMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgbmF2TGlzdFJlZiE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJOYXZPcGVyYXRpb25Db21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIG9wZXJhdGlvblJlZiE6IENtYWNzVGFiTmF2T3BlcmF0aW9uQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJBZGRCdXR0b25Db21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBhZGRCdG5SZWYhOiBDbWFjc1RhYkFkZEJ1dHRvbkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKENtYWNzVGFic0lua0JhckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgaW5rQmFyITogQ21hY3NUYWJzSW5rQmFyRGlyZWN0aXZlO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGl0ZW1zITogUXVlcnlMaXN0PENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIC8qKiBUcmFja3Mgd2hpY2ggZWxlbWVudCBoYXMgZm9jdXM7IHVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gKi9cclxuICBnZXQgZm9jdXNJbmRleCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMua2V5TWFuYWdlciA/IHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXghIDogMDtcclxuICB9XHJcblxyXG4gIC8qKiBXaGVuIHRoZSBmb2N1cyBpbmRleCBpcyBzZXQsIHdlIG11c3QgbWFudWFsbHkgc2VuZCBmb2N1cyB0byB0aGUgY29ycmVjdCBsYWJlbCAqL1xyXG4gIHNldCBmb2N1c0luZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkSW5kZXgodmFsdWUpIHx8IHRoaXMuZm9jdXNJbmRleCA9PT0gdmFsdWUgfHwgIXRoaXMua2V5TWFuYWdlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dBZGRCdXR0b24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPT09IDAgJiYgdGhpcy5hZGRhYmxlO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNsYXRlOiBudWxsIHwgc3RyaW5nID0gbnVsbDtcclxuICB0cmFuc2Zvcm1YID0gMDtcclxuICB0cmFuc2Zvcm1ZID0gMDtcclxuICBwaW5nTGVmdCA9IGZhbHNlO1xyXG4gIHBpbmdSaWdodCA9IGZhbHNlO1xyXG4gIHBpbmdUb3AgPSBmYWxzZTtcclxuICBwaW5nQm90dG9tID0gZmFsc2U7XHJcbiAgaGlkZGVuSXRlbXM6IENtYWNzVGFiTmF2SXRlbURpcmVjdGl2ZVtdID0gW107XHJcblxyXG4gIHByaXZhdGUga2V5TWFuYWdlciE6IEZvY3VzS2V5TWFuYWdlcjxDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmU+O1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xyXG4gIHByaXZhdGUgd3JhcHBlcldpZHRoID0gMDtcclxuICBwcml2YXRlIHdyYXBwZXJIZWlnaHQgPSAwO1xyXG4gIHByaXZhdGUgc2Nyb2xsTGlzdFdpZHRoID0gMDtcclxuICBwcml2YXRlIHNjcm9sbExpc3RIZWlnaHQgPSAwO1xyXG4gIHByaXZhdGUgb3BlcmF0aW9uV2lkdGggPSAwO1xyXG4gIHByaXZhdGUgb3BlcmF0aW9uSGVpZ2h0ID0gMDtcclxuICBwcml2YXRlIGFkZEJ1dHRvbldpZHRoID0gMDtcclxuICBwcml2YXRlIGFkZEJ1dHRvbkhlaWdodCA9IDA7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IC0xO1xyXG4gIHByaXZhdGUgY3NzVHJhbnNmb3JtVGltZVdhaXRpbmdJZCA9IC0xO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXHJcbiAgICBwcml2YXRlIG56UmVzaXplT2JzZXJ2ZXI6IE56UmVzaXplT2JzZXJ2ZXIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHlcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvZihudWxsKTtcclxuICAgIGNvbnN0IHJlc2l6ZSA9IHRoaXMudmlld3BvcnRSdWxlci5jaGFuZ2UoMTUwKTtcclxuXHJcbiAgICBjb25zdCByZWFsaWduID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgfTtcclxuICAgIHRoaXMua2V5TWFuYWdlciA9IG5ldyBGb2N1c0tleU1hbmFnZXI8Q21hY3NUYWJOYXZJdGVtRGlyZWN0aXZlPih0aGlzLml0ZW1zKVxyXG4gICAgICAud2l0aEhvcml6b250YWxPcmllbnRhdGlvbih0aGlzLmdldExheW91dERpcmVjdGlvbigpKVxyXG4gICAgICAud2l0aFdyYXAoKTtcclxuICAgIHRoaXMua2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKDApO1xyXG5cclxuICAgIHJlcUFuaW1GcmFtZShyZWFsaWduKTtcclxuXHJcbiAgICBtZXJnZSh0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdldhcnBSZWYpLCB0aGlzLm56UmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLm5hdkxpc3RSZWYpKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCksIGF1ZGl0VGltZSgxNiwgUkVTSVpFX1NDSEVEVUxFUikpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHJlYWxpZ24oKTtcclxuICAgICAgfSk7XHJcbiAgICBtZXJnZShkaXJDaGFuZ2UsIHJlc2l6ZSwgdGhpcy5pdGVtcy5jaGFuZ2VzKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4ocmVhbGlnbik7XHJcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMua2V5TWFuYWdlci5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShuZXdGb2N1c0luZGV4ID0+IHtcclxuICAgICAgdGhpcy5pbmRleEZvY3VzZWQuZW1pdChuZXdGb2N1c0luZGV4KTtcclxuICAgICAgdGhpcy5zZXRUYWJGb2N1cyhuZXdGb2N1c0luZGV4KTtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RhYih0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNzc1RyYW5zZm9ybVRpbWVXYWl0aW5nSWQpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGVkRnJvbU1lbnUodGFiOiBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy5pdGVtcy50b0FycmF5KCkuZmluZEluZGV4KGUgPT4gZSA9PT0gdGFiKTtcclxuICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5rZXlNYW5hZ2VyLnVwZGF0ZUFjdGl2ZUl0ZW0odGFiSW5kZXgpO1xyXG4gICAgICBpZiAodGhpcy5mb2N1c0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZvY3VzZWRJbmRleC5lbWl0KHRoaXMuZm9jdXNJbmRleCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RhYih0YWIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9mZnNldENoYW5nZShlOiBOelRhYlNjcm9sbExpc3RPZmZzZXRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBpZiAodGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID09PSAtMSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVggPj0gMCAmJiBlLnggPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVggPD0gdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNjcm9sbExpc3RXaWR0aCAmJiBlLnggPCAwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGUuZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gdGhpcy5jbGFtcFRyYW5zZm9ybVgodGhpcy50cmFuc2Zvcm1YICsgZS54KTtcclxuICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm1YLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPT09IC0xKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtWSA+PSAwICYmIGUueSA+IDApIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtWSA8PSB0aGlzLndyYXBwZXJIZWlnaHQgLSB0aGlzLnNjcm9sbExpc3RIZWlnaHQgJiYgZS55IDwgMCkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtWSA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1ZKHRoaXMudHJhbnNmb3JtWSArIGUueSk7XHJcbiAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKDAsIHRoaXMudHJhbnNmb3JtWSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sb2NrQW5pbWF0aW9uKCk7XHJcbiAgICB0aGlzLnNldFZpc2libGVSYW5nZSgpO1xyXG4gICAgdGhpcy5zZXRQaW5nU3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbk5hdmlnYXRpb25MaXN0ID0gdGhpcy5uYXZXYXJwUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgIGlmIChoYXNNb2RpZmllcktleShldmVudCkgfHwgIWluTmF2aWdhdGlvbkxpc3QpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIExFRlRfQVJST1c6XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XHJcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcclxuICAgICAgICB0aGlzLmxvY2tBbmltYXRpb24oKTtcclxuICAgICAgICB0aGlzLmtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgY2FzZSBTUEFDRTpcclxuICAgICAgICBpZiAodGhpcy5mb2N1c0luZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Rm9jdXNlZEluZGV4LmVtaXQodGhpcy5mb2N1c0luZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzVmFsaWRJbmRleChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuaXRlbXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGFiID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMudG9BcnJheSgpW2luZGV4XSA6IG51bGw7XHJcbiAgICByZXR1cm4gISF0YWIgJiYgIXRhYi5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2Nyb2xsVG9UYWIodGFiOiBDbWFjc1RhYk5hdkl0ZW1EaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pdGVtcy5maW5kKGUgPT4gZSA9PT0gdGFiKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XHJcblxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICBsZXQgbmV3VHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1YO1xyXG4gICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ3J0bCcpIHtcclxuICAgICAgICBjb25zdCByaWdodCA9IHRhYnNbMF0ubGVmdCArIHRhYnNbMF0ud2lkdGggLSB0YWIubGVmdCAtIHRhYi53aWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHJpZ2h0IDwgdGhpcy50cmFuc2Zvcm1YKSB7XHJcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSByaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0ICsgdGFiLndpZHRoID4gdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGgpIHtcclxuICAgICAgICAgIG5ld1RyYW5zZm9ybSA9IHJpZ2h0ICsgdGFiLndpZHRoIC0gdGhpcy53cmFwcGVyV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRhYi5sZWZ0IDwgLXRoaXMudHJhbnNmb3JtWCkge1xyXG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC10YWIubGVmdDtcclxuICAgICAgfSBlbHNlIGlmICh0YWIubGVmdCArIHRhYi53aWR0aCA+IC10aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCkge1xyXG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC0odGFiLmxlZnQgKyB0YWIud2lkdGggLSB0aGlzLndyYXBwZXJXaWR0aCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gbmV3VHJhbnNmb3JtO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybVkgPSAwO1xyXG4gICAgICB0aGlzLnNldFRyYW5zZm9ybShuZXdUcmFuc2Zvcm0sIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IG5ld1RyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtWTtcclxuXHJcbiAgICAgIGlmICh0YWIudG9wIDwgLXRoaXMudHJhbnNmb3JtWSkge1xyXG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC10YWIudG9wO1xyXG4gICAgICB9IGVsc2UgaWYgKHRhYi50b3AgKyB0YWIuaGVpZ2h0ID4gLXRoaXMudHJhbnNmb3JtWSArIHRoaXMud3JhcHBlckhlaWdodCkge1xyXG4gICAgICAgIG5ld1RyYW5zZm9ybSA9IC0odGFiLnRvcCArIHRhYi5oZWlnaHQgLSB0aGlzLndyYXBwZXJIZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtWSA9IG5ld1RyYW5zZm9ybTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1YID0gMDtcclxuICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oMCwgbmV3VHJhbnNmb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jc3NUcmFuc2Zvcm1UaW1lV2FpdGluZ0lkKTtcclxuICAgIHRoaXMuY3NzVHJhbnNmb3JtVGltZVdhaXRpbmdJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFZpc2libGVSYW5nZSgpO1xyXG4gICAgfSwgQ1NTX1RSQU5TRk9STV9USU1FKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9ja0FuaW1hdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvY2tBbmltYXRpb25UaW1lb3V0SWQgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICB0aGlzLm5hdkxpc3RSZWYubmF0aXZlRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMubG9ja0FuaW1hdGlvblRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5sb2NrQW5pbWF0aW9uVGltZW91dElkID0gLTE7XHJcbiAgICAgICAgfSwgQ1NTX1RSQU5TRk9STV9USU1FKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRyYW5zZm9ybSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5uYXZMaXN0UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFtcFRyYW5zZm9ybVgodHJhbnNmb3JtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2Nyb2xsV2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xyXG4gICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihzY3JvbGxXaWR0aCwgdHJhbnNmb3JtKSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoc2Nyb2xsV2lkdGgsIHRyYW5zZm9ybSksIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFtcFRyYW5zZm9ybVkodHJhbnNmb3JtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHRoaXMud3JhcHBlckhlaWdodCAtIHRoaXMuc2Nyb2xsTGlzdEhlaWdodCwgdHJhbnNmb3JtKSwgMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVNjcm9sbExpc3RQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRTaXplcygpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1YID0gdGhpcy5jbGFtcFRyYW5zZm9ybVgodGhpcy50cmFuc2Zvcm1YKTtcclxuICAgIHRoaXMudHJhbnNmb3JtWSA9IHRoaXMuY2xhbXBUcmFuc2Zvcm1ZKHRoaXMudHJhbnNmb3JtWSk7XHJcbiAgICB0aGlzLnNldFZpc2libGVSYW5nZSgpO1xyXG4gICAgdGhpcy5zZXRQaW5nU3RhdHVzKCk7XHJcbiAgICBpZiAodGhpcy5rZXlNYW5hZ2VyKSB7XHJcbiAgICAgIHRoaXMua2V5TWFuYWdlci51cGRhdGVBY3RpdmVJdGVtKHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXghKTtcclxuICAgICAgaWYgKHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1RhYih0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXRTaXplcygpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkQnV0dG9uV2lkdGggPSB0aGlzLmFkZEJ0blJlZiA/IHRoaXMuYWRkQnRuUmVmLmdldEVsZW1lbnRXaWR0aCgpIDogMDtcclxuICAgIHRoaXMuYWRkQnV0dG9uSGVpZ2h0ID0gdGhpcy5hZGRCdG5SZWYgPyB0aGlzLmFkZEJ0blJlZi5nZXRFbGVtZW50SGVpZ2h0KCkgOiAwO1xyXG4gICAgdGhpcy5vcGVyYXRpb25XaWR0aCA9IHRoaXMub3BlcmF0aW9uUmVmLmdldEVsZW1lbnRXaWR0aCgpO1xyXG4gICAgdGhpcy5vcGVyYXRpb25IZWlnaHQgPSB0aGlzLm9wZXJhdGlvblJlZi5nZXRFbGVtZW50SGVpZ2h0KCk7XHJcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IHRoaXMubmF2V2FycFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIHx8IDA7XHJcbiAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSB0aGlzLm5hdldhcnBSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMDtcclxuICAgIHRoaXMuc2Nyb2xsTGlzdEhlaWdodCA9IHRoaXMubmF2TGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCB8fCAwO1xyXG4gICAgdGhpcy5zY3JvbGxMaXN0V2lkdGggPSB0aGlzLm5hdkxpc3RSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCB8fCAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID8gdGhpcy5pdGVtcy50b0FycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4XSA6IG51bGw7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbGVtZW50ID0gc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA6IG51bGw7XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkSXRlbUVsZW1lbnQpIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIC5hbnQtdGFicy1uYXYtbGlzdCAtIFRhcmdldCBvZmZzZXQgcGFyZW50IGVsZW1lbnRcclxuICAgICAgICogICDilJTilIDilIAuYW50LXRhYnMtdGFiXHJcbiAgICAgICAqICAgICAgICDilJTilIDilIAuYW50LXRhYnMtdGFiLWJ0biAtIEN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnRcclxuICAgICAgICovXHJcbiAgICAgIHRoaXMuaW5rQmFyLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkSXRlbUVsZW1lbnQucGFyZW50RWxlbWVudCEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQaW5nU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGluZyA9IHtcclxuICAgICAgdG9wOiBmYWxzZSxcclxuICAgICAgcmlnaHQ6IGZhbHNlLFxyXG4gICAgICBib3R0b206IGZhbHNlLFxyXG4gICAgICBsZWZ0OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG5hdldhcnAgPSB0aGlzLm5hdldhcnBSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XHJcbiAgICAgICAgcGluZy5yaWdodCA9IHRoaXMudHJhbnNmb3JtWCA+IDA7XHJcbiAgICAgICAgcGluZy5sZWZ0ID0gdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwaW5nLmxlZnQgPSB0aGlzLnRyYW5zZm9ybVggPCAwO1xyXG4gICAgICAgIHBpbmcucmlnaHQgPSAtdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGluZy50b3AgPSB0aGlzLnRyYW5zZm9ybVkgPCAwO1xyXG4gICAgICBwaW5nLmJvdHRvbSA9IC10aGlzLnRyYW5zZm9ybVkgKyB0aGlzLndyYXBwZXJIZWlnaHQgPCB0aGlzLnNjcm9sbExpc3RIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgKE9iamVjdC5rZXlzKHBpbmcpIGFzIEFycmF5PCd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnPikuZm9yRWFjaChwb3MgPT4ge1xyXG4gICAgICBjb25zdCBjbGFzc05hbWUgPSBgYW50LXRhYnMtbmF2LXdyYXAtcGluZy0ke3Bvc31gO1xyXG4gICAgICBpZiAocGluZ1twb3NdKSB7XHJcbiAgICAgICAgbmF2V2FycC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2V2FycC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWaXNpYmxlUmFuZ2UoKTogdm9pZCB7XHJcbiAgICBsZXQgdW5pdDogJ3dpZHRoJyB8ICdoZWlnaHQnO1xyXG4gICAgbGV0IHBvc2l0aW9uOiAnbGVmdCcgfCAndG9wJyB8ICdyaWdodCc7XHJcbiAgICBsZXQgdHJhbnNmb3JtU2l6ZTogbnVtYmVyO1xyXG4gICAgbGV0IGJhc2ljU2l6ZTogbnVtYmVyO1xyXG4gICAgbGV0IHRhYkNvbnRlbnRTaXplOiBudW1iZXI7XHJcbiAgICBsZXQgYWRkU2l6ZTogbnVtYmVyO1xyXG4gICAgY29uc3QgdGFicyA9IHRoaXMuaXRlbXMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgREVGQVVMVF9TSVpFID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAwIH07XHJcblxyXG4gICAgY29uc3QgZ2V0T2Zmc2V0ID0gKGluZGV4OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgICBsZXQgb2Zmc2V0OiBudW1iZXI7XHJcbiAgICAgIGNvbnN0IHNpemUgPSB0YWJzW2luZGV4XSB8fCBERUZBVUxUX1NJWkU7XHJcbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIG9mZnNldCA9IHRhYnNbMF0ubGVmdCArIHRhYnNbMF0ud2lkdGggLSB0YWJzW2luZGV4XS5sZWZ0IC0gdGFic1tpbmRleF0ud2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2Zmc2V0ID0gc2l6ZVtwb3NpdGlvbl07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9mZnNldDtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICB1bml0ID0gJ3dpZHRoJztcclxuICAgICAgYmFzaWNTaXplID0gdGhpcy53cmFwcGVyV2lkdGg7XHJcbiAgICAgIHRhYkNvbnRlbnRTaXplID0gdGhpcy5zY3JvbGxMaXN0V2lkdGggLSAodGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPyB0aGlzLm9wZXJhdGlvbldpZHRoIDogMCk7XHJcbiAgICAgIGFkZFNpemUgPSB0aGlzLmFkZEJ1dHRvbldpZHRoO1xyXG4gICAgICB0cmFuc2Zvcm1TaXplID0gTWF0aC5hYnModGhpcy50cmFuc2Zvcm1YKTtcclxuICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSAncmlnaHQnO1xyXG4gICAgICAgIHRoaXMucGluZ1JpZ2h0ID0gdGhpcy50cmFuc2Zvcm1YID4gMDtcclxuICAgICAgICB0aGlzLnBpbmdMZWZ0ID0gdGhpcy50cmFuc2Zvcm1YICsgdGhpcy53cmFwcGVyV2lkdGggPCB0aGlzLnNjcm9sbExpc3RXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBpbmdMZWZ0ID0gdGhpcy50cmFuc2Zvcm1YIDwgMDtcclxuICAgICAgICB0aGlzLnBpbmdSaWdodCA9IC10aGlzLnRyYW5zZm9ybVggKyB0aGlzLndyYXBwZXJXaWR0aCA8IHRoaXMuc2Nyb2xsTGlzdFdpZHRoO1xyXG4gICAgICAgIHBvc2l0aW9uID0gJ2xlZnQnO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1bml0ID0gJ2hlaWdodCc7XHJcbiAgICAgIGJhc2ljU2l6ZSA9IHRoaXMud3JhcHBlckhlaWdodDtcclxuICAgICAgdGFiQ29udGVudFNpemUgPSB0aGlzLnNjcm9sbExpc3RIZWlnaHQgLSAodGhpcy5oaWRkZW5JdGVtcy5sZW5ndGggPyB0aGlzLm9wZXJhdGlvbkhlaWdodCA6IDApO1xyXG4gICAgICBhZGRTaXplID0gdGhpcy5hZGRCdXR0b25IZWlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgICAgIHRyYW5zZm9ybVNpemUgPSAtdGhpcy50cmFuc2Zvcm1ZO1xyXG4gICAgICB0aGlzLnBpbmdUb3AgPSB0aGlzLnRyYW5zZm9ybVkgPCAwO1xyXG4gICAgICB0aGlzLnBpbmdCb3R0b20gPSAtdGhpcy50cmFuc2Zvcm1ZICsgdGhpcy53cmFwcGVySGVpZ2h0IDwgdGhpcy5zY3JvbGxMaXN0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBtZXJnZWRCYXNpY1NpemUgPSBiYXNpY1NpemU7XHJcbiAgICBpZiAodGFiQ29udGVudFNpemUgKyBhZGRTaXplID4gYmFzaWNTaXplKSB7XHJcbiAgICAgIG1lcmdlZEJhc2ljU2l6ZSA9IGJhc2ljU2l6ZSAtIGFkZFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0YWJzLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmhpZGRlbkl0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGVuID0gdGFicy5sZW5ndGg7XHJcbiAgICBsZXQgZW5kSW5kZXggPSBsZW47XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChpKTtcclxuICAgICAgY29uc3Qgc2l6ZSA9IHRhYnNbaV0gfHwgREVGQVVMVF9TSVpFO1xyXG4gICAgICBpZiAob2Zmc2V0ICsgc2l6ZVt1bml0XSA+IHRyYW5zZm9ybVNpemUgKyBtZXJnZWRCYXNpY1NpemUpIHtcclxuICAgICAgICBlbmRJbmRleCA9IGkgLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IGdldE9mZnNldChpKTtcclxuICAgICAgaWYgKG9mZnNldCA8IHRyYW5zZm9ybVNpemUpIHtcclxuICAgICAgICBzdGFydEluZGV4ID0gaSArIDE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEhpZGRlblRhYnMgPSB0YWJzLnNsaWNlKDAsIHN0YXJ0SW5kZXgpO1xyXG4gICAgY29uc3QgZW5kSGlkZGVuVGFicyA9IHRhYnMuc2xpY2UoZW5kSW5kZXggKyAxKTtcclxuICAgIHRoaXMuaGlkZGVuSXRlbXMgPSBbLi4uc3RhcnRIaWRkZW5UYWJzLCAuLi5lbmRIaWRkZW5UYWJzXTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRMYXlvdXREaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUYWJGb2N1cyhfdGFiSW5kZXg6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBwb3NpdGlvbiB9ID0gY2hhbmdlcztcclxuICAgIC8vIFRoZSBmaXJzdCB3aWxsIGJlIGFsaWduaW5nIGluIG5nQWZ0ZXJWaWV3SW5pdFxyXG4gICAgaWYgKHBvc2l0aW9uICYmICFwb3NpdGlvbi5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcclxuICAgICAgdGhpcy5sb2NrQW5pbWF0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2Nyb2xsTGlzdFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==