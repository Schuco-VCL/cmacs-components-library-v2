import { __decorate } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { UntypedFormControl, Validators } from "@angular/forms";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/cdk/drag-drop";
import * as i5 from "../cmacs-tooltip/tooltip";
import * as i6 from "../cmacs-input/cmacs-input.directive";
function CmacsMoveableListComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("mousedown", function CmacsMoveableListComponent_div_8_div_1_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.onEditIdx = null); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("cmacs-custom-grid-drag-disabled", item_r1.draggable !== undefined && !item_r1.draggable);
} }
function CmacsMoveableListComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); const item_r1 = ctx_r12.$implicit; const i_r2 = ctx_r12.index; const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.switchToEditMode(item_r1, i_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("user-select", item_r1.editable ? "inherit" : "none")("color", item_r1.hidden ? "#97a0ae" : "inherit");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1.display);
} }
function CmacsMoveableListComponent_div_8_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 16);
    i0.ɵɵlistener("keydown.enter", function CmacsMoveableListComponent_div_8_input_3_Template_input_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r15.stopEdition()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formControl", ctx_r5.formControl);
} }
function CmacsMoveableListComponent_div_8_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} }
function CmacsMoveableListComponent_div_8_div_4_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r18.showLabel);
} }
function CmacsMoveableListComponent_div_8_div_4_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 22);
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r19.hideLabel);
} }
function CmacsMoveableListComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r22); const i_r2 = i0.ɵɵnextContext().index; const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.hideShow(i_r2)); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtemplate(2, CmacsMoveableListComponent_div_8_div_4_i_2_Template, 1, 0, "i", 18);
    i0.ɵɵtemplate(3, CmacsMoveableListComponent_div_8_div_4_i_3_Template, 1, 1, "i", 19);
    i0.ɵɵtemplate(4, CmacsMoveableListComponent_div_8_div_4_i_4_Template, 1, 1, "i", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("color", item_r1.hidden || item_r1.hidden === undefined ? "#97a0ae" : "inherit");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r1.hidden === undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.hidden !== undefined && item_r1.hidden);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.hidden !== undefined && !item_r1.hidden);
} }
function CmacsMoveableListComponent_div_8_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r1.template.ref)("ngTemplateOutletContext", item_r1.template.context);
} }
function CmacsMoveableListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_Template_div_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r26); const i_r2 = restoredCtx.index; const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.select(i_r2)); });
    i0.ɵɵtemplate(1, CmacsMoveableListComponent_div_8_div_1_Template, 3, 2, "div", 8);
    i0.ɵɵtemplate(2, CmacsMoveableListComponent_div_8_div_2_Template, 2, 5, "div", 9);
    i0.ɵɵtemplate(3, CmacsMoveableListComponent_div_8_input_3_Template, 1, 1, "input", 10);
    i0.ɵɵtemplate(4, CmacsMoveableListComponent_div_8_div_4_Template, 5, 5, "div", 11);
    i0.ɵɵtemplate(5, CmacsMoveableListComponent_div_8_ng_container_5_Template, 2, 2, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-custom-grid-box-selected", ctx_r0.rowSelectedIdx === i_r2);
    i0.ɵɵproperty("cdkDragDisabled", item_r1.draggable !== undefined && !item_r1.draggable || ctx_r0.dragDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.dragDisabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.onEditIdx !== i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.editable && ctx_r0.allowEdition && ctx_r0.onEditIdx === i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.template === undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r1.template);
} }
export class CmacsMoveableListComponent {
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        /* Custom grid with pop up */
        this.header = 'Default Title';
        this.showLabel = 'Show';
        this.dragDisabled = false;
        this.hideLabel = 'Hide';
        this.data = [];
        this.dataChange = new EventEmitter();
        this.displayChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.onEditIdx = null;
        this.allowEdition = false;
        this.rowSelectedIdx = -1;
        this.formControl = new UntypedFormControl('', [
            Validators.required
        ]);
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.showLabel = 'Anzeigen';
                    this.hideLabel = 'Ausblenden';
                    break;
                case 'en':
                    this.showLabel = 'Show';
                    this.hideLabel = 'Hide';
                    break;
                case 'ja':
                    this.showLabel = '表示';
                    this.hideLabel = '非表示';
                    break;
                default:
                    this.showLabel = 'Show';
                    this.hideLabel = 'Hide';
            }
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    handleClick(e) {
        const element = e.target;
        if ((typeof element.className) === 'string') {
            if (element.className.indexOf('moveable-title') >= 0) {
                this.allowEdition = true;
            }
            else {
                this.allowEdition = false;
                if (this.onEditIdx !== null && this.onEditIdx < this.data.length) {
                    this.data[this.onEditIdx].display = this.formControl.value;
                    this.displayChange.emit(this.data[this.onEditIdx]);
                }
                this.onEditIdx = null;
            }
        }
    }
    drop(event) {
        if (this.data[event.currentIndex].draggable !== undefined && !this.data[event.currentIndex].draggable) {
            return;
        }
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
        this.dataChange.emit(this.data);
    }
    switchToEditMode(row, index) {
        this.allowEdition = true;
        if (this.onEditIdx !== null) {
            this.data[this.onEditIdx].display = this.formControl.value;
        }
        if (row.editable != undefined && row.editable) {
            this.onEditIdx = index;
            this.formControl.setValue(row.display);
        }
    }
    stopEdition() {
        this.data[this.onEditIdx].display = this.formControl.value;
        this.displayChange.emit(this.data[this.onEditIdx]);
        this.onEditIdx = null;
        this.allowEdition = false;
    }
    select(index) {
        this.rowSelectedIdx = index;
        this.selectedChange.emit(index);
    }
    hideShow(index) {
        if (this.data[index].hidden !== undefined) {
            this.data[index].hidden = !this.data[index].hidden;
            this.dataChange.emit(this.data);
        }
    }
    remove(idx) {
        this.onEditIdx = null;
        this.formControl.setValue('');
        this.data = this.data.filter((item, index) => (index !== idx));
        this.rowSelectedIdx = -1;
        this.selectedChange.emit(-1);
        this.dataChange.emit(this.data);
    }
    static { this.ɵfac = function CmacsMoveableListComponent_Factory(t) { return new (t || CmacsMoveableListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsMoveableListComponent, selectors: [["cmacs-moveable-list"]], hostBindings: function CmacsMoveableListComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsMoveableListComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { header: "header", showLabel: "showLabel", dragDisabled: "dragDisabled", hideLabel: "hideLabel", data: "data" }, outputs: { dataChange: "dataChange", displayChange: "displayChange", selectedChange: "selectedChange" }, exportAs: ["cmacsMoveableList"], decls: 9, vars: 2, consts: [["cdkDropList", "", 1, "cmacs-custom-grid-list", 2, "margin", "0 auto", 3, "cdkDropListDropped"], [1, "cmacs-custom-grid-box"], [1, "cmacs-custom-grid-title"], [1, "cmacs-custom-grid-lock"], [1, "movespan"], [1, "iconUILarge-Lcok-Movement"], ["class", "cmacs-custom-grid-box", "cdkDrag", "", 3, "cmacs-custom-grid-box-selected", "cdkDragDisabled", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-custom-grid-box", 3, "cdkDragDisabled", "click"], ["cdkDragHandle", "", "class", "handler-icon", 3, "cmacs-custom-grid-drag-disabled", "mousedown", 4, "ngIf"], ["class", "moveable-title", 3, "user-select", "color", "click", 4, "ngIf"], ["class", "moveable-title cmacs-custom-grid-input", "cmacs-input", "", 3, "formControl", "keydown.enter", 4, "ngIf"], ["class", "cmacs-custom-hide-show", 3, "color", "click", 4, "ngIf"], [4, "ngIf"], ["cdkDragHandle", "", 1, "handler-icon", 3, "mousedown"], [1, "iconUILarge-Move_Horizen"], [1, "moveable-title", 3, "click"], ["cmacs-input", "", 1, "moveable-title", "cmacs-custom-grid-input", 3, "formControl", "keydown.enter"], [1, "cmacs-custom-hide-show", 3, "click"], ["class", "iconUILarge-Lcok-Movement", 4, "ngIf"], ["class", "iconUILarge-EyeSlash", "cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", "class", "iconUILarge-Eye", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-EyeSlash", 3, "cmacsTooltipTitle"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-Eye", 3, "cmacsTooltipTitle"], [1, "cmacs-custom-hide-show", 3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsMoveableListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("cdkDropListDropped", function CmacsMoveableListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "div", 3)(6, "span", 4);
            i0.ɵɵelement(7, "i", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(8, CmacsMoveableListComponent_div_8_Template, 6, 8, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.header);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.data);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.DefaultValueAccessor, i3.NgControlStatus, i4.CdkDropList, i4.CdkDrag, i4.CdkDragHandle, i3.FormControlDirective, i5.CmacsTooltipDirective, i6.CmacsInputDirective], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:solid 1px #dee0e5;display:block;background:#ffffff;border-radius:8px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:solid 1px #dee0e5;box-sizing:border-box;background:#ffffff;font-size:12px;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;padding-right:15px}.cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-EyeSlash[_ngcontent-%COMP%], .cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-Eye[_ngcontent-%COMP%]{cursor:pointer}.cmacs-custom-grid-drag-disabled[_ngcontent-%COMP%]{color:#97a0ae;cursor:default}.movespan[_ngcontent-%COMP%]{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", "cmacs-moveable-list[_ngcontent-%COMP%]{display:block}"] }); }
}
__decorate([
    InputBoolean()
], CmacsMoveableListComponent.prototype, "dragDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMoveableListComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-moveable-list', exportAs: 'cmacsMoveableList', template: "<div cdkDropList class=\"cmacs-custom-grid-list\" style=\"margin: 0 auto\" (cdkDropListDropped)=\"drop($event)\">\r\n  <div class=\"cmacs-custom-grid-box\">\r\n    <div class=\"cmacs-custom-grid-title\">\r\n      <span>{{header}}</span>\r\n    </div>\r\n    <div class=\"cmacs-custom-grid-lock\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Lcok-Movement\"></i></span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cmacs-custom-grid-box\" *ngFor=\"let item of data; index as i\"\r\n    [class.cmacs-custom-grid-box-selected]=\"rowSelectedIdx === i\" (click)=\"select(i)\"\r\n    [cdkDragDisabled]=\"(item.draggable !== undefined && !item.draggable) || dragDisabled\" cdkDrag>\r\n    <div cdkDragHandle (mousedown)=\"onEditIdx = null;\" class=\"handler-icon\" *ngIf=\"!dragDisabled\"\r\n      [class.cmacs-custom-grid-drag-disabled]=\"item.draggable !== undefined && !item.draggable\">\r\n      <span class=\"movespan\"><i class=\"iconUILarge-Move_Horizen\"></i></span>\r\n    </div>\r\n\r\n    <div class=\"moveable-title\" *ngIf=\"onEditIdx !== i\" [style.user-select]=\"item.editable ? 'inherit' : 'none'\"\r\n      [style.color]=\"item.hidden ? '#97a0ae' : 'inherit'\" (click)=\"switchToEditMode(item, i)\">{{item.display}}</div>\r\n    <input class=\"moveable-title cmacs-custom-grid-input\" (keydown.enter)=\"stopEdition()\" cmacs-input\r\n      *ngIf=\"item.editable && allowEdition && onEditIdx === i\" [formControl]=\"formControl\" />\r\n\r\n    <div class=\"cmacs-custom-hide-show\" *ngIf=\"item.template === undefined\"\r\n      [style.color]=\"item.hidden || item.hidden === undefined ? '#97a0ae' : 'inherit'\" (click)=\"hideShow(i)\">\r\n      <span class=\"movespan\">\r\n        <i *ngIf=\"item.hidden === undefined\" class=\"iconUILarge-Lcok-Movement\"></i>\r\n        <i *ngIf=\"item.hidden !== undefined && item.hidden\"\r\n           class=\"iconUILarge-EyeSlash\"\r\n           [cmacsTooltipTitle]=\"showLabel\"\r\n           cmacsTooltipPlacement=\"right\"\r\n           cmacs-tooltip>\r\n        </i>\r\n        <i *ngIf=\"item.hidden !== undefined && !item.hidden\"\r\n           [cmacsTooltipTitle]=\"hideLabel\"\r\n           cmacsTooltipPlacement=\"right\"\r\n           cmacs-tooltip\r\n           class=\"iconUILarge-Eye\">\r\n        </i>\r\n      </span>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"item.template\">\r\n      <div [ngTemplateOutlet]=\"item.template.ref\" [ngTemplateOutletContext]=\"item.template.context\"\r\n        class=\"cmacs-custom-hide-show\"></div>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n", styles: [".cmacs-custom-grid-list{max-width:100%;border:solid 1px #dee0e5;display:block;background:#ffffff;border-radius:8px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:solid 1px #dee0e5;box-sizing:border-box;background:#ffffff;font-size:12px;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title{padding-left:15px;line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-custom-grid-title{align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;padding-right:15px}.cmacs-custom-hide-show .iconUILarge-EyeSlash,.cmacs-custom-hide-show .iconUILarge-Eye{cursor:pointer}.cmacs-custom-grid-drag-disabled{color:#97a0ae;cursor:default}.movespan{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}\n", "cmacs-moveable-list{display:block}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { header: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], dragDisabled: [{
            type: Input
        }], hideLabel: [{
            type: Input
        }], data: [{
            type: Input
        }], dataChange: [{
            type: Output
        }], displayChange: [{
            type: Output
        }], selectedChange: [{
            type: Output
        }], handleClick: [{
            type: HostListener,
            args: ['window:click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbW92ZWFibGUtbGlzdC9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb3ZlYWJsZS1saXN0L2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQ0ZuRCwrQkFDNEY7SUFEekUscU5BQXlCLElBQUksS0FBRTtJQUVoRCwrQkFBdUI7SUFBQSx3QkFBd0M7SUFBQSxpQkFBTyxFQUFBOzs7SUFEdEUsd0dBQXlGOzs7O0lBSTNGLCtCQUMwRjtJQUFwQywrUUFBUyxlQUFBLHVDQUF5QixDQUFBLElBQUM7SUFBQyxZQUFnQjtJQUFBLGlCQUFNOzs7SUFENUQsb0VBQXdELGlEQUFBO0lBQ2xCLGVBQWdCO0lBQWhCLHFDQUFnQjs7OztJQUMxRyxpQ0FDeUY7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QUE7WUFFekIsOEJBQW9DLGNBQUE7WUFDWCx1QkFBeUM7WUFBQSxpQkFBTyxFQUFBLEVBQUE7WUFJM0UsMkVBb0NNO1lBRVIsaUJBQU07O1lBN0NNLGVBQVU7WUFBVixnQ0FBVTtZQU9nQyxlQUFTO1lBQVQsa0NBQVM7OztBRG1DcEM7SUFBZixZQUFZLEVBQUU7Z0VBQStCO3VGQVA1QywwQkFBMEI7Y0FidEMsU0FBUzsyQkFDRSxxQkFBcUIsWUFDckIsbUJBQW1CO2dHQWdCcEIsTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQXdDUCxXQUFXO2tCQURWLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBDbWFjc0dyaWRUZW1wbGF0ZVJlZiB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZWFibGVMaXN0SXRlbSB7XHJcbiAgZGlzcGxheTogc3RyaW5nO1xyXG4gIGhpZGRlbjogYm9vbGVhbjtcclxuICBlZGl0YWJsZTogYm9vbGVhbjtcclxuICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbiAgdGVtcGxhdGU/OiBDbWFjc0dyaWRUZW1wbGF0ZVJlZjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1tb3ZlYWJsZS1saXN0JyxcclxuICBleHBvcnRBczogJ2NtYWNzTW92ZWFibGVMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLW1vdmVhYmxlLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NNb3ZlYWJsZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAvKiBDdXN0b20gZ3JpZCB3aXRoIHBvcCB1cCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJ0RlZmF1bHQgVGl0bGUnO1xyXG4gIEBJbnB1dCgpIHNob3dMYWJlbDogc3RyaW5nID0gJ1Nob3cnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkcmFnRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoaWRlTGFiZWw6IHN0cmluZyA9ICdIaWRlJztcclxuICBASW5wdXQoKSBkYXRhOiBNb3ZlYWJsZUxpc3RJdGVtW10gPSBbXTtcclxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4oKTtcclxuICBAT3V0cHV0KCkgZGlzcGxheUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgb25FZGl0SWR4OiBudW1iZXIgPSBudWxsO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIHJvd1NlbGVjdGVkSWR4OiBudW1iZXIgPSAtMTtcclxuICBmb3JtQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woJycsIFtcclxuICAgIFZhbGlkYXRvcnMucmVxdWlyZWRcclxuICBdKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ0FuemVpZ2VuJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0F1c2JsZW5kZW4nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ1Nob3cnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTGFiZWwgPSAnSGlkZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnamEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGFiZWwgPSAn6KGo56S6JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ+mdnuihqOekuic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ1Nob3cnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlTGFiZWwgPSAnSGlkZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtb3ZlYWJsZS10aXRsZScpID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwgJiYgdGhpcy5vbkVkaXRJZHggPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQodGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFRvRWRpdE1vZGUocm93OiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3cuZWRpdGFibGUgIT0gdW5kZWZpbmVkICYmIHJvdy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLm9uRWRpdElkeCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHJvdy5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFZGl0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIHRoaXMuZGlzcGxheUNoYW5nZS5lbWl0KHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0pO1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IGluZGV4O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuID0gIXRoaXMuZGF0YVtpbmRleF0uaGlkZGVuO1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ICE9PSBpZHgpKTtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1saXN0XCIgc3R5bGU9XCJtYXJnaW46IDAgYXV0b1wiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLWJveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuPnt7aGVhZGVyfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1sb2NrXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1ib3gtc2VsZWN0ZWRdPVwicm93U2VsZWN0ZWRJZHggPT09IGlcIiAoY2xpY2spPVwic2VsZWN0KGkpXCJcclxuICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiKGl0ZW0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIWl0ZW0uZHJhZ2dhYmxlKSB8fCBkcmFnRGlzYWJsZWRcIiBjZGtEcmFnPlxyXG4gICAgPGRpdiBjZGtEcmFnSGFuZGxlIChtb3VzZWRvd24pPVwib25FZGl0SWR4ID0gbnVsbDtcIiBjbGFzcz1cImhhbmRsZXItaWNvblwiICpuZ0lmPVwiIWRyYWdEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1kcmFnLWRpc2FibGVkXT1cIml0ZW0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIWl0ZW0uZHJhZ2dhYmxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmVfSG9yaXplblwiPjwvaT48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibW92ZWFibGUtdGl0bGVcIiAqbmdJZj1cIm9uRWRpdElkeCAhPT0gaVwiIFtzdHlsZS51c2VyLXNlbGVjdF09XCJpdGVtLmVkaXRhYmxlID8gJ2luaGVyaXQnIDogJ25vbmUnXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cIml0ZW0uaGlkZGVuID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cInN3aXRjaFRvRWRpdE1vZGUoaXRlbSwgaSlcIj57e2l0ZW0uZGlzcGxheX19PC9kaXY+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJtb3ZlYWJsZS10aXRsZSBjbWFjcy1jdXN0b20tZ3JpZC1pbnB1dFwiIChrZXlkb3duLmVudGVyKT1cInN0b3BFZGl0aW9uKClcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAqbmdJZj1cIml0ZW0uZWRpdGFibGUgJiYgYWxsb3dFZGl0aW9uICYmIG9uRWRpdElkeCA9PT0gaVwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1oaWRlLXNob3dcIiAqbmdJZj1cIml0ZW0udGVtcGxhdGUgPT09IHVuZGVmaW5lZFwiXHJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJpdGVtLmhpZGRlbiB8fCBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cImhpZGVTaG93KGkpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj5cclxuICAgICAgICA8aSAqbmdJZj1cIml0ZW0uaGlkZGVuID09PSB1bmRlZmluZWRcIiBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaGlkZGVuXCJcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVNsYXNoXCJcclxuICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwic2hvd0xhYmVsXCJcclxuICAgICAgICAgICBjbWFjc1Rvb2x0aXBQbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICA8L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmICFpdGVtLmhpZGRlblwiXHJcbiAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImhpZGVMYWJlbFwiXHJcbiAgICAgICAgICAgY21hY3NUb29sdGlwUGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udGVtcGxhdGVcIj5cclxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlLnJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJpdGVtLnRlbXBsYXRlLmNvbnRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiY21hY3MtY3VzdG9tLWhpZGUtc2hvd1wiPjwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuIl19