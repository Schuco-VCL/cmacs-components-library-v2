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
import * as i5 from "./tab-nav-bar.component";
import * as i6 from "./tab-nav-item.directive";
import * as i7 from "ng-zorro-antd/core/outlet";
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
    i0.ɵɵlistener("click", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const i_r4 = i0.ɵɵnextContext().index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onClose(i_r4, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tab_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("closeIcon", tab_r3.closeIcon);
} }
const _c0 = function () { return { visible: true }; };
function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r13); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.clickNavItem(tab_r3, i_r4, $event); })("contextmenu", function CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r13); const tab_r3 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.contextmenuNavItem(tab_r3, $event); });
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵtemplate(2, CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    i0.ɵɵtemplate(3, CmacsTabSetComponent_cmacs_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("tabScroll", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_tabScroll_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.tabListScroll.emit($event); })("selectFocusedIndex", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_selectFocusedIndex_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.setSelectedIndex($event); })("addClicked", function CmacsTabSetComponent_cmacs_tabs_nav_0_Template_cmacs_tabs_nav_addClicked_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onAdd(); });
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
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
        var _a, _b;
        const target = event.target;
        if (this.linkRouter) {
            return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
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
}
CmacsTabSetComponent.ɵfac = function CmacsTabSetComponent_Factory(t) { return new (t || CmacsTabSetComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.Router, 8)); };
CmacsTabSetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTabSetComponent, selectors: [["cmacs-tabset"]], contentQueries: function CmacsTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsTabComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.allTabs = _t);
    } }, viewQuery: function CmacsTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CmacsTabNavBarComponent, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabNavBarRef = _t.first);
    } }, hostAttrs: [1, "ant-tabs"], hostVars: 24, hostBindings: function CmacsTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-tabs-card", ctx.type === "card" || ctx.type === "editable-card")("ant-tabs-editable", ctx.type === "editable-card")("ant-tabs-editable-card", ctx.type === "editable-card")("ant-tabs-centered", ctx.centered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.tabPosition === "top")("ant-tabs-bottom", ctx.tabPosition === "bottom")("ant-tabs-left", ctx.tabPosition === "left")("ant-tabs-right", ctx.tabPosition === "right")("ant-tabs-default", ctx.size === "default")("ant-tabs-small", ctx.size === "small")("ant-tabs-large", ctx.size === "large");
    } }, inputs: { cmacsSelectedIndex: "cmacsSelectedIndex", tabPosition: "tabPosition", tabBarExtraContent: "tabBarExtraContent", canDeactivate: "canDeactivate", addIcon: "addIcon", tabBarStyle: "tabBarStyle", type: "type", size: "size", animated: "animated", tabBarGutter: "tabBarGutter", hideAdd: "hideAdd", centered: "centered", hideAll: "hideAll", linkRouter: "linkRouter", linkExact: "linkExact", cmacsType: "cmacsType" }, outputs: { selectChange: "selectChange", selectedIndexChange: "selectedIndexChange", tabListScroll: "tabListScroll", close: "close", add: "add" }, exportAs: ["cmacsTabset"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NZ_TAB_SET,
                useExisting: CmacsTabSetComponent
            }
        ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "cmacsTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["cmacs-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["cmacs-tab-close-button", "", 3, "closeIcon", "click"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function CmacsTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsTabSetComponent_cmacs_tabs_nav_0_Template, 2, 10, "cmacs-tabs-nav", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, CmacsTabSetComponent_div_3_Template, 1, 4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.tabs.length);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
        i0.ɵɵclassProp("ant-tabs-content-top", ctx.tabPosition === "top")("ant-tabs-content-bottom", ctx.tabPosition === "bottom")("ant-tabs-content-left", ctx.tabPosition === "left")("ant-tabs-content-right", ctx.tabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i4.NgIf, i4.NgForOf, i5.CmacsTabNavBarComponent, i4.NgStyle, i6.CmacsTabNavItemDirective, i7.NzStringTemplateOutletDirective, i8.CmacsTabCloseButtonComponent, i9.CmacsTabBodyComponent], encapsulation: 2 });
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
          <button
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
                    '[class.ant-tabs-card]': `type === 'card' || type === 'editable-card'`,
                    '[class.ant-tabs-editable]': `type === 'editable-card'`,
                    '[class.ant-tabs-editable-card]': `type === 'editable-card'`,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTdELE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBMEMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzNFLE9BQU8sRUFFTCxnQkFBZ0IsRUFNakIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7SUF5RHRELDZCQUE4RTtJQUFBLFlBQWU7SUFB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O2tCQUFqQixLQUFLO1lBRWEsWUFBWTtrQkFBOUIsTUFBTTtZQUNZLG1CQUFtQjtrQkFBckMsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFDWSxLQUFLO2tCQUF2QixNQUFNO1lBQ1ksR0FBRztrQkFBckIsTUFBTTtZQThCb0QsT0FBTztrQkFBakUsZUFBZTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDRixZQUFZO2tCQUFsRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIGZpcnN0LCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0LCBOelNhZmVBbnksIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB3cmFwSW50b09ic2VydmFibGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5leHBvcnQgdHlwZSBDbWFjc1RhYlR5cGUgPSAndGV4dCcgfCAnaWNvbicgfCAnZW1zJyB8ICdzY2hlZHVsZScgfCAncHJvcGVydHknO1xuXG5pbXBvcnQge1xuICBOekFuaW1hdGVkSW50ZXJmYWNlLFxuICBOelRhYkNoYW5nZUV2ZW50LFxuICBOelRhYlBvc2l0aW9uLFxuICBOelRhYlBvc2l0aW9uTW9kZSxcbiAgTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuLFxuICBOelRhYlNjcm9sbEV2ZW50LFxuICBOelRhYlR5cGVcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENtYWNzVGFiTmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21hY3NUYWJDb21wb25lbnQsIE5aX1RBQl9TRVQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3RhYnMnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtdGFic2V0JyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYnNldCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5aX1RBQl9TRVQsXG4gICAgICB1c2VFeGlzdGluZzogQ21hY3NUYWJTZXRDb21wb25lbnRcbiAgICB9XG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNtYWNzLXRhYnMtbmF2XG4gICAgICAqbmdJZj1cInRhYnMubGVuZ3RoXCJcbiAgICAgIFtuZ1N0eWxlXT1cInRhYkJhclN0eWxlXCJcbiAgICAgIFtzZWxlY3RlZEluZGV4XT1cImNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwXCJcbiAgICAgIFtpbmtCYXJBbmltYXRlZF09XCJpbmtCYXJBbmltYXRlZFwiXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgIFthZGRJY29uXT1cImFkZEljb25cIlxuICAgICAgW2NtYWNzVHlwZV09XCJjbWFjc1R5cGVcIlxuICAgICAgW2hpZGVCYXJdPVwiaGlkZUFsbFwiXG4gICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxuICAgICAgW2V4dHJhVGVtcGxhdGVdPVwidGFiQmFyRXh0cmFDb250ZW50XCJcbiAgICAgICh0YWJTY3JvbGwpPVwidGFiTGlzdFNjcm9sbC5lbWl0KCRldmVudClcIlxuICAgICAgKHNlbGVjdEZvY3VzZWRJbmRleCk9XCJzZXRTZWxlY3RlZEluZGV4KCRldmVudClcIlxuICAgICAgKGFkZENsaWNrZWQpPVwib25BZGQoKVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYlwiXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHQucHhdPVwicG9zaXRpb24gPT09ICdob3Jpem9udGFsJyA/IHRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLWJvdHRvbS5weF09XCJwb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJjbWFjc1NlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgIChjbGljayk9XCJjbGlja05hdkl0ZW0odGFiLCBpLCAkZXZlbnQpXCJcbiAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRtZW51TmF2SXRlbSh0YWIsICRldmVudClcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgW2F0dHIudGFiSW5kZXhdPVwiZ2V0VGFiSW5kZXgodGFiLCBpKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09PSBpICYmICFoaWRlQWxsXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImdldFRhYkNvbnRlbnRJZChpKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgW3RhYl09XCJ0YWJcIlxuICAgICAgICAgIFthY3RpdmVdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYi1idG5cIlxuICAgICAgICAgIGNtYWNzVGFiTmF2SXRlbVxuICAgICAgICAgIGNka01vbml0b3JFbGVtZW50Rm9jdXNcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIubGFiZWw7IGNvbnRleHQ6IHsgdmlzaWJsZTogdHJ1ZSB9XCI+e3sgdGFiLmxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY21hY3MtdGFiLWNsb3NlLWJ1dHRvblxuICAgICAgICAgICAgKm5nSWY9XCJ0YWIuY2xvc2FibGUgJiYgY2xvc2FibGUgJiYgIXRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgICBbY2xvc2VJY29uXT1cInRhYi5jbG9zZUljb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2UoaSwgJGV2ZW50KVwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvY21hY3MtdGFicy1uYXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLWNvbnRlbnQtaG9sZGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRhYnMtY29udGVudFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LXRvcF09XCJ0YWJQb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1ib3R0b21dPVwidGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtbGVmdF09XCJ0YWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtcmlnaHRdPVwidGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1hbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnRdPVwiZ2V0VGFiQ29udGVudE1hcmdpbkxlZnQoKVwiXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHRdPVwiZ2V0VGFiQ29udGVudE1hcmdpblJpZ2h0KClcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY21hY3MtdGFiLWJvZHlcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFthY3RpdmVdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09IGkgJiYgIWhpZGVBbGxcIlxuICAgICAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcbiAgICAgICAgICBbZm9yY2VSZW5kZXJdPVwidGFiLmZvcmNlUmVuZGVyXCJcbiAgICAgICAgICBbdGFiUGFuZUFuaW1hdGVkXT1cInRhYlBhbmVBbmltYXRlZFwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicycsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jYXJkXSc6IGB0eXBlID09PSAnY2FyZCcgfHwgdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWVkaXRhYmxlXSc6IGB0eXBlID09PSAnZWRpdGFibGUtY2FyZCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtZWRpdGFibGUtY2FyZF0nOiBgdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWNlbnRlcmVkXSc6IGBjZW50ZXJlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdG9wXSc6IGB0YWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtYm90dG9tXSc6IGB0YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtbGVmdF0nOiBgdGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1yaWdodF0nOiBgdGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtZGVmYXVsdF0nOiBgc2l6ZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjbWFjc1NlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgY21hY3NTZWxlY3RlZEluZGV4KHZhbHVlOiBudWxsIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUsIG51bGwpO1xuICB9XG4gIEBJbnB1dCgpIHRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIHRhYkJhckV4dHJhQ29udGVudD86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjYW5EZWFjdGl2YXRlOiBOelRhYnNDYW5EZWFjdGl2YXRlRm4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSB0eXBlOiBOelRhYlR5cGUgPSAnbGluZSc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBhbmltYXRlZDogTnpBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHRhYkJhckd1dHRlcj86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5rUm91dGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5rRXhhY3QgPSB0cnVlO1xuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzVGFiVHlwZSA9ICd0ZXh0JztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHRhYkxpc3RTY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiU2Nyb2xsRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBpbmRleDogbnVtYmVyIH0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IE56VGFiUG9zaXRpb25Nb2RlIHtcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZih0aGlzLnRhYlBvc2l0aW9uKSA9PT0gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9XG5cbiAgZ2V0IGFkZGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnICYmICF0aGlzLmhpZGVBZGQ7XG4gIH1cblxuICBnZXQgY2xvc2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnO1xuICB9XG5cbiAgZ2V0IGxpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2xpbmUnO1xuICB9XG5cbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxpbmUgJiYgKHR5cGVvZiB0aGlzLmFuaW1hdGVkID09PSAnYm9vbGVhbicgPyB0aGlzLmFuaW1hdGVkIDogdGhpcy5hbmltYXRlZC5pbmtCYXIpO1xuICB9XG5cbiAgZ2V0IHRhYlBhbmVBbmltYXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMubGluZSAmJiAodHlwZW9mIHRoaXMuYW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMuYW5pbWF0ZWQgOiB0aGlzLmFuaW1hdGVkLnRhYlBhbmUpXG4gICAgKTtcbiAgfVxuXG4gIC8vIFBpY2sgdXAgb25seSBkaXJlY3QgZGVzY2VuZGFudHMgdW5kZXIgaXZ5IHJlbmRlcmluZyBlbmdpbmVcbiAgLy8gV2UgZmlsdGVyIG91dCBvbmx5IHRoZSB0YWJzIHRoYXQgYmVsb25nIHRvIHRoaXMgdGFiIHNldCBpbiBgdGFic2AuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NUYWJDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgYWxsVGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoQ21hY3NUYWJOYXZCYXJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSB0YWJOYXZCYXJSZWYhOiBDbWFjc1RhYk5hdkJhckNvbXBvbmVudDtcblxuICAvLyBBbGwgdGhlIGRpcmVjdCB0YWJzIGZvciB0aGlzIHRhYiBzZXRcbiAgdGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+KCk7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcbiAgcHJpdmF0ZSByZWFkb25seSB0YWJTZXRJZCE6IG51bWJlcjtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XG4gIHByaXZhdGUgc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGFiTGFiZWxTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG4gIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSBjYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICB0aGlzLnRhYlNldElkID0gbmV4dElkKys7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLnRhYnMuZGVzdHJveSgpO1xuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VXBSb3V0ZXIoKTtcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgdGhpcy5zdWJzY3JpYmVUb0FsbFRhYkNoYW5nZXMoKTtcblxuICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBhbW91bnQgb2YgdGFicywgaW4gb3JkZXIgdG8gYmVcbiAgICAvLyBhYmxlIHRvIHJlLXJlbmRlciB0aGUgY29udGVudCBhcyBuZXcgdGFicyBhcmUgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICB0aGlzLnRhYnNTdWJzY3JpcHRpb24gPSB0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xuXG4gICAgICAvLyBNYWludGFpbiB0aGUgcHJldmlvdXNseS1zZWxlY3RlZCB0YWIgaWYgYSBuZXcgdGFiIGlzIGFkZGVkIG9yIHJlbW92ZWQgYW5kIHRoZXJlIGlzIG5vXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cbiAgICAgIGlmIChpbmRleFRvU2VsZWN0ID09PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRhYnNbaV0uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiBib3RoIHRvIHRoZSBgaW5kZXhUb1NlbGVjdGAgYW5kIGBzZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxuICAgICAgICAgICAgLy8gZXZlbnQsIG90aGVyd2lzZSB0aGUgY29uc3VtZXIgbWF5IGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGluIHNvbWUgZWRnZSBjYXNlcyBsaWtlXG4gICAgICAgICAgICAvLyBhZGRpbmcgYSB0YWIgd2l0aGluIHRoZSBgc2VsZWN0ZWRJbmRleENoYW5nZWAgZXZlbnQuXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcbiAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXG4gICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXG4gICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xuICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xuXG4gICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxuICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xuXG4gICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcbiAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcbiAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLnNlbGVjdGVkSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZShpbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbG9zZS5lbWl0KHsgaW5kZXggfSk7XG4gIH1cblxuICBvbkFkZCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnRhYnMubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnRhYnMubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XTtcbiAgICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWIsIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgdGFiLmRlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24gPSBtZXJnZSguLi50aGlzLnRhYnMubWFwKHRhYiA9PiB0YWIuc3RhdGVDaGFuZ2VzKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9BbGxUYWJDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYWxsVGFicy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMuYWxsVGFicykpLnN1YnNjcmliZSgodGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PikgPT4ge1xuICAgICAgdGhpcy50YWJzLnJlc2V0KHRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuY2xvc2VzdFRhYlNldCA9PT0gdGhpcykpO1xuICAgICAgdGhpcy50YWJzLm5vdGlmeU9uQ2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FuRGVhY3RpdmF0ZUZ1bihwcmU6IG51bWJlciwgbmV4dDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNhbkRlYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IG9ic2VydmFibGUgPSB3cmFwSW50b09ic2VydmFibGUodGhpcy5jYW5EZWFjdGl2YXRlKHByZSwgbmV4dCkpO1xuICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShmaXJzdCgpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2YodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tOYXZJdGVtKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xuICAgICAgLy8gaWdub3JlIGNhbkRlYWN0aXZhdGVcbiAgICAgIHRhYi5jbWFjc0NsaWNrLmVtaXQoKTtcbiAgICAgIGlmICghdGhpcy5pc1JvdXRlckxpbmtDbGlja0V2ZW50KGluZGV4LCBlKSkge1xuICAgICAgICB0aGlzLnNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNSb3V0ZXJMaW5rQ2xpY2tFdmVudChpbmRleDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5saW5rUm91dGVyKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnRhYnMudG9BcnJheSgpW2luZGV4XT8ubGlua0RpcmVjdGl2ZT8uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb250ZXh0bWVudU5hdkl0ZW0odGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGFiLmRpc2FibGVkKSB7XG4gICAgICAvLyBpZ25vcmUgY2FuRGVhY3RpdmF0ZVxuICAgICAgdGFiLmNtYWNzQ29udGV4dG1lbnUuZW1pdChlKTtcbiAgICB9XG4gIH1cblxuICBzZXRTZWxlY3RlZEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24gPSB0aGlzLmNhbkRlYWN0aXZhdGVGdW4odGhpcy5zZWxlY3RlZEluZGV4ISwgaW5kZXgpLnN1YnNjcmliZShjYW4gPT4ge1xuICAgICAgaWYgKGNhbikge1xuICAgICAgICB0aGlzLmNtYWNzU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnRhYk5hdkJhclJlZi5mb2N1c0luZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFiSW5kZXgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcik6IG51bWJlciB8IG51bGwge1xuICAgIGlmICh0YWIuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4ID09PSBpbmRleCA/IDAgOiAtMTtcbiAgfVxuXG4gIGdldFRhYkNvbnRlbnRJZChpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgbnotdGFicy0ke3RoaXMudGFiU2V0SWR9LXRhYi0ke2l9YDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBSb3V0ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlua1JvdXRlcikge1xuICAgICAgaWYgKCF0aGlzLnJvdXRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBpZiB5b3Ugd2FudCB0byB1c2UgJ2xpbmtSb3V0ZXInIWApO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgICBmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxuICAgICAgICAgIGRlbGF5KDApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVSb3V0ZXJBY3RpdmUoKTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVSb3V0ZXJBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm91dGVyLm5hdmlnYXRlZCkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpO1xuICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZUFsbCA9IGluZGV4ID09PSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5pc0xpbmtBY3RpdmUodGhpcy5yb3V0ZXIpO1xuXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XG4gICAgICBjb25zdCBjID0gdGFiLmxpbmtEaXJlY3RpdmU7XG4gICAgICByZXR1cm4gYyA/IGlzQWN0aXZlKGMucm91dGVyTGluaykgfHwgaXNBY3RpdmUoYy5yb3V0ZXJMaW5rV2l0aEhyZWYpIDogZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XG4gICAgcmV0dXJuIChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gKGxpbmsgPyByb3V0ZXIuaXNBY3RpdmUobGluay51cmxUcmVlLCB0aGlzLmxpbmtFeGFjdCkgOiBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhYkNvbnRlbnRNYXJnaW5WYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiAtKHRoaXMuY21hY3NTZWxlY3RlZEluZGV4IHx8IDApICogMTAwO1xuICB9XG5cbiAgZ2V0VGFiQ29udGVudE1hcmdpbkxlZnQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50YWJQYW5lQW5pbWF0ZWQpIHtcbiAgICAgIGlmICh0aGlzLmRpciAhPT0gJ3J0bCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFiQ29udGVudE1hcmdpblZhbHVlKCkgKyAnJSc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxuICBnZXRUYWJDb250ZW50TWFyZ2luUmlnaHQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50YWJQYW5lQW5pbWF0ZWQpIHtcbiAgICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFiQ29udGVudE1hcmdpblZhbHVlKCkgKyAnJSc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19