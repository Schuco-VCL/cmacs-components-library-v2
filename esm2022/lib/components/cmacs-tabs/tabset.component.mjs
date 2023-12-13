import { __decorate } from "tslib";
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, Input, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { merge, of, Subject, Subscription } from 'rxjs';
import { delay, filter, first, startWith, takeUntil } from 'rxjs/operators';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { PREFIX } from 'ng-zorro-antd/core/logger';
import { InputBoolean, wrapIntoObservable } from 'ng-zorro-antd/core/util';
import { NzTabChangeEvent } from './interfaces';
import { CmacsTabNavBarComponent } from './tab-nav-bar.component';
import { CmacsTabComponent, NZ_TAB_SET } from './tab.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/outlet";
import * as i6 from "./tab-nav-bar.component";
import * as i7 from "./tab-nav-item.directive";
import * as i8 from "./tab-close-button.component";
import * as i9 from "./tab-body.component";
function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(tab_r3.label);
} }
function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const i_r4 = i0.ɵɵnextContext().index; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onClose(i_r4, $event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("closeIcon", tab_r3.closeIcon);
} }
const _c0 = function () { return { visible: true }; };
function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template_div_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const tab_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r12 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r12.clickNavItem(tab_r3, i_r4, $event)); })("contextmenu", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const tab_r3 = restoredCtx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.contextmenuNavItem(tab_r3, $event)); });
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    i0.ɵɵtemplate(3, CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.tabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.tabBarGutter : null, "px");
    i0.ɵɵclassProp("ant-tabs-tab-active", ctx_r2.cmacsSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", tab_r3.disabled)("tab", tab_r3)("active", ctx_r2.cmacsSelectedIndex === i_r4);
    i0.ɵɵattribute("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.disabled)("aria-selected", ctx_r2.cmacsSelectedIndex === i_r4 && !ctx_r2.hideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", i0.ɵɵpureFunction0(18, _c0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", tab_r3.closable && ctx_r2.closable && !tab_r3.disabled);
} }
function CmacsTabSetComponent_cmacs_tabs_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "cmacs-tabs-nav", 4);
    i0.ɵɵlistener("tabScroll", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_tabScroll_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.tabListScroll.emit($event)); })("selectFocusedIndex", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_selectFocusedIndex_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.setSelectedIndex($event)); })("addClicked", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_addClicked_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onAdd()); });
    i0.ɵɵtemplate(1, CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template, 4, 19, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r0.tabBarStyle)("selectedIndex", ctx_r0.cmacsSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.addIcon)("cmacsType", ctx_r0.cmacsType)("hideBar", ctx_r0.hideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.tabBarExtraContent);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.tabs);
} }
function CmacsTabSetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 11);
} if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r1.cmacsSelectedIndex == i_r20 && !ctx_r1.hideAll)("content", tab_r19.content)("forceRender", tab_r19.forceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
} }
const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;
export class CmacsTabSetComponent {
    get cmacsSelectedIndex() {
        return this.selectedIndex;
    }
    set cmacsSelectedIndex(value) {
        this.indexToSelect = coerceNumberProperty(value, null);
    }
    get position() {
        return ['top', 'bottom'].indexOf(this.tabPosition) === -1 ? 'vertical' : 'horizontal';
    }
    get addable() {
        return this.type === 'editable-card' && !this.hideAdd;
    }
    get closable() {
        return this.type === 'editable-card';
    }
    get line() {
        return this.type === 'line';
    }
    get inkBarAnimated() {
        return this.line && (typeof this.animated === 'boolean' ? this.animated : this.animated.inkBar);
    }
    get tabPaneAnimated() {
        return (this.position === 'horizontal' && this.line && (typeof this.animated === 'boolean' ? this.animated : this.animated.tabPane));
    }
    constructor(nzConfigService, cdr, directionality, router) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this.router = router;
        this.tabPosition = 'top';
        this.canDeactivate = null;
        this.addIcon = 'plus';
        this.tabBarStyle = null;
        this.type = 'line';
        this.size = 'default';
        this.animated = true;
        this.tabBarGutter = undefined;
        this.hideAdd = false;
        this.centered = false;
        this.hideAll = false;
        this.linkRouter = false;
        this.linkExact = true;
        this.cmacsType = 'text';
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
        this.tabListScroll = new EventEmitter();
        this.close = new EventEmitter();
        this.add = new EventEmitter();
        // Pick up only direct descendants under ivy rendering engine
        // We filter out only the tabs that belong to this tab set in `tabs`.
        this.allTabs = new QueryList();
        // All the direct tabs for this tab set
        this.tabs = new QueryList();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.indexToSelect = 0;
        this.selectedIndex = null;
        this.tabLabelSubscription = Subscription.EMPTY;
        this.tabsSubscription = Subscription.EMPTY;
        this.canDeactivateSubscription = Subscription.EMPTY;
        this.tabSetId = nextId++;
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabs.destroy();
        this.tabLabelSubscription.unsubscribe();
        this.tabsSubscription.unsubscribe();
        this.canDeactivateSubscription.unsubscribe();
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.setUpRouter();
        });
        this.subscribeToTabLabels();
        this.subscribeToAllTabChanges();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this.selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `selectedIndexChange` event.
                        this.indexToSelect = this.selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this.selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex == null;
            if (!isFirstRun) {
                this.selectChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                if (!isFirstRun) {
                    this.selectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this.selectedIndex;
            }
        });
        if (this.selectedIndex !== indexToSelect) {
            this.selectedIndex = indexToSelect;
            this.cdr.markForCheck();
        }
    }
    onClose(index, e) {
        e.preventDefault();
        e.stopPropagation();
        this.close.emit({ index });
    }
    onAdd() {
        this.add.emit();
    }
    clampTabIndex(index) {
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
            this.tabs.forEach((tab, i) => {
                if (i !== index) {
                    tab.deselect.emit();
                }
            });
            event.tab.select.emit();
        }
        return event;
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = merge(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    subscribeToAllTabChanges() {
        this.allTabs.changes.pipe(startWith(this.allTabs)).subscribe((tabs) => {
            this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
            this.tabs.notifyOnChanges();
        });
    }
    canDeactivateFun(pre, next) {
        if (typeof this.canDeactivate === 'function') {
            const observable = wrapIntoObservable(this.canDeactivate(pre, next));
            return observable.pipe(first(), takeUntil(this.destroy$));
        }
        else {
            return of(true);
        }
    }
    clickNavItem(tab, index, e) {
        if (!tab.disabled) {
            // ignore canDeactivate
            tab.cmacsClick.emit();
            if (!this.isRouterLinkClickEvent(index, e)) {
                this.setSelectedIndex(index);
            }
        }
    }
    isRouterLinkClickEvent(index, event) {
        const target = event.target;
        if (this.linkRouter) {
            return !!this.tabs.toArray()[index]?.linkDirective?.elementRef.nativeElement.contains(target);
        }
        else {
            return false;
        }
    }
    contextmenuNavItem(tab, e) {
        if (!tab.disabled) {
            // ignore canDeactivate
            tab.cmacsContextmenu.emit(e);
        }
    }
    setSelectedIndex(index) {
        this.canDeactivateSubscription.unsubscribe();
        this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
            if (can) {
                this.cmacsSelectedIndex = index;
                this.tabNavBarRef.focusIndex = index;
                this.cdr.markForCheck();
            }
        });
    }
    getTabIndex(tab, index) {
        if (tab.disabled) {
            return null;
        }
        return this.selectedIndex === index ? 0 : -1;
    }
    getTabContentId(i) {
        return `nz-tabs-${this.tabSetId}-tab-${i}`;
    }
    setUpRouter() {
        if (this.linkRouter) {
            if (!this.router) {
                throw new Error(`${PREFIX} you should import 'RouterModule' if you want to use 'linkRouter'!`);
            }
            this.router.events
                .pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd), startWith(true), delay(0))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
            }
            this.hideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.tabs.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.linkExact) : false);
    }
    getTabContentMarginValue() {
        return -(this.cmacsSelectedIndex || 0) * 100;
    }
    getTabContentMarginLeft() {
        if (this.tabPaneAnimated) {
            if (this.dir !== 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
    getTabContentMarginRight() {
        if (this.tabPaneAnimated) {
            if (this.dir === 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
    static { this.ɵfac = function CmacsTabSetComponent_Factory(t) { return new (t || CmacsTabSetComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.Router, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTabSetComponent, selectors: [["cmacs-tabset"]], contentQueries: function CmacsTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsTabComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allTabs = _t);
        } }, viewQuery: function CmacsTabSetComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CmacsTabNavBarComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
        } }, hostAttrs: [1, "ant-tabs"], hostVars: 22, hostBindings: function CmacsTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tabs-card", ctx.type === "card")("ant-tabs-editable", ctx.type === "editable-card")("ant-tabs-centered", ctx.centered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.tabPosition === "top")("ant-tabs-bottom", ctx.tabPosition === "bottom")("ant-tabs-left", ctx.tabPosition === "left")("ant-tabs-right", ctx.tabPosition === "right")("ant-tabs-default", ctx.size === "default")("ant-tabs-small", ctx.size === "small")("ant-tabs-large", ctx.size === "large");
        } }, inputs: { cmacsSelectedIndex: "cmacsSelectedIndex", tabPosition: "tabPosition", tabBarExtraContent: "tabBarExtraContent", canDeactivate: "canDeactivate", addIcon: "addIcon", tabBarStyle: "tabBarStyle", type: "type", size: "size", animated: "animated", tabBarGutter: "tabBarGutter", hideAdd: "hideAdd", centered: "centered", hideAll: "hideAll", linkRouter: "linkRouter", linkExact: "linkExact", cmacsType: "cmacsType" }, outputs: { selectChange: "selectChange", selectedIndexChange: "selectedIndexChange", tabListScroll: "tabListScroll", close: "close", add: "add" }, exportAs: ["cmacsTabset"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NZ_TAB_SET,
                    useExisting: CmacsTabSetComponent
                }
            ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "cmacsTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["role", "button", "aria-label", "close icon", "cmacs-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["role", "button", "aria-label", "close icon", "cmacs-tab-close-button", "", 3, "closeIcon", "click"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function CmacsTabSetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CmacsTabSetComponent_cmacs_tabs_nav_0_Template, 2, 10, "cmacs-tabs-nav", 0);
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, CmacsTabSetComponent_div_3_Template, 1, 4, "div", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.tabs.length);
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
            i0.ɵɵclassProp("ant-tabs-content-top", ctx.tabPosition === "top")("ant-tabs-content-bottom", ctx.tabPosition === "bottom")("ant-tabs-content-left", ctx.tabPosition === "left")("ant-tabs-content-right", ctx.tabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i4.NgStyle, i5.NzStringTemplateOutletDirective, i6.CmacsTabNavBarComponent, i7.CmacsTabNavItemDirective, i8.CmacsTabCloseButtonComponent, i9.CmacsTabBodyComponent], encapsulation: 2 }); }
}
__decorate([
    WithConfig()
], CmacsTabSetComponent.prototype, "type", void 0);
__decorate([
    WithConfig()
], CmacsTabSetComponent.prototype, "size", void 0);
__decorate([
    WithConfig()
], CmacsTabSetComponent.prototype, "animated", void 0);
__decorate([
    WithConfig()
], CmacsTabSetComponent.prototype, "tabBarGutter", void 0);
__decorate([
    InputBoolean()
], CmacsTabSetComponent.prototype, "hideAdd", void 0);
__decorate([
    InputBoolean()
], CmacsTabSetComponent.prototype, "centered", void 0);
__decorate([
    InputBoolean()
], CmacsTabSetComponent.prototype, "hideAll", void 0);
__decorate([
    InputBoolean()
], CmacsTabSetComponent.prototype, "linkRouter", void 0);
__decorate([
    InputBoolean()
], CmacsTabSetComponent.prototype, "linkExact", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTabSetComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tabset',
                exportAs: 'cmacsTabset',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.Default,
                providers: [
                    {
                        provide: NZ_TAB_SET,
                        useExisting: CmacsTabSetComponent
                    }
                ],
                template: `
    <cmacs-tabs-nav
      *ngIf="tabs.length"
      [ngStyle]="tabBarStyle"
      [selectedIndex]="cmacsSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="addIcon"
      [cmacsType]="cmacsType"
      [hideBar]="hideAll"
      [position]="position"
      [extraTemplate]="tabBarExtraContent"
      (tabScroll)="tabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? tabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? tabBarGutter : null"
        [class.ant-tabs-tab-active]="cmacsSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.disabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <div
          role="tab"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.disabled"
          [attr.aria-selected]="cmacsSelectedIndex === i && !hideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.disabled"
          [tab]="tab"
          [active]="cmacsSelectedIndex === i"
          class="ant-tabs-tab-btn"
          cmacsTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button role="button" aria-label="close icon"
            cmacs-tab-close-button
            *ngIf="tab.closable && closable && !tab.disabled"
            [closeIcon]="tab.closeIcon"
            (click)="onClose(i, $event)"
          ></button>
        </div>
      </div>
    </cmacs-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="tabPosition === 'top'"
        [class.ant-tabs-content-bottom]="tabPosition === 'bottom'"
        [class.ant-tabs-content-left]="tabPosition === 'left'"
        [class.ant-tabs-content-right]="tabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [style.margin-left]="getTabContentMarginLeft()"
        [style.margin-right]="getTabContentMarginRight()"
      >
        <div
          cmacs-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="cmacsSelectedIndex == i && !hideAll"
          [content]="tab.content"
          [forceRender]="tab.forceRender"
          [tabPaneAnimated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-tabs',
                    '[class.ant-tabs-card]': `type === 'card'`,
                    '[class.ant-tabs-editable]': `type === 'editable-card'`,
                    '[class.ant-tabs-centered]': `centered`,
                    '[class.ant-tabs-rtl]': `dir === 'rtl'`,
                    '[class.ant-tabs-top]': `tabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `tabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `tabPosition === 'left'`,
                    '[class.ant-tabs-right]': `tabPosition === 'right'`,
                    '[class.ant-tabs-default]': `size === 'default'`,
                    '[class.ant-tabs-small]': `size === 'small'`,
                    '[class.ant-tabs-large]': `size === 'large'`
                }
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.Router, decorators: [{
                type: Optional
            }] }]; }, { cmacsSelectedIndex: [{
            type: Input
        }], tabPosition: [{
            type: Input
        }], tabBarExtraContent: [{
            type: Input
        }], canDeactivate: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], tabBarStyle: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }], animated: [{
            type: Input
        }], tabBarGutter: [{
            type: Input
        }], hideAdd: [{
            type: Input
        }], centered: [{
            type: Input
        }], hideAll: [{
            type: Input
        }], linkRouter: [{
            type: Input
        }], linkExact: [{
            type: Input
        }], cmacsType: [{
            type: Input
        }], selectChange: [{
            type: Output
        }], selectedIndexChange: [{
            type: Output
        }], tabListScroll: [{
            type: Output
        }], close: [{
            type: Output
        }], add: [{
            type: Output
        }], allTabs: [{
            type: ContentChildren,
            args: [CmacsTabComponent, { descendants: true }]
        }], tabNavBarRef: [{
            type: ViewChild,
            args: [CmacsTabNavBarComponent, { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTdELE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBc0IsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzNFLE9BQU8sRUFFTCxnQkFBZ0IsRUFNakIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7SUF5RHRELDZCQUE4RTtJQUFBLFlBQWU7SUFB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Q21CLE9BQU87a0JBQS9CLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUVhLFlBQVk7a0JBQTlCLE1BQU07WUFDWSxtQkFBbUI7a0JBQXJDLE1BQU07WUFDWSxhQUFhO2tCQUEvQixNQUFNO1lBQ1ksS0FBSztrQkFBdkIsTUFBTTtZQUNZLEdBQUc7a0JBQXJCLE1BQU07WUE4Qm9ELE9BQU87a0JBQWpFLGVBQWU7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBQ0YsWUFBWTtrQkFBbEUsU0FBUzttQkFBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VOdW1iZXJQcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBtZXJnZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgZmlsdGVyLCBmaXJzdCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IFBSRUZJWCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0LCBOelNhZmVBbnksIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIHdyYXBJbnRvT2JzZXJ2YWJsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuZXhwb3J0IHR5cGUgQ21hY3NUYWJUeXBlID0gJ3RleHQnIHwgJ2ljb24nIHwgJ2VtcycgfCAnc2NoZWR1bGUnIHwgJ3Byb3BlcnR5JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTnpBbmltYXRlZEludGVyZmFjZSxcclxuICBOelRhYkNoYW5nZUV2ZW50LFxyXG4gIE56VGFiUG9zaXRpb24sXHJcbiAgTnpUYWJQb3NpdGlvbk1vZGUsXHJcbiAgTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuLFxyXG4gIE56VGFiU2Nyb2xsRXZlbnQsXHJcbiAgTnpUYWJUeXBlXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgQ21hY3NUYWJOYXZCYXJDb21wb25lbnQgfSBmcm9tICcuL3RhYi1uYXYtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENtYWNzVGFiQ29tcG9uZW50LCBOWl9UQUJfU0VUIH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAndGFicyc7XHJcblxyXG5sZXQgbmV4dElkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGFic2V0JyxcclxuICBleHBvcnRBczogJ2NtYWNzVGFic2V0JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTlpfVEFCX1NFVCxcclxuICAgICAgdXNlRXhpc3Rpbmc6IENtYWNzVGFiU2V0Q29tcG9uZW50XHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGNtYWNzLXRhYnMtbmF2XHJcbiAgICAgICpuZ0lmPVwidGFicy5sZW5ndGhcIlxyXG4gICAgICBbbmdTdHlsZV09XCJ0YWJCYXJTdHlsZVwiXHJcbiAgICAgIFtzZWxlY3RlZEluZGV4XT1cImNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwXCJcclxuICAgICAgW2lua0JhckFuaW1hdGVkXT1cImlua0JhckFuaW1hdGVkXCJcclxuICAgICAgW2FkZGFibGVdPVwiYWRkYWJsZVwiXHJcbiAgICAgIFthZGRJY29uXT1cImFkZEljb25cIlxyXG4gICAgICBbY21hY3NUeXBlXT1cImNtYWNzVHlwZVwiXHJcbiAgICAgIFtoaWRlQmFyXT1cImhpZGVBbGxcIlxyXG4gICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxyXG4gICAgICBbZXh0cmFUZW1wbGF0ZV09XCJ0YWJCYXJFeHRyYUNvbnRlbnRcIlxyXG4gICAgICAodGFiU2Nyb2xsKT1cInRhYkxpc3RTY3JvbGwuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgKHNlbGVjdEZvY3VzZWRJbmRleCk9XCJzZXRTZWxlY3RlZEluZGV4KCRldmVudClcIlxyXG4gICAgICAoYWRkQ2xpY2tlZCk9XCJvbkFkZCgpXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXRhYnMtdGFiXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cInBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcgPyB0YWJCYXJHdXR0ZXIgOiBudWxsXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luLWJvdHRvbS5weF09XCJwb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHRhYkJhckd1dHRlciA6IG51bGxcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItYWN0aXZlXT1cImNtYWNzU2VsZWN0ZWRJbmRleCA9PT0gaVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLXRhYi1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgIChjbGljayk9XCJjbGlja05hdkl0ZW0odGFiLCBpLCAkZXZlbnQpXCJcclxuICAgICAgICAoY29udGV4dG1lbnUpPVwiY29udGV4dG1lbnVOYXZJdGVtKHRhYiwgJGV2ZW50KVwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRhYiBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgW2F0dHIudGFiSW5kZXhdPVwiZ2V0VGFiSW5kZXgodGFiLCBpKVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cImNtYWNzU2VsZWN0ZWRJbmRleCA9PT0gaSAmJiAhaGlkZUFsbFwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImdldFRhYkNvbnRlbnRJZChpKVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICAgIFt0YWJdPVwidGFiXCJcclxuICAgICAgICAgIFthY3RpdmVdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09PSBpXCJcclxuICAgICAgICAgIGNsYXNzPVwiYW50LXRhYnMtdGFiLWJ0blwiXHJcbiAgICAgICAgICBjbWFjc1RhYk5hdkl0ZW1cclxuICAgICAgICAgIGNka01vbml0b3JFbGVtZW50Rm9jdXNcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGFiLmxhYmVsOyBjb250ZXh0OiB7IHZpc2libGU6IHRydWUgfVwiPnt7IHRhYi5sYWJlbCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cImNsb3NlIGljb25cIlxyXG4gICAgICAgICAgICBjbWFjcy10YWItY2xvc2UtYnV0dG9uXHJcbiAgICAgICAgICAgICpuZ0lmPVwidGFiLmNsb3NhYmxlICYmIGNsb3NhYmxlICYmICF0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbY2xvc2VJY29uXT1cInRhYi5jbG9zZUljb25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbG9zZShpLCAkZXZlbnQpXCJcclxuICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2NtYWNzLXRhYnMtbmF2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLWNvbnRlbnQtaG9sZGVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFudC10YWJzLWNvbnRlbnRcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LXRvcF09XCJ0YWJQb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LWJvdHRvbV09XCJ0YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LWxlZnRdPVwidGFiUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtcmlnaHRdPVwidGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkXT1cInRhYlBhbmVBbmltYXRlZFwiXHJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1sZWZ0XT1cImdldFRhYkNvbnRlbnRNYXJnaW5MZWZ0KClcIlxyXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHRdPVwiZ2V0VGFiQ29udGVudE1hcmdpblJpZ2h0KClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY21hY3MtdGFiLWJvZHlcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICBbYWN0aXZlXT1cImNtYWNzU2VsZWN0ZWRJbmRleCA9PSBpICYmICFoaWRlQWxsXCJcclxuICAgICAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcclxuICAgICAgICAgIFtmb3JjZVJlbmRlcl09XCJ0YWIuZm9yY2VSZW5kZXJcIlxyXG4gICAgICAgICAgW3RhYlBhbmVBbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXRhYnMnLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jYXJkXSc6IGB0eXBlID09PSAnY2FyZCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1lZGl0YWJsZV0nOiBgdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtY2VudGVyZWRdJzogYGNlbnRlcmVkYCxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtdG9wXSc6IGB0YWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ib3R0b21dJzogYHRhYlBvc2l0aW9uID09PSAnYm90dG9tJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWxlZnRdJzogYHRhYlBvc2l0aW9uID09PSAnbGVmdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1yaWdodF0nOiBgdGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1kZWZhdWx0XSc6IGBzaXplID09PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1zbWFsbF0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBjbWFjc1NlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuICBzZXQgY21hY3NTZWxlY3RlZEluZGV4KHZhbHVlOiBudWxsIHwgbnVtYmVyKSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSwgbnVsbCk7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XHJcbiAgQElucHV0KCkgdGFiQmFyRXh0cmFDb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgY2FuRGVhY3RpdmF0ZTogTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcclxuICBASW5wdXQoKSB0YWJCYXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgdHlwZTogTnpUYWJUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGFuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSB0YWJCYXJHdXR0ZXI/OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY2VudGVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZUFsbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5rUm91dGVyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmtFeGFjdCA9IHRydWU7XHJcbiAgQElucHV0KCkgY21hY3NUeXBlOiBDbWFjc1RhYlR5cGUgPSAndGV4dCc7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRhYkxpc3RTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiU2Nyb2xsRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXIgfT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYWRkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBnZXQgcG9zaXRpb24oKTogTnpUYWJQb3NpdGlvbk1vZGUge1xyXG4gICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YodGhpcy50YWJQb3NpdGlvbikgPT09IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcclxuICB9XHJcblxyXG4gIGdldCBhZGRhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnICYmICF0aGlzLmhpZGVBZGQ7XHJcbiAgfVxyXG5cclxuICBnZXQgY2xvc2FibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnZWRpdGFibGUtY2FyZCc7XHJcbiAgfVxyXG5cclxuICBnZXQgbGluZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdsaW5lJztcclxuICB9XHJcblxyXG4gIGdldCBpbmtCYXJBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmxpbmUgJiYgKHR5cGVvZiB0aGlzLmFuaW1hdGVkID09PSAnYm9vbGVhbicgPyB0aGlzLmFuaW1hdGVkIDogdGhpcy5hbmltYXRlZC5pbmtCYXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYlBhbmVBbmltYXRlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMucG9zaXRpb24gPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLmxpbmUgJiYgKHR5cGVvZiB0aGlzLmFuaW1hdGVkID09PSAnYm9vbGVhbicgPyB0aGlzLmFuaW1hdGVkIDogdGhpcy5hbmltYXRlZC50YWJQYW5lKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFBpY2sgdXAgb25seSBkaXJlY3QgZGVzY2VuZGFudHMgdW5kZXIgaXZ5IHJlbmRlcmluZyBlbmdpbmVcclxuICAvLyBXZSBmaWx0ZXIgb3V0IG9ubHkgdGhlIHRhYnMgdGhhdCBiZWxvbmcgdG8gdGhpcyB0YWIgc2V0IGluIGB0YWJzYC5cclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzVGFiQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGFsbFRhYnM6IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4gPSBuZXcgUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PigpO1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJOYXZCYXJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJOYXZCYXJSZWYhOiBDbWFjc1RhYk5hdkJhckNvbXBvbmVudDtcclxuXHJcbiAgLy8gQWxsIHRoZSBkaXJlY3QgdGFicyBmb3IgdGhpcyB0YWIgc2V0XHJcbiAgdGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+KCk7XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0YWJTZXRJZCE6IG51bWJlcjtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIHRhYnNTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBjYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge1xyXG4gICAgdGhpcy50YWJTZXRJZCA9IG5leHRJZCsrO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMudGFicy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2FuRGVhY3RpdmF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0VXBSb3V0ZXIoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmUgdG8gY2hhbmdlcyBpbiB0aGUgYW1vdW50IG9mIHRhYnMsIGluIG9yZGVyIHRvIGJlXHJcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFicy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KTtcclxuXHJcbiAgICAgIC8vIE1haW50YWluIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIHRhYiBpZiBhIG5ldyB0YWIgaXMgYWRkZWQgb3IgcmVtb3ZlZCBhbmQgdGhlcmUgaXMgbm9cclxuICAgICAgLy8gZXhwbGljaXQgY2hhbmdlIHRoYXQgc2VsZWN0cyBhIGRpZmZlcmVudCB0YWIuXHJcbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyBBc3NpZ24gYm90aCB0byB0aGUgYGluZGV4VG9TZWxlY3RgIGFuZCBgc2VsZWN0ZWRJbmRleGAgc28gd2UgZG9uJ3QgZmlyZSBhIGNoYW5nZWRcclxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXHJcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cclxuICAgICAgICAgICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5zZWxlY3RlZEluZGV4ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxyXG4gICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLnNlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuXHJcbiAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcclxuXHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5zZWxlY3RlZEluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbG9zZShpbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jbG9zZS5lbWl0KHsgaW5kZXggfSk7XHJcbiAgfVxyXG5cclxuICBvbkFkZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy50YWJzLmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLnRhYnMgJiYgdGhpcy50YWJzLmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XTtcclxuICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgdGFiLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbiA9IG1lcmdlKC4uLnRoaXMudGFicy5tYXAodGFiID0+IHRhYi5zdGF0ZUNoYW5nZXMpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIubWFya0ZvckNoZWNrKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFsbFRhYnMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmFsbFRhYnMpKS5zdWJzY3JpYmUoKHRhYnM6IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4pID0+IHtcclxuICAgICAgdGhpcy50YWJzLnJlc2V0KHRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuY2xvc2VzdFRhYlNldCA9PT0gdGhpcykpO1xyXG4gICAgICB0aGlzLnRhYnMubm90aWZ5T25DaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbkRlYWN0aXZhdGVGdW4ocHJlOiBudW1iZXIsIG5leHQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNhbkRlYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHdyYXBJbnRvT2JzZXJ2YWJsZSh0aGlzLmNhbkRlYWN0aXZhdGUocHJlLCBuZXh0KSk7XHJcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoZmlyc3QoKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBvZih0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWNrTmF2SXRlbSh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAvLyBpZ25vcmUgY2FuRGVhY3RpdmF0ZVxyXG4gICAgICB0YWIuY21hY3NDbGljay5lbWl0KCk7XHJcbiAgICAgIGlmICghdGhpcy5pc1JvdXRlckxpbmtDbGlja0V2ZW50KGluZGV4LCBlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNSb3V0ZXJMaW5rQ2xpY2tFdmVudChpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMubGlua1JvdXRlcikge1xyXG4gICAgICByZXR1cm4gISF0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XT8ubGlua0RpcmVjdGl2ZT8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb250ZXh0bWVudU5hdkl0ZW0odGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0YWIuZGlzYWJsZWQpIHtcclxuICAgICAgLy8gaWdub3JlIGNhbkRlYWN0aXZhdGVcclxuICAgICAgdGFiLmNtYWNzQ29udGV4dG1lbnUuZW1pdChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24gPSB0aGlzLmNhbkRlYWN0aXZhdGVGdW4odGhpcy5zZWxlY3RlZEluZGV4ISwgaW5kZXgpLnN1YnNjcmliZShjYW4gPT4ge1xyXG4gICAgICBpZiAoY2FuKSB7XHJcbiAgICAgICAgdGhpcy5jbWFjc1NlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLnRhYk5hdkJhclJlZi5mb2N1c0luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFiSW5kZXgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xyXG4gICAgaWYgKHRhYi5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXggPT09IGluZGV4ID8gMCA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFiQ29udGVudElkKGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYG56LXRhYnMtJHt0aGlzLnRhYlNldElkfS10YWItJHtpfWA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwUm91dGVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubGlua1JvdXRlcikge1xyXG4gICAgICBpZiAoIXRoaXMucm91dGVyKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICdsaW5rUm91dGVyJyFgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICAgIGRlbGF5KDApXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yb3V0ZXIubmF2aWdhdGVkKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTtcclxuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGlkZUFsbCA9IGluZGV4ID09PSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZFNob3VsZEFjdGl2ZVRhYkluZGV4KCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xyXG5cclxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4ge1xyXG4gICAgICBjb25zdCBjID0gdGFiLmxpbmtEaXJlY3RpdmU7XHJcbiAgICAgIHJldHVybiBjID8gaXNBY3RpdmUoYy5yb3V0ZXJMaW5rKSB8fCBpc0FjdGl2ZShjLnJvdXRlckxpbmtXaXRoSHJlZikgOiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rKSA9PiBib29sZWFuIHtcclxuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rKSA9PiAobGluayA/IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubGlua0V4YWN0KSA6IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFiQ29udGVudE1hcmdpblZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLSh0aGlzLmNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIGdldFRhYkNvbnRlbnRNYXJnaW5MZWZ0KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50YWJQYW5lQW5pbWF0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuZGlyICE9PSAncnRsJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkNvbnRlbnRNYXJnaW5WYWx1ZSgpICsgJyUnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIGdldFRhYkNvbnRlbnRNYXJnaW5SaWdodCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudGFiUGFuZUFuaW1hdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJDb250ZW50TWFyZ2luVmFsdWUoKSArICclJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iXX0=