import { __decorate } from "tslib";
import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/common";
import * as i4 from "../cmacs-input/cmacs-input.directive";
import * as i5 from "@angular/forms";
import * as i6 from "../cmacs-tooltip/tooltip";
function CmacsMoveableListComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵlistener("mousedown", function CmacsMoveableListComponent_div_8_div_1_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onEditIdx = null; });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵelement(2, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("cmacs-custom-grid-drag-disabled", item_r1.draggable !== undefined && !item_r1.draggable);
} }
function CmacsMoveableListComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); const item_r1 = ctx_r12.$implicit; const i_r2 = ctx_r12.index; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.switchToEditMode(item_r1, i_r2); });
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
    i0.ɵɵlistener("keydown.enter", function CmacsMoveableListComponent_div_8_input_3_Template_input_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.stopEdition(); });
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
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r22); const i_r2 = i0.ɵɵnextContext().index; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.hideShow(i_r2); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtemplate(2, CmacsMoveableListComponent_div_8_div_4_i_2_Template, 1, 0, "i", 18);
    i0.ɵɵtemplate(3, CmacsMoveableListComponent_div_8_div_4_i_3_Template, 1, 1, "i", 19);
    i0.ɵɵtemplate(4, CmacsMoveableListComponent_div_8_div_4_i_4_Template, 1, 1, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r26); const i_r2 = ctx.index; const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.select(i_r2); });
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
        this.formControl = new FormControl('', [
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
        this.destroy$.next();
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
}
CmacsMoveableListComponent.ɵfac = function CmacsMoveableListComponent_Factory(t) { return new (t || CmacsMoveableListComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
CmacsMoveableListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsMoveableListComponent, selectors: [["cmacs-moveable-list"]], hostBindings: function CmacsMoveableListComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsMoveableListComponent_click_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { header: "header", showLabel: "showLabel", dragDisabled: "dragDisabled", hideLabel: "hideLabel", data: "data" }, outputs: { dataChange: "dataChange", displayChange: "displayChange", selectedChange: "selectedChange" }, exportAs: ["cmacsMoveableList"], decls: 9, vars: 2, consts: [["cdkDropList", "", 1, "cmacs-custom-grid-list", 2, "margin", "0 auto", 3, "cdkDropListDropped"], [1, "cmacs-custom-grid-box"], [1, "cmacs-custom-grid-title"], [1, "cmacs-custom-grid-lock"], [1, "movespan"], [1, "iconUILarge-Lcok-Movement"], ["class", "cmacs-custom-grid-box", "cdkDrag", "", 3, "cmacs-custom-grid-box-selected", "cdkDragDisabled", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-custom-grid-box", 3, "cdkDragDisabled", "click"], ["cdkDragHandle", "", "class", "handler-icon", 3, "cmacs-custom-grid-drag-disabled", "mousedown", 4, "ngIf"], ["class", "moveable-title", 3, "user-select", "color", "click", 4, "ngIf"], ["class", "moveable-title cmacs-custom-grid-input", "cmacs-input", "", 3, "formControl", "keydown.enter", 4, "ngIf"], ["class", "cmacs-custom-hide-show", 3, "color", "click", 4, "ngIf"], [4, "ngIf"], ["cdkDragHandle", "", 1, "handler-icon", 3, "mousedown"], [1, "iconUILarge-Move_Horizen"], [1, "moveable-title", 3, "click"], ["cmacs-input", "", 1, "moveable-title", "cmacs-custom-grid-input", 3, "formControl", "keydown.enter"], [1, "cmacs-custom-hide-show", 3, "click"], ["class", "iconUILarge-Lcok-Movement", 4, "ngIf"], ["class", "iconUILarge-EyeSlash", "cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", "class", "iconUILarge-Eye", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-EyeSlash", 3, "cmacsTooltipTitle"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-Eye", 3, "cmacsTooltipTitle"], [1, "cmacs-custom-hide-show", 3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsMoveableListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CmacsMoveableListComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "span", 4);
        i0.ɵɵelement(7, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CmacsMoveableListComponent_div_8_Template, 6, 8, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i2.CdkDropList, i3.NgForOf, i2.CdkDrag, i3.NgIf, i2.CdkDragHandle, i4.CmacsInputDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.FormControlDirective, i6.CmacsTooltipDirective, i3.NgTemplateOutlet], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:1px solid #dee0e5;display:block;border-radius:8px;overflow:hidden;line-height:1.5;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%], .cmacs-custom-grid-list[_ngcontent-%COMP%]{background:#fff;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:1px solid #dee0e5;box-sizing:border-box;display:flex;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;padding-right:15px}.cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-Eye[_ngcontent-%COMP%], .cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-EyeSlash[_ngcontent-%COMP%]{cursor:pointer}.cmacs-custom-grid-drag-disabled[_ngcontent-%COMP%]{color:#97a0ae;cursor:default}.movespan[_ngcontent-%COMP%]{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", "cmacs-moveable-list[_ngcontent-%COMP%] {\n        display: block;\n      }"] });
__decorate([
    InputBoolean()
], CmacsMoveableListComponent.prototype, "dragDisabled", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsMoveableListComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-moveable-list',
                exportAs: 'cmacsMoveableList',
                templateUrl: './cmacs-moveable-list.component.html',
                styleUrls: ['./cmacs-moveable-list.component.css'],
                styles: [
                    `
      cmacs-moveable-list {
        display: block;
      }
    `
                ]
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbW92ZWFibGUtbGlzdC9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb3ZlYWJsZS1saXN0L2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUFFLFlBQVksRUFDMUIsS0FBSyxFQUNMLE1BQU0sR0FJUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7SUNGbkQsK0JBQzRGO0lBRHpFLHNNQUF5QixJQUFJLElBQUU7SUFFaEQsK0JBQXVCO0lBQUEsd0JBQXdDO0lBQUEsaUJBQU87SUFDeEUsaUJBQU07OztJQUZKLHdHQUF5Rjs7OztJQUkzRiwrQkFDMEY7SUFBcEMsMFRBQW1DO0lBQUMsWUFBZ0I7SUFBQSxpQkFBTTs7O0lBRDVELG9FQUF3RCxpREFBQTtJQUNsQixlQUFnQjtJQUFoQixxQ0FBZ0I7Ozs7SUFDMUcsaUNBQ3lGO0lBRG5DLDBOQUErQjtJQUFy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TTtRQUNSLGlCQUFNO1FBRU4sMkVBb0NNO1FBRVIsaUJBQU07O1FBN0NNLGVBQVU7UUFBVixnQ0FBVTtRQU9nQyxlQUFTO1FBQVQsa0NBQVM7O0FEbUNwQztJQUFmLFlBQVksRUFBRTtnRUFBK0I7dUZBUDVDLDBCQUEwQjtjQWJ0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7Z0dBTVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQXdDUCxXQUFXO2tCQURWLFlBQVk7bUJBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IENtYWNzR3JpZFRlbXBsYXRlUmVmIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2VzL2dyaWQtY29uZmlnJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlYWJsZUxpc3RJdGVtIHtcclxuICBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgaGlkZGVuOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG4gIGRyYWdnYWJsZTogYm9vbGVhbjtcclxuICB0ZW1wbGF0ZT86IENtYWNzR3JpZFRlbXBsYXRlUmVmO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW1vdmVhYmxlLWxpc3QnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NNb3ZlYWJsZUxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtbW92ZWFibGUtbGlzdCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc01vdmVhYmxlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qIEN1c3RvbSBncmlkIHdpdGggcG9wIHVwICovXHJcbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgPSAnRGVmYXVsdCBUaXRsZSc7XHJcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBzdHJpbmcgPSAnU2hvdyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRyYWdEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhpZGVMYWJlbDogc3RyaW5nID0gJ0hpZGUnO1xyXG4gIEBJbnB1dCgpIGRhdGE6IE1vdmVhYmxlTGlzdEl0ZW1bXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbVtdPigpO1xyXG4gIEBPdXRwdXQoKSBkaXNwbGF5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TW92ZWFibGVMaXN0SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW0+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBvbkVkaXRJZHg6IG51bWJlciA9IG51bGw7XHJcbiAgYWxsb3dFZGl0aW9uID0gZmFsc2U7XHJcbiAgcm93U2VsZWN0ZWRJZHg6IG51bWJlciA9IC0xO1xyXG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMYWJlbCA9ICdBbnplaWdlbic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMYWJlbCA9ICdBdXNibGVuZGVuJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMYWJlbCA9ICdTaG93JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0hpZGUnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ+ihqOekuic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVMYWJlbCA9ICfpnZ7ooajnpLonO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMYWJlbCA9ICdTaG93JztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0hpZGUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtb3ZlYWJsZS10aXRsZScpID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwgJiYgdGhpcy5vbkVkaXRJZHggPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQodGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFRvRWRpdE1vZGUocm93OiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3cuZWRpdGFibGUgIT0gdW5kZWZpbmVkICYmIHJvdy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLm9uRWRpdElkeCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHJvdy5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFZGl0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIHRoaXMuZGlzcGxheUNoYW5nZS5lbWl0KHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0pO1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IGluZGV4O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuID0gIXRoaXMuZGF0YVtpbmRleF0uaGlkZGVuO1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ICE9PSBpZHgpKTtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1saXN0XCIgc3R5bGU9XCJtYXJnaW46IDAgYXV0b1wiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLWJveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuPnt7aGVhZGVyfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1sb2NrXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1ib3gtc2VsZWN0ZWRdPVwicm93U2VsZWN0ZWRJZHggPT09IGlcIiAoY2xpY2spPVwic2VsZWN0KGkpXCJcclxuICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiKGl0ZW0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIWl0ZW0uZHJhZ2dhYmxlKSB8fCBkcmFnRGlzYWJsZWRcIiBjZGtEcmFnPlxyXG4gICAgPGRpdiBjZGtEcmFnSGFuZGxlIChtb3VzZWRvd24pPVwib25FZGl0SWR4ID0gbnVsbDtcIiBjbGFzcz1cImhhbmRsZXItaWNvblwiICpuZ0lmPVwiIWRyYWdEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1kcmFnLWRpc2FibGVkXT1cIml0ZW0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIWl0ZW0uZHJhZ2dhYmxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmVfSG9yaXplblwiPjwvaT48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibW92ZWFibGUtdGl0bGVcIiAqbmdJZj1cIm9uRWRpdElkeCAhPT0gaVwiIFtzdHlsZS51c2VyLXNlbGVjdF09XCJpdGVtLmVkaXRhYmxlID8gJ2luaGVyaXQnIDogJ25vbmUnXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cIml0ZW0uaGlkZGVuID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cInN3aXRjaFRvRWRpdE1vZGUoaXRlbSwgaSlcIj57e2l0ZW0uZGlzcGxheX19PC9kaXY+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJtb3ZlYWJsZS10aXRsZSBjbWFjcy1jdXN0b20tZ3JpZC1pbnB1dFwiIChrZXlkb3duLmVudGVyKT1cInN0b3BFZGl0aW9uKClcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAqbmdJZj1cIml0ZW0uZWRpdGFibGUgJiYgYWxsb3dFZGl0aW9uICYmIG9uRWRpdElkeCA9PT0gaVwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1oaWRlLXNob3dcIiAqbmdJZj1cIml0ZW0udGVtcGxhdGUgPT09IHVuZGVmaW5lZFwiXHJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJpdGVtLmhpZGRlbiB8fCBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cImhpZGVTaG93KGkpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj5cclxuICAgICAgICA8aSAqbmdJZj1cIml0ZW0uaGlkZGVuID09PSB1bmRlZmluZWRcIiBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaGlkZGVuXCJcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVNsYXNoXCJcclxuICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwic2hvd0xhYmVsXCJcclxuICAgICAgICAgICBjbWFjc1Rvb2x0aXBQbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICA8L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmICFpdGVtLmhpZGRlblwiXHJcbiAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImhpZGVMYWJlbFwiXHJcbiAgICAgICAgICAgY21hY3NUb29sdGlwUGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udGVtcGxhdGVcIj5cclxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlLnJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJpdGVtLnRlbXBsYXRlLmNvbnRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiY21hY3MtY3VzdG9tLWhpZGUtc2hvd1wiPjwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuIl19