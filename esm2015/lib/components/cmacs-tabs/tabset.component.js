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
        ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "cmacsType", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "cmacsTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["role", "button", "aria-label", "close icon", "cmacs-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["role", "button", "aria-label", "close icon", "cmacs-tab-close-button", "", 3, "closeIcon", "click"], ["cmacs-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function CmacsTabSetComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTdELE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBMEMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzNFLE9BQU8sRUFFTCxnQkFBZ0IsRUFNakIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7SUF5RHRELDZCQUE4RTtJQUFBLFlBQWU7SUFB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O2tCQUFqQixLQUFLO1lBRWEsWUFBWTtrQkFBOUIsTUFBTTtZQUNZLG1CQUFtQjtrQkFBckMsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFDWSxLQUFLO2tCQUF2QixNQUFNO1lBQ1ksR0FBRztrQkFBckIsTUFBTTtZQThCb0QsT0FBTztrQkFBakUsZUFBZTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDRixZQUFZO2tCQUFsRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuLyoqIGdldCBzb21lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cclxuXHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyLCBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGZpbHRlciwgZmlyc3QsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBQUkVGSVggfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOdW1iZXJJbnB1dCwgTnpTYWZlQW55LCBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB3cmFwSW50b09ic2VydmFibGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmV4cG9ydCB0eXBlIENtYWNzVGFiVHlwZSA9ICd0ZXh0JyB8ICdpY29uJyB8ICdlbXMnIHwgJ3NjaGVkdWxlJyB8ICdwcm9wZXJ0eSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIE56QW5pbWF0ZWRJbnRlcmZhY2UsXHJcbiAgTnpUYWJDaGFuZ2VFdmVudCxcclxuICBOelRhYlBvc2l0aW9uLFxyXG4gIE56VGFiUG9zaXRpb25Nb2RlLFxyXG4gIE56VGFic0NhbkRlYWN0aXZhdGVGbixcclxuICBOelRhYlNjcm9sbEV2ZW50LFxyXG4gIE56VGFiVHlwZVxyXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IENtYWNzVGFiTmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc1RhYkNvbXBvbmVudCwgTlpfVEFCX1NFVCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3RhYnMnO1xyXG5cclxubGV0IG5leHRJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRhYnNldCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYnNldCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5aX1RBQl9TRVQsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBDbWFjc1RhYlNldENvbXBvbmVudFxyXG4gICAgfVxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjbWFjcy10YWJzLW5hdlxyXG4gICAgICAqbmdJZj1cInRhYnMubGVuZ3RoXCJcclxuICAgICAgW25nU3R5bGVdPVwidGFiQmFyU3R5bGVcIlxyXG4gICAgICBbc2VsZWN0ZWRJbmRleF09XCJjbWFjc1NlbGVjdGVkSW5kZXggfHwgMFwiXHJcbiAgICAgIFtpbmtCYXJBbmltYXRlZF09XCJpbmtCYXJBbmltYXRlZFwiXHJcbiAgICAgIFthZGRhYmxlXT1cImFkZGFibGVcIlxyXG4gICAgICBbYWRkSWNvbl09XCJhZGRJY29uXCJcclxuICAgICAgW2NtYWNzVHlwZV09XCJjbWFjc1R5cGVcIlxyXG4gICAgICBbaGlkZUJhcl09XCJoaWRlQWxsXCJcclxuICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcclxuICAgICAgW2V4dHJhVGVtcGxhdGVdPVwidGFiQmFyRXh0cmFDb250ZW50XCJcclxuICAgICAgKHRhYlNjcm9sbCk9XCJ0YWJMaXN0U2Nyb2xsLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgIChzZWxlY3RGb2N1c2VkSW5kZXgpPVwic2V0U2VsZWN0ZWRJbmRleCgkZXZlbnQpXCJcclxuICAgICAgKGFkZENsaWNrZWQpPVwib25BZGQoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYlwiXHJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1yaWdodC5weF09XCJwb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnID8gdGFiQmFyR3V0dGVyIDogbnVsbFwiXHJcbiAgICAgICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwicG9zaXRpb24gPT09ICd2ZXJ0aWNhbCcgPyB0YWJCYXJHdXR0ZXIgOiBudWxsXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJjbWFjc1NlbGVjdGVkSW5kZXggPT09IGlcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy10YWItZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwiY2xpY2tOYXZJdGVtKHRhYiwgaSwgJGV2ZW50KVwiXHJcbiAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRtZW51TmF2SXRlbSh0YWIsICRldmVudClcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgIFthdHRyLnRhYkluZGV4XT1cImdldFRhYkluZGV4KHRhYiwgaSlcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjbWFjc1NlbGVjdGVkSW5kZXggPT09IGkgJiYgIWhpZGVBbGxcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJnZXRUYWJDb250ZW50SWQoaSlcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXHJcbiAgICAgICAgICBbdGFiXT1cInRhYlwiXHJcbiAgICAgICAgICBbYWN0aXZlXT1cImNtYWNzU2VsZWN0ZWRJbmRleCA9PT0gaVwiXHJcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYi1idG5cIlxyXG4gICAgICAgICAgY21hY3NUYWJOYXZJdGVtXHJcbiAgICAgICAgICBjZGtNb25pdG9yRWxlbWVudEZvY3VzXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRhYi5sYWJlbDsgY29udGV4dDogeyB2aXNpYmxlOiB0cnVlIH1cIj57eyB0YWIubGFiZWwgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJjbG9zZSBpY29uXCJcclxuICAgICAgICAgICAgY21hY3MtdGFiLWNsb3NlLWJ1dHRvblxyXG4gICAgICAgICAgICAqbmdJZj1cInRhYi5jbG9zYWJsZSAmJiBjbG9zYWJsZSAmJiAhdGFiLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgW2Nsb3NlSWNvbl09XCJ0YWIuY2xvc2VJY29uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2UoaSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9jbWFjcy10YWJzLW5hdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFicy1jb250ZW50LWhvbGRlclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdGFicy1jb250ZW50XCJcclxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC10b3BdPVwidGFiUG9zaXRpb24gPT09ICd0b3AnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1ib3R0b21dPVwidGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1sZWZ0XT1cInRhYlBvc2l0aW9uID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LXJpZ2h0XT1cInRhYlBvc2l0aW9uID09PSAncmlnaHQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1hbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxyXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tbGVmdF09XCJnZXRUYWJDb250ZW50TWFyZ2luTGVmdCgpXCJcclxuICAgICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0XT1cImdldFRhYkNvbnRlbnRNYXJnaW5SaWdodCgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNtYWNzLXRhYi1ib2R5XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgW2FjdGl2ZV09XCJjbWFjc1NlbGVjdGVkSW5kZXggPT0gaSAmJiAhaGlkZUFsbFwiXHJcbiAgICAgICAgICBbY29udGVudF09XCJ0YWIuY29udGVudFwiXHJcbiAgICAgICAgICBbZm9yY2VSZW5kZXJdPVwidGFiLmZvcmNlUmVuZGVyXCJcclxuICAgICAgICAgIFt0YWJQYW5lQW5pbWF0ZWRdPVwidGFiUGFuZUFuaW1hdGVkXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC10YWJzJyxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtY2FyZF0nOiBgdHlwZSA9PT0gJ2NhcmQnIHx8IHR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWVkaXRhYmxlXSc6IGB0eXBlID09PSAnZWRpdGFibGUtY2FyZCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1lZGl0YWJsZS1jYXJkXSc6IGB0eXBlID09PSAnZWRpdGFibGUtY2FyZCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jZW50ZXJlZF0nOiBgY2VudGVyZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFicy10b3BdJzogYHRhYlBvc2l0aW9uID09PSAndG9wJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWJvdHRvbV0nOiBgdGFiUG9zaXRpb24gPT09ICdib3R0b20nYCxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbGVmdF0nOiBgdGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLXJpZ2h0XSc6IGB0YWJQb3NpdGlvbiA9PT0gJ3JpZ2h0J2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLWRlZmF1bHRdJzogYHNpemUgPT09ICdkZWZhdWx0J2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWJzLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbY2xhc3MuYW50LXRhYnMtbGFyZ2VdJzogYHNpemUgPT09ICdsYXJnZSdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUYWJTZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGNtYWNzU2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG4gIHNldCBjbWFjc1NlbGVjdGVkSW5kZXgodmFsdWU6IG51bGwgfCBudW1iZXIpIHtcclxuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlLCBudWxsKTtcclxuICB9XHJcbiAgQElucHV0KCkgdGFiUG9zaXRpb246IE56VGFiUG9zaXRpb24gPSAndG9wJztcclxuICBASW5wdXQoKSB0YWJCYXJFeHRyYUNvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBjYW5EZWFjdGl2YXRlOiBOelRhYnNDYW5EZWFjdGl2YXRlRm4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+ID0gJ3BsdXMnO1xyXG4gIEBJbnB1dCgpIHRhYkJhclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSB0eXBlOiBOelRhYlR5cGUgPSAnbGluZSc7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgYW5pbWF0ZWQ6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHRhYkJhckd1dHRlcj86IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgaGlkZUFkZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjZW50ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlQWxsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmtSb3V0ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGlua0V4YWN0ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzVGFiVHlwZSA9ICd0ZXh0JztcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGFiTGlzdFNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJTY3JvbGxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaW5kZXg6IG51bWJlciB9PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBhZGQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIGdldCBwb3NpdGlvbigpOiBOelRhYlBvc2l0aW9uTW9kZSB7XHJcbiAgICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZih0aGlzLnRhYlBvc2l0aW9uKSA9PT0gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFkZGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnZWRpdGFibGUtY2FyZCcgJiYgIXRoaXMuaGlkZUFkZDtcclxuICB9XHJcblxyXG4gIGdldCBjbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJztcclxuICB9XHJcblxyXG4gIGdldCBsaW5lKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2xpbmUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlua0JhckFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubGluZSAmJiAodHlwZW9mIHRoaXMuYW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMuYW5pbWF0ZWQgOiB0aGlzLmFuaW1hdGVkLmlua0Jhcik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMubGluZSAmJiAodHlwZW9mIHRoaXMuYW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMuYW5pbWF0ZWQgOiB0aGlzLmFuaW1hdGVkLnRhYlBhbmUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gUGljayB1cCBvbmx5IGRpcmVjdCBkZXNjZW5kYW50cyB1bmRlciBpdnkgcmVuZGVyaW5nIGVuZ2luZVxyXG4gIC8vIFdlIGZpbHRlciBvdXQgb25seSB0aGUgdGFicyB0aGF0IGJlbG9uZyB0byB0aGlzIHRhYiBzZXQgaW4gYHRhYnNgLlxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NUYWJDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgYWxsVGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PiA9IG5ldyBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+KCk7XHJcbiAgQFZpZXdDaGlsZChDbWFjc1RhYk5hdkJhckNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYk5hdkJhclJlZiE6IENtYWNzVGFiTmF2QmFyQ29tcG9uZW50O1xyXG5cclxuICAvLyBBbGwgdGhlIGRpcmVjdCB0YWJzIGZvciB0aGlzIHRhYiBzZXRcclxuICB0YWJzOiBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+ID0gbmV3IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4oKTtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwcml2YXRlIHJlYWRvbmx5IHRhYlNldElkITogbnVtYmVyO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIHRhYkxhYmVsU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdGFic1N1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIGNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRhYlNldElkID0gbmV4dElkKys7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy50YWJzLmRlc3Ryb3koKTtcclxuICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRVcFJvdXRlcigpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvVGFiTGFiZWxzKCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpO1xyXG5cclxuICAgIC8vIFN1YnNjcmliZSB0byBjaGFuZ2VzIGluIHRoZSBhbW91bnQgb2YgdGFicywgaW4gb3JkZXIgdG8gYmVcclxuICAgIC8vIGFibGUgdG8gcmUtcmVuZGVyIHRoZSBjb250ZW50IGFzIG5ldyB0YWJzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxyXG4gICAgdGhpcy50YWJzU3Vic2NyaXB0aW9uID0gdGhpcy50YWJzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpO1xyXG5cclxuICAgICAgLy8gTWFpbnRhaW4gdGhlIHByZXZpb3VzbHktc2VsZWN0ZWQgdGFiIGlmIGEgbmV3IHRhYiBpcyBhZGRlZCBvciByZW1vdmVkIGFuZCB0aGVyZSBpcyBub1xyXG4gICAgICAvLyBleHBsaWNpdCBjaGFuZ2UgdGhhdCBzZWxlY3RzIGEgZGlmZmVyZW50IHRhYi5cclxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0YWJzW2ldLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vIEFzc2lnbiBib3RoIHRvIHRoZSBgaW5kZXhUb1NlbGVjdGAgYW5kIGBzZWxlY3RlZEluZGV4YCBzbyB3ZSBkb24ndCBmaXJlIGEgY2hhbmdlZFxyXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcclxuICAgICAgICAgICAgLy8gYWRkaW5nIGEgdGFiIHdpdGhpbiB0aGUgYHNlbGVjdGVkSW5kZXhDaGFuZ2VgIGV2ZW50LlxyXG4gICAgICAgICAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb1RhYkxhYmVscygpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXHJcbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXHJcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG5cclxuICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxyXG4gICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcclxuICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlKGluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsb3NlLmVtaXQoeyBpbmRleCB9KTtcclxuICB9XHJcblxyXG4gIG9uQWRkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGQuZW1pdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLnRhYnMubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBOelRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMudGFicyAmJiB0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMudGFicy50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICB0YWIuZGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5zZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVUb1RhYkxhYmVscygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy50YWJzLm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuYWxsVGFicy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMuYWxsVGFicykpLnN1YnNjcmliZSgodGFiczogUXVlcnlMaXN0PENtYWNzVGFiQ29tcG9uZW50PikgPT4ge1xyXG4gICAgICB0aGlzLnRhYnMucmVzZXQodGFicy5maWx0ZXIodGFiID0+IHRhYi5jbG9zZXN0VGFiU2V0ID09PSB0aGlzKSk7XHJcbiAgICAgIHRoaXMudGFicy5ub3RpZnlPbkNoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FuRGVhY3RpdmF0ZUZ1bihwcmU6IG51bWJlciwgbmV4dDogbnVtYmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuY2FuRGVhY3RpdmF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCBvYnNlcnZhYmxlID0gd3JhcEludG9PYnNlcnZhYmxlKHRoaXMuY2FuRGVhY3RpdmF0ZShwcmUsIG5leHQpKTtcclxuICAgICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShmaXJzdCgpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tOYXZJdGVtKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGFiLmRpc2FibGVkKSB7XHJcbiAgICAgIC8vIGlnbm9yZSBjYW5EZWFjdGl2YXRlXHJcbiAgICAgIHRhYi5jbWFjc0NsaWNrLmVtaXQoKTtcclxuICAgICAgaWYgKCF0aGlzLmlzUm91dGVyTGlua0NsaWNrRXZlbnQoaW5kZXgsIGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1JvdXRlckxpbmtDbGlja0V2ZW50KGluZGV4OiBudW1iZXIsIGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5saW5rUm91dGVyKSB7XHJcbiAgICAgIHJldHVybiAhIXRoaXMudGFicy50b0FycmF5KClbaW5kZXhdPy5saW5rRGlyZWN0aXZlPy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnRleHRtZW51TmF2SXRlbSh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAvLyBpZ25vcmUgY2FuRGVhY3RpdmF0ZVxyXG4gICAgICB0YWIuY21hY3NDb250ZXh0bWVudS5lbWl0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuY2FuRGVhY3RpdmF0ZVN1YnNjcmlwdGlvbiA9IHRoaXMuY2FuRGVhY3RpdmF0ZUZ1bih0aGlzLnNlbGVjdGVkSW5kZXghLCBpbmRleCkuc3Vic2NyaWJlKGNhbiA9PiB7XHJcbiAgICAgIGlmIChjYW4pIHtcclxuICAgICAgICB0aGlzLmNtYWNzU2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMudGFiTmF2QmFyUmVmLmZvY3VzSW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJJbmRleCh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICBpZiAodGFiLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXggPyAwIDogLTE7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgbnotdGFicy0ke3RoaXMudGFiU2V0SWR9LXRhYi0ke2l9YDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBSb3V0ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saW5rUm91dGVyKSB7XHJcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7UFJFRklYfSB5b3Ugc2hvdWxkIGltcG9ydCAnUm91dGVyTW9kdWxlJyBpZiB5b3Ugd2FudCB0byB1c2UgJ2xpbmtSb3V0ZXInIWApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgICAgZGVsYXkoMClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJvdXRlckFjdGl2ZSgpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVJvdXRlckFjdGl2ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnJvdXRlci5uYXZpZ2F0ZWQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRTaG91bGRBY3RpdmVUYWJJbmRleCgpO1xyXG4gICAgICBpZiAoaW5kZXggIT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oaWRlQWxsID0gaW5kZXggPT09IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnMudG9BcnJheSgpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLmlzTGlua0FjdGl2ZSh0aGlzLnJvdXRlcik7XHJcblxyXG4gICAgcmV0dXJuIHRhYnMuZmluZEluZGV4KHRhYiA9PiB7XHJcbiAgICAgIGNvbnN0IGMgPSB0YWIubGlua0RpcmVjdGl2ZTtcclxuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzTGlua0FjdGl2ZShyb3V0ZXI6IFJvdXRlcik6IChsaW5rPzogUm91dGVyTGluayB8IFJvdXRlckxpbmtXaXRoSHJlZikgPT4gYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKGxpbms/OiBSb3V0ZXJMaW5rIHwgUm91dGVyTGlua1dpdGhIcmVmKSA9PiAobGluayA/IHJvdXRlci5pc0FjdGl2ZShsaW5rLnVybFRyZWUsIHRoaXMubGlua0V4YWN0KSA6IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGFiQ29udGVudE1hcmdpblZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gLSh0aGlzLmNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwKSAqIDEwMDtcclxuICB9XHJcblxyXG4gIGdldFRhYkNvbnRlbnRNYXJnaW5MZWZ0KCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy50YWJQYW5lQW5pbWF0ZWQpIHtcclxuICAgICAgaWYgKHRoaXMuZGlyICE9PSAncnRsJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkNvbnRlbnRNYXJnaW5WYWx1ZSgpICsgJyUnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG4gIGdldFRhYkNvbnRlbnRNYXJnaW5SaWdodCgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudGFiUGFuZUFuaW1hdGVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJDb250ZW50TWFyZ2luVmFsdWUoKSArICclJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxufVxyXG4iXX0=