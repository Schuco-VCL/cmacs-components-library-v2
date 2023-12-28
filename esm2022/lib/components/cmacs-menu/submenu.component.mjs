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
import * as i6 from "@angular/common";
import * as i7 from "@angular/cdk/overlay";
import * as i8 from "./submenu-inline-child.component";
import * as i9 from "./submenu-title.component";
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
    i0.ɵɵlistener("subMenuMouseState", function CmacsSubMenuComponent_ng_template_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.setMouseEnterState($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵclassMap(ctx_r7.menuWrapperClassName);
    i0.ɵɵclassProp("cmacs-dropdown-submenu-context-menu", ctx_r7.cmacsContextMenu);
    i0.ɵɵproperty("theme", ctx_r7.theme)("mode", ctx_r7.mode)("open", ctx_r7.open)("position", ctx_r7.position)("disabled", ctx_r7.disabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.menuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function CmacsSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, CmacsSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 15, "ng-template", 7);
    i0.ɵɵlistener("positionChange", function CmacsSubMenuComponent_ng_template_4_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onPositionChange($event)); });
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
    constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
        this.nzMenuService = nzMenuService;
        this.cdr = cdr;
        this.nzSubmenuService = nzSubmenuService;
        this.platform = platform;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.menuClassName = '';
        this.menuWrapperClassName = '';
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
    ngOnInit() {
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
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsSubMenuComponent_Factory(t) { return new (t || CmacsSubMenuComponent)(i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzSubmenuService), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(CmacsIsMenuInsideDropDownToken), i0.ɵɵdirectiveInject(i4.Directionality, 8), i0.ɵɵdirectiveInject(i5.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSubMenuComponent, selectors: [["", "cmacs-submenu", ""]], contentQueries: function CmacsSubMenuComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, CmacsSubMenuComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, CmacsMenuItemDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
        } }, viewQuery: function CmacsSubMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
        } }, hostVars: 34, hostBindings: function CmacsSubMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.disabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.open)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.disabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.open)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
        } }, inputs: { menuClassName: "menuClassName", menuWrapperClassName: "menuWrapperClassName", paddingLeft: "paddingLeft", title: "title", icon: "icon", cmacsIcon: "cmacsIcon", open: "open", cmacsContextMenu: "cmacsContextMenu", disabled: "disabled" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsSubmenu"], features: [i0.ɵɵProvidersFeature([NzSubmenuService]), i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 10, consts: [["cmacs-submenu-title", "", "cdkOverlayOrigin", "", 3, "icon", "cmacsIcon", "title", "mode", "disabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["cmacs-submenu-none-inline-child", "", 3, "theme", "mode", "open", "position", "disabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function CmacsSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i6.NgIf, i7.CdkConnectedOverlay, i7.CdkOverlayOrigin, i5.NzNoAnimationDirective, i8.NzSubmenuInlineChildComponent, i9.NzSubMenuTitleComponent, i10.NzSubmenuNoneInlineChildComponent], encapsulation: 2, changeDetection: 0 }); }
}
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
          class="{{menuWrapperClassName}}"
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
        }], menuWrapperClassName: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBRXhGLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQWtDL0MsMENBQXlEOzs7SUFFM0QseUJBU087Ozs7SUFOTCxrQ0FBYSxxQkFBQSxvRkFBQSx1RkFBQSxtQ0FBQSx1QkFBQTs7OztJQWlCWCw4QkFlQztJQURDLG9OQUFxQixlQUFBLGlDQUEwQixDQUFBLElBQUM7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S0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsSUFBSTtrQkFBNUIsS0FBSztZQUNtQixnQkFBZ0I7a0JBQXhDLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNhLFVBQVU7a0JBQTVCLE1BQU07WUFDMEQsZ0JBQWdCO2tCQUFoRixTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBRS9ELHdCQUF3QjtrQkFEdkIsZUFBZTttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFHN0QseUJBQXlCO2tCQUR4QixlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xyXG5pbXBvcnQgeyBDbWFjc01lbnVNb2RlVHlwZSwgQ21hY3NNZW51VGhlbWVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcclxuaW1wb3J0IHsgTnpTdWJtZW51U2VydmljZSB9IGZyb20gJy4vc3VibWVudS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGxpc3RPZlZlcnRpY2FsUG9zaXRpb25zID0gW1xyXG4gIFBPU0lUSU9OX01BUC5yaWdodFRvcCxcclxuICBQT1NJVElPTl9NQVAucmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLnJpZ2h0Qm90dG9tLFxyXG4gIFBPU0lUSU9OX01BUC5sZWZ0VG9wLFxyXG4gIFBPU0lUSU9OX01BUC5sZWZ0LFxyXG4gIFBPU0lUSU9OX01BUC5sZWZ0Qm90dG9tXHJcbl07XHJcbmNvbnN0IGxpc3RPZkhvcml6b250YWxQb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc3VibWVudV0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTdWJtZW51JyxcclxuICBwcm92aWRlcnM6IFtOelN1Ym1lbnVTZXJ2aWNlXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNtYWNzLXN1Ym1lbnUtdGl0bGVcclxuICAgICAgY2RrT3ZlcmxheU9yaWdpblxyXG4gICAgICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgICAgIFtpY29uXT1cImljb25cIlxyXG4gICAgICBbY21hY3NJY29uXT1cImNtYWNzSWNvblwiXHJcbiAgICAgIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbaXNNZW51SW5zaWRlRHJvcERvd25dPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxyXG4gICAgICBbcGFkZGluZ0xlZnRdPVwicGFkZGluZ0xlZnQgfHwgaW5saW5lUGFkZGluZ0xlZnRcIlxyXG4gICAgICAoc3ViTWVudU1vdXNlU3RhdGUpPVwic2V0TW91c2VFbnRlclN0YXRlKCRldmVudClcIlxyXG4gICAgICAodG9nZ2xlU3ViTWVudSk9XCJ0b2dnbGVTdWJNZW51KClcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCIgKm5nSWY9XCIhdGl0bGVcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgKm5nSWY9XCJtb2RlID09PSAnaW5saW5lJzsgZWxzZSBub25JbmxpbmVUZW1wbGF0ZVwiXHJcbiAgICAgIGNtYWNzLXN1Ym1lbnUtaW5saW5lLWNoaWxkXHJcbiAgICAgIFttb2RlXT1cIm1vZGVcIlxyXG4gICAgICBbb3Blbl09XCJvcGVuXCJcclxuICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFttZW51Q2xhc3NdPVwibWVudUNsYXNzTmFtZVwiXHJcbiAgICAgIFt0ZW1wbGF0ZU91dGxldF09XCJzdWJNZW51VGVtcGxhdGVcIlxyXG4gICAgPjwvZGl2PlxyXG4gICAgPG5nLXRlbXBsYXRlICNub25JbmxpbmVUZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIm92ZXJsYXlQb3NpdGlvbnNcIlxyXG4gICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJ0cmlnZ2VyV2lkdGghXCJcclxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwib3BlblwiXHJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlUcmFuc2Zvcm1PcmlnaW5Pbl09XCInLmFudC1tZW51LXN1Ym1lbnUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNtYWNzLXN1Ym1lbnUtbm9uZS1pbmxpbmUtY2hpbGRcclxuICAgICAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXHJcbiAgICAgICAgICBbbW9kZV09XCJtb2RlXCJcclxuICAgICAgICAgIFtvcGVuXT1cIm9wZW5cIlxyXG4gICAgICAgICAgY2xhc3M9XCJ7e21lbnVXcmFwcGVyQ2xhc3NOYW1lfX1cIlxyXG4gICAgICAgICAgW2NsYXNzLmNtYWNzLWRyb3Bkb3duLXN1Ym1lbnUtY29udGV4dC1tZW51XT1cImNtYWNzQ29udGV4dE1lbnVcIlxyXG4gICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbaXNNZW51SW5zaWRlRHJvcERvd25dPVwiaXNNZW51SW5zaWRlRHJvcERvd25cIlxyXG4gICAgICAgICAgW3RlbXBsYXRlT3V0bGV0XT1cInN1Yk1lbnVUZW1wbGF0ZVwiXHJcbiAgICAgICAgICBbbWVudUNsYXNzXT1cIm1lbnVDbGFzc05hbWVcIlxyXG4gICAgICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgICAgKHN1Yk1lbnVNb3VzZVN0YXRlKT1cInNldE1vdXNlRW50ZXJTdGF0ZSgkZXZlbnQpXCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDxuZy10ZW1wbGF0ZSAjc3ViTWVudVRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51XSc6IGBpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1vcGVuXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBvcGVuYCxcclxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZF0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNTZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdmVydGljYWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWhvcml6b250YWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICdob3Jpem9udGFsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaW5saW5lXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaW5saW5lJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYWN0aXZlXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc0FjdGl2ZWAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93bmAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtZGlzYWJsZWRdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBkaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtb3Blbl0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG9wZW5gLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXNlbGVjdGVkXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNTZWxlY3RlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtdmVydGljYWxdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAndmVydGljYWwnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1ob3Jpem9udGFsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ2hvcml6b250YWwnYCxcclxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1pbmxpbmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaW5saW5lJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtYWN0aXZlXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgaXNBY3RpdmVgLFxyXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1N1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBtZW51V3JhcHBlckNsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGFkZGluZ0xlZnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNtYWNzSWNvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7IFxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNtYWNzQ29udGV4dE1lbnUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbiwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgY2RrT3ZlcmxheU9yaWdpbjogRWxlbWVudFJlZiB8IG51bGwgPSBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpTdWJNZW51Q29tcG9uZW50OiBRdWVyeUxpc3Q8Q21hY3NTdWJNZW51Q29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NNZW51SXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxDbWFjc01lbnVJdGVtRGlyZWN0aXZlPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgbGV2ZWwgPSB0aGlzLm56U3VibWVudVNlcnZpY2UubGV2ZWw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcG9zaXRpb24gPSAncmlnaHQnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgdGhlbWU6IENtYWNzTWVudVRoZW1lVHlwZSA9ICdsaWdodCc7XHJcbiAgbW9kZTogQ21hY3NNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xyXG4gIGlubGluZVBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBvdmVybGF5UG9zaXRpb25zID0gbGlzdE9mVmVydGljYWxQb3NpdGlvbnM7XHJcbiAgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgLyoqIHNldCB0aGUgc3VibWVudSBob3N0IG9wZW4gc3RhdHVzIGRpcmVjdGx5ICoqL1xyXG4gIHNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKG9wZW4pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU3ViTWVudSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKCF0aGlzLm9wZW4pO1xyXG4gIH1cclxuXHJcbiAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQWN0aXZlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5tb2RlICE9PSAnaW5saW5lJykge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0TW91c2VFbnRlclRpdGxlT3JPdmVybGF5U3RhdGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuY2RrT3ZlcmxheU9yaWdpbikge1xyXG4gICAgICAvKiogVE9ETzogZmFzdCBkb20gKiovXHJcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKTtcclxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdyaWdodFRvcCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHRCb3R0b20nIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcclxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSAnbGVmdFRvcCcgfHwgcGxhY2VtZW50ID09PSAnbGVmdEJvdHRvbScgfHwgcGxhY2VtZW50ID09PSAnbGVmdCcpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9ICdsZWZ0JztcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgbnpTdWJtZW51U2VydmljZTogTnpTdWJtZW51U2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhbixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8qKiBzdWJtZW51IHRoZW1lIHVwZGF0ZSAqKi9cclxuICAgIHRoaXMubnpNZW51U2VydmljZS50aGVtZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh0aGVtZSA9PiB7XHJcbiAgICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICAgIC8qKiBzdWJtZW51IG1vZGUgdXBkYXRlICoqL1xyXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobW9kZSA9PiB7XHJcbiAgICAgIHRoaXMubW9kZSA9IG1vZGU7XHJcbiAgICAgIGlmIChtb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBsaXN0T2ZIb3Jpem9udGFsUG9zaXRpb25zO1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBsaXN0T2ZWZXJ0aWNhbFBvc2l0aW9ucztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgLyoqIGlubGluZUluZGVudCB1cGRhdGUgKiovXHJcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLm56U3VibWVudVNlcnZpY2UubW9kZSQsIHRoaXMubnpNZW51U2VydmljZS5pbmxpbmVJbmRlbnQkXSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKChbbW9kZSwgaW5saW5lSW5kZW50XSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5saW5lUGFkZGluZ0xlZnQgPSBtb2RlID09PSAnaW5saW5lJyA/IHRoaXMubGV2ZWwgKiBpbmxpbmVJbmRlbnQgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIC8qKiBjdXJyZW50IHN1Ym1lbnUgb3BlbiBzdGF0dXMgKiovXHJcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2UuaXNDdXJyZW50U3ViTWVudU9wZW4kLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUob3BlbiA9PiB7XHJcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBvcGVuO1xyXG4gICAgICBpZiAob3BlbiAhPT0gdGhpcy5vcGVuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSBvcGVuO1xyXG4gICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3Blbik7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlID0gdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlO1xyXG4gICAgY29uc3QgY2hhbmdlcyA9IGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUhLmNoYW5nZXM7XHJcbiAgICBjb25zdCBtZXJnZWRPYnNlcnZhYmxlID0gbWVyZ2UoLi4uW2NoYW5nZXMsIC4uLmxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmUhLm1hcChtZW51ID0+IG1lbnUuc2VsZWN0ZWQkKV0pO1xyXG4gICAgY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBzdGFydFdpdGgobGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSksXHJcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1lcmdlZE9ic2VydmFibGUpLFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICBtYXAoKCkgPT4gbGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSEuc29tZShlID0+IGUuc2VsZWN0ZWQpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkID0+IHtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBzZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG9wZW4gfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAob3Blbikge1xyXG4gICAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKHRoaXMub3Blbik7XHJcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=