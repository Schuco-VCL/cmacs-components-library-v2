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
    i0.ɵɵproperty("theme", ctx_r7.theme)("mode", ctx_r7.mode)("open", ctx_r7.open)("position", ctx_r7.position)("disabled", ctx_r7.disabled)("isMenuInsideDropDown", ctx_r7.isMenuInsideDropDown)("templateOutlet", _r5)("menuClass", ctx_r7.menuClassName)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation);
} }
function CmacsSubMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵtemplate(0, CmacsSubMenuComponent_ng_template_4_ng_template_0_Template, 1, 10, "ng-template", 7);
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
        this.open = false;
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
    } }, inputs: { menuClassName: "menuClassName", paddingLeft: "paddingLeft", title: "title", icon: "icon", open: "open", disabled: "disabled" }, outputs: { openChange: "openChange" }, exportAs: ["cmacsSubmenu"], features: [i0.ɵɵProvidersFeature([NzSubmenuService]), i0.ɵɵNgOnChangesFeature], attrs: _c0, ngContentSelectors: _c2, decls: 8, vars: 9, consts: [["cmacs-submenu-title", "", "cdkOverlayOrigin", "", 3, "icon", "title", "mode", "disabled", "isMenuInsideDropDown", "paddingLeft", "subMenuMouseState", "toggleSubMenu"], ["origin", "cdkOverlayOrigin"], [4, "ngIf"], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet", 4, "ngIf", "ngIfElse"], ["nonInlineTemplate", ""], ["subMenuTemplate", ""], ["cmacs-submenu-inline-child", "", 3, "mode", "open", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "positionChange"], ["cmacs-submenu-none-inline-child", "", 3, "theme", "mode", "open", "position", "disabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation", "subMenuMouseState"]], template: function CmacsSubMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("icon", ctx.icon)("title", ctx.title)("mode", ctx.mode)("disabled", ctx.disabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.paddingLeft || ctx.inlinePaddingLeft);
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
        }], open: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbWVudS9zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBRXhGLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBSU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQWlDL0MsMENBQXlEOzs7SUFFM0QseUJBU087Ozs7SUFOTCxrQ0FBYSxxQkFBQSxvRkFBQSx1RkFBQSxtQ0FBQSx1QkFBQTs7OztJQWlCWCw4QkFhQztJQURDLHlQQUFnRDtJQUNqRCxpQkFBTTs7OztJQVhMLG9D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QkFEdkIsZUFBZTttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7WUFHN0QseUJBQXlCO2tCQUR4QixlQUFlO21CQUFDLHNCQUFzQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuL21lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4gfSBmcm9tICcuL21lbnUudG9rZW4nO1xuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUsIENtYWNzTWVudVRoZW1lVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5pbXBvcnQgeyBOelN1Ym1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9zdWJtZW51LnNlcnZpY2UnO1xuXG5jb25zdCBsaXN0T2ZWZXJ0aWNhbFBvc2l0aW9ucyA9IFtcbiAgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLFxuICBQT1NJVElPTl9NQVAucmlnaHQsXG4gIFBPU0lUSU9OX01BUC5yaWdodEJvdHRvbSxcbiAgUE9TSVRJT05fTUFQLmxlZnRUb3AsXG4gIFBPU0lUSU9OX01BUC5sZWZ0LFxuICBQT1NJVElPTl9NQVAubGVmdEJvdHRvbVxuXTtcbmNvbnN0IGxpc3RPZkhvcml6b250YWxQb3NpdGlvbnMgPSBbUE9TSVRJT05fTUFQLmJvdHRvbUxlZnRdO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc3VibWVudV0nLFxuICBleHBvcnRBczogJ2NtYWNzU3VibWVudScsXG4gIHByb3ZpZGVyczogW056U3VibWVudVNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgY21hY3Mtc3VibWVudS10aXRsZVxuICAgICAgY2RrT3ZlcmxheU9yaWdpblxuICAgICAgI29yaWdpbj1cImNka092ZXJsYXlPcmlnaW5cIlxuICAgICAgW2ljb25dPVwiaWNvblwiXG4gICAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW2lzTWVudUluc2lkZURyb3BEb3duXT1cImlzTWVudUluc2lkZURyb3BEb3duXCJcbiAgICAgIFtwYWRkaW5nTGVmdF09XCJwYWRkaW5nTGVmdCB8fCBpbmxpbmVQYWRkaW5nTGVmdFwiXG4gICAgICAoc3ViTWVudU1vdXNlU3RhdGUpPVwic2V0TW91c2VFbnRlclN0YXRlKCRldmVudClcIlxuICAgICAgKHRvZ2dsZVN1Yk1lbnUpPVwidG9nZ2xlU3ViTWVudSgpXCJcbiAgICA+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdGl0bGVdXCIgKm5nSWY9XCIhdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJtb2RlID09PSAnaW5saW5lJzsgZWxzZSBub25JbmxpbmVUZW1wbGF0ZVwiXG4gICAgICBjbWFjcy1zdWJtZW51LWlubGluZS1jaGlsZFxuICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICBbb3Blbl09XCJvcGVuXCJcbiAgICAgIFtALmRpc2FibGVkXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcbiAgICAgIFttZW51Q2xhc3NdPVwibWVudUNsYXNzTmFtZVwiXG4gICAgICBbdGVtcGxhdGVPdXRsZXRdPVwic3ViTWVudVRlbXBsYXRlXCJcbiAgICA+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNub25JbmxpbmVUZW1wbGF0ZT5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gICAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJvdmVybGF5UG9zaXRpb25zXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlXaWR0aF09XCJ0cmlnZ2VyV2lkdGghXCJcbiAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIm9wZW5cIlxuICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LW1lbnUtc3VibWVudSdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY21hY3Mtc3VibWVudS1ub25lLWlubGluZS1jaGlsZFxuICAgICAgICAgIFt0aGVtZV09XCJ0aGVtZVwiXG4gICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICAgW29wZW5dPVwib3BlblwiXG4gICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc2l0aW9uXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFtpc01lbnVJbnNpZGVEcm9wRG93bl09XCJpc01lbnVJbnNpZGVEcm9wRG93blwiXG4gICAgICAgICAgW3RlbXBsYXRlT3V0bGV0XT1cInN1Yk1lbnVUZW1wbGF0ZVwiXG4gICAgICAgICAgW21lbnVDbGFzc109XCJtZW51Q2xhc3NOYW1lXCJcbiAgICAgICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXG4gICAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxuICAgICAgICAgIChzdWJNZW51TW91c2VTdGF0ZSk9XCJzZXRNb3VzZUVudGVyU3RhdGUoJGV2ZW50KVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjc3ViTWVudVRlbXBsYXRlPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnVdJzogYGlzTWVudUluc2lkZURyb3BEb3duYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWRdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtb3Blbl0nOiBgaXNNZW51SW5zaWRlRHJvcERvd24gJiYgb3BlbmAsXG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXNlbGVjdGVkXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc1NlbGVjdGVkYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdmVydGljYWxdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1ob3Jpem9udGFsXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBtb2RlID09PSAnaG9yaXpvbnRhbCdgLFxuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1pbmxpbmVdJzogYGlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYWN0aXZlXSc6IGBpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc0FjdGl2ZWAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51XSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd25gLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGRpc2FibGVkYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtb3Blbl0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG9wZW5gLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1zZWxlY3RlZF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIGlzU2VsZWN0ZWRgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS12ZXJ0aWNhbF0nOiBgIWlzTWVudUluc2lkZURyb3BEb3duICYmIG1vZGUgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1ob3Jpem9udGFsXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lXSc6IGAhaXNNZW51SW5zaWRlRHJvcERvd24gJiYgbW9kZSA9PT0gJ2lubGluZSdgLFxuICAgICdbY2xhc3MuYW50LW1lbnUtc3VibWVudS1hY3RpdmVdJzogYCFpc01lbnVJbnNpZGVEcm9wRG93biAmJiBpc0FjdGl2ZWAsXG4gICAgJ1tjbGFzcy5hbnQtbWVudS1zdWJtZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1N1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbWVudUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHBhZGRpbmdMZWZ0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBjZGtPdmVybGF5T3JpZ2luOiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XG4gIEBDb250ZW50Q2hpbGRyZW4oQ21hY3NTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpc3RPZk56U3ViTWVudUNvbXBvbmVudDogUXVlcnlMaXN0PENtYWNzU3ViTWVudUNvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcbiAgQENvbnRlbnRDaGlsZHJlbihDbWFjc01lbnVJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpc3RPZk56TWVudUl0ZW1EaXJlY3RpdmU6IFF1ZXJ5TGlzdDxDbWFjc01lbnVJdGVtRGlyZWN0aXZlPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGxldmVsID0gdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLmxldmVsO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcG9zaXRpb24gPSAncmlnaHQnO1xuICB0cmlnZ2VyV2lkdGg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICB0aGVtZTogQ21hY3NNZW51VGhlbWVUeXBlID0gJ2xpZ2h0JztcbiAgbW9kZTogQ21hY3NNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xuICBpbmxpbmVQYWRkaW5nTGVmdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIG92ZXJsYXlQb3NpdGlvbnMgPSBsaXN0T2ZWZXJ0aWNhbFBvc2l0aW9ucztcbiAgaXNTZWxlY3RlZCA9IGZhbHNlO1xuICBpc0FjdGl2ZSA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIC8qKiBzZXQgdGhlIHN1Ym1lbnUgaG9zdCBvcGVuIHN0YXR1cyBkaXJlY3RseSAqKi9cbiAgc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56U3VibWVudVNlcnZpY2Uuc2V0T3BlblN0YXRlV2l0aG91dERlYm91bmNlKG9wZW4pO1xuICB9XG5cbiAgdG9nZ2xlU3ViTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZSghdGhpcy5vcGVuKTtcbiAgfVxuXG4gIHNldE1vdXNlRW50ZXJTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5tb2RlICE9PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLnNldE1vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheVN0YXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyICYmIHRoaXMuY2RrT3ZlcmxheU9yaWdpbikge1xuICAgICAgLyoqIFRPRE86IGZhc3QgZG9tICoqL1xuICAgICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4hLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbik7XG4gICAgaWYgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0VG9wJyB8fCBwbGFjZW1lbnQgPT09ICdyaWdodEJvdHRvbScgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ3JpZ2h0JztcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnRUb3AnIHx8IHBsYWNlbWVudCA9PT0gJ2xlZnRCb3R0b20nIHx8IHBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIG56U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQEluamVjdChDbWFjc0lzTWVudUluc2lkZURyb3BEb3duVG9rZW4pIHB1YmxpYyBpc01lbnVJbnNpZGVEcm9wRG93bjogYm9vbGVhbixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8qKiBzdWJtZW51IHRoZW1lIHVwZGF0ZSAqKi9cbiAgICB0aGlzLm56TWVudVNlcnZpY2UudGhlbWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUodGhlbWUgPT4ge1xuICAgICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLyoqIHN1Ym1lbnUgbW9kZSB1cGRhdGUgKiovXG4gICAgdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobW9kZSA9PiB7XG4gICAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgICAgaWYgKG1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbnMgPSBsaXN0T2ZIb3Jpem9udGFsUG9zaXRpb25zO1xuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9ucyA9IGxpc3RPZlZlcnRpY2FsUG9zaXRpb25zO1xuICAgICAgfVxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gICAgLyoqIGlubGluZUluZGVudCB1cGRhdGUgKiovXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5uelN1Ym1lbnVTZXJ2aWNlLm1vZGUkLCB0aGlzLm56TWVudVNlcnZpY2UuaW5saW5lSW5kZW50JF0pXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChbbW9kZSwgaW5saW5lSW5kZW50XSkgPT4ge1xuICAgICAgICB0aGlzLmlubGluZVBhZGRpbmdMZWZ0ID0gbW9kZSA9PT0gJ2lubGluZScgPyB0aGlzLmxldmVsICogaW5saW5lSW5kZW50IDogbnVsbDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICAvKiogY3VycmVudCBzdWJtZW51IG9wZW4gc3RhdHVzICoqL1xuICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5pc0N1cnJlbnRTdWJNZW51T3BlbiQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShvcGVuID0+IHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBvcGVuO1xuICAgICAgaWYgKG9wZW4gIT09IHRoaXMub3Blbikge1xuICAgICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgICAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdCh0aGlzLm9wZW4pO1xuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICBjb25zdCBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlID0gdGhpcy5saXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlO1xuICAgIGNvbnN0IGNoYW5nZXMgPSBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5jaGFuZ2VzO1xuICAgIGNvbnN0IG1lcmdlZE9ic2VydmFibGUgPSBtZXJnZSguLi5bY2hhbmdlcywgLi4ubGlzdE9mTnpNZW51SXRlbURpcmVjdGl2ZSEubWFwKG1lbnUgPT4gbWVudS5zZWxlY3RlZCQpXSk7XG4gICAgY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aChsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IG1lcmdlZE9ic2VydmFibGUpLFxuICAgICAgICBzdGFydFdpdGgodHJ1ZSksXG4gICAgICAgIG1hcCgoKSA9PiBsaXN0T2ZOek1lbnVJdGVtRGlyZWN0aXZlIS5zb21lKGUgPT4gZS5zZWxlY3RlZCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xuICAgICAgICB0aGlzLmlzU2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9wZW4gfSA9IGNoYW5nZXM7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMubnpTdWJtZW51U2VydmljZS5zZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UodGhpcy5vcGVuKTtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=