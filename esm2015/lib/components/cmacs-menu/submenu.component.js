import { __decorate } from "tslib";
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, Host, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { combineLatest, merge, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { CmacsMenuItemDirective } from './menu-item.directive';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import { NzSubmenuService } from './submenu.service';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
import * as i2 from "./submenu.service";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/bidi";
import * as i5 from "ng-zorro-antd/core/no-animation";
import * as i6 from "./submenu-title.component";
import * as i7 from "@angular/cdk/overlay";
import * as i8 from "@angular/common";
import * as i9 from "./submenu-inline-child.component";
import * as i10 from "./submenu-non-inline-child.component";
const _c0 = ["cmacs-submenu", ""];
function CmacsSubMenuComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!title"]);
} }
function CmacsSubMenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("mode", ctx_r2.mode)("open", ctx_r2.open)("@.disabled", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation)("menuClass", ctx_r2.menuClassName)("templateOutlet", _r5);
} }
function CmacsSubMenuComponent_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵlistener("subMenuMouseState", function CmacsSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.setMouseEnterState($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵclassProp("cmacs-dropdown-submenu-context-menu", ctx_r7.cmacsContextMenu);
    i0.ɵɵproperty("theme", ctx_r7.theme)("mode", ctx_r7.mode)("open", ctx_r7.open)("position", ctx_r7.position)("disabled", ctx_r7.disabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.menuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function CmacsSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, CmacsSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 12, "ng-template", 7);
    i0.ɵɵlistener("positionChange", function CmacsSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onPositionChange($event); });
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵproperty("cdkConnectedOverlayPositions", ctx_r4.overlayPositions)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayWidth", ctx_r4.triggerWidth)("cdkConnectedOverlayOpen", ctx_r4.open)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
} }
function CmacsSubMenuComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
const _c1 = [[["", "title", ""]], "*"];
const _c2 = ["[title]", "*"];
const listOfVerticalPositions = [
    POSITION_MAP.rightTop,
    POSITION_MAP.right,
    POSITION_MAP.rightBottom,
    POSITION_MAP.leftTop,
    POSITION_MAP.left,
    POSITION_MAP.leftBottom
];
const listOfHorizontalPositions = [POSITION_MAP.bottomLeft];
export class CmacsSubMenuComponent {
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.menuClassName = '';
        this.paddingLeft = null;
        this.title = null;
        this.icon = null;
        this.cmacsIcon = null;
        this.open = false;
        this.cmacsContextMenu = false;
        this.disabled = false;
        this.openChange = new EventEmitter();
        this.cdkOverlayOrigin = null;
        this.listOfNzSubMenuComponent = null;
        this.listOfNzMenuItemDirective = null;
        this.level = this.nzSubmenuService.level;
        this.destroy$ = new Subject();
        this.position = 'right';
        this.triggerWidth = null;
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlinePaddingLeft = null;
        this.overlayPositions = listOfVerticalPositions;
        this.isSelected = false;
        this.isActive = false;
        this.dir = 'ltr';
    }
    /** set the submenu host open status directly **/
    setOpenStateWithoutDebounce(open) {
        this.nzSubmenuService.setOpenStateWithoutDebounce(open);
    }
    toggleSubMenu() {
        this.setOpenStateWithoutDebounce(!this.open);
    }
    setMouseEnterState(value) {
        this.isActive = value;
        if (this.mode !== 'inline') {
            this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
        }
    }
    setTriggerWidth() {
        if (this.mode === 'horizontal' && this.platform.isBrowser && this.cdkOverlayOrigin) {
            /** TODO: fast dom **/
            this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
        }
    }
    onPositionChange(position) {
        const placement = getPlacementName(position);
        if (placement === 'rightTop' || placement === 'rightBottom' || placement === 'right') {
            this.position = 'right';
        }
        else if (placement === 'leftTop' || placement === 'leftBottom' || placement === 'left') {
            this.position = 'left';
        }
        this.cdr.markForCheck();
    }
    ngOnInit() {
        var _a;
        /** submenu theme update **/
        this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe(theme => {
            this.theme = theme;
            this.cdr.markForCheck();
        });
        /** submenu mode update **/
        this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe(mode => {
            this.mode = mode;
            if (mode === 'horizontal') {
                this.overlayPositions = listOfHorizontalPositions;
            }
            else if (mode === 'vertical') {
                this.overlayPositions = listOfVerticalPositions;
            }
            this.cdr.markForCheck();
        });
        /** inlineIndent update **/
        combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([mode, inlineIndent]) => {
            this.inlinePaddingLeft = mode === 'inline' ? this.level * inlineIndent : null;
            this.cdr.markForCheck();
        });
        /** current submenu open status **/
        this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe(open => {
            this.isActive = open;
            if (open !== this.open) {
                this.setTriggerWidth();
                this.open = open;
                this.openChange.emit(this.open);
                this.cdr.markForCheck();
            }
        });
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        this.setTriggerWidth();
        const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
        const changes = listOfNzMenuItemDirective.changes;
        const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map(menu => menu.selected$)]);
        changes
            .pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some(e => e.selected)), takeUntil(this.destroy$))
            .subscribe(selected => {
            this.isSelected = selected;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { open } = changes;
        if (open) {
            this.nzSubmenuService.setOpenStateWithoutDebounce(this.open);
            this.setTriggerWidth();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsSubMenuComponent.ɵfac = function CmacsSubMenuComponent_Factory(t) { return new (t || CmacsSubMenuComponent)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzSubmenuService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i4.Directionality, 8), i0.ɵɵdirectiveInject(i5.NzNoAnimationDirective, 9)); };
CmacsSubMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSubMenuComponent, selectors: [["", "cmacs-submenu", ""]], contentQueries: function CmacsSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CmacsSubMenuComponent, 1);
        i0.ɵɵcontentQuery(dirIndex, CmacsMenuItemDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    } }, viewQuery: function CmacsSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(CdkOverlayOrigin, 3, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    } }, hostVars: 34, hostBindings: function CmacsSubMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.disabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.open)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.disabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.open)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
    } }, inputs: { menuClassName: "menuClassName", paddingLeft: "paddingLeft", title: "title", icon: "icon", cmacsIcon: "cmacsIcon", open: "open", cmacsContextMenu: "cmacsContextMenu", disabled: "disabled" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsSubmenu"], features: [i0.ɵɵProvidersFeature([NzSubmenuService]), i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 10, consts: [["cmacs-submenu-title", "", "cdkOverlayOrigin", "", 3, "icon", "cmacsIcon", "title", "mode", "disabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["cmacs-submenu-none-inline-child", "", 3, "theme", "mode", "open", "position", "disabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function CmacsSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("subMenuMouseState", function CmacsSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) { return ctx.setMouseEnterState($event); })("toggleSubMenu", function CmacsSubMenuComponent_Template_div_toggleSubMenu_0_listener() { return ctx.toggleSubMenu(); });
        i0.ɵɵtemplate(2, CmacsSubMenuComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CmacsSubMenuComponent_div_3_Template, 1, 6, "div", 3);
        i0.ɵɵtemplate(4, CmacsSubMenuComponent_ng_template_4_Template, 1, 5, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, CmacsSubMenuComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(5);
        i0.ɵɵproperty("icon", ctx.icon)("cmacsIcon", ctx.cmacsIcon)("title", ctx.title)("mode", ctx.mode)("disabled", ctx.disabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.paddingLeft || ctx.inlinePaddingLeft);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mode === "inline")("ngIfElse", _r3);
    } }, directives: [i6.NzSubMenuTitleComponent, i7.CdkOverlayOrigin, i8.NgIf, i9.NzSubmenuInlineChildComponent, i5.NzNoAnimationDirective, i7.CdkConnectedOverlay, i10.NzSubmenuNoneInlineChildComponent], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSubMenuComponent.prototype, "open", void 0);
__decorate([
    InputBoolean()
], CmacsSubMenuComponent.prototype, "cmacsContextMenu", void 0);
__decorate([
    InputBoolean()
], CmacsSubMenuComponent.prototype, "disabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSubMenuComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-submenu]',
                exportAs: 'cmacsSubmenu',
                providers: [NzSubmenuService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: `
    <div
      cmacs-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [icon]="icon"
      [cmacsIcon]="cmacsIcon"
      [title]="title"
      [mode]="mode"
      [disabled]="disabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="paddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      <ng-content select="[title]" *ngIf="!title"></ng-content>
    </div>
    <div
      *ngIf="mode === 'inline'; else nonInlineTemplate"
      cmacs-submenu-inline-child
      [mode]="mode"
      [open]="open"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [menuClass]="menuClassName"
      [templateOutlet]="subMenuTemplate"
    ></div>
    <ng-template #nonInlineTemplate>
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="open"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          cmacs-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [open]="open"
          [class.cmacs-dropdown-submenu-context-menu]="cmacsContextMenu"
          [position]="position"
          [disabled]="disabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="menuClassName"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    </ng-template>

    <ng-template #subMenuTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
                host: {
                    '[class.ant-dropdown-menu-submenu]': `isMenuInsideDropDown`,
                    '[class.ant-dropdown-menu-submenu-disabled]': `isMenuInsideDropDown && disabled`,
                    '[class.ant-dropdown-menu-submenu-open]': `isMenuInsideDropDown && open`,
                    '[class.ant-dropdown-menu-submenu-selected]': `isMenuInsideDropDown && isSelected`,
                    '[class.ant-dropdown-menu-submenu-vertical]': `isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-dropdown-menu-submenu-horizontal]': `isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-dropdown-menu-submenu-inline]': `isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-dropdown-menu-submenu-active]': `isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu]': `!isMenuInsideDropDown`,
                    '[class.ant-menu-submenu-disabled]': `!isMenuInsideDropDown && disabled`,
                    '[class.ant-menu-submenu-open]': `!isMenuInsideDropDown && open`,
                    '[class.ant-menu-submenu-selected]': `!isMenuInsideDropDown && isSelected`,
                    '[class.ant-menu-submenu-vertical]': `!isMenuInsideDropDown && mode === 'vertical'`,
                    '[class.ant-menu-submenu-horizontal]': `!isMenuInsideDropDown && mode === 'horizontal'`,
                    '[class.ant-menu-submenu-inline]': `!isMenuInsideDropDown && mode === 'inline'`,
                    '[class.ant-menu-submenu-active]': `!isMenuInsideDropDown && isActive`,
                    '[class.ant-menu-submenu-rtl]': `dir === 'rtl'`
                }
            }]
    }], function () { return [{ type: i1.MenuService }, { type: i0.ChangeDetectorRef }, { type: i2.NzSubmenuService }, { type: i3.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }, { type: i4.Directionality, decorators: [{
                type: Optional
            }] }, { type: i5.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }]; }, { menuClassName: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], cmacsIcon: [{
            type: Input
        }], open: [{
            type: Input
        }], cmacsContextMenu: [{
            type: Input
        }], disabled: [{
            type: Input
        }], openChange: [{
            type: Output
        }], cdkOverlayOrigin: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
        }], listOfNzSubMenuComponent: [{
            type: ContentChildren,
            args: [CmacsSubMenuComponent, { descendants: true }]
        }], listOfNzMenuItemDirective: [{
            type: ContentChildren,
            args: [CmacsMenuItemDirective, { descendants: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBRXhGLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQWtDL0MsMENBQXlEOzs7SUFFM0QseUJBU087Ozs7SUFOTCxrQ0FBYSxxQkFBQSxvRkFBQSx1RkFBQSxtQ0FBQSx1QkFBQTs7OztJQWlCWCw4QkFjQztJQURDLHlQQUFnRDtJQUNqRCxpQkFBTTs7OztJQVRMLDhF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S0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ2EsVUFBVTtrQkFBNUIsTUFBTTtZQUMwRCxnQkFBZ0I7a0JBQWhGLFNBQVM7bUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFFL0Qsd0JBQXdCO2tCQUR2QixlQUFlO21CQUFDLHFCQUFxQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUc3RCx5QkFBeUI7a0JBRHhCLGVBQWU7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XHJcbmltcG9ydCB7IENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJy4vbWVudS50b2tlbic7XHJcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlLCBDbWFjc01lbnVUaGVtZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xyXG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9zdWJtZW51LnNlcnZpY2UnO1xyXG5cclxuY29uc3QgbGlzdE9mVmVydGljYWxQb3NpdGlvbnMgPSBbXHJcbiAgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLFxyXG4gIFBPU0lUSU9OX01BUC5yaWdodCxcclxuICBQT1NJVElPTl9NQVAucmlnaHRCb3R0b20sXHJcbiAgUE9TSVRJT05fTUFQLmxlZnRUb3AsXHJcbiAgUE9TSVRJT05fTUFQLmxlZnQsXHJcbiAgUE9TSVRJT05fTUFQLmxlZnRCb3R0b21cclxuXTtcclxuY29uc3QgbGlzdE9mSG9yaXpvbnRhbFBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVAuYm90dG9tTGVmdF07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tjbWFjcy1zdWJtZW51XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1N1Ym1lbnUnLFxyXG4gIHByb3ZpZGVyczogW056U3VibWVudVNlcnZpY2VdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY21hY3Mtc3VibWVudS10aXRsZVxyXG4gICAgICBjZGtPdmVybGF5T3JpZ2luXHJcbiAgICAgICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICAgICAgW2ljb25dPVwiaWNvblwiXHJcbiAgICAgIFtjbWFjc0ljb25dPVwiY21hY3NJY29uXCJcclxuICAgICAgW3RpdGxlXT1cInRpdGxlXCJcclxuICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtpc01lbnVJbnNpZGVEcm9wRG93bl09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXHJcbiAgICAgIFtwYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8fCBpbmxpbmVQYWRkaW5nTGVmdFwiXHJcbiAgICAgIChzdWJNZW51TW91c2VTdGF0ZSk9XCJzZXRNb3VzZUVudGVyU3RhdGUoJGV2ZW50KVwiXHJcbiAgICAgICh0b2dnbGVTdWJNZW51KT1cInRvZ2dsZVN1Yk1lbnUoKVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0aXRsZV1cIiAqbmdJZj1cIiF0aXRsZVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAqbmdJZj1cIm1vZGUgPT09ICdpbmxpbmUnOyBlbHNlIG5vbklubGluZVRlbXBsYXRlXCJcclxuICAgICAgY21hY3Mtc3VibWVudS1pbmxpbmUtY2hpbGRcclxuICAgICAgW21vZGVdPVwibW9kZVwiXHJcbiAgICAgIFtvcGVuXT1cIm9wZW5cIlxyXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW21lbnVDbGFzc109XCJtZW51Q2xhc3NOYW1lXCJcclxuICAgICAgW3RlbXBsYXRlT3V0bGV0XT1cInN1Yk1lbnVUZW1wbGF0ZVwiXHJcbiAgICA+PC9kaXY+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vbklubGluZVRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwib3ZlcmxheVBvc2l0aW9uc1wiXHJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cInRyaWdnZXJXaWR0aCFcIlxyXG4gICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJvcGVuXCJcclxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LW1lbnUtc3VibWVudSdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY21hY3Mtc3VibWVudS1ub25lLWlubGluZS1jaGlsZFxyXG4gICAgICAgICAgW3RoZW1lXT1cInRoZW1lXCJcclxuICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICAgICAgW29wZW5dPVwib3BlblwiXHJcbiAgICAgICAgICBbY2xhc3MuY21hY3MtZHJvcGRvd24tc3VibWVudS1jb250ZXh0LW1lbnVdPVwiY21hY3NDb250ZXh0TWVudVwiXHJcbiAgICAgICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgIFtpc01lbnVJbnNpZGVEcm9wRG93bl09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXHJcbiAgICAgICAgICBbdGVtcGxhdGVPdXRsZXRdPVwic3ViTWVudVRlbXBsYXRlXCJcclxuICAgICAgICAgIFttZW51Q2xhc3NdPVwibWVudUNsYXNzTmFtZVwiXHJcbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgICAoc3ViTWVudU1vdXNlU3RhdGUpPVwic2V0TW91c2VFbnRlclN0YXRlKCRldmVudClcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgPG5nLXRlbXBsYXRlICNzdWJNZW51VGVtcGxhdGU+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1kaXNhYmxlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgZGlzYWJsZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LW9wZW5dJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG9wZW5gLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXNlbGVjdGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc1NlbGVjdGVkYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS12ZXJ0aWNhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ3ZlcnRpY2FsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ2hvcml6b250YWwnYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1pbmxpbmVdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICdpbmxpbmUnYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hY3RpdmVdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGlzQWN0aXZlYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1vcGVuXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgb3BlbmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc1NlbGVjdGVkYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS12ZXJ0aWNhbF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LWlubGluZV0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICdpbmxpbmUnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1hY3RpdmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc0FjdGl2ZWAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG1lbnVDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBjbWFjc0ljb246IHN0cmluZyB8IG51bGwgPSBudWxsOyBcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc0NvbnRleHRNZW51ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNka092ZXJsYXlPcmlnaW46IEVsZW1lbnRSZWYgfCBudWxsID0gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzU3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcclxuICBAQ29udGVudENoaWxkcmVuKENtYWNzTWVudUl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlOiBRdWVyeUxpc3Q8Q21hY3NNZW51SXRlbURpcmVjdGl2ZT4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGxldmVsID0gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICB0cmlnZ2VyV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHRoZW1lOiBDbWFjc01lbnVUaGVtZVR5cGUgPSAnbGlnaHQnO1xyXG4gIG1vZGU6IENtYWNzTWVudU1vZGVUeXBlID0gJ3ZlcnRpY2FsJztcclxuICBpbmxpbmVQYWRkaW5nTGVmdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgb3ZlcmxheVBvc2l0aW9ucyA9IGxpc3RPZlZlcnRpY2FsUG9zaXRpb25zO1xyXG4gIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIC8qKiBzZXQgdGhlIHN1Ym1lbnUgaG9zdCBvcGVuIHN0YXR1cyBkaXJlY3RseSAqKi9cclxuICBzZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShvcGVuKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVN1Yk1lbnUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSghdGhpcy5vcGVuKTtcclxuICB9XHJcblxyXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0FjdGl2ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMubW9kZSAhPT0gJ2lubGluZScpIHtcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheVN0YXRlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLmNka092ZXJsYXlPcmlnaW4pIHtcclxuICAgICAgLyoqIFRPRE86IGZhc3QgZG9tICoqL1xyXG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMuY2RrT3ZlcmxheU9yaWdpbiEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbik7XHJcbiAgICBpZiAocGxhY2VtZW50ID09PSAncmlnaHRUb3AnIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0Qm90dG9tJyB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnRUb3AnIHx8IHBsYWNlbWVudCA9PT0gJ2xlZnRCb3R0b20nIHx8IHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24gPSAnbGVmdCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIEBJbmplY3QoQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuKSBwdWJsaWMgaXNNZW51SW5zaWRlRHJvcERvd246IGJvb2xlYW4sXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvKiogc3VibWVudSB0aGVtZSB1cGRhdGUgKiovXHJcbiAgICB0aGlzLm56TWVudVNlcnZpY2UudGhlbWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhlbWUgPT4ge1xyXG4gICAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICAvKiogc3VibWVudSBtb2RlIHVwZGF0ZSAqKi9cclxuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5tb2RlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG1vZGUgPT4ge1xyXG4gICAgICB0aGlzLm1vZGUgPSBtb2RlO1xyXG4gICAgICBpZiAobW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25zID0gbGlzdE9mSG9yaXpvbnRhbFBvc2l0aW9ucztcclxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25zID0gbGlzdE9mVmVydGljYWxQb3NpdGlvbnM7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIC8qKiBpbmxpbmVJbmRlbnQgdXBkYXRlICoqL1xyXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW21vZGUsIGlubGluZUluZGVudF0pID0+IHtcclxuICAgICAgICB0aGlzLmlubGluZVBhZGRpbmdMZWZ0ID0gbW9kZSA9PT0gJ2lubGluZScgPyB0aGlzLmxldmVsICogaW5saW5lSW5kZW50IDogbnVsbDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAvKiogY3VycmVudCBzdWJtZW51IG9wZW4gc3RhdHVzICoqL1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmlzQ3VycmVudFN1Yk1lbnVPcGVuJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKG9wZW4gPT4ge1xyXG4gICAgICB0aGlzLmlzQWN0aXZlID0gb3BlbjtcclxuICAgICAgaWYgKG9wZW4gIT09IHRoaXMub3Blbikge1xyXG4gICAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gb3BlbjtcclxuICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgY29uc3QgbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSA9IHRoaXMubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZTtcclxuICAgIGNvbnN0IGNoYW5nZXMgPSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5jaGFuZ2VzO1xyXG4gICAgY29uc3QgbWVyZ2VkT2JzZXJ2YWJsZSA9IG1lcmdlKC4uLltjaGFuZ2VzLCAuLi5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5tYXAobWVudSA9PiBtZW51LnNlbGVjdGVkJCldKTtcclxuICAgIGNoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUpLFxyXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtZXJnZWRPYnNlcnZhYmxlKSxcclxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgbWFwKCgpID0+IGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUhLnNvbWUoZSA9PiBlLnNlbGVjdGVkKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShzZWxlY3RlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBvcGVuIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG9wZW4pIHtcclxuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSh0aGlzLm9wZW4pO1xyXG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19