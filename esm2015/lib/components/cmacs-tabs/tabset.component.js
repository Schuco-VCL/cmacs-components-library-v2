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
        this.cmacsSelectedIndexChange = new EventEmitter();
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
                    this.cmacsSelectedIndexChange.emit(indexToSelect);
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
    } }, inputs: { cmacsSelectedIndex: "cmacsSelectedIndex", tabPosition: "tabPosition", tabBarExtraContent: "tabBarExtraContent", canDeactivate: "canDeactivate", addIcon: "addIcon", tabBarStyle: "tabBarStyle", type: "type", size: "size", animated: "animated", tabBarGutter: "tabBarGutter", hideAdd: "hideAdd", centered: "centered", hideAll: "hideAll", linkRouter: "linkRouter", linkExact: "linkExact", cmacsType: "cmacsType" }, outputs: { selectChange: "selectChange", cmacsSelectedIndexChange: "cmacsSelectedIndexChange", tabListScroll: "tabListScroll", close: "close", add: "add" }, exportAs: ["cmacsTabset"], features: [i0.ɵɵProvidersFeature([
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
        }], cmacsSelectedIndexChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWJzL3RhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSTdELE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBMEMsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUUsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNyRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzNFLE9BQU8sRUFFTCxnQkFBZ0IsRUFNakIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7SUF5RHRELDZCQUE4RTtJQUFBLFlBQWU7SUFB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O2tCQUFqQixLQUFLO1lBRWEsWUFBWTtrQkFBOUIsTUFBTTtZQUNZLHdCQUF3QjtrQkFBMUMsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFDWSxLQUFLO2tCQUF2QixNQUFNO1lBQ1ksR0FBRztrQkFBckIsTUFBTTtZQThCb0QsT0FBTztrQkFBakUsZUFBZTttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFDRixZQUFZO2tCQUFsRSxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZU51bWJlclByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXG5cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciwgUm91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBmaWx0ZXIsIGZpcnN0LCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUFJFRklYIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE51bWJlcklucHV0LCBOelNhZmVBbnksIE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB3cmFwSW50b09ic2VydmFibGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5leHBvcnQgdHlwZSBDbWFjc1RhYlR5cGUgPSAndGV4dCcgfCAnaWNvbicgfCAnZW1zJyB8ICdzY2hlZHVsZScgfCAncHJvcGVydHknO1xuXG5pbXBvcnQge1xuICBOekFuaW1hdGVkSW50ZXJmYWNlLFxuICBOelRhYkNoYW5nZUV2ZW50LFxuICBOelRhYlBvc2l0aW9uLFxuICBOelRhYlBvc2l0aW9uTW9kZSxcbiAgTnpUYWJzQ2FuRGVhY3RpdmF0ZUZuLFxuICBOelRhYlNjcm9sbEV2ZW50LFxuICBOelRhYlR5cGVcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IENtYWNzVGFiTmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi90YWItbmF2LWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ21hY3NUYWJDb21wb25lbnQsIE5aX1RBQl9TRVQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3RhYnMnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtdGFic2V0JyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RhYnNldCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5aX1RBQl9TRVQsXG4gICAgICB1c2VFeGlzdGluZzogQ21hY3NUYWJTZXRDb21wb25lbnRcbiAgICB9XG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGNtYWNzLXRhYnMtbmF2XG4gICAgICAqbmdJZj1cInRhYnMubGVuZ3RoXCJcbiAgICAgIFtuZ1N0eWxlXT1cInRhYkJhclN0eWxlXCJcbiAgICAgIFtzZWxlY3RlZEluZGV4XT1cImNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwXCJcbiAgICAgIFtpbmtCYXJBbmltYXRlZF09XCJpbmtCYXJBbmltYXRlZFwiXG4gICAgICBbYWRkYWJsZV09XCJhZGRhYmxlXCJcbiAgICAgIFthZGRJY29uXT1cImFkZEljb25cIlxuICAgICAgW2NtYWNzVHlwZV09XCJjbWFjc1R5cGVcIlxuICAgICAgW2hpZGVCYXJdPVwiaGlkZUFsbFwiXG4gICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxuICAgICAgW2V4dHJhVGVtcGxhdGVdPVwidGFiQmFyRXh0cmFDb250ZW50XCJcbiAgICAgICh0YWJTY3JvbGwpPVwidGFiTGlzdFNjcm9sbC5lbWl0KCRldmVudClcIlxuICAgICAgKHNlbGVjdEZvY3VzZWRJbmRleCk9XCJzZXRTZWxlY3RlZEluZGV4KCRldmVudClcIlxuICAgICAgKGFkZENsaWNrZWQpPVwib25BZGQoKVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYlwiXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHQucHhdPVwicG9zaXRpb24gPT09ICdob3Jpem9udGFsJyA/IHRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLWJvdHRvbS5weF09XCJwb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHRhYkJhckd1dHRlciA6IG51bGxcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWFjdGl2ZV09XCJjbWFjc1NlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgIChjbGljayk9XCJjbGlja05hdkl0ZW0odGFiLCBpLCAkZXZlbnQpXCJcbiAgICAgICAgKGNvbnRleHRtZW51KT1cImNvbnRleHRtZW51TmF2SXRlbSh0YWIsICRldmVudClcIlxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgW2F0dHIudGFiSW5kZXhdPVwiZ2V0VGFiSW5kZXgodGFiLCBpKVwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJ0YWIuZGlzYWJsZWRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09PSBpICYmICFoaWRlQWxsXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImdldFRhYkNvbnRlbnRJZChpKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgW3RhYl09XCJ0YWJcIlxuICAgICAgICAgIFthY3RpdmVdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICAgICBjbGFzcz1cImFudC10YWJzLXRhYi1idG5cIlxuICAgICAgICAgIGNtYWNzVGFiTmF2SXRlbVxuICAgICAgICAgIGNka01vbml0b3JFbGVtZW50Rm9jdXNcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0YWIubGFiZWw7IGNvbnRleHQ6IHsgdmlzaWJsZTogdHJ1ZSB9XCI+e3sgdGFiLmxhYmVsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY21hY3MtdGFiLWNsb3NlLWJ1dHRvblxuICAgICAgICAgICAgKm5nSWY9XCJ0YWIuY2xvc2FibGUgJiYgY2xvc2FibGUgJiYgIXRhYi5kaXNhYmxlZFwiXG4gICAgICAgICAgICBbY2xvc2VJY29uXT1cInRhYi5jbG9zZUljb25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xvc2UoaSwgJGV2ZW50KVwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvY21hY3MtdGFicy1uYXY+XG4gICAgPGRpdiBjbGFzcz1cImFudC10YWJzLWNvbnRlbnQtaG9sZGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiYW50LXRhYnMtY29udGVudFwiXG4gICAgICAgIFtjbGFzcy5hbnQtdGFicy1jb250ZW50LXRvcF09XCJ0YWJQb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1ib3R0b21dPVwidGFiUG9zaXRpb24gPT09ICdib3R0b20nXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtbGVmdF09XCJ0YWJQb3NpdGlvbiA9PT0gJ2xlZnQnXCJcbiAgICAgICAgW2NsYXNzLmFudC10YWJzLWNvbnRlbnQtcmlnaHRdPVwidGFiUG9zaXRpb24gPT09ICdyaWdodCdcIlxuICAgICAgICBbY2xhc3MuYW50LXRhYnMtY29udGVudC1hbmltYXRlZF09XCJ0YWJQYW5lQW5pbWF0ZWRcIlxuICAgICAgICBbc3R5bGUubWFyZ2luLWxlZnRdPVwiZ2V0VGFiQ29udGVudE1hcmdpbkxlZnQoKVwiXG4gICAgICAgIFtzdHlsZS5tYXJnaW4tcmlnaHRdPVwiZ2V0VGFiQ29udGVudE1hcmdpblJpZ2h0KClcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY21hY3MtdGFiLWJvZHlcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIFthY3RpdmVdPVwiY21hY3NTZWxlY3RlZEluZGV4ID09IGkgJiYgIWhpZGVBbGxcIlxuICAgICAgICAgIFtjb250ZW50XT1cInRhYi5jb250ZW50XCJcbiAgICAgICAgICBbZm9yY2VSZW5kZXJdPVwidGFiLmZvcmNlUmVuZGVyXCJcbiAgICAgICAgICBbdGFiUGFuZUFuaW1hdGVkXT1cInRhYlBhbmVBbmltYXRlZFwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtdGFicycsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1jYXJkXSc6IGB0eXBlID09PSAnY2FyZCcgfHwgdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWVkaXRhYmxlXSc6IGB0eXBlID09PSAnZWRpdGFibGUtY2FyZCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtZWRpdGFibGUtY2FyZF0nOiBgdHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWNlbnRlcmVkXSc6IGBjZW50ZXJlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtdG9wXSc6IGB0YWJQb3NpdGlvbiA9PT0gJ3RvcCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtYm90dG9tXSc6IGB0YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbSdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtbGVmdF0nOiBgdGFiUG9zaXRpb24gPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1yaWdodF0nOiBgdGFiUG9zaXRpb24gPT09ICdyaWdodCdgLFxuICAgICdbY2xhc3MuYW50LXRhYnMtZGVmYXVsdF0nOiBgc2l6ZSA9PT0gJ2RlZmF1bHQnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLXNtYWxsXSc6IGBzaXplID09PSAnc21hbGwnYCxcbiAgICAnW2NsYXNzLmFudC10YWJzLWxhcmdlXSc6IGBzaXplID09PSAnbGFyZ2UnYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIENtYWNzVGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjbWFjc1NlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgfVxuICBzZXQgY21hY3NTZWxlY3RlZEluZGV4KHZhbHVlOiBudWxsIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUsIG51bGwpO1xuICB9XG4gIEBJbnB1dCgpIHRhYlBvc2l0aW9uOiBOelRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIEBJbnB1dCgpIHRhYkJhckV4dHJhQ29udGVudD86IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjYW5EZWFjdGl2YXRlOiBOelRhYnNDYW5EZWFjdGl2YXRlRm4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiA9ICdwbHVzJztcbiAgQElucHV0KCkgdGFiQmFyU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSB0eXBlOiBOelRhYlR5cGUgPSAnbGluZSc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBhbmltYXRlZDogTnpBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHRhYkJhckd1dHRlcj86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhpZGVBZGQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNlbnRlcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5rUm91dGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5rRXhhY3QgPSB0cnVlO1xuICBASW5wdXQoKSBjbWFjc1R5cGU6IENtYWNzVGFiVHlwZSA9ICd0ZXh0JztcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY21hY3NTZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdGFiTGlzdFNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJTY3JvbGxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXIgfT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBnZXQgcG9zaXRpb24oKTogTnpUYWJQb3NpdGlvbk1vZGUge1xuICAgIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHRoaXMudGFiUG9zaXRpb24pID09PSAtMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBnZXQgYWRkYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnZWRpdGFibGUtY2FyZCcgJiYgIXRoaXMuaGlkZUFkZDtcbiAgfVxuXG4gIGdldCBjbG9zYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnZWRpdGFibGUtY2FyZCc7XG4gIH1cblxuICBnZXQgbGluZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAnbGluZSc7XG4gIH1cblxuICBnZXQgaW5rQmFyQW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGluZSAmJiAodHlwZW9mIHRoaXMuYW5pbWF0ZWQgPT09ICdib29sZWFuJyA/IHRoaXMuYW5pbWF0ZWQgOiB0aGlzLmFuaW1hdGVkLmlua0Jhcik7XG4gIH1cblxuICBnZXQgdGFiUGFuZUFuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnBvc2l0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgdGhpcy5saW5lICYmICh0eXBlb2YgdGhpcy5hbmltYXRlZCA9PT0gJ2Jvb2xlYW4nID8gdGhpcy5hbmltYXRlZCA6IHRoaXMuYW5pbWF0ZWQudGFiUGFuZSlcbiAgICApO1xuICB9XG5cbiAgLy8gUGljayB1cCBvbmx5IGRpcmVjdCBkZXNjZW5kYW50cyB1bmRlciBpdnkgcmVuZGVyaW5nIGVuZ2luZVxuICAvLyBXZSBmaWx0ZXIgb3V0IG9ubHkgdGhlIHRhYnMgdGhhdCBiZWxvbmcgdG8gdGhpcyB0YWIgc2V0IGluIGB0YWJzYC5cbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc1RhYkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBhbGxUYWJzOiBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+ID0gbmV3IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4oKTtcbiAgQFZpZXdDaGlsZChDbWFjc1RhYk5hdkJhckNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHRhYk5hdkJhclJlZiE6IENtYWNzVGFiTmF2QmFyQ29tcG9uZW50O1xuXG4gIC8vIEFsbCB0aGUgZGlyZWN0IHRhYnMgZm9yIHRoaXMgdGFiIHNldFxuICB0YWJzOiBRdWVyeUxpc3Q8Q21hY3NUYWJDb21wb25lbnQ+ID0gbmV3IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4oKTtcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIHJlYWRvbmx5IHRhYlNldElkITogbnVtYmVyO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcbiAgcHJpdmF0ZSBzZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0YWJMYWJlbFN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgcHJpdmF0ZSB0YWJzU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICBwcml2YXRlIGNhbkRlYWN0aXZhdGVTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIHRoaXMudGFiU2V0SWQgPSBuZXh0SWQrKztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMudGFicy5kZXN0cm95KCk7XG4gICAgdGhpcy50YWJMYWJlbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2FuRGVhY3RpdmF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zZXRVcFJvdXRlcigpO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcbiAgICB0aGlzLnN1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIGFtb3VudCBvZiB0YWJzLCBpbiBvcmRlciB0byBiZVxuICAgIC8vIGFibGUgdG8gcmUtcmVuZGVyIHRoZSBjb250ZW50IGFzIG5ldyB0YWJzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgIHRoaXMudGFic1N1YnNjcmlwdGlvbiA9IHRoaXMudGFicy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCk7XG5cbiAgICAgIC8vIE1haW50YWluIHRoZSBwcmV2aW91c2x5LXNlbGVjdGVkIHRhYiBpZiBhIG5ldyB0YWIgaXMgYWRkZWQgb3IgcmVtb3ZlZCBhbmQgdGhlcmUgaXMgbm9cbiAgICAgIC8vIGV4cGxpY2l0IGNoYW5nZSB0aGF0IHNlbGVjdHMgYSBkaWZmZXJlbnQgdGFiLlxuICAgICAgaWYgKGluZGV4VG9TZWxlY3QgPT09IHRoaXMuc2VsZWN0ZWRJbmRleCkge1xuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGFic1tpXS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgLy8gQXNzaWduIGJvdGggdG8gdGhlIGBpbmRleFRvU2VsZWN0YCBhbmQgYHNlbGVjdGVkSW5kZXhgIHNvIHdlIGRvbid0IGZpcmUgYSBjaGFuZ2VkXG4gICAgICAgICAgICAvLyBldmVudCwgb3RoZXJ3aXNlIHRoZSBjb25zdW1lciBtYXkgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgaW4gc29tZSBlZGdlIGNhc2VzIGxpa2VcbiAgICAgICAgICAgIC8vIGFkZGluZyBhIHRhYiB3aXRoaW4gdGhlIGBzZWxlY3RlZEluZGV4Q2hhbmdlYCBldmVudC5cbiAgICAgICAgICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxuICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5zZWxlY3RlZEluZGV4ID09IG51bGw7XG5cbiAgICAgIGlmICghaXNGaXJzdFJ1bikge1xuICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXG4gICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XG5cbiAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XG4gICAgICAgICAgdGhpcy5jbWFjc1NlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxuICAgIHRoaXMudGFicy5mb3JFYWNoKCh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXG4gICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XG4gICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoaW5kZXg6IG51bWJlciwgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2xvc2UuZW1pdCh7IGluZGV4IH0pO1xuICB9XG5cbiAgb25BZGQoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy50YWJzLmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLnRhYnMgJiYgdGhpcy50YWJzLmxlbmd0aCkge1xuICAgICAgZXZlbnQudGFiID0gdGhpcy50YWJzLnRvQXJyYXkoKVtpbmRleF07XG4gICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiLCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIHRhYi5kZXNlbGVjdC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXZlbnQudGFiLnNlbGVjdC5lbWl0KCk7XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlVG9UYWJMYWJlbHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMudGFiTGFiZWxTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRhYkxhYmVsU3Vic2NyaXB0aW9uID0gbWVyZ2UoLi4udGhpcy50YWJzLm1hcCh0YWIgPT4gdGFiLnN0YXRlQ2hhbmdlcykpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVRvQWxsVGFiQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmFsbFRhYnMuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmFsbFRhYnMpKS5zdWJzY3JpYmUoKHRhYnM6IFF1ZXJ5TGlzdDxDbWFjc1RhYkNvbXBvbmVudD4pID0+IHtcbiAgICAgIHRoaXMudGFicy5yZXNldCh0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmNsb3Nlc3RUYWJTZXQgPT09IHRoaXMpKTtcbiAgICAgIHRoaXMudGFicy5ub3RpZnlPbkNoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbkRlYWN0aXZhdGVGdW4ocHJlOiBudW1iZXIsIG5leHQ6IG51bWJlcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jYW5EZWFjdGl2YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlID0gd3JhcEludG9PYnNlcnZhYmxlKHRoaXMuY2FuRGVhY3RpdmF0ZShwcmUsIG5leHQpKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoZmlyc3QoKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9mKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrTmF2SXRlbSh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0YWIuZGlzYWJsZWQpIHtcbiAgICAgIC8vIGlnbm9yZSBjYW5EZWFjdGl2YXRlXG4gICAgICB0YWIuY21hY3NDbGljay5lbWl0KCk7XG4gICAgICBpZiAoIXRoaXMuaXNSb3V0ZXJMaW5rQ2xpY2tFdmVudChpbmRleCwgZSkpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzUm91dGVyTGlua0NsaWNrRXZlbnQoaW5kZXg6IG51bWJlciwgZXZlbnQ6IE1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMubGlua1JvdXRlcikge1xuICAgICAgcmV0dXJuICEhdGhpcy50YWJzLnRvQXJyYXkoKVtpbmRleF0/LmxpbmtEaXJlY3RpdmU/LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgY29udGV4dG1lbnVOYXZJdGVtKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xuICAgICAgLy8gaWdub3JlIGNhbkRlYWN0aXZhdGVcbiAgICAgIHRhYi5jbWFjc0NvbnRleHRtZW51LmVtaXQoZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U2VsZWN0ZWRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5jYW5EZWFjdGl2YXRlU3Vic2NyaXB0aW9uID0gdGhpcy5jYW5EZWFjdGl2YXRlRnVuKHRoaXMuc2VsZWN0ZWRJbmRleCEsIGluZGV4KS5zdWJzY3JpYmUoY2FuID0+IHtcbiAgICAgIGlmIChjYW4pIHtcbiAgICAgICAgdGhpcy5jbWFjc1NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy50YWJOYXZCYXJSZWYuZm9jdXNJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFRhYkluZGV4KHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAodGFiLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXggPyAwIDogLTE7XG4gIH1cblxuICBnZXRUYWJDb250ZW50SWQoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYG56LXRhYnMtJHt0aGlzLnRhYlNldElkfS10YWItJHtpfWA7XG4gIH1cblxuICBwcml2YXRlIHNldFVwUm91dGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpbmtSb3V0ZXIpIHtcbiAgICAgIGlmICghdGhpcy5yb3V0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke1BSRUZJWH0geW91IHNob3VsZCBpbXBvcnQgJ1JvdXRlck1vZHVsZScgaWYgeW91IHdhbnQgdG8gdXNlICdsaW5rUm91dGVyJyFgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgICAgZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcbiAgICAgICAgICBkZWxheSgwKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlUm91dGVyQWN0aXZlKCk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUm91dGVyQWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvdXRlci5uYXZpZ2F0ZWQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTtcbiAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleChpbmRleCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGVBbGwgPSBpbmRleCA9PT0gLTE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2hvdWxkQWN0aXZlVGFiSW5kZXgoKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuaXNMaW5rQWN0aXZlKHRoaXMucm91dGVyKTtcblxuICAgIHJldHVybiB0YWJzLmZpbmRJbmRleCh0YWIgPT4ge1xuICAgICAgY29uc3QgYyA9IHRhYi5saW5rRGlyZWN0aXZlO1xuICAgICAgcmV0dXJuIGMgPyBpc0FjdGl2ZShjLnJvdXRlckxpbmspIHx8IGlzQWN0aXZlKGMucm91dGVyTGlua1dpdGhIcmVmKSA6IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xpbmtBY3RpdmUocm91dGVyOiBSb3V0ZXIpOiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IGJvb2xlYW4ge1xuICAgIHJldHVybiAobGluaz86IFJvdXRlckxpbmsgfCBSb3V0ZXJMaW5rV2l0aEhyZWYpID0+IChsaW5rID8gcm91dGVyLmlzQWN0aXZlKGxpbmsudXJsVHJlZSwgdGhpcy5saW5rRXhhY3QpIDogZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYWJDb250ZW50TWFyZ2luVmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLSh0aGlzLmNtYWNzU2VsZWN0ZWRJbmRleCB8fCAwKSAqIDEwMDtcbiAgfVxuXG4gIGdldFRhYkNvbnRlbnRNYXJnaW5MZWZ0KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudGFiUGFuZUFuaW1hdGVkKSB7XG4gICAgICBpZiAodGhpcy5kaXIgIT09ICdydGwnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkNvbnRlbnRNYXJnaW5WYWx1ZSgpICsgJyUnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgZ2V0VGFiQ29udGVudE1hcmdpblJpZ2h0KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudGFiUGFuZUFuaW1hdGVkKSB7XG4gICAgICBpZiAodGhpcy5kaXIgPT09ICdydGwnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkNvbnRlbnRNYXJnaW5WYWx1ZSgpICsgJyUnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==