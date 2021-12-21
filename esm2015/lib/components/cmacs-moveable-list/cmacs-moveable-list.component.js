import { Component, EventEmitter, HostListener, Input, Output, } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/common";
import * as i4 from "../cmacs-input/cmacs-input.directive";
import * as i5 from "@angular/forms";
import * as i6 from "../cmacs-tooltip/tooltip";
function CmacsMoveableListComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_4_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); const item_r1 = ctx_r8.$implicit; const i_r2 = ctx_r8.index; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.switchToEditMode(item_r1, i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleProp("user-select", item_r1.editable ? "inherit" : "none")("color", item_r1.hidden ? "#97a0ae" : "inherit");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r1.display);
} }
function CmacsMoveableListComponent_div_8_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 15);
    i0.ɵɵlistener("keydown.enter", function CmacsMoveableListComponent_div_8_input_5_Template_input_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.stopEdition(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formControl", ctx_r4.formControl);
} }
function CmacsMoveableListComponent_div_8_div_6_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} }
function CmacsMoveableListComponent_div_8_div_6_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 20);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r14.showLabel);
} }
function CmacsMoveableListComponent_div_8_div_6_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 21);
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("cmacsTooltipTitle", ctx_r15.hideLabel);
} }
function CmacsMoveableListComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_div_6_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r18); const i_r2 = i0.ɵɵnextContext().index; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.hideShow(i_r2); });
    i0.ɵɵelementStart(1, "span", 4);
    i0.ɵɵtemplate(2, CmacsMoveableListComponent_div_8_div_6_i_2_Template, 1, 0, "i", 17);
    i0.ɵɵtemplate(3, CmacsMoveableListComponent_div_8_div_6_i_3_Template, 1, 1, "i", 18);
    i0.ɵɵtemplate(4, CmacsMoveableListComponent_div_8_div_6_i_4_Template, 1, 1, "i", 19);
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
function CmacsMoveableListComponent_div_8_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", item_r1.template.ref)("ngTemplateOutletContext", item_r1.template.context);
} }
function CmacsMoveableListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function CmacsMoveableListComponent_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r22); const i_r2 = ctx.index; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.select(i_r2); });
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵlistener("mousedown", function CmacsMoveableListComponent_div_8_Template_div_mousedown_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onEditIdx = null; });
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵelement(3, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CmacsMoveableListComponent_div_8_div_4_Template, 2, 5, "div", 10);
    i0.ɵɵtemplate(5, CmacsMoveableListComponent_div_8_input_5_Template, 1, 1, "input", 11);
    i0.ɵɵtemplate(6, CmacsMoveableListComponent_div_8_div_6_Template, 5, 5, "div", 12);
    i0.ɵɵtemplate(7, CmacsMoveableListComponent_div_8_ng_container_7_Template, 2, 2, "ng-container", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("cmacs-custom-grid-box-selected", ctx_r0.rowSelectedIdx === i_r2);
    i0.ɵɵproperty("cdkDragDisabled", item_r1.draggable !== undefined && !item_r1.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("cmacs-custom-grid-drag-disabled", item_r1.draggable !== undefined && !item_r1.draggable);
    i0.ɵɵadvance(3);
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
    } }, inputs: { header: "header", showLabel: "showLabel", hideLabel: "hideLabel", data: "data" }, outputs: { dataChange: "dataChange", displayChange: "displayChange", selectedChange: "selectedChange" }, exportAs: ["cmacsMoveableList"], decls: 9, vars: 2, consts: [["cdkDropList", "", 1, "cmacs-custom-grid-list", 2, "margin", "0 auto", 3, "cdkDropListDropped"], [1, "cmacs-custom-grid-box"], [1, "cmacs-custom-grid-title"], [1, "cmacs-custom-grid-lock"], [1, "movespan"], [1, "iconUILarge-Lcok-Movement"], ["class", "cmacs-custom-grid-box", "cdkDrag", "", 3, "cmacs-custom-grid-box-selected", "cdkDragDisabled", "click", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "cmacs-custom-grid-box", 3, "cdkDragDisabled", "click"], ["cdkDragHandle", "", 1, "handler-icon", 3, "mousedown"], [1, "iconUILarge-Move_Horizen"], ["class", "moveable-title", 3, "user-select", "color", "click", 4, "ngIf"], ["class", "moveable-title cmacs-custom-grid-input", "cmacs-input", "", 3, "formControl", "keydown.enter", 4, "ngIf"], ["class", "cmacs-custom-hide-show", 3, "color", "click", 4, "ngIf"], [4, "ngIf"], [1, "moveable-title", 3, "click"], ["cmacs-input", "", 1, "moveable-title", "cmacs-custom-grid-input", 3, "formControl", "keydown.enter"], [1, "cmacs-custom-hide-show", 3, "click"], ["class", "iconUILarge-Lcok-Movement", 4, "ngIf"], ["class", "iconUILarge-EyeSlash", "cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", "class", "iconUILarge-Eye", 3, "cmacsTooltipTitle", 4, "ngIf"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-EyeSlash", 3, "cmacsTooltipTitle"], ["cmacsTooltipPlacement", "right", "cmacs-tooltip", "", 1, "iconUILarge-Eye", 3, "cmacsTooltipTitle"], [1, "cmacs-custom-hide-show", 3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function CmacsMoveableListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(8, CmacsMoveableListComponent_div_8_Template, 8, 9, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.data);
    } }, directives: [i2.CdkDropList, i3.NgForOf, i2.CdkDrag, i2.CdkDragHandle, i3.NgIf, i4.CmacsInputDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.FormControlDirective, i6.CmacsTooltipDirective, i3.NgTemplateOutlet], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:1px solid #dee0e5;display:block;border-radius:8px;overflow:hidden;line-height:1.5;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%], .cmacs-custom-grid-list[_ngcontent-%COMP%]{background:#fff;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:1px solid #dee0e5;box-sizing:border-box;display:flex;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;cursor:move;line-height:26px}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;line-height:32px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;color:#97a0ae;line-height:32px;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cmacs-custom-grid-box-selected):hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:32px;width:371px;position:relative;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;padding-right:15px}.cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-Eye[_ngcontent-%COMP%], .cmacs-custom-hide-show[_ngcontent-%COMP%]   .iconUILarge-EyeSlash[_ngcontent-%COMP%]{cursor:pointer}.cmacs-custom-grid-drag-disabled[_ngcontent-%COMP%]{color:#97a0ae;cursor:default}.movespan[_ngcontent-%COMP%]{height:20px;width:20px;position:relative;font-size:20px;line-height:20px;vertical-align:middle;text-align:center;display:inline-block}", "cmacs-moveable-list[_ngcontent-%COMP%] {\n        display: block;\n      }"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbW92ZWFibGUtbGlzdC9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb3ZlYWJsZS1saXN0L2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQUUsWUFBWSxFQUMxQixLQUFLLEVBQ0wsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0lDTTNCLCtCQUMwRjtJQUFwQyxvVEFBbUM7SUFBQyxZQUFnQjtJQUFBLGlCQUFNOzs7SUFENUQsb0VBQXdELGlEQUFBO0lBQ2xCLGVBQWdCO0lBQWhCLHFDQUFnQjs7OztJQUMxRyxpQ0FDeUY7SUFEbkMsME5BQStCO0lBQXJGLGlCQUN5Rjs7O0lBQTlCLGdEQUEyQjs7O0lBS2xGLHVCQUEyRTs7O0lBQzNFLHdCQUtJOzs7SUFIRCxxREFBK0I7OztJQUlsQyx3QkFLSTs7O0lBSkQscURBQStCOzs7O0lBWHRDLCtCQUN5RztJQUF0Qiw2T0FBcUI7SUFDdEcsK0JBQXVCO0lBQ3JCLG9G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LENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELE1BQU0sRUFBRTtvQkFDTjs7OztLQUlDO2lCQUNGO2FBQ0Y7Z0dBTVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFvQ1AsV0FBVztrQkFEVixZQUFZO21CQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9kcmFnLWRyb3BcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBDbWFjc0dyaWRUZW1wbGF0ZVJlZiB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVhYmxlTGlzdEl0ZW0ge1xyXG4gIGRpc3BsYXk6IHN0cmluZztcclxuICBoaWRkZW46IGJvb2xlYW47XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbiAgZHJhZ2dhYmxlOiBib29sZWFuO1xyXG4gIHRlbXBsYXRlPzogQ21hY3NHcmlkVGVtcGxhdGVSZWY7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbW92ZWFibGUtbGlzdCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc01vdmVhYmxlTGlzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW1vdmVhYmxlLWxpc3QuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy1tb3ZlYWJsZS1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTW92ZWFibGVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgLyogQ3VzdG9tIGdyaWQgd2l0aCBwb3AgdXAgKi9cclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICdEZWZhdWx0IFRpdGxlJztcclxuICBASW5wdXQoKSBzaG93TGFiZWw6IHN0cmluZyA9ICdTaG93JztcclxuICBASW5wdXQoKSBoaWRlTGFiZWw6IHN0cmluZyA9ICdIaWRlJztcclxuICBASW5wdXQoKSBkYXRhOiBNb3ZlYWJsZUxpc3RJdGVtW10gPSBbXTtcclxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW1bXT4oKTtcclxuICBAT3V0cHV0KCkgZGlzcGxheUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vdmVhYmxlTGlzdEl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxNb3ZlYWJsZUxpc3RJdGVtPigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgb25FZGl0SWR4OiBudW1iZXIgPSBudWxsO1xyXG4gIGFsbG93RWRpdGlvbiA9IGZhbHNlO1xyXG4gIHJvd1NlbGVjdGVkSWR4OiBudW1iZXIgPSAtMTtcclxuICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZFxyXG4gIF0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5zaG93TGFiZWwgPSAnQW56ZWlnZW4nO1xyXG4gICAgICAgICAgdGhpcy5oaWRlTGFiZWwgPSAnQXVzYmxlbmRlbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLnNob3dMYWJlbCA9ICdTaG93JztcclxuICAgICAgICAgIHRoaXMuaGlkZUxhYmVsID0gJ0hpZGUnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuc2hvd0xhYmVsID0gJ1Nob3cnO1xyXG4gICAgICAgICAgdGhpcy5oaWRlTGFiZWwgPSAnSGlkZSc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGhhbmRsZUNsaWNrKGU6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAoKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdtb3ZlYWJsZS10aXRsZScpID49IDApIHtcclxuICAgICAgICB0aGlzLmFsbG93RWRpdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vbkVkaXRJZHggIT09IG51bGwgJiYgdGhpcy5vbkVkaXRJZHggPCB0aGlzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Q2hhbmdlLmVtaXQodGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FZGl0SWR4ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICBpZiAodGhpcy5kYXRhW2V2ZW50LmN1cnJlbnRJbmRleF0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZGF0YVtldmVudC5jdXJyZW50SW5kZXhdLmRyYWdnYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHN3aXRjaFRvRWRpdE1vZGUocm93OiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYWxsb3dFZGl0aW9uID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLm9uRWRpdElkeCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGFbdGhpcy5vbkVkaXRJZHhdLmRpc3BsYXkgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3cuZWRpdGFibGUgIT0gdW5kZWZpbmVkICYmIHJvdy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLm9uRWRpdElkeCA9IGluZGV4O1xyXG4gICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKHJvdy5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BFZGl0aW9uKCkge1xyXG4gICAgdGhpcy5kYXRhW3RoaXMub25FZGl0SWR4XS5kaXNwbGF5ID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcclxuICAgIHRoaXMuZGlzcGxheUNoYW5nZS5lbWl0KHRoaXMuZGF0YVt0aGlzLm9uRWRpdElkeF0pO1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5hbGxvd0VkaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5yb3dTZWxlY3RlZElkeCA9IGluZGV4O1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGluZGV4KTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmRhdGFbaW5kZXhdLmhpZGRlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuZGF0YVtpbmRleF0uaGlkZGVuID0gIXRoaXMuZGF0YVtpbmRleF0uaGlkZGVuO1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpZHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5vbkVkaXRJZHggPSBudWxsO1xyXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gKGluZGV4ICE9PSBpZHgpKTtcclxuICAgIHRoaXMucm93U2VsZWN0ZWRJZHggPSAtMTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCgtMSk7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1saXN0XCIgc3R5bGU9XCJtYXJnaW46IDAgYXV0b1wiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLWJveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1ncmlkLXRpdGxlXCI+XHJcbiAgICAgIDxzcGFuPnt7aGVhZGVyfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1sb2NrXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjbWFjcy1jdXN0b20tZ3JpZC1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhOyBpbmRleCBhcyBpXCJcclxuICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1ib3gtc2VsZWN0ZWRdPVwicm93U2VsZWN0ZWRJZHggPT09IGlcIiAoY2xpY2spPVwic2VsZWN0KGkpXCJcclxuICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiaXRlbS5kcmFnZ2FibGUgIT09IHVuZGVmaW5lZCAmJiAhaXRlbS5kcmFnZ2FibGVcIiBjZGtEcmFnPlxyXG4gICAgPGRpdiBjZGtEcmFnSGFuZGxlIChtb3VzZWRvd24pPVwib25FZGl0SWR4ID0gbnVsbDtcIiBjbGFzcz1cImhhbmRsZXItaWNvblwiXHJcbiAgICAgIFtjbGFzcy5jbWFjcy1jdXN0b20tZ3JpZC1kcmFnLWRpc2FibGVkXT1cIml0ZW0uZHJhZ2dhYmxlICE9PSB1bmRlZmluZWQgJiYgIWl0ZW0uZHJhZ2dhYmxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj48aSBjbGFzcz1cImljb25VSUxhcmdlLU1vdmVfSG9yaXplblwiPjwvaT48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibW92ZWFibGUtdGl0bGVcIiAqbmdJZj1cIm9uRWRpdElkeCAhPT0gaVwiIFtzdHlsZS51c2VyLXNlbGVjdF09XCJpdGVtLmVkaXRhYmxlID8gJ2luaGVyaXQnIDogJ25vbmUnXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cIml0ZW0uaGlkZGVuID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cInN3aXRjaFRvRWRpdE1vZGUoaXRlbSwgaSlcIj57e2l0ZW0uZGlzcGxheX19PC9kaXY+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJtb3ZlYWJsZS10aXRsZSBjbWFjcy1jdXN0b20tZ3JpZC1pbnB1dFwiIChrZXlkb3duLmVudGVyKT1cInN0b3BFZGl0aW9uKClcIiBjbWFjcy1pbnB1dFxyXG4gICAgICAqbmdJZj1cIml0ZW0uZWRpdGFibGUgJiYgYWxsb3dFZGl0aW9uICYmIG9uRWRpdElkeCA9PT0gaVwiIFtmb3JtQ29udHJvbF09XCJmb3JtQ29udHJvbFwiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNtYWNzLWN1c3RvbS1oaWRlLXNob3dcIiAqbmdJZj1cIml0ZW0udGVtcGxhdGUgPT09IHVuZGVmaW5lZFwiXHJcbiAgICAgIFtzdHlsZS5jb2xvcl09XCJpdGVtLmhpZGRlbiB8fCBpdGVtLmhpZGRlbiA9PT0gdW5kZWZpbmVkID8gJyM5N2EwYWUnIDogJ2luaGVyaXQnXCIgKGNsaWNrKT1cImhpZGVTaG93KGkpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW92ZXNwYW5cIj5cclxuICAgICAgICA8aSAqbmdJZj1cIml0ZW0uaGlkZGVuID09PSB1bmRlZmluZWRcIiBjbGFzcz1cImljb25VSUxhcmdlLUxjb2stTW92ZW1lbnRcIj48L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaGlkZGVuXCJcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVNsYXNoXCJcclxuICAgICAgICAgICBbY21hY3NUb29sdGlwVGl0bGVdPVwic2hvd0xhYmVsXCJcclxuICAgICAgICAgICBjbWFjc1Rvb2x0aXBQbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgY21hY3MtdG9vbHRpcD5cclxuICAgICAgICA8L2k+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJpdGVtLmhpZGRlbiAhPT0gdW5kZWZpbmVkICYmICFpdGVtLmhpZGRlblwiXHJcbiAgICAgICAgICAgW2NtYWNzVG9vbHRpcFRpdGxlXT1cImhpZGVMYWJlbFwiXHJcbiAgICAgICAgICAgY21hY3NUb29sdGlwUGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgIGNtYWNzLXRvb2x0aXBcclxuICAgICAgICAgICBjbGFzcz1cImljb25VSUxhcmdlLUV5ZVwiPlxyXG4gICAgICAgIDwvaT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udGVtcGxhdGVcIj5cclxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtLnRlbXBsYXRlLnJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJpdGVtLnRlbXBsYXRlLmNvbnRleHRcIlxyXG4gICAgICAgIGNsYXNzPVwiY21hY3MtY3VzdG9tLWhpZGUtc2hvd1wiPjwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuIl19