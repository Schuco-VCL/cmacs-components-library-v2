import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import * as XLSX from "xlsx";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "../cmacs-modal/cmacs-modal.component";
import * as i3 from "ng-zorro-antd/table";
import * as i4 from "@angular/common";
import * as i5 from "../cmacs-select/cmacs-select.component";
import * as i6 from "@angular/forms";
import * as i7 from "../cmacs-select/cmacs-option.component";
import * as i8 from "../cmacs-button/cmacs-button.component";
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelementStart(1, "span", 11);
    i0.ɵɵelementStart(2, "cmacs-select", 12);
    i0.ɵɵlistener("ngModelChange", function CmacsXlsxLoaderComponent_th_6_Template_cmacs_select_ngModelChange_2_listener($event) { const header_r5 = ctx.$implicit; return header_r5.matchedColumn = $event; })("ngModelChange", function CmacsXlsxLoaderComponent_th_6_Template_cmacs_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r15); const header_r5 = ctx.$implicit; const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSelectionChange($event, header_r5); });
    i0.ɵɵtemplate(3, CmacsXlsxLoaderComponent_th_6_ng_container_3_Template, 3, 2, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("click", function CmacsXlsxLoaderComponent_ng_template_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.handleCancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 20);
    i0.ɵɵlistener("click", function CmacsXlsxLoaderComponent_ng_template_13_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.saveConfig(); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.cancelBtnLabel);
    i0.ɵɵadvance(1);
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
                default:
                    this.placeholder = 'Select Column';
            }
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
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
}
CmacsXlsxLoaderComponent.ɵfac = function CmacsXlsxLoaderComponent_Factory(t) { return new (t || CmacsXlsxLoaderComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); };
CmacsXlsxLoaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsXlsxLoaderComponent, selectors: [["cmacs-xlsx-loader"]], inputs: { configuration: "configuration", modalTitle: "modalTitle", visible: "visible", saveBtnLabel: "saveBtnLabel", cancelBtnLabel: "cancelBtnLabel", placeholder: "placeholder", cmacsStyle: "cmacsStyle", files: "files", width: "width", infoTemplate: "infoTemplate" }, outputs: { configurationChange: "configurationChange", onsave: "onsave", visibleChange: "visibleChange" }, exportAs: ["cmacsXlsxLoader"], features: [i0.ɵɵNgOnChangesFeature], decls: 15, vars: 11, consts: [["modalType", "helpfulTips", 1, "cmacs-data-loader-modal", 3, "visible", "title", "width", "useCmacsDefaultSizes", "zIndex", "cmacsStyle", "footer", "visibleChange"], ["cmacs-modal-helpful-center-panel", ""], [1, "cmacs-xlsx-loader-body", "cmacs-custom-scrollbar"], [1, "cmacs-xlsx-loader-table"], ["class", "cmacs-xslx-loader", 4, "ngFor", "ngForOf"], ["class", "cmacs-xlsx-loader-header", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["cmacs-modal-helpful-right-panel", ""], [3, "ngTemplateOutlet"], ["modalFooter", ""], [1, "cmacs-xslx-loader"], [1, "cmacs-xlsx-loader-select"], [3, "ngModel", "allowClear", "placeHolder", "ngModelChange"], [3, "value", "label", 4, "ngIf"], ["customContent", "", 3, "value", "label", 4, "ngIf"], [3, "value", "label"], ["customContent", "", 3, "value", "label"], [2, "color", "#F6503C"], [1, "cmacs-xlsx-loader-header"], ["cmacs-button", "", "type", "default", "ghost", "", 2, "float", "left", 3, "click"], ["cmacs-button", "", "type", "primary", 3, "disabled", "click"]], template: function CmacsXlsxLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cmacs-modal", 0);
        i0.ɵɵlistener("visibleChange", function CmacsXlsxLoaderComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.visible = $event; })("visibleChange", function CmacsXlsxLoaderComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.onVisibleChange($event); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "table", 3);
        i0.ɵɵelementStart(4, "thead");
        i0.ɵɵelementStart(5, "tr");
        i0.ɵɵtemplate(6, CmacsXlsxLoaderComponent_th_6_Template, 4, 4, "th", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "tbody");
        i0.ɵɵelementStart(8, "tr");
        i0.ɵɵtemplate(9, CmacsXlsxLoaderComponent_td_9_Template, 2, 1, "td", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, CmacsXlsxLoaderComponent_tr_10_Template, 2, 1, "tr", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 7);
        i0.ɵɵelementContainer(12, 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, CmacsXlsxLoaderComponent_ng_template_13_Template, 5, 3, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
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
    } }, directives: [i2.CmacsModalComponent, i3.NzTheadComponent, i3.NzTrDirective, i4.NgForOf, i3.NzTbodyComponent, i4.NgTemplateOutlet, i3.NzTableCellDirective, i3.NzThMeasureDirective, i5.CmacsSelectComponent, i6.NgControlStatus, i6.NgModel, i4.NgIf, i7.CmacsOptionComponent, i8.CmacsButtonComponent], styles: [".cmacs-xlsx-loader-body th{text-align:center;box-shadow:inset 1px 1px #d3d3d3,0 1px #d3d3d3;border-collapse:collapse;padding:2px;font-size:12px;min-width:185px;background-color:#f6f7fb;position:-webkit-sticky;position:sticky;top:0}.cmacs-xlsx-loader-body th:last-child{border-right:1px solid #d3d3d3}.cmacs-xlsx-loader-body td{border:1px solid #d3d3d3;border-collapse:collapse;padding:6px 10px}.cmacs-xlsx-loader-header{background-color:#f6f7fb;font-weight:600;position:-webkit-sticky;position:sticky;top:34px;box-shadow:inset 1px -1px #d3d3d3;border-left:none!important;border-right:none!important;border-top:none!important}.cmacs-xlsx-loader-header:last-child{border-right:1px solid #d3d3d3!important}.cmacs-xslx-loader{padding:2px}.cmacs-xlsx-loader-body{max-height:calc(531px - 80px);overflow:auto;scrollbar-color:#cfd3d9 #fff;scrollbar-width:thin}.cmacs-xlsx-loader-table{width:100%;font-size:12px}.cmacs-xlsx-loader-footer{padding:10px 10px 60px}.cmacs-xlsx-loader-select .ant-select-selection.ant-select-selection--single{height:30px;font-size:12px}.cmacs-xlsx-loader-select cmacs-select{width:100%}.cmacs-xlsx-loader-index{float:left;padding-top:7px}::ng-deep .cmacs-data-loader-modal .cmacs-modal-helpful-center-panel{padding:10px}"], encapsulation: 2 });
__decorate([
    InputBoolean()
], CmacsXlsxLoaderComponent.prototype, "visible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsXlsxLoaderComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-xlsx-loader',
                exportAs: 'cmacsXlsxLoader',
                templateUrl: './cmacs-xlsx-loader.component.html',
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styleUrls: ['./cmacs-xlsx-loader.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MteGxzeC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXhsc3gtbG9hZGVyL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy14bHN4LWxvYWRlci9jbWFjcy14bHN4LWxvYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNhbkMsbUNBRWU7Ozs7SUFERCw0Q0FBMkIscUNBQUE7OztJQUV6Qyx3Q0FFcUU7SUFDbkUsWUFBcUI7SUFBQSxnQ0FBNkI7SUFBQSxpQkFBQztJQUFBLGlCQUFPO0lBQzVELGlCQUFlOzs7O0lBRkQsNENBQTJCLHFDQUFBO0lBQ3ZDLGVBQXFCO0lBQXJCLDJEQUFxQjs7O0lBUHpCLDZCQUFtRDtJQUNqRCxnSEFFZTtJQUNmLGdIQUllO0lBQ2pCLDBCQUFlOzs7O0lBUkUsZUFBNEY7SUFBNUYseUhBQTRGO0lBRzVGLGVBQTJGO0lBQTNGLHdIQUEyRjs7OztJQVJsSCw4QkFBNkQ7SUFDM0QsZ0NBQXVDO0lBQ3JDLHdDQUM4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QVE7UUFDUiw2QkFBTztRQUNMLDBCQUFJO1FBQ0YsdUVBRUs7UUFDUCxpQkFBSztRQUNMLHlFQUVLO1FBQ1AsaUJBQVE7UUFDVixpQkFBUTtRQUNWLGlCQUFNO1FBQ1IsaUJBQU07UUFFTiwrQkFBcUM7UUFDbkMsNEJBQStEO1FBQ2pFLGlCQUFNO1FBQ1IsaUJBQWM7UUFFZCw0SEFLYzs7O1FBM0RaLHFDQUFxQix5QkFBQSxvQkFBQSwrQkFBQSxpQkFBQSw4QkFBQSxlQUFBO1FBZ0JzQyxlQUFVO1FBQVYscUNBQVU7UUFxQnBDLGVBQVU7UUFBVixxQ0FBVTtRQUlmLGVBQVU7UUFBVixxQ0FBVTtRQVN0QixlQUFpQztRQUFqQyxtREFBaUM7O0FEZnhCO0lBQWYsWUFBWSxFQUFFO3lEQUFpQjt1RkFUOUIsd0JBQXdCO2NBUnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Z0dBUVUsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBRUksbUJBQW1CO2tCQUE1QixNQUFNO1lBQ0csTUFBTTtrQkFBZixNQUFNO1lBQ0csYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgWExTWCBmcm9tIFwieGxzeFwiO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ21hY3NDb25maWdJdGVtTG9hZGVyIHtcclxuICBQcm9wZXJ0eUlkOiBzdHJpbmc7XHJcbiAgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICBSZXF1aXJlZDogYm9vbGVhbjtcclxuICBNYXRjaGVkQ29sdW1uOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXhsc3gtbG9hZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzWGxzeExvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXhsc3gtbG9hZGVyLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NYbHN4TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveXtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGhlYWRlcnMgPSBbXTtcclxuICBkYXRhID0gW107XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IENtYWNzQ29uZmlnSXRlbUxvYWRlcltdO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjYW5jZWxCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdTZWxlY3QgQ29sdW1uJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlID0ge307XHJcbiAgQElucHV0KCkgZmlsZXMgPSBbXTtcclxuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGluZm9UZW1wbGF0ZTogRWxlbWVudFJlZiA9IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBjb25maWd1cmF0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbnNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnBhcnNlWGxzeCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9ICdTcGFsdGUgYXVzd8OkaGxlbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlbic6XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJ1NlbGVjdCBDb2x1bW4nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VsZWN0IENvbHVtbic7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSAmJiBjaGFuZ2VzLnZpc2libGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMucGFyc2VYbHN4KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblZpc2libGVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25maWcoKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbEhlYWRlcnMgPSBbXTtcclxuICAgIGNvbnN0IG1hdGNoZWRIZWFkZXJzID0gW107XHJcbiAgICB0aGlzLmhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xyXG4gICAgICBvcmlnaW5hbEhlYWRlcnMucHVzaChoZWFkZXIuZGlzcGxheSk7XHJcbiAgICAgIG1hdGNoZWRIZWFkZXJzLnB1c2goaGVhZGVyLm1hdGNoZWRDb2x1bW4pO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRhdGFbMF0udW5zaGlmdChtYXRjaGVkSGVhZGVycyk7XHJcbiAgICB0aGlzLmRhdGFbMF0udW5zaGlmdChvcmlnaW5hbEhlYWRlcnMpO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uQ2hhbmdlLmVtaXQodGhpcy5jb25maWd1cmF0aW9uKTtcclxuICAgIHRoaXMub25zYXZlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblZpc2libGVDaGFuZ2UoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2FuY2VsKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZShmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVhsc3goKSB7XHJcbiAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgIHRoaXMuaGVhZGVycyA9IFtdO1xyXG4gICAgdGhpcy5jb25maWd1cmF0aW9uLmZvckVhY2goY29uZmlnID0+IHtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgbXVsdGlwbGUgZmlsZXMgb3IgZmlsZSBpcyBlbXB0eScpO1xyXG4gICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XHJcbiAgICAgIC8qIHJlYWQgd29ya2Jvb2sgKi9cclxuICAgICAgY29uc3QgYnN0cjogc3RyaW5nID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICBjb25zdCB3YjogWExTWC5Xb3JrQm9vayA9IFhMU1gucmVhZChic3RyLCB7dHlwZTogJ2JpbmFyeSd9KTtcclxuXHJcbiAgICAgIGNvbnN0IHNoZWV0cyA9IHdiLlNoZWV0TmFtZXM7XHJcbiAgICAgIHNoZWV0cy5mb3JFYWNoKCh3c25hbWUpID0+IHtcclxuICAgICAgICBjb25zdCB3czogWExTWC5Xb3JrU2hlZXQgPSB3Yi5TaGVldHNbd3NuYW1lXTtcclxuICAgICAgICB0aGlzLmRhdGEucHVzaChYTFNYLnV0aWxzLnNoZWV0X3RvX2pzb24od3MsIHtoZWFkZXI6IDEsIGJsYW5rcm93czogZmFsc2UsIGRhdGVORjogJ01NL2RkL3l5eXknfSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoICYmIHRoaXMuZGF0YVswXS5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGVhZGVycyh0aGlzLmRhdGFbMF1bMF0pO1xyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IHRoaXMuZGF0YVswXS5zbGljZSgxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzWzBdIGFzIGFueTtcclxuICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVIZWFkZXJzKGRhdGEpe1xyXG4gICAgZGF0YS5mb3JFYWNoKGhlYWRlciA9PiB7XHJcbiAgICAgIGlmKGhlYWRlci50b0xvd2VyQ2FzZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdmFsdWUgPSBoZWFkZXIudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IG1hdGNoZWRDb2x1bW4gPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5EaXNwbGF5TmFtZS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZSk7XHJcbiAgICAgIGlmIChtYXRjaGVkQ29sdW1uLmxlbmd0aCkge1xyXG4gICAgICAgIG1hdGNoZWRDb2x1bW5bMF0uTWF0Y2hlZENvbHVtbiA9IGhlYWRlcjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGVtcCA9IHtcclxuICAgICAgICBkaXNwbGF5OiBoZWFkZXIsXHJcbiAgICAgICAgbWF0Y2hlZENvbHVtbjogbWF0Y2hlZENvbHVtbi5sZW5ndGggPyBtYXRjaGVkQ29sdW1uWzBdLlByb3BlcnR5SWQgOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuaGVhZGVycy5wdXNoKHRlbXApO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBoZWFkZXIpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uID09PSBoZWFkZXIuZGlzcGxheSk7XHJcbiAgICBpZiAocHJldmlvdXNTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgcHJldmlvdXNTZWxlY3RlZFswXS5NYXRjaGVkQ29sdW1uID0gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICgkZXZlbnQpIHtcclxuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUHJvcGVydHlJZCA9PT0gJGV2ZW50KVswXTtcclxuICAgICAgY29uZmlnLk1hdGNoZWRDb2x1bW4gPSBoZWFkZXIuZGlzcGxheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2FibGVTYXZlQnRuKCkge1xyXG4gICAgY29uc3QgcmVxdWlyZWROb3RNYXRjaGVkID0gdGhpcy5jb25maWd1cmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW0uUmVxdWlyZWQgJiYgIWl0ZW0uTWF0Y2hlZENvbHVtbikubGVuZ3RoO1xyXG4gICAgaWYgKHJlcXVpcmVkTm90TWF0Y2hlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IG1hdGNoZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZmlsdGVyKGl0ZW0gPT4gaXRlbS5NYXRjaGVkQ29sdW1uICE9PSBudWxsKS5sZW5ndGg7XHJcbiAgICAvKmlmIChtYXRjaGVkICE9PSB0aGlzLmhlYWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbChjb25maWcpIHtcclxuICAgIHJldHVybiBjb25maWcuRGlzcGxheU5hbWU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8Y21hY3MtbW9kYWxcclxuICBbKHZpc2libGUpXT1cInZpc2libGVcIlxyXG4gIFt0aXRsZV09XCJtb2RhbFRpdGxlXCJcclxuICBtb2RhbFR5cGU9XCJoZWxwZnVsVGlwc1wiXHJcbiAgY2xhc3M9XCJjbWFjcy1kYXRhLWxvYWRlci1tb2RhbFwiXHJcbiAgW3dpZHRoXT1cIndpZHRoXCJcclxuICBbdXNlQ21hY3NEZWZhdWx0U2l6ZXNdPVwiZmFsc2VcIlxyXG4gIFt6SW5kZXhdPVwiMTAwMDBcIlxyXG4gIFtjbWFjc1N0eWxlXT1cImNtYWNzU3R5bGVcIlxyXG4gIFtmb290ZXJdPVwibW9kYWxGb290ZXJcIlxyXG4gICh2aXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgY21hY3MtbW9kYWwtaGVscGZ1bC1jZW50ZXItcGFuZWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY21hY3MteGxzeC1sb2FkZXItYm9keSBjbWFjcy1jdXN0b20tc2Nyb2xsYmFyXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cImNtYWNzLXhsc3gtbG9hZGVyLXRhYmxlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggY2xhc3M9XCJjbWFjcy14c2x4LWxvYWRlclwiICpuZ0Zvcj1cImxldCBoZWFkZXIgb2YgaGVhZGVyc1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY21hY3MteGxzeC1sb2FkZXItc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8Y21hY3Mtc2VsZWN0IFsobmdNb2RlbCldPVwiaGVhZGVyLm1hdGNoZWRDb2x1bW5cIiBbYWxsb3dDbGVhcl09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBoZWFkZXIpXCIgW3BsYWNlSG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiBjb25maWd1cmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdJZj1cIiFjb25maWcuUmVxdWlyZWQgJiYgKCFjb25maWcuTWF0Y2hlZENvbHVtbiB8fCBjb25maWcuTWF0Y2hlZENvbHVtbiA9PT0gaGVhZGVyLmRpc3BsYXkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjb25maWcuUHJvcGVydHlJZFwiIFtsYWJlbF09XCJnZXRMYWJlbChjb25maWcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9jbWFjcy1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNtYWNzLW9wdGlvbiAqbmdJZj1cImNvbmZpZy5SZXF1aXJlZCAmJiAoIWNvbmZpZy5NYXRjaGVkQ29sdW1uIHx8IGNvbmZpZy5NYXRjaGVkQ29sdW1uID09PSBoZWFkZXIuZGlzcGxheSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImNvbmZpZy5Qcm9wZXJ0eUlkXCIgW2xhYmVsXT1cImdldExhYmVsKGNvbmZpZylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7Z2V0TGFiZWwoY29uZmlnKX19IDxzcGFuIHN0eWxlPVwiY29sb3I6ICNGNjUwM0NcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY21hY3Mtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvY21hY3Mtc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiBoZWFkZXJzXCIgY2xhc3M9XCJjbWFjcy14bHN4LWxvYWRlci1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7e2hlYWRlci5kaXNwbGF5fX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXRhWzBdXCI+XHJcbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3dcIj57e2NlbGx9fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbWFjcy1tb2RhbC1oZWxwZnVsLXJpZ2h0LXBhbmVsPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJpbmZvVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9jbWFjcy1tb2RhbD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjbW9kYWxGb290ZXI+XHJcbiAgPGJ1dHRvbiBjbWFjcy1idXR0b24gdHlwZT1cImRlZmF1bHRcIiBnaG9zdCBzdHlsZT1cImZsb2F0OiBsZWZ0O1wiIChjbGljayk9XCJoYW5kbGVDYW5jZWwoKVwiPnt7Y2FuY2VsQnRuTGFiZWx9fTwvYnV0dG9uPlxyXG4gIDxidXR0b24gY21hY3MtYnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgW2Rpc2FibGVkXT1cImRpc2FibGVTYXZlQnRuKClcIiAoY2xpY2spPVwic2F2ZUNvbmZpZygpXCI+XHJcbiAgICA8c3Bhbj57e3NhdmVCdG5MYWJlbH19PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=