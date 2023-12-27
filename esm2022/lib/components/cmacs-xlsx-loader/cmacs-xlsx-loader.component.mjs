import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import * as XLSX from "xlsx";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/table";
import * as i4 from "@angular/forms";
import * as i5 from "../cmacs-modal/cmacs-modal.component";
import * as i6 from "../cmacs-button/cmacs-button.component";
import * as i7 from "../cmacs-select/cmacs-select.component";
import * as i8 from "../cmacs-select/cmacs-option.component";
function CmacsXlsxLoaderComponent_th_6_ng_container_3_cmacs_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 15);
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", config_r7.PropertyId)("label", ctx_r8.getLabel(config_r7));
} }
function CmacsXlsxLoaderComponent_th_6_ng_container_3_cmacs_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cmacs-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 17);
    i0.ɵɵtext(3, "*");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", config_r7.PropertyId)("label", ctx_r9.getLabel(config_r7));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.getLabel(config_r7), " ");
} }
function CmacsXlsxLoaderComponent_th_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsXlsxLoaderComponent_th_6_ng_container_3_cmacs_option_1_Template, 1, 2, "cmacs-option", 13);
    i0.ɵɵtemplate(2, CmacsXlsxLoaderComponent_th_6_ng_container_3_cmacs_option_2_Template, 4, 3, "cmacs-option", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const config_r7 = ctx.$implicit;
    const header_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !config_r7.Required && (!config_r7.MatchedColumn || config_r7.MatchedColumn === header_r5.display));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", config_r7.Required && (!config_r7.MatchedColumn || config_r7.MatchedColumn === header_r5.display));
} }
function CmacsXlsxLoaderComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10)(1, "span", 11)(2, "cmacs-select", 12);
    i0.ɵɵlistener("ngModelChange", function CmacsXlsxLoaderComponent_th_6_Template_cmacs_select_ngModelChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const header_r5 = restoredCtx.$implicit; return i0.ɵɵresetView(header_r5.matchedColumn = $event); })("ngModelChange", function CmacsXlsxLoaderComponent_th_6_Template_cmacs_select_ngModelChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r14); const header_r5 = restoredCtx.$implicit; const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onSelectionChange($event, header_r5)); });
    i0.ɵɵtemplate(3, CmacsXlsxLoaderComponent_th_6_ng_container_3_Template, 3, 2, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", header_r5.matchedColumn)("allowClear", true)("placeHolder", ctx_r0.placeholder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.configuration);
} }
function CmacsXlsxLoaderComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", header_r16.display, " ");
} }
function CmacsXlsxLoaderComponent_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(cell_r19);
} }
function CmacsXlsxLoaderComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, CmacsXlsxLoaderComponent_tr_10_td_1_Template, 2, 1, "td", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r17);
} }
function CmacsXlsxLoaderComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function CmacsXlsxLoaderComponent_ng_template_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.handleCancel()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 20);
    i0.ɵɵlistener("click", function CmacsXlsxLoaderComponent_ng_template_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.saveConfig()); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r4.cancelBtnLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.cancelBtnLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r4.saveBtnLabel);
    i0.ɵɵproperty("disabled", ctx_r4.disableSaveBtn());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.saveBtnLabel);
} }
export class CmacsXlsxLoaderComponent {
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.destroy$ = new Subject();
        this.headers = [];
        this.data = [];
        this.modalTitle = '';
        this.visible = false;
        this.saveBtnLabel = '';
        this.cancelBtnLabel = '';
        this.placeholder = 'Select Column';
        this.cmacsStyle = {};
        this.files = [];
        this.infoTemplate = null;
        this.configurationChange = new EventEmitter();
        this.onsave = new EventEmitter();
        this.visibleChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.visible) {
            this.parseXlsx();
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.placeholder = 'Spalte auswählen';
                    break;
                case 'en':
                    this.placeholder = 'Select Column';
                    break;
                case 'ja':
                    this.placeholder = '列を選択';
                    break;
                default:
                    this.placeholder = 'Select Column';
            }
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.parseXlsx();
        }
    }
    onVisibleChange($event) {
        this.files = [];
        this.data = [];
        this.headers = [];
        this.visibleChange.emit(this.visible);
    }
    saveConfig() {
        const originalHeaders = [];
        const matchedHeaders = [];
        this.headers.forEach(header => {
            originalHeaders.push(header.display);
            matchedHeaders.push(header.matchedColumn);
        });
        this.data[0].unshift(matchedHeaders);
        this.data[0].unshift(originalHeaders);
        this.configurationChange.emit(this.configuration);
        this.onsave.emit(this.data);
        this.visible = false;
        this.onVisibleChange(false);
    }
    handleCancel() {
        this.visible = false;
        this.onVisibleChange(false);
    }
    parseXlsx() {
        this.data = [];
        this.headers = [];
        this.configuration.forEach(config => {
            config.MatchedColumn = null;
        });
        if (this.files.length !== 1)
            throw new Error('Cannot use multiple files or file is empty');
        const reader = new FileReader();
        reader.onload = (e) => {
            /* read workbook */
            const bstr = e.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const sheets = wb.SheetNames;
            sheets.forEach((wsname) => {
                const ws = wb.Sheets[wsname];
                this.data.push(XLSX.utils.sheet_to_json(ws, { header: 1, blankrows: false, dateNF: 'MM/dd/yyyy' }));
            });
            if (this.data && this.data.length && this.data[0].length) {
                this.createHeaders(this.data[0][0]);
                this.data[0] = this.data[0].slice(1);
            }
        };
        const file = this.files[0];
        reader.readAsBinaryString(file);
    }
    createHeaders(data) {
        data.forEach(header => {
            if (header.toLowerCase === undefined) {
                return;
            }
            const value = header.toLowerCase();
            let matchedColumn = this.configuration.filter(item => item.DisplayName.toLowerCase() === value);
            if (matchedColumn.length) {
                matchedColumn[0].MatchedColumn = header;
            }
            let temp = {
                display: header,
                matchedColumn: matchedColumn.length ? matchedColumn[0].PropertyId : null
            };
            this.headers.push(temp);
        });
    }
    onSelectionChange($event, header) {
        const previousSelected = this.configuration.filter(item => item.MatchedColumn === header.display);
        if (previousSelected.length) {
            previousSelected[0].MatchedColumn = null;
        }
        if ($event) {
            const config = this.configuration.filter(item => item.PropertyId === $event)[0];
            config.MatchedColumn = header.display;
        }
    }
    disableSaveBtn() {
        const requiredNotMatched = this.configuration.filter(item => item.Required && !item.MatchedColumn).length;
        if (requiredNotMatched) {
            return true;
        }
        // const matched = this.configuration.filter(item => item.MatchedColumn !== null).length;
        /*if (matched !== this.headers.length) {
          return true;
        }*/
    }
    getLabel(config) {
        return config.DisplayName;
    }
    static { this.ɵfac = function CmacsXlsxLoaderComponent_Factory(t) { return new (t || CmacsXlsxLoaderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsXlsxLoaderComponent, selectors: [["cmacs-xlsx-loader"]], inputs: { configuration: "configuration", modalTitle: "modalTitle", visible: "visible", saveBtnLabel: "saveBtnLabel", cancelBtnLabel: "cancelBtnLabel", placeholder: "placeholder", cmacsStyle: "cmacsStyle", files: "files", width: "width", infoTemplate: "infoTemplate" }, outputs: { configurationChange: "configurationChange", onsave: "onsave", visibleChange: "visibleChange" }, exportAs: ["cmacsXlsxLoader"], features: [i0.ɵɵNgOnChangesFeature], decls: 15, vars: 11, consts: [["modalType", "helpfulTips", 1, "cmacs-data-loader-modal", 3, "visible", "title", "width", "useCmacsDefaultSizes", "zIndex", "cmacsStyle", "footer", "visibleChange"], ["cmacs-modal-helpful-center-panel", ""], [1, "cmacs-xlsx-loader-body", "cmacs-custom-scrollbar"], [1, "cmacs-xlsx-loader-table"], ["class", "cmacs-xslx-loader", 4, "ngFor", "ngForOf"], ["class", "cmacs-xlsx-loader-header", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["cmacs-modal-helpful-right-panel", ""], [3, "ngTemplateOutlet"], ["modalFooter", ""], [1, "cmacs-xslx-loader"], [1, "cmacs-xlsx-loader-select"], [1, "cmacs-data-loader-select", 3, "ngModel", "allowClear", "placeHolder", "ngModelChange"], [3, "value", "label", 4, "ngIf"], ["customContent", "", 3, "value", "label", 4, "ngIf"], [3, "value", "label"], ["customContent", "", 3, "value", "label"], [2, "color", "#F6503C"], [1, "cmacs-xlsx-loader-header"], ["cmacs-button", "", "type", "default", "role", "button", "ghost", "", 2, "float", "left", 3, "aria-label", "click"], ["cmacs-button", "", "type", "primary", "role", "button", 3, "disabled", "aria-label", "click"]], template: function CmacsXlsxLoaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cmacs-modal", 0);
            i0.ɵɵlistener("visibleChange", function CmacsXlsxLoaderComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.visible = $event; })("visibleChange", function CmacsXlsxLoaderComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.onVisibleChange($event); });
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "thead")(5, "tr");
            i0.ɵɵtemplate(6, CmacsXlsxLoaderComponent_th_6_Template, 4, 4, "th", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "tbody")(8, "tr");
            i0.ɵɵtemplate(9, CmacsXlsxLoaderComponent_td_9_Template, 2, 1, "td", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, CmacsXlsxLoaderComponent_tr_10_Template, 2, 1, "tr", 6);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵelementContainer(12, 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(13, CmacsXlsxLoaderComponent_ng_template_13_Template, 5, 5, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const _r3 = i0.ɵɵreference(14);
            i0.ɵɵproperty("visible", ctx.visible)("title", ctx.modalTitle)("width", ctx.width)("useCmacsDefaultSizes", false)("zIndex", 10000)("cmacsStyle", ctx.cmacsStyle)("footer", _r3);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.headers);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.headers);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.data[0]);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.infoTemplate);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzTableCellDirective, i3.NzThMeasureDirective, i3.NzTheadComponent, i3.NzTbodyComponent, i3.NzTrDirective, i4.NgControlStatus, i4.NgModel, i5.CmacsModalComponent, i6.CmacsButtonComponent, i7.CmacsSelectComponent, i8.CmacsOptionComponent], styles: [".cmacs-xlsx-loader-body th{text-align:center;box-shadow:inset 1px 1px #f6f7fb,0 1px #f6f7fb;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb;position:sticky;top:0}.cmacs-xlsx-loader-body th:last-child{border-right:1px solid #F6F7FB}.cmacs-xlsx-loader-body td{border:1px solid #DEE0E5;border-collapse:collapse;padding:6px 10px;color:#3b3f46}.cmacs-xlsx-loader-header{background-color:#f6f7fb;top:34px;border-left:none!important;border-right:none!important;border-top:none!important;font-family:Roboto-Medium}.cmacs-xlsx-loader-header:last-child{border-right:1px solid #F6F7FB!important}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{max-height:451px;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:100%}.cmacs-xlsx-loader-index{float:left;padding-top:7px}::ng-deep .cmacs-data-loader-modal .cmacs-modal-helpful-center-panel{padding:10px}\n"], encapsulation: 2 }); }
}
__decorate([
    InputBoolean()
], CmacsXlsxLoaderComponent.prototype, "visible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsXlsxLoaderComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-xlsx-loader', exportAs: 'cmacsXlsxLoader', encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"helpfulTips\"\r\n  class=\"cmacs-data-loader-modal\"\r\n  [width]=\"width\"\r\n  [useCmacsDefaultSizes]=\"false\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  [footer]=\"modalFooter\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div cmacs-modal-helpful-center-panel>\r\n    <div class=\"cmacs-xlsx-loader-body cmacs-custom-scrollbar\">\r\n      <table class=\"cmacs-xlsx-loader-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"cmacs-xslx-loader\" *ngFor=\"let header of headers\">\r\n              <span class=\"cmacs-xlsx-loader-select\">\r\n                <cmacs-select [(ngModel)]=\"header.matchedColumn\" [allowClear]=\"true\"\r\n                              class=\"cmacs-data-loader-select\"\r\n                              (ngModelChange)=\"onSelectionChange($event, header)\" [placeHolder]=\"placeholder\">\r\n                  <ng-container *ngFor=\"let config of configuration\">\r\n                    <cmacs-option *ngIf=\"!config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                                  [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                    </cmacs-option>\r\n                    <cmacs-option *ngIf=\"config.Required && (!config.MatchedColumn || config.MatchedColumn === header.display)\"\r\n                                  customContent\r\n                                  [value]=\"config.PropertyId\" [label]=\"getLabel(config)\">\r\n                      {{getLabel(config)}} <span style=\"color: #F6503C\">*</span>\r\n                    </cmacs-option>\r\n                  </ng-container>\r\n                </cmacs-select>\r\n              </span>\r\n            </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td *ngFor=\"let header of headers\" class=\"cmacs-xlsx-loader-header\">\r\n              {{header.display}}\r\n            </td>\r\n          </tr>\r\n          <tr *ngFor=\"let row of data[0]\">\r\n            <td *ngFor=\"let cell of row\">{{cell}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <div cmacs-modal-helpful-right-panel>\r\n    <ng-container [ngTemplateOutlet]=\"infoTemplate\"></ng-container>\r\n  </div>\r\n</cmacs-modal>\r\n\r\n<ng-template #modalFooter>\r\n  <button cmacs-button type=\"default\" role=\"button\" ghost style=\"float: left;\" (click)=\"handleCancel()\" aria-label=\"{{cancelBtnLabel}}\">{{cancelBtnLabel}}</button>\r\n  <button cmacs-button type=\"primary\" role=\"button\" [disabled]=\"disableSaveBtn()\" (click)=\"saveConfig()\" aria-label=\"{{saveBtnLabel}}\">\r\n    <span>{{saveBtnLabel}}</span>\r\n  </button>\r\n</ng-template>\r\n", styles: [".cmacs-xlsx-loader-body th{text-align:center;box-shadow:inset 1px 1px #f6f7fb,0 1px #f6f7fb;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb;position:sticky;top:0}.cmacs-xlsx-loader-body th:last-child{border-right:1px solid #F6F7FB}.cmacs-xlsx-loader-body td{border:1px solid #DEE0E5;border-collapse:collapse;padding:6px 10px;color:#3b3f46}.cmacs-xlsx-loader-header{background-color:#f6f7fb;top:34px;border-left:none!important;border-right:none!important;border-top:none!important;font-family:Roboto-Medium}.cmacs-xlsx-loader-header:last-child{border-right:1px solid #F6F7FB!important}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{max-height:451px;overflow:auto;scrollbar-color:#cfd3d9 #ffffff;scrollbar-width:thin}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:100%}.cmacs-xlsx-loader-index{float:left;padding-top:7px}::ng-deep .cmacs-data-loader-modal .cmacs-modal-helpful-center-panel{padding:10px}\n"] }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }]; }, { configuration: [{
            type: Input
        }], modalTitle: [{
            type: Input
        }], visible: [{
            type: Input
        }], saveBtnLabel: [{
            type: Input
        }], cancelBtnLabel: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], cmacsStyle: [{
            type: Input
        }], files: [{
            type: Input
        }], width: [{
            type: Input
        }], infoTemplate: [{
            type: Input
        }], configurationChange: [{
            type: Output
        }], onsave: [{
            type: Output
        }], visibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXhsc3gtbG9hZGVyL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNjbkMsbUNBRWU7Ozs7SUFERCw0Q0FBMkIscUNBQUE7OztJQUV6Qyx3Q0FFcUU7SUFDbkUsWUFBcUI7SUFBQSxnQ0FBNkI7SUFBQSxpQkFBQztJQUFBLGlCQUFPLEVBQUE7Ozs7SUFEOUMsNENBQTJCLHFDQUFBO0lBQ3ZDLGVBQXFCO0lBQXJCLDJEQUFxQjs7O0lBUHpCLDZCQUFtRDtJQUNqRCxnSEFFZTtJQUNmLGdIQUllO0lBQ2pCLDBCQUFlOzs7O0lBUkUsZUFBNEY7SUFBNUYseUhBQTRGO0lBRzVGLGVBQTJGO0lBQTNGLHdIQUEyRjs7OztJQVRsSCw4QkFBNkQsZUFBQSx1QkFBQTtJQUUzQywyTkFBYSxnREFBNEIs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QyxzQ0FXQztZQVZDLHdKQUFxQixtSEFTSiwyQkFBdUIsSUFUbkI7WUFXckIsOEJBQXNDLGFBQUEsZUFBQSxZQUFBLFNBQUE7WUFLNUIsdUVBaUJLO1lBQ1QsaUJBQUssRUFBQTtZQUVMLDZCQUFPLFNBQUE7WUFFSCx1RUFFSztZQUNQLGlCQUFLO1lBQ0wseUVBRUs7WUFDUCxpQkFBUSxFQUFBLEVBQUEsRUFBQTtZQUtkLCtCQUFxQztZQUNuQyw0QkFBK0Q7WUFDakUsaUJBQU0sRUFBQTtZQUdSLDRIQUtjOzs7WUE1RFoscUNBQXFCLHlCQUFBLG9CQUFBLCtCQUFBLGlCQUFBLDhCQUFBLGVBQUE7WUFnQnNDLGVBQVU7WUFBVixxQ0FBVTtZQXNCcEMsZUFBVTtZQUFWLHFDQUFVO1lBSWYsZUFBVTtZQUFWLHFDQUFVO1lBU3RCLGVBQWlDO1lBQWpDLG1EQUFpQzs7O0FEaEJ4QjtJQUFmLFlBQVksRUFBRTt5REFBaUI7dUZBVDlCLHdCQUF3QjtjQVJwQyxTQUFTOzJCQUNFLG1CQUFtQixZQUNuQixpQkFBaUIsaUJBRVosaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSztnR0FVakIsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBRUksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ21hY3NDb25maWdJdGVtTG9hZGVyIHtcclxuICBQcm9wZXJ0eUlkOiBzdHJpbmc7XHJcbiAgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICBSZXF1aXJlZDogYm9vbGVhbjtcclxuICBNYXRjaGVkQ29sdW1uOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXhsc3gtbG9hZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzWGxzeExvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NYbHN4TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveXtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGhlYWRlcnMgPSBbXTtcclxuICBkYXRhID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IENtYWNzQ29uZmlnSXRlbUxvYWRlcltdO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QgQ29sdW1uJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlID0ge307XHJcbiAgQElucHV0KCkgZmlsZXMgPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluZm9UZW1wbGF0ZTogRWxlbWVudFJlZiA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBjb25maWd1cmF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NwYWx0ZSBhdXN3w6RobGVuJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAn5YiX44KS6YG45oqeJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTZWxlY3QgQ29sdW1uJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICYmIGNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5wYXJzZVhsc3goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLnZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsSGVhZGVycyA9IFtdO1xyXG4gICAgY29uc3QgbWF0Y2hlZEhlYWRlcnMgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIG9yaWdpbmFsSGVhZGVycy5wdXNoKGhlYWRlci5kaXNwbGF5KTtcclxuICAgICAgbWF0Y2hlZEhlYWRlcnMucHVzaChoZWFkZXIubWF0Y2hlZENvbHVtbik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG1hdGNoZWRIZWFkZXJzKTtcclxuICAgIHRoaXMuZGF0YVswXS51bnNoaWZ0KG9yaWdpbmFsSGVhZGVycyk7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgdGhpcy5vbnNhdmUuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYW5jZWwoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHBhcnNlWGxzeCgpIHtcclxuICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5oZWFkZXJzID0gW107XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24uZm9yRWFjaChjb25maWcgPT4ge1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggIT09IDEpIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBtdWx0aXBsZSBmaWxlcyBvciBmaWxlIGlzIGVtcHR5Jyk7XHJcbiAgICBjb25zdCByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLm9ubG9hZCA9IChlOiBhbnkpID0+IHtcclxuICAgICAgLyogcmVhZCB3b3JrYm9vayAqL1xyXG4gICAgICBjb25zdCBic3RyOiBzdHJpbmcgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgIGNvbnN0IHdiOiBYTFNYLldvcmtCb29rID0gWExTWC5yZWFkKGJzdHIsIHt0eXBlOiAnYmluYXJ5J30pO1xyXG5cclxuICAgICAgY29uc3Qgc2hlZXRzID0gd2IuU2hlZXROYW1lcztcclxuICAgICAgc2hlZXRzLmZvckVhY2goKHdzbmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdzOiBYTFNYLldvcmtTaGVldCA9IHdiLlNoZWV0c1t3c25hbWVdO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKFhMU1gudXRpbHMuc2hlZXRfdG9fanNvbih3cywge2hlYWRlcjogMSwgYmxhbmtyb3dzOiBmYWxzZSwgZGF0ZU5GOiAnTU0vZGQveXl5eSd9KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggJiYgdGhpcy5kYXRhWzBdLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVIZWFkZXJzKHRoaXMuZGF0YVswXVswXSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gdGhpcy5kYXRhWzBdLnNsaWNlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmlsZXNbMF0gYXMgYW55O1xyXG4gICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUhlYWRlcnMoZGF0YSl7XHJcbiAgICBkYXRhLmZvckVhY2goaGVhZGVyID0+IHtcclxuICAgICAgaWYoaGVhZGVyLnRvTG93ZXJDYXNlID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IGhlYWRlci50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBsZXQgbWF0Y2hlZENvbHVtbiA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLkRpc3BsYXlOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlKTtcclxuICAgICAgaWYgKG1hdGNoZWRDb2x1bW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgbWF0Y2hlZENvbHVtblswXS5NYXRjaGVkQ29sdW1uID0gaGVhZGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0ZW1wID0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGhlYWRlcixcclxuICAgICAgICBtYXRjaGVkQ29sdW1uOiBtYXRjaGVkQ29sdW1uLmxlbmd0aCA/IG1hdGNoZWRDb2x1bW5bMF0uUHJvcGVydHlJZCA6IG51bGxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5oZWFkZXJzLnB1c2godGVtcCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGhlYWRlcikge1xyXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLk1hdGNoZWRDb2x1bW4gPT09IGhlYWRlci5kaXNwbGF5KTtcclxuICAgIGlmIChwcmV2aW91c1NlbGVjdGVkLmxlbmd0aCkge1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGVkWzBdLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCRldmVudCkge1xyXG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5Qcm9wZXJ0eUlkID09PSAkZXZlbnQpWzBdO1xyXG4gICAgICBjb25maWcuTWF0Y2hlZENvbHVtbiA9IGhlYWRlci5kaXNwbGF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzYWJsZVNhdmVCdG4oKSB7XHJcbiAgICBjb25zdCByZXF1aXJlZE5vdE1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5SZXF1aXJlZCAmJiAhaXRlbS5NYXRjaGVkQ29sdW1uKS5sZW5ndGg7XHJcbiAgICBpZiAocmVxdWlyZWROb3RNYXRjaGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgbWF0Y2hlZCA9IHRoaXMuY29uZmlndXJhdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtLk1hdGNoZWRDb2x1bW4gIT09IG51bGwpLmxlbmd0aDtcclxuICAgIC8qaWYgKG1hdGNoZWQgIT09IHRoaXMuaGVhZGVycy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIGdldExhYmVsKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNvbmZpZy5EaXNwbGF5TmFtZTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxjbWFjcy1tb2RhbFxyXG4gIFsodmlzaWJsZSldPVwidmlzaWJsZVwiXHJcbiAgW3RpdGxlXT1cIm1vZGFsVGl0bGVcIlxyXG4gIG1vZGFsVHlwZT1cImhlbHBmdWxUaXBzXCJcclxuICBjbGFzcz1cImNtYWNzLWRhdGEtbG9hZGVyLW1vZGFsXCJcclxuICBbd2lkdGhdPVwid2lkdGhcIlxyXG4gIFt1c2VDbWFjc0RlZmF1bHRTaXplc109XCJmYWxzZVwiXHJcbiAgW3pJbmRleF09XCIxMDAwMFwiXHJcbiAgW2NtYWNzU3R5bGVdPVwiY21hY3NTdHlsZVwiXHJcbiAgW2Zvb3Rlcl09XCJtb2RhbEZvb3RlclwiXHJcbiAgKHZpc2libGVDaGFuZ2UpPVwib25WaXNpYmxlQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiBjbWFjcy1tb2RhbC1oZWxwZnVsLWNlbnRlci1wYW5lbD5cclxuICAgIDxkaXYgY2xhc3M9XCJjbWFjcy14bHN4LWxvYWRlci1ib2R5IGNtYWNzLWN1c3RvbS1zY3JvbGxiYXJcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwiY21hY3MteGxzeC1sb2FkZXItdGFibGVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImNtYWNzLXhzbHgtbG9hZGVyXCIgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbWFjcy14bHN4LWxvYWRlci1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxjbWFjcy1zZWxlY3QgWyhuZ01vZGVsKV09XCJoZWFkZXIubWF0Y2hlZENvbHVtblwiIFthbGxvd0NsZWFyXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNtYWNzLWRhdGEtbG9hZGVyLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCwgaGVhZGVyKVwiIFtwbGFjZUhvbGRlcl09XCJwbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb25maWcgb2YgY29uZmlndXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nSWY9XCIhY29uZmlnLlJlcXVpcmVkICYmICghY29uZmlnLk1hdGNoZWRDb2x1bW4gfHwgY29uZmlnLk1hdGNoZWRDb2x1bW4gPT09IGhlYWRlci5kaXNwbGF5KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiY29uZmlnLlByb3BlcnR5SWRcIiBbbGFiZWxdPVwiZ2V0TGFiZWwoY29uZmlnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxjbWFjcy1vcHRpb24gKm5nSWY9XCJjb25maWcuUmVxdWlyZWQgJiYgKCFjb25maWcuTWF0Y2hlZENvbHVtbiB8fCBjb25maWcuTWF0Y2hlZENvbHVtbiA9PT0gaGVhZGVyLmRpc3BsYXkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjb25maWcuUHJvcGVydHlJZFwiIFtsYWJlbF09XCJnZXRMYWJlbChjb25maWcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7e2dldExhYmVsKGNvbmZpZyl9fSA8c3BhbiBzdHlsZT1cImNvbG9yOiAjRjY1MDNDXCI+Kjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2NtYWNzLW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2NtYWNzLXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc1wiIGNsYXNzPVwiY21hY3MteGxzeC1sb2FkZXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge3toZWFkZXIuZGlzcGxheX19XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgZGF0YVswXVwiPlxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGNlbGwgb2Ygcm93XCI+e3tjZWxsfX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY21hY3MtbW9kYWwtaGVscGZ1bC1yaWdodC1wYW5lbD5cclxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiaW5mb1RlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvY21hY3MtbW9kYWw+XHJcblxyXG48bmctdGVtcGxhdGUgI21vZGFsRm9vdGVyPlxyXG4gIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgcm9sZT1cImJ1dHRvblwiIGdob3N0IHN0eWxlPVwiZmxvYXQ6IGxlZnQ7XCIgKGNsaWNrKT1cImhhbmRsZUNhbmNlbCgpXCIgYXJpYS1sYWJlbD1cInt7Y2FuY2VsQnRuTGFiZWx9fVwiPnt7Y2FuY2VsQnRuTGFiZWx9fTwvYnV0dG9uPlxyXG4gIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgcm9sZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJkaXNhYmxlU2F2ZUJ0bigpXCIgKGNsaWNrKT1cInNhdmVDb25maWcoKVwiIGFyaWEtbGFiZWw9XCJ7e3NhdmVCdG5MYWJlbH19XCI+XHJcbiAgICA8c3Bhbj57e3NhdmVCdG5MYWJlbH19PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=